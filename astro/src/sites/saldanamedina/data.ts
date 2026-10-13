import columnata from "./assets/columnata.jpg";
import libro from "./assets/libro-pluma.jpg";

// Todo el texto sale de saldana-medina-abogados.ueniweb.com (descripción, servicios, facilidades).
export type Area = { key: string; title: string; lead?: string };

export const areas: Area[] = [
  { key: "representacion-juridica", title: "Representación Jurídica", lead: "Representación jurídica en juicios mercantiles, familiares y administrativos." },
  { key: "penal-civil", title: "Juicios Penales y Civiles", lead: "Representación especializada en juicios penales y civiles." },
  { key: "responsabilidades-administrativas", title: "Responsabilidades Administrativas de Servidores Públicos" },
];

export const facilidades = ["Disponibilidad las 24 horas", "Solo con cita previa"];

export const photos = { columnata, libro };
