import type { SiteConfig } from "@/kit/types";
import logoLight from "./assets/logo-light.png";

// Fuentes: ficha de Google, página de Facebook y volantes del propio abogado. No tiene sitio web.
// El número 55 1631 9839 lo rotula él mismo como «Tel y WhatsApp» en sus volantes.
export const site: SiteConfig = {
  slug: "victorhugonunoaguillonconsul",
  name: "Victor Hugo Nuño Aguillon · Abogado y Consultoría",
  description: "Asesoría jurídica clara y estratégica para personas y negocios: contratos, marcas e IMPI, abogado externo y paquetes mensuales para emprendedores y empresas en Granada, Polanco, Ciudad de México.",
  logo: { src: logoLight, alt: "Victor Hugo Nuño Aguillon, Abogado y Consultoría", onDark: logoLight },
  theme: {
    bg: "#07213B",
    surface: "#0D3157",
    ink: "#EBE6E0",
    muted: "#AAB7C6",
    brand: "#CEA94E",
    onBrand: "#07213B",
    accent: "#CEA94E",
    onAccent: "#07213B",
    line: "#1F4166",
    dark: "#04152A",
    onDark: "#EBE6E0",
    radius: "12px",
  },
  fonts: { display: "--f-victorhugonunoaguillonconsul-display", body: "--f-victorhugonunoaguillonconsul-body" },
  nav: {
    links: [
      { label: "Inicio", href: "/victorhugonunoaguillonconsul" },
      { label: "Contacto", href: "/victorhugonunoaguillonconsul/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525516319839?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525516319839", display: "55 1631 9839", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 1631 9839", tel: "+525516319839" }],
  emails: ["vhna@hotmail.com"],
  addresses: [{ text: "Lago Alberto S/N, Col. Granada, C.P. 11520, Miguel Hidalgo, Ciudad de México", lat: 19.4396908, lng: -99.1850614 }],
  hours: "Lunes, de 9:00 a 18:00. Martes a viernes, de 9:00 a 17:00. Sábado, de 10:00 a 14:00. Domingo, cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Victor%20Hugo%20Nu%C3%B1o%20Aguillon.-Consultor%C3%ADa%20Jur%C3%ADdica%20%26%20Abogados&query_place_id=ChIJ4Ra0CTH50YURmrJeL7Y9zxY",
  social: { facebook: "https://www.facebook.com/people/Victor-Hugo-Nu%C3%B1o-Aguillon/61592460041306/" },
  google: { rating: 5, reviews: 30 },
};
