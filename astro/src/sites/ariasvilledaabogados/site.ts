import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: ariasvilledaabogados.com (PHP estático) y ficha de Google Maps. Ver lista-2/63-ariasvilledaabogados/brand.json.
// WhatsApp: no publicado; se usa 55 5264 8290, teléfono de la ficha de Google y del sitio (confianza baja, parece fijo).
const wa = "https://wa.me/525552648290?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "ariasvilledaabogados",
  name: "Arias & Villeda Abogados",
  description: "Despacho de abogados en la Roma Sur, Ciudad de México: derecho corporativo, administrativo, inmobiliario, gestión y trámites, y litigio civil, mercantil, familiar, laboral y penal.",
  logo: { src: logo, alt: "Arias & Villeda Abogados", onDark: logoLight },
  theme: {
    bg: "#F6F9FA",
    surface: "#E6EEF1",
    ink: "#0F1E26",
    muted: "#4C6471",
    brand: "#0B6A87",
    onBrand: "#FFFFFF",
    accent: "#0B6A87",
    onAccent: "#FFFFFF",
    line: "#D0DCE1",
    dark: "#163440",
    onDark: "#FFFFFF",
    radius: "0px",
  },
  fonts: { display: "--f-ariasvilledaabogados-display", body: "--f-ariasvilledaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/ariasvilledaabogados/servicios" },
      { label: "Cobertura", href: "/ariasvilledaabogados/cobertura" },
      { label: "La firma", href: "/ariasvilledaabogados/nosotros" },
      { label: "Contacto", href: "/ariasvilledaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525552648290", display: "55 5264 8290", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5264 8290", tel: "+525552648290" },
    { display: "55 5584 1452", tel: "+525555841452" },
  ],
  emails: ["contacto@ariasvilledaabogados.com"],
  addresses: [
    {
      text: "Tlaxcala No. 31 B, Colonia Roma Sur, Alcaldía Cuauhtémoc, C.P. 06760, Ciudad de México",
      lat: 19.4084453,
      lng: -99.1615306,
    },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Arias%20%26%20Villeda%20Abogados&query_place_id=ChIJpxUoEIz_0YURfFkJjEGtN-I",
  social: {},
  google: null,
  privacyHref: "/ariasvilledaabogados/privacidad",
};
