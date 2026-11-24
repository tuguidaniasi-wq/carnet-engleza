// Adună toate textele în engleză din aplicație și le scrie în tools/texts.json pentru generarea audio.
// Cheia unui fișier audio = FNV-1a (32 bit, hex) peste "voce|text" în UTF-8. Aceeași funcție e în app.js.
global.window = {};
const path = require('path');
['zi','calatorii','medical','pronuntie'].forEach(f => require(path.join(__dirname,'..','data',f+'.js')));
function fnv(s){ const b=Buffer.from(s,'utf8'); let h=0x811c9dc5; for(const x of b){ h^=x; h=Math.imul(h,0x01000193)>>>0; } return h.toString(16).padStart(8,'0'); }
const A='bf_emma', B='bm_george', out=new Map();
function add(text, voice){ text=String(text).trim(); if(!text) return; const key=fnv(voice+'|'+text); out.set(key,{key,text,voice}); }
for(const t of window.CONTENT) for(const u of t.units){
  u.chunks.forEach(c=>add(c.en,A));
  u.patterns.forEach(p=>{ add(p.frame.replace(/_{2,}/,'...'),A); p.fills.forEach(f=>add(p.frame.replace(/_{2,}/,f.en),A)); });
  u.dialogues.forEach(d=>d.lines.forEach(l=>add(l.en, l.who==='B'?B:A)));
  u.prompts.forEach(p=>add(p.q_en,A));
}
window.PRONUNTIE.forEach(p=>p.words.forEach(w=>add(w.replace(/\//g,','),A)));
['Nice to meet you.','Could you say that again, please?','Hello. This is my voice.'].forEach(t=>add(t,A));
require('fs').writeFileSync(path.join(__dirname,'texts.json'), JSON.stringify([...out.values()],null,0));
console.log(out.size, 'texte');
