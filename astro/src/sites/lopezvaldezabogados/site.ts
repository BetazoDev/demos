import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";

// Fuentes: lopezvaldezabogados.com, ficha de Google Maps, LinkedIn, X, Instagram. Ver lista-2/04-lopezvaldezabogados/brand.json.
const wa = "https://wa.me/525572117045?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "lopezvaldezabogados",
  name: "López Valdez Abogados",
  description: "Firma boutique de derecho penal y proceso penal acusatorio, fundada en 2005. Defensa penal y litigio estratégico en Anzures, Ciudad de México.",
  logo: { src: logo, alt: "López Valdez Abogados", onDark: logo },
  theme: {
    bg: "#131110",
    surface: "#1B1815",
    ink: "#FFF0DD",
    muted: "#B9A58D",
    brand: "#E3B582",
    onBrand: "#1A1A1A",
    accent: "#E3B582",
    onAccent: "#1A1A1A",
    line: "#352B21",
    dark: "#0C0B0A",
    onDark: "#FFF0DD",
    radius: "0px",
  },
  fonts: { display: "--f-lopezvaldezabogados-display", body: "--f-lopezvaldezabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/lopezvaldezabogados/servicios" },
      { label: "La firma", href: "/lopezvaldezabogados/nosotros" },
      { label: "Contacto", href: "/lopezvaldezabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525572117045", display: "55 7211 7045", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 2583 8540", tel: "+525525838540" },
    { display: "55 9129 3828", tel: "+525591293828" },
  ],
  emails: ["contacto@lopezvaldezabogados.com"],
  addresses: [
    { label: "Ciudad de México", text: "Edificio CENTURY Plaza, Buffon 46, Despacho 404, Anzures, Miguel Hidalgo, C.P. 11590, Ciudad de México", lat: 19.4345443, lng: -99.1768947 },
    { label: "Estado de México", text: "Parque de Granada No. 35, Despacho 504-B, Parques de la Herradura, Huixquilucan, Estado de México" },
  ],
  hours: "Lunes a viernes de 9:00 a 17:00. Sábados de 10:00 a 15:00.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=L%C3%B3pez%20Valdez%20Abogados%2C%20S.C.&query_place_id=ChIJzS9R8hgC0oURgHkGo_yNHpA",
  social: {
    facebook: "https://www.facebook.com/LopezValdezAbogados",
    instagram: "https://www.instagram.com/lopezvaldezabogados/",
    linkedin: "https://www.linkedin.com/company/l%C3%B3pez-valdez-abogados-s-c/",
    x: "https://x.com/LopezV_Abogados",
  },
  google: { rating: 5.0, reviews: 18 },
  privacyHref: "/lopezvaldezabogados/privacidad",
};
