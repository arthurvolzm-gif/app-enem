/* Biologia: temas 11 a 15 */
module.exports = [
{ t:'Ecologia: conceitos e cadeias alimentares',
d1:[
 ['Conceitos básicos', 'Vocabulário.', ['**Espécie, população, comunidade, ecossistema, biosfera**','**Habitat:** onde vive; **nicho ecológico:** modo de vida e papel','**Fatores bióticos** (seres vivos) e **abióticos** (luz, água, temperatura, solo)','Ecossistema = comunidade + ambiente físico'], null],
 ['Cadeias e teias alimentares', 'Fluxo de energia.', ['**Produtores:** autótrofos (plantas, algas)','**Consumidores primários, secundários e terciários**','**Decompositores:** fungos e bactérias reciclam a matéria','Teia: várias cadeias interligadas','Seta aponta para quem recebe a energia'], 'Energia flui em sentido único; matéria circula.'],
 ['Pirâmides ecológicas', 'Representações.', ['**Pirâmide de energia:** sempre decrescente (só cerca de 10% passa para o nível seguinte)','**Pirâmide de números e biomassa** podem ser invertidas','Poucos níveis tróficos pela perda de energia'], null]
],
d2:[
 ['Fluxo de energia', 'Perdas.', ['Parte da energia é perdida como calor na respiração','Por isso, comer vegetais aproveita mais energia que comer carne','Regra dos 10%','Produtividade primária bruta e líquida'], null],
 ['Dinâmica de populações', 'Crescimento.', ['Natalidade, mortalidade, imigração e emigração','Crescimento exponencial × logístico','Capacidade de suporte do meio','Fatores limitantes: alimento, espaço, predadores, doenças'], null],
 ['Sucessão ecológica', 'Mudança ao longo do tempo.', ['**Primária:** em rocha nua; começa com liquens (espécies pioneiras)','**Secundária:** após perturbação, com solo','**Comunidade clímax:** estável','Sucessão aumenta a diversidade e a biomassa'], null]
],
ex:[
 { q:'Em uma cadeia alimentar, a energia que passa de um nível trófico ao seguinte é de cerca de:', a:['1%','10%','50%','90%','100%'], g:'B', c:'A maior parte se perde como calor.' },
 { q:'Os organismos que reciclam a matéria orgânica de volta ao ambiente são:', a:['produtores','consumidores primários','decompositores','predadores','herbívoros'], g:'C', c:'Fungos e bactérias.' }
],
pr:[
 { q:'O papel de uma espécie no ecossistema chama-se:', a:['habitat','nicho ecológico','população','bioma','comunidade'], g:'B', c:'Como e do que vive.' },
 { q:'A pirâmide de energia é sempre:', a:['invertida','decrescente da base ao topo','constante','crescente','aleatória'], g:'B', c:'Perdas em cada nível.' },
 { q:'A primeira espécie a colonizar uma rocha nua é chamada:', a:['clímax','pioneira','predadora','decompositora','secundária'], g:'B', c:'Liquens.' },
 { q:'Os fatores abióticos incluem:', a:['predadores','plantas','luz e temperatura','fungos','bactérias'], g:'C', c:'Sem vida.' }
],
erros:['Dizer que a energia circula como a matéria.','Inverter a seta nas cadeias alimentares.','Confundir habitat e nicho.','Esquecer dos decompositores.'],
check:['montar cadeias e teias','explicar a regra dos 10%','diferenciar habitat e nicho','descrever sucessão ecológica']
},

{ t:'Relações ecológicas',
d1:[
 ['Relações harmônicas', 'Sem prejuízo.', ['**Mutualismo (+/+):** obrigatório; liquens, bactérias fixadoras de nitrogênio em leguminosas','**Protocooperação (+/+):** facultativa; pássaro-palito e crocodilo','**Comensalismo (+/0):** rêmora e tubarão','**Inquilinismo (+/0):** bromélia sobre árvore (epifitismo)','**Sociedade e colônia:** cooperação de indivíduos da mesma espécie'], null],
 ['Relações desarmônicas', 'Há prejuízo.', ['**Predação (+/−):** onça e capivara','**Parasitismo (+/−):** lombriga no humano','**Competição (−/−):** por alimento, espaço, luz','**Amensalismo (0/−):** liberação de substâncias que inibem outros','**Canibalismo** e **esclavagismo**'], 'Mutualismo: a relação é necessária. Protocooperação: não.'],
 ['Intra e interespecíficas', 'Entre quem?', ['**Intraespecíficas:** mesma espécie (sociedade, colônia, competição)','**Interespecíficas:** espécies diferentes (predação, parasitismo)'], null]
],
d2:[
 ['Predação e equilíbrio', 'Controle populacional.', ['Predadores regulam presas','Retirar predadores causa explosão de presas','Controle biológico de pragas','Coevolução: adaptações mútuas'], null],
 ['Parasitismo', 'Detalhes.', ['Parasitas obtêm nutrientes do hospedeiro','Endoparasitas e ectoparasitas','Doenças: malária, esquistossomose, doença de Chagas','Hospedeiro definitivo e intermediário'], null],
 ['Aplicações', 'Cotidiano.', ['Fixação biológica de nitrogênio dispensa fertilizantes','Mimetismo e camuflagem','Polinização (mutualismo)','Espécies invasoras alteram as relações'], null]
],
ex:[
 { q:'A relação entre bactérias do gênero Rhizobium e raízes de leguminosas é um exemplo de:', a:['competição','predação','mutualismo','parasitismo','amensalismo'], g:'C', c:'Troca benéfica de nitrogênio por nutrientes.' },
 { q:'A rêmora que se prende ao tubarão para se alimentar de restos é um caso de:', a:['parasitismo','comensalismo','mutualismo','predação','competição'], g:'B', c:'Uma espécie se beneficia e a outra não é afetada.' }
],
pr:[
 { q:'Duas espécies disputando a mesma fonte de alimento estão em:', a:['mutualismo','competição','comensalismo','inquilinismo','sociedade'], g:'B', c:'Prejudica ambas.' },
 { q:'Uma bromélia que vive sobre uma árvore exemplifica:', a:['inquilinismo','parasitismo','predação','amensalismo','mutualismo'], g:'A', c:'Usa como suporte, sem prejudicar.' },
 { q:'Uma relação entre indivíduos da mesma espécie é chamada de:', a:['interespecífica','intraespecífica','ecológica apenas','abiótica','trófica'], g:'B', c:'Ex.: sociedade de abelhas.' },
 { q:'A malária envolve a relação de:', a:['mutualismo','parasitismo','comensalismo','predação','sociedade'], g:'B', c:'Plasmodium parasita o humano.' }
],
erros:['Confundir mutualismo e protocooperação.','Confundir parasitismo e predação.','Trocar inquilinismo e comensalismo.','Esquecer de classificar como intra ou interespecífica.'],
check:['classificar relações pelos sinais (+, −, 0)','diferenciar parasitismo e predação','dar exemplos de cada relação','relacionar controle biológico a relações ecológicas']
},

{ t:'Ciclos biogeoquímicos',
d1:[
 ['Conceito', 'Circulação da matéria.', ['Elementos passam entre seres vivos e ambiente','Fornecem os elementos essenciais (C, N, P, O, H, S)','Equilíbrio dinâmico alterado pelas atividades humanas'], null],
 ['Ciclo do carbono', 'Fotossíntese e respiração.', ['Fotossíntese retira CO₂ da atmosfera','Respiração, decomposição e queima devolvem CO₂','Combustíveis fósseis estocam carbono','O excesso de CO₂ intensifica o efeito estufa','Oceanos e florestas são sumidouros'], 'Desmatamento e queimadas liberam CO₂.'],
 ['Ciclo do nitrogênio', 'N₂ (78% do ar) não é usado diretamente.', ['**Fixação:** bactérias (Rhizobium, Azotobacter) e raios convertem N₂ em amônia','**Nitrificação:** amônia → nitrito → nitrato (Nitrosomonas, Nitrobacter)','**Assimilação** pelas plantas','**Amonificação:** decompositores','**Desnitrificação:** bactérias devolvem N₂ à atmosfera'], null]
],
d2:[
 ['Ciclo da água', 'Hidrológico.', ['Evaporação, transpiração, condensação, precipitação, infiltração','Lençóis freáticos e aquíferos','Desmatamento reduz a chuva local','Poluição e uso excessivo ameaçam a água doce'], null],
 ['Ciclo do fósforo', 'Sem fase gasosa.', ['Vem das rochas','Absorvido pelas plantas, passa pelos animais','Usado em ATP, DNA e ossos','Excesso em rios causa eutrofização (adubos e detergentes)'], null],
 ['Impactos humanos', 'Desequilíbrios.', ['Fertilizantes: excesso de N e P','Queima de combustíveis: CO₂ e chuva ácida','Desmatamento','Ações: agricultura sustentável, tratamento de esgoto, reflorestamento'], null]
],
ex:[
 { q:'As bactérias que convertem N₂ em amônia atuam na:', a:['desnitrificação','fixação do nitrogênio','nitratação apenas','fotossíntese','respiração'], g:'B', c:'Fixação biológica.' },
 { q:'O principal efeito do excesso de fósforo e nitrogênio em lagos é:', a:['aumento do oxigênio','eutrofização','aumento da biodiversidade','aumento da pureza','diminuição de algas'], g:'B', c:'Proliferação de algas e queda do oxigênio.' }
],
pr:[
 { q:'O processo que retira CO₂ da atmosfera é a:', a:['respiração','fotossíntese','combustão','decomposição','fermentação'], g:'B', c:'Produz matéria orgânica.' },
 { q:'Qual ciclo não tem fase gasosa significativa?', a:['carbono','nitrogênio','fósforo','água','oxigênio'], g:'C', c:'Vem das rochas.' },
 { q:'A desnitrificação devolve à atmosfera:', a:['CO₂','N₂','O₂','H₂','NH₃'], g:'B', c:'Gás nitrogênio.' },
 { q:'O desmatamento afeta o ciclo da água porque:', a:['aumenta a transpiração','reduz a transpiração e a chuva local','cria nuvens','aumenta a infiltração sempre','não afeta'], g:'B', c:'Menos vapor liberado.' }
],
erros:['Confundir fixação e nitrificação.','Dizer que plantas usam N₂ diretamente.','Esquecer que o fósforo não tem fase gasosa.','Achar que os ciclos são independentes.'],
check:['descrever os ciclos do C, N, P e da água','citar bactérias e seus papéis','relacionar ciclos a problemas ambientais','explicar eutrofização']
},

{ t:'Biomas brasileiros',
d1:[
 ['Amazônia', 'Floresta equatorial.', ['Maior bioma do Brasil, grande biodiversidade','Clima quente e úmido; solo pobre, nutrientes na serrapilheira','Rios voadores: umidade que abastece outras regiões','Ameaças: desmatamento, queimadas, garimpo, pecuária'], null],
 ['Cerrado', 'Savana brasileira.', ['Árvores tortas, raízes profundas e cascas grossas (adaptação ao fogo)','Duas estações: seca e chuvosa','Berço das águas: nascentes de grandes bacias','Segundo maior bioma; muito afetado pelo agronegócio','Hotspot de biodiversidade'], 'Cerrado é chamado de "floresta de cabeça para baixo": raízes profundas.'],
 ['Mata Atlântica', 'Costa leste.', ['Floresta tropical muito devastada (restam cerca de 12%)','Alta biodiversidade e endemismo','Concentra grande parte da população e das cidades','Hotspot'], null]
],
d2:[
 ['Caatinga', 'Semiárido.', ['Exclusivamente brasileira','Plantas xerófitas: cactos, mandacaru, juazeiro','Perdem folhas na seca','Rios intermitentes, desertificação','Ameaças: desmatamento e uso intensivo de lenha'], null],
 ['Pantanal e Pampa', 'Outros biomas.', ['**Pantanal:** planície alagável, grande fauna, ciclos de cheia e seca','**Pampa:** campos, clima subtropical, pecuária, pouca vegetação arbórea'], null],
 ['Conservação', 'Estratégias.', ['Unidades de conservação','Terras indígenas e uso sustentável','Reflorestamento e corredores ecológicos','Legislação: Código Florestal, reserva legal','Pagamentos por serviços ambientais'], null]
],
ex:[
 { q:'Raízes profundas, cascas grossas e troncos retorcidos são adaptações típicas do:', a:['Pampa','Cerrado','Mata Atlântica','Manguezal','Pantanal'], g:'B', c:'Seca prolongada e fogo.' },
 { q:'O bioma exclusivamente brasileiro, de clima semiárido, é a:', a:['Amazônia','Caatinga','Pantanal','Mata Atlântica','Pampa'], g:'B', c:'Ocorre apenas no Brasil.' }
],
pr:[
 { q:'O bioma mais devastado e com maior concentração urbana é a:', a:['Amazônia','Mata Atlântica','Caatinga','Pantanal','Pampa'], g:'B', c:'Restam poucos fragmentos.' },
 { q:'O Pantanal é caracterizado por:', a:['clima desértico','planície inundável','neve','altitudes elevadas','vegetação de coníferas'], g:'B', c:'Ciclo de cheias.' },
 { q:'O Cerrado é chamado de "berço das águas" porque:', a:['só tem rios grandes','abriga nascentes de grandes bacias','tem mais chuva que a Amazônia','tem geleiras','não tem rios'], g:'B', c:'Alimenta bacias como a do São Francisco.' },
 { q:'Os "rios voadores" ligam a Amazônia a:', a:['regiões Centro-Oeste, Sudeste e Sul','somente ao Nordeste','somente ao exterior','Antártida','Pampa apenas'], g:'A', c:'Transporte de umidade.' }
],
erros:['Atribuir ao Cerrado chuva igual à da Amazônia.','Achar que o solo amazônico é rico.','Confundir Pantanal e Pampa.','Dizer que a Caatinga é deserto.'],
check:['associar cada bioma ao clima e vegetação','citar ameaças','explicar adaptações','relacionar biomas e conservação']
},

{ t:'Impactos ambientais e sustentabilidade',
d1:[
 ['Problemas principais', 'Lista.', ['Desmatamento e perda de biodiversidade','Queimadas e poluição do ar','Poluição da água e do solo','Mudanças climáticas e aquecimento global','Resíduos sólidos e plásticos','Espécies exóticas invasoras'], null],
 ['Aquecimento global', 'Intensificação do efeito estufa.', ['CO₂, CH₄, N₂O em excesso','Derretimento das geleiras, aumento do nível do mar','Eventos extremos mais frequentes','Acordos: Protocolo de Kyoto, Acordo de Paris'], 'Efeito estufa natural é importante; o problema é o aumento.'],
 ['Desenvolvimento sustentável', 'Conceito.', ['Atender o presente sem comprometer as gerações futuras','Pilares: ambiental, social e econômico','Agenda 2030 e ODS (ONU)','Pegada ecológica'], null]
],
d2:[
 ['Resíduos', 'Os 5 Rs.', ['Repensar, recusar, reduzir, reutilizar e reciclar','Coleta seletiva','Compostagem de orgânicos','Aterro sanitário × lixão','Logística reversa'], null],
 ['Energias limpas', 'Alternativas.', ['Solar, eólica, hidráulica, biomassa','Eficiência energética','Matriz brasileira majoritariamente renovável','Biocombustíveis'], null],
 ['Agricultura e conservação', 'Práticas.', ['Agricultura orgânica e sistemas agroflorestais','Rotação de culturas e plantio direto','Controle biológico','Pagamento por serviços ambientais','Unidades de conservação e legislação'], null]
],
ex:[
 { q:'O desenvolvimento sustentável busca:', a:['esgotar os recursos naturais','atender necessidades atuais sem comprometer as futuras','apenas crescimento econômico','proibir qualquer atividade','abandonar a tecnologia'], g:'B', c:'Definição do Relatório Brundtland.' },
 { q:'A compostagem é uma forma de tratar resíduos:', a:['inorgânicos','orgânicos','radioativos','metálicos','plásticos'], g:'B', c:'Produz adubo.' }
],
pr:[
 { q:'Qual gás é mais associado ao agravamento do aquecimento global?', a:['O₂','N₂','CO₂','He','Ne'], g:'C', c:'Queima de combustíveis fósseis.' },
 { q:'A espécie exótica invasora:', a:['sempre beneficia o ecossistema','pode competir com espécies nativas e causar desequilíbrio','é sempre extinta','não existe','vive só em aquários'], g:'B', c:'Falta de predadores naturais.' },
 { q:'Os 5 Rs incluem:', a:['reciclar e reutilizar','queimar e enterrar','desmatar e plantar','poluir e limpar','importar e exportar'], g:'A', c:'Reduzir, reutilizar, reciclar, repensar, recusar.' },
 { q:'O Acordo de Paris trata de:', a:['segurança alimentar','metas de redução de emissões','comércio internacional','saúde mental','esportes'], g:'B', c:'Combate às mudanças climáticas.' }
],
erros:['Confundir aquecimento global com buraco na camada de ozônio.','Achar que reciclar basta (reduzir vem antes).','Atribuir todo problema ambiental a um único fator.','Ignorar a dimensão social da sustentabilidade.'],
check:['listar impactos ambientais','explicar o aquecimento global','definir sustentabilidade','aplicar os 5 Rs']
}
];
