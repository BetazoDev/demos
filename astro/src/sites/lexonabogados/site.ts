import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-color.svg";
import logoWhite from "./assets/logo-white.svg";

// Fuentes: lexonabogados.mx (HTML a mano, ~30 páginas), Facebook e Instagram del despacho y su ficha de Google Maps.
// Ver lista-2/24-lexonabogados/brand.json. Sin horario publicado: el sitio (L-S 9 a 19 h) y Google (L-V 9 a 16 h) no coinciden.
export const site: SiteConfig = {
  slug: "lexonabogados",
  name: "Lexon Abogados",
  description: "Bufete de abogados especializado en derecho sanitario y defensa penal del médico en Ciudad de México. Asesoría contra denuncias, demandas y multas de COFEPRIS.",
  logo: { src: logo, alt: "Lexon Abogados, abogados para la nueva realidad jurídica", onDark: logoWhite },
  theme: {
    bg: "#F3F6F8",
    surface: "#E8EEF3",
    ink: "#0A2640",
    muted: "#4A5F73",
    brand: "#0A2640",
    onBrand: "#FFFFFF",
    accent: "#7F6035",
    onAccent: "#FFFFFF",
    line: "#D0DAE3",
    dark: "#0A2640",
    onDark: "#F3F6F8",
    radius: "0px",
  },
  fonts: { display: "--f-lexonabogados-display", body: "--f-lexonabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/lexonabogados/servicios" },
      { label: "Nuestro despacho", href: "/lexonabogados/nosotros" },
      { label: "Contacto", href: "/lexonabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525643664823?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: confianza alta (botón wa.me del sitio, términos y condiciones y Facebook).
  whatsapp: { number: "525643664823", display: "56 4366 4823", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "56 4366 4823", tel: "+525643664823", label: "Atención al cliente y WhatsApp" }],
  emails: ["lexonabogados@gmail.com", "contacto@lexonabogados.mx"],
  addresses: [
    { label: "Sede", text: "Río Rhin 22, interior 302 (Edificio Mallorca), colonia Cuauhtémoc, alcaldía Cuauhtémoc, Ciudad de México, C.P. 06500", lat: 19.432813, lng: -99.1656133 },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lexon%20Abogados&query_place_id=ChIJ6-O3XB750YUR4GP1hEMXf2o",
  social: { facebook: "https://www.facebook.com/LexonAbogadosMX", instagram: "https://www.instagram.com/lexonabogadosmx/" },
  google: null,
  privacyHref: "/lexonabogados/privacidad",
};
