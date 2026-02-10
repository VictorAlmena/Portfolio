import './Hero.css'
import profileImage from '../assests/vam.jpg'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-profile-container">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="hero-profile-image"
                    />
                </div>

                <h1 className="hero-title">
                    Víctor Almena Martínez
                </h1>
                
                <h2 className="hero-subtitle">
                    Backend Developer / Software Engineer
                </h2>

                <p className="hero-description">
                    Desarrollador Backend utilizando herramientas como Java, Spring Boot, Python, FastAPI, Django, Docker, entre otras.
                </p>

                <div className="hero-links">
                    <a 
                        href="mailto:almenamvictor@gmail.com" 
                        className="hero-link"
                    >
                        <FaEnvelope /> Contáctame
                    </a>
                    
                    <a 
                        href="https://linkedin.com/in/victoralmenamartinez" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hero-link"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}