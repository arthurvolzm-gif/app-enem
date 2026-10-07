/* Química: temas 21 a 25 */
module.exports = [
{ t:'Funções orgânicas',
d1:[
 ['Funções oxigenadas', 'Contêm oxigênio.', ['**Álcool:** –OH em carbono saturado (etanol)','**Fenol:** –OH em anel aromático','**Aldeído:** –CHO (formaldeído)','**Cetona:** C=O entre carbonos (acetona)','**Ácido carboxílico:** –COOH (vinagre)','**Éster:** –COO– (aromas de frutas)','**Éter:** –O– entre carbonos'], null],
 ['Funções nitrogenadas', 'Contêm nitrogênio.', ['**Amina:** derivada da amônia (–NH₂)','**Amida:** –CONH₂','**Nitrila e nitrocomposto**'], 'Aminas têm cheiro de peixe.'],
 ['Outras funções', 'Hidrocarbonetos e haletos.', ['**Hidrocarbonetos:** só C e H','**Haletos orgânicos:** C ligado a F, Cl, Br, I','**Tiol:** –SH'], null]
],
d2:[
 ['Nomenclatura', 'Sufixos.', ['Álcool: -ol','Aldeído: -al','Cetona: -ona','Ácido carboxílico: ácido ...-oico','Éster: ...-ato de ...-ila','Amina: -amina'], null],
 ['Propriedades físicas', 'Pontos de ebulição.', ['Ácidos carboxílicos > álcoois > aldeídos/cetonas > éteres > hidrocarbonetos','Ligações de hidrogênio aumentam o PE','Álcoois pequenos se dissolvem em água'], null],
 ['Usos', 'Cotidiano.', ['Etanol: combustível e bebida','Acetona: removedor','Ácido acético: vinagre','Ésteres: essências e perfumes','Metanal: conservante (restrito)','Aminas: odor de peixe, medicamentos'], null]
],
ex:[
 { q:'O grupo funcional –COOH caracteriza:', a:['álcool','aldeído','cetona','ácido carboxílico','éter'], g:'D', c:'Carboxila.' },
 { q:'A substância CH₃–CH₂–OH é:', a:['etanal','etanol','éter etílico','ácido etanoico','etano'], g:'B', c:'Álcool de dois carbonos.' }
],
pr:[
 { q:'O vinagre contém principalmente:', a:['ácido acético','etanol','acetona','metanol','éter'], g:'A', c:'Ácido etanoico.' },
 { q:'Os ésteres são responsáveis:', a:['pelo cheiro de peixe','pelos aromas de frutas e flores','pela cor do sangue','pela dureza dos metais','pelo gosto salgado'], g:'B', c:'Essências naturais e artificiais.' },
 { q:'A acetona pertence à função:', a:['aldeído','cetona','éter','fenol','amina'], g:'B', c:'Propanona.' },
 { q:'O grupo funcional das aminas contém:', a:['oxigênio','nitrogênio','enxofre','flúor','fósforo'], g:'B', c:'Derivadas da amônia.' }
],
erros:['Confundir álcool e fenol.','Trocar aldeído e cetona.','Esquecer de que éster deriva de ácido e álcool.','Errar o sufixo na nomenclatura.'],
check:['reconhecer os grupos funcionais','nomear compostos simples','ordenar pontos de ebulição','citar usos cotidianos']
},

{ t:'Isomeria',
d1:[
 ['Conceito', 'Mesma fórmula molecular, estruturas diferentes.', ['Isômeros têm propriedades diferentes','Dois grandes grupos: plana (constitucional) e espacial (estereoisomeria)'], null],
 ['Isomeria plana', 'Diferem na estrutura.', ['**Cadeia:** esqueleto diferente (butano e metilpropano)','**Posição:** mesmo grupo em posições diferentes (1-propanol e 2-propanol)','**Função:** funções diferentes (etanol e éter dimetílico)','**Metameria:** posição do heteroátomo','**Tautomeria:** equilíbrio aldeído/enol ou cetona/enol'], null],
 ['Isomeria espacial', 'Mesma ligação, arranjo diferente no espaço.', ['**Geométrica (cis-trans):** em dupla ou ciclo','**Óptica:** carbono quiral (4 grupos diferentes), desvio da luz polarizada'], 'Quiral = não sobreponível à imagem no espelho.']
],
d2:[
 ['Isomeria geométrica', 'Cis e trans.', ['Cis: grupos iguais do mesmo lado','Trans: lados opostos','Requer dois ligantes diferentes em cada carbono da dupla','Propriedades físicas diferentes'], null],
 ['Isomeria óptica', 'Enantiômeros.', ['Um desvia a luz para a direita (dextrógiro), outro para a esquerda (levógiro)','Mistura 50% e 50%: racêmica, inativa','Importante na farmacologia: um enantiômero pode ser ineficaz ou tóxico (talidomida)','Nº de isômeros ópticos = 2ⁿ (n carbonos quirais)'], null],
 ['Aplicações', 'Por que importa.', ['Fármacos e aromas','Gorduras trans (isômero geométrico) e saúde','Sabores: limoneno'], null]
],
ex:[
 { q:'Etanol (CH₃CH₂OH) e éter dimetílico (CH₃OCH₃) são isômeros de:', a:['cadeia','posição','função','compensação','geométricos'], g:'C', c:'Mesma fórmula C₂H₆O com funções diferentes.' },
 { q:'Um carbono quiral é aquele ligado a:', a:['quatro grupos iguais','quatro grupos diferentes','dois grupos iguais','um grupo apenas','três hidrogênios'], g:'B', c:'Assimetria.' }
],
pr:[
 { q:'Quantos isômeros ópticos tem uma molécula com 2 carbonos quirais diferentes?', a:['1','2','3','4','8'], g:'D', c:'2² = 4.' },
 { q:'A isomeria cis-trans ocorre em compostos com:', a:['apenas ligações simples lineares','dupla ligação com ligantes diferentes','cadeia aberta apenas','função álcool','nenhuma insaturação'], g:'B', c:'A dupla impede a rotação.' },
 { q:'O butano e o metilpropano são isômeros de:', a:['função','posição','cadeia','óptica','tautomeria'], g:'C', c:'C₄H₁₀ com esqueletos diferentes.' },
 { q:'Misturas racêmicas:', a:['desviam a luz para a direita','desviam a luz para a esquerda','não desviam a luz polarizada','são sempre tóxicas','não existem'], g:'C', c:'Os desvios se anulam.' }
],
erros:['Confundir isomeria de função e de cadeia.','Achar que todo carbono com 4 ligações é quiral.','Esquecer os requisitos da isomeria cis-trans.','Usar 2ⁿ sem checar os carbonos quirais.'],
check:['reconhecer isômeros planos','identificar carbono quiral','distinguir cis e trans','calcular nº de isômeros ópticos']
},

{ t:'Reações orgânicas',
d1:[
 ['Substituição', 'Troca de átomos.', ['Alcanos: halogenação (Cl₂ com luz)','Aromáticos: nitração, sulfonação, halogenação','Orientadores de substituição'], null],
 ['Adição', 'Em ligações duplas e triplas.', ['Hidrogenação: alceno + H₂ → alcano (gorduras insaturadas viram saturadas)','Halogenação: + Cl₂ ou Br₂','Hidratação: + H₂O → álcool','Regra de Markovnikov: H vai para o carbono mais hidrogenado'], 'Teste do bromo: descora com insaturações.'],
 ['Eliminação e oxidação', 'Formam insaturações ou oxidam.', ['Desidratação de álcool → alceno ou éter','Oxidação de álcool primário → aldeído → ácido','Álcool secundário → cetona','Combustão total: CO₂ + H₂O'], null]
],
d2:[
 ['Esterificação e hidrólise', 'Ésteres.', ['Ácido + álcool ⇌ éster + água','Hidrólise: reação inversa','Saponificação: éster + base → sal (sabão) + glicerol'], null],
 ['Sabão e detergente', 'Limpeza.', ['Sabão: sal de ácido graxo','Parte polar (cabeça) e apolar (cauda)','Micelas retêm gordura','Detergentes sintéticos podem causar espuma e poluição'], null],
 ['Biodiesel e combustíveis', 'Energia renovável.', ['Transesterificação de óleos vegetais com álcool','Etanol: fermentação da cana','Impacto: ciclo de carbono e uso do solo','Combustão incompleta forma CO'], null]
],
ex:[
 { q:'A hidrogenação de um alceno produz:', a:['alcino','alcano','álcool','ácido','éster'], g:'B', c:'Adição de H₂ à dupla ligação.' },
 { q:'A saponificação produz:', a:['ácido e álcool','sabão e glicerol','éster e água','alceno e água','CO₂ e água'], g:'B', c:'Gordura + base.' }
],
pr:[
 { q:'A oxidação de um álcool primário leva a:', a:['alceno','cetona','aldeído e depois ácido carboxílico','éter','alcano'], g:'C', c:'Aldeído e depois ácido.' },
 { q:'A reação de ácido carboxílico com álcool forma:', a:['sal','éter','éster','alceno','amina'], g:'C', c:'Esterificação.' },
 { q:'A reação de bromo com alceno é de:', a:['substituição','adição','eliminação','esterificação','combustão'], g:'B', c:'Quebra da dupla e adição de Br₂.' },
 { q:'O sabão limpa porque suas moléculas têm:', a:['só parte polar','só parte apolar','parte polar e parte apolar','carga neutra','nenhum dos dois'], g:'C', c:'Interage com água e gordura.' }
],
erros:['Confundir adição com substituição.','Esquecer que álcool secundário forma cetona.','Achar que esterificação é irreversível.','Ignorar o ciclo de carbono dos biocombustíveis.'],
check:['classificar reações orgânicas','prever produtos de adição e oxidação','explicar a saponificação','relacionar biodiesel e etanol à matriz energética']
},

{ t:'Polímeros',
d1:[
 ['O que são', 'Macromoléculas formadas por unidades repetidas (monômeros).', ['Naturais: celulose, amido, proteínas, borracha natural, DNA','Sintéticos: plásticos, nylon, PVC, poliéster','**Polimerização:** união de monômeros'], null],
 ['Tipos de polimerização', 'Adição e condensação.', ['**Adição:** monômeros com dupla ligação (polietileno, PVC, poliestireno)','**Condensação:** libera molécula pequena (água); poliésteres (PET) e poliamidas (nylon)','Copolímeros: dois ou mais monômeros'], null],
 ['Plásticos comuns', 'Usos.', ['Polietileno (PE): sacolas e garrafas','Polipropileno (PP): potes','PVC: tubos','Poliestireno (isopor)','PET: garrafas','Teflon: antiaderente'], null]
],
d2:[
 ['Termoplásticos e termofixos', 'Comportamento ao calor.', ['**Termoplásticos:** amolecem e podem ser remoldados (recicláveis)','**Termofixos:** não amolecem após curados (baquelite)','**Elastômeros:** borrachas'], null],
 ['Reciclagem', 'Códigos 1 a 7.', ['PET (1), PEAD (2), PVC (3), PEBD (4), PP (5), PS (6), outros (7)','Reciclagem mecânica, química e energética','Coleta seletiva e logística reversa'], 'Reciclar poupa energia e matéria-prima.'],
 ['Impacto ambiental', 'Questão atual.', ['Plásticos demoram séculos para se degradar','Microplásticos nos oceanos','Bioplásticos e biodegradáveis (PLA)','Redução e reuso antes de reciclar'], null]
],
ex:[
 { q:'O polietileno é obtido pela polimerização do:', a:['etano','eteno','etanol','metano','propano'], g:'B', c:'Eteno (etileno) por adição.' },
 { q:'Plásticos termoplásticos se caracterizam por:', a:['não poderem ser remoldados','amolecerem com o calor e poderem ser reciclados','serem sempre biodegradáveis','serem metálicos','se decomporem em dias'], g:'B', c:'Podem ser fundidos novamente.' }
],
pr:[
 { q:'O nylon é um polímero de:', a:['adição','condensação','nuclear','combustão','fissão'], g:'B', c:'Poliamida, forma-se com perda de água.' },
 { q:'A celulose é um polímero natural formado por:', a:['aminoácidos','glicose','nucleotídeos','etileno','ésteres'], g:'B', c:'Presente na parede vegetal.' },
 { q:'A principal desvantagem dos plásticos convencionais é:', a:['serem solúveis em água','demorarem muito para se degradar','serem condutores','explodirem','serem transparentes'], g:'B', c:'Acúmulo no ambiente.' },
 { q:'A logística reversa busca:', a:['produzir mais plástico','devolver os resíduos à cadeia produtiva','queimar lixo','aumentar o descarte','enterrar sempre'], g:'B', c:'Reaproveitamento.' }
],
erros:['Confundir monômero e polímero.','Dizer que todo plástico é biodegradável.','Misturar adição e condensação.','Ignorar redução e reuso na hierarquia de resíduos.'],
check:['definir polímero e monômero','diferenciar adição e condensação','citar plásticos e usos','explicar impactos e reciclagem']
},

{ t:'Química ambiental',
d1:[
 ['Poluição do ar', 'Principais poluentes.', ['CO, CO₂, SO₂, NOx, material particulado, O₃ troposférico','Fontes: veículos, indústrias, queimadas','Inversão térmica agrava a poluição','Catalisadores automotivos reduzem emissões'], null],
 ['Efeito estufa e aquecimento', 'Gases que retêm calor.', ['CO₂, CH₄, N₂O, vapor-d\'água','Efeito estufa natural é essencial','Intensificação por queima de combustíveis e desmatamento','Consequências: derretimento, aumento do nível do mar, eventos extremos'], 'Efeito estufa natural ≠ aquecimento global.'],
 ['Camada de ozônio', 'Filtro do UV.', ['O₃ na estratosfera','CFCs destroem o ozônio','Protocolo de Montreal reduziu os CFCs','Ozônio ao nível do solo é poluente'], null]
],
d2:[
 ['Chuva ácida', 'Óxidos de enxofre e nitrogênio.', ['SO₂ → H₂SO₄; NO₂ → HNO₃','Danos a florestas, lagos, monumentos','pH menor que 5,6'], null],
 ['Poluição da água e do solo', 'Problemas.', ['Eutrofização: excesso de nitrogênio e fósforo causa proliferação de algas','Esgoto sem tratamento','Metais pesados (mercúrio, chumbo)','Agrotóxicos','Derramamento de petróleo'], null],
 ['Soluções', 'Química verde e sustentabilidade.', ['Energias renováveis','Tratamento de esgoto e água','Reciclagem e economia circular','Química verde: reduzir resíduos','Crédito de carbono e ODS'], null]
],
ex:[
 { q:'A eutrofização de lagos é causada principalmente por excesso de:', a:['oxigênio','nitrogênio e fósforo','cloro','CO₂ apenas','ferro'], g:'B', c:'Nutrientes favorecem algas e reduzem o oxigênio.' },
 { q:'Os CFCs foram restringidos porque:', a:['causam chuva ácida','destroem a camada de ozônio','aquecem o solo','geram metano','poluem apenas rios'], g:'B', c:'Liberam cloro na estratosfera.' }
],
pr:[
 { q:'O gás mais associado ao agravamento do efeito estufa é o:', a:['O₂','N₂','CO₂','He','Ar'], g:'C', c:'Emitido na queima de combustíveis.' },
 { q:'A chuva ácida é formada por:', a:['O₂ e N₂','óxidos de enxofre e nitrogênio','gás hélio','argônio','hidrogênio'], g:'B', c:'Formam ácidos ao reagir com água.' },
 { q:'Mercúrio e chumbo em rios são exemplos de poluição por:', a:['metais pesados','gases nobres','vitaminas','sais minerais inofensivos','oxigênio'], g:'A', c:'Bioacumulam na cadeia alimentar.' },
 { q:'O princípio da química verde é:', a:['gerar mais resíduos','prevenir resíduos e usar processos mais seguros','esconder poluentes','só reciclar','queimar tudo'], g:'B', c:'Prevenção é melhor que remediação.' }
],
erros:['Confundir camada de ozônio com efeito estufa.','Achar que todo efeito estufa é ruim.','Esquecer da bioacumulação.','Culpar uma única causa para um problema multifatorial.'],
check:['distinguir efeito estufa, ozônio e chuva ácida','explicar a eutrofização','citar fontes e consequências da poluição','propor soluções sustentáveis']
}
];
