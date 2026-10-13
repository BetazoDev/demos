import type { SiteConfig } from "@/kit/types";

// Fuentes: capturas de Wayback de juridicontable.com.mx (dic 2021 a mar 2022) y ficha de Google Maps. Ver lista-2/23-juridicontable/brand.json.
// El logo es solo tipográfico y no se recuperó: el nombre se compone en HTML (ver Wordmark.astro), no hay imagen de logo.
const WA_INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "juridicontable",
  name: "Grupo de Abogados, Contadores & Consultores",
  description: "Firma de abogados y contadores en Ciudad de México: asesoría fiscal, patrocinio, litigio fiscal y administrativo, amparo y contabilidad, ante autoridades y tribunales federales y locales.",
  logo: { src: "", alt: "Grupo de Abogados, Contadores & Consultores" },
  theme: {
    bg: "#1F0C14",
    surface: "#331622",
    ink: "#F4EBE6",
    muted: "#C9AEB5",
    brand: "#CF902C",
    onBrand: "#1F0C14",
    accent: "#CF902C",
    onAccent: "#1F0C14",
    line: "#4D2535",
    dark: "#150810",
    onDark: "#F4EBE6",
    radius: "0px",
  },
  fonts: { display: "--f-juridicontable-display", body: "--f-juridicontable-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/juridicontable/servicios" },
      { label: "Nosotros", href: "/juridicontable/nosotros" },
      { label: "Contacto", href: "/juridicontable/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525553421551?text=${encodeURIComponent(WA_INTRO)}.` },
  },
  whatsapp: { number: "525553421551", display: "55 5342 1551", confidence: "baja", intro: WA_INTRO },
  phones: [
    { display: "55 5342 1551", tel: "+525553421551" },
    { display: "55 2465 1180", tel: "+525524651180" },
  ],
  emails: ["asesoresfiscales@juridicontable.com.mx"],
  addresses: [
    { label: "Oficina", text: "José Antonio Alzate número 238, 3-I, Col. Agricultura (Santa María la Ribera), Alcaldía Miguel Hidalgo, C.P. 11360, Ciudad de México", lat: 19.4463713, lng: -99.1535167 },
  ],
  hours: "Lunes a viernes de 9:00 a 18:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Grupo%20de%20Abogados%2C%20Contadores%20%26%20Consultores&query_place_id=ChIJKR-iIcf40YURzChrjRNFBRk",
  social: {},
  google: null,
};
