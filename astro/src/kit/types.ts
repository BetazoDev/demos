import type { ImageMetadata } from "astro";

/** Una imagen puede venir de `import x from "./assets/x.jpg"` (optimizada por Astro) o de una URL. */
export type Img = ImageMetadata | string;

export interface NavLink {
  label: string;
  href: string;
}

/** Colores del despacho: salen de su logo y su sitio. Todo hex. */
export interface Theme {
  /** Fondo de la página */
  bg: string;
  /** Superficie alterna (secciones, tarjetas) */
  surface: string;
  /** Texto principal */
  ink: string;
  /** Texto secundario (contraste AA sobre bg) */
  muted: string;
  /** Color de marca: botones, bloques grandes, nav sólida */
  brand: string;
  /** Texto sobre brand (contraste AA) */
  onBrand: string;
  /** Acento único (enlaces, foco, detalles). Si el despacho solo tiene un color, repite brand. */
  accent: string;
  /** Texto sobre accent (contraste AA) */
  onAccent: string;
  /** Líneas y bordes */
  line: string;
  /** Superficie oscura (hero oscuro, footer) */
  dark: string;
  /** Texto sobre dark */
  onDark: string;
  /** Radio de botones y tarjetas: "0px" | "6px" | "12px" | "999px"... un solo sistema por sitio */
  radius?: string;
}

export interface SiteConfig {
  slug: string;
  /** Nombre para mostrar */
  name: string;
  lang?: "es" | "en";
  /** Descripción meta de la home (150-160 caracteres, basada en texto real del despacho) */
  description: string;
  logo: { src: Img; alt?: string; width?: number; height?: number; /** Versión para fondos oscuros */ onDark?: Img };
  theme: Theme;
  /** Variables CSS de las tipografías declaradas en fonts.json, p. ej. "--f-slug-display" */
  fonts: { display: string; body: string };
  nav: { links: NavLink[]; cta?: NavLink };
  /** Número de WhatsApp en formato 52XXXXXXXXXX. null = el despacho no tiene uno confirmado (se usa llamada). */
  whatsapp: { number: string | null; display?: string | null; confidence?: "alta" | "media" | "baja" | "ninguno"; intro: string };
  phones: { display: string; tel: string; label?: string }[];
  emails: string[];
  addresses: { label?: string; text: string; lat?: number; lng?: number }[];
  hours?: string | null;
  mapsUrl?: string | null;
  social: { facebook?: string | null; instagram?: string | null; linkedin?: string | null; x?: string | null; youtube?: string | null; tiktok?: string | null };
  google?: { rating: number; reviews: number } | null;
  /** Tipo schema.org: "LegalService" por defecto */
  schemaType?: string;
  privacyHref?: string | null;
  /** Zonas atendidas para schema.org (por defecto: Ciudad de México) */
  areaServed?: string[];
}
