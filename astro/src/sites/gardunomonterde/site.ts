import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";

// Fuentes: gardunomonterdeasociados.com (Inicio y Ejercicio profesional), ficha de Google Maps, Facebook, Instagram y X.
// Ver lista-2/26-gardunomonterde/brand.json. WhatsApp: confianza alta (ícono «Whatsapp» del propio sitio, enlace tel:).
const waIntro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "gardunomonterde",
  name: "Garduño Monterde Asociados",
  description: "Abogados penalistas en la Ciudad de México: amparo penal, proceso penal, atención a víctimas del delito y consultoría. Representación técnica y estrategias de litigación.",
  logo: { src: logo, alt: "Garduño Monterde Asociados, servicios legales", onDark: logo },
  theme: {
    bg: "#FBFCFD",
    surface: "#EDF2F5",
    ink: "#0C2B3A",
    muted: "#4A6270",
    brand: "#0C2B3A",
    onBrand: "#FFFFFF",
    accent: "#298FC2",
    onAccent: "#0C2B3A",
    line: "#D3DEE5",
    dark: "#081F2B",
    onDark: "#EAF2F7",
    radius: "999px",
  },
  fonts: { display: "--f-gardunomonterde-display", body: "--f-gardunomonterde-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/gardunomonterde/servicios" },
      { label: "Socios", href: "/gardunomonterde/nosotros" },
      { label: "Contacto", href: "/gardunomonterde/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525522017493?text=${encodeURIComponent(waIntro)}.` },
  },
  whatsapp: { number: "525522017493", display: "55 2201 7493", confidence: "alta", intro: waIntro },
  phones: [
    { display: "55 2201 7493", tel: "+525522017493" },
    { display: "55 4878 3158", tel: "+525548783158" },
  ],
  emails: ["gardunomonterdeasociados@hotmail.com", "gardunomonterdeasociados@gmail.com"],
  addresses: [
    {
      label: "Sede",
      text: "Avenida Insurgentes Centro 132, Despacho 305 (Piso 3, Edificio Mallorca), Colonia Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030, Ciudad de México",
      lat: 19.4334021,
      lng: -99.1581991,
    },
  ],
  // Google Maps: lunes a viernes 9 a.m.-9 p.m. (Facebook dice «Siempre abierto»): el despacho debe confirmarlo.
  hours: "Lunes a viernes, de 9:00 a 21:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gardu%C3%B1o%20Monterde%20Asociados%20-%20Abogados&query_place_id=ChIJDV9aiQX50YURFQdvf6Ib46Y",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100093469536906",
    instagram: "https://www.instagram.com/gardunomonterde/",
    x: "https://x.com/GardunoMonterde",
  },
  google: null,
};
