/* Geografia: temas 1 a 5 */
module.exports = [
{ t:'Cartografia: escalas e projeções',
d1:[
 ['Escala', 'Relação entre o tamanho no mapa e na realidade.', ['**Escala numérica:** 1:100.000 (1 cm no mapa = 100.000 cm = 1 km)','**Escala gráfica:** barra com a medida','**Fórmula:** E = d / D (distância no mapa ÷ distância real)','**Escala grande** (1:1.000): mais detalhe, área menor; **escala pequena** (1:10.000.000): menos detalhe, área maior'], 'Cuidado: escala "grande" tem número menor no denominador.'],
 ['Projeções cartográficas', 'Transformam a esfera em plano e sempre geram distorções.', ['**Cilíndricas (Mercator):** deforma áreas próximas aos polos; boa para navegação','**Cônicas:** boas para latitudes médias','**Azimutais (polares):** boas para regiões polares','**Equivalentes** mantêm áreas; **conformes** mantêm formas; **equidistantes** mantêm distâncias'], 'Em Mercator, a Groenlândia parece maior que a África.'],
 ['Elementos do mapa e tipos', 'O que um mapa precisa ter.', ['Título, legenda, escala, orientação, fonte','**Mapas temáticos:** mostram um tema (clima, população)','**Cartogramas, plantas, cartas topográficas**','**Curvas de nível:** altitude; quanto mais próximas, mais íngreme'], null]
],
d2:[
 ['Orientação', 'Pontos cardeais.', ['Rosa dos ventos: N, S, L, O e colaterais (NE, SE, NO, SO)','Bússola e GPS','Sol nasce no leste e se põe no oeste (aproximadamente)'], null],
 ['Sensoriamento remoto e SIG', 'Tecnologias.', ['Imagens de satélite e fotografias aéreas','**SIG (GIS):** sistema de informação geográfica','Monitoramento de desmatamento, clima, cidades','GPS: localização por satélites'], null],
 ['Leitura de mapas no ENEM', 'Como resolver.', ['Identifique título, legenda e escala','Relacione o tema com a região','Use proporção na escala','Interprete cores e símbolos com cuidado'], null]
],
ex:[
 { q:'Em um mapa de escala 1:500.000, dois pontos distam 4 cm. A distância real é de:', a:['2 km','5 km','20 km','50 km','200 km'], g:'C', c:'4 × 500.000 = 2.000.000 cm = 20 km.' },
 { q:'Qual escala mostra maior detalhe?', a:['1:10.000.000','1:1.000.000','1:100.000','1:10.000','1:50.000.000'], g:'D', c:'Quanto menor o denominador, maior a escala e mais detalhes.' }
],
pr:[
 { q:'A projeção de Mercator distorce principalmente:', a:['regiões próximas ao equador','as áreas próximas aos polos','apenas o Brasil','os oceanos','as distâncias no equador'], g:'B', c:'Áreas polares parecem maiores.' },
 { q:'Curvas de nível muito próximas indicam relevo:', a:['plano','íngreme','inexistente','submarino apenas','desértico'], g:'B', c:'Grande variação de altitude em curta distância.' },
 { q:'Mapas que mostram um tema específico são:', a:['topográficos','temáticos','planisférios','cartas náuticas','globos'], g:'B', c:'Ex.: densidade populacional.' },
 { q:'O SIG serve para:', a:['produzir alimentos','organizar e analisar dados geográficos','navegar apenas','medir temperatura','prever terremotos apenas'], g:'B', c:'Integra mapas e bases de dados.' }
],
erros:['Confundir escala grande com pequena.','Esquecer de converter cm em km.','Achar que o mapa é uma representação sem distorção.','Não ler a legenda.'],
check:['calcular escalas e distâncias','diferenciar projeções','ler curvas de nível','interpretar mapas temáticos']
},

{ t:'Coordenadas geográficas e fusos horários',
d1:[
 ['Paralelos e meridianos', 'Linhas imaginárias.', ['**Paralelos:** círculos paralelos ao equador (latitude, 0° a 90° N/S)','**Meridianos:** semicírculos de polo a polo (longitude, 0° a 180° L/O)','**Equador:** 0° de latitude; **Greenwich:** 0° de longitude','Trópicos de Câncer (23°27′ N) e de Capricórnio (23°27′ S); Círculos Polares (66°33′)'], 'Latitude varia para norte e sul; longitude, para leste e oeste.'],
 ['Coordenadas', 'Localização exata.', ['Ex.: São Paulo ≈ 23° S, 46° O','Latitude indica o clima (zonas térmicas: tropical, temperada, polar)','Brasil está majoritariamente no Hemisfério Sul e Ocidental'], null],
 ['Fusos horários', 'A Terra gira 360° em 24 h.', ['360° ÷ 24 = **15° por fuso (1 hora)**','Leste: horas adiantadas (+); Oeste: atrasadas (−)','Greenwich = GMT/UTC','Linha Internacional de Data: 180°','Brasil: 4 fusos (de −2 a −5 em relação ao UTC); horário de Brasília = UTC−3'], null]
],
d2:[
 ['Cálculo de horas', 'Passo a passo.', ['Calcule a diferença de longitude','Divida por 15 para obter horas','Se o lugar está a leste, some; a oeste, subtraia','Exemplo: Lisboa (0°) está 3 h adiantada em relação a Brasília (≈ 45° O)'], null],
 ['Zonas térmicas e estações', 'Insolação.', ['Rotação: dia e noite','Translação + inclinação do eixo (23°27′): estações do ano','Solstícios e equinócios','Zonas: tropical, temperada e glacial'], null],
 ['Problemas típicos', 'ENEM.', ['Voo e chegada: considere o fuso','Videoconferências entre países','Telejornais ao vivo e transmissões esportivas','Linha de data e "ganhar ou perder um dia"'], null]
],
ex:[
 { q:'Quando é meio-dia em Greenwich (0°), que horas são em uma cidade a 45° O?', a:['9h','10h','12h','15h','21h'], g:'A', c:'45 ÷ 15 = 3 horas a menos: 9h.' },
 { q:'Cada fuso horário abrange:', a:['10°','15°','20°','30°','45°'], g:'B', c:'360° ÷ 24 horas.' }
],
pr:[
 { q:'O meridiano de origem passa por:', a:['Londres (Greenwich)','Paris','Nova Iorque','Brasília','Tóquio'], g:'A', c:'Longitude 0°.' },
 { q:'O Equador separa:', a:['o leste e o oeste','os hemisférios norte e sul','os trópicos','os polos','os continentes'], g:'B', c:'Latitude 0°.' },
 { q:'Uma cidade a leste de Greenwich tem horário:', a:['atrasado','adiantado','igual','sempre noite','indefinido'], g:'B', c:'O Sol nasce primeiro a leste.' },
 { q:'O horário oficial de Brasília equivale a:', a:['UTC+3','UTC−3','UTC+0','UTC−5','UTC+5'], g:'B', c:'Três horas atrás de Greenwich.' }
],
erros:['Somar em vez de subtrair para o oeste.','Esquecer de dividir por 15.','Confundir latitude e longitude.','Ignorar o horário de verão (quando vigora).'],
check:['localizar pontos por coordenadas','calcular diferenças de horário','listar paralelos importantes','relacionar latitude e clima']
},

{ t:'Estrutura geológica e relevo',
d1:[
 ['Estrutura da Terra', 'Camadas.', ['**Crosta** (litosfera): fina e sólida','**Manto:** rochas em movimento lento','**Núcleo** externo (líquido) e interno (sólido)','Placas tectônicas deslizam sobre o manto'], null],
 ['Tipos de rochas', 'Formação.', ['**Ígneas (magmáticas):** magma resfriado (granito, basalto)','**Sedimentares:** acúmulo de sedimentos; contêm fósseis e petróleo (arenito, calcário)','**Metamórficas:** transformação por pressão e temperatura (mármore, gnaisse)'], 'Ciclo das rochas.'],
 ['Tectônica de placas', 'Dinâmica interna.', ['**Convergente:** choque; montanhas e fossas (Andes, Himalaia)','**Divergente:** afastamento; dorsais oceânicas','**Transformante:** deslizam lateralmente (falha de San Andreas)','Terremotos e vulcões nos limites das placas (Círculo de Fogo do Pacífico)'], null]
],
d2:[
 ['Agentes do relevo', 'Forças.', ['**Internos (endógenos):** tectonismo, vulcanismo, abalos sísmicos','**Externos (exógenos):** intemperismo, erosão, ação da água, vento e gelo, e atividade humana'], null],
 ['Formas de relevo', 'Classificação.', ['Montanhas, planaltos, planícies, depressões','**Planalto:** área elevada com predomínio de erosão','**Planície:** área baixa com predomínio de deposição','**Depressão:** abaixo do nível das áreas vizinhas'], null],
 ['Relevo brasileiro', 'Classificação de Jurandyr Ross.', ['Estrutura antiga e estável: escudos cristalinos e bacias sedimentares','Predomínio de planaltos (maior parte) e planícies (Amazônica, do Pantanal, Costeira)','Ausência de grandes dobramentos modernos e de vulcanismo ativo','Serra do Mar e Mantiqueira; Pico da Neblina (ponto mais alto)'], null]
],
ex:[
 { q:'As cadeias montanhosas dobradas modernas, como os Andes, resultam de:', a:['erosão eólica','choque entre placas tectônicas','deposição de sedimentos','ação do gelo apenas','vulcões submarinos'], g:'B', c:'Limite convergente.' },
 { q:'As rochas sedimentares são importantes porque:', a:['são as únicas com minerais','abrigam fósseis e combustíveis como o petróleo','não existem no Brasil','são sempre magmáticas','só ocorrem no fundo do mar'], g:'B', c:'Bacias sedimentares guardam petróleo e gás.' }
],
pr:[
 { q:'O Brasil não sofre grandes terremotos e vulcanismo porque:', a:['está no Círculo de Fogo','fica no interior da placa Sul-Americana, em área estável','tem muitos vulcões','é plano demais','não tem rochas'], g:'B', c:'Longe dos limites de placas.' },
 { q:'O granito é uma rocha:', a:['sedimentar','magmática','metamórfica','orgânica','sintética'], g:'B', c:'Resfriamento do magma.' },
 { q:'O mármore é uma rocha:', a:['ígnea','metamórfica','sedimentar','vegetal','arenosa'], g:'B', c:'Derivado do calcário.' },
 { q:'O processo de desgaste e transporte de materiais do relevo chama-se:', a:['tectonismo','erosão','vulcanismo','orogênese','sismologia'], g:'B', c:'Agente externo.' }
],
erros:['Dizer que o Brasil tem montanhas jovens.','Confundir planalto com planície.','Misturar agentes internos e externos.','Esquecer do ciclo das rochas.'],
check:['listar camadas da Terra','classificar rochas','explicar a tectônica de placas','descrever o relevo brasileiro']
},

{ t:'Solos e erosão',
d1:[
 ['Formação do solo', 'Intemperismo sobre a rocha-mãe.', ['Fatores: rocha, clima, relevo, organismos e tempo','Intemperismo físico, químico e biológico','Perfil: horizontes A (húmus), B, C e rocha-mãe','Clima quente e úmido acelera a formação'], null],
 ['Tipos de solos no Brasil', 'Exemplos.', ['**Latossolos:** profundos, ácidos e pobres em nutrientes; maioria no país (Cerrado e Amazônia)','**Terra roxa:** fértil, de origem basáltica (café, sul de SP e norte do PR)','**Massapé:** argiloso e fértil, no litoral do Nordeste (cana)','**Solos arenosos** e **aluviais**'], 'Solos da Amazônia são pobres: os nutrientes estão na serrapilheira.'],
 ['Erosão', 'Perda de solo.', ['Causas naturais e humanas','**Laminar** (camada fina) e **voçoroca** (grande ravina)','Desmatamento, monocultura, pastoreio excessivo, queimadas, ocupação urbana desordenada','Assoreamento de rios'], null]
],
d2:[
 ['Conservação', 'Técnicas.', ['**Curvas de nível (terraceamento)**','**Plantio direto** e rotação de culturas','Cobertura vegetal, adubação verde','Matas ciliares','Pousio'], null],
 ['Desertificação e salinização', 'Degradação.', ['Desertificação em áreas áridas e semiáridas (Nordeste brasileiro: Seridó)','Salinização por irrigação mal manejada','Compactação do solo por máquinas'], null],
 ['Agricultura e meio ambiente', 'Impactos.', ['Agrotóxicos e contaminação','Agricultura orgânica e agroecologia','Fertilizantes e eutrofização','Uso sustentável'], null]
],
ex:[
 { q:'A técnica de plantio em curvas de nível serve para:', a:['aumentar a erosão','reduzir a erosão e reter água no solo','drenar pântanos','eliminar a matéria orgânica','expor o solo'], g:'B', c:'Diminui a velocidade da água.' },
 { q:'O solo fértil conhecido como terra roxa tem origem em:', a:['rochas basálticas','dunas','sedimentos de rios apenas','gelo','cinzas vulcânicas atuais'], g:'A', c:'Decomposição do basalto.' }
],
pr:[
 { q:'A voçoroca é:', a:['uma árvore','uma grande ravina causada por erosão','um tipo de rocha','um rio','um clima'], g:'B', c:'Estágio avançado de erosão.' },
 { q:'A matéria orgânica em decomposição forma o:', a:['húmus','basalto','magma','sal','gelo'], g:'A', c:'Aumenta a fertilidade.' },
 { q:'O assoreamento é o:', a:['aumento de profundidade do rio','acúmulo de sedimentos no leito dos rios','secagem de lagos apenas','corte de árvores','vulcanismo'], g:'B', c:'Consequência da erosão.' },
 { q:'O Nordeste brasileiro tem áreas de risco de:', a:['glaciação','desertificação','aurora boreal','tsunami frequente','vulcanismo'], g:'B', c:'Semiárido, como o Seridó.' }
],
erros:['Dizer que o solo amazônico é fértil.','Achar que erosão é só natural.','Esquecer das práticas de conservação.','Confundir intemperismo e erosão.'],
check:['explicar a formação dos solos','citar tipos de solos do Brasil','descrever tipos e causas de erosão','indicar técnicas de conservação']
},

{ t:'Clima: fatores e elementos',
d1:[
 ['Tempo e clima', 'Diferença.', ['**Tempo atmosférico:** estado momentâneo da atmosfera','**Clima:** padrão do tempo em longo período (30 anos ou mais)','**Elementos:** temperatura, umidade, pressão, ventos, precipitação','**Fatores:** latitude, altitude, continentalidade/maritimidade, correntes marítimas, massas de ar, relevo, vegetação'], null],
 ['Fatores climáticos', 'Detalhes.', ['**Latitude:** quanto menor, mais quente','**Altitude:** cerca de 0,6 °C a menos a cada 100 m','**Maritimidade:** mares moderam a temperatura; **continentalidade:** grandes amplitudes térmicas','**Correntes marítimas:** quentes (Brasil, Golfo) e frias (Humboldt, Benguela)','**Massas de ar** e **relevo**'], 'Corrente fria reduz a evaporação e a chuva (desertos costeiros).'],
 ['Circulação atmosférica', 'Pressão e ventos.', ['Ventos vão da alta pressão (ar frio e seco) para a baixa (ar quente e úmido)','Alísios, ventos de oeste, polares','Zona de Convergência Intertropical','Frentes: fria (chuva forte) e quente'], null]
],
d2:[
 ['Tipos de chuvas', 'Origem.', ['**Convectiva (de convecção):** aquecimento do ar, comum em regiões equatoriais','**Orográfica (de relevo):** ar sobe a serra','**Frontal:** encontro de massas de ar'], null],
 ['Classificação climática', 'Principais.', ['Equatorial, tropical, semiárido, subtropical','Temperado, mediterrâneo, desértico','Polar e de montanha','Climogramas: temperatura e chuva ao longo do ano'], null],
 ['Fenômenos', 'Cotidiano.', ['Inversão térmica (poluição)','Ilha de calor (cidades)','El Niño e La Niña','Efeito estufa e aquecimento'], null]
],
ex:[
 { q:'A chuva orográfica ocorre quando:', a:['o ar quente sobe após se aquecer','o ar úmido sobe uma serra e se resfria','duas massas de ar se encontram','o vento muda de direção','não há vapor'], g:'B', c:'Chuvas na vertente voltada ao mar.' },
 { q:'Cada 100 m de altitude, a temperatura diminui em média cerca de:', a:['0,1 °C','0,6 °C','3 °C','10 °C','20 °C'], g:'B', c:'Gradiente térmico vertical.' }
],
pr:[
 { q:'A diferença entre tempo e clima é:', a:['não há diferença','tempo é momentâneo e clima é padrão de longo prazo','clima é diário','tempo é anual','clima é o vento'], g:'B', c:'Escalas de observação.' },
 { q:'Em áreas costeiras, a amplitude térmica é geralmente:', a:['maior que no interior','menor, pela maritimidade','nula','igual','variável sem causa'], g:'B', c:'O mar modera.' },
 { q:'A inversão térmica agrava:', a:['a poluição do ar','o frio no equador','a chuva','os rios','os vulcões'], g:'A', c:'O ar frio fica preso perto do solo.' },
 { q:'As correntes frias nas costas desérticas causam:', a:['chuva intensa','aridez','neve','furacões','nada'], g:'B', c:'Menor evaporação.' }
],
erros:['Confundir tempo e clima.','Dizer que a altitude aumenta a temperatura.','Esquecer das correntes marítimas.','Misturar tipos de chuva.'],
check:['listar fatores e elementos do clima','explicar os tipos de chuva','relacionar altitude e temperatura','interpretar climogramas']
}
];
