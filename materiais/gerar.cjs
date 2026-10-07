/* =========================================================
   Gera os PDFs de resumo de cada matéria.
   Uso:  node materiais/gerar.cjs            (todas)
         node materiais/gerar.cjs soc mat    (só algumas)
   Conteúdo: shared/conteudo/<id>.js  ·  Saída: materiais/pdf/
   ========================================================= */
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const { PDFDocument } = require('pdf-lib');   // npm install (dentro de materiais/), só para gravar título e autor

const RAIZ = path.join(__dirname, '..');
const DIR_CONT = path.join(RAIZ, 'shared', 'conteudo');
const DIR_PDF = path.join(__dirname, 'pdf');
const MARCA = 'Plano ENEM · Resumos';

/* cores dos títulos, alternando de tema em tema (como no material de referência) */
const PALETA = [
  { t:'#f26b1d', fundo:'#ffd8bd' },  // laranja
  { t:'#1b3fbf', fundo:'#bfe3ff' },  // azul
  { t:'#3f9e2f', fundo:'#c9ecb9' },  // verde
  { t:'#f2a516', fundo:'#ffe08a' },  // amarelo
  { t:'#d12a2a', fundo:'#ffc4c4' },  // vermelho
  { t:'#7b3fc4', fundo:'#e2cffa' },  // roxo
  { t:'#0f8f8f', fundo:'#bdeeee' }   // turquesa
];

function carregar(id){
  const window = {};
  const codigo = fs.readFileSync(path.join(DIR_CONT, id + '.js'), 'utf8');
  new Function('window', codigo)(window);
  return window.CONTEUDO[id];
}
/* conteúdo estendido (páginas extras de cada tema): materiais/ext/<id>.cjs, na mesma ordem dos temas */
function carregarExt(id){
  /* lê ext/<id>-1.cjs, ext/<id>-2.cjs... e indexa pelo título do tema */
  const mapa = {};
  if(!fs.existsSync(path.join(__dirname, 'ext'))) return mapa;
  fs.readdirSync(path.join(__dirname, 'ext')).filter(f => new RegExp('^' + id + '-\\d+\\.cjs$').test(f))
    .sort((x, y) => parseInt(x.split('-')[1]) - parseInt(y.split('-')[1]))
    .forEach(f => require(path.join(__dirname, 'ext', f)).forEach(d => { mapa[d.t] = d; }));
  return mapa;
}
const LETRAS = ['A','B','C','D','E'];
/* confere o conteúdo estendido: 5 alternativas diferentes, gabarito válido, tamanho mínimo */
function validarExt(mat, ext){
  const avisos = [];
  mat.temas.forEach(t => {
    const d = ext[t.t];
    if(!d){ avisos.push(t.t + ': SEM conteúdo estendido'); return; }
    const quest = [].concat((d.ex||[]).map(q => ['ex', q]), (d.pr||[]).map(q => ['pr', q]));
    if((d.ex||[]).length < 2) avisos.push(t.t + ': menos de 2 exemplos resolvidos');
    if((d.pr||[]).length < 4) avisos.push(t.t + ': menos de 4 exercícios');
    quest.forEach(([k, q], i) => {
      if(!q.a || q.a.length !== 5) avisos.push(t.t + ' ' + k + (i+1) + ': precisa de 5 alternativas');
      else if(new Set(q.a.map(x => String(x).trim())).size !== 5) avisos.push(t.t + ' ' + k + (i+1) + ': alternativas repetidas');
      if(!LETRAS.includes(q.g)) avisos.push(t.t + ' ' + k + (i+1) + ': gabarito inválido');
      if(/\?|Confirme|alternativa [A-E]|mais próxima|Atenção ao cálculo/i.test(q.c || '')) avisos.push(t.t + ' ' + k + (i+1) + ': comentário com cara de rascunho');
    });
    ['d1','d2'].forEach(k => { if(!d[k] || d[k].length < 2) avisos.push(t.t + ': ' + k + ' com poucas seções'); });
    if(!d.erros || d.erros.length < 3) avisos.push(t.t + ': poucos erros comuns');
    if(!d.check || d.check.length < 3) avisos.push(t.t + ': checklist curto');
  });
  return avisos;
}
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
/* **negrito** dentro do texto */
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/→/g, '<span class="seta-t">→</span>');

const SETA = `<svg class="seta" viewBox="0 0 60 50" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4 C 4 18, 6 34, 46 34"/><path d="M36 24 L 47 34 L 36 44"/></svg>`;

function secaoHTML(sec, cor){
  const [rotulo, texto, itens, fecho] = sec;
  return `<div class="sec">
    <div class="rot" style="background:${cor.fundo};">${esc(rotulo)}</div>
    <div class="sec-corpo">${SETA}<div class="sec-txt">
      ${texto ? `<p>${fmt(texto)}</p>` : ''}
      ${itens && itens.length ? `<ul>${itens.map(i => `<li>${fmt(i)}</li>`).join('')}</ul>` : ''}
      ${fecho ? `<p class="fecho">${fmt(fecho)}</p>` : ''}
    </div></div>
  </div>`;
}

function folha(conteudo, n){
  return `<div class="folha"><div class="moldura"></div><div class="conteudo">${conteudo}</div><div class="rodape">${MARCA}</div><div class="num">${n}</div></div>`;
}
/* cabeçalho pequeno das páginas extras */
function topoParte(tema, cor, parte, nome){
  return `<div class="parte-topo"><span class="parte" style="background:${cor.fundo};">${esc(parte)}</span><h3 style="color:${cor.t};">${esc(tema.t)}</h3><div class="parte-nome">${esc(nome)}</div></div>`;
}
function questaoHTML(q, n, rotulo, mostrarResp){
  return `<div class="q"><div class="q-n">${rotulo} ${n}</div>
    <p class="q-enun">${fmt(q.q)}</p>
    <ol class="alts">${q.a.map((alt, k) => `<li><span class="letra">${LETRAS[k]}</span><span>${fmt(alt)}</span></li>`).join('')}</ol>
    ${mostrarResp ? `<div class="resol"><b>Resposta: ${q.g}.</b> ${fmt(q.c)}</div>` : ''}
  </div>`;
}
/* devolve as folhas de um tema: 1 (resumo) + estendidas (desenvolvimento 1 e 2, exemplos, exercícios e gabarito) */
function temaPaginas(tema, i, mat, ext, n0){
  const cor = PALETA[i % PALETA.length];
  const pags = [];
  const dados = (ext && ext[tema.t]) || null;
  const total = dados ? 6 : 1;
  pags.push({ fit:false, html:`<section class="tema" data-t="${esc(tema.t)}">
    <div class="tema-topo"><h2 style="color:${cor.t};">${esc(tema.t)}</h2><div class="ic">${tema.ic || mat.icone}</div></div>
    ${tema.prio === 'a' || tema.p === 'a' ? `<div class="selo">🔥 Cai muito no ENEM</div>` : ''}
    <div class="parte-leg">Parte 1 de ${total} · Visão geral</div>
    ${tema.s.map(sec => secaoHTML(sec, cor)).join('')}
    ${tema.enem ? `<div class="enem"><b>💡 Como cai no ENEM:</b> ${fmt(tema.enem)}</div>` : ''}
    <div class="anot"><div class="anot-t">✍️ Minhas anotações</div></div>
  </section>` });
  if(!dados) return pags;
  pags.push({ fit:true, html:`<section class="tema" data-t="${esc(tema.t)} (parte 2)">${topoParte(tema, cor, 'Parte 2 de 6', 'Desenvolvimento do conteúdo')}${dados.d1.map(sec => secaoHTML(sec, cor)).join('')}</section>` });
  pags.push({ fit:true, html:`<section class="tema" data-t="${esc(tema.t)} (parte 3)">${topoParte(tema, cor, 'Parte 3 de 6', 'Aprofundando e conectando')}${dados.d2.map(sec => secaoHTML(sec, cor)).join('')}</section>` });
  pags.push({ fit:true, html:`<section class="tema" data-t="${esc(tema.t)} (parte 4)">${topoParte(tema, cor, 'Parte 4 de 6', 'Exemplos resolvidos no estilo ENEM')}${dados.ex.map((q, k) => questaoHTML(q, k + 1, 'Exemplo', true)).join('')}</section>` });
  pags.push({ fit:true, html:`<section class="tema" data-t="${esc(tema.t)} (parte 5)">${topoParte(tema, cor, 'Parte 5 de 6', 'Agora é com você: exercícios')}${dados.pr.map((q, k) => questaoHTML(q, k + 1, 'Questão', false)).join('')}<div class="resp-linha">Minhas respostas: ${dados.pr.map((_, k) => `<b>${k + 1}</b> ____`).join('&nbsp;&nbsp;')}</div></section>` });
  pags.push({ fit:true, html:`<section class="tema" data-t="${esc(tema.t)} (parte 6)">${topoParte(tema, cor, 'Parte 6 de 6', 'Gabarito, erros comuns e checklist')}
    <div class="gab"><b>Gabarito:</b> ${dados.pr.map((q, k) => `${k + 1}-${q.g}`).join('&nbsp;&nbsp;·&nbsp;&nbsp;')}</div>
    ${dados.pr.map((q, k) => `<div class="gab-c"><b>${k + 1}. Resposta ${q.g}.</b> ${fmt(q.c)}</div>`).join('')}
    <div class="erros"><div class="erros-t">⚠️ Erros comuns</div><ul>${dados.erros.map(e => `<li>${fmt(e)}</li>`).join('')}</ul></div>
    <div class="check"><div class="check-t">✅ Antes de seguir, você consegue...</div><ul>${dados.check.map(e => `<li><span class="cx"></span>${fmt(e)}</li>`).join('')}</ul></div>
    <div class="anot"><div class="anot-t">✍️ Minhas anotações</div></div>
  </section>` });
  return pags;
}
function temaHTML(tema, i, mat){
  const cor = PALETA[i % PALETA.length];
  return folha(`<section class="tema" data-t="${esc(tema.t)}">
    <div class="tema-topo"><h2 style="color:${cor.t};">${esc(tema.t)}</h2><div class="ic">${tema.ic || mat.icone}</div></div>
    ${tema.prio === 'a' ? `<div class="selo">🔥 Cai muito no ENEM</div>` : ''}
    ${tema.s.map(sec => secaoHTML(sec, cor)).join('')}
    ${tema.enem ? `<div class="enem"><b>💡 Como cai no ENEM:</b> ${fmt(tema.enem)}</div>` : ''}
    <div class="anot"><div class="anot-t">✍️ Minhas anotações</div></div>
  </section>`, i + 3);
}

function html(mat, ext){
  const css = fs.readFileSync(path.join(__dirname, 'fontes', 'fontes.css'), 'utf8');
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><base href="file://${path.join(__dirname, 'fontes')}/">
<style>${css}
@page{size:A4;margin:0;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Nunito',sans-serif;color:#1d1d1d;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.folha{width:210mm;height:297mm;position:relative;overflow:hidden;break-after:page;padding:17mm 21mm 26mm;}
.folha .moldura{position:absolute;top:9mm;bottom:9mm;left:9mm;right:9mm;border:4px solid ${mat.borda || '#e2575f'};border-radius:3px;pointer-events:none;}
.folha .rodape{position:absolute;bottom:13mm;left:0;right:0;text-align:center;font-family:'Lilita One',cursive;font-size:13pt;color:#151515;letter-spacing:.3px;}
.folha .num{position:absolute;bottom:13.5mm;right:17mm;background:#ffe600;border-radius:3px;padding:.3mm 2mm;font-family:'Nunito',sans-serif;font-weight:800;font-size:8.5pt;}
.folha .conteudo{height:100%;overflow:hidden;display:flex;flex-direction:column;}
.tema{display:flex;flex-direction:column;flex:1;min-height:0;}
.anot{flex:1;min-height:0;margin-top:6mm;border:2px dashed #cfcfcf;border-radius:10px;padding:2.5mm 5mm;background:repeating-linear-gradient(to bottom,transparent 0,transparent 8.6mm,#e3e3e3 8.6mm,#e3e3e3 8.9mm);background-position:0 9mm;}
.anot .anot-t{font-family:'Patrick Hand',cursive;font-size:14pt;color:#8a8a8a;letter-spacing:.5px;}
/* capa */
.capa{width:210mm;height:297mm;position:relative;overflow:hidden;background:${mat.capa || 'linear-gradient(160deg,#0b1f4d,#1d3f8f 60%,#3b6fd8)'};color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30mm 20mm;break-after:page;}
.capa .emojis{font-size:40pt;letter-spacing:6pt;margin-bottom:10mm;opacity:.95;}
.capa .k{font-family:'Patrick Hand',cursive;font-size:30pt;}
.capa h1{font-family:'Lilita One',cursive;font-size:62pt;line-height:1;color:#ffd84d;text-shadow:3px 4px 0 rgba(0,0,0,.35);margin:2mm 0 8mm;letter-spacing:1px;}
.capa .sub{font-size:15pt;font-weight:700;max-width:140mm;line-height:1.4;}
.capa .tag{margin-top:14mm;background:#fff;color:#0b1f4d;font-family:'Lilita One',cursive;font-size:15pt;padding:3mm 8mm;border-radius:30px;}
.capa .marca{position:absolute;bottom:14mm;font-family:'Patrick Hand',cursive;font-size:15pt;opacity:.9;}
.capa .bola{position:absolute;border-radius:50%;background:rgba(255,255,255,.07);}
.sumario h2,.como h2{font-family:'Patrick Hand',cursive;font-size:38pt;color:#4f5d58;text-align:center;letter-spacing:1px;margin:4mm 0 6mm;}
.sumario ol{font-family:'Patrick Hand',cursive;font-size:17pt;color:#2d2a7a;columns:1;padding-left:30mm;line-height:1.42;}
.como .bloco{border:2.5px dashed #c9d4ea;border-radius:12px;padding:5mm 6mm;margin-bottom:5mm;font-size:11.5pt;line-height:1.55;}
.como .bloco b{color:#1d3f8f;}
.como .bloco h3{font-family:'Lilita One',cursive;color:#1d3f8f;font-size:15pt;margin-bottom:2mm;}
/* partes extras */
.folha-fit{display:contents;}
.parte-topo{text-align:center;margin-bottom:4mm;}
.parte-topo .parte{display:inline-block;font-weight:800;font-size:8.5pt;letter-spacing:.6px;text-transform:uppercase;padding:.8mm 4mm;border-radius:20px;color:#222;}
.parte-topo h3{font-family:'Lilita One',cursive;font-size:19pt;text-transform:uppercase;line-height:1.1;margin:2mm 0 1mm;-webkit-text-stroke:.4px rgba(0,0,0,.3);}
.parte-topo .parte-nome{font-family:'Patrick Hand',cursive;font-size:15pt;color:#555;}
.parte-leg{text-align:center;font-size:9pt;font-weight:800;color:#888;letter-spacing:.5px;text-transform:uppercase;margin:-1mm 0 1mm;}
.q{break-inside:avoid;margin-bottom:4.5mm;border:2px solid #dfe5f2;border-radius:10px;padding:3mm 4.5mm;background:#fbfcff;}
.q-n{font-family:'Lilita One',cursive;font-size:11pt;color:#1d3f8f;margin-bottom:1mm;}
.folha-fit.fit .sec-txt{font-size:var(--fs,13pt);}
.q-enun{font-size:calc(var(--fs,13pt));line-height:1.45;margin-bottom:1.5mm;}
.alts{list-style:none;}
.alts li{display:flex;gap:2.5mm;font-size:calc(var(--fs,13pt) - .5pt);line-height:1.38;margin-bottom:.8mm;}
.alts .letra{flex:0 0 5mm;height:5mm;border-radius:50%;background:#e6ecfa;color:#1d3f8f;font-weight:800;font-size:8pt;display:flex;align-items:center;justify-content:center;margin-top:.3mm;}
.resol{margin-top:2mm;padding:2mm 3mm;background:#eefaf1;border-left:3px solid #3f9e2f;border-radius:4px;font-size:calc(var(--fs,13pt) - .5pt);line-height:1.42;}
.resp-linha{margin-top:3mm;font-size:10.5pt;color:#555;text-align:center;}
.gab{background:#fff8e1;border:2px solid #f5c443;border-radius:8px;padding:2mm 4mm;text-align:center;font-size:11pt;margin-bottom:3mm;}
.gab-c{font-size:calc(var(--fs,11pt) - .5pt);line-height:1.42;margin-bottom:1.8mm;}
.erros{margin-top:3mm;background:#fff1f0;border:2px solid #f2a1a1;border-radius:10px;padding:2.5mm 4.5mm;}
.erros-t,.check-t{font-family:'Lilita One',cursive;font-size:11.5pt;margin-bottom:1mm;color:#b02a2a;}
.check-t{color:#2f7d2f;}
.erros ul,.check ul{list-style:none;}
.erros li{font-size:calc(var(--fs,11pt) - .5pt);line-height:1.4;margin-bottom:.8mm;padding-left:4mm;position:relative;}
.erros li::before{content:'•';position:absolute;left:0;color:#b02a2a;}
.check{margin-top:3mm;background:#f1faf1;border:2px solid #a8d8a2;border-radius:10px;padding:2.5mm 4.5mm;}
.check li{display:flex;gap:2.5mm;font-size:calc(var(--fs,11pt) - .5pt);line-height:1.4;margin-bottom:.8mm;}
.check .cx{flex:0 0 4mm;height:4mm;border:1.6px solid #5aa85a;border-radius:1mm;margin-top:.5mm;background:#fff;}
/* tema */
.tema-topo{display:flex;align-items:center;justify-content:center;position:relative;min-height:16mm;margin-bottom:3mm;}
.tema-topo h2{font-family:'Lilita One',cursive;font-size:25pt;text-transform:uppercase;text-align:center;line-height:1.08;max-width:130mm;-webkit-text-stroke:.6px rgba(0,0,0,.35);text-shadow:1.5px 1.5px 0 rgba(0,0,0,.15);}
.tema-topo .ic{position:absolute;right:0;top:-1mm;font-size:30pt;}
.selo{display:block;width:max-content;margin:0 auto 3mm;background:#fff3c4;border:1.5px solid #f2c94c;color:#7a5300;font-weight:800;font-size:9pt;padding:1mm 4mm;border-radius:20px;}
.sec{margin-top:5.5mm;}
.rot{display:inline-block;font-family:'Patrick Hand',cursive;font-size:16.5pt;text-transform:uppercase;text-decoration:underline;text-underline-offset:3px;padding:.5mm 3mm;margin-left:-2mm;color:#1a1a1a;}
.sec-corpo{display:flex;gap:3mm;margin-top:2mm;}
.seta{width:13mm;height:11mm;flex-shrink:0;margin-top:1mm;}
.sec-txt{flex:1;font-style:italic;font-size:12pt;line-height:1.55;}
.sec-txt p{margin-bottom:1.2mm;}
.sec-txt ul{margin:1mm 0 1.5mm 5mm;}
.sec-txt li{margin-bottom:.6mm;}
.sec-txt b{font-weight:800;}
.sec-txt .fecho{font-style:normal;font-weight:800;margin-top:1.5mm;}
.seta-t{font-style:normal;}
.enem{break-inside:avoid;margin-top:6mm;background:#fff8e1;border:2px solid #f5c443;border-radius:10px;padding:3mm 4.5mm;font-size:11pt;line-height:1.5;}
.enem b{color:#8a5a00;}
</style></head><body>
<div class="capa">
  <div class="bola" style="width:120mm;height:120mm;right:-40mm;top:-30mm;"></div>
  <div class="bola" style="width:80mm;height:80mm;left:-30mm;bottom:20mm;"></div>
  <div class="emojis">${(mat.emojis || mat.icone)}</div>
  <div class="k">Resumo de</div>
  <h1>${esc(mat.nome.toUpperCase())}</h1>
  <div class="sub">${esc(mat.sub || 'Os 25 temas que mais caem no ENEM, explicados de forma simples, visual e direta.')}</div>
  <div class="tag">${mat.temas.length} temas completos</div>
  <div class="marca">${MARCA}</div>
</div>
${folha(`<div class="sumario"><h2>CONTEÚDOS ABORDADOS</h2><ol>${mat.temas.map(t => `<li>${esc(t.t)}</li>`).join('')}</ol></div>`, 1)}
${folha(`<div class="como"><h2>COMO USAR</h2>
  <div class="bloco"><h3>1. Um tema por vez</h3>Cada tema tem <b>6 partes</b>: visão geral, desenvolvimento do conteúdo, aprofundamento, exemplos resolvidos, exercícios e gabarito. Estude uma parte por vez, sem pressa.</div>
  <div class="bloco"><h3>2. Comece pelo 🔥</h3>Os temas com o selo <b>"Cai muito no ENEM"</b> aparecem com frequência nas provas. Se o tempo estiver curto, priorize esses.</div>
  <div class="bloco"><h3>3. Resolva antes de olhar o gabarito</h3>Faça os exercícios da parte 5 sem consultar nada. Só depois confira o gabarito comentado da parte 6 e releia o que errou.</div>
  <div class="bloco"><h3>4. Siga o seu plano</h3>No aplicativo <b>Plano ENEM</b>, o seu plano semanal diz quais temas estudar em cada dia. Depois de estudar, toque em <b>"Marcar concluído"</b> para o tema entrar no seu desempenho.</div>
  <div class="bloco"><h3>5. Revise no tempo certo</h3>Releia a visão geral e refaça os erros <b>1 dia, 3 dias e 7 dias</b> depois do primeiro estudo. O aplicativo avisa quando chega a hora.</div>
</div>`, 2)}
${(() => { let n = 3; return mat.temas.map((t, i) => temaPaginas(t, i, mat, ext, n).map(pg => `<div class="folha-fit${pg.fit ? ' fit' : ''}">${folha(pg.html, n++)}</div>`).join('')).join(''); })()}
</body></html>`;
}

(async () => {
  const pedidos = process.argv.slice(2);
  const ids = pedidos.length ? pedidos : fs.readdirSync(DIR_CONT).filter(f => f.endsWith('.js')).map(f => f.replace('.js', ''));
  fs.mkdirSync(DIR_PDF, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const id of ids) {
    const mat = carregar(id);
    const nome = 'Resumo-' + mat.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
    const arq = path.join(__dirname, '_tmp_' + id + '.html');
    const ext = carregarExt(id); const av = validarExt(mat, ext); if(av.length) console.log('  ⚠️ ' + id + ' (' + av.length + ' avisos):\n     ' + av.join('\n     ')); fs.writeFileSync(arq, html(mat, ext));
    await p.goto('file://' + arq, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    /* páginas extras: reduz a letra até caber (mínimo 8,5pt) */
    await p.evaluate(() => document.querySelectorAll('.folha-fit.fit .conteudo').forEach(c => {
      let fs = 13; c.style.setProperty('--fs', fs + 'pt');
      while (c.scrollHeight > c.clientHeight + 2 && fs > 8.5) { fs -= .25; c.style.setProperty('--fs', fs + 'pt'); c.querySelectorAll('.sec-txt').forEach(e => e.style.fontSize = fs + 'pt'); }
    }));
    /* a área de anotações só fica quando sobra espaço de verdade */
    await p.evaluate(() => document.querySelectorAll('.anot').forEach(a => { if (a.clientHeight < 120) a.remove(); }));
    const estouro = await p.evaluate(() => [...document.querySelectorAll('.folha .conteudo')]
      .filter(c => c.scrollHeight > c.clientHeight + 2)
      .map(c => (c.querySelector('[data-t]') || {dataset:{t:'(página fixa)'}}).dataset.t + ' +' + (c.scrollHeight - c.clientHeight) + 'px'));
    if (estouro.length) console.log('  ⚠️ não coube na página:', estouro.join(' | '));
    const buf = await p.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
    fs.unlinkSync(arq);
    const doc = await PDFDocument.load(buf);
    doc.setTitle('Resumo de ' + mat.nome + ' para o ENEM');
    doc.setAuthor(MARCA);
    const saida = path.join(DIR_PDF, nome + '.pdf');
    fs.writeFileSync(saida, await doc.save());
    console.log('OK', path.relative(RAIZ, saida));
  }
  await b.close();
})();
