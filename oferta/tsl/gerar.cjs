/* Gera o vídeo TSL a partir de oferta/tsl/roteiro.cjs.
   Uso (na raiz do repositório): node oferta/tsl/gerar.cjs
   Precisa de: playwright (Chromium) e ffmpeg. Fontes Montserrat em oferta/tsl/fontes/ (opcional).
   Saída: oferta/tsl.mp4 e oferta/tsl-capa.jpg */
const fs = require('fs'), path = require('path'), { execFileSync, execSync } = require('child_process');
let pw; try { pw = require('playwright'); } catch (e) { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }

const RAIZ = path.resolve(__dirname, '../..');
const TMP = fs.mkdtempSync(path.join(require('os').tmpdir(), 'tsl-'));
const ROTEIRO = require('./roteiro.cjs');
const FPS = 30, W = 1080, H = 1920;

const fonte = (p, w) => fs.existsSync(path.join(__dirname, 'fontes', p))
  ? `@font-face{font-family:M;font-weight:${w};src:url('file://${path.join(__dirname, 'fontes', p)}')}` : '';
const arq = u => 'file://' + path.join(RAIZ, u);
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const marca = s => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>');

function html(s, i) {
  let midia = '';
  if (s.img === 'topicos') midia = `<div class="capas">${[1,3,5,7,9,12].map(c => `<img src="${arq('oferta/img/topico-' + c + '.webp')}">`).join('')}</div>`;
  else if (s.img && s.tipo === 'pagina') midia = `<img class="pagina" src="${arq(s.img)}">`;
  else if (s.img) midia = `<img class="cel" src="${arq(s.img)}">`;
  if (s.lista) midia = `<ul>${s.lista.map(l => `<li>${esc(l)}</li>`).join('')}</ul>`;
  const temMidia = !!(s.img || s.lista);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${fonte('m700.ttf',700)}${fonte('m800.ttf',800)}${fonte('m900.ttf',900)}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:M,Montserrat,'DejaVu Sans',sans-serif;color:#04222b;
 background:${s.destaque ? '#e6f7fb' : '#f7f2e8'};
 display:flex;flex-direction:column;align-items:center;justify-content:center;padding:150px 90px 220px;text-align:center}
.topo{position:absolute;top:70px;left:0;right:0;display:flex;justify-content:center}
.topo span{font-weight:800;font-size:30px;letter-spacing:6px;text-transform:uppercase;color:#0891b2;border:3px solid rgba(8,145,178,.4);border-radius:999px;padding:12px 30px}
.prog{position:absolute;left:0;bottom:0;height:12px;background:#0891b2;width:${Math.round((i + 1) / ROTEIRO.length * 100)}%}
h1{font-weight:900;font-size:${temMidia ? 74 : (s.t.length > 60 ? 92 : 108)}px;line-height:1.14;letter-spacing:-1px;text-wrap:balance}
h1 em{font-style:normal;color:#04222b;background:#ffd84d;padding:0 14px;border-radius:14px;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.midia{margin-bottom:60px;display:flex;justify-content:center}
.cel{width:520px;border-radius:56px;border:16px solid #050b18;box-shadow:0 40px 90px rgba(4,34,43,.35)}
.pagina{width:760px;border-radius:18px;box-shadow:0 40px 90px rgba(4,34,43,.3)}
.capas{display:grid;grid-template-columns:repeat(3,250px);gap:22px}
.capas img{width:250px;border-radius:14px;box-shadow:0 20px 40px rgba(4,34,43,.3)}
ul{list-style:none;text-align:left;width:100%}
li{font-weight:800;font-size:54px;line-height:1.25;padding:26px 0 26px 92px;position:relative;border-bottom:3px solid rgba(4,34,43,.1)}
li::before{content:'✓';position:absolute;left:0;top:22px;width:66px;height:66px;border-radius:50%;background:#12a150;color:#fff;font-size:40px;display:flex;align-items:center;justify-content:center}
.preco{font-weight:900;font-size:230px;color:#0891b2;line-height:1;margin-top:40px}
.preco small{font-size:90px}
.nota{font-weight:700;font-size:44px;opacity:.85;margin-top:30px}
.selo{width:420px;height:420px;border-radius:50%;background:#ffd84d;color:#04222b;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:70px;box-shadow:inset 0 0 0 14px #fff,0 0 0 10px #ffd84d}
.selo b{font-size:200px;font-weight:900;line-height:.9}.selo span{font-size:40px;font-weight:900;letter-spacing:3px;text-transform:uppercase}
.seta{font-size:200px;margin-top:60px;color:#0891b2;line-height:1}
</style></head><body>
<div class="topo"><span>Acelera Enem</span></div>
${s.selo ? '<div class="selo"><b>7</b><span>dias de garantia</span></div>' : ''}
${s.lista
  ? `<h1 style="margin-bottom:50px">${marca(s.t)}</h1><div class="midia">${midia}</div>`
  : (midia ? `<div class="midia">${midia}</div>` : '') + `<h1>${marca(s.t)}</h1>`}
${s.preco ? `<div class="preco"><small>R$</small> ${esc(s.preco.replace('R$ ',''))}</div>${s.nota ? `<div class="nota">${esc(s.nota)}</div>` : ''}` : ''}
${s.seta ? '<div class="seta">⬇</div>' : ''}
<div class="prog"></div>
</body></html>`;
}

/* tempo de leitura: ~3,2 palavras por segundo + respiro, mínimo 2 s */
function duracao(s) {
  const palavras = (s.t + ' ' + (s.lista || []).join(' ') + ' ' + (s.preco || '')).split(/\s+/).filter(Boolean).length;
  let d = 1.1 + palavras / 3.2;
  if (s.img || s.lista) d += 1.2;
  if (s.preco || s.selo) d += 1;
  return Math.max(2.0, Math.min(d, 9));
}

(async () => {
  const b = await pw.chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H } });
  const lista = [];
  for (let i = 0; i < ROTEIRO.length; i++) {
    const f = path.join(TMP, `s${String(i).padStart(3, '0')}.html`);
    fs.writeFileSync(f, html(ROTEIRO[i], i));
    await p.goto('file://' + f, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    const png = f.replace('.html', '.png');
    await p.screenshot({ path: png });
    const d = duracao(ROTEIRO[i]), mp4 = f.replace('.html', '.mp4');
    /* leve zoom de entrada + fade, para dar movimento */
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-loop', '1', '-framerate', String(FPS), '-t', d.toFixed(2), '-i', png,
      '-vf', `scale=w='${W}*(1.04-0.04*min(t/0.35\\,1))':h=-2:eval=frame,crop=${W}:${H},fade=in:st=0:d=0.18,format=yuv420p`,
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-r', String(FPS), mp4]);
    lista.push(`file '${mp4}'`);
    if (i === 0) fs.copyFileSync(png, path.join(TMP, 'capa.png'));
    process.stdout.write(`\r${i + 1}/${ROTEIRO.length}`);
  }
  await b.close();
  fs.writeFileSync(path.join(TMP, 'lista.txt'), lista.join('\n'));
  const saida = path.join(RAIZ, 'oferta/tsl.mp4');
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', path.join(TMP, 'lista.txt'), '-c', 'copy', '-movflags', '+faststart', saida]);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', path.join(TMP, 'capa.png'), '-vf', 'scale=540:-2', '-q:v', '4', path.join(RAIZ, 'oferta/tsl-capa.jpg')]);
  const total = ROTEIRO.reduce((a, s) => a + duracao(s), 0);
  console.log(`\nOK ${saida} (${Math.round(total)} s, ${ROTEIRO.length} telas)`);
})();
