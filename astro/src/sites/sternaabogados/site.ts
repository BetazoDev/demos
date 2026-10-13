import type { SiteConfig } from "@/kit/types";
import logoLight from "./assets/logo-light.svg";

// Fuentes: abogadoextranjeriamadrid.net (versión /mx/), Google Maps y redes enlazadas desde su pie. Ver lista-2/13-sternaabogados/brand.json.
// El WhatsApp que publica el despacho es español (+34); no hay uno mexicano. El teléfono mexicano es 55 8957 7743.
const WA = "34689389410";
const INTRO = "Hola, me gustaría una consulta con un abogado de inmigración";

export const site: SiteConfig = {
  slug: "sternaabogados",
  name: "Sterna Abogados",
  description: "Abogados de inmigración a España desde México: nacionalidad española, nómada digital, visado de estudiante, residencia no lucrativa y permisos de trabajo. Despacho México en la CDMX y sedes en Madrid y Valencia.",
  // Todo el sitio es oscuro: la versión blanca del logo se usa también como principal.
  logo: { src: logoLight, alt: "Sterna, Immigration Lawyers", onDark: logoLight },
  theme: {
    bg: "#121C33",
    surface: "#1A2745",
    ink: "#F3F5FA",
    muted: "#AAB5CC",
    brand: "#85B3BB",
    onBrand: "#0E1730",
    accent: "#85B3BB",
    onAccent: "#0E1730",
    line: "#2A3A5E",
    dark: "#0B1325",
    onDark: "#F3F5FA",
    radius: "999px",
  },
  fonts: { display: "--f-sternaabogados-display", body: "--f-sternaabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/sternaabogados/servicios" },
      { label: "Nosotros", href: "/sternaabogados/nosotros" },
      { label: "Contacto", href: "/sternaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "+34 689 389 410", confidence: "alta", intro: INTRO },
  phones: [
    { display: "+52 55 8957 7743", tel: "+525589577743", label: "Despacho México" },
    { display: "+34 911 270 920", tel: "+34911270920", label: "Madrid" },
  ],
  emails: ["info@sternaabogados.com"],
  addresses: [
    { label: "Despacho México", text: "Plaza de la República #55, despacho 101, colonia Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México", lat: 19.436573, lng: -99.1557371 },
    { label: "Sede Madrid", text: "Calle de Orense 33, 1ªA, C.P. 28020 Madrid, España", lat: 40.45311, lng: -3.6951 },
    { label: "Oficina Valencia", text: "Avda. del Oeste, 50-1ª, 46001 Valencia, España" },
  ],
  hours: "Horario en España: lunes a jueves de 10:00 a 14:30 y de 15:00 a 17:15; viernes de 10:00 a 13:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sterna%20Abogados%20(Despacho%20M%C3%A9xico)&query_place_id=ChIJIae7C9Li3yARzHQ8tif_Gy4",
  social: {
    facebook: "https://www.facebook.com/Sternaabogados/",
    instagram: "https://www.instagram.com/sternaabogados/",
    linkedin: "https://es.linkedin.com/company/sterna-abogados",
    x: "https://twitter.com/sterna_abogados",
    youtube: "https://www.youtube.com/@SternaAbogados",
    tiktok: "https://www.tiktok.com/@sterna_abogados",
  },
  google: { rating: 4.2, reviews: 197 },
  privacyHref: "/sternaabogados/privacidad",
};
