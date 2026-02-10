import './Projects.css'
import ProjectCard from './ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
}

const projects: Project[] = [
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

export default function Projects() {
  const projectsSectionRef = useScrollReveal()

  return (
    <section ref={projectsSectionRef} className="projects-section scroll-reveal">
      <h2 className="projects-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  )
}

