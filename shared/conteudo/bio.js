/* Biologia: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.bio = { id:'bio', nome:'Biologia', icone:'🧬', emojis:'🧬 🌿 🦠 🫀',
capa:'linear-gradient(160deg,#0d3b1e,#1f7a3d 55%,#9be15d)',
temas:[
{ t:'Características dos seres vivos', p:'m', ic:'🌱', s:[
  ['O que define um ser vivo?', null, ['Formado por células','Metabolismo (obtém e usa energia)','Reprodução','Material genético (DNA)','Reação a estímulos','Evolução ao longo das gerações'], null],
  ['Níveis de organização', 'Célula → tecido → órgão → sistema → organismo → população → comunidade → ecossistema → biosfera.', null, null],
  ['E os vírus?', 'Os vírus não têm célula e só se reproduzem dentro de células de outros seres. Por isso, há debate se são seres vivos.', null, 'São parasitas intracelulares obrigatórios.']
], enem:'Questões sobre vírus costumam cobrar o fato de eles dependerem de uma célula para se multiplicar.' },

{ t:'Citologia: a célula', p:'a', ic:'🔬', s:[
  ['Tipos de célula', null, ['**Procariontes:** sem núcleo organizado (bactérias)','**Eucariontes:** com núcleo e organelas (animais, plantas, fungos, protozoários)'], null],
  ['Organelas e funções', null, ['**Membrana plasmática:** controla o que entra e sai','**Núcleo:** guarda o DNA','**Mitocôndria:** respiração celular (produz ATP)','**Ribossomo:** produz proteínas','**Retículo endoplasmático e complexo golgiense:** produção e transporte','**Lisossomo:** digestão celular','**Cloroplasto:** fotossíntese (só em plantas e algas)'], null],
  ['Célula animal x vegetal', 'A vegetal tem parede celular, cloroplastos e um grande vacúolo.', null, null]
], enem:'Questões pedem a organela responsável por uma função ou o que acontece se ela falhar.' },

{ t:'Membrana e transporte celular', p:'m', ic:'🚪', s:[
  ['Transporte passivo', 'Sem gasto de energia, a favor do gradiente.', ['**Difusão:** soluto vai do mais concentrado para o menos concentrado','**Osmose:** água passa do meio menos concentrado (hipotônico) para o mais concentrado (hipertônico)'], null],
  ['Transporte ativo', 'Com gasto de energia (ATP), contra o gradiente.', null, 'Exemplo: bomba de sódio e potássio dos neurônios.'],
  ['Osmose no cotidiano', null, ['Hemácia em água pura incha e pode estourar','Hemácia em água muito salgada murcha','Salgar alimentos desidrata microrganismos e conserva','Alface temperada murcha'], null]
], enem:'Osmose é muito cobrada: conservação de alimentos com sal e açúcar e soro fisiológico.' },

{ t:'Metabolismo energético', p:'a', ic:'⚡', s:[
  ['Fotossíntese', 'Ocorre nos cloroplastos.', ['6 CO₂ + 6 H₂O + luz → glicose + 6 O₂','Transforma energia luminosa em energia química'], null],
  ['Respiração celular', 'Ocorre nas mitocôndrias.', ['Glicose + 6 O₂ → 6 CO₂ + 6 H₂O + energia (ATP)','É o "inverso" da fotossíntese'], null],
  ['Fermentação', 'Produz energia sem oxigênio, com menos ATP.', ['**Alcoólica:** leveduras → álcool + CO₂ (pão, cerveja)','**Lática:** bactérias e músculos → ácido lático (iogurte; cansaço muscular)'], null]
], enem:'Produção de pão, iogurte, bebidas e a relação entre fotossíntese e respiração no ciclo do carbono.' },

{ t:'Ácidos nucleicos e síntese de proteínas', p:'m', ic:'🧬', s:[
  ['DNA e RNA', null, ['**DNA:** dupla hélice, bases A, T, C, G; guarda a informação genética','**RNA:** fita simples, bases A, U, C, G; participa da produção de proteínas','Pareamento no DNA: A com T, C com G'], null],
  ['Do gene à proteína', null, ['**Replicação:** DNA faz cópia de si mesmo','**Transcrição:** DNA → RNA mensageiro (no núcleo)','**Tradução:** RNA → proteína (nos ribossomos)'], null],
  ['Código genético', 'Cada trinca de bases (códon) indica um aminoácido.', null, 'Uma mutação pode trocar um aminoácido e alterar a proteína.']
], enem:'Vacinas de RNA mensageiro, testes de DNA e mutações aparecem com frequência.' },

{ t:'Divisão celular', p:'m', ic:'➗', s:[
  ['Mitose', 'Uma célula gera **duas células iguais** à original.', ['Crescimento','Regeneração de tecidos','Reprodução assexuada'], null],
  ['Meiose', 'Uma célula gera **quatro células com metade** dos cromossomos.', ['Forma os gametas (espermatozoides e óvulos)','Gera variabilidade genética (crossing-over)'], null],
  ['Câncer', 'É a divisão celular descontrolada, causada por mutações.', null, 'Fatores de risco: cigarro, radiação UV, alguns vírus, alimentação.']
], enem:'Diferença entre mitose e meiose e a relação entre mutação e câncer.' },

{ t:'Genética: leis de Mendel', p:'a', ic:'🫛', s:[
  ['Conceitos', null, ['**Gene:** trecho do DNA que determina uma característica','**Alelos:** versões de um gene (A e a)','**Homozigoto:** AA ou aa','**Heterozigoto:** Aa','**Genótipo:** composição genética · **Fenótipo:** característica observável'], null],
  ['1ª Lei de Mendel', 'Cada característica é determinada por um par de alelos que se separam na formação dos gametas.', ['Aa × Aa → 1 AA : 2 Aa : 1 aa','Proporção de fenótipos: 3 dominantes : 1 recessivo'], null],
  ['Quadro de Punnett', 'Cruze os gametas de cada pai em uma tabela para achar as probabilidades.', null, 'Genética é probabilidade: lembre de multiplicar eventos independentes.']
], enem:'Heredogramas e cálculos de probabilidade com Aa × Aa são frequentes.' },

{ t:'Genética: grupos sanguíneos e herança ligada ao sexo', p:'m', ic:'🩸', s:[
  ['Sistema ABO', null, ['Tipo A: IᴬIᴬ ou Iᴬi','Tipo B: IᴮIᴮ ou Iᴮi','Tipo AB: IᴬIᴮ (receptor universal)','Tipo O: ii (doador universal)'], null],
  ['Fator Rh', 'Rh+ tem o antígeno; Rh− não tem.', null, 'Eritroblastose fetal: mãe Rh− com bebê Rh+ pode produzir anticorpos que atacam as hemácias do bebê em gestações seguintes.'],
  ['Herança ligada ao X', 'Genes no cromossomo X. Homens (XY) têm só um X, por isso manifestam mais essas condições.', ['Daltonismo','Hemofilia'], null]
], enem:'Transfusões compatíveis, exames de paternidade e herança do daltonismo.' },

{ t:'Biotecnologia', p:'a', ic:'🧫', s:[
  ['O que é?', 'Uso de organismos e técnicas genéticas para produzir bens e serviços.', null, null],
  ['Aplicações', null, ['**Transgênicos:** organismos com gene de outra espécie','**Insulina produzida por bactérias**','**Clonagem**','**Teste de DNA** (paternidade e investigação)','**Terapia gênica**','**Vacinas de RNA**'], null],
  ['Células-tronco', 'Podem se transformar em vários tipos de célula. Usadas em pesquisas para tratar doenças.', null, null],
  ['Debates éticos', null, ['Segurança dos transgênicos','Patentes de seres vivos','Edição genética de embriões'], null]
], enem:'Produção de insulina, transgênicos e testes de DNA são temas muito cobrados.' },

{ t:'Evolução', p:'a', ic:'🦒', s:[
  ['Lamarck', 'Uso e desuso e herança dos caracteres adquiridos.', null, 'Exemplo (errado): a girafa esticou o pescoço e passou isso aos filhos. A teoria foi superada.'],
  ['Darwin e a seleção natural', null, ['Há variação entre os indivíduos','Os mais adaptados ao ambiente sobrevivem e se reproduzem mais','As características vantajosas se espalham ao longo das gerações'], null],
  ['Teoria sintética', 'Junta a seleção natural com a genética: mutações e recombinação geram a variação.', null, null],
  ['Exemplos atuais', null, ['Bactérias resistentes a antibióticos','Insetos resistentes a inseticidas','Mariposas escuras na Revolução Industrial'], 'A resistência já existia; o remédio apenas selecionou os resistentes.']
], enem:'Diferenciar Darwin de Lamarck e explicar a resistência a antibióticos é clássico.' },

{ t:'Ecologia: conceitos e cadeias alimentares', p:'a', ic:'🦉', s:[
  ['Conceitos', null, ['**População:** indivíduos da mesma espécie em uma área','**Comunidade:** populações de espécies diferentes','**Ecossistema:** comunidade + ambiente físico','**Habitat:** onde vive · **Nicho:** como vive (o "papel")'], null],
  ['Cadeia alimentar', 'Produtores → consumidores primários → secundários → terciários. Decompositores reciclam a matéria.', null, 'A energia diminui a cada nível: só cerca de 10% passa adiante.'],
  ['Teia alimentar e pirâmides', 'A teia mostra várias cadeias interligadas. As pirâmides representam número, biomassa ou energia.', null, null],
  ['Bioacumulação', 'Substâncias não eliminadas (mercúrio, DDT) se concentram ao longo da cadeia, atingindo o máximo no topo.', null, null]
], enem:'Ecologia é o tema mais cobrado de Biologia. Bioacumulação e fluxo de energia aparecem muito.' },

{ t:'Relações ecológicas', p:'a', ic:'🐝', s:[
  ['Relações harmônicas', null, ['**Mutualismo:** benefício mútuo e obrigatório (líquen: alga + fungo)','**Protocooperação:** benefício mútuo não obrigatório (pássaro-palito e crocodilo)','**Comensalismo:** um se beneficia, o outro não é afetado (rêmora e tubarão)','**Sociedade:** indivíduos organizados (abelhas)'], null],
  ['Relações desarmônicas', null, ['**Predação:** um mata e come o outro','**Parasitismo:** um vive à custa do outro (piolho)','**Competição:** disputa por recursos','**Amensalismo:** um inibe o outro (fungo que produz antibiótico)'], null],
  ['Espécies invasoras', 'Sem predadores naturais, podem se multiplicar e desequilibrar o ecossistema.', null, 'Exemplo: o caramujo-africano e o javali no Brasil.']
], enem:'Identificar o tipo de relação em um texto e o efeito de espécies invasoras.' },

{ t:'Ciclos biogeoquímicos', p:'m', ic:'♻️', s:[
  ['Ciclo do carbono', 'Fotossíntese retira CO₂; respiração, decomposição e queimadas devolvem.', null, 'A queima de combustíveis fósseis aumenta o CO₂ na atmosfera.'],
  ['Ciclo do nitrogênio', null, ['Bactérias fixadoras (em raízes de leguminosas) transformam N₂ do ar em compostos que as plantas usam','Por isso a rotação com feijão e soja aduba o solo','Decompositores devolvem o nitrogênio ao ambiente'], null],
  ['Ciclo da água', 'Evaporação, transpiração das plantas, condensação e precipitação.', null, 'A Amazônia lança muito vapor de água na atmosfera ("rios voadores").']
], enem:'Adubação verde com leguminosas e o papel das florestas no ciclo da água.' },

{ t:'Biomas brasileiros', p:'a', ic:'🌳', s:[
  ['Os seis biomas', null, ['**Amazônia:** floresta densa, maior biodiversidade, clima quente e úmido','**Cerrado:** savana, árvores tortas, raízes profundas, "berço das águas"','**Caatinga:** semiárido, plantas que perdem folhas na seca; só existe no Brasil','**Mata Atlântica:** muito devastada, alta biodiversidade','**Pampa:** campos no sul','**Pantanal:** uma das maiores planícies alagáveis do mundo'], null],
  ['Ameaças', null, ['Desmatamento e queimadas','Expansão agropecuária','Urbanização (Mata Atlântica)'], null]
], enem:'Reconhecer o bioma pela descrição e relacionar adaptações das plantas ao clima.' },

{ t:'Impactos ambientais e sustentabilidade', p:'a', ic:'🌍', s:[
  ['Principais problemas', null, ['Desmatamento e perda de biodiversidade','Aquecimento global','Poluição da água, do ar e do solo','Lixo e plásticos','Uso excessivo de agrotóxicos'], null],
  ['Unidades de conservação', 'Áreas protegidas por lei para preservar a natureza.', null, null],
  ['Soluções', null, ['Reflorestamento e corredores ecológicos','Controle biológico de pragas','Saneamento básico','Consumo consciente e reciclagem','Energias renováveis'], 'Desenvolvimento sustentável: atender ao presente sem comprometer as gerações futuras.']
], enem:'As alternativas certas costumam propor soluções sustentáveis e combater a causa do problema.' },

{ t:'Vírus e doenças virais', p:'a', ic:'🦠', s:[
  ['Características', 'Sem células, só se multiplicam dentro de células. Antibióticos **não** funcionam contra vírus.', null, null],
  ['Doenças virais', null, ['**Dengue, zika e chikungunya:** transmitidas pelo mosquito Aedes aegypti','**Gripe e covid-19:** gotículas e aerossóis','**Sarampo:** muito contagioso, prevenido por vacina','**HIV/aids:** relações sexuais sem proteção, sangue','**Febre amarela:** mosquitos; prevenida por vacina','**Hepatites B e C**, **HPV**'], null],
  ['Prevenção', null, ['Vacinação','Eliminar água parada (Aedes)','Uso de preservativos','Higiene das mãos'], null]
], enem:'Combate ao Aedes aegypti e importância da vacinação aparecem quase todo ano.' },

{ t:'Bactérias, protozoários e verminoses', p:'a', ic:'🧪', s:[
  ['Bacterioses', null, ['**Tuberculose:** ar; tratamento longo','**Leptospirose:** urina de rato em enchentes','**Cólera:** água contaminada','**Tétano:** ferimentos com objetos contaminados','**Sífilis:** sexualmente transmissível'], 'Tratadas com antibióticos.'],
  ['Protozooses', null, ['**Doença de Chagas:** barbeiro; também por alimentos contaminados (açaí, caldo de cana)','**Malária:** mosquito Anopheles','**Leishmaniose:** mosquito-palha','**Giardíase e amebíase:** água e alimentos contaminados'], null],
  ['Verminoses', null, ['**Esquistossomose:** caramujo; contato com água contaminada','**Ascaridíase (lombriga) e teníase:** alimentos mal lavados ou carne malcozida'], 'Saneamento básico previne grande parte dessas doenças.']
], enem:'A resposta certa quase sempre é a medida de prevenção ligada ao ciclo da doença.' },

{ t:'Sistema imunológico e vacinas', p:'a', ic:'💉', s:[
  ['Defesas do corpo', null, ['Barreiras: pele, mucosas','Glóbulos brancos (leucócitos)','Anticorpos: proteínas que reconhecem antígenos'], null],
  ['Vacina x soro', null, ['**Vacina:** contém o agente enfraquecido, morto ou partes dele; o corpo produz anticorpos e memória (imunidade ativa, prevenção)','**Soro:** já contém anticorpos prontos; ação rápida e temporária (imunidade passiva, tratamento)'], 'Picada de cobra → soro. Prevenção do sarampo → vacina.'],
  ['Imunidade coletiva', 'Quando muitas pessoas são vacinadas, o agente circula menos e protege quem não pode se vacinar.', null, null]
], enem:'Diferença entre vacina e soro é das questões mais clássicas da prova.' },

{ t:'Sistema digestório e nutrição', p:'m', ic:'🍽️', s:[
  ['Caminho do alimento', null, ['**Boca:** mastigação e amilase salivar (amido)','**Estômago:** suco gástrico ácido (proteínas)','**Intestino delgado:** maior parte da digestão e absorção (com bile e suco pancreático)','**Intestino grosso:** absorção de água'], null],
  ['Nutrientes', null, ['**Carboidratos:** energia','**Proteínas:** construção e enzimas','**Lipídios:** energia e reserva','**Vitaminas e sais minerais:** regulação','**Fibras:** funcionamento do intestino'], null],
  ['Bile', 'Produzida pelo fígado, emulsiona gorduras (não é enzima).', null, null]
], enem:'Alimentação saudável, função da bile e consequências da falta de vitaminas.' },

{ t:'Sistemas circulatório e respiratório', p:'m', ic:'🫀', s:[
  ['Circulação', null, ['Coração com 4 cavidades (2 átrios e 2 ventrículos)','**Pequena circulação:** coração → pulmões → coração (oxigenação)','**Grande circulação:** coração → corpo → coração'], null],
  ['Sangue', null, ['Hemácias: transportam oxigênio (hemoglobina)','Leucócitos: defesa','Plaquetas: coagulação'], null],
  ['Respiração', 'O ar chega aos alvéolos pulmonares, onde ocorre a troca de gases: entra O₂ e sai CO₂.', null, 'Cigarro danifica os alvéolos e aumenta o risco de câncer e enfisema.']
], enem:'Efeitos do cigarro, da altitude e da anemia no transporte de oxigênio.' },

{ t:'Sistemas nervoso e endócrino', p:'m', ic:'🧠', s:[
  ['Sistema nervoso', null, ['**Central:** encéfalo e medula','**Periférico:** nervos','**Neurônio:** transmite impulsos nervosos','**Sinapse:** comunicação entre neurônios por neurotransmissores'], null],
  ['Hormônios importantes', null, ['**Insulina:** reduz a glicose no sangue (pâncreas)','**Glucagon:** aumenta a glicose','**Adrenalina:** reação de "luta ou fuga"','**Tiroxina:** metabolismo (tireoide)','**Estrogênio, progesterona e testosterona:** sexuais'], null],
  ['Diabetes', 'Falta de insulina ou resistência a ela.', null, null]
], enem:'Diabetes, efeito de drogas nas sinapses e ação de hormônios no ciclo menstrual.' },

{ t:'Reprodução humana e métodos contraceptivos', p:'m', ic:'👶', s:[
  ['Ciclo menstrual', 'Dura cerca de 28 dias. A ovulação ocorre por volta do 14º dia, controlada pelos hormônios FSH e LH.', null, null],
  ['Fecundação e gravidez', 'Encontro do espermatozoide com o ovócito, geralmente na tuba uterina. O embrião se implanta no útero.', null, null],
  ['Métodos contraceptivos', null, ['**Camisinha:** previne gravidez e ISTs','**Pílula:** hormonal, impede a ovulação','**DIU:** dentro do útero','**Laqueadura e vasectomia:** definitivos'], 'Apenas a camisinha protege contra infecções sexualmente transmissíveis.']
], enem:'Funcionamento da pílula e a importância da camisinha na prevenção de ISTs.' },

{ t:'Botânica', p:'m', ic:'🌻', s:[
  ['Grupos de plantas', null, ['**Briófitas:** sem vasos condutores (musgos)','**Pteridófitas:** com vasos, sem sementes (samambaias)','**Gimnospermas:** sementes sem fruto (pinheiros)','**Angiospermas:** com flores e frutos'], null],
  ['Órgãos e funções', null, ['**Raiz:** fixação e absorção','**Caule:** sustentação e transporte','**Folha:** fotossíntese e transpiração (estômatos)','**Flor:** reprodução','**Fruto:** protege e dispersa a semente'], null],
  ['Polinização', 'Feita por vento, insetos, aves e morcegos.', null, 'O declínio das abelhas ameaça a produção de alimentos.']
], enem:'Importância dos polinizadores e adaptações das plantas ao clima seco.' },

{ t:'Zoologia', p:'m', ic:'🐸', s:[
  ['Invertebrados', null, ['Poríferos (esponjas), cnidários (águas-vivas)','Platelmintos e nematelmintos (vermes)','Moluscos (caramujos, polvos)','Anelídeos (minhocas)','Artrópodes (insetos, aracnídeos, crustáceos)','Equinodermos (estrelas-do-mar)'], null],
  ['Vertebrados', null, ['**Peixes:** brânquias','**Anfíbios:** vida dupla, pele úmida','**Répteis:** ovo com casca, independentes da água','**Aves:** penas, ossos leves, temperatura constante','**Mamíferos:** pelos, glândulas mamárias'], null],
  ['Adaptações', 'Cada grupo tem adaptações ao seu ambiente: o ovo com casca permitiu aos répteis conquistar o ambiente terrestre.', null, null]
], enem:'Questões relacionam a característica do animal ao ambiente em que ele vive.' },

{ t:'Saúde, saneamento e doenças não transmissíveis', p:'m', ic:'🚰', s:[
  ['Saneamento básico', 'Água tratada, coleta e tratamento de esgoto, coleta de lixo e drenagem.', null, 'Previne diarreias, verminoses, cólera, hepatite A e leptospirose.'],
  ['Doenças não transmissíveis', null, ['Hipertensão','Diabetes tipo 2','Obesidade','Doenças cardiovasculares','Câncer'], 'Fatores de risco: sedentarismo, má alimentação, cigarro e álcool.'],
  ['Saúde mental', 'Ansiedade e depressão também são questões de saúde pública.', null, null]
], enem:'Saneamento é a resposta para muitas questões sobre doenças. Hábitos de vida para as não transmissíveis.' }
]};
