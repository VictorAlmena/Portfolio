import profileImage from '../assets/vam.jpg'

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
}

export interface ExperienceItem {
  id: number
  role: string
  company: string
  startDate: string
  endDate: string
  description: string
}

export interface EducationItem {
  id: number
  title: string
  institution: string
  period: string
}

export interface HeroData {
  name: string
  role: string
  summary: string
  profileImageSrc: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export const heroData: HeroData = {
  name: 'Víctor Almena Martínez',
  role: 'Backend Developer / Software Engineer',
  summary:
    'Desarrollador Backend utilizando herramientas como Java, Spring Boot, Python, FastAPI, Django, Docker, entre otras.',
  profileImageSrc: profileImage,
  primaryCtaLabel: 'Contáctame',
  primaryCtaHref: 'mailto:almenamvictor@gmail.com',
  secondaryCtaLabel: 'LinkedIn',
  secondaryCtaHref: 'https://linkedin.com/in/victoralmenamartinez'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Buzon Conocimiento Fhecor',
    description:
      'Aplicación web para buscar docuemntos de manera semántica utilizando embeddings generados por la API de OpenAI. Compara consultas mediante distancia L2 con embeddings almacenados en base de datos para encontrar los documentos más relevantes.',
    techStack: [
      'Python',
      'Django',
      'MySQL Server',
      'Docker',
      'OpenAI API',
      'CSS',
      'HTML',
      'JavaScript'
    ]
  },
  {
    id: 2,
    title: 'Chatbot empresarial',
    description:
      'Sistema completo de chat con API REST backend que gestiona conversaciones mediante identificadores únicos automáticos. Permite crear chats, enviar mensajes y recuperar historiales completos. Backend con almacenamiento en Redis para persistencia de conversaciones y frontend moderno con diseño gráfico intuitivo.',
    techStack: [
      'Python',
      'FastAPI',
      'Redis',
      'MySQL',
      'Docker',
      'OpenAI API',
      'TypeScript',
      'Vue.js'
    ]
  },
  {
    id: 3,
    title: 'Sistema de Gestión de Parking',
    description:
      'Aplicación de escritorio desarrollada en Java con interfaz gráfica Swing para simulación de gestión de parking. Simula la entrada de vehículos mediante programación multihilo, lee matrículas y actualiza el estado de plazas. Las plazas cambian de color (rojo para ocupadas, verde para libres) reflejando el estado simulado del parking.',
    techStack: ['Java', 'Java Swing', 'Multithreading', 'POO', 'H2 Database', 'CSS']
  }
]

export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'Fhecor',
    startDate: '2025',
    endDate: 'Presente',
    description:
      'Desarrollo de APIs RESTful con SpringBoot. Optimización de consultas SQL y migración a microservicios.'
  }
]

export const educationItems: EducationItem[] = [
  {
    id: 1,
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    institution: 'I.E.S. Laguna de Joatzel',
    period: '2023 - 2025'
  },
  {
    id: 2,
    title: 'Curso de Docker',
    institution: 'LinkedIn Learning',
    period: '2025'
  },
  {
    id: 3,
    title: 'Nivel de Inglés B2',
    institution: 'Cambridge English',
    period: 'Certificado'
  }
]

