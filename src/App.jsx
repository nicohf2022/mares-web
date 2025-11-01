import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/global.css";

// 🔹 Carga inmediata del Hero (ruta principal)
import Hero from "./components/Hero";

// 🔹 Lazy load del resto
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScreenContact = lazy(() => import("./components/ScreenContact"));
const Offer = lazy(() => import("./components/Offer"));
const Nosotros = lazy(() => import("./components/Nosotros"));
const ServicePage = lazy(() => import("./components/Servicepage"));

// 🔹 Loader visual liviano
const Loading = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "'Poppins', sans-serif",
      color: "#00CCE5",
      fontWeight: "bold",
    }}
    role="status"
    aria-label="Cargando contenido"
  >
    Cargando...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* Un solo Suspense para toda la app */}
      <Suspense fallback={<Loading />}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="contacto" element={<ScreenContact />} />
          <Route path="ofrecemos" element={<Offer />} />
          <Route path="/servicio/:serviceId" element={<ServicePage />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;