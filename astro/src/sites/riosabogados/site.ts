import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";

// Fuentes: riosabogados.com (páginas de servicio y equipo), Google Maps y Facebook. Ver lista-2/19-riosabogados/brand.json.
// WhatsApp: el despacho NO publica uno. 55 5280 2794 es el teléfono del listado de Google (parece línea fija): confianza baja.
const WA = "525552802794";
export const site: SiteConfig = {
  slug: "riosabogados",
  name: "R1OS Abogados",
  description: "Boutique legal en la Ciudad de México, fundada en 1999: propiedad intelectual, derecho corporativo, derecho informático y litigio. Halley 21, colonia Anzures.",
  logo: { src: logo, alt: "R1OS Abogados", onDark: logoLight },
  theme: {
    bg: "#FFFFFF",
    surface: "#F6F1EF",
    ink: "#222A33",
    muted: "#59616B",
    brand: "#901818",
    onBrand: "#FFFFFF",
    accent: "#DC2626",
    onAccent: "#FFFFFF",
    line: "#E6DDDA",
    dark: "#1F262E",
    onDark: "#FFFFFF",
    radius: "999px",
  },
  fonts: { display: "--f-riosabogados-display", body: "--f-riosabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/riosabogados/servicios" },
      { label: "La firma", href: "/riosabogados/nosotros" },
      { label: "Contacto", href: "/riosabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.` },
  },
  whatsapp: { number: WA, display: "55 5280 2794", confidence: "baja", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 5280 2789", tel: "+525552802789" },
    { display: "55 5280 2794", tel: "+525552802794" },
  ],
  emails: ["info@riosabogados.com"],
  addresses: [{ label: "Sede", text: "Halley No. 21, colonia Anzures, alcaldía Miguel Hidalgo, C.P. 11590, Ciudad de México", lat: 19.4346395, lng: -99.1787655 }],
  hours: "Lunes a viernes de 9:00 a 18:00 h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=R1OS%20ABOGADOS%2C%20S.C.&query_place_id=ChIJH5rMrAIC0oUR9QjgpTUwpkY",
  social: { facebook: "https://www.facebook.com/RiosAbogados", x: "https://x.com/RIOSABOGADOS" },
  google: null,
  privacyHref: "/riosabogados/privacidad",
};
