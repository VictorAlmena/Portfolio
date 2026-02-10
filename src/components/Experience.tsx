import './Experience.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
    const sectionRef = useScrollReveal()
    
    const experiences = [
        {
            role: "Backend Developer",
            company: "Fhecor",
            date: "2025 - Presente",
            description: "Desarrollo de APIs RESTful con SpringBoot. Optimización de consultas SQL y migración a microservicios."
        },
    ];

    return (
        <section ref={sectionRef} className="experience-section scroll-reveal">
            <h2 className="experience-title">
                <FaBriefcase className="experience-icon" /> Experiencia Laboral
            </h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3 className="experience-role">{exp.role}</h3>
                        <div className="experience-header">
                            <span className="experience-company">
                                {exp.company}
                            </span>
                            <span className="experience-separator">•</span>
                            <span className="experience-date">{exp.date}</span>
                        </div>
                        <p className="experience-description">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}