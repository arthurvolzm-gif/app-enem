/* Química: temas 11 a 15 */
module.exports = [
{ t:'Mol e massa molar',
d1:[
 ['Massa atômica e massa molecular', 'Comparam a massa dos átomos com a unidade u (1/12 do carbono-12).', ['**Massa atômica:** média ponderada dos isótopos (tabela periódica)','**Massa molecular:** soma das massas atômicas dos átomos da molécula','H₂O = 2·1 + 16 = 18 u','CO₂ = 12 + 2·16 = 44 u'], null],
 ['O mol', 'Unidade de quantidade de matéria.', ['1 mol = 6,02 × 10²³ entidades (constante de Avogadro)','**Massa molar (g/mol):** numericamente igual à massa molecular','1 mol de H₂O = 18 g e 6,02 × 10²³ moléculas','**Volume molar nas CNTP:** 22,4 L/mol'], 'O mol é uma "dúzia" química: só que gigante.'],
 ['Relações de conversão', 'Regra de três em cadeia.', ['**n = m / M** (mol = massa ÷ massa molar)','**N = n · 6,02 × 10²³** (nº de partículas)','**V = n · 22,4** (gases nas CNTP)','Sempre confira as unidades'], null]
],
d2:[
 ['Exemplos de cálculo', 'Passo a passo.', ['Quantos mols há em 36 g de água? n = 36/18 = 2 mol','Quantas moléculas? 2 · 6,02 × 10²³ = 1,2 × 10²⁴','Qual o volume de 2 mol de gás nas CNTP? 44,8 L'], null],
 ['Fórmula mínima e molecular', 'Composição.', ['**Fórmula mínima:** menor proporção inteira entre os átomos','**Fórmula molecular:** quantidade real de átomos','Glicose: molecular C₆H₁₂O₆, mínima CH₂O','**Composição centesimal:** % em massa de cada elemento'], null],
 ['Densidade dos gases', 'Aplicações.', ['Gases com maior massa molar são mais densos','Mesmo volume e mesma T e P contêm mesmo número de moléculas (Avogadro)','CO₂ (44) é mais denso que o ar (≈ 29)','H₂ e He sobem no ar'], null]
],
ex:[
 { q:'Qual é a massa de 3 mol de CO₂? (C = 12; O = 16)', a:['44 g','88 g','120 g','132 g','264 g'], g:'D', c:'M = 44 g/mol; m = 3 × 44 = 132 g.' },
 { q:'Quantas moléculas existem em 0,5 mol de uma substância?', a:['6,0 × 10²²','3,0 × 10²³','6,0 × 10²³','1,2 × 10²⁴','3,0 × 10²⁴'], g:'B', c:'0,5 × 6,02 × 10²³ ≈ 3,0 × 10²³.' }
],
pr:[
 { q:'A massa molar da água (H = 1; O = 16) é:', a:['10 g/mol','16 g/mol','17 g/mol','18 g/mol','20 g/mol'], g:'D', c:'2·1 + 16 = 18 g/mol.' },
 { q:'O volume de 1 mol de gás nas CNTP é:', a:['1 L','11,2 L','22,4 L','44,8 L','100 L'], g:'C', c:'Volume molar nas CNTP.' },
 { q:'Em 18 g de água há quantos mols?', a:['0,5','1','2','18','36'], g:'B', c:'n = 18/18 = 1 mol.' },
 { q:'O número de Avogadro é aproximadamente:', a:['6,02 × 10²³','6,02 × 10²⁰','3 × 10⁸','1,6 × 10⁻¹⁹','9,8'], g:'A', c:'Entidades por mol.' }
],
erros:['Confundir massa atômica com número atômico.','Usar 22,4 L fora das CNTP.','Esquecer de multiplicar pelos índices.','Misturar mol de átomos e mol de moléculas.'],
check:['calcular massa molar','converter massa em mol e partículas','usar volume molar','achar a composição centesimal']
},

{ t:'Estequiometria',
d1:[
 ['Proporção nas reações', 'Os coeficientes indicam a proporção em mols.', ['2 H₂ + O₂ → 2 H₂O: 2 mol de H₂ reagem com 1 mol de O₂','Os mols guiam; depois converta para massa ou volume','Equação balanceada é o ponto de partida'], null],
 ['Roteiro de cálculo', 'Quatro passos.', ['1) Escreva e balanceie a equação','2) Identifique dado e incógnita','3) Monte a regra de três em mols (ou g, L)','4) Converta para a unidade pedida'], 'Massa → mol → mol → massa.'],
 ['Reagente limitante e em excesso', 'Quem acaba primeiro.', ['**Limitante:** consumido totalmente, determina o produto','**Em excesso:** sobra','Calcule o produto a partir do limitante'], null]
],
d2:[
 ['Rendimento e pureza', 'Condições reais.', ['**Rendimento:** real ÷ teórico × 100','Reações incompletas reduzem o rendimento','**Pureza:** parte da amostra que realmente reage','Use só a massa pura no cálculo'], null],
 ['Exemplo resolvido', 'Combustão do metano.', ['CH₄ + 2 O₂ → CO₂ + 2 H₂O','16 g de CH₄ (1 mol) produzem 44 g de CO₂','Para 8 g de CH₄: 22 g de CO₂'], null],
 ['Impacto ambiental', 'Estequiometria e meio ambiente.', ['Quantidade de CO₂ emitida por combustível','Combustão incompleta forma CO e fuligem','Calcular excesso de reagentes ajuda a evitar desperdício'], null]
],
ex:[
 { q:'Quantos mols de H₂O se formam a partir de 4 mol de H₂ (2 H₂ + O₂ → 2 H₂O)?', a:['1','2','4','6','8'], g:'C', c:'Proporção 2:2, então 4 mol de H₂ formam 4 mol de H₂O.' },
 { q:'Qual massa de CO₂ é formada na queima completa de 12 g de carbono (C + O₂ → CO₂)? (C = 12; O = 16)', a:['12 g','22 g','32 g','44 g','56 g'], g:'D', c:'1 mol de C (12 g) forma 1 mol de CO₂ (44 g).' }
],
pr:[
 { q:'Em N₂ + 3 H₂ → 2 NH₃, 6 mol de H₂ produzem quantos mols de NH₃?', a:['2','3','4','6','9'], g:'C', c:'3:2, então 6 mol de H₂ geram 4 mol de NH₃.' },
 { q:'O reagente limitante é aquele que:', a:['sobra no final','é consumido primeiro','tem maior massa','é sempre o gás','não reage'], g:'B', c:'Esgota primeiro e limita o produto.' },
 { q:'Se o rendimento teórico é 50 g e o obtido 40 g, o rendimento é:', a:['20%','40%','50%','80%','125%'], g:'D', c:'40/50 × 100 = 80%.' },
 { q:'Em uma amostra de 100 g com 80% de pureza reagem:', a:['20 g','80 g','100 g','180 g','8 g'], g:'B', c:'Só a parte pura reage.' }
],
erros:['Usar a equação sem balancear.','Comparar gramas diretamente com coeficientes.','Esquecer a pureza e o rendimento.','Não identificar o reagente limitante.'],
check:['aplicar proporção em mols','encontrar o reagente limitante','calcular rendimento','resolver problemas com pureza']
},

{ t:'Soluções e concentração',
d1:[
 ['Soluto e solvente', 'Solução é mistura homogênea.', ['**Soluto:** o que dissolve','**Solvente:** o que dissolve o soluto (água: solvente universal)','Solução aquosa: solvente = água'], null],
 ['Solubilidade', 'Quanto de soluto cabe.', ['**Coeficiente de solubilidade:** massa máxima em 100 g de água a uma temperatura','**Insaturada, saturada e supersaturada**','Em sólidos, geralmente a solubilidade cresce com a temperatura; em gases, diminui'], 'Refrigerante quente perde o gás.'],
 ['Concentrações', 'Relações.', ['**Comum: C = m/V** (g/L)','**Molaridade: M = n/V** (mol/L)','**Título: τ = m soluto / m solução** (sem unidade)','**ppm:** partes por milhão (g/10⁶ g)','**Porcentagem em massa = τ × 100**'], null]
],
d2:[
 ['Diluição', 'Adicionar solvente.', ['A quantidade de soluto não muda','**C₁V₁ = C₂V₂** e **M₁V₁ = M₂V₂**','A concentração diminui ao diluir'], null],
 ['Mistura de soluções', 'Mesmo soluto.', ['Soma dos mols (ou das massas) dividida pelo volume final','Soluções com solutos que reagem exigem cálculo estequiométrico'], null],
 ['Aplicações', 'Cotidiano.', ['Soro fisiológico: 0,9% de NaCl','Álcool 70%','Concentração de poluentes em ppm','Medicamentos: mg/mL'], null]
],
ex:[
 { q:'Dissolvendo 20 g de NaOH em água até completar 500 mL, a concentração comum é:', a:['10 g/L','20 g/L','40 g/L','100 g/L','400 g/L'], g:'C', c:'C = 20 g / 0,5 L = 40 g/L.' },
 { q:'Uma solução 2 mol/L de volume 0,5 L contém quantos mols de soluto?', a:['0,25','0,5','1','2','4'], g:'C', c:'n = M·V = 2 × 0,5 = 1 mol.' }
],
pr:[
 { q:'Diluindo 100 mL de solução 1 mol/L até 500 mL, a nova molaridade é:', a:['0,1','0,2','0,5','1','5'], g:'B', c:'1 × 100 = M₂ × 500 → M₂ = 0,2 mol/L.' },
 { q:'Uma solução saturada contém:', a:['menos soluto que o limite','exatamente o limite possível','mais que o limite sem corpo de fundo','nenhum soluto','só solvente'], g:'B', c:'Atingiu o coeficiente de solubilidade.' },
 { q:'O soro fisiológico tem concentração de NaCl de aproximadamente:', a:['0,9%','9%','19%','90%','0,09%'], g:'A', c:'Isotônico em relação ao sangue.' },
 { q:'O aumento da temperatura geralmente faz a solubilidade dos gases na água:', a:['aumentar','diminuir','ficar constante','dobrar','não existir'], g:'B', c:'Gases se dissolvem menos em temperaturas altas.' }
],
erros:['Esquecer de converter mL em L.','Confundir título com porcentagem.','Pensar que diluir muda a quantidade de soluto.','Misturar mol/L com g/L.'],
check:['calcular concentração comum e molaridade','aplicar a fórmula de diluição','interpretar curva de solubilidade','usar título e ppm']
},

{ t:'Propriedades coligativas',
d1:[
 ['Conceito', 'Dependem da quantidade de partículas de soluto, não da natureza.', ['Soluto não volátil dissolvido em solvente','Quatro efeitos: tonoscopia, ebulioscopia, crioscopia e osmose'], null],
 ['Pressão de vapor e ebulição', 'Efeitos de adicionar soluto.', ['**Tonoscopia:** diminui a pressão máxima de vapor','**Ebulioscopia:** aumenta a temperatura de ebulição','Água salgada ferve em temperatura maior que a pura'], null],
 ['Congelamento (crioscopia)', 'Diminui o ponto de congelamento.', ['Sal derrete gelo nas estradas','Aditivo no radiador: anticongelante e antiebulição','Soluções congelam abaixo de 0 °C'], 'Mais partículas, mais efeito.']
],
d2:[
 ['Osmose', 'Passagem de solvente por membrana semipermeável.', ['Do meio menos concentrado para o mais concentrado','**Pressão osmótica:** pressão que impede a osmose','Células em meio hipotônico incham; em hipertônico murcham','Conservação de alimentos com sal e açúcar'], null],
 ['Fator de van\'t Hoff', 'Compostos iônicos geram mais partículas.', ['NaCl → Na⁺ + Cl⁻: 2 partículas','CaCl₂ → 3 partículas','A 0,1 mol/L, CaCl₂ tem efeito maior que NaCl, que tem maior efeito que glicose'], null],
 ['Aplicações', 'Cotidiano e saúde.', ['Soro fisiológico isotônico','Dessalinização por osmose reversa','Desidratação ao ingerir água do mar','Panela de pressão (aumenta a ebulição)'], null]
],
ex:[
 { q:'A adição de sal à água faz com que a temperatura de ebulição:', a:['diminua','aumente','permaneça igual','chegue a 0 °C','chegue a 200 °C'], g:'B', c:'Efeito ebulioscópico.' },
 { q:'Qual solução tem a menor temperatura de congelamento, sendo todas 0,1 mol/L?', a:['glicose','sacarose','NaCl','CaCl₂','etanol'], g:'D', c:'CaCl₂ gera 3 partículas por fórmula, o maior número.' }
],
pr:[
 { q:'Colocar sal sobre o gelo faz:', a:['aumentar o ponto de fusão','diminuir o ponto de fusão','não alterar nada','solidificar a água','evaporar o gelo'], g:'B', c:'Crioscopia.' },
 { q:'Na osmose, o solvente passa do meio:', a:['mais concentrado para o menos','menos concentrado para o mais concentrado','nunca passa','apenas gasoso','sempre sólido'], g:'B', c:'Tende a igualar as concentrações.' },
 { q:'Uma célula vermelha em água destilada:', a:['murcha','incha e pode estourar','permanece igual','evapora','congela'], g:'B', c:'Meio hipotônico: entra água.' },
 { q:'As propriedades coligativas dependem:', a:['da natureza do soluto','do número de partículas dissolvidas','da cor','da densidade','do pH apenas'], g:'B', c:'Só da quantidade de partículas.' }
],
erros:['Achar que o tipo de soluto altera o efeito (importa o número de partículas).','Esquecer a dissociação dos compostos iônicos.','Inverter o sentido da osmose.','Dizer que o sal aumenta o ponto de congelamento.'],
check:['explicar os 4 efeitos coligativos','comparar soluções pelo número de partículas','prever o sentido da osmose','citar aplicações cotidianas']
},

{ t:'Termoquímica',
d1:[
 ['Calor e entalpia', 'Energia nas reações.', ['**Entalpia (H):** conteúdo de energia','**ΔH = H produtos − H reagentes**','Medida em kJ/mol ou kcal/mol'], null],
 ['Exotérmica e endotérmica', 'Conforme o calor.', ['**Exotérmica:** libera calor, ΔH < 0 (combustão, neutralização)','**Endotérmica:** absorve calor, ΔH > 0 (fotossíntese, fusão)','Compressa fria: dissolução endotérmica'], 'Libera = ΔH negativo.'],
 ['Gráficos', 'Interpretação.', ['Energia dos reagentes acima dos produtos: exotérmica','Energia de ativação: barreira para iniciar','Catalisador reduz a energia de ativação, não altera ΔH'], null]
],
d2:[
 ['Lei de Hess', 'ΔH depende só do estado inicial e final.', ['Some as etapas e some os ΔH','Inverter a reação troca o sinal','Multiplicar a reação multiplica o ΔH'], null],
 ['Entalpia de formação, combustão e ligação', 'Tipos.', ['**Formação:** 1 mol de composto a partir de substâncias simples','**Combustão:** 1 mol de combustível queimado','**Energia de ligação:** romper ligações absorve energia; formar libera'], null],
 ['Combustíveis e energia', 'Aplicações.', ['Poder calorífico: energia por massa','Hidrogênio, etanol, gasolina e biodiesel','Alimentos: kcal por porção','Impactos: CO₂ e aquecimento global'], null]
],
ex:[
 { q:'Uma reação com ΔH = −100 kJ é:', a:['endotérmica','exotérmica','impossível','de equilíbrio','nuclear'], g:'B', c:'ΔH negativo indica liberação de calor.' },
 { q:'A função de um catalisador em termoquímica é:', a:['alterar o ΔH','diminuir a energia de ativação','aumentar a energia dos reagentes','transformar em endotérmica','impedir a reação'], g:'B', c:'Cria caminho de menor energia sem alterar ΔH.' }
],
pr:[
 { q:'A queima do etanol é um processo:', a:['endotérmico','exotérmico','isotérmico','nulo','nuclear'], g:'B', c:'Combustões liberam calor.' },
 { q:'A fotossíntese é um processo:', a:['exotérmico','endotérmico','nuclear','radioativo','espontâneo sem luz'], g:'B', c:'Absorve energia da luz.' },
 { q:'Ao inverter uma equação termoquímica, o ΔH:', a:['dobra','zera','troca de sinal','não muda','vira infinito'], g:'C', c:'Lei de Hess.' },
 { q:'Qual processo absorve calor?', a:['condensação','solidificação','fusão','combustão','neutralização'], g:'C', c:'A fusão é endotérmica.' }
],
erros:['Confundir sinal do ΔH com liberação ou absorção.','Achar que catalisador muda o ΔH.','Esquecer de multiplicar o ΔH ao multiplicar a equação.','Trocar entalpia de formação e de combustão.'],
check:['classificar reações pelo ΔH','interpretar gráficos de entalpia','aplicar a lei de Hess','relacionar combustíveis e energia']
}
];
