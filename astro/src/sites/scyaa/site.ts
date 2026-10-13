import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: scyaa.com (inicio, acerca de, áreas de experiencia, contacto, aviso de privacidad). Ver lista-2/53-scyaa/brand.json.
// WhatsApp: NO está publicado. Se usa el único teléfono del despacho (55 5264 6256, parece fijo) con confianza baja: probar a mano.
// Domicilio: el del sitio y el aviso de privacidad (Cuautla 96); Google Maps dice otro (Av. Querétaro / Eje 2 Sur 13): confirmar.
export const site: SiteConfig = {
  slug: "scyaa",
  name: "Salcedo Caballero y Abogados Asociados",
  description: "Asociación de abogados SCYAA, especializada en servicios legales para empresas y desarrollo de negocios, con oficinas en la Ciudad de México e Irapuato.",
  logo: { src: logo, alt: "Salcedo Caballero y Abogados Asociados, Legal & Business Advisor" },
  theme: {
    bg: "#F8F8F6",
    surface: "#EEEFEC",
    ink: "#18232B",
    muted: "#56626B",
    brand: "#202F39",
    onBrand: "#FFFFFF",
    accent: "#C62A0E",
    onAccent: "#FFFFFF",
    line: "#D8DAD5",
    dark: "#17222A",
    onDark: "#F3F4F1",
    radius: "999px",
  },
  fonts: { display: "--f-scyaa-display", body: "--f-scyaa-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/scyaa/servicios" },
      { label: "La firma", href: "/scyaa/nosotros" },
      { label: "Contacto", href: "/scyaa/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525552646256?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525552646256", display: "55 5264 6256", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 5264 6256", tel: "+525552646256", label: "Oficina" }],
  emails: ["abogados@scyaa.com"],
  addresses: [{ label: "Ciudad de México", text: "Calle Cuautla 96, Col. Condesa, Alcaldía Cuauhtémoc, C.P. 06140, Ciudad de México" }],
  hours: "Lunes a viernes de 8:30 a 18:00 h.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Salcedo%2C%20Caballero%20Y%20Abogados%20Asociados&query_place_id=ChIJx4TbviT_0YURUsqwG1kLPxo",
  social: {},
  google: null,
  privacyHref: "/scyaa/privacidad",
};
