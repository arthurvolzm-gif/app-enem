/* Matemática: temas 15 a 18 */
module.exports = [
{ t:'Função exponencial e logaritmo',
d1:[
 ['Função exponencial', 'Na função exponencial, a variável está no expoente: f(x) = a · bˣ, com b > 0 e b ≠ 1.', ['**b > 1:** crescimento (população, juros compostos, epidemias)','**0 < b < 1:** decaimento (depreciação, desintegração radioativa)','O gráfico é uma curva que nunca toca o eixo x e passa por (0, a)','Exemplo: uma população de 1.000 bactérias que dobra a cada hora: P(t) = 1.000 · 2ᵗ'], 'Crescimento exponencial: cada período multiplica pelo mesmo fator.'],
 ['Equações exponenciais', 'Tente deixar as duas pontas na mesma base e iguale os expoentes.', ['2ˣ = 32 → 2ˣ = 2⁵ → x = 5','3ˣ⁺¹ = 81 → 3ˣ⁺¹ = 3⁴ → x = 3','4ˣ = 8 → 2²ˣ = 2³ → 2x = 3 → x = 3/2','Quando as bases forem diferentes e não houver potência em comum, o enunciado fornece o valor do logaritmo'], null],
 ['Logaritmo: a operação inversa', 'Logaritmo responde: "a que expoente devo elevar a base para obter este número?"', ['**log₂ 8 = 3**, pois 2³ = 8','**log₁₀ 1.000 = 3**; log 1 = 0 (para qualquer base)','Definição: logₐ b = x ⇔ aˣ = b (a > 0, a ≠ 1, b > 0)','Quando não há base escrita, é base 10'], null]
],
d2:[
 ['Propriedades dos logaritmos', 'Transformam produtos em somas e potências em produtos.', ['**log (a · b) = log a + log b**','**log (a / b) = log a − log b**','**log aⁿ = n · log a**','**Mudança de base:** logₐ b = log b / log a','Valores comuns (base 10): log 2 ≈ 0,30; log 3 ≈ 0,48; log 5 ≈ 0,70'], 'O ENEM costuma fornecer log 2 e log 3 na questão. Fatore o número usando 2, 3 e 5.'],
 ['Aplicações com logaritmo', 'Aparecem nas escalas e nos problemas de tempo.', ['**Escala Richter:** cada ponto a mais corresponde a energia cerca de 32 vezes maior','**pH:** pH = −log [H⁺] (química)','**Decibel:** nível sonoro em escala logarítmica','**Tempo para um valor crescer:** isole o expoente com log: 2ᵗ = 10 → t = log 10 / log 2 ≈ 3,3'], null],
 ['Gráficos', 'Um modelo exponencial cresce cada vez mais rápido; o logaritmo cresce cada vez mais devagar.', ['Exponencial crescente: cada ponto é multiplicado por b','Logaritmo: gráfico simétrico ao exponencial em relação à reta y = x','Meia-vida: o tempo que o valor leva para cair à metade (decaimento)','Saiba ler: "em quanto tempo o valor dobra?"'], null]
],
ex:[
 { q:'Uma cultura de bactérias começa com 500 indivíduos e dobra de tamanho a cada 3 horas. Qual o número de bactérias após 12 horas?', a:['2.000','4.000','6.000','8.000','16.000'], g:'D', c:'12 horas = 4 períodos de 3 horas. N = 500 · 2⁴ = 500 · 16 = 8.000 bactérias.' },
 { q:'Sabendo que log 2 ≈ 0,3, o valor aproximado de log 8 é:', a:['0,6','0,8','0,9','1,2','2,4'], g:'C', c:'8 = 2³. Pela propriedade da potência: log 8 = 3 · log 2 = 3 · 0,3 = 0,9.' }
],
pr:[
 { q:'A solução da equação 3ˣ = 243 é:', a:['x = 3','x = 4','x = 5','x = 6','x = 81'], g:'C', c:'243 = 3⁵ (3, 9, 27, 81, 243). Então x = 5.' },
 { q:'Um carro é comprado por R$ 40.000 e perde 10% do valor a cada ano (valor × 0,9). Qual o valor após 2 anos?', a:['R$ 30.000','R$ 32.000','R$ 32.400','R$ 34.000','R$ 36.000'], g:'C', c:'V = 40.000 · 0,9² = 40.000 · 0,81 = R$ 32.400.' },
 { q:'O valor de log₂ 64 é:', a:['4','5','6','8','32'], g:'C', c:'2⁶ = 64, então log₂ 64 = 6.' },
 { q:'Uma substância radioativa tem meia-vida de 10 anos. De uma amostra de 80 g, quanto resta após 30 anos?', a:['5 g','10 g','20 g','26,7 g','40 g'], g:'B', c:'30 anos = 3 meias-vidas. 80 → 40 → 20 → 10. Restam 10 g (80 · (1/2)³).' }
],
erros:['Somar expoentes quando as bases são diferentes (2³ · 3³ ≠ 6⁶).','Confundir log (a + b) com log a + log b: a propriedade vale para o produto, não para a soma.','Esquecer que o fator de decaimento é menor que 1 (0 < b < 1).','Usar a base errada: sem base escrita, o logaritmo é de base 10.'],
check:['reconhecer crescimento e decaimento exponencial','resolver equações exponenciais igualando as bases','aplicar as propriedades dos logaritmos com os dados fornecidos','interpretar meia-vida e tempo de dobra']
},

{ t:'Progressões: PA e PG',
d1:[
 ['Progressão aritmética (PA)', 'Sequência em que cada termo é o anterior somado a um valor fixo, a razão r.', ['Exemplo: 3, 7, 11, 15... (r = 4)','**Termo geral:** aₙ = a₁ + (n − 1) · r','a₁₀ da PA 3, 7, 11...: 3 + 9 × 4 = 39','Se r > 0 é crescente; se r < 0, decrescente; se r = 0, constante','Termos equidistantes dos extremos têm a mesma soma'], 'Reconhecer: "aumenta sempre a mesma quantidade" → PA.'],
 ['Soma dos termos de uma PA', 'Fórmula de Gauss: some o primeiro com o último, multiplique pelo número de termos e divida por 2.', ['**Sₙ = (a₁ + aₙ) · n / 2**','Soma de 1 a 100: (1 + 100) × 100 / 2 = 5.050','Soma dos 10 primeiros termos de 3, 7, 11...: a₁₀ = 39 → S = (3 + 39) × 10 / 2 = 210'], null],
 ['Progressão geométrica (PG)', 'Sequência em que cada termo é o anterior multiplicado por um valor fixo, a razão q.', ['Exemplo: 2, 6, 18, 54... (q = 3)','**Termo geral:** aₙ = a₁ · qⁿ⁻¹','a₅ da PG 2, 6, 18...: 2 × 3⁴ = 162','q > 1: crescente (para a₁ > 0); 0 < q < 1: decrescente','Reconhecer: "aumenta sempre o mesmo percentual" → PG'], null]
],
d2:[
 ['Soma de uma PG', 'Existem duas fórmulas conforme o número de termos.', ['**Soma finita:** Sₙ = a₁ · (qⁿ − 1) / (q − 1)','1 + 2 + 4 + 8 + 16 (5 termos): 1 × (2⁵ − 1)/(2 − 1) = 31','**Soma infinita (|q| < 1):** S = a₁ / (1 − q)','8 + 4 + 2 + 1 + ... : S = 8 / (1 − 1/2) = 16'], 'A soma infinita só existe quando a razão está entre −1 e 1.'],
 ['PA e PG no cotidiano', 'Padrões que se repetem em contextos diferentes.', ['**PA:** poupar R$ 50 a mais a cada mês, andar 500 m a mais por dia, degraus de uma escada','**PG:** juros compostos, população que dobra, bola que quica em fração da altura anterior, impostos percentuais','Compare: PA é crescimento linear; PG é crescimento exponencial','Gráfico: PA são pontos em uma reta; PG são pontos em uma exponencial'], null],
 ['Propriedades úteis', 'Atalhos para três termos consecutivos.', ['**PA:** o termo do meio é a média dos vizinhos: b = (a + c)/2','**PG:** o termo do meio é a média geométrica: b² = a · c','Em uma PA de 3 termos com soma conhecida, chame os termos de x − r, x, x + r','Em uma PG de 3 termos, chame de x/q, x, x · q'], null]
],
ex:[
 { q:'Um atleta corre 2 km no primeiro dia de treino e aumenta 500 m a cada dia. Quantos quilômetros correrá no 10º dia?', a:['5,0','6,0','6,5','7,0','7,5'], g:'C', c:'PA com a₁ = 2 km e r = 0,5 km. a₁₀ = 2 + 9 × 0,5 = 2 + 4,5 = 6,5 km.' },
 { q:'Uma dívida de R$ 1.000 cresce 10% ao mês, juros compostos. Qual a dívida após 3 meses?', a:['R$ 1.100','R$ 1.200','R$ 1.300','R$ 1.331','R$ 1.400'], g:'D', c:'É uma PG de razão 1,10: 1.000 × 1,1³ = 1.000 × 1,331 = R$ 1.331.' }
],
pr:[
 { q:'Em uma PA, o primeiro termo é 5 e a razão é 3. O 20º termo é:', a:['57','60','62','63','65'], g:'C', c:'a₂₀ = a₁ + 19 · r = 5 + 19 × 3 = 5 + 57 = 62.' },
 { q:'A soma dos números inteiros de 1 a 50 é:', a:['1.000','1.225','1.275','1.300','2.550'], g:'C', c:'Soma = (1 + 50) × 50 / 2 = 51 × 25 = 1.275.' },
 { q:'Uma PG tem a₁ = 3 e razão 2. O 6º termo vale:', a:['48','64','96','192','384'], g:'C', c:'a₆ = 3 × 2⁵ = 3 × 32 = 96.' },
 { q:'A soma 12 + 6 + 3 + 1,5 + ... (infinitos termos) é igual a:', a:['18','20','22','24','26'], g:'D', c:'PG com a₁ = 12 e q = 1/2. S = 12 / (1 − 1/2) = 12 / 0,5 = 24.' }
],
erros:['Usar n em vez de (n − 1) no termo geral.','Confundir razão da PA (soma) com razão da PG (multiplicação).','Aplicar a soma infinita de PG quando |q| ≥ 1.','Errar a contagem do número de termos (do 5º ao 12º são 8 termos).'],
check:['identificar se a sequência é PA ou PG','calcular um termo qualquer com a fórmula do termo geral','somar os termos de uma PA e de uma PG','reconhecer PA e PG em situações do dia a dia']
},

{ t:'Ângulos, triângulos e polígonos',
d1:[
 ['Ângulos', 'Ângulo é a abertura entre duas semirretas. Mede-se em graus.', ['**Reto:** 90°. **Raso:** 180°. **Agudo:** menor que 90°. **Obtuso:** entre 90° e 180°','**Complementares:** somam 90°. **Suplementares:** somam 180°','**Opostos pelo vértice:** são iguais','Retas paralelas cortadas por uma transversal: ângulos correspondentes e alternos são iguais'], 'Uma volta completa tem 360°.'],
 ['Triângulos', 'A soma dos ângulos internos de qualquer triângulo é 180°.', ['**Quanto aos lados:** equilátero (3 lados iguais), isósceles (2 iguais), escaleno (todos diferentes)','**Quanto aos ângulos:** acutângulo, retângulo (um de 90°), obtusângulo','**Desigualdade triangular:** cada lado é menor que a soma dos outros dois','**Ângulo externo** = soma dos dois internos não adjacentes','Exemplo: ângulos 50° e 60° → o terceiro é 70°'], null],
 ['Polígonos', 'Figuras fechadas de lados retos.', ['**Soma dos ângulos internos:** S = (n − 2) × 180°','Quadrilátero: 360°; pentágono: 540°; hexágono: 720°','**Número de diagonais:** d = n(n − 3)/2 (hexágono: 9)','**Polígono regular:** lados e ângulos iguais. Cada ângulo interno = S / n','Soma dos ângulos externos de qualquer polígono convexo: 360°'], null]
],
d2:[
 ['Quadriláteros notáveis', 'Cada um tem propriedades próprias.', ['**Paralelogramo:** lados opostos paralelos e iguais','**Retângulo:** paralelogramo com 4 ângulos retos; diagonais iguais','**Losango:** 4 lados iguais; diagonais perpendiculares','**Quadrado:** retângulo e losango ao mesmo tempo','**Trapézio:** apenas um par de lados paralelos (bases)'], null],
 ['Polígonos regulares e pavimentação', 'Quais figuras "preenchem" o plano sem sobrar espaço?', ['Em cada vértice, a soma dos ângulos deve ser 360°','Triângulo equilátero (60° × 6), quadrado (90° × 4) e hexágono regular (120° × 3) pavimentam sozinhos','Pentágono regular (108°) não pavimenta sozinho (não divide 360°)','Aparece em azulejos, colmeias e calçadas'], 'Hexágono regular: ângulo interno de 120°, o formato dos alvéolos da colmeia.'],
 ['Estratégia para resolver', 'Passos para problemas de ângulos.', ['1. Faça um desenho e nomeie os ângulos','2. Use as somas conhecidas (180° no triângulo e na reta; 360° na volta)','3. Use o paralelismo para transportar ângulos','4. Monte uma equação com x e resolva'], null]
],
ex:[
 { q:'Em um triângulo, dois ângulos medem 35° e 75°. Qual é a medida do terceiro ângulo?', a:['60°','65°','70°','75°','110°'], g:'C', c:'A soma dos ângulos internos é 180°. O terceiro mede 180 − (35 + 75) = 180 − 110 = 70°.' },
 { q:'Qual é a medida de cada ângulo interno de um polígono regular de 8 lados (octógono)?', a:['120°','135°','140°','144°','150°'], g:'B', c:'Soma dos ângulos internos = (8 − 2) × 180° = 1.080°. Cada ângulo: 1.080° ÷ 8 = 135°.' }
],
pr:[
 { q:'Dois ângulos são complementares. Se um mede 3x e o outro 2x, o valor de x é:', a:['9°','12°','15°','18°','30°'], g:'D', c:'Complementares: 3x + 2x = 90° → 5x = 90° → x = 18°.' },
 { q:'Um polígono convexo tem 9 lados. A soma de seus ângulos internos é:', a:['900°','1.080°','1.260°','1.440°','1.620°'], g:'C', c:'S = (9 − 2) × 180° = 7 × 180° = 1.260°.' },
 { q:'Quantas diagonais tem um hexágono?', a:['6','9','12','15','18'], g:'B', c:'d = n(n − 3)/2 = 6 × 3 / 2 = 9 diagonais.' },
 { q:'Três segmentos medem 3 cm, 4 cm e 8 cm. É possível formar um triângulo com eles?', a:['Sim, um triângulo retângulo','Sim, um triângulo escaleno','Sim, um triângulo isósceles','Não, pois 8 é maior que 3 + 4','Não, pois 3 é menor que 4'], g:'D', c:'Desigualdade triangular: o maior lado deve ser menor que a soma dos outros dois. 8 > 3 + 4 = 7. Não forma triângulo.' }
],
erros:['Usar 360° para a soma dos ângulos internos de um triângulo (o correto é 180°).','Confundir ângulo interno com ângulo externo de um polígono.','Esquecer a desigualdade triangular ao verificar se três medidas formam um triângulo.','Não separar "complementares" (90°) de "suplementares" (180°).'],
check:['calcular ângulos usando as somas de 90°, 180° e 360°','classificar triângulos e aplicar a desigualdade triangular','calcular a soma dos ângulos e o número de diagonais de um polígono','reconhecer propriedades dos quadriláteros notáveis']
},

{ t:'Áreas e perímetros',
d1:[
 ['Perímetro e área', 'Perímetro é a medida do contorno (soma dos lados); área é a medida da superfície.', ['**Perímetro:** unidade de comprimento (cm, m)','**Área:** unidade ao quadrado (cm², m²)','Dobrar o lado de um quadrado quadruplica a área, mas apenas dobra o perímetro','Cuidado com as unidades: 1 m² = 10.000 cm²'], 'Perímetro: cerca, rodapé, moldura. Área: piso, tinta, grama, azulejo.'],
 ['Fórmulas principais', 'Memorize e saiba deduzir.', ['**Quadrado:** A = l²  | **Retângulo:** A = b · h','**Paralelogramo:** A = b · h','**Triângulo:** A = b · h / 2','**Losango:** A = D · d / 2 (diagonais)','**Trapézio:** A = (B + b) · h / 2'], null],
 ['Círculo', 'Aparece com π ≈ 3,14 (o enunciado costuma indicar o valor).', ['**Comprimento da circunferência:** C = 2πr','**Área do círculo:** A = πr²','Dobrar o raio quadruplica a área do círculo','**Setor circular:** fração do círculo (ex.: 90° é 1/4 da área)','**Coroa circular:** πR² − πr²'], null]
],
d2:[
 ['Composição e decomposição de figuras', 'Divida figuras complexas em partes simples.', ['Some as áreas das partes: figura em "L" = dois retângulos','Subtraia quando houver "buraco": área da região = área total − área do que foi retirado','Meia-lua, calçadão em volta de piscina, moldura de quadro: use área maior − área menor','Faça um desenho e escreva as medidas de cada parte'], 'Muitas questões são resolvidas só decompondo bem a figura.'],
 ['Problemas de cobertura', 'O ENEM conecta área e consumo de material.', ['**Piso e azulejo:** área da superfície ÷ área de uma peça (arredonde para cima!)','**Tinta:** área × demãos ÷ rendimento por litro','**Gramado e plantio:** área × quantidade por m²','Some uma margem de perda (10%) quando o enunciado pedir'], null],
 ['Áreas e proporção', 'Como a área muda quando a medida muda.', ['Ampliar o comprimento por k: o perímetro é multiplicado por k, e a área por k²','Lado 3 → lado 6: perímetro dobra e a área é 4 vezes maior','Duas figuras semelhantes na razão 1:2 têm áreas na razão 1:4','Compare áreas pela razão entre elas'], null]
],
ex:[
 { q:'Um terreno retangular de 20 m por 30 m será totalmente coberto com grama. A grama é vendida em placas de 1 m² a R$ 4,50 cada. Quanto será gasto?', a:['R$ 2.200','R$ 2.500','R$ 2.700','R$ 3.000','R$ 3.600'], g:'C', c:'Área = 20 × 30 = 600 m². Custo = 600 × 4,50 = R$ 2.700.' },
 { q:'Uma praça circular de raio 10 m tem, no centro, um canteiro circular de raio 4 m. Qual a área da parte livre? (use π = 3)', a:['252 m²','288 m²','300 m²','348 m²','360 m²'], g:'A', c:'Área total = 3 × 10² = 300 m². Canteiro = 3 × 4² = 48 m². Área livre = 300 − 48 = 252 m².' }
],
pr:[
 { q:'A área de um triângulo com base 12 cm e altura 7 cm é:', a:['19 cm²','42 cm²','84 cm²','96 cm²','168 cm²'], g:'B', c:'A = b × h / 2 = 12 × 7 / 2 = 42 cm².' },
 { q:'Um trapézio tem bases 10 m e 6 m e altura 5 m. Sua área é:', a:['32 m²','40 m²','50 m²','60 m²','80 m²'], g:'B', c:'A = (B + b) × h / 2 = (10 + 6) × 5 / 2 = 40 m².' },
 { q:'O comprimento de uma circunferência de raio 5 cm é (use π = 3,14):', a:['15,7 cm','31,4 cm','62,8 cm','78,5 cm','157 cm'], g:'B', c:'C = 2πr = 2 × 3,14 × 5 = 31,4 cm.' },
 { q:'Um quadrado teve cada lado aumentado em 50%. A área aumentou:', a:['50%','100%','125%','150%','225%'], g:'C', c:'Lado novo = 1,5 l. Área nova = 2,25 l². O aumento é de 125% (2,25 − 1 = 1,25).' }
],
erros:['Escrever área em cm (em vez de cm²).','Esquecer o "÷ 2" na área do triângulo e do trapézio.','Aplicar a razão linear às áreas (a área varia com o quadrado).','Esquecer de arredondar para cima quando se compra material por peça inteira.'],
check:['calcular perímetro e área de quadrado, retângulo, triângulo, trapézio e círculo','decompor figuras compostas','resolver problemas de cobertura com piso, tinta e grama','relacionar a variação das medidas com a variação da área']
}
];
