import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import './global.css';
import maresobreros from "../assets/maresobreros.webp";
import pozo from "../assets/pozo.webp";
import casaEnzo from "../assets/casaEnzo.webp";
import isla from "../assets/isla.webp";


const images = [
  { src: maresobreros, alt: "Construcciones Maldonado" },
  { src: pozo, alt: "Servicio de tunelería Uruguay" },
  { src: casaEnzo, alt: "Reformas Maldonado" },
  { src: isla, alt: "Construcción de islas y centros comerciales Uruguay" },
  
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // SEO sin librería
  useEffect(() => {
    document.title = "Mares | Construcciones en Maldonado";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "En Mares transformamos ideas en estructuras que perduran. Más de 20 años de experiencia."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "En Mares transformamos ideas en estructuras que perduran. Más de 20 años de experiencia.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main aria-label="Sección Hero de Mares" className="hero-container">

      <div
        className="hero-background"
        style={{
          backgroundImage: "url('/media/videoedificio-poster.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
        }}
        
      ></div>

      <div className="hero-overlay"></div>
      <section className="section-wrapper">

        <h1 className="section-title" >Mares Construcción y Maquinarias </h1>

      </section>

      <section className="hero-content">

        <div className="hero-carousel" aria-label="Galería de proyectos">

          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              width="600"
              height="400"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className={`carousel-image ${index === currentIndex ? "active" : ""} ${index === 0 ? "lcp" : ""}`}
            />
          ))}
        </div>

        <div className="hero-text" role="region" aria-labelledby="hero-heading">
          <h1 id="hero-heading"> Conexiones de infraestructura y confianza. </h1>
          <p>
            En <strong>Mares</strong> Nos especializamos en Obras Civiles esencialmente redes de agua y saneamiento con servicio de tunelera topo y soldaduras por electrofusión y termofusión de caños de PEAD con maquinaria propia.

          </p>
          <p>Nuestra trayectoria, junto con la honestidad que demostramos en cada trabajo, nos permite operar en todo Uruguay, ofreciendo servicios que se adaptan a las necesidades de cada empresa o profesional. Garantizamos un acompañamiento eficiente, tanto en proyectos por iniciar como en etapas de desarrollo.
          </p>
          <p>+25 años de experiencia, 100% clientes conformes</p>
          <Link to="/ofrecemos" className="hero-button" >
            Nuestros Servicios
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;