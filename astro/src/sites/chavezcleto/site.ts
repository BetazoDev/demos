import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: sitio Wix del despacho (licerickgiovanni.wixsite.com/my-site), ficha de Google Maps y sus fotos.
// Ver lista-2/05-chavezcleto/brand.json. Horarios sin publicar: no coinciden entre su lona y Google.
export const site: SiteConfig = {
  slug: "chavezcleto",
  name: "Chávez Cleto & Asociados",
  description: "Despacho jurídico en la colonia Tabacalera, CDMX: civil, familiar, mercantil, penal, laboral, administrativo y amparo. Estrategia jurídica, defensa firme, resultados que importan.",
  logo: { src: logo, alt: "Chávez Cleto & Asociados, despacho jurídico", onDark: logo },
  theme: {
    bg: "#050B15",
    surface: "#0A1424",
    ink: "#F5F5F5",
    muted: "#A8B0BD",
    brand: "#CB994A",
    onBrand: "#050B15",
    accent: "#E0A954",
    onAccent: "#050B15",
    line: "#1B2638",
    dark: "#030710",
    onDark: "#F5F5F5",
    radius: "6px",
  },
  fonts: { display: "--f-chavezcleto-display", body: "--f-chavezcleto-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/chavezcleto/servicios" },
      { label: "Contacto", href: "/chavezcleto/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525517721395?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  // WhatsApp: confianza alta (botón wa.me del sitio y cel. en su lona y anuncio de Google).
  whatsapp: { number: "525517721395", display: "55 1772 1395", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 1772 1395", tel: "+525517721395", label: "Celular y WhatsApp" }],
  emails: ["lic.erickgiovanni@gmail.com", "despachojuridicochcl@gmail.com"],
  addresses: [
    { label: "Sede única", text: "Ezequiel Montes No. 39, Colonia Tabacalera, C.P. 06030, Alcaldía Cuauhtémoc, Ciudad de México", lat: 19.4382474, lng: -99.1559398 },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Despacho%20Jur%C3%ADdico%20Ch%C3%A1vez%20Cleto%20%26%20ASOCIADOS&query_place_id=ChIJ1Vjtw6350YURzPEYtWK4m44",
  social: {},
  google: { rating: 4.9, reviews: 18 },
  privacyHref: null,
};
