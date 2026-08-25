import { contact } from "../../data/site";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-link"
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar con Mares por WhatsApp"
    >
      <span className="whatsapp-link__dot" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
