/* Física: temas 13 a 16 */
module.exports = [
{ t:'Termodinâmica',
d1:[
 ['Gás ideal e transformações', 'O estado de um gás é descrito por pressão (p), volume (V) e temperatura absoluta (T).', ['**Equação de estado:** p·V = n·R·T (T em kelvin)','**Isotérmica (T constante):** p·V = constante (a pressão cai se o volume aumenta)','**Isobárica (p constante):** V/T = constante','**Isocórica ou isovolumétrica (V constante):** p/T = constante','Lei geral: p₁V₁/T₁ = p₂V₂/T₂'], 'Sempre converta a temperatura para kelvin antes de calcular.'],
 ['1ª lei da termodinâmica', 'É a conservação da energia aplicada ao calor e ao trabalho.', ['**ΔU = Q − τ**','Q > 0: o gás recebe calor; τ > 0: o gás realiza trabalho (expansão)','Em uma isotérmica de gás ideal, ΔU = 0 e Q = τ','Em uma transformação adiabática (sem troca de calor), Q = 0 e ΔU = −τ','A energia interna do gás ideal depende só da temperatura'], null],
 ['Trabalho em gases', 'O gás só realiza trabalho quando o volume varia.', ['**Isobárica: τ = p·ΔV**','Isocórica: τ = 0 (não há variação de volume)','No gráfico p × V, o trabalho é a área sob a curva','Expansão: τ > 0 (gás realiza). Compressão: τ < 0 (gás recebe trabalho)'], null]
],
d2:[
 ['2ª lei e máquinas térmicas', 'O calor não flui espontaneamente do corpo frio para o quente. Nenhuma máquina térmica converte todo o calor em trabalho.', ['**Máquina térmica:** retira calor Q₁ da fonte quente, realiza trabalho τ e rejeita Q₂ para a fonte fria','**Rendimento: η = τ/Q₁ = 1 − Q₂/Q₁**','**Ciclo de Carnot:** rendimento máximo possível entre duas temperaturas: η = 1 − T₂/T₁ (kelvin)','Rendimento 100% é impossível'], 'Motores de carros e usinas termelétricas desperdiçam grande parte do calor.'],
 ['Refrigeradores e entropia', 'Fazem o caminho inverso, com consumo de energia.', ['**Refrigerador:** retira calor da fonte fria e o rejeita na quente, mediante trabalho','Por isso a parte de trás da geladeira esquenta','**Entropia:** medida de desordem; em sistemas isolados nunca diminui','Processos irreversíveis: misturar café e leite, quebrar um copo'], null],
 ['Aplicações e energia', 'Como aparece no ENEM.', ['**Motores a combustão e usinas térmicas**: rendimento menor que 100%','**Usinas nucleares e a carvão** aquecem água para gerar vapor e girar turbinas','**Energia geotérmica**','**Eficiência energética:** reaproveitar o calor residual (cogeração)'], null]
],
ex:[
 { q:'Uma máquina térmica retira 800 J de calor de uma fonte quente e rejeita 600 J para a fonte fria. Qual o seu rendimento?', a:['20%','25%','40%','60%','75%'], g:'B', c:'Trabalho = 800 − 600 = 200 J. η = 200/800 = 0,25 = 25%.' },
 { q:'Um gás recebe 500 J de calor e realiza 300 J de trabalho. A variação de sua energia interna é:', a:['−800 J','−200 J','0','200 J','800 J'], g:'D', c:'ΔU = Q − τ = 500 − 300 = 200 J.' }
],
pr:[
 { q:'Um gás sofre uma expansão isobárica sob pressão de 2 × 10⁵ Pa, com variação de volume de 0,01 m³. O trabalho realizado é:', a:['200 J','1.000 J','2.000 J','20.000 J','200.000 J'], g:'C', c:'τ = p·ΔV = 2 × 10⁵ × 0,01 = 2.000 J.' },
 { q:'Em uma transformação isotérmica de um gás ideal, a energia interna:', a:['aumenta','diminui','permanece constante','é igual ao trabalho','é nula'], g:'C', c:'Temperatura constante: a energia interna do gás ideal depende só da temperatura, então ΔU = 0.' },
 { q:'Uma máquina de Carnot opera entre 600 K e 300 K. Seu rendimento máximo é:', a:['25%','30%','50%','75%','100%'], g:'C', c:'η = 1 − T₂/T₁ = 1 − 300/600 = 0,5 = 50%.' },
 { q:'Por que a parte traseira de um refrigerador fica quente?', a:['porque o motor é aquecido pela energia elétrica apenas','porque o calor retirado do interior e o trabalho do compressor são rejeitados para o ambiente','porque o gás congela','porque há atrito com a parede','porque a geladeira cria calor do nada'], g:'B', c:'O refrigerador retira calor da fonte fria e rejeita para o ambiente, junto com o trabalho do compressor, aquecendo a parte de trás.' }
],
erros:['Esquecer de converter a temperatura para kelvin nas leis dos gases.','Confundir sinais de calor e trabalho na 1ª lei (use ΔU = Q − τ).','Achar que há máquina com rendimento de 100%.','Esquecer que o refrigerador consome trabalho.'],
check:['usar a lei geral dos gases','aplicar ΔU = Q − τ','calcular o rendimento de uma máquina térmica','explicar o funcionamento de refrigeradores']
},

{ t:'Ondas',
d1:[
 ['O que é uma onda', 'Onda é uma perturbação que se propaga transportando energia, sem transportar matéria.', ['**Mecânicas:** precisam de meio material (som, ondas na água, na corda)','**Eletromagnéticas:** não precisam de meio (luz, rádio, micro-ondas)','**Transversais:** vibração perpendicular à propagação (luz, onda em corda)','**Longitudinais:** vibração na mesma direção da propagação (som)'], 'Uma boia na onda do mar sobe e desce, mas não é levada com a onda.'],
 ['Elementos de uma onda', 'Todas as ondas têm características em comum.', ['**Amplitude (A):** altura da crista em relação ao nível de equilíbrio','**Comprimento de onda (λ):** distância entre duas cristas consecutivas (m)','**Frequência (f):** número de oscilações por segundo (Hz)','**Período (T = 1/f):** tempo de uma oscilação (s)','**Velocidade: v = λ · f**'], null],
 ['Equação fundamental', 'Relaciona velocidade, frequência e comprimento de onda.', ['v = λ·f','Se a frequência dobra e a velocidade é a mesma, o comprimento de onda cai pela metade','Quando a onda muda de meio, a frequência não muda; a velocidade e o λ mudam','Exemplo: λ = 2 m e f = 5 Hz → v = 10 m/s'], null]
],
d2:[
 ['Fenômenos ondulatórios', 'O que acontece quando a onda encontra obstáculos e meios diferentes.', ['**Reflexão:** a onda volta ao encontrar uma superfície (eco, espelho)','**Refração:** mudança de velocidade ao passar de um meio para outro (a frequência se mantém)','**Difração:** contornar obstáculos ou fendas (mais forte quando λ é comparável à abertura)','**Interferência:** superposição de ondas (construtiva soma; destrutiva cancela)','**Polarização:** só ondas transversais (a luz)'], 'Ouvimos uma conversa atrás de uma parede por difração; o som contorna cantos.'],
 ['Ondas estacionárias e ressonância', 'Aparecem em instrumentos musicais e em estruturas.', ['**Onda estacionária:** padrão fixo com nós (sem vibração) e ventres (vibração máxima)','**Ressonância:** quando a frequência de uma força externa coincide com a frequência natural, a amplitude cresce muito','Exemplos: balanço, taça de cristal quebrada pela voz, ponte instável, rádio sintonizado','Cordas de violão: frequências dependem do comprimento e da tensão'], null],
 ['Efeito Doppler', 'A frequência percebida muda quando fonte e observador se movem um em relação ao outro.', ['Fonte se aproximando: frequência percebida maior (som mais agudo)','Fonte se afastando: frequência menor (som mais grave)','Sirene de ambulância passando','Aplicações: radar de velocidade, ecografia, astronomia (desvio para o vermelho)'], null]
],
ex:[
 { q:'Uma onda em uma corda tem frequência de 4 Hz e comprimento de onda de 0,5 m. Qual a sua velocidade de propagação?', a:['0,125 m/s','2 m/s','4,5 m/s','8 m/s','16 m/s'], g:'B', c:'v = λ·f = 0,5 × 4 = 2 m/s.' },
 { q:'Uma onda sonora passa do ar para a água. Nesse processo, o que NÃO muda?', a:['a velocidade','o comprimento de onda','a frequência','a direção de propagação','a amplitude necessariamente'], g:'C', c:'Na refração, a frequência é determinada pela fonte e não muda; a velocidade e o comprimento de onda mudam.' }
],
pr:[
 { q:'O período de uma onda é de 0,02 s. Sua frequência é de:', a:['2 Hz','5 Hz','20 Hz','50 Hz','200 Hz'], g:'D', c:'f = 1/T = 1/0,02 = 50 Hz.' },
 { q:'O som se propaga:', a:['no vácuo','somente em meios materiais','somente em líquidos','somente em sólidos','apenas no ar'], g:'B', c:'O som é onda mecânica: precisa de um meio material (sólido, líquido ou gás).' },
 { q:'Quando a fonte sonora se aproxima do observador, a frequência percebida:', a:['diminui','aumenta','permanece constante','é nula','depende da amplitude apenas'], g:'B', c:'Efeito Doppler: com a aproximação, a frequência percebida aumenta (som mais agudo).' },
 { q:'O fenômeno de uma onda contornar um obstáculo ou atravessar uma fenda e se espalhar é a:', a:['reflexão','refração','difração','polarização','absorção'], g:'C', c:'Difração: contorno de obstáculos e espalhamento ao passar por aberturas.' }
],
erros:['Achar que a onda transporta matéria (ela transporta energia).','Esquecer que a frequência não muda na refração.','Confundir comprimento de onda com amplitude.','Dizer que o som se propaga no vácuo.'],
check:['aplicar v = λ·f','distinguir ondas mecânicas e eletromagnéticas, transversais e longitudinais','descrever reflexão, refração, difração e interferência','explicar o efeito Doppler e a ressonância']
},

{ t:'Acústica (som)',
d1:[
 ['O som', 'Onda mecânica longitudinal que se propaga em meios materiais.', ['Velocidade: sólidos > líquidos > gases','No ar (25 °C), cerca de 340 m/s; na água, cerca de 1.500 m/s','Não se propaga no vácuo','Ouvido humano: de 20 Hz a 20.000 Hz','Infrassom (< 20 Hz) e ultrassom (> 20.000 Hz)'], null],
 ['Qualidades fisiológicas do som', 'Como percebemos o som.', ['**Altura:** grave ou agudo, depende da frequência','**Intensidade:** forte ou fraco, depende da amplitude (energia)','**Timbre:** a "cor" do som, permite distinguir instrumentos e vozes (forma da onda)','Voz masculina geralmente mais grave que a feminina (frequência menor)','Intensidade em decibéis (dB), escala logarítmica'], 'Altura não é volume: altura é agudo/grave; volume é forte/fraco.'],
 ['Eco e reverberação', 'Reflexão do som.', ['**Eco:** o som refletido chega depois de pelo menos 0,1 s do som direto','Distância mínima para ouvir o eco: cerca de 17 m (340 × 0,1 / 2)','**Reverberação:** reflexão em tempo mais curto; prolonga o som (igrejas, auditórios)','**Sonar:** usa o eco para medir profundidades: d = v·t/2'], null]
],
d2:[
 ['Instrumentos musicais', 'Produzem ondas estacionárias.', ['**Cordas:** frequência depende do comprimento, da tensão e da massa da corda (mais curta/tensa, mais aguda)','**Tubos abertos e fechados:** o comprimento do tubo determina a frequência (flautas, órgãos)','**Percussão:** membranas e barras','Harmônicos: múltiplos da frequência fundamental'], null],
 ['Poluição sonora e saúde', 'Contextos de interpretação de textos e gráficos.', ['Acima de 85 dB por longos períodos há risco de perda auditiva','Cada +10 dB corresponde a intensidade 10 vezes maior','Ruído urbano: trânsito, obras, aviões','Medidas: isolamento acústico, limites legais, fones em volume moderado'], 'Escala de decibéis: 30 dB (sussurro), 60 dB (conversa), 100 dB (show), 120 dB (limiar da dor).'],
 ['Aplicações tecnológicas', 'Som e ultrassom na tecnologia.', ['**Ultrassonografia:** imagem do corpo por ultrassom','**Sonar e ecolocalização** (golfinhos e morcegos)','**Limpeza por ultrassom** em joias e instrumentos','**Controle de qualidade:** detecção de rachaduras em peças metálicas'], null]
],
ex:[
 { q:'Um navio emite um pulso de sonar que retorna após 0,4 s. Sabendo que a velocidade do som na água é 1.500 m/s, qual a profundidade do fundo do mar?', a:['150 m','300 m','600 m','1.200 m','3.750 m'], g:'B', c:'O som vai e volta: d = v·t/2 = 1.500 × 0,4 / 2 = 300 m.' },
 { q:'Duas notas musicais de mesma altura e mesma intensidade tocadas por instrumentos diferentes podem ser distinguidas por causa:', a:['da frequência','da amplitude','do timbre','da velocidade do som','do comprimento de onda'], g:'C', c:'O timbre é a qualidade que permite distinguir sons de mesma altura e intensidade produzidos por fontes diferentes.' }
],
pr:[
 { q:'Um som agudo difere de um grave principalmente por ter:', a:['maior amplitude','menor frequência','maior frequência','menor velocidade','menor timbre'], g:'C', c:'A altura (agudo/grave) depende da frequência: sons agudos têm frequência maior.' },
 { q:'Um raio é visto e o trovão ouvido 6 s depois. Considerando a velocidade do som 340 m/s e desprezando o tempo de propagação da luz, a distância até o raio é de:', a:['340 m','680 m','1.020 m','2.040 m','3.400 m'], g:'D', c:'d = v·t = 340 × 6 = 2.040 m.' },
 { q:'O som não se propaga:', a:['nos sólidos','nos líquidos','nos gases','no vácuo','no ar quente'], g:'D', c:'O som é onda mecânica e precisa de meio material.' },
 { q:'O aumento da intensidade de um som corresponde a um aumento da sua:', a:['frequência','amplitude','velocidade','altura','velocidade e frequência'], g:'B', c:'A intensidade (volume) está ligada à amplitude da onda sonora, isto é, à energia transportada.' }
],
erros:['Confundir altura (agudo/grave) com intensidade (forte/fraco).','Esquecer de dividir por 2 no cálculo do eco e do sonar (ida e volta).','Achar que o som viaja mais rápido no ar do que na água.','Dizer que o som se propaga no vácuo.'],
check:['diferenciar altura, intensidade e timbre','calcular distância com eco e sonar','citar a faixa audível e a velocidade do som','relacionar decibéis com riscos à saúde']
},

{ t:'Óptica geométrica',
d1:[
 ['Princípios da óptica', 'A luz é estudada por raios que se propagam em linha reta, em meios homogêneos.', ['**Propagação retilínea:** a luz viaja em linha reta (sombra, penumbra, eclipses)','**Independência dos raios:** raios se cruzam sem interferir','**Reversibilidade:** o caminho da luz é o mesmo nos dois sentidos','Velocidade da luz no vácuo: 3 × 10⁸ m/s (a maior possível)'], null],
 ['Meios e fontes de luz', 'A luz interage de formas diferentes com os materiais.', ['**Transparente:** deixa a luz passar (vidro, ar)','**Translúcido:** deixa passar, mas sem nitidez (vidro fosco)','**Opaco:** bloqueia a luz (madeira, metal)','**Fonte primária:** emite luz própria (Sol, lâmpada). **Secundária:** reflete luz (Lua, livros)'], 'A Lua não tem luz própria: ela reflete a luz do Sol.'],
 ['Sombra, penumbra e eclipses', 'Consequências da propagação retilínea.', ['**Sombra:** região que não recebe luz da fonte','**Penumbra:** região que recebe parte da luz de uma fonte extensa','**Eclipse solar:** a Lua passa entre o Sol e a Terra','**Eclipse lunar:** a Terra fica entre o Sol e a Lua (Lua cheia)','Câmara escura: imagem invertida em um orifício'], null]
],
d2:[
 ['Reflexão e leis', 'A luz volta ao incidir em uma superfície.', ['**1ª lei:** raio incidente, normal e raio refletido ficam no mesmo plano','**2ª lei:** ângulo de incidência = ângulo de reflexão','**Reflexão regular:** superfícies lisas (espelhos)','**Reflexão difusa:** superfícies rugosas (papel, parede): permite ver os objetos de vários ângulos'], 'Os ângulos são medidos em relação à normal (reta perpendicular à superfície).'],
 ['Espelhos planos', 'A imagem formada tem propriedades fixas.', ['**Imagem virtual** (atrás do espelho), **direita** e do **mesmo tamanho**','Distância da imagem ao espelho = distância do objeto ao espelho','Imagem invertida lateralmente (esquerda e direita trocadas)','Se o espelho gira um ângulo α, o raio refletido gira 2α','Dois espelhos formando ângulo θ: número de imagens n = 360/θ − 1'], null],
 ['Espelhos esféricos', 'Côncavos e convexos.', ['**Côncavo:** converge raios (faróis, espelho de maquiagem, dentista); pode formar imagem real ou virtual','**Convexo:** diverge raios, imagem virtual, direita e menor (retrovisores, espelhos de lojas), campo de visão maior','Foco: ponto onde os raios convergem (côncavo)','Equação de Gauss: 1/f = 1/p + 1/p′'], null]
],
ex:[
 { q:'Uma pessoa está a 2 m de um espelho plano. A que distância ela fica da sua imagem?', a:['1 m','2 m','3 m','4 m','8 m'], g:'D', c:'A imagem fica a 2 m atrás do espelho. A distância entre a pessoa e a imagem é 2 + 2 = 4 m.' },
 { q:'Durante um eclipse solar total, a ordem dos astros é:', a:['Sol, Terra e Lua','Terra, Sol e Lua','Sol, Lua e Terra','Lua, Sol e Terra','Terra, Lua e Sol, na mesma ordem'], g:'C', c:'No eclipse solar, a Lua fica entre o Sol e a Terra, projetando sombra sobre a Terra: Sol, Lua e Terra.' }
],
pr:[
 { q:'Um raio de luz incide em um espelho plano formando 30° com a normal. O ângulo de reflexão é:', a:['15°','30°','60°','90°','120°'], g:'B', c:'Lei da reflexão: ângulo de incidência = ângulo de reflexão = 30°.' },
 { q:'Os espelhos retrovisores externos de carros costumam ser convexos porque:', a:['aumentam o tamanho da imagem','dão um campo de visão maior','invertem a imagem','formam imagem real','ampliam as distâncias'], g:'B', c:'O espelho convexo forma imagem menor e dá um campo de visão mais amplo.' },
 { q:'Um objeto de 1,6 m está a 3 m de um espelho plano. O tamanho da imagem é:', a:['0,8 m','1,6 m','3,2 m','4,8 m','6 m'], g:'B', c:'No espelho plano, a imagem tem o mesmo tamanho do objeto: 1,6 m.' },
 { q:'Uma câmara escura com orifício forma uma imagem:', a:['direita e maior','invertida','virtual','ampliada e direita','sem imagem'], g:'B', c:'Pela propagação retilínea, os raios cruzam no orifício e a imagem sai invertida.' }
],
erros:['Medir os ângulos de reflexão em relação à superfície (e não à normal).','Achar que a imagem em espelho plano é real.','Confundir sombra e penumbra.','Esquecer que a Lua não tem luz própria.'],
check:['aplicar as leis da reflexão','descrever a imagem em espelhos planos','distinguir espelhos côncavos e convexos e suas aplicações','explicar sombras e eclipses']
}
];
