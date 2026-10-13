import type { SiteConfig } from "@/kit/types";

// Fuentes: centraldeabogados.com (home actual), versión de 2021 en Wayback (lema, dirección, horario, correo) y ficha de Google Maps.
// Ver lista-2/33-centraldeabogados/brand.json. No existe logo: el nombre se compone en texto con Alfa Slab One (la fuente del nombre en su sitio actual).
// WhatsApp 779 144 3643 (alta, sitio actual). El 55 1475 9119 (ficha de Google y sitio de 2021) queda como teléfono.
export const site: SiteConfig = {
  slug: "centraldeabogados",
  name: "Central de Abogados",
  description: "Abogados en Ciudad de México: cobranza judicial, recuperación de cartera, juicios, divorcios, herencias, usucapión, conciliación laboral y carpetas de investigación.",
  logo: { src: "", alt: "Central de Abogados" },
  theme: {
    bg: "#120944",
    surface: "#1B1160",
    ink: "#F2F6F7",
    muted: "#BDB9DA",
    brand: "#E9CF76",
    onBrand: "#120944",
    accent: "#E9CF76",
    onAccent: "#120944",
    line: "#2E2578",
    dark: "#0B052E",
    onDark: "#F2F6F7",
    radius: "8px",
  },
  fonts: { display: "--f-centraldeabogados-display", body: "--f-centraldeabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/centraldeabogados/servicios" },
      { label: "Contacto", href: "/centraldeabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/527791443643?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "527791443643", display: "779 144 3643", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "779 144 3643", tel: "+527791443643", label: "WhatsApp" },
    { display: "55 1475 9119", tel: "+525514759119", label: "Oficina" },
  ],
  emails: ["atencion-clientes@centraldeabogados.com"],
  addresses: [{ label: "Ciudad de México", text: "Calle Independencia 111, Despacho 25-C, Piso 2, Alcaldía Cuauhtémoc, Ciudad de México, C.P. 06000", lat: 19.4332578, lng: -99.1446204 }],
  hours: "Lunes a viernes de 9:30 a 17:30 h. Solo con cita agendada.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Central%20de%20Abogados&query_place_id=ChIJgZy8wE_50YURUBDwzTWQypg",
  social: {},
  google: null,
};
