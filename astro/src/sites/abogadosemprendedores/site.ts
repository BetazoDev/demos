import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: abogadosparaemprendedoresmx.com, ficha de Google, Facebook y YouTube. Ver lista-2/65-abogadosemprendedores/brand.json.
// Dirección: se usa la que el propio despacho publica (sitio, YouTube y avisos). Google Maps muestra Manzanillo 123-402: confirmar la vigente.
export const site: SiteConfig = {
  slug: "abogadosemprendedores",
  name: "Abogados para Emprendedores MX",
  description: "Despacho de abogados para emprendedores, startups, profesionales independientes y pequeños empresarios en la Ciudad de México: constitución de empresa, marcas, contratos y asesoría legal continua.",
  logo: { src: logo, alt: "Abogados para Emprendedores MX", onDark: logoLight },
  theme: {
    bg: "#F6FAFD",
    surface: "#E6F1F8",
    ink: "#0B2230",
    muted: "#46606F",
    brand: "#1692C6",
    onBrand: "#04202F",
    accent: "#769E36",
    onAccent: "#0F1A07",
    line: "#CFE0EB",
    dark: "#0B2230",
    onDark: "#EAF4FA",
    radius: "0px",
  },
  fonts: { display: "--f-abogadosemprendedores-display", body: "--f-abogadosemprendedores-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadosemprendedores/servicios" },
      { label: "Nosotros", href: "/abogadosemprendedores/nosotros" },
      { label: "Contacto", href: "/abogadosemprendedores/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525551046321?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20mayor%20informaci%C3%B3n." },
  },
  whatsapp: { number: "525551046321", display: "55 5104 6321", confidence: "alta", intro: "Hola, me gustaría recibir mayor información" },
  phones: [{ display: "55 1107 0686", tel: "+525511070686" }],
  emails: ["contacto@abogadosparaemprendedoresmx.com"],
  addresses: [{ text: "Av. Insurgentes Sur 716, piso 8, Ala Poniente, Col. Del Valle, Benito Juárez, Ciudad de México" }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Insurgentes%20Sur%20716%2C%20Col.%20Del%20Valle%2C%20Ciudad%20de%20M%C3%A9xico",
  social: {
    facebook: "https://www.facebook.com/AbogadosParaEmprendedores/",
    youtube: "https://www.youtube.com/channel/UCTLloGP3Dx8LOjjzdaHhO8Q",
  },
  google: null,
  privacyHref: "/abogadosemprendedores/privacidad",
};
