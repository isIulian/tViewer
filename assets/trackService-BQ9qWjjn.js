import{y as c,a5 as d}from"./index-PsDayEUa.js";async function o(){let a=c.getData().tracks,t=c.getData().resources,e=[];for(const r of a){let s=t.find(n=>n.id===r.resourceId);if(s===void 0)continue;let l={id:r.id,title:s.title,status:s.status,lastReadedPart:r.lastReadedPart,lastPart:null};s.parts!==void 0&&s.parts.length>0&&(l.lastPart=s.parts.slice(-1)),e.push(l)}return e}async function i(a){let t=c.getData().tracks;return t=t.filter(e=>e.id===a),t.length===0?null:t[0]}async function u(a){let t=c.getData(),e=t.tracks,r=0;e.map(l=>{const n=l.id;r=Math.max(r,n)});let s={id:r+1,resourceId:a.resourceId,lastReadedPart:a.lastReadedPart};e.push(s),t.tracks=e,c.persistData(t)}async function f(a){let t=await i(a.id);if(t!==null){var e=d(a,t);if(e.length>0){for(const l of e)t[l]=a[l];let r=c.getData(),s=r.tracks;s=s.filter(l=>l.id!==t.id),s.push(t),r.tracks=s,c.persistData(r)}}}async function k(a){let t=c.getData(),e=t.tracks.filter(r=>r.id!==a);t.tracks=e,c.persistData(t)}async function g(a){if(a==null||a.length<=0)return;let t=c.getData(),e=t.tracks.filter(r=>!a.includes(r.id));t.tracks=e,c.persistData(t)}async function D(a){let t=c.getData(),e=t.tracks.filter(r=>r.resourceId!==a);t.tracks=e,c.persistData(t)}const y={getTracks:o,getTrack:i,createTrack:u,updateTrack:f,deleteTrack:k,deleteTracks:g,deleteTracksByResource:D};export{y as t};