/* Química: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.qui = { id:'qui', nome:'Química', icone:'🧪', emojis:'🧪 ⚗️ 🔬 💧',
capa:'linear-gradient(160deg,#0b3b3a,#127a6a 55%,#7ad37a)',
temas:[
{ t:'Matéria e suas propriedades', p:'m', ic:'🧊', s:[
  ['O que é matéria?', 'Tudo o que tem massa e ocupa lugar no espaço.', null, null],
  ['Propriedades', null, ['**Gerais:** massa, volume (todas as matérias têm)','**Específicas:** densidade, ponto de fusão, ponto de ebulição (identificam uma substância)','**Densidade:** d = m ÷ V'], null],
  ['Estados físicos', null, ['**Sólido:** forma e volume definidos','**Líquido:** volume definido, forma variável','**Gasoso:** forma e volume variáveis'], null],
  ['Mudanças de estado', null, ['Fusão (sólido → líquido)','Vaporização (líquido → gás): evaporação, ebulição ou calefação','Condensação ou liquefação (gás → líquido)','Solidificação (líquido → sólido)','Sublimação (sólido ↔ gás). Ex.: naftalina, gelo seco'], null]
], enem:'Gráficos de aquecimento com patamares: durante a mudança de estado de uma substância pura, a temperatura fica constante.' },

{ t:'Substâncias e misturas', p:'m', ic:'🥤', s:[
  ['Substâncias', null, ['**Simples:** formadas por um só elemento (O₂, Fe)','**Compostas:** formadas por dois ou mais elementos (H₂O, CO₂)'], null],
  ['Misturas', null, ['**Homogênea:** uma só fase (água com sal dissolvido, ar)','**Heterogênea:** duas ou mais fases (água e óleo, granito)'], null],
  ['Como diferenciar', 'Substância pura muda de estado em temperatura constante. Mistura muda de estado em uma faixa de temperatura.', null, 'Exceções: misturas eutéticas (fusão constante) e azeotrópicas (ebulição constante, como o álcool 96%).']
], enem:'Gráficos de temperatura × tempo ajudam a identificar se é substância pura ou mistura.' },

{ t:'Separação de misturas', p:'a', ic:'🧺', s:[
  ['Misturas heterogêneas', null, ['**Filtração:** sólido de líquido (coar café)','**Decantação:** separação pela densidade (água e óleo; funil de decantação)','**Centrifugação:** acelera a decantação','**Catação, peneiração, ventilação, separação magnética**'], null],
  ['Misturas homogêneas', null, ['**Destilação simples:** sólido dissolvido em líquido (dessalinização)','**Destilação fracionada:** líquidos com pontos de ebulição diferentes (petróleo, álcool)','**Evaporação:** obter o sólido (salinas)'], null],
  ['Tratamento de água', 'Etapas: coagulação e floculação → decantação → filtração → desinfecção (cloro) → fluoretação.', null, null]
], enem:'Tratamento de água e esgoto, refino do petróleo e dessalinização são contextos frequentes.' },

{ t:'Modelos atômicos', p:'m', ic:'⚛️', s:[
  ['A evolução dos modelos', null, ['**Dalton:** átomo como esfera maciça e indivisível ("bola de bilhar")','**Thomson:** esfera positiva com elétrons incrustados ("pudim de passas")','**Rutherford:** núcleo pequeno e denso, elétrons ao redor; o átomo é quase todo vazio','**Bohr:** elétrons em níveis de energia (camadas)'], null],
  ['Bohr e as cores', 'Quando o elétron recebe energia, salta para um nível mais externo; ao voltar, libera energia na forma de luz.', null, 'Explica as cores dos fogos de artifício e o teste de chama.'],
  ['Partículas', null, ['**Prótons:** carga positiva, no núcleo','**Nêutrons:** sem carga, no núcleo','**Elétrons:** carga negativa, na eletrosfera'], null]
], enem:'Fogos de artifício, letreiros luminosos e o experimento de Rutherford com a lâmina de ouro.' },

{ t:'Estrutura atômica e tabela periódica', p:'m', ic:'🧱', s:[
  ['Números do átomo', null, ['**Número atômico (Z):** quantidade de prótons, identifica o elemento','**Número de massa (A):** A = prótons + nêutrons','**Isótopos:** mesmo Z, massas diferentes (carbono-12 e carbono-14)'], null],
  ['Tabela periódica', 'Os elementos estão em ordem crescente de número atômico.', ['**Períodos (linhas):** número de camadas','**Grupos ou famílias (colunas):** propriedades parecidas'], null],
  ['Famílias importantes', null, ['Grupo 1: metais alcalinos (Na, K)','Grupo 2: alcalinoterrosos (Ca, Mg)','Grupo 17: halogênios (Cl, F)','Grupo 18: gases nobres (He, Ne), pouco reativos'], null],
  ['Propriedades periódicas', 'O raio atômico aumenta para baixo e para a esquerda; a eletronegatividade aumenta para cima e para a direita (o flúor é o mais eletronegativo).', null, null]
], enem:'Isótopos radioativos (datação por carbono-14, medicina) e semelhança de propriedades dentro de uma família.' },

{ t:'Ligações químicas', p:'a', ic:'🔗', s:[
  ['Por que os átomos se ligam?', 'Para ficarem mais estáveis, geralmente com 8 elétrons na última camada (regra do octeto).', null, null],
  ['Tipos de ligação', null, ['**Iônica:** metal + não metal, transferência de elétrons (NaCl). Conduz corrente dissolvida ou fundida','**Covalente:** não metal + não metal, compartilhamento de elétrons (H₂O, CO₂)','**Metálica:** entre metais, "mar de elétrons". Explica o brilho e a condução'], null],
  ['Propriedades', null, ['Compostos iônicos: sólidos, alto ponto de fusão','Compostos moleculares: geralmente baixo ponto de fusão','Metais: bons condutores de calor e eletricidade'], null]
], enem:'Questões relacionam o tipo de ligação às propriedades do material (conduzir corrente, ponto de fusão).' },

{ t:'Polaridade e forças intermoleculares', p:'m', ic:'🧲', s:[
  ['Polaridade', null, ['**Polar:** distribuição desigual de cargas (água)','**Apolar:** distribuição equilibrada (óleo, CO₂)'], '"Semelhante dissolve semelhante": polar dissolve polar; apolar dissolve apolar.'],
  ['Forças intermoleculares', 'Da mais forte para a mais fraca:', ['**Ligação de hidrogênio:** H ligado a F, O ou N (água)','**Dipolo-dipolo:** entre moléculas polares','**Dipolo induzido (London):** entre moléculas apolares'], null],
  ['Consequências', null, ['Forças mais fortes → ponto de ebulição mais alto','A água tem ponto de ebulição alto por causa das ligações de hidrogênio'], 'O sabão funciona porque tem uma parte polar e outra apolar.']
], enem:'Por que água e óleo não se misturam e como o sabão remove a gordura. Muito cobrado.' },

{ t:'Funções inorgânicas', p:'a', ic:'🍋', s:[
  ['Ácidos', 'Liberam H⁺ em água. Sabor azedo, deixam o tornassol vermelho.', ['HCl (suco gástrico)','H₂SO₄ (bateria de carro)','Ácido cítrico (limão)'], null],
  ['Bases', 'Liberam OH⁻ em água. Sabor adstringente, deixam a fenolftaleína rosa.', ['NaOH (soda cáustica)','Mg(OH)₂ (leite de magnésia, antiácido)'], null],
  ['Sais e óxidos', null, ['**Sais:** resultam da neutralização ácido + base (NaCl, CaCO₃)','**Óxidos:** compostos com oxigênio (CO₂, SO₂, CaO)','Óxidos ácidos (SO₂, NO₂) formam a chuva ácida'], null],
  ['Neutralização', 'Ácido + base → sal + água.', null, 'Exemplo: antiácido neutralizando o excesso de ácido no estômago.']
], enem:'Antiácidos, calagem do solo, chuva ácida e produtos de limpeza.' },

{ t:'pH e equilíbrio ácido-base', p:'a', ic:'🧫', s:[
  ['Escala de pH', null, ['pH < 7: ácido','pH = 7: neutro (a 25 °C)','pH > 7: básico'], null],
  ['Escala logarítmica', 'Cada unidade de pH representa **10 vezes** a concentração de H⁺.', null, 'pH 3 é 100 vezes mais ácido que pH 5.'],
  ['Indicadores', null, ['Fenolftaleína: incolor no ácido, rosa no básico','Repolho roxo: muda de cor em todo o pH'], null],
  ['No cotidiano', null, ['Correção do solo ácido com calcário (calagem)','pH do sangue em torno de 7,4','Acidificação dos oceanos pelo CO₂'], null]
], enem:'Comparação de acidez entre soluções e correção do pH do solo e de piscinas.' },

{ t:'Reações químicas', p:'m', ic:'💥', s:[
  ['Evidências de reação', null, ['Mudança de cor','Liberação de gás (bolhas)','Formação de precipitado (sólido)','Liberação ou absorção de calor e luz'], null],
  ['Tipos de reação', null, ['**Síntese:** A + B → AB','**Decomposição:** AB → A + B','**Simples troca:** A + BC → AC + B','**Dupla troca:** AB + CD → AD + CB'], null],
  ['Balanceamento', 'Lei de Lavoisier: "na natureza nada se cria, nada se perde, tudo se transforma". A massa dos reagentes é igual à dos produtos.', null, 'Ajuste os coeficientes para ter o mesmo número de átomos de cada lado.']
], enem:'Identificar o tipo de reação e balancear equações aparecem ligados a processos industriais.' },

{ t:'Mol e massa molar', p:'a', ic:'⚖️', s:[
  ['O mol', '1 mol = 6,0 × 10²³ partículas (constante de Avogadro).', null, 'É como uma "dúzia" gigante de átomos ou moléculas.'],
  ['Massa molar', 'É a massa de 1 mol, em g/mol. Some as massas atômicas.', ['H₂O = 2 × 1 + 16 = 18 g/mol','CO₂ = 12 + 2 × 16 = 44 g/mol','NaCl = 23 + 35,5 = 58,5 g/mol'], null],
  ['Conversões', null, ['n (mols) = massa ÷ massa molar','1 mol de gás nas CNTP ocupa cerca de 22,4 L'], null]
], enem:'É a base de toda estequiometria. Pratique a soma das massas atômicas.' },

{ t:'Estequiometria', p:'a', ic:'🧮', s:[
  ['O que é?', 'É o cálculo das quantidades de reagentes e produtos em uma reação.', null, null],
  ['Passo a passo', null, ['1. Escreva e balanceie a equação','2. Leia a proporção em mols pelos coeficientes','3. Converta para a unidade pedida (massa, volume, partículas)','4. Monte a regra de três'], null],
  ['Exemplo', '2 H₂ + O₂ → 2 H₂O. Quantos gramas de água se formam com 4 g de H₂?', ['4 g de H₂ = 2 mol','2 mol de H₂ formam 2 mol de H₂O','2 × 18 = 36 g de água'], null],
  ['Pureza e rendimento', 'Se o reagente tem 80% de pureza, use só 80% da massa. Se o rendimento é 90%, o produto final é 90% do teórico.', null, null]
], enem:'É o tema mais cobrado de Química. Treine muitas regras de três com mols.' },

{ t:'Soluções e concentração', p:'a', ic:'🧴', s:[
  ['Componentes', null, ['**Soluto:** o que é dissolvido','**Solvente:** o que dissolve (geralmente a água)'], null],
  ['Concentrações', null, ['**Comum:** C = massa do soluto (g) ÷ volume (L)','**Molar:** M = mols do soluto ÷ volume (L)','**Título/porcentagem:** massa do soluto ÷ massa da solução','**ppm:** partes por milhão (≈ mg por litro de água)'], null],
  ['Diluição', 'Adicionar solvente: a quantidade de soluto não muda.', ['C₁ × V₁ = C₂ × V₂'], 'Exemplo: 100 mL a 2 g/L diluídos para 400 mL → 0,5 g/L.'],
  ['Solubilidade', 'Quantidade máxima de soluto que se dissolve. Solução saturada atingiu o limite; a supersaturada é instável.', null, null]
], enem:'Rótulos de remédios, soro, água mineral e poluentes em ppm. Muito cobrado.' },

{ t:'Propriedades coligativas', p:'m', ic:'🧂', s:[
  ['O que são?', 'Propriedades que mudam com a **quantidade de partículas** dissolvidas, não com o tipo.', null, null],
  ['Os efeitos', null, ['**Tonoscopia:** diminui a pressão de vapor','**Ebulioscopia:** aumenta a temperatura de ebulição','**Crioscopia:** diminui a temperatura de congelamento','**Osmose:** solvente passa do meio menos concentrado para o mais concentrado'], null],
  ['No cotidiano', null, ['Sal nas estradas para derreter o gelo','Aditivo no radiador dos carros','Salgar carne para conservar (osmose desidrata microrganismos)','Hemácias que murcham em água muito salgada'], null]
], enem:'Osmose em células, conservação de alimentos e sal na neve são exemplos frequentes.' },

{ t:'Termoquímica', p:'m', ic:'🔥', s:[
  ['Calor nas reações', null, ['**Exotérmica:** libera calor (ΔH < 0). Ex.: combustão, respiração','**Endotérmica:** absorve calor (ΔH > 0). Ex.: fotossíntese, compressa fria'], null],
  ['Entalpia', 'ΔH = H dos produtos − H dos reagentes.', null, null],
  ['Lei de Hess', 'O ΔH de uma reação é a soma dos ΔH das etapas, não importa o caminho.', null, null],
  ['Combustíveis', 'Comparamos a energia liberada por grama ou por litro de combustível.', null, 'Exemplo: etanol, gasolina, gás natural e hidrogênio têm poderes caloríficos diferentes.']
], enem:'Comparação de combustíveis e compressas quentes e frias.' },

{ t:'Cinética química', p:'m', ic:'⏱️', s:[
  ['Velocidade das reações', 'Mede a rapidez com que os reagentes viram produtos.', null, null],
  ['O que acelera uma reação', null, ['**Temperatura maior:** partículas mais agitadas (alimento estraga mais rápido fora da geladeira)','**Concentração maior** dos reagentes','**Superfície de contato maior:** comprimido em pó reage mais rápido que inteiro','**Catalisador:** acelera sem ser consumido (enzimas, catalisador de carro)'], null],
  ['Energia de ativação', 'Energia mínima para a reação começar. O catalisador diminui essa energia.', null, null]
], enem:'Geladeira, panela de pressão, comprimidos efervescentes e enzimas são exemplos clássicos.' },

{ t:'Equilíbrio químico', p:'m', ic:'🔄', s:[
  ['O que é?', 'Em reações reversíveis, chega um momento em que a reação direta e a inversa ocorrem na mesma velocidade.', null, 'As concentrações ficam constantes, mas a reação não parou.'],
  ['Princípio de Le Chatelier', 'Quando o equilíbrio é perturbado, ele se desloca para diminuir a perturbação.', ['Adicionar reagente → desloca para os produtos','Aumentar a temperatura → favorece o lado endotérmico','Aumentar a pressão → favorece o lado com menos mols de gás'], null],
  ['Exemplos', null, ['Produção de amônia (processo Haber-Bosch)','Refrigerante perdendo gás ao abrir a garrafa','Formação de estalactites'], null]
], enem:'O refrigerante que perde CO₂ ao ser aberto e o efeito de mudanças de temperatura são cobrados.' },

{ t:'Eletroquímica', p:'a', ic:'🔋', s:[
  ['Oxidação e redução', null, ['**Oxidação:** perda de elétrons (o Nox aumenta)','**Redução:** ganho de elétrons (o Nox diminui)','Quem se oxida é o agente redutor; quem se reduz é o agente oxidante'], null],
  ['Pilhas', 'Transformam energia química em elétrica (reação espontânea).', ['**Ânodo:** onde ocorre a oxidação (polo negativo)','**Cátodo:** onde ocorre a redução (polo positivo)'], null],
  ['Eletrólise', 'Usa energia elétrica para provocar uma reação não espontânea.', ['Produção de alumínio','Galvanoplastia (cromar, niquelar)'], null],
  ['Corrosão', 'A ferrugem é a oxidação do ferro. Proteção: pintura, galvanização (zinco) e metal de sacrifício.', null, null]
], enem:'Baterias, descarte de pilhas, corrosão e proteção de cascos de navios.' },

{ t:'Radioatividade', p:'m', ic:'☢️', s:[
  ['Emissões radioativas', null, ['**Alfa (α):** 2 prótons e 2 nêutrons, pouco penetrante','**Beta (β):** elétron emitido pelo núcleo','**Gama (γ):** onda eletromagnética, muito penetrante'], null],
  ['Meia-vida', 'Tempo para metade dos átomos radioativos se desintegrar.', null, 'Exemplo: após 3 meias-vidas, resta 1/8 da amostra.'],
  ['Aplicações', null, ['Datação por carbono-14','Radioterapia e exames','Usinas nucleares (fissão)','Esterilização de alimentos e materiais'], null],
  ['Riscos', 'Contaminação e lixo radioativo.', null, 'Acidente de Goiânia (1987) com césio-137 é o maior acidente radiológico do Brasil.']
], enem:'Meia-vida, datação de fósseis e o acidente com césio-137 em Goiânia.' },

{ t:'Introdução à química orgânica', p:'m', ic:'🧬', s:[
  ['O carbono', 'Faz 4 ligações e forma cadeias longas, base dos compostos orgânicos.', null, null],
  ['Classificação das cadeias', null, ['**Aberta ou fechada (cíclica)**','**Saturada** (só ligações simples) ou **insaturada** (duplas ou triplas)','**Homogênea** ou **heterogênea** (com outro átomo entre carbonos)','**Aromática:** tem anel benzênico'], null],
  ['Hidrocarbonetos', 'Compostos só de C e H.', ['**Alcanos:** só ligações simples (metano, propano)','**Alcenos:** uma dupla (eteno)','**Alcinos:** uma tripla (etino)'], 'O petróleo é uma mistura de hidrocarbonetos.']
], enem:'Petróleo, gás de cozinha (propano e butano) e combustíveis.' },

{ t:'Funções orgânicas', p:'a', ic:'💊', s:[
  ['Funções oxigenadas', null, ['**Álcool:** OH em carbono saturado (etanol)','**Fenol:** OH ligado ao anel aromático','**Aldeído:** C=O na ponta da cadeia (formol)','**Cetona:** C=O no meio da cadeia (acetona)','**Ácido carboxílico:** COOH (vinagre: ácido acético)','**Éster:** COO entre carbonos (aromas de frutas)','**Éter:** O entre carbonos'], null],
  ['Funções nitrogenadas', null, ['**Amina:** N ligado a carbonos','**Amida:** N ligado a C=O'], null],
  ['Como identificar', 'Procure o grupo funcional na fórmula: é ele que dá as propriedades da substância.', null, null]
], enem:'É comum aparecer a fórmula de um remédio, hormônio ou aroma pedindo para reconhecer as funções presentes.' },

{ t:'Isomeria', p:'m', ic:'🪞', s:[
  ['O que é?', 'Compostos com a **mesma fórmula molecular** e estruturas diferentes.', null, null],
  ['Isomeria plana', null, ['**De cadeia:** cadeias diferentes','**De posição:** grupo em posições diferentes','**De função:** funções diferentes (álcool e éter)'], null],
  ['Isomeria espacial', null, ['**Geométrica (cis-trans):** em duplas ligações ou ciclos','**Óptica:** carbono com 4 ligantes diferentes (carbono quiral); gera moléculas "espelho"'], 'Isômeros ópticos podem ter efeitos diferentes no corpo, como no caso da talidomida.']
], enem:'Isomeria óptica em remédios e isomeria cis-trans em gorduras (gordura trans).' },

{ t:'Reações orgânicas', p:'m', ic:'⚗️', s:[
  ['Principais reações', null, ['**Combustão:** combustível + O₂ → CO₂ + H₂O (completa); incompleta forma CO e fuligem','**Esterificação:** ácido carboxílico + álcool → éster + água','**Saponificação:** gordura + base forte → sabão + glicerina','**Adição:** quebra de duplas (hidrogenação de óleos → margarina)'], null],
  ['Combustão incompleta', 'Falta de oxigênio gera monóxido de carbono (CO), gás tóxico.', null, 'Por isso é perigoso ligar aquecedor a gás em ambiente fechado.'],
  ['Transesterificação', 'Óleo vegetal + álcool → biodiesel + glicerina.', null, null]
], enem:'Produção de sabão e biodiesel e os riscos da combustão incompleta.' },

{ t:'Polímeros', p:'m', ic:'🧴', s:[
  ['O que são?', 'Macromoléculas formadas pela repetição de unidades menores, os **monômeros**.', null, null],
  ['Tipos', null, ['**Naturais:** amido, celulose, proteínas, borracha natural','**Sintéticos:** polietileno (sacolas), PET (garrafas), PVC (canos), náilon'], null],
  ['Polimerização', null, ['**Adição:** monômeros com dupla ligação se unem (polietileno)','**Condensação:** a união libera uma molécula pequena, como a água (PET, náilon)'], null],
  ['Problema ambiental', 'Plásticos demoram séculos para se decompor.', ['Reciclagem','Plásticos biodegradáveis','Redução do consumo'], 'Microplásticos já foram encontrados em oceanos e em organismos.']
], enem:'Reciclagem de plásticos, biodegradáveis e o impacto dos microplásticos.' },

{ t:'Química ambiental', p:'a', ic:'🌎', s:[
  ['Atmosfera', null, ['**Efeito estufa:** CO₂, CH₄ e outros gases retêm calor; o excesso intensifica o aquecimento global','**Chuva ácida:** óxidos de enxofre e nitrogênio reagem com a água','**Camada de ozônio:** destruída por CFCs, protege contra o ultravioleta'], null],
  ['Água', null, ['**Eutrofização:** excesso de nutrientes (fosfatos) → algas → falta de oxigênio → morte de peixes','**Metais pesados:** mercúrio e chumbo se acumulam na cadeia alimentar'], null],
  ['Soluções', null, ['Tratamento de esgoto','Energias renováveis e biocombustíveis','Química verde: processos que geram menos resíduos','Reciclagem e descarte correto de pilhas'], null]
], enem:'É o tema que mais aparece de Química, sempre ligado a causas e consequências ambientais.' }
]};
