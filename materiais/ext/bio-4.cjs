/* Biologia: temas 16 a 20 */
module.exports = [
{ t:'Vírus e doenças virais',
d1:[
 ['Características dos vírus', 'Acelulares.', ['Parasitas intracelulares obrigatórios','Estrutura: material genético (DNA ou RNA) e capsídeo de proteína; alguns têm envelope','Não têm metabolismo próprio','Reproduzem-se usando a célula hospedeira','Bacteriófagos infectam bactérias'], null],
 ['Multiplicação', 'Ciclo.', ['Adsorção, penetração, replicação, montagem, liberação','**Ciclo lítico:** destrói a célula','**Ciclo lisogênico:** material genético integrado ao DNA da célula','Retrovírus (HIV): RNA → DNA com a transcriptase reversa'], 'HIV ataca linfócitos T CD4.'],
 ['Principais doenças', 'Exemplos.', ['**Dengue, zika e chikungunya:** Aedes aegypti','**Febre amarela, raiva, sarampo, caxumba, poliomielite**','**Hepatites A, B e C**','**HPV:** câncer de colo do útero','**Influenza, COVID-19**','**AIDS:** HIV'], null]
],
d2:[
 ['Transmissão e prevenção', 'Formas.', ['Via vetor (mosquito), respiratória, sexual, sanguínea, fecal-oral','**Dengue:** eliminar criadouros de água parada','**Vacinas:** sarampo, febre amarela, HPV, hepatite B, COVID-19','**AIDS:** preservativo, PrEP, tratamento antirretroviral'], null],
 ['Tratamento', 'Limites.', ['Antibióticos não atuam sobre vírus','Antivirais específicos (HIV, hepatite C)','Vacinas como principal arma','Epidemia, pandemia e endemia'], null],
 ['Vírus e biotecnologia', 'Usos.', ['Vetores de terapia gênica','Produção de vacinas','Bacteriófagos como terapia alternativa','Vírus oncolíticos'], null]
],
ex:[
 { q:'Os antibióticos NÃO são eficazes contra infecções virais porque os vírus:', a:['são grandes demais','não possuem metabolismo próprio nem parede celular','vivem fora das células','têm núcleo','são imunes'], g:'B', c:'Os antibióticos atuam sobre estruturas e processos bacterianos.' },
 { q:'A principal medida de prevenção da dengue é:', a:['tomar antibióticos','eliminar água parada','evitar frutas','usar sal','lavar as mãos apenas'], g:'B', c:'Combate aos criadouros do Aedes.' }
],
pr:[
 { q:'O HIV é um retrovírus porque:', a:['tem DNA','converte RNA em DNA com transcriptase reversa','infecta bactérias','é uma bactéria','não tem material genético'], g:'B', c:'Fluxo RNA → DNA.' },
 { q:'Qual doença é transmitida pelo Aedes aegypti?', a:['sarampo','dengue','hepatite A','tétano','tuberculose'], g:'B', c:'Também zika e chikungunya.' },
 { q:'O HPV está associado ao câncer de:', a:['pulmão','colo do útero','fígado apenas','estômago','pele apenas'], g:'B', c:'Vacina disponível.' },
 { q:'Os vírus são parasitas intracelulares obrigatórios porque:', a:['não têm DNA','dependem da maquinaria da célula hospedeira','são plantas','não existem fora de células','têm parede celular'], g:'B', c:'Não se reproduzem sozinhos.' }
],
erros:['Dizer que vírus são seres unicelulares.','Indicar antibiótico para virose.','Confundir pandemia e epidemia.','Achar que a vacina trata a doença já instalada.'],
check:['descrever a estrutura viral','explicar o ciclo de multiplicação','listar viroses e prevenção','distinguir vírus e bactérias']
},

{ t:'Bactérias, protozoários e verminoses',
d1:[
 ['Bactérias', 'Procariontes.', ['Formas: cocos, bacilos, espirilos, vibriões','Reprodução assexuada por divisão binária; troca de genes por conjugação','Importantes na decomposição, fermentação e fixação de nitrogênio','Antibióticos matam ou inibem bactérias'], null],
 ['Doenças bacterianas', 'Exemplos.', ['**Tuberculose, hanseníase, tétano, cólera, leptospirose, difteria, coqueluche, sífilis, meningite bacteriana**','Água e alimentos contaminados: cólera, febre tifoide','Leptospirose: urina de rato em enchentes','Resistência bacteriana por uso incorreto de antibióticos'], 'Cumprir todo o tratamento evita resistência.'],
 ['Protozoários', 'Unicelulares eucariontes.', ['**Malária (Plasmodium, Anopheles)**','**Doença de Chagas (Trypanosoma cruzi, barbeiro)**','**Leishmaniose (flebotomíneo)**','**Toxoplasmose (gatos)**','**Amebíase e giardíase (água contaminada)**'], null]
],
d2:[
 ['Verminoses', 'Platelmintos e nematódeos.', ['**Esquistossomose:** Schistosoma e caramujo','**Teníase e cisticercose:** carne mal cozida','**Ascaridíase (lombriga), ancilostomose (amarelão), oxiurose, filariose (elefantíase)**','Prevenção: saneamento, higiene, calçados'], null],
 ['Saneamento básico', 'Chave da saúde pública.', ['Água tratada, esgoto, coleta de lixo e drenagem','Reduz doenças como cólera, diarreias e verminoses','Saneamento é direito e fator econômico'], null],
 ['Prevenção geral', 'Hábitos.', ['Higiene das mãos e dos alimentos','Vacinação','Controle de vetores','Uso racional de antibióticos'], null]
],
ex:[
 { q:'A doença de Chagas é transmitida:', a:['pela água','pelas fezes do barbeiro','pela picada do Anopheles','pelo ar','por contato com gatos'], g:'B', c:'O parasita penetra pela ferida da picada ou mucosas.' },
 { q:'A principal medida contra a esquistossomose é:', a:['vacina','saneamento básico e controle do caramujo','antibióticos','repelente','máscara'], g:'B', c:'Evita o contato com água contaminada.' }
],
pr:[
 { q:'A malária é causada por:', a:['vírus','bactéria','protozoário','verme','fungo'], g:'C', c:'Plasmodium.' },
 { q:'A leptospirose está associada a:', a:['mosquitos','enchentes e urina de roedores','carne mal cozida','ar contaminado','gatos'], g:'B', c:'Bactéria Leptospira.' },
 { q:'A teníase é adquirida por:', a:['carne de boi ou porco crua ou mal cozida','água salgada','ar poluído','picada','vento'], g:'A', c:'Ingestão de larvas.' },
 { q:'O uso indevido de antibióticos provoca:', a:['imunidade','resistência bacteriana','cura mais rápida','fortalecimento do corpo','mutação humana'], g:'B', c:'Seleção de bactérias resistentes.' }
],
erros:['Confundir vetor e agente causador.','Dizer que antibiótico serve para qualquer infecção.','Esquecer do ciclo do parasita (hospedeiros).','Ignorar o papel do saneamento.'],
check:['relacionar doença, agente e vetor','citar prevenção de verminoses','explicar resistência bacteriana','justificar a importância do saneamento']
},

{ t:'Sistema imunológico e vacinas',
d1:[
 ['Barreiras de defesa', 'Imunidade inata.', ['**Barreiras físicas e químicas:** pele, muco, lágrimas, ácido gástrico','**Fagócitos (macrófagos, neutrófilos), células NK, inflamação, febre**','Resposta rápida e inespecífica'], null],
 ['Imunidade adaptativa', 'Específica e com memória.', ['**Linfócitos B:** produzem anticorpos (resposta humoral)','**Linfócitos T:** ataque a células infectadas (T citotóxicos) e coordenação (T auxiliares)','**Antígeno:** estimula a resposta; **anticorpo:** proteína específica','Células de memória: resposta rápida em novo contato'], 'A memória imunológica explica por que não se tem catapora duas vezes.'],
 ['Vacinas e soros', 'Imunização.', ['**Vacina:** antígeno inativado, atenuado ou RNAm; imunidade ativa e duradoura (prevenção)','**Soro:** anticorpos prontos; imunidade passiva e temporária (tratamento)','Ex.: soro antiofídico e antitetânico','Vacina também protege a comunidade (imunidade de rebanho)'], null]
],
d2:[
 ['Resposta primária e secundária', 'Gráficos.', ['Primeiro contato: resposta lenta e fraca','Segundo contato: rápida, intensa e duradoura','Reforços de vacinas reforçam a memória'], null],
 ['Disfunções', 'Problemas imunes.', ['**Alergias:** reação exagerada a antígenos inofensivos (histamina)','**Autoimunes:** ataque ao próprio corpo (lúpus, diabetes tipo 1)','**Imunodeficiências:** AIDS','**Rejeição** em transplantes'], null],
 ['Política de vacinação', 'Saúde pública.', ['PNI (Programa Nacional de Imunizações) no SUS','Queda da cobertura vacinal traz risco de volta de doenças como sarampo e poliomielite','Calendário vacinal','Fake news prejudicam a saúde'], null]
],
ex:[
 { q:'A diferença entre vacina e soro é que:', a:['a vacina contém anticorpos prontos','o soro estimula produção de anticorpos','a vacina estimula a memória imunológica e o soro fornece anticorpos prontos','ambos são iguais','o soro é preventivo e duradouro'], g:'C', c:'Imunidade ativa × passiva.' },
 { q:'Quem produz anticorpos?', a:['linfócitos T','linfócitos B (plasmócitos)','hemácias','plaquetas','neutrófilos'], g:'B', c:'Células plasmáticas derivadas dos linfócitos B.' }
],
pr:[
 { q:'Após picada de cobra venenosa, o tratamento é:', a:['vacina','soro antiofídico','antibiótico','antialérgico','vitamina'], g:'B', c:'Anticorpos prontos.' },
 { q:'A segunda exposição ao antígeno gera resposta:', a:['mais lenta','mais rápida e intensa','igual à primeira','nula','somente inata'], g:'B', c:'Células de memória.' },
 { q:'A imunidade de rebanho ocorre quando:', a:['ninguém é vacinado','grande parte da população é imune','só crianças são vacinadas','só idosos','nenhuma pessoa adoece'], g:'B', c:'Reduz a circulação do agente.' },
 { q:'As alergias envolvem a liberação de:', a:['insulina','histamina','hemoglobina','adrenalina apenas','glicose'], g:'B', c:'Causa coceira e inchaço.' }
],
erros:['Trocar vacina e soro.','Dizer que vacina cura.','Confundir antígeno e anticorpo.','Esquecer das células de memória.'],
check:['diferenciar imunidade inata e adaptativa','explicar vacina e soro','descrever memória imunológica','citar disfunções do sistema imune']
},

{ t:'Sistema digestório e nutrição',
d1:[
 ['Trajeto do alimento', 'Órgãos.', ['Boca (amilase salivar), faringe, esôfago','Estômago (suco gástrico: HCl e pepsina)','Intestino delgado (duodeno, jejuno, íleo): digestão final e absorção','Intestino grosso: absorção de água e formação das fezes','Reto e ânus'], null],
 ['Glândulas anexas', 'Papel.', ['**Glândulas salivares:** amilase','**Fígado:** bile (emulsifica gorduras), metabolismo, armazena glicogênio','**Pâncreas:** suco pancreático (tripsina, lipase, amilase) e insulina/glucagon'], 'Bile não é enzima: apenas emulsiona.'],
 ['Nutrientes', 'Funções.', ['**Carboidratos:** energia','**Proteínas:** construção e reparo','**Lipídios:** reserva e energia concentrada','**Vitaminas e sais minerais:** regulação','**Água e fibras**'], null]
],
d2:[
 ['Enzimas e digestão', 'Quem digere o quê.', ['Amilase: amido','Pepsina: proteínas (meio ácido)','Lipase: lipídios','Tripsina: proteínas no intestino','Absorção das vilosidades e microvilosidades'], null],
 ['Alimentação equilibrada', 'Saúde.', ['Pirâmide e guia alimentar','Ultraprocessados em excesso: obesidade, diabetes, hipertensão','Desnutrição e obesidade convivem no mundo','Importância das fibras e da hidratação'], null],
 ['Doenças e distúrbios', 'Digestivos e nutricionais.', ['Gastrite e úlcera (Helicobacter pylori)','Intolerância à lactose','Doença celíaca (glúten)','Anemia ferropriva, escorbuto (vit. C), raquitismo (vit. D), beribéri (B1)','Bulimia e anorexia'], null]
],
ex:[
 { q:'A principal função da bile é:', a:['digerir proteínas','emulsificar gorduras','digerir amido','produzir insulina','absorver água'], g:'B', c:'Facilita a ação da lipase.' },
 { q:'A maior parte da absorção de nutrientes ocorre:', a:['no estômago','no esôfago','no intestino delgado','no intestino grosso','na boca'], g:'C', c:'Vilosidades ampliam a superfície.' }
],
pr:[
 { q:'A amilase salivar começa a digestão de:', a:['proteínas','lipídios','carboidratos','vitaminas','sais'], g:'C', c:'Amido.' },
 { q:'A falta de vitamina C causa:', a:['raquitismo','escorbuto','beribéri','anemia','cegueira noturna'], g:'B', c:'Gengivas sangrantes.' },
 { q:'O pH baixo do estômago é devido a:', a:['bile','HCl','insulina','amilase','lipase'], g:'B', c:'Ácido clorídrico.' },
 { q:'O intestino grosso absorve principalmente:', a:['proteínas','água e sais','gorduras','vitaminas apenas','glicose'], g:'B', c:'Compacta o bolo fecal.' }
],
erros:['Dizer que a bile contém enzimas.','Achar que a digestão de proteínas começa na boca.','Confundir vitaminas e suas carências.','Esquecer do papel do pâncreas.'],
check:['seguir o trajeto do alimento','associar enzimas e substratos','relacionar carências e doenças','planejar uma alimentação equilibrada']
},

{ t:'Sistemas circulatório e respiratório',
d1:[
 ['Coração e circulação', 'Bomba dupla.', ['4 câmaras: 2 átrios e 2 ventrículos','**Circulação pulmonar (pequena):** coração → pulmões → coração (sangue se oxigena)','**Circulação sistêmica (grande):** coração → corpo → coração','Artérias levam sangue do coração; veias o trazem','Capilares: trocas com os tecidos'], 'Circulação dupla e completa nos mamíferos e aves.'],
 ['Sangue', 'Componentes.', ['**Plasma:** água, proteínas, sais','**Hemácias:** hemoglobina transporta O₂','**Leucócitos:** defesa','**Plaquetas:** coagulação','Pressão arterial, batimentos'], null],
 ['Sistema respiratório', 'Trocas gasosas.', ['Nariz, faringe, laringe, traqueia, brônquios, bronquíolos, alvéolos','Alvéolos: hematose (troca de O₂ e CO₂)','Diafragma e músculos intercostais: inspiração e expiração','Controle pelo bulbo, sensível ao CO₂'], null]
],
d2:[
 ['Transporte de gases', 'Detalhes.', ['O₂ ligado à hemoglobina (oxi-hemoglobina)','CO₂ transportado principalmente como bicarbonato','CO liga-se à hemoglobina com maior afinidade que o O₂ (intoxicação)','Altitude: mais hemácias para compensar o O₂ baixo'], null],
 ['Doenças', 'Principais.', ['Hipertensão, aterosclerose, infarto, AVC','Anemia, leucemia','Asma, bronquite, enfisema, pneumonia, tuberculose','Tabagismo: principal causa evitável de doenças respiratórias e cardíacas'], null],
 ['Prevenção e hábitos', 'Cuidados.', ['Atividade física','Alimentação com baixo sódio e gordura saturada','Não fumar','Controle de pressão e colesterol','Poluição e saúde respiratória'], null]
],
ex:[
 { q:'As trocas gasosas ocorrem nos:', a:['brônquios','alvéolos','traqueia','bronquíolos apenas','pulmões inteiros por igual'], g:'B', c:'Paredes finas e vascularizadas.' },
 { q:'O sangue oxigenado chega ao coração pelas:', a:['veias cavas','veias pulmonares','artérias pulmonares','aorta','artérias coronárias'], g:'B', c:'Do pulmão ao átrio esquerdo.' }
],
pr:[
 { q:'A molécula que transporta o O₂ nas hemácias é a:', a:['insulina','hemoglobina','mioglobina','queratina','amilase'], g:'B', c:'Contém ferro.' },
 { q:'O músculo principal da respiração é o:', a:['bíceps','diafragma','trapézio','glúteo','sartório'], g:'B', c:'Contrai na inspiração.' },
 { q:'Uma pessoa com baixa quantidade de hemácias tem:', a:['leucemia','anemia','diabetes','hipertensão','asma'], g:'B', c:'Falta de transporte de O₂.' },
 { q:'O monóxido de carbono é perigoso porque:', a:['aumenta o O₂','compete com o O₂ pela hemoglobina','gera mais hemácias','é um nutriente','dilata os alvéolos'], g:'B', c:'Forma carboxi-hemoglobina estável.' }
],
erros:['Dizer que toda artéria transporta sangue oxigenado (a pulmonar não).','Esquecer que os alvéolos fazem a hematose.','Confundir plasma e soro.','Achar que o coração mistura sangue venoso e arterial em humanos.'],
check:['traçar a circulação pulmonar e sistêmica','descrever o sangue e suas células','explicar a mecânica respiratória','relacionar hábitos e doenças']
}
];
