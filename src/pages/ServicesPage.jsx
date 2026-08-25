import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { services } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages.css";

export default function ServicesPage() {
  usePageMeta({
    title: "Servicios",
    description:
      "Obras civiles, soldaduras e instalaciones PEAD y PVC, alquiler de maquinaria y tunelera topo para proyectos en Uruguay.",
    path: "/ofrecemos",
  });

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Servicios · Infraestructura"
        title={
          <>
            Capacidad técnica
            <br />
            para resolver
            <br />
            en campo.
          </>
        }
        lead="Cuatro especialidades que combinan experiencia, equipamiento y supervisión para acompañar obras de distintas escalas."
        image={services[1].cover}
        imageAlt={services[1].coverAlt}
      />

      <section className="services-intro section-space">
        <div className="shell editorial-grid">
          <Reveal>
            <SectionLabel number="01">Qué hacemos</SectionLabel>
          </Reveal>
          <Reveal>
            <h2>
              Infraestructura pensada desde la necesidad real de cada proyecto.
            </h2>
            <p>
              Trabajamos con constructoras, empresas, profesionales, organismos y
              particulares. Cada servicio se define según el lugar, la escala y los
              requisitos técnicos de la obra.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="services-catalog">
        <div className="shell">
          {services.map((service, index) => (
            <Reveal
              as="article"
              className={`catalog-service${index % 2 ? " catalog-service--reverse" : ""}`}
              key={service.id}
            >
              <Link
                className="catalog-service__image"
                to={`/servicio/${service.id}`}
                aria-label={`Conocer ${service.title}`}
              >
                <img
                  src={service.cover}
                  alt={service.coverAlt}
                  width="700"
                  height="900"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </Link>
              <div className="catalog-service__copy">
                <span>{service.number} / 04</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link className="text-link" to={`/servicio/${service.id}`}>
                  Explorar servicio <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="shell">
          <Reveal>
            <span className="eyebrow eyebrow--light">Cotización</span>
            <h2>¿Qué necesita tu obra?</h2>
            <p>Conversemos para definir el servicio y el alcance adecuados.</p>
            <Link className="button button--accent" to="/contacto">
              Solicitar presupuesto <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
