import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: icabogados.com en Wayback (2019-2025; el sitio actual dice «en construcción»), ficha de Google y logo propio. Ver lista-2/77-icabogados/brand.json.
// WhatsApp: 55 5254 8270 es el único teléfono de la oficina de CDMX (línea fija en 2009); ninguna fuente lo rotula como WhatsApp (confianza baja).
export const site: SiteConfig = {
  slug: "icabogados",
  name: "IC Abogados",
  description: "Litigio y asesoría patrimonial, de empresa e inversión extranjera en México: amparo, derecho administrativo, corporativo, ambiental y migratorio. Oficinas en Ciudad de México y Querétaro.",
  logo: { src: logo, alt: "IC Abogados", onDark: logoLight },
  theme: {
    bg: "#050507",
    surface: "#0D0D1C",
    ink: "#F2F2F7",
    muted: "#A8A8BD",
    brand: "#601F34",
    onBrand: "#FFFFFF",
    accent: "#D07A94",
    onAccent: "#14000B",
    line: "#23233C",
    dark: "#000036",
    onDark: "#F2F2F7",
    radius: "4px",
  },
  fonts: { display: "--f-icabogados-display", body: "--f-icabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/icabogados/servicios" },
      { label: "Equipo", href: "/icabogados/equipo" },
      { label: "Artículos", href: "/icabogados/articulos" },
      { label: "Contacto", href: "/icabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525552548270?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525552548270", display: "55 5254 8270", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5254 8270", tel: "+525552548270", label: "Ciudad de México" },
    { display: "44 2213 8844", tel: "+524422138844", label: "Querétaro" },
  ],
  emails: ["info@icabogados.com"],
  addresses: [
    { label: "Ciudad de México", text: "Taine 249, Col. Chapultepec Morales, Polanco, C.P. 11570, Ciudad de México", lat: 19.4336293, lng: -99.185086 },
    { label: "Querétaro", text: "Ejército Republicano No. 199-1, Piso 3, Interior 8, Col. Carretas, C.P. 76050, Querétaro, Qro." },
  ],
  hours: "Oficina de la Ciudad de México: lunes a viernes de 8:30 a 18:00. Sábado y domingo cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=IC%20Abogados%20S.C.&query_place_id=ChIJ__-Ld6v40YURjws3S5lEqF4",
  social: {},
  google: { rating: 5.0, reviews: 5 },
};
