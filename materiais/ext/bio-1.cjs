/* Biologia: temas 1 a 5 */
module.exports = [
{ t:'Características dos seres vivos',
d1:[
 ['O que define a vida', 'Todos os seres vivos compartilham um conjunto de características.', ['**Organização celular:** são formados por uma ou mais células','**Metabolismo:** conjunto de reações químicas (anabolismo e catabolismo)','**Reprodução:** geram descendentes e passam o material genético','**Hereditariedade e variabilidade:** DNA transmitido, com mutações','**Reação a estímulos (irritabilidade)**','**Homeostase:** manutenção do equilíbrio interno','**Crescimento e desenvolvimento**','**Evolução** das populações ao longo do tempo'], 'Vírus não têm células nem metabolismo próprio: por isso são discutidos como "limite da vida".'],
 ['Composição química', 'Substâncias inorgânicas e orgânicas.', ['**Água:** solvente universal, 60 a 70% do corpo humano','**Sais minerais:** íons, ossos, impulso nervoso','**Carboidratos:** energia imediata (glicose) e estrutura (celulose)','**Lipídios:** reserva, membranas, hormônios','**Proteínas:** enzimas, estrutura, defesa','**Ácidos nucleicos:** DNA e RNA','**Vitaminas:** cofatores essenciais'], null],
 ['Níveis de organização', 'Do simples ao complexo.', ['Átomo → molécula → organela → célula → tecido → órgão → sistema → organismo','Depois: população → comunidade → ecossistema → bioma → biosfera'], null]
],
d2:[
 ['Classificação dos seres vivos', 'Taxonomia: organiza a diversidade.', ['Categorias: domínio, reino, filo, classe, ordem, família, gênero, espécie','Nome científico: binomial em latim (Homo sapiens)','**Três domínios:** Bacteria, Archaea e Eukarya','Reinos eucariontes: Protista, Fungi, Plantae, Animalia'], null],
 ['Células procariontes e eucariontes', 'Diferenças básicas.', ['**Procarionte:** sem núcleo organizado, sem organelas membranosas (bactérias, arqueias)','**Eucarionte:** núcleo delimitado por carioteca e organelas (animais, plantas, fungos, protistas)','**Autótrofos** produzem seu alimento; **heterótrofos** não','Seres unicelulares e pluricelulares'], null],
 ['Origem da vida', 'Hipóteses.', ['**Geração espontânea:** refutada por Redi e Pasteur','**Biogênese:** todo ser vivo vem de outro','**Evolução química (Oparin e Haldane):** moléculas orgânicas surgiram na Terra primitiva','**Experimento de Miller e Urey:** produziu aminoácidos em laboratório','**Panspermia:** vida teria vindo do espaço'], null]
],
ex:[
 { q:'O experimento de Pasteur, com frascos de pescoço de cisne, contribuiu para refutar a:', a:['biogênese','evolução química','geração espontânea','panspermia','seleção natural'], g:'C', c:'Mostrou que os microrganismos vêm de outros microrganismos do ar, e não surgem espontaneamente.' },
 { q:'Qual característica diferencia uma célula eucarionte de uma procarionte?', a:['presença de DNA','presença de ribossomos','núcleo delimitado por membrana','presença de membrana plasmática','presença de citoplasma'], g:'C', c:'Eucariontes têm material genético envolto pela carioteca.' }
],
pr:[
 { q:'A manutenção da temperatura corporal constante é um exemplo de:', a:['reprodução','homeostase','fotossíntese','hereditariedade','mutação'], g:'B', c:'Equilíbrio interno.' },
 { q:'Seres capazes de produzir o próprio alimento são chamados de:', a:['heterótrofos','autótrofos','decompositores','parasitas','consumidores'], g:'B', c:'Fotossíntese ou quimiossíntese.' },
 { q:'Na nomenclatura científica, o nome de uma espécie é formado por:', a:['família e ordem','gênero e epíteto específico','reino e filo','classe e ordem','apenas o gênero'], g:'B', c:'Ex.: Homo sapiens.' },
 { q:'O principal solvente nos seres vivos é a:', a:['proteína','água','glicose','gordura','vitamina'], g:'B', c:'Meio das reações químicas.' }
],
erros:['Achar que vírus são células.','Confundir biogênese com geração espontânea.','Escrever nome científico sem destaque (deve ser em itálico ou sublinhado).','Confundir autótrofo com produtor apenas de plantas.'],
check:['listar as características da vida','diferenciar procarionte e eucarionte','explicar o experimento de Pasteur','citar os níveis de organização']
},

{ t:'Citologia: a célula',
d1:[
 ['Teoria celular', 'Princípios.', ['Todos os seres vivos são formados por células','A célula é a unidade básica estrutural e funcional','Toda célula vem de outra célula preexistente','Hooke (1665) observou a cortiça e criou o termo "célula"'], null],
 ['Organelas', 'Funções.', ['**Núcleo:** guarda o DNA e controla a célula','**Mitocôndria:** respiração celular, produz ATP','**Cloroplasto:** fotossíntese (plantas e algas)','**Retículo endoplasmático rugoso:** síntese de proteínas; **liso:** lipídios e desintoxicação','**Complexo golgiense:** modifica e empacota proteínas','**Lisossomos:** digestão intracelular','**Ribossomos:** síntese de proteínas','**Vacúolo, centríolos, citoesqueleto**'], 'Mitocôndria e cloroplasto têm DNA próprio: teoria da endossimbiose.'],
 ['Célula animal e vegetal', 'Diferenças.', ['**Vegetal:** parede celular (celulose), cloroplastos, vacúolo grande','**Animal:** centríolos, lisossomos mais evidentes, sem parede','Fungos: parede de quitina','Bactérias: parede de peptideoglicano'], null]
],
d2:[
 ['Núcleo e cromossomos', 'Estrutura.', ['Carioteca com poros','Cromatina (descondensada) e cromossomos (condensados na divisão)','Nucléolo: produz ribossomos','Cada espécie tem número próprio de cromossomos (humano: 46)'], null],
 ['Endossimbiose', 'Origem das organelas.', ['Proposta por Lynn Margulis','Procariontes teriam sido englobados por outras células','Evidências: DNA próprio, ribossomos próprios, duas membranas, reprodução independente'], null],
 ['Tecidos e especialização', 'Células diferenciadas.', ['Células-tronco originam várias células','Tecido epitelial, conjuntivo, muscular e nervoso','Especialização aumenta a eficiência','Câncer: divisão celular descontrolada'], null]
],
ex:[
 { q:'A organela responsável pela produção da maior parte do ATP na célula é a:', a:['lisossomo','mitocôndria','complexo golgiense','ribossomo','vacúolo'], g:'B', c:'Na respiração celular aeróbia.' },
 { q:'Qual estrutura está presente na célula vegetal e ausente na animal?', a:['membrana plasmática','núcleo','parede celular de celulose','ribossomos','mitocôndrias'], g:'C', c:'Também há cloroplastos.' }
],
pr:[
 { q:'A síntese de proteínas ocorre nos:', a:['lisossomos','ribossomos','centríolos','vacúolos','peroxissomos'], g:'B', c:'Local da tradução.' },
 { q:'Os lisossomos atuam na:', a:['fotossíntese','digestão intracelular','síntese de DNA','divisão celular','respiração'], g:'B', c:'Contêm enzimas digestivas.' },
 { q:'Quem propôs a teoria da endossimbiose?', a:['Darwin','Mendel','Lynn Margulis','Pasteur','Hooke'], g:'C', c:'Explicação para mitocôndrias e cloroplastos.' },
 { q:'O nucléolo está relacionado à produção de:', a:['lipídios','ribossomos','ATP','amido','água'], g:'B', c:'RNA ribossômico.' }
],
erros:['Dizer que bactérias têm mitocôndrias.','Confundir RE rugoso e liso.','Atribuir fotossíntese a células animais.','Achar que o complexo golgiense produz energia.'],
check:['listar as organelas e suas funções','diferenciar célula animal e vegetal','explicar a endossimbiose','enunciar a teoria celular']
},

{ t:'Membrana e transporte celular',
d1:[
 ['Membrana plasmática', 'Modelo do mosaico fluido.', ['Bicamada de fosfolipídios com proteínas','Seletiva e semipermeável','Glicocálix: reconhecimento celular','Colesterol (em animais) regula a fluidez'], null],
 ['Transporte passivo', 'Sem gasto de energia, a favor do gradiente.', ['**Difusão simples:** gases, água, lipossolúveis','**Difusão facilitada:** por proteínas transportadoras','**Osmose:** passagem de água por membrana semipermeável, do meio hipotônico para o hipertônico'], 'Hipotônico: menos soluto; hipertônico: mais soluto.'],
 ['Transporte ativo', 'Contra o gradiente, gasta ATP.', ['**Bomba de sódio e potássio:** 3 Na⁺ saem e 2 K⁺ entram','Essencial no impulso nervoso','Mantém a concentração iônica'], null]
],
d2:[
 ['Transporte em massa', 'Para grandes partículas.', ['**Endocitose:** fagocitose (sólidos) e pinocitose (líquidos)','**Exocitose:** eliminação de substâncias','Gasta ATP'], null],
 ['Osmose em células', 'Efeitos.', ['Animal em meio hipotônico: incha e pode lisar','Animal em meio hipertônico: murcha (crenação)','Vegetal em hipotônico: fica túrgida (a parede protege)','Vegetal em hipertônico: plasmólise'], null],
 ['Aplicações', 'Cotidiano.', ['Salgar carne e frutas conserva (desidratação dos microrganismos)','Soro fisiológico é isotônico','Água do mar não mata a sede','Alface murcha fica crocante em água'], null]
],
ex:[
 { q:'Uma hemácia colocada em água destilada tende a:', a:['murchar','inchar e romper','permanecer igual','dividir-se','produzir ATP'], g:'B', c:'Meio hipotônico: entra água.' },
 { q:'O transporte ativo difere do passivo por:', a:['ocorrer a favor do gradiente','não precisar de proteínas','gastar ATP e ir contra o gradiente','ocorrer só em vegetais','depender de osmose'], g:'C', c:'Exige energia.' }
],
pr:[
 { q:'A fagocitose é um tipo de:', a:['difusão simples','osmose','endocitose','exocitose','transporte passivo'], g:'C', c:'Englobamento de partículas sólidas.' },
 { q:'A bomba de sódio e potássio é um exemplo de transporte:', a:['passivo','ativo','por osmose','por difusão facilitada','nenhum'], g:'B', c:'Consome ATP.' },
 { q:'Carne salgada se conserva porque o sal:', a:['aquece','desidrata microrganismos por osmose','aumenta o pH','produz antibióticos','estimula a fermentação'], g:'B', c:'Meio hipertônico.' },
 { q:'Em meio isotônico, a célula:', a:['incha','murcha','mantém o volume','explode','congela'], g:'C', c:'Concentrações iguais.' }
],
erros:['Inverter hipotônico e hipertônico.','Dizer que osmose é passagem de soluto.','Achar que difusão facilitada gasta ATP.','Esquecer que a membrana é seletiva.'],
check:['descrever o modelo do mosaico fluido','diferenciar transporte passivo e ativo','prever efeitos da osmose','citar endocitose e exocitose']
},

{ t:'Metabolismo energético',
d1:[
 ['ATP', 'Moeda energética.', ['Adenosina trifosfato','Libera energia ao perder um fosfato (ATP → ADP + Pi)','Produzido na respiração e na fotossíntese','Usado em contração, transporte ativo e síntese'], null],
 ['Fotossíntese', 'Produz matéria orgânica com luz.', ['6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂','Ocorre nos cloroplastos','**Fase clara (tilacoides):** luz, água quebrada, libera O₂, produz ATP e NADPH','**Fase escura (estroma, ciclo de Calvin):** fixa CO₂ e produz glicose','Clorofila absorve vermelho e azul, reflete o verde'], 'O oxigênio liberado vem da água.'],
 ['Respiração celular', 'Quebra de glicose para obter ATP.', ['C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP','**Glicólise (citoplasma):** 2 ATP','**Ciclo de Krebs (matriz mitocondrial)**','**Cadeia respiratória (cristas):** maior produção de ATP; O₂ é o aceptor final','Saldo total: cerca de 30 a 32 ATP por glicose'], null]
],
d2:[
 ['Fermentação', 'Sem oxigênio.', ['**Alcoólica:** leveduras; glicose → etanol + CO₂ (pão, cerveja, etanol)','**Lática:** bactérias e músculos; glicose → ácido lático (iogurte, queijo, cãibras)','**Acética:** vinagre','Rende apenas 2 ATP por glicose'], null],
 ['Quimiossíntese', 'Sem luz.', ['Bactérias oxidam compostos inorgânicos (enxofre, ferro, amônia)','Importante em ecossistemas profundos e no ciclo do nitrogênio (nitrificação)'], null],
 ['Fatores e ecologia', 'Influências.', ['Luz, CO₂, temperatura e água afetam a fotossíntese','Ponto de compensação fótico: fotossíntese = respiração','Fitoplâncton produz boa parte do O₂ do planeta','Combustíveis fósseis vêm de matéria orgânica antiga'], null]
],
ex:[
 { q:'A etapa da respiração celular que mais produz ATP é a:', a:['glicólise','fermentação','cadeia respiratória','ciclo de Calvin','fase clara'], g:'C', c:'Fosforilação oxidativa nas cristas mitocondriais.' },
 { q:'O gás oxigênio liberado na fotossíntese tem origem na:', a:['glicose','água','clorofila','gás carbônico','amido'], g:'B', c:'Fotólise da água.' }
],
pr:[
 { q:'A fermentação alcoólica é realizada principalmente por:', a:['bactérias lácticas','leveduras','vírus','plantas','algas'], g:'B', c:'Saccharomyces.' },
 { q:'A cãibra após exercício intenso está associada ao acúmulo de:', a:['etanol','ácido lático','glicose','amido','oxigênio'], g:'B', c:'Fermentação lática.' },
 { q:'A glicólise ocorre no:', a:['núcleo','citoplasma','cloroplasto','lisossomo','ribossomo'], g:'B', c:'Não depende de organela.' },
 { q:'A clorofila reflete predominantemente a cor:', a:['vermelha','azul','verde','amarela','violeta'], g:'C', c:'Por isso as folhas parecem verdes.' }
],
erros:['Dizer que respiração só ocorre em animais.','Confundir fotossíntese e respiração (reações inversas).','Achar que a fermentação consome oxigênio.','Esquecer a origem do O₂ liberado.'],
check:['escrever as equações da fotossíntese e respiração','localizar as etapas nas organelas','diferenciar fermentações','relacionar ATP e energia']
},

{ t:'Ácidos nucleicos e síntese de proteínas',
d1:[
 ['DNA e RNA', 'Diferenças.', ['**DNA:** pentose desoxirribose, dupla hélice, bases A, T, C, G','**RNA:** ribose, fita simples, bases A, U, C, G','**Pareamento:** A-T (A-U no RNA) e C-G','Nucleotídeo = fosfato + pentose + base nitrogenada','Regra de Chargaff: A = T e C = G no DNA'], null],
 ['Replicação do DNA', 'Duplicação.', ['Semiconservativa: cada nova molécula tem uma fita antiga e uma nova','Enzimas: helicase (abre), DNA polimerase (sintetiza)','Ocorre antes da divisão celular'], null],
 ['Transcrição e tradução', 'Do gene à proteína.', ['**Transcrição (núcleo):** DNA → RNA mensageiro','**Tradução (ribossomos):** RNAm → proteína','**Código genético:** códons de 3 bases codificam aminoácidos','**RNAt** traz os aminoácidos (anticódon)','Códon de início AUG; de parada: UAA, UAG, UGA'], 'Dogma central: DNA → RNA → proteína.']
],
d2:[
 ['Mutações', 'Alterações no DNA.', ['Podem ser gênicas (troca de bases) ou cromossômicas','Fatores mutagênicos: radiação UV, raios X, substâncias químicas','Podem ser neutras, prejudiciais ou benéficas','Mutação em células germinativas é hereditária'], null],
 ['Código genético', 'Características.', ['Universal','Degenerado: mais de um códon para o mesmo aminoácido','Não ambíguo','64 códons para 20 aminoácidos'], null],
 ['Regulação e aplicações', 'Importância.', ['Genes são ligados ou desligados conforme a célula','Células diferentes expressam genes diferentes com o mesmo DNA','Testes de DNA: paternidade, forense','Terapia gênica, CRISPR'], null]
],
ex:[
 { q:'Um trecho de DNA tem a sequência ATGC. O RNAm transcrito será:', a:['TACG','UACG','ATGC','UAGC','TAGC'], g:'B', c:'A→U, T→A, G→C, C→G.' },
 { q:'A tradução ocorre:', a:['no núcleo, na transcrição','nos ribossomos','no complexo golgiense','na mitocôndria apenas','na parede celular'], g:'B', c:'Síntese da cadeia polipeptídica.' }
],
pr:[
 { q:'A base nitrogenada exclusiva do RNA é:', a:['timina','uracila','adenina','citosina','guanina'], g:'B', c:'Substitui a timina.' },
 { q:'A replicação do DNA é dita semiconservativa porque:', a:['conserva as duas fitas antigas','cada molécula nova tem uma fita antiga e uma nova','não conserva nada','só uma fita é copiada','ocorre em ribossomos'], g:'B', c:'Experimento de Meselson-Stahl.' },
 { q:'O códon AUG corresponde:', a:['ao fim da tradução','ao início da tradução','a uma mutação','ao DNA','a uma enzima'], g:'B', c:'Codifica metionina.' },
 { q:'Radiações como o UV podem causar:', a:['mutações','fotossíntese','osmose','respiração','replicação mais rápida'], g:'A', c:'Danificam o DNA.' }
],
erros:['Colocar timina no RNA.','Confundir transcrição com tradução.','Achar que toda mutação é prejudicial.','Esquecer que o código é redundante.'],
check:['diferenciar DNA e RNA','transcrever e traduzir sequências simples','explicar a replicação semiconservativa','definir mutação']
}
];
