/* =========================================================
   MOTOR COMUM DOS QUIZZES (quiz1 e quiz2)
   Cada página define, ANTES de carregar este arquivo:
   - window.QUIZ      configuração (id, marca, links, preços, pixel)
   - QUESTIONS        perguntas
   - montaFlow()      monta a sequência de telas
   - RENDER           telas próprias do quiz, por tipo
   ========================================================= */

/* ===== Pixel da Meta e GA4 (só carregam se o ID estiver preenchido) ===== */
(function(){
  const Z = window.QUIZ;
  if(Z.PIXEL_ID){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
    s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', Z.PIXEL_ID); fbq('track', 'PageView');
  }
  if(Z.GA_ID){
    const g = document.createElement('script'); g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + Z.GA_ID; document.head.appendChild(g);
    window.dataLayer = window.dataLayer || []; window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', Z.GA_ID);
  }
})();

function px(evento, padrao){
  try{ if(typeof fbq==='function'){ padrao ? fbq('track', evento) : fbq('trackCustom', evento); } }catch(e){}
}
function track(evento, params){
  params = Object.assign({ quiz: window.QUIZ.id }, params||{});
  try{ if(typeof gtag==='function') gtag('event', evento, params); }catch(e){}
  try{ if(typeof fbq==='function') fbq('trackCustom', evento, params); }catch(e){}
}

/* ===== util ===== */
function S(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function diasEnem(){
  const D = window.QUIZ.DATA_ENEM; if(!D) return null;
  const d = Math.ceil((new Date(D+'T09:00:00') - new Date())/86400000);
  return (isFinite(d) && d>0) ? d : null;
}
/* contador regressivo até a prova (dia da DATA_ENEM, 13h30 de Brasília) */
function contadorEnem(){
  const D = window.QUIZ.DATA_ENEM; if(!D) return '';
  const alvo = new Date(D+'T13:30:00-03:00').getTime();
  if(!isFinite(alvo) || alvo<=Date.now()) return '';
  const un = (id,rot)=>`<div class="cd-un"><b id="${id}">00</b><span>${rot}</span></div>`;
  setTimeout(function tick(){
    const el = document.getElementById('cd-d'); if(!el) return;
    let r = Math.max(0, Math.floor((alvo-Date.now())/1000));
    const v = { 'cd-d':Math.floor(r/86400), 'cd-h':Math.floor(r%86400/3600), 'cd-m':Math.floor(r%3600/60), 'cd-s':r%60 };
    for(const k in v){ const e=document.getElementById(k); if(e) e.textContent = String(v[k]).padStart(2,'0'); }
    setTimeout(tick, 1000);
  }, 0);
  return `<div class="cd-enem"><p class="cd-tt">Faltam para o ENEM</p><div class="cd-box">${un('cd-d','dias')}${un('cd-h','horas')}${un('cd-m','min')}${un('cd-s','seg')}</div></div>`;
}
/* comparativo "custo de não agir" x "custo da oferta" (cards lado a lado no desktop, empilhados no celular) */
function custoComparado(o){
  const li = a=>a.map(t=>`<li>${t}</li>`).join('');
  return `<div class="${o.acao?'':'blk '}custo">
    <h3 class="sec-h" style="margin-top:0;">${o.titulo}</h3>
    <p class="sec-s">${o.sub}</p>
    <div class="custo-grid">
      <div class="custo-card ruim"><span class="custo-tag">Custo de ficar como está</span><h4>${o.ruimTit}</h4><ul>${li(o.ruim)}</ul></div>
      <div class="custo-card bom"><span class="custo-tag">Custo de começar hoje</span><h4>${S(o.preco||window.QUIZ.PRECO_POR)} <small>${o.precoNota||"pagamento único"}</small></h4><ul>${li(o.bom)}</ul></div>
    </div>
    <button class="btn" onclick="${o.acao||"irCheckout('custo')"}">${o.cta}</button>
    <p class="note">${o.nota}</p>
  </div>`;
}
function prazoTxt(){ const d = diasEnem(); return d ? `Faltam ${d} dias para o ENEM` : 'O ENEM está chegando'; }
function irCheckout(origem){
  px('InitiateCheckout', true);
  track('quiz_clique_checkout', { origem: origem||'' });
  const url = window.QUIZ.CHECKOUT_URL;
  if(!url){ alert('Configure CHECKOUT_URL no topo deste quiz antes de publicar.'); return; }
  try{ sessionStorage.setItem('enem_check','1'); }catch(e){}
  window.location.href = url;
}

/* ===== estado, fluxo e navegação ===== */
const state = { idx:0, answers:{} };
const FLOW = [];
QUESTIONS.forEach((q,i)=>q.num=i+1);
const TOTAL_Q = QUESTIONS.length;
const app = document.getElementById('app');

function salvarRespostas(){ try{ localStorage.setItem('enem_'+window.QUIZ.id, JSON.stringify(state.answers)); }catch(e){} }
function go(n){ state.idx += n; render(); window.scrollTo({top:0,behavior:'instant'}); }
function pctAte(qid){ const q = QUESTIONS.find(x=>x.id===qid); return q ? Math.round((q.num/TOTAL_Q)*100) : 100; }
function backBtn(){ return state.idx>0 ? `<button class="back-btn" onclick="go(-1)" aria-label="Voltar">←</button>` : ''; }
function nomeA(){ const n = state.answers.nome; return n && n!=='você' ? S(n) : ''; }
function head(num){
  return `${backBtn()}<div class="brand">${S(window.QUIZ.MARCA)}</div><div class="brand-sub">${S(window.QUIZ.SUB)}</div>
  <div class="progress-bar"><div class="progress-fill" style="width:${num?(num/TOTAL_Q)*100:0}%"></div></div>`;
}

/* ===== medição ===== */
const track_estado = { etapa:0, rotulo:'intro', concluiu:false, respondidas:0 };
function trackEtapa(step){
  let num = 0, rotulo = step.type;
  if(step.type==='question'){ num = step.q.num; rotulo = step.q.id; }
  else { num = track_estado.etapa; }
  track_estado.etapa  = Math.max(track_estado.etapa, num);
  track_estado.rotulo = rotulo;
  if(step.type==='result') track_estado.concluiu = true;
  track('quiz_etapa', { etapa:num, etapa_id:rotulo, tipo:step.type, posicao:state.idx, total_perguntas:TOTAL_Q });
}
function trackResposta(qid, valor){
  track_estado.respondidas++;
  const q = QUESTIONS.find(x=>x.id===qid);
  track('quiz_resposta', { pergunta:qid, etapa:q?q.num:0, resposta: Array.isArray(valor) ? valor.join(' | ') : String(valor) });
  salvarRespostas();
}
window.addEventListener('pagehide', function(){
  if(track_estado.concluiu) return;
  track('quiz_abandono', { etapa:track_estado.etapa, etapa_id:track_estado.rotulo, respondidas:track_estado.respondidas });
});

/* ===== render ===== */
function render(){
  const step = FLOW[state.idx];
  if(step.type==='question'){
    const q = step.q;
    if(q.type==='foto') RENDER.intro(q);
    else if(q.type==='text') renderText(q);
    else if(q.type==='multi') renderMulti(q);
    else renderSingle(q);
  }
  else if(step.type==='analyzing') renderAnalyzing(step);
  else RENDER[step.type](step);
  trackEtapa(step);
}

/* abertura com cards de foto (a 1ª pergunta já está na tela) */
function introCards(q){
  return `<div class="opts grid2">
    ${q.options.map((o,i)=>`<div class="foto-card" onclick="selectFoto('${q.id}',${i})"><img src="${q.images[i]}" alt="${S(o)}" class="foto-img" onerror="this.style.display='none'"><button class="opt${state.answers[q.id]===o?' sel':''}" data-i="${i}"><span class="opt-radio"></span><span>${S(o)}</span></button></div>`).join('')}
  </div>`;
}
function selectFoto(qid,i){
  const q = QUESTIONS.find(x=>x.id===qid);
  state.answers[qid] = q.options[i];
  trackResposta(qid, q.options[i]);
  app.querySelectorAll('.opt').forEach(b=>{b.classList.remove('sel');b.style.pointerEvents='none';});
  const c = app.querySelector(`.opt[data-i="${i}"]`); if(c) c.classList.add('sel');
  px('QuizIniciado');
  setTimeout(()=>go(1),360);
}

function renderSingle(q){
  const titulo = typeof q.question==='function' ? q.question(state.answers) : q.question;
  app.innerHTML = `
  <div class="wrap fade"><div class="card">
    ${head(q.num)}
    <h2 class="q-title">${titulo}</h2>
    ${q.sub?`<p class="q-sub">${typeof q.sub==='function'?q.sub(state.answers):q.sub}</p>`:''}
    <div class="opts">${q.options.map((o,i)=>`<button class="opt${state.answers[q.id]===o?' sel':''}" data-i="${i}" onclick="selectOpt('${q.id}',${i})"><span class="opt-radio"></span><span>${S(o)}</span></button>`).join('')}</div>
  </div></div>`;
}
function selectOpt(qid,i){
  const q = QUESTIONS.find(x=>x.id===qid);
  state.answers[qid] = q.options[i];
  trackResposta(qid, q.options[i]);
  app.querySelectorAll('.opt').forEach(b=>{b.classList.remove('sel');b.style.pointerEvents='none';});
  const c = app.querySelector(`.opt[data-i="${i}"]`); if(c) c.classList.add('sel');
  setTimeout(()=>go(1),360);
}
function renderMulti(q){
  const sel = state.answers[q.id] || [];
  app.innerHTML = `
  <div class="wrap fade"><div class="card">
    ${head(q.num)}
    <h2 class="q-title" style="margin-bottom:10px;">${q.question}</h2>
    <p class="q-sub">${q.max?'Marque até '+q.max+' opções':'Pode marcar mais de uma opção'}</p>
    <div class="opts compact">${q.options.map((o,i)=>`<button class="opt${sel.includes(o)?' sel':''}" data-i="${i}" onclick="toggleOpt('${q.id}',${i})"><span class="opt-radio"></span><span>${S(o)}</span></button>`).join('')}</div>
    <button class="btn" id="multiNext" style="margin-top:14px;">Continuar →</button>
  </div></div>`;
  document.getElementById('multiNext').onclick = ()=>{
    if(!(state.answers[q.id]||[]).length){ state.answers[q.id] = [q.options[0]]; }
    trackResposta(q.id, state.answers[q.id]); go(1);
  };
}
function toggleOpt(qid,i){
  const q = QUESTIONS.find(x=>x.id===qid);
  const o = q.options[i];
  let sel = state.answers[qid] || [];
  if(sel.includes(o)) sel = sel.filter(x=>x!==o);
  else { if(q.max && sel.length>=q.max) sel = sel.slice(1); sel = [...sel,o]; }
  state.answers[qid] = sel;
  app.querySelectorAll('.opt').forEach(b=>b.classList.toggle('sel', sel.includes(q.options[parseInt(b.dataset.i,10)])));
}
function renderText(q){
  const v = state.answers[q.id] && state.answers[q.id]!=='você' ? state.answers[q.id] : '';
  app.innerHTML = `
  <div class="wrap fade"><div class="card">
    ${head(q.num)}
    <h2 class="q-title">${q.question}</h2>
    <input type="text" class="text-input" id="txtField" placeholder="${S(q.placeholder||'')}" value="${S(v)}" autocomplete="given-name" maxlength="30">
    <button class="btn" id="txtNext">Continuar →</button>
  </div></div>`;
  const f = document.getElementById('txtField');
  setTimeout(()=>f.focus(),60);
  function ok(){ state.answers[q.id]=(f.value.trim()||'você'); trackResposta(q.id,'preenchido'); go(1); }
  document.getElementById('txtNext').onclick = ok;
  f.addEventListener('keydown',e=>{ if(e.key==='Enter'){e.preventDefault();ok();} });
}

/* ---------- ANALISANDO (barra com smootherstep) ---------- */
function renderAnalyzing(step){
  app.innerHTML = `
  <div class="wrap fade"><div class="card" style="padding-top:54px;padding-bottom:50px;">
    <div class="analise-title">Analisando suas respostas...</div>
    <div class="lib-box">
      <div class="lib-label">${S(step.label||'Calculando o seu resultado...')}</div>
      <div class="lib-pct" id="libPct">0%</div>
      <div class="lib-bar"><div class="lib-fill" id="libFill"></div></div>
    </div>
  </div></div>`;
  const DUR = step.dur || 5000;
  const p = document.getElementById('libPct'), f = document.getElementById('libFill');
  const t0 = performance.now(); let ult = -1;
  (function tick(now){
    const t = Math.min(1,(now-t0)/DUR);
    const e = t*t*t*(t*(t*6-15)+10);
    const pct = Math.round(e*100);
    if(p && pct!==ult){ p.textContent = pct+'%'; ult = pct; }
    if(f) f.style.width = (e*100)+'%';
    if(t<1) requestAnimationFrame(tick);
  })(performance.now());
  setTimeout(()=>go(1),DUR);
}

/* medidor reaproveitado nos diagnósticos */
function medidorHTML(idx, cor, titulo){
  return `<div class="box" style="background:#fff;padding:20px 16px;">
    <h4 style="text-align:center;">${titulo}</h4>
    <div class="meter-num" style="color:${cor};">${idx}<small>/100</small></div>
    <div class="meter"><i style="left:${idx}%;border-color:${cor};"></i></div>
    <div class="meter-l"><span>Crítico</span><span>Em evolução</span><span>Preparado</span></div>`;
}
/* colorir=true: a cor da barra acompanha o valor (vermelho, amarelo, verde) */
function barrasHTML(areas, colorir){
  const cor = v => v>=60 ? 'linear-gradient(90deg,#1f9d63,#43c985)' : v>=35 ? 'linear-gradient(90deg,#e8a400,#f2c94c)' : '';
  return `<div class="sub-bars">${areas.map(r=>`<div class="sb"><div class="l"><span>${S(r.n)}</span><span>${r.v}%</span></div><div class="t"><div class="f" style="width:${r.v}%;${colorir&&cor(r.v)?'background:'+cor(r.v)+';':''}"></div></div></div>`).join('')}</div>`;
}
function pts(ans, tabela){ const i = tabela.indexOf(ans); return i<0 ? 0 : i; }

/* ===== pop-up de saída (só liga se CHECKOUT_DESCONTO existir) ===== */
function armarPopupSaida(){
  const Z = window.QUIZ;
  if(!Z.CHECKOUT_DESCONTO) return;
  const div = document.createElement('div');
  div.innerHTML = `<div class="saida-overlay" id="saida-overlay" role="dialog" aria-modal="true" aria-labelledby="saida-titulo">
    <div class="saida-modal">
      <button class="saida-fechar" id="saida-fechar" aria-label="Fechar">&times;</button>
      <div class="saida-selo">Espere um segundo</div>
      <h3 class="saida-titulo" id="saida-titulo">Uma condição especial para você começar hoje</h3>
      <p class="saida-sub">Esta condição aparece só uma vez. Fechando a janela, o preço volta ao normal.</p>
      <div class="saida-de">De ${S(Z.PRECO_POR)}</div>
      <div class="saida-val">${S(Z.PRECO_DESCONTO)}</div>
      <a href="#" class="btn" id="saida-btn">Quero com desconto &rarr;</a>
      <button class="saida-recusa" id="saida-recusa">Não quero o desconto</button>
    </div></div>`;
  document.body.appendChild(div.firstElementChild);
  const overlay = document.getElementById('saida-overlay');
  const chave = 'enem_saida_'+Z.id;
  let armado=false, usado=false;
  const jaExibido = ()=>{ try{return sessionStorage.getItem(chave)==='1';}catch(e){return false;} };
  const naOferta = ()=>{ try{return FLOW[state.idx] && FLOW[state.idx].type==='result';}catch(e){return false;} };
  function armar(){ if(armado||usado||jaExibido()||!naOferta()) return; try{history.pushState({e:1},'');armado=true;}catch(e){} }
  function abrir(){ overlay.classList.add('aberto'); document.body.style.overflow='hidden'; usado=true; try{sessionStorage.setItem(chave,'1');}catch(e){} px('ExitOffer'); }
  function fechar(){ overlay.classList.remove('aberto'); document.body.style.overflow=''; }
  window.addEventListener('popstate',()=>{ if(usado||jaExibido()||!armado) return; abrir(); });
  ['pointerdown','mousedown','click','touchstart','keydown'].forEach(e=>window.addEventListener(e,armar,{passive:true}));
  document.getElementById('saida-btn').addEventListener('click',e=>{ e.preventDefault(); px('ExitOfferClick'); window.location.href=Z.CHECKOUT_DESCONTO; });
  window.addEventListener('pageshow',()=>{
    let v=false; try{v=sessionStorage.getItem('enem_check')==='1';}catch(e){}
    if(!v) return; try{sessionStorage.removeItem('enem_check');}catch(e){}
    if(!jaExibido()) setTimeout(abrir,400);
  });
  document.getElementById('saida-fechar').addEventListener('click',fechar);
  document.getElementById('saida-recusa').addEventListener('click',fechar);
  overlay.addEventListener('click',e=>{ if(e.target===overlay) fechar(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&overlay.classList.contains('aberto')) fechar(); });
}

/* ===== início ===== */
montaFlow();
render();
armarPopupSaida();
