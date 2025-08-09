// Dados estáticos para procedimentos
export const PROCEDURES = [
  {
    id: 1,
    title: "Tratamento de Unha Encravada",
    description: "Procedimento especializado para alívio da dor e prevenção de infecções.",
    image: "/procedimentos/unha-encravada.jpg",
    duration: "30-45 min",
    category: "Tratamento",
    icon: "foot",
  },
  {
    id: 2,
    title: "Remoção de Calosidades",
    description: "Eliminação segura e eficaz de calos e calosidades.",
    image: "/procedimentos/calosidades.jpg",
    duration: "45-60 min",
    category: "Estética",
    icon: "bandage",
  },
  {
    id: 3,
    title: "Tratamento de Micoses",
    description: "Cuidado especializado para infecções fúngicas dos pés.",
    image: "/procedimentos/micoses.jpg",
    duration: "30 min",
    category: "Tratamento",
    icon: "shield",
  },
  {
    id: 4,
    title: "Podologia Esportiva",
    description: "Cuidados específicos para atletas e praticantes de atividade física.",
    image: "/procedimentos/esportiva.jpg",
    duration: "60 min",
    category: "Especializado",
    icon: "activity",
  },
  {
    id: 5,
    title: "Podologia Geriátrica",
    description: "Cuidados especializados para a terceira idade.",
    image: "/procedimentos/geriatrica.jpg",
    duration: "45 min",
    category: "Especializado",
    icon: "heart",
  },
  {
    id: 6,
    title: "Podologia Infantil",
    description: "Cuidados delicados e especializados para crianças.",
    image: "/procedimentos/infantil.jpg",
    duration: "30 min",
    category: "Especializado",
    icon: "smile",
  },
]

// Dados estáticos para depoimentos
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    comment: "Excelente profissional! Resolveu meu problema de unha encravada de forma rápida e indolor.",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    comment: "Muito satisfeito com o atendimento. Ambiente limpo e profissional muito competente.",
    date: "2024-01-10",
    verified: true,
  },
  {
    id: 3,
    name: "Ana Oliveira",
    rating: 5,
    comment: "Rita é uma profissional excepcional. Meus pés nunca estiveram tão bem cuidados!",
    date: "2024-01-08",
    verified: true,
  },
  {
    id: 4,
    name: "Carlos Ferreira",
    rating: 5,
    comment: "Recomendo para todos! Tratamento eficaz e atendimento humanizado.",
    date: "2024-01-05",
    verified: true,
  },
  {
    id: 5,
    name: "Lucia Costa",
    rating: 5,
    comment: "Profissional muito cuidadosa e atenciosa. Ambiente muito limpo e organizado.",
    date: "2024-01-03",
    verified: true,
  },
]

// Informações de contato
export const CONTACT_INFO = {
  phone: "(16) 3720-5691",
  whatsapp: "(16) 99310-8637",
  email: "contato@ritapachecopodologia.com.br",
  address: {
    street: "Av. 7 de Setembro, 650",
    complement: "Salas 01 e 02",
    neighborhood: "São José",
    city: "Franca",
    state: "SP",
    zipCode: "14401-278",
  },
  hours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
    sunday: "Domingo: Fechado",
  },
}

// Links de redes sociais
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ritapacheco.clinic/",
  facebook: "https://www.facebook.com/ritapachecopodologa",
  whatsapp: "https://api.whatsapp.com/send/?phone=5516993108637",
  linkedin: "https://www.linkedin.com/company/clinica-rita-pacheco/",
  tiktok: "https://www.tiktok.com/@ritafpachecoo",
}

// Configurações do site
export const SITE_CONFIG = {
  name: "Rita Pacheco Podologia",
  description: "Clínica especializada em podologia em Franca - SP",
  url: "https://clinica-rita-pacheco.vercel.app",
  logo: "/logo-site.png",
  favicon: "/favicon.ico",
}
