import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: página de Facebook del despacho (no tiene sitio propio) y ficha de Google Maps. Ver lista-2/80-ecalegalabogadosasociados/brand.json.
// Logo: wordmark de su portada de Facebook, recortado y reescalado 3x (calidad media).
const intro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "ecalegalabogadosasociados",
  name: "ECA Legal Abogados & Asociados",
  description: "Despacho de abogados en la colonia Buenavista, Ciudad de México. Especialistas en Derecho Civil, Familiar, Mercantil, Administrativo, Laboral y Amparo.",
  logo: { src: logo, alt: "ECA Legal Abogados & Asociados", onDark: logoLight },
  theme: {
    bg: "#FBFAF7",
    surface: "#F1EEE6",
    ink: "#0C0C0C",
    muted: "#55524C",
    brand: "#E1C063",
    onBrand: "#0C0C0C",
    accent: "#8C6D10",
    onAccent: "#FFFFFF",
    line: "#DDD7C8",
    dark: "#0C0C0C",
    onDark: "#F4F1EA",
    radius: "999px",
  },
  fonts: { display: "--f-ecalegalabogadosasociados-display", body: "--f-ecalegalabogadosasociados-body" },
  nav: {
    links: [
      { label: "Inicio", href: "/ecalegalabogadosasociados" },
      { label: "Contacto", href: "/ecalegalabogadosasociados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525563238387?text=${encodeURIComponent(intro)}.` },
  },
  // Confianza media: celular publicado por el propio despacho en Facebook y en Google; nadie lo llama WhatsApp.
  whatsapp: { number: "525563238387", display: "55 6323 8387", confidence: "media", intro },
  phones: [{ display: "55 6323 8387", tel: "+525563238387" }],
  emails: [],
  addresses: [{ label: "Sede", text: "Av. Plaza Buenavista 2, Col. Buenavista, Cuauhtémoc, C.P. 06300, Ciudad de México", lat: 19.4404389, lng: -99.1531006 }],
  hours: "Abierto las 24 horas",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=ECA%20Legal%20Abogados%20%26%20Asociados&query_place_id=ChIJIwYZ-JGv4UER5n-nhch-t1c",
  social: { facebook: "https://www.facebook.com/profile.php?id=100090388742535" },
  google: { rating: 5, reviews: 25 },
};
