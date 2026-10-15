import type { SiteConfig } from "@/kit/types";

// Fuentes: ficha de Google Maps, RedLegal y nota de El Informador (17 feb 2025). Ver prospector-demos/juridicoruiz/brand.json.
// Sin logo publicado: el nombre se compone en tipografía (src/sites/juridicoruiz/Wordmark.astro). El campo logo no se pinta.
const intro = "Hola, me gustaría información sobre una consulta legal";

export const site: SiteConfig = {
  slug: "juridicoruiz",
  name: "Jurídico Ruiz",
  description: "Despacho de abogados en Guadalajara encabezado por Jafet Ruiz. Justicia alternativa y asuntos familiares. Atención de lunes a viernes en la colonia Miraflores.",
  logo: { src: "", alt: "Jurídico Ruiz" },
  theme: {
    // Paleta propuesta por Hemeron (la marca no tiene colores publicados). Confirmar con el dueño.
    bg: "#FAF8F4",
    surface: "#F1EDE5",
    ink: "#1A1A1A",
    muted: "#5A5750",
    brand: "#1F2A44",
    onBrand: "#FAF8F4",
    accent: "#B08D57",
    onAccent: "#1A1A1A",
    line: "#DDD6C8",
    dark: "#151C30",
    onDark: "#F3EFE6",
    radius: "999px",
  },
  fonts: { display: "--f-juridicoruiz-display", body: "--f-juridicoruiz-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/juridicoruiz/servicios" },
      { label: "Nosotros", href: "/juridicoruiz/nosotros" },
      { label: "Contacto", href: "/juridicoruiz/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/523314474428?text=${encodeURIComponent(intro)}` },
  },
  // Confianza alta: el enlace wa.me sale de la ficha de Google del propio negocio. No se comprobó que la línea tenga WhatsApp activo.
  whatsapp: { number: "523314474428", display: "33 1447 4428", confidence: "alta", intro },
  phones: [{ display: "33 1447 4428", tel: "+523314474428", label: "Oficina y WhatsApp" }],
  emails: [],
  addresses: [{ label: "Sede principal", text: "C. Manuel Gutiérrez Nájera 1218, Miraflores, 44270 Guadalajara, Jal.", lat: 20.6954366, lng: -103.3443183 }],
  hours: "Lunes a viernes de 9:00 a 18:00. Sábado y domingo cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jur%C3%ADdico%20Ruiz&query_place_id=ChIJFxL7BxWxKIQR8oHV2FWAcWY",
  social: {},
  google: { rating: 4.9, reviews: 69 },
  areaServed: ["Guadalajara"],
};
