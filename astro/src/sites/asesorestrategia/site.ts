import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: asesorestrategia.com (Inicio, La Firma, Servicios, Contacto, Aviso de Privacidad) y ficha de Google Maps.
// Ver lista-2/56-asesorestrategia/brand.json. WhatsApp: confianza alta (el sitio lo publica y todos sus botones son wa.me).
const WA = "528148123053";
const INTRO = "Hola, me gustaría agendar una consulta";

export const site: SiteConfig = {
  slug: "asesorestrategia",
  name: "Strategia Asesores",
  description: "Firma legal y consultoría patrimonial en la Ciudad de México. Protegemos el patrimonio y el legado de su familia con litigio y planeación estratégica preventiva.",
  logo: { src: logo, alt: "Strategia Asesores", onDark: logoLight },
  theme: {
    bg: "#F9F8F6",
    surface: "#EFEBE3",
    ink: "#0A1128",
    muted: "#565A6C",
    brand: "#2B3068",
    onBrand: "#FFFFFF",
    accent: "#8A6232",
    onAccent: "#FFFFFF",
    line: "#DDD8CD",
    dark: "#0A1128",
    onDark: "#F3F0E8",
    radius: "12px",
  },
  fonts: { display: "--f-asesorestrategia-display", body: "--f-asesorestrategia-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/asesorestrategia/servicios" },
      { label: "La firma", href: "/asesorestrategia/nosotros" },
      { label: "Contacto", href: "/asesorestrategia/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "81 4812 3053", confidence: "alta", intro: INTRO },
  phones: [{ display: "81 4812 3053", tel: "+528148123053" }],
  emails: ["contacto@asesorestrategia.com"],
  addresses: [
    { label: "Sede", text: "Monterrey 381, Despacho 2, Col. Roma Sur, Alcaldía Cuauhtémoc, C.P. 06760, Ciudad de México", lat: 19.4036398, lng: -99.1607182 },
  ],
  hours: "Lunes a viernes de 9 a.m. a 7 p.m.; sábado de 10 a.m. a 2 p.m.; domingo cerrado",
  mapsUrl: "https://maps.app.goo.gl/MiU54wZ9Fc4s4bmU6",
  social: {},
  google: null,
  privacyHref: "/asesorestrategia/privacidad",
};
