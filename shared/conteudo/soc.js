/* Sociologia: 25 temas. Formato de cada seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.soc = { id:'soc', nome:'Sociologia', icone:'🌍', emojis:'🌍 👥 ⚖️ 🏛️',
capa:'linear-gradient(160deg,#3b1f6e,#6a3fb5 55%,#e86a92)',
temas:[
{ t:'O que é Sociologia', p:'m', ic:'🔎', s:[
  ['O que é Sociologia?', 'A Sociologia é a ciência que estuda a **vida em sociedade**: como as pessoas se relacionam, se organizam e criam regras para conviver.', ['Grupos sociais (família, escola, trabalho)','Instituições (Estado, religião, mercado)','Comportamentos coletivos','Desigualdades e conflitos'], 'Em resumo: ela tenta explicar por que vivemos do jeito que vivemos.'],
  ['O olhar sociológico', 'Pensar sociologicamente é **desnaturalizar** o que parece normal. Coisas que achamos "naturais" foram construídas pela sociedade ao longo do tempo.', ['Por que existem ricos e pobres?','Por que certas profissões são vistas como "de homem" ou "de mulher"?','Por que seguimos regras que ninguém escreveu?'], 'Exemplo: comer com garfo e faca não é natural, é um costume aprendido.'],
  ['Para que serve?', 'A Sociologia ajuda a compreender problemas sociais e a pensar soluções.', ['Entender a violência, a pobreza e o preconceito','Analisar políticas públicas','Formar cidadãos mais críticos'], null]
], enem:'O ENEM traz textos, charges e dados e pede para você identificar a relação entre o comportamento individual e a sociedade. Desconfie de alternativas que tratam fatos sociais como "naturais".' },

{ t:'Surgimento e contexto histórico da Sociologia', p:'m', ic:'🏭', s:[
  ['Quando surgiu?', 'A Sociologia nasceu no **século XIX, na Europa**, em um período de mudanças muito rápidas.', ['Revolução Industrial: fábricas, máquinas e trabalho assalariado','Revolução Francesa: fim de privilégios e novas ideias políticas','Crescimento acelerado das cidades'], null],
  ['Por que ela surgiu?', 'As transformações criaram problemas novos que precisavam ser explicados.', ['Jornadas de trabalho exaustivas','Pobreza nas cidades','Moradias precárias','Conflitos entre operários e patrões'], 'Em resumo: a sociedade mudou tanto que foi preciso criar uma ciência para entendê-la.'],
  ['Influências', 'Ela herdou ideias do **Iluminismo**, que valorizava a razão, e das ciências naturais, que usavam observação e método.', null, 'Os primeiros pensadores queriam estudar a sociedade com o mesmo rigor da Física e da Biologia.']
], enem:'É comum aparecer um texto sobre a Revolução Industrial pedindo a relação entre as mudanças econômicas e o nascimento das Ciências Sociais.' },

{ t:'Auguste Comte', p:'m', ic:'💡', s:[
  ['Quem foi Auguste Comte?', 'Filósofo francês (1798 a 1857), considerado o **pai da Sociologia**. Foi quem criou o nome "Sociologia" e propôs estudar a sociedade de forma científica.', null, null],
  ['O Positivismo', 'A principal teoria de Comte é o **Positivismo**.', ['O conhecimento verdadeiro é o conhecimento científico','A sociedade segue leis, assim como a natureza','É possível prever e organizar a vida social'], 'Seu lema "Ordem e Progresso" inspirou a frase da bandeira do Brasil.'],
  ['A Lei dos Três Estados', 'Para Comte, o pensamento humano passa por três fases:', ['**Teológico:** explicações religiosas ("chove porque os deuses quiseram")','**Metafísico:** explicações abstratas, por ideias como "natureza" ou "essência"','**Positivo:** explicações baseadas na ciência e na observação'], null]
], enem:'A influência do Positivismo na República brasileira (lema da bandeira) é um tema que aparece ligando Sociologia e História.' },

{ t:'Émile Durkheim', p:'a', ic:'🧩', s:[
  ['Quem foi Durkheim?', 'Sociólogo francês (1858 a 1917), um dos fundadores da Sociologia como disciplina acadêmica.', null, null],
  ['Fato social', 'São maneiras de agir, pensar e sentir que existem fora do indivíduo e se impõem a ele.', ['**Exterioridade:** existem antes de nós','**Coercitividade:** pressionam as pessoas a segui-los','**Generalidade:** são comuns a um grupo'], 'Exemplo: a língua, as leis e a moda são fatos sociais.'],
  ['Solidariedade mecânica e orgânica', 'É o que mantém a sociedade unida.', ['**Mecânica:** sociedades simples, pessoas parecidas, união pelas semelhanças','**Orgânica:** sociedades modernas, divisão do trabalho, união pela dependência entre as funções'], null],
  ['Anomia', 'Situação em que as normas sociais ficam fracas ou confusas, deixando as pessoas sem referência.', null, 'Durkheim estudou o suicídio como um fenômeno social, ligado também à anomia.']
], enem:'Fato social e suas três características são cobrados com frequência. Saiba diferenciar Durkheim de Weber e Marx.' },

{ t:'Karl Marx', p:'a', ic:'⚙️', s:[
  ['Quem foi Karl Marx?', 'Filósofo, economista e sociólogo alemão (1818 a 1883) que analisou a sociedade a partir das **desigualdades econômicas**. Viveu durante a Revolução Industrial.', null, null],
  ['Materialismo histórico', 'A forma como a sociedade se organiza depende da sua **base econômica** (o modo de produção).', ['A economia influencia a política, a cultura e as relações sociais','A história é marcada por mudanças nos modos de produção'], null],
  ['Luta de classes', 'No capitalismo existem duas classes principais:', ['**Burguesia:** dona dos meios de produção (fábricas, máquinas)','**Proletariado:** vende a sua força de trabalho em troca de salário'], 'Para Marx, a história é a história da luta de classes.'],
  ['Mais-valia e alienação', null, ['**Mais-valia:** valor produzido pelo trabalhador que não é pago a ele e vira lucro','**Alienação:** o trabalhador não se reconhece no produto do próprio trabalho'], null]
], enem:'Mais-valia, alienação e luta de classes aparecem em textos sobre trabalho e desigualdade. Associe sempre Marx à economia.' },

{ t:'Max Weber', p:'a', ic:'📋', s:[
  ['Quem foi Max Weber?', 'Sociólogo alemão (1864 a 1920). Para ele, a Sociologia deve compreender o **sentido das ações** das pessoas.', null, null],
  ['Ação social', 'É toda ação orientada pelo comportamento de outras pessoas. Tipos:', ['**Racional com relação a fins:** busca um objetivo calculado','**Racional com relação a valores:** guiada por convicções','**Afetiva:** guiada por emoções','**Tradicional:** guiada pelo costume'], null],
  ['Tipos de dominação', null, ['**Tradicional:** baseada nos costumes (reis, patriarcas)','**Carismática:** baseada nas qualidades de um líder','**Legal ou racional:** baseada em leis e regras impessoais'], null],
  ['Burocracia e ética protestante', 'A burocracia organiza a sociedade com regras, hierarquia e impessoalidade. Em "A Ética Protestante e o Espírito do Capitalismo", Weber mostra que valores religiosos (trabalho, disciplina, poupança) ajudaram o capitalismo a se desenvolver.', null, null]
], enem:'Os tipos de dominação são muito cobrados. A dominação legal é a da burocracia e do Estado moderno.' },

{ t:'Cultura e sociedade', p:'a', ic:'🎭', s:[
  ['O que é cultura?', 'Cultura é tudo o que é produzido pelos seres humanos ao viverem em sociedade.', ['Formas de pensar e de agir','Costumes, valores e tradições','Língua, arte, religião e alimentação'], 'Em resumo: cultura é o modo de vida de um povo.'],
  ['Etnocentrismo x relativismo', null, ['**Etnocentrismo:** julgar outras culturas tomando a própria como padrão (e superior)','**Relativismo cultural:** compreender cada cultura dentro do seu próprio contexto'], 'O respeito à diversidade cultural parte do relativismo.'],
  ['Conceitos importantes', null, ['**Aculturação:** perda de traços culturais pelo contato com outra cultura dominante','**Sincretismo:** mistura de elementos de culturas diferentes (ex.: religiões afro-brasileiras e catolicismo)','**Cultura popular x erudita:** produzida pelo povo x ligada às elites e instituições'], null]
], enem:'Muitas questões pedem a postura que respeita a diversidade. Alternativas etnocêntricas costumam ser as erradas.' },

{ t:'Socialização', p:'m', ic:'👶', s:[
  ['O que é socialização?', 'É o processo pelo qual o indivíduo aprende a viver em sociedade.', ['Regras','Valores','Costumes','Formas de comportamento'], 'É o processo que transforma um indivíduo em um ser social.'],
  ['Primária e secundária', null, ['**Primária:** na infância, principalmente na família','**Secundária:** ao longo da vida, em escola, trabalho, igreja, mídia e grupos de amigos'], null],
  ['Agentes de socialização', null, ['**Família:** primeiro contato social, valores básicos','**Escola:** conhecimentos formais e convivência','**Mídia e redes sociais:** influenciam opiniões e comportamentos','**Grupos de amigos:** identidade e pertencimento'], null]
], enem:'Questões sobre redes sociais e juventude costumam envolver a mídia como agente de socialização.' },

{ t:'Estratificação social', p:'a', ic:'🪜', s:[
  ['O que é?', 'É a divisão da sociedade em **camadas**, com acesso desigual a riqueza, poder e prestígio.', null, null],
  ['Tipos de estratificação', null, ['**Castas:** posição definida pelo nascimento, sem mobilidade (ex.: Índia tradicional)','**Estamentos:** baseada em tradição e privilégios (ex.: sociedade feudal)','**Classes sociais:** baseada principalmente na renda, com possibilidade de mobilidade'], null],
  ['Mobilidade social', 'É a mudança de posição de uma pessoa ou grupo na estrutura social.', ['**Vertical:** subir ou descer de camada','**Horizontal:** mudar de posição sem mudar de camada'], 'No Brasil, a educação é vista como um dos principais caminhos de mobilidade.']
], enem:'Gráficos de desigualdade de renda e de acesso à educação são frequentes. Relacione desigualdade a fatores históricos.' },

{ t:'Trabalho e sociedade', p:'a', ic:'👷', s:[
  ['O trabalho para a Sociologia', 'O trabalho organiza a vida social, cria identidades e gera relações de poder.', null, null],
  ['Modelos de produção', null, ['**Taylorismo:** controle do tempo e divisão de tarefas','**Fordismo:** linha de montagem e produção em massa','**Toyotismo:** produção flexível, "just in time", trabalhador multifuncional'], null],
  ['Transformações recentes', null, ['Terceirização e trabalho temporário','Informalidade','Trabalho por aplicativos ("uberização")','Automação e inteligência artificial'], 'Esses processos podem gerar precarização: menos direitos e mais insegurança.']
], enem:'Fordismo x toyotismo e a precarização do trabalho por aplicativos são temas recorrentes.' },

{ t:'Poder, política e Estado', p:'a', ic:'⚖️', s:[
  ['O que é poder?', 'É a capacidade de uma pessoa ou grupo de influenciar ou controlar o comportamento de outras.', ['Na família','Na escola','No trabalho','Na política'], null],
  ['O que é política?', 'É o conjunto de ações e decisões que organizam a vida em sociedade: distribuição de recursos, resolução de conflitos e tomada de decisões.', null, null],
  ['O que é Estado?', 'O Estado é formado por:', ['**Território:** espaço geográfico','**População:** pessoas que vivem nele','**Governo:** quem exerce o poder'], 'Para Weber, o Estado detém o monopólio do uso legítimo da força.'],
  ['Formas de governo', null, ['**Democracia:** poder vem do povo, por eleições e participação','**Autoritarismo e ditadura:** poder concentrado, sem liberdade política'], null]
], enem:'Questões sobre democracia, participação política e direitos aparecem muito, às vezes ligadas a Montesquieu e à separação dos poderes.' },

{ t:'Instituições sociais', p:'m', ic:'🏛️', s:[
  ['O que são?', 'São estruturas estáveis que organizam a vida em sociedade e transmitem regras e valores.', null, null],
  ['Principais instituições', null, ['**Família:** reprodução e cuidado','**Escola:** educação e formação','**Religião:** crenças e valores','**Estado:** organização política','**Mercado:** produção e trocas econômicas'], null],
  ['Mudanças nas instituições', 'As instituições mudam com o tempo.', ['Novos arranjos familiares','Ensino a distância','Diversidade religiosa'], 'Mudanças nas instituições mostram que elas são construções sociais.']
], enem:'Questões sobre novos arranjos familiares pedem uma leitura sem preconceito: a família é uma instituição que se transforma.' },

{ t:'Ideologia e indústria cultural', p:'a', ic:'📺', s:[
  ['Ideologia', 'Conjunto de ideias que explica e justifica a realidade. Para Marx, a ideologia da classe dominante pode **esconder as desigualdades** e fazê-las parecer naturais.', null, null],
  ['Indústria cultural', 'Conceito de **Adorno e Horkheimer** (Escola de Frankfurt).', ['A cultura vira mercadoria','Produção em série, padronizada','Público visto como consumidor passivo','Entretenimento que distrai e reduz o pensamento crítico'], null],
  ['Cultura de massa hoje', 'Algoritmos, influenciadores e plataformas de streaming renovam o debate.', null, 'Pergunta típica: o consumo de conteúdo é escolha livre ou é direcionado?']
], enem:'Indústria cultural é muito cobrada com textos sobre música, cinema, publicidade e redes sociais.' },

{ t:'Movimentos sociais', p:'a', ic:'✊', s:[
  ['O que são?', 'São ações coletivas organizadas que buscam mudanças (ou resistem a elas) na sociedade.', null, null],
  ['Exemplos', null, ['Movimento operário e sindical','Movimento feminista','Movimento negro','Movimentos indígenas','Movimentos pela terra (como o MST)','Movimento LGBTQIA+','Movimentos ambientalistas'], null],
  ['Importância', 'Os movimentos sociais ampliaram direitos e deram visibilidade a grupos excluídos.', null, 'Muitos direitos da Constituição de 1988 foram resultado da pressão de movimentos sociais.']
], enem:'Aparecem como protagonistas da conquista de direitos. A alternativa correta costuma reconhecer a legitimidade da participação social.' },

{ t:'Globalização', p:'a', ic:'🌐', s:[
  ['O que é?', 'É a integração econômica, cultural e política entre países, acelerada pelas tecnologias de comunicação e transporte.', ['Fluxo de mercadorias e capitais','Circulação de informações','Empresas multinacionais'], null],
  ['Efeitos', null, ['Acesso a produtos e culturas de todo o mundo','Aumento da desigualdade entre países e dentro deles','Homogeneização cultural','Reações locais e valorização de identidades'], null],
  ['Visão crítica', 'O geógrafo **Milton Santos** falou em uma "globalização perversa", que beneficia poucos e exclui muitos.', null, null]
], enem:'Charges sobre consumo global e desigualdade são comuns. Pense sempre nos dois lados: integração e exclusão.' },

{ t:'Sociologia no Brasil', p:'m', ic:'🇧🇷', s:[
  ['Pensadores clássicos', null, ['**Gilberto Freyre**, "Casa-Grande & Senzala": formação da sociedade brasileira a partir da família patriarcal','**Sérgio Buarque de Holanda**, "Raízes do Brasil": o "homem cordial", que mistura o público e o privado','**Florestan Fernandes:** estudos sobre racismo e a integração do negro na sociedade de classes'], null],
  ['Democracia racial', 'A ideia de que o Brasil viveria em harmonia racial foi criticada por mostrar uma igualdade que **não existe na prática**.', null, null],
  ['Temas atuais', null, ['Desigualdade social e regional','Racismo estrutural','Violência urbana','Questão indígena e agrária'], null]
], enem:'O "homem cordial" e a crítica ao mito da democracia racial aparecem em questões de Sociologia e de História.' },

{ t:'Temas contemporâneos', p:'a', ic:'📱', s:[
  ['Sociedade digital', 'As redes sociais mudaram a comunicação, o trabalho e a política.', ['Bolhas de informação e algoritmos','Desinformação (fake news)','Exposição e vigilância','Cultura do cancelamento'], null],
  ['Outros temas', null, ['Crise climática','Saúde mental','Migrações e refugiados','Envelhecimento da população'], null],
  ['Como analisar', 'Use os conceitos clássicos para entender problemas novos.', null, 'Exemplo: a vigilância das redes pode ser analisada com Foucault; a desigualdade digital, com Marx e a estratificação.']
], enem:'O ENEM gosta de temas atuais com conceitos clássicos. Treine relacionar os dois.' },

{ t:'Metodologia da pesquisa sociológica', p:'m', ic:'📊', s:[
  ['Como a Sociologia pesquisa?', 'Ela usa métodos científicos para estudar a sociedade.', null, null],
  ['Tipos de pesquisa', null, ['**Quantitativa:** números e estatísticas (questionários, censos)','**Qualitativa:** entrevistas, observação e análise de significados'], null],
  ['Técnicas', null, ['Questionários','Entrevistas','Observação participante','Análise de documentos','Estudos de caso'], 'O pesquisador precisa evitar preconceitos e manter rigor.']
], enem:'Questões trazem gráficos e tabelas: leia com atenção os eixos e a fonte antes de responder.' },

{ t:'Desvio social e controle social', p:'m', ic:'🚦', s:[
  ['Desvio social', 'É o comportamento que foge das normas aceitas por um grupo. O que é desvio muda conforme a cultura e a época.', null, null],
  ['Controle social', 'São os mecanismos que garantem que as normas sejam seguidas.', ['**Formal:** leis, polícia, justiça, regras escritas','**Informal:** olhares, críticas, fofocas, elogios'], null],
  ['Foucault e a vigilância', 'Em "Vigiar e Punir", **Michel Foucault** analisou a sociedade disciplinar, com o exemplo do panóptico: uma prisão em que o preso se sente sempre observado.', null, 'Hoje o conceito é usado para pensar câmeras, dados e redes sociais.']
], enem:'Foucault e o panóptico aparecem em questões sobre vigilância digital e sistema prisional.' },

{ t:'Cidadania e direitos humanos', p:'a', ic:'🗳️', s:[
  ['O que é cidadania?', 'É o exercício de direitos e deveres em uma sociedade.', null, null],
  ['Tipos de direitos', null, ['**Civis:** liberdade, propriedade, igualdade perante a lei','**Políticos:** votar e ser votado, participar','**Sociais:** educação, saúde, trabalho, moradia'], null],
  ['Direitos humanos', 'A **Declaração Universal dos Direitos Humanos (1948)** afirma que todos nascem livres e iguais em dignidade e direitos.', null, 'No Brasil, a Constituição de 1988 ficou conhecida como "Constituição Cidadã".']
], enem:'Cidadania e direitos aparecem em quase toda prova, inclusive na Redação. A alternativa certa amplia direitos, nunca os restringe.' },

{ t:'Sociedade de consumo', p:'a', ic:'🛍️', s:[
  ['O que é?', 'É uma sociedade em que o consumo se torna central para a identidade e para as relações sociais.', null, null],
  ['Características', null, ['Publicidade que cria desejos','Obsolescência programada (produtos feitos para durar pouco)','Status ligado ao que se tem','Crédito e endividamento'], null],
  ['Consequências', null, ['Impactos ambientais e excesso de lixo','Endividamento das famílias','Sensação de insatisfação constante'], 'Consumo consciente é a resposta mais comum nas questões.']
], enem:'Charges sobre consumo e meio ambiente são clássicas. Relacione consumo, publicidade e sustentabilidade.' },

{ t:'Modernidade líquida', p:'a', ic:'💧', s:[
  ['O conceito', 'Criado pelo sociólogo polonês **Zygmunt Bauman**. Na modernidade líquida, as relações, os empregos e os valores são **frágeis e passageiros**, como um líquido que não mantém a forma.', null, null],
  ['Onde aparece?', null, ['Relações amorosas e amizades rápidas e descartáveis','Empregos instáveis','Identidades que mudam o tempo todo','Insegurança e ansiedade'], null],
  ['Modernidade sólida x líquida', null, ['**Sólida:** estabilidade, carreira para a vida toda, laços duradouros','**Líquida:** flexibilidade, incerteza, laços frágeis'], null]
], enem:'Bauman é um dos repertórios mais usados em questões e na Redação sobre redes sociais e relações humanas.' },

{ t:'Modernidade líquida x sociedade de consumo', p:'m', ic:'🔄', s:[
  ['A relação entre os dois', 'Para Bauman, na modernidade líquida as pessoas passam a se relacionar como **consumidores**.', ['Relações tratadas como produtos: "descartáveis"','Busca constante por novidade','Felicidade associada à compra'], null],
  ['Consumo e identidade', 'Compramos para mostrar quem somos. A identidade vira algo que se monta e se troca, como um produto.', null, 'Exemplo: tendências de redes sociais que mudam toda semana.'],
  ['Visão crítica', 'Esse modelo gera insatisfação permanente, porque sempre existe algo novo a desejar.', null, null]
], enem:'Questões juntam Bauman, consumo e redes sociais. Saiba explicar a ligação entre os conceitos.' },

{ t:'Anomia social', p:'m', ic:'🌀', s:[
  ['O que é anomia?', 'Conceito de **Durkheim**: situação em que as normas sociais perdem força, e as pessoas ficam sem referências claras de comportamento.', null, null],
  ['Quando acontece?', null, ['Crises econômicas','Mudanças sociais muito rápidas','Enfraquecimento das instituições'], null],
  ['Consequências', null, ['Sensação de desorientação','Aumento de conflitos e violência','Comportamentos autodestrutivos'], 'Durkheim relacionou a anomia a um tipo de suicídio, mostrando que até atos individuais têm causas sociais.']
], enem:'Anomia aparece em textos sobre crises e violência. Lembre que o conceito é de Durkheim.' },

{ t:'Capital cultural', p:'a', ic:'🎓', s:[
  ['O conceito', 'Criado por **Pierre Bourdieu**, sociólogo francês. Capital cultural são os conhecimentos, hábitos e gostos que uma pessoa acumula, principalmente na família.', null, null],
  ['Formas de capital cultural', null, ['**Incorporado:** jeito de falar, gostos, conhecimentos','**Objetivado:** livros, obras de arte, instrumentos','**Institucionalizado:** diplomas e certificados'], null],
  ['Escola e desigualdade', 'Para Bourdieu, a escola valoriza o capital cultural das classes mais altas e acaba **reproduzindo desigualdades**.', null, 'Ele também criou o conceito de violência simbólica: dominação invisível, aceita como natural.']
], enem:'Bourdieu aparece em questões sobre desigualdade educacional. Capital cultural e violência simbólica são os conceitos-chave.' }
]};
