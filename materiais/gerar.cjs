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

function html(mat, parte){
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
  <div class="bloco"><h3>1. Um tema por vez</h3>Leia um tema por sessão de estudo. Cada um foi feito para caber em poucos minutos de leitura, com o essencial que a prova cobra.</div>
  <div class="bloco"><h3>2. Comece pelo 🔥</h3>Os temas com o selo <b>"Cai muito no ENEM"</b> aparecem com frequência nas provas. Se o tempo estiver curto, priorize esses.</div>
  <div class="bloco"><h3>3. Siga o seu plano</h3>No app <b>Plano ENEM</b>, o seu plano semanal diz quais temas estudar em cada dia. Depois de ler, toque em <b>"Marcar como lido"</b> para o tema entrar no seu desempenho.</div>
  <div class="bloco"><h3>4. Revise no tempo certo</h3>Releia cada tema <b>1 dia, 3 dias e 7 dias</b> depois da primeira leitura. O app avisa quando chega a hora de revisar.</div>
  <div class="bloco"><h3>5. Leia o "Como cai no ENEM"</h3>No fim de cada tema há uma dica sobre o jeito que o assunto costuma aparecer nas questões. Ela mostra onde prestar mais atenção.</div>
</div>`, 2)}
${mat.temas.map((t, i) => temaHTML(t, i, mat)).join('')}
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
    fs.writeFileSync(arq, html(mat));
    await p.goto('file://' + arq, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
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
