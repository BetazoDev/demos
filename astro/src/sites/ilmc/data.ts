import hero from "./assets/hero-cielo-ventana.jpg";
import roma from "./assets/roma-azoteas.jpg";
import ventanilla from "./assets/ventanilla-avion.jpg";

// Todo el texto sale de ilmc.com.mx (Inicio, Nosotros, Servicios, Contacto). El nombre «Aguilar, Martínez y Asociados»
// que aparece en Nosotros y Servicios es herencia de 2014 y no se usa: el despacho se presenta como ILMC.
export type Block = { title: string; text?: string; items?: string[] };
export type Area = {
  key: string;
  title: string;
  /** Texto corto para filas */
  short: string;
  /** Texto de cabecera y metadescripción */
  lead: string;
  blocks: Block[];
  seo: string;
};

export const areas: Area[] = [
  {
    key: "visas",
    title: "Visas, permisos y residencias",
    seo: "visas, permisos y residencias en México",
    short: "Visitante, residente temporal y residente permanente, con autorizaciones de oferta de empleo y cambios de condición de estancia.",
    lead: "La Ley de Migración establece tres categorías, llamadas «condición de estancia». El estatus que asignan las autoridades migratorias depende de la intención de residencia en México.",
    blocks: [
      {
        title: "Visitante",
        text: "Permite la entrada a México por periodos cortos, para turismo, negocios o tránsito. Un visitante de negocios puede participar en ciertas actividades por un periodo determinado por las autoridades migratorias, no mayor a 180 días. La visa de entrada como visitante se solicita ante los consulados mexicanos; algunas nacionalidades no la requieren. Otras personas extranjeras pueden exentarla si cuentan con alguno de estos documentos:",
        items: ["Visa válida y vigente de los Estados Unidos de América", "Documento que acredite una residencia permanente en Canadá, Japón, Reino Unido o los países del espacio Schengen", "Tarjeta de Viajero de Negocios de APEC (ABTC) aprobada por México", "Certificado de miembro de la tripulación de la aeronave o embarcación en que se arribe al país"],
      },
      {
        title: "Residente temporal",
        text: "Sustituye a la mayoría de las variantes que abarcaban los formatos FM3 y FM2. Es apropiada para estudiantes, extranjeros con una oferta de empleo en México y familiares de residentes regulares. Autoriza a permanecer en territorio mexicano por más de 180 días, por un máximo de 4 años, con evidencia de alguno de estos criterios:",
        items: ["Solvencia económica", "Formar parte de una investigación científica o proyecto en territorio mexicano", "Vínculos familiares en México", "Invitación de una entidad pública o privada para participar en actividades remuneradas o no remuneradas", "Ser dueño de bienes raíces", "Ser inversionista"],
      },
      {
        title: "Residente permanente",
        text: "Permite permanecer en México por un periodo indefinido y participar en actividades remuneradas. Puede obtenerse tras 4 años ininterrumpidos como residente temporal, entre otros supuestos que contempla la Ley de Migración.",
      },
      { title: "Trámites frecuentes", items: ["Trámite de visa", "Apostilla y legalización de documentos", "Autorizaciones de ofertas de empleo", "Cambios de condición de estancia"] },
    ],
  },
  {
    key: "servicios-globales",
    title: "Servicios globales",
    seo: "asesoría legal para personas y empresas nacionales y extranjeras",
    short: "Contratos, negociación y representación en procedimientos contenciosos, incluida la legal estancia del extranjero en México.",
    lead: "Servicios a personas físicas y morales, nacionales y extranjeras, involucradas en operaciones comerciales internacionales y dentro del territorio nacional.",
    blocks: [
      {
        title: "Qué incluye",
        items: ["Elaboración de todo tipo de contratos y Joint Ventures (asociaciones estratégicas internacionales)", "Negociación de diversos negocios", "Representación en toda clase de procedimientos contenciosos: mercantiles, civiles, laborales, penales y administrativos", "Toda el área de la legal estancia del extranjero en México"],
      },
    ],
  },
  {
    key: "asistencia-consular",
    title: "Asistencia consular",
    seo: "asistencia para obtener visas en consulados en México",
    short: "Asistencia a mexicanos y extranjeros para obtener visas en las oficinas consulares de otros países en México.",
    lead: "Asistencia para mexicanos y extranjeros con la obtención de visas en las oficinas consulares de otros países en México.",
    blocks: [
      {
        title: "Alcance",
        text: "El alcance de nuestros servicios está condicionado a la práctica y posibilidad de mediación por parte de un tercero que admite cada una de las representaciones consulares.",
      },
    ],
  },
  {
    key: "documentos",
    title: "Obtención y legalización de documentos",
    seo: "obtención, legalización y apostilla de documentos para visados",
    short: "Actas del registro civil, antecedentes no penales y certificados médicos para visados, con su legalización o apostilla.",
    lead: "La firma cuenta con un área dedicada exclusivamente a la obtención de documentos para procesos de visado en otros países.",
    blocks: [
      { title: "Documentos", items: ["Actas del registro civil", "Antecedentes no penales", "Certificados médicos"] },
      {
        title: "Legalización y apostilla",
        text: "Estos documentos usualmente pasan por un proceso de legalización a través de diversas instancias gubernamentales que certifican la firma de quien suscribe el documento, y que concluye con la legalización en la sección consular del país en el que serán utilizados. La excepción aplica para los países signatarios del convenio de La Haya de 1961, que suprime el requisito de legalización y lo reemplaza por la apostilla.",
      },
    ],
  },
  {
    key: "naturalizaciones",
    title: "Naturalizaciones",
    seo: "trámite de naturalización mexicana",
    short: "Naturalización por tiempo de residencia, matrimonio con mexicano, ascendencia o descendencia, y otros supuestos.",
    lead: "La firma realiza el trámite de naturalización para las personas que cumplan los supuestos que solicita la autoridad competente.",
    blocks: [
      { title: "Supuestos", items: ["Tiempo de residencia en el país", "Matrimonio con mexicano", "Ascendencia o descendencia de mexicanos", "Naturalización privilegiada", "Origen latinoamericano o iberoamericano"] },
      {
        title: "Asesoría preventiva",
        text: "La experiencia combinada en derecho migratorio, con nuestro conocimiento en la Ley de Naturalización, nos permite asesorar a nuestros clientes para prever e iniciar estos procesos desde que residen como extranjeros, y evitar cualquier obstáculo que pudiera poner en riesgo la naturalización. La nacionalidad puede dar ventajas y beneficios que otorga la ley al extranjero naturalizado, ya que es un mexicano por naturalización.",
      },
    ],
  },
];

export const photos = { hero, roma, ventanilla };

export const waLink = (intro: string) => `https://wa.me/525519519708?text=${encodeURIComponent(intro)}`;
