/* Física: temas 17 a 20 */
module.exports = [
{ t:'Refração e lentes',
d1:[
 ['Refração da luz', 'Mudança de velocidade (e, em geral, de direção) da luz ao passar de um meio para outro.', ['**Índice de refração: n = c/v** (c = 3 × 10⁸ m/s). Quanto maior n, mais lenta a luz no meio','Vácuo: n = 1; ar ≈ 1; água ≈ 1,33; vidro ≈ 1,5; diamante ≈ 2,4','Ao entrar em meio de maior n, o raio se aproxima da normal','A frequência não muda na refração'], null],
 ['Lei de Snell', 'Relaciona os ângulos nos dois meios.', ['**n₁ · sen θ₁ = n₂ · sen θ₂**','Meio mais refringente: ângulo menor com a normal','Efeito: canudo "quebrado" na água, piscina parece mais rasa, miragens','Incidência perpendicular (θ = 0): sem desvio'], 'Medidos em relação à normal, como na reflexão.'],
 ['Reflexão total', 'Ocorre ao passar de um meio mais refringente para um menos refringente.', ['Quando o ângulo de incidência supera o **ângulo limite**, não há refração: toda a luz reflete','sen L = n_menor/n_maior','Aplicações: fibras ópticas (internet), prismas de binóculos, brilho do diamante','Miragem em estradas quentes'], null]
],
d2:[
 ['Lentes esféricas', 'Dispositivos que desviam a luz por refração.', ['**Convergente (bordas finas):** reúne raios (lupa, câmeras, óculos para hipermetropia)','**Divergente (bordas grossas):** espalha os raios (óculos para miopia)','**Foco (f):** ponto de convergência (para a divergente, o foco é virtual)','**Vergência (grau): V = 1/f** (em dioptrias, f em metros)','Lente convergente: V > 0; divergente: V < 0'], 'Grau dos óculos: uma lente de 2 di tem distância focal de 0,5 m.'],
 ['O olho humano e defeitos da visão', 'O olho funciona como uma lente convergente que projeta a imagem na retina.', ['**Miopia:** a imagem forma-se antes da retina; vê mal de longe; corrige-se com lente divergente','**Hipermetropia:** imagem depois da retina; vê mal de perto; lente convergente','**Presbiopia (vista cansada):** perda de acomodação com a idade; lente convergente para perto','**Astigmatismo:** curvatura irregular da córnea; lente cilíndrica'], null],
 ['Instrumentos ópticos', 'Combinam lentes e espelhos.', ['**Lupa:** lente convergente com imagem virtual e ampliada','**Microscópio:** duas lentes convergentes (objetiva e ocular)','**Telescópio refrator ou refletor:** capta luz de objetos distantes','**Câmera fotográfica e projetor**'], null]
],
ex:[
 { q:'A velocidade da luz em um meio é 2 × 10⁸ m/s. O índice de refração desse meio é: (c = 3 × 10⁸ m/s)', a:['0,67','1','1,5','2','3'], g:'C', c:'n = c/v = 3 × 10⁸ / 2 × 10⁸ = 1,5.' },
 { q:'Uma pessoa com miopia deve usar óculos com lentes:', a:['convergentes','divergentes','planas','cilíndricas apenas','bifocais convergentes'], g:'B', c:'Na miopia a imagem forma-se antes da retina e é corrigida com lentes divergentes.' }
],
pr:[
 { q:'Uma lente convergente tem distância focal de 25 cm. Sua vergência é:', a:['2 di','4 di','5 di','25 di','0,25 di'], g:'B', c:'f = 0,25 m. V = 1/f = 1/0,25 = 4 di.' },
 { q:'A fibra óptica transmite sinais de luz por meio da:', a:['reflexão difusa','refração apenas','reflexão total','difração','polarização'], g:'C', c:'A luz sofre sucessivas reflexões totais no interior da fibra, permanecendo confinada.' },
 { q:'Quando a luz passa do ar para a água (n = 1,33), o raio se aproxima da normal porque:', a:['a velocidade da luz aumenta','a velocidade da luz diminui','a frequência diminui','a frequência aumenta','a amplitude diminui'], g:'B', c:'A água tem maior índice de refração: a luz vai mais devagar e o raio se aproxima da normal.' },
 { q:'Uma lupa utiliza:', a:['lente divergente','lente convergente','espelho convexo','espelho plano','prisma'], g:'B', c:'A lupa é uma lente convergente que, com o objeto entre o foco e a lente, forma imagem virtual ampliada.' }
],
erros:['Trocar o tipo de lente na correção da miopia e da hipermetropia.','Medir ângulos de refração em relação à superfície (e não à normal).','Esquecer de converter a distância focal para metros ao calcular a vergência.','Achar que a frequência da luz muda ao refratar.'],
check:['calcular o índice de refração e usar a lei de Snell','explicar a reflexão total e a fibra óptica','relacionar lentes convergentes e divergentes à miopia e à hipermetropia','calcular a vergência de uma lente']
},

{ t:'Eletrostática',
d1:[
 ['Carga elétrica', 'Propriedade da matéria que gera atração e repulsão.', ['Prótons (+), elétrons (−) e nêutrons (sem carga)','**Quantização:** a carga é múltipla da carga elementar e = 1,6 × 10⁻¹⁹ C','Corpo neutro: cargas positivas e negativas em mesma quantidade','**Eletrizado positivamente:** perdeu elétrons. **Negativamente:** ganhou elétrons','Cargas de mesmo sinal se repelem; de sinais opostos se atraem'], null],
 ['Processos de eletrização', 'Como um corpo fica eletrizado.', ['**Atrito:** esfregar dois materiais diferentes (pente no cabelo, balão na blusa)','**Contato:** corpo eletrizado toca um neutro (mesmo sinal ao final)','**Indução:** aproximação sem contato; o corpo neutro é polarizado e, com ligação à terra, eletriza-se com sinal oposto','Princípio da conservação da carga: a soma das cargas se mantém'], 'Condutores deixam as cargas se moverem; isolantes não.'],
 ['Lei de Coulomb', 'Força entre cargas puntiformes.', ['**F = k · |Q₁ · Q₂| / d²** (k ≈ 9 × 10⁹ N·m²/C²)','A força é inversamente proporcional ao quadrado da distância','Dobrar uma carga dobra a força; dobrar a distância reduz a 1/4','As forças em cada carga têm mesma intensidade e sentidos opostos (3ª lei de Newton)'], null]
],
d2:[
 ['Campo elétrico', 'Região de influência de uma carga.', ['**E = F/q** (N/C); para carga puntiforme E = k·|Q|/d²','Linhas de campo saem das cargas positivas e chegam às negativas','Quanto mais próximas as linhas, mais intenso o campo','Carga positiva em um campo: força no sentido do campo; negativa: sentido oposto'], null],
 ['Potencial elétrico e energia', 'A energia armazenada pela posição das cargas.', ['**V = k·Q/d** (volt, V = J/C)','**Diferença de potencial (ddp ou tensão):** U = V_A − V_B','Cargas se movem espontaneamente de potencial maior para menor (cargas positivas)','**Trabalho:** τ = q·U'], null],
 ['Aplicações e fenômenos', 'Eletricidade estática no cotidiano.', ['**Raio:** descarga elétrica entre nuvens e solo; **para-raios** conduzem a carga à terra','**Gaiola de Faraday:** dentro de um condutor oco o campo é nulo (carro, avião, elevador protegem de raios)','**Faísca ao tocar a maçaneta** em dias secos','**Poder das pontas:** cargas se acumulam em pontas, por isso o para-raios tem ponta','**Filtros eletrostáticos e impressoras a laser**'], 'Dentro de um carro fechado durante uma tempestade, você está protegido (gaiola de Faraday).']
],
ex:[
 { q:'Duas cargas puntiformes idênticas se repelem com força F quando separadas por uma distância d. Se a distância for dobrada, a nova força será:', a:['F/4','F/2','F','2F','4F'], g:'A', c:'F é proporcional a 1/d². Com 2d, F fica dividida por 4: F/4.' },
 { q:'Um bastão neutro é atritado em um tecido e fica eletrizado positivamente. Isso ocorre porque o bastão:', a:['ganhou prótons','perdeu elétrons','ganhou elétrons','perdeu prótons','perdeu nêutrons'], g:'B', c:'Quem fica positivo perdeu elétrons (os prótons não se movimentam na eletrização).' }
],
pr:[
 { q:'Duas cargas de mesmo sinal, aproximadas:', a:['se atraem','se repelem','não interagem','se neutralizam','sempre se movem em linha reta'], g:'B', c:'Cargas de mesmo sinal se repelem; de sinais contrários, se atraem.' },
 { q:'Um corpo neutro ganha 5 × 10¹³ elétrons. Sua carga é: (e = 1,6 × 10⁻¹⁹ C)', a:['−8 µC','−0,8 µC','+8 µC','+0,8 µC','zero'], g:'A', c:'Q = n·e = 5 × 10¹³ × 1,6 × 10⁻¹⁹ = 8 × 10⁻⁶ C = 8 µC. Como ganhou elétrons, é negativa: −8 µC.' },
 { q:'Dentro de um carro com carroceria metálica atingido por um raio, as pessoas estão protegidas por causa:', a:['do isolamento da borracha dos pneus','da gaiola de Faraday','do para-brisa','do campo magnético da Terra','do poder das pontas'], g:'B', c:'A carroceria metálica forma uma gaiola de Faraday: a carga se distribui na superfície externa e o campo interno é nulo.' },
 { q:'Se a carga de uma das partículas for triplicada e a distância mantida, a força de Coulomb entre elas:', a:['fica três vezes menor','fica três vezes maior','fica nove vezes maior','não muda','fica seis vezes maior'], g:'B', c:'F é proporcional ao produto das cargas: triplicando uma carga, a força triplica.' }
],
erros:['Dizer que prótons se movem na eletrização (são os elétrons).','Esquecer o quadrado da distância na lei de Coulomb.','Confundir carga (C), potencial (V) e campo (N/C).','Achar que a gaiola de Faraday "atrai" os raios.'],
check:['explicar atrito, contato e indução','aplicar a lei de Coulomb','relacionar campo, potencial e trabalho','explicar para-raios e a gaiola de Faraday']
},

{ t:'Corrente elétrica e circuitos',
d1:[
 ['Corrente, tensão e resistência', 'Os três conceitos básicos da eletrodinâmica.', ['**Corrente (i):** fluxo ordenado de cargas; i = Q/Δt (ampère, A = C/s)','**Tensão (U ou ddp):** "pressão" que empurra as cargas (volt, V)','**Resistência (R):** oposição à passagem da corrente (ohm, Ω)','**1ª lei de Ohm: U = R · i**','Corrente contínua (pilhas) e alternada (tomadas)'], 'Analogia da água: tensão é a diferença de altura; corrente é a vazão; resistência é o estreitamento do cano.'],
 ['Resistores e a 2ª lei de Ohm', 'A resistência depende do material e da geometria.', ['**R = ρ · L/A** (ρ: resistividade; L: comprimento; A: área da seção)','Fio mais longo: mais resistência. Fio mais grosso: menos resistência','Cobre e alumínio: baixa resistividade (fios); tungstênio e níquel-cromo: alta (filamentos e chuveiros)','A resistência pode variar com a temperatura'], null],
 ['Associação em série', 'Resistores ligados um depois do outro.', ['**Corrente igual** em todos os resistores','**Tensões se somam:** U = U₁ + U₂ + ...','**Req = R₁ + R₂ + ...**','Se um queima, o circuito abre e todos param (antigas luzes de Natal)'], null]
],
d2:[
 ['Associação em paralelo', 'Resistores ligados aos mesmos dois pontos.', ['**Tensão igual** em todos os resistores','**Correntes se somam:** i = i₁ + i₂ + ...','**1/Req = 1/R₁ + 1/R₂ + ...**. Para dois resistores: Req = R₁·R₂/(R₁ + R₂)','Req é menor que o menor resistor','Instalações residenciais usam paralelo: cada aparelho funciona de forma independente'], 'Resistores iguais em paralelo: Req = R/n.'],
 ['Geradores, receptores e medidores', 'Peças de um circuito.', ['**Gerador (pilha, bateria):** fornece energia ao circuito','**Amperímetro:** mede corrente; ligado em série; resistência ideal nula','**Voltímetro:** mede tensão; ligado em paralelo; resistência ideal infinita','**Fusível e disjuntor:** protegem contra excesso de corrente','**Curto-circuito:** resistência muito baixa, corrente enorme'], null],
 ['Leis de Kirchhoff e circuitos mistos', 'Conectando os conceitos.', ['Em um nó, a soma das correntes que entram é igual à que saem','Em uma malha, a soma das ddps é zero','Circuitos mistos: reduza associações em série/paralelo, passo a passo','Desenhe o circuito e marque correntes e tensões antes de calcular'], null]
],
ex:[
 { q:'Um resistor de 20 Ω é ligado a uma bateria de 12 V. Qual a corrente que o atravessa?', a:['0,6 A','1,6 A','8 A','32 A','240 A'], g:'A', c:'U = R·i → i = U/R = 12/20 = 0,6 A.' },
 { q:'Dois resistores de 6 Ω e 3 Ω são ligados em paralelo. A resistência equivalente é:', a:['1 Ω','2 Ω','4,5 Ω','9 Ω','18 Ω'], g:'B', c:'Req = (6 × 3)/(6 + 3) = 18/9 = 2 Ω.' }
],
pr:[
 { q:'Três resistores de 10 Ω ligados em série formam uma resistência equivalente de:', a:['3,3 Ω','10 Ω','20 Ω','30 Ω','100 Ω'], g:'D', c:'Em série, as resistências se somam: 10 + 10 + 10 = 30 Ω.' },
 { q:'Em uma residência, os aparelhos são ligados em paralelo porque:', a:['assim a corrente é a mesma em todos','assim todos recebem a mesma tensão e funcionam de forma independente','assim a resistência total aumenta','assim a corrente diminui sempre','para economizar fios apenas'], g:'B', c:'Em paralelo, todos recebem a mesma tensão e, se um é desligado, os demais continuam funcionando.' },
 { q:'Uma corrente de 2 A circula por um fio por 30 s. A carga que passa pela seção do fio é:', a:['15 C','32 C','60 C','120 C','240 C'], g:'C', c:'Q = i·Δt = 2 × 30 = 60 C.' },
 { q:'Para medir a corrente em um resistor, o amperímetro deve ser ligado:', a:['em paralelo com o resistor','em série com o resistor','em série com a bateria apenas','no neutro','entre os polos da rede'], g:'B', c:'O amperímetro é ligado em série para que a corrente a ser medida passe por ele.' }
],
erros:['Ligar o voltímetro em série e o amperímetro em paralelo.','Somar resistências em paralelo como se fossem em série.','Esquecer que, em série, a corrente é a mesma e as tensões se somam.','Confundir corrente (A) com tensão (V).'],
check:['aplicar U = R·i','calcular resistências equivalentes em série e paralelo','explicar por que as casas usam ligação em paralelo','usar corretamente amperímetro e voltímetro']
},

{ t:'Potência elétrica e consumo',
d1:[
 ['Potência elétrica', 'Taxa de energia elétrica transformada por segundo.', ['**P = U · i**','Com a lei de Ohm: **P = R·i² = U²/R**','Unidade: watt (W); kW = 1.000 W','Exemplo: chuveiro de 220 V que consome 20 A tem P = 4.400 W'], 'Quanto maior a potência, maior a energia usada por unidade de tempo.'],
 ['Energia e consumo', 'A conta de luz cobra energia, não potência.', ['**E = P · Δt**','Unidade doméstica: **kWh** (quilowatt-hora)','Aparelho de 2.000 W ligado por 3 h: E = 2 kW × 3 h = 6 kWh','Custo = energia (kWh) × tarifa (R$/kWh)','1 kWh = 3,6 × 10⁶ J'], null],
 ['Efeito Joule', 'A passagem de corrente aquece o condutor.', ['Q = R·i²·Δt','Aplicações: chuveiro, ferro de passar, torradeira, lâmpada incandescente','Efeito indesejável: aquecimento de fios (risco de incêndio)','Fusível: um fio que derrete com corrente excessiva e abre o circuito'], null]
],
d2:[
 ['Como calcular o consumo da casa', 'Passos práticos.', ['1. Anote a potência (W) de cada aparelho','2. Converta para kW','3. Multiplique pelas horas de uso por dia e pelos dias do mês','4. Some e multiplique pela tarifa','Exemplo: geladeira de 150 W ligada 24 h/dia por 30 dias: 0,15 × 24 × 30 = 108 kWh'], 'Dicas do ENEM: banho quente e ar-condicionado costumam ser os maiores vilões.'],
 ['Eficiência energética', 'Menos energia para o mesmo resultado.', ['**Lâmpadas:** LED consome menos e dura mais que incandescente','**Selo Procel e etiqueta Inmetro (A, B, C...):** indicam eficiência','**Standby:** aparelhos em espera ainda consomem','**Horário de pico:** consumo e tarifas mais altos em certos períodos (bandeiras tarifárias)'], null],
 ['Instalações e segurança', 'Aplicação das fórmulas ao dimensionamento.', ['**Disjuntor:** deve suportar a corrente do circuito (i = P/U)','Chuveiro de 5.500 W em 220 V: i = 25 A','Fio de bitola adequada: fios finos esquentam','Tomadas com muitos aparelhos ("benjamins") sobrecarregam','Aterramento: protege contra choques'], null]
],
ex:[
 { q:'Um chuveiro de 5.000 W é utilizado por 20 minutos por dia durante 30 dias. Qual o consumo mensal, em kWh?', a:['10','25','50','100','150'], g:'C', c:'Tempo total = 20 min × 30 = 600 min = 10 h. E = 5 kW × 10 h = 50 kWh.' },
 { q:'Um aparelho de 1.100 W é ligado em uma tomada de 110 V. A corrente que o atravessa é de:', a:['1 A','5 A','10 A','100 A','121.000 A'], g:'C', c:'i = P/U = 1.100/110 = 10 A.' }
],
pr:[
 { q:'Uma lâmpada de 60 W fica acesa 5 horas por dia. O consumo em 30 dias é de:', a:['1,8 kWh','9 kWh','18 kWh','90 kWh','180 kWh'], g:'B', c:'E = 0,06 kW × 5 h × 30 = 9 kWh.' },
 { q:'Se a tarifa de energia é de R$ 0,80 por kWh, o custo de um consumo de 50 kWh é:', a:['R$ 4,00','R$ 16,00','R$ 40,00','R$ 62,50','R$ 400,00'], g:'C', c:'50 × 0,80 = R$ 40,00.' },
 { q:'Um resistor de 10 Ω é percorrido por uma corrente de 3 A. A potência dissipada é:', a:['13 W','30 W','60 W','90 W','300 W'], g:'D', c:'P = R·i² = 10 × 9 = 90 W.' },
 { q:'O fusível de uma instalação tem como função:', a:['aumentar a tensão','abrir o circuito quando a corrente excede o limite','reduzir a resistência','armazenar carga','transformar corrente alternada em contínua'], g:'B', c:'O fusível derrete e interrompe o circuito quando a corrente ultrapassa o valor de segurança.' }
],
erros:['Confundir potência (kW) com energia (kWh).','Esquecer de converter minutos em horas e watts em quilowatts.','Achar que o consumo depende só da potência (o tempo de uso também importa).','Escolher disjuntor ou fio menor do que a corrente exige.'],
check:['aplicar P = U·i, P = R·i² e P = U²/R','calcular o consumo em kWh e o custo','explicar o efeito Joule','interpretar etiquetas de eficiência e dimensionar disjuntores']
}
];
