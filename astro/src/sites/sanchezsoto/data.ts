import type { ImageMetadata } from "astro";
import retratoGris from "./assets/retrato-gris.jpg";
import retratoOscuro from "./assets/retrato-oscuro.jpg";
import archivo from "./assets/archivo.jpg";
import fachada from "./assets/fachada.jpg";

// Todo el texto sale de sanchezsoto.com.mx (Inicio, 4 páginas de servicio, Conócenos). No se incluye lo marcado como no corroborado en la investigación.
export type Area = { key: string; title: string; lead: string; itemsTitle: string; items: string[]; image: ImageMetadata; alt: string };

export const areas: Area[] = [
  {
    key: "amparo",
    title: "Juicio de Amparo",
    lead: "Amparo contra actos de autoridad en todas las materias, contra actos, normas y omisiones de autoridades fiscales y administrativas, y contra leyes y reglas misceláneas.",
    itemsTitle: "Procede el amparo",
    items: [
      "Contra actos de autoridad en todas las materias (administrativa, fiscal, civil, etc.).",
      "Contra actos, normas y omisiones de autoridades fiscales y administrativas.",
      "Contra leyes y reglas misceláneas.",
    ],
    image: fachada,
    alt: "Fachada de piedra y concreto de un edificio institucional al atardecer",
  },
  {
    key: "litigio-fiscal",
    title: "Litigio Fiscal y Contribuciones",
    lead: "Impugnación de créditos fiscales determinados por el SAT, de actos de organismos fiscales autónomos y administrativos, de capitales constitutivos del IMSS y de multas.",
    itemsTitle: "Impugnamos",
    items: [
      "Créditos fiscales determinados por el Servicio de Administración Tributaria (SAT) respecto de impuestos, aprovechamientos o cualquier contribución.",
      "Créditos fiscales determinados como consecuencia de la práctica de una visita domiciliaria, revisión de gabinete o revisión electrónica.",
      "Actos de autoridad suscritos por organismos fiscales, organismos fiscales autónomos y administrativos (INFONAVIT, CONAGUA, PROFECO, IMPI, INDAUTOR, CFE, etc.).",
      "Capitales constitutivos determinados por el IMSS.",
      "Multas.",
    ],
    image: archivo,
    alt: "Archivo con filas de cajas de documentos sobre estantes de acero",
  },
  {
    key: "cobro-coactivo-y-embargos",
    title: "Defensa en Cobro Coactivo y Embargos",
    lead: "Impugnación de convocatoria a remate, levantamiento de aseguramientos, bloqueos y embargos sobre cuentas bancarias, y defensa contra el procedimiento administrativo de ejecución.",
    itemsTitle: "Defendemos",
    items: [
      "Impugnación de convocatoria a remate.",
      "Levantamiento de aseguramientos, bloqueos, congelamientos, embargos y actuaciones similares sobre cuentas bancarias.",
      "Defensa contra el procedimiento administrativo de ejecución.",
    ],
    image: fachada,
    alt: "Fachada de piedra y concreto de un edificio institucional al atardecer",
  },
  {
    key: "requerimientos-y-comprobacion-digital",
    title: "Atención a Requerimientos y Comprobación Digital",
    lead: "Defensa contra la restricción y cancelación de CFDI, contra cartas invitación o requerimientos diversos y contra determinaciones que concluyen inexistencia de operaciones.",
    itemsTitle: "Defendemos",
    items: [
      "Contra la restricción y cancelación de CFDI.",
      "Contra cartas invitación o requerimientos diversos.",
      "Contra determinaciones que concluyen inexistencia de operaciones o recaracterización de las mismas.",
    ],
    image: archivo,
    alt: "Archivo con filas de cajas de documentos sobre estantes de acero",
  },
];

export const firma = {
  intro: "Sánchez Soto Abogados es una firma especializada en la representación, litigio y consultoría en derecho administrativo, fiscal, constitucional y juicio de amparo.",
  divisas: "Nos orientan dos divisas, la preparación técnica en forma constante y la responsabilidad moral.",
  cartas: "La experiencia y el conocimiento son nuestras cartas de presentación.",
};

export const director = {
  name: "Gustavo Sánchez Soto",
  role: "Director de la firma",
  bio: "Licenciado en Derecho por la Universidad La Salle. Abogado postulante especialista en Derecho Administrativo, Fiscal, Constitucional y Amparo, y actual Director de la firma Sánchez Soto Abogados.",
  photo: retratoGris,
};

export const photos = { retratoOscuro, retratoGris, archivo, fachada };
