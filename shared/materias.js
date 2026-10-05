/* =========================================================
   MATÉRIAS DO APP: monta window.MATERIAS a partir do conteúdo
   completo (shared/conteudo/*.js, o mesmo dos PDFs).
   Carregue os arquivos de conteúdo ANTES deste.
   Cada tema ganha um id fixo: <matéria><número> (ex.: soc4).
   ========================================================= */
(function(){
  const ORDEM = ['mat','fis','qui','bio','his','geo','fil','soc','lin'];
  const C = window.CONTEUDO || {};
  const lista = ORDEM.filter(id=>C[id]).map(id=>({
    id, nome:C[id].nome, icone:C[id].icone,
    temas: C[id].temas.map((t,i)=>({ id:id+(i+1), titulo:t.t, prio:t.p==='a'?'alta':'media', secoes:t.s, dica:t.enem }))
  }));
  /* Redação: poucos temas, no app servem para os blocos de redação do plano */
  lista.push({ id:'red', nome:'Redação', icone:'✍️', temas:[
    { id:'red1', titulo:'As 5 competências', prio:'alta', dica:'Corrigir as suas redações por competência mostra exatamente onde você perde pontos.',
      secoes:[['As competências', 'Cada uma vale de 0 a 200 pontos, somando até 1000.', ['C1: norma culta','C2: tema, tipo textual e repertório','C3: argumentação','C4: coesão','C5: proposta de intervenção'], null]] },
    { id:'red2', titulo:'Estrutura em 4 parágrafos', prio:'alta', dica:'Escrever sempre na mesma estrutura economiza tempo no dia da prova.',
      secoes:[['A estrutura', null, ['Introdução: repertório, contextualização e tese','Dois desenvolvimentos: uma causa por parágrafo, com explicação e exemplo','Conclusão: proposta de intervenção completa'], null]] },
    { id:'red3', titulo:'Repertório sociocultural', prio:'alta', dica:'Tenha 5 repertórios coringas bem dominados em vez de 30 decorados pela metade.',
      secoes:[['O que a banca quer', null, ['Legitimado: vem de uma área do conhecimento (história, filosofia, leis, dados)','Pertinente: tem relação com o tema','Produtivo: é usado para sustentar o argumento'], null]] },
    { id:'red4', titulo:'Proposta de intervenção', prio:'alta', dica:'Confira os 5 elementos antes de passar a limpo.',
      secoes:[['Os 5 elementos', null, ['Agente','Ação','Meio ou modo','Finalidade','Detalhamento'], 'A proposta precisa resolver as causas que você apresentou e respeitar os direitos humanos.']] }
  ]});
  window.MATERIAS = lista;
})();
