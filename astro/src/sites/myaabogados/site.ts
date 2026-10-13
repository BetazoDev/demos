import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: sitio Wix anterior del despacho (Wayback, 2022 a oct 2025), sitio actual (Odoo: solo el H1, un párrafo y un teléfono), ficha de Google Maps.
// Ver lista-2/45-myaabogados/brand.json.
// WhatsApp: el despacho NO publica uno. 55 5638 0604 es el teléfono de su ficha de Google y de su sitio anterior (confianza baja).
// Alternativa a probar: 55 7514 8946 (encabezado del sitio actual).
export const site: SiteConfig = {
  slug: "myaabogados",
  name: "M&A Abogados",
  description: "Abogados especialistas en derecho administrativo y gestión gubernamental en la Roma Sur, Ciudad de México: establecimientos mercantiles, obras y construcción, uso de suelo y protección civil.",
  logo: { src: logo, alt: "M&A Abogados", onDark: logoLight },
  theme: {
    bg: "#FFFFFF",
    surface: "#F3F3F1",
    ink: "#0C0C0C",
    muted: "#4A4E57",
    brand: "#10284D",
    onBrand: "#FFFFFF",
    accent: "#10284D",
    onAccent: "#FFFFFF",
    line: "#DCDCD7",
    dark: "#0A1B35",
    onDark: "#F4F4F2",
    radius: "999px",
  },
  fonts: { display: "--f-myaabogados-display", body: "--f-myaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/myaabogados/servicios" },
      { label: "La firma", href: "/myaabogados/la-firma" },
      { label: "Contacto", href: "/myaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525556380604?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525556380604", display: "55 5638 0604", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5638 0604", tel: "+525556380604" },
    { display: "55 7514 8946", tel: "+525575148946" },
  ],
  emails: ["soluciones@mya-abogados.com.mx"],
  addresses: [{ label: "Roma Sur, Ciudad de México", text: "C. Manzanillo 138, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX", lat: 19.4050397, lng: -99.1644663 }],
  // Horario: Google Maps lun-vie 10:00-17:00; sitio anterior lun-vie 9:00-18:00 con cita previa. Se muestra «con cita previa» y el de Google.
  hours: "Con cita previa. Lunes a viernes de 10:00 a 17:00.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=M%26A%20Abogados&query_place_id=ChIJX-feUxT_0YURsn7pNxuWPaE",
  social: {},
  // Google: 3.9 con 7 reseñas (una sola con texto). Solo viaja en los datos estructurados; no se muestra el promedio.
  google: { rating: 3.9, reviews: 7 },
};
