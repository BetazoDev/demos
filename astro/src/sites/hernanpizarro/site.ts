import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: hernanpizarroabogado.com.mx, ficha de Google y Facebook. Ver lista-2/64-hernanpizarro/brand.json.
// WhatsApp: el despacho no lo publica; 55 5264 0214 es su teléfono (Google, Facebook, sitio). Confianza BAJA: confirmar.
export const site: SiteConfig = {
  slug: "hernanpizarro",
  name: "Hernán Pizarro y Asociados, Abogados",
  description: "Bufete de abogados en la colonia Roma Sur, Ciudad de México, con más de 30 años de experiencia en asuntos civiles, familiares, mercantiles, laborales y corporativos.",
  logo: { src: logo, alt: "Hernán Pizarro y Asociados, Abogados", onDark: logoLight },
  theme: {
    bg: "#FAF6F0",
    surface: "#F0E7DA",
    ink: "#2A1A14",
    muted: "#6B574F",
    brand: "#6B3E32",
    onBrand: "#FBF3EA",
    accent: "#9D693B",
    onAccent: "#FFFFFF",
    line: "#DDD0BF",
    dark: "#3B221B",
    onDark: "#FBF3EA",
    radius: "12px",
  },
  fonts: { display: "--f-hernanpizarro-display", body: "--f-hernanpizarro-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/hernanpizarro/servicios" },
      { label: "Nosotros", href: "/hernanpizarro/nosotros" },
      { label: "Contacto", href: "/hernanpizarro/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525552640214?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525552640214", display: "55 5264 0214", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5264 0214", tel: "+525552640214" },
    { display: "55 5574 8398", tel: "+525555748398" },
  ],
  emails: ["hernan.pizarro@yahoo.com.mx"],
  addresses: [
    { text: "Calle Manzanillo #123, Despachos 504 y 505, Colonia Roma Sur, Alcaldía Cuauhtémoc, C.P. 06760, Ciudad de México", lat: 19.4058711, lng: -99.165054 },
  ],
  hours: "Lunes a viernes, de 10:00 am a 4:00 pm. Sábado y domingo, cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Herman%20Pizarro%20Y%20Asociados%20Abogados&query_place_id=ChIJ_00sqBX_0YURsezkcmFu2P4",
  social: {
    facebook: "https://www.facebook.com/Hernan-Pizarro-Abogado-101745635565755",
    x: "https://x.com/hpmabogado",
    youtube: "https://www.youtube.com/channel/UCetBmX10i6gx3C5GT_RHxZA",
  },
  google: null,
};
