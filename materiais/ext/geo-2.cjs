/* Geografia: temas 6 a 10 */
module.exports = [
{ t:'Climas do Brasil e fenômenos climáticos',
d1:[
 ['Tipos de clima no Brasil', 'Predominam climas quentes.', ['**Equatorial (Amazônia):** quente e úmido o ano todo, chuvas abundantes','**Tropical (Centro-Oeste, Sudeste, parte do Nordeste):** verão chuvoso e inverno seco','**Tropical de altitude (Sudeste):** temperaturas mais amenas','**Tropical úmido (litoral leste):** chuvas bem distribuídas','**Semiárido (sertão nordestino):** chuvas escassas e irregulares','**Subtropical (Sul):** estações bem definidas, geadas'], null],
 ['Massas de ar', 'Atuam no território.', ['**Equatorial atlântica e continental (quentes e úmidas)**','**Tropical atlântica (quente e úmida) e continental (quente e seca)**','**Polar atlântica (fria e úmida):** friagem e frentes frias no Sul e Sudeste'], 'A polar atlântica traz chuvas frontais e quedas de temperatura.'],
 ['Fenômenos', 'Impactos.', ['**El Niño:** aquecimento do Pacífico; seca no Norte e Nordeste, chuvas no Sul','**La Niña:** resfriamento do Pacífico; efeitos opostos','**Frentes frias, ciclones extratropicais**','**Zona de Convergência do Atlântico Sul (ZCAS):** chuva no verão','**Chuvas de verão e enchentes urbanas**'], null]
],
d2:[
 ['Semiárido', 'Seca e adaptação.', ['Chuvas concentradas em poucos meses','Polígono das Secas, caatinga','Cisternas, açudes, transposição do São Francisco','Convivência com o semiárido'], null],
 ['Riscos climáticos', 'Eventos extremos.', ['Secas prolongadas no Nordeste','Enchentes e deslizamentos no Sudeste e Sul','Geadas e ondas de calor','Tempestades e vendavais','Urbanização e impermeabilização agravam'], null],
 ['Previsão e prevenção', 'Gestão.', ['Meteorologia (INPE, INMET)','Defesa Civil e alertas','Planejamento urbano e drenagem','Educação ambiental'], null]
],
ex:[
 { q:'O clima que predomina na região amazônica é o:', a:['semiárido','equatorial','subtropical','tropical de altitude','temperado'], g:'B', c:'Quente e úmido o ano todo.' },
 { q:'Em anos de El Niño, costuma ocorrer:', a:['mais chuva no Nordeste','seca no Norte e Nordeste e mais chuva no Sul','nevascas no Sudeste','fim das secas','chuvas uniformes em todo o país'], g:'B', c:'Alteração da circulação atmosférica.' }
],
pr:[
 { q:'A massa de ar responsável por frentes frias no Sul é a:', a:['equatorial continental','tropical continental','polar atlântica','equatorial atlântica','nenhuma'], g:'C', c:'Fria e úmida.' },
 { q:'O clima semiárido é típico:', a:['do litoral sul','do sertão nordestino','da Amazônia','do Pantanal','do Pampa'], g:'B', c:'Chuvas escassas.' },
 { q:'O clima subtropical caracteriza-se por:', a:['calor constante','estações bem definidas e possibilidade de geada','chuvas só no verão','seca prolongada','clima árido'], g:'B', c:'Região Sul.' },
 { q:'Cisternas no semiárido servem para:', a:['gerar energia','armazenar água da chuva','drenar pântanos','irrigar a Amazônia','criar nuvens'], g:'B', c:'Convivência com a seca.' }
],
erros:['Dizer que todo o Brasil é tropical úmido.','Confundir El Niño e La Niña.','Ignorar a ação humana nos desastres.','Trocar massas de ar.'],
check:['listar os climas do Brasil','associar massas de ar às regiões','explicar El Niño e La Niña','descrever o semiárido']
},

{ t:'Mudanças climáticas',
d1:[
 ['Efeito estufa', 'Processo natural.', ['Gases (CO₂, CH₄, N₂O, vapor-d\'água) retêm calor','Mantêm a Terra habitável (≈ 15 °C)','O problema é a intensificação por emissões humanas'], null],
 ['Aquecimento global', 'Causas e efeitos.', ['**Causas:** queima de combustíveis fósseis, desmatamento, agropecuária','**Efeitos:** derretimento de geleiras, elevação do nível do mar, eventos extremos, perda de biodiversidade, migrações climáticas','Acidificação dos oceanos','Impacto desigual: países pobres sofrem mais'], 'Consenso científico (IPCC): as atividades humanas são a principal causa.'],
 ['Acordos internacionais', 'Esforços.', ['**Rio-92 (ECO-92):** Convenção do Clima','**Protocolo de Kyoto (1997)**','**Acordo de Paris (2015):** limitar o aquecimento a bem abaixo de 2 °C','**COPs** anuais','Metas nacionais (NDCs)'], null]
],
d2:[
 ['Camada de ozônio', 'Outro problema.', ['Proteção contra ultravioleta','CFCs destroem o ozônio','Protocolo de Montreal (1987) reduziu os CFCs','Não confundir com efeito estufa'], null],
 ['Soluções', 'Mitigação e adaptação.', ['Energias renováveis','Eficiência energética','Reflorestamento e fim do desmatamento','Transporte limpo','Mercado de carbono','Adaptação: infraestrutura e agricultura resiliente'], null],
 ['Brasil e clima', 'Papel.', ['Emissões vêm sobretudo de desmatamento e agropecuária','Matriz elétrica limpa (hidrelétricas)','Amazônia como regulador climático','Fundo Amazônia'], null]
],
ex:[
 { q:'O principal gás associado ao aquecimento global antrópico é o:', a:['O₂','N₂','CO₂','He','Ar'], g:'C', c:'Queima de combustíveis fósseis e desmatamento.' },
 { q:'O Acordo de Paris (2015) estabelece como meta:', a:['aumentar as emissões','limitar o aquecimento global bem abaixo de 2 °C','acabar com o petróleo em 1 ano','proibir a indústria','extinguir a ONU'], g:'B', c:'Metas nacionais voluntárias.' }
],
pr:[
 { q:'O Protocolo de Montreal trata:', a:['do efeito estufa','da proteção da camada de ozônio','de comércio','da água','de resíduos'], g:'B', c:'Elimina os CFCs.' },
 { q:'A elevação do nível do mar está associada:', a:['ao derretimento das geleiras e à expansão térmica','ao aumento de chuvas','ao vento','à Lua apenas','ao desmatamento só'], g:'A', c:'Efeito do aquecimento.' },
 { q:'Uma ação de mitigação é:', a:['queimar florestas','investir em energias renováveis','aumentar o uso de carvão','abandonar o transporte público','ignorar o problema'], g:'B', c:'Reduz emissões.' },
 { q:'A COP é a:', a:['Conferência das Partes da ONU sobre o clima','cúpula de esportes','feira de negócios','reunião militar','agência de turismo'], g:'A', c:'Reunião anual.' }
],
erros:['Confundir buraco na camada de ozônio e efeito estufa.','Achar que não há consenso científico.','Esquecer de que o efeito estufa é natural.','Ignorar a justiça climática.'],
check:['diferenciar efeito estufa natural e agravado','listar efeitos do aquecimento','citar acordos climáticos','propor medidas de mitigação']
},

{ t:'Hidrografia',
d1:[
 ['Conceitos', 'Vocabulário.', ['**Bacia hidrográfica:** área drenada por um rio e seus afluentes','**Rio principal, afluente, nascente, foz**','**Regime:** perene ou intermitente (temporário)','**Foz:** estuário (ex.: Amazonas, Prata) ou delta (ex.: Nilo)','**Divisor de águas**'], null],
 ['Água na Terra', 'Distribuição.', ['97,5% salgada; 2,5% doce','Da água doce: maior parte em geleiras e aquíferos','O Brasil concentra cerca de 12% da água doce superficial do planeta, mas mal distribuída (cerca de 80% na Amazônia)','Aquíferos: Guarani, Alter do Chão'], 'Aquífero Guarani: sob parte do Brasil, Argentina, Paraguai e Uruguai.'],
 ['Bacias brasileiras', 'Principais.', ['**Amazônica:** a maior do mundo, navegação','**Tocantins-Araguaia**','**São Francisco:** "rio da integração nacional", perene no semiárido','**Paraná:** maior potencial hidrelétrico instalado (Itaipu)','**Paraguai (Pantanal), Uruguai, Atlântico Sul, Leste, Nordeste**'], null]
],
d2:[
 ['Usos da água', 'Múltiplos.', ['Abastecimento, agricultura (irrigação, maior consumidor), indústria, energia, navegação, lazer','Conflitos pelo uso','Outorga e comitês de bacia'], null],
 ['Hidrelétricas e impactos', 'Energia.', ['Brasil depende de hidrelétricas','Impactos: alagamento, deslocamento de populações, alteração do ecossistema','Belo Monte, Itaipu, Tucuruí'], null],
 ['Problemas e soluções', 'Gestão.', ['Poluição, assoreamento, desperdício','Escassez e crises hídricas (Sudeste, Nordeste)','Tratamento de esgoto, reúso, gestão integrada','Lei das Águas (1997)'], null]
],
ex:[
 { q:'A bacia com maior potencial hidrelétrico instalado no Brasil é a do:', a:['Amazonas','Paraná','Uruguai','Paraguai','São Francisco'], g:'B', c:'Itaipu e outras usinas.' },
 { q:'O rio que mantém água o ano todo no semiárido é o:', a:['Amazonas','São Francisco','Paraná','Tocantins','Tietê'], g:'B', c:'Rio perene no semiárido.' }
],
pr:[
 { q:'O Aquífero Guarani está localizado:', a:['só no Brasil','sob países do Mercosul (Brasil, Argentina, Paraguai e Uruguai)','na Amazônia apenas','na África','na Ásia'], g:'B', c:'Grande reserva de água doce subterrânea.' },
 { q:'Uma foz em delta é caracterizada por:', a:['um único canal','vários canais e depósito de sedimentos','ausência de sedimentos','cachoeira','geleira'], g:'B', c:'Ex.: Nilo.' },
 { q:'O maior consumo de água doce no Brasil é:', a:['indústria','agricultura irrigada','residências','turismo','mineração'], g:'B', c:'Irrigação.' },
 { q:'O divisor de águas é:', a:['o ponto mais baixo','a linha que separa bacias','o leito','a foz','a nascente'], g:'B', c:'Geralmente nas partes altas.' }
],
erros:['Confundir foz em delta e estuário.','Achar que a água doce é abundante e uniformemente distribuída.','Esquecer do uso agrícola.','Trocar o Aquífero Guarani com a Bacia Amazônica.'],
check:['definir bacia hidrográfica','citar as bacias brasileiras','listar usos da água','explicar a distribuição da água doce']
},

{ t:'Vegetação e domínios morfoclimáticos',
d1:[
 ['Domínios morfoclimáticos', 'Proposta de Aziz Ab\'Sáber.', ['Conjunto de relevo, clima, solo e vegetação','**Amazônico**, **Cerrado**, **Mares de Morros (Mata Atlântica)**, **Caatinga**, **Araucárias**, **Pradarias (Pampa)**','Faixas de transição entre eles','Pantanal e Zona dos Cocais como áreas de transição'], null],
 ['Formações florestais', 'Florestas.', ['**Floresta Amazônica:** equatorial, densa e perene, megadiversa','**Mata Atlântica:** litoral, restam 12%','**Mata de Araucárias:** Sul, pinheiro-do-paraná','**Mata de Cocais:** palmeiras, transição','**Manguezais:** costa, berçário de espécies'], null],
 ['Formações abertas', 'Não florestais.', ['**Cerrado:** árvores esparsas, solo ácido; fogo natural','**Caatinga:** xerófita, espinhosa, perde folhas','**Campos (Pampa):** gramíneas','**Pantanal:** mosaico de vegetação, inundação sazonal'], 'Cerrado: plantas com raízes profundas e cascas grossas.']
],
d2:[
 ['Importância da vegetação', 'Funções.', ['Regulação do clima e do ciclo da água','Proteção do solo','Biodiversidade','Serviços ecossistêmicos','Fontes de alimentos e remédios'], null],
 ['Ameaças', 'Desmatamento.', ['Expansão agropecuária (soja e gado)','Urbanização e infraestrutura','Mineração e garimpo','Queimadas','Fragmentação de habitats'], null],
 ['Proteção', 'Instrumentos.', ['Código Florestal: APP e Reserva Legal','Unidades de Conservação','Corredores ecológicos','Fiscalização e satélites','Pagamento por serviços ambientais'], null]
],
ex:[
 { q:'O domínio morfoclimático que ocupa o sertão nordestino é o da:', a:['Amazônia','Caatinga','Mata Atlântica','Pradarias','Araucárias'], g:'B', c:'Clima semiárido.' },
 { q:'Quem propôs a classificação dos domínios morfoclimáticos do Brasil?', a:['Aziz Ab\'Sáber','Milton Santos','Josué de Castro','Celso Furtado','Darcy Ribeiro'], g:'A', c:'Geógrafo brasileiro.' }
],
pr:[
 { q:'O manguezal ocorre:', a:['em áreas de montanha','em áreas costeiras alagadas e salobras','no sertão','em geleiras','em desertos'], g:'B', c:'Berçário marinho.' },
 { q:'A Mata de Araucárias é típica da região:', a:['Norte','Sul','Nordeste','Centro-Oeste apenas','Amazônia'], g:'B', c:'Planalto meridional.' },
 { q:'O Cerrado apresenta:', a:['floresta densa','árvores retorcidas e gramíneas','neve','cactos apenas','gelo'], g:'B', c:'Savana brasileira.' },
 { q:'Uma APP é:', a:['uma área de produção','uma área de preservação permanente','um tipo de rocha','um parque aquático','um aplicativo'], g:'B', c:'Margens de rios, topos de morros etc.' }
],
erros:['Dizer que a Amazônia é "pulmão do mundo" sem nuance.','Confundir domínio com bioma.','Ignorar as transições.','Esquecer do Código Florestal.'],
check:['listar os domínios morfoclimáticos','associar vegetação e clima','citar ameaças e proteção','explicar funções da vegetação']
},

{ t:'Questão ambiental no Brasil',
d1:[
 ['Desmatamento', 'Principais causas.', ['Agropecuária (pastagens e soja)','Madeira ilegal, garimpo','Infraestrutura e urbanização','Arco do desmatamento na Amazônia','Cerrado e Mata Atlântica muito devastados'], null],
 ['Poluição e resíduos', 'Problemas urbanos.', ['Poluição do ar, da água e do solo','Lixões e aterros, plásticos','Saneamento precário','Descarte de eletrônicos','Rompimentos de barragens (Mariana, 2015; Brumadinho, 2019)'], 'Mineração gera riqueza e riscos.'],
 ['Legislação', 'Instrumentos.', ['**Código Florestal:** APP e Reserva Legal','**Lei de Crimes Ambientais, SNUC (unidades de conservação)**','**Política Nacional de Resíduos Sólidos (2010)**','**Licenciamento ambiental e EIA/RIMA**'], null]
],
d2:[
 ['Unidades de Conservação', 'Tipos.', ['**Proteção integral:** parques, reservas biológicas (uso indireto)','**Uso sustentável:** RESEX, florestas nacionais, APAs','Terras indígenas como barreira ao desmatamento'], null],
 ['Conflitos socioambientais', 'Interesses.', ['Agronegócio x povos tradicionais','Hidrelétricas x ribeirinhos','Mineração x comunidades','Garimpo ilegal e terras indígenas'], null],
 ['Sustentabilidade', 'Caminhos.', ['Agroecologia, bioeconomia','Recuperação de áreas degradadas','Energias renováveis','Educação ambiental','Economia circular'], null]
],
ex:[
 { q:'O EIA/RIMA é exigido para:', a:['licenciamento de empreendimentos de grande impacto','cadastro de cidadãos','importação','votar','divulgar notícias'], g:'A', c:'Estudo de impacto ambiental.' },
 { q:'As Unidades de Conservação de proteção integral permitem:', a:['uso intensivo','somente uso indireto dos recursos','mineração','desmatamento','caça'], g:'B', c:'Pesquisa, turismo controlado.' }
],
pr:[
 { q:'O desastre de Mariana (2015) foi causado por:', a:['rompimento de barragem de rejeitos de mineração','terremoto','vulcão','incêndio','tsunami'], g:'A', c:'Contaminou o Rio Doce.' },
 { q:'O "arco do desmatamento" está localizado:', a:['no Sul','na borda sul e leste da Amazônia','no Nordeste','no Pampa','no litoral'], g:'B', c:'Fronteira agropecuária.' },
 { q:'A Política Nacional de Resíduos Sólidos estabelece:', a:['logística reversa e responsabilidade compartilhada','permissão de lixões','fim da reciclagem','aterros sem controle','queimadas'], g:'A', c:'Ordem: não geração, redução, reutilização, reciclagem, tratamento e disposição final.' },
 { q:'Uma Reserva Extrativista (RESEX) é uma UC de:', a:['proteção integral','uso sustentável','mineração','agricultura intensiva','nenhum tipo'], g:'B', c:'Populações tradicionais.' }
],
erros:['Dizer que toda UC proíbe qualquer uso.','Ignorar causas econômicas e sociais.','Confundir APP e Reserva Legal.','Esquecer da logística reversa.'],
check:['listar causas do desmatamento','citar leis ambientais','distinguir UCs','analisar conflitos socioambientais']
}
];
