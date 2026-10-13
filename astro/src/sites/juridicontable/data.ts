// Todo el texto sale de las capturas de Wayback de juridicontable.com.mx (Inicio, Acerca de nosotros, Servicios, Materias, Contacto).
export type Servicio = { key: string; title: string; text?: string; items?: string[] };
export type Materia = { key: string; title: string; icon: string; lead: string; text?: string; items?: string[] };

export const tagline = "Servicios de Asesoría Jurídica, Fiscal, Contable y Litigio a Nivel de Excelencia";

export const filosofia = "Grupo de Abogados, Contadores & Consultores es una firma de abogados y contadores, que cuenta con un equipo de profesionistas con el conocimiento y la experiencia para proporcionar un excelente servicio jurídico fiscal y contable, que defenderá los derechos de nuestros clientes ante las autoridades administrativas y los tribunales federales y locales.";
export const mision = "Proporcionar el servicio jurídico y contable oportunamente de acuerdo a las necesidades del entorno fiscal de nuestros clientes, a fin de ayudar a solucionar sus problemas judiciales y contables, evitando con ello el perjuicio en su patrimonio.";
export const vision = "Ser una firma líder en el mercado, con una filosofía de calidad humana y profesionalismo, para atender con honestidad y calidad la situación fiscal de nuestros clientes.";

export const servicios: Servicio[] = [
  {
    key: "asesoria-fiscal",
    title: "Asesoría fiscal",
    text: "Explicación clara de la normatividad en visitas domiciliarias, revisiones de gabinete, inspecciones, resoluciones y liquidaciones.",
  },
  {
    key: "patrocinio",
    title: "Patrocinio",
    text: "Representamos a nuestros clientes ante las autoridades administrativas, federales o locales, o en su caso ante tribunales federales o locales.",
  },
  {
    key: "litigio",
    title: "Litigio fiscal y administrativo",
    text: "Contra resoluciones o liquidaciones del SAT, IMSS e INFONAVIT, sanciones por infracciones fiscales, procedimiento administrativo de ejecución y negativa de devolución de impuestos.",
    items: [
      "Recursos administrativos",
      "Juicio de nulidad ante el Tribunal Federal de Justicia Administrativa y tribunales contenciosos locales",
      "Juicio de amparo ante juzgados de distrito y tribunales colegiados",
    ],
  },
  {
    key: "contable",
    title: "Contable",
    text: "Asesoría en contabilidad para el correcto cumplimiento de sus obligaciones tributarias, en los impuestos federales o locales, en cuotas obrero patronales emitidas por el IMSS y en las aportaciones al INFONAVIT.",
  },
];

export const materias: Materia[] = [
  {
    key: "fiscal",
    title: "Defensa fiscal",
    icon: "shield-check",
    lead: "Inconformidades, recurso de revocación, juicio de nulidad, litigio aduanero y juicio de amparo.",
    text: "Inconformidades, recurso de revocación, juicio de nulidad, litigio aduanero y juicio de amparo contra actos de molestia de la autoridad fiscal.",
  },
  {
    key: "administrativo",
    title: "Materia administrativa",
    icon: "buildings",
    lead: "Actos de autoridades federales, estatales o municipales sobre permisos, licencias y uso de suelo.",
    text: "Actos de autoridades federales, estatales o municipales sobre permisos, autorizaciones, licencias de funcionamiento, uso de suelo y construcción.",
  },
  {
    key: "amparo",
    title: "Amparo",
    icon: "scales",
    lead: "Amparo directo e indirecto, suspensión provisional y definitiva, y amparo contra leyes.",
    text: "Juicio de amparo directo e indirecto, suspensión provisional y definitiva, y amparo contra la inconstitucionalidad de leyes.",
  },
  {
    key: "contabilidad-nomina",
    title: "Contabilidad y nómina",
    icon: "calculator",
    lead: "Contabilidad y nóminas con CONTPAQ y CONTPAQ NÓMINAS, para personas morales o físicas.",
    text: "Contamos con software de CONTPAQ y CONTPAQ NÓMINAS para llevar la contabilidad y las nóminas de personas morales o físicas.",
    items: ["Emisión mensual del SUA", "Altas y bajas ante el IDSE", "Pago del 3 % sobre nóminas"],
  },
  {
    key: "fiscal-contable",
    title: "Fiscal contable",
    icon: "receipt",
    lead: "Contabilidad electrónica para el SAT, asesoría tributaria, planeación patrimonial y diagnóstico fiscal.",
    items: [
      "Contabilidad electrónica para el SAT",
      "Asesoría tributaria y cálculo de impuestos",
      "Estudio de operaciones",
      "Planeación patrimonial",
      "Declaraciones",
      "Diagnóstico fiscal",
      "Asesoría para mejor pensión IMSS",
      "Semanas cotizadas",
      "Infonavit",
      "Retiro de Afore",
      "Finiquitos por despido injustificado",
      "Liquidación",
    ],
  },
];
