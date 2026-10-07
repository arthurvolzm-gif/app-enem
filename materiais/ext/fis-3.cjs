/* Física: temas 9 a 12 */
module.exports = [
{ t:'Gravitação universal',
d1:[
 ['Lei da gravitação universal', 'Dois corpos com massa se atraem com uma força que depende das massas e da distância entre eles.', ['**F = G · M · m / d²**','G é a constante gravitacional (6,67 × 10⁻¹¹ N·m²/kg²)','Dobrar a distância reduz a força a 1/4 (inverso do quadrado)','Dobrar uma das massas dobra a força','A força é sempre de atração e atua nos dois corpos com a mesma intensidade (3ª lei de Newton)'], 'Peso é a força gravitacional da Terra sobre o corpo.'],
 ['Aceleração da gravidade', 'A aceleração que a Terra "dá" aos corpos em queda.', ['**g = G · M / R²** (no valor da superfície ≈ 9,8 m/s²)','g diminui com a altitude (maior distância ao centro)','g na Lua ≈ 1,6 m/s²; em Marte ≈ 3,7 m/s²','g não depende da massa do corpo em queda','Por isso, na Lua, a pessoa pesa menos, mas a massa é a mesma'], null],
 ['Leis de Kepler', 'Descrevem o movimento dos planetas em torno do Sol.', ['**1ª lei:** as órbitas são elipses, com o Sol em um dos focos','**2ª lei:** a linha que une o planeta ao Sol varre áreas iguais em tempos iguais (o planeta é mais rápido perto do Sol)','**3ª lei:** T² ∝ R³ (quanto mais distante, maior o período)','Plutão e Netuno têm anos muito mais longos que a Terra'], null]
],
d2:[
 ['Satélites e órbitas', 'Um satélite está em constante queda, mas não atinge o solo por causa da velocidade horizontal.', ['A gravidade é a força centrípeta da órbita','Quanto mais alta a órbita, menor a velocidade orbital e maior o período','**Satélite geoestacionário:** órbita a cerca de 36.000 km, período de 24 h, parece parado no céu (TV, telecomunicações)','**Astronautas "flutuam"** porque estão em queda livre contínua, não porque não há gravidade'], 'Em uma estação espacial, a gravidade ainda é cerca de 90% da superfície; o que falta é a normal.'],
 ['Marés e fenômenos', 'A atração da Lua e do Sol sobre a água produz as marés.', ['**Maré alta:** em dois lados da Terra (o mais próximo e o oposto da Lua)','**Marés de sizígia (mais intensas):** Lua nova e cheia, com Sol e Lua alinhados','**Marés de quadratura:** quarto crescente e minguante','O ciclo se repete cerca de duas vezes ao dia'], null],
 ['Escapar da Terra', 'Velocidade de escape: o mínimo para se afastar do planeta sem voltar.', ['Para a Terra, cerca de 11,2 km/s','Não depende da massa do foguete','Dependendo da altitude, a energia necessária muda','Foguetes usam estágios para vencer a gravidade com eficiência'], null]
],
ex:[
 { q:'Se a distância entre dois corpos que se atraem gravitacionalmente for dobrada, mantidas as massas, a força de atração:', a:['dobra','fica quatro vezes menor','fica pela metade','quadruplica','não se altera'], g:'B', c:'F é inversamente proporcional ao quadrado da distância: dobrando d, F fica dividida por 4.' },
 { q:'Um astronauta tem massa de 80 kg. Considerando g na Lua igual a 1,6 m/s², qual o seu peso na Lua?', a:['50 N','80 N','128 N','800 N','1.280 N'], g:'C', c:'P = m·g = 80 × 1,6 = 128 N. Sua massa continua 80 kg.' }
],
pr:[
 { q:'Segundo a 2ª lei de Kepler, a velocidade de um planeta em sua órbita é:', a:['constante','maior quando está mais perto do Sol','maior quando está mais longe do Sol','nula no periélio','independente da distância'], g:'B', c:'A linha Sol-planeta varre áreas iguais em tempos iguais: quando perto do Sol, o planeta é mais rápido.' },
 { q:'Satélites geoestacionários têm período de revolução igual a:', a:['1 hora','6 horas','12 horas','24 horas','48 horas'], g:'D', c:'O período é de 24 h, igual ao de rotação da Terra, por isso parecem parados.' },
 { q:'Um objeto é levado de uma altitude baixa para uma muito alta. Seu peso:', a:['aumenta','diminui','permanece igual','é nulo','dobra'], g:'B', c:'A aceleração da gravidade diminui com a distância ao centro da Terra, logo o peso diminui; a massa é a mesma.' },
 { q:'Os astronautas parecem flutuar em uma estação orbital porque:', a:['não há gravidade no espaço','estão em queda livre contínua em torno da Terra','a massa deles é nula','a Lua anula a gravidade','o ar anula o peso'], g:'B', c:'A estação e os astronautas estão em queda livre contínua; a gravidade existe e mantém a órbita.' }
],
erros:['Achar que no espaço "não há gravidade".','Confundir massa com peso ao mudar de planeta.','Esquecer o quadrado na distância da lei da gravitação.','Achar que a Lua é a única responsável pelas marés (o Sol também influencia).'],
check:['aplicar a lei da gravitação e a proporcionalidade com massas e distância','explicar as três leis de Kepler','explicar por que astronautas flutuam','relacionar marés com Lua e Sol']
},

{ t:'Hidrostática',
d1:[
 ['Densidade e pressão', 'A hidrostática estuda os fluidos em repouso.', ['**Densidade: d = m/V** (kg/m³ ou g/cm³). Água: 1 g/cm³ = 1.000 kg/m³','**Pressão: p = F/A** (N/m² = Pa)','Mesma força em área menor: pressão maior (faca afiada, salto agulha)','1 atm ≈ 10⁵ Pa ≈ 760 mmHg'], 'Pressão atmosférica ao nível do mar: aproximadamente 10⁵ Pa.'],
 ['Pressão em um líquido (Teorema de Stevin)', 'A pressão cresce com a profundidade.', ['**p = p₀ + d·g·h**','p₀ é a pressão na superfície (atmosférica, se aberta)','A pressão depende da profundidade, da densidade e de g, não do formato do recipiente','A cada 10 m de água, a pressão aumenta cerca de 1 atm','Pontos a mesma profundidade, no mesmo líquido, têm a mesma pressão'], null],
 ['Princípio de Pascal', 'A pressão aplicada a um fluido em equilíbrio se transmite integralmente a todos os pontos.', ['**Prensa hidráulica:** F₁/A₁ = F₂/A₂','Uma pequena força em êmbolo pequeno produz grande força em êmbolo grande','Freios hidráulicos, macacos hidráulicos, cadeiras de dentista','O trabalho (energia) se conserva: o êmbolo menor percorre distância maior'], null]
],
d2:[
 ['Empuxo (Arquimedes)', 'Todo corpo imerso em um fluido recebe uma força vertical para cima igual ao peso do fluido deslocado.', ['**E = d_fluido · V_deslocado · g**','Se E > P: o corpo sobe (flutua)','Se E < P: afunda','Se E = P: fica em equilíbrio (flutua totalmente imerso ou parcialmente)','Densidade do corpo menor que a do líquido → flutua'], 'Flutuar não depende do tamanho, e sim da densidade média do corpo.'],
 ['Flutuação na prática', 'Por que o navio de aço flutua?', ['O casco oco desloca muita água: a densidade média do conjunto é menor que a da água','Submarinos controlam a flutuação enchendo e esvaziando tanques de lastro','Ovo flutua em água salgada e afunda na doce: a água salgada tem maior densidade','Iceberg: cerca de 90% do volume fica submerso (densidade do gelo ≈ 0,9 g/cm³)'], null],
 ['Vasos comunicantes e pressão atmosférica', 'Fenômenos clássicos.', ['**Vasos comunicantes:** o líquido atinge a mesma altura nos ramos (mesma pressão em mesmo nível)','**Experimento de Torricelli:** a pressão atmosférica sustenta uma coluna de 76 cm de mercúrio','**Canudo:** o ar é retirado e a pressão atmosférica empurra o líquido','**Altitude:** menor pressão atmosférica nos lugares altos (a água ferve a menos de 100 °C)'], null]
],
ex:[
 { q:'Um mergulhador está a 20 m de profundidade em água (densidade 1.000 kg/m³). Considerando g = 10 m/s² e a pressão atmosférica de 10⁵ Pa, a pressão total sobre ele é:', a:['1 × 10⁵ Pa','2 × 10⁵ Pa','3 × 10⁵ Pa','4 × 10⁵ Pa','2 × 10⁶ Pa'], g:'C', c:'p = p₀ + d·g·h = 10⁵ + 1.000 × 10 × 20 = 10⁵ + 2 × 10⁵ = 3 × 10⁵ Pa.' },
 { q:'Uma prensa hidráulica tem êmbolos com áreas de 10 cm² e 200 cm². Aplicando 50 N no êmbolo menor, que força é obtida no maior?', a:['100 N','500 N','1.000 N','2.500 N','10.000 N'], g:'C', c:'Pascal: F₁/A₁ = F₂/A₂ → 50/10 = F₂/200 → F₂ = 1.000 N.' }
],
pr:[
 { q:'Um bloco de 600 g ocupa 200 cm³. Sua densidade é:', a:['0,3 g/cm³','1,2 g/cm³','3 g/cm³','12 g/cm³','120 g/cm³'], g:'C', c:'d = m/V = 600/200 = 3 g/cm³.' },
 { q:'Um corpo de volume 0,002 m³ está totalmente imerso em água (1.000 kg/m³). O empuxo sobre ele é (g = 10 m/s²):', a:['2 N','10 N','20 N','200 N','2.000 N'], g:'C', c:'E = d·V·g = 1.000 × 0,002 × 10 = 20 N.' },
 { q:'Um objeto flutua em água quando sua densidade média é:', a:['maior que a da água','igual ao dobro da água','menor que a da água','nula','independe da água'], g:'C', c:'Se a densidade média é menor que a do líquido, o empuxo supera o peso e o corpo flutua.' },
 { q:'Uma pessoa deitada em uma cama de pregos não se fere porque:', a:['os pregos são macios','a força é distribuída em muitos pontos e a pressão em cada um é pequena','o peso da pessoa diminui','a pressão atmosférica ajuda','a gravidade diminui'], g:'B', c:'A mesma força distribuída por uma área grande resulta em baixa pressão em cada prego.' }
],
erros:['Confundir densidade (kg/m³) com massa (kg).','Esquecer a pressão atmosférica ao calcular a pressão total em um líquido aberto.','Achar que a pressão depende do formato do recipiente.','Dizer que corpo pesado sempre afunda (o que importa é a densidade média).'],
check:['calcular densidade e pressão','aplicar p = p₀ + dgh','usar o princípio de Pascal (prensa hidráulica)','calcular o empuxo e prever flutuação']
},

{ t:'Temperatura e calor',
d1:[
 ['Temperatura e escalas', 'Temperatura mede o grau de agitação das partículas.', ['**Celsius (°C):** 0 °C e 100 °C são o gelo fundente e a água em ebulição (ao nível do mar)','**Fahrenheit (°F):** F = 1,8·C + 32','**Kelvin (K):** K = C + 273 (zero absoluto = 0 K)','Variações: ΔK = ΔC (o tamanho do grau é igual)','Exemplo: 25 °C = 298 K = 77 °F'], null],
 ['Calor e equilíbrio térmico', 'Calor é a energia térmica em trânsito entre corpos de temperaturas diferentes.', ['O calor flui espontaneamente do corpo mais quente para o mais frio','**Equilíbrio térmico:** temperaturas iguais, sem troca líquida de calor','Calor não é "conteúdo" do corpo; temperatura não mede calor','Unidades: joule (J) e caloria (cal); 1 cal ≈ 4,2 J'], 'Um bloco de metal parece mais frio que um de madeira porque conduz melhor o calor da mão.'],
 ['Calor sensível', 'Quando o calor muda a temperatura.', ['**Q = m · c · ΔT**','c é o calor específico (cal/g·°C); da água, 1 cal/g·°C','Mesma energia, materiais diferentes: o de menor c esquenta mais rápido','Q > 0: corpo recebe calor; Q < 0: cede calor','Exemplo: 200 g de água de 20 °C a 70 °C: Q = 200 × 1 × 50 = 10.000 cal'], null]
],
d2:[
 ['Calor latente e mudanças de estado', 'Durante a mudança de estado, o calor muda o estado, não a temperatura.', ['**Q = m · L** (L: calor latente)','Fusão do gelo: L = 80 cal/g; vaporização da água: L = 540 cal/g','No gráfico da temperatura × calor, as mudanças de estado são "patamares"','Fusão, vaporização e sublimação absorvem calor; solidificação e condensação liberam'], 'Por isso o vapor queima mais que a água quente: ele libera calor ao condensar.'],
 ['Trocas de calor e equilíbrio', 'Em um sistema isolado, o calor cedido é igual ao recebido.', ['**Σ Q = 0**: o que um cede o outro recebe','Misturar água quente e fria: m₁·c·(Tf − T₁) + m₂·c·(Tf − T₂) = 0','Para água de mesma massa, a temperatura final é a média','Exemplo: 100 g a 80 °C com 100 g a 20 °C → 50 °C'], null],
 ['Calor específico no cotidiano', 'Por que o mar demora a esquentar e a esfriar?', ['A água tem calor específico alto: demora a variar de temperatura','Brisa marítima e terrestre: a terra esquenta e esfria mais rápido que o mar','Climas litorâneos têm menor amplitude térmica','Cozinha: panelas de metal esquentam rápido; água retém calor'], null]
],
ex:[
 { q:'Qual a quantidade de calor necessária para aquecer 500 g de água de 20 °C a 60 °C? (calor específico da água: 1 cal/g·°C)', a:['2.000 cal','10.000 cal','20.000 cal','30.000 cal','40.000 cal'], g:'C', c:'Q = m·c·ΔT = 500 × 1 × 40 = 20.000 cal.' },
 { q:'Misturam-se 200 g de água a 10 °C com 100 g de água a 70 °C, em um recipiente isolado. A temperatura final de equilíbrio é:', a:['20 °C','30 °C','40 °C','50 °C','60 °C'], g:'C', c:'200·(Tf − 10) + 100·(Tf − 70) = 0 → 200Tf − 2.000 + 100Tf − 7.000 = 0 → 300Tf = 9.000 → Tf = 30 °C.' }
],
pr:[
 { q:'Uma temperatura de 30 °C corresponde, na escala Kelvin, a:', a:['243 K','273 K','290 K','303 K','343 K'], g:'D', c:'K = C + 273 = 30 + 273 = 303 K.' },
 { q:'Para derreter 50 g de gelo a 0 °C (L = 80 cal/g), é necessário fornecer:', a:['400 cal','2.000 cal','4.000 cal','8.000 cal','27.000 cal'], g:'C', c:'Q = m·L = 50 × 80 = 4.000 cal.' },
 { q:'Duas panelas, uma de alumínio e outra de ferro, de mesma massa e recebendo a mesma quantidade de calor. A que tem menor calor específico:', a:['aquece menos','aquece mais','não aquece','não troca calor','mantém a temperatura'], g:'B', c:'Q = m·c·ΔT → ΔT = Q/(m·c). Com Q e m iguais, quanto menor c, maior ΔT: aquece mais.' },
 { q:'A brisa marítima durante o dia ocorre porque:', a:['o mar esquenta mais rápido que a terra','a terra esquenta mais rápido que o mar, e o ar quente sobe','o mar tem menor calor específico','o vento sopra da terra para o mar','a água evapora e esfria a terra'], g:'B', c:'A terra aquece mais rápido; o ar sobre ela sobe e o ar mais frio do mar vem ocupar o lugar (do mar para a terra).' }
],
erros:['Confundir temperatura (grau de agitação) com calor (energia em trânsito).','Esquecer de usar o calor latente nas mudanças de estado.','Usar a diferença errada de temperatura (ΔT = final − inicial).','Achar que a temperatura sobe durante a fusão do gelo.'],
check:['converter entre Celsius, Kelvin e Fahrenheit','calcular Q = mcΔT e Q = mL','achar a temperatura de equilíbrio em misturas','explicar brisas e climas litorâneos pelo calor específico']
},

{ t:'Propagação do calor',
d1:[
 ['Condução', 'Transmissão de calor por agitação das partículas, sem deslocamento de matéria. Acontece principalmente nos sólidos.', ['Metais são bons condutores (cobre, alumínio); madeira, isopor e ar são isolantes','Lei de Fourier: o fluxo depende da área, da diferença de temperatura e do material, e é inversamente proporcional à espessura','Exemplo: cabo de panela de madeira ou plástico; cobertor "esquenta" por reter o ar','Paredes grossas e janelas de vidro duplo reduzem as trocas de calor'], null],
 ['Convecção', 'Transmissão de calor por movimento de massas de fluido (líquidos e gases) com diferenças de densidade.', ['O fluido quente, menos denso, sobe; o frio, mais denso, desce','Correntes de convecção: aquecimento de água em panelas, brisas, ventos, correntes oceânicas','Geladeira: o congelador fica em cima para o ar frio descer','Ar-condicionado no alto da parede e aquecedor perto do chão'], 'Convecção só ocorre em fluidos (líquidos e gases).'],
 ['Irradiação', 'Transmissão por ondas eletromagnéticas (infravermelho), sem precisar de meio material.', ['O calor do Sol chega à Terra pelo vácuo, por irradiação','Superfícies escuras absorvem mais radiação; claras refletem mais','Garrafa térmica: paredes espelhadas e vácuo entre elas reduzem condução, convecção e irradiação','Todo corpo com temperatura emite radiação térmica'], null]
],
d2:[
 ['Efeito estufa', 'Processo natural que mantém a Terra aquecida.', ['A atmosfera deixa passar a radiação solar e retém parte da radiação infravermelha emitida pela Terra','Gases do efeito estufa: CO₂, metano, vapor-d\'água, óxido nitroso','Sem o efeito estufa natural, a Terra seria bem mais fria','O aumento artificial por ações humanas leva ao aquecimento global'], 'Efeito estufa ≠ buraco na camada de ozônio (são problemas diferentes).'],
 ['Isolamento e conforto térmico', 'Aplicações de engenharia e arquitetura.', ['Telhados claros refletem a radiação e esquentam menos','Paredes com ar entre elas (isolante) reduzem a condução','Roupas: de lã retêm ar; claras refletem luz no verão','Aquecedor solar: serpentina escura dentro de caixa de vidro (absorve e retém calor)'], null],
 ['Identificar o processo', 'Roteiro para classificar.', ['Sólido em contato: condução','Fluido que se movimenta com diferenças de densidade: convecção','Sem meio material, através do vácuo: irradiação','Em muitos fenômenos os três ocorrem juntos'], null]
],
ex:[
 { q:'Em uma geladeira, o congelador é colocado na parte superior porque:', a:['o ar frio é mais denso e desce, formando correntes de convecção','o ar quente é mais denso e desce','a irradiação é maior em cima','a condução é maior em cima','o calor sobe para o congelador por condução'], g:'A', c:'O ar frio é mais denso e desce, enquanto o ar quente sobe, criando correntes de convecção que refrigeram todo o interior.' },
 { q:'A transmissão do calor do Sol até a Terra ocorre principalmente por:', a:['condução','convecção','irradiação','condução e convecção','capilaridade'], g:'C', c:'Entre o Sol e a Terra há vácuo, que só permite a propagação por ondas eletromagnéticas: irradiação.' }
],
pr:[
 { q:'Cabos de panela costumam ser feitos de madeira ou plástico porque esses materiais:', a:['são bons condutores de calor','são isolantes térmicos','absorvem irradiação','têm alto calor latente','são mais leves que o metal'], g:'B', c:'Madeira e plástico são maus condutores (isolantes), evitando que o calor chegue à mão.' },
 { q:'As paredes internas de uma garrafa térmica são espelhadas para reduzir principalmente:', a:['a condução','a convecção','a irradiação','a evaporação','o atrito'], g:'C', c:'Superfícies espelhadas refletem a radiação, reduzindo a perda ou o ganho de calor por irradiação.' },
 { q:'Um aparelho de ar-condicionado é instalado em posição alta na parede porque:', a:['o ar frio, mais denso, desce e circula no ambiente','o ar quente é mais denso','a condução é maior em cima','a irradiação é maior perto do teto','o ar frio sobe'], g:'A', c:'O ar frio, mais denso, desce, enquanto o ar quente sobe, formando correntes de convecção que resfriam o ambiente.' },
 { q:'Qual das opções é um exemplo de condução de calor?', a:['o Sol aquecendo a Terra','o ar quente subindo sobre uma fogueira','a colher de metal esquentando em uma panela de sopa','o vento que sopra do mar','a água circulando em uma panela'], g:'C', c:'A colher recebe o calor por contato direto, passando a energia de partícula a partícula do metal.' }
],
erros:['Dizer que "o frio entra" em vez de que o calor sai.','Confundir convecção com condução em fluidos.','Achar que o calor do Sol chega por condução ou convecção.','Confundir efeito estufa com a camada de ozônio.'],
check:['classificar condução, convecção e irradiação','explicar geladeira, garrafa térmica e brisas','explicar o efeito estufa','escolher materiais isolantes e condutores para cada situação']
}
];
