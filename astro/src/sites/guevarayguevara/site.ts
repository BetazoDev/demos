import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: guevarayguevara.com (Google Sites, 6 páginas), ficha de Google Maps y Facebook. Ver lista-2/44-guevarayguevara/brand.json.
// WhatsApp: el despacho NO publica uno. 55 5211 0229 es el teléfono de su ficha de Google y de Facebook (confianza baja, posible línea fija).
export const site: SiteConfig = {
  slug: "guevarayguevara",
  name: "Guevara & Guevara Abogados",
  description: "Bufete jurídico en la colonia Narvarte, Ciudad de México: asesoría legal, cobranza judicial y extrajudicial y litigio civil, mercantil, bancario, familiar, laboral, penal, administrativo y amparo.",
  logo: { src: logo, alt: "Guevara & Guevara Abogados", onDark: logoLight },
  theme: {
    bg: "#FFFFFF",
    surface: "#EFF2F6",
    ink: "#0B1A2E",
    muted: "#4A586D",
    brand: "#2D3F5D",
    onBrand: "#FFFFFF",
    accent: "#2D3F5D",
    onAccent: "#FFFFFF",
    line: "#D6DCE5",
    dark: "#071528",
    onDark: "#F2F5F9",
    radius: "0px",
  },
  fonts: { display: "--f-guevarayguevara-display", body: "--f-guevarayguevara-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/guevarayguevara/servicios" },
      { label: "La firma", href: "/guevarayguevara/la-firma" },
      { label: "Contacto", href: "/guevarayguevara/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525552110229?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525552110229", display: "55 5211 0229", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5211 0229", tel: "+525552110229" },
    { display: "55 5286 5073", tel: "+525552865073" },
  ],
  emails: ["contacto@guevarayguevara.com", "jose.guevara@guevarayguevara.com", "jguevararojas@yahoo.com.mx"],
  addresses: [
    { label: "Ciudad de México", text: "Zempoala 217, Atenor Sala Narvarte, Del. Benito Juárez, C.P. 03010, Ciudad de México", lat: 19.4026258, lng: -99.1478902 },
    { label: "León, Guanajuato", text: "Mariano Escobedo 4502, Interior 5, Col. San Isidro, C.P. 37530, León, Guanajuato" },
    { label: "Guadalajara, Jalisco", text: "Avenida Hidalgo 1114, esquina Gregorio Dávila, Col. Centro, C.P. 44100, Guadalajara, Jalisco" },
    { label: "Colima, Colima", text: "Allende 491, Col. Centro, C.P. 28000, Colima, Colima" },
    { label: "Celaya, Guanajuato", text: "Ignacio Zaragoza 102, Col. Centro, C.P. 38000, Celaya, Guanajuato" },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=GUEVARA%20%26%20GUEVARA%20ABOGADOS&query_place_id=ChIJi_iu0R3_0YURN8rZE1qT2H4",
  social: { facebook: "https://www.facebook.com/guevarayguevaraabogados" },
  // Google: 5.0 con solo 3 reseñas. No se publica la calificación ni las reseñas (mínimo 5 reseñas reales).
  google: null,
};
