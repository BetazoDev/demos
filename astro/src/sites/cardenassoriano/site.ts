import type { SiteConfig } from "@/kit/types";
import logoPetrol from "./assets/logo-petrol.svg";
import logoWhite from "./assets/logo-white.svg";

// Fuentes: cardenas-soriano.com (Framer), aviso de privacidad, ficha de Google Maps. Ver lista-2/02-cardenassoriano/brand.json.
const WA = "525618981616";
const INTRO = "Hola, quiero agendar una llamada";

export const site: SiteConfig = {
  slug: "cardenassoriano",
  name: "Cárdenas Soriano Abogados",
  description: "Abogados en Polanco, CDMX. Litigio, mediación y consultoría jurídica para personas, empresas y gobiernos.",
  logo: { src: logoPetrol, alt: "Cárdenas Soriano", onDark: logoWhite },
  theme: {
    bg: "#F2F4F5",
    surface: "#E7EBEC",
    ink: "#07272E",
    muted: "#4A6168",
    brand: "#07272E",
    onBrand: "#F2F4F5",
    accent: "#9CF0D1",
    onAccent: "#07272E",
    line: "#CBD3D5",
    dark: "#07272E",
    onDark: "#FFFFFF",
    radius: "999px",
  },
  fonts: { display: "--f-cardenassoriano-display", body: "--f-cardenassoriano-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/cardenassoriano/servicios" },
      { label: "Nosotros", href: "/cardenassoriano/nosotros" },
      { label: "Contacto", href: "/cardenassoriano/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "56 1898 1616", confidence: "alta", intro: INTRO },
  phones: [{ display: "56 1898 1616", tel: "+525618981616" }],
  emails: ["contacto@cardenas-soriano.com"],
  addresses: [
    { label: "Sede principal", text: "Torcuato Tasso 237, colonia Polanco (Polanco V Sección), alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México", lat: 19.4339944, lng: -99.1836463 },
  ],
  hours: "Lunes a viernes, de 9:00 a 18:00",
  mapsUrl: "https://maps.app.goo.gl/CGKaHqQCmVWZcLN98",
  social: {},
  google: { rating: 5.0, reviews: 14 },
  privacyHref: "/cardenassoriano/privacidad",
};
