/* Biologia: temas 21 a 25 */
module.exports = [
{ t:'Sistemas nervoso e endócrino',
d1:[
 ['Neurônio e impulso nervoso', 'Unidade do sistema nervoso.', ['Dendritos recebem, corpo celular integra, axônio conduz','Bainha de mielina acelera o impulso','Impulso: variação de cargas elétricas na membrana (Na⁺ e K⁺)','**Sinapse:** passagem do estímulo por neurotransmissores (acetilcolina, dopamina, serotonina)'], null],
 ['Divisões do sistema nervoso', 'Organização.', ['**Central (SNC):** encéfalo e medula espinhal','**Periférico (SNP):** nervos e gânglios','**Autônomo:** simpático (luta ou fuga) e parassimpático (repouso e digestão)','Encéfalo: cérebro, cerebelo (equilíbrio e coordenação), tronco encefálico (funções vitais)','Arco reflexo: resposta rápida pela medula'], null],
 ['Sistema endócrino', 'Hormônios.', ['Glândulas liberam hormônios no sangue','**Hipófise:** "glândula mestra", GH, TSH, ADH','**Tireoide:** T3 e T4 (metabolismo); iodo é essencial','**Pâncreas:** insulina (reduz a glicose) e glucagon (aumenta)','**Suprarrenais:** adrenalina e cortisol','**Gônadas:** testosterona, estrógeno, progesterona'], 'Nervoso: resposta rápida e curta. Endócrino: resposta lenta e duradoura.']
],
d2:[
 ['Diabetes', 'Pâncreas e insulina.', ['**Tipo 1:** autoimune, falta de insulina','**Tipo 2:** resistência à insulina, ligada ao estilo de vida','Sintomas: sede, urina frequente, fome','Prevenção: alimentação e atividade física'], null],
 ['Outras disfunções', 'Hormônios fora do equilíbrio.', ['Bócio: falta de iodo','Hipertireoidismo e hipotireoidismo','Gigantismo e nanismo (GH)','Estresse crônico e cortisol'], null],
 ['Drogas e sistema nervoso', 'Efeitos.', ['Depressoras: álcool, opioides','Estimulantes: cafeína, cocaína, nicotina','Perturbadoras: maconha, LSD','Dependência química e saúde pública'], null]
],
ex:[
 { q:'A insulina é produzida no:', a:['fígado','pâncreas','estômago','rim','coração'], g:'B', c:'Células beta das ilhotas de Langerhans.' },
 { q:'A bainha de mielina tem como função:', a:['produzir hormônios','acelerar a condução do impulso nervoso','digerir proteínas','armazenar glicose','filtrar o sangue'], g:'B', c:'Condução saltatória.' }
],
pr:[
 { q:'O cerebelo é responsável principalmente por:', a:['memória','equilíbrio e coordenação motora','respiração','digestão','visão'], g:'B', c:'Controle motor fino.' },
 { q:'A adrenalina prepara o corpo para:', a:['dormir','luta ou fuga','digestão','crescimento','reprodução'], g:'B', c:'Aumenta batimentos e glicose.' },
 { q:'A falta de iodo na dieta pode causar:', a:['bócio','diabetes','anemia','escorbuto','raquitismo'], g:'A', c:'A tireoide aumenta de tamanho.' },
 { q:'A transmissão de impulso entre neurônios ocorre pela:', a:['mielina','sinapse','dendrito apenas','bile','osmose'], g:'B', c:'Neurotransmissores.' }
],
erros:['Dizer que hormônios são transmitidos por nervos.','Confundir insulina e glucagon.','Achar que diabetes tipo 1 e 2 têm a mesma causa.','Esquecer do SNA simpático e parassimpático.'],
check:['descrever o neurônio e a sinapse','listar glândulas e hormônios','explicar o controle da glicemia','diferenciar controle nervoso e hormonal']
},

{ t:'Reprodução humana e métodos contraceptivos',
d1:[
 ['Sistema reprodutor masculino', 'Estruturas.', ['Testículos: espermatozoides e testosterona','Epidídimo, ductos deferentes, vesículas seminais, próstata (sêmen)','Uretra e pênis','Espermatogênese a partir da puberdade'], null],
 ['Sistema reprodutor feminino', 'Estruturas.', ['Ovários: óvulos e hormônios','Tubas uterinas: fecundação','Útero: gestação; endométrio','Vagina e vulva'], null],
 ['Ciclo menstrual', 'Cerca de 28 dias.', ['Fase folicular: FSH, estrógeno','Ovulação (por volta do 14º dia): pico de LH','Fase lútea: progesterona prepara o endométrio','Sem fecundação: menstruação'], 'Período fértil gira em torno da ovulação.']
],
d2:[
 ['Fecundação e gestação', 'Desenvolvimento.', ['Fecundação na tuba uterina','Zigoto → mórula → blastocisto → implantação','Placenta: troca de nutrientes e gases','Cordão umbilical, âmnio, líquido amniótico','Gestação: cerca de 40 semanas','Gêmeos: monozigóticos e dizigóticos'], null],
 ['Métodos contraceptivos', 'Prevenção da gravidez.', ['**Barreira:** preservativo (também previne ISTs), diafragma','**Hormonais:** pílula, adesivo, anel, injeção, implante','**DIU:** de cobre ou hormonal','**Cirúrgicos:** vasectomia, laqueadura','**Comportamentais:** tabelinha (menos eficaz)','**Pílula do dia seguinte:** emergência'], 'Só a camisinha protege contra ISTs.'],
 ['ISTs', 'Prevenção.', ['HIV/AIDS, sífilis, gonorreia, clamídia, HPV, herpes, hepatites B e C','Uso do preservativo, vacinas (HPV, hepatite B)','Testagem e tratamento','Pré-natal e transmissão vertical'], null]
],
ex:[
 { q:'A ovulação ocorre em resposta ao pico de:', a:['FSH','LH','progesterona','testosterona','insulina'], g:'B', c:'Hormônio luteinizante.' },
 { q:'Qual método contraceptivo também previne ISTs?', a:['pílula','DIU','preservativo','laqueadura','implante'], g:'C', c:'Barreira física.' }
],
pr:[
 { q:'A fecundação normalmente ocorre:', a:['no útero','na tuba uterina','na vagina','no ovário','na placenta'], g:'B', c:'Local do encontro.' },
 { q:'A placenta serve para:', a:['produzir óvulos','trocas entre mãe e feto','produzir espermatozoides','armazenar urina','apenas proteção'], g:'B', c:'Nutrientes, O₂, CO₂ e excretas.' },
 { q:'A vasectomia consiste em:', a:['remover o útero','seccionar os ductos deferentes','remover testículos','bloquear tubas','tomar hormônios'], g:'B', c:'Impede a saída dos espermatozoides.' },
 { q:'Gêmeos idênticos são:', a:['dizigóticos','monozigóticos','sempre de sexos diferentes','de pais diferentes','sem relação genética'], g:'B', c:'Um zigoto se divide.' }
],
erros:['Confundir pílula do dia seguinte com abortivo.','Achar que outros métodos além da camisinha previnem ISTs.','Errar o dia da ovulação em ciclos irregulares.','Confundir fecundação e implantação.'],
check:['descrever os sistemas reprodutores','explicar o ciclo menstrual','citar métodos contraceptivos e eficácia','listar ISTs e prevenção']
},

{ t:'Botânica',
d1:[
 ['Grupos vegetais', 'Evolução.', ['**Briófitas:** musgos, sem vasos, dependem de água','**Pteridófitas:** samambaias, com vasos, sem sementes','**Gimnospermas:** pinheiros, sementes nuas','**Angiospermas:** flores, frutos e sementes; maior grupo'], 'Monocotiledôneas (gramíneas) e eudicotiledôneas (feijão).'],
 ['Órgãos das plantas', 'Estrutura.', ['**Raiz:** fixação e absorção','**Caule:** sustentação e condução','**Folha:** fotossíntese, trocas gasosas e transpiração (estômatos)','**Flor:** reprodução; **fruto:** protege a semente e auxilia na dispersão'], null],
 ['Condução de seiva', 'Vasos.', ['**Xilema:** seiva bruta (água e sais) das raízes às folhas','**Floema:** seiva elaborada (açúcares) das folhas para o resto','Transpiração e coesão puxam a água para cima'], null]
],
d2:[
 ['Reprodução', 'Ciclo.', ['Assexuada: estaquia, bulbos, tubérculos','Sexuada: polinização, fecundação dupla nas angiospermas','Polinização: vento, insetos, aves, morcegos','Dispersão de sementes por animais, vento e água'], null],
 ['Hormônios vegetais', 'Reguladores.', ['**Auxina:** crescimento, fototropismo','**Giberelina:** germinação','**Citocinina:** divisão celular','**Etileno:** amadurecimento (banana)','**Ácido abscísico:** dormência e fechamento dos estômatos'], null],
 ['Importância econômica e ambiental', 'Valor.', ['Alimentos, madeira, medicamentos, fibras, biocombustíveis','Produção de oxigênio e retirada de CO₂','Proteção do solo e do ciclo da água','Polinizadores e o agronegócio'], null]
],
ex:[
 { q:'O tecido que transporta a seiva elaborada é o:', a:['xilema','floema','epiderme','parênquima','súber'], g:'B', c:'Leva açúcares das folhas.' },
 { q:'As sementes protegidas por frutos são características das:', a:['briófitas','pteridófitas','gimnospermas','angiospermas','algas'], g:'D', c:'Flores e frutos.' }
],
pr:[
 { q:'O hormônio vegetal responsável pelo amadurecimento dos frutos é o:', a:['auxina','giberelina','etileno','citocinina','ácido abscísico'], g:'C', c:'Gás.' },
 { q:'Os estômatos regulam:', a:['a floração','trocas gasosas e perda de água','a polinização','o crescimento em altura','a cor'], g:'B', c:'Abrem e fecham.' },
 { q:'As samambaias são:', a:['briófitas','pteridófitas','gimnospermas','angiospermas','fungos'], g:'B', c:'Têm vasos, sem sementes.' },
 { q:'O fototropismo positivo do caule é causado pela:', a:['giberelina','auxina','etileno','citocinina','água'], g:'B', c:'Crescimento do lado sombreado.' }
],
erros:['Trocar xilema e floema.','Dizer que briófitas têm vasos.','Confundir gimnospermas com angiospermas.','Achar que todas as plantas têm flores.'],
check:['classificar os grupos vegetais','descrever órgãos e funções','explicar a condução de seivas','citar hormônios vegetais']
},

{ t:'Zoologia',
d1:[
 ['Invertebrados', 'Sem coluna vertebral.', ['**Poríferos:** esponjas, sem tecidos','**Cnidários:** água-viva, corais; cnidócitos','**Platelmintos:** planárias, tênia','**Nematódeos:** lombriga','**Moluscos:** caramujo, lula, ostra','**Anelídeos:** minhoca, sanguessuga','**Artrópodes:** insetos, aracnídeos, crustáceos, miriápodes; exoesqueleto de quitina','**Equinodermos:** estrela-do-mar'], null],
 ['Vertebrados', 'Cordados com coluna.', ['**Peixes** (brânquias, ectotérmicos)','**Anfíbios** (metamorfose, pele úmida)','**Répteis** (ovos com casca, pele com escamas)','**Aves** (penas, endotérmicas)','**Mamíferos** (glândulas mamárias, pelos)'], 'Aves e mamíferos são endotérmicos (homeotermos).'],
 ['Embriologia e reprodução', 'Estratégias.', ['**Ovíparos, vivíparos e ovovivíparos**','Âmnio nos répteis, aves e mamíferos (amniotas)','Placenta nos mamíferos placentários','Metamorfose nos insetos (completa e incompleta) e anfíbios'], null]
],
d2:[
 ['Insetos e saúde', 'Importância.', ['Vetores: Aedes, Anopheles, barbeiro, mosca','Polinizadores: abelhas','Pragas agrícolas','Controle biológico'], null],
 ['Adaptações', 'Ao ambiente.', ['Camuflagem e mimetismo','Hibernação e migração','Especialização do bico das aves','Convergência: golfinho e tubarão'], null],
 ['Biodiversidade e conservação', 'Fauna brasileira.', ['Espécies ameaçadas: onça-pintada, mico-leão-dourado, tartarugas marinhas','Tráfico de animais','Extinção em massa atual','Unidades de conservação e proteção'], null]
],
ex:[
 { q:'Os artrópodes possuem:', a:['esqueleto interno de cálcio','exoesqueleto de quitina e apêndices articulados','conchas calcárias sempre','nenhuma simetria','endoesqueleto'], g:'B', c:'Muda periódica (ecdise).' },
 { q:'Os mamíferos se caracterizam por:', a:['penas','glândulas mamárias e pelos','escamas','brânquias','metamorfose'], g:'B', c:'Amamentam os filhotes.' }
],
pr:[
 { q:'Os anfíbios apresentam:', a:['metamorfose','ovos com casca','penas','pelos','sangue frio apenas na fase adulta'], g:'A', c:'Girino → adulto.' },
 { q:'As aves e os mamíferos são:', a:['ectotérmicos','endotérmicos','anaeróbicos','invertebrados','hermafroditas'], g:'B', c:'Mantêm temperatura constante.' },
 { q:'Os cnidários possuem células urticantes chamadas:', a:['coanócitos','cnidócitos','nefrídios','estômatos','hemácias'], g:'B', c:'Defesa e captura.' },
 { q:'O mico-leão-dourado é característico da:', a:['Amazônia','Mata Atlântica','Caatinga','Pampa','Pantanal'], g:'B', c:'Espécie ameaçada.' }
],
erros:['Dizer que répteis são anfíbios.','Confundir ectotermia com sangue frio literal.','Achar que todo animal com asas é ave.','Esquecer que insetos têm seis patas.'],
check:['classificar invertebrados e vertebrados','citar características dos grupos','diferenciar ectotérmicos e endotérmicos','relacionar insetos e saúde']
},

{ t:'Saúde, saneamento e doenças não transmissíveis',
d1:[
 ['Conceito de saúde', 'Visão ampla.', ['OMS: bem-estar físico, mental e social, e não apenas ausência de doença','Determinantes: moradia, renda, educação, saneamento','SUS: universal, integral e gratuito (Constituição de 1988)','Atenção básica e prevenção'], null],
 ['Doenças crônicas não transmissíveis', 'DCNT.', ['Hipertensão, diabetes, obesidade','Doenças cardiovasculares, câncer, doenças respiratórias crônicas','Fatores de risco: tabagismo, álcool, sedentarismo, alimentação inadequada, estresse','Principais causas de morte no Brasil'], 'Mudar hábitos previne grande parte das DCNT.'],
 ['Saneamento básico', 'Quatro eixos.', ['Abastecimento de água tratada','Esgotamento sanitário','Manejo de resíduos sólidos','Drenagem urbana','Reduz internações por diarreia e doenças de veiculação hídrica'], null]
],
d2:[
 ['Epidemiologia', 'Conceitos.', ['Endemia: constante em uma região','Epidemia: aumento acima do esperado','Pandemia: espalhada pelo mundo','Surto: casos agrupados no tempo e lugar','Incidência e prevalência'], null],
 ['Saúde mental e hábitos', 'Cuidados.', ['Sono, atividade física, alimentação e relações sociais','Depressão e ansiedade: tratamento e acolhimento','Dependência de drogas','Vícios em telas'], null],
 ['Saúde coletiva', 'Ações.', ['Vacinação, vigilância sanitária, educação em saúde','Campanhas contra tabagismo','Controle de vetores','Acesso a medicamentos e atendimento'], null]
],
ex:[
 { q:'Qual dos itens é um fator de risco para doenças cardiovasculares?', a:['atividade física regular','tabagismo','alimentação rica em fibras','sono adequado','vacinação'], g:'B', c:'Fumar prejudica coração e vasos.' },
 { q:'Uma doença que aparece constantemente em uma região, com número estável de casos, é uma:', a:['epidemia','pandemia','endemia','surto','epizootia'], g:'C', c:'Presença habitual.' }
],
pr:[
 { q:'O SUS tem como princípios:', a:['pagamento obrigatório','universalidade, integralidade e equidade','atendimento só a idosos','exclusividade privada','restrição regional'], g:'B', c:'Acesso para todos.' },
 { q:'O diabetes tipo 2 está fortemente associado a:', a:['sedentarismo e obesidade','falta de iodo','carência de vitamina C','vírus','picada de mosquito'], g:'A', c:'Resistência à insulina.' },
 { q:'A melhor forma de reduzir doenças diarreicas é investir em:', a:['antibióticos','saneamento básico','cirurgias','suplementos','academias'], g:'B', c:'Água tratada e esgoto.' },
 { q:'Uma pandemia é:', a:['doença em uma cidade','doença em muitos países ou continentes','doença em um bairro','sem contágio','sempre grave'], g:'B', c:'Disseminação mundial.' }
],
erros:['Confundir endemia, epidemia e pandemia.','Achar que saúde é apenas ausência de doença.','Esquecer o papel do saneamento.','Ignorar fatores sociais.'],
check:['definir saúde e determinantes','listar fatores de risco das DCNT','distinguir endemia, epidemia e pandemia','explicar a importância do saneamento']
}
];
