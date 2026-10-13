import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: página de Facebook del despacho (no tiene sitio propio) y ficha de Google Maps. Ver lista-2/81-huertaabogados/brand.json.
// Logo diseñado para fondo oscuro: la silueta de la Justicia es transparente y deja ver el fondo de la página.
const intro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "huertaabogados",
  name: "Huerta Abogados",
  description: "Huerta Abogados: asesoría y representación jurídica integral en la Ciudad de México y el Estado de México. Derecho civil, familiar, laboral, mercantil, penal y arrendamiento inmobiliario.",
  logo: { src: logo, alt: "Huerta Abogados, asesoría y representación jurídica integral", onDark: logo },
  theme: {
    bg: "#231D1F",
    surface: "#2C2527",
    ink: "#F3EEE6",
    muted: "#BDB3A8",
    brand: "#B89F5F",
    onBrand: "#1B1517",
    accent: "#B89F5F",
    onAccent: "#1B1517",
    line: "#43393C",
    dark: "#161112",
    onDark: "#F3EEE6",
    radius: "6px",
  },
  fonts: { display: "--f-huertaabogados-display", body: "--f-huertaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/huertaabogados/servicios" },
      { label: "Contacto", href: "/huertaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525529004110?text=${encodeURIComponent(intro)}.` },
  },
  // Confianza alta: número publicado por el propio despacho con ícono de WhatsApp en sus gráficas de Facebook.
  whatsapp: { number: "525529004110", display: "55 2900 4110", confidence: "alta", intro },
  phones: [],
  emails: ["yhuerta259@hotmail.com"],
  addresses: [{ label: "Dirección", text: "C. Dr. Enrique González Martínez 13, Santa María la Ribera, Cuauhtémoc, C.P. 06400, Ciudad de México", lat: 19.4409203, lng: -99.1565889 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Huerta%20Abogados&query_place_id=ChIJXdAA3pH50YURP9CHmaSzRKw",
  social: { facebook: "https://www.facebook.com/Huerta-Abogados-117056320983254/" },
  google: null,
};
