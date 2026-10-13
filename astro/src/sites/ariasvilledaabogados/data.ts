// Todo el texto sale de ariasvilledaabogados.com (servicios, cobertura, equipo, privacidad), condensado y con erratas corregidas.
// Se omitieron o actualizaron referencias a instituciones con nombre anterior (Distrito Federal, Juntas de Conciliación y Arbitraje, PGR).
export type Block = { heading?: string; paragraphs?: string[]; items?: string[]; columns?: boolean };
export type Area = { key: string; title: string; short: string; teaser: string; lede: string; blocks: Block[] };

import rest from "./data-rest";

export const areas: Area[] = [
  {
    key: "corporativo",
    title: "Derecho corporativo",
    short: "Corporativo",
    teaser: "Sociedades, inversión extranjera, propiedad industrial y derechos de autor.",
    lede: "Participamos desde la planeación y diseño de la estrategia jurídica hasta la puesta en marcha de diversas sociedades, y en los aspectos sustantivos de su funcionamiento.",
    blocks: [
      {
        paragraphs: [
          "La firma audita y mantiene actualizados los libros y registros corporativos de sus clientes: libros de actas de asamblea, de registro de accionistas, de actas de sesión del consejo de administración y de aumento y disminución del capital social, además de la elaboración de títulos accionarios y de actas de asamblea sobre fusiones y escisiones de sociedades.",
          "Asesoría respecto a todo tipo de sociedades civiles y mercantiles.",
        ],
      },
      {
        heading: "Inversión extranjera",
        paragraphs: ["Asesoramos a empresas que pretenden invertir y establecerse en territorio nacional y participamos en todos los trámites necesarios, desde su inscripción en el Registro Nacional de Inversión Extranjera. También renovamos la inscripción mediante la presentación del informe económico anual y reportamos las modificaciones corporativas."],
      },
      {
        heading: "Propiedad industrial",
        paragraphs: ["Asesoramos en la protección de la propiedad industrial mediante la solicitud de registros de marcas, avisos comerciales (signos distintivos), patentes, modelos de utilidad y diseños industriales, sus autorizaciones para uso de denominaciones de origen y las posibles transmisiones de derechos."],
        items: ["Búsqueda y registro de patentes, marcas, nombres y avisos comerciales", "Contestación y negociación de los oficios de anterioridad", "Demandas de nulidad ante el TFJFA", "Elaboración de amparos"],
      },
      {
        heading: "Protección de datos",
        paragraphs: [
          "Todas las personas físicas o morales que para sus actividades cotidianas recaben, manejen y utilicen información personal (exceptuando las sociedades de información crediticia) están obligadas a garantizar el correcto uso y resguardo de las bases de datos.",
          "Ofrecemos asesoría para implementar medidas administrativas, físicas y técnicas eficaces que garanticen la integridad, confidencialidad y disponibilidad de los datos personales.",
        ],
      },
      {
        heading: "Migración",
        paragraphs: ["Como parte de la asesoría corporativa y de inversión extranjera, gestionamos trámites migratorios:"],
        items: [
          "Internación: para obtener una calidad migratoria para entrar al país de acuerdo con el motivo del viaje",
          "Estancia: para permanecer en México, ampliar la estancia, obtener residencia, trabajar, obtener y reponer las formas migratorias, y obtener certificaciones y permisos para matrimonio, divorcio o adopción",
          "Empresas: trámites de personas físicas o morales que tienen a su servicio a extranjeros, apertura o actualización del expediente básico, avisos sobre la situación migratoria de extranjeros y devolución de billetes de depósito",
        ],
      },
      {
        heading: "Derechos de autor",
        paragraphs: ["Asesoramos a personas físicas y morales para salvaguardar sus derechos autorales mediante el registro de obras, contratos, anotaciones registrales y anotaciones marginales. También participamos en la protección de la reserva de derechos de publicaciones periódicas, difusiones periódicas y personajes humanos de caracterización (ficticios o simbólicos), y de personas o grupos dedicados a actividades artísticas o promociones publicitarias."],
      },
    ],
  },
  {
    key: "administrativo",
    title: "Derecho administrativo",
    short: "Administrativo",
    teaser: "Licitaciones, clausuras de obra, recursos y juicios de amparo.",
    lede: "Prestamos asesoría en licitaciones, concursos y adjudicaciones, clausuras de obra e interposición de recursos contra cualquier tipo de actos de autoridad de carácter administrativo.",
    blocks: [
      {
        heading: "Litigios ante tribunales administrativos",
        paragraphs: ["Patrocinamos litigios ante tribunales administrativos, principalmente:"],
        items: ["Juicios de amparo en materia administrativa", "Juicios de amparo contra avance de obra", "Juicios de amparo contra Factor 10 (2007 y anteriores)", "Juicios de amparo contra derechos y aprovechamientos previstos en el Código Financiero"],
      },
    ],
  },
  {
    key: "inmobiliario",
    title: "Derecho inmobiliario",
    short: "Inmobiliario",
    teaser: "Contratos, fideicomisos y estrategia jurídica para proyectos inmobiliarios.",
    lede: "En el área de negocios participamos en la asesoría y formalización de todo tipo de contratos nominados e innominados.",
    blocks: [
      {
        heading: "Contratos",
        items: ["Compraventa", "Arrendamiento", "Suministro", "Depósito", "Fideicomiso", "Factoraje", "Coinversión o asociación empresarial", "Promoción y mandatos", "Operación y administración", "Franquicia y transferencia de tecnología"],
        columns: true,
      },
      {
        heading: "Proyectos inmobiliarios",
        paragraphs: ["Asesoramos a promotores, corredores y particulares en la definición y ejecución de la estrategia jurídica necesaria para el óptimo desarrollo de todo tipo de proyectos inmobiliarios."],
      },
    ],
  },
  {
    key: "cobranza",
    title: "Cobranza judicial y extrajudicial",
    short: "Cobranza judicial",
    teaser: "Estudio de cada caso para negociar el adeudo.",
    lede: "Estudiamos cada caso en particular para entender los motivos de incumplimiento de los acreditados.",
    blocks: [
      {
        paragraphs: [
          "Capacitamos constantemente a nuestros visitadores para su trato con el acreditado, en beneficio de nuestros clientes.",
          "Proporcionamos nuestros servicios por todos los medios de comunicación: nuestros asesores telefónicos informan la situación del crédito y brindan confianza y credibilidad para generar la negociación del adeudo.",
        ],
      },
    ],
  },
  {
    key: "gestion-y-tramites",
    title: "Gestión y trámites",
    short: "Gestión y trámites",
    teaser: "Registro Público, Secretaría de Finanzas, usos de suelo y licencias.",
    lede: "Gestionamos trámites ante registros públicos, la Secretaría de Finanzas y dependencias de gobierno.",
    blocks: [
      {
        heading: "Registro Público de la Propiedad y del Comercio y Archivo General de Notarías",
        items: ["Certificado de existencia o inexistencia de gravámenes", "Certificado de inscripción de asientos registrales", "Certificado de no inscripción", "Certificado de no propiedad", "Búsqueda de antecedentes registrales", "Constancias de folio real, de personas morales y mercantiles", "Antecedentes de libro y microfichas", "Inscripción de actos y hechos jurídicos", "Rectificación de asientos registrales", "Copias de instrumentos y documentos que obran en archivos de direcciones generales del Gobierno de la Ciudad de México", "Solicitud de certificados de residencia"],
        columns: true,
      },
      {
        heading: "Secretaría de Finanzas",
        items: ["Constancias de adeudo", "Prescripciones", "Reducción de impuesto predial", "Reducción de impuestos", "ISAI", "Derechos", "Empadronamientos", "Supervisión de visitas domiciliarias y revisiones fiscales", "Regularización de cuentas prediales", "Registro de avalúos", "Asesoría de la propuesta de declaración de Tesorería para pago de impuesto predial", "Tramitación de levantamientos topográficos", "Altas de cuentas prediales", "Tramitación de descargos de pagos", "Búsqueda de archivos catastrales", "Planos cartográficos", "Tramitación de afirmativa ficta", "Devolución de saldo a favor", "Compensaciones", "Cambios de datos al padrón fiscal y catastral"],
        columns: true,
      },
      {
        heading: "Dependencias de gobierno",
        items: ["Usos de suelo", "Licencias en general (construcción, funcionamiento para establecimientos mercantiles, etc.)", "Uso de suelo por derechos adquiridos", "Regularización de tomas de agua"],
        columns: true,
      },
    ],
  },
  ...rest,
];

export const team = [
  { name: "Lic. Luis Antonio Arias Sánchez", role: "Especialista en Derecho Notarial y Corporativo" },
  { name: "Lic. Elizabeth Corona García", role: "Especialista en Derecho Notarial y Registral" },
  { name: "Lic. Alejandro Arias Sánchez", role: "Especialista en Derecho Civil y Mercantil" },
  { name: "Lic. Adriana Oliver Rangel", role: "Especialista en Derecho Civil y Mercantil" },
  { name: "Lic. Fernando Omar Villeda Chávez", role: "Especialista en Derecho Laboral" },
  { name: "Lic. Victor Armando Franco Bustos", role: "Especialista en Derecho Corporativo" },
];

export const firma = {
  razon: "Arias Sánchez & Villeda Chávez, S.C.",
  perfil: "Arias Sánchez & Villeda Chávez es un despacho de abogados, cuya filosofía reside en dar a cada cliente atención experta y personalizada en las actividades relacionadas con el ámbito jurídico, enfatizando su atención en las diversas áreas del Derecho en que brindamos servicios especializados.",
  mision: "Nuestra principal misión es prestar el consejo legal con la más alta calidad, asumiendo un compromiso con la excelencia en forma profesional porque sabemos que las personas y los negocios requieren tanto de seguridad jurídica, como de rapidez, versatilidad y creatividad.",
  vision: "Con la experiencia y conocimiento de la legislación mexicana convertirnos en la Firma Legal más proactiva, desarrollando estrategias jurídicas que se traduzcan en soluciones creativas y oportunas, satisfaciendo así las necesidades de nuestros clientes.",
  frase: "Las personas y los negocios requieren tanto de seguridad jurídica como de rapidez, versatilidad y creatividad.",
};

export const cobertura = {
  intro: "En virtud de las necesidades de nuestros clientes hemos formado una alianza con diversos profesionistas del Derecho a nivel República Mexicana, quienes eficazmente nos respaldan en las diversas actividades que nos son encomendadas. Así, nuestro ámbito de acción va más allá del Área Metropolitana.",
  zonas: [
    { zona: "Zona norte", entidades: ["Baja California", "Baja California Sur", "Nuevo León", "Chihuahua", "Sonora", "Coahuila"] },
    { zona: "Zona metropolitana", entidades: ["Estado de México", "Ciudad de México"] },
    { zona: "Zona del Bajío", entidades: ["Aguascalientes", "Zacatecas", "San Luis Potosí", "Colima", "Jalisco", "Michoacán", "Guanajuato", "Querétaro", "Durango"] },
    { zona: "Zona centro", entidades: ["Puebla", "Veracruz", "Morelos", "Tlaxcala", "Hidalgo", "Guerrero"] },
    { zona: "Zona sur", entidades: ["Tabasco", "Yucatán", "Chiapas", "Quintana Roo", "Campeche"] },
  ],
};
