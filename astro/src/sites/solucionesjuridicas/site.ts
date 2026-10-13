import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: solucionesjuridicas.com.mx, ficha de Google Maps y Facebook. Ver lista-2/38-solucionesjuridicas/brand.json.
// WhatsApp: número publicado por el propio sitio (botón «Contacte vía Whatsapp»), confianza alta.
export const site: SiteConfig = {
  slug: "solucionesjuridicas",
  name: "Soluciones Jurídicas",
  description: "Despacho de abogados en Ciudad de México dirigido por el Lic. Víctor Carrillo Estrada. Asuntos familiares, civiles, mercantiles, penales, corporativos y fiscales. Asesoría legal gratuita.",
  logo: { src: logo, alt: "Soluciones Jurídicas", onDark: logoLight },
  theme: {
    bg: "#F7FAFC",
    surface: "#E9F0F5",
    ink: "#0F2B42",
    muted: "#3F5369",
    brand: "#007BAD",
    onBrand: "#FFFFFF",
    accent: "#007BAD",
    onAccent: "#FFFFFF",
    line: "#CFDCE6",
    dark: "#0E2B44",
    onDark: "#F2F7FA",
    radius: "6px",
  },
  fonts: { display: "--f-solucionesjuridicas-display", body: "--f-solucionesjuridicas-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/solucionesjuridicas/servicios" },
      { label: "La firma", href: "/solucionesjuridicas/nosotros" },
      { label: "Contacto", href: "/solucionesjuridicas/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525517984108?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525517984108", display: "55 1798 4108", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 2454 8118", tel: "+525524548118", label: "Oficina" },
    { display: "55 1798 4108", tel: "+525517984108", label: "Celular" },
  ],
  emails: ["carrillo@solucionesjuridicas.com.mx", "legal@solucionesjuridicas.com.mx"],
  addresses: [{ label: "Oficina", text: "Ario 5, Col. Roma Sur, Alcaldía Cuauhtémoc, C.P. 06760, Ciudad de México", lat: 19.406757, lng: -99.1629553 }],
  hours: "Oficina: lunes a viernes de 8:00 a 18:00 h y sábados de 9:00 a 12:00 h. WhatsApp: todos los días, las 24 horas.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Soluciones%20Jur%C3%ADdicas%20Lic.%20V%C3%ADctor%20Carrillo%20Estrada&query_place_id=ChIJg0EpzhX_0YURT97TVhsjTlU",
  social: {
    facebook: "https://www.facebook.com/SolucionesJuridicasCDMX/",
    x: "https://twitter.com/sjuridicas",
    youtube: "https://www.youtube.com/@solucionesjuridicascdmx",
  },
  google: { rating: 4.7, reviews: 898 },
};
