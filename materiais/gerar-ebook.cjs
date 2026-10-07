/* =========================================================
   Gera o e-book "Arsenal de Redações para o ENEM" (order bump: Material Preparatório para Redação).
   Conteúdo: shared/arsenal.js + materiais/ebook-extra.cjs (frases filosóficas extras).
   Uso:  node materiais/gerar-ebook.cjs        Saída: materiais/pdf/Arsenal-de-Redacoes-ENEM.pdf
   Entrega: só pela plataforma de vendas (sem acesso no app).
   ========================================================= */
const fs = require('fs'), path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const { PDFDocument } = require('pdf-lib');
const window = {}; new Function('window', fs.readFileSync(path.join(__dirname, '..', 'shared', 'arsenal.js'), 'utf8'))(window);
const A = window.ARSENAL; const filos = A.filosofos.concat(require('./ebook-extra.cjs'));
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const dest = s => esc(s).replace(/\[([^\]]+)\]/g, '<span class="v">[$1]</span>');   // [CAMPOS] em destaque

const sec = (n, titulo, sub, corpo) => `<section class="sec"><div class="sh"><span>${n}</span><div><h2>${esc(titulo)}</h2><p>${esc(sub)}</p></div></div>${corpo}</section>`;
const lista = (arr) => arr.map((t, i) => `<div class="it"><b>${i + 1}</b><p>${dest(t)}</p></div>`).join('');

const corpo = [
  sec(1, 'Modelos prontos para introdução', 'Dez formas de abrir a redação. Troque os [CAMPOS] pelo seu tema.',
    A.introducao.map((m, i) => `<div class="card"><div class="ct">${i + 1}. ${esc(m.titulo)}</div><p>${dest(m.texto)}</p></div>`).join('')),
  sec(2, 'Modelos prontos para tese', 'A tese apresenta o seu ponto de vista e as duas causas que você vai desenvolver.', lista(A.tese)),
  sec(3, '50 tópicos frasais', 'Frases para abrir cada parágrafo de desenvolvimento.', lista(A.topicos)),
  sec(4, 'Alusões históricas', 'Repertório sociocultural para contextualizar o tema, com os assuntos em que cada fato funciona.',
    A.alusoes.map((a, i) => `<div class="card"><div class="ct">${i + 1}. ${esc(a.fato)}</div><p>${esc(a.texto)}</p><p class="tg">Use em: ${esc(a.temas)}</p></div>`).join('')),
  sec(5, '50 frases coringas', 'Frases que servem para vários temas e ajudam a conectar as ideias.', lista(A.coringas)),
  sec(6, 'Frases filosóficas e sociológicas', 'Ideias de pensadores resumidas com as palavras do próprio texto, para citar como repertório (sem aspas, como paráfrase).',
    filos.map((f, i) => `<div class="card"><div class="ct">${i + 1}. ${esc(f.autor)}</div><p>${esc(f.ideia)}</p><p class="tg">Use em: ${esc(f.temas)}</p></div>`).join('')),
  sec(7, 'Frases de efeito para proposta de intervenção', 'A proposta precisa de agente, ação, meio, finalidade e detalhamento.',
    `<div class="els">${A.proposta.elementos.map(e => `<div class="el"><b>${esc(e.nome)}</b><span>${esc(e.pergunta)}</span><i>${esc(e.exemplos)}</i></div>`).join('')}</div>${lista(A.proposta.frases)}`),
  sec(8, 'Conectivos com exemplos de uso', 'Organize cada função e varie os conectivos ao longo do texto.',
    A.conectivos.map(c => `<div class="card"><div class="ct">${esc(c.funcao)}</div><p class="li">${c.lista.map(esc).join(' · ')}</p><p><i>${esc(c.exemplo)}</i></p></div>`).join('')),
  sec(9, 'Bônus: estrutura, competências e checklist', 'O esqueleto da redação e o que cada competência cobra.',
    A.bonus.estrutura.map(e => `<div class="card"><div class="ct">${esc(e.p)}</div><ul>${e.itens.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('') +
    A.bonus.competencias.map(c => `<div class="card"><div class="ct">${esc(c.c)}: ${esc(c.t)}</div><ul>${c.dicas.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')),
  sec(10, 'O que zera a redação', 'Evite estes pontos.', `<div class="card"><ul>${A.bonus.zera.map(z => `<li>${esc(z)}</li>`).join('')}</ul></div>`),
  sec(11, 'Temas anteriores e eixos para treinar', 'Treine a escrita com temas já cobrados e com eixos que costumam aparecer.',
    `<div class="card"><div class="ct">Temas de anos anteriores</div><ul>${A.bonus.temasAnteriores.map(z => `<li>${esc(z)}</li>`).join('')}</ul></div><div class="card"><div class="ct">20 eixos para treinar</div><ul>${A.bonus.eixos.map(z => `<li>${esc(z)}</li>`).join('')}</ul></div>`)
].join('');

const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><style>
@page{size:A4;margin:16mm 16mm 18mm;}*{box-sizing:border-box}
body{font-family:Helvetica,Arial,sans-serif;color:#16213f;font-size:11pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.capa{height:250mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:linear-gradient(160deg,#0b2a8f,#1d5fd8 65%,#4b8bff);color:#fff;border-radius:6px;break-after:page}
.capa .k{font-size:22pt;font-weight:800;letter-spacing:1px}.capa h1{font-size:50pt;line-height:1.02;margin:5mm 0;color:#ffd84d;text-transform:uppercase;text-shadow:3px 3px 0 rgba(0,0,0,.25)}
.capa .s{font-size:14pt;max-width:140mm}.capa .m{margin-top:14mm;font-size:10.5pt;opacity:.9}
.intro{break-after:page}.intro h2{font-size:22pt;color:#1d5fd8;margin-bottom:6mm}.intro p{margin-bottom:4mm}
.intro .aviso{border:1.5px solid #cfdaf0;border-radius:8px;padding:4mm;background:#f4f7fd;font-size:10pt;margin-top:8mm}
.sec{break-before:page}
.sh{display:flex;gap:4mm;align-items:center;border-bottom:3px solid #ffd84d;padding-bottom:3mm;margin-bottom:5mm}
.sh span{flex:none;width:11mm;height:11mm;border-radius:50%;background:#1d5fd8;color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:13pt}
.sh h2{font-size:17pt;color:#0b2a8f}.sh p{font-size:10pt;color:#5b6784}
.it{display:flex;gap:3mm;margin-bottom:2.2mm;break-inside:avoid}.it b{flex:none;width:7mm;height:7mm;border-radius:50%;background:#e8f0ff;color:#1d5fd8;font-size:9pt;display:flex;align-items:center;justify-content:center}.it p{margin:0}
.card{border:1.5px solid #dbe3f2;border-radius:8px;padding:3.5mm 4.5mm;margin-bottom:3.5mm;break-inside:avoid}
.ct{font-weight:800;color:#1d5fd8;margin-bottom:1mm}.card p{margin-bottom:1mm}.tg{font-size:9.5pt;color:#5b6784}.li{font-weight:700}
ul{padding-left:5mm}li{margin:.6mm 0}
.v{background:#fff3b0;border-radius:3px;padding:0 1mm}
.els{display:grid;grid-template-columns:1fr 1fr;gap:3mm;margin-bottom:5mm}.el{border:1.5px solid #dbe3f2;border-radius:8px;padding:3mm;break-inside:avoid}.el b{display:block;color:#1d5fd8}.el span{display:block;font-weight:700;font-size:10pt}.el i{font-size:9.5pt;color:#5b6784}
</style></head><body>
<div class="capa"><div class="k">ARSENAL de</div><h1>Redações<br>para o ENEM</h1><div class="s">Material preparatório para redação: modelos, repertório e frases prontas para usar como referência</div><div class="m">Material autoral · Acelera Enem</div></div>
<div class="intro"><h2>Como usar este material</h2>
<p><b>1.</b> Comece pela estrutura (seção 9) e escolha um tema da seção 11 para treinar.</p>
<p><b>2.</b> Monte a introdução com um dos modelos (seção 1), escolhendo uma alusão (seção 4) ou um pensador (seção 6) que combine com o tema.</p>
<p><b>3.</b> Escreva a tese (seção 2) e abra cada desenvolvimento com um tópico frasal (seção 3).</p>
<p><b>4.</b> Conecte as ideias com os conectivos (seção 8) e feche com a proposta de intervenção completa (seção 7).</p>
<p><b>5.</b> Revise com as competências e confira se nada do que zera a redação (seção 10) apareceu.</p>
<div class="aviso">Os modelos servem como <b>referência</b>: adapte ao tema, escreva com as suas palavras e evite copiar trechos prontos sem adaptação. Este material não garante nota nem resultado e não tem vínculo com o INEP ou o MEC.</div></div>
${corpo}
</body></html>`;

(async () => {
  const arq = path.join(__dirname, '_tmp_ebook.html'); fs.writeFileSync(arq, html);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + arq, { waitUntil: 'load' });
  const buf = await p.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#6b7590;">Arsenal de Redações para o ENEM · <span class="pageNumber"></span></div>' });
  await b.close(); fs.unlinkSync(arq);
  const doc = await PDFDocument.load(buf); doc.setTitle('Arsenal de Redações para o ENEM'); doc.setAuthor('Acelera Enem');
  fs.mkdirSync(path.join(__dirname, 'pdf'), { recursive: true });
  const out = path.join(__dirname, 'pdf', 'Arsenal-de-Redacoes-ENEM.pdf'); fs.writeFileSync(out, await doc.save());
  console.log('OK', out, doc.getPageCount() + ' páginas');
})();
