import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-light.svg";

// Fuentes: glab.mx (sitio vigente; el dominio gomez-lunaabogados.com está caído), ficha de Google, Facebook e Instagram.
// Ver lista-2/18-gomezlunaabogados/brand.json. WhatsApp: no publicado; se usa el teléfono del listado (confianza baja).
// Correo: solo el de Facebook (los de glab.mx son incoherentes entre texto y enlace).
const wa = "https://wa.me/525553950252?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "gomezlunaabogados",
  name: "Gómez Luna Abogados SC",
  description: "Firma de abogados en Anzures, Ciudad de México, fundada en 2017: asesoría integral en materia civil, penal, notarial y registral, y mercantil.",
  logo: { src: logo, alt: "Gómez Luna Abogados SC", onDark: logo },
  theme: {
    bg: "#091626",
    surface: "#0F2238",
    ink: "#F4F7FB",
    muted: "#A9B8CC",
    brand: "#BCD0EA",
    onBrand: "#091626",
    accent: "#BCD0EA",
    onAccent: "#091626",
    line: "#1E3350",
    dark: "#050D18",
    onDark: "#F4F7FB",
    radius: "24px",
  },
  fonts: { display: "--f-gomezlunaabogados-display", body: "--f-gomezlunaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/gomezlunaabogados/servicios" },
      { label: "La firma", href: "/gomezlunaabogados/nosotros" },
      { label: "Contacto", href: "/gomezlunaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525553950252", display: "55 5395 0252", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5395 0252", tel: "+525553950252" },
    { display: "55 2211 2040", tel: "+525522112040" },
  ],
  emails: ["gomezlunaabogadossc@gmail.com"],
  addresses: [{ text: "Leibnitz 231, Anzures, C.P. 11590, Alcaldía Miguel Hidalgo, Ciudad de México", lat: 19.4336793, lng: -99.1795442 }],
  hours: "Lunes a viernes de 9:30 a 19:00.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=G%C3%B3mez-Luna%20Abogados%20SC&query_place_id=ChIJ2zPqEvD50YURu_JoFMfovsc",
  social: {
    facebook: "https://www.facebook.com/gomezlunaabogados/",
    instagram: "https://www.instagram.com/gomezlunasc/",
    linkedin: "https://mx.linkedin.com/company/g%C3%B3mez-luna-abogados-sc",
  },
  google: null,
};
