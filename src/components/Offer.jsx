import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./Offer.css";
import "./global.css";

import maquinaria from "../assets/maquinaria.webp";
import tunelera from "../assets/tunelera.webp";
import obras from "../assets/pozo.webp";
import soldadura from "../assets/soldadura.webp";

// 🖼️ Lazy load de imágenes no críticas
const LazyImage = ({ src, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      width="384"
      height="480"
      {...props}
    />
  );
};

// 🔹 Datos de los servicios
const services = [
  {
    id: "obras",
    title: "Obras Civiles",
    description: "Tendido de agua, tendido de saneamiento, redes de agua",
    details:
      "Realizamos obras civiles con un enfoque en la durabilidad, precisión y cumplimiento de plazos.",
    image: obras,
  },
  {
    id: "Soldaduras",
    title: "Soldaduras e Instalaciones",
    description: "Trabajos con PEAD y PVC, proyectos de riego agrícola",
    details:
      "Trabajamos con soldaduras e instalaciones para caños PEAD y PVC.",
    image: soldadura,
  },
  {
    id: "maquinaria",
    title: "Alquiler de Maquinaria",
    description: "Retroexcavadoras, camiones, grúas y más para tu proyecto.",
    details: "Ofrecemos maquinaria moderna con operadores capacitados.",
    image: maquinaria,
  },
  {
    id: "tunelera",
    title: "Tunelera Topo",
    description: "Trabajos especializados con tunelera topo.",
    details: "Construcción de túneles con precisión y seguridad.",
    image: tunelera,
  },
];

const Offer = () => {
  // 🟢 PRELOAD dinámico para el LCP
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = obras; // usa el import -> Vite resuelve el hash automáticamente
    link.fetchPriority = "high"; // prioriza la descarga
    document.head.appendChild(link);

    return () => document.head.removeChild(link); // limpia si el componente se desmonta
  }, []);

  return (
    <div>
      <div className="offerContainer">
        {/* 🎥 Video de fondo */}
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
        {/* 🧱 Contenido principal */}
        <div className="offerContent">
          <section className="section-wrapper">
            <h1 className="section-title">¿Qué ofrecemos?</h1>
          </section>

          <Box>
            <h2 className="offerSubtitle">
              Servicios de infraestructura y construcción personalizados para
              cada proyecto.
            </h2>

            {/* 🖼️ Cards de servicios */}
            <Box className="cardsWrapper">
              {services.map((service, index) => {
                const isLCP = service.id === "obras"; // Detecta imagen principal (LCP)

                return (
                  <Link
                    key={index}
                    to={`/servicio/${service.id}`}
                    style={{ textDecoration: "none" }}
                    aria-label={`Ver más sobre ${service.title}`}
                  >
                    <Paper className="card">
                      <Box
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {/* 🔹 Imagen LCP optimizada */}
                        {isLCP ? (
                          <img
                            src={service.image}
                            alt={`Imagen representativa de ${service.title}`}
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            width="384"
                            height="480"
                          />
                        ) : (
                          <LazyImage
                            src={service.image}
                            alt={`Imagen representativa de ${service.title}`}
                            width="384"
                            height="480"
                          />
                        )}

                        <Typography
                          variant="h5"
                          component="h2"
                          className="cardTitle"
                        >
                          {service.title}
                        </Typography>
                      </Box>
                    </Paper>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Offer;