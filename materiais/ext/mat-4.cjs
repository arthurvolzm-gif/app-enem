/* Matemática: temas 11 a 14 */
module.exports = [
{ t:'Sistemas de equações',
d1:[
 ['O que é um sistema', 'Um sistema de equações reúne duas ou mais equações com as mesmas incógnitas. A solução precisa satisfazer todas ao mesmo tempo.', ['Exemplo: x + y = 10 e x − y = 2','A solução é o par (x, y) que funciona nas duas: (6, 4)','Cada equação do 1º grau com duas incógnitas é uma reta no plano; a solução é o ponto onde as retas se cruzam'], 'Em problemas, cada informação do texto vira uma equação.'],
 ['Método da substituição', 'Isole uma incógnita em uma equação e substitua na outra.', ['x + y = 10 → y = 10 − x','Na outra: x − (10 − x) = 2 → 2x − 10 = 2 → x = 6','Volte: y = 10 − 6 = 4','Bom quando uma equação já tem uma incógnita "sozinha" ou com coeficiente 1'], null],
 ['Método da adição', 'Some as equações para cancelar uma incógnita.', ['x + y = 10 e x − y = 2: somando, 2x = 12 → x = 6','Se os coeficientes não se cancelam, multiplique uma equação (ou as duas) por um número','Exemplo: 2x + 3y = 12 e 4x − y = 10 → multiplique a segunda por 3: 12x − 3y = 30; some com a primeira: 14x = 42 → x = 3 e y = 2'], 'Se der 0 = número diferente de zero, o sistema é impossível; se der 0 = 0, é indeterminado.']
],
d2:[
 ['Classificação dos sistemas', 'O número de soluções depende da posição das retas.', ['**Possível e determinado (SPD):** retas concorrentes, uma única solução','**Possível e indeterminado (SPI):** retas coincidentes, infinitas soluções','**Impossível (SI):** retas paralelas, nenhuma solução','Exemplo de SI: x + y = 3 e x + y = 5'], null],
 ['Traduzindo problemas', 'Use letras diferentes para grandezas diferentes.', ['"Em uma loja, 3 camisas e 2 calças custam R$ 330, e 1 camisa e 1 calça, R$ 130"','3c + 2p = 330 e c + p = 130','Multiplique a segunda por 2: 2c + 2p = 260; subtraia: c = 70 e p = 60','Confira: 3 × 70 + 2 × 60 = 210 + 120 = 330 ✓'], 'Clássicos: ingressos de dois tipos, moedas de dois valores, misturas, idades.'],
 ['Sistemas com três incógnitas e interpretação gráfica', 'No ENEM, em geral, resolve-se por escalonamento simples ou substituição.', ['Elimine uma incógnita por vez até chegar a uma equação de uma incógnita','Gráfico: a solução é a interseção. Se o gráfico dos custos de duas operadoras se cruza em 100 min, é o ponto de equilíbrio','Compare planos: quando um é mais vantajoso que o outro?'], null]
],
ex:[
 { q:'Em um estacionamento há carros (4 rodas) e motos (2 rodas). Ao todo são 30 veículos e 92 rodas. Quantas motos há no estacionamento?', a:['12','14','16','18','20'], g:'B', c:'c + m = 30 e 4c + 2m = 92. Da primeira, c = 30 − m. Substituindo: 4(30 − m) + 2m = 92 → 120 − 2m = 92 → m = 14. Há 14 motos e 16 carros.' },
 { q:'Um cinema vendeu 200 ingressos, entre inteiros (R$ 20) e meia-entrada (R$ 10), arrecadando R$ 3.200. Quantas meias-entradas foram vendidas?', a:['60','80','100','120','140'], g:'B', c:'i + m = 200 e 20i + 10m = 3.200 (÷10: 2i + m = 320). Subtraindo a primeira: i = 120. Então m = 80.' }
],
pr:[
 { q:'A solução do sistema x + y = 8 e x − y = 2 é:', a:['(3, 5)','(4, 4)','(5, 3)','(6, 2)','(7, 1)'], g:'C', c:'Somando: 2x = 10 → x = 5. Então y = 3.' },
 { q:'Uma caneta e dois cadernos custam R$ 23; duas canetas e um caderno custam R$ 16. Quanto custa um caderno?', a:['R$ 3','R$ 5','R$ 7','R$ 9','R$ 10'], g:'E', c:'c + 2d = 23 e 2c + d = 16. Multiplicando a primeira por 2: 2c + 4d = 46. Subtraindo a segunda: 3d = 30 → d = 10. Então c = 3. Conferindo: 3 + 2 × 10 = 23 e 2 × 3 + 10 = 16. O caderno custa R$ 10.' },
 { q:'O sistema x + y = 4 e 2x + 2y = 9:', a:['tem uma única solução','tem duas soluções','tem infinitas soluções','não tem solução','tem solução (4, 0)'], g:'D', c:'Dividindo a segunda por 2, x + y = 4,5, o que contradiz x + y = 4. As retas são paralelas: sistema impossível.' },
 { q:'Em uma sala, o número de meninas é o triplo do número de meninos, e há 36 alunos. Quantas meninas há?', a:['9','18','24','27','30'], g:'D', c:'m = meninos e f = meninas: f = 3m e f + m = 36 → 4m = 36 → m = 9. Meninas: 27.' }
],
erros:['Esquecer de voltar e calcular a segunda incógnita depois de achar a primeira.','Errar o sinal ao subtrair equações (troque os sinais com cuidado).','Usar a mesma letra para duas grandezas diferentes.','Não conferir a resposta nas duas equações originais.'],
check:['resolver um sistema 2×2 pela substituição e pela adição','transformar um problema em um sistema','classificar um sistema em possível determinado, indeterminado ou impossível','interpretar a solução como ponto de encontro de retas']
},

{ t:'Funções: como ler e interpretar',
d1:[
 ['O que é uma função', 'Função é uma relação em que cada valor de x corresponde a um único valor de y. Escrevemos y = f(x).', ['**Domínio:** valores possíveis de x. **Imagem:** valores que y assume','Exemplo: f(x) = 2x + 3. Para x = 4, f(4) = 11','Tabelas, gráficos e fórmulas são três jeitos de apresentar a mesma função','No contexto: x = tempo (h), y = distância (km); x = quantidade, y = custo'], null],
 ['Lendo um gráfico', 'A maioria das questões pede para extrair informação.', ['**Crescente:** o gráfico sobe (y aumenta quando x aumenta)','**Decrescente:** o gráfico desce','**Constante:** linha horizontal','**Máximo e mínimo:** pontos mais alto e mais baixo','**Raiz ou zero:** onde o gráfico cruza o eixo x (y = 0)','**Intercepto:** onde cruza o eixo y (x = 0)'], 'Leia eixos, unidades e escala antes de tudo.'],
 ['Variação e taxa', 'A inclinação mostra quanto y muda a cada unidade de x.', ['Taxa de variação = Δy ÷ Δx','De (1, 10) a (3, 18): (18 − 10)/(3 − 1) = 4 por unidade','Trechos mais inclinados = variação mais rápida','Trecho horizontal = nada muda no período'], null]
],
d2:[
 ['Análise de intervalos', 'Compare períodos usando o gráfico.', ['"Em que intervalo houve maior crescimento?" → procure a reta mais íngreme que sobe','"Quando o valor foi máximo?" → pico','Média no período: some e divida, ou calcule a variação total ÷ tempo','Cuidado com eixos que não começam no zero: eles exageram as diferenças'], null],
 ['Função em tabelas', 'Se os dados são equidistantes, observe o padrão.', ['Diferenças constantes entre valores de y → função afim','Diferenças crescentes de forma regular → quadrática','Razão constante entre valores de y → exponencial','Use dois pontos da tabela para achar a lei da função afim'], 'Exemplo: x = 1, 2, 3 e y = 5, 8, 11 → y = 3x + 2.'],
 ['Funções do cotidiano', 'Quase tudo na prova é uma função disfarçada.', ['**Conta de água/energia:** valor fixo + valor por unidade consumida','**Táxi:** bandeirada + preço por km','**Crescimento populacional:** curva ao longo dos anos','**Temperatura ao longo do dia:** sobe até a tarde e depois cai','**Desempenho de um aluno** ao longo dos meses'], 'Identifique o que é x e o que é y antes de qualquer conta.']
],
ex:[
 { q:'O gráfico mostra a distância percorrida por um carro em função do tempo: 0 km em 0 h; 40 km em 1 h; 100 km em 2 h; 100 km em 3 h; 180 km em 4 h. Em qual intervalo a velocidade média foi maior?', a:['0 h a 1 h','1 h a 2 h','2 h a 3 h','3 h a 4 h','Foi igual em todos'], g:'D', c:'Velocidade média = distância percorrida ÷ tempo. De 0 a 1 h: 40 km/h. De 1 a 2 h: 60 km/h. De 2 a 3 h: 0 (parado). De 3 a 4 h: 80 km/h, a maior.' },
 { q:'A tabela mostra o custo y (em R$) de x cópias: x = 10 → y = 5; x = 20 → y = 9; x = 30 → y = 13. Qual será o custo de 50 cópias, mantido o padrão?', a:['R$ 17','R$ 19','R$ 21','R$ 23','R$ 25'], g:'C', c:'A cada 10 cópias o custo sobe R$ 4, ou seja, R$ 0,40 por cópia. Lei: y = 0,4x + 1. Para x = 50: 20 + 1 = R$ 21.' }
],
pr:[
 { q:'Se f(x) = 3x − 5, o valor de f(4) + f(−1) é:', a:['−1','−2','1','4','10'], g:'A', c:'f(4) = 12 − 5 = 7. f(−1) = −3 − 5 = −8. Soma: 7 + (−8) = −1.' },
 { q:'Um gráfico mostra a população de uma cidade: crescente de 2000 a 2010, constante de 2010 a 2015 e decrescente depois. Em qual período a população ficou estável?', a:['2000 a 2010','2005 a 2008','2010 a 2015','depois de 2015','em nenhum período'], g:'C', c:'"Constante" significa linha horizontal: de 2010 a 2015.' },
 { q:'Em um táxi, a corrida custa R$ 5 de bandeirada mais R$ 2 por quilômetro. O gasto y para x km é:', a:['y = 5x + 2','y = 2x + 5','y = 7x','y = 2x − 5','y = x + 7'], g:'B', c:'Parte fixa R$ 5 e variável R$ 2 por km: y = 2x + 5.' },
 { q:'O gráfico de uma função cruza o eixo x em x = 3. Isso significa que:', a:['f(0) = 3','f(3) = 0','f(3) = 3','f(x) = 3 para todo x','a função é constante'], g:'B', c:'Cruzar o eixo x em x = 3 significa y = 0 nesse ponto: f(3) = 0 (raiz).' }
],
erros:['Ler o gráfico sem olhar a escala e as unidades dos eixos.','Confundir f(x) = 0 (raiz) com x = 0 (intercepto no eixo y).','Concluir "crescimento maior" olhando só a altura, em vez da inclinação.','Esquecer de relacionar o texto com x e y antes de montar a função.'],
check:['calcular f(a) a partir da lei','ler crescimento, decrescimento, máximos e raízes em um gráfico','calcular a taxa de variação entre dois pontos','montar uma função a partir de tabela ou texto']
},

{ t:'Função afim (1º grau)',
d1:[
 ['Lei e gráfico', 'Função afim: f(x) = ax + b. O gráfico é uma reta.', ['**a (coeficiente angular):** inclinação. a > 0: crescente; a < 0: decrescente; a = 0: constante','**b (coeficiente linear):** onde a reta corta o eixo y, no ponto (0, b)','**Raiz:** f(x) = 0 → x = −b/a','Exemplo: f(x) = 2x − 6 → raiz x = 3; corta o eixo y em −6'], null],
 ['Como achar a lei', 'Use dois pontos ou uma informação fixa e uma taxa.', ['Pelos pontos (1, 5) e (3, 11): a = (11 − 5)/(3 − 1) = 3; 5 = 3 × 1 + b → b = 2 → f(x) = 3x + 2','Por texto: custo fixo R$ 40 e R$ 1,50 por unidade → f(x) = 1,5x + 40','Se o gráfico passa pela origem, b = 0 (proporcionalidade direta)'], 'Função linear: b = 0 (caso especial). Grandezas diretamente proporcionais.'],
 ['Problemas típicos', 'Aparecem em orçamentos, planos de celular e salários.', ['**Salário:** fixo + comissão por venda','**Locação:** diária + custo por km','**Planos:** compare duas leis e descubra a partir de quando um compensa mais','Resolva igualando: 40 + 1,5x = 25 + 2x → x = 30'], null]
],
d2:[
 ['Crescimento e decrescimento', 'O sinal de a controla tudo.', ['f(x) = −3x + 12: decrescente. Raiz: x = 4','Se x aumenta 1, y diminui 3','O gráfico de uma função decrescente "desce" da esquerda para a direita','Estudo do sinal: onde f(x) > 0, f(x) < 0 e f(x) = 0'], 'Para f(x) = ax + b com a > 0: positiva à direita da raiz, negativa à esquerda.'],
 ['Interseção de funções', 'Duas funções afins se cruzam em, no máximo, um ponto.', ['Igualar: f(x) = g(x) e resolver','O ponto de encontro representa o instante em que os valores se igualam','Antes e depois do ponto, uma função passa a ser maior que a outra','Gráfico: leia o cruzamento nas escalas, sem chute'], null],
 ['Taxa de variação e aplicações', 'O coeficiente a é a taxa de variação constante.', ['Em f(x) = 60x + 20 (km por hora), a velocidade é 60 km/h e o ponto de partida é 20 km','Depreciação linear de um bem: valor = valor inicial − taxa × tempo','Conversão de unidades (Celsius para Fahrenheit) também é afim: F = 1,8C + 32'], null]
],
ex:[
 { q:'Uma locadora cobra R$ 50 de taxa fixa mais R$ 0,80 por quilômetro rodado. Quanto paga quem roda 150 km?', a:['R$ 120','R$ 150','R$ 170','R$ 190','R$ 210'], g:'C', c:'f(x) = 0,8x + 50. Para x = 150: 120 + 50 = R$ 170.' },
 { q:'Duas empresas de telefonia cobram: A, R$ 30 fixos + R$ 0,50 por minuto; B, R$ 10 fixos + R$ 0,70 por minuto. A partir de quantos minutos a empresa A fica mais vantajosa?', a:['Mais de 50 min','Mais de 80 min','Mais de 100 min','Mais de 120 min','Mais de 150 min'], g:'C', c:'30 + 0,5x = 10 + 0,7x → 20 = 0,2x → x = 100 min. Para mais de 100 minutos, A fica mais barata.' }
],
pr:[
 { q:'A raiz da função f(x) = 4x − 12 é:', a:['−3','0','3','4','12'], g:'C', c:'4x − 12 = 0 → x = 3.' },
 { q:'A reta que passa pelos pontos (0, 4) e (2, 10) tem equação:', a:['y = 2x + 4','y = 3x + 4','y = 4x + 3','y = 5x','y = 3x + 10'], g:'B', c:'b = 4 (ponto em x = 0). a = (10 − 4)/(2 − 0) = 3. Lei: y = 3x + 4.' },
 { q:'Uma máquina vale R$ 12.000 e se desvaloriza R$ 1.500 por ano, de forma linear. Qual a lei do valor V em função dos anos t?', a:['V = 12.000 + 1.500t','V = 1.500 − 12.000t','V = 12.000 − 1.500t','V = 12.000 × 1.500t','V = 12.000 − t'], g:'C', c:'Valor inicial 12.000 menos 1.500 por ano: V = 12.000 − 1.500t.' },
 { q:'Para f(x) = −2x + 8, é correto afirmar que:', a:['é crescente','é positiva para x > 4','é positiva para x < 4','tem raiz em x = −4','o gráfico passa pela origem'], g:'C', c:'a = −2 < 0 (decrescente). Raiz: x = 4. À esquerda da raiz, a função é positiva: f(x) > 0 para x < 4.' }
],
erros:['Trocar a e b: a é a inclinação e b é o valor inicial.','Esquecer de usar um único valor de a (taxa) em toda a reta.','Achar a raiz como x = b/a: o correto é x = −b/a.','Comparar planos sem igualar as funções: o ponto de equilíbrio exige f(x) = g(x).'],
check:['encontrar a lei de uma função afim a partir de dois pontos ou de um texto','achar a raiz e o ponto em que o gráfico corta o eixo y','dizer se é crescente ou decrescente pelo sinal de a','comparar duas funções afins e achar o ponto de equilíbrio']
},

{ t:'Função quadrática',
d1:[
 ['Lei e gráfico', 'Função quadrática: f(x) = ax² + bx + c, com a ≠ 0. O gráfico é uma parábola.', ['**a > 0:** concavidade para cima (tem ponto mínimo, "sorriso")','**a < 0:** concavidade para baixo (ponto máximo, "tristeza")','**c:** onde corta o eixo y (ponto (0, c))','**Raízes:** soluções de ax² + bx + c = 0 (Bhaskara)','Exemplo: f(x) = x² − 4x + 3 → raízes 1 e 3; corta o eixo y em 3'], null],
 ['Vértice: máximo ou mínimo', 'O vértice é o ponto mais alto ou mais baixo da parábola e aparece em muitos problemas.', ['**xv = −b/2a** e **yv = −Δ/4a**','Em f(x) = −x² + 6x − 5: xv = −6/(−2) = 3; yv = −9 + 18 − 5 = 4 → vértice (3, 4)','O eixo de simetria é a reta x = xv','O xv fica no meio das raízes: xv = (x₁ + x₂)/2'], 'Em problemas de "valor máximo" ou "valor mínimo", procure o vértice.'],
 ['Discriminante e raízes', 'Δ diz quantas vezes a parábola cruza o eixo x.', ['Δ > 0: cruza em dois pontos','Δ = 0: toca em um ponto (vértice no eixo x)','Δ < 0: não cruza o eixo x','Se a > 0 e Δ < 0, a função é sempre positiva'], null]
],
d2:[
 ['Problemas de máximo e mínimo', 'Muito frequentes: lucro, área, altura.', ['**Altura de um lançamento:** h(t) = −5t² + 20t. Altura máxima no vértice: t = 2 s e h = 20 m','**Lucro:** L(x) = −2x² + 80x − 600. Lucro máximo em x = 20 (L = 200)','**Área:** com 40 m de cerca, o retângulo de maior área é o quadrado de 10 m (área 100)','Passos: monte a função, ache xv, calcule yv'], 'Cuidado: a pergunta pode ser o x (quantidade) ou o y (valor máximo).'],
 ['Estudo do sinal', 'Onde f(x) é positiva, negativa ou nula.', ['Marque as raízes na reta e avalie a concavidade','a > 0: positiva fora das raízes, negativa entre elas','a < 0: positiva entre as raízes, negativa fora','Aplicação: "em que períodos o lucro é positivo?"'], null],
 ['Forma fatorada e conexão com o gráfico', 'Se as raízes são x₁ e x₂: f(x) = a(x − x₁)(x − x₂).', ['Raízes 2 e 5 e a = 1: f(x) = (x − 2)(x − 5) = x² − 7x + 10','Se o gráfico passa por um ponto extra, use-o para achar a','Dado o vértice (h, k): f(x) = a(x − h)² + k'], null]
],
ex:[
 { q:'Um projétil é lançado e sua altura h (em metros) em função do tempo t (em segundos) é h(t) = −5t² + 30t. Qual é a altura máxima atingida?', a:['30 m','35 m','40 m','45 m','60 m'], g:'D', c:'Vértice: tv = −30/(−10) = 3 s. h(3) = −5 × 9 + 90 = −45 + 90 = 45 m.' },
 { q:'O lucro de uma empresa é L(x) = −x² + 40x − 300, em que x é a quantidade produzida (em milhares). Para que quantidade o lucro é máximo?', a:['10','15','20','25','30'], g:'C', c:'xv = −b/2a = −40/(−2) = 20 mil unidades. (O lucro máximo é L(20) = −400 + 800 − 300 = 100.)' }
],
pr:[
 { q:'As raízes da função f(x) = x² − 6x + 8 são:', a:['1 e 8','2 e 4','−2 e −4','3 e 5','6 e 8'], g:'B', c:'Soma = 6 e produto = 8: as raízes são 2 e 4.' },
 { q:'O vértice da parábola y = x² − 4x + 7 é o ponto:', a:['(2, 3)','(2, 7)','(−2, 19)','(4, 7)','(1, 4)'], g:'A', c:'xv = −(−4)/2 = 2. yv = 4 − 8 + 7 = 3. Vértice (2, 3).' },
 { q:'A função f(x) = x² + 2x + 5 possui:', a:['duas raízes reais distintas','uma raiz real','nenhuma raiz real','três raízes','raízes negativas somente'], g:'C', c:'Δ = 4 − 20 = −16 < 0: não cruza o eixo x. Nenhuma raiz real.' },
 { q:'Com 60 m de tela deseja-se cercar um terreno retangular. A maior área possível é:', a:['100 m²','200 m²','225 m²','250 m²','300 m²'], g:'C', c:'O perímetro de 60 dá lados x e 30 − x. Área = x(30 − x) = −x² + 30x, máximo em x = 15 (quadrado 15 × 15): 225 m².' }
],
erros:['Esquecer de dividir por 2a ao calcular o vértice.','Dizer "valor máximo" quando a > 0 (nesse caso há mínimo).','Confundir xv (instante, quantidade) com yv (valor máximo ou mínimo).','Dar a resposta como x quando o problema pede o valor da função no vértice (e vice-versa).'],
check:['identificar concavidade e raízes de uma função quadrática','calcular o vértice (xv e yv)','resolver problemas de máximo e mínimo','usar o sinal de Δ para saber quantas raízes existem']
}
];
