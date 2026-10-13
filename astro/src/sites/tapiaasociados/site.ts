import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";

// Fuentes: abogadostapiayasociados.com.mx (Inicio, Contáctanos), ficha de Google Maps (dirección y horario) y Facebook (correo).
// Ver lista-2/27-tapiaasociados/brand.json. WhatsApp: confianza alta (botón wa.me del propio sitio).
const waIntro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "tapiaasociados",
  name: "Abogados Tapia & Asociados",
  description: "Abogados especialistas en materia civil y familiar en la colonia San Rafael, Ciudad de México: divorcio, guarda y custodia, pensión alimenticia, juicio sucesorio, violencia familiar y adopción.",
  logo: { src: logo, alt: "Abogados Tapia & Asociados", onDark: logo },
  theme: {
    bg: "#FAF7F3",
    surface: "#F0E8DF",
    ink: "#161616",
    muted: "#5A534D",
    brand: "#0F556F",
    onBrand: "#FFFFFF",
    accent: "#C2957B",
    onAccent: "#161616",
    line: "#E2D8CC",
    dark: "#0A4357",
    onDark: "#F7F9FB",
    radius: "6px",
  },
  fonts: { display: "--f-tapiaasociados-display", body: "--f-tapiaasociados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/tapiaasociados/servicios" },
      { label: "Contacto", href: "/tapiaasociados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525648159681?text=${encodeURIComponent(waIntro)}.` },
  },
  whatsapp: { number: "525648159681", display: "56 4815 9681", confidence: "alta", intro: waIntro },
  // 55 3019 3228 es el que muestran Google y Facebook (y fue el WhatsApp del sitio en 2021): el despacho debe confirmar cuál es el vigente.
  phones: [
    { display: "56 4815 9681", tel: "+525648159681" },
    { display: "55 3019 3228", tel: "+525530193228" },
  ],
  emails: ["abogadostapiayasociados@gmail.com"],
  addresses: [{ label: "Sede", text: "Calle Gabino Barreda 138, Colonia San Rafael, Alcaldía Cuauhtémoc, C.P. 06470, Ciudad de México", lat: 19.4347763, lng: -99.1645395 }],
  hours: "Lunes a viernes, de 9:00 a 17:00 h. Sábados, de 9:00 a 15:00 h.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%20Tapia%20%26%20Asociados&query_place_id=ChIJ7X3xArn50YURh3ah7g-u0tI",
  social: { facebook: "https://www.facebook.com/profile.php?id=100089775316372" },
  google: null,
};
