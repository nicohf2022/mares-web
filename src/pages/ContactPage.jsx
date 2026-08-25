import ContactForm from "../components/ContactForm";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { contact } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages.css";

export default function ContactPage() {
  usePageMeta({
    title: "Contacto",
    description:
      "Contactá a Mares Construcción & Maquinarias para conversar sobre obras civiles, infraestructura, maquinaria o tunelera topo.",
    path: "/contacto",
  });

  return (
    <main id="main-content" className="contact-page">
      <section className="contact-heading">
        <div className="shell">
          <Reveal>
            <SectionLabel number="01" light>
              Contacto
            </SectionLabel>
            <h1>
              Cada gran proyecto
              <br />
              comienza con una
              <br />
              conversación.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="contact-content section-space">
        <div className="shell contact-content__grid">
          <Reveal className="contact-details">
            <p>
              Contanos qué necesitás y en qué etapa se encuentra tu proyecto. Nuestro
              equipo se pondrá en contacto para conocer los detalles.
            </p>

            <div className="contact-details__group">
              <span>Contacto directo</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                Escribir por WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-details__group">
              <span>Ubicación</span>
              <p>{contact.location}</p>
              <p>Trabajamos en todo Uruguay.</p>
            </div>

            <div className="contact-details__social">
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                Instagram ↗
              </a>
              <a href={contact.facebook} target="_blank" rel="noreferrer">
                Facebook ↗
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
