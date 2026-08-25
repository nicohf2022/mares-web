import { Link } from "react-router-dom";
import { contact } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <Link className="site-footer__wordmark" to="/" aria-label="Mares, inicio">
            MARES
          </Link>
          <p>
            Construcción &<br />
            Maquinarias
          </p>
        </div>

        <div className="site-footer__grid">
          <div>
            <span className="footer-kicker">Navegación</span>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/ofrecemos">Servicios</Link>
            <Link to="/#trabajos">Trabajos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div>
            <span className="footer-kicker">Contacto</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <span>{contact.location}</span>
          </div>
          <div>
            <span className="footer-kicker">Seguinos</span>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook <span aria-hidden="true">↗</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Mares. Todos los derechos reservados.</span>
          <span>Construimos desde la confianza.</span>
        </div>
      </div>
    </footer>
  );
}
