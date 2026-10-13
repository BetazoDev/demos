import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: calderon-orozco.com.mx, ficha de Google Maps y Facebook. Ver lista-2/36-calderonorozco/brand.json.
export const site: SiteConfig = {
  slug: "calderonorozco",
  name: "Calderón · Orozco Abogados",
  description: "Firma de abogados especializados en derecho penal y juicio oral, con defensa civil, mercantil, familiar, laboral y empresarial. Sedes en Ciudad de México y Pachuca.",
  logo: { src: logo, alt: "Calderón · Orozco Abogados", onDark: logo },
  theme: {
    bg: "#0D0C0B",
    surface: "#161412",
    ink: "#F2EDE3",
    muted: "#ABA498",
    brand: "#DFA402",
    onBrand: "#15110A",
    accent: "#DFA402",
    onAccent: "#15110A",
    line: "#2B2823",
    dark: "#070706",
    onDark: "#F2EDE3",
    radius: "999px",
  },
  fonts: { display: "--f-calderonorozco-display", body: "--f-calderonorozco-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/calderonorozco/servicios" },
      { label: "La firma", href: "/calderonorozco/nosotros" },
      { label: "Contacto", href: "/calderonorozco/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525513024724?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525513024724", display: "55 1302 4724", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 1302 4724", tel: "+525513024724" }],
  emails: ["contacto@calderon-orozco.com.mx"],
  addresses: [
    { label: "Ciudad de México", text: "Río Amazonas 22, Col. Cuauhtémoc, Alcaldía Cuauhtémoc, C.P. 06500, Ciudad de México", lat: 19.4326696, lng: -99.1641026 },
    { label: "Pachuca", text: "5 de febrero de 1917, no. 104, piso 1, interior C, Col. Periodistas, C.P. 42060, Pachuca de Soto, Hidalgo" },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Calder%C3%B3n%20%26%20Orozco%20Abogados&query_place_id=ChIJVVVhOsv40YURqhs0vHW9f1U",
  social: { facebook: "https://www.facebook.com/calderonyorozcoabogados" },
  google: null,
};
