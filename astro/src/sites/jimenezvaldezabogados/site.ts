import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-light.png";

// Fuentes: Instagram @jv__abogados (bio y comunicado oficial del 4 de febrero de 2025) y ficha de Google Maps.
// Ver lista-2/82-jimenezvaldezabogados/brand.json. El despacho no tiene sitio web propio.
const base = "/jimenezvaldezabogados";
const intro = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "jimenezvaldezabogados",
  name: "Jiménez, Valdez & Abogados",
  description: "Abogados penalistas en Verónica Anzures, Ciudad de México: expertos en materia penal y constitucional, dedicados al litigio estratégico para proteger y garantizar los Derechos Humanos.",
  // El logo real es un wordmark en negro/blanco de baja resolución; se usa la versión clara sobre el fondo azul-negro.
  logo: { src: logo, alt: "Jiménez, Valdez & Abogados, Penalistas", onDark: logo },
  theme: {
    bg: "#0D0D16",
    surface: "#161724",
    ink: "#ECEDF1",
    muted: "#A3A6B4",
    brand: "#CDCED4",
    onBrand: "#0B0B12",
    accent: "#CDCED4",
    onAccent: "#0B0B12",
    line: "#2B2D3C",
    dark: "#08080E",
    onDark: "#ECEDF1",
    radius: "12px",
  },
  fonts: { display: "--f-jimenezvaldezabogados-display", body: "--f-jimenezvaldezabogados-body" },
  nav: {
    links: [{ label: "Contacto", href: `${base}/contacto` }],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525528842704?text=${encodeURIComponent(intro)}.` },
  },
  // Celular publicado en Google e Instagram con prefijo +52 1; ninguna fuente lo llama WhatsApp (confianza media).
  whatsapp: { number: "525528842704", display: "55 2884 2704", confidence: "media", intro },
  phones: [{ display: "55 2884 2704", tel: "+525528842704" }],
  emails: [],
  addresses: [
    {
      label: "Domicilio actual",
      text: "Bahía de San Cristóbal 3, Col. Verónica Anzures, Miguel Hidalgo, C.P. 11300, Ciudad de México",
      lat: 19.4374915,
      lng: -99.175747,
    },
  ],
  hours: "Lunes a viernes, de 9:00 a 17:00. Sábado, de 10:00 a 15:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=JIM%C3%89NEZ%2C%20VALDEZ%20%26%20ABOGADOS&query_place_id=ChIJ0ZH_mIn50YURyFxEhZMAWbQ",
  social: { instagram: "https://www.instagram.com/jv__abogados/" },
  google: null,
};
