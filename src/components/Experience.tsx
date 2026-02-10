import './Experience.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaBriefcase } from 'react-icons/fa'
import type { ExperienceItem } from '../data/portfolioData'

interface ExperienceProps {
  title: string
  items: ExperienceItem[]
}

export default function Experience({ title, items }: ExperienceProps) {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="experience-section scroll-reveal">
      <h2 className="experience-title">
        <FaBriefcase className="experience-icon" /> {title}
      </h2>
      <div className="experience-list">
        {items.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3 className="experience-role">{exp.role}</h3>
            <div className="experience-header">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-separator">•</span>
              <span className="experience-date">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}