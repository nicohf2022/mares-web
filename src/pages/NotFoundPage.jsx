import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/pages.css";

export default function NotFoundPage() {
  usePageMeta({
    title: "Página no encontrada",
    description: "La página solicitada no existe.",
    path: "/404",
    noIndex: true,
  });

  return (
    <main id="main-content" className="not-found">
      <div className="shell">
        <span>404</span>
        <h1>La página que buscás no está acá.</h1>
        <p>Podés volver al inicio o explorar nuestros servicios.</p>
        <div>
          <Link className="button button--accent" to="/">
            Volver al inicio <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link text-link--light" to="/ofrecemos">
            Ver servicios
          </Link>
        </div>
      </div>
    </main>
  );
}
