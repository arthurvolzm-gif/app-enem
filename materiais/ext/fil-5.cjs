/* Filosofia: temas 21 a 25 */
module.exports = [
{ t:'Política e democracia',
d1:[
 ['Política', 'Conceito.', ['Do grego pólis: assuntos da cidade','Organização do poder e da vida em comum','Poder, autoridade e legitimidade','Formas de governo: monarquia, aristocracia, democracia e suas degenerações (Aristóteles)'], null],
 ['Democracia', 'Origem e evolução.', ['Atenas: democracia direta, cidadania restrita','Democracia moderna: representativa, com sufrágio universal','Princípios: soberania popular, igualdade perante a lei, liberdade, pluralismo','Constituição, direitos fundamentais e alternância no poder'], 'Democracia não é só votar: é garantir direitos e participação.'],
 ['Estado', 'Funções e formas.', ['Monopólio legítimo da força (Weber)','Estado liberal, social, totalitário','Federalismo e república','Separação dos poderes'], null]
],
d2:[
 ['Liberalismo, socialismo, anarquismo', 'Correntes.', ['**Liberalismo:** liberdade individual, Estado limitado, mercado','**Socialismo:** igualdade, propriedade coletiva dos meios de produção','**Anarquismo:** negação do Estado','**Conservadorismo:** tradição e gradualismo','**Social-democracia:** regulação e proteção social'], null],
 ['Cidadania e participação', 'Direitos.', ['Direitos civis, políticos e sociais (Marshall)','Participação: voto, conselhos, movimentos, plebiscitos','Esfera pública e debate','Desobediência civil'], null],
 ['Desafios da democracia', 'Hoje.', ['Populismo e polarização','Desinformação','Desigualdade e exclusão','Representatividade e corrupção','Democracias digitais'], null]
],
ex:[
 { q:'A democracia ateniense era restrita porque:', a:['todos votavam','só cidadãos (homens adultos, filhos de atenienses) participavam','as mulheres votavam','os escravos votavam','os estrangeiros votavam'], g:'B', c:'Excluía a maioria.' },
 { q:'Segundo Weber, o Estado moderno tem:', a:['o monopólio legítimo da violência','nenhum poder','apenas poder religioso','o poder econômico absoluto','poder simbólico apenas'], g:'A', c:'Definição clássica.' }
],
pr:[
 { q:'A soberania popular é o princípio segundo o qual:', a:['o poder emana do povo','o poder é divino','o poder é hereditário','o poder é militar','o poder é econômico'], g:'A', c:'Base da democracia.' },
 { q:'O anarquismo defende:', a:['a ausência de Estado','o Estado forte','o rei absoluto','a teocracia','a aristocracia'], g:'A', c:'Proudhon, Bakunin.' },
 { q:'Os direitos sociais incluem:', a:['saúde, educação, trabalho','somente voto','somente propriedade','nenhum direito','apenas liberdade de culto'], g:'A', c:'Marshall.' },
 { q:'A desobediência civil é:', a:['a recusa pública e pacífica de cumprir uma lei considerada injusta','um golpe','um crime comum','uma guerra','uma eleição'], g:'A', c:'Thoreau, Gandhi.' }
],
erros:['Reduzir democracia ao voto.','Confundir república com democracia.','Trocar liberalismo e socialismo.','Esquecer da cidadania ativa.'],
check:['definir política, Estado e democracia','comparar liberalismo, socialismo e anarquismo','citar direitos de cidadania','discutir desafios atuais']
},

{ t:'Teoria do conhecimento',
d1:[
 ['Epistemologia', 'O que é conhecer.', ['Estuda origem, natureza, limites e validade do conhecimento','Questões: é possível conhecer? Como? O que é verdade?','Sujeito e objeto do conhecimento'], null],
 ['Correntes', 'Posições.', ['**Dogmatismo:** é possível conhecer com certeza','**Ceticismo:** suspende o juízo','**Racionalismo:** razão como fonte (Descartes)','**Empirismo:** experiência (Locke, Hume)','**Criticismo (Kant):** limites da razão','**Relativismo** e **pragmatismo**'], 'Kant faz a síntese entre racionalismo e empirismo.'],
 ['Verdade', 'Teorias.', ['**Correspondência:** verdade é adequação ao fato','**Coerência:** verdade como coerência interna do sistema','**Pragmática:** verdade é o que funciona','Verdade e opinião (doxa)'], null]
],
d2:[
 ['Ciência e método', 'Popper e Kuhn.', ['**Indução × dedução**','**Popper:** falseabilidade, uma teoria científica deve poder ser refutada','**Kuhn:** paradigmas e revoluções científicas','Ciência como construção histórica'], null],
 ['Tipos de conhecimento', 'Diversidade.', ['Senso comum, mítico, religioso, filosófico, científico, artístico','Cada um com método e finalidade'], null],
 ['Pós-verdade', 'Atualidade.', ['Fake news e desinformação','Viés de confirmação','Importância do pensamento crítico e da checagem','Cultura digital'], null]
],
ex:[
 { q:'Para Popper, uma teoria é científica quando:', a:['é comprovada para sempre','pode ser falseada, isto é, testada e refutada','é aceita pela maioria','é religiosa','é intuitiva'], g:'B', c:'Critério de falseabilidade.' },
 { q:'O ceticismo defende:', a:['certeza absoluta','a suspensão do juízo diante da dúvida','o dogma','o racionalismo','a fé'], g:'B', c:'Pirro, Hume.' }
],
pr:[
 { q:'Para Kuhn, a ciência avança por:', a:['acúmulo linear apenas','revoluções que mudam paradigmas','magia','acaso','religião'], g:'B', c:'Estrutura das Revoluções Científicas.' },
 { q:'A teoria da verdade como correspondência afirma que:', a:['a verdade depende da maioria','a verdade é a adequação entre o enunciado e o fato','a verdade é inalcançável','a verdade é só prática','a verdade é só estética'], g:'B', c:'Aristóteles.' },
 { q:'O viés de confirmação é a tendência de:', a:['buscar informações que confirmem as próprias crenças','duvidar de tudo','ser neutro','ser racional apenas','ignorar crenças'], g:'A', c:'Reforça as bolhas.' },
 { q:'O dogmatismo defende que:', a:['é possível conhecer a verdade sem dúvida','tudo é incerto','a razão não existe','a experiência é inútil','o conhecimento é impossível'], g:'A', c:'Confiança irrestrita.' }
],
erros:['Confundir ceticismo e relativismo.','Dizer que a ciência produz verdades absolutas.','Ignorar o papel da experiência e da razão.','Cair na pós-verdade.'],
check:['definir epistemologia','comparar as correntes do conhecimento','explicar falseabilidade e paradigma','aplicar o pensamento crítico à informação']
},

{ t:'Estética e arte',
d1:[
 ['Estética', 'O belo e a arte.', ['Reflexão sobre o belo, o sublime, a arte e a percepção','Termo criado por Baumgarten (séc. XVIII)','Questões: o que é arte? Qual o papel do artista? O gosto é subjetivo?'], null],
 ['Concepções da arte', 'Ao longo da história.', ['**Platão:** arte como imitação da imitação (mimese), desconfiança','**Aristóteles:** mimese que revela, catarse na tragédia','**Kant:** juízo de gosto desinteressado e universal','**Hegel:** arte como manifestação do Espírito','**Nietzsche:** apolíneo e dionisíaco'], 'Mimese: imitação ou representação da realidade.'],
 ['Arte e sociedade', 'Funções.', ['Expressão, crítica, entretenimento, memória, identidade','Arte e poder (propaganda)','Indústria cultural (Adorno) e arte de massa','Aura e reprodução técnica (Benjamin)'], null]
],
d2:[
 ['Belo e gosto', 'Debate.', ['O belo é objetivo (proporção, harmonia) ou subjetivo?','Cânones de beleza mudam por época e cultura','Gosto e educação do olhar'], null],
 ['Arte contemporânea', 'Ruptura.', ['Duchamp e o readymade (A Fonte)','Arte conceitual, performance, instalação','Pergunta: o que torna algo arte?','Arte urbana e digital'], null],
 ['Patrimônio e cultura', 'Preservação.', ['Patrimônio material e imaterial','Políticas culturais (IPHAN, UNESCO)','Valorização das artes populares e indígenas'], null]
],
ex:[
 { q:'A mimese, em Aristóteles, é:', a:['a destruição da realidade','a imitação ou representação da ação humana, que gera conhecimento','a pura fantasia','a dança','o silêncio'], g:'B', c:'Poética.' },
 { q:'Na obra "A Fonte", Duchamp questionou:', a:['a técnica do desenho','a definição de arte','a escultura clássica','a música','o teatro'], g:'B', c:'Readymade.' }
],
pr:[
 { q:'A "aura" da obra de arte, segundo Benjamin, perde-se com:', a:['a reprodução técnica','a pintura a óleo','a escultura','a poesia oral','o desenho'], g:'A', c:'Unicidade e distância.' },
 { q:'A catarse é:', a:['a purificação das emoções do espectador','um tipo de música','um estilo de pintura','uma técnica','um instrumento'], g:'A', c:'Efeito da tragédia.' },
 { q:'A estética estuda:', a:['o belo, a arte e a percepção','a química','a política','a lógica formal','a economia'], g:'A', c:'Área da Filosofia.' },
 { q:'Para Platão, a arte:', a:['é cópia da cópia da realidade, distante da verdade','é a forma mais alta de conhecimento','é irrelevante','é sempre educativa','é puramente racional'], g:'A', c:'República, livro X.' }
],
erros:['Reduzir arte a beleza.','Dizer que o gosto é sempre arbitrário.','Esquecer do contexto histórico da arte.','Ignorar a arte popular.'],
check:['definir estética e mimese','comparar Platão e Aristóteles','explicar a perda da aura','discutir o que é arte']
},

{ t:'Filosofia e tecnologia',
d1:[
 ['Técnica e tecnologia', 'Conceitos.', ['**Técnica:** modo de fazer; presente desde a pré-história','**Tecnologia:** técnica articulada à ciência','Humanidade se define pela técnica (Homo faber)','Neutralidade da técnica? Debate'], null],
 ['Visões', 'Otimismo e crítica.', ['**Tecnofilia:** progresso, bem-estar','**Tecnofobia:** riscos e alienação','Heidegger: a técnica moderna reduz tudo a recurso disponível','Escola de Frankfurt: razão instrumental','Hans Jonas: princípio da responsabilidade'], 'Jonas: aja de modo que os efeitos da ação sejam compatíveis com a vida futura.'],
 ['Questões atuais', 'Tecnologia digital.', ['Inteligência artificial e autonomia','Privacidade e vigilância','Trabalho e automação','Bolhas e algoritmos','Bioética e biotecnologia'], null]
],
d2:[
 ['Cibercultura', 'Sociedade em rede.', ['Manuel Castells e a sociedade em rede','Pierre Lévy e a inteligência coletiva','Virtualidade, identidade e comunidade online'], null],
 ['Riscos', 'Desafios.', ['Desinformação e manipulação','Dependência digital','Desigualdade de acesso (exclusão digital)','Impactos ambientais do lixo eletrônico'], null],
 ['Responsabilidade', 'Ética.', ['Design ético, regulação e direitos digitais (LGPD)','Transparência algorítmica','Educação midiática','Uso crítico e consciente'], null]
],
ex:[
 { q:'Para Hans Jonas, o princípio da responsabilidade exige:', a:['ignorar as consequências futuras','considerar os efeitos da técnica sobre as futuras gerações e a natureza','apenas buscar o lucro','abolir a tecnologia','obedecer ao mercado'], g:'B', c:'Ética para a era tecnológica.' },
 { q:'A exclusão digital refere-se:', a:['à desigualdade no acesso às tecnologias de informação','ao excesso de tecnologia','ao fim da internet','à tecnologia gratuita','à segurança online'], g:'A', c:'Divisão social.' }
],
pr:[
 { q:'A LGPD trata de:', a:['proteção de dados pessoais','esportes','trânsito','tributos','segurança nacional apenas'], g:'A', c:'Lei Geral de Proteção de Dados.' },
 { q:'Heidegger critica a técnica moderna por:', a:['reduzir a natureza e o homem a estoque disponível','ser pouco eficiente','ser cara','não existir','ser religiosa'], g:'A', c:'Questão da técnica.' },
 { q:'A "sociedade em rede" é um conceito de:', a:['Manuel Castells','Aristóteles','Kant','Platão','Hegel'], g:'A', c:'Era da informação.' },
 { q:'Os algoritmos podem:', a:['criar bolhas de informação','eliminar toda desinformação','ser sempre neutros','substituir a ética','acabar com a desigualdade'], g:'A', c:'Reforçam vieses.' }
],
erros:['Dizer que a tecnologia é neutra sempre.','Ver tecnologia só como ameaça ou só como salvação.','Ignorar a desigualdade de acesso.','Esquecer da ética.'],
check:['diferenciar técnica e tecnologia','comparar tecnofilia e tecnofobia','citar riscos digitais','relacionar tecnologia e responsabilidade']
},

{ t:'Lógica e argumentação',
d1:[
 ['Lógica', 'Estudo do raciocínio correto.', ['Fundada por Aristóteles (Organon)','**Proposição:** afirmação verdadeira ou falsa','**Argumento:** premissas que sustentam uma conclusão','Princípios: identidade, não contradição, terceiro excluído'], null],
 ['Dedução e indução', 'Tipos de raciocínio.', ['**Dedutivo:** da regra geral ao caso; conclusão necessária se as premissas forem verdadeiras (válido)','**Indutivo:** de casos particulares à generalização; conclusão provável','**Abdutivo:** melhor explicação','Silogismo: Todo A é B; C é A; logo, C é B'], 'Válido: forma correta. Sólido: forma válida e premissas verdadeiras.'],
 ['Falácias', 'Erros de argumentação.', ['**Ad hominem:** ataca a pessoa, não o argumento','**Apelo à autoridade, à tradição ou à emoção**','**Falso dilema:** apenas duas opções','**Generalização apressada**','**Espantalho:** distorce a posição do outro','**Bola de neve (ladeira escorregadia)**'], null]
],
d2:[
 ['Estrutura do texto argumentativo', 'Redação e debate.', ['Tese (posição)','Argumentos e exemplos','Contra-argumentos','Conclusão','Coesão e coerência'], null],
 ['Conectivos lógicos', 'Operadores.', ['E (conjunção), ou (disjunção), se...então (condicional), não (negação)','Condicional: "se A, então B" só é falso se A é verdadeiro e B falso','Tabelas-verdade'], null],
 ['Pensamento crítico', 'Prática.', ['Verificar fontes','Identificar premissas implícitas','Distinguir fatos e opiniões','Evitar vieses'], null]
],
ex:[
 { q:'No argumento "Todo ser humano é mortal; Maria é ser humano; logo, Maria é mortal", há:', a:['indução','dedução (silogismo válido)','falácia ad hominem','falso dilema','abdução'], g:'B', c:'Conclusão necessária.' },
 { q:'Atacar a pessoa que defende uma ideia, em vez de refutar a ideia, é a falácia:', a:['do espantalho','ad hominem','do falso dilema','da generalização apressada','da autoridade'], g:'B', c:'Desvia o foco.' }
],
pr:[
 { q:'A generalização apressada ocorre quando:', a:['se conclui sobre todos a partir de poucos casos','se usa dedução válida','se cita uma fonte confiável','se apresenta evidência abundante','se testa uma hipótese'], g:'A', c:'Amostra insuficiente.' },
 { q:'O princípio da não contradição afirma que:', a:['algo não pode ser e não ser ao mesmo tempo no mesmo sentido','tudo muda','tudo é igual','tudo é falso','tudo é verdadeiro'], g:'A', c:'Base da lógica.' },
 { q:'A falácia do espantalho:', a:['distorce o argumento do adversário para refutá-lo facilmente','ataca a pessoa','apela à autoridade','usa dados','é um silogismo válido'], g:'A', c:'Cria caricatura.' },
 { q:'Um argumento indutivo apresenta conclusão:', a:['necessária','provável','impossível','sem premissas','sempre falsa'], g:'B', c:'Probabilidade, não certeza.' }
],
erros:['Confundir validade com verdade.','Tratar indução como certeza.','Ignorar falácias comuns.','Esquecer da estrutura do argumento.'],
check:['distinguir dedução e indução','identificar falácias','construir um argumento','aplicar lógica a textos']
}
];
