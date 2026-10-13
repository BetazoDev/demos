import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: omcabogados.com.mx, ficha de Google Maps y captura de 2018 (Wayback). Ver lista-2/15-omcabogados/brand.json.
const WA_INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "omcabogados",
  name: "OMC abogados",
  description: "Abogados especialistas en el sistema de responsabilidades de los servidores públicos y del Estado y en derecho administrativo, en Paseo de la Reforma, Ciudad de México.",
  logo: { src: logo, alt: "Osorio | Morales, Abogados & Consultores", onDark: logoLight },
  theme: {
    bg: "#F5F5F3",
    surface: "#E9E9E6",
    ink: "#1B2028",
    muted: "#575D68",
    brand: "#333F50",
    onBrand: "#F5F5F3",
    accent: "#333F50",
    onAccent: "#F5F5F3",
    line: "#D2D3D0",
    dark: "#1A212C",
    onDark: "#EEEEEA",
    radius: "12px",
  },
  fonts: { display: "--f-omcabogados-display", body: "--f-omcabogados-body" },
  nav: {
    links: [
      { label: "Áreas de práctica", href: "/omcabogados/servicios" },
      { label: "Contacto", href: "/omcabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525518234033?text=${encodeURIComponent(WA_INTRO)}.` },
  },
  whatsapp: { number: "525518234033", display: "55 1823 4033", confidence: "media", intro: WA_INTRO },
  phones: [{ display: "55 5207 8457", tel: "+525552078457" }],
  emails: ["info@omcabogados.com.mx"],
  addresses: [
    { label: "Oficina", text: "Paseo de la Reforma 87, despacho 203, Col. Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México", lat: 19.4332835, lng: -99.1553935 },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Osorio%20%7C%20Morales%20%7C%20Carvajal%20abogados%20%26%20Consultores&query_place_id=ChIJexYFx9L40YURcJjgTkq63c4",
  social: {},
  google: null,
};
