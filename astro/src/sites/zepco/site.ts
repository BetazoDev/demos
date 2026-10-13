import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: zepco.mx (Inicio y Equipo), ficha de Google y Facebook. Ver lista-2/14-zepco/brand.json.
// WhatsApp: no publicado; se usa el único teléfono del despacho (fijo, ext. 0) con confianza baja.
// Nombre: «Zepeda & Torres Abogados» (sitio y Google); la razón social del pie es Zepeda Abogados, S.C.: confirmar.
const wa = "https://wa.me/525552606244?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "zepco",
  name: "Zepeda & Torres Abogados",
  description: "Despacho de abogados en Verónica Anzures, Ciudad de México, con más de 50 años de experiencia en consultoría legal y litigio para empresas, particulares e inversionistas.",
  logo: { src: logo, alt: "Zepeda & Torres Abogados", onDark: logoLight },
  theme: {
    bg: "#F8F7F4",
    surface: "#EFEEED",
    ink: "#102337",
    muted: "#4B5767",
    brand: "#102337",
    onBrand: "#FFFFFF",
    accent: "#FFDA89",
    onAccent: "#102337",
    line: "#D9D6CF",
    dark: "#102337",
    onDark: "#F8F7F4",
    radius: "4px",
  },
  fonts: { display: "--f-zepco-display", body: "--f-zepco-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/zepco/servicios" },
      { label: "La firma", href: "/zepco/nosotros" },
      { label: "Contacto", href: "/zepco/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525552606244", display: "55 5260 6244", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 5260 6244 ext. 0", tel: "+525552606244,0" }],
  emails: ["zepedaabogados@zepco.com.mx"],
  addresses: [{ text: "Calle Bahía de la Concepción 14, Cuarto Piso, Col. Verónica Anzures, Alcaldía Miguel Hidalgo, C.P. 11300, Ciudad de México", lat: 19.4338337, lng: -99.1732131 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zepeda%20%26%20Torres%20Abogados&query_place_id=ChIJmUlygrT40YUReydueK71CBE",
  social: { facebook: "https://www.facebook.com/p/Zepeda-Abogados-SC-100054369964058/" },
  google: null,
};
