import civil1 from "../assets/civil1.webp";
import civil2 from "../assets/civil2.webp";
import historia1 from "../assets/historia1.opt.webp";
import historia3 from "../assets/historia3.opt.webp";
import historia4 from "../assets/historia4.webp";
import maquinaria from "../assets/maquinaria.webp";
import maquinaria1 from "../assets/maquinaria1.webp";
import maquinaria2 from "../assets/maquinaria2.webp";
import maquinaria3 from "../assets/maquinaria3.webp";
import maresObreros from "../assets/maresobreros.webp";
import padreEnzo from "../assets/PadreEnzo.opt.webp";
import enzo from "../assets/ENZO.webp";
import fabian from "../assets/Albanil.webp";
import instalador from "../assets/Instalador.webp";
import pozo from "../assets/pozo.webp";
import soldadura from "../assets/soldadura.webp";
import soldadura1 from "../assets/Soldadura1.webp";
import soldadura2 from "../assets/Soldadura2.webp";
import soldadura3 from "../assets/Soldadura3.webp";
import topo1 from "../assets/Topo1.webp";
import topo2 from "../assets/Topo2.webp";
import topo3 from "../assets/Topo3.webp";
import tunelera from "../assets/tunelera.webp";

export const BRAND_NAME = "Mares Construcción & Maquinarias";
export const SITE_URL = "https://www.maresconstruccion.uy";

export const contact = {
  email: "contacto@construccionmares.com",
  phone: "+598 94 358 767",
  phoneHref: "tel:+59894358767",
  whatsapp:
    "https://wa.me/59894358767?text=Hola%20Mares%2C%20quisiera%20conversar%20sobre%20un%20proyecto.",
  instagram: "https://www.instagram.com/construccionmares/",
  facebook: "https://tinyurl.com/55ksvayp",
  linkedin:
    "https://www.linkedin.com/company/mares-construcción-maquinarias/",
  location: "Maldonado · Uruguay",
};

export const services = [
  {
    id: "obras",
    number: "01",
    title: "Obras civiles",
    short:
      "Infraestructura, pavimentos y redes ejecutadas con planificación y supervisión técnica.",
    description:
      "Realizamos proyectos de obras civiles desde la planificación hasta la ejecución, abarcando estructuras, pavimentos, redes y distintos tipos de infraestructura para constructoras, empresas privadas y organismos públicos.",
    details:
      "Cada trabajo se adapta a las necesidades y el presupuesto del proyecto, con foco en la solidez, la seguridad y el cumplimiento de los plazos definidos.",
    highlights: [
      "Planificación y ejecución profesional",
      "Cumplimiento de normas técnicas y plazos",
      "Experiencia en proyectos urbanos, industriales y residenciales",
      "Supervisión técnica especializada",
    ],
    cover: civil1,
    coverAlt: "Ejecución de una obra civil de Mares",
    images: [civil1, civil2, pozo],
    imageAlts: [
      "Estructura en ejecución durante una obra civil",
      "Trabajo de infraestructura en obra",
      "Instalación de una red de agua en excavación",
    ],
  },
  {
    id: "soldaduras",
    number: "02",
    title: "Soldaduras e instalaciones",
    short:
      "Uniones de cañerías PEAD y PVC por termofusión y electrofusión para redes y riego.",
    description:
      "Realizamos uniones y montajes de cañerías PEAD y PVC mediante termofusión y electrofusión para redes de agua, saneamiento y proyectos de riego.",
    details:
      "Trabajamos con equipamiento específico y personal especializado para lograr instalaciones resistentes, herméticas y duraderas.",
    highlights: [
      "Uniones resistentes y herméticas",
      "Equipamiento específico para PEAD y PVC",
      "Proyectos de riego agrícola",
      "Instalaciones seguras y duraderas",
    ],
    cover: soldadura,
    coverAlt: "Operario de Mares instalando cañería PEAD en campo",
    images: [soldadura1, soldadura2, soldadura3],
    imageAlts: [
      "Equipo de termofusión trabajando sobre cañería PEAD",
      "Instalación nocturna de una red de agua",
      "Conexión de cañerías durante una obra",
    ],
  },
  {
    id: "maquinaria",
    number: "03",
    title: "Alquiler de maquinaria",
    short:
      "Maquinaria pesada y transporte de equipos, con o sin operador, según cada obra.",
    description:
      "Ofrecemos alquiler de maquinaria pesada y transporte de equipos y materiales, con o sin operador, para constructoras, empresas y particulares.",
    details:
      "Coordinamos el servicio de acuerdo con el alcance y los tiempos de cada proyecto para que la obra avance de forma ordenada y segura.",
    highlights: [
      "Maquinaria mantenida y disponible para obra",
      "Operadores con experiencia",
      "Servicio adaptable a cada proyecto",
      "Transporte de equipos y materiales",
    ],
    cover: maquinaria,
    coverAlt: "Maquinaria pesada disponible para trabajos de construcción",
    images: [maquinaria1, maquinaria2, maquinaria3],
    imageAlts: [
      "Retroexcavadora en terreno de obra",
      "Camión descargando material para construcción",
      "Maquinaria operando en una zona costera",
    ],
  },
  {
    id: "tunelera",
    number: "04",
    title: "Tunelera topo",
    short:
      "Cruces subterráneos para instalar cañerías o conductos sin abrir zanjas en superficie.",
    description:
      "Realizamos cruces subterráneos sin abrir zanjas para instalar cañerías, cableados o conductos sin romper pavimentos ni veredas.",
    details:
      "La tunelera topo permite resolver cruces bajo calles y accesos con menor impacto en superficie y sin interrumpir innecesariamente el entorno de obra.",
    highlights: [
      "Menor impacto y costo de reposición",
      "Aplicación en entornos urbanos",
      "Cruces sin abrir zanjas en superficie",
      "Operación especializada",
    ],
    cover: topo3,
    coverAlt: "Operario realizando un cruce subterráneo con tunelera topo",
    images: [topo3, tunelera, topo2, topo1],
    imageAlts: [
      "Preparación de un equipo de tunelera topo",
      "Cabezal de tunelera avanzando bajo tierra",
      "Cruce subterráneo ejecutado bajo una ruta",
      "Esquema técnico del funcionamiento de una tunelera topo",
    ],
  },
];

export const fieldWork = [
  {
    number: "01",
    title: "Redes de agua y saneamiento",
    category: "Obras civiles",
    description:
      "Instalación y conexión de infraestructura con equipos propios y ejecución en campo.",
    image: maresObreros,
    alt: "Equipo de Mares trabajando sobre una cañería de agua",
    serviceId: "obras",
  },
  {
    number: "02",
    title: "Cruces subterráneos",
    category: "Tunelera topo",
    description:
      "Soluciones para atravesar calles y accesos reduciendo las roturas en superficie.",
    image: topo3,
    alt: "Operario de Mares preparando una tunelera topo",
    serviceId: "tunelera",
  },
  {
    number: "03",
    title: "Uniones de cañería",
    category: "PEAD y PVC",
    description:
      "Termofusión y electrofusión aplicadas a redes de agua, saneamiento y riego.",
    image: soldadura2,
    alt: "Instalación nocturna de cañerías y válvulas",
    serviceId: "soldaduras",
  },
];

export const history = [
  {
    year: "1998",
    title: "Obra en Punta del Este",
    image: historia1,
    alt: "Registro de una obra en Punta del Este en 1998",
  },
  {
    year: "2001",
    title: "Sustitución de tubería antigua",
    image: historia3,
    alt: "Sustitución de una tubería antigua en 2001",
  },
  {
    year: "2007",
    title: "Infraestructura hidráulica",
    image: historia4,
    alt: "Instalación de infraestructura hidráulica en 2007",
  },
];

export const team = [
  {
    name: "Martín Costa",
    role: "Fundador · Jefe de obra",
    image: padreEnzo,
    alt: "Martín Costa en obra",
    bio: "Su trayectoria comenzó en la construcción a los 19 años. Desde entonces coordinó obras civiles en distintos departamentos de Uruguay, con experiencia en redes de agua, saneamiento, maquinaria pesada, tunelera topo y soldaduras de caños PEAD.",
  },
  {
    name: "Enzo Costa",
    role: "Responsable comercial",
    image: enzo,
    alt: "Enzo Costa, responsable comercial de Mares",
    bio: "Combina formación técnica en construcción y operación de maquinaria con experiencia en desarrollo comercial. Trabajó en Uruguay y Nueva Zelanda, donde amplió sus conocimientos sobre maquinaria y gestión.",
  },
  {
    name: "Fabián Valbuena",
    role: "Capataz de obra",
    image: fabian,
    alt: "Fabián Valbuena en obra",
    bio: "Cuenta con más de 15 años de experiencia en construcción. En Mares supervisa las distintas etapas de obra y aporta criterio técnico para que cada trabajo avance según lo previsto.",
  },
  {
    name: "Equipo de instalación",
    role: "Obras civiles e instalaciones",
    image: instalador,
    alt: "Integrante del equipo de instalaciones de Mares",
    bio: "El equipo lidera tareas de instalación y desarrollo técnico con la precisión, responsabilidad y coordinación que requiere cada proyecto.",
  },
];

export const process = [
  {
    number: "01",
    title: "Conversación",
    text: "Conocemos el proyecto, su contexto y las necesidades de la obra.",
  },
  {
    number: "02",
    title: "Planificación",
    text: "Definimos alcance, recursos y una forma de ejecución adecuada.",
  },
  {
    number: "03",
    title: "Ejecución",
    text: "Coordinamos personal, equipamiento y supervisión técnica en campo.",
  },
  {
    number: "04",
    title: "Seguimiento",
    text: "Acompañamos el avance y la entrega con comunicación directa.",
  },
];

export const getService = (serviceId) =>
  services.find((service) => service.id === serviceId?.toLowerCase());
