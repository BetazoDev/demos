import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: calizsosaabogados.com y .com.mx, ficha de Google Maps e Instagram. Ver lista-2/11-calizsosaabogados/brand.json.
// Logo: vector propio (búho sobre techo de casa + nombre). mark.svg y mark-light.svg son el mismo vector recortado por viewBox
// (solo el búho y el techo) para la nav; el logo completo se usa en pie, nosotros y contacto.
// WhatsApp 56 4604 0415: confianza alta (botón flotante Joinchat del propio sitio con ese número).
export const WA = "525646040415";
export const site: SiteConfig = {
  slug: "calizsosaabogados",
  name: "Caliz & Sosa Abogados",
  description: "Despacho jurídico con más de quince años de experiencia en derecho inmobiliario y de familia en la colonia Cuauhtémoc, CDMX. Asesoría gratuita.",
  logo: { src: logo, alt: "Caliz & Sosa Abogados", onDark: logoLight },
  theme: {
    bg: "#FBF8F3",
    surface: "#F1EBE0",
    ink: "#0D1226",
    muted: "#4E5367",
    brand: "#020A25",
    onBrand: "#FFFFFF",
    accent: "#DBAA68",
    onAccent: "#020A25",
    line: "#E2D9C9",
    dark: "#020A25",
    onDark: "#F6F1E9",
    radius: "12px",
  },
  fonts: { display: "--f-calizsosaabogados-display", body: "--f-calizsosaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/calizsosaabogados/servicios" },
      { label: "Nosotros", href: "/calizsosaabogados/nosotros" },
      { label: "Contacto", href: "/calizsosaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "56 4604 0415", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 5535 6991", tel: "+525555356991", label: "Oficina y citas" }],
  emails: ["calizsosaabogados@gmail.com"],
  addresses: [{ label: "Sede", text: "Río Rhin 64, Despacho 204, Colonia Cuauhtémoc, Alcaldía Cuauhtémoc, C.P. 06500, Ciudad de México", lat: 19.430941, lng: -99.1646677 }],
  hours: "Lunes a viernes de 10 am a 6 pm. Atendemos vía telefónica y presencialmente.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Caliz%20Sosa%20Abogados&query_place_id=ChIJoQveclP_0YURSiY_7W28fds",
  social: { instagram: "https://www.instagram.com/calizsosaabogados/" },
  google: { rating: 4.7, reviews: 35 },
  privacyHref: null,
};

export const waLink = (text: string = site.whatsapp.intro) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
