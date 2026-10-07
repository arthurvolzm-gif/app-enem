/* Filosofia: temas 6 a 10 */
module.exports = [
{ t:'Aristóteles',
d1:[
 ['Vida e obra', 'Discípulo de Platão.', ['Fundou o Liceu (Perípatos)','Tutor de Alexandre Magno','Obras: Metafísica, Ética a Nicômaco, Política, Poética, Organon (lógica), Física','Realismo: o real está nas coisas, não em um mundo separado'], null],
 ['Metafísica', 'O ser.', ['**Substância:** matéria + forma (hilemorfismo)','**Quatro causas:** material, formal, eficiente, final','**Ato e potência**','Primeiro Motor Imóvel (Deus) como causa final'], 'Contra Platão: as formas estão nas próprias coisas.'],
 ['Lógica', 'Fundador da lógica formal.', ['**Silogismo:** premissas + conclusão','Ex.: Todo homem é mortal; Sócrates é homem; logo, Sócrates é mortal','Princípios: identidade, não contradição, terceiro excluído','Categorias'], null]
],
d2:[
 ['Ética', 'Felicidade (eudaimonia).', ['O bem supremo é a felicidade','Virtude como meio-termo entre dois excessos (coragem: entre covardia e temeridade)','Virtudes éticas (hábito) e dianoéticas (razão)','Prudência (phronesis)'], null],
 ['Política', 'O ser humano é um animal político.', ['A pólis é natural','Formas de governo: monarquia, aristocracia, politeia (e suas degenerações: tirania, oligarquia, democracia)','Melhor governo: politeia','Importância da classe média'], null],
 ['Poética e arte', 'Catarse.', ['A arte imita (mimese) a ação humana','A tragédia provoca catarse (purificação das emoções)','Unidade de ação'], null]
],
ex:[
 { q:'Para Aristóteles, a virtude moral consiste em:', a:['extremos','um meio-termo entre o excesso e a falta','vida sem desejos','obediência cega','prazer imediato'], g:'B', c:'Mesotes (justo meio).' },
 { q:'Na frase "o homem é um animal político", Aristóteles afirma que:', a:['o ser humano vive naturalmente em comunidade (pólis)','o homem é violento','a política é artificial','a sociedade é inútil','o isolamento é natural'], g:'A', c:'A pólis é natural.' }
],
pr:[
 { q:'O silogismo é:', a:['uma narrativa mítica','uma forma de argumento com premissas e conclusão','um poema','um tipo de governo','uma obra de arte'], g:'B', c:'Lógica aristotélica.' },
 { q:'O Liceu foi fundado por:', a:['Platão','Aristóteles','Epicuro','Sócrates','Tales'], g:'B', c:'Escola peripatética.' },
 { q:'A felicidade (eudaimonia) para Aristóteles é:', a:['riqueza','vida segundo a virtude e a razão','poder','fama','prazer'], g:'B', c:'Bem supremo.' },
 { q:'A catarse na tragédia é:', a:['a purificação das emoções','o tédio','a alegria','a punição','a música'], g:'A', c:'Efeito sobre o espectador.' }
],
erros:['Confundir hilemorfismo com teoria das Ideias.','Dizer que a ética aristotélica é do dever (é das virtudes).','Esquecer das quatro causas.','Trocar a politeia com a democracia.'],
check:['explicar matéria e forma','citar as quatro causas','descrever o meio-termo','distinguir Platão de Aristóteles']
},

{ t:'Filosofia helenística',
d1:[
 ['Contexto', 'Após Alexandre.', ['Fim da independência das pólis','Cosmopolitismo e crise de valores','Filosofia como guia para a vida, em busca de tranquilidade','Escolas: epicurismo, estoicismo, ceticismo, cinismo'], null],
 ['Epicurismo', 'Epicuro.', ['Prazer como bem supremo, mas prazer moderado e racional','Ataraxia (tranquilidade da alma) e aponia (ausência de dor)','Distinção de desejos: naturais necessários, naturais não necessários, vãos','Não temer os deuses nem a morte','Vida simples, amizade e Jardim'], '"Quando a morte chega, eu não estou; quando estou, ela não chegou."'],
 ['Estoicismo', 'Zenão de Cício, Sêneca, Epiteto, Marco Aurélio.', ['Viver conforme a natureza e a razão (logos)','Aceitar o destino; controlar o que depende de nós','Virtude como único bem','Apatia (domínio das paixões)','Cosmopolitismo'], null]
],
d2:[
 ['Ceticismo', 'Pirro.', ['Suspensão do juízo (epoché)','Dúvida sobre a possibilidade da verdade','Busca de ataraxia pela suspensão','Influência na filosofia moderna'], null],
 ['Cinismo', 'Diógenes.', ['Vida simples, rejeição às convenções sociais','Autossuficiência','Crítica ao luxo e à hipocrisia','"Cínico" vem de "cão" (kynikos)'], null],
 ['Atualidade', 'Influência.', ['Estoicismo na autoajuda e na psicologia (terapias cognitivas)','Epicurismo e bem-estar','Ceticismo no pensamento científico','Crítica ao consumismo'], null]
],
ex:[
 { q:'Para Epicuro, o prazer que deve ser buscado é:', a:['o excesso','o prazer moderado, com ausência de dor e perturbação (ataraxia)','o luxo','o poder','o sofrimento'], g:'B', c:'Hedonismo racional.' },
 { q:'O estoicismo ensina que devemos:', a:['agir contra a natureza','controlar o que depende de nós e aceitar o que não depende','buscar riqueza','fugir da razão','adorar o prazer'], g:'B', c:'Domínio das paixões.' }
],
pr:[
 { q:'A ataraxia é:', a:['agitação','tranquilidade da alma','dor','dúvida','prazer físico intenso'], g:'B', c:'Objetivo helenístico.' },
 { q:'O cético defende:', a:['dogmatismo','suspensão do juízo','fé cega','certeza absoluta','relativismo moral apenas'], g:'B', c:'Epoché.' },
 { q:'Marco Aurélio foi:', a:['um epicurista','um imperador e filósofo estoico','um sofista','um cínico','um cético'], g:'B', c:'Meditações.' },
 { q:'Diógenes é associado ao:', a:['cinismo','epicurismo','platonismo','estoicismo','ceticismo'], g:'A', c:'Vida simples.' }
],
erros:['Dizer que o epicurismo defende a gula.','Confundir estoicismo com resignação passiva.','Trocar cinismo e ceticismo.','Esquecer do contexto histórico.'],
check:['descrever as escolas helenísticas','explicar ataraxia','distinguir estoicismo e epicurismo','relacionar contexto histórico e Filosofia']
},

{ t:'Filosofia medieval',
d1:[
 ['Contexto', 'Fé e razão.', ['Séc. V a XV, dominada pelo cristianismo','Questão central: como conciliar fé e razão','Teologia e Filosofia articuladas','Patrística (até o séc. VIII) e Escolástica (séc. IX a XIV)'], null],
 ['Santo Agostinho (354 a 430)', 'Patrística.', ['Cristianismo e platonismo','"Creio para compreender": a fé antecede a razão','Tempo como distensão da alma (Confissões)','Livre-arbítrio e o mal como ausência de bem','A Cidade de Deus e a cidade dos homens'], 'Platão cristianizado.'],
 ['São Tomás de Aquino (1225 a 1274)', 'Escolástica.', ['Cristianismo e aristotelismo','Fé e razão complementam-se','**Cinco vias** para provar a existência de Deus','Lei eterna, lei natural, lei humana','Summa Theologiae'], null]
],
d2:[
 ['Universais', 'A disputa.', ['Realismo (Platão): universais existem','Nominalismo (Ockham): universais são nomes','Navalha de Ockham: não multiplicar entes sem necessidade'], null],
 ['Filosofia islâmica e judaica', 'Contribuições.', ['Avicena e Averróis traduziram e comentaram Aristóteles','Maimônides','Preservaram o legado grego','Influenciaram a escolástica'], null],
 ['Cultura medieval', 'Instituições.', ['Mosteiros e universidades (Paris, Bolonha, Oxford)','Método escolástico: questão, objeções, resposta','Teocentrismo'], null]
],
ex:[
 { q:'A Filosofia de Santo Tomás de Aquino é inspirada principalmente em:', a:['Platão','Aristóteles','Epicuro','Sócrates','Heráclito'], g:'B', c:'Aristotelismo cristão.' },
 { q:'Para Santo Agostinho, o mal é:', a:['uma substância','ausência de bem','criação de Deus','igual ao bem','ilusão'], g:'B', c:'Privação do bem.' }
],
pr:[
 { q:'Averróis foi um filósofo:', a:['grego','islâmico, comentador de Aristóteles','romano','alemão','francês'], g:'B', c:'Séc. XII.' },
 { q:'A Escolástica caracteriza-se por:', a:['rejeitar a razão','conciliar fé e razão','abandonar a teologia','negar Deus','promover o ateísmo'], g:'B', c:'Método de ensino das universidades.' },
 { q:'A navalha de Ockham defende:', a:['multiplicar explicações','a simplicidade: não multiplicar entes sem necessidade','a fé cega','o realismo','o platonismo'], g:'B', c:'Princípio de economia.' },
 { q:'As cinco vias são argumentos de:', a:['Agostinho','Tomás de Aquino','Ockham','Averróis','Platão'], g:'B', c:'Provas da existência de Deus.' }
],
erros:['Dizer que a Idade Média foi sem Filosofia.','Confundir Patrística e Escolástica.','Trocar Agostinho e Tomás.','Esquecer da contribuição islâmica.'],
check:['explicar fé e razão','distinguir Agostinho e Tomás','citar a disputa dos universais','reconhecer a filosofia islâmica']
},

{ t:'Maquiavel',
d1:[
 ['Contexto', 'Itália renascentista.', ['Nicolau Maquiavel (1469 a 1527), de Florença','Itália dividida e instável','Obras: O Príncipe (1513), Discursos sobre a Primeira Década de Tito Lívio','Fundador da ciência política moderna'], null],
 ['O Príncipe', 'Conselhos ao governante.', ['Política separada da moral religiosa','Foco em como o poder é de fato exercido (realismo)','Virtù (habilidade) e fortuna (sorte)','"É mais seguro ser temido do que amado, se não for possível ser ambos"','"Os fins justificam os meios" (frase atribuída, não literal)'], 'Maquiavelismo: uso do poder sem escrúpulos. Mas o autor analisa, não apenas aconselha.'],
 ['Pensamento político', 'Ideias centrais.', ['Autonomia da política','Estabilidade do Estado como objetivo','Importância das leis e das armas próprias','Republicanismo nos Discursos'], null]
],
d2:[
 ['Virtù e fortuna', 'Conceitos.', ['Virtù: capacidade de agir e se adaptar','Fortuna: acaso e circunstâncias','O bom governante domina a fortuna na medida do possível'], null],
 ['Poder e povo', 'Relações.', ['O príncipe deve evitar o ódio do povo','Importância de manter o apoio popular','Conflito social como motor político (nos Discursos)'], null],
 ['Legado', 'Influência.', ['Realismo político e relações internacionais','Debates sobre ética e poder','Críticas e interpretações','Presença na política e na cultura popular'], null]
],
ex:[
 { q:'Ao separar política e moral, Maquiavel:', a:['defende a vida contemplativa','analisa o poder como ele é, de modo realista','propõe a anarquia','nega o Estado','defende a teocracia'], g:'B', c:'Fundamento da ciência política moderna.' },
 { q:'Em Maquiavel, a "fortuna" representa:', a:['a virtude','o acaso e as circunstâncias','a lei','o dinheiro apenas','Deus'], g:'B', c:'Contraposta à virtù.' }
],
pr:[
 { q:'A obra mais conhecida de Maquiavel é:', a:['A República','O Príncipe','Leviatã','O Contrato Social','Utopia'], g:'B', c:'Escrita em 1513.' },
 { q:'Maquiavelismo refere-se:', a:['ao uso do poder com astúcia e pouco escrúpulo','à defesa da moral cristã','ao altruísmo','ao pacifismo','ao anarquismo'], g:'A', c:'Sentido popular.' },
 { q:'Virtù significa:', a:['virtude moral cristã','habilidade e energia política','sorte','religião','cuidado'], g:'B', c:'Capacidade política.' },
 { q:'Maquiavel viveu em:', a:['Florença, Renascimento','Atenas, Antiguidade','Paris, Iluminismo','Londres, século XIX','Roma, Império'], g:'A', c:'Itália renascentista.' }
],
erros:['Atribuir a Maquiavel a frase literal "os fins justificam os meios".','Achar que ele apenas defendia a tirania.','Ignorar o seu republicanismo.','Esquecer do contexto italiano.'],
check:['explicar a autonomia da política','definir virtù e fortuna','resumir O Príncipe','discutir o maquiavelismo']
},

{ t:'Racionalismo e empirismo',
d1:[
 ['Racionalismo', 'A razão como fonte do conhecimento.', ['**Descartes (1596 a 1650):** dúvida metódica; "Penso, logo existo" (cogito); Discurso do Método','Ideias inatas','Matemática como modelo','Dualismo: mente (res cogitans) e corpo (res extensa)','Outros: **Spinoza**, **Leibniz**'], 'Para Descartes, a razão corrige a ilusão dos sentidos.'],
 ['Empirismo', 'A experiência como fonte.', ['**Locke:** mente como "tábula rasa"','**Berkeley:** ser é ser percebido','**Hume:** cético, crítica à causalidade (hábito)','Indução e método experimental (Francis Bacon)'], null],
 ['Debate', 'Razão × experiência.', ['Racionalismo: conhecimento vem de ideias inatas e dedução','Empirismo: vem dos sentidos e da indução','Kant buscará uma síntese','Ciência moderna combina ambos'], null]
],
d2:[
 ['Método cartesiano', 'Quatro regras.', ['Evidência','Análise (dividir)','Síntese (ordem)','Enumeração (revisão)'], null],
 ['Bacon e os ídolos', 'Críticas.', ['Ídolos da tribo, da caverna, do foro e do teatro','Método indutivo','"Saber é poder"'], null],
 ['Hume', 'Ceticismo moderado.', ['Impressões e ideias','A causalidade é hábito, não necessidade lógica','Crítica à metafísica','Despertou Kant do "sono dogmático"'], null]
],
ex:[
 { q:'"Penso, logo existo" é uma afirmação de:', a:['Hume','Descartes','Locke','Bacon','Berkeley'], g:'B', c:'Primeira certeza indubitável.' },
 { q:'A expressão "tábula rasa" está associada a:', a:['Descartes','Locke','Spinoza','Leibniz','Platão'], g:'B', c:'A mente nasce em branco.' }
],
pr:[
 { q:'Para o empirismo, a fonte do conhecimento é:', a:['a razão inata','a experiência sensível','a fé','a intuição divina','a tradição'], g:'B', c:'Sentidos.' },
 { q:'A dúvida metódica de Descartes serve para:', a:['negar tudo para sempre','encontrar uma certeza indubitável','promover o ceticismo','ensinar a fé','destruir a ciência'], g:'B', c:'Estratégia para alcançar a verdade.' },
 { q:'Hume criticou:', a:['a ideia de causalidade como necessidade','a experiência','a matemática','o cogito','a lógica'], g:'A', c:'É hábito psicológico.' },
 { q:'Francis Bacon defendeu o método:', a:['dedutivo apenas','indutivo e experimental','místico','dogmático','mítico'], g:'B', c:'Novum Organum.' }
],
erros:['Trocar Descartes e Locke.','Dizer que o empirismo nega a razão.','Esquecer das ideias inatas.','Confundir dúvida metódica com ceticismo radical.'],
check:['comparar racionalismo e empirismo','explicar o cogito','citar Locke, Hume e Bacon','descrever o método cartesiano']
}
];
