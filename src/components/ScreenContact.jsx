import React from 'react'
import { Contact } from './Contact'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import './ScreenContact.css'
import './global.css';
const ScreenContact = () => {
    return (
        <div className="contact-container">
            <div
                style={{
                    backgroundImage: "url('/media/videoedificio-poster.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -2,
                   
                }}
               
            />

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
                        <a href="https://wa.me/59894358767" target="_blank" rel="noopener noreferrer" aria-label='WhatsApp de Mares Construcciones'>
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