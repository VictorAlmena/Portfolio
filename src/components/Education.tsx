import './Education.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
    const sectionRef = useScrollReveal()
    
    const educationItems = [
        {
            title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
            institution: "I.E.S. Laguna de Joatzel",
            period: "2023 - 2025"
        },
        {
            title: "Curso de Docker",
            institution: "LinkedIn Learning",
            period: "2025"
        },
        {
            title: "Nivel de Inglés B2",
            institution: "Cambridge English",
            period: "Certificado"
        }
    ];

    return (
        <section ref={sectionRef} className="education-section scroll-reveal">
            <h2 className="education-title">
                <FaGraduationCap className="education-icon" /> Formación
            </h2>
            <div className="education-grid">
                {educationItems.map((item, index) => (
                    <div key={index} className="education-card">
                        <h3 className="education-card-title">
                            {item.title}
                        </h3>
                        <p className="education-card-institution">
                            {item.institution}
                        </p>
                        <p className="education-card-period">
                            {item.period}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}