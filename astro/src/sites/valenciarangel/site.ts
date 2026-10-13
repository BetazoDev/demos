import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-light.svg";

// Fuentes: valenciarangel.com (Inicio, Firma, Servicios, FAQ, Contacto, Aviso de privacidad), ficha de Google, Facebook, LinkedIn, X.
// Ver lista-2/09-valenciarangel/brand.json. WhatsApp: no publicado por el despacho (55 9235 3069 es su teléfono; confianza baja).
// Dirección: se usa la del sitio actual (Calz. Gral. Mariano Escobedo 375); Google dice Av. Homero 109 y el aviso Calle Homero 538: confirmar.
export const site: SiteConfig = {
  slug: "valenciarangel",
  name: "Valencia Rangel & Abogados Asociados",
  description: "Firma de abogados multidisciplinaria en Polanco, Ciudad de México: propiedad intelectual e industrial, mercantil, corporativo, civil, familiar, laboral y migratorio.",
  logo: { src: logo, alt: "Valencia Rangel Abogados Asociados", onDark: logo },
  theme: {
    bg: "#05202F",
    surface: "#0A2D43",
    ink: "#F6F3F1",
    muted: "#A9BBC6",
    brand: "#F3B97C",
    onBrand: "#05202F",
    accent: "#F3B97C",
    onAccent: "#05202F",
    line: "#1D4760",
    dark: "#031621",
    onDark: "#F6F3F1",
    radius: "999px",
  },
  fonts: { display: "--f-valenciarangel-display", body: "--f-valenciarangel-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/valenciarangel/servicios" },
      { label: "La firma", href: "/valenciarangel/nosotros" },
      { label: "FAQ", href: "/valenciarangel/preguntas-frecuentes" },
      { label: "Contacto", href: "/valenciarangel/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525592353069?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525592353069", display: "55 9235 3069", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 9235 3069 / 70", tel: "+525592353069" }],
  emails: ["info@valenciarangel.com"],
  addresses: [{ text: "Calz. Gral. Mariano Escobedo 375, Col. Chapultepec Morales, C.P. 11570, Alcaldía Miguel Hidalgo, Ciudad de México" }],
  hours: "Lunes a viernes de 10:00 a 18:00.",
  mapsUrl: null,
  social: {
    facebook: "https://www.facebook.com/valenciarangelabogados/",
    linkedin: "https://mx.linkedin.com/company/valenciarangelabogados",
    x: "https://twitter.com/ValenciaRangelA",
  },
  google: { rating: 4.7, reviews: 9 },
  privacyHref: "/valenciarangel/privacidad",
};
