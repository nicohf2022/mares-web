import { Link, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { getService } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages.css";

function MissingService() {
  return (
    <main id="main-content" className="not-found">
      <div className="shell">
        <span>404</span>
        <h1>Este servicio no existe.</h1>
        <Link className="button button--accent" to="/ofrecemos">
          Ver servicios <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = getService(serviceId);

  usePageMeta({
    title: service?.title || "Servicio no encontrado",
    description: service?.short || "El servicio solicitado no está disponible.",
    path: service ? `/servicio/${service.id}` : "/servicio/no-encontrado",
    noIndex: !service,
  });

  if (!service) return <MissingService />;

  return (
    <main id="main-content">
      <PageHero
        eyebrow={`Servicio ${service.number} · Uruguay`}
        title={service.title}
        lead={service.short}
        image={service.cover}
        imageAlt={service.coverAlt}
      >
        <Reveal delay={180}>
          <Link className="text-link text-link--light" to="/ofrecemos">
            ← Volver a servicios
          </Link>
        </Reveal>
      </PageHero>

      <section className="service-overview section-space">
        <div className="shell editorial-grid">
          <Reveal>
            <SectionLabel number="01">Alcance</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2>{service.description}</h2>
            </Reveal>
            <Reveal as="p" className="service-overview__details" delay={100}>
              {service.details}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="service-gallery section-space--bottom">
        <div className="shell">
          <Reveal className="service-gallery__head">
            <SectionLabel number="02">En obra</SectionLabel>
            <span>Registro técnico</span>
          </Reveal>
          <div className={`service-gallery__grid service-gallery__grid--${service.images.length}`}>
            {service.images.map((image, index) => (
              <Reveal className="service-gallery__item" key={image} delay={index * 70}>
                <img
                  src={image}
                  alt={service.imageAlts[index]}
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-points section-dark section-space">
        <div className="shell editorial-grid">
          <Reveal>
            <SectionLabel number="03" light>
              Puntos clave
            </SectionLabel>
          </Reveal>
          <ol>
            {service.highlights.map((highlight, index) => (
              <Reveal as="li" key={highlight} delay={index * 70}>
                <span>0{index + 1}</span>
                <p>{highlight}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell">
          <Reveal>
            <span className="eyebrow eyebrow--light">Próximo paso</span>
            <h2>Conversemos sobre tu obra.</h2>
            <Link className="button button--accent" to="/contacto">
              Solicitar cotización <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
