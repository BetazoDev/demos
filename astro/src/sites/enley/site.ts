import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: enley.mx (inicio, páginas de servicio, blog, política de privacidad) y ficha de Google. Ver lista-2/74-enley/brand.json.
// Cifras de Google: 4.8 con 96 reseñas (el sitio actual aún dice 4,9 con 79).
export const site: SiteConfig = {
  slug: "enley",
  name: "Enley",
  description: "Abogados en línea: constitución de empresa desde $1,500, registro de marca, REPSE, contaduría, constancia del empleador y divorcio. Oficina en Polanco, Ciudad de México.",
  logo: { src: logo, alt: "Enley", onDark: logoLight },
  theme: {
    bg: "#0A1419",
    surface: "#111E26",
    ink: "#E9F3F6",
    muted: "#9BB0BA",
    brand: "#00BED6",
    onBrand: "#02161B",
    accent: "#00BED6",
    onAccent: "#02161B",
    line: "#1F323C",
    dark: "#060D11",
    onDark: "#E9F3F6",
    radius: "10px",
  },
  fonts: { display: "--f-enley-display", body: "--f-enley-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/enley/servicios" },
      { label: "Nosotros", href: "/enley/nosotros" },
      { label: "Blog", href: "/enley/blog" },
      { label: "Contacto", href: "/enley/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525640404641?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525640404641", display: "56 4040 4641", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "56 4040 4641", tel: "+525640404641", label: "Ciudad de México" },
    { display: "+34 93 159 24 28", tel: "+34931592428", label: "Barcelona" },
    { display: "+34 91 417 25 85", tel: "+34914172585", label: "Madrid" },
  ],
  emails: ["contacto@enley.mx"],
  addresses: [
    { label: "Ciudad de México", text: "Av. Ejército Nacional 533, Interior 601, Polanco IV Sección, Alcaldía Miguel Hidalgo, C.P. 11520, Ciudad de México", lat: 19.4382379, lng: -99.191763 },
    { label: "Barcelona", text: "Rocafort 248-250, Ent. 4ª, 08029 Barcelona" },
    { label: "Madrid", text: "Ayala 27, 6º, 28001 Madrid" },
    { label: "Berlín", text: "Linkstraße 2, Planta 8, 10785 Berlin" },
  ],
  hours: "Lunes a jueves de 9:00 a 18:00. Viernes de 9:00 a 15:00. Sábado y domingo cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Enley%20-%20Abogados%20en%20L%C3%ADnea&query_place_id=ChIJea_kGNYB0oURnq2rSGeOAQ0",
  social: { instagram: "https://www.instagram.com/enley.mx" },
  google: { rating: 4.8, reviews: 96 },
  privacyHref: "/enley/privacidad",
};
