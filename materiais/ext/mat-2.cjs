/* Matemática: temas 3 a 6 */
module.exports = [
{ t:'Razão e proporção',
d1:[
 ['O que é razão', 'Razão é a comparação entre duas grandezas feita por divisão. A razão de a para b é a/b, com b diferente de zero.', ['**Entre grandezas iguais:** 3 meninos para 5 meninas → razão 3/5 (sem unidade)','**Entre grandezas diferentes:** surgem unidades novas. 120 km em 2 h → 60 km/h (velocidade)','**Densidade demográfica:** habitantes ÷ área (hab/km²)','**Escala:** medida no desenho ÷ medida real'], 'A ordem importa: razão de 3 para 5 (3/5) não é a mesma que 5 para 3 (5/3).'],
 ['Proporção e propriedade fundamental', 'Proporção é a igualdade entre duas razões: a/b = c/d.', ['Nos termos a, b, c, d: a e d são os **extremos**, b e c são os **meios**','**Propriedade fundamental:** produto dos meios = produto dos extremos (a × d = b × c)','Exemplo: 2/3 = 8/12, pois 2 × 12 = 3 × 8 = 24','Para achar o termo desconhecido: 4/x = 10/25 → 10x = 100 → x = 10'], 'Essa propriedade é a "multiplicação cruzada" que usamos na regra de três.'],
 ['Grandezas diretamente e inversamente proporcionais', 'Duas grandezas se relacionam de duas maneiras principais.', ['**Diretamente proporcionais:** se uma dobra, a outra dobra (litros de combustível e distância percorrida)','**Inversamente proporcionais:** se uma dobra, a outra cai pela metade (velocidade e tempo de viagem para a mesma distância)','Dica prática: pergunte "se uma aumenta, a outra aumenta ou diminui?"','Na inversa, o **produto** das grandezas se mantém constante'], null]
],
d2:[
 ['Divisão em partes proporcionais', 'Para dividir um valor em partes proporcionais a números dados, some os números e descubra quanto vale cada "parte".', ['**Direta:** dividir R$ 900 entre três pessoas na razão 2 : 3 : 4 → 9 partes → cada parte vale R$ 100 → R$ 200, R$ 300 e R$ 400','**Inversa:** dividir proporcionalmente ao inverso (1/2, 1/3...). Quem tem mais "esforço" recebe menos. Use denominador comum e trabalhe com os numeradores','Sociedade: o lucro costuma ser dividido proporcionalmente ao capital investido'], null],
 ['Razões que aparecem no cotidiano', 'O ENEM adora situações de consumo e de saúde.', ['**Receita:** 2 xícaras de farinha para cada 3 de leite. Para 9 de leite, são 6 de farinha','**Concentração:** 30 g de sal em 500 mL de água → 6 g por 100 mL','**Rendimento:** 12 km/L significa 1 litro a cada 12 km','**Taxa:** casos por 100 mil habitantes para comparar cidades de tamanhos diferentes','**Preço por unidade:** compare o valor por litro, por quilo ou por metro, não o preço total'], 'Para comparar ofertas, calcule sempre a razão preço ÷ quantidade.'],
 ['Passo a passo para resolver', 'Um roteiro simples evita erros.', ['1. Identifique as grandezas e escreva as razões','2. Verifique se são diretas ou inversas','3. Monte a proporção (inverta uma razão se for inversa)','4. Aplique a multiplicação cruzada','5. Confira as unidades e se o resultado faz sentido (mais gente, menos tempo...)'], null]
],
ex:[
 { q:'Uma tinta é feita misturando 3 partes de pigmento azul para 5 partes de pigmento branco. Para preparar 40 litros dessa tinta, quantos litros de pigmento azul são necessários?', a:['12','15','18','20','24'], g:'B', c:'A mistura tem 3 + 5 = 8 partes. Cada parte equivale a 40 ÷ 8 = 5 litros. O azul tem 3 partes: 3 × 5 = 15 litros.' },
 { q:'Um prêmio de R$ 1.800 será dividido entre dois trabalhadores, de forma inversamente proporcional ao número de faltas: um teve 2 faltas e o outro teve 4. Quanto recebe quem teve menos faltas?', a:['R$ 600','R$ 900','R$ 1.000','R$ 1.200','R$ 1.350'], g:'D', c:'Inversamente proporcional a 2 e 4 equivale a proporcional a 1/2 e 1/4, ou seja, a 2 e 1 (multiplicando por 4). Total de 3 partes: cada uma vale R$ 600. Quem teve 2 faltas recebe 2 partes: R$ 1.200.' }
],
pr:[
 { q:'Em uma escola, a razão entre o número de meninos e meninas é 4/5. Se há 360 alunos no total, quantos são meninas?', a:['120','160','180','200','240'], g:'D', c:'Meninos : meninas = 4 : 5, total de 9 partes. Cada parte vale 360 ÷ 9 = 40. Meninas: 5 × 40 = 200.' },
 { q:'Uma máquina produz 150 peças em 6 horas. Mantido o ritmo, quantas peças produz em 10 horas?', a:['200','225','250','300','350'], g:'C', c:'Grandezas diretas. 150/6 = x/10 → 6x = 1.500 → x = 250 peças. (Ou: 25 peças por hora × 10 h.)' },
 { q:'O produto A custa R$ 12 por 400 g e o produto B custa R$ 20 por 750 g. Qual compra é mais vantajosa e por quê?', a:['A, pois custa R$ 0,030 por grama','B, pois custa R$ 0,027 por grama (aprox.)','A, pois tem menor preço total','B, pois tem maior massa','São equivalentes'], g:'B', c:'A: 12/400 = R$ 0,030/g. B: 20/750 ≈ R$ 0,0267/g. O B tem menor preço por grama, logo é mais vantajoso, mesmo que o preço total seja maior.' },
 { q:'Ao dividir R$ 2.400 em partes diretamente proporcionais a 1, 2 e 5, a maior parte recebe:', a:['R$ 300','R$ 600','R$ 1.200','R$ 1.500','R$ 1.800'], g:'D', c:'Soma das partes: 1 + 2 + 5 = 8. Cada parte vale 2.400 ÷ 8 = R$ 300. A maior parte tem 5 partes: 5 × 300 = R$ 1.500.' }
],
erros:['Montar a proporção na ordem errada: confira se a ordem dos termos é a mesma nos dois lados.','Tratar como direta uma grandeza inversa (mais pintores, menos tempo).','Dividir em partes sem somar antes as partes (o total é a soma das razões).','Comparar preços totais em vez do preço por unidade.'],
check:['calcular uma razão e interpretar sua unidade','montar e resolver uma proporção pela multiplicação cruzada','distinguir grandezas diretas e inversas','dividir um valor em partes proporcionais']
},

{ t:'Regra de três',
d1:[
 ['Regra de três simples', 'Serve para achar um valor desconhecido quando duas grandezas se relacionam proporcionalmente.', ['1. Organize numa tabela, uma grandeza em cada coluna','2. Marque uma seta para cada coluna e veja se elas apontam no mesmo sentido (direta) ou em sentidos opostos (inversa)','3. Direta: multiplique em cruz. Inversa: inverta uma das razões ou multiplique "em linha"','4. Resolva e confira a resposta'], null],
 ['Exemplo direto', '5 cadernos custam R$ 40. Quanto custam 8 cadernos?', ['Mais cadernos → mais dinheiro (direta)','5/8 = 40/x → 5x = 320 → **x = R$ 64**','Atalho: R$ 40 ÷ 5 = R$ 8 cada; 8 × 8 = R$ 64'], null],
 ['Exemplo inverso', '4 pedreiros constroem um muro em 6 dias. Em quantos dias 8 pedreiros constroem o mesmo muro?', ['Mais pedreiros → menos dias (inversa)','4 × 6 = 8 × x → 24 = 8x → **x = 3 dias**','O "trabalho total" (pedreiros × dias = 24) é constante'], 'Quando a grandeza é inversa, o produto das duas é constante.']
],
d2:[
 ['Regra de três composta', 'Envolve três ou mais grandezas. A incógnita depende de várias ao mesmo tempo.', ['Compare a grandeza da incógnita com **cada uma das outras separadamente**, mantendo as demais fixas','Exemplo: 6 máquinas produzem 600 peças em 5 dias. Quantas peças produzem 10 máquinas em 8 dias?','Peças × máquinas: direta. Peças × dias: direta. 600/x = (6/10) × (5/8) → 600/x = 30/80 → x = 1.600 peças'], 'Truque: peças = 600 × (10/6) × (8/5) = 1.600.'],
 ['Situações típicas do ENEM', 'O contexto muda, a lógica é a mesma.', ['**Consumo:** um chuveiro gasta 30 L em 5 min. Em 12 min gasta 72 L','**Trabalho:** tarefa pronta em 12 dias por 5 pessoas leva 6 dias com 10 pessoas','**Viagem:** a 80 km/h gasta 3 h; a 120 km/h gasta 2 h (inversa)','**Receita:** mantenha a proporção de ingredientes'], null],
 ['Regra de três e porcentagem', 'A porcentagem é uma regra de três com a base valendo 100.', ['Quanto é 30% de 250? 100% → 250; 30% → x → x = 75','Que porcentagem 45 é de 180? 180 → 100%; 45 → x → x = 25%','Aumento: se 20 virou 25, o aumento foi 5/20 = 25%'], 'Útil para conferir resultados quando a questão mistura os dois assuntos.']
],
ex:[
 { q:'Um carro percorre 240 km consumindo 20 litros de gasolina. Mantida a mesma eficiência, quantos litros ele consome para percorrer 420 km?', a:['28','30','32','35','40'], g:'D', c:'Grandezas diretas (mais distância, mais litros). 240/420 = 20/x → 240x = 8.400 → x = 35 litros.' },
 { q:'Dez operários, trabalhando 8 horas por dia, constroem uma casa em 30 dias. Em quantos dias 15 operários, trabalhando 4 horas por dia, construiriam a mesma casa?', a:['24','30','36','40','48'], g:'D', c:'Mais operários → menos dias (inversa). Menos horas por dia → mais dias (inversa). x = 30 × (10/15) × (8/4) = 30 × 2/3 × 2 = 40 dias. Conferindo pelo trabalho total: 10 × 8 × 30 = 2.400; 15 × 4 × x = 2.400 → x = 40.' }
],
pr:[
 { q:'Uma torneira despeja 18 litros em 4 minutos. Em quanto tempo enche um reservatório de 90 litros?', a:['16 min','18 min','20 min','22 min','24 min'], g:'C', c:'Direta. 18/90 = 4/x → 18x = 360 → x = 20 minutos.' },
 { q:'Se 6 pintores pintam uma parede em 8 horas, quanto tempo levam 4 pintores para pintar a mesma parede?', a:['5 h','6 h','10 h','12 h','16 h'], g:'D', c:'Inversa. 6 × 8 = 4 × x → x = 48/4 = 12 horas.' },
 { q:'Uma impressora imprime 360 páginas em 30 minutos. Quantas páginas imprime em 1 hora e 15 minutos?', a:['720','810','900','1.000','1.080'], g:'C', c:'1 h 15 min = 75 min. 360/30 = 12 páginas por minuto. 12 × 75 = 900 páginas.' },
 { q:'Uma ração dura 20 dias para 12 cães. Se mais 8 cães forem acolhidos (ficando 20 cães), por quantos dias a mesma ração durará?', a:['8','10','12','14','16'], g:'C', c:'Inversa. 12 × 20 = 20 × x → x = 240/20 = 12 dias.' }
],
erros:['Escolher "direta" ou "inversa" sem analisar a relação (leia com calma: mais de um, menos de outro).','Na regra de três composta, comparar a incógnita com todas as grandezas ao mesmo tempo em vez de uma por vez.','Misturar unidades (minutos e horas) dentro da mesma conta.','Arredondar no meio da conta: só arredonde no final.'],
check:['montar a tabela e as setas de uma regra de três simples','decidir se a relação é direta ou inversa','resolver uma regra de três composta com 3 grandezas','converter unidades antes de calcular']
},

{ t:'Porcentagem',
d1:[
 ['O que é porcentagem', 'Porcentagem é uma razão com denominador 100. 25% significa 25/100 = 0,25 = 1/4.', ['**Parte de um valor:** 15% de 80 = 0,15 × 80 = 12','**Descobrir o percentual:** 12 é quantos % de 80? 12/80 = 0,15 = 15%','**Descobrir o total:** 15% de um número vale 12; o número é 12/0,15 = 80','Para transformar % em decimal: divida por 100. Decimal em %: multiplique por 100'], 'Percentual sempre é "de alguma coisa": identifique qual é a base (o 100%).'],
 ['Aumentos e descontos', 'Aqui moram as pegadinhas do ENEM. Use o **fator multiplicador**.', ['**Aumento de 20%:** fator 1,20 (100% + 20%)','**Desconto de 15%:** fator 0,85 (100% − 15%)','Preço de R$ 200 com aumento de 20%: 200 × 1,20 = R$ 240','Preço de R$ 200 com desconto de 15%: 200 × 0,85 = R$ 170','Aumento seguido de desconto: multiplique os fatores'], 'Aumentar 10% e depois reduzir 10% não volta ao valor original: 1,10 × 0,90 = 0,99 (perde 1%).'],
 ['Variação percentual', 'Compara o valor final com o inicial.', ['Fórmula: (final − inicial) ÷ inicial × 100','De 50 para 65: (65 − 50)/50 = 0,30 → aumento de 30%','De 80 para 60: (60 − 80)/80 = −0,25 → queda de 25%','Pontos percentuais ≠ porcentagem: de 10% para 12% subiu 2 pontos percentuais, mas 20% em termos relativos'], null]
],
d2:[
 ['Porcentagens sucessivas', 'Quando há várias variações em sequência, o resultado não é a soma delas.', ['Dois aumentos de 10%: 1,10 × 1,10 = 1,21 → aumento total de 21%','Aumento de 25% e desconto de 20%: 1,25 × 0,80 = 1,00 → fica igual','Desconto de 10% e 20%: 0,90 × 0,80 = 0,72 → desconto total de 28% (e não 30%)'], null],
 ['Porcentagem no dia a dia', 'Contextos frequentes na prova.', ['**Comissão e imposto:** 5% de comissão sobre R$ 3.000 = R$ 150','**Lucro e prejuízo:** lucro de 30% sobre o custo: venda = custo × 1,30','**Pesquisa de opinião:** 40% de 1.200 entrevistados = 480 pessoas','**Mistura:** 20% de álcool em 500 mL → 100 mL de álcool','**Inflação:** variação percentual de preços ao longo do tempo'], 'Leia bem se o percentual é sobre o custo, sobre o preço de venda ou sobre o total.'],
 ['Leitura de gráficos com percentuais', 'Muitas questões trazem gráficos de setores (pizza) ou de barras com percentuais.', ['A soma dos setores de uma pizza é 100%','Cada 1% de um círculo equivale a 3,6°','Se o gráfico dá percentual e o enunciado dá o total, multiplique para obter a quantidade','Compare sempre a base: 50% de 200 é diferente de 50% de 2.000'], null]
],
ex:[
 { q:'Uma loja anunciou um desconto de 20% em um produto que custava R$ 250. Para um cliente que usa um cupom de mais 10% sobre o preço já com desconto, qual o valor final?', a:['R$ 170','R$ 175','R$ 180','R$ 185','R$ 200'], g:'C', c:'Fatores sucessivos: 250 × 0,80 = 200; depois 200 × 0,90 = 180. Atenção: não é 30% de desconto (que daria R$ 175).' },
 { q:'O número de visitantes de um museu passou de 8.000 em janeiro para 10.000 em fevereiro. Qual foi o aumento percentual?', a:['2%','20%','25%','80%','125%'], g:'C', c:'Variação = (10.000 − 8.000)/8.000 = 2.000/8.000 = 0,25 = 25%.' }
],
pr:[
 { q:'Em uma cidade, 35% dos 40.000 habitantes têm mais de 40 anos. Quantas pessoas têm 40 anos ou menos?', a:['14.000','20.000','24.000','26.000','28.000'], g:'D', c:'Mais de 40 anos: 35% de 40.000 = 14.000. Os demais: 100% − 35% = 65% → 26.000.' },
 { q:'Um produto teve aumento de 10% e, em seguida, outro aumento de 10%. O aumento total foi de:', a:['10%','15%','20%','21%','22%'], g:'D', c:'Fatores sucessivos: 1,10 × 1,10 = 1,21 → aumento de 21%.' },
 { q:'Uma pessoa pagou R$ 540 por um artigo que estava com 10% de desconto. Qual era o preço original?', a:['R$ 560','R$ 594','R$ 600','R$ 620','R$ 650'], g:'C', c:'O preço com desconto é 90% do original. 0,90 × P = 540 → P = 540 ÷ 0,90 = R$ 600.' },
 { q:'Um investimento rendeu 5% em um mês. Se o valor aplicado era de R$ 4.000, o montante ao final do mês foi de:', a:['R$ 4.020','R$ 4.050','R$ 4.200','R$ 4.500','R$ 5.000'], g:'C', c:'Fator 1,05 × 4.000 = R$ 4.200.' }
],
erros:['Somar percentuais sucessivos (10% + 10% = 20%) em vez de multiplicar os fatores.','Calcular o desconto sobre o preço errado (o final em vez do inicial).','Confundir pontos percentuais com variação percentual.','Usar como base o valor errado: o "100%" é sempre o valor de referência do enunciado.'],
check:['calcular uma porcentagem de um valor e o valor total a partir da parte','usar fator multiplicador para aumentos e descontos','calcular variação percentual','resolver porcentagens sucessivas sem somar os percentuais']
},

{ t:'Juros simples e compostos',
d1:[
 ['Conceitos básicos', 'Juros são o "aluguel do dinheiro": o valor cobrado por quem toma emprestado ou pago a quem aplica.', ['**Capital (C):** valor inicial emprestado ou aplicado','**Taxa (i):** percentual de juros por período (ao mês, ao ano). 2% a.m. = 0,02','**Tempo (t):** número de períodos. A taxa e o tempo devem estar na mesma unidade','**Juros (J):** o rendimento ou o custo do empréstimo','**Montante (M):** capital + juros'], 'Primeiro passo: verifique se taxa e tempo estão na mesma unidade (mês com mês, ano com ano).'],
 ['Juros simples', 'Os juros são calculados sempre sobre o capital inicial. O crescimento é linear.', ['**J = C × i × t**','**M = C + J = C × (1 + i × t)**','Exemplo: R$ 2.000 a 3% a.m. por 5 meses → J = 2.000 × 0,03 × 5 = R$ 300; M = R$ 2.300','Gráfico do montante: uma reta crescente (função afim)'], null],
 ['Juros compostos', 'Os juros de cada período são incorporados ao capital e passam a render juros também ("juros sobre juros"). O crescimento é exponencial.', ['**M = C × (1 + i)^t**','Exemplo: R$ 2.000 a 3% a.m. por 5 meses → M = 2.000 × 1,03⁵ ≈ 2.000 × 1,159 = R$ 2.318','Para t = 1 período, simples e composto coincidem','Para t > 1, composto rende mais que simples','Gráfico do montante: curva exponencial'], 'O ENEM costuma fornecer o valor de (1 + i)^t ou uma tabela. Se não der, aproxime por etapas.']
],
d2:[
 ['Comparando simples e composto', 'Saber qual regime rende mais é pergunta frequente.', ['Para t < 1: simples rende mais','Para t = 1: iguais','Para t > 1: composto rende mais','**Exemplo:** R$ 1.000 a 10% a.a. por 3 anos. Simples: R$ 1.300. Composto: 1.000 × 1,1³ = R$ 1.331'], 'Quanto maior o tempo, maior a diferença entre os dois regimes.'],
 ['Taxas equivalentes e transformação de períodos', 'No composto, taxa mensal não é a anual dividida por 12.', ['1% ao mês composto: (1,01)¹² ≈ 1,1268 → 12,68% ao ano (e não 12%)','Para achar a taxa mensal a partir da anual: tire a raiz 12ª de (1 + i anual)','No simples, a transformação é direta: 12% a.a. = 1% a.m.','Atenção aos termos: "a.a." (ao ano), "a.m." (ao mês), "a.d." (ao dia)'], null],
 ['Situações do cotidiano', 'Aparecem em financiamento, cartão, poupança e parcelamento.', ['**Cartão de crédito e cheque especial:** juros compostos altos, a dívida cresce rapidamente','**Poupança e investimentos:** rendimento composto','**Parcelamento com juros:** compare o total pago com o preço à vista','**Dívida em atraso:** juros e multa'], 'Dica: se o enunciado compara "à vista" e "a prazo", calcule o juros implícito: (preço a prazo − à vista) ÷ valor financiado.']
],
ex:[
 { q:'Uma pessoa aplicou R$ 5.000 a juros simples, à taxa de 2% ao mês, durante 8 meses. O montante obtido foi:', a:['R$ 5.160','R$ 5.400','R$ 5.800','R$ 5.800 de juros','R$ 8.000'], g:'C', c:'J = 5.000 × 0,02 × 8 = R$ 800. O montante é o capital mais os juros: 5.000 + 800 = R$ 5.800. (R$ 800 são só os juros.)' },
 { q:'Um capital de R$ 1.000 foi aplicado a juros compostos de 10% ao ano. Qual o montante ao final de 2 anos?', a:['R$ 1.100','R$ 1.200','R$ 1.210','R$ 1.220','R$ 1.331'], g:'C', c:'M = 1.000 × (1,10)² = 1.000 × 1,21 = R$ 1.210.' }
],
pr:[
 { q:'O juro obtido ao aplicar R$ 3.000 a juros simples, a 1,5% ao mês, por 10 meses, é:', a:['R$ 150','R$ 300','R$ 450','R$ 600','R$ 750'], g:'C', c:'J = C × i × t = 3.000 × 0,015 × 10 = R$ 450.' },
 { q:'A que taxa mensal de juros simples um capital de R$ 800 rende R$ 96 em 6 meses?', a:['1%','1,5%','2%','2,5%','3%'], g:'C', c:'J = C × i × t → 96 = 800 × i × 6 → i = 96/4.800 = 0,02 = 2% ao mês.' },
 { q:'Para um prazo maior que um período, o regime de juros compostos, em relação ao de juros simples, à mesma taxa:', a:['rende menos','rende o mesmo','rende mais','rende menos apenas no início','depende do capital'], g:'C', c:'Para t > 1, os juros compostos incidem sobre juros anteriores e o montante é maior que no regime simples.' },
 { q:'Uma loja vende um aparelho por R$ 900 à vista ou em uma única parcela de R$ 990 após 30 dias. Qual a taxa de juros mensal embutida?', a:['5%','8%','10%','11%','15%'], g:'C', c:'Financia-se R$ 900 e paga-se R$ 990: juros de R$ 90. Taxa = 90/900 = 0,10 = 10% ao mês.' }
],
erros:['Usar taxa em ano e tempo em meses sem converter.','Usar juros simples quando o enunciado pede compostos (e vice-versa).','Calcular juros compostos como se a taxa anual fosse igual a 12 vezes a mensal.','Confundir juros (J) com montante (M): o montante inclui o capital.'],
check:['calcular juros simples e o montante','calcular o montante em juros compostos com a fórmula ou por etapas','dizer qual regime rende mais para cada prazo','calcular a taxa de juros embutida em um parcelamento']
}
];
