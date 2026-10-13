import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: arriolabogados.com, aviso de privacidad (PDF), Facebook y ficha de Google. Ver lista-2/73-arriolabogados/brand.json.
export const site: SiteConfig = {
  slug: "arriolabogados",
  name: "Arriola Abogados",
  description: "Abogados en Polanco, Ciudad de México: propiedad intelectual y registro de marcas, corporativo, civil y mercantil, y fiscal. Asesoría a startups y emprendedores.",
  logo: { src: logo, alt: "Arriola Abogados", onDark: logo },
  theme: {
    bg: "#F7F6F1",
    surface: "#EDEBE2",
    ink: "#29211F",
    muted: "#5F574F",
    brand: "#98A039",
    onBrand: "#1E1A17",
    accent: "#98A039",
    onAccent: "#1E1A17",
    line: "#DAD7CB",
    dark: "#1E1A17",
    onDark: "#F7F6F1",
    radius: "999px",
  },
  fonts: { display: "--f-arriolabogados-display", body: "--f-arriolabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/arriolabogados/servicios" },
      { label: "La firma", href: "/arriolabogados/nosotros" },
      { label: "Clientes", href: "/arriolabogados/clientes" },
      { label: "Publicaciones", href: "/arriolabogados/publicaciones" },
      { label: "Contacto", href: "/arriolabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525535227769?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525535227769", display: "55 3522 7769", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 3522 7769", tel: "+525535227769" },
    { display: "55 4370 3482", tel: "+525543703482" },
  ],
  emails: ["arriolabogados@gmail.com"],
  addresses: [{ label: "Oficina Polanco", text: "Av. Homero 229, int. 5, Polanco V Sección, Miguel Hidalgo, C.P. 11560, Ciudad de México", lat: 19.4356169, lng: -99.1853626 }],
  hours: "Lunes a viernes de 9:00 a 19:00. Sábado y domingo cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Arriola%20Abogados&query_place_id=ChIJYwFxgAMC0oUR-yL24Q_HhYA",
  social: { facebook: "https://www.facebook.com/Arriolabogados/", instagram: "https://www.instagram.com/arriolabogados/" },
  google: { rating: 4.6, reviews: 143 },
  privacyHref: "/arriolabogados/privacidad",
};
