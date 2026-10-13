import type { SiteConfig } from "@/kit/types";
import logoLight from "./assets/logo-light.png";

// Fuentes: litemabogados.com.mx (inicio, nosotros, servicios, contacto), ficha de Google Maps, Facebook e Instagram.
// Ver lista-2/72-litemabogados/brand.json. Logo: raster pequeño del propio sitio reescalado, sin vectorizar.
const intro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "litemabogados",
  name: "Lítem Abogados",
  description: "Despacho de abogados en Polanco, Ciudad de México: asuntos civiles, mercantiles, familiares, inversiones inmobiliarias, juicio de amparo y derecho penal.",
  logo: { src: logoLight, alt: "Lítem Abogados", onDark: logoLight },
  theme: {
    bg: "#023144",
    surface: "#032A3B",
    ink: "#EAF4F8",
    muted: "#A9C4D2",
    brand: "#51BDE1",
    onBrand: "#01111B",
    accent: "#51BDE1",
    onAccent: "#01111B",
    line: "#1A5169",
    dark: "#01111B",
    onDark: "#EAF4F8",
    radius: "12px",
  },
  fonts: { display: "--f-litemabogados-display", body: "--f-litemabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/litemabogados/servicios" },
      { label: "Nosotros", href: "/litemabogados/nosotros" },
      { label: "Contacto", href: "/litemabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525611119017?text=${encodeURIComponent(intro)}.` },
  },
  // Confianza alta: publicado por el despacho como «Whatsapp y Móvil» y botón en todo su sitio.
  whatsapp: { number: "525611119017", display: "56 1111 9017", confidence: "alta", intro },
  phones: [
    { display: "56 7122 5107", tel: "+525671225107", label: "Oficina" },
    { display: "56 1111 9017", tel: "+525611119017", label: "Móvil" },
  ],
  emails: ["recepcion.litem@gmail.com"],
  addresses: [{ label: "Sucursal Polanco", text: "Av. Homero 530, Polanco V Sección, Miguel Hidalgo, C.P. 11560, Ciudad de México", lat: 19.4353096, lng: -99.1900566 }],
  hours: "Lunes a viernes de 9:00 a 19:00. Sábado y domingo cerrado.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=L%C3%ADtem%20Abogados&query_place_id=ChIJO9h6MwL_0YURRmiI6lphi6o",
  social: { facebook: "https://www.facebook.com/litemabogados/", instagram: "https://www.instagram.com/litemabogados/", x: "https://x.com/LitemAbogados" },
  google: { rating: 4.5, reviews: 43 },
};
