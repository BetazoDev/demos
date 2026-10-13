import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo-ink.svg";
import logoGold from "./assets/logo-gold.svg";

// Fuentes: revsaabogados.com (sitio estático de 7 páginas), Facebook, Instagram y X del despacho, y su ficha de Google Maps.
// Ver lista-2/43-revsaabogados/brand.json. Sin horario ni calificación de Google: el sitio y Google se contradicen.
export const site: SiteConfig = {
  slug: "revsaabogados",
  name: "REVSA Abogados",
  description: "Despacho de abogados en la Roma Sur, CDMX: familiar, penal, civil y mercantil, laboral, contencioso administrativo y representación de PYMES. Soluciones jurídicas al alcance de tu mano.",
  logo: { src: logo, alt: "REVSA Abogados", onDark: logoGold },
  theme: {
    bg: "#F6F2EA",
    surface: "#ECE5D6",
    ink: "#121518",
    muted: "#59564E",
    brand: "#D1AA73",
    onBrand: "#121518",
    accent: "#7A6035",
    onAccent: "#FFFFFF",
    line: "#DCD2BE",
    dark: "#121518",
    onDark: "#F6F2EA",
    radius: "999px",
  },
  fonts: { display: "--f-revsaabogados-display", body: "--f-revsaabogados-body" },
  nav: {
    links: [
      { label: "Áreas jurídicas", href: "/revsaabogados/servicios" },
      { label: "La firma", href: "/revsaabogados/nosotros" },
      { label: "Contacto", href: "/revsaabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525511744847?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: confianza alta (rotulado «Teléfono de Whatsapp» en todas las páginas del sitio y en la bio de Instagram).
  whatsapp: { number: "525511744847", display: "55 1174 4847", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5574 9426", tel: "+525555749426", label: "Oficina" },
    { display: "55 6207 2438", tel: "+525562072438", label: "Emergencias" },
  ],
  emails: ["revsaabogadosenlaces@gmail.com"],
  addresses: [{ label: "Sede", text: "C. Taxco 16, Colonia Roma Sur, Cuauhtémoc, 06760, Ciudad de México", lat: 19.4076131, lng: -99.165787 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=REVSA%20Abogados&query_place_id=ChIJYf4BNJH_0YURSXJFalhOQ2s",
  social: { facebook: "https://www.facebook.com/REVSAAbogados", instagram: "https://www.instagram.com/revsaabogados/", x: "https://x.com/RevsaAbogados" },
  google: null,
  privacyHref: null,
};
