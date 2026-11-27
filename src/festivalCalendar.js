// Selected cultural celebrations, not an official public-holiday calendar.
// Bangkok calendar. Thai lunar dates are explicit, not a full-moon approximation.
// 2026–27: BOT/SET holiday calendars and Lanna calendar; future lunar dates require verification.
export const selectedIds=['01','02','03','06','07','08','09','10','11','13','14','15','17','18','20','22','25','26','27','28','29','30','31','32','33'];
const lunar={2026:{'02':'11-24','03':'11-24','07':'03-03','08':'05-31','09':'07-29'},2027:{'02':'11-13','03':'11-13','07':'02-21','08':'05-20','09':'07-18'}};
const md=(m,d)=>String(m).padStart(2,'0')+'-'+String(d).padStart(2,'0');
function nth(y,m,w,n){return 1+(w-new Date(Date.UTC(y,m-1,1)).getUTCDay()+7)%7+7*(n-1)}
function easter(y){const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),n=h+l-7*m+114;return md(Math.floor(n/31),n%31+1)}
export function festivalsOn(date){const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date).filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)])),y=p.year,key=md(p.month,p.day),out=[];const add=(id,name,kind,match)=>{if(match&&selectedIds.includes(id))out.push({id,name,kind})};
add('01','Songkran','water',p.month===4&&p.day>=13&&p.day<=15);
add('02','Loy Krathong','krathong',lunar[y]?.['02']===key);
add('03','Yi Peng','lantern',lunar[y]?.['03']===key);
add('06',"Children’s Day · Thailand",'bubbles',key===md(1,nth(y,1,6,2)));
add('07','Makha Bucha','candle',lunar[y]?.['07']===key);
add('08','Visakha Bucha','lotus',lunar[y]?.['08']===key);
add('09','Asalha Bucha','candle',lunar[y]?.['09']===key);
add('10',"Valentine’s Day",'rose',key==='02-14');
add('11','Easter','eggs',key===easter(y));
add('13','May Day','flowers',key==='05-01');
add('14','Halloween','pumpkin',key==='10-31');
add('15','Bonfire Night','fireworks',key==='11-05');
add('17','Christmas','snow',key==='12-25');
add('18','Boxing Day','gifts',key==='12-26');
add('20','Thanksgiving','leaves',key===md(11,nth(y,11,4,4)));
add('22','Earth Day','earth',key==='04-22');
add('25',"New Year’s Eve",'fireworks',key==='12-31');
add('26',"New Year’s Day",'sunrise',key==='01-01');
add('27','Pi Day','math',key==='03-14');
add('28','International Day of Mathematics','math',key==='03-14');
add('29','World Statistics Day','stats',key==='10-20'&&y>=2010&&(y-2010)%5===0);
const ordinal=Math.round((Date.UTC(y,p.month-1,p.day)-Date.UTC(y,0,1))/86400000)+1;
add('30',"Programmer’s Day",'code',ordinal===256);
// 31 awaits a custom date. 32–33 are evaluated separately using actual time.
return out}

// Month/day only; enable once the owner confirms these public celebration dates.
export const personalDates=Object.freeze({birthday:null,websiteAnniversary:null});
export function personalFestivalsOn(realDate,dates=personalDates){const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Bangkok',month:'2-digit',day:'2-digit'}).formatToParts(realDate);const part=t=>parts.find(p=>p.type===t)?.value;const today=part('month')+'-'+part('day');const result=[];if(dates.birthday===today)result.push({id:'32',name:'Birthday Garden',kind:'birthday',realOnly:true});if(dates.websiteAnniversary===today)result.push({id:'33',name:'Portfolio Anniversary',kind:'anniversary',realOnly:true});return result}
