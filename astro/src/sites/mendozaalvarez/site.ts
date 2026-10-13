import type { SiteConfig } from "@/kit/types";

// Fuentes: mendozaalvareza.com.mx (sitio de una página) y ficha de Google Maps. Ver lista-2/57-mendozaalvarez/brand.json.
// El logo del despacho es solo texto del constructor ("Mendoza Álvarez" azul + "Ábogados" negro, con acento erróneo):
// el nombre se compone en Wordmark.astro con Archivo. site.logo no se usa (Nav y Footer propios).
// WhatsApp: confianza MEDIA. Es el "Cel." del sitio y de Google; ninguna fuente lo llama WhatsApp.
const WA = "525587933343";
const INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "mendozaalvarez",
  name: "Mendoza Álvarez Abogados",
  description: "Despacho legal en el Centro de la Ciudad de México. Asesoría legal y asesoría empresarial y litigio, con más de 38 años de compromiso con sus clientes.",
  logo: { src: "", alt: "Mendoza Álvarez Abogados" },
  theme: {
    bg: "#090B12",
    surface: "#10131E",
    ink: "#F2F4FA",
    muted: "#A3A9BD",
    brand: "#1F41D8",
    onBrand: "#FFFFFF",
    accent: "#8EA2FF",
    onAccent: "#0A0F2E",
    line: "#232739",
    dark: "#05060B",
    onDark: "#F2F4FA",
    radius: "0px",
  },
  fonts: { display: "--f-mendozaalvarez-display", body: "--f-mendozaalvarez-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/mendozaalvarez/servicios" },
      { label: "Contacto", href: "/mendozaalvarez/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/${WA}?text=${encodeURIComponent(INTRO)}.` },
  },
  whatsapp: { number: WA, display: "55 8793 3343", confidence: "media", intro: INTRO },
  phones: [
    { display: "55 8793 3343", tel: "+525587933343", label: "Cel." },
    { display: "55 5512 1114", tel: "+525555121114", label: "Tel." },
  ],
  emails: ["mendoza-abogados@hotmail.com"],
  addresses: [{ label: "Sede", text: "López 11, Centro (Área 2), Cuauhtémoc, CDMX, C.P. 06010", lat: 19.4335755, lng: -99.1420697 }],
  hours: "Lunes a viernes de 8:00 a 20:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mendoza%20%C3%81lvarez%20Abogados&query_place_id=ChIJCdg5MCv50YUR4T8YgWp4OWc",
  social: {},
  google: null,
};
