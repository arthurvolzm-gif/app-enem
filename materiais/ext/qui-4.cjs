/* Química: temas 16 a 20 */
module.exports = [
{ t:'Cinética química',
d1:[
 ['Velocidade das reações', 'Rapidez com que reagentes viram produtos.', ['v = variação de concentração ÷ tempo','Unidades comuns: mol/(L·s)','Reação rápida: explosão; lenta: ferrugem'], null],
 ['Teoria das colisões', 'Para reagir é preciso colidir.', ['Colisão com orientação adequada','Energia mínima: **energia de ativação**','Complexo ativado: estado de transição','Poucas colisões são efetivas'], 'Mais colisões efetivas, reação mais rápida.'],
 ['Fatores que alteram a velocidade', 'Muito cobrado.', ['**Temperatura:** maior, mais rápida','**Concentração:** maior, mais rápida','**Superfície de contato:** maior, mais rápida (pó queima mais rápido que bloco)','**Catalisador:** diminui a energia de ativação','**Pressão** (em gases)'], null]
],
d2:[
 ['Catalisadores e enzimas', 'Aceleram sem serem consumidos.', ['Catalisador não altera ΔH nem o rendimento final','Enzimas: catalisadores biológicos','Catalisador do escapamento reduz poluentes','Inibidores diminuem a velocidade'], null],
 ['Lei da velocidade', 'Relação com a concentração.', ['v = k [A]ᵃ [B]ᵇ','Os expoentes são determinados experimentalmente','Reações elementares: expoentes iguais aos coeficientes','k depende da temperatura'], null],
 ['Aplicações', 'Cotidiano.', ['Geladeira conserva alimentos (temperatura baixa)','Panela de pressão cozinha mais rápido','Conservantes retardam a deterioração','Cortar alimentos em pedaços pequenos acelera o cozimento'], null]
],
ex:[
 { q:'Qual fator NÃO altera a energia de ativação?', a:['catalisador','temperatura','natureza do reagente','inibidor','enzima'], g:'B', c:'A temperatura aumenta a velocidade pela maior energia cinética, mas não muda a energia de ativação da reação.' },
 { q:'Palha de aço queima mais rápido que um prego porque:', a:['tem maior massa','tem maior superfície de contato','é menos reativa','tem catalisador','tem menor temperatura'], g:'B', c:'Maior superfície significa mais colisões.' }
],
pr:[
 { q:'Conservar alimentos na geladeira diminui:', a:['a energia de ativação','a velocidade das reações de deterioração','o ΔH','a massa molar','a densidade'], g:'B', c:'Temperatura baixa reduz a velocidade.' },
 { q:'Um catalisador:', a:['é consumido','aumenta o rendimento sempre','diminui a energia de ativação','altera o ΔH','aumenta a energia dos produtos'], g:'C', c:'Cria caminho alternativo.' },
 { q:'As enzimas são:', a:['reagentes','catalisadores biológicos','produtos','solventes','inibidores'], g:'B', c:'Aceleram reações no organismo.' },
 { q:'Para uma reação ocorrer, as colisões devem ser:', a:['lentas','efetivas','todas','apenas entre sólidos','sem energia'], g:'B', c:'Precisam de energia e orientação corretas.' }
],
erros:['Dizer que catalisador altera o equilíbrio ou o ΔH.','Confundir velocidade com extensão da reação.','Achar que concentração muda a energia de ativação.','Esquecer que superfície de contato importa para sólidos.'],
check:['listar fatores que alteram a velocidade','explicar a teoria das colisões','descrever o papel do catalisador','interpretar gráficos de energia de ativação']
},

{ t:'Equilíbrio químico',
d1:[
 ['Reações reversíveis', 'Podem ocorrer nos dois sentidos.', ['Representadas por ⇌','No equilíbrio, v direta = v inversa','Concentrações constantes, mas a reação não parou (equilíbrio dinâmico)','Sistema fechado'], null],
 ['Constante de equilíbrio', 'Quantifica o equilíbrio.', ['**Kc = [produtos] / [reagentes]** (cada um elevado ao coeficiente)','Kc grande: produtos favorecidos; pequeno: reagentes favorecidos','Sólidos e líquidos puros não entram na expressão','Kc depende só da temperatura'], null],
 ['Princípio de Le Chatelier', 'O sistema reage para minimizar a perturbação.', ['**Concentração:** aumentar reagente desloca para produtos','**Pressão:** aumento desloca para o lado de menor volume gasoso','**Temperatura:** aumento favorece o sentido endotérmico','**Catalisador:** não desloca, só acelera'], 'Perturbação gera deslocamento para se opor a ela.']
],
d2:[
 ['Equilíbrio iônico', 'Ácidos e bases fracos.', ['Ka e Kb medem a força','Efeito do íon comum','Tampão e pH','Hidrólise de sais'], null],
 ['Equilíbrios no cotidiano', 'Exemplos.', ['Refrigerante: CO₂ dissolvido, gás escapa ao abrir','Formação de cavernas e estalactites','Cáries: desmineralização do esmalte','Transporte de O₂ no sangue'], null],
 ['Processo Haber-Bosch', 'Amônia.', ['N₂ + 3 H₂ ⇌ 2 NH₃ (exotérmica)','Pressão alta favorece amônia','Temperatura moderada e catalisador de ferro','Fertilizantes alimentam bilhões de pessoas'], null]
],
ex:[
 { q:'Para N₂ + 3 H₂ ⇌ 2 NH₃, o aumento da pressão desloca o equilíbrio para:', a:['a esquerda','a direita','não desloca','os reagentes apenas','um gás nobre'], g:'B', c:'Do lado dos reagentes são 4 mol de gás; produtos, 2. A pressão favorece o menor volume.' },
 { q:'O catalisador, em um sistema em equilíbrio:', a:['desloca para a direita','desloca para a esquerda','não altera as concentrações no equilíbrio','altera Kc','impede o equilíbrio'], g:'C', c:'Apenas acelera a chegada ao equilíbrio.' }
],
pr:[
 { q:'No equilíbrio químico:', a:['as reações cessam','as velocidades direta e inversa são iguais','os reagentes acabam','os produtos acabam','não há mais energia'], g:'B', c:'Equilíbrio dinâmico.' },
 { q:'O aumento da temperatura favorece o sentido:', a:['exotérmico','endotérmico','sempre o direto','sempre o inverso','nenhum'], g:'B', c:'O sistema tenta absorver o calor extra.' },
 { q:'Qual dos itens altera o valor de Kc?', a:['concentração','pressão','catalisador','temperatura','volume'], g:'D', c:'Só a temperatura altera Kc.' },
 { q:'Um Kc muito maior que 1 indica que:', a:['há mais reagentes','há mais produtos','a reação é lenta','não houve reação','tem catalisador'], g:'B', c:'Os produtos predominam no equilíbrio.' }
],
erros:['Dizer que no equilíbrio nada acontece.','Incluir sólidos puros em Kc.','Achar que o catalisador desloca o equilíbrio.','Aplicar Le Chatelier sem contar mols de gás.'],
check:['escrever a expressão de Kc','aplicar Le Chatelier','diferenciar velocidade e extensão','citar exemplos cotidianos']
},

{ t:'Eletroquímica',
d1:[
 ['Oxirredução e Nox', 'Base do tema.', ['Nox: carga real ou aparente do átomo','Oxidação: Nox aumenta, perde e⁻','Redução: Nox diminui, ganha e⁻','Substâncias simples têm Nox zero'], null],
 ['Pilhas', 'Reação espontânea gera corrente.', ['**Ânodo:** oxidação, polo negativo','**Cátodo:** redução, polo positivo','Elétrons vão do ânodo ao cátodo pelo fio','Ponte salina equilibra as cargas','Exemplo: pilha de Daniell (Zn e Cu)'], 'Quanto maior o potencial de redução, mais fácil de reduzir.'],
 ['Eletrólise', 'Corrente provoca reação não espontânea.', ['Ânodo (+): oxidação; cátodo (−): redução','Usos: cloro, soda, alumínio, galvanoplastia','Eletrólise ígnea (fundido) e aquosa'], null]
],
d2:[
 ['Potenciais e ΔE', 'Calcular a voltagem.', ['ΔE = E(cátodo) − E(ânodo)','Maior potencial de redução reduz','ΔE > 0: espontânea (pilha)'], null],
 ['Baterias e corrosão', 'Cotidiano.', ['Pilhas alcalinas, baterias de íon-lítio','Chumbo-ácido (carros)','Ferrugem é corrosão; proteção com zinco (metal de sacrifício), pintura, galvanização','Descarte correto de pilhas por conter metais pesados'], null],
 ['Leis de Faraday', 'Quantidade de substância.', ['Massa depositada é proporcional à carga','Q = i · t','1 mol de elétrons = 96.500 C','Usado em cálculos de eletrólise'], null]
],
ex:[
 { q:'Na pilha, o ânodo é o polo em que ocorre:', a:['redução','oxidação','neutralização','sublimação','combustão'], g:'B', c:'Ânodo: oxidação (perde elétrons).' },
 { q:'Para proteger o ferro da corrosão, pode-se ligá-lo a um metal que se oxide mais facilmente, como o:', a:['ouro','cobre','zinco','prata','platina'], g:'C', c:'O zinco se oxida primeiro (metal de sacrifício).' }
],
pr:[
 { q:'Na eletrólise, a reação é:', a:['espontânea','não espontânea, provocada pela corrente','nuclear','de neutralização','de sublimação'], g:'B', c:'Energia elétrica força a reação.' },
 { q:'Os elétrons em uma pilha fluem:', a:['do cátodo ao ânodo','do ânodo ao cátodo','pela ponte salina','só no vácuo','nunca'], g:'B', c:'Saem de quem oxida e vão para quem reduz.' },
 { q:'O descarte incorreto de pilhas é problemático porque elas contêm:', a:['gases nobres','metais pesados','vitaminas','água pura','açúcares'], g:'B', c:'Contaminam solo e água.' },
 { q:'O alumínio é obtido industrialmente por:', a:['destilação','eletrólise ígnea','filtração','decantação','combustão'], g:'B', c:'Eletrólise da bauxita fundida.' }
],
erros:['Trocar ânodo e cátodo na pilha e na eletrólise.','Esquecer que a pilha é espontânea e a eletrólise não.','Calcular ΔE com sinal errado.','Achar que a ponte salina conduz elétrons.'],
check:['identificar oxidação e redução','montar uma pilha','explicar a eletrólise','relacionar corrosão e proteção']
},

{ t:'Radioatividade',
d1:[
 ['Emissões radioativas', 'Núcleos instáveis emitem radiação.', ['**Alfa (α):** 2 prótons e 2 nêutrons, pouco penetrante','**Beta (β):** elétron, penetração média','**Gama (γ):** onda eletromagnética, muito penetrante','Alfa: Z−2 e A−4; Beta: Z+1 e A igual'], null],
 ['Meia-vida', 'Tempo para metade decair.', ['Após n meias-vidas: N = N₀ / 2ⁿ','Cada elemento tem valor próprio','Carbono-14: cerca de 5.700 anos (datação)','Iodo-131 na medicina tem poucos dias'], 'Não depende da quantidade inicial nem da temperatura.'],
 ['Fissão e fusão', 'Energia nuclear.', ['**Fissão:** núcleo pesado se quebra (usinas, bombas)','**Fusão:** núcleos leves se unem (Sol)','Reação em cadeia controlada nos reatores','Rejeitos exigem armazenamento seguro'], null]
],
d2:[
 ['Aplicações', 'Benefícios.', ['Medicina: radioterapia, diagnóstico por imagem','Datação de fósseis e objetos','Irradiação de alimentos','Geração de energia','Esterilização de materiais'], null],
 ['Riscos e acidentes', 'Cuidados.', ['Radiação ionizante danifica células','Chernobyl e Fukushima','Césio-137 em Goiânia (1987)','Blindagem: chumbo e concreto; tempo e distância'], null],
 ['Usinas nucleares no Brasil', 'Angra.', ['Angra 1, 2 e 3 (RJ)','Vantagem: sem emissão de CO₂ na operação','Desvantagem: rejeitos e risco de acidentes'], null]
],
ex:[
 { q:'Após 3 meias-vidas, de uma amostra de 80 g restam:', a:['5 g','10 g','20 g','40 g','60 g'], g:'B', c:'80 → 40 → 20 → 10.' },
 { q:'Uma emissão alfa faz o número atômico:', a:['aumentar 2','diminuir 2','diminuir 4','aumentar 1','ficar igual'], g:'B', c:'Perde 2 prótons.' }
],
pr:[
 { q:'A radiação mais penetrante é a:', a:['alfa','beta','gama','todas iguais','nenhuma'], g:'C', c:'Gama atravessa até materiais densos.' },
 { q:'O processo que ocorre no Sol é:', a:['fissão','fusão','combustão','oxidação','destilação'], g:'B', c:'Hidrogênio forma hélio.' },
 { q:'O carbono-14 é usado para:', a:['gerar energia','datar fósseis','produzir plásticos','tratar água','fabricar vidro'], g:'B', c:'Datação de material orgânico.' },
 { q:'O acidente com o césio-137 aconteceu em:', a:['Angra dos Reis','Goiânia','Manaus','Recife','Curitiba'], g:'B', c:'Em 1987.' }
],
erros:['Trocar fissão e fusão.','Erros nas variações de A e Z.','Achar que a meia-vida depende da quantidade.','Dizer que a radioatividade só é prejudicial.'],
check:['descrever alfa, beta e gama','calcular meia-vida','diferenciar fissão e fusão','citar usos e riscos']
},

{ t:'Introdução à química orgânica',
d1:[
 ['O que é química orgânica', 'Química dos compostos de carbono.', ['Presente em seres vivos, combustíveis, plásticos, medicamentos','Elementos comuns: C, H, O, N, S, halogênios','Exceções: CO, CO₂, carbonatos, cianetos'], null],
 ['O carbono', 'Particularidades.', ['Tetravalente (4 ligações)','Forma cadeias e liga-se consigo mesmo','Ligações simples, duplas e triplas','Hibridização: sp³ (tetraédrico), sp² (plano), sp (linear)'], 'Por isso há milhões de compostos de carbono.'],
 ['Classificação das cadeias', 'Muito cobrado.', ['**Aberta (acíclica) ou fechada (cíclica)**','**Normal ou ramificada**','**Saturada (ligações simples) ou insaturada**','**Homogênea ou heterogênea (heteroátomo)**','Aromática: anel benzênico'], null]
],
d2:[
 ['Classificação do carbono', 'Por ligações a outros carbonos.', ['Primário: 1 carbono','Secundário: 2','Terciário: 3','Quaternário: 4'], null],
 ['Hidrocarbonetos', 'Só C e H.', ['Alcanos (CnH2n+2), alcenos (CnH2n), alcinos (CnH2n−2)','Ciclanos e aromáticos','Petróleo e gás natural são fontes','Combustíveis e matérias-primas'], null],
 ['Nomenclatura IUPAC', 'Prefixo + infixo + sufixo.', ['Prefixos: met (1), et (2), prop (3), but (4), pent (5), hex (6), hept (7), oct (8), non (9), dec (10)','Infixos: an (simples), en (dupla), in (tripla)','Ramificações: metil, etil...','Numere a cadeia pelo lado mais próximo da ramificação ou da insaturação'], null]
],
ex:[
 { q:'O número de ligações que o carbono faz é:', a:['1','2','3','4','5'], g:'D', c:'Tetravalente.' },
 { q:'O composto CH₃–CH₂–CH₃ é:', a:['metano','etano','propano','butano','eteno'], g:'C', c:'Três carbonos, ligações simples: propano.' }
],
pr:[
 { q:'A fórmula geral dos alcanos é:', a:['CnH2n','CnH2n+2','CnH2n−2','CnHn','C2nH'], g:'B', c:'Saturados de cadeia aberta.' },
 { q:'Um carbono ligado a três outros carbonos é:', a:['primário','secundário','terciário','quaternário','nulo'], g:'C', c:'Classificado pelo número de carbonos vizinhos.' },
 { q:'O prefixo "but" indica quantos carbonos?', a:['2','3','4','5','6'], g:'C', c:'But = 4.' },
 { q:'O petróleo é fonte principal de:', a:['hidrocarbonetos','metais','vitaminas','minerais','cerâmicas'], g:'A', c:'Mistura de hidrocarbonetos.' }
],
erros:['Esquecer a tetravalência do carbono.','Errar prefixos de nomenclatura.','Confundir cadeia saturada e insaturada.','Classificar carbono pelas ligações e não pelos carbonos vizinhos.'],
check:['classificar cadeias carbônicas','classificar carbonos','nomear hidrocarbonetos simples','citar fontes de compostos orgânicos']
}
];
