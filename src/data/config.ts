export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draanabassi.com.br';

export const professional = {
  name: "Dra. Ana Bassi",
  firstName: "Ana",
  crm: "CRM/SP 129.959",
  rqe: null,
  professionalTitle: "Médica",
  phoneDisplay: "(11) 92148-8886",
  phoneInternational: "+5511921488886",
  whatsappUrl: "https://wa.me/5511921488886",
  instagramHandle: "@dra.anabassi",
  instagramUrl: "https://www.instagram.com/dra.anabassi/",
  address: {
    street: "Av. Industrial",
    number: "780",
    room: "Sala 112",
    district: "Jardim",
    city: "Santo André",
    state: "SP",
    postalCode: "09080-500",
    country: "Brasil",
    formatted: "Av. Industrial, 780 • Sala 112 • Jardim • Santo André • SP"
  },
  disclaimer: "Os tratamentos são indicados após avaliação médica individual. Resultados e respostas ao tratamento podem variar de acordo com cada paciente.",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Av.+Industrial%2C+780+-+Jardim%2C+Santo+Andr%C3%A9+-+SP%2C+09080-500"
};

export const navigation = [
  { label: "Início", href: "#home" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta inclui uma conversa detalhada sobre suas queixas, histórico, rotina e objetivos, seguida da avaliação médica e da orientação dos próximos passos."
  },
  {
    question: "Qual cuidado é mais indicado para mim?",
    answer: "A indicação depende das características da pele ou dos cabelos, do histórico médico e dos objetivos de cada paciente. Por isso, o plano é definido após avaliação individual."
  },
  {
    question: "A Dra. Ana atende questões de pele e cabelo?",
    answer: "O atendimento contempla cuidados relacionados à saúde da pele e dos cabelos. A necessidade de exames ou tratamentos complementares é discutida durante a consulta."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "O agendamento pode ser feito diretamente pelo WhatsApp da Dra. Ana Bassi."
  },
  {
    question: "Onde fica o consultório?",
    answer: "O consultório está localizado na Av. Industrial, 780, Jardim, Santo André, SP, CEP 09080-500."
  },
  {
    question: "Os tratamentos possuem o mesmo resultado para todas as pessoas?",
    answer: "Não. A resposta aos tratamentos varia de acordo com as características, condições clínicas e rotina de cada paciente."
  },
  {
    question: "Preciso saber qual tratamento quero antes da consulta?",
    answer: "Não. A consulta existe justamente para compreender sua necessidade e orientar as possibilidades de cuidado mais adequadas."
  }
];

export const carePillars = [
  {
    title: "Dermatologia clínica",
    description: "Avaliação e acompanhamento da saúde da pele, com atenção à prevenção, ao diagnóstico e ao tratamento individualizado."
  },
  {
    title: "Saúde capilar",
    description: "Investigação de queda de cabelo, alterações do couro cabeludo e fatores que interferem na saúde dos fios."
  },
  {
    title: "Dermatologia estética",
    description: "Cuidados voltados à qualidade da pele, firmeza, textura e envelhecimento natural, sempre após avaliação médica."
  }
];

export interface CareCard {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  altText: string;
  imageColor: string;
  duration?: string;
  recovery?: string;
  benefits?: string;
  idealCandidates?: string;
}

export const careCards: CareCard[] = [
  {
    id: "harmonizacao-facial",
    name: "Estruturação Facial",
    subtitle: "Equilíbrio e sustentação das estruturas faciais",
    description: "Abordagem individualizada com preenchedores para reestruturar volumes perdidos, definir contornos e amenizar sulcos, valorizando a anatomia natural de cada paciente.",
    category: "Dermatologia estética",
    image: "/card_harmonizacao.jpg",
    altText: "Procedimento de estruturação facial com a Dra. Ana Bassi",
    imageColor: "from-[#FCD6C5]/40 to-[#C69A86]/20",
    duration: "60 a 90 minutos",
    recovery: "Imediato (pequeno inchaço ou vermelhidão passageira)",
    benefits: "Suporte estrutural, melhora sutil da simetria e definição de contornos com naturalidade.",
    idealCandidates: "Pessoas que buscam melhorar a proporção facial ou repor volumes anatômicos perdidos."
  },
  {
    id: "preenchimento-labial",
    name: "Preenchimento Labial",
    subtitle: "Definição, contorno e hidratação dos lábios",
    description: "Aplicação precisa de ácido hialurônico para restaurar o contorno natural, suavizar assimetrias e promover hidratação e volume sutis, respeitando as proporções faciais.",
    category: "Dermatologia estética",
    image: "/labial.jpeg",
    altText: "Preenchimento Labial em Santo André com a Dra. Ana Bassi",
    imageColor: "from-[#EDBEAC]/40 to-[#FCD6C5]/20",
    duration: "30 a 45 minutos",
    recovery: "2 a 3 dias para regressão total do inchaço leve",
    benefits: "Lábios hidratados, contornos sutilmente delineados e ajuste anatômico de assimetrias.",
    idealCandidates: "Pessoas com lábios finos, assimétricos ou desidratados que buscam melhora clínica e contorno natural."
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica",
    subtitle: "Suavização de linhas hipercinéticas e prevenção de rugas",
    description: "Aplicação dermatológica precisa para suavizar rugas dinâmicas da testa, glabela e ao redor dos olhos (pés de galinha), além do tratamento para suor excessivo (hiperidrose).",
    category: "Dermatologia clínica",
    image: "/card_facial_injectables.jpg",
    altText: "Aplicação de Toxina Botulínica com a Dra. Ana Bassi",
    imageColor: "from-[#C69A86]/40 to-[#EDBEAC]/20",
    duration: "20 a 30 minutos",
    recovery: "Imediato (evitar deitar ou praticar exercícios nas primeiras 4 horas)",
    benefits: "Aparência descansada, suavização de linhas de expressão e prevenção de marcas estáticas na pele.",
    idealCandidates: "Indicado para prevenção de marcas dinâmicas ou suavização de linhas de expressão estabelecidas."
  },
  {
    id: "bioestimuladores",
    name: "Bioestimuladores de Colágeno",
    subtitle: "Estímulo de colágeno e firmeza tecidual",
    description: "Aplicação injetável de substâncias biocompatíveis que estimulam de forma gradual a produção natural de colágeno pelo próprio organismo, melhorando a firmeza da pele.",
    category: "Dermatologia estética",
    image: "/bioestimuladores_final.jpg",
    altText: "Aplicação de Bioestimuladores de Colágeno em Santo André",
    imageColor: "from-[#FCD6C5]/40 to-[#EDBEAC]/20",
    duration: "45 minutos",
    recovery: "Imediato (leve inchaço localizado por 24h)",
    benefits: "Melhora gradual da flacidez, ganho de firmeza e melhora na textura e qualidade global da pele.",
    idealCandidates: "Pessoas com sinais de perda de firmeza cutânea ou flacidez decorrente do envelhecimento natural."
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    subtitle: "Hidratação injetável e viço profundo da derme",
    description: "Microinjeções de ácido hialurônico de baixo peso molecular combinado com nutrientes diretamente na derme, agindo como um reservatório profundo de hidratação.",
    category: "Dermatologia estética",
    image: "/skinbooster_final.jpg",
    altText: "Tratamento de Hidratação Skinbooster com a Dra. Ana Bassi",
    imageColor: "from-[#EDBEAC]/40 to-[#C69A86]/20",
    duration: "30 a 40 minutos",
    recovery: "Imediato (pequenos pontos vermelhos podem persistir por 24h)",
    benefits: "Hidratação cutânea duradoura, melhora do viço, suavização de linhas finas por desidratação.",
    idealCandidates: "Pessoas com pele desidratada, opacas, sem viço ou com pequenas linhas finas causadas por ressecamento."
  },
  {
    id: "profhilo",
    name: "Profhilo",
    subtitle: "Biorremodelação tecidual multinível",
    description: "Ácido hialurônico ultrapuro de alta fluidez que atua na regeneração e hidratação da matriz extracelular, melhorando o tônus tecidual sem volumizar a face.",
    category: "Dermatologia estética",
    image: "/Profhilo.jpeg",
    altText: "Biorremodelador celular Profhilo com a Dra. Ana Bassi",
    imageColor: "from-[#C69A86]/40 to-[#FCD6C5]/20",
    duration: "20 a 30 minutos",
    recovery: "Imediato (pequenas pápulas no local da aplicação somem em poucas horas)",
    benefits: "Biorremodelação celular, hidratação multinível e melhora global da qualidade e firmeza da pele.",
    idealCandidates: "Pacientes que buscam tratar a flacidez e melhorar a qualidade da pele do rosto ou pescoço sem alterar volumes."
  },
  {
    id: "laser-melasma",
    name: "Laser para Melasma",
    subtitle: "Gerenciamento e controle seguro de manchas",
    description: "Tecnologia que atua na fragmentação do pigmento de melanina por meio de efeito fotoacústico, auxiliando no clareamento seguro e no controle do melasma sem aquecimento excessivo da pele.",
    category: "Dermatologia clínica",
    image: "/laser-melasma.jpeg",
    altText: "Tratamento de laser para melasma em Santo André",
    imageColor: "from-[#FCD6C5]/40 to-[#C69A86]/20",
    duration: "30 a 45 minutos",
    recovery: "Imediato (pele levemente rosada por algumas horas)",
    benefits: "Clareamento gradual e seguro de manchas, uniformização do tom da pele e prevenção de efeito rebote.",
    idealCandidates: "Pacientes que sofrem com melasma ou hiperpigmentação pós-inflamatória e buscam controle de manchas."
  },
  {
    id: "laser-rejuvenescimento",
    name: "Laser Rejuvenescimento",
    subtitle: "Estímulo de colágeno, viço e textura da pele",
    description: "Tecnologia a laser fracionado para promover a renovação da epiderme, refinamento de poros dilatados e estímulo de novas fibras de colágeno na derme profunda.",
    category: "Dermatologia estética",
    image: "/laser-rejuvenescimento.jpeg",
    altText: "Laser para Rejuvenescimento Facial com a Dra. Ana Bassi",
    imageColor: "from-[#EDBEAC]/40 to-[#FCD6C5]/20",
    duration: "30 a 45 minutos",
    recovery: "2 a 4 dias (leve descamação e vermelhidão controladas)",
    benefits: "Redução de rugas finas, refinamento de poros, melhora da textura e do viço da pele.",
    idealCandidates: "Pessoas com sinais de fotoenvelhecimento, poros abertos, linhas finas ou perda global de viço."
  },
  {
    id: "criolipolise",
    name: "Criolipólise",
    subtitle: "Resfriamento controlado para gordura localizada",
    description: "Procedimento não invasivo baseado em tecnologia de criolipólise para tratar depósitos de gordura localizada por meio de resfriamento controlado de áreas selecionadas.",
    category: "Dermatologia estética",
    image: "/criolipolise.jpeg",
    altText: "Tratamento de Criolipólise com a Dra. Ana Bassi em Santo André",
    imageColor: "from-[#C69A86]/40 to-[#EDBEAC]/20",
    duration: "60 minutos por área",
    recovery: "Imediato (área tratada pode apresentar dormência ou vermelhidão temporárias)",
    benefits: "Redução não cirúrgica de depósitos de gordura localizada na região tratada por meio de eliminação gradual.",
    idealCandidates: "Pessoas próximas ao peso ideal que possuem depósitos de gordura localizada difíceis de eliminar com dieta."
  },
  {
    id: "tratamentos-capilares",
    name: "Tratamentos Capilares",
    subtitle: "Terapias capilares integradas para saúde dos fios",
    description: "Investigação clínica de queixas capilares associando procedimentos como intradermoterapia capilar, microagulhamento e drug delivery para fortalecimento e estímulo dos folículos pilosos.",
    category: "Saúde capilar",
    image: "/capilares.jpeg",
    altText: "Tratamento de queda de cabelo e saúde capilar com a Dra. Ana Bassi",
    imageColor: "from-[#FCD6C5]/40 to-[#EDBEAC]/20",
    duration: "40 a 50 minutos",
    recovery: "Imediato",
    benefits: "Fortalecimento do bulbo capilar, controle da queda capilar excessiva e estímulo ao crescimento de fios saudáveis.",
    idealCandidates: "Pacientes com queixas de queda capilar excessiva, afinamento dos fios ou alopecia."
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento",
    subtitle: "Indução percutânea de colágeno e Drug Delivery",
    description: "Procedimento realizado com microagulhas para criar microcanais na derme, estimulando a cicatrização natural e permitindo a permeação profunda de ativos terapêuticos selecionados.",
    category: "Dermatologia estética",
    image: "/microagulhamento.jpeg",
    altText: "Procedimento de Microagulhamento com a Dra. Ana Bassi",
    imageColor: "from-[#EDBEAC]/40 to-[#C69A86]/20",
    duration: "45 minutos",
    recovery: "24h a 48h de vermelhidão moderada",
    benefits: "Melhora de cicatrizes de acne, textura cutânea mais uniforme e estímulo de colágeno.",
    idealCandidates: "Pacientes com cicatrizes de acne, marcas superficiais ou irregularidades no relevo da pele."
  },
  {
    id: "preenchimento-olheiras",
    name: "Preenchimento de Olheiras",
    subtitle: "Suporte e suavização do sulco lacrimal",
    description: "Preenchimento cuidadoso da concavidade sob os olhos com ácido hialurônico de baixa densidade, atenuando olheiras estruturais profundas.",
    category: "Dermatologia estética",
    image: "/olheiras.jpeg",
    altText: "Preenchimento de Olheiras em Santo André com a Dra. Ana Bassi",
    imageColor: "from-[#C69A86]/40 to-[#FCD6C5]/20",
    duration: "30 minutos",
    recovery: "Imediato (pequenas equimoses temporárias podem ocorrer)",
    benefits: "Suavização do olhar cansado, nivelamento de profundidade e hidratação da pele infraorbitária.",
    idealCandidates: "Pacientes com olheiras estruturais profundas e aspecto de sulco lacrimal marcado."
  },
  {
    id: "rejuvenescimento-facial",
    name: "Rejuvenescimento Facial",
    subtitle: "Gerenciamento integrado do envelhecimento saudável",
    description: "Planejamento estruturado de tratamentos associados, desenvolvidos para atuar nas diferentes queixas do envelhecimento, priorizando a harmonia global da face.",
    category: "Dermatologia estética",
    image: "/rejuvenescimento_final.jpg",
    altText: "Protocolo de Rejuvenescimento Facial Integral",
    imageColor: "from-[#FCD6C5]/40 to-[#C69A86]/20",
    duration: "Definido na avaliação",
    recovery: "Varia conforme os tratamentos associados",
    benefits: "Harmonização de volumes faciais, melhora do tônus da pele e suavização de rugas com naturalidade.",
    idealCandidates: "Pessoas com queixas de flacidez ou múltiplos sinais de envelhecimento facial que buscam tratamento estratégico."
  }
];

export const clinicGallery = [
  {
    src: "/spa-bathroom.webp",
    alt: "Ambiente sereno de banho e bem-estar"
  },
  {
    src: "/consultorio-dra-ana-bassi-santo-andre.webp",
    alt: "Consultório da Dra. Ana Bassi em Santo André"
  },
  {
    src: "/detalhes-consultorio-ana-bassi.webp",
    alt: "Detalhes do consultório da Dra. Ana Bassi"
  },
  {
    src: "/espaco-cafe-consultorio-ana-bassi.webp",
    alt: "Ambiente de espera do consultório da Dra. Ana Bassi"
  },
  {
    src: "/sala-atendimento-ana-bassi.webp",
    alt: "Sala de atendimento médico da Dra. Ana Bassi em Santo André"
  },
  {
    src: "/detalhes-cafe-ana-bassi.webp",
    alt: "Ambiente de café do consultório da Dra. Ana Bassi"
  }
];
