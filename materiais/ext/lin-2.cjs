/* Linguagens: temas 6 a 10 */
module.exports = [
{ t:'Figuras de linguagem',
d1:[
 ['Figuras de palavras', 'Mudam o sentido das palavras.', ['**Metáfora:** comparação implícita ("Ela é um anjo")','**Comparação:** com conectivo ("forte como um touro")','**Metonímia:** troca por relação de proximidade (autor pela obra, parte pelo todo)','**Catacrese:** metáfora já incorporada ("pé da mesa")','**Sinestesia:** mistura de sentidos ("voz doce")','**Perífrase:** expressão no lugar de um nome ("a Cidade Maravilhosa")'], null],
 ['Figuras de pensamento', 'Atuam nas ideias.', ['**Antítese:** oposição de ideias','**Paradoxo:** contradição aparente','**Ironia:** dizer o contrário do que se pensa','**Hipérbole:** exagero','**Eufemismo:** suavização','**Prosopopeia (personificação):** atribuir ações humanas a seres não humanos','**Gradação**'], 'Ironia depende do contexto: o sentido é invertido.'],
 ['Figuras de construção e de som', 'Sintaxe e sonoridade.', ['**Elipse, zeugma, pleonasmo, inversão (hipérbato)**','**Anáfora:** repetição no início','**Aliteração:** repetição de consoantes','**Assonância:** repetição de vogais','**Onomatopeia**'], null]
],
d2:[
 ['Como identificar', 'Estratégia.', ['Pergunte: o sentido é literal ou figurado?','Há comparação explícita? Comparação','Troca de termo por outro próximo? Metonímia','Exagero? Hipérbole','Oposição? Antítese'], null],
 ['Efeitos de sentido', 'Para que servem.', ['Dar expressividade e emoção','Criar humor e crítica','Persuadir (publicidade)','Poesia e música'], null],
 ['Armadilhas', 'Cuidado.', ['Metáfora × comparação','Antítese × paradoxo','Metonímia × sinédoque (parte pelo todo)','Ironia pede contexto'], null]
],
ex:[
 { q:'Em "Aquele político é uma raposa", há:', a:['metonímia','metáfora','antítese','ironia','hipérbole'], g:'B', c:'Comparação implícita.' },
 { q:'"Já te disse mil vezes!" apresenta:', a:['eufemismo','hipérbole','antítese','sinestesia','paradoxo'], g:'B', c:'Exagero.' }
],
pr:[
 { q:'"Voz doce" é um exemplo de:', a:['sinestesia','metonímia','catacrese','pleonasmo','antítese'], g:'A', c:'Mistura de paladar e audição.' },
 { q:'"O vento sussurrava segredos" apresenta:', a:['prosopopeia','metonímia','hipérbole','ironia','elipse'], g:'A', c:'Personificação.' },
 { q:'"Ele faleceu" em vez de "morreu" é:', a:['eufemismo','hipérbole','antítese','ironia','paradoxo'], g:'A', c:'Suavização.' },
 { q:'"Lia Machado de Assis" (o autor pela obra) é:', a:['metonímia','metáfora','comparação','antítese','sinestesia'], g:'A', c:'Relação de proximidade.' }
],
erros:['Confundir metáfora e comparação.','Trocar antítese e paradoxo.','Ignorar o contexto da ironia.','Esquecer do efeito de sentido.'],
check:['reconhecer as principais figuras','distinguir metáfora, comparação e metonímia','explicar os efeitos','aplicar em poemas e anúncios']
},

{ t:'Intertextualidade',
d1:[
 ['Conceito', 'Diálogo entre textos.', ['Um texto retoma, cita ou transforma outro','Exige que o leitor reconheça a fonte','Pode ocorrer entre gêneros e linguagens (música, pintura, cinema)','Constrói humor, crítica ou homenagem'], null],
 ['Formas', 'Mecanismos.', ['**Citação**','**Paráfrase:** reescrita com as mesmas ideias','**Paródia:** imitação com efeito crítico ou cômico (muda o sentido)','**Alusão:** referência indireta','**Epígrafe**','**Pastiche**','**Tradução, adaptação**'], 'Paráfrase mantém o sentido; paródia o subverte.'],
 ['Interdiscursividade', 'Discursos.', ['Diálogo entre discursos (político, religioso, publicitário)','Referências a mitos, Bíblia, clássicos','Memes recontextualizam'], null]
],
d2:[
 ['Exemplos clássicos', 'Brasil.', ['"Canção do exílio" (Gonçalves Dias) e suas paródias','Drummond, Oswald de Andrade, Murilo Mendes e Casimiro de Abreu','Músicas que citam poemas','Anúncios que parodiam obras de arte (Mona Lisa)'], null],
 ['Leitura de questões', 'Estratégia.', ['Identifique o texto-base','Compare tema, tom e finalidade','Observe se há continuidade (paráfrase) ou ruptura (paródia)'], null],
 ['Intertextualidade na redação', 'Repertório.', ['Citações, referências e dados enriquecem o texto','Competência 2 do ENEM','Uso pertinente e produtivo'], null]
],
ex:[
 { q:'A paródia caracteriza-se por:', a:['repetir sem alterar','imitar um texto alterando o sentido, com efeito crítico ou cômico','copiar integralmente','traduzir','resumir'], g:'B', c:'Subverte o original.' },
 { q:'A paráfrase é:', a:['a reescrita que preserva o sentido original','uma crítica','uma contradição','um plágio','uma tradução literal'], g:'A', c:'Mesmas ideias com outras palavras.' }
],
pr:[
 { q:'A alusão é:', a:['referência indireta a outro texto, pessoa ou fato','citação textual','tradução','epígrafe','paródia'], g:'A', c:'Exige conhecimento prévio.' },
 { q:'Um anúncio que reescreve de modo humorístico a "Mona Lisa" apresenta:', a:['intertextualidade (paródia)','metonímia','antítese','coesão','variação linguística'], g:'A', c:'Diálogo com obra de arte.' },
 { q:'A epígrafe é:', a:['uma citação colocada no início de um texto','o título','uma conclusão','uma nota de rodapé','um índice'], g:'A', c:'Anuncia o tema.' },
 { q:'A intertextualidade exige do leitor:', a:['conhecimento prévio do texto de referência','nenhum conhecimento','memorização de regras','velocidade','tradução'], g:'A', c:'Repertório cultural.' }
],
erros:['Confundir paráfrase e paródia.','Ignorar a fonte.','Achar que intertextualidade é plágio.','Esquecer do efeito de sentido.'],
check:['definir intertextualidade','distinguir paráfrase e paródia','reconhecer alusões e citações','usar repertório na redação']
},

{ t:'Gramática no texto',
d1:[
 ['Classes de palavras', 'Funções.', ['**Substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção, interjeição**','Classificar pela função no contexto','A mesma palavra muda de classe conforme o uso (ex.: "como")'], null],
 ['Verbos', 'Tempo, modo e voz.', ['Tempos: presente, pretérito, futuro','Modos: indicativo (certeza), subjuntivo (dúvida, hipótese), imperativo (ordem)','Vozes: ativa, passiva, reflexiva','Efeitos de sentido: o tempo verbal organiza o texto'], 'Subjuntivo: "se eu tivesse...". Imperativo: apelo ao leitor.'],
 ['Concordância e regência', 'Normas.', ['**Concordância verbal:** verbo com sujeito','**Concordância nominal:** adjetivo, artigo e substantivo','**Regência:** relação entre verbo/nome e complemento (assistir ao filme; preferir x a y)','Crase: preposição a + artigo a'], null]
],
d2:[
 ['Pontuação', 'Sentido.', ['Vírgula: separa elementos e organiza ideias','Ponto e vírgula, dois-pontos, travessão','Aspas: citação, ironia, estrangeirismo','Pontuação altera o sentido'], null],
 ['Pronomes', 'Uso e colocação.', ['Pessoais, possessivos, demonstrativos, relativos, indefinidos','Colocação pronominal: próclise, mesóclise, ênclise','Pronomes e coesão'], null],
 ['Sintaxe', 'Estrutura.', ['Sujeito, predicado e complementos','Orações coordenadas e subordinadas','Adjuntos adnominais e adverbiais','Frase, oração e período'], null]
],
ex:[
 { q:'O modo verbal que expressa dúvida ou hipótese é o:', a:['indicativo','subjuntivo','imperativo','infinitivo','gerúndio'], g:'B', c:'Ex.: "Talvez ele venha".' },
 { q:'"Assisti ao filme" ilustra regência verbal porque:', a:['o verbo exige a preposição "a"','o verbo é intransitivo','o verbo está no passado','o artigo é facultativo','não há regência'], g:'A', c:'Assistir (ver) é transitivo indireto.' }
],
pr:[
 { q:'O imperativo é usado para:', a:['dar ordens ou fazer pedidos','expressar certeza','relatar o passado','expressar dúvida','nomear'], g:'A', c:'Função conativa.' },
 { q:'A crase é a fusão de:', a:['a preposição "a" com o artigo ou pronome "a"','duas vogais quaisquer','dois substantivos','duas conjunções','duas sílabas'], g:'A', c:'Ex.: "Vou à escola".' },
 { q:'Em "As crianças brincam", o verbo concorda com:', a:['o sujeito "as crianças"','o objeto','o advérbio','o adjetivo','o predicativo'], g:'A', c:'Plural.' },
 { q:'A vírgula pode:', a:['mudar o sentido de uma frase','nunca ser usada','substituir o ponto final sempre','alterar apenas a ortografia','não ter função'], g:'A', c:'Ex.: "Vamos comer, crianças" x "Vamos comer crianças".' }
],
erros:['Concordar o verbo com o termo mais próximo e não com o sujeito.','Usar crase indevida.','Errar a regência (assistir a, obedecer a).','Pontuar sem critério.'],
check:['reconhecer classes de palavras','usar modos e tempos verbais','aplicar concordância e regência','pontuar com sentido']
},

{ t:'Texto publicitário',
d1:[
 ['Características', 'Persuasão.', ['Objetivo: vender, divulgar ideias ou comportamentos','Linguagem direta, criativa e atraente','Mistura de texto verbal e imagem','Público-alvo definido','Função conativa predominante'], null],
 ['Estrutura', 'Elementos.', ['**Slogan:** frase curta e memorável','**Título (headline)**','**Corpo do texto**','**Imagem, logomarca, assinatura**','**Chamada para ação (call to action)**'], 'Slogan resume a ideia da marca.'],
 ['Recursos persuasivos', 'Estratégias.', ['Figuras de linguagem (metáfora, hipérbole, trocadilho)','Apelo emocional, racional ou de status','Imperativo e vocativo','Intertextualidade','Variação linguística conforme o público','Humor e ironia'], null]
],
d2:[
 ['Publicidade e consumo', 'Papel social.', ['Cria desejos e identidades','Influencia comportamentos','Estereótipos de gênero, corpo e classe','Crítica e regulação (CONAR)'], null],
 ['Publicidade enganosa e abusiva', 'Limites.', ['Enganosa: informação falsa ou omissa','Abusiva: discrimina, explora crianças, incita violência','Código de Defesa do Consumidor'], null],
 ['Novas mídias', 'Influência digital.', ['Influenciadores e publicidade disfarçada','Anúncios segmentados por dados','Mensagens curtas e vídeos','Necessidade de sinalizar o conteúdo patrocinado'], null]
],
ex:[
 { q:'A função da linguagem predominante no texto publicitário é a:', a:['metalinguística','conativa (apelativa)','poética apenas','referencial apenas','fática'], g:'B', c:'Busca convencer o receptor.' },
 { q:'Um slogan é:', a:['uma frase curta e marcante que resume a ideia de uma marca','um parágrafo longo','uma lei','uma notícia','um relatório'], g:'A', c:'Fixa a identidade da marca.' }
],
pr:[
 { q:'O uso de trocadilhos em anúncios tem como efeito:', a:['chamar a atenção e gerar humor','confundir a lei','diminuir a venda','reduzir a criatividade','impedir a leitura'], g:'A', c:'Jogo de palavras.' },
 { q:'Publicidade enganosa é aquela que:', a:['informa falsamente ou omite dados relevantes','é muito criativa','usa humor','é curta','usa imagens'], g:'A', c:'Proibida pelo CDC.' },
 { q:'O CONAR é:', a:['órgão de autorregulamentação publicitária','uma loja','um jornal','um partido','uma universidade'], g:'A', c:'Avalia a ética dos anúncios.' },
 { q:'O imperativo em anúncios ("Compre!") reforça a função:', a:['conativa','emotiva','referencial','fática','metalinguística'], g:'A', c:'Apelo ao receptor.' }
],
erros:['Aceitar o apelo sem análise crítica.','Ignorar a imagem.','Confundir publicidade e propaganda sem contexto.','Esquecer do público-alvo.'],
check:['identificar recursos persuasivos','analisar slogan e imagem','reconhecer publicidade abusiva','relacionar texto e público']
},

{ t:'Charges, tirinhas e memes',
d1:[
 ['Charge', 'Crítica ilustrada.', ['Retrata fatos atuais com humor e crítica','Depende do contexto (notícia, política)','Caricatura e exagero','Perde o sentido com o tempo se o fato se perde'], 'Para entender a charge, identifique o fato real que ela retrata.'],
 ['Tirinhas e quadrinhos', 'Narrativa curta.', ['Sequência de quadros','Humor, crítica social e filosofia','Personagens fixos (Mafalda, Armandinho, Garfield)','Linguagem verbal e não verbal combinadas','Balões e onomatopeias'], null],
 ['Memes', 'Cultura digital.', ['Imagem, vídeo ou frase que se replica e se modifica','Humor, ironia e crítica','Intertextualidade e referências compartilhadas','Rápida circulação nas redes'], null]
],
d2:[
 ['Recursos de leitura', 'Estratégia.', ['Observe cenário, expressão e linguagem','Identifique o fato retratado','Analise o humor: ironia, exagero, contradição','Cuidado com a leitura literal'], null],
 ['Crítica social e política', 'Temas.', ['Desigualdade, consumo, política, meio ambiente','Estereótipos e preconceitos','Liberdade de expressão e seus limites'], null],
 ['Ética e responsabilidade', 'Humor e respeito.', ['Humor não justifica discriminação','Desinformação em memes','Direito de imagem'], null]
],
ex:[
 { q:'Para compreender uma charge política, é fundamental:', a:['ignorar o contexto','conhecer o fato ou o contexto que ela retrata','ler só o título','memorizar o desenhista','ignorar as imagens'], g:'B', c:'O humor se apoia em fatos.' },
 { q:'O humor das tirinhas geralmente nasce de:', a:['quebra de expectativa e ironia','repetição literal','dados estatísticos','definições de dicionário','regras gramaticais'], g:'A', c:'O inesperado gera graça.' }
],
pr:[
 { q:'Os memes são exemplos de:', a:['textos multimodais que circulam rapidamente nas redes','textos jurídicos','textos científicos','textos religiosos','teses'], g:'A', c:'Cultura digital.' },
 { q:'A charge tem predominância de função:', a:['crítica e humor sobre fatos','mística','estritamente referencial','jurídica','técnica'], g:'A', c:'Opinião ilustrada.' },
 { q:'Os balões nos quadrinhos servem para:', a:['representar falas e pensamentos','marcar o fim','indicar o autor','dar cor','numerar'], g:'A', c:'Linguagem verbal.' },
 { q:'A ironia em uma charge ocorre quando:', a:['o sentido literal é o oposto da crítica pretendida','tudo é literal','não há imagem','há apenas texto','não há humor'], g:'A', c:'Dizer o contrário.' }
],
erros:['Interpretar a ironia literalmente.','Ignorar o contexto.','Desconsiderar a imagem.','Aceitar memes sem checar a veracidade.'],
check:['analisar charges e tirinhas','relacionar humor e crítica','identificar elementos verbais e não verbais','refletir sobre ética no humor']
}
];
