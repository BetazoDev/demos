import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: lexcivitasabogados.blogspot.com (blog de una entrada, sept. 2022), ficha de Google Maps e Instagram. Ver lista-2/12-lexcivitasabogados/brand.json.
// Logo: vector propio (escudo con búho, balanza, mazo y libro + nombre); logo-light es el mismo vector en blanco para fondo oscuro.
// WHATSAPP SIN CONFIRMAR (confianza BAJA): el blog dice tener WhatsApp pero no publica el número. Se usa 55 9092 3575 (el teléfono de su ficha de Google, rango móvil);
// la alternativa es 55 4395 3564, el teléfono que el blog da para citas. El despacho debe confirmar cuál es su WhatsApp antes de publicar.
export const WA = "525590923575";
export const site: SiteConfig = {
  slug: "lexcivitasabogados",
  name: "Lex Civitas Abogados",
  description: "Bufete integral en la colonia Santa María la Ribera, CDMX: materia administrativa, agraria, civil, familiar, fiscal, laboral, mercantil y penal.",
  logo: { src: logo, alt: "Lex Civitas Abogados", onDark: logoLight },
  theme: {
    bg: "#0B0B0B",
    surface: "#141414",
    ink: "#F1EEE8",
    muted: "#A6A29A",
    brand: "#F1EEE8",
    onBrand: "#0B0B0B",
    accent: "#F1EEE8",
    onAccent: "#0B0B0B",
    line: "#2B2A28",
    dark: "#050505",
    onDark: "#F1EEE8",
    radius: "6px",
  },
  fonts: { display: "--f-lexcivitasabogados-display", body: "--f-lexcivitasabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/lexcivitasabogados/servicios" },
      { label: "Nosotros", href: "/lexcivitasabogados/nosotros" },
      { label: "Contacto", href: "/lexcivitasabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 9092 3575", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  // El 55 9092 3575 (teléfono de Google) se muestra como WhatsApp; aquí solo el teléfono de citas del blog.
  phones: [{ display: "55 4395 3564", tel: "+525543953564", label: "Citas" }],
  emails: ["contacto.lexcivitas@gmail.com"],
  addresses: [{ label: "Oficina", text: "Calle Sor Juana Inés de la Cruz, núm. 40B, Colonia Santa María la Ribera, Alcaldía Cuauhtémoc, C.P. 06400, Ciudad de México. A tres calles de la estación Buenavista y del metro San Cosme.", lat: 19.4447919, lng: -99.1564176 }],
  hours: "Lunes a jueves de 10:00 a 18:00 horas; viernes de 10:00 a 15:00 horas",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=LEX%20CIVITAS%20ABOGADOS&query_place_id=ChIJxfBK03D50YURLeLw4_4YDHM",
  social: { instagram: "https://www.instagram.com/lexcivitasabogados/" },
  // Google: 4 opiniones (menos de 5): no se publica calificación ni reseñas.
  google: null,
  privacyHref: null,
};

export const waLink = (text: string = site.whatsapp.intro) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
