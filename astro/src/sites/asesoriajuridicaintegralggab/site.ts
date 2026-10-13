import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: página de Facebook ggjuridico15 (portada con servicios y WhatsApp, descripción) y ficha de Google Maps.
// Ver lista-2/87-asesoriajuridicaintegralggab/brand.json. El despacho no tiene sitio web propio.
// Dirección sin confirmar (Google dice Roma Norte, Facebook dice Ecatepec): no se publica.
const base = "/asesoriajuridicaintegralggab";
const intro = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "asesoriajuridicaintegralggab",
  name: "G&G Asesoría Jurídica Integral",
  description: "Despacho jurídico que combina servicios de consultoría, litigio y controversias legales: despido injustificado, divorcios, pensión alimenticia, sucesiones, inmuebles y trámites notariales.",
  logo: { src: logo, alt: "G&G Asesoría Jurídica Integral, Firma Legal", onDark: logoLight },
  theme: {
    bg: "#FBF9F6",
    surface: "#F0EBE3",
    ink: "#0B2239",
    muted: "#4C5B6B",
    brand: "#06335A",
    onBrand: "#FFFFFF",
    accent: "#711316",
    onAccent: "#FFFFFF",
    line: "#DDD5C8",
    dark: "#052847",
    onDark: "#FBF9F6",
    radius: "16px",
  },
  fonts: { display: "--f-asesoriajuridicaintegralggab-display", body: "--f-asesoriajuridicaintegralggab-body" },
  nav: {
    links: [{ label: "Contacto", href: `${base}/contacto` }],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525521719820?text=${encodeURIComponent(intro)}.` },
  },
  // El despacho muestra el ícono de WhatsApp junto a este número en la portada de su Facebook (confianza alta).
  whatsapp: { number: "525521719820", display: "55 2171 9820", confidence: "alta", intro },
  phones: [{ display: "55 2171 9820", tel: "+525521719820" }],
  emails: [],
  addresses: [],
  hours: null,
  mapsUrl: null,
  social: { facebook: "https://www.facebook.com/ggjuridico15/" },
  google: null,
};
