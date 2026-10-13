import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: página de Facebook del despacho (portada, gráficas y publicaciones de 2025-2026) y ficha de Google. No tiene sitio propio.
// WhatsApp principal: portada de Facebook de agosto de 2026. Otros números publicados en 2025 (55 6940 0217, 55 5546 3198) quedan por confirmar.
export const site: SiteConfig = {
  slug: "suarezabogados",
  name: "Suárez Abogados",
  description: "Abogados en pensiones IMSS, ISSSTE, ISSFAM e ISSEMYM y en derecho laboral, para trabajadores IMSS y petroleros. Oficina en Av. Insurgentes Centro, colonia San Rafael, Ciudad de México.",
  logo: { src: logo, alt: "Suárez Abogados", onDark: logo },
  theme: {
    bg: "#F7F4EE",
    surface: "#ECE6DA",
    ink: "#0B1E48",
    muted: "#46536F",
    brand: "#0B1E48",
    onBrand: "#F7F4EE",
    accent: "#86621F",
    onAccent: "#FFFFFF",
    line: "#D8D0BF",
    dark: "#0B1E48",
    onDark: "#F7F4EE",
    radius: "6px",
  },
  fonts: { display: "--f-suarezabogados-display", body: "--f-suarezabogados-body" },
  nav: {
    links: [
      { label: "Inicio", href: "/suarezabogados" },
      { label: "Contacto", href: "/suarezabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525654870886?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525654870886", display: "56 5487 0886", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "56 5487 0879", tel: "+525654870879", label: "WhatsApp" }],
  emails: [],
  addresses: [{ text: "Av. Insurgentes Centro 19, 5.º piso, Col. San Rafael, Alcaldía Cuauhtémoc, C.P. 06470, Ciudad de México", lat: 19.4389879, lng: -99.1563071 }],
  hours: "Lunes a viernes, de 9:00 a 18:00. Sábado y domingo, cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=SU%C3%81REZ%20ABOGADOS&query_place_id=ChIJm2IIZGr50YURQVUeLzTnQTg",
  social: {
    facebook: "https://www.facebook.com/p/Su%C3%A1rez-Abogados-100063739023614/",
    youtube: "https://www.youtube.com/@Suarez.Abogados",
    tiktok: "https://www.tiktok.com/@suarezabogados",
  },
  google: null,
};
