const B=document.body,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const D=DATA,mk=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.textContent=h;return e};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
$$('[data-f]').forEach(e=>e.textContent=D[e.dataset.f]);
if(D.photo){const im=mk('img','av');im.src=D.photo;im.alt=D.name;im.style.cssText='border-radius:50%;aspect-ratio:1;object-fit:cover';$('.rg .av').replaceWith(im)}
const rvio='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');rvio.unobserve(e.target)}}),{threshold:.12}):null;
const rev=e=>{if(rvio){e.classList.add('rv');rvio.observe(e)}};
const SV={skills:D.skills.length,repos:D.projects.length,contributions:0,certs:D.certs.length};let sv=false;
function cnt(k){const e=$('[data-s="'+k+'"]');if(!e||!sv)return;const t=SV[k],s0=+e.textContent||0,t0=performance.now();(function f(n){const p=Math.min((n-t0)/900,1);e.textContent=Math.round(s0+(t-s0)*p);if(p<1)requestAnimationFrame(f)})(t0)}
function setS(k,v){SV[k]=v;cnt(k)}
if('IntersectionObserver' in window)new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!sv){sv=true;Object.keys(SV).forEach(cnt)}}),{threshold:.4}).observe($('#stats'));else{sv=true;Object.keys(SV).forEach(cnt)}
const av=$('.rg .av'),pp=$('#pp');
addEventListener('mousemove',e=>{if(!pp)return;const r=av.getBoundingClientRect(),dx=Math.max(-1,Math.min(1,(e.clientX-r.left-r.width/2)/400)),dy=Math.max(-1,Math.min(1,(e.clientY-r.top-r.height/2)/400));pp.style.transform='translate('+dx*3.5+'px,'+dy*3+'px)'});
av.onclick=()=>{av.classList.remove('jump');void av.getBoundingClientRect();av.classList.add('jump');setTimeout(()=>av.classList.remove('jump'),650)};
const door=$('#door'),gr='Hi, I’m '+D.name;let gi=0,tid;$('#spe').textContent=D.emoji;
function ty(){clearTimeout(tid);$('#spt').textContent=gr.slice(0,gi++);if(gi<=gr.length)tid=setTimeout(ty,35)}ty();
function thud(){if(!ac)return;const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;o.frequency.setValueAtTime(180,t);o.frequency.exponentialRampToValueAtTime(50,t+.6);g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.7);o.connect(g);g.connect(ac.destination);o.start();o.stop(t+.7)}
const actor=$('#ac'),tm=[];$('#ac span').textContent=D.opener||'🧑‍💻';
const later=(f,t)=>tm.push(setTimeout(f,t)),stop=()=>tm.splice(0).forEach(clearTimeout);
function openDoor(){if(door.classList.contains('o'))return;stop();door.classList.add('o');actor.classList.add('go');try{thud()}catch(e){}later(()=>door.classList.add('gone'),1100)}
function intro(){stop();gi=0;ty();door.classList.remove('gone');actor.className='';void door.offsetWidth;door.classList.remove('o');
 later(()=>actor.classList.add('walk'),100);later(()=>actor.classList.add('tug'),1300);later(openDoor,1900)}
let seen=false;
if('IntersectionObserver' in window)new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!seen){seen=true;intro()}else if(!e.isIntersecting)seen=false}),{threshold:.6}).observe($('#fx'));else intro();
addEventListener('pageshow',e=>{if(e.persisted)intro()});
$('#tg').onclick=()=>{const d=B.dataset.t==='dark';B.dataset.t=d?'light':'dark';$('#tg').textContent=d?'☾':'☀'};
const PAL=[['#b18cff','#ff9ad5'],['#ff5a1f','#ffd400'],['#22c55e','#f59e0b'],['#38bdf8','#a78bfa'],['#ff5d73','#ffc21a']];
function setPal(i){B.style.setProperty('--a',PAL[i][0]);B.style.setProperty('--a2',PAL[i][1]);try{localStorage.setItem('pal',i)}catch(e){}}
PAL.forEach((p,i)=>{const b=mk('button');b.setAttribute('aria-label','Colour theme '+(i+1));b.style.background='linear-gradient(135deg,'+p[0]+','+p[1]+')';b.onclick=()=>setPal(i);$('#pal').append(b)});
$('#pl').onclick=()=>{const o=$('#pal').classList.toggle('o');$('#pl').setAttribute('aria-expanded',o)};
try{const s=localStorage.getItem('pal');if(s!==null)setPal(+s)}catch(e){}
$('#lv').onclick=e=>{const b=e.currentTarget;b.classList.toggle('on');b.textContent=b.classList.contains('on')?'♥':'♡'};
const SM=[['home','home hero welcome'],['about','about me who intro'],['news','news update achievement achieved completed work recent latest'],['skills','skills technology language tools github contribution'],['education','education study university school college'],['certs','certificate course award'],['projects','project work portfolio'],['contact','contact email phone whatsapp telegram linkedin facebook cv resume']];
$('#sq').onkeydown=e=>{if(e.key!=='Enter')return;const q=e.target.value.toLowerCase().trim(),m=q&&SM.find(s=>s[1].includes(q));
 if(m){const s=$('#'+m[0]);s.scrollIntoView();s.classList.add('hl');setTimeout(()=>s.classList.remove('hl'),1700)}};
let ri=0,ci=0,del=false;
(function tp(){const w=D.roles[ri];$('#role').textContent=w.slice(0,ci);
 if(!del&&ci===w.length){del=true;return setTimeout(tp,1200)}
 if(del&&ci===0){del=false;ri=(ri+1)%D.roles.length}
 ci+=del?-1:1;setTimeout(tp,del?40:90)})();
$$('section').forEach(s=>{const w=document.createElement('div');w.className='w '+(s.dataset.bg||'');s.before(w);w.append(s);
 if(s.id==='home')for(let i=0;i<3;i++){const o=document.createElement('i');o.className='blob';o.style.cssText='width:'+(220+i*80)+'px;height:'+(220+i*80)+'px;left:'+i*35+'%;top:'+(10+i*25)+'%;background:var(--a'+(i%2?'2':'')+');animation-delay:-'+i*4+'s';w.prepend(o)}
 if(s.dataset.b){const b=document.createElement('div');b.className='band';
  ['a'].forEach(k=>{const r=document.createElement('div');r.className='rb '+k;const t=document.createElement('div');t.className='tk';
   t.innerHTML=('<span>'+s.dataset.b+' ✦</span>').repeat(24);r.append(t);b.append(r)});w.before(b)}});

const IC={
gmail:'<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="#EA4335"/><path d="M3 7l9 7 9-7" stroke="#fff" stroke-width="2" fill="none"/></svg>',
phone:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#6b7280"/><path d="M8 6h3l1 4-2 1c1 2 2 3 4 4l1-2 4 1v3c0 1-1 2-2 2C10 19 5 14 6 8c0-1 1-2 2-2z" fill="#fff"/></svg>',
github:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>',
linkedin:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0A66C2"/><text x="12" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">in</text></svg>',
facebook:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#1877F2"/><text x="13" y="19" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">f</text></svg>',
whatsapp:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#25D366"/><path d="M8 7c-1 1-.5 3 1 5s3.5 3.5 5.5 3.5c1 0 2-1 2-1.5l-2-1-1 .8c-1-.4-2.5-1.800-3-3l.8-1-1-2z" fill="#fff"/></svg>',
telegram:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#27A7E7"/><path d="M5 12l13-5-2 11-4-3-2 2v-3l6-5-8 4z" fill="#fff"/></svg>'};
[['gmail','Gmail','mailto:'+D.email],['phone','Phone','tel:'+D.phone],['github','GitHub','https://github.com/'+D.github],['linkedin','LinkedIn',D.linkedin],['facebook','Facebook',D.facebook],['whatsapp','WhatsApp','https://wa.me/'+D.whatsapp],['telegram','Telegram','https://t.me/'+D.telegram]].forEach(([k,n,h])=>{
 const a=mk('a','btn');a.href=h;if(h.startsWith('http')){a.target='_blank';a.rel='noopener'}a.innerHTML=IC[k];a.append(n);$('#lk').append(a)});
D.skills.forEach(([n,v])=>{const c=mk('div'),r=mk('div','ring');r.dataset.v=v;r.style.setProperty('--v',v);c.append(r,mk('p','',n));$('#sg').append(c)});
D.education.forEach(([a,b,y])=>{const d=mk('article','card');d.append(mk('h3','',a),mk('p','mut',b+' · '+y));$('#ed').append(d)});
const NW=D.news||[],NI={Achievement:'🏆',Completed:'✅',Learning:'📚'};let nf='All',nm=4;
function showNews(){const box=$('#nw');box.replaceChildren();
 const list=[...NW].sort((a,b)=>new Date(b[0])-new Date(a[0])).filter(n=>nf==='All'||n[3]===nf);
 list.slice(0,nm).forEach((n,i)=>{const [dd,t,x,g,u]=n,c=mk('article','card nw'),dt=new Date(dd),h=mk('h3','',t);
  if(i===0&&nf==='All')h.append(mk('span','nn','NEW'));
  c.append(mk('div','nd',isNaN(dt)?dd:dt.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})),mk('span','nt',(NI[g]||'📰')+' '+g),h,mk('p','mut',x));
  if(u){const a=mk('a','btn','Read more →');a.href=u;a.target='_blank';a.rel='noopener';c.append(a)}
  box.append(c);rev(c)});
 if(list.length>nm){const m=mk('button','','Show more ('+(list.length-nm)+')');m.onclick=()=>{nm+=4;showNews()};box.append(m)}}
['All',...new Set(NW.map(n=>n[3]))].forEach(g=>{const b=mk('button','',g);if(g==='All')b.classList.add('on');
 b.onclick=()=>{nf=g;nm=4;$$('#nf button').forEach(y=>y.classList.toggle('on',y===b));showNews()};$('#nf').append(b)});
showNews();
D.interests.forEach(x=>$('#it').append(mk('span','','♥ '+x)));D.languages.forEach(x=>$('#lg').append(mk('span','','🗣 '+x)));
function showProjects(l){$('#pj').replaceChildren();l.forEach(([n,t,g,u])=>{const d=mk('article','card proj'),a=mk('a','btn','View on GitHub →'),tg=mk('div','tags');
 a.href=u||'https://github.com/'+D.github+'/'+n;a.target='_blank';a.rel='noopener';if(g)tg.append(mk('span','',g));d.append(mk('h3','',n),mk('p','mut',t||'No description yet'),tg,a);$('#pj').append(d);rev(d)});D.projects=l;setS('repos',l.length)}
const dlg=$('#dlg');
D.certs.forEach(([n,img])=>{const b=mk('button','card cb');b.innerHTML='<div class="cw"></div><h3></h3><p class="mut">Click to enlarge</p>';b.querySelector('h3').textContent=n;
 const w=b.querySelector('.cw'),ph=()=>w.replaceChildren(mk('div','cert','🏅'));
 if(img){const im=mk('img','ci');im.loading='lazy';im.src=img;im.alt=n;im.onerror=ph;w.append(im)}else ph();
 b.onclick=()=>{let d;if(img){d=mk('img','cbig');d.src=img;d.alt=n}else d=mk('div','cert',n+' (add your image in data.js)');$('#dc').replaceChildren(d);$('#dt').textContent=n;$('#dd').style.display='none';dlg.showModal()};$('#cg').append(b)});
$('#cx').onclick=()=>dlg.close();
[0,1,2].forEach(i=>{const r=D.tech.filter((_,k)=>k%3===i),m=mk('div','mq'+(i===1?' r':'')),t=mk('div','tk');
 for(let n=0;n<6;n++)r.forEach(x=>{const c=mk('div','chip');c.append(mk('b','',x.replace(/[^A-Za-z#+]/g,'').slice(0,2)),x);t.append(c)});m.append(t);$('#tt').append(m)});
function draw(l,live){const g=$('#gh');g.replaceChildren();let tot=0;const off=new Date(l[0].date+'T00:00:00').getDay();for(let i=0;i<off;i++)g.append(mk('i','f'));
 l.forEach(x=>{const c=mk('i',x.count>=3?'l3':x.count>=1?'l2':'');c.title=x.date+': '+x.count+' contribution(s)';tot+=x.count;g.append(c)});g.scrollLeft=g.scrollWidth;setS('contributions',tot);
 $('#gt').textContent='('+tot+' contributions · @'+D.github+(live?'':' · saved copy')+')'}
function local(){const l=[],t=new Date();for(let i=364;i>=0;i--){const d=new Date(t);d.setDate(t.getDate()-i);const k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');l.push({date:k,count:D.commits[k]||0})}draw(l,false)}
local();
fetch('https://github-contributions-api.jogruber.de/v4/'+D.github+'?y=last').then(r=>r.json()).then(j=>{if(j.contributions&&j.contributions.length)draw(j.contributions,true)}).catch(()=>{});
showProjects(D.projects);
fetch('https://api.github.com/users/'+D.github+'/repos?sort=updated&per_page=12').then(r=>r.json()).then(a=>{const l=Array.isArray(a)?a.filter(r=>!r.fork).map(r=>[r.name,r.description,r.language,r.html_url]):[];if(l.length)showProjects(l)}).catch(()=>{});
$$('.vc').forEach(b=>b.onclick=()=>{const f=mk('iframe');f.src=D.resume;f.title='Resume preview';$('#dc').replaceChildren(f);$('#dt').textContent='My Resume';$('#dd').style.display='';dlg.showModal()});
$$('.dl').forEach(a=>a.href=D.resume);$('#dd').href=D.resume;
$$('main .card,main h2,.sh').forEach(rev);
const secs=$$('section');let cur=0;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');cur=secs.indexOf(e.target);
 $$('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}}),{threshold:.35});
secs.forEach(s=>io.observe(s));
addEventListener('scroll',()=>{$('#pg').style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'});
$('#up').onclick=()=>secs[Math.max(cur-1,0)].scrollIntoView();
$('#dn').onclick=()=>secs[Math.min(cur+1,secs.length-1)].scrollIntoView();
$('#mf').onsubmit=e=>{e.preventDefault();const st=$('#st');
 if(!$('#fn').value.trim()||!$('#ms').value.trim()){st.textContent='Please fill in your name and message.';return}
 if(!/^\S+@\S+\.\S+$/.test($('#em').value)){st.textContent='Please enter a valid email address.';return}
 st.textContent='Thanks! Your message is ready to send (demo).';e.target.reset()};
const FB='Sorry, I can only answer questions about '+D.name+'’s information. Try asking about skills, education, projects, certificates or contact.';
const KB=[[['skill','tech','language','tool'],()=>D.tech.join(', ')+'.'],
[['educat','study','universit','school','college'],()=>D.education.map(e=>e[0]+' – '+e[1]+' ('+e[2]+')').join('; ')+'.'],
[['project','built'],()=>D.projects.map(p=>p[0]).join(', ')+'.'],
[['certif','course','award'],()=>D.certs.map(c=>c[0]).join(', ')+'.'],
[['github','commit','contribution'],()=>'GitHub: github.com/'+D.github],
[['mail','phone','call','number','contact','whatsapp','telegram','linkedin','facebook','reach'],()=>'Email: '+D.email+' · Phone: '+D.phone+'. WhatsApp, Telegram, LinkedIn and Facebook buttons are in the Contact section.'],
[['cv','resume'],()=>'Use the View Resume or Download Resume buttons.'],
[['interest','hobby','hobbies','language','speak'],()=>'Interests: '+D.interests.join(', ')+'. Languages: '+D.languages.join(', ')+'.'],
[['news','recent','latest','achiev','complet','update','lately'],()=>NW.length?[...NW].sort((a,b)=>new Date(b[0])-new Date(a[0])).slice(0,3).map(n=>n[1]+' ('+n[0]+')').join('; ')+'.':'No news yet.'],
[['about','who','name','yourself','hello'],()=>'I’m '+D.name+', '+D.dept+' at '+D.uni+'. '+D.about]];
const cl=$('#cl');
function add(t,me){const p=mk('p',me?'me':'bot',t);cl.append(p);cl.scrollTop=cl.scrollHeight}
function ask(q){add(q,1);const s=q.toLowerCase(),m=KB.find(k=>k[0].some(w=>s.includes(w)));setTimeout(()=>add(m?m[1]():FB),300)}
add('Hi! Ask me about my skills, education, projects, certificates or contact details.');
$('#cb').onclick=()=>$('#cp').classList.toggle('o');
$('#cf').onsubmit=e=>{e.preventDefault();const v=$('#ci').value.trim();if(v){ask(v);$('#ci').value=''}};
$$('.qs button').forEach(b=>b.onclick=()=>ask(b.textContent));
let ac,mg,on=false,tmr,step=0,deg=4,au;
const SA=146.83,SC=[0,1,3,5,7,8,10,12,13,15,17],fq=n=>SA*Math.pow(2,n/12),BT=.45;
function tone(f,t,d,ty,v,vib){const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.setValueAtTime(f,t);
 if(vib){const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=5.5;lg.gain.value=f*.012;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+d+.1)}
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.08);g.gain.linearRampToValueAtTime(v*.6,t+d*.7);g.gain.linearRampToValueAtTime(0,t+d);o.connect(g);g.connect(mg);o.start(t);o.stop(t+d+.05)}
function hit(t,f0,f1,d,v){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(mg);o.start(t);o.stop(t+d+.02)}
function beat(){const t=ac.currentTime+.05,b=step%6,bar=Math.floor(step/6);
 if(b===0)tone(fq(-5),t,2.6,'triangle',.07);if(b===2||b===4)tone(fq(-12),t,2.2,'triangle',.07);
 if(b===0||b===3){hit(t,110,70,.35,.28);hit(t,330,300,.1,.08)}else if(b===1)hit(t,220,150,.22,.16);else if(b===4)hit(t,560,520,.12,.12);else hit(t,700,600,.06,.07);
 if(b%2===0&&bar%4!==3&&Math.random()<.85){deg=Math.max(1,Math.min(9,deg+Math.round(Math.random()*4-2)));const d=BT*(1.6+Math.random()*1.4);
  if(Math.random()<.3)tone(fq(SC[Math.min(deg+1,10)]+12),t,.14,'sine',.05);tone(fq(SC[deg]+12),t+(Math.random()<.3?.14:0),d,'sine',.11,true)}
 step++}
$('#mu').onclick=()=>{on=!on;
 if(D.music){if(!au){au=new Audio(D.music);au.loop=true;au.volume=.4}on?au.play().catch(()=>{}):au.pause()}
 else{if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();mg.gain.value=0;const f=ac.createBiquadFilter();f.type='lowpass';f.frequency.value=2800;f.connect(ac.destination);mg.connect(f)}
  ac.resume();mg.gain.setTargetAtTime(on?.8:0,ac.currentTime,.4);if(on&&!tmr)tmr=setInterval(beat,BT*1000);if(!on){clearInterval(tmr);tmr=0}}
 $('#mu').textContent=on?'🔊':'🔇'};
const c=$('#fx'),x=c.getContext('2d');let pts=[];
const ok=!matchMedia('(prefers-reduced-motion:reduce)').matches&&matchMedia('(pointer:fine)').matches;
function rs(){c.width=innerWidth;c.height=innerHeight}rs();addEventListener('resize',rs);
if(ok){addEventListener('mousemove',e=>pts.push({x:e.clientX,y:e.clientY,t:Date.now()}));
 (function f(){x.clearRect(0,0,c.width,c.height);const n=Date.now();pts=pts.filter(p=>n-p.t<800);
  const col=getComputedStyle(B).getPropertyValue('--a').trim();x.strokeStyle=col;x.fillStyle=col;x.lineWidth=3;x.lineCap='round';x.setLineDash([1,9]);
  for(let i=1;i<pts.length;i++){x.globalAlpha=1-(n-pts[i].t)/800;x.beginPath();x.moveTo(pts[i-1].x,pts[i-1].y);x.lineTo(pts[i].x,pts[i].y);x.stroke()}
  const l=pts[pts.length-1];if(l){x.globalAlpha=.9;x.beginPath();x.arc(l.x,l.y,5,0,7);x.fill()}
  requestAnimationFrame(f)})()}