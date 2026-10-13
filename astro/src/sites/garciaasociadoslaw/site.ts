import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: garciaasociadoslaw.com y ficha de Google. Ver lista-2/75-garciaasociadoslaw/brand.json.
// El sitio publica dos WhatsApp (wa.me); la etiqueta CDMX / Quintana Roo no está publicada, por eso no se rotulan.
export const site: SiteConfig = {
  slug: "garciaasociadoslaw",
  name: "García & Asociados",
  description: "Despacho jurídico con presencia en Ciudad de México y Quintana Roo, especializado en derecho penal, laboral, civil, mercantil y familiar. Soluciones legales, resultados reales.",
  logo: { src: logo, alt: "García & Asociados Abogados", onDark: logo },
  theme: {
    bg: "#030F35",
    surface: "#0A1B4A",
    ink: "#F4F0E6",
    muted: "#B1B9D0",
    brand: "#D9A93F",
    onBrand: "#030F35",
    accent: "#D9A93F",
    onAccent: "#030F35",
    line: "#243666",
    dark: "#010820",
    onDark: "#F4F0E6",
    radius: "0px",
  },
  fonts: { display: "--f-garciaasociadoslaw-display", body: "--f-garciaasociadoslaw-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/garciaasociadoslaw/servicios" },
      { label: "La firma", href: "/garciaasociadoslaw/nosotros" },
      { label: "Contacto", href: "/garciaasociadoslaw/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525514932767?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525514932767", display: "55 1493 2767", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 1493 2767", tel: "+525514932767" },
    { display: "984 316 3234", tel: "+529843163234", label: "WhatsApp" },
  ],
  emails: [],
  addresses: [{ text: "Lago Constanza 155, Torre A, Lago Sur, Miguel Hidalgo, C.P. 11460, Ciudad de México", lat: 19.4448065, lng: -99.1875255 }],
  hours: "Lunes a jueves, de 9:00 a 18:00. Viernes, de 9:00 a 15:00. Sábado y domingo, cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=GARC%C3%8DA%20%26%20ASOCIADOS%20abogados%20Cdmx&query_place_id=ChIJG0_tvn750YURiiYTvOpaWqU",
  social: {},
  google: null,
};
