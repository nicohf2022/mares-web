import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css' 

export const Contact = () => {
  const refForm = useRef()
  const [statusMessage, setStatusMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const serviceId = 'service_62801za'
    const templateId = 'template_3g0h33i'
    const publicKey = 'ShUPLAGDtcxSO1vCJ'

    emailjs
      .sendForm(serviceId, templateId, refForm.current, publicKey)
      .then(() => {
        setStatusMessage('¡Mensaje enviado con éxito!')
        setIsError(false)
        refForm.current.reset()
      })
      .catch((error) => {
        setStatusMessage('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.')
        setIsError(true)
        console.error(error)
      })
  }

  return (
    <section className="form-container" aria-labelledby="contact-form-title">
      <form ref={refForm} onSubmit={handleSubmit} className="contact-form">
        <fieldset>
          <legend id="contact-form-title">Formulario de contacto</legend>
          <p className="form-instruction">
            Por favor complete este formulario para poder contactarnos.
          </p>

          <div className="field">
            <label htmlFor="username" className="symbol-required">Nombre</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Ingrese nombre completo"
              required
              aria-required="true"
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="symbol-required">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ingrese correo electrónico"
              required
              aria-required="true"
            />
          </div>

          <div className="field">
            <label htmlFor="number" className="symbol-required">Teléfono</label>
            <input
              id="number"
              name="number"
              type="tel"
              placeholder="Ingrese su número de teléfono"
              required
              aria-required="true"
            />
          </div>

          <div className="field">
            <label htmlFor="message" className="symbol-required">¿En qué podemos ayudarte?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describa su consulta"
              maxLength={500}
              cols={30}
              required
              aria-required="true"
            ></textarea>
          </div>

          <button
            className="btn-send"
            type="submit"
            aria-label="Enviar formulario de contacto"
          >
            Enviar
          </button>
        </fieldset>

        {statusMessage && (
          <p
            className={`status-message ${isError ? 'error' : 'success'}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  )
}