import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";
import mark from "./assets/mark.svg";

// Fuentes: lexlababogados.com (WordPress), ficha de Google Maps, aviso de privacidad. Ver lista-2/07-lexlababogados/brand.json.
const WA = "525568783755";
const INTRO = "Hola, me interesa recibir información";

export const site: SiteConfig = {
  slug: "lexlababogados",
  name: "LexLab Abogados",
  description: "Firma legal especializada en materia laboral que protege a las empresas de forma integral: auditoría legal, consultoría, defensa ante demandas e inspecciones de la STPS en la Ciudad de México.",
  logo: { src: logo, alt: "LexLab Abogados", onDark: logoLight },
  theme: {
    bg: "#0D1015",
    surface: "#151A21",
    ink: "#F3EFEA",
    muted: "#A9AFB8",
    brand: "#EB5824",
    onBrand: "#14100D",
    accent: "#EB5824",
    onAccent: "#14100D",
    line: "#262C35",
    dark: "#07090C",
    onDark: "#F3EFEA",
    radius: "0 18px 0 18px",
  },
  fonts: { display: "--f-lexlababogados-display", body: "--f-lexlababogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/lexlababogados/servicios" },
      { label: "La firma", href: "/lexlababogados/nosotros" },
      { label: "Contacto", href: "/lexlababogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "55 6878 3755", confidence: "alta", intro: INTRO },
  phones: [
    { display: "55 5244 7950", tel: "+525552447950" },
    { display: "55 1113 7197", tel: "+525511137197" },
  ],
  emails: ["pedro@lexlababogados.com"],
  addresses: [
    { label: "Oficinas LexLab", text: "C. Bahía de las Palmas 24, interior 102, Col. Verónica Anzúres, Alcaldía Miguel Hidalgo, C.P. 11300, Ciudad de México", lat: 19.4358764, lng: -99.1731914 },
  ],
  hours: "Lunes a viernes, de 9:00 a 18:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=LexLab%20Abogados%20Laborales&query_place_id=ChIJZc_AZgD50YURx0Fw2iSM22k",
  social: {
    instagram: "https://www.instagram.com/lic.pedroroldan/",
    linkedin: "https://www.linkedin.com/in/pedro-roldan-marin",
    tiktok: "https://www.tiktok.com/@licpedroroldan",
  },
  google: { rating: 5.0, reviews: 30 },
  privacyHref: "/lexlababogados/privacidad",
};

// Versión con el cuadrado del logo (sin «ABOGADOS») para la barra de navegación, donde el logo completo no se lee.
export const navSite: SiteConfig = { ...site, logo: { src: mark, alt: "LexLab Abogados", onDark: mark } };
