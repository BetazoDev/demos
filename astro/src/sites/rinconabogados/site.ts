import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-navy.svg";
import logoOnDark from "./assets/logo.svg";

// Fuentes: rinconabogados.com (home, /sobre-rincon-abogados, 4 servicios, equipo), ficha de Google Maps, Facebook, Instagram, X y LinkedIn.
// Ver lista-2/21-rinconabogados/brand.json. WhatsApp: no está publicado; es el teléfono de la ficha de Google (confianza baja, probar a mano).
export const site: SiteConfig = {
  slug: "rinconabogados",
  name: "Rincón Mayorga Abogados",
  description: "Rincón Mayorga Abogados ofrece representación estratégica y soluciones jurídicas innovadoras en litigio, arbitraje, amparo y asesoría corporativa.",
  logo: { src: logo, alt: "Rincón Mayorga Abogados", onDark: logoOnDark },
  theme: {
    bg: "#FFFFFF",
    surface: "#E8EFF4",
    ink: "#14133B",
    muted: "#555770",
    brand: "#14133B",
    onBrand: "#FFFFFF",
    accent: "#ED7203",
    onAccent: "#14133B",
    line: "#CED8DF",
    dark: "#14133B",
    onDark: "#FFFFFF",
    radius: "999px",
  },
  fonts: { display: "--f-rinconabogados-display", body: "--f-rinconabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/rinconabogados/servicios" },
      { label: "Nosotros", href: "/rinconabogados/nosotros" },
      { label: "Contacto", href: "/rinconabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525552801505?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525552801505", display: "55 5280 1505", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5280 1505", tel: "+525552801505", label: "Ciudad de México" },
    { display: "33 3826 2526", tel: "+523338262526", label: "Guadalajara" },
  ],
  emails: ["diana.favela@rinconabogados.com", "quetzatl.valdez@rinconabogados.com"],
  addresses: [
    { label: "Ciudad de México", text: "Lafragua 13, Nivel 10 Suite 1001, Col. Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, CDMX. Edificio Downtown Be Grand Reforma", lat: 19.4346053, lng: -99.154309 },
    { label: "Guadalajara", text: "Paseo Royal Country 4650, Torre Zapopan, Piso 6, Puerta de Hierro, C.P. 45116, Zapopan, Jalisco", lat: 20.7074057, lng: -103.4153724 },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rinc%C3%B3n%2C%20Mayorga%20Abogados%20SC&query_place_id=ChIJB3Cc03j_0YUR4d4fZ-Z2Sz0",
  social: {
    facebook: "https://es-la.facebook.com/RinconAbogados/",
    instagram: "https://www.instagram.com/rincon.abogados/",
    linkedin: "https://www.linkedin.com/company/rinc%C3%B3n-mayorga-rom%C3%A1n-abogados-litigantes-s-c/",
    x: "https://x.com/rinconabogados",
  },
  google: null,
};
