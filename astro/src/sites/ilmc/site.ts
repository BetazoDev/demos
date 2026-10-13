import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: ilmc.com.mx, ficha de Google Maps, Facebook e Instagram. Ver lista-2/48-ilmc/brand.json.
// WhatsApp: enlace publicado por el propio sitio (botón flotante, api.whatsapp.com), confianza alta.
// Sin calificación de Google (5.0 con solo 3 opiniones) y sin contadores del sitio (sin respaldo externo).
export const site: SiteConfig = {
  slug: "ilmc",
  name: "ILMC Abogados",
  description: "Expertos en derecho migratorio. Visas, permisos, residencias, naturalizaciones y apostilla, con oficinas en Ciudad de México, Mazatlán, Cancún y Puebla.",
  logo: { src: logo, alt: "ILMC Abogados", onDark: logo },
  theme: {
    bg: "#F7FAFC",
    surface: "#E6F1F6",
    ink: "#0E0F2F",
    muted: "#46536B",
    brand: "#0F5471",
    onBrand: "#FFFFFF",
    accent: "#26B4E4",
    onAccent: "#0B0D1A",
    line: "#CBDDE6",
    dark: "#0B0D1A",
    onDark: "#F2F8FB",
    radius: "999px",
  },
  fonts: { display: "--f-ilmc-display", body: "--f-ilmc-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/ilmc/servicios" },
      { label: "Nosotros", href: "/ilmc/nosotros" },
      { label: "Contacto", href: "/ilmc/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525519519708?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525519519708", display: "55 1951 9708", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5564 0989", tel: "+525555640989", label: "Oficina CDMX" },
    { display: "55 5564 0635", tel: "+525555640635", label: "Oficina CDMX" },
    { display: "(669) 985-12-64", tel: "+526699851264", label: "Mazatlán" },
    { display: "(669) 120-05-25", tel: "+526691200525", label: "Mazatlán" },
  ],
  emails: ["info@ilmc.com.mx"],
  addresses: [
    { label: "Ciudad de México", text: "Calle Tehuantepec 62, interior A, Col. Roma Sur, Alcaldía Cuauhtémoc, C.P. 06760, Ciudad de México", lat: 19.4055691, lng: -99.1587279 },
    { label: "Mazatlán, Sinaloa", text: "Ejército Mexicano 1008 A, Col. San Ángel, Mazatlán, Sinaloa" },
    { label: "Cancún, Quintana Roo", text: "José María Alva 43, Depto. 304, Av. del Bosque, Cancún, Quintana Roo" },
    { label: "Puebla", text: "Periférico Ecológico 1-11, Lomas de Angelópolis, San Andrés Cholula, Puebla" },
  ],
  hours: "Oficina CDMX: lunes a jueves de 9:00 a 20:00 h y viernes de 9:00 a 15:00 h.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=ILMC%20ABOGADOS&query_place_id=ChIJf4KKIEb_0YURIZlQweTD8xA",
  social: { facebook: "https://www.facebook.com/ilmc.social/", instagram: "https://www.instagram.com/ilmcamg/" },
  google: null,
};
