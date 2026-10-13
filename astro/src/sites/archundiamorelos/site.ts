import type { SiteConfig } from "@/kit/types";
import logo from "./assets/logo.png";

// Fuentes: micrositio del despacho en Ueni (solo lo propio: nombre, correo, horario, tarjeta de presentación y áreas declaradas) y
// ficha de Google Maps. Ver lista-2/49-archundiamorelos/brand.json.
// WhatsApp: no está declarado; se usa el único celular de la tarjeta de presentación (confianza media: probar a mano).
export const site: SiteConfig = {
  slug: "archundiamorelos",
  name: "Jesús Archundia Morelos Abogados",
  description: "Asesoría, consultoría, orientación y representación jurídica y legal. Derecho penal, civil, mercantil, administrativo fiscal, constitucional y amparo, en la colonia del Valle Norte, Ciudad de México.",
  logo: { src: logo, alt: "Jesús Archundia Morelos Abogados", onDark: logo },
  theme: {
    bg: "#FFFAF9",
    surface: "#FFEDEF",
    ink: "#272425",
    muted: "#5C5457",
    brand: "#FF566E",
    onBrand: "#272425",
    accent: "#FF566E",
    onAccent: "#272425",
    line: "#F0D3D8",
    dark: "#272425",
    onDark: "#FFF4F5",
    radius: "0px",
  },
  fonts: { display: "--f-archundiamorelos-display", body: "--f-archundiamorelos-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/archundiamorelos/servicios" },
      { label: "Contacto", href: "/archundiamorelos/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: "https://wa.me/525535182101?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal." },
  },
  whatsapp: { number: "525535182101", display: "55 3518 2101", confidence: "media", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 3518 2101", tel: "+525535182101", label: "Celular" }],
  emails: ["jarchundiaabogado@gmail.com"],
  addresses: [{ text: "Calle Medellín, Col. del Valle Norte, Alcaldía Benito Juárez, C.P. 03000, Ciudad de México", lat: 19.4017874, lng: -99.1620295 }],
  hours: "Lunes a viernes de 10:00 a 17:00 h.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jes%C3%BAs%20Archundia%20Morelos%20Abogados&query_place_id=ChIJz16XAar_0YURQf2N9XBnXTc",
  social: {},
  google: null,
};
