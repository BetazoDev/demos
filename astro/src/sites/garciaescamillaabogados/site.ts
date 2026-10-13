import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: sitio Wix archivado de García & Escamilla (Wayback, 21-nov-2024; el dominio ya no resuelve), Facebook y ficha de Google Maps.
// Ver lista-2/51-garciaescamillaabogados/brand.json. Colores: azul #06528B y gris #5B5C5D del logo; sin acento propio, el azul hace de acento.
export const site: SiteConfig = {
  slug: "garciaescamillaabogados",
  name: "García & Escamilla Abogados",
  description: "Despacho jurídico fundado en 2014 con abogados en derecho civil, mercantil, familiar, laboral y amparo en la Roma Norte, CDMX. Consulta presencial o remota.",
  logo: { src: logo, alt: "García & Escamilla Abogados", onDark: logoLight },
  theme: {
    bg: "#FBFBF9",
    surface: "#EDF2F6",
    ink: "#1B1F23",
    muted: "#5B5C5D",
    brand: "#06528B",
    onBrand: "#FFFFFF",
    accent: "#06528B",
    onAccent: "#FFFFFF",
    line: "#D9E0E6",
    dark: "#0A2B45",
    onDark: "#FFFFFF",
    radius: "0px",
  },
  fonts: { display: "--f-garciaescamillaabogados-display", body: "--f-garciaescamillaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/garciaescamillaabogados/servicios" },
      { label: "Contacto", href: "/garciaescamillaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525573904149?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: confianza media. Es el teléfono principal del despacho (sitio y Facebook); ninguna fuente lo llama WhatsApp. Probar a mano.
  whatsapp: { number: "525573904149", display: "55 7390 4149", confidence: "media", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 7390 4149", tel: "+525573904149" },
    { display: "55 5265 8905", tel: "+525552658905" },
  ],
  emails: ["abogadosgarciaescamilla@gmail.com"],
  // Dirección según Google Maps y Facebook; el sitio archivado (2023-2024) decía Dr. Velasco 181, Doctores.
  addresses: [{ text: "Av. Yucatán 54, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4153323, lng: -99.1645782 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Garc%C3%ADa%20%26%20Escamilla%20Abogados&query_place_id=ChIJ350kmyX_0YURC2xKidYRCRk",
  social: { facebook: "https://www.facebook.com/juridicogarciaesca/" },
  google: null,
};
