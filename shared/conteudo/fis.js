/* Física: 25 temas. Seção: [rótulo, texto, [itens], fecho] */
window.CONTEUDO = window.CONTEUDO || {};
window.CONTEUDO.fis = { id:'fis', nome:'Física', icone:'⚡', emojis:'⚡ 🚀 🔭 🧲',
capa:'linear-gradient(160deg,#101a3a,#24418f 55%,#f2a516)',
temas:[
{ t:'Grandezas e unidades (SI)', p:'m', ic:'📏', s:[
  ['Grandezas físicas', 'Tudo o que pode ser medido.', ['**Escalares:** só valor e unidade (massa, tempo, temperatura)','**Vetoriais:** valor, direção e sentido (velocidade, força, aceleração)'], null],
  ['Unidades do SI', null, ['Comprimento: metro (m)','Massa: quilograma (kg)','Tempo: segundo (s)','Temperatura: kelvin (K)','Corrente elétrica: ampère (A)'], null],
  ['Prefixos', null, ['quilo (k) = 10³','mega (M) = 10⁶','giga (G) = 10⁹','mili (m) = 10⁻³','micro (μ) = 10⁻⁶','nano (n) = 10⁻⁹'], 'Exemplo: 5 km = 5 × 10³ m = 5.000 m.']
], enem:'Converter unidades é o primeiro passo de quase toda questão de Física. Atenção a km/h e m/s.' },

{ t:'Movimento uniforme', p:'a', ic:'🚗', s:[
  ['Velocidade média', 'v = Δs ÷ Δt (distância percorrida dividida pelo tempo).', null, 'Exemplo: 120 km em 2 h → 60 km/h.'],
  ['Movimento uniforme (MU)', 'A velocidade é constante.', ['Função horária: s = s₀ + v × t','Gráfico s × t: reta inclinada','Gráfico v × t: reta horizontal'], null],
  ['Conversão', '72 km/h ÷ 3,6 = 20 m/s.', null, null],
  ['Encontro de móveis', 'Iguale as funções horárias (s₁ = s₂) para achar o instante em que dois móveis se encontram.', null, null]
], enem:'Velocidade média em viagens, radares e trânsito. Lembre: velocidade média não é a média das velocidades.' },

{ t:'Movimento uniformemente variado', p:'a', ic:'🏎️', s:[
  ['Aceleração', 'a = Δv ÷ Δt. Indica o quanto a velocidade muda a cada segundo (m/s²).', null, null],
  ['Equações do MUV', null, ['v = v₀ + a × t','s = s₀ + v₀ × t + a × t² ÷ 2','Torricelli: v² = v₀² + 2 × a × Δs'], 'Use Torricelli quando o tempo não aparece no problema.'],
  ['Gráficos', null, ['v × t: reta inclinada (a inclinação é a aceleração)','A área sob o gráfico v × t é o deslocamento','s × t: parábola'], null],
  ['Frenagem', 'Na frenagem a aceleração é contrária ao movimento. A distância de parada cresce com o quadrado da velocidade.', null, 'Dobrar a velocidade quadruplica a distância de frenagem.']
], enem:'Frenagem, distância de segurança e tempo de reação ao volante são contextos clássicos.' },

{ t:'Queda livre e lançamentos', p:'m', ic:'🍎', s:[
  ['Queda livre', 'Movimento sob ação apenas da gravidade (sem resistência do ar). g ≈ 10 m/s².', ['v = g × t','h = g × t² ÷ 2'], 'Sem resistência do ar, objetos de massas diferentes caem juntos.'],
  ['Lançamento vertical', 'Na subida, a velocidade diminui até zero no ponto mais alto; depois o objeto cai.', null, null],
  ['Lançamento oblíquo', 'O movimento se divide em dois:', ['Horizontal: velocidade constante (MU)','Vertical: sob a gravidade (MUV)'], 'O alcance máximo acontece com ângulo de 45° (sem resistência do ar).']
], enem:'Questões de bola chutada, salto e objeto caindo de prédios. Separe os movimentos horizontal e vertical.' },

{ t:'Leis de Newton', p:'a', ic:'🍏', s:[
  ['1ª lei: inércia', 'Sem força resultante, um corpo mantém repouso ou movimento retilíneo uniforme.', null, 'Exemplo: no freio brusco, o corpo continua indo para frente. Por isso o cinto de segurança.'],
  ['2ª lei: princípio fundamental', 'F = m × a. A força resultante produz aceleração proporcional à massa.', null, 'Peso: P = m × g.'],
  ['3ª lei: ação e reação', 'Toda ação tem uma reação de mesma intensidade, mesma direção e sentido oposto, **em corpos diferentes**.', null, 'Exemplo: o foguete empurra os gases para baixo e os gases empurram o foguete para cima.'],
  ['Forças comuns', null, ['**Peso:** atração da Terra','**Normal:** reação da superfície','**Atrito:** contra o deslizamento','**Tração:** em cordas e cabos'], null]
], enem:'Cinto de segurança, airbag, foguetes e caminhar. Ação e reação nunca se anulam, porque estão em corpos diferentes.' },

{ t:'Atrito e plano inclinado', p:'m', ic:'🛝', s:[
  ['Força de atrito', 'Fat = μ × N (coeficiente de atrito × força normal).', ['**Estático:** impede o início do movimento','**Cinético:** age durante o deslizamento (geralmente menor)'], null],
  ['Atrito é útil', null, ['Permite caminhar sem escorregar','Faz os pneus aderirem ao asfalto','Permite frear'], 'Pneus "carecas" têm menos aderência, principalmente na chuva.'],
  ['Plano inclinado', 'O peso se divide em duas partes:', ['Paralela ao plano: P × sen θ (puxa para baixo)','Perpendicular ao plano: P × cos θ (equilibrada pela normal)'], null]
], enem:'Freios ABS, pneus e rampas. O ABS evita o travamento das rodas, mantendo o atrito estático, que é maior.' },

{ t:'Trabalho, energia e potência', p:'a', ic:'🔋', s:[
  ['Trabalho', 'τ = F × d × cos θ. Mede a energia transferida por uma força. Unidade: joule (J).', null, null],
  ['Formas de energia mecânica', null, ['**Cinética:** Ec = m × v² ÷ 2','**Potencial gravitacional:** Ep = m × g × h','**Potencial elástica:** Ee = k × x² ÷ 2'], null],
  ['Conservação', 'Sem atrito, a energia mecânica total se conserva: a energia só muda de forma.', null, 'Exemplo: na montanha-russa, a energia potencial vira cinética na descida.'],
  ['Potência e rendimento', null, ['Potência = energia ÷ tempo (watt = J/s)','Rendimento = energia útil ÷ energia total'], 'Nenhuma máquina real tem rendimento de 100%.']
], enem:'Usinas, montanha-russa e eficiência de aparelhos. Identifique as transformações de energia em cada etapa.' },

{ t:'Quantidade de movimento e impulso', p:'m', ic:'🎱', s:[
  ['Quantidade de movimento', 'Q = m × v. É uma grandeza vetorial.', null, null],
  ['Impulso', 'I = F × Δt = ΔQ. Uma força aplicada durante um tempo muda a quantidade de movimento.', null, 'Aumentar o tempo de impacto diminui a força: é o princípio do airbag e dos capacetes.'],
  ['Conservação', 'Em um sistema isolado, a quantidade de movimento total se conserva.', ['Colisões','Recuo de armas','Explosões'], null]
], enem:'Airbag, para-choques deformáveis e colchões de salto: todos aumentam o tempo do impacto para reduzir a força.' },

{ t:'Gravitação universal', p:'m', ic:'🪐', s:[
  ['Lei da gravitação', 'Dois corpos se atraem com força proporcional às massas e inversamente proporcional ao quadrado da distância.', ['F = G × M × m ÷ d²'], 'Dobrar a distância reduz a força a um quarto.'],
  ['Leis de Kepler', null, ['**1ª:** as órbitas dos planetas são elipses, com o Sol em um dos focos','**2ª:** o planeta é mais rápido perto do Sol','**3ª:** quanto mais longe do Sol, maior o tempo da órbita'], null],
  ['Satélites e "gravidade zero"', 'Astronautas em órbita flutuam porque estão em queda livre contínua junto com a nave, não porque a gravidade acabou.', null, null]
], enem:'Satélites, marés (atração da Lua) e a sensação de imponderabilidade dos astronautas.' },

{ t:'Hidrostática', p:'m', ic:'🌊', s:[
  ['Densidade e pressão', null, ['Densidade: d = m ÷ V','Pressão: p = F ÷ A','Mais área → menos pressão (faca afiada corta melhor; raquete de neve afunda menos)'], null],
  ['Pressão nos líquidos (Stevin)', 'p = p₀ + d × g × h. A pressão aumenta com a profundidade.', null, 'A cada 10 m de água, a pressão aumenta cerca de 1 atm.'],
  ['Princípio de Pascal', 'A pressão aplicada em um líquido se transmite igualmente para todos os pontos.', null, 'É a base do elevador hidráulico e dos freios dos carros.'],
  ['Empuxo (Arquimedes)', 'Todo corpo mergulhado em um líquido recebe uma força para cima igual ao peso do líquido deslocado.', null, 'Se a densidade do corpo for menor que a do líquido, ele flutua.']
], enem:'Navios, mergulho, elevador hidráulico e balões. Relacione flutuação com densidade.' },

{ t:'Temperatura e calor', p:'a', ic:'🌡️', s:[
  ['Conceitos', null, ['**Temperatura:** grau de agitação das partículas','**Calor:** energia térmica em trânsito, sempre do mais quente para o mais frio','**Equilíbrio térmico:** quando as temperaturas se igualam'], null],
  ['Escalas', null, ['Celsius: água congela a 0 °C e ferve a 100 °C','Kelvin: TK = TC + 273','Conversão: TC ÷ 5 = (TF − 32) ÷ 9'], null],
  ['Calor sensível e latente', null, ['**Sensível:** muda a temperatura. Q = m × c × ΔT','**Latente:** muda o estado físico, sem mudar a temperatura. Q = m × L'], 'A água tem calor específico alto: esquenta e esfria devagar.']
], enem:'O calor específico alto da água explica o clima de regiões litorâneas e as brisas.' },

{ t:'Propagação do calor', p:'a', ic:'🔥', s:[
  ['Condução', 'O calor passa de partícula em partícula. Típica dos sólidos.', null, 'Metais são bons condutores; madeira, isopor e ar são isolantes.'],
  ['Convecção', 'O calor é levado pelo movimento do fluido (líquidos e gases): o mais quente sobe e o mais frio desce.', ['Ar-condicionado fica no alto','Aquecedor fica embaixo','Brisas marítimas'], null],
  ['Irradiação', 'O calor viaja por ondas eletromagnéticas e não precisa de meio.', null, 'É assim que o calor do Sol chega à Terra.'],
  ['Garrafa térmica', 'Evita os três processos: vácuo (condução e convecção) e paredes espelhadas (irradiação).', null, null]
], enem:'Brisa marítima, garrafa térmica, efeito estufa e roupas de inverno. Identifique o processo envolvido.' },

{ t:'Termodinâmica', p:'m', ic:'🚂', s:[
  ['1ª lei', 'Q = τ + ΔU. O calor recebido vira trabalho e variação de energia interna.', null, 'É o princípio da conservação de energia aplicado ao calor.'],
  ['2ª lei', 'O calor flui espontaneamente do quente para o frio, e nenhuma máquina térmica transforma todo o calor em trabalho.', null, null],
  ['Máquinas térmicas', null, ['Motores de carro e usinas termelétricas','Rendimento = trabalho ÷ calor recebido','Sempre menor que 100%'], null],
  ['Refrigeradores', 'Retiram calor do interior e jogam para fora, gastando energia elétrica.', null, 'Por isso a parte de trás da geladeira esquenta.']
], enem:'Rendimento de motores e usinas e funcionamento da geladeira são cobrados.' },

{ t:'Ondas', p:'a', ic:'〰️', s:[
  ['Conceitos', null, ['**Amplitude:** "altura" da onda (energia)','**Comprimento de onda (λ):** distância entre duas cristas','**Frequência (f):** oscilações por segundo (Hz)','**Período (T):** T = 1 ÷ f'], null],
  ['Equação fundamental', 'v = λ × f.', null, null],
  ['Tipos de onda', null, ['**Mecânicas:** precisam de meio (som, ondas do mar)','**Eletromagnéticas:** propagam-se no vácuo (luz, rádio, micro-ondas)'], null],
  ['Fenômenos', null, ['**Reflexão:** a onda volta (eco)','**Refração:** muda de meio e de velocidade','**Difração:** contorna obstáculos','**Interferência:** ondas se somam ou se anulam','**Ressonância:** amplificação na frequência natural'], null]
], enem:'Rádio, celular, micro-ondas e ressonância (taças quebrando, pontes). Saiba v = λ × f.' },

{ t:'Acústica (som)', p:'m', ic:'🔊', s:[
  ['O som', 'É uma onda mecânica longitudinal. Não se propaga no vácuo.', null, 'Velocidade no ar ≈ 340 m/s. É mais rápida nos sólidos e líquidos.'],
  ['Qualidades do som', null, ['**Altura:** grave ou agudo (depende da frequência)','**Intensidade:** forte ou fraco (depende da amplitude, medida em decibéis)','**Timbre:** diferencia instrumentos tocando a mesma nota'], null],
  ['Faixas de frequência', null, ['Audível pelo ser humano: cerca de 20 Hz a 20.000 Hz','Infrassom: abaixo de 20 Hz','Ultrassom: acima de 20.000 Hz (usado em exames médicos)'], null],
  ['Efeito Doppler', 'A frequência percebida muda quando a fonte se aproxima (mais agudo) ou se afasta (mais grave).', null, 'Exemplo: a sirene da ambulância passando.']
], enem:'Poluição sonora (decibéis), ultrassom e efeito Doppler aparecem com frequência.' },

{ t:'Óptica geométrica', p:'m', ic:'🔦', s:[
  ['Princípios', null, ['A luz se propaga em linha reta (sombras, eclipses)','Raios de luz se cruzam sem se perturbar','O caminho da luz é reversível'], null],
  ['Reflexão e espelhos', null, ['Ângulo de incidência = ângulo de reflexão','**Espelho plano:** imagem virtual, do mesmo tamanho e simétrica','**Côncavo:** pode ampliar (espelho de maquiagem)','**Convexo:** amplia o campo visual (retrovisor, garagens)'], null],
  ['Cores', 'Um objeto tem a cor da luz que ele reflete.', null, 'Um objeto vermelho iluminado só com luz azul parece escuro.']
], enem:'Retrovisores, câmeras escuras, eclipses e cor dos objetos sob luzes diferentes.' },

{ t:'Refração e lentes', p:'m', ic:'👓', s:[
  ['Refração', 'A luz muda de velocidade e de direção ao passar de um meio para outro.', ['Canudo que parece "quebrado" no copo','Piscina que parece mais rasa','Arco-íris (dispersão da luz branca)'], null],
  ['Lentes', null, ['**Convergentes:** juntam os raios (lupa, correção da hipermetropia)','**Divergentes:** espalham os raios (correção da miopia)'], null],
  ['Defeitos da visão', null, ['**Miopia:** dificuldade de ver de longe → lente divergente','**Hipermetropia:** dificuldade de ver de perto → lente convergente','**Presbiopia:** "vista cansada", com a idade','**Astigmatismo:** imagem distorcida → lente cilíndrica'], null]
], enem:'Correção de defeitos da visão é tema clássico. Miopia: divergente. Hipermetropia: convergente.' },

{ t:'Eletrostática', p:'m', ic:'🎈', s:[
  ['Carga elétrica', 'Prótons têm carga positiva e elétrons, negativa. Cargas iguais se repelem; opostas se atraem.', null, null],
  ['Processos de eletrização', null, ['**Atrito:** os corpos ficam com cargas opostas (balão no cabelo)','**Contato:** os corpos ficam com cargas de mesmo sinal','**Indução:** aproximação de um corpo carregado'], null],
  ['Lei de Coulomb', 'F = k × |Q₁ × Q₂| ÷ d². Dobrar a distância reduz a força a um quarto.', null, null],
  ['Raios e para-raios', 'Raios são descargas elétricas entre nuvens e o solo. O para-raios oferece um caminho seguro para a descarga chegar à terra.', null, 'Dentro de um carro fechado você fica protegido (gaiola de Faraday).']
], enem:'Choques ao sair do carro, raios, gaiola de Faraday e eletrização por atrito.' },

{ t:'Corrente elétrica e circuitos', p:'a', ic:'🔌', s:[
  ['Grandezas', null, ['**Corrente (i):** fluxo de cargas, em ampères (A)','**Tensão (U):** "empurrão" das cargas, em volts (V)','**Resistência (R):** oposição à corrente, em ohms (Ω)'], null],
  ['Lei de Ohm', 'U = R × i.', null, null],
  ['Associação de resistores', null, ['**Série:** Req = R₁ + R₂ (mesma corrente; se um queima, todos apagam)','**Paralelo:** 1/Req = 1/R₁ + 1/R₂ (mesma tensão; funcionam de forma independente)'], 'Em casa, os aparelhos são ligados em paralelo.'],
  ['Segurança', null, ['**Disjuntor/fusível:** desliga o circuito se a corrente passar do limite','**Fio terra:** protege contra choques'], null]
], enem:'Circuitos residenciais e escolha de disjuntor. Lembre por que as tomadas são em paralelo.' },

{ t:'Potência elétrica e consumo', p:'a', ic:'💡', s:[
  ['Potência elétrica', null, ['P = U × i','P = R × i²','P = U² ÷ R'], 'Unidade: watt (W).'],
  ['Energia consumida', 'E = P × t. Na conta de luz, a unidade é o **quilowatt-hora (kWh)**.', null, 'Exemplo: chuveiro de 5.000 W ligado 1 h por dia em 30 dias → 5 kW × 30 h = 150 kWh.'],
  ['Economia de energia', null, ['Trocar lâmpadas incandescentes por LED','Diminuir o tempo do banho','Escolher aparelhos com selo de eficiência (Procel)','Evitar o modo "stand-by"'], null],
  ['Chuveiro: verão e inverno', 'Na posição "inverno", a resistência é menor, a corrente é maior e a potência aumenta.', null, null]
], enem:'É um dos temas mais cobrados de Física. Converta W em kW e minutos em horas antes de multiplicar.' },

{ t:'Magnetismo e eletromagnetismo', p:'m', ic:'🧲', s:[
  ['Ímãs', 'Todo ímã tem polo norte e sul. Polos iguais se repelem e opostos se atraem. Não existe polo isolado.', null, 'A bússola aponta para o norte geográfico porque a Terra se comporta como um grande ímã.'],
  ['Corrente gera campo magnético', 'Oersted mostrou que um fio com corrente desvia a agulha da bússola.', ['Eletroímãs','Motores elétricos','Campainhas'], null],
  ['Indução eletromagnética', 'Um campo magnético variando gera corrente elétrica (Faraday).', ['Geradores de usinas','Transformadores','Carregadores por indução','Cartões por aproximação'], 'É o princípio da produção de quase toda a energia elétrica.']
], enem:'Funcionamento de geradores e usinas, motores elétricos e transformadores.' },

{ t:'Geração de energia elétrica', p:'a', ic:'🏭', s:[
  ['Como funciona', 'A maioria das usinas gira uma turbina ligada a um gerador (indução eletromagnética).', null, null],
  ['Fontes e transformações', null, ['**Hidrelétrica:** energia potencial da água → cinética → elétrica','**Termelétrica:** queima de combustível → calor → vapor → elétrica','**Nuclear:** fissão do urânio → calor → vapor → elétrica','**Eólica:** energia cinética do vento → elétrica','**Solar fotovoltaica:** luz → elétrica, sem turbina'], null],
  ['Impactos', null, ['Hidrelétricas: alagamento de áreas e deslocamento de populações','Termelétricas: emissão de gases do efeito estufa','Nuclear: rejeitos radioativos','Eólica e solar: renováveis, mas dependem do clima'], 'A matriz elétrica brasileira tem grande participação de fontes renováveis, principalmente hidrelétricas.']
], enem:'Questões pedem a sequência de transformações de energia em uma usina ou as vantagens de cada fonte.' },

{ t:'Ondas eletromagnéticas', p:'m', ic:'📡', s:[
  ['Espectro eletromagnético', 'Da menor para a maior frequência:', ['Ondas de rádio → micro-ondas → infravermelho → luz visível → ultravioleta → raios X → raios gama'], 'Todas viajam no vácuo a 300.000 km/s.'],
  ['Usos', null, ['**Rádio e TV:** comunicação','**Micro-ondas:** aquecer alimentos e Wi-Fi','**Infravermelho:** controle remoto e câmeras térmicas','**Ultravioleta:** bronzeamento e esterilização','**Raios X:** exames de imagem'], null],
  ['Riscos', 'Quanto maior a frequência, maior a energia. Ultravioleta, raios X e gama podem causar danos às células.', null, 'Por isso usamos protetor solar e avental de chumbo no raio X.']
], enem:'Ordem do espectro, uso de protetor solar e funcionamento do micro-ondas.' },

{ t:'Física moderna', p:'m', ic:'⚛️', s:[
  ['Efeito fotoelétrico', 'A luz pode arrancar elétrons de um metal. Einstein explicou que a luz é formada por "pacotes" de energia, os fótons.', null, 'Aplicações: painéis solares, sensores de portas automáticas.'],
  ['Radioatividade', null, ['**Alfa:** pouco penetrante','**Beta:** penetração média','**Gama:** onda eletromagnética muito penetrante'], null],
  ['Meia-vida', 'Tempo para metade dos núcleos radioativos se desintegrar.', null, 'É usada na datação por carbono-14 e na medicina nuclear.'],
  ['Fissão e fusão', null, ['**Fissão:** núcleo pesado se divide (usinas nucleares)','**Fusão:** núcleos leves se unem (energia do Sol)'], null]
], enem:'Usinas nucleares, acidentes como o de Chernobyl e de Goiânia (césio-137) e meia-vida.' },

{ t:'Física no cotidiano e tecnologia', p:'m', ic:'📱', s:[
  ['Como a Física aparece no ENEM', 'A prova quase sempre parte de uma situação do dia a dia.', ['Celular e Wi-Fi: ondas eletromagnéticas','Carro: leis de Newton, atrito, energia','Casa: circuitos, consumo, chuveiro','Cozinha: calor, panela de pressão, micro-ondas'], null],
  ['Panela de pressão', 'Aumenta a pressão interna, a água ferve acima de 100 °C e o alimento cozinha mais rápido.', null, null],
  ['Estratégia de prova', null, ['1. Identifique o fenômeno','2. Escreva os dados com as unidades','3. Converta para o SI','4. Escolha a fórmula'], 'Muitas questões são conceituais e não pedem conta: leia o fenômeno com atenção.']
], enem:'Treine reconhecer o fenômeno físico por trás de cada situação do cotidiano.' }
]};
