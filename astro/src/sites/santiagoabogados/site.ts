import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: sitio Webnode del despacho (abogadocdmx.webnode.mx: Inicio, Servicios, Contacto), Facebook "Santiago & Asociados, Abogados",
// sitio Ueni y ficha de Google Maps. Ver lista-2/62-santiagoabogados/brand.json.
// WhatsApp: confianza alta (el Webnode lo rotula "Whats App +52 1 55 1801 3213"), aunque es el mismo número del fijo: probar a mano.
const WA = "525518013213";
const INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "santiagoabogados",
  name: "Santiago Abogados",
  description: "Santiago Abogados, despacho jurídico en la Roma Norte, Ciudad de México. Asesoría jurídica integral en materia civil, familiar, mercantil, laboral, fiscal, penal y amparo.",
  logo: { src: logo, alt: "Santiago Abogados", onDark: logoLight },
  theme: {
    bg: "#FAF9F6",
    surface: "#F0EEE7",
    ink: "#1A2430",
    muted: "#566271",
    brand: "#0B5385",
    onBrand: "#FFFFFF",
    accent: "#8A6A14",
    onAccent: "#FFFFFF",
    line: "#DEDACD",
    dark: "#0A2A42",
    onDark: "#F4F1E8",
    radius: "12px",
  },
  fonts: { display: "--f-santiagoabogados-display", body: "--f-santiagoabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/santiagoabogados/servicios" },
      { label: "Contacto", href: "/santiagoabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "55 1801 3213", confidence: "alta", intro: INTRO },
  phones: [
    { display: "55 1801 3213", tel: "+525518013213", label: "Oficina" },
    { display: "56 1414 6824", tel: "+525614146824" },
  ],
  emails: ["joseluis.santiagof@gmail.com"],
  addresses: [{ label: "Sede", text: "San Luis Potosí 127, Int. 101, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4140266, lng: -99.1605354 }],
  hours: "Lunes a viernes de 8:00 a 19:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santiago%20Abogados&query_place_id=ChIJH-9bqxP_0YUR4O1HfEf0fbg",
  social: { facebook: "https://www.facebook.com/AbogadoSantiagoF" },
  google: null,
};
