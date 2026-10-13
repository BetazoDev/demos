import type { SiteConfig } from "@/kit/types";
import mark from "./assets/mark.png";

// Fuentes: gtm-sc-abogados.com (una sola página) y ficha de Google Maps. Ver lista-2/55-gtmabogados/brand.json.
const wa = "https://wa.me/525554051414?text=Hola%2C%20me%20gustar%C3%ADa%20una%20orientaci%C3%B3n%20legal.";

export const site: SiteConfig = {
  slug: "gtmabogados",
  name: "GTM SC Abogados",
  description: "Despacho de abogados en la Ciudad de México especializado en auditorías administrativas y laborales, conflictos de trabajo y responsabilidades administrativas.",
  logo: { src: mark, alt: "GTM, Grupo de Trabajo Multidisciplinario" },
  theme: {
    bg: "#FBF8F7",
    surface: "#F2EBE2",
    ink: "#312A26",
    muted: "#6A5D54",
    brand: "#767641",
    onBrand: "#FFFFE0",
    accent: "#875625",
    onAccent: "#FFFFE0",
    line: "#DDD3C7",
    dark: "#2A211A",
    onDark: "#F4EEE4",
    radius: "0px",
  },
  fonts: { display: "--f-gtmabogados-display", body: "--f-gtmabogados-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/gtmabogados/servicios" },
      { label: "La firma", href: "/gtmabogados/nosotros" },
      { label: "Contacto", href: "/gtmabogados/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: wa },
  },
  whatsapp: { number: "525554051414", display: "55 5405 1414", confidence: "alta", intro: "Hola, me gustaría una orientación legal" },
  phones: [{ display: "55 9049 6547", tel: "+525590496547", label: "Oficina" }],
  emails: ["gtmabogados@prodigy.net.mx"],
  addresses: [
    {
      label: "Domicilio fiscal",
      text: "Calle Orizaba No. 154, oficina 301, Colonia Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México",
      lat: 19.4153952,
      lng: -99.1587829,
    },
  ],
  hours: null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=GTM%20SC%20ABOGADOS&query_place_id=ChIJDVWW67D_0YURs9TIs3JA9Ns",
  social: {},
  google: null,
};
