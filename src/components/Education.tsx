import './Education.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaGraduationCap } from 'react-icons/fa'
import type { EducationItem } from '../data/portfolioData'

interface EducationProps {
  title: string
  items: EducationItem[]
}

export default function Education({ title, items }: EducationProps) {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="education-section scroll-reveal">
      <h2 className="education-title">
        <FaGraduationCap className="education-icon" /> {title}
      </h2>
      <div className="education-grid">
        {items.map((item) => (
          <div key={item.id} className="education-card">
            <h3 className="education-card-title">{item.title}</h3>
            <p className="education-card-institution">{item.institution}</p>
            <p className="education-card-period">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}