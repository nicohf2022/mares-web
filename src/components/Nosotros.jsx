import React, { useState, useRef } from 'react';
const ArrowBack = React.lazy(() => import('@mui/icons-material/ArrowBack'));
const ArrowForward = React.lazy(() => import('@mui/icons-material/ArrowForward'));
import './Nosotros.css'; // ahora los estilos principales están en CSS
import './global.css';
import historia1 from "../assets/historia1.opt.webp";
import historia3 from "../assets/historia3.opt.webp";
import historia4 from "../assets/historia4.webp";
import ENZO from "../assets/ENZO.webp"
import PadreEnzo from "../assets/PadreEnzo.opt.webp"
import Instalador from "../assets/Instalador.webp"
import Albanil from "../assets/Albanil.webp"

const Nosotros = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const scrollAmount = 400;
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const carouselImages = [
        { src: historia1, title: 'Obra en punta del este en 1998', alt: 'Construcción de la primera obra de Mares' },
        { src: historia3, title: 'Sustitución de tubería antigua en 2001', alt: 'Progreso en estructura de obra' },
        { src: historia4, title: 'Instalación de infraestructura hidráulica en 2007', alt: 'Finalización de obra' },

    ];

    return (
        <div className="nosotros-container">
          <div
                className="nosotros-background"
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
           

            <div className="nosotros-overlay">
                <section className='section-wrapper'>
                    <h1 className="section-title">Sobre Nosotros</h1>
                </section>
                <p className="nosotros-text">
                    Fruto de más de 25 años de experiencia liderando obras civiles y del reconocimiento de colegas por su honestidad y eficacia, Martín Costa funda junto a su hijo Enzo su propia empresa.
                    Especializada en la instalación y soldadura de caños PEAD y PVC, así como en el uso de tunelera topo para cruces, conexiones de agua y saneamiento, en 2025 nace Mares Construcciones.
                    Martín y Enzo Costa son la conexión estratégica y operativa que solidifica los cimientos de una empresa familiar con alcance nacional.
                    <br />


                    “Sabemos que la transparencia con la que trabajamos y nuestra trayectoria intachable son la base fundamental para garantizar obras de infraestructura de calidad, al igual que para sostener la confianza de nuestros clientes.”
                </p>
                {/* Carrusel */}

                <section aria-label="Galería de imágenes de nuestras obras" className="nosotros-carousel-wrapper">
                    <button
                        onClick={() => scrollCarousel('left')}
                        className="nosotros-arrow"
                        aria-label="Imagen anterior"
                    >
                        <ArrowBack fontSize="large" />
                    </button>

                    <div ref={carouselRef} className="nosotros-carousel no-scrollbar">
                        {carouselImages.map((item, index) => (
                            <figure key={index} className="nosotros-carousel-item">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                    decoding="async"
                                    width="600"
                                    height="400"
                                    style={{ width: "100%" }}
                                    className="nosotros-carousel-img"
                                    onClick={() => setSelectedImage(item.src)}
                                />
                                <figcaption className="nosotros-carousel-caption">{item.title}</figcaption>
                            </figure>
                        ))}
                    </div>

                    <button
                        onClick={() => scrollCarousel('right')}
                        className="nosotros-arrow"
                        aria-label="Imagen siguiente"
                    >
                        <ArrowForward fontSize="large" />
                    </button>
                </section>

                {/* Modal accesible */}
                {selectedImage && (
                    <div
                        className="nosotros-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Vista ampliada de imagen"
                        onClick={() => setSelectedImage(null)}
                    >
                        <img src={selectedImage} alt="Imagen ampliada de obra" className="nosotros-modal-img" />
                    </div>
                )}

                {/* Equipo */}
                <section aria-label="Nuestro equipo" className="nosotros-equipo">
                    <article className="nosotros-card">
                        <h2 className="nosotros-role">Martín Costa - Fundador Jefe de Obra</h2>
                        <img src={PadreEnzo} alt="Martín Costa en obra" loading="lazy" className="nosotros-img" />
                        <p className="nosotros-description">
                            Encargado de construcción desde los 19 años. Siendo un joven apasionado por la mecánica, la operación de maquinarias y el trabajo en detalle, es reconocido por su capacidad de liderazgo y comienza una carrera, de más de 30 años, coordinando obras civiles. En diferentes departamentos de Uruguay realizó: sustitución e instalación de cañerías de agua potable, obras de saneamiento, construcción de  puentes y Mcdonald's entre otros .
                        </p>
                        <p>
                            ✔ ️ Experto en infraestructuras de redes de agua, operación de maquinarias pesadas, tuneleras topo y soldaduras por electrofusión y termofusión de caños de PEAD.
                        </p>
                    </article>

                    <article className="nosotros-card">
                        <h2 className="nosotros-role">Enzo Costa - Responsable Comercial</h2>
                        <img src={ENZO} alt="Enzo Costa responsable comercial" loading="lazy" className="nosotros-img" />
                        <p className="nosotros-description">
                            Cautivado por el desarrollo empresarial, desde los 18 años ha combinado su formación técnica en construcción y operación de maquinarias con el interés por el mundo comercial. Se formó en marketing, publicidad digital, inversiones bursátiles y cripto mercado en instituciones de diferentes partes del mundo. Trabajó en Uruguay y dos años en Nueva Zelanda donde aprendió sobre nuevas maquinarias y estudió inglés.
                        </p>
                        <p>
                            ✔ Especialista en estudio de mercado, desarrollo de negocio y relaciones comerciales.
                        </p>
                    </article>

                    <article className="nosotros-card">
                        <h2 className="nosotros-role">Fabián Valbuena - Capataz de Obra</h2>
                        <img src={Albanil} alt="Fabián Valbuena en obra" loading="lazy" className="nosotros-img" />
                        <p className="nosotros-description">
                            Con más de 15 años trabajando en construcción, tiene un amplio abanico de conocimientos técnicos que le permiten desempeñarse con diferentes tipos de materiales y solventar con eficacia contratiempos. En Mares se encarga de supervisar cada etapa de las obras con la mirada de la experiencia asegurando que el trabajo avance según lo previsto.
                        </p>
                    </article>

                    <article className="nosotros-card">
                        <h2 className="nosotros-role">Encargado de Obras Civiles e Instalación de Piscinas</h2>
                        <img src={Instalador} alt="Alex Iglesias encargado de obras civiles" loading="lazy" className="nosotros-img" />
                        <p className="nosotros-description">
                            Durante años se destacó por la responsabilidad con la que afrontó cada proyecto junto a Martín. En Mares, lidera tareas clave de instalación y desarrollo técnico, que ejecuta con la precisión y el compromiso que exigen los estándares del sector.
                        </p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default Nosotros;