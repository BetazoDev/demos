import type { SiteConfig } from "@/kit/types";
import logoLight from "./assets/logo-light.png";

// Fuentes: ficha de Google Maps, sitio antiguo mongeasociados.org (Wayback 2023-07-23, hoy caído), publicaciones de Google e Instagram.
// Ver lista-2/31-mongeasociados/brand.json. WhatsApp: confianza MEDIA (55 3790 5765 es el teléfono principal; ninguna fuente lo llama WhatsApp).
const waIntro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "mongeasociados",
  name: "Monge & Asociados",
  description: "Despacho jurídico en Buenavista, Ciudad de México: materia penal, asistencia ante el Ministerio Público las 24 horas, pensión alimenticia, sucesiones, materia familiar y civil.",
  logo: { src: logoLight, alt: "Despacho Jurídico Monge & Asociados", onDark: logoLight },
  theme: {
    bg: "#0C0C0C",
    surface: "#171717",
    ink: "#F4F4EF",
    muted: "#A9A9A2",
    brand: "#CCE424",
    onBrand: "#0C0C0C",
    accent: "#CCE424",
    onAccent: "#0C0C0C",
    line: "#2B2B2B",
    dark: "#070707",
    onDark: "#F4F4EF",
    radius: "12px",
  },
  fonts: { display: "--f-mongeasociados-display", body: "--f-mongeasociados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/mongeasociados/servicios" },
      { label: "Contacto", href: "/mongeasociados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525537905765?text=${encodeURIComponent(waIntro)}.` },
  },
  whatsapp: { number: "525537905765", display: "55 3790 5765", confidence: "media", intro: waIntro },
  phones: [
    { display: "55 3790 5765", tel: "+525537905765" },
    { display: "56 1927 0157", tel: "+525619270157" },
  ],
  emails: ["mongejuridico@gmail.com"],
  addresses: [{ label: "Sede", text: "Avenida México-Tenochtitlán 45, Colonia Buenavista, Alcaldía Cuauhtémoc, C.P. 06350, Ciudad de México", lat: 19.4386487, lng: -99.1513871 }],
  // Horario del sitio antiguo (Wayback 2023); Google hoy solo muestra «Abre a las 8 a. m.»: el despacho debe confirmarlo.
  hours: "Lunes a viernes, de 8:00 a 21:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%3A%20MONGE%26Asociados.%20CDMX.&query_place_id=ChIJYWm530r50YURh6S_xnA1eMo",
  social: { instagram: "https://www.instagram.com/monge_asociados/" },
  google: { rating: 5.0, reviews: 24 },
};
