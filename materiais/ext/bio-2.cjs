/* Biologia: temas 6 a 10 */
module.exports = [
{ t:'Divisão celular',
d1:[
 ['Ciclo celular', 'Intérfase e divisão.', ['**Intérfase:** G1 (crescimento), S (duplicação do DNA), G2 (preparação)','**Divisão:** mitose ou meiose','Pontos de checagem evitam erros','Controle falho pode levar ao câncer'], null],
 ['Mitose', 'Uma célula origina duas idênticas.', ['**Prófase:** cromossomos condensam, carioteca some','**Metáfase:** cromossomos na placa equatorial','**Anáfase:** cromátides-irmãs se separam','**Telófase:** núcleos se reorganizam; depois, citocinese','Função: crescimento, regeneração, reposição, reprodução assexuada','Número de cromossomos se mantém (2n → 2n)'], 'Mitose = células-filhas geneticamente iguais.'],
 ['Meiose', 'Forma gametas.', ['Duas divisões (meiose I e II) e 4 células haploides (n)','Reduz o número de cromossomos à metade','**Crossing-over** (prófase I) e segregação independente geram variabilidade','Ocorre em células germinativas'], null]
],
d2:[
 ['Comparação mitose × meiose', 'Resumo.', ['Mitose: 1 divisão, 2 células 2n, iguais','Meiose: 2 divisões, 4 células n, diferentes','Mitose: células somáticas; meiose: gametas','Meiose gera variabilidade genética'], null],
 ['Erros e doenças', 'Alterações cromossômicas.', ['Não disjunção gera aneuploidias','**Síndrome de Down:** trissomia do 21','**Turner:** 45,X; **Klinefelter:** 47,XXY','Idade materna avançada aumenta o risco'], null],
 ['Câncer', 'Divisão descontrolada.', ['Mutações em genes que regulam o ciclo','Fatores de risco: cigarro, radiação UV, alimentação, vírus (HPV)','Prevenção e diagnóstico precoce','Tratamentos: cirurgia, quimioterapia, radioterapia, imunoterapia'], null]
],
ex:[
 { q:'Uma célula com 2n = 46 realiza meiose. As células resultantes terão:', a:['46 cromossomos','23 cromossomos','92 cromossomos','12 cromossomos','69 cromossomos'], g:'B', c:'Meiose reduz pela metade: n = 23.' },
 { q:'O crossing-over ocorre na:', a:['prófase I da meiose','anáfase da mitose','intérfase','telófase II','citocinese'], g:'A', c:'Troca de segmentos entre cromossomos homólogos.' }
],
pr:[
 { q:'A duplicação do DNA ocorre na fase:', a:['G1','S','G2','metáfase','telófase'], g:'B', c:'Fase de síntese.' },
 { q:'A síndrome de Down é causada por:', a:['trissomia do cromossomo 21','monossomia do X','deleção do 5','trissomia do 18','poliploidia'], g:'A', c:'Cromossomo 21 em triplicata.' },
 { q:'Na anáfase da mitose ocorre:', a:['duplicação do DNA','separação das cromátides-irmãs','crossing-over','formação de gametas','desaparecimento da célula'], g:'B', c:'Migração para polos opostos.' },
 { q:'A meiose é importante porque:', a:['gera variabilidade genética','forma clones','regenera tecidos','produz células somáticas','repara o DNA'], g:'A', c:'Recombinação e segregação.' }
],
erros:['Dizer que mitose forma gametas.','Confundir cromátides com cromossomos.','Achar que a meiose mantém o número de cromossomos.','Confundir 2n e n.'],
check:['listar as fases da mitose','explicar a meiose e a variabilidade','comparar mitose e meiose','relacionar divisão celular e câncer']
},

{ t:'Genética: leis de Mendel',
d1:[
 ['Conceitos básicos', 'Vocabulário.', ['**Gene:** trecho do DNA; **alelo:** forma de um gene','**Genótipo** (conjunto de alelos) e **fenótipo** (característica observada)','**Dominante** (maiúscula) e **recessivo** (minúscula)','**Homozigoto** (AA ou aa) e **heterozigoto** (Aa)','**Linhagem pura:** homozigota'], null],
 ['1ª lei de Mendel', 'Segregação dos fatores.', ['Cada característica é determinada por dois fatores que se separam na formação dos gametas','Aa × Aa → 25% AA, 50% Aa, 25% aa','Proporção fenotípica 3:1 (dominante:recessivo)','Cruzamento-teste: com homozigoto recessivo'], 'Ervilhas (Pisum sativum): flores púrpura × brancas.'],
 ['2ª lei de Mendel', 'Segregação independente.', ['Genes em cromossomos diferentes segregam de forma independente','AaBb × AaBb → proporção 9:3:3:1','Número de gametas = 2ⁿ (n = pares heterozigotos)','Cálculo prático: multiplicar as probabilidades de cada característica'], null]
],
d2:[
 ['Probabilidade', 'Regras.', ['**Regra do "e":** multiplicam-se as probabilidades de eventos independentes','**Regra do "ou":** somam-se as probabilidades','Quadrado de Punnett organiza os cruzamentos','Casal Aa × Aa: chance de aa = 1/4'], null],
 ['Heredogramas', 'Genealogias.', ['Quadrado = homem; círculo = mulher; símbolo cheio = afetado','Pais normais com filho afetado → doença recessiva','Dois afetados com filho normal → doença dominante','Albinismo, fenilcetonúria: recessivas; Huntington: dominante'], null],
 ['Variações da herança', 'Casos especiais.', ['**Dominância incompleta:** heterozigoto intermediário (flores rosa)','**Codominância:** ambos aparecem (grupo AB)','**Alelos múltiplos:** mais de dois alelos (sistema ABO)','**Pleiotropia** e **epistasia**','**Herança quantitativa (poligênica):** cor da pele, altura'], null]
],
ex:[
 { q:'O cruzamento Aa × Aa gera descendentes AA com probabilidade de:', a:['0','1/4','1/2','3/4','1'], g:'B', c:'25%.' },
 { q:'Casal normal tem um filho albino (recessivo). A probabilidade de um próximo filho também ser albino é:', a:['0','1/4','1/2','3/4','1'], g:'B', c:'Ambos Aa; Aa × Aa → aa 1/4.' }
],
pr:[
 { q:'Um indivíduo Aa é:', a:['homozigoto dominante','homozigoto recessivo','heterozigoto','haploide','mutante'], g:'C', c:'Alelos diferentes.' },
 { q:'Um cruzamento AaBb × AaBb dá proporção fenotípica de:', a:['3:1','1:1','9:3:3:1','1:2:1','1:1:1:1'], g:'C', c:'Duas características independentes.' },
 { q:'O cruzamento-teste é feito com um indivíduo:', a:['homozigoto dominante','heterozigoto','homozigoto recessivo','híbrido','mutante'], g:'C', c:'Revela se o testado é AA ou Aa.' },
 { q:'Na dominância incompleta, o heterozigoto tem fenótipo:', a:['igual ao dominante','igual ao recessivo','intermediário','letal','não observável'], g:'C', c:'Mistura dos fenótipos.' }
],
erros:['Confundir genótipo e fenótipo.','Esquecer de multiplicar probabilidades independentes.','Interpretar heredograma sem analisar todos os cruzamentos.','Achar que dominante é o mais comum na população (não necessariamente).'],
check:['usar o quadrado de Punnett','aplicar as duas leis','ler heredogramas','reconhecer exceções às leis de Mendel']
},

{ t:'Genética: grupos sanguíneos e herança ligada ao sexo',
d1:[
 ['Sistema ABO', 'Alelos múltiplos: Iᴬ, Iᴮ e i.', ['Iᴬ e Iᴮ são codominantes; i é recessivo','**A:** IᴬIᴬ ou Iᴬi; **B:** IᴮIᴮ ou Iᴮi; **AB:** IᴬIᴮ; **O:** ii','Aglutinogênios (antígenos) nas hemácias e aglutininas (anticorpos) no plasma','O: sem antígenos, doador universal; AB: sem aglutininas, receptor universal'], 'O sangue O pode ser doado a todos (hemácias).'],
 ['Fator Rh', 'Antígeno Rh.', ['Rh+ tem o fator (dominante); Rh− não tem (rr)','Rh− não deve receber Rh+','Eritroblastose fetal: mãe Rh− com feto Rh+ em gestações seguintes','Prevenção com imunoglobulina anti-Rh'], null],
 ['Transfusões', 'Compatibilidade.', ['A recebe de A e O','B recebe de B e O','AB recebe de todos','O só recebe de O','Considerar também o Rh'], null]
],
d2:[
 ['Determinação do sexo', 'Cromossomos sexuais.', ['Mulher: XX; homem: XY','O gameta masculino determina o sexo do filho','Probabilidade: 50% menino e 50% menina'], null],
 ['Herança ligada ao X', 'Genes no X.', ['**Daltonismo** e **hemofilia:** recessivos ligados ao X','Mais frequentes em homens (têm um só X)','Mulher afetada: XdXd; portadora: XDXd','Filho homem recebe o X da mãe; filha afetada exige pai afetado e mãe afetada ou portadora'], 'Heredograma típico: afeta mais homens e salta gerações.'],
 ['Outras heranças', 'Casos.', ['**Ligada ao Y (holândrica):** passa de pai para filho','**Influenciada pelo sexo:** calvície','**Restrita ao sexo**','Doenças mitocondriais: herança materna'], null]
],
ex:[
 { q:'Um homem de sangue A (genótipo Iᴬi) e uma mulher de sangue B (Iᴮi) podem ter filhos de quais tipos?', a:['apenas A e B','apenas AB','A, B, AB e O','apenas O','apenas A e O'], g:'C', c:'Gametas: Iᴬ ou i × Iᴮ ou i → AB, A, B, O.' },
 { q:'Uma mulher portadora de daltonismo (XDXd) casa-se com homem normal. A probabilidade de ter um filho homem daltônico é:', a:['0','1/4','1/2','3/4','1'], g:'B', c:'Filho homem: 50%; desses, 50% recebem Xd: 25% do total.' }
],
pr:[
 { q:'O tipo sanguíneo considerado doador universal é:', a:['A','B','AB','O','todos'], g:'D', c:'Sem antígenos A e B.' },
 { q:'A hemofilia é mais comum em homens porque:', a:['o gene está no Y','é recessiva e ligada ao X','é dominante','é mitocondrial','depende do ambiente'], g:'B', c:'Homens têm apenas um X.' },
 { q:'Uma pessoa Rh− tem genótipo:', a:['RR','Rr','rr','R','Rr ou RR'], g:'C', c:'Recessivo.' },
 { q:'Quem determina o sexo da criança?', a:['o óvulo','o espermatozoide','o ambiente','a mãe','é aleatório'], g:'B', c:'Pode carregar X ou Y.' }
],
erros:['Esquecer que Iᴬ e Iᴮ são codominantes.','Dizer que o homem pode ser portador de doença ligada ao X (ele é afetado ou normal).','Confundir doador e receptor universal.','Aplicar proporção 1/2 sem condicionar ao sexo.'],
check:['determinar genótipos do ABO','explicar compatibilidade e Rh','resolver heredogramas ligados ao X','calcular probabilidades com o sexo']
},

{ t:'Biotecnologia',
d1:[
 ['Engenharia genética', 'Manipulação do DNA.', ['**DNA recombinante:** junção de DNA de organismos diferentes','**Enzimas de restrição:** cortam o DNA','**Plasmídeos** como vetores','**Transgênico:** organismo com gene de outra espécie','Exemplos: insulina humana por bactérias, soja resistente a herbicida'], null],
 ['PCR e eletroforese', 'Técnicas.', ['**PCR:** amplifica trechos de DNA','**Eletroforese em gel:** separa fragmentos por tamanho','**Teste de DNA:** paternidade, perícia, identificação','Diagnóstico de doenças e vírus'], 'Testes de COVID-19 usaram RT-PCR.'],
 ['Clonagem', 'Cópias geneticamente idênticas.', ['Ovelha Dolly (1996): transferência de núcleo','Clonagem terapêutica e reprodutiva','Células-tronco: embrionárias e adultas','Questões éticas'], null]
],
d2:[
 ['CRISPR', 'Edição gênica.', ['Permite cortar e alterar genes com precisão','Promessas: curar doenças genéticas','Debate ético: edição de embriões'], null],
 ['Transgênicos e agricultura', 'Prós e contras.', ['Vantagens: produtividade, resistência a pragas, menor uso de defensivos (em alguns casos)','Preocupações: impacto ambiental, dependência de sementes, segurança alimentar','Rotulagem e regulamentação (CTNBio)'], null],
 ['Biotecnologia tradicional', 'Antiga.', ['Fermentação: pães, queijos, vinhos, cervejas','Antibióticos, vacinas, enzimas industriais','Biocombustíveis','Biorremediação: microrganismos limpam poluentes'], null]
],
ex:[
 { q:'Para produzir insulina humana em bactérias, o gene da insulina é inserido:', a:['no ribossomo','em um plasmídeo','na parede celular','no flagelo','na cápsula'], g:'B', c:'Vetor.' },
 { q:'A técnica que amplifica pequenas quantidades de DNA é a:', a:['eletroforese','PCR','centrifugação','osmose','cromatografia'], g:'B', c:'Reação em cadeia da polimerase.' }
],
pr:[
 { q:'As enzimas de restrição:', a:['sintetizam proteínas','cortam o DNA em pontos específicos','copiam o RNA','degradam lipídios','replicam cromossomos'], g:'B', c:'Ferramenta da engenharia genética.' },
 { q:'Dolly foi obtida por:', a:['fertilização in vitro','transferência de núcleo','mutação','fermentação','cruzamento'], g:'B', c:'Clonagem.' },
 { q:'Um organismo transgênico possui:', a:['gene de outra espécie','apenas genes da própria espécie','sem DNA','cromossomos extras de mesma espécie','somente mutações naturais'], g:'A', c:'Gene introduzido.' },
 { q:'A biorremediação usa:', a:['máquinas','microrganismos para degradar poluentes','radiação','destilação','plásticos'], g:'B', c:'Bactérias e fungos.' }
],
erros:['Confundir clone com transgênico.','Achar que PCR sequencia o DNA.','Ignorar o debate ético.','Dizer que todos os transgênicos são prejudiciais ou inofensivos sem analisar.'],
check:['explicar DNA recombinante','citar usos da PCR','diferenciar clonagem e transgenia','discutir ética e riscos']
},

{ t:'Evolução',
d1:[
 ['Lamarck × Darwin', 'Teorias.', ['**Lamarck:** uso e desuso e herança dos caracteres adquiridos (refutada)','**Darwin e Wallace:** seleção natural','Variação, hereditariedade e reprodução diferencial','Os mais adaptados deixam mais descendentes'], 'Girafa: Lamarck diz que esticou o pescoço; Darwin, que os de pescoço longo sobreviveram mais.'],
 ['Neodarwinismo', 'Teoria sintética.', ['Junta Darwin e genética','**Fontes de variabilidade:** mutação, recombinação e fluxo gênico','**Seleção natural, deriva genética e migração** alteram frequências alélicas','Evolução = mudança nas frequências gênicas'], null],
 ['Evidências da evolução', 'Provas.', ['**Fósseis**','**Anatomia comparada:** órgãos homólogos (origem comum) e análogos (mesma função)','**Órgãos vestigiais**','**Embriologia e bioquímica/molecular**','Resistência a antibióticos e a inseticidas'], null]
],
d2:[
 ['Especiação', 'Formação de espécies.', ['Isolamento geográfico → isolamento reprodutivo','Irradiação adaptativa (tentilhões de Galápagos)','Convergência adaptativa: ambientes semelhantes, estruturas análogas','Espécie: grupo que se cruza e gera descendentes férteis'], null],
 ['Equilíbrio de Hardy-Weinberg', 'População sem evolução.', ['p + q = 1','p² + 2pq + q² = 1','Condições: população grande, sem mutação, migração ou seleção, cruzamento ao acaso','Se frequências mudam, há evolução'], null],
 ['Evolução humana', 'Primatas.', ['Ancestrais comuns com os chimpanzés (não vêm deles)','Australopithecus, Homo habilis, Homo erectus, Homo sapiens','Bipedalismo, cérebro maior, uso de ferramentas','Origem africana'], null]
],
ex:[
 { q:'Bactérias resistentes a antibióticos ilustram o processo de:', a:['uso e desuso','seleção natural','geração espontânea','herança de caracteres adquiridos','clonagem'], g:'B', c:'Os resistentes sobrevivem e se reproduzem.' },
 { q:'A asa de um morcego e o braço humano são estruturas:', a:['análogas','homólogas','vestigiais','iguais em função','sem relação'], g:'B', c:'Mesma origem embrionária, funções diferentes.' }
],
pr:[
 { q:'A principal fonte de variabilidade genética é:', a:['seleção natural','mutação e recombinação','extinção','predação','competição'], g:'B', c:'Geram novos alelos e combinações.' },
 { q:'Estruturas análogas resultam de:', a:['ancestral comum recente','convergência adaptativa','herança direta','clonagem','fósseis'], g:'B', c:'Mesma função, origem distinta.' },
 { q:'Para Darwin, a evolução ocorre principalmente por:', a:['uso e desuso','seleção natural','mutação dirigida','geração espontânea','hibridação'], g:'B', c:'Reprodução diferencial.' },
 { q:'O isolamento geográfico pode levar à:', a:['clonagem','especiação','mutação dirigida','extinção sempre','homeostase'], g:'B', c:'Populações divergem.' }
],
erros:['Dizer que o indivíduo evolui (a população evolui).','Achar que o ser humano veio do chimpanzé.','Confundir órgão homólogo e análogo.','Achar que a evolução tem objetivo.'],
check:['comparar Lamarck e Darwin','listar evidências da evolução','explicar especiação','aplicar a ideia de seleção em exemplos atuais']
}
];
