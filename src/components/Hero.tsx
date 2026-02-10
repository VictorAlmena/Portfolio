import './Hero.css'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import type { HeroData } from '../data/portfolioData'

interface HeroProps {
  data: HeroData
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-profile-container">
          <img
            src={data.profileImageSrc}
            alt={`Foto de ${data.name}, ${data.role}`}
            className="hero-profile-image"
          />
        </div>

        <h1 className="hero-title">{data.name}</h1>

        <h2 className="hero-subtitle">{data.role}</h2>

        <p className="hero-description">{data.summary}</p>

        <div className="hero-links">
          <a
            href={data.primaryCtaHref}
            className="hero-link"
            aria-label={`Enviar correo a ${data.name}`}
          >
            <FaEnvelope /> {data.primaryCtaLabel}
          </a>

          <a
            href={data.secondaryCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
            aria-label={`Ver perfil de LinkedIn de ${data.name}`}
          >
            <FaLinkedin /> {data.secondaryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}