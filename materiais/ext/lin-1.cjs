/* Linguagens: temas 1 a 5 */
module.exports = [
{ t:'Interpretação de texto',
d1:[
 ['Ler para compreender', 'Interpretar é extrair o que o texto diz, sugere e pressupõe.', ['**Informação explícita:** o que está escrito','**Informação implícita:** pressupostos e subentendidos','**Inferência:** conclusão apoiada em pistas do texto','Identifique tema, tese e intenção do autor','Releia o enunciado: ele define o que se pede'], 'A resposta correta sempre está apoiada no texto, nunca na opinião do leitor.'],
 ['Estratégias de leitura', 'Passo a passo.', ['Leia o enunciado e a pergunta antes do texto','Marque palavras-chave e conectivos','Observe título, fonte, data e público','Resuma cada parágrafo em uma frase','Elimine alternativas que extrapolam o texto'], null],
 ['Armadilhas comuns', 'O que derruba o candidato.', ['**Extrapolação:** dizer mais do que o texto diz','**Redução:** dizer menos','**Contradição:** afirmar o oposto','Alternativas com palavras absolutas (sempre, nunca, todos)','Confundir opinião do autor com a de personagens citados'], null]
],
d2:[
 ['Tipos de relação entre ideias', 'Conectivos.', ['Adição: e, além disso','Oposição: mas, porém, contudo','Causa: porque, visto que','Consequência: logo, portanto','Conclusão e explicação'], null],
 ['Texto verbal e não verbal', 'Linguagens combinadas.', ['Imagem, cor, layout e tipografia produzem sentido','Charges, cartazes e infográficos exigem leitura integrada','Relacione título, imagem e legenda'], null],
 ['Níveis de leitura', 'Do literal ao crítico.', ['Literal: o que está dito','Inferencial: o que se conclui','Crítico: avaliação e posicionamento','O ENEM cobra os três'], null]
],
ex:[
 { q:'Em uma questão de interpretação, a melhor estratégia para escolher a alternativa é:', a:['seguir a própria opinião','escolher a mais longa','apoiar-se no que o texto afirma ou permite inferir','escolher a mais genérica','ignorar o enunciado'], g:'C', c:'A resposta deve ter respaldo no texto.' },
 { q:'Uma alternativa que afirma mais do que o texto autoriza comete:', a:['redução','extrapolação','paráfrase','síntese','citação'], g:'B', c:'Extrapolar é ir além do texto.' }
],
pr:[
 { q:'Uma informação implícita é aquela que:', a:['está escrita literalmente','pode ser deduzida a partir de pistas do texto','é falsa','vem sempre no título','é a conclusão do autor sempre'], g:'B', c:'Exige inferência.' },
 { q:'O conectivo "contudo" estabelece relação de:', a:['causa','oposição','adição','conclusão','finalidade'], g:'B', c:'Equivale a "mas".' },
 { q:'Ler o enunciado antes do texto ajuda a:', a:['perder tempo','focar nas informações pedidas','decorar o texto','ignorar o título','pular a leitura'], g:'B', c:'Leitura orientada.' },
 { q:'Palavras como "sempre" e "nunca" nas alternativas costumam:', a:['indicar a resposta certa','exigir atenção, pois são absolutas e frequentemente incorretas','ser irrelevantes','indicar ironia','ser sinônimas'], g:'B', c:'Generalizações exageradas.' }
],
erros:['Responder com base na opinião pessoal.','Ignorar o enunciado.','Não ler o texto até o final.','Confundir fala de personagem com posição do autor.'],
check:['distinguir explícito e implícito','fazer inferências','reconhecer extrapolações','relacionar texto verbal e não verbal']
},

{ t:'Gêneros textuais',
d1:[
 ['Conceito', 'Textos com características relativamente estáveis.', ['Definidos por **função social, estrutura, linguagem e suporte**','Tipos textuais: narração, descrição, dissertação, injunção e exposição','Um gênero pode combinar vários tipos','Interlocutor e situação definem o gênero'], null],
 ['Principais gêneros', 'Mais cobrados.', ['**Notícia e reportagem:** informar','**Editorial e artigo de opinião:** argumentar','**Carta, e-mail e requerimento**','**Crônica:** olhar sobre o cotidiano','**Conto, romance e poema**','**Anúncio, charge, meme, tirinha**','**Bula, receita, manual:** instruir'], 'Notícia relata fatos; reportagem aprofunda; editorial expressa a posição do veículo.'],
 ['Como identificar', 'Pistas.', ['Quem fala e para quem','Qual o objetivo (informar, convencer, divertir, instruir)','Linguagem (formal/informal)','Suporte (jornal, rede social, livro)'], null]
],
d2:[
 ['Tipologia textual', 'Sequências.', ['**Narrativa:** ações no tempo','**Descritiva:** características','**Dissertativa/argumentativa:** ideias e opinião','**Injuntiva:** ordens e instruções','**Expositiva:** explicação'], null],
 ['Gêneros digitais', 'Novas formas.', ['Post, thread, meme, vídeo curto, podcast','Linguagem multimodal','Hipertexto'], null],
 ['Intertextualidade entre gêneros', 'Mistura.', ['Anúncio em forma de poema','Notícia com linguagem de conto','Quebra de expectativa gera humor ou crítica'], null]
],
ex:[
 { q:'O texto que expressa a opinião oficial de um jornal sobre um assunto é o:', a:['editorial','conto','bula','anúncio','poema'], g:'A', c:'Posição do veículo, geralmente sem assinatura.' },
 { q:'Uma receita culinária tem predominância de sequência:', a:['descritiva','injuntiva','narrativa','poética','dissertativa'], g:'B', c:'Instruções em modo imperativo.' }
],
pr:[
 { q:'A crônica caracteriza-se por:', a:['abordar o cotidiano com subjetividade e linguagem leve','ser sempre técnica','ser uma lei','ter linguagem jurídica','ser um verbete'], g:'A', c:'Entre jornalismo e literatura.' },
 { q:'O objetivo principal de uma bula é:', a:['divertir','instruir o uso de um medicamento','narrar','convencer a votar','criticar'], g:'B', c:'Gênero instrucional.' },
 { q:'A reportagem difere da notícia por:', a:['ser mais aprofundada','ser mais curta','ser poema','não ter fatos','ser anônima'], g:'A', c:'Contextualiza e investiga.' },
 { q:'O gênero é definido principalmente por:', a:['função social, estrutura, linguagem e suporte','o tamanho','a cor do papel','o autor','a data'], g:'A', c:'Aspectos sociocomunicativos.' }
],
erros:['Confundir tipo textual e gênero.','Tratar editorial como notícia.','Ignorar o suporte.','Esquecer do interlocutor.'],
check:['identificar gêneros pela função','distinguir notícia, reportagem e editorial','reconhecer tipos textuais','analisar gêneros digitais']
},

{ t:'Funções da linguagem',
d1:[
 ['As seis funções', 'Modelo de Roman Jakobson.', ['**Emotiva (expressiva):** foco no emissor, 1ª pessoa, emoção','**Referencial (denotativa):** foco no contexto, informa, 3ª pessoa','**Conativa (apelativa):** foco no receptor, imperativo, vocativo','**Fática:** foco no canal, testa o contato ("alô", "entendeu?")','**Metalinguística:** foco no código, fala da própria linguagem','**Poética:** foco na mensagem, jogo de sons e imagens'], 'Um texto pode ter várias funções; vale a predominante.'],
 ['Elementos da comunicação', 'Base do modelo.', ['Emissor, receptor, mensagem, código, canal, contexto','Cada função destaca um elemento','Intenção do texto é a pista'], null],
 ['Pistas rápidas', 'Como identificar.', ['Verbos no imperativo e vocativo: conativa','Informação objetiva: referencial','Eu, sentimentos, exclamações: emotiva','Dicionário, poema sobre poema: metalinguística','Rima, ritmo, figuras: poética','Teste de canal: fática'], null]
],
d2:[
 ['Exemplos', 'Casos.', ['"Compre agora!": conativa','"A água ferve a 100 °C": referencial','"Estou tão feliz!": emotiva','"Alô? Está me ouvindo?": fática','Um poema que fala sobre fazer poemas: metalinguística','"Cada tempo tem seu cantar": poética'], null],
 ['Funções em publicidade', 'Mistura.', ['Predomina a conativa','Usa poética para chamar atenção','Referencial para dados do produto'], null],
 ['Armadilhas', 'Cuidado.', ['Metalinguagem ≠ meta-explicar o texto','Referencial ≠ neutralidade absoluta','Emotiva pode ocorrer em terceira pessoa em alguns casos'], null]
],
ex:[
 { q:'"Venha para a nossa loja e aproveite!" apresenta predominância da função:', a:['emotiva','referencial','conativa','fática','metalinguística'], g:'C', c:'Apelo ao receptor.' },
 { q:'Um poema que reflete sobre o próprio ato de escrever poemas exemplifica a função:', a:['fática','conativa','referencial','metalinguística','emotiva'], g:'D', c:'Fala do código.' }
],
pr:[
 { q:'"Alô, você está me ouvindo?" exemplifica a função:', a:['fática','poética','referencial','emotiva','conativa'], g:'A', c:'Verifica o canal.' },
 { q:'A função referencial centra-se:', a:['no contexto','no emissor','no receptor','no canal','no código'], g:'A', c:'Informar sobre a realidade.' },
 { q:'A função poética enfatiza:', a:['a forma da mensagem','o canal','o contexto','o emissor','o receptor'], g:'A', c:'Sons, ritmos e imagens.' },
 { q:'A função emotiva predomina em:', a:['desabafo em primeira pessoa','manual de instruções','notícia','bula','lei'], g:'A', c:'Emissor em foco.' }
],
erros:['Confundir emotiva e poética.','Achar que um texto tem só uma função.','Esquecer do canal na função fática.','Não identificar o elemento em foco.'],
check:['associar função e elemento','identificar a função predominante','dar exemplos de cada função','analisar anúncios']
},

{ t:'Variação linguística',
d1:[
 ['Língua é viva e variável', 'Conceito.', ['Toda língua varia no tempo, no espaço e entre grupos','Variação não é erro: é adequação a contextos','Preconceito linguístico: discriminar quem fala diferente','Norma-padrão x norma culta x variedades populares'], 'Não existe falar "certo" ou "errado" em absoluto, e sim adequado ou inadequado ao contexto.'],
 ['Tipos de variação', 'Principais.', ['**Histórica (diacrônica):** muda com o tempo (vossa mercê → você)','**Geográfica (diatópica):** regionalismos e sotaques','**Social (diastrática):** escolaridade, classe, idade, profissão (gírias, jargões)','**Situacional (diafásica):** formal e informal, registro'], null],
 ['Norma-padrão e norma culta', 'Distinção.', ['**Norma-padrão:** modelo idealizado nas gramáticas','**Norma culta:** usada por falantes escolarizados em situações formais','Redações exigem a norma culta','Adequar a linguagem ao interlocutor'], null]
],
d2:[
 ['Gírias, jargões e regionalismos', 'Marcas.', ['Gíria: grupo social (jovens, tribos)','Jargão: profissão (médico, jurídico, informática)','Regionalismo: mandioca/aipim/macaxeira','Sotaque x vocabulário'], null],
 ['Variação e identidade', 'Valor cultural.', ['A fala marca origem, pertencimento e identidade','Valorização das variedades','Literatura regional e música'], null],
 ['Internetês e novas escritas', 'Atualidade.', ['Abreviações, emojis, memes','Registro informal digital','Cuidado ao transpor para a redação'], null]
],
ex:[
 { q:'A variação regional da língua é chamada de:', a:['histórica','diatópica (geográfica)','diastrática','diafásica','estilística'], g:'B', c:'Relacionada ao espaço.' },
 { q:'O preconceito linguístico consiste em:', a:['valorizar todas as variedades','discriminar pessoas por suas formas de falar','ensinar gramática','usar gírias','falar baixo'], g:'B', c:'Não há variedade inferior.' }
],
pr:[
 { q:'A diferença entre "mandioca", "aipim" e "macaxeira" é de variação:', a:['histórica','geográfica','situacional','estilística','ortográfica'], g:'B', c:'Regionalismos.' },
 { q:'Jargão é a linguagem:', a:['de um grupo profissional','de uma região','de um período','de uma criança','de um texto literário'], g:'A', c:'Ex.: linguagem jurídica.' },
 { q:'A norma culta é exigida:', a:['em contextos formais e na redação do ENEM','apenas em casa','só em bate-papos','nunca','apenas em poemas'], g:'A', c:'Adequação ao contexto.' },
 { q:'A língua muda ao longo do tempo. Isso é variação:', a:['histórica','social','regional','situacional','nenhuma'], g:'A', c:'Diacrônica.' }
],
erros:['Chamar variedades de "erros".','Confundir norma-padrão e norma culta.','Usar gírias em redações formais.','Ignorar o contexto.'],
check:['classificar tipos de variação','explicar o preconceito linguístico','distinguir norma-padrão e norma culta','adequar registro ao contexto']
},

{ t:'Coesão e coerência',
d1:[
 ['Coesão', 'Ligação entre as partes do texto.', ['Mecanismos linguísticos: conectivos, pronomes, sinônimos, elipse','**Coesão referencial:** retomada (pronomes, substituições)','**Coesão sequencial:** conectivos e operadores','Evita repetições e rupturas'], null],
 ['Coerência', 'Sentido global do texto.', ['Relação lógica entre ideias, sem contradição','Depende de conhecimento de mundo, contexto e finalidade','Texto pode ser coeso e incoerente','Progressão temática e não contradição'], 'Coesão é forma; coerência é sentido.'],
 ['Conectivos e valores', 'Uso correto.', ['Adição: e, também, além disso','Oposição: mas, porém, entretanto','Causa: porque, pois, já que','Consequência: logo, portanto, por isso','Concessão: embora, ainda que','Condição: se, caso','Finalidade: para que, a fim de'], null]
],
d2:[
 ['Recursos de retomada', 'Referência.', ['Pronomes pessoais, demonstrativos e relativos','Sinônimos, hiperônimos, expressões nominais','Elipse (omissão)','Anáfora e catáfora'], null],
 ['Problemas comuns', 'Falhas.', ['Repetição excessiva','Conectivo inadequado','Pronome sem referente claro','Quebra lógica entre períodos'], null],
 ['Na redação', 'Aplicação.', ['Competência 4 do ENEM (mecanismos linguísticos)','Variar conectivos','Articular parágrafos'], null]
],
ex:[
 { q:'Um texto pode ser coeso e incoerente quando:', a:['usa conectivos mas apresenta ideias contraditórias ou sem sentido global','tem repetição','tem erros ortográficos','é curto','não usa pronomes'], g:'A', c:'Forma sem sentido.' },
 { q:'O conectivo "embora" estabelece relação de:', a:['causa','concessão','finalidade','conclusão','adição'], g:'B', c:'Ideia contrária à esperada.' }
],
pr:[
 { q:'A retomada de um termo por pronome é recurso de coesão:', a:['referencial','sequencial','temporal','lexical apenas','nula'], g:'A', c:'Pronome retoma o referente.' },
 { q:'"Portanto" indica:', a:['conclusão','oposição','causa','condição','finalidade'], g:'A', c:'Resultado lógico.' },
 { q:'A coerência depende de:', a:['relação lógica, contexto e conhecimento de mundo','só da pontuação','só do vocabulário','só do tamanho','só da letra'], g:'A', c:'Sentido global.' },
 { q:'A elipse é:', a:['a omissão de um termo facilmente subentendido','a repetição','a troca de sinônimo','a ironia','a metáfora'], g:'A', c:'Recurso de coesão.' }
],
erros:['Confundir coesão e coerência.','Usar conectivos incompatíveis.','Pronome sem referente.','Repetir termos desnecessariamente.'],
check:['distinguir coesão e coerência','usar conectivos adequados','identificar retomadas','aplicar à redação']
}
];
