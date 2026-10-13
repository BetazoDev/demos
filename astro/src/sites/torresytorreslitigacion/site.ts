import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-horizontal.png";

// Fuentes: torresytorreslitigacion.mx (home, servicios, La Firma, CDMX) y ficha de Google Maps. Ver lista-2/22-torresytorreslitigacion/brand.json.
// WhatsApp 55 2949 8057 (alta). El botón flotante del sitio actual apunta a otro número (442 818 3472); no se usa.
export const site: SiteConfig = {
  slug: "torresytorreslitigacion",
  name: "Grupo Roberto Torres & Torres",
  description: "Despacho especializado en defensa penal, amparo, penal financiero, compliance y litigación estratégica en Ciudad de México.",
  logo: { src: logo, alt: "Roberto, Grupo Torres & Torres", onDark: logo },
  theme: {
    bg: "#040C18",
    surface: "#0B1424",
    ink: "#F5F1E8",
    muted: "#AAB1BD",
    brand: "#D6A753",
    onBrand: "#0A0F18",
    accent: "#D6A753",
    onAccent: "#0A0F18",
    line: "#1E2A3D",
    dark: "#02070F",
    onDark: "#F5F1E8",
    radius: "6px",
  },
  fonts: { display: "--f-torresytorreslitigacion-display", body: "--f-torresytorreslitigacion-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/torresytorreslitigacion/servicios" },
      { label: "La firma", href: "/torresytorreslitigacion/nosotros" },
      { label: "Contacto", href: "/torresytorreslitigacion/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525529498057?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525529498057", display: "55 2949 8057", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 2949 8057", tel: "+525529498057", label: "Teléfono y WhatsApp" },
    { display: "55 9056 4343", tel: "+525590564343" },
  ],
  emails: ["roberto@torresytorreslitigacion.mx"],
  addresses: [{ label: "Ciudad de México", text: "Bahía de San Cristóbal #3, oficina #315, Colonia Verónica Anzures, C.P. 11300, Alcaldía Miguel Hidalgo, Ciudad de México", lat: 19.4374915, lng: -99.1757435 }],
  hours: "9:00 am a 18:00 hrs. La atención presencial se realiza con cita.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Grupo%20Torres%20%26%20Torres%20Litigaci%C3%B3n%20Estrat%C3%A9gica%20-%20Despacho%20de%20abogados&query_place_id=ChIJOXt39gX50YURB4nkj0Xhl3A",
  social: {},
  google: null,
};
