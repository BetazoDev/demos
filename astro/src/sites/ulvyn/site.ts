import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: ulvyn.com (WordPress + Divi), ficha de Google Maps y redes. Ver lista-2/16-ulvyn/brand.json.
// Logo: wordmark ULVYN + «Human-AI Interaction Law», vector fiel al original de 1080 px del propio sitio; logo-light es el mismo vector en blanco.
// WhatsApp 55 2177 8948: confianza alta (botón flotante del propio sitio, mismo número del pie, la página de contacto y Google).
export const WA = "525521778948";
export const site: SiteConfig = {
  slug: "ulvyn",
  name: "ULVYN | Abogados Digitales en IA",
  description: "Abogados digitales en inteligencia artificial: consultoría preventiva y litigio estratégico en IA, ética automatizada, robótica y litigios tecnológicos en México.",
  logo: { src: logo, alt: "ULVYN, Human-AI Interaction Law", onDark: logoLight },
  theme: {
    bg: "#F6F7FC",
    surface: "#ECEEF8",
    ink: "#12163F",
    muted: "#4A5079",
    brand: "#22266F",
    onBrand: "#FFFFFF",
    // El azul de plantilla #2EA3F2 (brand.json → accent) solo se usa como chispa sobre fondos oscuros (--c-spark); sobre claro no contrasta.
    accent: "#22266F",
    onAccent: "#FFFFFF",
    line: "#D6D9EC",
    dark: "#0A0D2E",
    onDark: "#EDEFFB",
    radius: "20px",
  },
  fonts: { display: "--f-ulvyn-display", body: "--f-ulvyn-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/ulvyn/servicios" },
      { label: "Nosotros", href: "/ulvyn/nosotros" },
      { label: "Contacto", href: "/ulvyn/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 2177 8948", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  // El 55 1852 1553 solo aparece en Facebook y no se confirma: no se publica.
  phones: [{ display: "55 2177 8948", tel: "+525521778948" }],
  emails: ["contacto@ulvyn.com"],
  addresses: [{ label: "Sede", text: "Ignacio L. Vallarta 1, 3er piso, Colonia Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México", lat: 19.4354718, lng: -99.1557969 }],
  hours: "Lunes a viernes de 9 a.m. a 6 p.m.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ulvyn%20Abogados%20Digitales%20en%20IA&query_place_id=ChIJ44LhAwb50YURPb1DfscrlO0",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61582036823866",
    instagram: "https://www.instagram.com/ulvyn_abogados_digitales/",
    x: "https://x.com/ULVYNAbogaryy",
    youtube: "https://www.youtube.com/@ULVYN-o3d",
    tiktok: "https://www.tiktok.com/@ulvyn0",
  },
  // Sin reseñas en Google: no hay calificación que publicar.
  google: null,
  privacyHref: "/ulvyn/privacidad",
};

export const waLink = (text: string = site.whatsapp.intro) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
