import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_SERVICE_ID = "service_62801za";
const EMAIL_TEMPLATE_ID = "template_3g0h33i";
const EMAIL_PUBLIC_KEY = "ShUPLAGDtcxSO1vCJ";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "sending", message: "Enviando consulta…" });

    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formRef.current,
        EMAIL_PUBLIC_KEY,
      );
      formRef.current.reset();
      setStatus({
        type: "success",
        message: "Gracias. Recibimos tu consulta y nos pondremos en contacto.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "No pudimos enviar el mensaje. Podés escribirnos por WhatsApp o intentarlo nuevamente.",
      });
    }
  };

  const isSending = status.type === "sending";

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      aria-busy={isSending}
    >
      <div className="contact-form__heading">
        <span>Solicitud de contacto</span>
        <p>Contanos brevemente qué necesitás. Los campos marcados son obligatorios.</p>
      </div>

      <div className="form-field">
        <label htmlFor="username">Nombre y apellido *</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field form-field--split">
        <div>
          <label htmlFor="email">Correo electrónico *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>
        <div>
          <label htmlFor="number">Teléfono *</label>
          <input
            id="number"
            name="number"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">¿En qué podemos ayudarte? *</label>
        <textarea id="message" name="message" maxLength={500} rows={5} required />
        <span className="form-field__hint">Máximo 500 caracteres</span>
      </div>

      <div className="contact-form__submit">
        <button className="button button--ink" type="submit" disabled={isSending}>
          {isSending ? "Enviando…" : "Enviar consulta"}
          <span aria-hidden="true">→</span>
        </button>
        {status.message && (
          <p className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
            {status.message}
          </p>

        )}
        <p className="contact-form__privacy">

          Al enviar este formulario aceptás nuestra{" "}

          <a href="/privacidad">Política de Privacidad</a> y autorizás el uso de tus

          datos para responder tu consulta.

        </p>
      </div>
    </form>
  );
}
