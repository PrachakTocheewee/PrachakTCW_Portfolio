import React,{useMemo} from 'react';
import {useGardenClock} from './GardenClock.jsx';
import {festivalsOn} from './festivalCalendar.js';
import './FestivalAtmosphere.css';
const art={water:'💧',krathong:'🪷',lantern:'🏮',bubbles:'○',candle:'🕯',lotus:'🪷',rose:'🌹',eggs:'🥚',flowers:'✿',pumpkin:'🎃',fireworks:'✦',snow:'❄',gifts:'🎁',leaves:'🍁',earth:'🌱',sunrise:'☀',math:'π',stats:'▂▅▇',code:'{ }'};
export function FestivalAtmosphere({theme,paused,saver,focus,maximum}){const {now,preview}=useGardenClock(),events=useMemo(()=>festivalsOn(now),[now]);if(!events.length||focus)return null;const kinds=[...new Set(events.map(e=>e.kind))];const n=saver?2:maximum?12:6;return <div className="festival-inline" aria-label="Special day"><span>{preview?'Preview · ':''}{events.map(e=>e.name).join(' · ')}</span>{!paused&&!saver&&<div className={'festival-scene '+(theme==='dark'?'festival-night':'festival-day')} aria-hidden="true">{Array.from({length:n},(_,i)=>{const kind=kinds[i%kinds.length];return <i key={i} className={'festival-mote festival-'+kind} style={{'--fx':(9+i*73%82)+'%','--fy':(18+i*37%62)+'%','--fd':-i*1.4+'s'}}>{art[kind]}</i>})}</div>}</div>}
