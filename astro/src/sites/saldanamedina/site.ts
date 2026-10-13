import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: saldana-medina-abogados.ueniweb.com (sitio y aviso legal) y ficha de Google. Ver lista-2/69-saldanamedina/brand.json.
// WhatsApp: 55 3143 2776 es el único teléfono del despacho; ninguna fuente lo rotula como WhatsApp (confianza baja).
export const site: SiteConfig = {
  slug: "saldanamedina",
  name: "Saldaña Medina & Abogados",
  description: "Despacho jurídico con base en Ciudad de México: representación especializada en juicios penales, civiles, mercantiles, familiares y administrativos.",
  logo: { src: logo, alt: "Saldaña Medina & Abogados", onDark: logo },
  theme: {
    bg: "#121212",
    surface: "#1B1B1B",
    ink: "#EEEEEE",
    muted: "#A9A9A9",
    brand: "#D9D9D9",
    onBrand: "#121212",
    accent: "#D9D9D9",
    onAccent: "#121212",
    line: "#2D2D2D",
    dark: "#0A0A0A",
    onDark: "#EEEEEE",
    radius: "6px",
  },
  fonts: { display: "--f-saldanamedina-display", body: "--f-saldanamedina-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/saldanamedina/servicios" },
      { label: "Contacto", href: "/saldanamedina/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525531432776?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525531432776", display: "55 3143 2776", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 3143 2776", tel: "+525531432776" }],
  emails: ["lic.danielsaldana@hotmail.com"],
  addresses: [{ label: "Domicilio social", text: "Dr. Erazo 85, Ciudad de México, C.P. 06720", lat: 19.4182608, lng: -99.14808 }],
  hours: "Disponibilidad las 24 horas, todos los días. Solo con cita previa.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Salda%C3%B1a%20Medina%20%26%20Abogados&query_place_id=ChIJLxPa2F3_0YURAY65fgcjqOg",
  social: {},
  google: null,
};
