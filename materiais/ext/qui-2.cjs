/* Química: temas 6 a 10 */
module.exports = [
{ t:'Ligações químicas',
d1:[
 ['Regra do octeto', 'Átomos tendem a ficar com 8 elétrons na camada de valência (2 para o hélio e o hidrogênio).', ['Metais perdem elétrons e formam cátions','Ametais ganham ou compartilham elétrons','Gases nobres já são estáveis','Ligação química é a união entre átomos para ganhar estabilidade'], null],
 ['Ligação iônica', 'Transferência de elétrons entre metal e ametal.', ['Forma íons de cargas opostas que se atraem (NaCl)','Compostos sólidos cristalinos, pontos de fusão e ebulição altos','Conduzem corrente elétrica fundidos ou dissolvidos em água','Duros e quebradiços'], 'Metal + ametal = ligação iônica.'],
 ['Ligação covalente', 'Compartilhamento de pares de elétrons entre ametais e hidrogênio.', ['Forma moléculas (H₂O, CO₂, NH₃)','Pode ser simples, dupla ou tripla','**Covalente dativa (coordenada):** um átomo fornece o par de elétrons','Em geral não conduzem eletricidade no estado puro'], null]
],
d2:[
 ['Ligação metálica', 'Metais: cátions mergulhados em "mar de elétrons".', ['Condutibilidade elétrica e térmica','Maleabilidade e ductilidade','Brilho metálico','Ligas metálicas: misturas de metais'], null],
 ['Fórmulas e geometria', 'Representações.', ['**Fórmula eletrônica (Lewis):** pontos de elétrons','**Fórmula estrutural:** traços entre átomos','**Fórmula molecular:** quantidade de cada átomo','Geometria: linear (CO₂), angular (H₂O), piramidal (NH₃), tetraédrica (CH₄)'], null],
 ['Propriedades e tipo de ligação', 'Dica de prova.', ['Alto PF, conduz fundido: iônico','Baixo PF, não conduz: molecular','Conduz sólido e brilha: metálico','Eletronegatividade: diferença grande = iônica; pequena = covalente'], null]
],
ex:[
 { q:'A ligação entre sódio (Na) e cloro (Cl) é:', a:['covalente apolar','covalente polar','iônica','metálica','dativa'], g:'C', c:'Metal e ametal: transferência de elétrons, ligação iônica.' },
 { q:'Quantos pares de elétrons são compartilhados na molécula de N₂ (ligação tripla)?', a:['1','2','3','4','6'], g:'C', c:'Ligação tripla = 3 pares de elétrons compartilhados.' }
],
pr:[
 { q:'Qual substância conduz corrente elétrica no estado sólido?', a:['NaCl','Cu','H₂O','CO₂','C₁₂H₂₂O₁₁'], g:'B', c:'Metais conduzem por causa dos elétrons livres.' },
 { q:'A geometria da molécula de água é:', a:['linear','angular','tetraédrica','trigonal plana','piramidal'], g:'B', c:'Dois pares ligantes e dois pares livres no oxigênio: angular.' },
 { q:'A ligação entre dois átomos de hidrogênio na molécula H₂ é:', a:['iônica','covalente','metálica','dativa','de hidrogênio'], g:'B', c:'Ambos precisam de elétrons: compartilham um par.' },
 { q:'Compostos iônicos geralmente apresentam:', a:['baixo ponto de fusão','alto ponto de fusão','são gasosos','são líquidos a 25 °C','não se dissolvem nunca'], g:'B', c:'Forte atração entre íons no retículo cristalino.' }
],
erros:['Dizer que ligação iônica forma moléculas (forma retículo).','Confundir ligação metálica com iônica.','Achar que todo composto com hidrogênio é covalente apolar.','Esquecer da geometria angular da água.'],
check:['identificar o tipo de ligação pelos elementos','relacionar tipo de ligação a propriedades','desenhar estruturas simples','prever geometrias comuns']
},

{ t:'Polaridade e forças intermoleculares',
d1:[
 ['Polaridade das ligações', 'Depende da diferença de eletronegatividade.', ['**Apolar:** átomos iguais (H₂, O₂)','**Polar:** átomos diferentes, deslocamento dos elétrons (HCl)','Há dipolo: polo parcialmente positivo e negativo'], null],
 ['Polaridade das moléculas', 'Soma dos dipolos (momento dipolar).', ['**Polar:** momento dipolar diferente de zero (H₂O, NH₃, HCl)','**Apolar:** momento nulo (CO₂, CH₄, O₂)','Geometria é decisiva: CO₂ (linear) é apolar mesmo com ligações polares'], 'Semelhante dissolve semelhante.'],
 ['Forças intermoleculares', 'Atrações entre moléculas.', ['**Dipolo induzido (London):** apolares, mais fraca','**Dipolo-dipolo:** polares','**Ligação de hidrogênio:** H ligado a F, O ou N; a mais forte'], null]
],
d2:[
 ['Pontos de fusão e ebulição', 'Dependem da força e do tamanho da molécula.', ['Maior força intermolecular, maior PE','Moléculas maiores têm London mais forte','Água tem PE alto por causa das ligações de hidrogênio','Isômeros ramificados têm PE menor (menos contato)'], null],
 ['Solubilidade', 'Semelhante dissolve semelhante.', ['Polar dissolve polar: água e etanol, sal e água','Apolar dissolve apolar: óleo e gasolina','Água e óleo não se misturam','Sabão: parte polar e parte apolar, liga óleo e água'], null],
 ['Aplicações', 'Cotidiano.', ['Gelo menos denso que a água líquida por causa do arranjo das ligações de hidrogênio','Tensão superficial da água','Capilaridade','DNA mantido por ligações de hidrogênio'], null]
],
ex:[
 { q:'A molécula de CO₂ é apolar porque:', a:['as ligações são apolares','é linear e os dipolos se anulam','tem carga','não tem oxigênio','é iônica'], g:'B', c:'Os dois dipolos têm sentidos opostos e o resultante é nulo.' },
 { q:'Qual substância tem maior ponto de ebulição?', a:['CH₄','H₂','H₂O','O₂','N₂'], g:'C', c:'A água faz ligações de hidrogênio.' }
],
pr:[
 { q:'A principal força intermolecular no HF é:', a:['London','dipolo-dipolo apenas','ligação de hidrogênio','iônica','metálica'], g:'C', c:'H ligado a F: ligação de hidrogênio.' },
 { q:'O óleo não se dissolve em água porque:', a:['o óleo é polar','a água é apolar','o óleo é apolar e a água é polar','o óleo é pesado','a água é iônica'], g:'C', c:'Polar não dissolve apolar.' },
 { q:'Moléculas apolares se atraem principalmente por:', a:['ligações de hidrogênio','dipolo permanente','forças de London','ligações iônicas','ligações metálicas'], g:'C', c:'Dipolos instantâneos induzidos.' },
 { q:'A molécula de NH₃ é:', a:['apolar','polar','iônica','metálica','linear'], g:'B', c:'Geometria piramidal, dipolos não se anulam.' }
],
erros:['Dizer que ligações polares sempre formam moléculas polares.','Confundir ligação de hidrogênio com ligação covalente.','Esquecer o efeito do tamanho da molécula no PE.','Achar que o óleo se dissolve na água com agitação.'],
check:['classificar moléculas em polares e apolares','identificar a força intermolecular predominante','comparar pontos de ebulição','prever solubilidade']
},

{ t:'Funções inorgânicas',
d1:[
 ['Ácidos', 'Em água liberam íons H⁺ (ou H₃O⁺).', ['HCl, H₂SO₄, HNO₃, H₃PO₄, H₂CO₃','Sabor azedo, reagem com metais e bases','Fortes: HCl, HNO₃, H₂SO₄; fracos: H₂CO₃, CH₃COOH','Indicadores: fenolftaleína incolor, tornassol vermelho'], null],
 ['Bases', 'Em água liberam OH⁻.', ['NaOH, KOH, Ca(OH)₂, Mg(OH)₂, NH₄OH','Sabor adstringente, escorregadias','Fortes: metais alcalinos e alcalinoterrosos','Fenolftaleína rosa, tornassol azul'], null],
 ['Sais e óxidos', 'Produtos e compostos binários.', ['**Sal:** cátion de base + ânion de ácido (NaCl, CaCO₃)','**Neutralização:** ácido + base → sal + água','**Óxidos ácidos (ametal):** CO₂, SO₂ → chuva ácida','**Óxidos básicos (metal):** CaO, Na₂O','**Neutros:** CO, NO'], 'Cal viva (CaO) + água = cal hidratada (Ca(OH)₂).']
],
d2:[
 ['Nomenclatura', 'Regras.', ['Ácidos sem oxigênio: -ídrico (HCl: ácido clorídrico)','Com oxigênio: -ico/-oso (H₂SO₄: sulfúrico)','Bases: hidróxido de + cátion','Sais: ânion + de + cátion (NaCl: cloreto de sódio)','Óxidos: óxido de + elemento'], null],
 ['Usos no cotidiano', 'Muito cobrado.', ['HCl: suco gástrico e limpeza','H₂SO₄: baterias e fertilizantes','NaOH: soda cáustica, sabão','Mg(OH)₂: leite de magnésia (antiácido)','NaHCO₃: antiácido e fermento','CaCO₃: mármore, calcário, giz'], null],
 ['Chuva ácida', 'Impacto ambiental.', ['SO₂ e NO₂ formam H₂SO₄ e HNO₃ na atmosfera','Danos a monumentos, solos, lagos e florestas','Prevenção: filtros, combustíveis limpos','Calagem corrige a acidez do solo'], null]
],
ex:[
 { q:'A reação entre HCl e NaOH produz:', a:['NaCl e H₂O','NaClO e H₂','Na e HClO','Cl₂ e NaOH','NaH e HClO'], g:'A', c:'Neutralização total: sal e água.' },
 { q:'A chuva ácida é causada principalmente por:', a:['óxidos de enxofre e nitrogênio','gás hélio','oxigênio','amônia apenas','metais'], g:'A', c:'SO₂ e NOx formam ácidos fortes ao reagir com a água.' }
],
pr:[
 { q:'O leite de magnésia, usado contra azia, contém:', a:['HCl','Mg(OH)₂','NaCl','H₂SO₄','CO₂'], g:'B', c:'Base fraca que neutraliza o excesso de ácido do estômago.' },
 { q:'NaCl é classificado como:', a:['ácido','base','sal','óxido','hidreto'], g:'C', c:'Cátion de base (Na⁺) e ânion de ácido (Cl⁻).' },
 { q:'Qual é um óxido ácido?', a:['CaO','Na₂O','CO₂','MgO','K₂O'], g:'C', c:'Óxido de ametal, forma ácido ao reagir com água.' },
 { q:'A fenolftaleína em meio básico fica:', a:['incolor','vermelha','rosa','azul','amarela'], g:'C', c:'Rosa em meio básico, incolor em ácido.' }
],
erros:['Trocar a nomenclatura -ídrico e -ico.','Esquecer que a neutralização produz água.','Confundir óxido ácido e básico.','Achar que toda substância com H é ácido.'],
check:['classificar ácidos, bases, sais e óxidos','nomear compostos comuns','escrever neutralização','associar usos do cotidiano']
},

{ t:'pH e equilíbrio ácido-base',
d1:[
 ['Escala de pH', 'Mede a acidez de uma solução aquosa.', ['pH < 7: ácida','pH = 7: neutra (25 °C)','pH > 7: básica','**pH = −log [H⁺]**','Cada unidade é um fator de 10'], 'pH 3 é 10 vezes mais ácido que pH 4.'],
 ['Valores comuns', 'Referências.', ['Suco gástrico ≈ 1 a 2','Limão ≈ 2','Café ≈ 5','Água pura = 7','Sangue ≈ 7,4','Água do mar ≈ 8','Amônia e soda: 11 a 14'], null],
 ['Indicadores', 'Mudam de cor conforme o pH.', ['Fenolftaleína','Tornassol','Repolho roxo (indicador natural)','Papel indicador universal'], null]
],
d2:[
 ['Produto iônico da água', 'Equilíbrio de autoionização.', ['H₂O ⇌ H⁺ + OH⁻','Kw = [H⁺]·[OH⁻] = 10⁻¹⁴ (25 °C)','pH + pOH = 14','Solução neutra: [H⁺] = [OH⁻] = 10⁻⁷'], null],
 ['Soluções tampão', 'Resistem a variações de pH.', ['Ácido fraco + sal correspondente','Sangue: tampão bicarbonato','Importantes em processos biológicos e fármacos'], null],
 ['Aplicações', 'Ambiente e saúde.', ['Acidez do solo e calagem','Chuva ácida (pH menor que 5,6)','Acidificação dos oceanos por CO₂','Antiácidos e pH estomacal','Piscinas: controle do pH'], null]
],
ex:[
 { q:'Uma solução tem [H⁺] = 10⁻³ mol/L. Seu pH é:', a:['1','3','7','11','14'], g:'B', c:'pH = −log 10⁻³ = 3.' },
 { q:'Um suco com pH 3 é quantas vezes mais ácido que um com pH 5?', a:['2','10','20','100','1.000'], g:'D', c:'Diferença de 2 unidades: 10² = 100.' }
],
pr:[
 { q:'Solução neutra a 25 °C tem pH:', a:['0','5','7','10','14'], g:'C', c:'[H⁺] = [OH⁻] = 10⁻⁷.' },
 { q:'Se o pH de uma solução é 11, o pOH é:', a:['3','7','11','14','25'], g:'A', c:'pH + pOH = 14 → pOH = 3.' },
 { q:'O suco gástrico tem pH aproximado de:', a:['1,5','7','9','12','14'], g:'A', c:'É fortemente ácido por causa do HCl.' },
 { q:'Qual substância tende a aumentar o pH da água?', a:['HCl','vinagre','NaOH','CO₂','limão'], g:'C', c:'Base forte aumenta o pH.' }
],
erros:['Dizer que pH 3 é 3 vezes mais ácido que pH 1.','Esquecer que a escala é logarítmica.','Achar que pH não pode ser negativo ou maior que 14 (pode, em soluções concentradas).','Confundir pH com pOH.'],
check:['calcular pH a partir de [H⁺]','usar pH + pOH = 14','relacionar escala ao cotidiano','explicar solução tampão']
},

{ t:'Reações químicas',
d1:[
 ['Tipos de reação', 'Classificação básica.', ['**Síntese:** A + B → AB','**Decomposição (análise):** AB → A + B','**Simples troca:** A + BC → AC + B','**Dupla troca:** AB + CD → AD + CB'], null],
 ['Balanceamento', 'Lei de Lavoisier: massa se conserva.', ['Coeficientes igualam átomos nos dois lados','Nunca altere os índices (fórmulas)','Dica: balanceie metais, depois ametais, depois H e O','Ex.: 2 H₂ + O₂ → 2 H₂O'], 'Na natureza nada se cria, nada se perde, tudo se transforma.'],
 ['Leis ponderais', 'Proporção entre massas.', ['**Lavoisier:** conservação da massa','**Proust:** proporções constantes','**Dalton:** proporções múltiplas','**Gay-Lussac:** volumes gasosos em proporção simples'], null]
],
d2:[
 ['Reações de oxirredução', 'Transferência de elétrons.', ['**Oxidação:** perda de elétrons (Nox aumenta)','**Redução:** ganho de elétrons (Nox diminui)','**Agente redutor:** sofre oxidação','**Agente oxidante:** sofre redução'], null],
 ['Reações no cotidiano', 'Exemplos.', ['Combustão: combustível + O₂ → CO₂ + H₂O','Fotossíntese e respiração','Ferrugem (oxidação do ferro)','Fermentação','Efervescente: ácido + bicarbonato → CO₂'], null],
 ['Condições para ocorrer', 'Fatores.', ['Contato entre os reagentes','Afinidade química','Energia de ativação','Formação de gás, precipitado ou eletrólito fraco facilita reações de dupla troca'], null]
],
ex:[
 { q:'Na equação N₂ + H₂ → NH₃, os coeficientes que a balanceiam são:', a:['1, 1, 1','1, 2, 2','1, 3, 2','2, 3, 1','2, 2, 3'], g:'C', c:'N₂ + 3 H₂ → 2 NH₃.' },
 { q:'Em uma reação de combustão completa de um hidrocarboneto formam-se:', a:['CO e H₂','CO₂ e H₂O','C e H₂O','CH₄ e O₂','CO₂ e H₂'], g:'B', c:'Combustão completa libera gás carbônico e água.' }
],
pr:[
 { q:'A reação CaCO₃ → CaO + CO₂ é de:', a:['síntese','decomposição','simples troca','dupla troca','neutralização'], g:'B', c:'Uma substância gera duas.' },
 { q:'A lei que afirma que a massa se conserva é a de:', a:['Proust','Dalton','Lavoisier','Gay-Lussac','Avogadro'], g:'C', c:'Lavoisier.' },
 { q:'No processo de oxidação o elétron é:', a:['ganho','perdido','neutro','inexistente','duplicado'], g:'B', c:'Oxidar é perder elétrons.' },
 { q:'Quando o ferro enferruja, ocorre:', a:['fenômeno físico','reação de oxirredução','mudança de estado','sublimação','decantação'], g:'B', c:'O ferro é oxidado pelo oxigênio.' }
],
erros:['Mudar índices ao balancear.','Confundir agente oxidante com o que se oxida.','Esquecer de balancear carga nas semi-reações.','Achar que a massa pode variar em sistema fechado.'],
check:['balancear equações','classificar o tipo de reação','identificar agente redutor e oxidante','citar as leis ponderais']
}
];
