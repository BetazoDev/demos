import type { SiteConfig } from "@/kit/types";
import mark from "./assets/mark.svg";

// Fuentes: abogadosquintero.com (sitio de una página) y ficha de Google. Ver lista-2/10-abogadosquintero/brand.json.
// Sin redes, sin aviso de privacidad y sin equipo con nombre. «Desde 1963» (en su logo) no se usa como dato.
const wa = "https://wa.me/525530695902?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "abogadosquintero",
  name: "Abogados Quintero",
  description: "Abogados de derecho familiar en la colonia Tabacalera, Ciudad de México: pensión alimenticia, divorcio, guarda y custodia, patria potestad y sucesiones.",
  logo: { src: mark, alt: "Abogados Quintero" },
  theme: {
    bg: "#F5F7FA",
    surface: "#E4EAF1",
    ink: "#212428",
    muted: "#4B5560",
    brand: "#212428",
    onBrand: "#FFFFFF",
    accent: "#FF014E",
    onAccent: "#FFFFFF",
    line: "#CCD4DF",
    dark: "#212428",
    onDark: "#F5F7FA",
    radius: "16px",
  },
  fonts: { display: "--f-abogadosquintero-display", body: "--f-abogadosquintero-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadosquintero/servicios" },
      { label: "Contacto", href: "/abogadosquintero/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525530695902", display: "55 3069 5902", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 3069 5902", tel: "+525530695902" }],
  emails: ["info@abogadosquintero.com"],
  addresses: [{ text: "Avenida de la República 9, Col. Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México", lat: 19.4365957, lng: -99.1528583 }],
  hours: "Lunes a viernes de 9:00 a 18:00. Sábados y domingos de 9:00 a 17:00.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%20Quintero&query_place_id=ChIJq6p-KCv50YURFuZZCDn7jps",
  social: {},
  google: null,
};
