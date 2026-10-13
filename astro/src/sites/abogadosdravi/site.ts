import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: abogadosdravi.com.mx (home, servicios, Quiénes somos, Finalidad, Contáctenos, Aviso de privacidad) y ficha de Google Maps.
// Ver lista-2/34-abogadosdravi/brand.json. WhatsApp 55 3996 3612 (alta): el enlace del sitio omite el 52, aquí va completo (525539963612).
export const site: SiteConfig = {
  slug: "abogadosdravi",
  name: "Abogados DRAVI",
  description: "Despacho de abogados en la CDMX y Estado de México: familiar, civil, mercantil, laboral, administrativo y fiscal, amparos y póliza jurídica de arrendamiento.",
  logo: { src: logo, alt: "Abogados DRAVI, escudo con ojo de búho y balanza", onDark: logo },
  theme: {
    bg: "#181B38",
    surface: "#20244A",
    ink: "#F4F1E8",
    muted: "#B6BAD2",
    brand: "#EFBB04",
    onBrand: "#181B38",
    accent: "#EFBB04",
    onAccent: "#181B38",
    line: "#30356A",
    dark: "#0F1126",
    onDark: "#F4F1E8",
    radius: "20px",
  },
  fonts: { display: "--f-abogadosdravi-display", body: "--f-abogadosdravi-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadosdravi/servicios" },
      { label: "Quiénes somos", href: "/abogadosdravi/nosotros" },
      { label: "Contacto", href: "/abogadosdravi/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525539963612?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525539963612", display: "55 3996 3612", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 9865 5511", tel: "+525598655511", label: "Oficina" },
    { display: "55 3996 3612", tel: "+525539963612", label: "Móvil y WhatsApp" },
  ],
  emails: ["dravi_abogados@hotmail.com"],
  addresses: [{ label: "Oficina principal, atención previa cita", text: "Av. Paseo de la Reforma 42, Piso 1, Oficina A, Col. Centro, Alcaldía Cuauhtémoc, C.P. 06040, Ciudad de México", lat: 19.4337872, lng: -99.1524042 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%20DRAVI&query_place_id=ChIJ26TP24T50YURTDYKRcJ6WpQ",
  social: {},
  google: { rating: 4.7, reviews: 10 },
  privacyHref: "/abogadosdravi/privacidad",
};
