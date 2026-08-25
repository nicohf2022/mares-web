import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, lead, image, imageAlt, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__copy shell">
        <Reveal>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
        </Reveal>
        {lead && (
          <Reveal as="p" className="page-hero__lead" delay={100}>
            {lead}
          </Reveal>
        )}
        {children}
      </div>
      {image && (
        <Reveal className="page-hero__media" delay={120}>
          <img
            src={image}
            alt={imageAlt}
            width="900"
            height="1100"
            fetchPriority="high"
            decoding="async"
          />
        </Reveal>
      )}
    </section>
  );
}
