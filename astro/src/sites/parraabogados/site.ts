import type { SiteConfig } from "@/kit/types";
import mark from "./assets/mark.svg";
import markLight from "./assets/mark-light.svg";

// Fuentes: parra-asociados.ueniweb.com (sitio y aviso legal) y ficha de Google. Ver lista-2/70-parraabogados/brand.json.
// El negocio se llama «Parra & Abogados» (logo, Google, aviso legal); el sitio actual a veces dice «Parra & Asociados».
// WhatsApp: 55 8460 1222 es el único teléfono del despacho; ninguna fuente lo rotula como WhatsApp (confianza baja).
export const site: SiteConfig = {
  slug: "parraabogados",
  name: "Parra & Abogados",
  description: "Bufete jurídico integral en Ciudad de México: asesoría legal a empresarios, necesidades fiscales y asesoría gratuita a trabajadores. Áreas cubiertas: toda la República.",
  logo: { src: mark, alt: "Parra & Abogados", onDark: markLight },
  theme: {
    bg: "#F1F2F4",
    surface: "#E4E7EC",
    ink: "#101C29",
    muted: "#4A5664",
    brand: "#101C29",
    onBrand: "#F1F2F4",
    accent: "#8E8E8C",
    onAccent: "#101C29",
    line: "#CDD2D9",
    dark: "#101C29",
    onDark: "#F1F2F4",
    radius: "6px",
  },
  fonts: { display: "--f-parraabogados-display", body: "--f-parraabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/parraabogados/servicios" },
      { label: "Contacto", href: "/parraabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525584601222?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525584601222", display: "55 8460 1222", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 8460 1222", tel: "+525584601222" }],
  emails: ["nancyabog@hotmail.com"],
  // Sin lat/lng: Ueni y Google geocodifican la dirección en puntos distintos (~1.5 km).
  addresses: [{ label: "Sede", text: "Av. Tamaulipas 150-130, Col. Condesa, Alcaldía Cuauhtémoc, C.P. 06140, Ciudad de México" }],
  hours: "Lunes a viernes de 9:00 a 18:00. Sábado y domingo cerrado. Atención solo con reserva concertada.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parra%20%26%20Abogados&query_place_id=ChIJ55ZlSyL_0YURMiu6GSsE62M",
  social: {},
  google: null,
};
