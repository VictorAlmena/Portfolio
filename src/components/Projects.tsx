import './Projects.css'
import ProjectCard from './ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import type { Project } from '../data/portfolioData'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
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

