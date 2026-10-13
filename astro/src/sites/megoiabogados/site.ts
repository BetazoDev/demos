import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: megoiabogados.com, ficha de Google Maps y Facebook. Ver lista-2/58-megoiabogados/brand.json.
// WhatsApp: el despacho no publica uno; se usa el teléfono de oficina (confianza baja).
const wa = "https://wa.me/525523451802?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "megoiabogados",
  name: "Megoi Abogados Asociados",
  description: "Firma de abogados en la Ciudad de México: asesoría y representación jurídica en derecho administrativo, bancario, familiar, civil, mercantil, penal y laboral.",
  logo: { src: logo, alt: "Megoi Corporativo Jurídico", onDark: logoLight },
  theme: {
    bg: "#F4F4F4",
    surface: "#E8EBF1",
    ink: "#232B3B",
    muted: "#566074",
    brand: "#304771",
    onBrand: "#FFFFFF",
    accent: "#EC9F21",
    onAccent: "#1B2234",
    line: "#D3D8E2",
    dark: "#283D62",
    onDark: "#FFFFFF",
    radius: "6px",
  },
  fonts: { display: "--f-megoiabogados-display", body: "--f-megoiabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/megoiabogados/servicios" },
      { label: "Contacto", href: "/megoiabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525523451802", display: "55 2345 1802", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 2345 1802", tel: "+525523451802", label: "Oficina" },
    { display: "55 1198 2918", tel: "+525511982918", label: "Asesoría telefónica, lunes a viernes de 9:00 a 15:00" },
  ],
  emails: ["contacto@megoiabogados.com"],
  addresses: [
    {
      label: "Despacho",
      text: "Insurgentes Centro 132, 2.º piso, Despacho 208 (Edificio Mallorca), Col. Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México",
      lat: 19.4334021,
      lng: -99.1581991,
    },
  ],
  hours: "Lunes a viernes",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=MEGOI%20ABOGADOS%20ASOCIADOS%20SC&query_place_id=ChIJh2ipnt_-0YURAw6lMT69BoU",
  social: { facebook: "https://www.facebook.com/megoiabogados" },
  google: null,
};
