/* =========================================================
   RESUMOS: os temas principais de cada matéria do ENEM
   "prio" indica a prioridade de estudo com base na recorrência
   em edições anteriores (alta / média).
   ========================================================= */
window.MATERIAS = [
{ id:'mat', nome:'Matemática', icone:'📐', area:'Matemática', temas:[
  { id:'mat1', titulo:'Porcentagem e juros', prio:'alta', resumo:[
    'Porcentagem é uma fração de denominador 100: 25% = 25/100 = 0,25.',
    'Aumento de x%: multiplique por (1 + x/100). Desconto de x%: multiplique por (1 − x/100).',
    'Aumentos e descontos sucessivos se multiplicam: +10% e depois −10% dá 1,1 × 0,9 = 0,99, ou seja, 1% a menos.',
    'Juros simples: J = C · i · t (o juro é sempre sobre o capital inicial).',
    'Juros compostos: M = C · (1 + i)^t (juro sobre juro).'],
    dica:'O ENEM adora aumentos sucessivos e comparação entre duas formas de pagamento. Sempre converta tudo para fator multiplicativo.' },
  { id:'mat2', titulo:'Razão, proporção e regra de três', prio:'alta', resumo:[
    'Razão compara duas grandezas por divisão (ex.: 3 meninos para 2 meninas = 3/2).',
    'Grandezas diretamente proporcionais: uma aumenta, a outra aumenta na mesma razão.',
    'Grandezas inversamente proporcionais: uma aumenta, a outra diminui (ex.: velocidade e tempo).',
    'Regra de três composta: monte a tabela, marque se cada grandeza é direta ou inversa em relação à incógnita.',
    'Escala = medida no desenho / medida real (na mesma unidade).'],
    dica:'Questões de escala de mapa e de planta baixa são muito comuns. Atenção à conversão de cm para km.' },
  { id:'mat3', titulo:'Estatística: média, moda e mediana', prio:'alta', resumo:[
    'Média aritmética: soma dos valores dividida pela quantidade.',
    'Média ponderada: cada valor multiplicado pelo seu peso, dividido pela soma dos pesos.',
    'Moda: valor que mais se repete.',
    'Mediana: valor central dos dados em ordem crescente (com quantidade par, média dos dois centrais).',
    'Leitura de gráficos e tabelas: confira sempre a unidade e a escala dos eixos.'],
    dica:'Muitas questões pedem só para colocar os dados em ordem e achar a mediana. Não pule a ordenação.' },
  { id:'mat4', titulo:'Geometria plana: áreas e perímetros', prio:'alta', resumo:[
    'Retângulo: A = b · h. Triângulo: A = b · h / 2. Trapézio: A = (B + b) · h / 2.',
    'Círculo: A = π · r²; comprimento da circunferência: C = 2 · π · r.',
    'Teorema de Pitágoras: a² = b² + c² (no triângulo retângulo, a é a hipotenusa).',
    'Semelhança de triângulos: lados correspondentes são proporcionais.',
    'Se as medidas lineares são multiplicadas por k, a área é multiplicada por k².'],
    dica:'Desenhe a figura. Muitas questões de terreno, piso e reforma se resolvem dividindo a figura em retângulos e triângulos.' },
  { id:'mat5', titulo:'Geometria espacial: volumes', prio:'alta', resumo:[
    'Prisma e cilindro: V = área da base × altura. Cilindro: V = π · r² · h.',
    'Pirâmide e cone: V = (área da base × altura) / 3.',
    'Esfera: V = 4/3 · π · r³.',
    '1 dm³ = 1 litro; 1 m³ = 1000 litros.',
    'Se as medidas lineares são multiplicadas por k, o volume é multiplicado por k³.'],
    dica:'Caixas-d\'água, embalagens e reservatórios são os contextos favoritos. Converta tudo para a mesma unidade antes de calcular.' },
  { id:'mat6', titulo:'Funções do 1º e do 2º grau', prio:'média', resumo:[
    'Função do 1º grau: f(x) = ax + b. O gráfico é uma reta; a é a taxa de variação.',
    'Se a > 0 a reta sobe; se a < 0 a reta desce. b é onde a reta corta o eixo y.',
    'Função do 2º grau: f(x) = ax² + bx + c. O gráfico é uma parábola.',
    'Vértice: xv = −b / 2a e yv = −Δ / 4a. É o ponto de máximo (a < 0) ou de mínimo (a > 0).',
    'Raízes pela fórmula de Bhaskara: x = (−b ± √Δ) / 2a, com Δ = b² − 4ac.'],
    dica:'Problemas de lucro máximo e de altura máxima são questões de vértice da parábola.' },
  { id:'mat7', titulo:'Probabilidade e análise combinatória', prio:'média', resumo:[
    'Probabilidade = casos favoráveis / casos possíveis.',
    'Eventos independentes ("e"): multiplique as probabilidades.',
    'Eventos excludentes ("ou"): some as probabilidades.',
    'Princípio fundamental da contagem: multiplique o número de opções de cada etapa.',
    'Arranjo (a ordem importa) e combinação (a ordem não importa): C(n,p) = n! / (p!(n−p)!).'],
    dica:'Pergunte sempre: "trocar a ordem gera algo diferente?". Se sim, é arranjo; se não, é combinação.' },
  { id:'mat8', titulo:'Grandezas, unidades e notação científica', prio:'média', resumo:[
    'Conversões: 1 km = 1000 m; 1 m = 100 cm; 1 h = 60 min = 3600 s.',
    '1 m² = 10 000 cm²; 1 hectare = 10 000 m².',
    'Velocidade média = distância / tempo. Para passar de km/h para m/s, divida por 3,6.',
    'Notação científica: número entre 1 e 10 multiplicado por potência de 10 (ex.: 3,2 × 10⁵).'],
    dica:'Erro de unidade é a armadilha número 1 do ENEM. Escreva a unidade ao lado de cada número.' }
]},
{ id:'fis', nome:'Física', icone:'⚡', area:'Ciências da Natureza', temas:[
  { id:'fis1', titulo:'Cinemática', prio:'alta', resumo:[
    'Velocidade média: v = Δs / Δt.',
    'Movimento uniforme (MU): velocidade constante, s = s₀ + v · t.',
    'Movimento uniformemente variado (MUV): aceleração constante, v = v₀ + a · t e s = s₀ + v₀t + at²/2.',
    'Torricelli: v² = v₀² + 2 · a · Δs (quando o tempo não aparece).',
    'Em gráficos v × t, a área sob a curva é o deslocamento.'],
    dica:'Questões de frenagem, radar e tempo de reação aparecem com frequência.' },
  { id:'fis2', titulo:'Leis de Newton e energia', prio:'alta', resumo:[
    '1ª lei (inércia): sem força resultante, o corpo mantém repouso ou movimento retilíneo uniforme.',
    '2ª lei: F = m · a. 3ª lei: toda ação tem uma reação de mesma intensidade e sentido oposto, em corpos diferentes.',
    'Energia cinética: Ec = m · v² / 2. Energia potencial gravitacional: Ep = m · g · h.',
    'Conservação da energia: sem atrito, a energia mecânica total se mantém.',
    'Potência = energia / tempo (watt = joule por segundo).'],
    dica:'Montanha-russa, usinas hidrelétricas e cinto de segurança são contextos clássicos.' },
  { id:'fis3', titulo:'Eletricidade e consumo de energia', prio:'alta', resumo:[
    'Lei de Ohm: U = R · i (tensão = resistência × corrente).',
    'Potência elétrica: P = U · i = R · i² = U² / R.',
    'Energia consumida: E = P · t. Na conta de luz a unidade é o kWh.',
    'Resistores em série: as resistências se somam. Em paralelo: o inverso da equivalente é a soma dos inversos.',
    'Em casa os aparelhos ficam em paralelo, por isso todos recebem a mesma tensão.'],
    dica:'Cálculo de consumo de chuveiro, conta de luz e escolha de disjuntor caem muito.' },
  { id:'fis4', titulo:'Ondulatória e som', prio:'média', resumo:[
    'Velocidade da onda: v = λ · f (comprimento de onda × frequência).',
    'Frequência mais alta = som mais agudo. Amplitude maior = som mais intenso.',
    'Ondas mecânicas (som) precisam de meio; ondas eletromagnéticas (luz) se propagam no vácuo.',
    'Fenômenos: reflexão, refração, difração, interferência e ressonância.',
    'Efeito Doppler: a frequência percebida muda quando a fonte ou o observador se movem.'],
    dica:'Questões de micro-ondas, rádio, ultrassom e ressonância aparecem com frequência.' },
  { id:'fis5', titulo:'Termologia', prio:'média', resumo:[
    'Calor sensível: Q = m · c · ΔT. Calor latente: Q = m · L (mudança de estado).',
    'Condução (sólidos), convecção (fluidos) e irradiação (ondas eletromagnéticas).',
    'Dilatação: materiais aumentam de tamanho quando aquecidos.',
    'Escalas: TC/5 = (TF − 32)/9 = (TK − 273)/5.'],
    dica:'Garrafa térmica, geladeira, brisa marítima e efeito estufa são contextos comuns.' },
  { id:'fis6', titulo:'Óptica', prio:'média', resumo:[
    'Reflexão: ângulo de incidência = ângulo de reflexão.',
    'Refração: a luz muda de velocidade e de direção ao mudar de meio.',
    'Espelho plano: imagem virtual, do mesmo tamanho e simétrica.',
    'Miopia é corrigida com lente divergente; hipermetropia, com lente convergente.'],
    dica:'Defeitos da visão e funcionamento de câmeras e do olho humano aparecem bastante.' }
]},
{ id:'qui', nome:'Química', icone:'🧪', area:'Ciências da Natureza', temas:[
  { id:'qui1', titulo:'Estequiometria e cálculos químicos', prio:'alta', resumo:[
    '1 mol contém cerca de 6,0 × 10²³ partículas.',
    'Massa molar: soma das massas atômicas (ex.: H₂O = 2 × 1 + 16 = 18 g/mol).',
    'Balanceie a equação antes de calcular. Os coeficientes são a proporção em mols.',
    'Monte a regra de três: mol de A está para mol de B, como massa de A está para massa de B.',
    'Rendimento e pureza: aplique a porcentagem ao final (ou no reagente, no caso da pureza).'],
    dica:'É o tema de Química que mais aparece. Treine regra de três com mols.' },
  { id:'qui2', titulo:'Soluções e concentração', prio:'alta', resumo:[
    'Concentração comum: C = massa do soluto (g) / volume da solução (L).',
    'Concentração molar: M = mols do soluto / volume da solução (L).',
    'Diluição: C₁ · V₁ = C₂ · V₂ (a quantidade de soluto não muda).',
    'ppm = partes por milhão (1 mg por kg ou, em água, cerca de 1 mg por litro).'],
    dica:'Rótulos de remédios, soro caseiro e qualidade da água são contextos frequentes.' },
  { id:'qui3', titulo:'Química orgânica: funções e reações', prio:'alta', resumo:[
    'O carbono faz 4 ligações. Hidrocarbonetos têm só C e H.',
    'Funções: álcool (OH), ácido carboxílico (COOH), éster, aldeído, cetona, amina, amida.',
    'Esterificação: ácido carboxílico + álcool → éster + água.',
    'Isomeria: mesma fórmula molecular, estruturas diferentes.',
    'Polímeros: macromoléculas formadas por monômeros (ex.: polietileno, PET).'],
    dica:'Identificar funções orgânicas em moléculas de remédios e alimentos é uma questão clássica.' },
  { id:'qui4', titulo:'Ácidos, bases e pH', prio:'média', resumo:[
    'pH < 7: ácido; pH = 7: neutro; pH > 7: básico (a 25 °C).',
    'Cada unidade de pH representa uma diferença de 10 vezes na concentração de H⁺.',
    'Neutralização: ácido + base → sal + água.',
    'Chuva ácida: óxidos de enxofre e de nitrogênio reagem com a água da atmosfera.'],
    dica:'Correção da acidez do solo com calcário e chuva ácida são contextos recorrentes.' },
  { id:'qui5', titulo:'Eletroquímica', prio:'média', resumo:[
    'Pilha: transforma energia química em elétrica (reação espontânea).',
    'Eletrólise: usa energia elétrica para provocar uma reação não espontânea.',
    'Oxidação: perda de elétrons. Redução: ganho de elétrons.',
    'Corrosão do ferro é uma oxidação; metais de sacrifício protegem estruturas.'],
    dica:'Baterias, galvanização e proteção de cascos de navios aparecem com frequência.' },
  { id:'qui6', titulo:'Química ambiental', prio:'média', resumo:[
    'Efeito estufa: CO₂, CH₄ e outros gases retêm calor na atmosfera.',
    'Eutrofização: excesso de nutrientes (fosfatos, nitratos) causa proliferação de algas e falta de oxigênio na água.',
    'Tratamento de água: coagulação, floculação, decantação, filtração e desinfecção.',
    'Separação de misturas: filtração, decantação, destilação, centrifugação.'],
    dica:'Questões ligam química ao cotidiano: estação de tratamento, lixo e poluição.' }
]},
{ id:'bio', nome:'Biologia', icone:'🧬', area:'Ciências da Natureza', temas:[
  { id:'bio1', titulo:'Ecologia', prio:'alta', resumo:[
    'Cadeia alimentar: produtores → consumidores → decompositores. A energia diminui a cada nível.',
    'Relações ecológicas: mutualismo, comensalismo, parasitismo, predação e competição.',
    'Ciclos do carbono e do nitrogênio: bactérias fixadoras transformam N₂ em compostos usados pelas plantas.',
    'Desequilíbrios: espécies invasoras, desmatamento, bioacumulação de poluentes.',
    'Biomas brasileiros: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal.'],
    dica:'Ecologia é o tema mais cobrado de Biologia no ENEM. Leia com atenção os textos sobre impactos ambientais.' },
  { id:'bio2', titulo:'Genética', prio:'alta', resumo:[
    'Gene dominante (A) se manifesta com uma cópia; recessivo (a) só em dose dupla (aa).',
    '1ª Lei de Mendel: cruzamento Aa × Aa gera 1 AA : 2 Aa : 1 aa (3 dominantes para 1 recessivo).',
    'Grupos sanguíneos ABO e fator Rh são exemplos clássicos.',
    'Herança ligada ao X: daltonismo e hemofilia são mais comuns em homens.',
    'Biotecnologia: transgênicos, clonagem, teste de DNA e terapia gênica.'],
    dica:'Monte o quadro de Punnett. Muitas questões são só probabilidade aplicada à genética.' },
  { id:'bio3', titulo:'Fisiologia humana', prio:'alta', resumo:[
    'Digestão: começa na boca (amilase), segue no estômago (proteínas) e no intestino delgado (absorção).',
    'Circulação: o sangue leva oxigênio e nutrientes; o coração tem 4 cavidades.',
    'Sistema imunológico: vacina estimula a produção de anticorpos (imunidade ativa); soro já traz anticorpos prontos (imunidade passiva).',
    'Hormônios: insulina reduz a glicose no sangue; sua falta ou resistência está ligada ao diabetes.'],
    dica:'Diferença entre vacina e soro é questão clássica.' },
  { id:'bio4', titulo:'Doenças e saúde pública', prio:'alta', resumo:[
    'Viroses: dengue, zika, chikungunya (mosquito Aedes aegypti), gripe, covid-19, sarampo.',
    'Bacterioses: tuberculose, leptospirose, cólera. Tratadas com antibióticos.',
    'Protozooses: doença de Chagas (barbeiro), malária (mosquito Anopheles).',
    'Verminoses: esquistossomose (caramujo), ascaridíase. Prevenção com saneamento básico.',
    'Antibiótico não trata virose; uso indevido seleciona bactérias resistentes.'],
    dica:'A prevenção (saneamento, vacina, combate ao vetor) costuma ser a resposta.' },
  { id:'bio5', titulo:'Citologia e bioquímica', prio:'média', resumo:[
    'Célula procarionte (sem núcleo, ex.: bactéria) e eucarionte (com núcleo).',
    'Mitocôndria: respiração celular (produz ATP). Cloroplasto: fotossíntese.',
    'Fotossíntese: gás carbônico + água + luz → glicose + oxigênio.',
    'DNA guarda a informação genética; RNA participa da produção de proteínas.'],
    dica:'Relacione organelas com função: a pergunta costuma ser sobre "o que acontece se faltar".' },
  { id:'bio6', titulo:'Evolução', prio:'média', resumo:[
    'Darwin: seleção natural. Os mais adaptados ao ambiente deixam mais descendentes.',
    'Lamarck: uso e desuso e herança de caracteres adquiridos (teoria superada).',
    'Mutações e recombinação geram variabilidade; a seleção atua sobre ela.',
    'Resistência de bactérias a antibióticos e de insetos a inseticidas é seleção natural.'],
    dica:'O ENEM pede para diferenciar a explicação de Darwin da de Lamarck.' }
]},
{ id:'his', nome:'História', icone:'🏛️', area:'Ciências Humanas', temas:[
  { id:'his1', titulo:'Brasil Colônia e escravidão', prio:'alta', resumo:[
    'Economia açucareira no Nordeste, baseada no latifúndio, na monocultura e no trabalho escravizado.',
    'Resistência negra: quilombos (Palmares), fugas, revoltas e preservação cultural.',
    'Ciclo do ouro (século XVIII) em Minas Gerais deslocou o eixo econômico para o Sudeste.',
    'Exploração e resistência dos povos indígenas.'],
    dica:'Questões trazem documentos de época e pedem a interpretação do contexto.' },
  { id:'his2', titulo:'Brasil Império', prio:'média', resumo:[
    'Independência (1822) com manutenção da monarquia e da escravidão.',
    'Lei Eusébio de Queirós (1850) proibiu o tráfico; Lei Áurea (1888) aboliu a escravidão.',
    'Lei de Terras (1850) dificultou o acesso à terra para pobres e libertos.',
    'Café no Sudeste e imigração europeia no fim do século XIX.'],
    dica:'A abolição sem políticas de inclusão é tema frequente, ligado ao racismo atual.' },
  { id:'his3', titulo:'Era Vargas e República', prio:'alta', resumo:[
    'República Velha: política do café com leite e coronelismo.',
    'Era Vargas (1930 a 1945): CLT, voto feminino (1932), Estado Novo (1937 a 1945) autoritário.',
    'Populismo e industrialização (JK e o Plano de Metas, construção de Brasília).'],
    dica:'Relacione direitos trabalhistas e industrialização com a Era Vargas.' },
  { id:'his4', titulo:'Ditadura Militar e redemocratização', prio:'alta', resumo:[
    'Golpe de 1964; AI-5 (1968) ampliou a censura e a repressão.',
    '"Milagre econômico" com aumento da desigualdade e da dívida externa.',
    'Movimento estudantil, censura às artes e resistência cultural (música, teatro).',
    'Anistia (1979), Diretas Já (1983 e 1984) e Constituição de 1988.'],
    dica:'Letras de música da época e charges são fontes muito usadas nas questões.' },
  { id:'his5', titulo:'Idade Moderna e Revoluções', prio:'média', resumo:[
    'Iluminismo: razão, liberdade e crítica ao absolutismo.',
    'Revolução Francesa (1789): fim de privilégios e Declaração dos Direitos do Homem e do Cidadão.',
    'Revolução Industrial: fábricas, urbanização e exploração do trabalho.',
    'Independência dos EUA (1776) e das colônias espanholas.'],
    dica:'Os ideais iluministas aparecem ligados a cidadania e direitos.' },
  { id:'his6', titulo:'Século XX: guerras e Guerra Fria', prio:'média', resumo:[
    'Primeira Guerra (1914 a 1918) e Segunda Guerra (1939 a 1945).',
    'Totalitarismos: nazismo e fascismo; Holocausto.',
    'Guerra Fria: EUA (capitalismo) x URSS (socialismo), corrida armamentista e espacial.',
    'Descolonização da África e da Ásia.'],
    dica:'Propagandas de guerra e discursos são fontes comuns.' },
  { id:'his7', titulo:'Antiguidade e Idade Média', prio:'média', resumo:[
    'Grécia: democracia ateniense (restrita a cidadãos homens livres).',
    'Roma: república, império e direito romano.',
    'Feudalismo: servidão, relação entre senhores e vassalos, poder da Igreja.',
    'Renascimento comercial e urbano na Baixa Idade Média.'],
    dica:'Compare a democracia grega com a atual: quem participava e quem ficava de fora.' }
]},
{ id:'geo', nome:'Geografia', icone:'🌎', area:'Ciências Humanas', temas:[
  { id:'geo1', titulo:'Meio ambiente e questões ambientais', prio:'alta', resumo:[
    'Aquecimento global, desmatamento, queimadas e perda de biodiversidade.',
    'Ilhas de calor e inversão térmica nas grandes cidades.',
    'Desenvolvimento sustentável e acordos internacionais (Rio-92, Kyoto, Paris).',
    'Assoreamento, erosão e desertificação.'],
    dica:'É o tema mais cobrado de Geografia. Relacione causa humana e consequência ambiental.' },
  { id:'geo2', titulo:'Urbanização', prio:'alta', resumo:[
    'Urbanização brasileira rápida e desordenada a partir de 1950 (êxodo rural).',
    'Problemas: favelização, segregação socioespacial, mobilidade, enchentes.',
    'Metropolização, conurbação e megalópoles.',
    'Gentrificação: valorização de áreas que expulsa a população mais pobre.'],
    dica:'Questões trazem fotos e mapas de cidades. Observe quem ocupa cada espaço.' },
  { id:'geo3', titulo:'Agropecuária e questão agrária', prio:'alta', resumo:[
    'Concentração fundiária e conflitos no campo.',
    'Agronegócio, monocultura de exportação e modernização da agricultura.',
    'Agricultura familiar produz grande parte dos alimentos consumidos no país.',
    'Expansão da fronteira agrícola sobre o Cerrado e a Amazônia.'],
    dica:'Compare agronegócio e agricultura familiar: escala, mão de obra e destino da produção.' },
  { id:'geo4', titulo:'Globalização e economia', prio:'média', resumo:[
    'Fluxos de mercadorias, capitais, informações e pessoas.',
    'Multinacionais, divisão internacional do trabalho e blocos econômicos (Mercosul, União Europeia).',
    'Revolução técnico-científico-informacional.',
    'Desigualdade entre países e dentro dos países.'],
    dica:'Charges sobre consumo e desigualdade global são frequentes.' },
  { id:'geo5', titulo:'Climatologia e relevo', prio:'média', resumo:[
    'Tempo (condição momentânea) x clima (padrão ao longo dos anos).',
    'Fatores do clima: latitude, altitude, maritimidade, massas de ar e correntes marítimas.',
    'Chuvas orográficas, frontais e de convecção.',
    'Agentes do relevo: internos (tectonismo, vulcanismo) e externos (erosão pela água, pelo vento).'],
    dica:'Leia climogramas: temperatura em linha e chuva em barras.' },
  { id:'geo6', titulo:'Energia e recursos', prio:'média', resumo:[
    'Matriz energética brasileira com grande participação de fontes renováveis (hidrelétrica).',
    'Vantagens e impactos de hidrelétricas, termelétricas, eólica, solar e biocombustíveis.',
    'Recursos hídricos: bacias hidrográficas, aquíferos e crise hídrica.'],
    dica:'Compare impacto ambiental e social de cada fonte de energia.' },
  { id:'geo7', titulo:'Cartografia', prio:'média', resumo:[
    'Escala numérica (1:100 000) e gráfica.',
    'Coordenadas geográficas: latitude (norte ou sul do Equador) e longitude (leste ou oeste de Greenwich).',
    'Fusos horários: cada 15° de longitude equivalem a 1 hora.',
    'Projeções cartográficas distorcem formas ou áreas.'],
    dica:'Questões de escala e fuso horário são cálculo simples: não erre a conta.' }
]},
{ id:'fil', nome:'Filosofia e Sociologia', icone:'💭', area:'Ciências Humanas', temas:[
  { id:'fil1', titulo:'Filosofia antiga', prio:'alta', resumo:[
    'Pré-socráticos: buscavam o princípio (arché) da natureza.',
    'Sócrates: método do diálogo, "conhece-te a ti mesmo".',
    'Platão: mundo das ideias x mundo sensível; Mito da Caverna.',
    'Aristóteles: ética da virtude (justo meio), ser humano como animal político.'],
    dica:'O ENEM traz trechos dos autores e pede a ideia central. Leia devagar.' },
  { id:'fil2', titulo:'Filosofia moderna e contemporânea', prio:'alta', resumo:[
    'Descartes: "penso, logo existo"; racionalismo.',
    'Empirismo (Locke, Hume): o conhecimento vem da experiência.',
    'Kant: imperativo categórico e autonomia da razão.',
    'Contratualistas: Hobbes, Locke e Rousseau sobre a origem do Estado.',
    'Sartre e o existencialismo: liberdade e responsabilidade.'],
    dica:'Compare os contratualistas: como cada um vê o ser humano e o papel do Estado.' },
  { id:'fil3', titulo:'Sociologia clássica', prio:'alta', resumo:[
    'Durkheim: fato social, solidariedade mecânica e orgânica, anomia.',
    'Weber: ação social, tipos de dominação (tradicional, carismática, legal).',
    'Marx: luta de classes, mais-valia e alienação.'],
    dica:'Saiba diferenciar os três: é a base de muitas questões.' },
  { id:'fil4', titulo:'Cidadania, cultura e movimentos sociais', prio:'média', resumo:[
    'Direitos civis, políticos e sociais.',
    'Etnocentrismo x relativismo cultural.',
    'Indústria cultural (Adorno e Horkheimer) e sociedade de consumo.',
    'Movimentos sociais: feminista, negro, indígena, LGBTQIA+, pela terra.'],
    dica:'Questões costumam pedir a postura que respeita a diversidade cultural.' }
]},
{ id:'lin', nome:'Linguagens', icone:'📖', area:'Linguagens', temas:[
  { id:'lin1', titulo:'Interpretação de texto', prio:'alta', resumo:[
    'Identifique o tema, a tese e o objetivo do autor.',
    'Diferencie o que está explícito do que é inferido.',
    'Atenção a palavras como "sempre", "nunca" e "apenas" nas alternativas: costumam extrapolar o texto.',
    'Leia o enunciado antes do texto para saber o que procurar.'],
    dica:'É a habilidade mais cobrada de todo o ENEM. Responda com base no texto, não na sua opinião.' },
  { id:'lin2', titulo:'Gêneros textuais', prio:'alta', resumo:[
    'Cada gênero tem função, estrutura e linguagem próprias (notícia, crônica, charge, anúncio, artigo de opinião).',
    'Charge e tirinha: humor crítico ligado a fatos atuais.',
    'Textos publicitários usam linguagem persuasiva e função apelativa.'],
    dica:'Pergunte: "qual é a finalidade deste texto?". A resposta costuma estar aí.' },
  { id:'lin3', titulo:'Funções da linguagem', prio:'média', resumo:[
    'Referencial: informar. Emotiva: expressar sentimentos do emissor.',
    'Conativa ou apelativa: convencer o receptor. Fática: testar o canal ("alô").',
    'Metalinguística: a linguagem fala de si mesma. Poética: foco na forma da mensagem.'],
    dica:'Um texto pode ter várias funções; a questão pede a predominante.' },
  { id:'lin4', titulo:'Variação linguística', prio:'alta', resumo:[
    'Variações regionais, sociais, históricas e situacionais (formal e informal).',
    'Não existe "jeito errado" de falar, mas sim adequação ao contexto.',
    'Preconceito linguístico: discriminar alguém pela forma como fala.'],
    dica:'A alternativa correta costuma valorizar a diversidade e rejeitar o preconceito linguístico.' },
  { id:'lin5', titulo:'Literatura brasileira', prio:'média', resumo:[
    'Romantismo: idealização, nacionalismo, indianismo.',
    'Realismo e Naturalismo: crítica social (Machado de Assis, Aluísio Azevedo).',
    'Modernismo: Semana de 1922, linguagem coloquial e identidade nacional.',
    'Literatura contemporânea: diversidade de vozes e temas sociais.'],
    dica:'O ENEM cobra a leitura do trecho, não a memorização de datas.' },
  { id:'lin6', titulo:'Artes, corpo e tecnologia', prio:'média', resumo:[
    'Vanguardas europeias: Cubismo, Surrealismo, Expressionismo, Futurismo.',
    'Arte contemporânea: instalação, performance, arte urbana.',
    'Educação física: práticas corporais, saúde e cultura do corpo.',
    'Tecnologias da informação e o uso das redes.'],
    dica:'Observe a imagem com atenção: forma, cor e contexto respondem a questão.' },
  { id:'lin7', titulo:'Língua estrangeira (inglês ou espanhol)', prio:'média', resumo:[
    'São 5 questões de interpretação de texto.',
    'Use palavras cognatas (parecidas com o português) para entender o sentido geral.',
    'Cuidado com falsos cognatos (ex.: "pretend" significa fingir; "exquisito" em espanhol significa delicioso).',
    'Leia o enunciado em português primeiro: ele diz o que procurar no texto.'],
    dica:'Não é preciso entender cada palavra. Busque a ideia principal.' }
]},
{ id:'red', nome:'Redação', icone:'✍️', area:'Redação', temas:[
  { id:'red1', titulo:'As 5 competências', prio:'alta', resumo:[
    'C1: norma culta. C2: tema, tipo textual e repertório.',
    'C3: argumentação. C4: coesão. C5: proposta de intervenção.',
    'Cada competência vale de 0 a 200 pontos, somando até 1000.'],
    dica:'Corrigir as suas redações por competência mostra exatamente onde você perde pontos.' },
  { id:'red2', titulo:'Estrutura em 4 parágrafos', prio:'alta', resumo:[
    'Introdução: repertório, contextualização e tese.',
    'Dois desenvolvimentos: uma causa por parágrafo, com explicação e exemplo.',
    'Conclusão: proposta de intervenção completa.'],
    dica:'Escrever sempre na mesma estrutura economiza tempo no dia da prova.' },
  { id:'red3', titulo:'Repertório sociocultural', prio:'alta', resumo:[
    'Repertório legitimado: vem de uma área do conhecimento (história, filosofia, leis, dados).',
    'Pertinente: tem relação com o tema. Produtivo: é usado para sustentar o argumento.',
    'Repertório "de bolso" decorado só funciona se você o liga ao argumento.'],
    dica:'Tenha 5 repertórios coringas bem dominados em vez de 30 decorados pela metade.' },
  { id:'red4', titulo:'Proposta de intervenção', prio:'alta', resumo:[
    'Cinco elementos: agente, ação, meio, finalidade e detalhamento.',
    'A proposta precisa resolver as causas que você apresentou no texto.',
    'Respeite os direitos humanos.'],
    dica:'Confira os 5 elementos antes de passar a limpo.' }
]}
];
