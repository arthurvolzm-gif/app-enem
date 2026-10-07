/* Matemática: temas 7 a 10 */
module.exports = [
{ t:'Unidades de medida e conversões',
d1:[
 ['Comprimento, massa e capacidade', 'Cada grandeza tem uma unidade-base e múltiplos e submúltiplos que variam de 10 em 10 (no comprimento e na massa) ou de 1.000 em 1.000 em algumas conversões.', ['**Comprimento:** km → m → cm → mm. 1 km = 1.000 m; 1 m = 100 cm; 1 cm = 10 mm','**Massa:** t → kg → g → mg. 1 t = 1.000 kg; 1 kg = 1.000 g; 1 g = 1.000 mg','**Capacidade:** L → mL. 1 L = 1.000 mL; 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL','**Para descer a escada** (de unidade maior para menor) multiplique; **para subir**, divida'], 'Truque: 1 cm³ = 1 mL e 1 dm³ = 1 L aparecem muito em problemas de volume.'],
 ['Tempo e velocidade', 'O tempo não é decimal: 1 h = 60 min = 3.600 s.', ['**1,5 h = 1 h 30 min** (e não 1 h 50 min)','**Velocidade:** km/h para m/s: divida por 3,6. 72 km/h = 20 m/s','**m/s para km/h:** multiplique por 3,6. 10 m/s = 36 km/h','Converta sempre minutos para horas antes de usar km/h: 45 min = 0,75 h'], null],
 ['Área e volume: o cuidado com os expoentes', 'Quando a unidade tem expoente, o fator de conversão também sobe de expoente.', ['**Área:** 1 m² = 100 × 100 = 10.000 cm². 1 km² = 1.000.000 m²','**Volume:** 1 m³ = 100 × 100 × 100 = 1.000.000 cm³','1 hectare (ha) = 10.000 m²','Erro comum: usar 100 em vez de 10.000 na conversão de m² para cm²'], 'Regra: se a unidade está ao quadrado, o fator de conversão é elevado ao quadrado; ao cubo, ao cubo.']
],
d2:[
 ['Unidades do dia a dia e da informática', 'O ENEM mistura unidades de contextos diferentes.', ['**Energia elétrica:** kWh = kW × horas','**Dados:** 1 byte = 8 bits; 1 KB ≈ 1.000 bytes; 1 MB ≈ 1.000 KB; 1 GB ≈ 1.000 MB','**Velocidade de internet:** em Mbps (megabits por segundo). 8 Mbps = 1 MB/s','**Pressão, temperatura e moeda:** leia o enunciado, ele costuma dar a relação','**Prefixos:** quilo (10³), mega (10⁶), giga (10⁹), centi (10⁻²), mili (10⁻³), micro (10⁻⁶)'], 'Se a questão fornece uma tabela de conversão, use-a; não confie só na memória.'],
 ['Conversão em problemas', 'Passo a passo para não errar.', ['1. Identifique a unidade pedida na resposta','2. Converta todas as grandezas para a mesma unidade antes de calcular','3. Resolva a conta','4. Confira se a unidade final é a pedida'], 'Exemplo: um carro anda a 90 km/h por 20 min. Distância = 90 × (20/60) = 30 km.'],
 ['Estimativa e ordem de grandeza', 'Às vezes basta saber a ordem de grandeza.', ['A altura de uma pessoa é da ordem de 1 m; um prédio de 10 andares, de 30 m','Um litro de água tem massa de 1 kg','Uma pessoa caminha cerca de 5 km/h','Use a estimativa para descartar alternativas absurdas'], null]
],
ex:[
 { q:'Um reservatório tem capacidade de 2,4 m³. Quantos litros de água ele comporta?', a:['24','240','2.400','24.000','240.000'], g:'C', c:'1 m³ = 1.000 litros. Então 2,4 m³ = 2,4 × 1.000 = 2.400 litros.' },
 { q:'Um ônibus viaja a 108 km/h. Qual é sua velocidade em metros por segundo?', a:['3','10','20','30','108'], g:'D', c:'Para converter km/h em m/s, divida por 3,6: 108 ÷ 3,6 = 30 m/s.' }
],
pr:[
 { q:'Uma pessoa caminha 45 minutos por dia. Em uma semana (7 dias), quantas horas e minutos ela caminha?', a:['3 h 15 min','5 h 15 min','5 h 25 min','6 h 15 min','7 h 45 min'], g:'B', c:'45 × 7 = 315 minutos. 315 ÷ 60 = 5 h e sobram 15 min: 5 h 15 min.' },
 { q:'Uma receita pede 250 mL de leite. Quantos litros de leite são necessários para 12 receitas?', a:['0,3 L','2,5 L','3 L','30 L','300 L'], g:'C', c:'12 × 250 mL = 3.000 mL = 3 L.' },
 { q:'Um terreno de 2 hectares tem quantos metros quadrados?', a:['200','2.000','20.000','200.000','2.000.000'], g:'C', c:'1 ha = 10.000 m². Então 2 ha = 20.000 m².' },
 { q:'Um arquivo de 1,5 GB será baixado a uma velocidade de 3 MB/s. Aproximadamente quanto tempo leva? (use 1 GB = 1.000 MB)', a:['50 s','100 s','500 s','1.000 s','5.000 s'], g:'C', c:'1,5 GB = 1.500 MB. Tempo = 1.500 ÷ 3 = 500 segundos (cerca de 8 min 20 s).' }
],
erros:['Converter m² em cm² multiplicando só por 100 (o correto é 10.000).','Tratar 1,5 h como 1 h 50 min: horas não são decimais no sistema sexagesimal.','Calcular com unidades diferentes na mesma conta (km com m, h com min).','Confundir megabyte (MB) com megabit (Mb): 1 byte = 8 bits.'],
check:['converter comprimento, massa e capacidade','converter km/h em m/s e vice-versa','converter áreas e volumes sem errar o fator','resolver problemas com tempo, energia e dados']
},

{ t:'Escalas',
d1:[
 ['O que é escala', 'Escala é a razão entre uma medida no desenho (mapa, planta, maquete) e a medida real correspondente, na mesma unidade.', ['**Escala = medida no desenho ÷ medida real**','Escala 1:50.000 significa: 1 cm no mapa equivale a 50.000 cm (500 m) na realidade','Quanto maior o número depois dos dois pontos, menor a escala (mostra mais área e menos detalhe)','Escala 1:100 em planta: 1 cm no desenho = 100 cm = 1 m na realidade'], null],
 ['Como resolver', 'Quase sempre é regra de três ou proporção.', ['Monte: desenho/real = 1/escala','Exemplo: em escala 1:200.000, uma distância de 4 cm no mapa equivale a 4 × 200.000 = 800.000 cm = 8 km','Se pede a distância no mapa: divida a distância real (em cm) pela escala','Converta antes: 1 km = 100.000 cm; 1 m = 100 cm'], 'Atenção: converta tudo para centímetros antes de aplicar a escala.'],
 ['Escalas numérica e gráfica', 'Duas formas de aparecer em mapas.', ['**Numérica:** 1:25.000','**Gráfica:** uma barrinha graduada (0, 1, 2 km...) para medir com régua','Na prática: meça no mapa com régua e use a barrinha para converter','Se o mapa for ampliado ou reduzido, a escala numérica deixa de valer, mas a gráfica acompanha'], null]
],
d2:[
 ['Escala em áreas e volumes', 'Aqui está a pegadinha: áreas e volumes não variam na mesma razão do comprimento.', ['Se o comprimento é reduzido em 1/100, a **área** é reduzida em 1/100² = 1/10.000','O **volume** é reduzido em 1/100³ = 1/1.000.000','Maquete 1:50: a área real é 2.500 vezes a da maquete; o volume, 125.000 vezes','Sempre separe: razão linear (k), de área (k²) e de volume (k³)'], 'Fotografias, mapas e maquetes: use a razão linear nos comprimentos e o quadrado nas áreas.'],
 ['Usos práticos', 'O ENEM traz escala em contextos variados.', ['**Mapas:** distâncias entre cidades e tempo de viagem','**Plantas e maquetes:** tamanho real de cômodos, de prédios, de peças','**Ampliações e reduções:** fotos, impressões, miniaturas','**Microscópio:** ampliação de 400× significa que o objeto aparece 400 vezes maior','**Modelos em escala:** carro de coleção 1:18'], null],
 ['Roteiro de resolução', 'Passos simples.', ['1. Anote a escala (1:N)','2. Converta a medida real para a unidade do desenho','3. Aplique a razão: desenho = real ÷ N (ou real = desenho × N)','4. Converta de volta para a unidade pedida (m, km)'], 'Confira o resultado: um mapa de 10 cm que representa 5 km faz sentido? Escala 1:50.000.']
],
ex:[
 { q:'Em um mapa com escala 1:500.000, a distância entre duas cidades é de 6 cm. Qual é a distância real entre elas?', a:['3 km','12 km','30 km','60 km','300 km'], g:'C', c:'Real = 6 × 500.000 = 3.000.000 cm = 30.000 m = 30 km.' },
 { q:'A planta de uma sala, desenhada na escala 1:50, mostra um comprimento de 12 cm. Qual o comprimento real da sala?', a:['0,6 m','2,4 m','6 m','12 m','60 m'], g:'C', c:'Real = 12 × 50 = 600 cm = 6 metros.' }
],
pr:[
 { q:'Duas cidades distam 150 km. Em um mapa, aparecem a 7,5 cm uma da outra. Qual é a escala do mapa?', a:['1:200.000','1:500.000','1:1.000.000','1:2.000.000','1:5.000.000'], g:'D', c:'150 km = 15.000.000 cm. Escala = 7,5 : 15.000.000 = 1 : 2.000.000.' },
 { q:'Uma maquete de um prédio foi feita na escala 1:200. Se o prédio tem 60 m de altura, qual a altura da maquete?', a:['3 cm','12 cm','20 cm','30 cm','60 cm'], g:'D', c:'60 m = 6.000 cm. Maquete = 6.000 ÷ 200 = 30 cm.' },
 { q:'Em um mapa de escala 1:2.000.000, um lago ocupa 3 cm². Qual a área real aproximada do lago?', a:['6 km²','120 km²','1.200 km²','12.000 km²','60.000 km²'], g:'C', c:'Razão linear 1:2.000.000, logo área = k². Cada 1 cm do mapa vale 20 km; cada 1 cm² vale 400 km². Para 3 cm²: 1.200 km².' },
 { q:'Um carro em miniatura na escala 1:18 tem 25 cm de comprimento. O comprimento real do carro é de aproximadamente:', a:['1,4 m','2,5 m','3,6 m','4,5 m','6 m'], g:'D', c:'Real = 25 × 18 = 450 cm = 4,5 m.' }
],
erros:['Esquecer de converter para a mesma unidade antes de aplicar a escala.','Aplicar a razão linear diretamente a áreas e volumes (é k² e k³).','Inverter: multiplicar quando deveria dividir (do desenho para a realidade multiplica por N; da realidade para o desenho divide).','Achar que 1:1.000 é "maior" que 1:100 em detalhe: quanto menor o denominador, maior o detalhe.'],
check:['ler uma escala numérica (1:N) e usá-la','converter distâncias reais em distâncias no mapa e vice-versa','aplicar escala a áreas e volumes','converter km, m e cm sem errar']
},

{ t:'Potências, raízes e notação científica',
d1:[
 ['Potências: regras', 'Potência é uma multiplicação repetida: aⁿ = a × a × ... × a (n vezes).', ['**Mesma base, multiplicação:** aᵐ × aⁿ = aᵐ⁺ⁿ (2³ × 2⁴ = 2⁷)','**Mesma base, divisão:** aᵐ ÷ aⁿ = aᵐ⁻ⁿ (5⁶ ÷ 5² = 5⁴)','**Potência de potência:** (aᵐ)ⁿ = aᵐ×ⁿ ((3²)³ = 3⁶)','**Expoente zero:** a⁰ = 1 (a ≠ 0)','**Expoente negativo:** a⁻ⁿ = 1/aⁿ (2⁻³ = 1/8)'], 'Cuidado: (−3)² = 9, mas −3² = −9 (a potência vale só para o 3).'],
 ['Raízes', 'A raiz é a operação inversa da potência.', ['**√9 = 3**, pois 3² = 9','Raiz cúbica: ∛8 = 2, pois 2³ = 8','**Propriedades:** √(a × b) = √a × √b; √(a/b) = √a/√b','Não vale √(a + b) = √a + √b: √(9 + 16) = √25 = 5, que é diferente de 3 + 4 = 7','**Simplificação:** √50 = √(25 × 2) = 5√2'], 'Raiz quadrada de número negativo não existe nos reais.'],
 ['Potência com expoente fracionário', 'Liga potências e raízes.', ['a^(1/2) = √a','a^(1/3) = ∛a','a^(m/n) = ⁿ√(aᵐ). Exemplo: 8^(2/3) = ∛(8²) = ∛64 = 4'], null]
],
d2:[
 ['Notação científica', 'Escreve números muito grandes ou muito pequenos como a × 10ⁿ, com 1 ≤ a < 10.', ['**Grandes:** 6.400.000 = 6,4 × 10⁶ (anda a vírgula 6 casas para a esquerda)','**Pequenos:** 0,00032 = 3,2 × 10⁻⁴ (anda a vírgula 4 casas para a direita)','Expoente positivo: número grande. Expoente negativo: número pequeno (entre 0 e 1)','Distância Terra–Sol ≈ 1,5 × 10⁸ km; diâmetro de um átomo ≈ 10⁻¹⁰ m'], null],
 ['Operações em notação científica', 'Aplicam-se as regras de potência.', ['**Multiplicação:** (2 × 10³) × (3 × 10⁴) = 6 × 10⁷','**Divisão:** (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴','**Soma:** iguale os expoentes antes: 3 × 10⁵ + 2 × 10⁴ = 3 × 10⁵ + 0,2 × 10⁵ = 3,2 × 10⁵','Se o resultado sair com a fora do intervalo [1, 10), ajuste: 12 × 10³ = 1,2 × 10⁴'], 'Ordem de grandeza: a potência de 10 mais próxima. Se a ≥ 3,16, aumente 1 no expoente.'],
 ['Onde aparece', 'Em Física, Química e Biologia também.', ['**Velocidade da luz:** 3 × 10⁸ m/s','**Massa da Terra:** ≈ 6 × 10²⁴ kg','**Células e bactérias:** comprimentos em micrômetros (10⁻⁶ m)','**Dados populacionais e econômicos:** bilhões (10⁹) e trilhões (10¹²)'], null]
],
ex:[
 { q:'O número 0,000047 escrito em notação científica é:', a:['4,7 × 10⁻³','4,7 × 10⁻⁴','4,7 × 10⁻⁵','47 × 10⁻⁶','4,7 × 10⁵'], g:'C', c:'Para chegar a 4,7, a vírgula andou 5 casas para a direita. Logo o expoente é −5: 4,7 × 10⁻⁵.' },
 { q:'A luz leva aproximadamente 500 segundos para ir do Sol à Terra, com velocidade de 3 × 10⁸ m/s. A distância Terra–Sol, em metros, é de aproximadamente:', a:['1,5 × 10⁶','1,5 × 10⁹','1,5 × 10¹⁰','1,5 × 10¹¹','1,5 × 10¹²'], g:'D', c:'Distância = velocidade × tempo = 3 × 10⁸ × 5 × 10² = 15 × 10¹⁰ = 1,5 × 10¹¹ m.' }
],
pr:[
 { q:'O valor de 2⁵ × 2³ ÷ 2⁴ é:', a:['2','4','8','16','32'], g:'D', c:'Soma dos expoentes no produto: 2⁸. Depois a divisão: 2⁸ ÷ 2⁴ = 2⁴ = 16.' },
 { q:'Qual é o valor de (−2)³ + √16 − 3⁰?', a:['−5','−1','1','3','5'], g:'A', c:'(−2)³ = −8; √16 = 4; 3⁰ = 1. Soma: −8 + 4 − 1 = −5.' },
 { q:'Em notação científica, 3.600.000.000 é igual a:', a:['3,6 × 10⁸','3,6 × 10⁹','36 × 10⁸','0,36 × 10¹⁰','3,6 × 10¹⁰'], g:'B', c:'A vírgula anda 9 casas para a esquerda: 3,6 × 10⁹.' },
 { q:'O produto (4 × 10⁻³) × (5 × 10⁵) é igual a:', a:['2 × 10²','20 × 10²','2 × 10³','2 × 10⁻²','9 × 10²'], g:'C', c:'4 × 5 = 20 e 10⁻³ × 10⁵ = 10². Então 20 × 10² = 2 × 10³.' }
],
erros:['Confundir −3² (= −9) com (−3)² (= 9).','Somar expoentes na soma de potências (2³ + 2⁴ ≠ 2⁷).','Errar o sinal do expoente na notação científica de números pequenos.','Esquecer de ajustar o coeficiente para ficar entre 1 e 10.'],
check:['aplicar as regras de potência','simplificar raízes e usar expoentes fracionários','escrever números em notação científica','multiplicar, dividir e somar números em notação científica']
},

{ t:'Equações do 1º e do 2º grau',
d1:[
 ['Equação do 1º grau', 'Tem a forma ax + b = 0 (a ≠ 0). A incógnita aparece elevada a 1.', ['Objetivo: isolar o x. O que está somando passa subtraindo; o que multiplica passa dividindo','Exemplo: 3x − 7 = 14 → 3x = 21 → x = 7','Com parênteses: 2(x + 3) = 20 → 2x + 6 = 20 → x = 7','Com frações: multiplique tudo pelo MMC dos denominadores'], 'Sempre confira substituindo o valor encontrado na equação.'],
 ['Como transformar problema em equação', 'A parte mais importante é traduzir o texto.', ['Escolha a incógnita: "x é o preço de um lápis"','"O dobro de" → 2x; "a metade" → x/2; "5 a mais" → x + 5; "a soma de dois números consecutivos" → x + (x + 1)','Exemplo: um número mais seu triplo é 48 → x + 3x = 48 → x = 12','Monte, resolva e responda ao que foi pedido (às vezes não é o x)'], null],
 ['Equação do 2º grau', 'Tem a forma ax² + bx + c = 0 (a ≠ 0).', ['**Fórmula de Bhaskara:** x = (−b ± √Δ) ÷ 2a','**Discriminante:** Δ = b² − 4ac','Δ > 0: duas raízes reais diferentes. Δ = 0: duas raízes iguais. Δ < 0: não há raízes reais','Exemplo: x² − 5x + 6 = 0 → Δ = 25 − 24 = 1 → x = (5 ± 1)/2 → x = 3 ou x = 2'], null]
],
d2:[
 ['Soma e produto das raízes', 'Atalho que evita Bhaskara quando os números são "bonitos".', ['**Soma:** x₁ + x₂ = −b/a','**Produto:** x₁ × x₂ = c/a','x² − 7x + 12 = 0: soma 7 e produto 12 → raízes 3 e 4','Se o problema pede só a soma ou o produto das raízes, use essas fórmulas direto'], 'Teste mentalmente pares de números cujo produto seja c e a soma seja −b.'],
 ['Casos incompletos', 'Quando b ou c é zero, dá para resolver sem fórmula.', ['**b = 0:** x² − 16 = 0 → x² = 16 → x = 4 ou x = −4','**c = 0:** x² − 5x = 0 → x(x − 5) = 0 → x = 0 ou x = 5','Fatorando: quem multiplica dá zero se um dos fatores for zero','Equações do 2º grau que "viram" 1º: se a se cancela, revise a conta'], null],
 ['Problemas com equação do 2º grau', 'Aparecem em geometria e em movimento.', ['**Área:** um retângulo com lados x e x + 3 tem área 40 → x(x + 3) = 40 → x² + 3x − 40 = 0 → x = 5 (descarte −8)','**Idade, números consecutivos e trajetórias** também levam ao 2º grau','Descarte raízes que não fazem sentido no contexto (comprimento negativo, por exemplo)','Confira sempre a resposta no enunciado'], 'Raiz negativa para comprimento, tempo ou idade geralmente deve ser descartada.']
],
ex:[
 { q:'Ana tem o dobro da idade de Bia. Daqui a 5 anos, a soma das idades delas será 40. Qual é a idade atual de Ana?', a:['10','15','20','25','30'], g:'C', c:'Bia = x, Ana = 2x. Daqui a 5 anos: (x + 5) + (2x + 5) = 40 → 3x + 10 = 40 → x = 10. Ana tem 2x = 20 anos.' },
 { q:'Um terreno retangular tem 5 m a mais de comprimento do que de largura e área de 84 m². Qual é a largura do terreno?', a:['4 m','6 m','7 m','9 m','12 m'], g:'C', c:'Largura x, comprimento x + 5: x(x + 5) = 84 → x² + 5x − 84 = 0. Δ = 25 + 336 = 361 → x = (−5 ± 19)/2 → x = 7 (a outra raiz, −12, é descartada). Largura 7 m.' }
],
pr:[
 { q:'A solução da equação (x − 3)/2 + 4 = 10 é:', a:['x = 9','x = 12','x = 15','x = 18','x = 21'], g:'C', c:'(x − 3)/2 = 6 → x − 3 = 12 → x = 15.' },
 { q:'As raízes da equação x² − 7x + 10 = 0 são:', a:['1 e 10','2 e 5','−2 e −5','3 e 4','5 e 7'], g:'B', c:'Soma = 7 e produto = 10: os números 2 e 5 (2 + 5 = 7 e 2 × 5 = 10).' },
 { q:'Para que a equação x² + 6x + k = 0 tenha duas raízes reais iguais, o valor de k deve ser:', a:['3','6','9','12','36'], g:'C', c:'Raízes iguais exigem Δ = 0: 36 − 4k = 0 → k = 9.' },
 { q:'Um número somado ao seu quadrado dá 30. Esse número pode ser:', a:['−6 ou 5','−5 ou 6','5 ou 6','−6 ou −5','somente 5'], g:'A', c:'x + x² = 30 → x² + x − 30 = 0. Soma das raízes = −1 e produto = −30: os números são 5 e −6. (Alternativa A: −6 ou 5.)' }
],
erros:['Errar o sinal ao passar termos de um lado para o outro da igualdade.','Esquecer de dividir ambos os termos por 2a na fórmula de Bhaskara.','Aceitar uma raiz que não faz sentido no contexto (negativa para medida).','Trocar a soma e o produto das raízes: soma = −b/a e produto = c/a.'],
check:['resolver equações do 1º grau com parênteses e frações','traduzir um problema em linguagem de equação','resolver equações do 2º grau com Bhaskara e por soma e produto','interpretar o discriminante (Δ)']
}
];
