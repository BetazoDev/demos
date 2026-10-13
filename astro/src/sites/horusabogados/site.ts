import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.png";

// Fuentes: página de Facebook HORUS.Abogados (descripción, lema, gráficos, recomendaciones) y ficha de Google Maps.
// Ver lista-2/88-horusabogados/brand.json. El despacho no tiene sitio web propio.
const base = "/horusabogados";
const intro = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "horusabogados",
  name: "HORUS Abogados",
  description: "Despacho legal especializado en las materias civil, familiar, mercantil y penal, en la colonia Obrera, Ciudad de México. La ley con aspecto humano. Estamos para servirte.",
  logo: { src: logo, alt: "HORUS Abogados, la ley con aspecto humano", onDark: logoLight },
  theme: {
    bg: "#FBF8F2",
    surface: "#F1EADB",
    ink: "#011730",
    muted: "#4B566B",
    brand: "#032356",
    onBrand: "#FFFFFF",
    accent: "#C59A4D",
    onAccent: "#1A1306",
    line: "#DDD3BE",
    dark: "#011730",
    onDark: "#FBF8F2",
    radius: "20px",
  },
  fonts: { display: "--f-horusabogados-display", body: "--f-horusabogados-body" },
  nav: {
    links: [{ label: "Contacto", href: `${base}/contacto` }],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525571388796?text=${encodeURIComponent(intro)}.` },
  },
  // El despacho lo rotula «Teléfono y WhatsApp» en sus gráficos y su página tiene botón de WhatsApp (confianza alta).
  whatsapp: { number: "525571388796", display: "55 7138 8796", confidence: "alta", intro },
  phones: [{ display: "55 7138 8796", tel: "+525571388796" }],
  emails: ["romeroguevarade@gmail.com"],
  addresses: [
    {
      label: "Sede",
      text: "Francisco Olaguibel 154-A, Col. Obrera, Cuauhtémoc, C.P. 06800, Ciudad de México",
      lat: 19.4109641,
      lng: -99.1362493,
    },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=HORUS%20Abogados&query_place_id=ChIJ4dN8EPL_0YUR4IsEL98y44E",
  social: { facebook: "https://www.facebook.com/HORUS.Abogados" },
  google: null,
};
