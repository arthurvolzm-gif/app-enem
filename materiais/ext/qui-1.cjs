/* Química: temas 1 a 5 */
module.exports = [
{ t:'Matéria e suas propriedades',
d1:[
 ['Matéria, corpo e objeto', 'Matéria é tudo que tem massa e ocupa lugar no espaço.', ['**Corpo:** porção limitada de matéria (um pedaço de ferro)','**Objeto:** corpo feito para um fim (uma chave)','**Substância:** tipo de matéria com composição e propriedades definidas (água, ferro)'], 'Massa e volume são propriedades gerais de qualquer matéria.'],
 ['Propriedades gerais', 'Comuns a toda matéria, não identificam a substância.', ['**Massa e volume**','**Inércia:** resistência a mudar o estado de movimento','**Impenetrabilidade:** dois corpos não ocupam o mesmo lugar ao mesmo tempo','**Divisibilidade, compressibilidade e elasticidade**'], null],
 ['Propriedades específicas', 'Identificam cada substância.', ['**Físicas:** ponto de fusão, ponto de ebulição, densidade, solubilidade, condutibilidade','**Químicas:** modo de reagir (inflamabilidade, oxidação)','**Organolépticas:** percebidas pelos sentidos (cor, cheiro, sabor, textura)'], null]
],
d2:[
 ['Estados físicos', 'Sólido, líquido e gasoso, dependem de temperatura e pressão.', ['**Sólido:** forma e volume definidos; partículas organizadas e próximas','**Líquido:** volume definido, forma do recipiente','**Gasoso:** forma e volume do recipiente; partículas distantes e agitadas','**Mudanças:** fusão, solidificação, vaporização (evaporação, ebulição, calefação), condensação, sublimação'], 'Mudança de estado é fenômeno físico: a substância continua a mesma.'],
 ['Densidade', 'Relação entre massa e volume.', ['**d = m / V** (g/cm³ ou kg/m³)','A água tem 1 g/cm³','O que tem menor densidade flutua sobre o de maior densidade (se não se misturam)','A densidade identifica substâncias e depende de temperatura'], null],
 ['Fenômenos físicos e químicos', 'Física: não forma nova substância. Química: forma.', ['**Físicos:** mudança de estado, dissolução, quebra, dilatação','**Químicos:** queima, enferrujar, apodrecer, digestão, fotossíntese','**Indícios de reação:** mudança de cor, formação de gás, precipitado, liberação de luz ou calor'], null]
],
ex:[
 { q:'Um bloco tem massa de 200 g e volume de 50 cm³. Sua densidade, em g/cm³, é:', a:['0,25','2','4','10','150'], g:'C', c:'d = m/V = 200/50 = 4 g/cm³.' },
 { q:'Qual dos processos abaixo é um fenômeno químico?', a:['derretimento do gelo','evaporação da água','enferrujamento de um prego','quebra de um vidro','dissolução do sal em água'], g:'C', c:'A ferrugem é formada pela reação do ferro com oxigênio e água, formando nova substância.' }
],
pr:[
 { q:'A temperatura de ebulição, a densidade e o ponto de fusão são exemplos de propriedades:', a:['gerais','específicas','organolépticas','químicas apenas','extensivas'], g:'B', c:'São propriedades específicas físicas que identificam as substâncias.' },
 { q:'A passagem direta do estado sólido para o gasoso é chamada de:', a:['fusão','condensação','sublimação','solidificação','ebulição'], g:'C', c:'Sublimação: sólido → gás, como a naftalina e o gelo seco.' },
 { q:'Um óleo flutua sobre a água porque o óleo:', a:['tem maior massa','tem menor densidade','é insolúvel e mais denso','tem maior volume','é um gás'], g:'B', c:'Menor densidade que a água faz o óleo ficar por cima.' },
 { q:'A formação de bolhas ao adicionar um comprimido efervescente à água indica:', a:['mudança de estado do comprimido','possível reação química com liberação de gás','dissolução física apenas','solidificação','fusão'], g:'B', c:'A liberação de gás é um dos indícios de reação química.' }
],
erros:['Confundir massa com volume.','Achar que mudança de estado é reação química.','Esquecer de converter unidades na densidade.','Confundir propriedade geral com específica.'],
check:['diferenciar propriedade geral e específica','nomear as mudanças de estado','calcular densidade','distinguir fenômeno físico e químico']
},

{ t:'Substâncias e misturas',
d1:[
 ['Substância pura', 'Composição fixa e propriedades constantes.', ['**Simples:** formada por um só elemento (O₂, Fe, O₃)','**Composta:** formada por dois ou mais elementos (H₂O, CO₂, NaCl)','Pontos de fusão e ebulição constantes','Alotropia: um elemento em formas diferentes (grafite e diamante)'], null],
 ['Misturas', 'Duas ou mais substâncias juntas.', ['**Homogênea (uma fase):** água com sal, ar filtrado, ligas metálicas (solução)','**Heterogênea (duas ou mais fases):** água e óleo, granito, areia na água','Propriedades variáveis (PF e PE não constantes)','Quantidade de fases se observa a olho nu ou ao microscópio comum'], 'Sistema com um só componente pode ter várias fases (água e gelo).'],
 ['Casos especiais', 'Misturas com comportamento particular.', ['**Mistura azeotrópica:** ebulição constante (álcool 96% e água)','**Mistura eutética:** fusão constante','**Coloides:** meio termo (leite, gelatina, neblina)','**Ligas:** latão (Cu + Zn), bronze (Cu + Sn), aço (Fe + C)'], null]
],
d2:[
 ['Sistemas e fases', 'Como contar fases.', ['Água + gelo: 2 fases, 1 componente','Água + sal dissolvido: 1 fase, 2 componentes','Água + óleo + areia: 3 fases','Gases sempre formam mistura homogênea'], null],
 ['Curvas de aquecimento', 'Gráficos de temperatura × tempo.', ['**Substância pura:** patamares (temperatura constante) em PF e PE','**Mistura comum:** temperatura varia durante a mudança','**Azeótropa e eutética:** patamar em apenas um dos processos'], 'Patamar durante a fusão e a ebulição = substância pura.'],
 ['Elementos e símbolos', 'Base da linguagem química.', ['Elemento: conjunto de átomos de mesmo número atômico','Símbolos: C, H, O, N, Na, K, Fe, Cu, Ag, Au','Fórmula mostra elementos e quantidades (H₂O: 2 H e 1 O)','Substância simples pode ter fórmula com mais de um átomo (O₂)'], null]
],
ex:[
 { q:'Ao aquecer um líquido, a temperatura se manteve constante durante toda a ebulição. Isso indica que o líquido é provavelmente:', a:['mistura heterogênea','substância pura','mistura qualquer','solução de sal','coloide'], g:'B', c:'Temperatura constante na ebulição é característico de substância pura (ou azeótropo).' },
 { q:'Água, gelo e óleo formam um sistema com:', a:['1 fase e 3 componentes','2 fases e 2 componentes','3 fases e 2 componentes','3 fases e 3 componentes','2 fases e 3 componentes'], g:'C', c:'Gelo, água líquida e óleo são 3 fases; os componentes são água e óleo (2).' }
],
pr:[
 { q:'O gás oxigênio (O₂) é uma substância:', a:['composta','simples','mistura homogênea','mistura heterogênea','elemento apenas'], g:'B', c:'O₂ é formado só por átomos de oxigênio.' },
 { q:'O aço é uma mistura de:', a:['ferro e carbono','cobre e zinco','cobre e estanho','ferro e oxigênio','ouro e prata'], g:'A', c:'Aço é liga de ferro com pequena porcentagem de carbono.' },
 { q:'Qual é uma mistura homogênea?', a:['água e óleo','areia e água','granito','água e sal dissolvido','água e gelo'], g:'D', c:'Sal dissolvido forma uma única fase.' },
 { q:'Uma mistura de água e gasolina é:', a:['homogênea','heterogênea','substância composta','substância simples','azeotrópica'], g:'B', c:'Líquidos imiscíveis formam duas fases.' }
],
erros:['Achar que toda mistura tem várias fases.','Confundir fase com componente.','Esquecer que água + gelo é substância pura em 2 fases.','Dizer que substância composta e mistura são o mesmo.'],
check:['diferenciar substância simples, composta e mistura','contar fases e componentes','ler curvas de aquecimento','identificar ligas comuns']
},

{ t:'Separação de misturas',
d1:[
 ['Misturas heterogêneas', 'Técnicas mecânicas.', ['**Catação:** separar sólidos à mão (feijão)','**Peneiração:** grãos de tamanhos diferentes','**Filtração:** sólido de líquido ou gás (coador de café)','**Decantação:** deixa o mais denso depositar; funil de bromo para líquidos imiscíveis','**Centrifugação:** acelera a decantação (exames de sangue)','**Separação magnética:** ferro de outros materiais','**Flotação:** areia e serragem em água'], null],
 ['Misturas homogêneas (sólido + líquido)', 'Separam o soluto do solvente.', ['**Evaporação:** o líquido é perdido (salinas)','**Destilação simples:** recupera o líquido condensado (água destilada)','**Cristalização:** formação de cristais ao esfriar ou evaporar'], null],
 ['Misturas homogêneas (líquido + líquido)', 'Pontos de ebulição diferentes.', ['**Destilação fracionada:** separa líquidos miscíveis (petróleo, álcool e água)','Sai primeiro o de menor ponto de ebulição','**Destilação do ar liquefeito:** separa N₂, O₂ e argônio'], null]
],
d2:[
 ['Outras técnicas', 'Para casos particulares.', ['**Dissolução fracionada:** um sólido dissolve e o outro não (sal e areia)','**Levigação:** água arrasta o mais leve (garimpo)','**Sublimação:** sólido que sublima (iodo)','**Cromatografia:** pigmentos em papel ou coluna'], null],
 ['Tratamento da água', 'Etapas típicas do ENEM.', ['**Gradeamento:** retém objetos grandes','**Floculação:** sulfato de alumínio forma flocos','**Decantação:** flocos depositam','**Filtração:** areia e carvão','**Desinfecção (cloração) e correção de pH**','**Fluoretação:** previne cáries'], 'Cada etapa se baseia em um processo de separação.'],
 ['Como escolher a técnica', 'Raciocínio de prova.', ['Identifique se a mistura é homogênea ou heterogênea','Observe a diferença de propriedade: densidade, solubilidade, ponto de ebulição, magnetismo','Sólido + líquido heterogêneo: filtração ou decantação','Líquido + líquido homogêneo: destilação fracionada'], null]
],
ex:[
 { q:'Para separar uma mistura de água e sal de cozinha, mantendo o recipiente de água, usa-se:', a:['filtração','decantação','destilação simples','peneiração','separação magnética'], g:'C', c:'Na destilação simples, o líquido evapora, condensa e é recolhido, sobrando o sal.' },
 { q:'A mistura de água e óleo pode ser separada por:', a:['destilação fracionada','funil de decantação','evaporação','cristalização','filtração comum'], g:'B', c:'Líquidos imiscíveis com densidades diferentes: funil de decantação.' }
],
pr:[
 { q:'Separar limalha de ferro misturada à areia é possível por:', a:['decantação','separação magnética','destilação','filtração','cristalização'], g:'B', c:'O ferro é atraído pelo ímã.' },
 { q:'O processo usado na obtenção de sal marinho nas salinas é:', a:['destilação','evaporação','sublimação','centrifugação','levigação'], g:'B', c:'A água do mar evapora e o sal cristaliza.' },
 { q:'Na destilação fracionada do petróleo, a separação ocorre devido à diferença de:', a:['densidade','solubilidade','pontos de ebulição','magnetismo','cor'], g:'C', c:'Cada fração tem faixa de ebulição diferente.' },
 { q:'Na estação de tratamento de água, o sulfato de alumínio é usado na etapa de:', a:['cloração','floculação','fluoretação','destilação','gradeamento'], g:'B', c:'Forma flocos que aglutinam impurezas e depois decantam.' }
],
erros:['Usar filtração em mistura homogênea.','Confundir destilação simples com fracionada.','Achar que decantação separa líquidos miscíveis.','Esquecer a ordem das etapas do tratamento de água.'],
check:['escolher a técnica pelo tipo de mistura','explicar a destilação simples e fracionada','ordenar as etapas de tratamento de água','associar técnica à propriedade explorada']
},

{ t:'Modelos atômicos',
d1:[
 ['Dalton e Thomson', 'Os primeiros modelos.', ['**Dalton (1808):** átomo maciço, indivisível, esfera (bola de bilhar)','**Thomson (1897):** descobre o elétron; "pudim de passas" (esfera positiva com elétrons)','Raios catódicos mostraram partículas negativas'], null],
 ['Rutherford', 'Experiência com partículas alfa em lâmina de ouro (1911).', ['A maioria atravessou: o átomo é quase todo vazio','Poucas desviaram: existe núcleo pequeno, denso e positivo','Elétrons giram na eletrosfera (modelo planetário)','Limitação: não explicava a estabilidade do átomo'], 'Núcleo minúsculo; eletrosfera enorme em comparação.'],
 ['Bohr', 'Níveis de energia (1913).', ['Elétrons ocupam órbitas com energia fixa (camadas K, L, M...)','Ao absorver energia, salta para nível mais externo','Ao voltar, emite luz de cor característica','Explica testes de chama e fogos de artifício'], null]
],
d2:[
 ['Modelo atual', 'Mecânica quântica.', ['Elétron: comportamento de onda e partícula','**Orbital:** região de maior probabilidade de encontrar o elétron','Princípio da incerteza (Heisenberg)','Números quânticos descrevem cada elétron'], null],
 ['Partículas do átomo', 'Prótons, nêutrons e elétrons.', ['**Próton:** carga +1, no núcleo','**Nêutron:** sem carga, no núcleo','**Elétron:** carga −1, massa muito menor','Átomo neutro: prótons = elétrons','Massa do átomo concentrada no núcleo'], null],
 ['Evolução e ciência', 'Modelos são provisórios.', ['Cada modelo explica fatos conhecidos até então','Novos experimentos exigem novos modelos','Teste de chama: sais emitem cores (sódio amarelo, cobre verde)','Fogos de artifício usam esse princípio'], null]
],
ex:[
 { q:'Na experiência de Rutherford, a maioria das partículas alfa atravessou a lâmina de ouro. Isso levou à conclusão de que:', a:['o átomo é maciço','o átomo é quase todo vazio','os elétrons ficam no núcleo','o núcleo é negativo','não existem elétrons'], g:'B', c:'Se quase todas passaram, a maior parte do átomo é espaço vazio.' },
 { q:'As cores dos fogos de artifício são explicadas pelo modelo de:', a:['Dalton','Thomson','Rutherford','Bohr','Lavoisier'], g:'D', c:'Elétrons absorvem energia, saltam de nível e emitem luz ao retornar.' }
],
pr:[
 { q:'Quem descobriu o elétron?', a:['Dalton','Thomson','Rutherford','Bohr','Heisenberg'], g:'B', c:'Thomson, com os raios catódicos.' },
 { q:'A massa de um átomo está concentrada:', a:['na eletrosfera','no núcleo','em todo o átomo igualmente','nos elétrons','nos orbitais'], g:'B', c:'Prótons e nêutrons têm massa muito maior que a do elétron.' },
 { q:'O átomo neutro tem:', a:['mais prótons que elétrons','mais elétrons que prótons','igual número de prótons e elétrons','só nêutrons','só prótons'], g:'C', c:'Neutralidade: cargas positivas e negativas se igualam.' },
 { q:'O modelo de Dalton é conhecido como:', a:['pudim de passas','planetário','bola de bilhar','quântico','orbital'], g:'C', c:'Esfera maciça e indivisível.' }
],
erros:['Atribuir ao Thomson o núcleo.','Esquecer que Bohr explica espectros.','Achar que o elétron tem trajetória definida no modelo atual.','Confundir carga do nêutron.'],
check:['listar o modelo de cada cientista','explicar a experiência de Rutherford','relacionar salto quântico a cores','descrever as partículas do átomo']
},

{ t:'Estrutura atômica e tabela periódica',
d1:[
 ['Número atômico e massa', 'Identidade do átomo.', ['**Z (número atômico):** nº de prótons; define o elemento','**A (número de massa):** prótons + nêutrons','**Nêutrons = A − Z**','**Íon:** átomo que ganhou ou perdeu elétrons (cátion positivo, ânion negativo)'], null],
 ['Isótopos, isóbaros e isótonos', 'Relações entre átomos.', ['**Isótopos:** mesmo Z (¹²C e ¹⁴C)','**Isóbaros:** mesmo A','**Isótonos:** mesmo número de nêutrons','Isótopos têm propriedades químicas iguais'], 'Carbono-14 é usado na datação de fósseis.'],
 ['Distribuição eletrônica', 'Camadas e subníveis.', ['Camadas K, L, M, N... (2, 8, 18, 32 elétrons)','Subníveis s (2), p (6), d (10), f (14)','Diagrama de Pauling: 1s 2s 2p 3s 3p 4s 3d...','**Camada de valência:** última camada, define as ligações'], null]
],
d2:[
 ['Organização da tabela', 'Ordem crescente de número atômico.', ['**Períodos:** 7 linhas (nº de camadas)','**Grupos (famílias):** 18 colunas (mesmas propriedades)','1: alcalinos; 2: alcalinoterrosos; 16: calcogênios; 17: halogênios; 18: gases nobres','Hidrogênio é um caso à parte'], null],
 ['Metais, ametais e gases nobres', 'Classificação geral.', ['**Metais:** brilho, condutores, maleáveis, dúcteis, perdem elétrons','**Ametais:** isolantes, ganham elétrons (O, N, Cl, S)','**Gases nobres:** estáveis, camada completa (8 elétrons, He com 2)','**Semimetais:** Si, Ge'], null],
 ['Propriedades periódicas', 'Variam com Z de forma regular.', ['**Raio atômico:** aumenta para baixo e para a esquerda','**Eletronegatividade:** aumenta para cima e para a direita (F é a maior)','**Energia de ionização:** mesma tendência da eletronegatividade','**Eletropositividade:** tendência contrária'], 'Regra prática: o flúor é o mais eletronegativo; o césio/frâncio, o mais eletropositivo.'],
]
,
ex:[
 { q:'Um átomo com Z = 17 e A = 35 tem quantos nêutrons?', a:['17','18','35','52','1'], g:'B', c:'N = A − Z = 35 − 17 = 18.' },
 { q:'Qual elemento é mais eletronegativo?', a:['Na','Mg','Cl','F','Li'], g:'D', c:'O flúor é o elemento mais eletronegativo.' }
],
pr:[
 { q:'Átomos que têm o mesmo número atômico e diferentes números de massa são:', a:['isóbaros','isótopos','isótonos','isômeros','alótropos'], g:'B', c:'Mesmo Z: isótopos.' },
 { q:'A família 17 da tabela periódica é chamada de:', a:['alcalinos','alcalinoterrosos','calcogênios','halogênios','gases nobres'], g:'D', c:'Grupo 17: halogênios (F, Cl, Br, I).' },
 { q:'O número de camadas eletrônicas de um átomo corresponde ao seu:', a:['grupo','período','número atômico','número de massa','número de nêutrons'], g:'B', c:'O período indica a quantidade de camadas.' },
 { q:'Um elemento com configuração terminando em 3s² 3p⁶ é:', a:['metal alcalino','gás nobre','halogênio','calcogênio','metal de transição'], g:'B', c:'Camada de valência completa com 8 elétrons: argônio (gás nobre).' }
],
erros:['Confundir A com Z.','Achar que isótopos têm propriedades químicas diferentes.','Trocar período e grupo.','Inverter a tendência do raio atômico.'],
check:['calcular prótons, nêutrons e elétrons','fazer a distribuição eletrônica','localizar famílias na tabela','prever tendências periódicas']
}
];
