import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import markLight from "./assets/mark-light.svg";

// Fuentes: herrera-abogados.com.mx (Google Sites) y ficha de Google Maps. Ver lista-2/59-herreraabogados/brand.json.
// El despacho no publica teléfono, dirección ni WhatsApp: se usan los de su ficha de Google (confianza baja).
const wa = "https://wa.me/525555104622?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "herreraabogados",
  name: "Herrera Abogados",
  description: "Despacho que asesora y representa a sus clientes en sus negocios dentro y fuera de México: energía, inmuebles, regulatorio, acciones colectivas, telecomunicaciones y tecnología.",
  logo: { src: logo, alt: "Herrera Abogados", onDark: markLight },
  theme: {
    bg: "#0A1522",
    surface: "#102236",
    ink: "#EDF1F5",
    muted: "#A5B5C5",
    brand: "#E6B652",
    onBrand: "#0A1522",
    accent: "#E6B652",
    onAccent: "#0A1522",
    line: "#22364B",
    dark: "#060E17",
    onDark: "#EDF1F5",
    radius: "999px",
  },
  fonts: { display: "--f-herreraabogados-display", body: "--f-herreraabogados-body" },
  nav: {
    links: [
      { label: "Práctica", href: "/herreraabogados/practica" },
      { label: "Nosotros", href: "/herreraabogados/nosotros" },
      { label: "Contacto", href: "/herreraabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525555104622", display: "55 5510 4622", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 5510 4622", tel: "+525555104622" }],
  emails: ["contact@herrera-abogados.com.mx"],
  addresses: [
    {
      text: "Calle López 1, despacho 101 (Edificio Monterrey), Col. Centro, Alcaldía Cuauhtémoc, C.P. 06050, Ciudad de México",
      lat: 19.4342708,
      lng: -99.1423702,
    },
  ],
  hours: "Lunes a viernes de 10:00 a 18:30",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=HERRERA%20%26%20ABOGADOS&query_place_id=ChIJo1xyOyv50YUROg_dfRQ5dbw",
  social: {},
  google: null,
  privacyHref: "https://www.herrera-abogados.com.mx/privacy",
};
