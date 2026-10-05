/* Geografia: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.geo = { id:'geo', nome:'Geografia', icone:'🌎', emojis:'🌎 🗺️ 🏙️ 🌋',
capa:'linear-gradient(160deg,#06334a,#0f6f8f 55%,#55c2b0)',
temas:[
{ t:'Cartografia: escalas e projeções', p:'a', ic:'🗺️', s:[
  ['Escala', null, ['**Numérica:** 1 : 100.000 (1 cm no mapa = 100.000 cm = 1 km no real)','**Gráfica:** uma barra com as distâncias'], 'Escala grande = área pequena com muitos detalhes. Escala pequena = área grande com poucos detalhes.'],
  ['Projeções cartográficas', 'Toda projeção distorce algo, porque a Terra é quase esférica.', ['**Mercator:** mantém as formas, distorce as áreas (Europa parece maior)','**Peters:** mantém as áreas, distorce as formas'], null],
  ['Visão crítica', 'A escolha da projeção pode refletir uma visão de mundo, como a centralidade da Europa.', null, null]
], enem:'Cálculo de distâncias com escala e a crítica à projeção de Mercator (eurocentrismo).' },

{ t:'Coordenadas geográficas e fusos horários', p:'a', ic:'🧭', s:[
  ['Coordenadas', null, ['**Latitude:** distância em graus até o Equador (0° a 90° norte ou sul)','**Longitude:** distância em graus até o meridiano de Greenwich (0° a 180° leste ou oeste)'], null],
  ['Fusos horários', 'A Terra gira 360° em 24 horas → **15° = 1 hora**.', ['Para leste: horas adiantadas','Para oeste: horas atrasadas'], 'Exemplo: 45° a leste → 3 horas a mais.'],
  ['Fusos no Brasil', 'O Brasil tem 4 fusos horários, e o horário de Brasília é a referência oficial.', null, null]
], enem:'Cálculos de fuso horário em viagens e transmissões ao vivo são clássicos.' },

{ t:'Estrutura geológica e relevo', p:'m', ic:'⛰️', s:[
  ['Agentes internos', null, ['**Tectonismo:** movimento das placas tectônicas','**Vulcanismo**','**Terremotos:** ocorrem principalmente nos limites das placas'], 'O Brasil está no centro de uma placa, por isso tem poucos terremotos fortes.'],
  ['Agentes externos', 'Modelam o relevo:', ['Água (erosão pluvial e fluvial)','Vento (erosão eólica)','Seres humanos (desmatamento, obras)'], null],
  ['Formas de relevo', null, ['Planaltos: desgaste supera a deposição','Planícies: deposição de sedimentos','Depressões: áreas mais baixas que o entorno'], null]
], enem:'Por que o Brasil tem poucos terremotos e o papel da erosão na formação do relevo.' },

{ t:'Solos e erosão', p:'m', ic:'🌱', s:[
  ['Formação do solo', 'O solo se forma pelo intemperismo (desgaste) das rochas, com ação do clima e de seres vivos.', null, null],
  ['Problemas', null, ['**Erosão:** retirada do solo pela água e pelo vento','**Voçorocas:** grandes rasgos no terreno','**Lixiviação:** lavagem dos nutrientes pela chuva','**Assoreamento:** acúmulo de sedimentos nos rios','**Desertificação:** degradação em áreas secas'], null],
  ['Conservação', null, ['Plantio em curvas de nível','Terraceamento','Rotação de culturas','Manter a mata ciliar','Plantio direto'], null]
], enem:'Práticas de conservação do solo e a relação entre desmatamento e assoreamento.' },

{ t:'Clima: fatores e elementos', p:'a', ic:'🌦️', s:[
  ['Tempo x clima', null, ['**Tempo:** condição do momento ("hoje está chovendo")','**Clima:** padrão de muitos anos'], null],
  ['Fatores do clima', null, ['**Latitude:** mais perto do Equador, mais quente','**Altitude:** mais alto, mais frio','**Maritimidade x continentalidade:** perto do mar, menor variação de temperatura','**Massas de ar**','**Correntes marítimas**','**Vegetação e relevo**'], null],
  ['Tipos de chuva', null, ['**Convectiva:** de verão, rápida e forte','**Orográfica:** de relevo, quando o ar sobe uma serra','**Frontal:** encontro de massas de ar'], null]
], enem:'Leitura de climogramas (temperatura em linha, chuva em barras). Muito cobrado.' },

{ t:'Climas do Brasil e fenômenos climáticos', p:'m', ic:'☀️', s:[
  ['Climas do Brasil', null, ['**Equatorial:** quente e úmido o ano todo (Amazônia)','**Tropical:** verão chuvoso e inverno seco','**Tropical de altitude:** temperaturas mais amenas (serras do Sudeste)','**Semiárido:** pouca chuva e mal distribuída (Sertão)','**Subtropical:** estações bem definidas, frio no inverno (Sul)'], null],
  ['El Niño e La Niña', null, ['**El Niño:** aquecimento do Pacífico; costuma causar seca no Norte e no Nordeste e chuvas no Sul','**La Niña:** resfriamento; efeitos geralmente opostos'], null],
  ['Fenômenos urbanos', null, ['**Ilha de calor:** centro das cidades mais quente','**Inversão térmica:** ar frio preso perto do solo, concentrando poluentes no inverno'], null]
], enem:'Ilha de calor e inversão térmica nas cidades são temas muito frequentes.' },

{ t:'Mudanças climáticas', p:'a', ic:'🌡️', s:[
  ['Efeito estufa', 'Fenômeno natural que mantém a Terra aquecida. O problema é a **intensificação** causada pelas atividades humanas.', ['Queima de combustíveis fósseis','Desmatamento e queimadas','Pecuária (metano)'], null],
  ['Consequências', null, ['Aumento da temperatura média','Derretimento de geleiras e elevação do nível do mar','Eventos extremos mais frequentes (secas, enchentes)','Perda de biodiversidade'], null],
  ['Acordos internacionais', null, ['Rio-92','Protocolo de Kyoto (1997)','Acordo de Paris (2015)'], null]
], enem:'Causas humanas do aquecimento global e propostas de redução de emissões.' },

{ t:'Hidrografia', p:'m', ic:'💧', s:[
  ['Bacias brasileiras', null, ['**Amazônica:** maior bacia hidrográfica do mundo','**São Francisco:** "rio da integração nacional", atravessa o semiárido','**Paraná:** grande potencial hidrelétrico (Itaipu)'], null],
  ['Aquíferos', 'Reservas de água subterrânea, como o Aquífero Guarani.', null, null],
  ['Crise hídrica', null, ['Desmatamento das nascentes','Poluição','Uso excessivo na agricultura e na indústria','Mudanças nas chuvas'], 'A agropecuária é a atividade que mais consome água no Brasil.']
], enem:'Crise hídrica, transposição do São Francisco e o papel das florestas nas chuvas.' },

{ t:'Vegetação e domínios morfoclimáticos', p:'m', ic:'🌳', s:[
  ['Domínios (Aziz Ab\'Sáber)', 'Junção de relevo, clima, solo e vegetação.', ['Amazônico','Cerrado','Mares de morros (Mata Atlântica)','Caatinga','Araucárias','Pradarias (Pampa)'], null],
  ['Faixas de transição', 'Áreas entre domínios, como o Pantanal e a Mata dos Cocais.', null, null],
  ['Ameaças', 'A Mata Atlântica, onde vive a maior parte da população, é um dos biomas mais devastados do país.', null, null]
], enem:'Reconhecer o domínio morfoclimático pela descrição de paisagem e clima.' },

{ t:'Questão ambiental no Brasil', p:'a', ic:'🔥', s:[
  ['Problemas', null, ['Desmatamento da Amazônia e do Cerrado','Queimadas','Mineração ilegal e contaminação por mercúrio','Desastres como os de Mariana (2015) e Brumadinho (2019)'], null],
  ['Arco do desmatamento', 'Faixa no sul e no leste da Amazônia onde avança a fronteira agrícola.', null, null],
  ['Instrumentos de proteção', null, ['Código Florestal','Unidades de conservação','Terras indígenas','Monitoramento por satélite'], null]
], enem:'O avanço da fronteira agrícola e os impactos da mineração são cobrados com frequência.' },

{ t:'População: crescimento e estrutura', p:'a', ic:'👨‍👩‍👧', s:[
  ['Conceitos', null, ['**População absoluta:** total de habitantes','**Densidade demográfica:** habitantes ÷ km²','**Crescimento vegetativo:** natalidade − mortalidade'], 'O Brasil é populoso, mas pouco povoado (baixa densidade média).'],
  ['Transição demográfica', 'Queda da mortalidade e depois da natalidade.', null, 'O Brasil vive envelhecimento da população: menos crianças e mais idosos.'],
  ['Pirâmide etária', null, ['Base larga: muitos jovens (país com alta natalidade)','Topo largo: muitos idosos (país envelhecido)'], null],
  ['Consequências do envelhecimento', 'Pressão sobre a previdência e a saúde, e necessidade de cuidados com idosos.', null, null]
], enem:'Leitura de pirâmides etárias e efeitos do envelhecimento populacional.' },

{ t:'Migrações', p:'m', ic:'🧳', s:[
  ['Tipos', null, ['**Êxodo rural:** do campo para a cidade','**Inter-regional:** entre regiões (nordestinos para o Sudeste no século XX)','**Pendular:** ida e volta diária (casa e trabalho)','**Transumância:** sazonal','**Internacional:** entre países'], null],
  ['Fatores', null, ['**Repulsão:** pobreza, seca, violência, guerras','**Atração:** emprego, renda, segurança'], null],
  ['Refugiados', 'Pessoas forçadas a deixar seu país por guerras ou perseguições.', null, 'O Brasil recebeu nos últimos anos refugiados de vários países, como venezuelanos e haitianos.']
], enem:'Migrações nordestinas, refugiados e xenofobia aparecem com frequência.' },

{ t:'Urbanização brasileira', p:'a', ic:'🏙️', s:[
  ['Como aconteceu', 'Rápida e desordenada a partir de 1950, puxada pela industrialização e pelo êxodo rural.', null, null],
  ['Problemas urbanos', null, ['Favelização e déficit habitacional','Segregação socioespacial','Mobilidade urbana precária','Enchentes e deslizamentos','Violência'], null],
  ['Conceitos', null, ['**Metrópole:** cidade grande com influência regional','**Conurbação:** cidades vizinhas que se juntam','**Megalópole:** junção de metrópoles','**Gentrificação:** valorização que expulsa os mais pobres'], null],
  ['Planejamento', 'O Estatuto da Cidade (2001) prevê a função social da propriedade e o plano diretor.', null, null]
], enem:'Gentrificação, segregação e mobilidade urbana aparecem com fotos e charges.' },

{ t:'Rede e hierarquia urbana', p:'m', ic:'🕸️', s:[
  ['Hierarquia urbana', 'Cidades exercem influência umas sobre as outras.', ['Metrópoles nacionais (São Paulo, Rio de Janeiro)','Metrópoles regionais','Capitais regionais e centros locais'], null],
  ['Rede urbana', 'Conjunto de cidades conectadas por fluxos de pessoas, mercadorias, serviços e informações.', null, 'A internet tornou a rede menos hierárquica: cidades pequenas acessam serviços diretamente.'],
  ['Cidades médias', 'Crescem com a desconcentração industrial e o agronegócio.', null, null]
], enem:'Influência das metrópoles e a desconcentração da indústria para cidades médias.' },

{ t:'Industrialização brasileira', p:'m', ic:'🏭', s:[
  ['Fases', null, ['Início ligado ao café (São Paulo)','Era Vargas: indústria de base (CSN, Petrobras)','JK: bens de consumo duráveis e multinacionais','Ditadura: "milagre econômico"'], null],
  ['Concentração e desconcentração', 'A indústria se concentrou no Sudeste e depois se espalhou para outras regiões em busca de incentivos fiscais e mão de obra mais barata ("guerra fiscal").', null, null],
  ['Desindustrialização', 'Perda de participação da indústria no PIB nas últimas décadas.', null, null]
], enem:'Guerra fiscal e desconcentração industrial são temas recorrentes.' },

{ t:'Agropecuária e questão agrária', p:'a', ic:'🚜', s:[
  ['Agronegócio', null, ['Grandes propriedades, alta tecnologia','Monoculturas para exportação (soja, milho, cana)','Grande peso na economia e nas exportações'], null],
  ['Agricultura familiar', 'Pequenas propriedades, mão de obra da família, produz boa parte dos alimentos consumidos internamente.', null, null],
  ['Questão agrária', null, ['Concentração fundiária desde a colonização','Conflitos no campo','Movimentos pela reforma agrária'], null],
  ['Impactos', null, ['Desmatamento para expansão','Uso intensivo de agrotóxicos','Expulsão de pequenos agricultores'], null]
], enem:'Comparar agronegócio e agricultura familiar é das questões mais frequentes.' },

{ t:'Energia', p:'a', ic:'⚡', s:[
  ['Matriz energética brasileira', 'Tem participação alta de fontes renováveis quando comparada à média mundial.', ['Hidrelétricas','Biomassa (bagaço de cana, etanol)','Eólica (crescendo no Nordeste)','Solar'], null],
  ['Fontes e impactos', null, ['**Hidrelétrica:** renovável, mas alaga áreas e desloca populações','**Termelétrica:** emite gases do efeito estufa','**Eólica e solar:** limpas, mas intermitentes','**Nuclear:** não emite CO₂, mas gera rejeitos radioativos'], null],
  ['Petróleo e pré-sal', 'Grandes reservas em águas profundas descobertas na década de 2000.', null, null]
], enem:'Vantagens e desvantagens de cada fonte de energia. A questão quase sempre pede comparação.' },

{ t:'Transportes e logística', p:'m', ic:'🚛', s:[
  ['Modais', null, ['**Rodoviário:** predominante no Brasil, caro para longas distâncias','**Ferroviário:** barato para cargas pesadas e longas distâncias','**Hidroviário:** o mais barato, pouco aproveitado','**Aéreo:** rápido e caro'], null],
  ['O problema brasileiro', 'A dependência do transporte rodoviário encarece os produtos e torna o país vulnerável, como na greve dos caminhoneiros de 2018.', null, null],
  ['Corredores de exportação', 'Rotas que levam a produção agrícola aos portos, cada vez mais pelo Norte.', null, null]
], enem:'Dependência do modal rodoviário e suas desvantagens são muito cobradas.' },

{ t:'Globalização e economia mundial', p:'a', ic:'🌐', s:[
  ['O que é?', 'Integração de mercados, culturas e informações em escala mundial.', null, null],
  ['Características', null, ['Multinacionais e cadeias produtivas globais','Fluxos financeiros instantâneos','Revolução técnico-científico-informacional','Padronização do consumo'], null],
  ['Divisão internacional do trabalho', 'Países ricos concentram tecnologia; muitos países pobres exportam matérias-primas (commodities).', null, null],
  ['Críticas', 'Aumento da desigualdade e "globalização perversa" (Milton Santos).', null, null]
], enem:'Charges sobre consumo global, desigualdade e exportação de commodities.' },

{ t:'Blocos econômicos e organizações', p:'m', ic:'🤝', s:[
  ['Blocos econômicos', null, ['**União Europeia:** moeda comum (euro) e livre circulação de pessoas','**Mercosul:** Brasil, Argentina, Uruguai, Paraguai e outros','**USMCA (antigo Nafta):** EUA, México e Canadá','**BRICS:** grupo de países emergentes, incluindo o Brasil'], null],
  ['Organizações', null, ['ONU','OMC (comércio)','FMI e Banco Mundial'], null],
  ['Níveis de integração', 'Zona de livre comércio → união aduaneira → mercado comum → união econômica.', null, null]
], enem:'Níveis de integração dos blocos e o papel do Brasil no Mercosul e nos BRICS.' },

{ t:'Geopolítica e conflitos', p:'m', ic:'⚔️', s:[
  ['Ordem mundial', 'Do mundo bipolar da Guerra Fria para um mundo multipolar, com a ascensão da China.', null, null],
  ['Conflitos atuais', null, ['Israel e Palestina','Guerra na Ucrânia','Conflitos na África e no Oriente Médio'], null],
  ['Causas comuns', null, ['Disputas territoriais e por recursos (água, petróleo)','Questões étnicas e religiosas','Heranças do colonialismo'], null]
], enem:'O ENEM costuma cobrar a causa dos conflitos ligada a fronteiras e recursos.' },

{ t:'Regionalização do Brasil', p:'m', ic:'🧩', s:[
  ['Regiões do IBGE', 'Cinco grandes regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul, respeitando os limites dos estados.', null, null],
  ['Complexos geoeconômicos', 'Proposta de Pedro Geiger: Amazônia, Nordeste e Centro-Sul, sem seguir os limites estaduais.', null, null],
  ['Quatro Brasis (Milton Santos)', 'Divide o país pelo grau de modernização técnica e informacional.', ['Concentrada (Sul e Sudeste)','Nordeste','Centro-Oeste','Amazônia'], null]
], enem:'Comparar critérios de regionalização: limites estaduais x economia x técnica.' },

{ t:'Nordeste e semiárido', p:'m', ic:'🌵', s:[
  ['Sub-regiões', null, ['Zona da Mata (litoral úmido)','Agreste (transição)','Sertão (semiárido)','Meio-Norte (transição para a Amazônia)'], null],
  ['Seca', 'Chuvas irregulares e mal distribuídas.', null, 'A "indústria da seca" usou o problema para benefício político de poucos.'],
  ['Convivência com o semiárido', null, ['Cisternas de captação de água da chuva','Transposição do Rio São Francisco','Agricultura irrigada no vale do São Francisco'], null]
], enem:'Propostas de convivência com o semiárido (como as cisternas) são frequentes.' },

{ t:'Amazônia', p:'a', ic:'🌿', s:[
  ['Características', null, ['Maior floresta tropical do mundo','Enorme biodiversidade','Maior bacia hidrográfica do mundo','"Rios voadores": umidade que leva chuva para outras regiões'], null],
  ['Ocupação', 'Projetos da ditadura (rodovias como a Transamazônica), Zona Franca de Manaus e avanço da fronteira agrícola.', null, null],
  ['Ameaças', null, ['Desmatamento e queimadas','Garimpo ilegal','Grilagem de terras','Conflitos com povos indígenas e tradicionais'], null]
], enem:'A importância dos rios voadores e as ameaças à floresta são temas muito frequentes.' },

{ t:'Povos tradicionais e território', p:'m', ic:'🪶', s:[
  ['Quem são', null, ['Povos indígenas','Quilombolas','Ribeirinhos, caiçaras, quebradeiras de coco e outros'], null],
  ['Direitos', 'A Constituição de 1988 reconhece os direitos dos indígenas às terras que tradicionalmente ocupam e garante a titulação das terras quilombolas.', null, null],
  ['Importância', 'Terras indígenas estão entre as áreas mais preservadas da Amazônia.', null, 'Os povos tradicionais mantêm conhecimentos sobre o uso sustentável da natureza.']
], enem:'Tema da Redação de 2022. A demarcação de terras e a preservação ambiental andam juntas.' }
]};
