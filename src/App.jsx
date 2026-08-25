import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollManager from "./components/layout/ScrollManager";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const legacyServiceIds = {
  "obras-civiles": "obras",
  obras: "obras",
  soldaduras: "soldaduras",
  maquinaria: "maquinaria",
  tunelera: "tunelera",
};

function LegacyServiceRedirect() {
  const { serviceId = "" } = useParams();
  const canonicalId = legacyServiceIds[serviceId.toLowerCase()];
  return canonicalId ? (
    <Navigate to={`/servicio/${canonicalId}`} replace />
  ) : (
    <Navigate to="/ofrecemos" replace />
  );
}

function RouteLoader() {
  return (
    <div className="route-loader" role="status" aria-label="Cargando página">
      <span />
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <ScrollManager />
      <Header />

      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/ofrecemos" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/servicio/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/servicios" element={<Navigate to="/ofrecemos" replace />} />
          <Route path="/servicios/:serviceId" element={<LegacyServiceRedirect />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
