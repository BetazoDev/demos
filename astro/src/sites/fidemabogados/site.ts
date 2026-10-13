import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";
import logoLight from "./assets/logo-light.svg";

// Fuentes: fidemabogados.com.mx (solo la home funciona; las subpáginas están en 404), capturas de Wayback de 2021 y Facebook.
// Ver lista-2/54-fidemabogados/brand.json. WhatsApp: «Agenda tu cita por Whatsapp 4603-6101», lada 55 deducida de un «04455» de 2016 (confianza alta).
// Los «testimonios» del sitio son descripciones de casos con nombres de personas privadas: no se usan.
export const site: SiteConfig = {
  slug: "fidemabogados",
  name: "Fidem Abogados",
  description: "Despacho especializado en Derecho de Daños y daño moral en la Roma Norte, Ciudad de México. Abogamos por una justa indemnización y podemos hacernos cargo de los gastos necesarios del juicio.",
  logo: { src: logo, alt: "Fidem Abogados", onDark: logoLight },
  theme: {
    bg: "#F6F6F4",
    surface: "#ECEEEF",
    ink: "#0F1214",
    muted: "#4F585C",
    brand: "#0096C7",
    onBrand: "#06090A",
    accent: "#0096C7",
    onAccent: "#06090A",
    line: "#D5D9DB",
    dark: "#0C0F11",
    onDark: "#F2F5F6",
    radius: "12px",
  },
  fonts: { display: "--f-fidemabogados-display", body: "--f-fidemabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/fidemabogados/servicios" },
      { label: "Contacto", href: "/fidemabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525546036101?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525546036101", display: "55 4603 6101", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 4603 6101", tel: "+525546036101", label: "Celular" },
    { display: "55 5264 6570", tel: "+525552646570", label: "Oficina" },
  ],
  emails: ["fidem_abogados@hotmail.com"],
  addresses: [{ text: "Calle Querétaro 226, Despacho 3B, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México", lat: 19.4137124, lng: -99.1647512 }],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fidem%20Abogados&query_place_id=ChIJ27ggjzv_0YURKrFUfUc71nc",
  social: { facebook: "https://www.facebook.com/abogados.fidem" },
  google: null,
};
