import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: irra.com.mx (Inicio, Firma, Abogados), su brochure PDF (áreas de práctica y sectores) y la ficha de Google Maps.
// Ver lista-2/66-irra/brand.json. WhatsApp: confianza BAJA (ningún medio del despacho publica uno; es el teléfono del listado
// de Google, 55 5574 0032, probablemente línea fija). Se usa en los botones por indicación del brief: probar a mano.
const WA = "525555740032";
const INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "irra",
  name: "Irra Ibarra",
  description: "Irra Ibarra, firma líder en el asesoramiento legal en México: arbitraje, litigio, corporativo, bancario, inmobiliario, marítimo y más. Más de 40 años en la Ciudad de México.",
  logo: { src: logo, alt: "Irra Ibarra", onDark: logoLight },
  theme: {
    bg: "#070C16",
    surface: "#0D1524",
    ink: "#ECF0F7",
    muted: "#9AA6BA",
    brand: "#034591",
    onBrand: "#FFFFFF",
    accent: "#7DB2F5",
    onAccent: "#04101F",
    line: "#1D2842",
    dark: "#040810",
    onDark: "#ECF0F7",
    radius: "0px",
  },
  fonts: { display: "--f-irra-display", body: "--f-irra-body" },
  nav: {
    links: [
      { label: "Áreas de práctica", href: "/irra/areas-de-practica" },
      { label: "La firma", href: "/irra/nosotros" },
      { label: "Contacto", href: "/irra/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "55 5574 0032", confidence: "baja", intro: INTRO },
  phones: [
    { display: "55 5574 0032", tel: "+525555740032", label: "Roma Norte" },
    { display: "55 5574 4425", tel: "+525555744425" },
    { display: "55 5564 4227", tel: "+525555644227" },
    { display: "55 7316 2188", tel: "+525573162188", label: "Torre Reforma" },
  ],
  emails: ["contacto@irra.com.mx"],
  addresses: [
    { label: "Roma Norte", text: "Querétaro 226-8, Col. Roma Norte, C.P. 06700, Ciudad de México" },
    { label: "Torre Reforma", text: "Paseo de la Reforma 483, Piso 14, Col. Juárez, C.P. 06600, Ciudad de México" },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Irra%20Ibarra%20abogados&query_place_id=ChIJ0Y5ZVDn_0YUR6Mo2cXVUU9s",
  social: { linkedin: "http://www.linkedin.com/company/3249084" },
  google: null,
};
