/* =========================================================
   Gera o bônus "Método das Palavras-Chave" (PDF).
   Uso:  node materiais/gerar-palavras.cjs
   Saída: materiais/pdf/Metodo-Palavras-Chave.pdf (fora do git, vai para o bucket "materiais")
   Mesmo visual dos materiais de 1 página por tema (gerar-flash.cjs).
   As questões dos exemplos são autorais, não são questões oficiais do ENEM.
   ========================================================= */
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');
const { PDFDocument } = require('pdf-lib');

const DIR_PDF = path.join(__dirname, 'pdf');
const NOME = 'Método das Palavras-Chave';
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/==(.+?)==/g, '<mark>$1</mark>');
const ul = (itens, cls) => `<ul${cls ? ` class="${cls}"` : ''}>${itens.map(i => `<li>${fmt(i)}</li>`).join('')}</ul>`;

/* ---------- conteúdo ---------- */
const COMANDOS = [
  ['Identificar / reconhecer', 'Achar algo que está dito ou mostrado no texto.', 'A resposta está no texto, quase com as mesmas ideias.'],
  ['Inferir / deduzir', 'Concluir algo que o texto não diz com todas as letras, mas permite concluir.', 'A conclusão precisa sair do texto, não da sua opinião.'],
  ['Comparar', 'Ver semelhanças e diferenças entre dois textos, fatos ou dados.', 'A alternativa certa fala dos DOIS lados da comparação.'],
  ['Relacionar', 'Ligar duas coisas: causa e efeito, texto e contexto, dado e conclusão.', 'Confira se a ligação feita é a mesma que o texto sugere.'],
  ['Finalidade / objetivo', 'Para que o texto ou o recurso foi usado.', 'Pense no gênero: propaganda convence, notícia informa.'],
  ['Efeito de sentido', 'O que uma palavra, imagem ou recurso provoca no leitor.', 'Não basta nomear a figura: diga o efeito dela no texto.'],
  ['Consequência / impacto', 'O resultado de um fato ou processo.', 'Não confunda com a causa: a consequência vem depois.'],
  ['Calcular / estimar', 'Chegar a um número a partir dos dados.', '"Aproximadamente" permite arredondar; leia as unidades.']
];
const SINAIS = [
  ['Palavras absolutas', ['sempre, nunca, todos, nenhum', 'apenas, somente, exclusivamente', 'únicos, totalmente'], 'Alternativas com elas costumam generalizar. Só servem se o texto também generaliza.'],
  ['Negações no comando', ['EXCETO, NÃO, INCORRETA', '"não pode ser considerado"', '"contraria a ideia do texto"'], 'Inverta a busca: você procura a alternativa que NÃO combina. Circule a negação.'],
  ['Grau e escolha', ['principal, predominante', 'mais adequado, melhor', 'central, essencial'], 'Mais de uma alternativa pode ser verdadeira. Escolha a que responde melhor ao comando.'],
  ['Relações de ideia', ['porque, pois, já que (causa)', 'portanto, logo (conclusão)', 'para que, a fim de (finalidade)', 'embora, mas, porém (oposição)'], 'Mostram como as ideias do texto se ligam. A resposta segue a mesma relação.'],
  ['Tempo e sequência', ['antes, depois, a partir de', 'em seguida, ao longo de', '"no contexto de..."'], 'Situam o fato no tempo. Alternativa com época ou ordem trocada está errada.'],
  ['Matemática do enunciado', ['aproximadamente, no mínimo, no máximo', '"a cada", "sobre o novo valor"', 'unidades: km, m, h, min, %'], 'Mudam a conta. "Sobre o novo valor" indica aumentos ou descontos sucessivos.']
];
const AREAS = [
  ['Linguagens', '📚', ['finalidade, intenção, objetivo', 'efeito de sentido, recurso expressivo', 'gênero, suporte, público', 'variação linguística, adequação', 'intertextualidade, crítica, ironia'], 'Pergunte: quem fala, para quem, com que objetivo e com que recurso.'],
  ['Ciências Humanas', '🌎', ['contexto histórico, período, processo', 'causa, consequência, impacto', 'permanência x ruptura', 'território, espaço, sociedade', 'cidadania, direitos, poder'], 'Situe o tempo e o lugar. O ENEM liga o fato a um processo maior.'],
  ['Ciências da Natureza', '🔬', ['fenômeno, processo, transformação', 'energia, matéria, equilíbrio', 'impacto ambiental, sustentabilidade', 'variável, experimento, hipótese', 'saúde, prevenção, tecnologia'], 'Identifique o fenômeno do cotidiano e o conceito que o explica.'],
  ['Matemática', '📐', ['razão, proporção, porcentagem', 'média, mediana, gráfico, tabela', 'escala, área, volume, unidade', 'aproximadamente, no mínimo, no máximo', 'probabilidade, combinação, "a cada"'], 'Separe os dados úteis, confira as unidades e veja o que a pergunta quer de fato.']
];
const ARMADILHAS = [
  ['Extrapola o texto', 'Traz uma informação que pode até ser verdadeira, mas não está no texto nem pode ser concluída dele.'],
  ['Contradiz o texto', 'Afirma o contrário do que o texto diz. Volte ao trecho e confira.'],
  ['Verdadeira, mas não responde', 'Está correta, porém não atende ao comando (pede consequência e ela fala da causa).'],
  ['Generaliza demais', 'Usa "sempre", "todos", "nunca" quando o texto fala de um caso específico.'],
  ['Inverte a relação', 'Troca causa por efeito, ou o antes pelo depois.']
];
const EXEMPLOS = [
  { area: 'Linguagens', icone: '📚',
    texto: 'Campanha de uma prefeitura: "Seu lixo tem destino certo. Separe, lave e descarte no lugar correto. A cidade agradece."',
    pergunta: 'A ==finalidade principal== desse texto é',
    alts: ['informar quanto lixo a cidade produz por dia.', 'convencer o leitor a mudar a forma de descartar o lixo.', 'narrar a história da coleta seletiva na cidade.', 'criticar as empresas que não fazem reciclagem.', 'descrever como funciona uma usina de reciclagem.'],
    certa: 1,
    chaves: ['"finalidade principal": o comando quer o objetivo do texto', 'verbos no imperativo: "separe, lave e descarte"', 'gênero: campanha, que busca mudar um comportamento'],
    elimina: ['A, E: extrapolam (o texto não traz dados nem fala de usina)', 'C: o texto não conta uma história', 'D: não há crítica a empresas no texto'] },
  { area: 'Ciências Humanas', icone: '🌎',
    texto: 'A Lei de Terras, de 1850, determinou que as terras públicas só poderiam ser obtidas por meio de compra.',
    pergunta: 'Uma ==consequência== dessa lei foi',
    alts: ['facilitar o acesso dos libertos à terra.', 'dificultar o acesso à terra para quem não tinha recursos.', 'distribuir terras de graça aos imigrantes.', 'acabar com os latifúndios no Brasil.', 'iniciar a reforma agrária no país.'],
    certa: 1,
    chaves: ['"consequência": o comando quer o resultado da lei', '"só poderiam ser obtidas por meio de compra": quem não tinha dinheiro ficava de fora', 'contexto: 1850, Segundo Reinado'],
    elimina: ['A, C: contradizem o texto ("só por compra" não é de graça nem facilita)', 'D, E: invertem o efeito (a lei favoreceu a concentração de terras)'] },
  { area: 'Ciências da Natureza', icone: '🔬',
    texto: 'Em um dia quente, uma garrafa de água gelada tirada da geladeira fica coberta de gotas na parte de fora.',
    pergunta: 'O ==fenômeno== que explica as gotas na ==parte de fora== da garrafa é',
    alts: ['a água de dentro atravessa o vidro.', 'o vapor de água do ar se condensa ao tocar a superfície fria.', 'a água de dentro da garrafa evapora.', 'o vidro derrete com o calor do ambiente.', 'o gelo presente no ar se funde.'],
    certa: 1,
    chaves: ['"fenômeno": o comando quer o conceito que explica o fato', '"parte de fora": a água não vem de dentro da garrafa', '"gelada" + "dia quente": superfície fria em contato com ar úmido'],
    elimina: ['A, C: contradizem o texto (as gotas estão do lado de fora)', 'D, E: absurdas para a situação descrita'] },
  { area: 'Matemática', icone: '📐',
    texto: 'Uma loja dá 20% de desconto em um produto e, depois, mais 10% de desconto sobre o novo preço.',
    pergunta: 'O desconto total ==equivale== a',
    alts: ['10%.', '28%.', '30%.', '32%.', '2%.'],
    certa: 1,
    chaves: ['"depois" e "sobre o novo preço": descontos sucessivos, que se multiplicam', 'conta: 0,80 × 0,90 = 0,72, ou seja, o preço final é 72%', '"equivale": o desconto total é 100% − 72% = 28%'],
    elimina: ['C: armadilha de somar 20% + 10%', 'A, D, E: não saem da conta correta'] }
];

/* ---------- páginas ---------- */
function folha(miolo, n, fit){ return `<div class="folha"><div class="cartao${fit === false ? '' : ' fit'}">${miolo}</div><div class="rodape">Acelera Enem · ${NOME}</div><div class="pg">${n}</div></div>`; }
function topo(num, titulo, ic){ return `<div class="topo"><div class="num">${num}</div><h2>${esc(titulo)}</h2><div class="ic">${ic}</div></div>`; }

function paginas(){
  const P = [];
  P.push(`<div class="inicial"><h2>O método em 4 passos</h2>
    <p class="intro">Muitas questões do ENEM são longas, mas a resposta depende de poucas palavras: as <b>palavras-chave</b>. Este método treina você a encontrar essas palavras e usar cada uma para chegar à alternativa certa.</p>
    <div class="passo"><span>1</span><div><b>Leia o comando primeiro</b>A pergunta costuma estar no fim do enunciado. Saber o que ela pede antes de ler o texto evita reler tudo.</div></div>
    <div class="passo"><span>2</span><div><b>Circule a palavra-chave do comando</b>Normalmente é um verbo ou uma expressão: identificar, inferir, finalidade, consequência, aproximadamente.</div></div>
    <div class="passo"><span>3</span><div><b>Marque no texto o que responde ao comando</b>Procure só as palavras que se ligam ao que foi pedido: datas, causas, verbos, unidades, conectivos.</div></div>
    <div class="passo"><span>4</span><div><b>Elimine as alternativas</b>Descarte as que extrapolam, contradizem, generalizam ou não respondem ao comando. Compare as que sobrarem.</div></div>
    <div class="aviso">As questões dos exemplos são autorais e servem para treino. Não são questões oficiais do ENEM. O método ajuda a organizar a leitura, mas não garante acerto nem nota.</div>
  </div>`);

  P.push(`${topo('01', 'Os comandos mais comuns', '🎯')}
    <p class="intro">O comando diz <b>o tipo de resposta</b> que a questão quer. Antes de olhar as alternativas, saiba qual destes é o seu.</p>
    <div class="tabela">${COMANDOS.map(([c, o, d]) => `<div class="lin"><div class="c">${esc(c)}</div><div class="o">${fmt(o)}</div><div class="d">💡 ${fmt(d)}</div></div>`).join('')}</div>`);

  P.push(`${topo('02', 'Palavras que mudam a resposta', '🔍')}
    <p class="intro">Algumas palavras, no comando ou nas alternativas, mudam totalmente o que está sendo pedido. Circule sempre que aparecerem.</p>
    <div class="grade">${SINAIS.map(([t, it, d]) => `<div class="cx"><div class="cx-t">${esc(t)}</div>${ul(it)}<p class="dica">${fmt(d)}</p></div>`).join('')}</div>`);

  P.push(`${topo('03', 'Palavras-chave por área', '🗂️')}
    <p class="intro">Cada área tem palavras que aparecem muito nos enunciados. Quando você vê uma delas, já sabe que tipo de raciocínio a questão espera.</p>
    <div class="grade">${AREAS.map(([a, ic, it, d]) => `<div class="cx area"><div class="cx-t">${ic} ${esc(a)}</div>${ul(it)}<p class="dica">${fmt(d)}</p></div>`).join('')}</div>`);

  P.push(`${topo('04', 'Como eliminar alternativas', '✂️')}
    <p class="intro">Com o comando e as palavras-chave em mãos, compare cada alternativa com o texto. As erradas costumam cair em um destes 5 tipos:</p>
    ${ARMADILHAS.map(([t, d], i) => `<div class="arm"><span>${i + 1}</span><div><b>${esc(t)}</b>${fmt(d)}</div></div>`).join('')}
    <div class="faixa lembre"><div class="fx-ic">💡</div><div><div class="fx-t">Lembrete rápido</div>Sobrou mais de uma? Volte ao comando. A certa responde exatamente ao que foi pedido, com base no texto.</div></div>`);

  EXEMPLOS.forEach((e, i) => {
    P.push(`${topo(String(5 + i).padStart(2, '0'), 'Exemplo: ' + e.area, e.icone)}
      <div class="q"><div class="q-t">Texto-base</div><p>${fmt(e.texto)}</p>
        <p class="enun">${fmt(e.pergunta)}</p>
        <ol class="alts">${e.alts.map((a, k) => `<li><span>${'ABCDE'[k]}</span>${fmt(a)}</li>`).join('')}</ol></div>
      <div class="caixa conceito"><div class="cx-t2">🔑 Palavras-chave</div>${ul(e.chaves)}</div>
      <div class="caixa atencao"><div class="cx-t2">✂️ Eliminando</div>${ul(e.elimina, 'x')}</div>
      <div class="faixa enem"><div class="fx-ic">✅</div><div><div class="fx-t">Resposta: ${'ABCDE'[e.certa]}</div>${fmt(e.alts[e.certa].replace(/\.$/, ''))}.</div></div>`);
  });

  P.push(`${topo('09', 'Antes de marcar a resposta', '✅')}
    <p class="intro">Use esta lista nas próximas questões até ela virar hábito.</p>
    <ul class="check">${['Li o comando antes do texto', 'Circulei a palavra-chave do comando', 'Vi se há negação (EXCETO, NÃO, INCORRETA)', 'Marquei no texto as palavras que respondem ao comando', 'Descartei as que extrapolam ou contradizem o texto', 'Desconfiei de "sempre", "nunca", "todos", "apenas"', 'Conferi unidades e "aproximadamente" (Matemática)', 'Escolhi a que responde exatamente ao que foi pedido'].map(c => `<li><span class="cxb"></span>${esc(c)}</li>`).join('')}</ul>
    <div class="faixa lembre"><div class="fx-ic">💡</div><div><div class="fx-t">Para treinar</div>Faça as questões dos seus exercícios e simulados aplicando os 4 passos. No começo vai parecer lento; com a prática a leitura fica mais rápida.</div></div>`);
  return P;
}

function html(){
  const css = fs.readFileSync(path.join(__dirname, 'fontes', 'fontes.css'), 'utf8');
  const P = paginas();
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><base href="file://${path.join(__dirname, 'fontes')}/">
<style>${css}
@page{size:A4;margin:0;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Nunito',sans-serif;color:#1f2a37;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.folha{width:210mm;height:297mm;position:relative;overflow:hidden;break-after:page;background:#fbf5e6;padding:11mm 11mm 19mm;}
.cartao{height:100%;background:#fff;border:3.2mm solid #f1cf6b;border-radius:7mm;box-shadow:0 0 0 1.4mm #fbe7a8 inset;padding:7mm 8mm;display:flex;flex-direction:column;overflow:hidden;font-size:var(--fs,12.5pt);line-height:1.42;}
.rodape{position:absolute;bottom:9mm;left:0;right:0;text-align:center;font-family:'Lilita One',cursive;font-size:11pt;color:#13294b;}
.pg{position:absolute;bottom:8.6mm;right:15mm;background:#f1cf6b;color:#13294b;border-radius:2mm;padding:.4mm 2.2mm;font-weight:800;font-size:9pt;}
b{font-weight:800;color:#13294b;}
mark{background:#fff0a8;padding:0 1mm;border-radius:1mm;font-weight:800;}
.topo{display:flex;align-items:center;gap:4mm;margin-bottom:3mm;}
.num{flex:none;background:#13294b;color:#fff;font-family:'Lilita One',cursive;font-size:22pt;line-height:1;border-radius:3mm;padding:2.6mm 3.4mm;}
.topo h2{flex:1;font-family:'Lilita One',cursive;font-size:21pt;line-height:1.05;color:#13294b;text-transform:uppercase;}
.topo .ic{font-size:24pt;}
.intro{margin-bottom:3mm;color:#3b4654;}
.inicial h2{font-family:'Lilita One',cursive;font-size:24pt;color:#13294b;text-align:center;text-transform:uppercase;margin:1mm 0 4mm;}
.passo,.arm{display:flex;gap:4mm;align-items:flex-start;background:#eaf6fb;border:1.6px solid #b7e1ef;border-radius:4mm;padding:3.2mm 4mm;margin-top:3mm;}
.passo span,.arm span{flex:none;width:9mm;height:9mm;border-radius:50%;background:#13294b;color:#fff;font-family:'Lilita One',cursive;font-size:14pt;display:flex;align-items:center;justify-content:center;}
.passo b,.arm b{display:block;font-size:calc(var(--fs) + 1pt);margin-bottom:.6mm;}
.arm{background:#fff1ef;border-color:#f4c3bb;}
.arm span{background:#b3261e;}
.aviso{margin-top:auto;font-size:9.5pt;color:#6b6250;background:#fbf5e6;border-radius:3mm;padding:3mm 4mm;}
.tabela{display:flex;flex-direction:column;gap:2.2mm;}
.lin{display:grid;grid-template-columns:38mm 1fr;gap:1mm 4mm;background:#eaf6fb;border:1.6px solid #b7e1ef;border-radius:3.5mm;padding:2.6mm 4mm;}
.lin .c{grid-row:span 2;font-family:'Lilita One',cursive;font-size:calc(var(--fs) + .5pt);color:#0b6f8a;text-transform:uppercase;align-self:center;}
.lin .d{color:#7a4a00;font-size:calc(var(--fs) - .5pt);}
.grade{display:grid;grid-template-columns:1fr 1fr;gap:3mm;}
.cx{background:#eaf6fb;border:1.6px solid #b7e1ef;border-radius:4mm;padding:3mm 4mm;}
.cx-t{font-family:'Lilita One',cursive;font-size:calc(var(--fs) + 1pt);color:#0b6f8a;text-transform:uppercase;margin-bottom:1.2mm;}
.cx ul,.caixa ul{list-style:none;}
.cx li,.caixa li{position:relative;padding-left:3.8mm;margin-bottom:.6mm;}
.cx li::before,.caixa li::before{content:'';position:absolute;left:.6mm;top:.6em;width:1.5mm;height:1.5mm;border-radius:50%;background:#0891b2;}
.cx .dica{margin-top:1.5mm;font-weight:700;color:#7a4a00;font-size:calc(var(--fs) - .5pt);}
.cx.area{background:#f4ecfd;border-color:#c9a8ef;} .cx.area .cx-t{color:#5b2ea6;}
.q{border:1.8px solid #dfe5f2;border-radius:4mm;padding:3.2mm 4.2mm;background:#fbfcff;}
.q-t{font-family:'Lilita One',cursive;color:#13294b;text-transform:uppercase;font-size:calc(var(--fs) - .5pt);margin-bottom:1mm;}
.enun{margin-top:2mm;font-weight:800;}
.alts{list-style:none;margin-top:1.5mm;}
.alts li{display:flex;gap:2.5mm;margin-bottom:.8mm;}
.alts span{flex:none;width:6mm;height:6mm;border-radius:50%;background:#e6ecfa;color:#1d3f8f;font-weight:800;font-size:9pt;display:flex;align-items:center;justify-content:center;margin-top:.2mm;}
.caixa{margin-top:3mm;border-radius:4mm;padding:3mm 4.2mm;}
.cx-t2{font-family:'Lilita One',cursive;text-transform:uppercase;font-size:calc(var(--fs) + 1pt);margin-bottom:1mm;}
.conceito{background:#eaf6fb;border:1.6px solid #b7e1ef;} .conceito .cx-t2{color:#0b6f8a;}
.atencao{background:#fff1ef;border:1.6px solid #f4c3bb;} .atencao .cx-t2{color:#b3261e;}
.caixa ul.x li::before{content:'✕';width:auto;height:auto;background:none;color:#d64545;font-weight:900;font-size:.85em;top:0;}
.faixa{margin-top:3mm;display:flex;gap:3.4mm;align-items:flex-start;border-radius:4mm;padding:3mm 4.2mm;}
.fx-ic{flex:none;width:10mm;height:10mm;border-radius:2.6mm;display:flex;align-items:center;justify-content:center;font-size:16pt;}
.fx-t{font-family:'Lilita One',cursive;font-size:calc(var(--fs) + 1.5pt);text-transform:uppercase;margin-bottom:.6mm;}
.lembre{background:#fff3e2;border:1.8px solid #f3b06b;} .lembre .fx-ic{background:#ffe2bf;} .lembre .fx-t{color:#c2560c;}
.enem{background:#eefaf1;border:1.8px solid #a8d8a2;} .enem .fx-ic{background:#d4f0d6;} .enem .fx-t{color:#2f7d2f;}
.check{list-style:none;}
.check li{display:flex;gap:3mm;align-items:center;border-bottom:1px dashed #eadfbf;padding:2.2mm 0;font-weight:700;}
.cxb{flex:none;width:5.5mm;height:5.5mm;border:2px solid #5aa85a;border-radius:1.2mm;}
.capa{width:210mm;height:297mm;position:relative;overflow:hidden;break-after:page;background:linear-gradient(160deg,#0b3d2a,#0c7a3c 60%,#3fb56f);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30mm;}
.capa .emojis{font-size:42pt;margin-bottom:10mm;letter-spacing:6pt;}
.capa .k{font-family:'Patrick Hand',cursive;font-size:28pt;}
.capa h1{font-family:'Lilita One',cursive;font-size:54pt;line-height:1.02;color:#ffd84d;text-shadow:3px 4px 0 rgba(0,0,0,.3);margin:2mm 0 8mm;}
.capa .sub{font-size:15pt;font-weight:700;max-width:150mm;line-height:1.45;}
.capa .tag{margin-top:12mm;background:#fff;color:#0b3d2a;font-family:'Lilita One',cursive;font-size:14pt;padding:3mm 8mm;border-radius:30px;}
.capa .marca{position:absolute;bottom:14mm;font-family:'Patrick Hand',cursive;font-size:15pt;opacity:.9;}
.capa .bola{position:absolute;border-radius:50%;background:rgba(255,255,255,.07);}
</style></head><body>
<div class="capa">
  <div class="bola" style="width:120mm;height:120mm;right:-40mm;top:-30mm;"></div>
  <div class="bola" style="width:80mm;height:80mm;left:-30mm;bottom:20mm;"></div>
  <div class="emojis">🔑 🎯 ✂️</div>
  <div class="k">Bônus</div>
  <h1>MÉTODO DAS<br>PALAVRAS-CHAVE</h1>
  <div class="sub">Como identificar o que cada questão do ENEM está pedindo e usar isso para eliminar alternativas.</div>
  <div class="tag">4 passos · 4 exemplos resolvidos</div>
  <div class="marca">Acelera Enem</div>
</div>
${P.map((p, i) => folha(p, i + 2)).join('')}
</body></html>`;
}

(async () => {
  fs.mkdirSync(DIR_PDF, { recursive: true });
  const arq = path.join(__dirname, '_tmp_palavras.html');
  fs.writeFileSync(arq, html());
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + arq, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  const res = await p.evaluate(() => [...document.querySelectorAll('.cartao.fit')].map((c, i) => {
    let fs = 13; c.style.setProperty('--fs', fs + 'pt');
    while (c.scrollHeight > c.clientHeight + 1 && fs > 9) { fs -= .25; c.style.setProperty('--fs', fs + 'pt'); }
    return { pg: i + 2, fs, cabe: c.scrollHeight <= c.clientHeight + 1 };
  }));
  const buf = await p.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  await b.close();
  fs.unlinkSync(arq);
  const doc = await PDFDocument.load(buf);
  doc.setTitle(NOME + ' para o ENEM'); doc.setAuthor('Acelera Enem');
  const saida = path.join(DIR_PDF, 'Metodo-Palavras-Chave.pdf');
  fs.writeFileSync(saida, await doc.save());
  const ruins = res.filter(r => !r.cabe || r.fs < 10.5);
  console.log((ruins.length ? '⚠️ ' : 'OK ') + path.relative(path.join(__dirname, '..'), saida) + ' · ' + doc.getPageCount() + ' páginas' + (ruins.length ? '\n   ' + ruins.map(r => 'pág. ' + r.pg + (r.cabe ? '' : ' NÃO coube') + ' (' + r.fs + 'pt)').join('\n   ') : ''));
})();
