export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="page-hero__copy">
          <span className="hero-eyebrow">Privacidad</span>

          <h1>Política de Privacidad</h1>

          <p className="page-hero__lead">
            Información sobre cómo Mares Construcción recopila, utiliza y
            protege los datos enviados a través de este sitio web.
          </p>
        </div>

        <div className="page-hero__media">
          <img
            src="/media/maresIcon.webp"
            alt="Mares Construcción"
          />
        </div>
      </section>

      <section className="privacy-page section-space">
        <div className="shell">
          <div className="privacy-layout">
            <aside className="privacy-sidebar">
              <span className="section-label">
                <span>01</span>
                <span className="section-label__line" />
                <span>Información legal</span>
              </span>
            </aside>

            <div className="privacy-content">
              <section className="privacy-section">
                <h2>Datos que recopilamos</h2>
                <p>
                  Podemos recopilar datos como nombre, correo electrónico,
                  teléfono y el contenido del mensaje enviado mediante nuestro
                  formulario de contacto.
                </p>
              </section>

              <section className="privacy-section">
                <h2>Finalidad del tratamiento</h2>
                <p>
                  Estos datos se utilizan para responder consultas, solicitudes
                  de presupuesto y comunicaciones relacionadas con los
                  servicios ofrecidos por Mares Construcción.
                </p>
              </section>

              <section className="privacy-section">
                <h2>Servicios de terceros</h2>
                <p>
                  El formulario de contacto utiliza EmailJS para procesar y
                  enviar los mensajes. Algunos datos pueden ser procesados por
                  este proveedor exclusivamente para permitir el funcionamiento
                  del servicio.
                </p>
              </section>

              <section className="privacy-section">
                <h2>Conservación de los datos</h2>
                <p>
                  Los datos serán conservados durante el tiempo necesario para
                  responder la consulta y gestionar la relación comercial
                  cuando corresponda.
                </p>
              </section>

              <section className="privacy-section">
                <h2>Derechos del usuario</h2>
                <p>
                  Las personas pueden solicitar acceso, actualización,
                  rectificación o eliminación de sus datos personales mediante
                  los canales de contacto disponibles en este sitio.
                </p>
              </section>

              <section className="privacy-section">
                <h2>Contacto</h2>
                <p>
                  Para consultas relacionadas con privacidad o tratamiento de
                  datos personales, podés comunicarte con Mares Construcción
                  mediante los medios disponibles en la página de contacto.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}