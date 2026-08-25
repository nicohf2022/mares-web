import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { fieldWork, process, services } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/home.css";

export default function HomePage() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService =
    services.find((service) => service.id === activeServiceId) || services[0];

  usePageMeta({
    title: "Obras civiles e infraestructura en Uruguay",
    description:
      "Mares realiza obras civiles, redes de agua y saneamiento, soldaduras PEAD, alquiler de maquinaria y trabajos con tunelera topo en Uruguay.",
    path: "/",
  });

  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__copy">
          <div className="home-hero__copy-inner">
            <Reveal>
              <span className="hero-eyebrow">Obras civiles · Uruguay</span>
              <h1 id="home-hero-title">
                Conexiones de
                <span> infraestructura</span>
                y confianza.
              </h1>
            </Reveal>
            <Reveal as="p" className="home-hero__lead" delay={100}>
              Redes de agua y saneamiento, soldaduras de cañerías PEAD,
              tunelera topo y maquinaria propia para ejecutar cada obra.
            </Reveal>
            <Reveal className="hero-actions" delay={180}>
              <Link className="button button--accent" to="/ofrecemos">
                Conocé nuestros servicios <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link text-link--light" to="/contacto">
                Hablemos <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          </div>
          <div className="home-hero__meta">
            <span>MARES / 2025</span>
            <a href="#introduccion">
              Descubrí más <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <Reveal className="home-hero__media" delay={80}>
          <img
            src={services[1].cover}
            alt={services[1].coverAlt}
            width="484"
            height="854"
            fetchPriority="high"
            decoding="async"
          />
          <div className="home-hero__media-caption">
            <span>01</span>
            <span>Infraestructura en campo</span>
          </div>
        </Reveal>
      </section>

      <section id="introduccion" className="manifesto section-space">
        <div className="shell editorial-grid">
          <Reveal>
            <SectionLabel number="01">Nosotros</SectionLabel>
          </Reveal>
          <div className="manifesto__body">
            <Reveal>
              <h2>
                Experiencia en obra,
                <br />
                ejecución precisa y una forma directa de trabajar.
              </h2>
            </Reveal>
            <div className="manifesto__details">
              <Reveal as="p" delay={100}>
                Mares nace de una trayectoria de más de 25 años liderando obras
                civiles. Es una empresa familiar especializada en redes de agua,
                saneamiento, soldaduras e infraestructura.
              </Reveal>
              <Reveal className="manifesto__fact" delay={160}>
                <strong>Alcance nacional</strong>
                <span>
                  Acompañamos a empresas, profesionales y organismos en proyectos
                  de distintas escalas en Uruguay.
                </span>
                <Link className="text-link" to="/nosotros">
                  Conocé nuestra historia <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="home-services section-space section-dark">
        <div className="shell">
          <Reveal className="section-heading section-heading--light">
            <SectionLabel number="02" light>
              Especialidades
            </SectionLabel>
            <h2>Soluciones técnicas para llevar la obra adelante.</h2>
          </Reveal>

          <div className="home-services__grid">
            <Reveal className="home-services__visual">
              <img
                key={activeService.id}
                src={activeService.cover}
                alt={activeService.coverAlt}
                width="700"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <span>{activeService.number} / 04</span>
            </Reveal>

            <div className="service-list">
              {services.map((service, index) => (
                <Reveal key={service.id} delay={index * 60}>
                  <Link
                    className={`service-row${activeServiceId === service.id ? " is-active" : ""}`}
                    to={`/servicio/${service.id}`}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    onFocus={() => setActiveServiceId(service.id)}
                  >
                    <div className="service-row__top">
                      <span>{service.number}</span>
                      <h3>{service.title}</h3>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <p>{service.short}</p>
                    <img
                      className="service-row__mobile-image"
                      src={service.cover}
                      alt=""
                      width="600"
                      height="760"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="section-end-link">
            <Link className="button button--outline-light" to="/ofrecemos">
              Ver todos los servicios <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="trabajos" className="field-work section-space">
        <div className="shell">
          <Reveal className="section-heading">
            <SectionLabel number="03">Obras y experiencia</SectionLabel>
            <h2>El trabajo se demuestra en el terreno.</h2>
            <p>
              Una selección de registros de obra disponible, organizada por
              disciplina.
            </p>
          </Reveal>

          <div className="field-work__list">
            {fieldWork.map((work, index) => (
              <Reveal
                as="article"
                className={`work-entry${index % 2 ? " work-entry--reverse" : ""}`}
                key={work.number}
              >
                <Link
                  className="work-entry__image"
                  to={`/servicio/${work.serviceId}`}
                  aria-label={`Ver servicio: ${work.title}`}
                >
                  <img
                    src={work.image}
                    alt={work.alt}
                    width="700"
                    height="900"
                    loading="lazy"
                    decoding="async"
                  />
                  <span aria-hidden="true">Ver servicio ↗</span>
                </Link>
                <div className="work-entry__content">
                  <span>Trabajo {work.number}</span>
                  <h3>{work.title}</h3>
                  <div>
                    <span>{work.category}</span>
                    <p>{work.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="visual-statement" aria-label="Experiencia en obra civil">
        <Reveal className="visual-statement__image">
          <img
            src={services[0].cover}
            alt={services[0].coverAlt}
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <div className="visual-statement__overlay shell">
          <Reveal>
            <span>Precisión · experiencia · compromiso</span>
            <p>Construimos desde la confianza.</p>
          </Reveal>
        </div>
      </section>

      <section className="process section-space">
        <div className="shell">
          <Reveal className="section-heading">
            <SectionLabel number="04">Cómo trabajamos</SectionLabel>
            <h2>De la primera conversación al trabajo en campo.</h2>
          </Reveal>
          <ol className="process-list">
            {process.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 70}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <Reveal>
            <SectionLabel number="05" light>
              Contacto
            </SectionLabel>
            <h2>
              ¿Tenés un
              <br />
              proyecto?
            </h2>
            <div className="final-cta__bottom">
              <p>Cada gran proyecto comienza con una conversación.</p>
              <Link className="button button--accent" to="/contacto">
                Hablemos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
