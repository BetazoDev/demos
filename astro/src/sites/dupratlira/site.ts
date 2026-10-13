import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: dupratlira.com (inicio, nosotros, contacto, aviso de privacidad, servicios), Google Maps y Facebook. Ver lista-2/40-dupratlira/brand.json.
// WhatsApp: el despacho publica dos, ambos como WhatsApp. Principal (botón flotante de su sitio y Facebook): 55 3228 3556. Alterno (botón móvil de Nosotros): 55 1475 0441.
export const WA = "525532283556";
export const WA_ALT = "525514750441";
export const site: SiteConfig = {
  slug: "dupratlira",
  name: "Duprat Lira Abogados",
  description: "Despacho de abogados en Ciudad de México con más de 20 años de experiencia en derecho laboral, familiar, civil, fiscal y mercantil. Primera consulta sin costo.",
  logo: { src: logo, alt: "Duprat Lira Abogados", onDark: logo },
  theme: {
    bg: "#FBFAF6",
    surface: "#F2EEE4",
    ink: "#172C41",
    muted: "#4D5A68",
    brand: "#172C41",
    onBrand: "#FFFFFF",
    accent: "#B18D42",
    onAccent: "#172C41",
    line: "#E1D9C6",
    dark: "#172C41",
    onDark: "#FFFFFF",
    radius: "0px",
  },
  fonts: { display: "--f-dupratlira-display", body: "--f-dupratlira-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/dupratlira/servicios" },
      { label: "Nosotros", href: "/dupratlira/nosotros" },
      { label: "Contacto", href: "/dupratlira/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 3228 3556", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 1475 0441", tel: "+525514750441", label: "Celular" },
    { display: "55 5160 1668", tel: "+525551601668", label: "Oficina" },
  ],
  emails: ["contacto@dupratlira.com"],
  addresses: [{ label: "Oficina", text: "Av. Insurgentes Sur 300, 6.º piso, desp. 615, colonia Roma Norte, alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4141399, lng: -99.1654526 }],
  hours: "Lunes a jueves de 9:00 a 18:00 h, viernes de 9:00 a 17:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Duprat%20Lira%20Abogados&query_place_id=ChIJFS9Q7TP_0YURMiWxmiGEgZU",
  social: { facebook: "https://www.facebook.com/dupratliraabogados/" },
  google: { rating: 5, reviews: 14 },
  privacyHref: "/dupratlira/privacidad",
};
