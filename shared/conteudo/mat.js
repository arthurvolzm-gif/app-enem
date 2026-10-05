/* Matemática: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.mat = { id:'mat', nome:'Matemática', icone:'📐', emojis:'📐 ➗ 📊 🔢',
capa:'linear-gradient(160deg,#0b1f4d,#1d3f8f 55%,#3b9be8)',
temas:[
{ t:'Conjuntos numéricos e operações', p:'m', ic:'🔢', s:[
  ['Os conjuntos', 'Os números são organizados em conjuntos, um dentro do outro.', ['**Naturais (ℕ):** 0, 1, 2, 3...','**Inteiros (ℤ):** naturais e negativos (..., −2, −1, 0, 1...)','**Racionais (ℚ):** podem ser escritos como fração (½, 0,75, −3)','**Irracionais:** não viram fração exata (√2, π)','**Reais (ℝ):** racionais e irracionais juntos'], null],
  ['Regras de sinais', 'Na multiplicação e na divisão:', ['Sinais iguais → resultado positivo: (−3) × (−2) = 6','Sinais diferentes → resultado negativo: (−3) × 2 = −6'], 'Na soma, sinais diferentes: subtraia e fique com o sinal do maior.'],
  ['Ordem das operações', null, ['1º parênteses, colchetes e chaves','2º potências e raízes','3º multiplicação e divisão (na ordem em que aparecem)','4º soma e subtração'], 'Exemplo: 2 + 3 × 4 = 2 + 12 = 14 (e não 20).'],
  ['MMC e MDC', null, ['**MMC:** menor múltiplo comum ("quando coincidem de novo?")','**MDC:** maior divisor comum ("maior tamanho para dividir em partes iguais")'], null]
], enem:'Questões de "ônibus que saem de 15 em 15 e de 20 em 20 minutos: quando saem juntos de novo?" são de MMC. Divisão de materiais em pedaços iguais e máximos é MDC.' },

{ t:'Frações, decimais e arredondamento', p:'m', ic:'🍕', s:[
  ['O que é fração?', 'Uma fração representa partes de um todo: o **numerador** (em cima) diz quantas partes foram tomadas, e o **denominador** (embaixo) em quantas o todo foi dividido.', null, 'Exemplo: 3/4 de uma pizza são 3 fatias de uma pizza cortada em 4.'],
  ['Operações com frações', null, ['**Soma e subtração:** iguale os denominadores (use o MMC)','**Multiplicação:** numerador × numerador e denominador × denominador','**Divisão:** mantenha a primeira e multiplique pelo inverso da segunda'], null],
  ['Frações e decimais', 'Para transformar fração em decimal, divida o numerador pelo denominador.', ['1/2 = 0,5','1/4 = 0,25','3/4 = 0,75','1/5 = 0,2'], null],
  ['Arredondamento', 'Olhe o algarismo depois da casa que você quer manter: se for 5 ou mais, aumente uma unidade.', null, 'Exemplo: 3,47 arredondado para uma casa vira 3,5.']
], enem:'Frações aparecem em receitas, misturas e divisão de terrenos. Converter para decimal ou porcentagem costuma facilitar a comparação.' },

{ t:'Razão e proporção', p:'a', ic:'⚖️', s:[
  ['Razão', 'É a comparação entre duas grandezas por meio de uma divisão.', ['Velocidade = distância ÷ tempo','Densidade demográfica = habitantes ÷ área','Consumo = quilômetros ÷ litros'], 'Exemplo: 3 meninos para 2 meninas é a razão 3/2.'],
  ['Proporção', 'É a igualdade entre duas razões: a/b = c/d.', null, 'Propriedade fundamental: o produto dos meios é igual ao produto dos extremos (a × d = b × c).'],
  ['Grandezas proporcionais', null, ['**Diretamente proporcionais:** uma aumenta e a outra aumenta na mesma razão (quantidade de pães e preço)','**Inversamente proporcionais:** uma aumenta e a outra diminui (número de pintores e tempo de pintura)'], null],
  ['Divisão proporcional', 'Para dividir um valor em partes proporcionais, some as partes e descubra quanto vale cada "parte".', null, 'Exemplo: dividir R$ 600 na razão 1:2 → 3 partes de R$ 200 → R$ 200 e R$ 400.']
], enem:'É um dos temas mais cobrados. Escalas, receitas, misturas e velocidade são razões. Organize as grandezas antes de calcular.' },

{ t:'Regra de três', p:'a', ic:'🔁', s:[
  ['Regra de três simples', 'Usada quando há duas grandezas e queremos descobrir um valor desconhecido.', ['1. Monte a tabela com as grandezas','2. Veja se são diretas ou inversas','3. Se diretas, multiplique cruzado','4. Se inversas, multiplique em linha'], null],
  ['Exemplo direto', '5 cadernos custam R$ 40. Quanto custam 8?', ['5 está para 40, assim como 8 está para x','5x = 8 × 40 → x = R$ 64'], null],
  ['Exemplo inverso', '4 pedreiros fazem um muro em 6 dias. Em quantos dias 8 pedreiros fazem o mesmo muro?', ['Mais pedreiros → menos dias (inversa)','4 × 6 = 8 × x → x = 3 dias'], null],
  ['Regra de três composta', 'Quando há três ou mais grandezas. Compare cada grandeza com a da incógnita, marque se é direta ou inversa e monte a proporção.', null, 'Dica: inverta as razões das grandezas inversas antes de multiplicar.']
], enem:'Produção em fábricas, obras e consumo de água são contextos típicos. O erro mais comum é não perceber que a relação é inversa.' },

{ t:'Porcentagem', p:'a', ic:'💯', s:[
  ['O que é?', 'Porcentagem é uma fração de denominador 100.', ['25% = 25/100 = 0,25','10% de 80 = 0,10 × 80 = 8'], null],
  ['Aumentos e descontos', 'Use o **fator multiplicativo**:', ['Aumento de x% → multiplique por (1 + x/100). Ex.: +15% → × 1,15','Desconto de x% → multiplique por (1 − x/100). Ex.: −20% → × 0,80'], null],
  ['Aumentos sucessivos', 'Os fatores se multiplicam, não se somam.', ['+10% e depois −10% → 1,10 × 0,90 = 0,99','O resultado final é 1% menor que o original'], 'Por isso, dois aumentos de 10% não dão 20%, e sim 21% (1,1 × 1,1 = 1,21).'],
  ['Variação percentual', 'Variação = (valor final − valor inicial) ÷ valor inicial × 100.', null, 'Exemplo: de 50 para 65 → 15 ÷ 50 = 0,3 → aumento de 30%.']
], enem:'Aparece em praticamente toda prova: inflação, descontos, impostos, gráficos. Transforme tudo em fator multiplicativo.' },

{ t:'Juros simples e compostos', p:'a', ic:'💰', s:[
  ['Conceitos', null, ['**Capital (C):** valor inicial','**Taxa (i):** porcentagem por período','**Tempo (t):** número de períodos','**Montante (M):** capital + juros'], 'A taxa e o tempo precisam estar na mesma unidade (mês com mês, ano com ano).'],
  ['Juros simples', 'O juro é calculado sempre sobre o capital inicial.', ['J = C × i × t','M = C + J'], 'Exemplo: R$ 1.000 a 2% ao mês por 3 meses → J = 1000 × 0,02 × 3 = R$ 60.'],
  ['Juros compostos', 'O juro de cada período entra no cálculo do próximo ("juro sobre juro").', ['M = C × (1 + i)^t'], 'Exemplo: R$ 1.000 a 10% ao ano por 2 anos → 1000 × 1,1² = R$ 1.210.'],
  ['Comparando', 'No primeiro período os dois dão o mesmo valor. Depois, os compostos crescem mais rápido.', null, null]
], enem:'Comparação entre pagar à vista ou parcelado e entre aplicações é comum. Atenção à unidade da taxa.' },

{ t:'Unidades de medida e conversões', p:'a', ic:'📏', s:[
  ['Comprimento, massa e capacidade', 'Cada degrau multiplica ou divide por 10.', ['km → hm → dam → **m** → dm → cm → mm','kg → hg → dag → **g** → dg → cg → mg','kL → hL → daL → **L** → dL → cL → mL'], null],
  ['Área e volume', null, ['**Área:** cada degrau vale ×100 (1 m² = 10.000 cm²)','**Volume:** cada degrau vale ×1.000 (1 m³ = 1.000.000 cm³)','1 dm³ = 1 L e 1 m³ = 1.000 L','1 hectare = 10.000 m²'], null],
  ['Tempo e velocidade', null, ['1 h = 60 min = 3.600 s','Para passar de km/h para m/s, divida por 3,6','Para passar de m/s para km/h, multiplique por 3,6'], 'Exemplo: 72 km/h = 20 m/s.']
], enem:'Erro de unidade é a armadilha número 1. Escreva a unidade ao lado de cada número e converta tudo antes de calcular.' },

{ t:'Escalas', p:'a', ic:'🗺️', s:[
  ['O que é escala?', 'É a razão entre a medida no desenho e a medida real, na mesma unidade.', ['Escala = medida no desenho ÷ medida real','1 : 100 significa que 1 cm no desenho vale 100 cm (1 m) na realidade'], null],
  ['Escala em mapas', 'Exemplo: em um mapa de escala 1 : 500.000, 6 cm no mapa valem:', ['6 × 500.000 = 3.000.000 cm','3.000.000 cm = 30 km'], 'Quanto maior o denominador, menor a escala e menos detalhes o mapa mostra.'],
  ['Escala em plantas', 'Em uma planta de escala 1 : 50, uma parede de 8 cm no papel mede 8 × 50 = 400 cm = 4 m.', null, null],
  ['Escala e área', 'Se a escala linear é 1 : k, a escala de área é 1 : k².', null, 'Exemplo: escala 1 : 100 → áreas ficam 10.000 vezes menores no desenho.']
], enem:'Plantas de casas, mapas e maquetes aparecem muito. Converta para centímetros ou metros com calma.' },

{ t:'Potências, raízes e notação científica', p:'m', ic:'⚡', s:[
  ['Propriedades das potências', null, ['aᵐ × aⁿ = aᵐ⁺ⁿ','aᵐ ÷ aⁿ = aᵐ⁻ⁿ','(aᵐ)ⁿ = aᵐˣⁿ','a⁰ = 1 (a ≠ 0)','a⁻ⁿ = 1/aⁿ'], null],
  ['Raízes', 'A raiz é a operação inversa da potência.', ['√16 = 4, porque 4² = 16','∛27 = 3, porque 3³ = 27','√(a × b) = √a × √b'], null],
  ['Notação científica', 'Número entre 1 e 10 multiplicado por uma potência de 10.', ['300.000 = 3 × 10⁵','0,0004 = 4 × 10⁻⁴'], 'Vírgula para a esquerda → expoente positivo. Vírgula para a direita → expoente negativo.']
], enem:'Notação científica aparece em distâncias astronômicas, tamanho de células e dados de tecnologia (bytes).' },

{ t:'Equações do 1º e do 2º grau', p:'a', ic:'🟰', s:[
  ['Equação do 1º grau', 'Forma ax + b = 0. Isole o x fazendo a mesma operação dos dois lados.', null, 'Exemplo: 3x + 6 = 21 → 3x = 15 → x = 5.'],
  ['Montando a equação', 'Traduza o texto em linguagem matemática.', ['"O dobro de um número" → 2x','"Um número somado a 5" → x + 5','"A metade de um número" → x/2'], null],
  ['Equação do 2º grau', 'Forma ax² + bx + c = 0. Use a fórmula de Bhaskara:', ['Δ = b² − 4ac','x = (−b ± √Δ) ÷ 2a'], null],
  ['O que o Δ indica', null, ['Δ > 0 → duas raízes reais diferentes','Δ = 0 → uma raiz real (duas iguais)','Δ < 0 → nenhuma raiz real'], 'Soma das raízes = −b/a. Produto = c/a.']
], enem:'O desafio maior é montar a equação a partir do texto. Leia devagar e nomeie a incógnita.' },

{ t:'Sistemas de equações', p:'m', ic:'🧮', s:[
  ['O que é?', 'Um conjunto de equações com duas ou mais incógnitas que precisam ser verdadeiras ao mesmo tempo.', null, null],
  ['Método da substituição', null, ['1. Isole uma incógnita em uma das equações','2. Substitua na outra','3. Resolva e volte para achar a segunda'], null],
  ['Método da adição', 'Some as equações para eliminar uma incógnita (multiplique antes, se precisar).', null, 'Exemplo: x + y = 10 e x − y = 4 → somando: 2x = 14 → x = 7 e y = 3.'],
  ['Situações típicas', null, ['Ingressos de adulto e criança','Galinhas e coelhos (cabeças e patas)','Preço de dois produtos'], null]
], enem:'Problemas com duas informações e duas incógnitas pedem sistema. Às vezes testar as alternativas é mais rápido.' },

{ t:'Funções: como ler e interpretar', p:'a', ic:'📈', s:[
  ['O que é função?', 'É uma relação em que cada valor de entrada (x) gera **um único** valor de saída (y).', null, 'Exemplo: o preço da corrida de táxi depende dos quilômetros rodados.'],
  ['Domínio e imagem', null, ['**Domínio:** os valores possíveis de x','**Imagem:** os valores que y assume'], null],
  ['Lendo gráficos', null, ['**Crescente:** sobe da esquerda para a direita','**Decrescente:** desce','**Constante:** fica na mesma altura','O ponto onde corta o eixo y é o valor inicial'], null],
  ['Cuidados', 'Confira a escala dos eixos e a unidade antes de tirar conclusões.', null, null]
], enem:'Muitas questões não pedem conta: pedem para interpretar o gráfico de uma função em uma situação real.' },

{ t:'Função afim (1º grau)', p:'a', ic:'📉', s:[
  ['Forma geral', 'f(x) = ax + b. O gráfico é uma reta.', ['**a:** taxa de variação (inclinação)','**b:** valor inicial (onde a reta corta o eixo y)'], null],
  ['Crescente ou decrescente', null, ['a > 0 → reta sobe (crescente)','a < 0 → reta desce (decrescente)'], null],
  ['Exemplo prático', 'Um táxi cobra R$ 5 de bandeirada e R$ 2 por km.', ['f(x) = 2x + 5','Para 10 km: f(10) = 2 × 10 + 5 = R$ 25'], null],
  ['Raiz', 'É o valor de x em que f(x) = 0, onde a reta corta o eixo x: x = −b/a.', null, null]
], enem:'Planos de telefone, táxi e contas com taxa fixa são funções afins. Identifique o fixo (b) e o variável (a).' },

{ t:'Função quadrática', p:'a', ic:'🌈', s:[
  ['Forma geral', 'f(x) = ax² + bx + c. O gráfico é uma **parábola**.', ['a > 0 → concavidade para cima (ponto de mínimo)','a < 0 → concavidade para baixo (ponto de máximo)'], null],
  ['Vértice', 'É o ponto mais alto ou mais baixo da parábola.', ['xv = −b ÷ 2a','yv = −Δ ÷ 4a'], null],
  ['Raízes', 'Onde a parábola corta o eixo x. Calcule com Bhaskara.', null, null],
  ['Aplicações', null, ['Altura máxima de um objeto lançado','Lucro máximo de uma empresa','Área máxima de um terreno'], 'Pediu "máximo" ou "mínimo"? Calcule o vértice.']
], enem:'Questões de lucro máximo e de trajetória de bola são clássicas. Quase sempre a resposta está no vértice.' },

{ t:'Função exponencial e logaritmo', p:'m', ic:'🦠', s:[
  ['Função exponencial', 'f(x) = aˣ. Cresce (ou decresce) muito rápido.', ['Crescimento de bactérias','Juros compostos','Decaimento radioativo'], 'Exemplo: uma população que dobra a cada hora: P = P₀ × 2ᵗ.'],
  ['Logaritmo', 'É o expoente: logₐ b = x significa aˣ = b.', ['log₂ 8 = 3, porque 2³ = 8','log 100 = 2 (base 10)'], null],
  ['Propriedades', null, ['log(a × b) = log a + log b','log(a ÷ b) = log a − log b','log aⁿ = n × log a'], null],
  ['Meia-vida', 'Tempo para uma substância cair pela metade. Depois de n meias-vidas, sobra (1/2)ⁿ da quantidade inicial.', null, null]
], enem:'Crescimento populacional, juros e meia-vida aparecem com tabelas. Muitas vezes basta ir dobrando ou dividindo por 2.' },

{ t:'Progressões: PA e PG', p:'m', ic:'🪜', s:[
  ['Progressão aritmética (PA)', 'Cada termo é o anterior **somado** a uma razão r.', ['Termo geral: aₙ = a₁ + (n − 1) × r','Soma: Sₙ = (a₁ + aₙ) × n ÷ 2'], 'Exemplo: 2, 5, 8, 11... (r = 3).'],
  ['Progressão geométrica (PG)', 'Cada termo é o anterior **multiplicado** por uma razão q.', ['Termo geral: aₙ = a₁ × qⁿ⁻¹','Soma: Sₙ = a₁ × (qⁿ − 1) ÷ (q − 1)'], 'Exemplo: 3, 6, 12, 24... (q = 2).'],
  ['Como identificar', null, ['Diferença constante → PA','Quociente constante → PG'], null]
], enem:'Sequências de figuras, economias mensais e crescimento de vendas costumam ser PA ou PG.' },

{ t:'Ângulos, triângulos e polígonos', p:'m', ic:'🔺', s:[
  ['Ângulos', null, ['**Agudo:** menor que 90°','**Reto:** 90°','**Obtuso:** entre 90° e 180°','**Complementares:** somam 90°','**Suplementares:** somam 180°'], null],
  ['Triângulos', 'A soma dos ângulos internos é sempre **180°**.', ['**Equilátero:** 3 lados iguais','**Isósceles:** 2 lados iguais','**Escaleno:** lados diferentes'], null],
  ['Polígonos', null, ['Soma dos ângulos internos: Sᵢ = (n − 2) × 180°','Número de diagonais: d = n × (n − 3) ÷ 2'], 'Exemplo: hexágono (6 lados) → (6 − 2) × 180° = 720°.']
], enem:'Ladrilhos, mosaicos e pisos pedem polígonos que se encaixam: a soma dos ângulos em torno de um ponto deve dar 360°.' },

{ t:'Áreas e perímetros', p:'a', ic:'🏠', s:[
  ['Perímetro', 'É a soma das medidas dos lados (o contorno).', null, 'Exemplo: cerca em volta de um terreno.'],
  ['Fórmulas de área', null, ['**Quadrado:** A = l²','**Retângulo:** A = b × h','**Triângulo:** A = b × h ÷ 2','**Trapézio:** A = (B + b) × h ÷ 2','**Losango:** A = D × d ÷ 2','**Círculo:** A = π × r²'], null],
  ['Circunferência', 'Comprimento: C = 2 × π × r.', null, null],
  ['Figuras compostas', 'Divida a figura em partes conhecidas, calcule cada área e some (ou subtraia os "buracos").', null, 'Se as medidas aumentam k vezes, a área aumenta k² vezes.']
], enem:'Pisos, terrenos, pinturas de parede e reformas. Desenhe a figura e anote as medidas.' },

{ t:'Teorema de Pitágoras e semelhança', p:'a', ic:'📐', s:[
  ['Teorema de Pitágoras', 'Em todo triângulo retângulo: **a² = b² + c²**, em que a é a hipotenusa (lado oposto ao ângulo reto).', ['Triângulo 3, 4, 5: 5² = 3² + 4² → 25 = 9 + 16','Múltiplos também valem: 6, 8, 10'], null],
  ['Quando usar', null, ['Altura de escadas apoiadas na parede','Diagonal de retângulos e telas','Distâncias em mapas'], null],
  ['Semelhança de triângulos', 'Triângulos semelhantes têm ângulos iguais e lados proporcionais.', null, 'Exemplo: medir a altura de um prédio pela sombra, comparando com a sombra de uma pessoa.']
], enem:'Escadas, rampas, telas de TV (polegadas medem a diagonal) e sombras são contextos clássicos.' },

{ t:'Trigonometria', p:'m', ic:'📡', s:[
  ['No triângulo retângulo', null, ['**Seno** = cateto oposto ÷ hipotenusa','**Cosseno** = cateto adjacente ÷ hipotenusa','**Tangente** = cateto oposto ÷ cateto adjacente'], null],
  ['Ângulos notáveis', null, ['sen 30° = 1/2 · cos 30° = √3/2 · tg 30° = √3/3','sen 45° = cos 45° = √2/2 · tg 45° = 1','sen 60° = √3/2 · cos 60° = 1/2 · tg 60° = √3'], null],
  ['Aplicações', null, ['Inclinação de rampas','Altura de torres e árvores','Distância de objetos inacessíveis'], 'Rampas de acessibilidade têm inclinação máxima definida por norma técnica: a tangente mede essa inclinação.']
], enem:'Rampas, escadas e alturas inacessíveis. Saiba a tabela dos ângulos notáveis de cor.' },

{ t:'Geometria espacial: volumes', p:'a', ic:'🧊', s:[
  ['Prismas e cilindros', 'Volume = área da base × altura.', ['**Cubo:** V = a³','**Paralelepípedo:** V = c × l × h','**Cilindro:** V = π × r² × h'], null],
  ['Pirâmides e cones', 'Volume = (área da base × altura) ÷ 3.', ['**Cone:** V = π × r² × h ÷ 3'], 'Um cone tem um terço do volume do cilindro de mesma base e altura.'],
  ['Esfera', 'V = 4/3 × π × r³.', null, null],
  ['Capacidade', null, ['1 dm³ = 1 L','1 m³ = 1.000 L','1 cm³ = 1 mL'], 'Se as medidas aumentam k vezes, o volume aumenta k³ vezes.']
], enem:'Caixas-d\'água, embalagens, piscinas e silos. Converta as unidades e lembre que 1 m³ = 1.000 L.' },

{ t:'Estatística: média, moda e mediana', p:'a', ic:'📊', s:[
  ['Média aritmética', 'Soma de todos os valores dividida pela quantidade.', null, 'Exemplo: notas 6, 7 e 8 → (6 + 7 + 8) ÷ 3 = 7.'],
  ['Média ponderada', 'Cada valor é multiplicado pelo seu peso; depois divide-se pela soma dos pesos.', null, 'Exemplo: prova (peso 2) nota 8 e trabalho (peso 1) nota 5 → (16 + 5) ÷ 3 = 7.'],
  ['Moda e mediana', null, ['**Moda:** valor que mais se repete','**Mediana:** valor central dos dados **em ordem**','Com quantidade par de dados, a mediana é a média dos dois centrais'], null],
  ['Qual usar?', 'A mediana é menos afetada por valores extremos que a média.', null, 'Exemplo: em salários, um valor muito alto puxa a média, mas não a mediana.']
], enem:'Um dos temas mais cobrados. Sempre coloque os dados em ordem antes de calcular a mediana.' },

{ t:'Gráficos, tabelas e dispersão', p:'a', ic:'📉', s:[
  ['Tipos de gráfico', null, ['**Barras ou colunas:** comparar categorias','**Linhas:** mostrar evolução no tempo','**Setores (pizza):** mostrar partes de um todo (360° = 100%)'], null],
  ['Como ler', null, ['Leia o título e a fonte','Confira as unidades e a escala dos eixos','Veja se os valores são absolutos ou porcentagens'], null],
  ['Medidas de dispersão', 'Mostram o quanto os dados variam.', ['**Amplitude:** maior valor − menor valor','**Desvio padrão:** quanto os valores se afastam da média','Desvio padrão menor → dados mais regulares'], 'Exemplo: o aluno com notas mais regulares é o de menor desvio padrão.']
], enem:'Questões pedem o aluno mais regular (menor desvio padrão) ou a interpretação de um gráfico de linhas.' },

{ t:'Análise combinatória', p:'m', ic:'🎲', s:[
  ['Princípio fundamental da contagem', 'Se uma decisão tem m opções e outra tem n, as duas juntas têm **m × n** possibilidades.', null, 'Exemplo: 3 camisetas e 4 calças → 12 combinações de roupa.'],
  ['Fatorial', 'n! = n × (n − 1) × ... × 1.', null, 'Exemplo: 4! = 4 × 3 × 2 × 1 = 24.'],
  ['Permutação, arranjo e combinação', null, ['**Permutação:** organizar todos os elementos. P = n!','**Arranjo:** escolher alguns e a ordem importa (pódio, senha)','**Combinação:** escolher alguns e a ordem não importa (comissão, salada)','C(n, p) = n! ÷ [p! × (n − p)!]'], null],
  ['Pergunta-chave', 'Se eu trocar a ordem, muda o resultado?', ['Sim → arranjo','Não → combinação'], null]
], enem:'Senhas, placas, times e comissões. Faça a pergunta-chave antes de escolher a fórmula.' },

{ t:'Probabilidade', p:'a', ic:'🎯', s:[
  ['Definição', 'Probabilidade = casos favoráveis ÷ casos possíveis. Vai de 0 (impossível) a 1 (certo).', null, 'Exemplo: tirar um número par em um dado → 3/6 = 1/2 = 50%.'],
  ['Eventos', null, ['**"E" (independentes):** multiplique. Duas caras em duas moedas → 1/2 × 1/2 = 1/4','**"OU" (excludentes):** some. Tirar 1 ou 2 no dado → 1/6 + 1/6 = 1/3','**Complementar:** P(não A) = 1 − P(A)'], null],
  ['Probabilidade condicional', 'É a chance de algo acontecer **sabendo** que outra coisa já aconteceu. O espaço de possibilidades diminui.', null, 'Exemplo: escolher uma bola vermelha sabendo que ela é de um grupo específico.'],
  ['Dica', 'Quando a pergunta é "pelo menos um", calcule o complementar (nenhum) e subtraia de 1.', null, null]
], enem:'Sorteios, exames médicos, genética e jogos. A dica do complementar economiza muito tempo.' }
]};
