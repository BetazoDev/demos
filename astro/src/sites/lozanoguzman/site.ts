import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: abogadoscdmx.com.mx (Inicio, Quiénes somos, Servicios, Nuestro equipo, Clientes y socios) y ficha de Google Maps.
// Ver lista-2/61-lozanoguzman/brand.json. WhatsApp: confianza alta (el pie del sitio lo rotula "WhatsApp 55 4089 2337").
// Logo pensado para fondo oscuro (texto blanco): nav y pie propios componen el escudo original + el nombre.
const WA = "525540892337";
const INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "lozanoguzman",
  name: "Lozano Guzmán Abogados",
  description: "Lozano Guzmán Abogados: defensa penal, familiar, laboral, civil, mercantil y fiscal en la Ciudad de México y Ecatepec. Abogados egresados de la UNAM, con tarifa de éxito.",
  logo: { src: logo, alt: "Lozano Guzmán Abogados", onDark: logo },
  theme: {
    bg: "#F8F7F3",
    surface: "#EDEBE3",
    ink: "#071031",
    muted: "#4A5163",
    brand: "#071031",
    onBrand: "#FFFFFF",
    accent: "#8A6200",
    onAccent: "#FFFFFF",
    line: "#D9D6CB",
    dark: "#071031",
    onDark: "#F5F3EC",
    radius: "0px",
  },
  fonts: { display: "--f-lozanoguzman-display", body: "--f-lozanoguzman-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/lozanoguzman/servicios" },
      { label: "Quiénes somos", href: "/lozanoguzman/nosotros" },
      { label: "Contacto", href: "/lozanoguzman/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "55 4089 2337", confidence: "alta", intro: INTRO },
  phones: [{ display: "55 4089 2337", tel: "+525540892337", label: "WhatsApp" }],
  emails: ["lozano.guzman.abogados@gmail.com"],
  addresses: [
    { label: "Sucursal Ciudad de México", text: "Fray Pedro de Gante 8, Despacho 12, Col. Centro, Alcaldía Cuauhtémoc, C.P. 06000, Ciudad de México", lat: 19.4331578, lng: -99.1393457 },
    { label: "Sucursal Estado de México", text: "Prolongación Avenida Central, Manzana 2, Lote 6, Col. Llano de Morelos I, C.P. 55070, Ecatepec de Morelos, Estado de México" },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lozano%20Guzm%C3%A1n%20Abogados&query_place_id=ChIJq6q6siz50YURBHJZA9RXTeg",
  social: { facebook: "https://www.facebook.com/Lozanolex/" },
  google: null,
};
