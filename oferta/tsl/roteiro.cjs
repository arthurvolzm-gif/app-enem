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
  { t: 'Cada matéria reduzida a *25 temas*.', img: 'capas' },
  { t: 'Os que mais caem vêm marcados com 🔥', img: '/oferta/img/pagina-fogo.webp', tipo: 'pagina' },
  { t: 'E um aplicativo que transforma tudo em *um plano diário*.', img: '/img/print-app-plano.webp' },
  { t: 'Você abre e já sabe *o que estudar hoje*,' , img: '/img/print-app-inicio.webp' },
  { t: 'por quanto tempo, e *o que revisar*.', img: '/img/print-app-tema.webp' },
  { t: 'A partir de *30 minutos* por dia.' },
  { t: 'Revisão no tempo certo: *1, 3 e 7 dias* depois.' },
  { t: 'E você vê *o que já fez* em cada matéria.', img: '/img/print-app-progresso.webp' },

  // ROTA
  { t: 'O ENEM tem *2 domingos* de prova.' },
  { t: 'Até o 1º dia: *Linguagens, Humanas e Redação*.' },
  { t: 'Na semana entre as provas: *Natureza e Matemática*.' },
  { t: 'Cada matéria fresca *na hora certa*.' },

  // OFERTA
  { t: 'Você recebe:', lista: ['9 materiais, um por matéria', '225 temas, os que mais caem marcados', '"Como cai no ENEM" em cada tema', 'Aplicativo Plano ENEM', 'Revisão e lembretes'] },
  { t: 'Tudo isso por', preco: 'R$ 29,90' },
  { t: '*Pagamento único.* Acesso imediato no seu e-mail.' },
  { t: 'E você tem *7 dias de garantia*.', selo: true },
  { t: 'Se não gostar, devolvemos *100% do valor*.' },

  // PÓS PITCH
  { t: '"Ainda dá tempo?"' },
  { t: 'O plano é feito para *o tempo que falta* e começa pelo que mais pesa.' },
  { t: '"Preciso instalar alguma coisa?"' },
  { t: 'Não. Abre *no navegador do celular*.' },
  { t: 'Não prometemos nota.' },
  { t: 'Mas *cada dia bem usado conta*.' },
  { t: 'E cada dia sem plano é *um dia a menos*.' },
  { t: 'Toque no botão *abaixo do vídeo*', seta: true },
  { t: 'e comece hoje *o seu plano*.', seta: true, destaque: true }
];
