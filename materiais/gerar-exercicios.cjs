/* =========================================================
   Gera os PDFs de EXERCÍCIOS de cada matéria (order bump "Exercícios e simulados").
   Usa as questões escritas em materiais/ext/<id>-N.cjs (campos ex e pr de cada tema):
   Simulado de 25 questões por matéria (1 por tema), com gabarito comentado no fim.
   Uso:  node materiais/gerar-exercicios.cjs [ids]      Saída: materiais/pdf/Exercicios-<Nome>.pdf
   Suba os arquivos no bucket privado "materiais" do Supabase (ver supabase/schema.sql).
   ========================================================= */
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const { PDFDocument } = require('pdf-lib');

const RAIZ = path.join(__dirname, '..');
const DIR_CONT = path.join(RAIZ, 'shared', 'conteudo');
const DIR_PDF = path.join(__dirname, 'pdf');
const L = ['A', 'B', 'C', 'D', 'E'];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

function carregarMat(id) {
  const window = {};
  new Function('window', fs.readFileSync(path.join(DIR_CONT, id + '.js'), 'utf8'))(window);
  return window.CONTEUDO[id];
}
function carregarExt(id) {
  const mapa = {};
  const dir = path.join(__dirname, 'ext');
  fs.readdirSync(dir).filter(f => new RegExp('^' + id + '-\\d+\\.cjs$').test(f))
    .sort((a, b) => parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]))
    .forEach(f => require(path.join(dir, f)).forEach(d => { mapa[d.t] = d; }));
  return mapa;
}

function html(mat, ext) {
  /* simulado: 1 questão por tema, numeradas de 1 a N na ordem dos temas */
  const temas = mat.temas.map(t => ({ t: t.t, q: [].concat((ext[t.t] || {}).ex || [], (ext[t.t] || {}).pr || []).slice(0, 1) })).filter(t => t.q.length);
  const corpo = `<section class="simulado">` + temas.map((t, i) => { const q = t.q[0]; return `<div class="q"><div class="qn">Questão ${i + 1}</div><p class="en">${fmt(q.q)}</p>
      <ol>${q.a.map((a, j) => `<li><b>${L[j]}</b><span>${fmt(a)}</span></li>`).join('')}</ol></div>`; }).join('') + `</section>`;
  const gab = temas.map((t, i) => `<p><b>${i + 1} · ${t.q[0].g}.</b> <i>${esc(t.t)}.</i> ${fmt(t.q[0].c)}</p>`).join('');
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><style>
@page{size:A4;margin:16mm 16mm 18mm;}
*{box-sizing:border-box;}
body{font-family:'Helvetica','Arial',sans-serif;color:#16213f;font-size:11pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.capa{height:250mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:linear-gradient(160deg,#04222b,#0891b2 70%,#35cfe6);color:#fff;border-radius:6px;break-after:page;}
.capa .k{font-size:20pt;opacity:.9}.capa h1{font-size:46pt;line-height:1.05;margin:6mm 0;color:#fff;text-transform:uppercase;}
.capa .s{font-size:14pt;max-width:130mm;opacity:.95}.capa .m{margin-top:14mm;font-size:11pt;opacity:.85}
.como{break-after:page;}.como h2{font-size:22pt;color:#0891b2;margin-bottom:6mm}.como p{margin-bottom:4mm}
.simulado{break-before:page;}
.tema h2{display:flex;align-items:center;gap:3mm;font-size:17pt;color:#04222b;border-bottom:3px solid #0891b2;padding-bottom:2mm;margin-bottom:5mm}
.tema h2 span{background:#0891b2;color:#fff;border-radius:50%;width:9mm;height:9mm;display:inline-flex;align-items:center;justify-content:center;font-size:12pt}
.q{break-inside:avoid;margin-bottom:6mm;border:1.5px solid #cfeef5;border-radius:8px;padding:3.5mm 4.5mm}
.qn{font-weight:800;color:#0891b2;font-size:10pt;text-transform:uppercase;letter-spacing:.5px;margin-bottom:1mm}
.en{margin-bottom:2mm}
ol{list-style:none}ol li{display:flex;gap:2.5mm;margin:1mm 0}
ol li b{flex:none;width:6mm;height:6mm;border-radius:50%;border:1.5px solid #0891b2;color:#0891b2;display:inline-flex;align-items:center;justify-content:center;font-size:9pt}
.gabarito{break-before:page}.gabarito>h2{font-size:22pt;color:#0891b2;margin-bottom:5mm}
.gabarito p{font-size:10pt;margin-bottom:3mm;break-inside:avoid}
</style></head><body>
<div class="capa"><div class="k">Acelera Enem</div><h1>Simulado de<br>${esc(mat.nome)}</h1>
<div class="s">${temas.length} questões no estilo do ENEM, uma de cada tema, com gabarito comentado</div><div class="m">Exercícios e simulados · Material autoral</div></div>
<div class="como"><h2>Como usar</h2>
<p>Este simulado tem ${temas.length} questões, uma de cada tema da matéria, no estilo do ENEM. Resolva todas <b>sem consultar nada</b>, marcando o tempo. Uma boa referência é de 3 a 4 minutos por questão.</p>
<p>Só depois confira o <b>gabarito comentado</b> no fim deste arquivo e releia o que errou.</p>
<p>Anote os temas das questões que você errou e volte a eles em 1 dia, 3 dias e 7 dias. Cada questão do gabarito traz o nome do tema para você achar o material.</p>
<p><i>As questões são originais e servem para treino. Elas não são questões oficiais do ENEM.</i></p></div>
${corpo}
<div class="gabarito"><h2>Gabarito comentado</h2>${gab}</div>
</body></html>`;
}

(async () => {
  const pedidos = process.argv.slice(2);
  const ids = pedidos.length ? pedidos : fs.readdirSync(DIR_CONT).filter(f => f.endsWith('.js')).map(f => f.replace('.js', ''));
  fs.mkdirSync(DIR_PDF, { recursive: true });
  const b = await chromium.launch(); const p = await b.newPage();
  for (const id of ids) {
    const mat = carregarMat(id), ext = carregarExt(id);
    const falta = mat.temas.filter(t => !ext[t.t]);
    if (falta.length) { console.log('  ⚠️ ' + id + ': ' + falta.length + ' temas sem questões'); }
    const arq = path.join(__dirname, '_tmp_ex_' + id + '.html');
    fs.writeFileSync(arq, html(mat, ext));
    await p.goto('file://' + arq, { waitUntil: 'load' });
    const buf = await p.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#6b7590;">Acelera Enem · Exercícios · <span class="pageNumber"></span></div>' });
    fs.unlinkSync(arq);
    const doc = await PDFDocument.load(buf);
    doc.setTitle('Simulado de ' + mat.nome + ' para o ENEM'); doc.setAuthor('Acelera Enem');
    const nome = 'Exercicios-' + mat.nome.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-') + '.pdf';
    fs.writeFileSync(path.join(DIR_PDF, nome), await doc.save());
    console.log('OK', nome, doc.getPageCount() + ' páginas');
  }
  await b.close();
})();
