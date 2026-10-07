/* Física: temas 1 a 4 */
module.exports = [
{ t:'Grandezas e unidades (SI)',
d1:[
 ['Grandezas físicas e o Sistema Internacional', 'Grandeza física é tudo o que pode ser medido: comprimento, massa, tempo, temperatura. O Sistema Internacional (SI) padroniza as unidades para que todos falem a mesma língua.', ['**Comprimento:** metro (m)','**Massa:** quilograma (kg)','**Tempo:** segundo (s)','**Temperatura:** kelvin (K)','**Corrente elétrica:** ampère (A)','**Quantidade de matéria:** mol'], 'As unidades fundamentais do SI formam a base; as demais são derivadas delas.'],
 ['Unidades derivadas', 'Combinam as unidades fundamentais.', ['**Velocidade:** m/s','**Aceleração:** m/s²','**Força:** newton (N = kg·m/s²)','**Energia e trabalho:** joule (J = N·m)','**Potência:** watt (W = J/s)','**Pressão:** pascal (Pa = N/m²)','**Frequência:** hertz (Hz = 1/s)'], null],
 ['Grandezas escalares e vetoriais', 'Algumas grandezas só precisam de valor e unidade; outras também precisam de direção e sentido.', ['**Escalares:** massa, tempo, temperatura, energia, potência (valor e unidade bastam)','**Vetoriais:** velocidade, aceleração, força, deslocamento (têm direção e sentido)','Vetores se somam com regra própria: o sentido importa','Exemplo: andar 3 m para a direita e 3 m para a esquerda dá deslocamento 0, mas distância percorrida de 6 m'], null]
],
d2:[
 ['Prefixos e conversões', 'A notação científica e os prefixos poupam zeros.', ['**quilo (k) = 10³**, **mega (M) = 10⁶**, **giga (G) = 10⁹**','**centi (c) = 10⁻²**, **mili (m) = 10⁻³**, **micro (µ) = 10⁻⁶**, **nano (n) = 10⁻⁹**','1 km = 1.000 m; 1 mm = 0,001 m','1 kWh = 3,6 × 10⁶ J','1 h = 3.600 s; 1 km/h = 1/3,6 m/s'], 'Para converter km/h em m/s, divida por 3,6; para m/s em km/h, multiplique por 3,6.'],
 ['Análise dimensional', 'Verificar se a unidade faz sentido é um teste rápido.', ['Soma e subtração só entre grandezas de mesma unidade','Velocidade = distância ÷ tempo → m/s','Se a resposta pedida é em joules e a conta deu m/s, há erro','Densidade = massa ÷ volume (kg/m³ ou g/cm³)','1 g/cm³ = 1.000 kg/m³; a água tem 1 g/cm³'], null],
 ['Medidas, incertezas e algarismos significativos', 'Toda medida tem limitação.', ['**Algarismos significativos:** os que são conhecidos com certeza mais o primeiro duvidoso','Medir com régua de milímetro: 12,3 cm (o "3" é o duvidoso)','**Erro de medição:** diferença entre o valor medido e o real; várias medidas e a média reduzem o erro','Em resultados de cálculos, não invente precisão que os dados não tinham'], null]
],
ex:[
 { q:'Um carro viaja a 72 km/h. Qual é sua velocidade em m/s?', a:['7,2','20','36','72','259,2'], g:'B', c:'Para converter km/h em m/s, divida por 3,6: 72 ÷ 3,6 = 20 m/s.' },
 { q:'Um chuveiro de 5.000 W é usado por 30 minutos. Qual a energia consumida, em kWh?', a:['0,5','1,5','2,5','5','10'], g:'C', c:'Potência = 5 kW. Tempo = 0,5 h. Energia = 5 × 0,5 = 2,5 kWh.' }
],
pr:[
 { q:'A unidade de força no Sistema Internacional é o:', a:['joule','watt','newton','pascal','hertz'], g:'C', c:'Força é medida em newton (N = kg·m/s²).' },
 { q:'Qual das grandezas abaixo é vetorial?', a:['massa','tempo','temperatura','velocidade','energia'], g:'D', c:'Velocidade precisa de valor, direção e sentido. As demais são escalares.' },
 { q:'Um arquivo de 2 GB equivale a quantos megabytes (considere 1 GB = 1.000 MB)?', a:['20','200','2.000','20.000','2.000.000'], g:'C', c:'1 GB = 1.000 MB. Então 2 GB = 2.000 MB.' },
 { q:'Um líquido tem densidade de 0,8 g/cm³. Em kg/m³, isso corresponde a:', a:['0,8','8','80','800','8.000'], g:'D', c:'1 g/cm³ = 1.000 kg/m³. Então 0,8 g/cm³ = 800 kg/m³.' }
],
erros:['Misturar unidades diferentes na mesma conta (km com m, h com s).','Confundir distância percorrida (escalar) com deslocamento (vetorial).','Esquecer que 1 km/h não é 1 m/s (divide-se por 3,6).','Confundir potência (watt) com energia (joule ou kWh).'],
check:['listar as unidades do SI e as derivadas mais comuns','converter km/h em m/s e usar prefixos','distinguir grandezas escalares e vetoriais','conferir uma resposta pela unidade']
},

{ t:'Movimento uniforme',
d1:[
 ['Conceitos básicos', 'Cinemática descreve o movimento sem se preocupar com a causa.', ['**Posição (s):** onde o corpo está em relação a um referencial','**Deslocamento (Δs):** posição final − posição inicial','**Velocidade média = Δs ÷ Δt**','**Referencial:** o ponto de vista. O motorista está parado em relação ao carro e em movimento em relação à estrada'], 'Repouso e movimento dependem do referencial.'],
 ['Movimento uniforme (MU)', 'A velocidade é constante: o corpo percorre distâncias iguais em intervalos de tempo iguais.', ['**Função horária:** s = s₀ + v·t','s₀ é a posição inicial; v, a velocidade; t, o tempo','v > 0: avança no sentido positivo (movimento progressivo); v < 0: retrógrado','Exemplo: s = 10 + 5t (SI). Em t = 4 s, s = 30 m'], null],
 ['Gráficos do MU', 'Os gráficos mostram a mesma informação de outro jeito.', ['**s × t:** reta inclinada; a inclinação é a velocidade','**v × t:** reta horizontal; a área entre a reta e o eixo é o deslocamento','Reta mais inclinada em s × t = velocidade maior','Reta horizontal em s × t = corpo parado'], null]
],
d2:[
 ['Encontro de móveis', 'Dois corpos se encontram quando têm a mesma posição no mesmo instante.', ['Escreva a função horária de cada um','Iguale as posições: s₁ = s₂','Resolva o tempo de encontro e depois a posição','Exemplo: A: s = 0 + 20t; B: s = 100 − 30t. 20t = 100 − 30t → t = 2 s, s = 40 m'], 'Em sentidos opostos, as velocidades se somam; no mesmo sentido, subtraem.'],
 ['Ultrapassagem e comprimento dos veículos', 'Quando há comprimento envolvido, some as distâncias.', ['Ultrapassagem: o tempo depende da velocidade relativa','Trem atravessando uma ponte: distância = comprimento do trem + comprimento da ponte','Exemplo: trem de 100 m a 20 m/s atravessa túnel de 300 m. Δs = 400 m; t = 20 s'], null],
 ['Velocidade média em trechos', 'Não é a média das velocidades.', ['Meia distância a 60 km/h e meia a 40 km/h: não é 50 km/h. Calcule vm = distância total ÷ tempo total','Exemplo: 120 km a 60 km/h (2 h) e 120 km a 40 km/h (3 h): vm = 240/5 = 48 km/h','Se os tempos são iguais, a velocidade média é a média aritmética','Se as distâncias são iguais, é a média harmônica (use o tempo total)'], 'Pegadinha clássica: média das velocidades ≠ velocidade média.']
],
ex:[
 { q:'Um carro percorre 150 km em 2 horas e 30 minutos. Qual a sua velocidade média, em km/h?', a:['50','55','60','65','75'], g:'C', c:'2 h 30 min = 2,5 h. vm = 150 ÷ 2,5 = 60 km/h.' },
 { q:'Dois carros partem ao mesmo tempo de duas cidades distantes 300 km e viajam um em direção ao outro, a 70 km/h e a 80 km/h. Depois de quanto tempo se encontram?', a:['1 h','1,5 h','2 h','2,5 h','3 h'], g:'C', c:'Em sentidos opostos, as velocidades se somam: 70 + 80 = 150 km/h. Tempo = 300 ÷ 150 = 2 horas.' }
],
pr:[
 { q:'Um ciclista mantém velocidade constante de 6 m/s. Quanto ele percorre em 2 minutos?', a:['12 m','36 m','120 m','360 m','720 m'], g:'E', c:'2 min = 120 s. Δs = v · t = 6 × 120 = 720 m.' },
 { q:'Um trem de 200 m de comprimento, a 10 m/s, atravessa uma ponte de 400 m. Quanto tempo leva para atravessá-la completamente?', a:['20 s','40 s','50 s','60 s','80 s'], g:'D', c:'Distância = 200 + 400 = 600 m. Tempo = 600 ÷ 10 = 60 s.' },
 { q:'A função horária de um móvel é s = 5 + 3t (SI). Sua posição em t = 6 s é:', a:['9 m','18 m','23 m','30 m','33 m'], g:'C', c:'s = 5 + 3 × 6 = 5 + 18 = 23 m.' },
 { q:'Um motorista percorre 60 km a 30 km/h e depois 60 km a 60 km/h. A velocidade média no percurso total é de:', a:['40 km/h','42 km/h','45 km/h','48 km/h','50 km/h'], g:'A', c:'Tempos: 60/30 = 2 h e 60/60 = 1 h. Total: 120 km em 3 h → 40 km/h (e não 45).' }
],
erros:['Calcular a velocidade média como média das velocidades quando as distâncias são iguais.','Esquecer o comprimento do trem ao calcular o tempo de travessia.','Confundir posição (s) com deslocamento (Δs).','Misturar km/h com m/s sem converter.'],
check:['usar a função horária s = s₀ + v·t','ler gráficos s × t e v × t do movimento uniforme','calcular o instante e o local de um encontro','calcular a velocidade média em trechos diferentes']
},

{ t:'Movimento uniformemente variado',
d1:[
 ['Aceleração e MUV', 'No MUV a velocidade varia de forma constante: a aceleração é constante.', ['**Aceleração média: a = Δv ÷ Δt** (m/s²)','a > 0 e v > 0: acelerado. a < 0 e v > 0: freando (retardado)','1 m/s² = a velocidade aumenta 1 m/s a cada segundo','Exemplo: de 0 a 20 m/s em 5 s → a = 4 m/s²'], null],
 ['Equações do MUV', 'Três equações resolvem quase tudo.', ['**v = v₀ + a·t**','**s = s₀ + v₀·t + a·t²/2**','**v² = v₀² + 2·a·Δs** (equação de Torricelli, não usa o tempo)','Escolha a equação pela informação que falta: sem tempo → Torricelli'], 'Use Torricelli quando o tempo não aparece no problema.'],
 ['Gráficos do MUV', 'Mostram o comportamento no tempo.', ['**v × t:** reta inclinada; a inclinação é a aceleração; a área sob a reta é o deslocamento','**s × t:** parábola (arco para cima se a > 0; para baixo se a < 0)','**a × t:** reta horizontal (aceleração constante)','Reta de v × t cruzando o eixo: o móvel inverte o sentido'], null]
],
d2:[
 ['Frenagem e distância de parada', 'Aparece em segurança no trânsito.', ['Na frenagem: a < 0; v final = 0','Distância de frenagem: d = v₀² ÷ (2·|a|)','Dobrar a velocidade quadruplica a distância de frenagem','Exemplo: 20 m/s e a = −5 m/s² → d = 400/10 = 40 m','Tempo de reação do motorista: distância extra = v × tempo de reação'], 'Por isso a velocidade máxima importa tanto: a distância de frenagem cresce com o quadrado da velocidade.'],
 ['Aceleração da gravidade e queda', 'Na superfície da Terra, g ≈ 10 m/s² (ou 9,8).', ['Quedas e lançamentos verticais são MUV com a = ±g','Em queda livre: v = g·t e h = g·t²/2 (parte do repouso)','No lançamento para cima: sobe até v = 0 (altura máxima), com a = −g','Desprezando o ar, todos os corpos caem com a mesma aceleração'], null],
 ['Problemas típicos', 'Roteiro de resolução.', ['1. Anote o que é dado (v₀, v, a, Δs, t)','2. Verifique o sinal da aceleração (frenagem é negativa)','3. Escolha a equação que contém só uma incógnita','4. Confira as unidades (m, s, m/s, m/s²)'], null]
],
ex:[
 { q:'Um carro parte do repouso e atinge 30 m/s em 6 s, com aceleração constante. Qual a sua aceleração?', a:['2 m/s²','3 m/s²','4 m/s²','5 m/s²','6 m/s²'], g:'D', c:'a = Δv/Δt = (30 − 0)/6 = 5 m/s².' },
 { q:'Um carro a 20 m/s é freado com aceleração constante de −4 m/s² até parar. Qual a distância percorrida na frenagem?', a:['20 m','40 m','50 m','80 m','100 m'], g:'C', c:'Torricelli: 0 = 20² + 2·(−4)·Δs → 8·Δs = 400 → Δs = 50 m.' }
],
pr:[
 { q:'Um móvel parte do repouso com aceleração constante de 2 m/s². Qual a sua velocidade após 8 s?', a:['4 m/s','8 m/s','12 m/s','16 m/s','32 m/s'], g:'D', c:'v = v₀ + a·t = 0 + 2 × 8 = 16 m/s.' },
 { q:'Um objeto parte do repouso com a = 3 m/s². Qual a distância percorrida em 4 s?', a:['6 m','12 m','18 m','24 m','48 m'], g:'D', c:'Δs = a·t²/2 = 3 × 16 / 2 = 24 m.' },
 { q:'Um carro a 10 m/s acelera a 2 m/s² por 5 s. Sua velocidade final é:', a:['10 m/s','15 m/s','20 m/s','25 m/s','30 m/s'], g:'C', c:'v = 10 + 2 × 5 = 20 m/s.' },
 { q:'Se a velocidade de um carro dobra, a distância necessária para freá-lo com a mesma aceleração:', a:['permanece igual','dobra','triplica','quadruplica','fica oito vezes maior'], g:'D', c:'d = v₀²/(2|a|): se v₀ dobra, d fica 2² = 4 vezes maior.' }
],
erros:['Esquecer o sinal negativo da aceleração na frenagem.','Usar s = v·t em movimento acelerado (só vale no MU).','Confundir velocidade (m/s) com aceleração (m/s²).','Tentar usar a equação de Torricelli quando o problema pede o tempo.'],
check:['aplicar v = v₀ + at, s = s₀ + v₀t + at²/2 e Torricelli','interpretar gráficos v × t (inclinação e área)','calcular a distância de frenagem','relacionar velocidade e distância de parada']
},

{ t:'Queda livre e lançamentos',
d1:[
 ['Queda livre', 'Movimento de um corpo abandonado, sob ação apenas da gravidade (sem resistência do ar).', ['**Aceleração:** g ≈ 10 m/s² (ou 9,8 m/s²), para baixo','Partindo do repouso: **v = g·t** e **h = g·t²/2**','Torricelli: **v² = 2·g·h**','Todos os corpos, de qualquer massa, caem igual no vácuo','Exemplo: queda de 5 s: v = 50 m/s; h = 125 m (g = 10)'], 'Na prática, o ar atrapalha: uma pena cai mais devagar que uma pedra por causa da resistência do ar.'],
 ['Lançamento vertical', 'Um corpo é lançado para cima com velocidade inicial v₀.', ['Na subida, a velocidade diminui até zero (altura máxima)','Tempo de subida: ts = v₀/g','Altura máxima: H = v₀²/(2g)','O tempo de descida é igual ao de subida; volta com a mesma velocidade (em módulo)','No ponto mais alto: v = 0, mas a = g (para baixo)'], null],
 ['Lançamento horizontal', 'Um corpo é lançado horizontalmente de uma altura h.', ['Dois movimentos independentes: horizontal (MU, v constante) e vertical (queda livre)','Tempo de queda: t = √(2h/g) (não depende da velocidade horizontal)','Alcance: A = vₓ · t','Exemplo: bola lançada de uma mesa de 1,25 m com 4 m/s: t = 0,5 s; alcance = 2 m'], null]
],
d2:[
 ['Lançamento oblíquo', 'Lançamento com ângulo θ em relação ao solo.', ['Decomponha a velocidade: vₓ = v₀·cos θ e vᵧ = v₀·sen θ','Horizontal: MU. Vertical: MUV com a = −g','Tempo de subida: ts = vᵧ/g; tempo total no solo plano: 2·ts','Alcance máximo para o mesmo v₀: ângulo de 45°','Ângulos complementares (30° e 60°) têm o mesmo alcance'], 'No ponto mais alto, só resta a componente horizontal da velocidade (vᵧ = 0).'],
 ['Independência dos movimentos', 'Princípio de Galileu: o movimento horizontal e o vertical acontecem sem interferir um no outro.', ['Duas bolas, uma solta e outra lançada horizontalmente da mesma altura, chegam ao chão no mesmo instante','A velocidade horizontal não muda o tempo de queda','A resistência do ar quebra essa simplificação, mas é desprezada nas questões','Gráficos: horizontal é reta (MU); vertical é parábola'], null],
 ['Aplicações do dia a dia', 'Onde isso aparece.', ['Salto em distância, chute de futebol, arremesso de basquete','Paraquedismo: com resistência do ar surge a velocidade terminal','Jorro de água de uma mangueira inclinada','Bombeiros: ângulo do jato para atingir uma janela alta'], null]
],
ex:[
 { q:'Uma pedra é abandonada do alto de um prédio e leva 3 s para atingir o solo. Desprezando a resistência do ar e usando g = 10 m/s², qual a altura do prédio?', a:['15 m','30 m','45 m','60 m','90 m'], g:'C', c:'h = g·t²/2 = 10 × 9 / 2 = 45 m.' },
 { q:'Uma bola é lançada verticalmente para cima com velocidade de 20 m/s (g = 10 m/s²). Qual a altura máxima atingida?', a:['10 m','20 m','30 m','40 m','50 m'], g:'B', c:'H = v₀²/(2g) = 400/20 = 20 m.' }
],
pr:[
 { q:'Uma bola cai, a partir do repouso, por 2 s. Com g = 10 m/s², sua velocidade ao final desse tempo é:', a:['5 m/s','10 m/s','15 m/s','20 m/s','40 m/s'], g:'D', c:'v = g·t = 10 × 2 = 20 m/s.' },
 { q:'Um objeto é lançado verticalmente para cima com 30 m/s. Quanto tempo leva para atingir a altura máxima? (g = 10 m/s²)', a:['1 s','2 s','3 s','6 s','9 s'], g:'C', c:'ts = v₀/g = 30/10 = 3 s.' },
 { q:'Uma esfera é lançada horizontalmente de uma altura de 20 m com velocidade de 5 m/s (g = 10 m/s²). Quanto tempo leva para atingir o solo?', a:['1 s','2 s','3 s','4 s','5 s'], g:'B', c:'t = √(2h/g) = √(40/10) = √4 = 2 s.' },
 { q:'Duas esferas, uma de 1 kg e outra de 5 kg, são abandonadas ao mesmo tempo da mesma altura, no vácuo. Elas:', a:['a de 1 kg chega primeiro','a de 5 kg chega primeiro','chegam juntas','a de 5 kg tem menor aceleração','dependem da forma'], g:'C', c:'No vácuo, todos os corpos caem com a mesma aceleração g, independentemente da massa.' }
],
erros:['Achar que corpos mais pesados caem mais rápido (sem resistência do ar, caem igual).','Pensar que a aceleração é nula no ponto mais alto do lançamento (ela continua sendo g).','Misturar as componentes horizontal e vertical no lançamento oblíquo.','Esquecer que o tempo de queda não depende da velocidade horizontal.'],
check:['aplicar v = gt, h = gt²/2 e v² = 2gh em queda livre','calcular altura máxima e tempo de subida no lançamento vertical','tratar o lançamento horizontal como MU + queda livre','decompor o lançamento oblíquo em componentes']
}
];
