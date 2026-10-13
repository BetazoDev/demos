import type { SiteConfig } from "@/kit/types";
import logoLight from "./assets/logo-light.svg";

// Fuentes: Google Maps, Facebook, Instagram y YouTube del despacho (su sitio web está caído desde sept. 2024).
// Ver lista-2/17-marianoserraldeabogados/brand.json. El WhatsApp es 56 4131 3017 con confianza MEDIA: ninguna fuente lo rotula como WhatsApp.
const WA = "525641313017";
const INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "marianoserraldeabogados",
  name: "Mariano Serralde & Asociados",
  description: "Firma legal especializada en el rubro corporativo: asesoría y representación laboral, civil, mercantil, propiedad industrial y derechos de autor en Polanco, Ciudad de México.",
  // El sitio es oscuro: la versión clara del logo se usa como principal.
  logo: { src: logoLight, alt: "Mariano Serralde & Asociados", onDark: logoLight },
  theme: {
    bg: "#161616",
    surface: "#1F1F1F",
    ink: "#F2F2F0",
    muted: "#A8A8A8",
    brand: "#CDCDCD",
    onBrand: "#161616",
    accent: "#AB9C65",
    onAccent: "#161616",
    line: "#2E2E2E",
    dark: "#0E0E0E",
    onDark: "#F2F2F0",
    radius: "0px",
  },
  fonts: { display: "--f-marianoserraldeabogados-display", body: "--f-marianoserraldeabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/marianoserraldeabogados/servicios" },
      { label: "Contacto", href: "/marianoserraldeabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "56 4131 3017", confidence: "media", intro: INTRO },
  phones: [{ display: "56 4131 3017", tel: "+525641313017" }],
  emails: ["contacto@marianoserraldeabogados.com"],
  addresses: [
    { label: "Torre Polanco", text: "Calz. Gral. Mariano Escobedo 476, piso 12, oficina 1200-B, Col. Chapultepec Morales, Anzures, Alcaldía Miguel Hidalgo, C.P. 11590, Ciudad de México", lat: 19.4330093, lng: -99.1813113 },
  ],
  hours: "Lunes a jueves, de 9:00 a 18:00. Viernes, de 8:00 a 18:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mariano%20Serralde%20Abogados&query_place_id=ChIJDfQN3U7_0YURHB3IgyGh4ik",
  social: {
    facebook: "https://www.facebook.com/marianoserraldeabogados/",
    instagram: "https://www.instagram.com/msabogadosmx/",
    youtube: "https://www.youtube.com/@msabogadosmx",
  },
  google: { rating: 5.0, reviews: 5 },
};
