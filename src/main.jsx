import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 🔹 Carga diferida de la App completa
const App = lazy(() => import("./App"));

// 🔹 Loader inicial muy liviano (solo HTML + CSS, sin React pesado)
const Loader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
      fontSize: "1.2rem",
      letterSpacing: "0.5px",
    }}
    role="status"
    aria-label="Cargando aplicación"
  >
    Cargando Mares Construcción...
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);