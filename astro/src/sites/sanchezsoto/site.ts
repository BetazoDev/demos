import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";

// Fuentes: sanchezsoto.com.mx (home, 4 servicios, Conócenos, Contactos), ficha de Google Maps y perfil de autor en elconta.mx.
// Ver lista-2/28-sanchezsoto/brand.json. WhatsApp 55 5408 4560 (alta, botón Joinchat del sitio).
// Se excluye lo que la investigación marca como no corroborado: libros, reconocimiento de Defensa Fiscal, colaboraciones, año de fundación.
export const site: SiteConfig = {
  slug: "sanchezsoto",
  name: "Sánchez Soto Abogados",
  description: "Firma de abogados en Ciudad de México especializada en representación, litigio y consultoría en derecho administrativo, fiscal, constitucional y juicio de amparo.",
  logo: { src: logo, alt: "Sánchez Soto Abogados", onDark: logo },
  theme: {
    bg: "#171933",
    surface: "#222546",
    ink: "#EBEBEB",
    muted: "#AEB3C4",
    brand: "#EBEBEB",
    onBrand: "#171933",
    accent: "#A0A6B2",
    onAccent: "#171933",
    line: "#353965",
    dark: "#10122A",
    onDark: "#EBEBEB",
    radius: "999px",
  },
  fonts: { display: "--f-sanchezsoto-display", body: "--f-sanchezsoto-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/sanchezsoto/servicios" },
      { label: "Conócenos", href: "/sanchezsoto/nosotros" },
      { label: "Contacto", href: "/sanchezsoto/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525554084560?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525554084560", display: "55 5408 4560", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 5408 4560", tel: "+525554084560", label: "Teléfono y WhatsApp" }],
  emails: ["gsanchezsoto@gmail.com", "gsanchezsoto@yahoo.com"],
  addresses: [{ label: "Ciudad de México", text: "Río Rhin 22, oficina 302, Colonia Cuauhtémoc, Alcaldía Cuauhtémoc, C.P. 06500, Ciudad de México", lat: 19.4328209, lng: -99.1656021 }],
  hours: "Lunes a viernes de 9:00 a 20:00 h. Sábado y domingo cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=S%C3%A1nchez%20Soto%20Abogados&query_place_id=ChIJX878CAH50YURvlS2N7biEyw",
  social: {},
  google: null,
};
