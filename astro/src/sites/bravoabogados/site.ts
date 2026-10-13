import type { SiteConfig } from "@/kit/types";

// Fuentes: sitio original (captura de Wayback del 2025-03-05; el dominio actual ya no es del despacho) y ficha de Google Maps.
// Ver lista-2/76-bravoabogados/brand.json. No existe logo: el nombre se compone en tipografía (textOnly), ver Nav.astro y Footer.astro.
const intro = "Hola, me gustaría una orientación legal";
export const site: SiteConfig = {
  slug: "bravoabogados",
  name: "Bravo Abogados",
  description: "Bufete de abogados en la Ciudad de México: servicios jurídicos para empresas concesionarias de obras y servicios públicos. Derecho administrativo, amparo, mercantil, civil y penal.",
  logo: { src: "", alt: "Bravo Abogados" },
  theme: {
    bg: "#F5F4F0",
    surface: "#E7E6E0",
    ink: "#23252B",
    muted: "#5A5C62",
    brand: "#253551",
    onBrand: "#F5F4F0",
    accent: "#253551",
    onAccent: "#F5F4F0",
    line: "#D2D1CA",
    dark: "#19233A",
    onDark: "#F5F4F0",
    radius: "0px",
  },
  fonts: { display: "--f-bravoabogados-display", body: "--f-bravoabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/bravoabogados/servicios" },
      { label: "Nosotros", href: "/bravoabogados/nosotros" },
      { label: "Contacto", href: "/bravoabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525556620194?text=${encodeURIComponent(intro)}.` },
  },
  // Confianza baja: es el teléfono de la ficha de Google y del sitio viejo; ninguna fuente lo llama WhatsApp (probablemente línea fija).
  whatsapp: { number: "525556620194", display: "55 5662 0194", confidence: "baja", intro },
  phones: [
    { display: "55 5662 0194", tel: "+525556620194" },
    { display: "55 5661 3380", tel: "+525556613380" },
  ],
  emails: ["bravo_abogados@yahoo.com.mx"],
  // Dos direcciones en conflicto: Google Maps (Polanco) y el sitio original de 2025 (colonia Florida). Confirmar con el despacho.
  addresses: [
    { label: "Polanco", text: "Av. Isaac Newton 285, Polanco V Sección, Miguel Hidalgo, C.P. 11560, Ciudad de México", lat: 19.4368207, lng: -99.1842576 },
    { label: "Colonia Florida", text: "Hortensias 77-A, Florida, Álvaro Obregón, C.P. 01030, Ciudad de México" },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bravo%20Abogados&query_place_id=ChIJZVqTqq740YURagxMf0Kllio",
  social: {},
  google: null,
  privacyHref: null,
};
