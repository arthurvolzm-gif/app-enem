/* Matemática: temas 19 a 22 */
module.exports = [
{ t:'Teorema de Pitágoras e semelhança',
d1:[
 ['Teorema de Pitágoras', 'Em todo triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a² = b² + c².', ['**Hipotenusa (a):** lado oposto ao ângulo reto e o maior lado','**Catetos (b e c):** os dois lados que formam o ângulo reto','Exemplo: catetos 6 e 8 → a² = 36 + 64 = 100 → a = 10','**Ternas pitagóricas:** 3-4-5, 5-12-13, 8-15-17 (e seus múltiplos: 6-8-10)'], 'Só vale para triângulo retângulo. Se o triângulo não tem ângulo reto, não use Pitágoras.'],
 ['Aplicações do teorema', 'Aparece em distâncias e alturas.', ['**Diagonal do quadrado:** d = l√2','**Diagonal do retângulo:** d = √(a² + b²)','**Altura do triângulo equilátero:** h = l√3 / 2','**Escada encostada na parede:** a escada é a hipotenusa; a parede e o chão, os catetos','**Menor caminho em linha reta** entre dois pontos em um plano'], null],
 ['Semelhança de triângulos', 'Dois triângulos são semelhantes quando têm os mesmos ângulos; os lados correspondentes são proporcionais.', ['Razão de semelhança k = lado de um ÷ lado correspondente do outro','Se k = 2, todos os comprimentos do maior são o dobro dos do menor (e a área é 4 vezes maior)','**Critério AA:** dois ângulos iguais bastam','Exemplo: a sombra de uma pessoa e a sombra de um prédio formam triângulos semelhantes'], null]
],
d2:[
 ['Semelhança na prática', 'Com semelhança dá para medir o que não se alcança.', ['**Sombras:** pessoa de 1,8 m com sombra de 2 m; prédio com sombra de 40 m → altura 36 m (1,8/2 = h/40)','**Rios e distâncias inacessíveis:** use triângulos semelhantes montados no solo','**Mapas e ampliações:** proporção entre lados','Monte sempre a proporção com os lados correspondentes na mesma ordem'], 'Dica: desenhe os dois triângulos separados e marque os lados que se correspondem.'],
 ['Teorema de Tales', 'Retas paralelas cortadas por transversais determinam segmentos proporcionais.', ['Se três retas paralelas cortam duas transversais, a/b = c/d','Exemplo: segmentos 4 e 6 de um lado; 6 e x do outro → 4/6 = 6/x → x = 9','Útil em terrenos divididos por retas paralelas (lotes entre duas ruas)'], null],
 ['Relações métricas e área na semelhança', 'Para triângulos semelhantes, tudo muda por k, k² ou k³.', ['Comprimentos (lados, alturas, perímetros) → k','Áreas → k²','Volumes (sólidos semelhantes) → k³','Exemplo: maquete de razão 1:10: área real = 100 vezes a da maquete; volume real = 1.000 vezes'], null]
],
ex:[
 { q:'Uma escada de 5 m de comprimento está apoiada em uma parede vertical, com a base a 3 m da parede. A que altura da parede a escada toca?', a:['2 m','3 m','4 m','5 m','8 m'], g:'C', c:'A escada é a hipotenusa (5 m) e a base é um cateto (3 m). h² = 5² − 3² = 25 − 9 = 16 → h = 4 m.' },
 { q:'Em um mesmo horário, um poste projeta uma sombra de 6 m e uma pessoa de 1,5 m projeta uma sombra de 1 m. Qual é a altura do poste?', a:['6 m','8 m','9 m','10 m','12 m'], g:'C', c:'Triângulos semelhantes: altura/sombra é constante. h/6 = 1,5/1 → h = 9 m.' }
],
pr:[
 { q:'A diagonal de um quadrado de lado 10 cm mede aproximadamente (√2 ≈ 1,41):', a:['10 cm','12,1 cm','14,1 cm','15 cm','20 cm'], g:'C', c:'d = l√2 = 10 × 1,41 = 14,1 cm.' },
 { q:'Um triângulo retângulo tem hipotenusa 13 cm e um cateto 5 cm. O outro cateto mede:', a:['8 cm','10 cm','12 cm','14 cm','18 cm'], g:'C', c:'b² = 13² − 5² = 169 − 25 = 144 → b = 12 cm (terna 5-12-13).' },
 { q:'Dois triângulos semelhantes têm razão de semelhança 3. Se a área do menor é 10 cm², a área do maior é:', a:['30 cm²','60 cm²','90 cm²','100 cm²','270 cm²'], g:'C', c:'A razão entre as áreas é k² = 9. Área do maior = 10 × 9 = 90 cm².' },
 { q:'Uma pessoa caminha 8 m para o norte e depois 15 m para o leste. A distância em linha reta até o ponto de partida é:', a:['12 m','15 m','17 m','20 m','23 m'], g:'C', c:'Os trajetos são catetos de um triângulo retângulo: d² = 8² + 15² = 64 + 225 = 289 → d = 17 m.' }
],
erros:['Aplicar Pitágoras em triângulo que não é retângulo.','Tomar um cateto como hipotenusa (a hipotenusa é sempre o maior lado).','Montar a proporção de semelhança com lados que não se correspondem.','Aplicar a razão k às áreas sem elevá-la ao quadrado.'],
check:['usar o teorema de Pitágoras em contextos reais (escadas, diagonais, caminhos)','identificar triângulos semelhantes e montar a proporção','aplicar o teorema de Tales','relacionar razão de semelhança com áreas e volumes']
},

{ t:'Trigonometria',
d1:[
 ['Razões no triângulo retângulo', 'Relacionam um ângulo agudo com os lados do triângulo.', ['**Seno = cateto oposto ÷ hipotenusa**','**Cosseno = cateto adjacente ÷ hipotenusa**','**Tangente = cateto oposto ÷ cateto adjacente**','Mnemônico: SOH-CAH-TOA (Seno = Oposto/Hipotenusa; Cosseno = Adjacente/Hipotenusa; Tangente = Oposto/Adjacente)','Oposto e adjacente dependem do ângulo escolhido'], null],
 ['Ângulos notáveis', 'Valores que o enunciado costuma fornecer ou que convém decorar.', ['**30°:** sen 1/2; cos √3/2; tg √3/3','**45°:** sen √2/2; cos √2/2; tg 1','**60°:** sen √3/2; cos 1/2; tg √3','sen 30° = cos 60°, e sen 60° = cos 30° (complementares)','Valores aproximados: √2 ≈ 1,41; √3 ≈ 1,73'], 'Em quase toda questão os valores aparecem em uma tabela. Não perca tempo decorando se ela for dada.'],
 ['Aplicações: alturas e distâncias', 'A trigonometria mede o que não se alcança.', ['Altura de um prédio: tg(ângulo) = altura ÷ distância da base','Rampa de inclinação: sen(ângulo) = altura ÷ comprimento da rampa','Comprimento da sombra: tg = altura ÷ sombra','Altura de uma árvore, de uma torre, de uma montanha, profundidade de um poço'], null]
],
d2:[
 ['Como escolher a razão certa', 'Desenhe o triângulo retângulo e marque o ângulo dado.', ['Quais lados aparecem na questão: se são o oposto e o adjacente, use a tangente','Se aparecem o oposto e a hipotenusa, use o seno','Se aparecem o adjacente e a hipotenusa, use o cosseno','Depois monte a equação e isole a incógnita'], 'Exemplo: ângulo de 60° com cateto adjacente 10 m; altura h → tg 60° = h/10 → h = 10√3 ≈ 17,3 m.'],
 ['Relação fundamental e ciclo', 'Identidades que valem para qualquer ângulo.', ['**sen²x + cos²x = 1**','**tg x = sen x ÷ cos x**','Círculo trigonométrico: ângulos maiores que 90° (2º, 3º e 4º quadrantes)','sen é positivo no 1º e 2º quadrantes; cos é positivo no 1º e 4º','Conversão: π rad = 180°. Então 90° = π/2; 60° = π/3'], null],
 ['Funções periódicas', 'O seno e o cosseno descrevem fenômenos que se repetem.', ['**Período:** o intervalo em que o gráfico se repete (2π para seno e cosseno)','**Amplitude:** o valor máximo da onda (para f(x) = A sen x, é A)','Aplicações: marés, ondas sonoras, corrente alternada, ciclos de temperatura','Leia o gráfico: máximo, mínimo, período'], null]
],
ex:[
 { q:'Uma rampa de 10 m de comprimento forma um ângulo de 30° com o solo. Qual a altura que ela atinge? (sen 30° = 0,5)', a:['2,5 m','5 m','8,7 m','10 m','20 m'], g:'B', c:'Altura é o cateto oposto e a rampa é a hipotenusa: sen 30° = h/10 → h = 10 × 0,5 = 5 m.' },
 { q:'Para medir a altura de uma torre, uma pessoa se afasta 30 m da base e vê o topo sob um ângulo de 30° com o solo. Considerando que os olhos da pessoa estão ao nível do solo, qual é a altura aproximada da torre? (tg 30° ≈ 0,58)', a:['10 m','15 m','17,4 m','30 m','52 m'], g:'C', c:'A altura é o cateto oposto e a distância de 30 m é o cateto adjacente: tg 30° = h/30 → h = 30 × 0,58 = 17,4 m.' }
],
pr:[
 { q:'Um observador está a 20 m da base de um prédio e vê o topo sob um ângulo de 45°. A altura do prédio é:', a:['10 m','15 m','20 m','28 m','40 m'], g:'C', c:'tg 45° = 1 = altura / 20 → altura = 20 m.' },
 { q:'Em um triângulo retângulo, a hipotenusa mede 12 cm e um dos ângulos agudos 60°. O cateto adjacente a esse ângulo mede: (cos 60° = 0,5)', a:['4 cm','6 cm','8 cm','10,4 cm','12 cm'], g:'B', c:'cos 60° = adjacente / hipotenusa → adjacente = 12 × 0,5 = 6 cm.' },
 { q:'Se sen x = 0,6, então cos x (com x agudo) vale:', a:['0,4','0,6','0,7','0,8','1,0'], g:'D', c:'sen²x + cos²x = 1 → cos²x = 1 − 0,36 = 0,64 → cos x = 0,8.' },
 { q:'Uma escada de 6 m apoiada em uma parede forma 60° com o chão. A altura em que ela toca a parede é (sen 60° ≈ 0,87):', a:['3 m','4,2 m','5,2 m','6 m','10,4 m'], g:'C', c:'sen 60° = altura / 6 → altura = 6 × 0,87 = 5,22 ≈ 5,2 m.' }
],
erros:['Trocar cateto oposto e adjacente: eles dependem do ângulo escolhido.','Usar seno ou cosseno quando o problema só fornece os dois catetos (use tangente).','Calcular em calculadora com o modo de ângulo errado (graus × radianos).','Esquecer que seno e cosseno nunca passam de 1.'],
check:['definir seno, cosseno e tangente no triângulo retângulo','usar os ângulos notáveis de 30°, 45° e 60°','resolver problemas de altura e distância','aplicar sen²x + cos²x = 1']
},

{ t:'Geometria espacial: volumes',
d1:[
 ['Prismas e cilindros', 'Volume = área da base × altura (V = Ab · h).', ['**Cubo:** V = a³','**Paralelepípedo (bloco retangular):** V = a · b · c','**Prisma qualquer:** V = Ab · h','**Cilindro:** V = πr²h','Capacidade: 1 dm³ = 1 L e 1 m³ = 1.000 L'], 'Para água em recipiente, converta o volume em litros se pedido.'],
 ['Pirâmides, cones e esferas', 'Volumes com fator 1/3 ou 4/3.', ['**Pirâmide:** V = (1/3) · Ab · h','**Cone:** V = (1/3) · πr²h','**Esfera:** V = (4/3)πr³','O cone e a pirâmide têm 1/3 do volume do cilindro/prisma com a mesma base e altura','**Área da esfera:** 4πr²'], null],
 ['Área total e superfície', 'Soma de todas as faces.', ['**Cubo:** A = 6a²','**Paralelepípedo:** A = 2(ab + ac + bc)','**Cilindro:** A = 2πr² + 2πrh (bases + lateral)','Aplicação: quanto de tinta, de papel ou de embalagem é necessário'], null]
],
d2:[
 ['Problemas de capacidade e preenchimento', 'O ENEM adora recipientes e líquidos.', ['Volume do líquido = área da base × altura do líquido','Quando um objeto é mergulhado, o nível sobe: o volume deslocado é igual ao volume do objeto','Conversões: 1 L = 1.000 cm³; 1 m³ = 1.000 L','Compare embalagens: a que tem maior volume por custo'], 'Tanque cilíndrico: V = πr²h. Se dobrar o raio, o volume quadruplica.'],
 ['Sólidos semelhantes e proporção', 'Aumentar as medidas muda o volume muito mais que o comprimento.', ['Aresta multiplicada por k → área × k² e volume × k³','Cubo de aresta 2 → de aresta 4: volume 8 vezes maior','Embalagem 1 L e outra com altura 20% maior (mesma base): volume 20% maior (apenas a altura muda)','Cuidado: aumentar todas as dimensões em 10% aumenta o volume em 33,1%'], null],
 ['Roteiro para resolver', 'Passos práticos.', ['1. Identifique o sólido (ou a combinação de sólidos)','2. Anote as medidas e converta unidades','3. Aplique a fórmula do volume (ou da área)','4. Converta para a unidade pedida','5. Se for composto, some ou subtraia os volumes'], null]
],
ex:[
 { q:'Uma caixa-d\'água tem formato de cilindro com raio de 1 m e altura de 2 m. Usando π = 3, quantos litros ela comporta?', a:['3.000','6.000','9.000','12.000','18.000'], g:'B', c:'V = πr²h = 3 × 1² × 2 = 6 m³. Como 1 m³ = 1.000 L, são 6.000 litros.' },
 { q:'Um cubo de aresta 4 cm é totalmente mergulhado em um recipiente com água. O volume de água deslocado é de:', a:['16 cm³','24 cm³','48 cm³','64 cm³','96 cm³'], g:'D', c:'O volume deslocado é igual ao do cubo: 4³ = 64 cm³.' }
],
pr:[
 { q:'O volume de um paralelepípedo de dimensões 5 cm, 4 cm e 10 cm é:', a:['19 cm³','100 cm³','140 cm³','200 cm³','400 cm³'], g:'D', c:'V = 5 × 4 × 10 = 200 cm³.' },
 { q:'O volume de uma esfera de raio 3 cm, com π = 3, é:', a:['36 cm³','54 cm³','108 cm³','144 cm³','324 cm³'], g:'C', c:'V = (4/3)πr³ = (4/3) × 3 × 27 = 4 × 27 = 108 cm³.' },
 { q:'Uma pirâmide e um prisma têm a mesma base e a mesma altura. Se o volume do prisma é 90 cm³, o da pirâmide é:', a:['15 cm³','30 cm³','45 cm³','60 cm³','90 cm³'], g:'B', c:'O volume da pirâmide é 1/3 do volume do prisma com mesma base e altura: 90 ÷ 3 = 30 cm³.' },
 { q:'Quantos litros de água cabem em uma piscina de 10 m de comprimento, 5 m de largura e 2 m de profundidade?', a:['10.000','50.000','100.000','150.000','200.000'], g:'C', c:'V = 10 × 5 × 2 = 100 m³ = 100.000 litros.' }
],
erros:['Esquecer o fator 1/3 em pirâmides e cones.','Usar o diâmetro no lugar do raio nas fórmulas do cilindro, do cone e da esfera.','Errar a conversão de m³ para litros (1 m³ = 1.000 L).','Achar que dobrar todas as medidas dobra o volume (ele fica 8 vezes maior).'],
check:['calcular o volume de prismas, cilindros, pirâmides, cones e esferas','calcular áreas de superfície simples','resolver problemas de capacidade e de volume deslocado','relacionar a razão de semelhança com o volume']
},

{ t:'Estatística: média, moda e mediana',
d1:[
 ['Medidas de tendência central', 'Resumem um conjunto de dados em um único valor.', ['**Média aritmética:** soma dos valores ÷ quantidade de valores','**Moda:** o valor que mais se repete (pode haver mais de uma ou nenhuma)','**Mediana:** o valor central dos dados em ordem crescente','Exemplo: 2, 4, 4, 6, 9 → média 5; moda 4; mediana 4'], null],
 ['Mediana e moda: como calcular', 'Passos para não errar.', ['Coloque os dados em ordem crescente','Quantidade ímpar: a mediana é o termo do meio','Quantidade par: a mediana é a média dos dois termos do meio. 3, 5, 8, 10 → (5 + 8)/2 = 6,5','Moda: conte as repetições (em tabela de frequência, é o maior valor da frequência)'], 'A mediana não é afetada por valores extremos; a média é.'],
 ['Média ponderada', 'Quando os valores têm "pesos" diferentes.', ['**Média ponderada = soma(valor × peso) ÷ soma dos pesos**','Notas 6 (peso 2) e 9 (peso 3): (6 × 2 + 9 × 3)/(2 + 3) = 39/5 = 7,8','Exemplo comum: média de provas com pesos diferentes e média de preço por quantidade','Em tabela de frequência: média = soma(valor × frequência) ÷ total'], null]
],
d2:[
 ['Medidas de dispersão', 'Mostram o quanto os dados se espalham.', ['**Amplitude:** maior valor − menor valor','**Variância:** média dos quadrados dos desvios em relação à média','**Desvio padrão:** raiz quadrada da variância (mesma unidade dos dados)','Desvio padrão pequeno: dados parecidos (consistência). Grande: dados espalhados'], 'No ENEM, quase sempre basta comparar o desvio padrão de dois grupos: o menor é o mais regular.'],
 ['Interpretação do contexto', 'Qual medida usar em cada caso.', ['**Média:** quando não há valores muito extremos','**Mediana:** quando há extremos (salários, preços de imóveis)','**Moda:** para dados qualitativos ou o "mais comum" (tamanho de calçado mais vendido)','Qual é "típico"? Comece pela distribuição dos dados'], null],
 ['Efeito de mudanças nos dados', 'Perguntas clássicas de interpretação.', ['Somar uma constante a todos os valores: a média e a mediana somam a constante; o desvio padrão não muda','Multiplicar todos por k: a média e a mediana são multiplicadas por k; o desvio padrão também','Incluir um valor extremo: a média muda bastante; a mediana, pouco','Para a média subir de 7 para 8 com n notas: calcule a soma necessária'], null]
],
ex:[
 { q:'As notas de um aluno em cinco provas foram 6, 7, 7, 8 e 9. A média, a moda e a mediana são, respectivamente:', a:['7,4; 7; 7','7,4; 8; 7','7; 7; 7,4','7,4; 7; 8','8; 7; 7'], g:'A', c:'Soma = 37; média = 37/5 = 7,4. A moda é 7 (aparece duas vezes). A mediana, com os dados em ordem, é o termo do meio: 7.' },
 { q:'Em uma empresa, os salários (em R$) são: 2.000; 2.000; 2.500; 3.000; 20.000. Para descrever o salário "típico" dos funcionários, qual medida é mais adequada?', a:['média, R$ 5.900','mediana, R$ 2.500','amplitude, R$ 18.000','soma, R$ 29.500','desvio padrão'], g:'B', c:'O valor extremo (20.000) puxa a média para cima (5.900). A mediana (2.500) representa melhor o típico, pois não é afetada por extremos.' }
],
pr:[
 { q:'A média aritmética de 4, 8, 10 e 14 é:', a:['7','8','9','10','12'], g:'C', c:'Soma = 36; 36 ÷ 4 = 9.' },
 { q:'A mediana dos valores 12, 5, 9, 20, 7, 15 é:', a:['9','10,5','12','13,5','15'], g:'B', c:'Em ordem: 5, 7, 9, 12, 15, 20. Quantidade par: média dos dois centrais: (9 + 12)/2 = 10,5.' },
 { q:'Um aluno fez três provas com pesos 2, 3 e 5 e tirou 8, 6 e 7. Sua média ponderada é:', a:['6,5','6,9','7,0','7,3','7,5'], g:'B', c:'(8 × 2 + 6 × 3 + 7 × 5)/(2 + 3 + 5) = (16 + 18 + 35)/10 = 6,9.' },
 { q:'Dois times de futebol têm a mesma média de gols por jogo, mas o time A tem desvio padrão menor. Isso significa que o time A:', a:['marca mais gols','marca menos gols','é mais regular','é menos regular','tem a mesma mediana'], g:'C', c:'Menor desvio padrão indica dados menos espalhados em torno da média: o time A é mais regular.' }
],
erros:['Calcular a mediana sem ordenar os dados antes.','Esquecer de tirar a média dos dois valores centrais quando a quantidade é par.','Confundir média simples com média ponderada quando há pesos.','Interpretar desvio padrão grande como "média grande" (ele mede dispersão, não tamanho).'],
check:['calcular média, moda e mediana','calcular média ponderada e em tabelas de frequência','escolher a medida mais adequada para cada contexto','interpretar o desvio padrão como regularidade dos dados']
}
];
