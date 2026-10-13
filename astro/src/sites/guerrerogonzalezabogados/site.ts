import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: guerrerogonzalezabogados.com (sitio actual, es/en/fr) y ficha de Google Maps. Ver lista-2/46-guerrerogonzalezabogados/brand.json.
// Colores: gris carbón #404041 y verde #B2CF34 del logo; los fondos oscuros salen del CSS del sitio (#2A2A2A, #39393A).
// Sin WhatsApp ni correo publicados: todos los botones de contacto llaman al único teléfono (confianza: fijo, publicado a 8 dígitos).
export const site: SiteConfig = {
  slug: "guerrerogonzalezabogados",
  name: "Guerrero González Abogados",
  description: "Despacho de servicios legales integrales en la Roma Norte: bancario, fusiones y adquisiciones, inversión extranjera, inmobiliario, litigio y arbitraje.",
  logo: { src: logo, alt: "Guerrero González Abogados", onDark: logoLight },
  theme: {
    bg: "#1B1B1C",
    surface: "#262627",
    ink: "#F2F2EF",
    muted: "#A9A9A5",
    brand: "#B2CF34",
    onBrand: "#161B05",
    accent: "#B2CF34",
    onAccent: "#161B05",
    line: "#3A3A3C",
    dark: "#111112",
    onDark: "#F2F2EF",
    radius: "0px",
  },
  fonts: { display: "--f-guerrerogonzalezabogados-display", body: "--f-guerrerogonzalezabogados-body" },
  nav: {
    links: [
      { label: "Áreas de práctica", href: "/guerrerogonzalezabogados/areas-de-practica" },
      { label: "Despacho", href: "/guerrerogonzalezabogados/despacho" },
      { label: "Contacto", href: "/guerrerogonzalezabogados/contacto" },
    ],
    cta: { label: "Llamar al 55 5564 5950", href: "tel:+525555645950" },
  },
  whatsapp: { number: null, display: null, confidence: "ninguno", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 5564 5950", tel: "+525555645950" }],
  emails: [],
  addresses: [{ text: "Av. Yucatán 56, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4152226, lng: -99.164534 }],
  // Horario: solo consta en Google Maps; el sitio del despacho no lo publica.
  hours: "Lunes a viernes, de 9:00 a 17:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Guerrero%20Gonz%C3%A1lez&query_place_id=ChIJafdxJDn_0YURVezkcU8eIu0",
  social: {},
  google: null,
  privacyHref: "/guerrerogonzalezabogados/privacidad",
};
