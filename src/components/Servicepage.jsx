import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import './ServicePage.css';


import maquinaria1 from "../assets/maquinaria1.webp"
import maquinaria2 from "../assets/maquinaria2.webp"
import maquinaria3 from "../assets/maquinaria3.webp"

import topo1 from "../assets/Topo1.webp"
import topo2 from "../assets/Topo2.webp"
import topo3 from "../assets/Topo3.webp"

import civil1 from "../assets/civil1.webp"
import civil2 from "../assets/civil2.webp"
import civil3 from "../assets/historia5.webp"

import soldadura1 from "../assets/Soldadura1.webp"
import soldadura2 from "../assets/Soldadura2.webp"
import soldadura3 from "../assets/Soldadura3.webp"

// ==== LISTA DE SERVICIOS ====
const services = [
  {
    id: "obras",
    title: "Obras Civiles",
    description:
      "Realizamos proyectos completos de obras civiles, desde planificación hasta ejecución, abarcando estructuras, pavimentos, redes y todo tipo de infraestructura. Estamos dirigidos a constructoras, empresas privadas y organismos públicos que buscan soluciones integrales y de calidad para sus proyectos..",
    details:
      "En Mares Construcción y Maquinarias, garantizamos proyectos sólidos, seguros y duraderos, adaptados a cada necesidad y presupuesto. .",
    highlights: [
      "✔ Planificación y ejecución profesional.",
      "✔ Cumplimiento de normas técnicas y plazos.",
      "✔ Experiencia en proyectos urbanos, industriales y residenciales.",
      "✔ Supervisión técnica especializada",
    ],
    images: [civil1,civil2,civil3],
  },
  {
    id: "soldaduras",
    title: "Soldaduras e Instalaciones",
    description:
      "Realizamos uniones y montajes de cañerías PEAD y PVC mediante termofusión y electrofusión, garantizando sellos resistentes y duraderos para redes de agua, saneamiento o riego. Dirigido a constructoras, empresas de servicios e industrias que requieren instalaciones seguras, sin pérdidas y con larga vida útil.",
    details:
      "En Mares Construcción y Maquinarias contamos con equipos certificados y técnicos especializados para asegurar una instalación eficiente y confiable.",
    highlights: [
      "✔ Máxima hermeticidad y resistencia a la presión.",
      "✔ Equipos de última generación",
      "✔ Proyectos de riego agrícola personalizados",
      "✔ Instalaciones seguras y duraderas",
    ],
    images: [soldadura1,soldadura2,soldadura3],
  },
  {
    id: "maquinaria",
    title: "Alquiler de Maquinaria",
    description:
      "Ofrecemos alquiler de maquinaria pesada y transporte de equipos y materiales, con o sin operador, garantizando obras más rápidas y eficientes. Dirigido a constructoras, empresas y particulares que necesitan maquinaria confiable y traslados seguros",
    details:
    "En Mares Construcción y Maquinarias, nos encargamos de cada detalle del alquiler y traslado, asegurando que tu obra avance sin interrupciones ni complicaciones. ",
    highlights: [
      "✔ Flota moderna y en excelente estado",
      "✔ Operadores profesionales",
      "✔ Servicio adaptable a cada proyecto",
      "✔ Seguridad y mantenimiento garantizados",
    ],
    images: [maquinaria1,maquinaria2,maquinaria3],
  },
  {
    id: "tunelera",
    title: "Tunelera Topo",
    description:
      "Realizamos cruces subterráneos sin abrir zanjas, ideales para instalar cañerías, cableados o conductos sin romper pavimentos ni veredas. Esta dirigido a constructoras, organismos públicos e instaladores de servicios que buscan soluciones limpias, rápidas y seguras para cruces bajo calles o accesos.",
    details:
      "En Mares Construcción y Maquinarias contamos con equipos de alta precisión y personal especializado para garantizar resultados eficientes y duraderos.",
    highlights: [
      "✔ Menor impacto y costo de reposición.",
      "✔ Ideal para entornos urbanos",
      "✔ Sin roturas ni cortes de tránsito.",
      "✔ Tecnología avanzada y segura",
    ],
    images: [topo1,topo2,topo3], 
  },
];

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id.toLowerCase() === serviceId?.toLowerCase());

  if (!service) {
    return (
      <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mt: 10 }}>
        Servicio no encontrado
      </Typography>
    );
  }

  return (
    <div className="service-container">
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

      <div className="service-overlay">
        <section className='section-wrapper'>
          <h1 className="section-title">{service.title}</h1>
        </section>
        <p className="service-description">{service.description}</p>

        <div className="service-gallery">
          {service.images.map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} className="service-image" />
          ))}
        </div>

        <p className="service-details">{service.details}</p>

        <ul className="service-highlights">
          {service.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Button 
          component={Link}
          to="/contacto"
          variant="contained"
          className="service-button"
        >
          Solicitar Cotización
        </Button>
      </div>
    </div>
  );
};

export default ServicePage;