/* Vorbește — antrenor zilnic de engleză vorbită
   Fără server, fără conturi: progresul stă în browser și se mută între dispozitive cu un cod. */
(function(){
'use strict';

// ---------- utilitare ----------
var $ = function(s, el){ return (el||document).querySelector(s); };
var $$ = function(s, el){ return Array.prototype.slice.call((el||document).querySelectorAll(s)); };
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function today(){ var d=new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset()*60000)/86400000); }
function dayKey(n){ var d=new Date(n*86400000); return d.toISOString().slice(0,10); }
function toast(msg){ var t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(function(){ t.classList.remove('show'); }, 2400); }
var ICON = {
  play:'<svg viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  slow:'<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M10 2h4"/></svg>',
  mic:'<svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM19 11a7 7 0 0 1-14 0M12 18v3"/></svg>',
  stop:'<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"/></svg>',
  next:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
};

// ---------- stare salvată ----------
var KEY = 'vorbeste.v1';
var DEFAULTS = {
  v:1,
  settings:{ accent:'en-GB', rate:1, newPerDay:5, mic:true, voice:'', topics:{zi:true,calatorii:true,medical:true}, theme:'auto' },
  cards:{},        // id -> {ivl, due, reps, lapses, last}
  focusUnit:'',
  unitRuns:{},     // unit id -> nr. sesiuni făcute pe unitate
  days:{},         // 'YYYY-MM-DD' -> {sec, newN, rev, avg, wpm, feel}
  fluency:[],      // [{d, wpm:[a,b,c], words:[..]}]
  sessions:0,
  onboarded:false
};
var S = load();
function load(){
  var raw=null;
  try{ raw = localStorage.getItem(KEY); }catch(e){}
  var st = JSON.parse(JSON.stringify(DEFAULTS));
  if(raw){ try{ var o=JSON.parse(raw); merge(st,o); }catch(e){} }
  return st;
}
function merge(a,b){ for(var k in b){ if(b[k] && typeof b[k]==='object' && !Array.isArray(b[k]) && a[k] && typeof a[k]==='object' && !Array.isArray(a[k])) merge(a[k],b[k]); else a[k]=b[k]; } }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

// ---------- curs ----------
var TOPIC_ORDER = ['zi','calatorii','medical'];
var TOPIC_NAME = {zi:'Zi de zi', calatorii:'Călătorii', medical:'Medical'};
var UNITS=[], CHUNK={};
function buildCourse(){
  var by={}; (window.CONTENT||[]).forEach(function(t){ by[t.topic]=t; });
  UNITS=[]; CHUNK={};
  for(var i=0;i<12;i++) TOPIC_ORDER.forEach(function(k){
    var t=by[k]; if(!t||!t.units[i]) return;
    var u=t.units[i]; u.topic=k; u.idx=i+1;
    u.chunks.forEach(function(c,j){ c.id=u.id+'-'+j; c.unit=u.id; CHUNK[c.id]=c; });
    UNITS.push(u);
  });
}
function activeUnits(){ return UNITS.filter(function(u){ return S.settings.topics[u.topic]!==false; }); }
function unitDone(u){ return u.chunks.every(function(c){ return S.cards[c.id]; }); }
function unitProgress(u){ var n=0; u.chunks.forEach(function(c){ if(S.cards[c.id]) n++; }); return n/u.chunks.length; }
function currentUnit(){
  var f = UNITS.filter(function(u){ return u.id===S.focusUnit; })[0];
  if(f && !unitDone(f)) return f;
  var a=activeUnits();
  for(var i=0;i<a.length;i++) if(!unitDone(a[i])) return a[i];
  return a.length ? a[Math.floor(Math.random()*a.length)] : null;
}

// ---------- repetiție spațiată ----------
// Intervale crescătoare ~x2,3 (1-3-7-16-35-80 zile). Notare după corectitudine și viteză.
var LADDER=[1,3,7,16,35,80,180];
function nextIvl(ivl, skip){ var k=0; for(var i=0;i<LADDER.length;i++){ if(LADDER[i]>ivl){ k++; if(k>skip) return LADDER[i]; } } return Math.round(Math.max(ivl,1)*2.3); }
function newCard(id){ if(!S.cards[id]) S.cards[id]={ivl:0,due:today(),reps:0,lapses:0,last:today()}; return S.cards[id]; }
function gradeCard(id, g){
  var c=newCard(id), t=today();
  if(g===0){ c.lapses++; c.ivl=0; c.due=t; }
  else if(g===1){ c.ivl=Math.max(1, Math.round(c.ivl*1.2)); c.due=t+c.ivl; }
  else { c.ivl=nextIvl(c.ivl, g===3?1:0); c.due=t+c.ivl; }
  c.reps++; c.last=t; save();
}
function dueCards(){ var t=today(); return Object.keys(S.cards).filter(function(id){ return CHUNK[id] && S.cards[id].due<=t; }).sort(function(a,b){ return S.cards[a].due-S.cards[b].due || S.cards[a].ivl-S.cards[b].ivl; }); }
function stage(c){ if(!c) return 'nou'; if(c.ivl<3) return 'invat'; if(c.ivl<16) return 'cons'; return 'stap'; }

// ---------- comparare text ----------
var CONTR={"i'm":"i am","you're":"you are","we're":"we are","they're":"they are","it's":"it is","that's":"that is","there's":"there is","what's":"what is","where's":"where is","how's":"how is","who's":"who is","he's":"he is","she's":"she is","here's":"here is","don't":"do not","doesn't":"does not","didn't":"did not","can't":"cannot","won't":"will not","isn't":"is not","aren't":"are not","wasn't":"was not","weren't":"were not","i'll":"i will","you'll":"you will","we'll":"we will","they'll":"they will","it'll":"it will","he'll":"he will","she'll":"she will","i'd":"i would","you'd":"you would","we'd":"we would","they'd":"they would","he'd":"he would","she'd":"she would","i've":"i have","we've":"we have","you've":"you have","they've":"they have","let's":"let us","couldn't":"could not","shouldn't":"should not","wouldn't":"would not","haven't":"have not","hasn't":"has not","hadn't":"had not","mustn't":"must not","needn't":"need not","what're":"what are","there're":"there are","gonna":"going to","wanna":"want to","okay":"ok","mr":"mister","mrs":"missus","dr":"doctor"};
var NUM={zero:'0',one:'1',two:'2',three:'3',four:'4',five:'5',six:'6',seven:'7',eight:'8',nine:'9',ten:'10',eleven:'11',twelve:'12',thirteen:'13',fourteen:'14',fifteen:'15',sixteen:'16',seventeen:'17',eighteen:'18',nineteen:'19',twenty:'20',thirty:'30',forty:'40',fifty:'50',sixty:'60',seventy:'70',eighty:'80',ninety:'90',hundred:'100'};
function norm(s){
  s=String(s||'').toLowerCase().replace(/[’‘`´]/g,"'").replace(/%/g,' percent').replace(/[^a-z0-9' ]+/g,' ');
  var out=[];
  s.split(/\s+/).forEach(function(w){
    if(!w) return; w=w.replace(/^'+|'+$/g,'');
    var e=CONTR[w]; if(e){ e.split(' ').forEach(function(x){ out.push(x); }); return; }
    w=w.replace(/'s$/,'').replace(/'/g,'');
    if(NUM[w]) w=NUM[w];
    if(w) out.push(w);
  });
  return out;
}
function compare(target, said){
  var T=norm(target), A=norm(said), n=T.length, m=A.length;
  var dp=[]; for(var i=0;i<=n;i++){ dp.push(new Array(m+1).fill(0)); }
  for(i=n-1;i>=0;i--) for(var j=m-1;j>=0;j--) dp[i][j] = T[i]===A[j] ? dp[i+1][j+1]+1 : Math.max(dp[i+1][j], dp[i][j+1]);
  var hit=new Array(n).fill(false); i=0; j=0;
  while(i<n && j<m){ if(T[i]===A[j]){ hit[i]=true; i++; j++; } else if(dp[i+1][j]>=dp[i][j+1]) i++; else j++; }
  var matched=dp[0][0];
  var score = n ? matched/Math.max(n, m*0.85) : 0;
  return { score:Math.min(1,score), words:T, hit:hit };
}
function bestCompare(target, alts){ var best={score:0,words:norm(target),hit:[]}, bestText=''; (alts||[]).forEach(function(a){ var r=compare(target,a); if(r.score>=best.score){ best=r; bestText=a; } }); best.text=bestText; return best; }
function diffHTML(r){ return '<div class="diff">'+r.words.map(function(w,i){ return '<span class="'+(r.hit[i]?'hit':'miss')+'">'+esc(w)+'</span>'; }).join('')+'</div>'; }
function scoreHTML(sc){ var p=Math.round(sc*100), cls=sc>=.85?'good':sc>=.6?'mid':'low'; var w=sc>=.95?'Perfect':sc>=.85?'Foarte bine':sc>=.6?'Aproape':'Mai încearcă'; return '<span class="score '+cls+'">'+w+' · '+p+'%</span>'; }

// ---------- voce: redare ----------
var VOICES=[];
function loadVoices(){ try{ VOICES = speechSynthesis.getVoices().filter(function(v){ return /^en/i.test(v.lang); }); }catch(e){ VOICES=[]; } }
if('speechSynthesis' in window){ loadVoices(); speechSynthesis.onvoiceschanged=loadVoices; }
function pickVoice(){
  if(!VOICES.length) loadVoices();
  if(S.settings.voice){ var v=VOICES.filter(function(x){ return x.name===S.settings.voice; })[0]; if(v) return v; }
  var acc=S.settings.accent.toLowerCase().replace('_','-');
  var same=VOICES.filter(function(v){ return v.lang.toLowerCase().replace('_','-')===acc; });
  var pref=same.filter(function(v){ return /google|natural|neural|premium|enhanced|siri|daniel|serena|libby|sonia|ryan/i.test(v.name); });
  return pref[0]||same[0]||VOICES[0]||null;
}
function speak(text, rate){
  return new Promise(function(res){
    if(!('speechSynthesis' in window)) return res();
    try{
      speechSynthesis.cancel();
      var u=new SpeechSynthesisUtterance(text);
      var v=pickVoice(); if(v){ u.voice=v; u.lang=v.lang; } else u.lang=S.settings.accent;
      u.rate=(rate||1)*S.settings.rate;
      var done=false, fin=function(){ if(!done){ done=true; res(); } };
      u.onend=fin; u.onerror=fin;
      setTimeout(fin, 1500 + text.length*120);
      setTimeout(function(){ speechSynthesis.speak(u); }, 60);
    }catch(e){ res(); }
  });
}

// ---------- voce: recunoaștere ----------
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function micOn(){ return !!SR && S.settings.mic; }
var activeRec=null;
function stopRec(){ if(activeRec){ try{ activeRec.stop(); }catch(e){} } }
// ascultă o frază scurtă; onInterim(text) pentru afișare live
function listenOnce(onInterim){
  return new Promise(function(res){
    if(!SR) return res({alts:[], err:'nesuportat'});
    var r=new SR(); activeRec=r;
    r.lang=S.settings.accent; r.interimResults=true; r.maxAlternatives=4; r.continuous=false;
    var alts=[], interim='', err='';
    r.onresult=function(e){
      interim='';
      for(var i=e.resultIndex;i<e.results.length;i++){
        var res_=e.results[i];
        if(res_.isFinal){ for(var k=0;k<res_.length;k++) alts.push(res_[k].transcript); }
        else interim+=res_[0].transcript;
      }
      if(onInterim) onInterim(interim || alts[0] || '');
    };
    r.onerror=function(e){ err=e.error||'eroare'; };
    r.onend=function(){ activeRec=null; if(!alts.length && interim) alts.push(interim); res({alts:alts, err:err}); };
    try{ r.start(); }catch(e){ activeRec=null; res({alts:[], err:'start'}); }
  });
}
// ascultare continuă pentru vorbire liberă; repornește singură până la stop()
function listenLong(onText){
  var finals='', interim='', stopped=false, r=null;
  function start(){
    if(stopped || !SR) return;
    r=new SR(); activeRec=r; r.lang=S.settings.accent; r.interimResults=true; r.continuous=true;
    var base=finals;
    r.onresult=function(e){
      var f='', it='';
      for(var i=0;i<e.results.length;i++){ if(e.results[i].isFinal) f+=' '+e.results[i][0].transcript; else it+=' '+e.results[i][0].transcript; }
      finals=(base+' '+f).trim(); interim=it;
      onText((finals+' '+interim).trim());
    };
    r.onerror=function(e){ if(e.error==='not-allowed'||e.error==='service-not-allowed'){ stopped=true; toast('Microfonul nu are permisiune.'); } };
    r.onend=function(){ if(interim){ finals=(finals+' '+interim).trim(); interim=''; } if(!stopped) setTimeout(start, 120); };
    try{ r.start(); }catch(e){}
  }
  start();
  return { stop:function(){ stopped=true; try{ r && r.stop(); }catch(e){} return (finals+' '+interim).trim(); } };
}

// ---------- componentă: microfon cu verificare ----------
// Afișează butonul de microfon; la rezultat cheamă cb({score, r, alts, think})
function micBlock(host, target, cb, opts){
  opts=opts||{};
  var shownAt=Date.now();
  if(!micOn()){
    host.innerHTML='<div class="stack"><p class="muted small center">Spune fraza cu voce tare, apoi verifică.</p><button class="btn brand block" data-x="show">'+ICON.eye+' '+(opts.showLabel||'Arată răspunsul')+'</button></div>';
    $('[data-x=show]',host).onclick=function(){ cb({score:null, think:(Date.now()-shownAt)/1000}); };
    return;
  }
  host.innerHTML='<div class="mic-wrap"><button class="mic" aria-label="Vorbește">'+ICON.mic+'</button><div class="live">'+esc(opts.hint||'Apasă și vorbește')+'</div>'+
    '<button class="btn ghost sm" data-x="skip">'+(opts.skipLabel||'Nu știu, arată-mi')+'</button></div>';
  var btn=$('.mic',host), live=$('.live',host), busy=false;
  btn.onclick=function(){
    if(busy){ stopRec(); return; }
    var think=(Date.now()-shownAt)/1000;
    busy=true; btn.classList.add('listening'); live.textContent='Te ascult...';
    listenOnce(function(t){ live.textContent=t; }).then(function(o){
      busy=false; btn.classList.remove('listening');
      if(o.err==='not-allowed'||o.err==='service-not-allowed'){ live.textContent='Permite accesul la microfon din browser.'; return; }
      if(!o.alts.length){ live.textContent='Nu am auzit nimic. Mai încearcă.'; return; }
      var r=bestCompare(target, o.alts);
      cb({score:r.score, r:r, alts:o.alts, think:think});
    });
  };
  $('[data-x=skip]',host).onclick=function(){ stopRec(); cb({score:0, skipped:true, think:(Date.now()-shownAt)/1000}); };
}

// ---------- navigare ----------
var VIEW='azi';
function go(v){
  VIEW=v; document.body.classList.remove('in-session'); stopRec();
  $$('.tabbar button').forEach(function(b){ b.classList.toggle('active', b.dataset.view===v); });
  (VIEWS[v]||VIEWS.azi)(); window.scrollTo(0,0); updateChips();
}
$$('.tabbar button').forEach(function(b){ b.onclick=function(){ go(b.dataset.view); }; });
function updateChips(){ var s=streak(); $('#chip-streak').textContent = s+(s===1?' zi':' zile')+' la rând'; }
function streak(){ var t=today(), n=0; if(!S.days[dayKey(t)]) t--; while(S.days[dayKey(t)]){ n++; t--; } return n; }
function applyTheme(){ var th=S.settings.theme; if(th==='auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', th); }

var VIEWS={};

// ---------- ecran: Azi ----------
VIEWS.azi=function(){
  var v=$('#view'), u=currentUnit(), due=dueCards().length, d=S.days[dayKey(today())];
  if(!S.onboarded) return onboarding();
  var plan=planPreview();
  v.innerHTML='<div class="stack-lg fade">'+
    '<div class="card hero stack">'+
      '<div class="eyebrow">'+(d?'Sesiunea de azi e făcută':'Antrenamentul de azi')+' · ~12 min</div>'+
      '<h1>'+(d?'Bravo. Mai faci o rundă?':'Gura se antrenează ca un mușchi.')+'</h1>'+
      '<p class="muted">'+(u?('Unitatea curentă: <b>'+esc(u.title_ro)+'</b> · '+TOPIC_NAME[u.topic]):'Ai parcurs tot programul. Sesiunile repetă acum ce ai învățat.')+'</p>'+
      '<button class="btn primary block" id="start">'+ICON.mic+' '+(d?'Încă o sesiune':'Începe sesiunea')+'</button>'+
    '</div>'+
    '<div class="card flat stack"><h3>Ce faci azi</h3>'+plan.map(function(p){ return '<div class="list-item"><span class="num tag">'+p[0]+'</span><div class="grow"><b>'+p[1]+'</b><div class="muted small">'+p[2]+'</div></div></div>'; }).join('')+'</div>'+
    (micOn()?'':'<div class="card flat note">'+(SR?'Microfonul e oprit din setări. Exersezi cu voce tare și te notezi singur.':'Browserul ăsta nu are recunoaștere vocală. Pentru verificare automată deschide aplicația în Chrome (Android, PC) sau Safari (iPhone). Restul funcționează normal.')+'</div>')+
    '<div class="stats"><div class="stat"><b>'+due+'</b><span>de repetat</span></div><div class="stat"><b>'+Object.keys(S.cards).length+'</b><span>fraze învățate</span></div><div class="stat"><b>'+streak()+'</b><span>zile la rând</span></div></div>'+
  '</div>';
  $('#start').onclick=startSession;
};
function planPreview(){
  var due=Math.min(dueCards().length,30), n=S.sessions%2===0;
  return [
    ['1','Încălzire','Repeți după vorbitor replicile dialogului, întâi lent, apoi normal.'],
    ['2','Recapitulare vorbită', due? due+' fraze: vezi româna, spui engleza cât mai repede.' : 'Nimic scadent azi. Trecem direct la fraze noi.'],
    ['3','Fraze noi','Câte '+S.settings.newPerDay+' fraze-bloc. Asculți, repeți, le spui singur.'],
    ['4','Construiește fraza','Același tipar, alte cuvinte. Spui fraza întreagă, repede.'],
    ['5','Pronunție','Două perechi de sunete care le dau bătăi de cap românilor.'],
    ['6', n?'Vorbire liberă 90/60/45':'Joc de rol', n?'Același subiect de trei ori, cu tot mai puțin timp.':'Tu ești personajul B dintr-un dialog real.'],
    ['7','Fixare','Spui încă o dată frazele noi de azi.']
  ];
}
function onboarding(){
  var v=$('#view');
  v.innerHTML='<div class="stack-lg fade"><div class="card hero stack"><div class="eyebrow">Bun venit</div><h1>Înțelegi engleza. Acum o vorbim.</h1>'+
  '<p class="muted">Dacă înțelegi tot și vorbești greu, nu-ți lipsesc cuvintele. Îți lipsește viteza de a le scoate. Aplicația antrenează exact asta, 12 minute pe zi.</p></div>'+
  '<div class="card flat stack"><h3>Cum lucrăm</h3>'+
  '<div class="list-item"><b>1.</b><div class="grow">Înveți fraze întregi, nu cuvinte izolate. Vorbitorii nativi lipesc fraze gata făcute, nu construiesc fiecare propoziție de la zero.</div></div>'+
  '<div class="list-item"><b>2.</b><div class="grow">Totul se spune cu voce tare. Microfonul îți arată ce cuvinte au ieșit bine și ce lipsește.</div></div>'+
  '<div class="list-item"><b>3.</b><div class="grow">Frazele revin la 1, 3, 7, 16, 35 și 80 de zile. Dacă răspunzi greu, revin mai repede.</div></div>'+
  '<div class="list-item"><b>4.</b><div class="grow">Programul alternează viața de zi cu zi, călătoriile și limbajul medical de prim ajutor, de la ușor la greu.</div></div></div>'+
  '<div class="card flat stack"><h3>Test de microfon</h3><p class="muted small">Spune: <b>Nice to meet you.</b></p><div id="mt"></div></div>'+
  '<button class="btn primary block" id="ok">Am înțeles, încep</button></div>';
  speak('Nice to meet you.');
  micBlock($('#mt'),'Nice to meet you.',function(o){
    $('#mt').innerHTML = o.score==null ? '<p class="small">Ok. Te vei nota singur la fiecare frază.</p>' : '<div class="stack">'+scoreHTML(o.score)+diffHTML(o.r)+'<p class="muted small">Am auzit: '+esc(o.r.text||'—')+'</p></div>';
  },{skipLabel:'Sari peste'});
  $('#ok').onclick=function(){ S.onboarded=true; save(); go('azi'); };
}

// ---------- sesiunea ----------
var SESS=null;
function pick(arr, n){ return arr && arr.length ? arr[n % arr.length] : null; }
function startSession(){
  var u=currentUnit(); if(!u){ toast('Activează cel puțin un domeniu în Progres > Setări.'); return; }
  var runs=S.unitRuns[u.id]||0;
  var due=dueCards();
  var newN = due.length>40 ? 0 : S.settings.newPerDay;
  var fresh=u.chunks.filter(function(c){ return !S.cards[c.id]; }).slice(0,newN);
  var dlg=pick(u.dialogues, runs), pat=pick(u.patterns, runs), pr=pick(u.prompts, runs);
  var pron=window.PRONUNTIE||[];
  var steps=[];
  if(dlg) steps.push({k:'warm', t:'Încălzire', items:dlg.lines.slice(0,4)});
  if(due.length) steps.push({k:'review', t:'Recapitulare vorbită', items:shuffle(due.slice(0,30)), again:{}});
  if(fresh.length) steps.push({k:'learn', t:'Fraze noi', items:fresh});
  if(pat) steps.push({k:'drill', t:'Construiește fraza', pat:pat, items:shuffle(pat.fills).slice(0,6)});
  if(pron.length) steps.push({k:'pron', t:'Pronunție', items:[pron[(S.sessions*2)%pron.length], pron[(S.sessions*2+1)%pron.length]]});
  if(S.sessions%2===0 && pr) steps.push({k:'free', t:'Vorbire liberă 90/60/45', pr:pr, items:[0]});
  else if(dlg) steps.push({k:'role', t:'Joc de rol', dlg:dlg, items:dlg.lines});
  if(fresh.length) steps.push({k:'fix', t:'Fixare', items:shuffle(fresh)});
  SESS={u:u, steps:steps, si:0, ii:0, t0:Date.now(), scores:[], rev:0, newN:fresh.length, wpm:null, tok:0};
  document.body.classList.add('in-session');
  renderStep();
}
function sessHead(){
  var st=SESS.steps[SESS.si];
  var tot=SESS.steps.length, frac=(SESS.si + SESS.ii/Math.max(1,st.items.length))/tot;
  var el=Math.round((Date.now()-SESS.t0)/60000);
  return '<div class="s-head"><div class="s-meta"><span>Pasul '+(SESS.si+1)+' din '+tot+' · '+esc(st.t)+'</span><span>'+el+' min <button class="x" id="quit">Ieși</button></span></div><div class="bar"><i style="width:'+Math.round(frac*100)+'%"></i></div></div>';
}
function nextItem(){ SESS.ii++; var st=SESS.steps[SESS.si]; if(SESS.ii>=st.items.length){ SESS.si++; SESS.ii=0; } if(SESS.si>=SESS.steps.length) return finish(); renderStep(); }
function renderStep(){
  stopRec(); try{ speechSynthesis.cancel(); }catch(e){}
  var st=SESS.steps[SESS.si]; SESS.tok++;
  var v=$('#view');
  v.innerHTML=sessHead()+'<div id="stage" class="stack fade"></div>';
  $('#quit').onclick=function(){ if(confirm('Ieși din sesiune? Ce ai repetat până acum rămâne salvat.')){ SESS=null; go('azi'); } };
  STEP[st.k](st, $('#stage'), SESS.tok);
  window.scrollTo(0,0);
}
function alive(tok){ return SESS && SESS.tok===tok; }
function playBtns(text){ return '<div class="row"><button class="btn sm" data-p="1">'+ICON.play+' Ascultă</button><button class="btn sm" data-p=".7">'+ICON.slow+' Lent</button></div>'; }
function bindPlay(host, text){ $$('[data-p]',host).forEach(function(b){ b.onclick=function(){ speak(text, parseFloat(b.dataset.p)); }; }); }
function result(host, o, target, extra){
  var h='<div class="reveal stack">';
  h+='<div class="prompt-en">'+esc(target)+'</div>';
  if(o.score!=null && !o.skipped){ h+='<div>'+scoreHTML(o.score)+'</div>'+diffHTML(o.r)+'<p class="muted small">Am auzit: '+esc(o.r.text)+'</p>'; SESS.scores.push(o.score); }
  h+=(extra||'')+'</div>';
  host.insertAdjacentHTML('beforeend', h);
}

var STEP={};

// 1. încălzire: shadowing pe replicile dialogului (0,8x apoi 1x)
STEP.warm=function(st, el, tok){
  var line=st.items[SESS.ii];
  el.innerHTML='<div class="card stack"><div class="eyebrow">Ascultă și repetă imediat, cu aceeași melodie</div>'+
    '<div class="prompt-en">'+esc(line.en)+'</div><div class="muted">'+esc(line.ro)+'</div>'+playBtns(line.en)+'<div id="m"></div></div>'+
    '<button class="btn block" id="nx">Mai departe '+ICON.next+'</button>';
  bindPlay(el, line.en);
  speak(line.en, .8).then(function(){ if(alive(tok)) return new Promise(function(r){ setTimeout(r,500); }); }).then(function(){ if(alive(tok)) speak(line.en, 1); });
  if(micOn()) micBlock($('#m'), line.en, function(o){ if(o.skipped) return nextItem(); $('#m').innerHTML='<div class="stack">'+scoreHTML(o.score)+diffHTML(o.r)+'</div>'; SESS.scores.push(o.score); }, {hint:'Repetă după vorbitor', skipLabel:'Sari peste'});
  $('#nx').onclick=nextItem;
};

// 2. recapitulare: RO -> EN spus cu voce tare, notare după corectitudine + viteză
function gradeButtons(sugg){
  var g=[['0','Din nou','nu am știut'],['1','Greu','am ezitat'],['2','Bine','corect'],['3','Ușor','instant']];
  return '<div class="grades">'+g.map(function(x){ return '<button class="btn g'+x[0]+(String(sugg)===x[0]?' sugg':'')+'" data-g="'+x[0]+'">'+x[1]+'<small>'+x[2]+'</small></button>'; }).join('')+'</div>';
}
function suggest(o){
  if(o.skipped) return 0;
  if(o.score==null) return o.think<=3?2:1;
  if(o.score<.6) return 0;
  if(o.score<.85 || o.think>8) return 1;
  if(o.score>=.95 && o.think<=2) return 3;
  return 2;
}
function recallCard(st, el, tok, onGrade){
  var id=st.items[SESS.ii], c=CHUNK[id];
  el.innerHTML='<div class="card stack"><div class="eyebrow">Spune în engleză, cât mai repede</div>'+
    '<div class="prompt-ro">'+esc(c.ro)+'</div><div class="timer"><i id="tm"></i></div><div id="m"></div></div>';
  var tm=$('#tm'); tm.style.transition='width 8s linear'; requestAnimationFrame(function(){ requestAnimationFrame(function(){ tm.style.width='0%'; }); });
  micBlock($('#m'), c.en, function(o){
    var host=$('.card',el); $('#m').remove(); $('.timer',el).remove();
    var g=suggest(o);
    result(host, o, c.en, (c.note?'<div class="note">'+esc(c.note)+'</div>':'')+playBtns(c.en)+'<p class="muted small">Cât de repede a venit? '+(o.think!=null?'Ai început după '+o.think.toFixed(1)+' s.':'')+'</p>'+gradeButtons(g));
    bindPlay(host, c.en); speak(c.en);
    $$('[data-g]',host).forEach(function(b){ b.onclick=function(){ onGrade(id, +b.dataset.g); }; });
  });
}
STEP.review=function(st, el, tok){
  recallCard(st, el, tok, function(id, g){
    gradeCard(id, g); SESS.rev++;
    if(g===0 && (st.again[id]||0)<2){ st.again[id]=(st.again[id]||0)+1; st.items.push(id); }
    nextItem();
  });
};

// 3. fraze noi: ascultă (lent + normal), repetă, apoi încearcă din memorie
STEP.learn=function(st, el, tok){
  var c=st.items[SESS.ii], tries=0;
  el.innerHTML='<div class="card stack"><div class="eyebrow">Frază nouă '+(SESS.ii+1)+' din '+st.items.length+'</div>'+
    '<div class="prompt-en">'+esc(c.en)+'</div><div class="muted">'+esc(c.ro)+'</div>'+(c.note?'<div class="note">'+esc(c.note)+'</div>':'')+
    playBtns(c.en)+'<p class="small"><b>Repetă de 3 ori</b>, ca și cum ai spune-o cuiva. <span id="tr" class="muted"></span></p><div id="m"></div></div>'+
    '<button class="btn block" id="nx">Am reținut '+ICON.next+'</button>';
  bindPlay(el, c.en);
  speak(c.en,.8).then(function(){ return new Promise(function(r){ setTimeout(r,400); }); }).then(function(){ if(alive(tok)) speak(c.en,1); });
  newCard(c.id); save();
  function mic(){
    if(!micOn()){ $('#m').innerHTML='<p class="muted small">Spune fraza de 3 ori cu voce tare, apoi apasă Am reținut.</p>'; return; }
    micBlock($('#m'), c.en, function(o){
      tries++; if(!alive(tok)||!$('#tr')) return; $('#tr').textContent='Încercarea '+tries+' din 3';
      if(o.score==null||o.skipped){ return; }
      SESS.scores.push(o.score);
      $('#m').innerHTML='<div class="stack">'+scoreHTML(o.score)+diffHTML(o.r)+'<button class="btn sm" id="again">'+ICON.mic+' Încă o dată</button></div>';
      $('#again').onclick=mic;
    }, {hint:'Repetă fraza', skipLabel:'Am repetat în gând'});
  }
  mic();
  $('#nx').onclick=nextItem;
};

// 4. tipare: RO complet -> EN complet
STEP.drill=function(st, el, tok){
  var f=st.items[SESS.ii], p=st.pat;
  var en=p.frame.replace(/_{2,}/, f.en), ro=p.ro.replace(/_{2,}/, f.ro);
  el.innerHTML='<div class="card stack"><div class="eyebrow">Tiparul</div><div class="row between"><b style="font-size:19px">'+esc(p.frame)+'</b><span class="muted small">'+esc(p.ro)+'</span></div></div>'+
    '<div class="card stack"><div class="eyebrow">Spune fraza întreagă ('+(SESS.ii+1)+'/'+st.items.length+')</div><div class="prompt-ro">'+esc(ro)+'</div><div id="m"></div></div>';
  if(SESS.ii===0) speak(p.frame.replace(/_{2,}/,'...'));
  micBlock($('#m'), en, function(o){
    var host=$$('.card',el)[1]; $('#m').remove();
    result(host, o, en, playBtns(en)+'<button class="btn primary block" id="nx">Următoarea '+ICON.next+'</button>');
    bindPlay(host, en); speak(en); $('#nx').onclick=nextItem;
  });
};

// 5. pronunție
STEP.pron=function(st, el, tok){
  var p=st.items[SESS.ii];
  var words=p.words.slice(0,3);
  el.innerHTML='<div class="card stack"><div class="eyebrow">Sunetul</div><h2>'+esc(p.sound)+'</h2><p>'+esc(p.tip_ro)+'</p></div>'+
    '<div class="card stack" id="pw">'+words.map(function(w,i){ return '<div class="list-item"><div class="grow"><b style="font-size:19px">'+esc(w)+'</b><div class="muted small" id="ph'+i+'"></div></div><button class="icon-btn" data-say="'+esc(w.replace(/\//g,','))+'">'+ICON.play+'</button>'+(micOn()?'<button class="icon-btn" data-rec="'+i+'">'+ICON.mic+'</button>':'')+'</div>'; }).join('')+
    '<p class="muted small">Ascultă perechea, apoi spune-o tu. Recunoașterea vocală ghicește cuvinte, deci ia rezultatul ca pe un indiciu. Reperul e vocea din aplicație.</p></div>'+
    '<button class="btn primary block" id="nx">Mai departe '+ICON.next+'</button>';
  $$('[data-say]',el).forEach(function(b){ b.onclick=function(){ speak(b.dataset.say, .8); }; });
  $$('[data-rec]',el).forEach(function(b){ b.onclick=function(){
    var i=+b.dataset.rec, out=$('#ph'+i); b.style.background='var(--bad-soft)'; out.textContent='Te ascult...';
    listenOnce(function(t){ out.textContent=t; }).then(function(o){ b.style.background=''; var r=bestCompare(words[i].replace(/\//g,' '), o.alts); out.innerHTML= o.alts.length ? 'Am auzit: <b>'+esc(r.text)+'</b>' : 'Nu am auzit nimic.'; });
  }; });
  speak(words[0].replace(/\//g,','), .8);
  $('#nx').onclick=nextItem;
};

// 6a. vorbire liberă 4/3/2 (90/60/45 s)
STEP.free=function(st, el, tok){
  var pr=st.pr, ROUNDS=[90,60,45], res=[], round=0, rec=null, timer=null;
  function draw(){
    el.innerHTML='<div class="card stack"><div class="eyebrow">Același subiect, de 3 ori, tot mai repede</div>'+
      '<div class="prompt-en">'+esc(pr.q_en)+'</div><div class="muted">'+esc(pr.q_ro)+'</div>'+
      '<div class="helpers">'+(pr.helpers||[]).map(function(h){ return '<span>'+esc(h)+'</span>'; }).join('')+'</div></div>'+
      '<div class="rounds">'+ROUNDS.map(function(s,i){ var r=res[i]; return '<div class="'+(i===round?'cur':'')+'"><span class="small muted">Runda '+(i+1)+' · '+s+'s</span><b>'+(r?r.wpm:'–')+'</b><span class="small muted">cuv/min</span></div>'; }).join('')+'</div>'+
      '<div class="card stack center" id="zone"></div>';
    var z=$('#zone');
    if(round>=ROUNDS.length){
      var best=Math.max.apply(null,res.map(function(r){return r.wpm;}));
      SESS.wpm=best; S.fluency.push({d:today(), wpm:res.map(function(r){return r.wpm;}), words:res.map(function(r){return r.words;})}); save();
      var gain=res[2] && res[0] && res[0].wpm ? Math.round((res[2].wpm/res[0].wpm-1)*100) : null;
      z.innerHTML='<h3>'+(gain!=null && gain>0?'Viteza a crescut cu '+gain+'%':'Gata')+'</h3><p class="muted small">Prima rundă: '+res[0].wpm+' cuv/min. Ultima: '+res[2].wpm+' cuv/min. Pentru conversație fluentă ținta e peste 100.</p>'+
        (res[2].text?'<p class="small" style="text-align:left">Ultima variantă: <i>'+esc(res[2].text)+'</i></p>':'')+'<button class="btn primary block" id="nx">Mai departe '+ICON.next+'</button>';
      $('#nx').onclick=nextItem; return;
    }
    z.innerHTML='<div class="big-timer" id="bt">'+ROUNDS[round]+'</div><p class="muted small">'+(round===0?'Vorbește continuu. Greșelile nu contează, contează să nu te oprești.':'Spune același lucru, în mai puțin timp. Folosește frazele de mai sus.')+'</p>'+
      '<div class="mic-wrap"><button class="mic" id="go">'+ICON.mic+'</button><div class="live" id="lv">'+(micOn()?'Apasă și vorbește':'Apasă și vorbește cu voce tare, cronometrul pornește')+'</div></div>';
    $('#go').onclick=function(){ if(timer){ end(); } else begin(); };
  }
  function begin(){
    var left=ROUNDS[round], t0=Date.now(), txt='';
    $('#go').classList.add('listening'); $('#go').innerHTML=ICON.stop;
    if(micOn()) rec=listenLong(function(t){ txt=t; var lv=$('#lv'); if(lv) lv.textContent=t.split(' ').slice(-14).join(' '); });
    timer=setInterval(function(){
      if(!alive(tok)){ clearInterval(timer); rec&&rec.stop(); return; }
      left=ROUNDS[round]-Math.floor((Date.now()-t0)/1000); var bt=$('#bt'); if(bt) bt.textContent=Math.max(0,left);
      if(left<=0) end();
    },250);
    end=function(){
      clearInterval(timer); timer=null;
      var secs=Math.max(5,(Date.now()-t0)/1000);
      if(rec) txt=rec.stop()||txt;
      var n = micOn() ? norm(txt).length : 0;
      if(!micOn()){ var self=prompt('Câte propoziții ai spus, aproximativ?','5'); n=Math.round((parseInt(self,10)||0)*7); }
      res.push({words:n, wpm:Math.round(n/secs*60), text:txt}); round++; draw();
    };
  }
  var end=function(){};
  speak(pr.q_en);
  draw();
};

// 6b. joc de rol: A vorbește aplicația, B vorbești tu
STEP.role=function(st, el, tok){
  var lines=st.dlg.lines, shown=[];
  for(var i=0;i<SESS.ii;i++) shown.push(lines[i]);
  var cur=lines[SESS.ii];
  el.innerHTML='<div class="card stack"><div class="eyebrow">'+esc(st.dlg.title_ro)+' · tu ești B</div><div class="dlg" id="dl">'+
    shown.map(function(l){ return '<div class="bubble '+(l.who==='A'?'a':'b')+'">'+esc(l.en)+'</div>'; }).join('')+'</div></div><div id="act"></div>';
  var act=$('#act');
  if(cur.who==='A'){
    $('#dl').insertAdjacentHTML('beforeend','<div class="bubble a fade">'+esc(cur.en)+'<div class="ro">'+esc(cur.ro)+'</div></div>');
    act.innerHTML='<div class="row"><button class="btn sm" id="rp">'+ICON.play+' Repetă replica</button></div><button class="btn primary block" id="nx" style="margin-top:10px">Răspund '+ICON.next+'</button>';
    $('#rp').onclick=function(){ speak(cur.en); };
    speak(cur.en).then(function(){ if(alive(tok) && lines[SESS.ii+1] && lines[SESS.ii+1].who==='B') setTimeout(function(){ if(alive(tok)) nextItem(); }, 300); });
    $('#nx').onclick=nextItem;
  } else {
    act.innerHTML='<div class="card stack"><div class="eyebrow">Spune în engleză</div><div class="prompt-ro">'+esc(cur.ro)+'</div><div id="m"></div></div>';
    micBlock($('#m'), cur.en, function(o){
      var host=$('.card',act); $('#m').remove();
      result(host, o, cur.en, playBtns(cur.en)+'<button class="btn primary block" id="nx">Continuă '+ICON.next+'</button>');
      bindPlay(host, cur.en); $('#nx').onclick=nextItem;
    });
  }
};

// 7. fixare: frazele noi încă o dată, din memorie
STEP.fix=function(st, el, tok){
  var fake={items:st.items.map(function(c){ return c.id; })};
  recallCard(fake, el, tok, function(id, g){
    var c=S.cards[id]; if(c){ if(g>=2){ c.ivl=g===3?3:1; c.due=today()+c.ivl; } else { c.ivl=0; c.due=today()+1; } c.reps++; save(); }
    nextItem();
  });
};

function finish(){
  var sec=Math.round((Date.now()-SESS.t0)/1000);
  var avg=SESS.scores.length? Math.round(SESS.scores.reduce(function(a,b){return a+b;},0)/SESS.scores.length*100):null;
  var k=dayKey(today()), d=S.days[k]||{sec:0,newN:0,rev:0,n:0};
  d.sec+=sec; d.newN+=SESS.newN; d.rev+=SESS.rev; d.n=(d.n||0)+1; if(avg!=null) d.avg=avg; if(SESS.wpm) d.wpm=Math.max(d.wpm||0,SESS.wpm);
  S.days[k]=d; S.sessions++; S.unitRuns[SESS.u.id]=(S.unitRuns[SESS.u.id]||0)+1; save();
  var u=SESS.u; SESS=null; document.body.classList.remove('in-session'); updateChips();
  $('#view').innerHTML='<div class="stack-lg fade"><div class="card hero stack center"><div class="eyebrow">Sesiune încheiată</div><h1>'+streak()+(streak()===1?' zi':' zile')+' la rând</h1><p class="muted">'+Math.round(sec/60)+' minute de vorbit. Mâine continuăm de aici.</p></div>'+
    '<div class="stats"><div class="stat"><b>'+d.newN+'</b><span>fraze noi azi</span></div><div class="stat"><b>'+d.rev+'</b><span>repetate</span></div><div class="stat"><b>'+(avg!=null?avg+'%':'–')+'</b><span>pronunție medie</span></div></div>'+
    '<div class="card flat stack"><h3>Cum a fost față de ieri?</h3><div class="row"><button class="btn" data-f="1">Mai greu</button><button class="btn" data-f="2">La fel</button><button class="btn" data-f="3">Mai ușor</button></div></div>'+
    (unitDone(u)?'<div class="card flat note">Ai terminat unitatea <b>'+esc(u.title_ro)+'</b>. Următoarea sesiune începe una nouă.</div>':'')+
    '<button class="btn block" id="home">Înapoi la început</button></div>';
  $$('[data-f]').forEach(function(b){ b.onclick=function(){ d.feel=+b.dataset.f; save(); toast('Notat. Mulțumesc.'); }; });
  $('#home').onclick=function(){ go('azi'); };
}

// ---------- ecran: Program ----------
VIEWS.program=function(){
  var cur=currentUnit(), v=$('#view'), act=activeUnits();
  var total=act.reduce(function(a,u){return a+u.chunks.length;},0), learned=act.reduce(function(a,u){ return a+u.chunks.filter(function(c){return S.cards[c.id];}).length; },0);
  var daysLeft=Math.ceil((total-learned)/Math.max(1,S.settings.newPerDay));
  v.innerHTML='<div class="stack fade"><h1>Programul</h1><p class="muted">'+act.length+' unități, '+total+' fraze. Au mai rămas cam '+daysLeft+' zile de sesiuni la ritmul de '+S.settings.newPerDay+' fraze noi pe zi. Unitățile alternează cele trei domenii, de la ușor la greu.</p>'+
    act.map(function(u,i){ var p=unitProgress(u), cls=u===cur?'cur':(p>=1?'done':'');
      return '<button class="unit '+cls+'" data-u="'+u.id+'"><span class="num">'+(i+1)+'</span><span class="u-body"><span class="row"><span class="tag '+u.topic+'">'+TOPIC_NAME[u.topic]+'</span><span class="muted small">nivel '+u.level+'</span></span><span class="u-title">'+esc(u.title_ro)+'</span><span class="bar ok"><i style="width:'+Math.round(p*100)+'%"></i></span></span></button>'; }).join('')+'</div>';
  $$('[data-u]').forEach(function(b){ b.onclick=function(){ unitView(b.dataset.u); }; });
};
function unitView(id){
  var u=UNITS.filter(function(x){return x.id===id;})[0], v=$('#view');
  v.innerHTML='<div class="stack fade"><button class="x" id="bk">← Program</button><div class="row"><span class="tag '+u.topic+'">'+TOPIC_NAME[u.topic]+'</span><span class="muted small">nivel '+u.level+'</span></div><h1>'+esc(u.title_ro)+'</h1>'+
    '<button class="btn brand block" id="focus">'+(S.focusUnit===u.id?'Unitatea asta e fixată ca următoare':'Lucrează unitatea asta în sesiunile următoare')+'</button>'+
    '<div class="card flat"><h3>Fraze</h3>'+u.chunks.map(function(c){ var s=stage(S.cards[c.id]); return '<div class="list-item"><div class="grow"><b>'+esc(c.en)+'</b><div class="muted small">'+esc(c.ro)+'</div></div><span class="tag">'+({nou:'nouă',invat:'în lucru',cons:'consolidare',stap:'stăpânită'})[s]+'</span><button class="icon-btn" data-say="'+esc(c.en)+'">'+ICON.play+'</button></div>'; }).join('')+'</div>'+
    '<div class="card flat stack"><h3>Tipare</h3>'+u.patterns.map(function(p){ return '<div><b>'+esc(p.frame)+'</b> <span class="muted small">'+esc(p.ro)+'</span><div class="helpers" style="margin-top:6px">'+p.fills.map(function(f){return '<span>'+esc(f.en)+'</span>';}).join('')+'</div></div>'; }).join('')+'</div>'+
    u.dialogues.map(function(d){ return '<div class="card flat stack"><h3>'+esc(d.title_ro)+'</h3><div class="dlg">'+d.lines.map(function(l){ return '<div class="bubble '+(l.who==='A'?'a':'b')+'">'+esc(l.en)+'<div class="ro">'+esc(l.ro)+'</div></div>'; }).join('')+'</div><button class="btn sm" data-dlg="'+esc(d.lines.map(function(l){return l.en;}).join(' '))+'">'+ICON.play+' Ascultă tot dialogul</button></div>'; }).join('')+
  '</div>';
  $('#bk').onclick=function(){ go('program'); };
  $('#focus').onclick=function(){ S.focusUnit=u.id; save(); toast('Următoarea sesiune pornește cu această unitate.'); unitView(id); };
  $$('[data-say]').forEach(function(b){ b.onclick=function(){ speak(b.dataset.say); }; });
  $$('[data-dlg]').forEach(function(b){ b.onclick=function(){ speak(b.dataset.dlg); }; });
  window.scrollTo(0,0);
}

// ---------- ecran: Carduri (exersare liberă, nu modifică programul) ----------
var CARD={mode:'ro', deck:'learned', i:0, flip:false, list:[]};
VIEWS.carduri=function(){
  var v=$('#view');
  var learned=Object.keys(S.cards).filter(function(id){return CHUNK[id];});
  var cu=currentUnit();
  var decks={learned:learned, unit:cu?cu.chunks.map(function(c){return c.id;}):[], hard:learned.filter(function(id){ return S.cards[id].lapses>0 || S.cards[id].ivl<3; })};
  if(!CARD.list.length || CARD.deckSet!==CARD.deck){ CARD.list=shuffle(decks[CARD.deck]); CARD.i=0; CARD.deckSet=CARD.deck; }
  var id=CARD.list[CARD.i % Math.max(1,CARD.list.length)], c=CHUNK[id];
  var front=c?(CARD.mode==='ro'?c.ro:c.en):'', back=c?(CARD.mode==='ro'?c.en:c.ro):'';
  v.innerHTML='<div class="stack fade"><h1>Carduri</h1><p class="muted small">Exersare liberă, oricând. Nu schimbă programul de repetare.</p>'+
    '<div class="seg" id="dk"><button data-d="learned">Învățate ('+decks.learned.length+')</button><button data-d="unit">Unitatea curentă</button><button data-d="hard">Grele ('+decks.hard.length+')</button></div>'+
    '<div class="seg" id="md"><button data-m="ro">Română → Engleză</button><button data-m="en">Engleză → Română</button></div>'+
    (c?'<div class="card flash" id="fc"><div class="muted small">'+(CARD.i%CARD.list.length+1)+' / '+CARD.list.length+' · atinge cardul</div><div class="'+(CARD.mode==='ro'?'prompt-ro':'prompt-en')+'">'+esc(front)+'</div>'+(CARD.flip?'<div class="reveal" style="width:100%"><div class="'+(CARD.mode==='ro'?'prompt-en':'prompt-ro')+'">'+esc(back)+'</div>'+(c.note?'<div class="note" style="margin-top:8px">'+esc(c.note)+'</div>':'')+'</div>':'')+'</div>'+
      '<div class="row"><button class="btn" id="say" style="flex:1">'+ICON.play+' Ascultă</button><button class="btn primary" id="nx" style="flex:2">Următorul '+ICON.next+'</button></div>'
     :'<div class="card flat">Încă nu ai fraze aici. Fă o sesiune în tabul Azi.</div>')+
    '<div class="card flat stack"><h3>Caută</h3><input type="text" id="q" placeholder="cuvânt în engleză sau română"><div id="qr"></div></div></div>';
  $$('#dk button').forEach(function(b){ b.classList.toggle('on', b.dataset.d===CARD.deck); b.onclick=function(){ CARD.deck=b.dataset.d; CARD.flip=false; VIEWS.carduri(); }; });
  $$('#md button').forEach(function(b){ b.classList.toggle('on', b.dataset.m===CARD.mode); b.onclick=function(){ CARD.mode=b.dataset.m; CARD.flip=false; VIEWS.carduri(); }; });
  if(c){
    $('#fc').onclick=function(){ CARD.flip=!CARD.flip; VIEWS.carduri(); if(CARD.flip) speak(c.en); };
    $('#say').onclick=function(){ speak(c.en); };
    $('#nx').onclick=function(){ CARD.i++; CARD.flip=false; VIEWS.carduri(); };
  }
  $('#q').oninput=function(e){
    var q=e.target.value.trim().toLowerCase(); if(q.length<2){ $('#qr').innerHTML=''; return; }
    var hits=Object.keys(CHUNK).map(function(k){return CHUNK[k];}).filter(function(x){ return x.en.toLowerCase().indexOf(q)>=0 || x.ro.toLowerCase().indexOf(q)>=0; }).slice(0,25);
    $('#qr').innerHTML=hits.map(function(x){ return '<div class="list-item"><div class="grow"><b>'+esc(x.en)+'</b><div class="muted small">'+esc(x.ro)+'</div></div><button class="icon-btn" data-say="'+esc(x.en)+'">'+ICON.play+'</button></div>'; }).join('')||'<p class="muted small">Nimic găsit.</p>';
    $$('#qr [data-say]').forEach(function(b){ b.onclick=function(){ speak(b.dataset.say); }; });
  };
};

// ---------- ecran: Pronunție ----------
VIEWS.pronuntie=function(){
  var v=$('#view'), P=window.PRONUNTIE||[];
  v.innerHTML='<div class="stack fade"><h1>Pronunție</h1><p class="muted">Sunetele la care greșesc cel mai des vorbitorii de română. Ascultă perechea lent, apoi spune-o tu. Recunoașterea vocală e doar un indiciu; reperul e vocea din aplicație.</p>'+
    P.map(function(p,pi){ return '<div class="card flat stack"><h3>'+esc(p.sound)+'</h3><p class="small">'+esc(p.tip_ro)+'</p>'+p.words.map(function(w,wi){ var id='p'+pi+'_'+wi; return '<div class="list-item"><div class="grow"><b>'+esc(w)+'</b><div class="muted small" id="'+id+'"></div></div><button class="icon-btn" data-say="'+esc(w.replace(/\//g,','))+'">'+ICON.play+'</button>'+(micOn()?'<button class="icon-btn" data-rec="'+id+'" data-w="'+esc(w)+'">'+ICON.mic+'</button>':'')+'</div>'; }).join('')+'</div>'; }).join('')+'</div>';
  $$('[data-say]').forEach(function(b){ b.onclick=function(){ speak(b.dataset.say,.8); }; });
  $$('[data-rec]').forEach(function(b){ b.onclick=function(){ var out=$('#'+b.dataset.rec); out.textContent='Te ascult...'; b.style.background='var(--bad-soft)';
    listenOnce(function(t){ out.textContent=t; }).then(function(o){ b.style.background=''; out.innerHTML=o.alts.length?'Am auzit: <b>'+esc(o.alts[0])+'</b>':'Nu am auzit nimic.'; }); }; });
};

// ---------- ecran: Progres + setări + sincronizare ----------
VIEWS.progres=function(){
  var v=$('#view'), t=today();
  var ids=Object.keys(S.cards).filter(function(id){return CHUNK[id];});
  var st={invat:0,cons:0,stap:0}; ids.forEach(function(id){ st[stage(S.cards[id])]++; });
  var totalMin=Math.round(Object.keys(S.days).reduce(function(a,k){return a+S.days[k].sec;},0)/60);
  var heat=''; for(var i=55;i>=0;i--){ var d=S.days[dayKey(t-i)]; heat+='<i class="'+(d?(d.sec>480?'l2':'l1'):'')+(i===0?' today':'')+'" title="'+dayKey(t-i)+'"></i>'; }
  var fl=S.fluency.slice(-20);
  var chart='';
  if(fl.length>=2){
    var vals=fl.map(function(f){ return Math.max.apply(null,f.wpm); }), mx=Math.max(120,Math.max.apply(null,vals)), W=600,H=150;
    var pts=vals.map(function(y,i){ return (20+i*(W-40)/(vals.length-1)).toFixed(1)+','+(H-15-(y/mx)*(H-30)).toFixed(1); });
    chart='<svg class="chart" viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none"><line x1="0" x2="'+W+'" y1="'+(H-15-(100/mx)*(H-30))+'" y2="'+(H-15-(100/mx)*(H-30))+'" stroke="var(--line)" stroke-dasharray="4 4"/><polyline fill="none" stroke="var(--accent)" stroke-width="3" points="'+pts.join(' ')+'"/>'+pts.map(function(p){ var a=p.split(','); return '<circle cx="'+a[0]+'" cy="'+a[1]+'" r="4" fill="var(--accent)"/>'; }).join('')+'</svg><p class="muted small">Cuvinte pe minut, cea mai bună rundă din fiecare exercițiu de vorbire liberă. Linia punctată = 100.</p>';
  } else chart='<p class="muted small">Graficul apare după primele două exerciții de vorbire liberă.</p>';
  var voices=VOICES.map(function(x){ return '<option '+(x.name===S.settings.voice?'selected':'')+' value="'+esc(x.name)+'">'+esc(x.name)+' ('+esc(x.lang)+')</option>'; }).join('');
  v.innerHTML='<div class="stack-lg fade"><h1>Progres</h1>'+
    '<div class="stats"><div class="stat"><b>'+streak()+'</b><span>zile la rând</span></div><div class="stat"><b>'+Object.keys(S.days).length+'</b><span>zile de lucru</span></div><div class="stat"><b>'+totalMin+'</b><span>minute vorbite</span></div></div>'+
    '<div class="card flat stack"><h3>Ultimele 8 săptămâni</h3><div class="heat">'+heat+'</div></div>'+
    '<div class="card flat stack"><h3>Frazele tale</h3><div class="stats"><div class="stat"><b>'+st.invat+'</b><span>în lucru</span></div><div class="stat"><b>'+st.cons+'</b><span>în consolidare</span></div><div class="stat"><b>'+st.stap+'</b><span>stăpânite</span></div></div></div>'+
    '<div class="card flat stack"><h3>Viteza de vorbire</h3>'+chart+'</div>'+
    '<div class="card flat stack"><h3>Telefon și calculator</h3><p class="small muted">Progresul stă în browserul fiecărui dispozitiv. Ca să-l muți: pe un dispozitiv apasă Copiază codul, trimite-ți-l (mail, WhatsApp), apoi pe celălalt lipește-l și apasă Încarcă.</p>'+
      '<div class="row"><button class="btn sm" id="exp">Copiază codul</button><button class="btn sm" id="dl">Salvează fișier</button><label class="btn sm">Deschide fișier<input type="file" id="fl" accept=".json,.txt" hidden></label></div>'+
      '<textarea id="code" placeholder="Lipește aici codul de pe celălalt dispozitiv"></textarea><button class="btn brand sm" id="imp">Încarcă progresul</button></div>'+
    '<div class="card flat stack"><h3>Setări</h3>'+
      '<label class="small"><b>Accent</b><select id="acc"><option value="en-GB">Britanic</option><option value="en-US">American</option></select></label>'+
      '<label class="small"><b>Voce</b><select id="vc"><option value="">Automat</option>'+voices+'</select></label>'+
      '<label class="small"><b>Viteza vocii</b><select id="rt"><option value="0.85">Mai lent</option><option value="1">Normal</option><option value="1.1">Mai rapid</option></select></label>'+
      '<label class="small"><b>Fraze noi pe zi</b><select id="np"><option value="3">3 (zile aglomerate)</option><option value="5">5 (recomandat)</option><option value="7">7 (intensiv)</option></select></label>'+
      '<label class="small"><b>Temă</b><select id="th"><option value="auto">Automat</option><option value="light">Luminoasă</option><option value="dark">Întunecată</option></select></label>'+
      '<label class="opt"><input type="checkbox" id="mc" '+(S.settings.mic?'checked':'')+(SR?'':' disabled')+'> Verificare cu microfonul'+(SR?'':' (nu e disponibilă în acest browser)')+'</label>'+
      '<div><b class="small">Domenii active</b>'+TOPIC_ORDER.map(function(k){ return '<label class="opt"><input type="checkbox" data-tp="'+k+'" '+(S.settings.topics[k]!==false?'checked':'')+'> '+TOPIC_NAME[k]+'</label>'; }).join('')+'</div>'+
      '<button class="btn ghost sm" id="test">'+ICON.play+' Testează vocea</button>'+
      '<details><summary class="small">Resetare</summary><p class="small muted" style="margin:8px 0">Șterge tot progresul de pe acest dispozitiv.</p><button class="btn sm" id="rst" style="color:var(--bad)">Șterge progresul</button></details>'+
    '</div></div>';
  $('#acc').value=S.settings.accent; $('#rt').value=String(S.settings.rate); $('#np').value=String(S.settings.newPerDay); $('#th').value=S.settings.theme;
  $('#acc').onchange=function(e){ S.settings.accent=e.target.value; S.settings.voice=''; save(); VIEWS.progres(); };
  $('#vc').onchange=function(e){ S.settings.voice=e.target.value; save(); speak('Hello. This is my voice.'); };
  $('#rt').onchange=function(e){ S.settings.rate=parseFloat(e.target.value); save(); };
  $('#np').onchange=function(e){ S.settings.newPerDay=parseInt(e.target.value,10); save(); };
  $('#th').onchange=function(e){ S.settings.theme=e.target.value; save(); applyTheme(); };
  $('#mc').onchange=function(e){ S.settings.mic=e.target.checked; save(); };
  $$('[data-tp]').forEach(function(b){ b.onchange=function(){ S.settings.topics[b.dataset.tp]=b.checked; save(); }; });
  $('#test').onclick=function(){ speak('Could you say that again, please?'); };
  function code(){ return btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }
  $('#exp').onclick=function(){ var c=code(); $('#code').value=c; try{ navigator.clipboard.writeText(c).then(function(){ toast('Cod copiat.'); },function(){ toast('Selectează și copiază codul din casetă.'); }); }catch(e){ toast('Selectează și copiază codul din casetă.'); } };
  $('#dl').onclick=function(){ var a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'})); a.download='vorbeste-progres-'+dayKey(today())+'.json'; a.click(); };
  $('#fl').onchange=function(e){ var f=e.target.files[0]; if(!f) return; f.text().then(function(t){ importData(t); }); };
  $('#imp').onclick=function(){ var t=$('#code').value.trim(); if(!t) return toast('Lipește întâi codul.'); try{ importData(decodeURIComponent(escape(atob(t)))); }catch(e){ importData(t); } };
  $('#rst').onclick=function(){ if(confirm('Sigur ștergi tot progresul?')){ S=JSON.parse(JSON.stringify(DEFAULTS)); save(); go('azi'); } };
};
// combină progresul: pentru fiecare frază păstrează varianta repetată mai recent
function importData(text){
  var o; try{ o=JSON.parse(text); }catch(e){ return toast('Codul nu e valid.'); }
  if(!o || !o.cards) return toast('Codul nu conține progres.');
  Object.keys(o.cards).forEach(function(id){ var a=S.cards[id], b=o.cards[id]; if(!a || (b.reps>a.reps) || (b.last>a.last)) S.cards[id]=b; });
  Object.keys(o.days||{}).forEach(function(k){ var a=S.days[k], b=o.days[k]; if(!a || b.sec>a.sec) S.days[k]=b; });
  Object.keys(o.unitRuns||{}).forEach(function(k){ S.unitRuns[k]=Math.max(S.unitRuns[k]||0, o.unitRuns[k]); });
  var seen={}; S.fluency=S.fluency.concat(o.fluency||[]).filter(function(f){ var k=f.d+'|'+f.wpm.join(','); if(seen[k]) return false; seen[k]=1; return true; }).sort(function(a,b){return a.d-b.d;});
  S.sessions=Math.max(S.sessions, o.sessions||0); S.onboarded=true;
  save(); toast('Progres combinat cu succes.'); go('progres');
}

// ---------- pornire ----------
buildCourse(); applyTheme(); updateChips(); go('azi');
window.__vorbeste={compare:compare, norm:norm, S:function(){return S;}, units:function(){return UNITS;}};
})();
