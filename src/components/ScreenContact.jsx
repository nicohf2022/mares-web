import React from 'react'
import { Contact } from './Contact'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import './ScreenContact.css'
import './global.css';
const ScreenContact = () => {
    return (
        <div className="hero-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/media/videoedificio-poster.webp"
                className="hero-video"
                aria-label='Video de fondo mostrando edificios de construccion'
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
            
                }}
            >
                <source src="/media/videoedificio-recortado.webm" type="video/webm" />
                <source src="/media/videoedificio-recortado.mp4" type="video/mp4" />
                Tu navegador no soporta videos en HTML5.
            </video>

            <div className="contact-overlay">
                {/* Sección izquierda */}
                <div className="left-section">
                    <section className='section-wrapper'>
                    <h1 className="section-title">Contáctenos</h1>
                    </section>
                    <p className="description">
                        Cada gran proyecto comienza con una conversación. En Mares, creemos en construir desde la confianza.
                        Contáctanos y descubrí cómo podemos ayudarte —sin cargos, sin compromiso.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/construccionmares/" target="_blank" rel="noopener noreferrer" aria-label='Visitar Instagram de Mares Construcciones'>
                            <FaInstagram className="icon instagram" />
                        </a>
                        <a href="https://wa.me/59894258767" target="_blank" rel="noopener noreferrer" aria-label='WhatsApp de Mares Construcciones'>
                            <FaWhatsapp className="icon whatsapp" />
                        </a>
                        <a href="https://tinyurl.com/55ksvayp" target="_blank" rel="noopener noreferrer" aria-label='Visitar Facebook de Mares Construcciones'>
                            <FaFacebook className="icon facebook" />
                        </a>
                    </div>
                </div>

                {/* Sección derecha */}
                <div className="right-section">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default ScreenContact