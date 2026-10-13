import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: cyca.mx (sitio actual), el sitio Wix archivado (2020-2024) y la ficha de Google Maps. Ver lista-2/41-cyca/brand.json.
// Colores: navy #003257 del logo; el acento cobre sale del CSS del sitio actual (#B95F21) y se oscurece un poco (#A9561D) para llegar a contraste AA con texto blanco.
export const site: SiteConfig = {
  slug: "cyca",
  name: "CYCA Abogados",
  description: "Firma fundada en 2011 con abogados de trayectoria académica y profesional reconocida. Asesoría corporativa, fiscal, administrativa y financiera en la colonia Álamos.",
  logo: { src: logo, alt: "CYCA Castillo y Castillo Abogados, S.C.", onDark: logoLight },
  theme: {
    bg: "#FFFFFF",
    surface: "#F0F3F7",
    ink: "#1F2328",
    muted: "#565C66",
    brand: "#003257",
    onBrand: "#FFFFFF",
    accent: "#A9561D",
    onAccent: "#FFFFFF",
    line: "#D6DCE4",
    dark: "#00213B",
    onDark: "#FFFFFF",
    radius: "0px",
  },
  fonts: { display: "--f-cyca-display", body: "--f-cyca-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/cyca/servicios" },
      { label: "La firma", href: "/cyca/nosotros" },
      { label: "Contacto", href: "/cyca/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525543461693?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: confianza alta, pero viene del sitio Wix archivado (hasta abril de 2024); el sitio actual ya no lo publica.
  whatsapp: { number: "525543461693", display: "55 4346 1693", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  // Los dos teléfonos se publican a 8 dígitos (5519 8892 y 5519 0567); se antepuso la lada 55.
  phones: [
    { display: "55 5519 8892", tel: "+525555198892" },
    { display: "55 5519 0567", tel: "+525555190567" },
  ],
  emails: ["contacto@cyca.mx"],
  addresses: [{ text: "Obrero Mundial 903, Int. 101, Col. Álamos, Alcaldía Benito Juárez, C.P. 03400, Ciudad de México", lat: 19.402531, lng: -99.1386749 }],
  hours: "Lunes a viernes, de 9:00 a 20:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=CYCA%20Abogados&query_place_id=ChIJ61cDPuT-0YURD9xC6mNG6OA",
  social: { x: "https://x.com/CYCA_Abogados" },
  google: { rating: 4.3, reviews: 10 },
  privacyHref: "/cyca/privacidad",
};
