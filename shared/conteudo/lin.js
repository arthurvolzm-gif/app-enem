/* Linguagens: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.lin = { id:'lin', nome:'Linguagens', icone:'📖', emojis:'📖 🎭 🎨 🗣️',
capa:'linear-gradient(160deg,#4a0f2e,#a0275e 55%,#ff9f6b)',
sub:'Português, Literatura, Artes, Educação Física e Língua Estrangeira: os 25 temas que mais caem no ENEM.',
temas:[
{ t:'Interpretação de texto', p:'a', ic:'🔍', s:[
  ['A habilidade mais cobrada', 'Grande parte da prova de Linguagens (e de todo o ENEM) depende de interpretar bem.', null, null],
  ['Passo a passo', null, ['1. Leia o enunciado primeiro, para saber o que procurar','2. Identifique o tema e a ideia central','3. Perceba o objetivo do autor (informar, convencer, criticar, divertir)','4. Volte ao texto para confirmar a alternativa'], null],
  ['Armadilhas', null, ['Alternativas com "sempre", "nunca", "apenas" costumam extrapolar o texto','Resposta "verdadeira" que não está no texto também está errada','Cuidado com a sua opinião: vale o que o texto diz'], null],
  ['Inferência', 'É a conclusão que o texto permite tirar, mesmo sem dizer de forma explícita.', null, null]
], enem:'Responda com base no texto. A alternativa certa é a que o texto sustenta, não a que parece mais "bonita".' },

{ t:'Gêneros textuais', p:'a', ic:'📰', s:[
  ['O que são?', 'Formas de texto usadas socialmente, com função, estrutura e linguagem próprias.', null, null],
  ['Exemplos', null, ['**Notícia:** informa um fato recente, linguagem objetiva','**Reportagem:** aprofunda um tema','**Artigo de opinião:** defende um ponto de vista','**Crônica:** fato do cotidiano com reflexão, linguagem leve','**Charge e tirinha:** humor crítico','**Anúncio publicitário:** persuasão','**Receita, manual, bula:** instrucionais'], null],
  ['Tipos textuais', 'Narração, descrição, dissertação, injunção (instruções) e exposição.', null, 'Um gênero pode misturar vários tipos.']
], enem:'A pergunta mais comum é: "qual é a finalidade deste texto?". Identifique o gênero para responder.' },

{ t:'Funções da linguagem', p:'a', ic:'📣', s:[
  ['As seis funções', null, ['**Referencial:** foco na informação (notícias)','**Emotiva:** foco no emissor e nos sentimentos (diários, poemas)','**Conativa ou apelativa:** foco no receptor, para convencer (propagandas)','**Fática:** foco no canal, testa a comunicação ("alô?")','**Metalinguística:** a linguagem fala de si mesma (dicionário, poema sobre poesia)','**Poética:** foco na forma da mensagem (rimas, jogos de palavras)'], null],
  ['Predominância', 'Um texto pode ter várias funções, mas uma costuma predominar.', null, null]
], enem:'Identificar a função predominante, principalmente a conativa (anúncios) e a metalinguística.' },

{ t:'Variação linguística', p:'a', ic:'🗣️', s:[
  ['Tipos de variação', null, ['**Regional (diatópica):** sotaques e palavras de cada região','**Social (diastrática):** idade, grupo, escolaridade','**Histórica (diacrônica):** mudanças ao longo do tempo','**Situacional (diafásica):** formal ou informal conforme o contexto'], null],
  ['Norma-padrão', 'É a variedade de prestígio, usada em situações formais. Não é "a única certa".', null, null],
  ['Preconceito linguístico', 'Discriminar alguém pelo jeito de falar. O conceito correto é de **adequação** ao contexto.', null, null]
], enem:'Questão quase garantida. A alternativa certa valoriza a diversidade e rejeita o preconceito linguístico.' },

{ t:'Coesão e coerência', p:'a', ic:'🔗', s:[
  ['Coesão', 'É a ligação entre as partes do texto, feita por elementos linguísticos.', ['Pronomes que retomam termos ("ele", "essa ideia")','Sinônimos','Conectivos (porém, portanto, além disso)'], null],
  ['Coerência', 'É a lógica do texto: as ideias fazem sentido juntas e não se contradizem.', null, null],
  ['Conectivos e sentido', null, ['Oposição: mas, porém, contudo','Causa: porque, já que','Conclusão: portanto, logo','Concessão: embora, ainda que'], 'Trocar o conectivo pode mudar todo o sentido da frase.']
], enem:'Questões pedem o sentido de um conectivo ou a que termo um pronome se refere.' },

{ t:'Figuras de linguagem', p:'a', ic:'🎭', s:[
  ['Figuras de palavra', null, ['**Metáfora:** comparação implícita ("Meu coração é um balde")','**Comparação:** com conectivo ("forte como um touro")','**Metonímia:** troca por relação de proximidade ("li Machado")','**Personificação:** dar características humanas a seres não humanos'], null],
  ['Figuras de pensamento', null, ['**Ironia:** dizer o contrário do que se pensa','**Hipérbole:** exagero ("chorei rios")','**Eufemismo:** suavizar ("ele partiu")','**Antítese:** ideias opostas','**Paradoxo:** ideias opostas que se juntam ("dor que desatina sem doer")'], null],
  ['Figuras de som', null, ['**Aliteração:** repetição de consoantes','**Assonância:** repetição de vogais','**Onomatopeia:** imitação de sons'], null]
], enem:'Ironia em charges e metáforas em poemas e propagandas são as mais cobradas.' },

{ t:'Intertextualidade', p:'m', ic:'🔁', s:[
  ['O que é?', 'É o diálogo entre textos: um texto retoma outro.', null, null],
  ['Formas', null, ['**Paráfrase:** recria o texto mantendo o sentido','**Paródia:** recria com humor ou crítica, mudando o sentido','**Citação:** reprodução direta','**Alusão:** referência indireta'], null],
  ['Exemplo clássico', 'A "Canção do Exílio", de Gonçalves Dias ("Minha terra tem palmeiras"), foi parodiada por vários autores, como Oswald de Andrade e Murilo Mendes.', null, null]
], enem:'Reconhecer paródias em propagandas, memes e poemas.' },

{ t:'Gramática no texto', p:'m', ic:'✏️', s:[
  ['Como a gramática cai', 'O ENEM cobra a gramática **dentro do texto**, pelo efeito de sentido, não pela decoreba.', null, null],
  ['Pontos importantes', null, ['**Pontuação:** vírgula pode mudar o sentido','**Tempos verbais:** certeza, hipótese, ordem','**Pronomes:** quem é "ele" no texto?','**Diminutivo e aumentativo:** carinho, ironia ou desprezo','**Aspas:** destaque, citação ou ironia'], null],
  ['Exemplo', '"Não, espere." x "Não espere." A vírgula muda totalmente a mensagem.', null, null]
], enem:'Pergunte sempre: "que efeito esse recurso produz no texto?".' },

{ t:'Texto publicitário', p:'m', ic:'📢', s:[
  ['Características', null, ['Função conativa (apelo ao leitor)','Verbos no imperativo ("compre", "experimente")','Linguagem verbal e não verbal juntas','Slogans curtos e marcantes'], null],
  ['Estratégias de persuasão', null, ['Apelo emocional','Uso de autoridade ou celebridades','Jogo de palavras e duplo sentido','Criação de necessidade'], null],
  ['Leitura crítica', 'Perceba o que a propaganda quer que você faça e quais recursos usa.', null, null]
], enem:'Campanhas públicas (vacinação, trânsito, prevenção) são muito usadas nas questões.' },

{ t:'Charges, tirinhas e memes', p:'a', ic:'😂', s:[
  ['Charge', 'Desenho humorístico que critica um fato atual, geralmente político ou social.', null, null],
  ['Tirinha', 'Sequência curta de quadrinhos, com humor e muitas vezes crítica.', null, null],
  ['Como interpretar', null, ['Observe a imagem e o texto juntos','Identifique o alvo da crítica','Perceba a ironia ou o exagero','Relacione com o contexto social'], 'O humor costuma nascer da quebra de expectativa.']
], enem:'Aparecem em várias provas, inclusive de Humanas. Descubra o que está sendo criticado.' },

{ t:'Quinhentismo e Barroco', p:'m', ic:'⛵', s:[
  ['Quinhentismo (século XVI)', 'Textos sobre o Brasil recém-descoberto.', ['**Literatura informativa:** Carta de Pero Vaz de Caminha','**Literatura jesuítica:** catequese (Padre José de Anchieta)'], null],
  ['Barroco (século XVII)', 'Arte do conflito entre fé e razão, céu e terra, espírito e corpo.', ['Antíteses e paradoxos','Linguagem rebuscada','**Gregório de Matos:** o "Boca do Inferno", poesia satírica','**Padre Antônio Vieira:** sermões'], null]
], enem:'A visão europeia sobre os indígenas na Carta de Caminha e os conflitos do Barroco.' },

{ t:'Arcadismo', p:'m', ic:'🐑', s:[
  ['Contexto', 'Século XVIII, ligado ao Iluminismo e ao ciclo do ouro em Minas Gerais.', null, null],
  ['Características', null, ['Simplicidade e equilíbrio','Valorização da vida no campo (bucolismo)','Pastores e pastoras como personagens','Expressões latinas: "fugere urbem" (fugir da cidade), "carpe diem" (aproveite o dia)'], null],
  ['Autores', null, ['**Tomás Antônio Gonzaga:** "Marília de Dirceu"','**Cláudio Manuel da Costa**','**Basílio da Gama:** "O Uraguai"'], 'Vários árcades participaram da Inconfidência Mineira.']
], enem:'Bucolismo e a relação dos poetas árcades com a Inconfidência Mineira.' },

{ t:'Romantismo', p:'a', ic:'💘', s:[
  ['Características', null, ['Subjetividade e sentimentalismo','Idealização do amor e da mulher','Nacionalismo','Fuga da realidade (morte, sonho, natureza)'], null],
  ['Gerações da poesia', null, ['**1ª (nacionalista/indianista):** Gonçalves Dias','**2ª (ultrarromântica, "mal do século"):** Álvares de Azevedo','**3ª (condoreira, social):** Castro Alves, "o poeta dos escravos"'], null],
  ['Prosa', '**José de Alencar:** romances indianistas (Iracema, O Guarani), urbanos e regionalistas.', null, 'O indígena foi idealizado como herói nacional.']
], enem:'Idealização do indígena e a poesia social de Castro Alves ("Navio Negreiro") são cobradas.' },

{ t:'Realismo e Naturalismo', p:'a', ic:'🔎', s:[
  ['Realismo', 'Retrata a realidade de forma objetiva e crítica.', ['Análise psicológica','Crítica à burguesia, ao casamento por interesse e à hipocrisia','**Machado de Assis:** "Memórias Póstumas de Brás Cubas", "Dom Casmurro"'], 'Em "Dom Casmurro", a dúvida: Capitu traiu Bentinho?'],
  ['Naturalismo', 'Influenciado pelo determinismo: o ser humano é produto do meio, da raça e do momento.', ['Personagens animalizados','Temas sociais','**Aluísio Azevedo:** "O Cortiço"'], null],
  ['Parnasianismo', 'Na poesia: "arte pela arte", forma perfeita, rimas ricas (Olavo Bilac).', null, null]
], enem:'Machado de Assis é o autor mais cobrado. Ironia e crítica social são as marcas.' },

{ t:'Simbolismo e Pré-Modernismo', p:'m', ic:'🌫️', s:[
  ['Simbolismo', null, ['Musicalidade e sinestesia (mistura de sentidos)','Espiritualidade e mistério','**Cruz e Sousa:** "o Dante negro"','**Alphonsus de Guimaraens**'], null],
  ['Pré-Modernismo', 'Início do século XX: denúncia da realidade brasileira.', ['**Euclides da Cunha:** "Os Sertões" (Guerra de Canudos)','**Lima Barreto:** "Triste Fim de Policarpo Quaresma", crítica ao nacionalismo ufanista e ao racismo','**Monteiro Lobato:** Jeca Tatu','**Augusto dos Anjos:** poesia com vocabulário científico'], null]
], enem:'Os Sertões e Lima Barreto aparecem ligados à História do início da República.' },

{ t:'Modernismo: 1ª fase', p:'a', ic:'🎨', s:[
  ['Semana de Arte Moderna (1922)', 'Marco do Modernismo em São Paulo, com Mário de Andrade, Oswald de Andrade, Anita Malfatti e outros.', null, null],
  ['Características', null, ['Ruptura com a arte tradicional','Linguagem coloquial e verso livre','Humor e paródia','Valorização da identidade brasileira'], null],
  ['Obras e ideias', null, ['**Manifesto Antropófago (Oswald):** "devorar" a cultura estrangeira e transformá-la em algo brasileiro','**"Macunaíma" (Mário):** "o herói sem nenhum caráter"','**Tarsila do Amaral:** "Abaporu"'], null]
], enem:'A antropofagia cultural é um dos conceitos mais cobrados de Literatura e Artes.' },

{ t:'Modernismo: 2ª e 3ª fases', p:'a', ic:'🌵', s:[
  ['Poesia de 30', null, ['**Carlos Drummond de Andrade:** "No meio do caminho tinha uma pedra", reflexão sobre o mundo','**Cecília Meireles:** lirismo e reflexão sobre o tempo','**Vinicius de Moraes**','**Manuel Bandeira**'], null],
  ['Romance de 30 (regionalista)', null, ['**Graciliano Ramos:** "Vidas Secas" (seca e opressão)','**Rachel de Queiroz:** "O Quinze"','**Jorge Amado**'], null],
  ['Geração de 45 e depois', null, ['**Guimarães Rosa:** "Grande Sertão: Veredas", linguagem inventiva','**Clarice Lispector:** fluxo de consciência, introspecção','**João Cabral de Melo Neto:** "Morte e Vida Severina"'], null]
], enem:'Vidas Secas, Drummond e Clarice são muito cobrados. Leia os trechos com atenção.' },

{ t:'Literatura contemporânea', p:'m', ic:'📗', s:[
  ['Características', null, ['Diversidade de vozes e temas','Literatura periférica e marginal','Literatura indígena, negra e feminina','Mistura de gêneros'], null],
  ['Autores', null, ['**Conceição Evaristo:** "escrevivência", experiência da mulher negra','**Carolina Maria de Jesus:** "Quarto de Despejo"','**Ailton Krenak**','**Ferréz:** literatura periférica'], null],
  ['Poesia e música', 'Letras de canções e o rap também aparecem como manifestações literárias.', null, null]
], enem:'Carolina Maria de Jesus e Conceição Evaristo aparecem com frequência nas provas recentes.' },

{ t:'Vanguardas europeias', p:'m', ic:'🖼️', s:[
  ['O que foram', 'Movimentos artísticos do início do século XX que romperam com a arte tradicional.', null, null],
  ['Principais', null, ['**Expressionismo:** emoção e angústia (Munch, "O Grito")','**Cubismo:** formas geométricas, vários ângulos ao mesmo tempo (Picasso)','**Futurismo:** velocidade, máquinas e modernidade','**Dadaísmo:** absurdo e crítica à arte (Duchamp)','**Surrealismo:** sonhos e inconsciente (Dalí)'], null],
  ['Influência no Brasil', 'Inspiraram os modernistas da Semana de 22.', null, null]
], enem:'Reconhecer a vanguarda por uma imagem ou um manifesto é uma questão clássica.' },

{ t:'Arte brasileira e contemporânea', p:'m', ic:'🏺', s:[
  ['Arte brasileira', null, ['Arte indígena e afro-brasileira','Barroco mineiro: Aleijadinho','Modernismo: Tarsila, Portinari, Di Cavalcanti'], null],
  ['Arte contemporânea', null, ['**Instalação:** obra que ocupa o espaço','**Performance:** o corpo do artista como obra','**Arte urbana:** grafite','**Arte conceitual:** a ideia vale mais que o objeto'], null],
  ['O papel do público', 'Na arte contemporânea, o espectador muitas vezes participa da obra (Hélio Oiticica, Lygia Clark).', null, null]
], enem:'Questões discutem o que é arte e o papel do público nas obras contemporâneas.' },

{ t:'Música e manifestações culturais', p:'m', ic:'🎶', s:[
  ['Música brasileira', null, ['Samba e choro','Bossa nova','Tropicália (Caetano Veloso, Gilberto Gil)','MPB e músicas de protesto na ditadura','Rap, funk e manifestações periféricas'], null],
  ['Patrimônio cultural imaterial', null, ['Capoeira','Samba de roda','Frevo','Ofício das baianas de acarajé'], null],
  ['Cultura popular', 'Festas, danças e saberes tradicionais expressam a identidade dos grupos.', null, null]
], enem:'Letras de canções são usadas como texto. A Tropicália e a música de protesto aparecem muito.' },

{ t:'Educação Física e práticas corporais', p:'m', ic:'🤸', s:[
  ['Cultura corporal', 'Esporte, dança, lutas, ginástica e brincadeiras são práticas culturais, não só atividades físicas.', null, null],
  ['Temas cobrados', null, ['Sedentarismo e saúde','Padrões de beleza e transtornos de imagem','Uso de anabolizantes','Inclusão e esportes adaptados','Esporte como espetáculo e mercadoria'], null],
  ['Visão crítica', 'O culto ao corpo "perfeito" pode gerar problemas de saúde e preconceito.', null, null]
], enem:'Padrões de beleza da mídia e a prática de atividade física como saúde e lazer.' },

{ t:'Tecnologias da informação e comunicação', p:'m', ic:'💻', s:[
  ['Linguagem digital', null, ['Hipertexto: textos com links','Linguagem multimodal (texto, imagem, vídeo, som)','Abreviações e emojis'], null],
  ['Temas atuais', null, ['Fake news e checagem de fatos','Exposição nas redes e privacidade','Inclusão digital','Algoritmos e bolhas'], null],
  ['Leitura crítica', 'Verifique a fonte, a data e se outros veículos confirmam a informação.', null, null]
], enem:'Questões sobre desinformação e uso das redes são frequentes nas provas recentes.' },

{ t:'Língua estrangeira: estratégias de leitura', p:'a', ic:'🌍', s:[
  ['Como é a prova', 'São 5 questões de inglês ou espanhol (você escolhe na inscrição), sempre de interpretação de texto.', null, null],
  ['Estratégias', null, ['Leia o enunciado em português primeiro','Busque a ideia geral (skimming)','Procure a informação específica (scanning)','Use as palavras cognatas (parecidas com o português)','Observe imagens, títulos e números'], null],
  ['Falsos cognatos', null, ['Inglês: "pretend" = fingir; "actually" = na verdade; "push" = empurrar','Espanhol: "exquisito" = delicioso; "embarazada" = grávida; "polvo" = poeira'], null]
], enem:'Não é preciso entender cada palavra. Os gêneros mais usados são poemas, letras de música, tirinhas e notícias.' },

{ t:'Leitura de textos multimodais', p:'m', ic:'🖼️', s:[
  ['O que são?', 'Textos que combinam diferentes linguagens: palavras, imagens, cores, gráficos e sons.', null, null],
  ['Como ler', null, ['Relacione o texto verbal com a imagem','Observe cores, tamanhos e posição dos elementos','Perceba o que a imagem acrescenta ao sentido','Leia infográficos com atenção aos dados'], null],
  ['Exemplos', null, ['Cartazes de campanhas','Infográficos','Capas de revista','Memes'], null]
], enem:'Muitas questões só podem ser respondidas juntando a imagem e o texto. Não ignore nenhum dos dois.' }
]};
