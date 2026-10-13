// Datos de la página de contacto (generados fuera del repo por ../contacto/_fuente/build.py).
export type ContactGroup = "demo" | "caida" | "sinweb" | "fuera";

export type Contact = {
  id: string;
  group: ContactGroup;
  source: "csv" | "sitio";
  firma: string;
  categoria: string;
  zona: string | null;
  rating: number | null;
  reviews: number | null;
  wa: string | null;
  waDisplay: string | null;
  waSource: string | null;
  phoneAlt: string | null;
  /** Segundo intento: otros números publicados por la firma (alta = lo publican como WhatsApp). */
  retry: { wa: string; display: string; level: "alta" | "media" | "baja"; source: string }[] | null;
  email: string | null;
  web: string | null;
  facebook: string | null;
  webStatus: string | null;
  webBad: boolean;
  demo: string | null;
  thumb: string | null;
  maps: string | null;
  note: string | null;
  reason: string | null;
  m1: string | null;
  m2: string | null;
};
