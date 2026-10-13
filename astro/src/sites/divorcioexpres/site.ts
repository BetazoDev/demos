import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: divorcioexpres.mx (Inicio, ¿Quiénes somos?, páginas de servicios, Contáctanos), ficha de Google Maps y su respuesta pública a una reseña.
// Ver lista-2/32-divorcioexpres/brand.json. WhatsApp: confianza alta (el despacho escribe «(55)1289-8590 whatsapp» en Google; el sitio lo rotula «cel.»).
const waIntro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "divorcioexpres",
  name: "Divorcio Exprés, Abogados de lo Familiar",
  description: "Asesoría gratuita para su divorcio exprés en la Ciudad de México, Estado de México y en cualquier proceso de carácter familiar. Oficina en el Centro Histórico, junto a los Juzgados Familiares.",
  logo: { src: logo, alt: "Divorcio Exprés, Abogados de lo Familiar" },
  theme: {
    bg: "#FAFCFC",
    surface: "#EBF2F5",
    ink: "#242424",
    muted: "#566268",
    brand: "#246C84",
    onBrand: "#FFFFFF",
    accent: "#246C84",
    onAccent: "#FFFFFF",
    line: "#D5E1E6",
    dark: "#242424",
    onDark: "#F4F8F9",
    radius: "6px",
  },
  fonts: { display: "--f-divorcioexpres-display", body: "--f-divorcioexpres-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/divorcioexpres/servicios" },
      { label: "Quiénes somos", href: "/divorcioexpres/nosotros" },
      { label: "Contacto", href: "/divorcioexpres/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525512898590?text=${encodeURIComponent(waIntro)}.` },
  },
  whatsapp: { number: "525512898590", display: "55 1289 8590", confidence: "alta", intro: waIntro },
  phones: [
    { display: "55 6723 4050", tel: "+525567234050", label: "Oficina" },
    { display: "55 1289 8590", tel: "+525512898590", label: "Celular" },
  ],
  emails: [],
  addresses: [
    {
      label: "Oficina",
      text: "Calle Dolores 16, Edificio Independencia, Despacho 304, Colonia Centro (Centro Histórico), Alcaldía Cuauhtémoc, C.P. 06050, Ciudad de México. A un costado de los Juzgados Familiares, cerca del metro Bellas Artes y Juárez.",
      lat: 19.4332835,
      lng: -99.1427831,
    },
  ],
  hours: "Lunes a viernes, de 9:00 a 18:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%20Asesor%C3%ADa%20Legal%20Gratuita%20Materia%20Familiar%2C%20Divorcio%2C%20Pensi%C3%B3n%20Alimenticia&query_place_id=ChIJF44EKiv50YURX7VXPUmg6OU",
  social: {},
  // Google: 3.6 con 128 opiniones; no se muestra (calificación baja, reseñas visibles sin texto de testimonio).
  google: null,
};
