import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: bam-g.com (WordPress/Divi), ficha de Google Maps, redes enlazadas desde el pie. Ver lista-2/08-bamg/brand.json.
const WA = "525518521553";
const INTRO = "Hola, me gustaría agendar una asesoría";

export const site: SiteConfig = {
  slug: "bamg",
  name: "BAM-G Abogados Migratorios",
  description: "Abogados de migración en Ciudad de México: asesoría legal migratoria en trámites de visas, residencia temporal o permanente y naturalización mexicana.",
  logo: { src: logo, alt: "BAM-G, Bufete de Abogados Migratorios Global S.C.", onDark: logoLight },
  theme: {
    bg: "#FFFFFF",
    surface: "#F4F4F4",
    ink: "#22162B",
    muted: "#5A5163",
    brand: "#005CB8",
    onBrand: "#FFFFFF",
    accent: "#CC3D00",
    onAccent: "#FFFFFF",
    line: "#E3E1E6",
    dark: "#22162B",
    onDark: "#FFFFFF",
    radius: "6px",
  },
  fonts: { display: "--f-bamg-display", body: "--f-bamg-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/bamg/servicios" },
      { label: "Nosotros", href: "/bamg/nosotros" },
      { label: "Contacto", href: "/bamg/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "55 1852 1553", confidence: "alta", intro: INTRO },
  phones: [{ display: "55 1852 1553", tel: "+525518521553" }, { display: "55 3532 9854", tel: "+525535329854", label: "Defensa Urgente, 24 horas" }],
  emails: ["contacto@bam-g.com"],
  addresses: [
    { label: "Frente al Monumento a la Revolución", text: "Ignacio L. Vallarta 1, 3.er piso, Col. Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México", lat: 19.4354495, lng: -99.1559503 },
  ],
  hours: "Lunes a viernes, de 9:00 a 18:00. Sábado, de 9:00 a 15:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BAM-G%20Abogados%20Migratorios&query_place_id=ChIJUWo4GfT50YURQ3UIpKPlfQ4",
  social: {
    facebook: "https://www.facebook.com/people/BAM-G-Abogados-Migratorios/61552676625949/",
    instagram: "https://www.instagram.com/bam_g_mexico_s_c/",
    x: "https://x.com/BAMGSC",
    youtube: "https://www.youtube.com/@bam-gbufetedeabogadosmigrat",
    tiktok: "https://www.tiktok.com/@bamgmexicosc",
  },
  google: { rating: 4.8, reviews: 21 },
  privacyHref: "/bamg/privacidad",
};

// Segunda línea de WhatsApp que el despacho publica para «Defensa Urgente» (24 horas).
export const urgent = { number: "525535329854", display: "55 3532 9854", message: "Hola, necesito defensa urgente" };
