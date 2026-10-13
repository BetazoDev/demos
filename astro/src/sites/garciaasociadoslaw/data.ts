import columnas from "./assets/columnas-sala.jpg";
import ciudad from "./assets/ciudad-hora-azul.jpg";

// Todo el texto sale de garciaasociadoslaw.com (Inicio, Nosotros, Nuestra Firma, Áreas de Práctica y Contáctanos).
export type Area = { key: string; title: string; text?: string };

export const areas: Area[] = [
  { key: "laboral", title: "Laboral", text: "Asesoría ante despido injustificado o trato injusto en el trabajo, con asesoramiento gratuito inicial." },
  { key: "mercantil", title: "Mercantil", text: "Cobro de contratos y pagarés." },
  { key: "civil", title: "Civil", text: "Reclamación de daños, perjuicios e indemnizaciones; negociación de contratos y mediaciones." },
  { key: "familiar", title: "Familiar", text: "Custodia de hijos, violencia doméstica, pensión alimenticia, división de bienes matrimoniales y familiares, y acuerdos prematrimoniales." },
  { key: "penal", title: "Penal" },
  { key: "notarial", title: "Notarial" },
];

export const principios = ["Ética", "Transparencia", "Responsabilidad", "Compromiso"];

export const cobertura = [
  { region: "Ciudad de México y área metropolitana", lugares: ["Ciudad de México", "Estado de México", "Ixtapaluca", "Chalco", "Toluca", "Ecatepec", "Naucalpan"] },
  { region: "Quintana Roo", lugares: ["Playa del Carmen", "Cancún", "Cozumel", "Tulum"] },
];

export const photos = { columnas, ciudad };
