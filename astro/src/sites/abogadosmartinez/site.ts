import type { SiteConfig } from "@/kit/types";
import mark from "./assets/mark.png";

// Fuentes: logo y página de Facebook del despacho, ficha de Google Maps, TikTok y capturas de Wayback (2023) del sitio anterior.
// OJO: abogados-martinez.com hoy pertenece a OTRO despacho (Coahuila); nada de ese sitio se usa aquí. Ver lista-2/35-abogadosmartinez/brand.json.
const WA_INTRO = "Hola, me gustaría una orientación legal";

export const site: SiteConfig = {
  slug: "abogadosmartinez",
  name: "Abogados Martínez",
  description: "Despacho de derecho familiar en el Centro Histórico de la Ciudad de México: divorcios, pensión alimenticia, guarda y custodia, sucesiones y más. Reportándote el avance de tu proceso.",
  logo: { src: mark, alt: "Martínez Abogados", onDark: mark },
  theme: {
    bg: "#0C1620",
    surface: "#142230",
    ink: "#EDEEF0",
    muted: "#A7AFB8",
    brand: "#D0D1D2",
    onBrand: "#0C1620",
    accent: "#D0D1D2",
    onAccent: "#0C1620",
    line: "#243646",
    dark: "#070D14",
    onDark: "#EDEEF0",
    radius: "999px",
  },
  fonts: { display: "--f-abogadosmartinez-display", body: "--f-abogadosmartinez-body" },
  nav: {
    links: [
      { label: "Servicios", href: "/abogadosmartinez/servicios" },
      { label: "Contacto", href: "/abogadosmartinez/contacto" },
    ],
    cta: { label: "Escribir por WhatsApp", href: `https://wa.me/525542580104?text=${encodeURIComponent(WA_INTRO)}.` },
  },
  whatsapp: { number: "525542580104", display: "55 4258 0104", confidence: "media", intro: WA_INTRO },
  phones: [
    { display: "55 4258 0104", tel: "+525542580104" },
    { display: "55 5450 2194", tel: "+525554502194" },
  ],
  emails: ["abogados.martinez4@gmail.com"],
  addresses: [
    { label: "Despacho", text: "Av. Juárez 20, int. 37, Col. Centro (Centro Histórico), Alcaldía Cuauhtémoc, C.P. 06000, Ciudad de México", lat: 19.4341951, lng: -99.1423869 },
  ],
  hours: "Abre a las 9 a. m. Se recomienda concertar cita.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abogados%20Mart%C3%ADnez&query_place_id=ChIJc0OJiO3_0YURK1o9ChDY_Ds",
  social: { facebook: "https://www.facebook.com/abogadosmartinezcdmx/", tiktok: "https://www.tiktok.com/@licelizabethmartinez" },
  google: { rating: 4.9, reviews: 9 },
};
