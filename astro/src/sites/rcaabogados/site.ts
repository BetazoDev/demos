import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";

// Fuentes: rcaabogados.com (sitio 2025), ficha de Google Maps y perfiles enlazados desde su sitio. Ver lista-2/79-rcaabogados/brand.json.
// El logo es una placa azul marino con recuadro blanco: funciona tal cual sobre fondo claro y sobre azul.
const base = "/rcaabogados";
const intro = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "rcaabogados",
  name: "RCA Abogados",
  description: "Firma legal en Polanco, Ciudad de México, con 25 años de experiencia en litigio, fiscal, financiero, fintech, corporativo, penal y comercio exterior. 12 áreas de especialidad.",
  logo: { src: logo, alt: "RCA abogados, SC.", onDark: logo },
  theme: {
    bg: "#FFFFFF",
    surface: "#EEF3F7",
    ink: "#071727",
    muted: "#46596B",
    brand: "#023456",
    onBrand: "#FFFFFF",
    accent: "#A4E47A",
    onAccent: "#071727",
    line: "#D3DDE6",
    dark: "#071727",
    onDark: "#FFFFFF",
    radius: "8px",
  },
  fonts: { display: "--f-rcaabogados-display", body: "--f-rcaabogados-body" },
  nav: {
    links: [
      { label: "Áreas de práctica", href: `${base}/servicios` },
      { label: "La firma", href: `${base}/nosotros` },
      { label: "Contacto", href: `${base}/contacto` },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525540081831?text=${encodeURIComponent(intro)}.` },
  },
  // WhatsApp publicado por el propio despacho (botón flotante y enlace wa.me en su sitio).
  whatsapp: { number: "525540081831", display: "55 4008 1831", confidence: "alta", intro },
  phones: [{ display: "55 5525 8052", tel: "+525555258052", label: "Oficina" }],
  emails: ["info@rcaabogados.com"],
  addresses: [
    {
      label: "Ciudad de México",
      text: "Calz. Gral. Mariano Escobedo 353A, interior 902, Polanco, Miguel Hidalgo, C.P. 11560, Ciudad de México",
      lat: 19.4363623,
      lng: -99.1833726,
    },
  ],
  hours: "Lunes a viernes, de 10:00 a 17:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=RCA%20abogados%20SC&query_place_id=ChIJVVXlG6z40YUR7PHLsZIQZYI",
  social: {
    facebook: "https://www.facebook.com/RCAABOGADOSSC",
    instagram: "https://www.instagram.com/rcaabogadossc/",
    linkedin: "https://www.linkedin.com/in/rca-abogados-sc-985085128/",
    x: "https://x.com/RCAABOGADOSSC",
  },
  google: { rating: 5, reviews: 9 },
  privacyHref: `${base}/privacidad`,
};
