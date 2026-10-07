/* Física: temas 5 a 8 */
module.exports = [
{ t:'Leis de Newton',
d1:[
 ['1ª Lei: inércia', 'Um corpo tende a manter seu estado: parado continua parado e em movimento continua em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.', ['**Inércia:** resistência de um corpo a mudar seu estado de movimento','Quanto maior a massa, maior a inércia','Exemplo: ao frear o ônibus, os passageiros vão para frente','Cinto de segurança e encosto de cabeça servem para compensar a inércia'], 'Força resultante nula: o corpo está em repouso ou em movimento retilíneo uniforme (equilíbrio).'],
 ['2ª Lei: princípio fundamental', 'A força resultante é igual à massa vezes a aceleração.', ['**F = m · a**','Unidade: newton (N = kg · m/s²)','Aceleração tem a mesma direção e sentido da força resultante','Exemplo: 2 kg sob força de 10 N → a = 5 m/s²','Para vários corpos ligados, some as massas ao achar a aceleração do conjunto'], null],
 ['3ª Lei: ação e reação', 'Toda ação tem uma reação de mesma intensidade e direção, mas sentido contrário, aplicada em corpos diferentes.', ['Remar: o remo empurra a água para trás; a água empurra o barco para frente','Foguete: expele gases para baixo e é empurrado para cima','Andar: o pé empurra o chão para trás; o chão empurra a pessoa para frente','As forças de ação e reação não se anulam, pois atuam em corpos distintos'], null]
],
d2:[
 ['Força peso e normal', 'Duas forças que aparecem o tempo todo.', ['**Peso: P = m · g** (g ≈ 10 m/s²). É uma força, medida em newtons','**Massa** é quantidade de matéria (kg) e não muda com o local; o peso muda (na Lua, g é cerca de 1/6)','**Normal (N):** força de contato perpendicular à superfície. Em um plano horizontal em equilíbrio, N = P','Peso e normal não são par ação-reação (atuam no mesmo corpo)'], 'Pessoa de 60 kg: massa 60 kg; peso 600 N (g = 10).'],
 ['Diagrama de forças e força resultante', 'Desenhe as forças que atuam em um único corpo.', ['Some as forças na mesma direção; subtraia as de sentidos opostos','Em um elevador: subindo acelerado, N > P; descendo acelerado, N < P','Em equilíbrio vertical, a soma para cima é igual à soma para baixo','Em queda livre: sensação de "ausência de peso"'], null],
 ['Tração e sistemas ligados', 'Cordas transmitem força.', ['A tração é a força que o fio exerce; ela puxa, nunca empurra','Corpos ligados por fio ideal têm a mesma aceleração','Resolva montando F = m·a para cada corpo ou para o conjunto','Exemplo: blocos de 2 kg e 3 kg ligados por um fio, sem atrito, com 20 N aplicados no de 3 kg: a = 20/5 = 4 m/s². A tração no fio puxa só o bloco de 2 kg: T = 2 × 4 = 8 N'], null]
],
ex:[
 { q:'Um bloco de 4 kg está sobre uma superfície sem atrito e sofre uma força horizontal de 20 N. Qual a aceleração adquirida?', a:['2 m/s²','4 m/s²','5 m/s²','16 m/s²','80 m/s²'], g:'C', c:'Pela 2ª lei: a = F/m = 20/4 = 5 m/s².' },
 { q:'Uma pessoa de massa 70 kg está dentro de um elevador que sobe com aceleração de 2 m/s². Qual a força normal que o piso faz sobre ela? (g = 10 m/s²)', a:['560 N','700 N','770 N','840 N','980 N'], g:'D', c:'N − P = m·a → N = m(g + a) = 70 × 12 = 840 N.' }
],
pr:[
 { q:'Qual é o peso de uma pessoa de 50 kg na Terra (g = 10 m/s²)?', a:['5 N','50 N','100 N','500 N','5.000 N'], g:'D', c:'P = m·g = 50 × 10 = 500 N.' },
 { q:'Um carro de 1.000 kg acelera de 0 a 20 m/s em 10 s. A força resultante sobre o carro é:', a:['200 N','1.000 N','2.000 N','10.000 N','20.000 N'], g:'C', c:'a = 20/10 = 2 m/s². F = m·a = 1.000 × 2 = 2.000 N.' },
 { q:'Ao chutar uma bola, o pé exerce uma força sobre ela. A reação a essa força é:', a:['o peso da bola','a força que a bola exerce sobre o pé','a força de atrito do chão','a força normal','a inércia da bola'], g:'B', c:'Ação e reação atuam em corpos diferentes: o pé empurra a bola; a bola empurra o pé com a mesma intensidade.' },
 { q:'Um objeto de 3 kg, na Lua (g ≈ 1,6 m/s²), tem massa e peso, respectivamente, de:', a:['3 kg e 30 N','3 kg e 4,8 N','0,5 kg e 4,8 N','1,6 kg e 3 N','3 kg e 3 N'], g:'B', c:'A massa não muda (3 kg). O peso é P = m·g = 3 × 1,6 = 4,8 N.' }
],
erros:['Confundir massa (kg) com peso (N).','Achar que ação e reação se anulam (elas atuam em corpos diferentes).','Esquecer de somar as forças com sinais corretos para achar a resultante.','Concluir que "sem força o corpo para" (a 1ª lei diz que ele mantém a velocidade).'],
check:['enunciar as três leis de Newton com exemplos','aplicar F = m·a','calcular peso e normal em situações simples','resolver sistemas de corpos ligados por fio']
},

{ t:'Atrito e plano inclinado',
d1:[
 ['Força de atrito', 'Força que se opõe ao movimento ou à tendência de movimento entre superfícies em contato.', ['**Atrito estático:** impede o início do movimento; varia até um valor máximo (f ≤ μₑ·N)','**Atrito cinético (dinâmico):** atua durante o movimento; f = μc·N','O coeficiente de atrito (μ) depende das superfícies, não da área de contato','μ estático costuma ser maior que μ cinético: é mais difícil começar do que manter'], 'Sem atrito não dá para andar, frear ou segurar objetos.'],
 ['Cálculo com atrito', 'A normal é a base do cálculo.', ['Em plano horizontal: N = P = m·g','Atrito cinético: fc = μ·m·g','Força resultante = F − fc','Exemplo: bloco de 10 kg, μ = 0,3, puxado com 50 N: fc = 0,3 × 100 = 30 N; resultante = 20 N; a = 2 m/s²'], null],
 ['Plano inclinado', 'O peso se decompõe em duas componentes.', ['**Componente paralela ao plano:** Pₓ = P·sen θ (puxa o corpo para baixo ao longo do plano)','**Componente perpendicular:** Pᵧ = P·cos θ (equilibra a normal: N = P·cos θ)','Sem atrito: a = g·sen θ','Com atrito: a = g·(sen θ − μ·cos θ), se o corpo desce'], null]
],
d2:[
 ['Condição de equilíbrio e de deslizamento', 'Quando o bloco começa a descer?', ['Equilíbrio no plano inclinado: P·sen θ ≤ μ·P·cos θ → tg θ ≤ μ','O ângulo crítico ocorre quando tg θ = μ','Se o ângulo for maior que o crítico, o bloco desliza','Exemplo: μ = 1 → começa a deslizar a partir de 45°'], 'Quanto maior o ângulo, maior a componente que puxa para baixo.'],
 ['Atrito e resistência do ar', 'Forças dissipativas ocorrem em muitos contextos.', ['**Resistência do ar:** cresce com a velocidade; leva à velocidade terminal','**Velocidade terminal:** quando a resistência iguala o peso (a = 0)','**Pneus, calçados e freios** exploram o atrito','O atrito converte energia mecânica em calor (aquecimento das mãos esfregadas)'], null],
 ['Aplicações e segurança', 'Contextos clássicos.', ['**Frenagem:** a distância depende do atrito (pista molhada: μ menor)','**Curvas:** o atrito lateral mantém o carro na pista','**Rampas de acesso** e ângulos de segurança','**Lubrificantes** reduzem o atrito entre peças'], null]
],
ex:[
 { q:'Um bloco de 5 kg é empurrado sobre uma superfície horizontal por uma força de 30 N e se move com velocidade constante. Qual o módulo da força de atrito? (g = 10 m/s²)', a:['5 N','15 N','25 N','30 N','50 N'], g:'D', c:'Velocidade constante significa força resultante nula. O atrito equilibra a força aplicada: f = 30 N.' },
 { q:'Um bloco desliza, sem atrito, em um plano inclinado de 30° (sen 30° = 0,5). Qual a aceleração do bloco? (g = 10 m/s²)', a:['2,5 m/s²','5 m/s²','7,5 m/s²','8,7 m/s²','10 m/s²'], g:'B', c:'Sem atrito: a = g·sen θ = 10 × 0,5 = 5 m/s².' }
],
pr:[
 { q:'Um bloco de 10 kg está sobre uma mesa horizontal, com coeficiente de atrito cinético 0,2. A força de atrito cinético é: (g = 10 m/s²)', a:['2 N','10 N','20 N','50 N','100 N'], g:'C', c:'fc = μ·N = 0,2 × 100 = 20 N.' },
 { q:'Uma caixa de 20 kg é puxada por uma força horizontal de 80 N sobre um piso com atrito de 30 N. Sua aceleração é:', a:['1,5 m/s²','2,5 m/s²','3 m/s²','4 m/s²','5 m/s²'], g:'B', c:'Resultante = 80 − 30 = 50 N. a = 50/20 = 2,5 m/s².' },
 { q:'Em um plano inclinado de ângulo θ, a componente do peso que tende a fazer o bloco deslizar é:', a:['P·cos θ','P·sen θ','P·tg θ','P','m·g·cos² θ'], g:'B', c:'A componente paralela ao plano é Pₓ = P·sen θ.' },
 { q:'Em dias de chuva, a distância de frenagem aumenta principalmente porque:', a:['o peso do carro aumenta','a massa do carro aumenta','o coeficiente de atrito diminui','a gravidade diminui','a inércia diminui'], g:'C', c:'A água reduz o coeficiente de atrito entre pneu e pista, diminuindo a força de frenagem.' }
],
erros:['Usar o peso no lugar da normal em planos inclinados (N = P·cos θ).','Achar que o atrito depende da área de contato.','Esquecer que, no atrito estático, a força varia até um valor máximo.','Inverter seno e cosseno nas componentes do peso.'],
check:['calcular atrito estático máximo e cinético','decompor o peso no plano inclinado','calcular a aceleração em um plano com e sem atrito','explicar a velocidade terminal']
},

{ t:'Trabalho, energia e potência',
d1:[
 ['Trabalho de uma força', 'Trabalho mede a transferência de energia por uma força ao longo de um deslocamento.', ['**τ = F · d · cos θ** (θ: ângulo entre a força e o deslocamento)','Unidade: joule (J = N·m)','Força na direção do deslocamento: τ = F·d','Força perpendicular ao deslocamento: τ = 0 (a normal e o peso, em plano horizontal, não realizam trabalho)','Trabalho negativo: a força se opõe ao movimento (atrito)'], null],
 ['Energia cinética e potencial', 'Formas de energia mecânica.', ['**Cinética: Ec = m·v²/2** (movimento)','**Potencial gravitacional: Ep = m·g·h** (altura)','**Potencial elástica: Eel = k·x²/2** (mola deformada)','Dobrar a velocidade quadruplica a energia cinética','Exemplo: 2 kg a 3 m/s: Ec = 2 × 9/2 = 9 J'], 'Energia é grandeza escalar; trabalho também.'],
 ['Conservação da energia mecânica', 'Sem forças dissipativas, a energia mecânica (Ec + Ep) se conserva.', ['Em = Ec + Ep = constante','Queda de um corpo: Ep vira Ec','Montanha-russa sem atrito: quanto mais alto, mais lento','Com atrito ou resistência do ar, parte da energia vira calor e a mecânica diminui','Teorema do trabalho: τ resultante = ΔEc'], null]
],
d2:[
 ['Potência', 'Potência mede a rapidez com que a energia é transferida.', ['**P = τ ÷ Δt = F·v**','Unidade: watt (W = J/s); 1 cavalo-vapor (cv) ≈ 735 W','Dois motores realizam o mesmo trabalho, mas o mais potente o faz em menos tempo','Exemplo: elevar 100 kg a 10 m em 20 s: τ = 10.000 J; P = 500 W'], 'Potência não é energia: kWh é energia; kW é potência.'],
 ['Rendimento', 'Nenhuma máquina converte 100% da energia em trabalho útil.', ['**η = potência útil ÷ potência total** (ou energia útil ÷ energia total)','Lâmpada incandescente: maior parte vira calor; LED é mais eficiente','Motor a combustão: rendimento típico de 25 a 35%','Rendimento nunca é maior que 100%'], null],
 ['Aplicações e energia no cotidiano', 'Contextos em que a energia é quantificada.', ['**Usinas hidrelétricas:** Ep da água → Ec → energia elétrica','**Energia solar e eólica:** fontes renováveis','**Alimentos:** 1 caloria alimentar ≈ 4.200 J','**Consumo doméstico:** E (kWh) = P (kW) × tempo (h)'], 'Compare sempre energias na mesma unidade (J, kWh ou kcal).']
],
ex:[
 { q:'Um corpo de 2 kg é abandonado de uma altura de 20 m. Desprezando o ar e com g = 10 m/s², qual a velocidade com que atinge o solo?', a:['10 m/s','15 m/s','20 m/s','25 m/s','40 m/s'], g:'C', c:'Conservação da energia: m·g·h = m·v²/2 → v² = 2·g·h = 400 → v = 20 m/s.' },
 { q:'Um motor eleva um bloco de 50 kg a uma altura de 12 m em 30 s. Qual a potência útil do motor? (g = 10 m/s²)', a:['20 W','100 W','200 W','300 W','600 W'], g:'C', c:'Trabalho = m·g·h = 50 × 10 × 12 = 6.000 J. Potência = 6.000/30 = 200 W.' }
],
pr:[
 { q:'A energia cinética de um corpo de 4 kg a 5 m/s é:', a:['10 J','20 J','50 J','100 J','200 J'], g:'C', c:'Ec = m·v²/2 = 4 × 25/2 = 50 J.' },
 { q:'Uma força de 30 N desloca um objeto por 5 m na mesma direção e sentido da força. O trabalho realizado é:', a:['6 J','35 J','75 J','150 J','300 J'], g:'D', c:'τ = F·d = 30 × 5 = 150 J.' },
 { q:'Um chuveiro de 4.000 W funciona por 15 minutos. A energia consumida é:', a:['0,25 kWh','0,5 kWh','1 kWh','2 kWh','4 kWh'], g:'C', c:'15 min = 0,25 h. E = 4 kW × 0,25 h = 1 kWh.' },
 { q:'Uma máquina recebe 500 J de energia e realiza 400 J de trabalho útil. Seu rendimento é:', a:['20%','25%','60%','80%','125%'], g:'D', c:'η = 400/500 = 0,8 = 80%.' }
],
erros:['Esquecer o cosseno do ângulo ao calcular trabalho com força inclinada.','Confundir potência (W) com energia (J ou kWh).','Esquecer o quadrado da velocidade na energia cinética.','Aplicar a conservação da energia mecânica quando há atrito (a energia mecânica diminui).'],
check:['calcular trabalho, energia cinética e potencial','usar a conservação da energia em quedas e rampas','calcular potência e rendimento','converter entre joule, kWh e kcal']
},

{ t:'Quantidade de movimento e impulso',
d1:[
 ['Quantidade de movimento', 'Também chamada de momento linear, mede o "tamanho" do movimento de um corpo.', ['**Q = m · v** (grandeza vetorial)','Unidade: kg·m/s','Um caminhão lento pode ter mais quantidade de movimento que um carro rápido','Exemplo: 1.000 kg a 10 m/s → Q = 10.000 kg·m/s'], null],
 ['Impulso de uma força', 'O impulso é a ação de uma força durante um intervalo de tempo.', ['**I = F · Δt** (unidade: N·s)','**Teorema do impulso:** I = ΔQ = m·v − m·v₀','Aumentar o tempo de contato diminui a força média para o mesmo impulso','Exemplo: airbag e cinto aumentam o tempo de desaceleração e reduzem a força sobre o corpo'], 'Cair em colchão ou dobrar os joelhos ao pousar: mais tempo, menos força.'],
 ['Conservação da quantidade de movimento', 'Em um sistema isolado (sem forças externas), a quantidade de movimento total se conserva.', ['**Q antes = Q depois**','Vale para colisões, explosões e recuos','Exemplo: arma que dispara: a bala vai para frente e a arma recua','Foguetes funcionam por esse princípio (ejetam gás para trás)'], null]
],
d2:[
 ['Colisões', 'Em toda colisão (em sistema isolado) a quantidade de movimento se conserva; a energia cinética nem sempre.', ['**Elástica:** conserva energia cinética (bolas de bilhar, aproximadamente)','**Inelástica:** parte da energia cinética se transforma em calor, som e deformação','**Perfeitamente inelástica:** os corpos saem juntos. m₁v₁ + m₂v₂ = (m₁ + m₂)·v','Exemplo: carro de 1.000 kg a 20 m/s bate em outro parado de 1.000 kg e ficam juntos: v = 10 m/s'], 'Em colisões reais, a energia cinética diminui.'],
 ['Explosões e recuo', 'Corpos inicialmente juntos e parados se separam.', ['Q total antes = 0, logo Q total depois = 0','Os fragmentos saem em sentidos opostos','m₁·v₁ = m₂·v₂ (em módulo)','Exemplo: canhão de 800 kg dispara bala de 8 kg a 400 m/s: recuo de 4 m/s'], null],
 ['Aplicações em segurança e esporte', 'O impulso explica muitas medidas de proteção.', ['Cinto, airbag, capacete, zona de deformação do carro','Chute, tacada, arremesso: acompanhar o movimento aumenta o tempo de contato e o impulso','Boxeadores recuam o rosto ao receber um soco','Pular de uma altura com os joelhos flexionados'], null]
],
ex:[
 { q:'Um carro de 800 kg trafega a 15 m/s. Qual a sua quantidade de movimento?', a:['120 kg·m/s','1.200 kg·m/s','4.800 kg·m/s','12.000 kg·m/s','120.000 kg·m/s'], g:'D', c:'Q = m·v = 800 × 15 = 12.000 kg·m/s.' },
 { q:'Uma bola de 0,5 kg, que se movia a 10 m/s, é chutada e passa a se mover em sentido contrário a 14 m/s. Qual o módulo do impulso recebido?', a:['2 N·s','4 N·s','7 N·s','12 N·s','24 N·s'], g:'D', c:'Impulso = ΔQ. Adotando positivo o sentido final: Q final = 0,5 × 14 = 7 e Q inicial = 0,5 × (−10) = −5. Impulso = 7 − (−5) = 12 N·s.' }
],
pr:[
 { q:'Um vagão de 2.000 kg a 6 m/s colide com outro vagão parado de 4.000 kg e os dois seguem juntos. A velocidade final é:', a:['1 m/s','2 m/s','3 m/s','4 m/s','6 m/s'], g:'B', c:'Conservação: 2.000 × 6 = (2.000 + 4.000) × v → v = 12.000/6.000 = 2 m/s.' },
 { q:'Uma força de 50 N atua por 4 s sobre um corpo. O impulso é:', a:['12,5 N·s','46 N·s','54 N·s','100 N·s','200 N·s'], g:'E', c:'I = F·Δt = 50 × 4 = 200 N·s.' },
 { q:'O airbag de um carro reduz o risco de lesões porque:', a:['reduz a massa do ocupante','aumenta o tempo de desaceleração e reduz a força média','aumenta a quantidade de movimento','diminui a inércia do carro','elimina o impulso'], g:'B', c:'O impulso (ΔQ) é o mesmo, mas ao aumentar o tempo de contato, a força média sobre o ocupante diminui.' },
 { q:'Um patinador de 60 kg, parado, arremessa uma bola de 3 kg a 10 m/s. Desprezando o atrito, o patinador recua com velocidade de:', a:['0,2 m/s','0,5 m/s','1 m/s','5 m/s','10 m/s'], g:'B', c:'Q total = 0: 3 × 10 = 60 × v → v = 30/60 = 0,5 m/s.' }
],
erros:['Esquecer que a quantidade de movimento é vetorial (o sinal indica o sentido).','Aplicar a conservação da energia cinética em colisões inelásticas.','Confundir impulso (N·s) com força (N).','Desprezar o sentido ao calcular a variação da quantidade de movimento.'],
check:['calcular quantidade de movimento e impulso','aplicar o teorema do impulso','usar a conservação da quantidade de movimento em colisões e recuos','explicar dispositivos de segurança pelo impulso']
}
];
