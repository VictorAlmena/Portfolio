import './Footer.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Contacto</h3>

        <div className="footer-contact">
          <a
            href="tel:+34683356832"
            className="footer-contact-link"
            aria-label="Llamar al número de teléfono de Víctor Almena Martínez"
          >
            <FaPhone /> +34 683356832
          </a>

          <a
            href="mailto:almenamvictor@gmail.com"
            className="footer-contact-link"
            aria-label="Enviar correo a almenamvictor@gmail.com"
          >
            <FaEnvelope /> almenamvictor@gmail.com
          </a>
        </div>

        <div className="footer-copyright">
          © {currentYear} Víctor Almena Martínez
        </div>
      </div>
    </footer>
  )
}
