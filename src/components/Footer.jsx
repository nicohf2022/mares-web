import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import './Footer.css' // ✅ importamos el CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Sección 1: Descripción */}
        <div className="footer-item">
          <h2 className="footer-title">Mares Construcción & Maquinarias</h2>
          <p>Construcción y maquinaria con compromiso familiar.</p>
        </div>

        {/* Sección 2: Contacto */}
        <div className="footer-item">
          <h3>Contacto</h3>
          <p>Email: contacto@construccionmares.com</p>
          <p>Tel: +598 943 587 67</p>
        </div>

        {/* Sección 3: Redes Sociales */}
        <div className="footer-item">
          <h3>Seguinos</h3>
          <div className="footer-icons">
            <a href="https://www.instagram.com/construccionmares/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Instagram de Mares Construcción">
              <FaInstagram />
            </a>
            <a href="https://tinyurl.com/55ksvayp" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Facebook de Mares Construcción">
              <FaFacebook />
            </a>
            <a href="https://wa.me/59894358767" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Mares Construcción">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/company/mares-construcción-maquinarias/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Linkedin de Mares Construcción">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mares. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer