/* Matemática: páginas de texto extras */
module.exports = [
{ t:'Análise combinatória', txt:[
 { h:'Exemplos resolvidos em linguagem comum', p:[
  'Considere uma senha de 4 dígitos numéricos que podem se repetir. Para cada casa há 10 opções, e o total é 10 × 10 × 10 × 10 = 10.000 senhas. Se os dígitos não podem se repetir, as opções vão diminuindo: 10 × 9 × 8 × 7 = 5.040. A diferença entre os dois casos está só na repetição, e é a pergunta que você deve fazer logo no início: "pode repetir?". Esse detalhe do enunciado muda completamente a resposta.',
  'Agora, um problema de comissões: de um grupo de 6 professores e 4 alunos, quer-se formar uma comissão de 3 pessoas com exatamente 2 professores e 1 aluno. Escolhem-se os professores de C(6, 2) = 15 maneiras e o aluno de C(4, 1) = 4 maneiras, e, pelo princípio multiplicativo, são 15 × 4 = 60 comissões. Se a comissão pudesse ter qualquer composição, seriam C(10, 3) = 120. Perceba como o "e" liga as escolhas e leva à multiplicação.',
  'Por fim, um problema de anagramas: quantos anagramas tem a palavra BANANA? São 6 letras, com A repetido 3 vezes e N repetido 2 vezes. O total é 6!/(3! · 2!) = 720/12 = 60. Dividimos para eliminar as trocas entre letras iguais, que não geram um anagrama novo. Esses três modelos, com repetição, comissões e anagramas, resolvem a grande maioria das questões de contagem que aparecem em provas, desde que se identifique corretamente se a ordem importa.'] }
]}
];
