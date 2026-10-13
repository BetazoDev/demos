import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.svg";

// Fuentes: eduardocastilloabogados.com (sitio 2018), ficha de Google Maps y Wayback. Ver lista-2/78-eduardocastilloabogados/brand.json.
// El logo solo existe en blanco y gris: se usa sobre fondo oscuro (el tema de todo el sitio es azul marino).
const base = "/eduardocastilloabogados";
const intro = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "eduardocastilloabogados",
  name: "Eduardo Castillo Abogados",
  description: "Despacho de profesionales en derecho, especialmente en materia mercantil: litigio mercantil, bancario y bursátil, concursal, fiduciario y corporativo. Col. Granada, Ciudad de México.",
  logo: { src: logo, alt: "ECA, Eduardo Castillo Abogados", onDark: logo },
  theme: {
    bg: "#0F1D31",
    surface: "#152842",
    ink: "#F4F1EA",
    muted: "#A9B4C4",
    brand: "#C29865",
    onBrand: "#1A1208",
    accent: "#C29865",
    onAccent: "#1A1208",
    line: "#294264",
    dark: "#091424",
    onDark: "#F4F1EA",
    radius: "0px",
  },
  fonts: { display: "--f-eduardocastilloabogados-display", body: "--f-eduardocastilloabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: `${base}/servicios` },
      { label: "Nosotros", href: `${base}/nosotros` },
      { label: "Publicaciones", href: `${base}/publicaciones` },
      { label: "Contacto", href: `${base}/contacto` },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525554044136?text=${encodeURIComponent(intro)}.` },
  },
  // Celular que el despacho publica como móvil en su página de Contacto; ninguna fuente lo llama WhatsApp (confianza media).
  whatsapp: { number: "525554044136", display: "55 5404 4136", confidence: "media", intro },
  phones: [
    { display: "55 9116 8397", tel: "+525591168397", label: "Oficina" },
    { display: "55 5404 4136", tel: "+525554044136", label: "Móvil" },
  ],
  emails: ["eduardo@eduardocastilloabogados.com"],
  addresses: [
    {
      label: "Sede",
      text: "Laguna de Términos 221, esquina Lago Como, Torre B, piso 5, oficina 502, Col. Granada, Miguel Hidalgo, C.P. 11520, Ciudad de México",
      lat: 19.4434679,
      lng: -99.1837231,
    },
  ],
  hours: "Lunes a viernes, de 9:00 a 17:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eduardo%20Castillo%20Abogados&query_place_id=ChIJiZyVWaX40YURxjGtZJiHkKk",
  social: {},
  google: null,
};
