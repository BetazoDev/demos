import type { SiteConfig } from "@/kit/types";
import logoDark from "./assets/logo-dark.png";
import logoLight from "./assets/logo.svg";

// Fuentes: ordonezabogados.com.mx (Inicio), ficha de Google Maps y Facebook. Ver lista-2/39-ordonezabogados/brand.json.
const WA_INTRO = "Hola, me gustaría una orientación legal para mi empresa";

export const site: SiteConfig = {
  slug: "ordonezabogados",
  name: "Ordoñez Abogados",
  description: "Firma de derecho laboral patronal en Ciudad de México y Pachuca: representación en conflictos laborales, juicios colectivos, huelgas, amparo y auditorías para empresas.",
  logo: { src: logoDark, alt: "Ordoñez Abogados, asesoría jurídica laboral, abogados patronales", onDark: logoLight },
  theme: {
    bg: "#F4F7F8",
    surface: "#E6EDF0",
    ink: "#0C1C24",
    muted: "#4A5C66",
    brand: "#0C1C24",
    onBrand: "#FFFFFF",
    accent: "#1D98B9",
    onAccent: "#0C1C24",
    line: "#D2DCE1",
    dark: "#0C1C24",
    onDark: "#F2F7F9",
    radius: "12px",
  },
  fonts: { display: "--f-ordonezabogados-display", body: "--f-ordonezabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/ordonezabogados/servicios" },
      { label: "Contacto", href: "/ordonezabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525519524432?text=${encodeURIComponent(WA_INTRO)}.` },
  },
  whatsapp: { number: "525519524432", display: "55 1952 4432", confidence: "alta", intro: WA_INTRO },
  phones: [
    { display: "55 5584 2800", tel: "+525555842800" },
    { display: "55 5574 8196", tel: "+525555748196" },
    { display: "55 5264 2562", tel: "+525552642562" },
    { display: "55 5264 5155", tel: "+525552645155" },
    { display: "55 5264 2754", tel: "+525552642754" },
  ],
  emails: ["contacto@ordonezabogados.com"],
  addresses: [
    { label: "Ciudad de México", text: "Chiapas 34, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4135006, lng: -99.1563928 },
    { label: "Pachuca", text: "Pedro L. Rodríguez 112, Lt. 7, Nicolás Flores y Nuevo Pachuca, Fracc. Juan C. Doria, C.P. 42083, Pachuca de Soto, Hidalgo" },
  ],
  hours: "Lunes a viernes de 9:00 a 20:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ordo%C3%B1ez%20Abogados&query_place_id=ChIJOSgOTCP_0YUR8TSKzLQhxn0",
  social: { facebook: "https://www.facebook.com/ordonezabogadosmx/" },
  google: { rating: 4.4, reviews: 17 },
};
