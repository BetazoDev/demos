import type { SiteConfig } from "@/kit/types";

// Fuentes: m-f-abogados-com-mx.webnode.mx (Webnode, 4 páginas) y ficha de Google Maps. Ver lista-2/60-mfabogados/brand.json.
// El despacho no tiene archivo de logo: el nombre se compone con texto (Playfair, como en su encabezado). Ver Nav.astro y Wordmark.astro.
// WhatsApp: no publicado; se usa 55 6608 8373, línea móvil que aparece en el sitio y en Google (confianza media).
const wa = "https://wa.me/525566088373?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "mfabogados",
  name: "Moreno & Fuertes Abogados",
  description: "Firma de abogados en la Ciudad de México fundada en 2013: derecho mercantil, civil, familiar, penal y laboral, con diligencia, honestidad y lealtad.",
  logo: { src: "", alt: "Moreno & Fuertes Abogados" },
  theme: {
    bg: "#272727",
    surface: "#303030",
    ink: "#F9F7FA",
    muted: "#B9B6BC",
    brand: "#F9F7FA",
    onBrand: "#272727",
    accent: "#F9F7FA",
    onAccent: "#272727",
    line: "#434343",
    dark: "#1B1B1B",
    onDark: "#F9F7FA",
    radius: "0px",
  },
  fonts: { display: "--f-mfabogados-display", body: "--f-mfabogados-body" },
  nav: {
    links: [
      { label: "Áreas de práctica", href: "/mfabogados/areas-de-practica" },
      { label: "La firma", href: "/mfabogados/nosotros" },
      { label: "Contacto", href: "/mfabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525566088373", display: "55 6608 8373", confidence: "media", intro: "Hola, me gustaría una orientación legal" },
  phones: [
    { display: "55 6608 8373", tel: "+525566088373" },
    { display: "55 2684 9193", tel: "+525526849193" },
  ],
  emails: ["morenoyfuertesabogados@outlook.com"],
  addresses: [
    {
      text: "Calle Dolores n.º 10, Despacho 205, 2.º piso (Edificio Santander), Colonia Centro, Alcaldía Cuauhtémoc, C.P. 06050, Ciudad de México",
      lat: 19.4336207,
      lng: -99.1426779,
    },
  ],
  hours: "Lunes a viernes de 9:00 a 18:00; sábados previa cita",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=M%26F%20ABOGADOS%20S.C.&query_place_id=ChIJz4B9KCv50YURZp8muJzIyPk",
  social: {},
  google: null,
};
