import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: hidalgoabogados.com.mx (sitio actual, WordPress) y ficha de Google Maps. Ver lista-2/52-hidalgoabogados/brand.json.
// Colores: azul marino #1A3864, dorado #D0BA74 y tinta #0A1C2F salen del logo y del sitio. El naranja de los botones del sitio es de plantilla y se descarta.
export const site: SiteConfig = {
  slug: "hidalgoabogados",
  name: "Hidalgo Abogados",
  description: "Firma fundada en 1999 especializada en consultoría, construcción de acuerdos y litigio contencioso. Defensa penal, asesoría a víctimas y criminal compliance en CDMX.",
  logo: { src: logo, alt: "Gabriel Hidalgo Abogados", onDark: logoLight },
  theme: {
    bg: "#FBFAF7",
    surface: "#F1EEE6",
    ink: "#0A1C2F",
    muted: "#4F5B68",
    brand: "#1A3864",
    onBrand: "#FFFFFF",
    accent: "#D0BA74",
    onAccent: "#0A1C2F",
    line: "#DFD9CA",
    dark: "#0A1C2F",
    onDark: "#F6F3EA",
    radius: "6px",
  },
  fonts: { display: "--f-hidalgoabogados-display", body: "--f-hidalgoabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/hidalgoabogados/servicios" },
      { label: "La firma", href: "/hidalgoabogados/nosotros" },
      { label: "Contacto", href: "/hidalgoabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525525642646?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: el sitio lo rotula «WhatsApp» (ícono y etiqueta en todas las páginas) pero lo enlaza como tel:. No verificado con la app.
  whatsapp: { number: "525525642646", display: "55 2564 2646", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5005 6714", tel: "+525550056714" },
    { display: "55 5005 6740", tel: "+525550056740" },
  ],
  emails: ["info@hidalgoabogados.com.mx"],
  // Dirección del sitio actual. Google Maps muestra C. Orizaba 154, Roma Norte, y el sitio anterior (hasta 2022) decía Av. División del Norte 1354: confirmar la vigente.
  addresses: [{ text: "Avenida Insurgentes Sur 863, oficina 717 (piso siete), Col. Del Valle, Alcaldía Benito Juárez, C.P. 03810, Ciudad de México", lat: 19.38796, lng: -99.174601 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=19.38796,-99.174601",
  social: { linkedin: "https://www.linkedin.com/in/gabriel-hidalgo-pastor-b57b125a" },
  google: null,
};
