/* História: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.his = { id:'his', nome:'História', icone:'🏛️', emojis:'🏛️ 📜 ⚔️ 🗽',
capa:'linear-gradient(160deg,#3a1d0e,#8a4b1f 55%,#e8a94b)',
temas:[
{ t:'Antiguidade: Grécia', p:'m', ic:'🏺', s:[
  ['Atenas e a democracia', 'Em Atenas surgiu a democracia direta: os cidadãos votavam nas assembleias.', ['Só eram cidadãos homens livres, filhos de atenienses','Mulheres, estrangeiros e escravizados ficavam de fora'], 'Era uma democracia restrita.'],
  ['Esparta', 'Cidade militarista, governada por uma oligarquia, com educação voltada para a guerra.', null, null],
  ['Legado grego', null, ['Filosofia (Sócrates, Platão, Aristóteles)','Teatro, Olimpíadas e arquitetura','A ideia de cidadania e de debate público'], null]
], enem:'Comparar a democracia ateniense com a atual: quem participava e quem era excluído.' },

{ t:'Antiguidade: Roma', p:'m', ic:'🏟️', s:[
  ['Fases de Roma', null, ['**Monarquia**','**República:** Senado, conflitos entre patrícios (ricos) e plebeus','**Império:** poder concentrado no imperador'], null],
  ['Pão e circo', 'Política de distribuir alimento e oferecer espetáculos para conter a insatisfação popular.', null, null],
  ['Legado romano', null, ['Direito romano, base de muitas leis atuais','Latim, origem do português','Estradas, aquedutos e arquitetura','Expansão do cristianismo'], null],
  ['Queda do Império Romano do Ocidente', 'Em 476, por crise econômica, divisões internas e invasões germânicas.', null, null]
], enem:'"Pão e circo" aparece comparado à política atual. O direito romano também é tema frequente.' },

{ t:'Idade Média e feudalismo', p:'m', ic:'🏰', s:[
  ['Feudalismo', null, ['Economia agrária e autossuficiente','Sociedade estamental: clero, nobreza e servos','Relações de suserania e vassalagem','Servos presos à terra, pagando tributos'], null],
  ['Poder da Igreja', 'A Igreja Católica dominava a cultura, a educação e influenciava a política.', null, null],
  ['Baixa Idade Média', null, ['Cruzadas','Renascimento comercial e urbano','Surgimento da burguesia','Peste Negra (século XIV)'], 'Essas mudanças enfraqueceram o feudalismo.']
], enem:'Sociedade estamental e o papel da Igreja. Compare com a sociedade de classes atual.' },

{ t:'Renascimento e Reformas religiosas', p:'m', ic:'🎨', s:[
  ['Renascimento', 'Movimento cultural (séculos XIV a XVI) que valorizou o ser humano e a razão.', ['**Antropocentrismo:** ser humano no centro','Valorização da cultura greco-romana','Artistas: Leonardo da Vinci, Michelangelo'], null],
  ['Reforma Protestante', 'Em 1517, Martinho Lutero criticou a venda de indulgências e iniciou a Reforma.', ['Luteranismo','Calvinismo (ética do trabalho)','Anglicanismo'], null],
  ['Contrarreforma', 'Resposta da Igreja Católica: Concílio de Trento, Inquisição e Companhia de Jesus (jesuítas).', null, 'Os jesuítas tiveram papel importante na colonização do Brasil.']
], enem:'A imprensa de Gutenberg ajudou a espalhar as ideias da Reforma. Relacione cultura e religião.' },

{ t:'Grandes Navegações e colonização', p:'m', ic:'⛵', s:[
  ['Por que navegar?', null, ['Buscar rotas para as especiarias do Oriente','Expandir o comércio','Expandir o cristianismo','Avanços técnicos: caravela, bússola, astrolábio'], null],
  ['Portugal e Espanha', 'Portugal foi pioneiro. Em 1494, o Tratado de Tordesilhas dividiu as terras entre os dois reinos.', null, null],
  ['Mercantilismo', null, ['Metalismo (acumular ouro e prata)','Balança comercial favorável','Pacto colonial: a colônia só comercializa com a metrópole'], null]
], enem:'Pacto colonial e o impacto da conquista sobre os povos indígenas da América.' },

{ t:'Brasil Colônia: economia açucareira', p:'a', ic:'🌾', s:[
  ['O modelo', null, ['**Plantation:** latifúndio, monocultura, mão de obra escravizada, produção para exportação','Engenhos no Nordeste (Pernambuco e Bahia)'], null],
  ['Escravidão africana', 'Milhões de africanos foram trazidos à força pelo tráfico negreiro.', null, 'A escravidão marcou profundamente a sociedade brasileira.'],
  ['Resistência', null, ['Quilombos (Palmares, liderado por Zumbi)','Fugas e revoltas','Preservação da cultura, religião e música'], null],
  ['Povos indígenas', 'Sofreram escravização, doenças trazidas pelos europeus e perda de territórios, mas também resistiram.', null, null]
], enem:'Relação entre a escravidão colonial e o racismo atual é muito cobrada.' },

{ t:'Brasil Colônia: mineração e revoltas', p:'m', ic:'⛏️', s:[
  ['Ciclo do ouro', 'Século XVIII, em Minas Gerais. Deslocou o eixo econômico para o Sudeste; a capital foi para o Rio de Janeiro (1763).', ['Cobrança do quinto (20% do ouro para a Coroa)','Derrama: cobrança forçada dos impostos atrasados'], null],
  ['Revoltas coloniais', null, ['**Inconfidência Mineira (1789):** elite contra os impostos; Tiradentes foi executado','**Conjuração Baiana (1798):** participação popular, defendia o fim da escravidão'], null],
  ['Iluminismo na colônia', 'As revoltas foram influenciadas pelas ideias iluministas e pela independência dos EUA.', null, null]
], enem:'Comparar a Inconfidência Mineira (elite) com a Conjuração Baiana (popular e abolicionista).' },

{ t:'Iluminismo', p:'a', ic:'💡', s:[
  ['O que foi?', 'Movimento intelectual do século XVIII que defendia a **razão** contra o absolutismo e os privilégios.', null, null],
  ['Pensadores', null, ['**Locke:** direitos naturais (vida, liberdade, propriedade)','**Montesquieu:** separação dos três poderes','**Rousseau:** contrato social e vontade geral','**Voltaire:** liberdade de expressão e tolerância religiosa'], null],
  ['Influência', 'Inspirou a Independência dos EUA, a Revolução Francesa e revoltas na América Latina.', null, 'Também está na base das democracias e das constituições atuais.']
], enem:'Ideias de Montesquieu (três poderes) e Rousseau aparecem em questões sobre democracia.' },

{ t:'Revolução Francesa', p:'a', ic:'🇫🇷', s:[
  ['Causas', null, ['Crise econômica e fome','Privilégios do clero e da nobreza','Ideias iluministas','Burguesia sem poder político'], null],
  ['Principais fatos', null, ['Tomada da Bastilha (1789)','Declaração dos Direitos do Homem e do Cidadão','Fase do Terror (jacobinos, Robespierre)','Ascensão de Napoleão'], null],
  ['Legado', 'Lema "Liberdade, Igualdade e Fraternidade" e o fim do Antigo Regime.', null, 'Marco do início da Idade Contemporânea.']
], enem:'Declaração dos Direitos do Homem e a influência na noção moderna de cidadania.' },

{ t:'Revolução Industrial', p:'a', ic:'🏭', s:[
  ['Onde e quando', 'Começou na Inglaterra, no século XVIII.', null, null],
  ['Mudanças', null, ['Máquina a vapor e fábricas','Trabalho assalariado','Êxodo rural e crescimento das cidades','Produção em larga escala'], null],
  ['Problemas sociais', null, ['Jornadas de até 16 horas','Trabalho infantil','Moradias precárias e poluição'], null],
  ['Reações', null, ['**Ludismo:** quebra de máquinas','**Cartismo:** luta por direitos políticos','Sindicatos e ideias socialistas'], null]
], enem:'Relacionar a Revolução Industrial a problemas atuais de trabalho e meio ambiente.' },

{ t:'Independência do Brasil', p:'a', ic:'🇧🇷', s:[
  ['Antecedentes', 'Em 1808, a família real portuguesa veio para o Brasil, fugindo de Napoleão.', ['Abertura dos portos','Criação de instituições (Banco do Brasil, imprensa)','Brasil elevado a Reino Unido (1815)'], null],
  ['A independência (1822)', 'Proclamada por D. Pedro I.', ['Manteve a monarquia','Manteve a escravidão','Foi conduzida pela elite'], 'Mudou o governo, mas preservou a estrutura social.'],
  ['Constituição de 1824', 'Outorgada (imposta). Criou o Poder Moderador, que dava muito poder ao imperador; voto censitário (por renda).', null, null]
], enem:'A independência como processo que manteve a escravidão e o poder das elites.' },

{ t:'Brasil Império', p:'a', ic:'👑', s:[
  ['Períodos', null, ['**Primeiro Reinado** (D. Pedro I)','**Período Regencial:** muitas revoltas (Cabanagem, Balaiada, Sabinada, Farroupilha, Revolta dos Malês)','**Segundo Reinado** (D. Pedro II): café no Sudeste'], null],
  ['Economia do café', 'O café virou o principal produto de exportação no Segundo Reinado.', null, null],
  ['Leis abolicionistas', null, ['1850: Lei Eusébio de Queirós (fim do tráfico)','1871: Lei do Ventre Livre','1885: Lei dos Sexagenários','1888: Lei Áurea'], null],
  ['Imigração e Lei de Terras', 'A Lei de Terras (1850) dificultou o acesso à terra; imigrantes europeus foram atraídos para o trabalho no café.', null, null]
], enem:'Processo gradual da abolição e abolição sem políticas de inclusão. Muito cobrado.' },

{ t:'Abolição e pós-abolição', p:'a', ic:'⛓️', s:[
  ['A Lei Áurea (1888)', 'Aboliu a escravidão, mas **sem indenização, terra ou educação** para os libertos.', null, null],
  ['Consequências', null, ['Marginalização da população negra','Ocupação de morros e periferias','Exclusão do mercado de trabalho formal','Política de "branqueamento" com imigração europeia'], null],
  ['Resistência e cultura', 'Movimentos negros, imprensa negra, irmandades e manifestações como o samba e a capoeira.', null, 'O racismo estrutural de hoje tem raízes nesse processo.']
], enem:'Ligação entre o pós-abolição e as desigualdades raciais atuais é um dos temas mais frequentes.' },

{ t:'República Velha (1889 a 1930)', p:'a', ic:'🐄', s:[
  ['Proclamação', 'Em 1889, por militares, com apoio de elites cafeicultoras.', null, null],
  ['Características', null, ['**Política do café com leite:** alternância entre São Paulo e Minas','**Coronelismo:** poder local dos grandes fazendeiros','**Voto de cabresto:** voto aberto e controlado'], null],
  ['Revoltas', null, ['**Canudos:** comunidade sertaneja massacrada pelo governo','**Contestado:** conflito no Sul','**Revolta da Vacina (1904):** contra a vacinação obrigatória','**Revolta da Chibata (1910):** contra castigos na Marinha'], null]
], enem:'Coronelismo e voto de cabresto ajudam a entender práticas políticas que persistem.' },

{ t:'Era Vargas (1930 a 1945)', p:'a', ic:'📻', s:[
  ['Chegada ao poder', 'Revolução de 1930 encerrou a República Velha.', null, null],
  ['Fases', null, ['Governo Provisório','Governo Constitucional (Constituição de 1934; voto feminino garantido em 1932)','**Estado Novo (1937 a 1945):** ditadura, censura e propaganda (DIP)'], null],
  ['Trabalhismo', 'CLT (1943), salário mínimo, carteira de trabalho. Vargas ficou conhecido como "pai dos pobres".', null, null],
  ['Industrialização', 'Criação da CSN (siderurgia) e, no segundo governo, da Petrobras (1953).', null, null]
], enem:'Direitos trabalhistas e propaganda política no Estado Novo são temas recorrentes.' },

{ t:'República Democrática (1945 a 1964)', p:'m', ic:'🏗️', s:[
  ['Populismo', 'Líderes que buscavam apoio direto das massas, como Vargas (1951 a 1954), que se suicidou em 1954.', null, null],
  ['Juscelino Kubitschek', 'Plano de Metas ("50 anos em 5"), indústria automobilística e construção de Brasília (1960).', null, 'O crescimento veio acompanhado de inflação e dívida externa.'],
  ['Crise e golpe', 'Jânio Quadros renunciou; João Goulart propôs reformas de base (como a agrária). Em 1964, um golpe civil-militar o derrubou.', null, null]
], enem:'Plano de Metas, construção de Brasília e as reformas de base de Jango.' },

{ t:'Ditadura Militar (1964 a 1985)', p:'a', ic:'🪖', s:[
  ['Características', null, ['Atos Institucionais','**AI-5 (1968):** fechamento do Congresso, censura, suspensão do habeas corpus para crimes políticos','Repressão, tortura e exílios'], null],
  ['Economia', '"Milagre econômico" (1968 a 1973): crescimento alto, mas com aumento da desigualdade e da dívida externa.', null, null],
  ['Resistência', null, ['Movimento estudantil','Músicas de protesto e censura às artes','Luta armada','Movimentos pela anistia'], null],
  ['Abertura', 'Lei da Anistia (1979), Diretas Já (1983 e 1984) e eleição indireta de Tancredo Neves (1985).', null, null]
], enem:'Letras de música censuradas e charges da época são fontes muito usadas nas questões.' },

{ t:'Nova República e Constituição de 1988', p:'a', ic:'📜', s:[
  ['Constituição Cidadã (1988)', null, ['Voto direto e voto facultativo para analfabetos e jovens de 16 e 17 anos','Direitos sociais (educação, saúde, moradia, trabalho...)','Criação do SUS','Racismo como crime inafiançável','Direitos dos povos indígenas'], null],
  ['Fatos marcantes', null, ['Impeachment de Collor (1992)','Plano Real (1994) e controle da inflação','Programas de transferência de renda'], null]
], enem:'A Constituição de 1988 é repertório de quase toda prova. Saiba os direitos que ela garantiu.' },

{ t:'Primeira Guerra Mundial', p:'m', ic:'💣', s:[
  ['Causas', null, ['Imperialismo e disputa por colônias','Nacionalismos','Corrida armamentista','Sistema de alianças'], 'Estopim: assassinato do arquiduque Francisco Ferdinando (1914).'],
  ['Características', 'Guerra de trincheiras, novas armas (metralhadoras, gases, tanques).', null, null],
  ['Consequências', null, ['Tratado de Versalhes, muito duro com a Alemanha','Revolução Russa (1917)','Crise econômica','Criação da Liga das Nações'], null]
], enem:'O Tratado de Versalhes como uma das causas da Segunda Guerra.' },

{ t:'Crise de 1929 e totalitarismos', p:'m', ic:'📉', s:[
  ['Crise de 1929', 'Quebra da Bolsa de Nova York: falências e desemprego em massa. Nos EUA, o New Deal aumentou a intervenção do Estado na economia.', null, 'No Brasil, a crise atingiu o café e contribuiu para a Revolução de 1930.'],
  ['Totalitarismos', null, ['**Fascismo** (Itália, Mussolini)','**Nazismo** (Alemanha, Hitler)','Partido único, culto ao líder, propaganda, censura, perseguição a minorias'], null],
  ['Holocausto', 'Genocídio de milhões de judeus e de outros grupos (ciganos, pessoas com deficiência, homossexuais).', null, null]
], enem:'Propaganda nazista e características dos regimes totalitários são muito cobradas.' },

{ t:'Segunda Guerra Mundial', p:'a', ic:'✈️', s:[
  ['Os lados', null, ['**Eixo:** Alemanha, Itália e Japão','**Aliados:** Reino Unido, França, URSS, EUA e outros, incluindo o Brasil'], null],
  ['Fatos importantes', null, ['Início com a invasão da Polônia (1939)','Ataque a Pearl Harbor (1941)','Dia D (1944)','Bombas atômicas em Hiroshima e Nagasaki (1945)'], null],
  ['O Brasil na guerra', 'Enviou a Força Expedicionária Brasileira (FEB) à Itália.', null, null],
  ['Consequências', null, ['Criação da ONU (1945)','Declaração Universal dos Direitos Humanos (1948)','Início da Guerra Fria'], null]
], enem:'Criação da ONU e da Declaração dos Direitos Humanos como respostas aos horrores da guerra.' },

{ t:'Guerra Fria', p:'a', ic:'🚀', s:[
  ['O que foi?', 'Disputa entre **EUA (capitalismo)** e **URSS (socialismo)**, de 1947 a 1991, sem confronto direto entre eles.', null, null],
  ['Características', null, ['Corrida armamentista e nuclear','Corrida espacial','Propaganda ideológica','Conflitos indiretos (Coreia, Vietnã, Cuba)'], null],
  ['Símbolos', null, ['Muro de Berlim (1961 a 1989)','Crise dos Mísseis em Cuba (1962)'], null],
  ['Fim', 'Queda do Muro de Berlim (1989) e fim da URSS (1991).', null, null]
], enem:'A influência da Guerra Fria nas ditaduras latino-americanas, inclusive no golpe de 1964.' },

{ t:'Descolonização da África e da Ásia', p:'m', ic:'🌍', s:[
  ['Contexto', 'Após a Segunda Guerra, as potências europeias enfraquecidas perderam as colônias.', null, null],
  ['Exemplos', null, ['Índia (1947): resistência pacífica de Gandhi','Argélia: guerra contra a França','Angola e Moçambique (1975): independência de Portugal'], null],
  ['Heranças', null, ['Fronteiras artificiais traçadas pelos europeus','Conflitos étnicos','Dependência econômica','Apartheid na África do Sul (até 1994)'], null]
], enem:'Fronteiras artificiais da partilha da África e suas consequências atuais.' },

{ t:'Movimentos sociais e direitos no século XX', p:'m', ic:'✊', s:[
  ['Direitos civis nos EUA', 'Luta contra a segregação racial, com Martin Luther King e Rosa Parks.', null, null],
  ['Feminismo', 'Luta pelo voto, pela igualdade no trabalho e pelos direitos reprodutivos.', null, 'No Brasil, o voto feminino veio em 1932.'],
  ['Outros movimentos', null, ['Movimento negro no Brasil','Movimentos indígenas','Movimento LGBTQIA+','Movimentos ambientalistas'], null],
  ['Leis conquistadas', null, ['Lei Caó (1989): racismo é crime','Lei Maria da Penha (2006)','Estatuto da Igualdade Racial (2010)'], null]
], enem:'A relação entre a luta dos movimentos sociais e a conquista de direitos.' },

{ t:'Mundo contemporâneo', p:'m', ic:'🌐', s:[
  ['Nova ordem mundial', 'Após a Guerra Fria, o mundo ficou multipolar, com EUA, União Europeia, China e outros polos.', null, null],
  ['Temas atuais', null, ['Globalização e blocos econômicos','Terrorismo (atentados de 11 de setembro de 2001)','Primavera Árabe (2010 e 2011)','Crise dos refugiados','Pandemia de covid-19'], null],
  ['Como estudar', 'Relacione os acontecimentos atuais aos processos históricos que os explicam.', null, null]
], enem:'O ENEM liga passado e presente. Pergunte-se sempre: "que processo histórico explica isso?".' }
]};
