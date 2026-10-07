/* Geografia: temas 11 a 15 */
module.exports = [
{ t:'População: crescimento e estrutura',
d1:[
 ['Conceitos', 'Demografia.', ['**População absoluta** e **densidade demográfica** (hab/km²)','**Taxa de natalidade e mortalidade**','**Crescimento vegetativo = natalidade − mortalidade**','**Expectativa de vida** e **fecundidade**'], null],
 ['Transição demográfica', 'Fases.', ['1ª: natalidade e mortalidade altas, crescimento baixo','2ª: mortalidade cai, natalidade ainda alta, crescimento alto','3ª: natalidade cai, crescimento diminui','4ª: natalidade e mortalidade baixas, população estável ou em queda, envelhecimento','Brasil: entre a 3ª e a 4ª fases'], 'O Brasil envelhece rápido: a base da pirâmide estreita.'],
 ['Pirâmides etárias', 'Leitura.', ['Base larga: população jovem (países pobres)','Base estreita e topo largo: envelhecimento (Japão, Alemanha)','Forma de sino: transição','Bônus demográfico: muitos em idade ativa'], null]
],
d2:[
 ['Teorias', 'Debate.', ['**Malthusiana:** população cresce em progressão geométrica e alimentos em aritmética','**Neomalthusiana:** controle de natalidade','**Reformista:** o problema é a distribuição de renda','Críticas e realidade atual'], null],
 ['Indicadores sociais', 'Qualidade de vida.', ['**IDH:** renda, saúde e educação','Mortalidade infantil, alfabetização, saneamento','Índice de Gini: desigualdade de renda','Brasil: IDH alto, mas com enorme desigualdade'], null],
 ['População brasileira', 'Características.', ['Formação étnica diversa: indígenas, europeus, africanos, asiáticos','Concentração no litoral e Sudeste','Envelhecimento e previdência','Distribuição desigual no território'], null]
],
ex:[
 { q:'Uma pirâmide etária com base larga e topo estreito representa:', a:['população envelhecida','população jovem, com alta natalidade','população estável','população extinta','população urbana apenas'], g:'B', c:'Típica de países em desenvolvimento em fase inicial da transição.' },
 { q:'O crescimento vegetativo é calculado por:', a:['natalidade + mortalidade','natalidade − mortalidade','migração apenas','fecundidade ÷ mortalidade','densidade ÷ área'], g:'B', c:'Diferença entre nascimentos e mortes.' }
],
pr:[
 { q:'O IDH leva em conta:', a:['renda, saúde e educação','só PIB','só população','só clima','só território'], g:'A', c:'Três dimensões.' },
 { q:'A teoria de Malthus previa:', a:['fartura permanente','fome por crescimento populacional maior que o de alimentos','fim da população','prosperidade sem limites','queda da natalidade'], g:'B', c:'Progressão geométrica x aritmética.' },
 { q:'O bônus demográfico ocorre quando:', a:['há grande proporção de população em idade ativa','há muitos idosos','há muitas crianças apenas','a população é nula','há emigração'], g:'A', c:'Oportunidade econômica.' },
 { q:'A densidade demográfica é:', a:['hab/km²','km/hab','hab/ano','R$/hab','hab/ha apenas'], g:'A', c:'População por área.' }
],
erros:['Confundir crescimento vegetativo e migratório.','Ler pirâmide invertida.','Dizer que IDH mede apenas renda.','Aplicar Malthus sem críticas.'],
check:['calcular crescimento vegetativo e densidade','ler pirâmides etárias','explicar a transição demográfica','citar teorias demográficas']
},

{ t:'Migrações',
d1:[
 ['Conceitos', 'Vocabulário.', ['**Emigração** (sair) e **imigração** (entrar); **saldo migratório**','**Migração interna e externa**','**Pendular:** diária (casa ↔ trabalho)','**Sazonal:** safra, turismo','**Êxodo rural**','**Refugiados:** fogem de guerra ou perseguição'], null],
 ['Migrações internas no Brasil', 'Fluxos.', ['Séc. XX: Nordeste → Sudeste (seca, industrialização)','Centro-Oeste e Norte: fronteiras agrícolas e Brasília','Êxodo rural intenso (1950 a 1980)','Hoje: migração de retorno ao Nordeste e para cidades médias'], 'A urbanização brasileira foi acelerada pelo êxodo rural.'],
 ['Imigração para o Brasil', 'Histórico.', ['Europeus (italianos, alemães, portugueses, espanhóis) a partir do século XIX','Japoneses (1908) em São Paulo e Paraná','Árabes e sírio-libaneses','Atualmente: haitianos, venezuelanos, bolivianos, africanos'], null]
],
d2:[
 ['Causas', 'Fatores.', ['**Repulsão:** pobreza, guerra, desastres, falta de emprego','**Atração:** oportunidades, segurança, melhor renda','Desastres ambientais e mudanças climáticas'], null],
 ['Consequências', 'Impactos.', ['Pressão sobre cidades e serviços','Xenofobia e preconceito','Remessas de dinheiro','Choque cultural e enriquecimento cultural','Envelhecimento em áreas de emigração'], null],
 ['Migrações internacionais', 'Cenário atual.', ['Refugiados da Síria, Venezuela, Afeganistão, África','Europa e EUA como destinos','Muros e restrições','Direitos humanos e Lei de Migração (2017)'], null]
],
ex:[
 { q:'A migração pendular é a que:', a:['ocorre uma vez na vida','envolve deslocamento diário entre casa e trabalho','ocorre apenas entre países','é feita por refugiados','é sazonal'], g:'B', c:'Comum em regiões metropolitanas.' },
 { q:'O êxodo rural no Brasil foi impulsionado principalmente por:', a:['mecanização e concentração fundiária e industrialização','vulcanismo','abertura de portos','fim do café','epidemias'], g:'A', c:'Atração das cidades.' }
],
pr:[
 { q:'Refugiado é quem:', a:['viaja a turismo','foge de guerras, perseguições ou desastres','muda de bairro','estuda fora','é aposentado'], g:'B', c:'Proteção internacional.' },
 { q:'Os imigrantes japoneses chegaram ao Brasil em:', a:['1500','1808','1908','1964','2000'], g:'C', c:'Navio Kasato Maru.' },
 { q:'Um fator de atração migratória é:', a:['guerra','oferta de empregos','seca','perseguição política','fome'], g:'B', c:'Oportunidades.' },
 { q:'A migração sazonal está ligada a:', a:['safras e turismo','aposentadoria','estudo','guerra','moradia'], g:'A', c:'Temporária.' }
],
erros:['Confundir emigração e imigração.','Dizer que migrar é sempre ilegal.','Esquecer das causas ambientais.','Ignorar os direitos dos migrantes.'],
check:['classificar tipos de migração','explicar fluxos no Brasil','listar causas e consequências','diferenciar migrante e refugiado']
},

{ t:'Urbanização brasileira',
d1:[
 ['Processo', 'Crescimento das cidades.', ['Industrialização a partir de 1930 impulsiona','Em 1970 a população urbana superou a rural','Hoje, cerca de 85% da população vive em cidades','Urbanização rápida, concentrada e desordenada'], null],
 ['Metropolização', 'Grandes aglomerados.', ['**Metrópole:** cidade polo que influencia amplas regiões (São Paulo, Rio, Belo Horizonte)','**Região metropolitana:** conjunto de municípios integrados','**Conurbação:** junção de malhas urbanas','**Megalópole:** conjunto de metrópoles conurbadas (Rio-São Paulo)'], 'São Paulo é a maior metrópole do país e polo global.'],
 ['Problemas urbanos', 'Desafios.', ['Déficit habitacional e favelas','Trânsito e transporte público precário','Poluição, ilhas de calor, enchentes','Violência e desigualdade','Segregação socioespacial','Saneamento e lixo'], null]
],
d2:[
 ['Espaço urbano', 'Organização.', ['Centro, periferia, bairros residenciais e industriais','Especulação imobiliária','Gentrificação','Verticalização','Áreas de risco: encostas e várzeas'], null],
 ['Estatuto da Cidade e planejamento', 'Políticas.', ['Estatuto da Cidade (2001): função social da propriedade','Plano diretor','Mobilidade urbana, habitação, regularização fundiária','Participação popular'], null],
 ['Cidades médias e pequenas', 'Tendências.', ['Crescimento de cidades médias','Interiorização do desenvolvimento','Agronegócio e novas centralidades','Desafios de infraestrutura'], null]
],
ex:[
 { q:'A conurbação ocorre quando:', a:['uma cidade se isola','cidades próximas se unem fisicamente por seu crescimento','o campo cresce','a população diminui','há êxodo urbano'], g:'B', c:'Ex.: Grande São Paulo.' },
 { q:'A população urbana brasileira superou a rural na década de:', a:['1940','1950','1970','1990','2010'], g:'C', c:'Censo de 1970.' }
],
pr:[
 { q:'A segregação socioespacial é a:', a:['separação das classes sociais no espaço urbano','mistura total','vida rural','imigração','fusão de bairros'], g:'A', c:'Periferias e áreas nobres.' },
 { q:'O Estatuto da Cidade (2001) defende:', a:['a função social da propriedade urbana','a especulação','o fim das cidades','o agronegócio','a mineração'], g:'A', c:'Política urbana.' },
 { q:'A gentrificação é:', a:['a valorização e substituição da população de baixa renda em um bairro','a construção de favelas','o êxodo rural','a imigração','um tipo de poluição'], g:'A', c:'Elitização do espaço.' },
 { q:'Uma megalópole é:', a:['uma cidade pequena','conjunto de metrópoles conurbadas','um bairro','um distrito','uma vila'], g:'B', c:'Rio-São Paulo.' }
],
erros:['Dizer que a urbanização foi planejada.','Confundir metrópole e megalópole.','Ignorar a desigualdade espacial.','Esquecer das ilhas de calor.'],
check:['explicar a urbanização brasileira','distinguir metrópole, conurbação e megalópole','listar problemas urbanos','citar instrumentos de planejamento']
},

{ t:'Rede e hierarquia urbana',
d1:[
 ['Rede urbana', 'Conjunto de cidades conectadas.', ['Fluxos de pessoas, mercadorias, informações e capitais','Cidades se relacionam e se hierarquizam','Rodovias, ferrovias, aeroportos e internet'], null],
 ['Hierarquia urbana', 'Níveis (IBGE - REGIC).', ['**Metrópoles** (nacionais, regionais)','**Capitais regionais**','**Centros sub-regionais**','**Centros de zona e centros locais**','Influência mede-se pelos serviços (saúde, educação, comércio, finanças)'], 'Quanto maior a cidade, mais serviços raros oferece.'],
 ['Cidades globais', 'Escala internacional.', ['Concentram sedes de empresas, bancos e bolsas','Nova Iorque, Londres, Tóquio; São Paulo é cidade global (de nível beta)','Papel na economia mundial e nos fluxos de informação'], null]
],
d2:[
 ['Funções urbanas', 'Tipos.', ['Industrial, comercial, portuária, turística, administrativa, universitária','Cidades-dormitório','Cidades de fronteira'], null],
 ['Área de influência', 'Alcance.', ['Cidade polo atrai pessoas de outros municípios','Exemplos: Campinas, Ribeirão Preto','Região de influência de São Paulo é a maior do país'], null],
 ['Rede urbana brasileira', 'Características.', ['Concentração no litoral e Sudeste','Interiorização com o agronegócio','Brasília e Manaus como polos regionais','Desigualdades regionais'], null]
],
ex:[
 { q:'Em uma rede urbana, a hierarquia entre cidades é definida principalmente por:', a:['clima','a oferta de serviços e a área de influência','altitude','vegetação','tamanho do território'], g:'B', c:'Quanto mais serviços especializados, maior a hierarquia.' },
 { q:'Uma cidade-dormitório é aquela:', a:['onde predomina a indústria','onde muitos moradores trabalham em outra cidade','sem moradores','turística','agrícola'], g:'B', c:'Movimento pendular.' }
],
pr:[
 { q:'No Brasil, a maior metrópole nacional é:', a:['Brasília','Rio de Janeiro','São Paulo','Salvador','Manaus'], g:'C', c:'Principal polo econômico e financeiro.' },
 { q:'Cidades globais concentram:', a:['somente agricultura','sedes de empresas transnacionais e serviços financeiros','apenas indústrias poluentes','zonas rurais','áreas desérticas'], g:'B', c:'Comando da economia.' },
 { q:'REGIC é um estudo do:', a:['IBGE sobre a rede e hierarquia urbana','INPE','IPCC','ONU','FMI'], g:'A', c:'Regiões de influência das cidades.' },
 { q:'A função portuária está associada a:', a:['Santos','Brasília','Goiânia','Palmas','Teresina'], g:'A', c:'Maior porto do Brasil.' }
],
erros:['Achar que hierarquia depende só da população.','Confundir cidade global e metrópole nacional.','Ignorar os fluxos.','Esquecer das funções urbanas.'],
check:['definir rede urbana','listar níveis da hierarquia','explicar a cidade global','citar funções urbanas']
},

{ t:'Industrialização brasileira',
d1:[
 ['Fases', 'Etapas.', ['**Até 1930:** indústria leve ligada ao café','**1930 a 1955:** industrialização por substituição de importações (Vargas): CSN, Petrobras','**1956 a 1960:** JK, entrada de multinacionais (automobilística)','**1960 e 1970:** ditadura, milagre econômico, indústria de base','**1980 e 1990:** crise e abertura econômica','**Hoje:** desindustrialização relativa, serviços, agronegócio'], null],
 ['Concentração espacial', 'Sudeste.', ['São Paulo como polo industrial','Fatores: capital do café, mão de obra, mercado consumidor, energia, infraestrutura','Desconcentração para o interior, Sul e Nordeste a partir dos anos 1970 e 1990','Guerra fiscal'], 'A desconcentração busca incentivos fiscais e menor custo.'],
 ['Setores', 'Tipos.', ['**Bens de consumo:** alimentos, têxtil','**Bens intermediários:** aço, petroquímica','**Bens de capital:** máquinas','**Indústria de ponta:** aeronáutica (Embraer), tecnologia'], null]
],
d2:[
 ['Dependência e capital', 'Perfil.', ['Capital estatal, privado nacional e estrangeiro (tripé)','Dependência tecnológica','Cadeias globais de valor','Exportação de commodities'], null],
 ['Trabalho', 'Mudanças.', ['Terceirização e reformas trabalhistas','Automação','Informalidade','Sindicalismo do ABC'], null],
 ['Impactos', 'Ambientais e sociais.', ['Poluição industrial, resíduos','Urbanização acelerada','Zonas Francas (Manaus)','Políticas de inovação e sustentabilidade'], null]
],
ex:[
 { q:'A industrialização por substituição de importações consistia em:', a:['importar tudo','produzir internamente o que era importado','fechar fronteiras','exportar apenas café','abolir a indústria'], g:'B', c:'Proteção da indústria nacional.' },
 { q:'A Zona Franca de Manaus foi criada para:', a:['preservar a floresta apenas','incentivar o desenvolvimento industrial na Amazônia','extrair petróleo','estimular o café','proteger o litoral'], g:'B', c:'Incentivos fiscais.' }
],
pr:[
 { q:'A CSN, criada no governo Vargas, produz:', a:['aço','petróleo','alimentos','roupas','carros'], g:'A', c:'Volta Redonda (RJ).' },
 { q:'A entrada de multinacionais automobilísticas ocorreu no governo de:', a:['Dutra','JK','Jânio','Castelo Branco','Sarney'], g:'B', c:'Plano de Metas.' },
 { q:'A Embraer é uma empresa de:', a:['alimentos','aeronáutica','têxtil','mineração','agricultura'], g:'B', c:'Indústria de ponta.' },
 { q:'A guerra fiscal é a:', a:['guerra entre países','disputa entre estados por indústrias com incentivos fiscais','crise do café','greve geral','reforma agrária'], g:'B', c:'Compete por investimentos.' }
],
erros:['Dizer que a industrialização foi uniforme.','Ignorar o papel do Estado.','Esquecer da concentração no Sudeste.','Confundir bens de capital e de consumo.'],
check:['ordenar as fases da industrialização','explicar a concentração e desconcentração','classificar setores industriais','citar o papel do Estado']
}
];
