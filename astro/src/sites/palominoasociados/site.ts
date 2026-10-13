import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: palominoasociados.com, ficha de Google Maps, Facebook y LinkedIn. Ver lista-2/06-palominoasociados/brand.json.
// Logo: vector original del propio sitio (pluma + rúbrica + PALOMINO & ASOCIADOS); logo-light y mark-light son recoloreos del mismo vector para campos azules.
// WhatsApp 55 3712 7954: confianza alta (lo publica el despacho en el encabezado y en sus botones).
export const WA = "525537127954";
export const site: SiteConfig = {
  slug: "palominoasociados",
  name: "Palomino & Asociados",
  description: "Sociedad de abogados en la colonia San Rafael, CDMX, con más de 30 años de experiencia acumulada en derecho penal, laboral, migratorio, civil, mercantil y familiar.",
  logo: { src: logo, alt: "Palomino & Asociados", onDark: logoLight },
  theme: {
    bg: "#F2F2F2",
    surface: "#E6E7EC",
    ink: "#0E1126",
    muted: "#4D5168",
    brand: "#262E64",
    onBrand: "#FFFFFF",
    accent: "#262E64",
    onAccent: "#FFFFFF",
    line: "#CBCDD8",
    dark: "#141937",
    onDark: "#F2F2F2",
    radius: "0px",
  },
  fonts: { display: "--f-palominoasociados-display", body: "--f-palominoasociados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/palominoasociados/servicios" },
      { label: "Nosotros", href: "/palominoasociados/nosotros" },
      { label: "Contacto", href: "/palominoasociados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 3712 7954", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 3712 7954", tel: "+525537127954" }],
  emails: ["contacto@palominoasociados.com"],
  addresses: [
    { label: "Sede", text: "Manuel María Contreras 13, Col. San Rafael, Alcaldía Cuauhtémoc, C.P. 06470, Ciudad de México", lat: 19.4419542, lng: -99.1641362 },
  ],
  // Sin horario: el sitio dice 8:00 a 23:00 y Google lunes a viernes 10:00 a 18:00.
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Palomino%20%26%20Asociados&query_place_id=ChIJ6R7W6wv50YUREkJACgqf6UQ",
  social: { facebook: "https://www.facebook.com/profile.php?id=100064040651688", linkedin: "https://www.linkedin.com/company/palomino-asociados" },
  google: { rating: 4.8, reviews: 22 },
  privacyHref: "/palominoasociados/privacidad",
};

export const waLink = (text: string = site.whatsapp.intro) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
