/* =========================================================
   Gera o material de cada matéria no formato "1 tema = 1 página"
   (Conceito/Visão geral · Pontos de atenção · Lembretes rápidos · Como cai no ENEM).
   Uso:  node materiais/gerar-flash.cjs            (todas)
         node materiais/gerar-flash.cjs mat soc    (só algumas)
   Conteúdo: shared/conteudo/<id>.js (seções e "Como cai no ENEM"),
             materiais/ext/<id>-N.cjs (campo "erros" = pontos de atenção),
             materiais/lembretes/<id>.cjs (lembretes rápidos, chaveados pelo título exato do tema).
   Saída: materiais/pdf/Resumo-<Matéria>.pdf (mesmo nome usado no bucket "materiais").
   Não mexe nos exercícios nem no Arsenal de Redações.
   ========================================================= */
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const { PDFDocument } = require('pdf-lib');

const RAIZ = path.join(__dirname, '..');
const DIR_CONT = path.join(RAIZ, 'shared', 'conteudo');
const DIR_PDF = path.join(__dirname, 'pdf');

function carregar(id){
  const window = {};
  new Function('window', fs.readFileSync(path.join(DIR_CONT, id + '.js'), 'utf8'))(window);
  return window.CONTEUDO[id];
}
function carregarErros(id){
  const mapa = {};
  fs.readdirSync(path.join(__dirname, 'ext')).filter(f => new RegExp('^' + id + '-\\d+\\.cjs$').test(f))
    .forEach(f => require(path.join(__dirname, 'ext', f)).forEach(d => { if (d.erros) mapa[d.t] = d.erros; }));
  return mapa;
}
function carregarLembretes(id){
  const f = path.join(__dirname, 'lembretes', id + '.cjs');
  return fs.existsSync(f) ? require(f) : {};
}

const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const dois = n => String(n).padStart(2, '0');

function blocoSecao([rotulo, texto, itens, fecho]){
  return `<div class="bl">
    <div class="bl-t">${esc(rotulo)}</div>
    ${texto ? `<p>${fmt(texto)}</p>` : ''}
    ${itens && itens.length ? `<ul>${itens.map(i => `<li>${fmt(i)}</li>`).join('')}</ul>` : ''}
    ${fecho ? `<p class="fecho">${fmt(fecho)}</p>` : ''}
  </div>`;
}

function paginaTema(t, i, mat, erros, lembretes, total){
  const atencao = (erros[t.t] || []).slice(0, 4);
  const lemb = lembretes[t.t] || [];
  return `<div class="folha"><div class="cartao" data-t="${esc(t.t)}">
    <div class="topo">
      <div class="num">${dois(i + 1)}</div>
      <h2>${esc(t.t)}</h2>
      <div class="ic">${t.ic || mat.icone}</div>
    </div>
    ${t.p === 'a' || t.prio === 'a' ? `<div class="selo">🔥 Cai muito no ENEM</div>` : ''}

    <div class="caixa conceito">
      <div class="cx-t"><span class="bola">📖</span>Conceito / Visão geral</div>
      <div class="secoes">${t.s.map(blocoSecao).join('')}</div>
    </div>

    ${atencao.length ? `<div class="caixa atencao">
      <div class="cx-t"><span class="bola">⚠️</span>Pontos de atenção</div>
      <ul>${atencao.map(e => `<li>${fmt(e)}</li>`).join('')}</ul>
    </div>` : ''}

    ${lemb.length ? `<div class="faixa lembre">
      <div class="fx-ic">💡</div>
      <div><div class="fx-t">Lembretes rápidos</div><ul>${lemb.map(l => `<li>${fmt(l)}</li>`).join('')}</ul></div>
    </div>` : ''}

    ${t.enem ? `<div class="faixa enem">
      <div class="fx-ic">🎓</div>
      <div><div class="fx-t">Como cai no ENEM</div><p>${fmt(t.enem)}</p></div>
    </div>` : ''}
  </div>
  <div class="rodape">Acelera Enem · Material de ${esc(mat.nome)}</div><div class="pg">${i + 4}</div></div>`;
}

function html(mat, erros, lembretes){
  const css = fs.readFileSync(path.join(__dirname, 'fontes', 'fontes.css'), 'utf8');
  const total = mat.temas.length;
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><base href="file://${path.join(__dirname, 'fontes')}/">
<style>${css}
@page{size:A4;margin:0;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Nunito',sans-serif;color:#1f2a37;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.folha{width:210mm;height:297mm;position:relative;overflow:hidden;break-after:page;background:#fbf5e6;padding:11mm 11mm 19mm;}
.cartao{height:100%;background:#fff;border:3.2mm solid #f1cf6b;border-radius:7mm;box-shadow:0 0 0 1.4mm #fbe7a8 inset;padding:7mm 8mm 7mm;display:flex;flex-direction:column;overflow:hidden;font-size:var(--fs,12pt);}
.rodape{position:absolute;bottom:9mm;left:0;right:0;text-align:center;font-family:'Lilita One',cursive;font-size:11pt;color:#13294b;letter-spacing:.3px;}
.pg{position:absolute;bottom:8.6mm;right:15mm;background:#f1cf6b;color:#13294b;border-radius:2mm;padding:.4mm 2.2mm;font-weight:800;font-size:9pt;}
/* topo */
.topo{display:flex;align-items:center;gap:4mm;}
.num{flex:none;background:#13294b;color:#fff;font-family:'Lilita One',cursive;font-size:22pt;line-height:1;border-radius:3mm;padding:2.6mm 3.4mm;}
.topo h2{flex:1;font-family:'Lilita One',cursive;font-size:22pt;line-height:1.05;color:#13294b;text-transform:uppercase;letter-spacing:.3px;}
.topo .ic{flex:none;font-size:24pt;}
.selo{align-self:flex-start;margin-top:2.6mm;background:#fff3c4;border:1.4px solid #f2c94c;color:#7a5300;font-weight:800;font-size:9pt;padding:.8mm 3.6mm;border-radius:20px;}
/* caixas */
.caixa{margin-top:4mm;border-radius:4mm;padding:3.2mm 4.2mm 3mm;}
.cx-t{display:flex;align-items:center;gap:2.4mm;font-family:'Lilita One',cursive;font-size:calc(var(--fs) + 1.5pt);text-transform:uppercase;letter-spacing:.4px;margin-bottom:2mm;}
.bola{flex:none;width:7.5mm;height:7.5mm;border-radius:50%;background:#fff;border:1.6px solid currentColor;display:flex;align-items:center;justify-content:center;font-size:11pt;}
.conceito{background:#eaf6fb;border:1.6px solid #b7e1ef;}
.conceito .cx-t{color:#0b6f8a;}
.secoes{columns:2;column-gap:5mm;column-rule:1px dashed #b7e1ef;}
.bl{break-inside:avoid;margin-bottom:2.4mm;line-height:1.38;}
.bl-t{display:inline-block;font-weight:900;font-size:calc(var(--fs) - .5pt);color:#13294b;text-transform:uppercase;letter-spacing:.3px;border-bottom:2px solid #6cc4dc;margin-bottom:1mm;}
.bl p{margin-bottom:.8mm;}
.bl ul{list-style:none;margin:.6mm 0 .8mm;}
.bl li{position:relative;padding-left:3.6mm;margin-bottom:.5mm;}
.bl li::before{content:'';position:absolute;left:.6mm;top:.55em;width:1.5mm;height:1.5mm;border-radius:50%;background:#0891b2;}
.bl .fecho{font-weight:800;color:#13294b;}
.atencao{background:#fff1ef;border:1.6px solid #f4c3bb;}
.atencao .cx-t{color:#b3261e;}
.atencao ul{list-style:none;line-height:1.38;}
.atencao li{position:relative;padding-left:5mm;margin-bottom:1mm;}
.atencao li::before{content:'✕';position:absolute;left:.4mm;top:0;color:#d64545;font-weight:900;font-size:.85em;}
/* faixas (como na referência) */
.faixa{margin-top:4mm;display:flex;gap:3.4mm;align-items:flex-start;border-radius:4mm;padding:3mm 4.2mm;line-height:1.38;}
.fx-ic{flex:none;width:10mm;height:10mm;border-radius:2.6mm;display:flex;align-items:center;justify-content:center;font-size:16pt;}
.fx-t{font-family:'Lilita One',cursive;font-size:calc(var(--fs) + 1.5pt);text-transform:uppercase;letter-spacing:.4px;margin-bottom:.8mm;}
.faixa ul{list-style:none;}
.faixa li{position:relative;padding-left:5.5mm;margin-bottom:.6mm;}
.lembre{background:#fff3e2;border:1.8px solid #f3b06b;}
.lembre .fx-ic{background:#ffe2bf;}
.lembre .fx-t{color:#c2560c;}
.lembre li::before{content:'→';position:absolute;left:0;color:#e8863a;font-weight:900;}
.enem{background:#f4ecfd;border:1.8px solid #c9a8ef;}
.enem .fx-ic{background:#e6d6fb;}
.enem .fx-t{color:#5b2ea6;}
.anot{flex:1;min-height:0;margin-top:4mm;border:1.6px dashed #d9d2c0;border-radius:4mm;padding:2mm 4mm;background:repeating-linear-gradient(to bottom,transparent 0,transparent 8mm,#ece6d6 8mm,#ece6d6 8.3mm);background-position:0 8mm;}
.anot div{font-family:'Patrick Hand',cursive;font-size:13pt;color:#9a927e;}
/* capa e páginas iniciais */
.capa{width:210mm;height:297mm;position:relative;overflow:hidden;break-after:page;background:${mat.capa || 'linear-gradient(160deg,#0b1f4d,#1d3f8f 60%,#3b6fd8)'};color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30mm;}
.capa .emojis{font-size:40pt;letter-spacing:6pt;margin-bottom:10mm;}
.capa .k{font-family:'Patrick Hand',cursive;font-size:30pt;}
.capa h1{font-family:'Lilita One',cursive;font-size:60pt;line-height:1;color:#ffd84d;text-shadow:3px 4px 0 rgba(0,0,0,.35);margin:2mm 0 8mm;letter-spacing:1px;}
.capa .sub{font-size:14.5pt;font-weight:700;max-width:150mm;line-height:1.45;}
.capa .tag{margin-top:12mm;background:#fff;color:#0b1f4d;font-family:'Lilita One',cursive;font-size:15pt;padding:3mm 8mm;border-radius:30px;}
.capa .marca{position:absolute;bottom:14mm;font-family:'Patrick Hand',cursive;font-size:15pt;opacity:.9;}
.capa .bola-c{position:absolute;border-radius:50%;background:rgba(255,255,255,.07);}
.inicial h2{font-family:'Lilita One',cursive;font-size:26pt;color:#13294b;text-align:center;margin:2mm 0 6mm;text-transform:uppercase;}
.sumario ol{list-style:none;columns:1;font-size:12.5pt;line-height:1.5;padding:0 6mm;}
.sumario li{display:flex;gap:3mm;align-items:center;border-bottom:1px dashed #eadfbf;padding:.9mm 0;}
.sumario li span{flex:none;width:9mm;background:#13294b;color:#fff;font-family:'Lilita One',cursive;font-size:10pt;text-align:center;border-radius:1.5mm;padding:.3mm 0;}
.sumario li i{font-style:normal;margin-left:auto;font-size:9.5pt;font-weight:800;color:#7a5300;}
.como .item{display:flex;gap:4mm;align-items:flex-start;border-radius:4mm;padding:4mm 5mm;margin-bottom:4mm;font-size:11.5pt;line-height:1.5;}
.como .item .fx-ic{width:12mm;height:12mm;font-size:18pt;}
.como .item b.t{display:block;font-family:'Lilita One',cursive;font-weight:400;font-size:14pt;text-transform:uppercase;margin-bottom:1mm;}
</style></head><body>
<div class="capa">
  <div class="bola-c" style="width:120mm;height:120mm;right:-40mm;top:-30mm;"></div>
  <div class="bola-c" style="width:80mm;height:80mm;left:-30mm;bottom:20mm;"></div>
  <div class="emojis">${mat.emojis || mat.icone}</div>
  <div class="k">Material de</div>
  <h1>${esc(mat.nome.toUpperCase())}</h1>
  <div class="sub">Os ${total} temas que mais caem no ENEM, um por página: conceito, pontos de atenção, lembretes rápidos e como cai no ENEM.</div>
  <div class="tag">${total} temas · 1 página cada</div>
  <div class="marca">Acelera Enem</div>
</div>
<div class="folha"><div class="cartao inicial sumario"><h2>Conteúdos</h2><ol>${mat.temas.map((t, i) => `<li><span>${dois(i + 1)}</span>${esc(t.t)}${t.p === 'a' || t.prio === 'a' ? '<i>🔥 cai muito</i>' : ''}</li>`).join('')}</ol></div><div class="rodape">Acelera Enem · Material de ${esc(mat.nome)}</div><div class="pg">2</div></div>
<div class="folha"><div class="cartao inicial como"><h2>Como usar</h2>
  <div class="item caixa conceito" style="margin-top:0"><div class="fx-ic" style="background:#cdeef6">📖</div><div><b class="t" style="color:#0b6f8a">Conceito / Visão geral</b>O que você precisa entender do tema, em tópicos curtos. Leia com calma uma vez.</div></div>
  <div class="item caixa atencao"><div class="fx-ic" style="background:#fcd9d3">⚠️</div><div><b class="t" style="color:#b3261e">Pontos de atenção</b>As pegadinhas e os erros que mais derrubam na prova. Releia antes de fazer exercícios.</div></div>
  <div class="item faixa lembre"><div class="fx-ic">💡</div><div><b class="t" style="color:#c2560c">Lembretes rápidos</b>O essencial do tema em poucas linhas. Use para revisar em segundos, 1, 3 e 7 dias depois.</div></div>
  <div class="item faixa enem"><div class="fx-ic">🎓</div><div><b class="t" style="color:#5b2ea6">Como cai no ENEM</b>O contexto em que o assunto costuma aparecer na prova.</div></div>
  <div class="item caixa" style="background:#fff8db;border:1.6px solid #f2c94c"><div class="fx-ic" style="background:#fff0b3">🔥</div><div><b class="t" style="color:#7a5300">Comece pelo 🔥</b>Os temas com o selo "Cai muito no ENEM" aparecem com frequência nas provas. Se o tempo estiver curto, priorize esses.</div></div>
</div><div class="rodape">Acelera Enem · Material de ${esc(mat.nome)}</div><div class="pg">3</div></div>
${mat.temas.map((t, i) => paginaTema(t, i, mat, erros, lembretes, total)).join('')}
</body></html>`;
}

(async () => {
  const pedidos = process.argv.slice(2);
  const ids = pedidos.length ? pedidos : ['mat','fis','qui','bio','his','geo','fil','soc','lin'];
  fs.mkdirSync(DIR_PDF, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const id of ids) {
    const mat = carregar(id), erros = carregarErros(id), lembretes = carregarLembretes(id);
    const avisos = [];
    mat.temas.forEach(t => {
      if (!erros[t.t] || erros[t.t].length < 2) avisos.push(t.t + ': poucos pontos de atenção');
      if (!lembretes[t.t] || lembretes[t.t].length < 2) avisos.push(t.t + ': sem lembretes rápidos');
      if (!t.enem) avisos.push(t.t + ': sem "Como cai no ENEM"');
    });
    Object.keys(lembretes).forEach(k => { if (!mat.temas.some(t => t.t === k)) avisos.push('lembrete com título que não existe: ' + k); });
    const arq = path.join(__dirname, '_tmp_flash_' + id + '.html');
    fs.writeFileSync(arq, html(mat, erros, lembretes));
    await p.goto('file://' + arq, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    /* cada tema cabe em uma página: reduz a letra até caber (mínimo 8,5pt) */
    const res = await p.evaluate(() => [...document.querySelectorAll('.cartao[data-t]')].map(c => {
      let fs = 14; c.style.setProperty('--fs', fs + 'pt');
      while (c.scrollHeight > c.clientHeight + 1 && fs > 8.5) { fs -= .25; c.style.setProperty('--fs', fs + 'pt'); }
      const sobra = c.clientHeight - c.scrollHeight;
      if (sobra > 140) { const a = document.createElement('div'); a.className = 'anot'; a.innerHTML = '<div>✍️ Minhas anotações</div>'; c.appendChild(a); }
      return { t: c.dataset.t, fs, cabe: c.scrollHeight <= c.clientHeight + 1 };
    }));
    res.filter(r => !r.cabe).forEach(r => avisos.push(r.t + ': NÃO coube em uma página'));
    res.filter(r => r.cabe && r.fs < 10).forEach(r => avisos.push(r.t + ': letra pequena (' + r.fs + 'pt)'));
    const buf = await p.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
    fs.unlinkSync(arq);
    const doc = await PDFDocument.load(buf);
    doc.setTitle('Material de ' + mat.nome + ' para o ENEM');
    doc.setAuthor('Acelera Enem');
    const nome = 'Resumo-' + mat.nome.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-');
    const saida = path.join(DIR_PDF, nome + '.pdf');
    fs.writeFileSync(saida, await doc.save());
    console.log((avisos.length ? '⚠️ ' : 'OK ') + path.relative(RAIZ, saida) + ' · ' + doc.getPageCount() + ' páginas' + (avisos.length ? ' (' + avisos.length + ' avisos)\n   ' + avisos.join('\n   ') : ''));
  }
  await b.close();
})();
