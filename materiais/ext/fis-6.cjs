/* Física: temas 21 a 25 */
module.exports = [
{ t:'Magnetismo e eletromagnetismo',
d1:[
 ['Ímãs e campo magnético', 'Ímãs atraem materiais como ferro, níquel e cobalto e geram um campo magnético ao redor.', ['**Polos:** norte e sul. Polos iguais se repelem; polos diferentes se atraem','**Inseparabilidade:** ao quebrar um ímã, cada pedaço tem dois polos','As linhas de campo saem do polo norte e chegam ao sul (fora do ímã)','**Terra:** é um grande ímã; o polo sul magnético fica perto do polo norte geográfico (por isso a bússola aponta para o norte)'], 'O norte da agulha da bússola aponta para o polo norte geográfico, que é o polo sul magnético da Terra.'],
 ['Campo magnético gerado por corrente', 'Experiência de Oersted: uma corrente elétrica gera campo magnético.', ['**Fio reto:** linhas circulares em torno do fio (regra da mão direita: polegar na corrente, dedos no campo)','**Espira circular e solenoide (bobina):** campo semelhante ao de um ímã','O campo é mais intenso quanto maior a corrente','**Eletroímã:** solenoide com núcleo de ferro (guindastes, campainhas, trens de levitação)'], null],
 ['Força magnética', 'Cargas em movimento e fios com corrente sofrem força em campos magnéticos.', ['**Sobre uma carga:** F = q·v·B·sen θ (perpendicular à velocidade e ao campo)','**Sobre um fio:** F = B·i·L·sen θ','A força magnética não realiza trabalho sobre a carga: muda a direção, não o módulo da velocidade','Carga em campo uniforme perpendicular: movimento circular'], null]
],
d2:[
 ['Indução eletromagnética', 'Um campo magnético variável gera corrente elétrica (descoberta de Faraday).', ['**Fluxo magnético:** quantidade de linhas de campo atravessando uma superfície','**Lei de Faraday:** a tensão induzida é proporcional à rapidez da variação do fluxo','**Lei de Lenz:** a corrente induzida cria um campo que se opõe à variação que a causou','Aproximar um ímã de uma bobina gera corrente; ímã parado não gera'], 'É o princípio dos geradores, transformadores e carregadores por indução.'],
 ['Transformadores', 'Mudam o valor da tensão alternada.', ['Duas bobinas (primária e secundária) em um núcleo de ferro','**Up/Us = Np/Ns** (tensão proporcional ao número de espiras)','**Elevador:** mais espiras no secundário; **abaixador:** menos','Funciona só com corrente alternada','Potência (ideal) conservada: Up·ip = Us·is'], null],
 ['Aplicações no cotidiano', 'Muita tecnologia depende do eletromagnetismo.', ['**Motor elétrico:** força magnética sobre fios com corrente gera rotação','**Gerador (dínamo, alternador):** movimento em campo magnético gera corrente','**Alto-falantes, microfones e cartões magnéticos**','**Trens de levitação magnética** e **ressonância magnética** (medicina)','**Cintilação das auroras:** partículas desviadas pelo campo da Terra'], null]
],
ex:[
 { q:'Um transformador tem 100 espiras no primário e 500 no secundário. Se a tensão no primário é de 120 V, qual a tensão no secundário?', a:['24 V','120 V','240 V','500 V','600 V'], g:'E', c:'Up/Us = Np/Ns → 120/Us = 100/500 → Us = 120 × 5 = 600 V.' },
 { q:'Ao aproximar um ímã de uma bobina conectada a um galvanômetro, o instrumento acusa passagem de corrente. Esse fenômeno é explicado pela:', a:['lei de Coulomb','lei de Ohm','indução eletromagnética','refração','conservação da massa'], g:'C', c:'A variação do fluxo magnético na bobina induz uma corrente elétrica: lei de Faraday.' }
],
pr:[
 { q:'Se dois ímãs são aproximados com seus polos norte frente a frente, eles:', a:['se atraem','se repelem','não interagem','se anulam','giram sem se tocar'], g:'B', c:'Polos iguais se repelem.' },
 { q:'A experiência de Oersted mostrou que:', a:['cargas em repouso geram campo magnético','uma corrente elétrica gera campo magnético','ímãs geram corrente sempre','a Terra não tem campo magnético','a luz é onda mecânica'], g:'B', c:'Oersted observou que a agulha de uma bússola se desviava ao lado de um fio com corrente.' },
 { q:'Um transformador abaixador reduz a tensão. Para isso, o número de espiras do secundário deve ser:', a:['maior que o do primário','igual ao do primário','menor que o do primário','nulo','infinito'], g:'C', c:'Us/Up = Ns/Np: para Us < Up, é necessário Ns < Np.' },
 { q:'A bússola aponta para o norte geográfico porque:', a:['a Terra tem um polo sul magnético próximo ao polo norte geográfico','a Terra tem um polo norte magnético no norte geográfico','o Sol atrai a agulha','a gravidade atrai a agulha','as nuvens a orientam'], g:'A', c:'O polo norte da agulha é atraído pelo polo sul magnético da Terra, que fica próximo ao polo norte geográfico.' }
],
erros:['Dizer que a força magnética altera o módulo da velocidade (ela só desvia).','Achar que ímã parado dentro de uma bobina gera corrente (precisa variar o fluxo).','Usar transformador com corrente contínua.','Confundir polo norte geográfico com polo norte magnético da Terra.'],
check:['descrever polos e campos magnéticos','explicar a experiência de Oersted','explicar indução e a lei de Faraday','aplicar Up/Us = Np/Ns']
},

{ t:'Geração de energia elétrica',
d1:[
 ['Como se gera eletricidade', 'A maioria das usinas gira uma turbina que movimenta um gerador (indução eletromagnética).', ['**Turbina:** é girada por água, vapor, vento ou gases','**Gerador (alternador):** converte energia mecânica em elétrica','Transformador eleva a tensão para a transmissão e abaixa para o consumo','**Corrente alternada** de 60 Hz no Brasil'], 'A energia não é "criada": é transformada de uma forma em outra.'],
 ['Hidrelétricas', 'Principal fonte do Brasil.', ['Energia potencial da água → cinética → mecânica na turbina → elétrica no gerador','Vantagens: renovável, baixa emissão de gases no uso, armazenamento em reservatório','Desvantagens: áreas alagadas, impactos em populações e na fauna, alteração de rios','Depende de chuvas: seca reduz a geração'], null],
 ['Termelétricas e usinas nucleares', 'Usam calor para gerar vapor.', ['**Termelétrica:** queima de carvão, gás ou óleo; emite CO₂','**Nuclear:** fissão de urânio libera calor; sem emissão de CO₂ no uso, mas gera rejeitos radioativos e exige segurança','**Biomassa:** queima de bagaço de cana, lenha e resíduos; ciclo de carbono mais neutro','Vapor gira turbinas; condensação exige grande quantidade de água'], null]
],
d2:[
 ['Fontes renováveis alternativas', 'Cada vez mais presentes na matriz.', ['**Eólica:** vento gira pás; intermitente; grande potencial no Nordeste','**Solar fotovoltaica:** células convertem luz em eletricidade; **solar térmica:** aquece água','**Geotérmica, maré (maremotriz) e ondas:** uso limitado','Fontes intermitentes exigem armazenamento (baterias) ou complementação'], 'Matriz energética brasileira: forte participação de fontes renováveis (hidrelétrica, biomassa, eólica).'],
 ['Transmissão e distribuição', 'Da usina à tomada.', ['Alta tensão nas linhas de transmissão reduz a corrente e as perdas por efeito Joule (P = R·i²)','Subestações abaixam a tensão para a distribuição urbana','Perdas: parte da energia é dissipada em calor nos fios','Redes inteligentes (smart grids) e geração distribuída (painéis em casas)'], null],
 ['Impactos e escolhas', 'Questões típicas de interpretação do ENEM.', ['Compare impactos ambientais, custo, confiabilidade e disponibilidade','Combustíveis fósseis: emissões e aquecimento global','Matriz limpa × segurança do abastecimento','Eficiência energética é a "fonte" mais barata: gastar menos'], null]
],
ex:[
 { q:'A principal razão para transmitir energia elétrica a longas distâncias em alta tensão é:', a:['aumentar a corrente','reduzir as perdas por efeito Joule nos fios','aumentar a potência da usina','diminuir a frequência','criar corrente contínua'], g:'B', c:'Com tensão alta, para a mesma potência a corrente é menor. As perdas (R·i²) diminuem.' },
 { q:'Em uma usina hidrelétrica, a sequência correta de transformações de energia é:', a:['elétrica, mecânica, potencial gravitacional','potencial gravitacional, cinética, elétrica','térmica, mecânica, elétrica','química, térmica, elétrica','nuclear, térmica, elétrica'], g:'B', c:'Água represada (potencial gravitacional) → água em movimento (cinética), gira a turbina e o gerador → energia elétrica.' }
],
pr:[
 { q:'Uma desvantagem das usinas hidrelétricas é:', a:['a emissão de grande quantidade de CO₂','o alagamento de grandes áreas e os impactos ambientais','a geração de rejeitos radioativos','a dependência do vento','a necessidade de queima de carvão'], g:'B', c:'Os reservatórios alagam grandes áreas e causam impactos em fauna, flora e populações.' },
 { q:'A energia eólica é considerada intermitente porque:', a:['só funciona à noite','depende da presença de vento','depende de chuva','emite muito CO₂','usa combustíveis fósseis'], g:'B', c:'A geração depende do vento, que varia ao longo do tempo.' },
 { q:'Em usinas termelétricas a carvão, o vapor de água gira a turbina, que movimenta o gerador. A fonte de calor é:', a:['a queima do carvão','a fissão do urânio','a água represada','a luz do Sol','o vento'], g:'A', c:'O calor da queima do carvão evapora a água, e o vapor gira a turbina.' },
 { q:'As usinas nucleares geram energia a partir da:', a:['fusão de átomos de hidrogênio','fissão de núcleos pesados, como o urânio','queima de petróleo','radiação solar direta','queda de água'], g:'B', c:'Nas usinas nucleares comerciais, a fissão do urânio libera calor, que produz vapor.' }
],
erros:['Dizer que a usina "produz" energia do nada (ela transforma).','Confundir fissão (quebra de núcleos) com fusão (união de núcleos).','Esquecer das perdas na transmissão.','Achar que fonte renovável é isenta de qualquer impacto.'],
check:['descrever a sequência de transformações de energia nas principais usinas','comparar vantagens e desvantagens de cada fonte','explicar a transmissão em alta tensão','relacionar eficiência energética a impacto ambiental']
},

{ t:'Ondas eletromagnéticas',
d1:[
 ['O que são', 'Ondas formadas por campos elétrico e magnético que variam e se propagam, inclusive no vácuo.', ['São transversais','Velocidade no vácuo: c = 3 × 10⁸ m/s (a mesma para todas)','Equação: c = λ · f','Transportam energia, sem meio material','Descobertas por Maxwell e comprovadas por Hertz'], null],
 ['Espectro eletromagnético', 'Das menores às maiores frequências.', ['**Ondas de rádio** (menor frequência): rádio, TV, celular','**Micro-ondas:** fornos, radar, Wi-Fi, satélites','**Infravermelho:** calor, controle remoto','**Luz visível:** do vermelho ao violeta (cerca de 400 a 700 nm)','**Ultravioleta:** bronzeamento, esterilização','**Raios X:** radiografias','**Raios gama** (maior frequência): radioterapia, núcleos radioativos'], 'Quanto maior a frequência, maior a energia da onda e menor o comprimento de onda.'],
 ['Luz visível e cores', 'A luz branca é a soma das cores.', ['**Dispersão:** o prisma separa a luz branca (arco-íris)','**Cor de um objeto:** a que ele reflete; absorve as demais','Objeto branco reflete todas; preto absorve todas','**Cores primárias de luz:** vermelho, verde e azul (RGB); de pigmento: ciano, magenta e amarelo','Frequência define a cor; vermelha tem a menor frequência na faixa visível'], null]
],
d2:[
 ['Aplicações e tecnologia', 'Cada faixa tem usos específicos.', ['**Rádio e TV:** transmissão por ondas de rádio; AM e FM','**Micro-ondas:** aquecem alimentos (água absorve) e levam dados (Wi-Fi, celular)','**Infravermelho:** câmeras térmicas, visão noturna','**Raios X:** imagem de ossos; **radiação gama:** esterilização de materiais e tratamento do câncer','**Ultravioleta:** esteriliza água e superfícies'], 'Celular, Wi-Fi e Bluetooth usam ondas eletromagnéticas de baixa energia.'],
 ['Riscos e proteção', 'Radiações de alta energia exigem cuidado.', ['**Radiação ionizante** (UV forte, raios X, gama): pode danificar o DNA','**Radiação não ionizante** (rádio, micro-ondas, luz): em níveis comuns, sem dano ao DNA','Protetor solar, chapéu e óculos contra UV','Avental de chumbo em exames de raios X','Camada de ozônio filtra grande parte do ultravioleta'], null],
 ['Interação com a matéria', 'Reflexão, absorção e transmissão.', ['**Atmosfera:** transparente à luz visível e a algumas ondas de rádio; absorve parte de UV e infravermelho','**Efeito estufa:** CO₂ e vapor-d\'água absorvem infravermelho','**Células fotovoltaicas:** luz gera corrente (efeito fotoelétrico)','Paredes bloqueiam o Wi-Fi mais que o rádio FM'], null]
],
ex:[
 { q:'Uma estação de rádio emite ondas de frequência 100 MHz. Qual o comprimento de onda dessas ondas? (c = 3 × 10⁸ m/s)', a:['0,3 m','3 m','30 m','300 m','3.000 m'], g:'B', c:'λ = c/f = 3 × 10⁸ / 10⁸ = 3 m.' },
 { q:'Qual das radiações abaixo tem maior energia?', a:['ondas de rádio','micro-ondas','luz visível','raios X','infravermelho'], g:'D', c:'Entre as listadas, os raios X têm a maior frequência e, portanto, a maior energia.' }
],
pr:[
 { q:'Um objeto que aparece vermelho à luz do dia:', a:['absorve a luz vermelha e reflete as demais','reflete a luz vermelha e absorve as demais','emite luz vermelha','transmite todas as cores','absorve todas as cores'], g:'B', c:'A cor de um objeto é a luz que ele reflete: o vermelho reflete vermelho e absorve as outras cores.' },
 { q:'As micro-ondas e a luz visível diferem em:', a:['velocidade no vácuo','natureza (uma é mecânica)','frequência e comprimento de onda','serem ondas transversais','necessidade de meio'], g:'C', c:'Ambas são ondas eletromagnéticas, com mesma velocidade no vácuo (c); diferem na frequência e no comprimento de onda.' },
 { q:'O uso de avental de chumbo durante radiografias é para proteger contra:', a:['ondas de rádio','raios X','som','luz visível','infravermelho'], g:'B', c:'O chumbo absorve os raios X, protegendo partes do corpo que não devem ser expostas.' },
 { q:'A cor da luz visível está relacionada à sua:', a:['amplitude','velocidade no vácuo','frequência','polarização apenas','massa'], g:'C', c:'Cada cor corresponde a uma faixa de frequência: vermelha tem frequência menor e violeta, maior.' }
],
erros:['Achar que o som e a luz são do mesmo tipo de onda (o som é mecânico).','Dizer que a luz precisa de meio para se propagar.','Achar que toda radiação é prejudicial: depende do tipo e da dose.','Trocar as cores primárias de luz e de pigmento.'],
check:['ordenar o espectro eletromagnético por frequência e energia','aplicar c = λ·f','explicar a cor dos objetos','associar radiações a aplicações e riscos']
},

{ t:'Física moderna',
d1:[
 ['Crise da física clássica', 'No fim do século XIX, alguns fenômenos não eram explicados pela física clássica e levaram à física moderna.', ['**Radiação do corpo negro:** Planck propôs que a energia é emitida em pacotes (quanta)','**Efeito fotoelétrico:** a luz arranca elétrons de metais; Einstein explicou com fótons','**Espectros atômicos:** átomos emitem luz em frequências específicas','Resultado: relatividade e mecânica quântica'], null],
 ['Efeito fotoelétrico e fótons', 'A luz também se comporta como partícula.', ['**Energia do fóton: E = h · f** (h é a constante de Planck)','O efeito só ocorre se f ≥ frequência mínima (limiar), independentemente da intensidade','Aumentar a intensidade aumenta o número de elétrons ejetados, não a energia de cada um','**Aplicações:** painéis solares, sensores de portas, câmeras digitais'], 'Dualidade onda-partícula: a luz e a matéria apresentam comportamento de onda e de partícula.'],
 ['Relatividade restrita', 'Einstein (1905): as leis da física são as mesmas para observadores em movimento uniforme e a velocidade da luz é constante.', ['**Dilatação do tempo:** o tempo passa mais devagar para quem se move em velocidades próximas à da luz','**Contração do comprimento** na direção do movimento','**Equivalência massa-energia: E = m · c²**','Nenhum corpo com massa atinge a velocidade da luz','GPS corrige efeitos relativísticos'], null]
],
d2:[
 ['Mecânica quântica e modelo atômico', 'No mundo atômico, grandezas são quantizadas e há incerteza.', ['**Níveis de energia quantizados:** elétrons ocupam estados discretos','**Salto quântico:** ao descer de nível, o elétron emite um fóton de energia igual à diferença entre os níveis','**Princípio da incerteza (Heisenberg):** não se pode conhecer com precisão simultânea posição e velocidade de uma partícula','**Dualidade onda-partícula** (De Broglie)'], null],
 ['Física nuclear e radioatividade', 'Tudo sobre o núcleo.', ['**Fissão:** núcleo pesado se divide e libera energia (usinas e bombas nucleares)','**Fusão:** núcleos leves se unem (Sol e estrelas)','**Radioatividade:** emissão de partículas alfa (α), beta (β) e radiação gama (γ)','**Meia-vida:** tempo para a atividade cair à metade','Aplicações: medicina nuclear, datação por carbono-14, usinas'], 'E = m·c² explica a enorme energia liberada: uma pequena massa vira muita energia.'],
 ['Aplicações tecnológicas', 'A física moderna está no dia a dia.', ['**Lasers:** leitura de dados, cirurgias, comunicações','**LEDs e semicondutores:** computadores, celulares, painéis','**Ressonância magnética e PET scan** (medicina)','**GPS e relógios atômicos**','**Células fotovoltaicas e fibra óptica**'], null]
],
ex:[
 { q:'No efeito fotoelétrico, ao aumentar apenas a intensidade da luz incidente (mantida a frequência acima do limiar), observa-se:', a:['aumento da energia de cada elétron ejetado','aumento do número de elétrons ejetados','diminuição da frequência','nenhum elétron ejetado','aumento da função trabalho'], g:'B', c:'Mais intensidade significa mais fótons por segundo, logo mais elétrons ejetados. A energia de cada elétron depende da frequência.' },
 { q:'A equação de Einstein E = m·c² expressa que:', a:['a massa se transforma em movimento apenas','massa e energia são equivalentes','a velocidade da luz depende da massa','a energia é sempre constante','a luz tem massa em repouso'], g:'B', c:'A equação mostra a equivalência entre massa e energia: pequenas variações de massa correspondem a grandes quantidades de energia.' }
],
pr:[
 { q:'A meia-vida de um elemento radioativo é de 5 anos. De uma amostra de 80 g, quanto restará após 15 anos?', a:['5 g','10 g','20 g','40 g','60 g'], g:'B', c:'15 anos = 3 meias-vidas: 80 → 40 → 20 → 10 g.' },
 { q:'A energia de um fóton é proporcional à sua:', a:['amplitude','frequência','massa de repouso','velocidade no vácuo','intensidade'], g:'B', c:'E = h·f: a energia do fóton é diretamente proporcional à frequência.' },
 { q:'A fusão nuclear é o processo que ocorre:', a:['nas usinas nucleares comerciais','no interior do Sol e das estrelas','na queima de carvão','na eletrólise da água','na reação química do hidrogênio'], g:'B', c:'No Sol, núcleos de hidrogênio se fundem em hélio, liberando energia.' },
 { q:'Qual das radiações emitidas por núcleos radioativos é uma onda eletromagnética?', a:['alfa','beta','gama','nêutrons','prótons'], g:'C', c:'A radiação gama é eletromagnética; alfa e beta são partículas.' }
],
erros:['Dizer que a luz é só onda ou só partícula (ela apresenta os dois comportamentos).','Confundir fissão com fusão.','Achar que a energia do elétron ejetado aumenta com a intensidade da luz.','Achar que radioatividade só existe em usinas (existe na natureza e na medicina).'],
check:['explicar o efeito fotoelétrico e a dualidade onda-partícula','usar E = h·f e E = m·c² em nível conceitual','diferenciar fissão e fusão','aplicar meia-vida']
},

{ t:'Física no cotidiano e tecnologia',
d1:[
 ['Como o ENEM cobra', 'Questões ligam os conceitos a situações reais e tecnologia.', ['Leia o texto ou a situação com calma e identifique qual fenômeno aparece','Reconheça o assunto: força, energia, calor, ondas, eletricidade, ótica','Use as relações simples vistas nos temas anteriores','Faça estimativas e confira as unidades'], 'Quase toda questão de Física do ENEM pode ser resolvida com poucas fórmulas e muito raciocínio.'],
 ['Segurança no trânsito', 'Cinemática, forças e energia em ação.', ['**Velocidade e frenagem:** distância de parada cresce com o quadrado da velocidade','**Cinto e airbag:** aumentam o tempo de desaceleração (impulso)','**Pneus e atrito:** pista molhada reduz o atrito','**Radar:** medição de velocidade por efeito Doppler','**Tempo de reação:** distância percorrida antes de frear'], null],
 ['Eletrodomésticos e casa', 'Calor, eletricidade e ondas.', ['**Chuveiro:** efeito Joule; verão e inverno mudam a resistência usada','**Geladeira e ar-condicionado:** máquinas térmicas ao contrário','**Forno micro-ondas:** ondas eletromagnéticas agitam as moléculas de água','**Panelas, garrafas térmicas e isolamento**','**Lâmpadas LED:** menor consumo para a mesma luz'], null]
],
d2:[
 ['Energia e meio ambiente', 'Escolhas energéticas e consumo.', ['**Conversões de energia:** química → térmica → mecânica → elétrica (usinas)','**Matriz energética:** fontes renováveis × não renováveis','**Aquecimento global e efeito estufa**','**Eficiência:** substituir aparelhos antigos economiza energia','**Reciclagem e consumo consciente**'], null],
 ['Comunicação e tecnologia', 'Ondas e circuitos no dia a dia.', ['**Telefonia celular e Wi-Fi:** ondas de rádio e micro-ondas','**GPS:** satélites, tempo e relatividade','**Fibra óptica:** reflexão total','**Câmeras, telas e sensores:** luz, semicondutores e efeito fotoelétrico','**Radar e sonar:** eco e ondas'], null],
 ['Saúde e medicina', 'A Física presente em exames e tratamentos.', ['**Raios X, tomografia e ressonância magnética**','**Ultrassom:** imagem por ondas sonoras de alta frequência','**Radioterapia e medicina nuclear**','**Lasers em cirurgias**','**Termômetros e oxímetros:** radiação infravermelha e luz'], null]
],
ex:[
 { q:'Um carro com motorista em velocidade acima do limite tem maior distância de frenagem porque:', a:['a massa aumenta','a energia cinética aumenta com o quadrado da velocidade','o atrito aumenta','a gravidade aumenta','a normal diminui'], g:'B', c:'A energia cinética cresce com v². Para parar, o freio precisa dissipar essa energia em uma distância maior.' },
 { q:'Um forno micro-ondas aquece alimentos principalmente porque as ondas:', a:['aquecem o ar do forno','fazem as moléculas de água do alimento vibrarem','aquecem o prato apenas','ionizam o alimento','refletem no vidro'], g:'B', c:'As micro-ondas fazem as moléculas de água (polares) oscilarem, aumentando a agitação térmica e aquecendo o alimento.' }
],
pr:[
 { q:'Em um chuveiro elétrico, o aquecimento da água é um exemplo de:', a:['efeito Joule','indução eletromagnética','efeito fotoelétrico','reflexão total','dilatação linear'], g:'A', c:'A corrente aquece a resistência (efeito Joule), que transfere calor à água.' },
 { q:'A tecnologia de GPS depende de:', a:['somente ondas sonoras','satélites, sinais eletromagnéticos e correções relativísticas','fibras ópticas apenas','campos magnéticos apenas','radares de trânsito'], g:'B', c:'O GPS usa sinais de rádio de satélites e precisa corrigir os efeitos da relatividade sobre os relógios.' },
 { q:'O exame de ultrassonografia utiliza:', a:['raios X','ondas eletromagnéticas gama','ondas sonoras de alta frequência','campos magnéticos intensos','radiação infravermelha'], g:'C', c:'A ultrassonografia usa ultrassom (ondas mecânicas de frequência acima de 20 kHz) e o eco para formar imagens.' },
 { q:'Substituir lâmpadas incandescentes por LED reduz o consumo porque:', a:['o LED tem maior potência','o LED converte mais energia elétrica em luz e menos em calor','a tensão diminui','o LED não usa energia','a tensão aumenta'], g:'B', c:'O LED é mais eficiente: transforma maior fração da energia elétrica em luz e menos em calor.' }
],
erros:['Decorar fórmulas sem entender o fenômeno (interprete o texto primeiro).','Misturar unidades ou esquecer de converter.','Ignorar o contexto e escolher a alternativa "mais técnica".','Esquecer que energia se conserva e se transforma.'],
check:['identificar o fenômeno físico em uma situação real','associar tecnologias aos conceitos de ondas, eletricidade e energia','estimar ordens de grandeza','argumentar sobre impactos e escolhas energéticas']
}
];
