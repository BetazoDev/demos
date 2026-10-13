import type { SiteConfig } from "@/kit/types";
import mark from "./assets/mark-light.svg";

// Fuentes: abogadoherver.com (única página), ficha de Google Maps, Facebook, Instagram y TikTok @herverabogados. Ver lista-2/42-abogadoherver/brand.json.
// El logo (H de dos torres) se usa en la nav como marca y, junto a ella, el nombre se compone en HTML (ver Nav.astro); el logo completo va en el pie.
const WA_INTRO = "Buen día, me gustaría solicitar una asesoría legal";

export const site: SiteConfig = {
  slug: "abogadoherver",
  name: "Herver Abogados de México",
  description: "Especialistas en Derecho Civil, Familiar y Penal en Ciudad de México. Asesoría legal, litigio y defensa de tus derechos en la colonia Narvarte Poniente.",
  logo: { src: mark, alt: "Herver Abogados", onDark: mark },
  theme: {
    bg: "#001638",
    surface: "#071F47",
    ink: "#F5F6F8",
    muted: "#A9B6CF",
    brand: "#C89B59",
    onBrand: "#001638",
    accent: "#C89B59",
    onAccent: "#001638",
    line: "#193459",
    dark: "#000D24",
    onDark: "#F5F6F8",
    radius: "6px",
  },
  fonts: { display: "--f-abogadoherver-display", body: "--f-abogadoherver-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadoherver/servicios" },
      { label: "Nosotros", href: "/abogadoherver/nosotros" },
      { label: "Contacto", href: "/abogadoherver/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525541947336?text=${encodeURIComponent(WA_INTRO)}.` },
  },
  whatsapp: { number: "525541947336", display: "55 4194 7336", confidence: "alta", intro: WA_INTRO },
  phones: [{ display: "55 4194 7336", tel: "+525541947336" }],
  emails: ["licenciadoherver@gmail.com"],
  addresses: [
    { label: "Despacho", text: "La Morena 804, int. 301, Col. Narvarte Poniente, Alcaldía Benito Juárez, C.P. 03020, Ciudad de México", lat: 19.3988005, lng: -99.1571183 },
  ],
  hours: "Abierto las 24 horas",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Herver%20Abogados%20de%20Mexico&query_place_id=ChIJ0yT2rYH_0YUR-i9CaXIdO1c",
  social: {
    facebook: "https://www.facebook.com/herverabogados",
    instagram: "https://www.instagram.com/herverabogados/",
    tiktok: "https://www.tiktok.com/@herverabogados",
  },
  google: { rating: 5.0, reviews: 250 },
};
