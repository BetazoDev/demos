import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: vinlex-abogados.jimdosite.com (Inicio, Servicios, Contáctenos), Facebook (juridicovinlex) y Google Maps. Ver lista-2/85-vinlexabogados/brand.json.
// WhatsApp: 55 5215 9894, enlace wa.me del propio sitio y botón de WhatsApp de su Facebook (confianza alta).
export const WA = "525552159894";
export const site: SiteConfig = {
  slug: "vinlexabogados",
  name: "VINLEX Abogados",
  description: "Despacho en la colonia Obrera, Ciudad de México, especializado en derecho corporativo, civil, fiscal, administrativo, mercantil, familiar y penal. Asesoría, consultoría, representación y defensa.",
  logo: { src: logo, alt: "VINLEX Abogados", onDark: logoLight },
  theme: {
    bg: "#F6F8F6",
    surface: "#E7EEEB",
    ink: "#0F1719",
    muted: "#46535A",
    brand: "#0E2837",
    onBrand: "#FFFFFF",
    accent: "#5BA096",
    onAccent: "#0A0A0A",
    line: "#D3DCD8",
    dark: "#0E2837",
    onDark: "#FFFFFF",
    radius: "0px",
  },
  fonts: { display: "--f-vinlexabogados-display", body: "--f-vinlexabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/vinlexabogados/servicios" },
      { label: "Nosotros", href: "/vinlexabogados/nosotros" },
      { label: "Contacto", href: "/vinlexabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 5215 9894", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5215 9894", tel: "+525552159894" },
    { display: "55 4897 0147", tel: "+525548970147" },
    { display: "55 1504 1484", tel: "+525515041484" },
  ],
  emails: ["vinlexab@gmail.com"],
  addresses: [{ label: "Despacho", text: "José María Roa Bárcenas 7, colonia Obrera, alcaldía Cuauhtémoc, C.P. 06800, Ciudad de México", lat: 19.4117846, lng: -99.1436502 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=VINLEX%20Abogados&query_place_id=ChIJ1XDI5Gv_0YURbkWz1mLCukg",
  social: { facebook: "https://www.facebook.com/juridicovinlex" },
  google: { rating: 4.8, reviews: 8 },
  privacyHref: null,
};
