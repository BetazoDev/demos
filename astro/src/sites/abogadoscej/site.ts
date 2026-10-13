import type { SiteConfig } from "@/kit/types";
import owl from "./assets/owl.png";

// Fuentes: abogadoscej.com (Wix), ficha de Google Maps, Facebook e Instagram. Ver lista-2/01-abogadoscej/brand.json.
// Logo: el lockup original (balanza + nombre + línea dorada + lema + búho) solo existe como imagen sobre fondo texturizado.
// Se usa el búho original (transparente) y el nombre se compone en tipografía serif de versalitas, como recomienda brand.md.
// WhatsApp principal 55 2180 2100 (confianza alta: el propio sitio lo publica y todos sus botones apuntan a él).
export const WA = "525521802100";
export const site: SiteConfig = {
  slug: "abogadoscej",
  name: "Consultores & Estrategas Jurídicos",
  description: "Consultores y estrategas jurídicos en CDMX y San Luis Potosí: cumplimiento normativo, derecho familiar, civil, mercantil, penal y amparo.",
  logo: { src: owl, alt: "Consultores & Estrategas Jurídicos", onDark: owl },
  theme: {
    bg: "#050505",
    surface: "#101010",
    ink: "#EEEEEE",
    muted: "#A9A59E",
    brand: "#AF8F66",
    onBrand: "#0A0907",
    accent: "#DFBC8B",
    onAccent: "#0A0907",
    line: "#2A2825",
    dark: "#000000",
    onDark: "#EEEEEE",
    radius: "6px",
  },
  fonts: { display: "--f-abogadoscej-display", body: "--f-abogadoscej-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadoscej/servicios" },
      { label: "Nosotros", href: "/abogadoscej/nosotros" },
      { label: "Contacto", href: "/abogadoscej/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 2180 2100", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 8342 8098", tel: "+525583428098", label: "Oficinas centrales CDMX" },
    { display: "444 544 1100", tel: "+524445441100", label: "San Luis Potosí" },
  ],
  emails: ["abogadoscej@outlook.com"],
  addresses: [
    // Dudas del despacho: la web actual dice piso 4, oficina 6; el sitio de 2022 y el aviso de privacidad dicen piso 3.
    { label: "Oficinas centrales, Ciudad de México", text: "Ignacio L. Vallarta 1, piso 4, oficina 6, Colonia Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México", lat: 19.4354682, lng: -99.1559136 },
    { label: "San Luis Potosí", text: "San Luis 100, piso 2, Colonia Centro, C.P. 78000, San Luis Potosí, S.L.P." },
  ],
  // Sin horario: Google, la página de derecho militar y el sitio de 2022 dan horarios distintos.
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Consultores%20%26%20Estrategas%20Jur%C3%ADdicos&query_place_id=ChIJSUpu-s740YUR11N5nVRVVgU",
  social: { facebook: "https://www.facebook.com/profile.php?id=61578079335162", instagram: "https://www.instagram.com/cej_abogad/" },
  google: { rating: 4.9, reviews: 77 },
  privacyHref: "/abogadoscej/privacidad",
};

export const waLink = (text: string = site.whatsapp.intro) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
