import {chromium,webkit} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173','--strictPort'],{stdio:'inherit'});
const base='http://127.0.0.1:4173';
const sizes=[[280,653],[320,568],[360,640],[375,667],[390,844],[844,390],[430,932],[932,430],[600,960],[768,1024],[1024,768],[820,1180],[1180,820],[1280,720],[1366,768],[1440,900],[1920,1080],[1080,1920],[2560,1440],[3440,1440],[3840,2160],[2160,3840]];
const failures=[];
async function check(label,fn){try{await fn()}catch(e){failures.push(label+': '+e.message);console.error('FAIL '+label,e.message)}}
try{
 for(let i=0;i<50;i++){try{if((await fetch(base)).ok)break}catch{}await new Promise(r=>setTimeout(r,200))}
 for(const [name,engine] of [['Chromium',chromium],['WebKit',webkit]]){
 const browser=await engine.launch({headless:true});
 try{for(const [width,height] of sizes){
 const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,hasTouch:width<1100,reducedMotion:'reduce',timezoneId:'Asia/Bangkok'});
 const page=await context.newPage();page.setDefaultTimeout(4500);
 const key=name+' '+width+'x'+height;const errors=[];page.on('pageerror',e=>errors.push(e.message));
 try{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 await check(key+' initial render',async()=>{await page.locator('h1').waitFor({state:'visible'});assert.ok(await page.locator('h1').innerText());assert.equal(await page.locator('.world-journal-trigger').count(),0);assert.equal(await page.locator('.garden-clock').count(),0);assert.equal(await page.locator('html').getAttribute('data-focus'),'on');await page.getByRole('button',{name:'Enter Garden Experience',exact:true}).click();await page.locator('.world-journal-trigger').waitFor({state:'visible'})});
 await check(key+' overflow and header',async()=>{const v=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,nav:[...document.querySelectorAll('.navbar .nav-actions button')].filter(e=>e.getBoundingClientRect().width).map(e=>({l:e.getBoundingClientRect().left,r:e.getBoundingClientRect().right}))}));assert.ok(v.scroll<=v.width+2,JSON.stringify(v));assert.ok(v.nav.every(b=>b.l>=-1&&b.r<=v.width+1),JSON.stringify(v))});
 await check(key+' panels',async()=>{await page.locator('.living-trigger').click();await page.locator('.living-panel').waitFor({state:'visible'});let b=await page.locator('.living-panel').boundingBox();assert.ok(b.x>=-1&&b.x+b.width<=width+1&&b.y>=-1&&b.y+b.height<=height+1,JSON.stringify(b));await page.locator('.world-journal-trigger').click();await page.locator('.world-journal-panel').waitFor({state:'visible'});assert.equal(await page.locator('.living-panel').count(),0);b=await page.locator('.world-journal-panel').boundingBox();assert.ok(b.x>=-1&&b.x+b.width<=width+1&&b.y>=-1&&b.y+b.height<=height+1,JSON.stringify(b));await page.getByRole('button',{name:'Close garden journal'}).click()});
 if([390,844,768,1920,3840].includes(width)){await check(key+' calendar',async()=>{await page.locator('.garden-clock-value').click();await page.locator('#garden-clock-edit input[type=date]').fill('2026-12-25');await page.locator('#garden-clock-edit input[type=time]').fill('12:30');await page.getByRole('button',{name:'Preview sky',exact:true}).click();await page.waitForFunction(()=>document.documentElement.dataset.theme==='light');assert.ok((await page.locator('.garden-clock').innerText()).includes('12:30'));await page.getByRole('button',{name:'Back to now'}).click()});}
 await check(key+' runtime',async()=>{assert.deepEqual(errors,[])});
 console.log('CHECKED '+key);
 }finally{await context.close()}
 }}finally{await browser.close()}
 }
}finally{server.kill()}
if(failures.length){console.error(failures.join('\n'));process.exitCode=1}else console.log('PASS: '+sizes.length*2+' browser/viewport combinations');
