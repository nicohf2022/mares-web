import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BRAND_NAME = "Mares Construcción & Maquinarias";
const SITE_URL = "https://www.maresconstruccion.uy";

const pages = [
  {
    path: "/nosotros",
    title: "Nosotros",
    description:
      "Conocé la historia, la trayectoria y el equipo de Mares Construcción & Maquinarias, empresa familiar especializada en infraestructura.",
  },
  {
    path: "/ofrecemos",
    title: "Servicios",
    description:
      "Obras civiles, soldaduras e instalaciones PEAD y PVC, alquiler de maquinaria y tunelera topo para proyectos en Uruguay.",
  },
  {
    path: "/contacto",
    title: "Contacto",
    description:
      "Contactá a Mares Construcción & Maquinarias para conversar sobre obras civiles, infraestructura, maquinaria o tunelera topo.",
  },
  {
    path: "/servicio/obras",
    title: "Obras civiles",
    description:
      "Infraestructura, pavimentos y redes ejecutadas con planificación y supervisión técnica.",
  },
  {
    path: "/servicio/soldaduras",
    title: "Soldaduras e instalaciones",
    description:
      "Uniones de cañerías PEAD y PVC por termofusión y electrofusión para redes y riego.",
  },
  {
    path: "/servicio/maquinaria",
    title: "Alquiler de maquinaria",
    description:
      "Maquinaria pesada y transporte de equipos, con o sin operador, según cada obra.",
  },
  {
    path: "/servicio/tunelera",
    title: "Tunelera topo",
    description:
      "Cruces subterráneos para instalar cañerías o conductos sin abrir zanjas en superficie.",
  },
  {
    path: "/404",
    title: "Página no encontrada",
    description: "La página solicitada no existe.",
    noIndex: true,
  },
];

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const outputDirectory = path.join(projectDirectory, "dist");
const sourceHtml = await readFile(path.join(outputDirectory, "index.html"), "utf8");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, key, content) => {
  const expression = new RegExp(`<meta(?=[^>]*${attribute}=["']${key}["'])[^>]*>`, "i");
  return html.replace(
    expression,
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
  );
};

const renderPageHtml = ({ path: pagePath, title, description, noIndex = false }) => {
  const pageTitle = `${title} | ${BRAND_NAME}`;
  const canonicalUrl = new URL(pagePath, SITE_URL).toString();

  let html = sourceHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);
  html = html.replace(
    /<link(?=[^>]*rel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = replaceMeta(html, "name", "description", description);
  html = replaceMeta(html, "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
  html = replaceMeta(html, "property", "og:title", pageTitle);
  html = replaceMeta(html, "property", "og:description", description);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "name", "twitter:title", pageTitle);
  html = replaceMeta(html, "name", "twitter:description", description);
  return html;
};

for (const page of pages) {
  const pageDirectory = path.join(outputDirectory, page.path.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(path.join(pageDirectory, "index.html"), renderPageHtml(page));
}

process.stdout.write(`Generated route metadata for ${pages.length} pages.\n`);
