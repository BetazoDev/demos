// Todo el texto sale de omcabogados.com.mx (Áreas de práctica, La firma, Socios). Ver lista-2/15-omcabogados/brand.json.
export type Area = { key: string; title: string; icon: string; lead: string; items: string[] };

export const areasIntro = "La experiencia de los socios, asociados y abogados, así como su especialización, permite ofrecer a sus clientes una asesoría eficaz y responsable, que atiende a la confianza depositada en la firma.";

export const areas: Area[] = [
  {
    key: "responsabilidades",
    title: "Sistema de responsabilidades de los servidores públicos",
    icon: "scales",
    lead: "Responsabilidades administrativas y resarcitorias, y litigio ante tribunales administrativos.",
    items: [
      "Responsabilidades administrativas: procedimientos de Órganos Internos de Control y Contralorías Internas",
      "Responsabilidades resarcitorias: Auditoría Superior de la Federación y órganos estatales de fiscalización",
      "Litigio: recursos administrativos y juicios ante el Tribunal Federal de Justicia Administrativa y tribunales administrativos de las entidades federativas",
    ],
  },
  {
    key: "asesoria-litigio",
    title: "Asesoría y litigio administrativo",
    icon: "bank",
    lead: "Asesoría y patrocinio en procedimientos de contratación, verificación y sanción, y litigio en materia administrativa.",
    items: [
      "Asesoría y patrocinio en procedimientos adquisitivos o de contratación de servicios iniciados por el Gobierno Federal, entidades federativas y municipios",
      "Procedimientos de verificación y sanción de dependencias del Gobierno de la Ciudad de México",
      "Litigios ante el Tribunal Federal de Justicia Administrativa, el Tribunal de lo Contencioso Administrativo de la Ciudad de México y tribunales administrativos estatales",
      "Litigios ante Tribunales Colegiados y Juzgados de Distrito en Materia Administrativa",
    ],
  },
  {
    key: "contratacion-publica",
    title: "Contratación pública",
    icon: "file-text",
    lead: "Procedimientos y litigios derivados de la ley de adquisiciones y de la ley de obras públicas.",
    items: [
      "Asesoría y patrocinio en procedimientos y litigios derivados de la Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público y de la Ley de Obras Públicas y Servicios Relacionados con las Mismas",
      "Análisis de viabilidad de proyectos",
      "Coordinación en la elaboración de propuestas",
      "Impugnación de actos de procedimientos adquisitivos",
    ],
  },
  {
    key: "transparencia",
    title: "Transparencia, acceso a la información y protección de datos personales",
    icon: "eye",
    lead: "Acceso a la información, protección de datos personales y cumplimiento de obligaciones de transparencia.",
    items: [
      "Acceso a la información: solicitudes en el sector público y privado, medios de impugnación y sanciones",
      "Protección de datos personales: revisión diagnóstica, avisos de privacidad, derechos ARCO y capacitación",
      "Cumplimiento de obligaciones de transparencia: diagnóstico, asesoría y capacitación",
    ],
  },
  {
    key: "proteccion-al-consumidor",
    title: "Protección al consumidor",
    icon: "shield-check",
    lead: "Procedimientos conciliatorios ante la Procuraduría Federal del Consumidor y medios de impugnación contra sanciones.",
    items: [
      "Patrocinio en procedimientos conciliatorios ante la Procuraduría Federal del Consumidor",
      "Verificación de cumplimiento de la Ley Federal de Protección al Consumidor y de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
      "Procedimientos por infracciones",
      "Medios de impugnación contra sanciones de la Procuraduría Federal del Consumidor",
    ],
  },
  {
    key: "juegos-y-sorteos",
    title: "Juegos y sorteos",
    icon: "dice-five",
    lead: "Permisos ante la Dirección General de Juegos y Sorteos de la Secretaría de Gobernación.",
    items: [
      "Permisos ante la Dirección General de Juegos y Sorteos de la Secretaría de Gobernación para juegos con apuestas y sorteos",
      "Instalación de centros de apuestas remotas y salas de sorteos",
      "Verificación de cumplimiento y procedimientos de sanción",
    ],
  },
];

export const socios = [
  { name: "Lic. Eligio Benjamín Osorio Hernández", role: "Socio fundador" },
  { name: "Lic. Haydee Raquel Morales", role: "Socio" },
];

export const firma = {
  year: "2012",
  yearLabel: "año en que los socios crearon la firma",
  text: "Los socios decidieron sumar su experiencia y especialización para crear una firma que brinde asesoría y representación a sus clientes bajo la premisa del compromiso, la calidad y la eficiencia que responda a la confianza otorgada.",
  colegio: "Los socios integrantes de la firma son, a su vez, socios fundadores del Colegio de Especialistas en Materia de Responsabilidades de los Servidores Públicos y del Estado, A.C.",
};

export const avisoLegal = "El contenido de esta página web no puede ser considerado como medio de asesoría legal, y no da derecho a constituir derecho de relación cliente-abogados.";
