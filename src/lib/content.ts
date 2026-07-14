// Conteúdo da landing Lar do Pet (copy + dados). Fonte de verdade única:
// espelha a landing unificada do Figma. As seções consomem daqui.

export const NAV = ['Início', 'Serviços', 'Cuidadores', 'Como funciona', 'Comunidade']

export const HERO = {
  badge: 'Cuidadores verificados',
  h1a: 'Cuidado do seu pet',
  h1b: 'no próprio lar.',
  frase: 'A tranquilidade de saber que tudo está bem.',
  sub: 'Viaje, trabalhe, descanse: seu pet fica seguro sem sair de casa e você acompanha tudo por foto, horário e localização em tempo real.',
  ctas: [
    { label: 'Encontrar um cuidador', variant: 'primary' as const, icon: 'search' },
    { label: 'Quero ser cuidador', variant: 'secondary' as const },
  ],
  stats: [
    { icon: 'paw-print', num: '2.400+', label: 'cuidadores verificados' },
    { icon: 'users', num: '18 mil', label: 'famílias atendidas' },
    { icon: 'star', num: '4,9', label: 'avaliação média', gold: true },
  ],
  photo: '/images/hero.jpg',
  momento: {
    time: '10:15',
    img: '/images/momento-nina.jpg',
    text: 'Nina comeu no sofá às 10h',
    loc: 'Localização confirmada na casa',
  },
}

export const SERVICOS = {
  kicker: 'Serviços',
  title: 'Cuidado completo, no conforto do próprio lar',
  sub: 'Cão, gato ou ave. Tudo com um cuidador verificado, sem tirar o pet da rotina dele.',
  items: [
    { img: '/images/servico-cuidado.jpg', title: 'Cuidado no lar (babá / pernoite)', desc: 'O cuidador fica com o pet na sua casa, com companhia e pernoite enquanto você viaja, mantendo a rotina e a segurança.' },
    { img: '/images/servico-banho.jpg', title: 'Banho', desc: 'Banho caprichado em casa, sem estresse de transporte.' },
    { img: '/images/servico-tosa.jpg', title: 'Tosa', desc: 'Tosa higiênica e de raça, no ritmo do pet.' },
    { img: '/images/servico-passeio.jpg', title: 'Passeio', desc: 'Passeios no horário combinado, com registro do trajeto.' },
    { img: '/images/servico-vet.jpg', title: 'Veterinário domiciliar', desc: 'Atendimento e aplicação de medicação em casa, com confirmação.' },
    { img: '/images/servico-adestramento.jpg', title: 'Adestramento', desc: 'Adestramento positivo, no ambiente que o pet já conhece.' },
  ],
}

export const COMO = {
  kicker: 'Como funciona',
  title: 'Do primeiro contato ao pet em casa, em paz',
  steps: [
    { t: 'Busque perto de você', d: 'Filtre cuidadores verificados por serviço, espécie e distância.' },
    { t: 'Converse e agende', d: 'Alinhe tudo no chat, reserve na agenda do cuidador e pague com segurança pela plataforma.' },
    { t: 'Acompanhe em tempo real', d: 'Foto com horário, localização e confirmação de medicação.' },
    { t: 'Avalie e recontrate', d: 'Dê a nota e favorite para chamar de novo com um toque.' },
  ],
}

export const MOMENTO = {
  kicker: 'O diferencial',
  title: 'O Momento do Cuidado',
  text: 'Enquanto você está fora, o cuidado vira prova. A cada visita, o app registra e envia para você, automaticamente. Nada de ficar cobrando foto no WhatsApp.',
  bullets: [
    'Foto com horário de cada cuidado',
    'Localização confirmada na sua casa',
    'Confirmação de medicação na hora certa',
  ],
  card: {
    time: '14:02',
    img: '/images/momento-theo.jpg',
    text: 'Théo tomou o remédio às 14h',
    loc: 'Localização confirmada na casa',
  },
}

export const CUIDADORES = {
  kicker: 'Perto de você',
  title: 'Cuidadores verificados em destaque',
  verTodos: 'Ver todos',
  items: [
    { initial: 'M', name: 'Marina Souza', loc: 'São Paulo · 2,3 km', rating: '4,9', reviews: '128 serviços', note: 'primeiros socorros', services: ['Banho', 'Tosa', 'Passeio'], price: 'R$ 50' },
    { initial: 'R', name: 'Rafael Lima', loc: 'Pinheiros · 3,1 km', rating: '4,8', reviews: '86 serviços', note: 'adestrador', services: ['Passeio', 'Adestramento'], price: 'R$ 45' },
    { initial: 'B', name: 'Bianca Alves', loc: 'Vila Mariana · 4,0 km', rating: '5,0', reviews: '203 serviços', note: 'téc. veterinária', services: ['Veterinário', 'Babá'], price: 'R$ 70' },
  ],
}

export const SEGURANCA = {
  kicker: 'Segurança',
  title: 'Confiança não é favor, é processo',
  sub: 'As três perguntas que todo tutor faz, respondidas antes de você contratar. Sua casa é sua fortaleza. Seus animais, suas preciosidades.',
  questions: [
    { q: 'Minha casa fica segura?', items: ['Antecedentes e identidade verificados', 'Verificação de mão dupla: checamos você também', 'Protocolo de entrega de chaves'] },
    { q: 'Meu pet fica bem?', items: ['Cuidadores que amam animais de verdade', 'Prova em tempo real de cada cuidado', 'Suporte e protocolo de emergência 24/7'] },
    { q: 'São profissionais mesmo?', items: ['Certificação incentivada com parceiros', 'Avaliações reais de outros tutores', 'Preço justo, combinado por hora'] },
  ],
}

export const PUBLICOS = {
  tutores: { kicker: 'Para tutores', title: 'Encontre quem cuida do seu pet', text: 'Cuidadores verificados perto de você, com prova em tempo real. Você viaja e trabalha em paz.', cta: 'Encontrar um cuidador' },
  cuidadores: { kicker: 'Para cuidadores', title: 'Trabalhe com o que você ama', text: 'Renda flexível cuidando de pets, com clientes verificados, reputação, pagamento garantido e apoio para se certificar.', cta: 'Quero ser cuidador' },
}

export const HISTORIAS = {
  kicker: 'Histórias',
  title: 'Quem já dorme tranquilo',
  feature: { kicker: 'Nossa história', title: 'Como nasceu o Lar do Pet', sub: 'O CEO conta em 90 segundos por que a plataforma existe e o que é o Momento do Cuidado.', cover: '/images/hero.jpg', cta: 'Assistir (90s)' },
  testimonials: [
    { quote: 'Viajei tranquila pela primeira vez em anos. Recebia foto do Théo tomando o remédio na hora certa.', avatar: '/images/avatar-renata.jpg', name: 'Renata S.', role: 'tutora do Théo' },
    { quote: 'Sempre amei animais. Aqui virei profissional, com agenda cheia e pagamento garantido.', avatar: '/images/avatar-rafael.jpg', name: 'Rafael L.', role: 'cuidador verificado' },
  ],
}

export const FAQ = {
  kicker: 'Dúvidas',
  title: 'Perguntas frequentes',
  items: [
    { q: 'O que é um petsitter?', a: 'É uma babá de animais: alguém verificado que vai até a sua casa e cuida do seu pet enquanto você está fora.' },
    { q: 'Como sei que o cuidador é de confiança?', a: 'Todos passam por verificação de identidade, antecedentes e avaliação. Cada perfil mostra avaliações reais e histórico de serviços.' },
    { q: 'E se meu pet tiver uma emergência na minha ausência?', a: 'O suporte fica disponível 24 horas por dia. O app tem um protocolo de emergência que conecta você e o cuidador a um veterinário parceiro.' },
    { q: 'Como acompanho o serviço?', a: 'Pelo app: foto com horário, localização e confirmação de medicação a cada visita. Você define quantas atualizações quer receber.' },
    { q: 'Como funcionam o pagamento e o cancelamento?', a: 'Pagamento seguro pelo próprio app, por hora combinada. Cancelamento com até 24 horas de antecedência tem reembolso garantido.' },
  ],
}

export const CTA = {
  frase: 'A tranquilidade de saber que tudo está bem.',
  title: 'Com quem eu deixo meu pet?',
  sub: 'Com alguém que ama animais tanto quanto você. Cadastre-se de graça e encontre o cuidador certo para o seu pet.',
}

export const FOOTER = {
  tagline: 'A tranquilidade de saber que tudo está bem. Um projeto da comunidade Corre Digital.',
  cols: [
    { h: 'Produto', items: ['Como funciona', 'Serviços', 'Segurança', 'Preços'] },
    { h: 'Empresa', items: ['Sobre nós', 'Comunidade', 'Seja cuidador'] },
    { h: 'Suporte', items: ['Central de ajuda', 'Fale conosco', 'Reclame aqui'] },
    { h: 'Legal', items: ['Termos de uso', 'Privacidade e LGPD'] },
  ],
  copyright: '© 2026 Lar do Pet · Corre Digital. Todos os direitos reservados.',
}
