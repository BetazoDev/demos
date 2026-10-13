import type { SiteConfig } from "@/kit/types";
import mark from "./assets/mark.svg";

// Fuentes: abogadosencdmx.com (Inicio, Contacto, Aviso de privacidad) y su ficha de Google Maps. Ver lista-2/37-abogadosencdmx/brand.json.
// No se usan equipo, cifras, casos de éxito ni testimonios del sitio actual: no son verificables (ver research.md).
// WhatsApp: confianza alta (botón wa.me del propio sitio). Google lista otro teléfono, 55 2465 8345: el despacho debe confirmar cuál es el vigente.
const waIntro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "abogadosencdmx",
  name: "Abogados en CDMX",
  description: "Despacho jurídico en la colonia Roma Norte, Ciudad de México: derecho familiar, penal, civil, corporativo, inmobiliario, migratorio y laboral para personas y empresas.",
  logo: { src: mark, alt: "Abogados en CDMX, despacho jurídico", onDark: mark },
  theme: {
    bg: "#001D3D",
    surface: "#03244A",
    ink: "#F7F5F0",
    muted: "#B7C2D0",
    brand: "#A97B54",
    onBrand: "#001D3D",
    accent: "#A97B54",
    onAccent: "#001D3D",
    line: "#1F3F63",
    dark: "#00142B",
    onDark: "#F7F5F0",
    radius: "12px",
  },
  fonts: { display: "--f-abogadosencdmx-display", body: "--f-abogadosencdmx-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadosencdmx/servicios" },
      { label: "Contacto", href: "/abogadosencdmx/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525564655501?text=${encodeURIComponent(waIntro)}.` },
  },
  whatsapp: { number: "525564655501", display: "55 6465 5501", confidence: "alta", intro: waIntro },
  phones: [
    { display: "55 6465 5501", tel: "+525564655501" },
    { display: "55 2465 8345", tel: "+525524658345" },
  ],
  emails: ["contacto@abogadosencdmx.com"],
  addresses: [{ label: "Despacho", text: "Guanajuato 224, Colonia Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4157454, lng: -99.1645432 }],
  // Horario del propio sitio; la ficha de Google dice todos los días de 9 a. m. a 9 p. m. (contradictorio): el despacho debe confirmarlo.
  hours: "Lunes a viernes, de 9:00 a 18:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%20y%20asesor%C3%ADa%20legal&query_place_id=ChIJ8wV6WkED0oUR5xL-tKc5qFA",
  social: { facebook: "https://www.facebook.com/abogadosencdmx", instagram: "https://www.instagram.com/abogadosencdmx" },
  // Google: 4.4 con 854 opiniones, pero reputación mixta y duda de si la ficha es del mismo negocio: no se muestra.
  google: null,
  privacyHref: "/abogadosencdmx/privacidad",
};
