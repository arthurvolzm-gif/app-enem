/* Matemática: temas 23 a 25 */
module.exports = [
{ t:'Gráficos, tabelas e dispersão',
d1:[
 ['Tipos de gráfico e quando usar', 'Cada tipo conta uma história diferente. Reconhecer o tipo ajuda a ler certo.', ['**Barras/colunas:** comparar categorias (vendas por mês, população por cidade)','**Linhas:** evolução no tempo (temperatura, preço, taxa de desemprego)','**Setores (pizza):** partes de um total (cada fatia é um percentual; a soma é 100%)','**Histograma:** distribuição de dados em intervalos (faixas de idade)','**Dispersão (pontos):** relação entre duas variáveis'], null],
 ['Como ler corretamente', 'A maioria dos erros vem de leitura apressada.', ['1. Leia o título: qual a variável e o período?','2. Veja os eixos: unidades, escala (de quanto em quanto), onde começa o eixo','3. Leia a legenda: cores e símbolos','4. Procure a informação exata que a questão pede (valor, maior, menor, variação)','5. Só então calcule'], 'Cuidado: eixo que não começa no zero pode exagerar uma diferença.'],
 ['Tabelas e frequências', 'Organizam os dados em linhas e colunas.', ['**Frequência absoluta:** quantas vezes o valor aparece','**Frequência relativa:** fração ou percentual do total (absoluta ÷ total)','Exemplo: 6 de 40 alunos tiraram nota 10 → frequência relativa 15%','Em tabela com intervalos (classes), use o ponto médio de cada intervalo para estimar a média'], null]
],
d2:[
 ['Diagrama de dispersão e correlação', 'Mostra se duas variáveis estão relacionadas.', ['**Correlação positiva:** os pontos sobem (mais estudo, notas maiores)','**Correlação negativa:** os pontos descem (mais velocidade, menos tempo)','**Sem correlação:** pontos espalhados','**Reta de tendência:** resume o comportamento, mas não prova causa e efeito','Correlação não é causalidade: dois fenômenos podem variar juntos sem que um cause o outro'], 'Sorvete e afogamentos aumentam no verão, mas um não causa o outro: o calor causa os dois.'],
 ['Variação em gráficos de linha', 'O enunciado quase sempre pede um trecho ou uma comparação.', ['**Maior crescimento:** o trecho mais inclinado para cima','**Variação absoluta:** valor final − valor inicial','**Variação percentual:** variação ÷ valor inicial × 100','**Média no período:** some os valores lidos e divida pelo número de pontos','Compare dois períodos pelo mesmo critério'], null],
 ['Gráficos enganosos', 'O ENEM gosta de pedir senso crítico.', ['Eixo cortado (começa em um valor alto) exagera diferenças','Escala diferente nos dois lados do gráfico confunde a comparação','Gráficos de pizza com muitas fatias dificultam a leitura','Dados sem fonte ou sem período definido: cuidado','Pergunte: "o que esse gráfico não mostra?"'], null]
],
ex:[
 { q:'O gráfico de setores mostra a preferência de 800 estudantes por esporte: futebol 40%, vôlei 25%, basquete 20% e outros 15%. Quantos preferem vôlei?', a:['120','160','200','240','320'], g:'C', c:'25% de 800 = 0,25 × 800 = 200 estudantes.' },
 { q:'Uma tabela de frequência mostra as idades de 20 pessoas: 18 anos (4 pessoas), 19 anos (6 pessoas), 20 anos (8 pessoas), 21 anos (2 pessoas). Qual a idade média?', a:['19,2','19,4','19,6','19,8','20'], g:'B', c:'Soma = 18 × 4 + 19 × 6 + 20 × 8 + 21 × 2 = 72 + 114 + 160 + 42 = 388. Média = 388 ÷ 20 = 19,4 anos.' }
],
pr:[
 { q:'Em um gráfico de linhas, a produção de uma fábrica foi de 120 unidades em março e 150 em abril. A variação percentual foi:', a:['20%','25%','30%','35%','40%'], g:'B', c:'Variação = (150 − 120) ÷ 120 = 30 ÷ 120 = 0,25 = 25%.' },
 { q:'Em um diagrama de dispersão, os pontos tendem a descer da esquerda para a direita. Isso indica:', a:['correlação positiva','correlação negativa','ausência de correlação','que uma variável causa a outra','erro de medição'], g:'B', c:'Quando uma variável aumenta e a outra diminui, a correlação é negativa. Isso não prova causa.' },
 { q:'De 250 clientes entrevistados, 90 aprovaram o serviço. A frequência relativa dos que aprovaram é:', a:['9%','25%','36%','40%','90%'], g:'C', c:'90 ÷ 250 = 0,36 = 36%.' },
 { q:'Um gráfico de barras tem o eixo vertical começando em 50 (e não em 0). Isso pode:', a:['reduzir a diferença entre as barras','exagerar visualmente as diferenças entre as barras','não alterar a leitura','trocar os valores','indicar erro de cálculo'], g:'B', c:'Cortar o eixo vertical faz as barras parecerem muito diferentes, mesmo que a diferença real seja pequena.' }
],
erros:['Ler o gráfico sem observar a unidade e a escala dos eixos.','Confundir variação absoluta com variação percentual.','Concluir causa e efeito a partir de uma correlação.','Somar percentuais de bases diferentes (50% de 100 e 50% de 400 não são 50% de 500).'],
check:['ler gráficos de barras, linhas, setores e dispersão','calcular frequências absolutas e relativas','calcular variações absolutas e percentuais a partir de gráficos','identificar gráficos que podem induzir a erro']
},

{ t:'Análise combinatória',
d1:[
 ['Princípio fundamental da contagem', 'Se uma escolha pode ser feita de m maneiras e outra, independente, de n maneiras, as duas juntas podem ser feitas de m × n maneiras.', ['Exemplo: 3 camisas e 4 calças → 3 × 4 = 12 combinações de roupa','Placa de moto com 3 letras e 4 números (sem restrições): 26³ × 10⁴','Senha de 4 dígitos: 10 × 10 × 10 × 10 = 10.000','Se uma etapa depende da anterior, reduza as opções (sem repetição)'], 'Dica: monte um "esquema de casinhas" e escreva quantas opções há em cada uma.'],
 ['Fatorial e permutação', 'Permutação é a troca de ordem de todos os elementos.', ['**Fatorial:** n! = n × (n − 1) × ... × 1. 5! = 120; 0! = 1','**Permutação simples:** Pₙ = n!. Quantos anagramas de MESA? 4! = 24','**Com elementos repetidos:** divida pelas repetições. Anagramas de BANANA: 6!/(3! · 2!) = 60','Quando a ordem importa e todos os elementos entram, use permutação'], null],
 ['Arranjo e combinação', 'A diferença é a ordem.', ['**Arranjo (a ordem importa):** Aₙ,ₚ = n!/(n − p)!. Pódio com 3 de 10 atletas: A₁₀,₃ = 720','**Combinação (a ordem não importa):** Cₙ,ₚ = n!/[p!(n − p)!]. Escolher 3 de 10 para uma comissão: C₁₀,₃ = 120','Teste: se trocar a ordem dos escolhidos muda o resultado, é arranjo; se não muda, é combinação'], null]
],
d2:[
 ['Como decidir qual ferramenta usar', 'Pergunte-se na ordem.', ['1. Há várias etapas independentes? → princípio multiplicativo','2. Estou ordenando todos os elementos? → permutação','3. Escolho alguns elementos e a ordem importa? → arranjo','4. Escolho alguns elementos e a ordem não importa? → combinação','5. Há "restrições"? Resolva primeiro a etapa restrita'], 'Quase todo problema pode ser resolvido só com o princípio multiplicativo, se você esquematizar bem.'],
 ['Casos com restrições', 'Comece pela etapa que tem condição especial.', ['Número de 3 algarismos distintos que começa com dígito ímpar: 5 opções para o 1º; 9 para o 2º; 8 para o 3º → 360','"Pelo menos um": calcule o total e subtraia o caso em que não há nenhum','Pessoas lado a lado que devem ficar juntas: trate o grupo como um bloco e depois permute dentro do bloco','Mesa circular: (n − 1)!'], null],
 ['Exemplos clássicos', 'Contextos que se repetem.', ['**Senhas e placas:** princípio multiplicativo','**Filas e fotos:** permutação (com ou sem restrições)','**Comissões e times:** combinação','**Pódio e eleições de cargos distintos:** arranjo','**Anagramas:** permutação com repetição'], null]
],
ex:[
 { q:'Uma pessoa possui 4 camisas, 3 calças e 2 pares de sapatos. De quantas maneiras diferentes ela pode se vestir usando uma camisa, uma calça e um par de sapatos?', a:['9','12','18','24','32'], g:'D', c:'Princípio multiplicativo: 4 × 3 × 2 = 24 maneiras.' },
 { q:'Em um grupo de 8 pessoas, deseja-se formar uma comissão de 3 membros. De quantas maneiras isso pode ser feito?', a:['24','56','112','336','512'], g:'B', c:'A ordem não importa: combinação. C₈,₃ = 8!/(3! · 5!) = (8 × 7 × 6)/(3 × 2 × 1) = 336/6 = 56.' }
],
pr:[
 { q:'Quantos anagramas tem a palavra PORTA?', a:['24','60','100','120','720'], g:'D', c:'5 letras distintas: 5! = 120.' },
 { q:'Quantos números de 3 algarismos distintos podem ser formados com os dígitos 1, 2, 3, 4 e 5?', a:['10','27','60','125','243'], g:'C', c:'5 × 4 × 3 = 60 (sem repetição, a ordem importa).' },
 { q:'Em uma corrida com 8 atletas, de quantas maneiras podem ser distribuídas as medalhas de ouro, prata e bronze?', a:['56','120','216','336','512'], g:'D', c:'A ordem importa: arranjo. 8 × 7 × 6 = 336.' },
 { q:'Quantas senhas de 3 letras distintas podem ser formadas com as letras A, B, C e D?', a:['6','12','18','24','64'], g:'D', c:'4 × 3 × 2 = 24 (arranjo de 4 tomados 3 a 3).' }
],
erros:['Usar combinação quando a ordem importa (e vice-versa).','Esquecer de dividir pelas repetições nos anagramas.','Não separar as etapas e somar em vez de multiplicar (etapas sucessivas multiplicam; alternativas excludentes somam).','Esquecer a restrição (como "primeiro dígito diferente de zero").'],
check:['usar o princípio multiplicativo com restrições','calcular permutações, inclusive com elementos repetidos','distinguir arranjo de combinação','resolver "pelo menos um" por complemento']
},

{ t:'Probabilidade',
d1:[
 ['Conceitos', 'Probabilidade mede a chance de um evento acontecer.', ['**Espaço amostral (Ω):** todos os resultados possíveis','**Evento (E):** o conjunto de resultados favoráveis','**P(E) = número de casos favoráveis ÷ número de casos possíveis**','A probabilidade fica entre 0 (impossível) e 1 (certo). Pode ser fração, decimal ou %','Exemplo: sair par em um dado: 3/6 = 1/2 = 50%'], 'Probabilidade só vale com casos igualmente prováveis (dado e moeda não viciados).'],
 ['Eventos e operações', 'Combinando eventos.', ['**Complementar:** P(não E) = 1 − P(E)','**Evento "E ou F":** P(E ∪ F) = P(E) + P(F) − P(E ∩ F)','Eventos mutuamente exclusivos (não ocorrem juntos): some as probabilidades','**Evento "E e F" independentes:** P(E ∩ F) = P(E) × P(F)','Exemplo: cara em duas moedas: 1/2 × 1/2 = 1/4'], null],
 ['Probabilidade condicional', 'A chance de A, sabendo que B já aconteceu: P(A | B) = P(A ∩ B) / P(B).', ['Exemplo: em uma urna com 3 bolas vermelhas e 2 azuis, retira-se uma sem repor. P(2ª vermelha | 1ª vermelha) = 2/4 = 1/2','Retirada sem reposição: o espaço amostral diminui','Retirada com reposição: as chances se mantêm'], 'Frase-chave: "dado que", "sabendo que", "se".']
],
d2:[
 ['Probabilidade com contagem', 'Analisa casos com combinatória.', ['Casos favoráveis e possíveis podem ser contados com combinação','Exemplo: em uma turma de 20, 8 são meninas. Escolhendo 2 alunos, qual a chance de serem duas meninas? C₈,₂ / C₂₀,₂ = 28/190 = 14/95','Em sorteios: o total é C(n, p)','Pense em "casos favoráveis ÷ casos possíveis" sempre'], null],
 ['Experimentos em etapas', 'Use a árvore de possibilidades.', ['Multiplique ao longo do ramo e some os ramos que levam ao evento desejado','Exemplo: em dois lançamentos de moeda, a probabilidade de exatamente uma cara é 1/4 + 1/4 = 1/2','Útil em jogos, em testes diagnósticos e em previsão do tempo'], 'Teste de saúde: leia com calma o que é "falso positivo" e "falso negativo".'],
 ['Probabilidade e estatística no cotidiano', 'O ENEM contextualiza com situações reais.', ['**Sorteios e loterias:** probabilidade de ganhar com poucas combinações','**Previsão do tempo:** chance de chuva de 30%','**Pesquisas de opinião:** chance de uma pessoa sorteada ter certa opinião','**Genética:** chance de um filho herdar uma característica (Mendel)','**Seguros e riscos**'], null]
],
ex:[
 { q:'Um dado honesto de 6 faces é lançado uma vez. Qual a probabilidade de sair um número maior que 4?', a:['1/6','1/3','1/2','2/3','5/6'], g:'B', c:'Números maiores que 4: 5 e 6 (2 casos). Probabilidade = 2/6 = 1/3.' },
 { q:'Uma urna tem 4 bolas vermelhas e 6 azuis. Retiram-se duas bolas, uma de cada vez e sem reposição. Qual a probabilidade de ambas serem vermelhas?', a:['2/15','1/5','4/25','2/5','3/10'], g:'A', c:'P(1ª vermelha) = 4/10. P(2ª vermelha, dado que a 1ª foi) = 3/9. Produto: 4/10 × 3/9 = 12/90 = 2/15.' }
],
pr:[
 { q:'Uma moeda honesta é lançada duas vezes. A probabilidade de obter duas caras é:', a:['1/8','1/4','1/3','1/2','3/4'], g:'B', c:'Eventos independentes: 1/2 × 1/2 = 1/4.' },
 { q:'Em uma sala com 30 alunos, 12 jogam futebol. Sorteando um aluno, a probabilidade de ele NÃO jogar futebol é:', a:['2/5','1/2','3/5','2/3','7/10'], g:'C', c:'Não jogam: 30 − 12 = 18. Probabilidade = 18/30 = 3/5. (Também 1 − 12/30 = 18/30.)' },
 { q:'Uma carta é retirada de um baralho de 52 cartas. A probabilidade de ser um ás ou uma carta de copas é: (há 4 ases e 13 copas, e o ás de copas é contado nos dois)', a:['3/13','15/52','4/13','17/52','1/3'], g:'C', c:'Ases: 4; copas: 13; o ás de copas está nos dois grupos, então 4 + 13 − 1 = 16 cartas. Probabilidade = 16/52 = 4/13.' },
 { q:'A probabilidade de chover em um dia é 0,3. A probabilidade de não chover é:', a:['0,3','0,5','0,6','0,7','1,3'], g:'D', c:'Evento complementar: 1 − 0,3 = 0,7.' }
],
erros:['Somar probabilidades de eventos que não são mutuamente exclusivos sem subtrair a interseção.','Esquecer de reduzir o espaço amostral quando não há reposição.','Multiplicar quando deveria somar (etapas "e" multiplicam; alternativas "ou" somam).','Dar a resposta como "número de casos" em vez de fração ou percentual.'],
check:['calcular uma probabilidade como casos favoráveis ÷ casos possíveis','usar o complementar e a regra da soma','multiplicar probabilidades de eventos independentes','resolver problemas de retirada com e sem reposição']
}
];
