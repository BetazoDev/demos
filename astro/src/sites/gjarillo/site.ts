import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: gjarilloyabogados.com.mx (sitio actual), Facebook «Despacho Gerardo Jarillo» y ficha de Google Maps. Ver lista-2/47-gjarillo/brand.json.
// Colores: azul pizarra #354753 del logo. El verde #93CA3A es el de los botones de su sitio actual (plantilla); se usa como único acento, solo en rellenos con texto oscuro.
export const site: SiteConfig = {
  slug: "gjarillo",
  name: "Gerardo Jarillo y Abogados",
  description: "Bufete de abogados en la Ciudad de México con alto nivel profesional y humano. Derecho laboral, civil y familiar para personas físicas y jurídicas.",
  logo: { src: logo, alt: "Gerardo Jarillo y Abogados", onDark: logoLight },
  theme: {
    bg: "#FAF9F6",
    surface: "#EFEDE7",
    ink: "#1E2A31",
    muted: "#59666E",
    brand: "#354753",
    onBrand: "#FFFFFF",
    accent: "#93CA3A",
    onAccent: "#16220A",
    line: "#DAD7CF",
    dark: "#243039",
    onDark: "#F5F6F4",
    radius: "12px",
  },
  fonts: { display: "--f-gjarillo-display", body: "--f-gjarillo-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/gjarillo/servicios" },
      { label: "La firma", href: "/gjarillo/nosotros" },
      { label: "Contacto", href: "/gjarillo/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525564508069?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: el despacho lo rotula con ícono de WhatsApp en su página de Contacto (sin enlace wa.me); no verificado con la app.
  whatsapp: { number: "525564508069", display: "55 6450 8069", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5574 9436", tel: "+525555749436" },
    { display: "55 8434 2829", tel: "+525584342829" },
  ],
  emails: ["gjarillog@gjarilloyabogados.com.mx"],
  addresses: [{ text: "Av. Baja California 163 bis, despacho 603, Col. Roma Sur, Alcaldía Cuauhtémoc, C.P. 06760, Ciudad de México", lat: 19.4062975, lng: -99.1644641 }],
  // Horario: el del sitio del despacho (Google Maps dice lunes a jueves 9:00 a 18:30 y viernes 9:00 a 17:00).
  hours: "Lunes a viernes, de 9:00 a 19:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gerardo%20Jarillo%20abogados&query_place_id=ChIJvxttIS7_0YURQcCoZnEzUvc",
  social: { facebook: "https://www.facebook.com/people/Despacho-Gerardo-Jarillo/61555716595940/" },
  google: null,
};
