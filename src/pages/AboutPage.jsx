import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { history, team } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages.css";

export default function AboutPage() {
  usePageMeta({
    title: "Nosotros",
    description:
      "Conocé la historia, la trayectoria y el equipo de Mares Construcción & Maquinarias, empresa familiar especializada en infraestructura.",
    path: "/nosotros",
  });

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Nosotros · Empresa familiar"
        title={
          <>
            Trayectoria
            <br />
            que se convierte
            <br />
            en confianza.
          </>
        }
        lead="Mares reúne experiencia de campo, conocimiento técnico y una forma cercana de acompañar cada obra."
        image={team[0].image}
        imageAlt={team[0].alt}
      />

      <section className="about-intro section-space">
        <div className="shell editorial-grid">
          <Reveal>
            <SectionLabel number="01">Nuestra historia</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2>Una empresa nueva construida sobre décadas de experiencia.</h2>
            </Reveal>
            <div className="about-intro__copy">
              <Reveal as="p" delay={80}>
                Fruto de más de 25 años liderando obras civiles y del reconocimiento
                de colegas por su honestidad y eficacia, Martín Costa funda junto a
                su hijo Enzo una empresa propia. En 2025 nace Mares Construcción &
                Maquinarias.
              </Reveal>
              <Reveal as="p" delay={140}>
                La empresa se especializa en instalación y soldadura de caños PEAD
                y PVC, tunelera topo, conexiones de agua, saneamiento y operación de
                maquinaria. La experiencia operativa y la mirada comercial se unen
                para trabajar en distintos puntos de Uruguay.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="history-section section-space">
        <div className="shell">
          <Reveal className="section-heading">
            <SectionLabel number="02">Archivo</SectionLabel>
            <h2>La experiencia también se construye con el tiempo.</h2>
          </Reveal>
          <div className="history-grid">
            {history.map((entry, index) => (
              <Reveal as="figure" key={entry.year} delay={index * 80}>
                <div className="history-grid__image">
                  <img
                    src={entry.image}
                    alt={entry.alt}
                    width="700"
                    height="500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>{entry.year}</span>
                  <p>{entry.title}</p>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-quote section-dark section-space">
        <div className="shell editorial-grid">
          <Reveal>
            <SectionLabel number="03" light>
              Nuestra forma de trabajar
            </SectionLabel>
          </Reveal>
          <Reveal as="blockquote">
            “La transparencia y la trayectoria son la base para realizar obras de
            infraestructura de calidad y sostener la confianza de nuestros clientes.”
          </Reveal>
        </div>
      </section>

      <section className="team-section section-space">
        <div className="shell">
          <Reveal className="section-heading">
            <SectionLabel number="04">Equipo</SectionLabel>
            <h2>Personas que conocen la obra desde adentro.</h2>
          </Reveal>
          <div className="team-list">
            {team.map((member, index) => (
              <Reveal
                as="article"
                className={`team-member${index % 2 ? " team-member--offset" : ""}`}
                key={member.name}
              >
                <div className="team-member__image">
                  <img
                    src={member.image}
                    alt={member.alt}
                    width="650"
                    height="900"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-member__copy">
                  <span>0{index + 1}</span>
                  <h3>{member.name}</h3>
                  <strong>{member.role}</strong>
                  <p>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell">
          <Reveal>
            <span className="eyebrow eyebrow--light">Próximo paso</span>
            <h2>Construyamos una relación de trabajo sólida.</h2>
            <Link className="button button--accent" to="/contacto">
              Hablemos de tu proyecto <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
