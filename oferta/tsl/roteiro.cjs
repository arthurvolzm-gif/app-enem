/* Roteiro do vídeo TSL (texto na tela, vertical 1080x1920).
   Cada item é uma tela. *palavra* fica em amarelo. img = print/capa mostrado acima do texto.
   Edite aqui e rode: node oferta/tsl/gerar.cjs  (saída em oferta/tsl.mp4)
   Sem travessão, sem promessa de nota, sem número sem fonte. */
module.exports = [
  // LEAD
  { t: 'Faltam *menos de 30 dias* para o ENEM.' },
  { t: 'Se você ainda não sabe *por onde começar*,' },
  { t: 'assista até o final.' },
  { t: 'Porque o problema não é falta de tempo.' },
  { t: 'É estudar *na ordem errada*.' },

  // IDENTIFICAÇÃO
  { t: 'Você abre um conteúdo.' },
  { t: 'Depois outro.' },
  { t: 'E no fim do dia sente que *não fechou nada*.' },
  { t: 'Monta um cronograma, segue três dias...' },
  { t: '...e *larga*.' },
  { t: 'Olha a lista de conteúdos do ENEM e pensa: *não vai dar tempo*.' },

  // VIRADA
  { t: 'Agora pensa comigo.' },
  { t: 'O ENEM *não cobra tudo* com o mesmo peso.' },
  { t: 'Alguns temas aparecem em *quase toda prova*.' },
  { t: 'Outros quase nunca.' },
  { t: 'Quem estuda tudo igual gasta os dias que restam *no que menos cai*.' },
  { t: 'Você não precisa estudar tudo.' },
  { t: 'Precisa saber *o que estudar primeiro*.', destaque: true },

  // MECANISMO
  { t: 'Foi para isso que criamos o *Método 25 Temas*.' },
  { t: 'As 9 matérias do ENEM em *25 temas cada*.', img: 'topicos' },
  { t: 'Os que mais caem vêm marcados com 🔥', img: '/oferta/img/topico-1.webp', tipo: 'pagina' },
  { t: 'Cada tema vai do básico ao *Como cai no ENEM*.', img: '/oferta/img/topico-6.webp', tipo: 'pagina' },
  { t: 'E fecha com um *checklist de revisão*.' },
  { t: 'Material completo para estudar *em menos de 30 dias*.' },

  // ROTA
  { t: 'O ENEM tem *2 domingos* de prova.' },
  { t: 'Até o 1º dia: *Linguagens, Humanas e Redação*.' },
  { t: 'Na semana entre as provas: *Natureza e Matemática*.' },
  { t: 'Cada matéria fresca *na hora certa*.' },

  // OFERTA
  { t: 'Você recebe:', lista: ['9 materiais, um por matéria', '225 temas, os que mais caem marcados', '"Como cai no ENEM" em cada tema', 'PDF para celular ou impressão'] },
  { t: 'A partir de', preco: 'R$ 14,90', nota: 'pagamento único' },
  { t: 'E no *Plano Completo*, você ganha 3 bônus.' },
  { t: 'Bônus 1: o *aplicativo Plano ENEM*, que diz o que estudar hoje.', img: '/img/print-app-plano.webp' },
  { t: 'Bônus 2: *resumos rápidos* de cada tema.', img: '/img/print-app-resumos.webp' },
  { t: 'Bônus 3: *225 questões* no estilo do ENEM, com gabarito comentado.' },
  { t: '*Pagamento único.* Acesso imediato no seu e-mail.' },
  { t: 'E você tem *7 dias de garantia*.', selo: true },
  { t: 'Se não gostar, devolvemos *100% do valor*.' },

  // PÓS PITCH
  { t: '"Ainda dá tempo?"' },
  { t: 'O material foi feito para *o tempo que falta*: comece pelos temas com 🔥.' },
  { t: '"Preciso de computador?"' },
  { t: 'Não. Abre *no celular*, ou você imprime.' },
  { t: 'Não prometemos nota.' },
  { t: 'Mas *cada dia bem usado conta*.' },
  { t: 'E cada dia sem material é *um dia a menos*.' },
  { t: 'Toque no botão *abaixo do vídeo*', seta: true },
  { t: 'e escolha *o seu plano*.', seta: true, destaque: true }
];
