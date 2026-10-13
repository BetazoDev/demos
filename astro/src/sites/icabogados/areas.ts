// Texto de https://icabogados.com/areas-de-servicio/ (Wayback 2025-03-03), con erratas corregidas. Se descartan los títulos de plantilla de Avada.
export type Area = {
  /** Sin clave = sin página propia (texto de una sola frase) */
  key?: string;
  title: string;
  /** Frase breve para listas */
  short: string;
  paragraphs: string[];
  /** Titular y descripción SEO de la página */
  seoTitle?: string;
  seoDescription?: string;
};

export const areas: Area[] = [
  {
    key: "amparo",
    title: "Amparos en materia civil, administrativa y mercantil",
    short: "El juicio de amparo se ha vuelto fundamental en el desarrollo empresarial.",
    paragraphs: [
      "Actualmente, el ejercicio del juicio de amparo se ha vuelto fundamental en el desarrollo empresarial, ya que suele ser hasta esta instancia donde las resoluciones se vuelven definitivas y donde el empresario encuentra justicia imparcial contra autoridades o jueces locales. También se ha conformado como un instrumento fundamental contra normas jurídicas y actos inconstitucionales que afectan a las personas y empresas.",
      "IC Abogados se caracteriza por una lista comprobada de éxitos en los juicios de amparo.",
    ],
    seoTitle: "Amparos en materia civil, administrativa y mercantil | IC Abogados, CDMX y Querétaro",
    seoDescription: "Juicio de amparo contra autoridades, jueces locales, normas jurídicas y actos inconstitucionales que afectan a personas y empresas. IC Abogados, Ciudad de México y Querétaro.",
  },
  {
    key: "clausuras-y-sanciones",
    title: "Clausuras y sanciones administrativas",
    short: "Defensa jurídica para liberar clausuras y permitir al empresario seguir en funcionamiento.",
    paragraphs: [
      "Diversas autoridades pueden iniciar procedimientos administrativos y multar y clausurar construcciones y negociaciones permanente o definitivamente.",
      "IC Abogados tiene vasta experiencia en amparos y procedimientos administrativos eficaces. IC Abogados provee la defensa jurídica para liberar dichas clausuras y permitir al empresario seguir en funcionamiento.",
    ],
    seoTitle: "Defensa contra clausuras y sanciones administrativas | IC Abogados",
    seoDescription: "Defensa jurídica para liberar clausuras y multas impuestas por autoridades y permitir a la empresa seguir en funcionamiento. IC Abogados, Ciudad de México y Querétaro.",
  },
  {
    key: "sociedades-con-capital-extranjero",
    title: "Constitución de sociedades con capital extranjero",
    short: "Asesoría para que la inversión extranjera en sociedades mexicanas tenga una sólida base legal.",
    paragraphs: [
      "La inversión extranjera en el país tiene una regulación específica que implica una serie de requisitos jurídicos que tienen que completarse de manera precisa, para que la inversión rinda los frutos planificados.",
      "IC Abogados brinda la asesoría jurídica para que la inversión extranjera en sociedades mexicanas tenga una sólida base legal.",
    ],
    seoTitle: "Constitución de sociedades con capital extranjero en México | IC Abogados",
    seoDescription: "Asesoría jurídica para que la inversión extranjera en sociedades mexicanas tenga una sólida base legal. IC Abogados, Ciudad de México y Querétaro.",
  },
  {
    key: "defensa-contra-autoridades",
    title: "Defensa contra autoridades",
    short: "Procedimientos por falta de licencias, permisos o autorizaciones y procedimientos sancionatorios de servidores públicos.",
    paragraphs: [
      "IC Abogados frecuentemente interviene en procedimientos iniciados por autoridades por falta de licencias, permisos, autorizaciones o por indebido uso de estos últimos, así como en la defensa de procedimientos sancionatorios de servidores públicos.",
      "IC Abogados ejecuta la estrategia jurídica más benéfica en contra de dichos procedimientos. Nuestro récord de éxito es alto, al igual que nuestra honestidad al pronosticar la posibilidad de éxito.",
    ],
    seoTitle: "Defensa contra autoridades y procedimientos sancionatorios | IC Abogados",
    seoDescription: "Defensa en procedimientos iniciados por autoridades por falta de licencias, permisos o autorizaciones y en procedimientos sancionatorios de servidores públicos. IC Abogados.",
  },
  {
    key: "derecho-ambiental",
    title: "Derecho Ambiental",
    short: "Experiencia en el Pacífico y el Caribe mexicanos, áreas naturales protegidas y litigio ambiental.",
    paragraphs: [
      "IC Abogados tiene experiencia acumulada trabajando en el Pacífico y Caribe mexicanos, donde las regulaciones ambientales son mucho más estrictas que en el resto del país. Tenemos conocimiento de las autorizaciones necesarias para desarrollar proyectos en áreas naturales protegidas.",
      "IC Abogados ha intervenido exitosamente en proyectos turísticos, campos de golf, desarrollos residenciales, infraestructura de telecomunicaciones, de gas y energía, además de proyectos privados desarrollados en áreas naturales protegidas.",
      "También tenemos expertos en litigio ambiental. Nuestro récord es notable en cuanto a disputas arregladas mediante convenio con autoridades ambientales y en sentencias favorables cuando los acuerdos no fueron recomendables o posibles.",
    ],
    seoTitle: "Abogados de derecho ambiental en México | IC Abogados",
    seoDescription: "Autorizaciones en áreas naturales protegidas y litigio ambiental en el Pacífico y el Caribe mexicanos: proyectos turísticos, campos de golf, desarrollos, telecomunicaciones, gas y energía.",
  },
  {
    key: "derecho-corporativo",
    title: "Derecho Corporativo",
    short: "Actos corporativos, registro de decisiones en libros y actas, y contratos que brindan seguridad jurídica.",
    paragraphs: [
      "En el desarrollo de una empresa se tienen que realizar diversos actos corporativos, como los cambios de representantes, movimientos accionarios, rendiciones de cuentas, emisión de nuevas clasificaciones de acciones, aumentos y disminuciones de capital, ventas y adquisiciones de partes sociales de la compañía y semejantes.",
      "IC Abogados brinda la asesoría corporativa, el registro debido de decisiones corporativas en libros y actas, así como contratos que brindan seguridad jurídica.",
    ],
    seoTitle: "Abogados corporativos en Ciudad de México y Querétaro | IC Abogados",
    seoDescription: "Asesoría corporativa, registro de decisiones en libros y actas, movimientos accionarios, aumentos y disminuciones de capital y contratos con seguridad jurídica.",
  },
  {
    title: "Derecho Migratorio",
    short: "Autorización para que inversionistas extranjeros desarrollen negocios legales en México.",
    paragraphs: ["Nos cercioramos de que inversionistas extranjeros sean autorizados para desarrollar negocios legales en México y para actuar en representación de corporaciones mexicanas."],
  },
  {
    key: "fusiones-y-adquisiciones",
    title: "Fusiones, adquisiciones y joint ventures",
    short: "Compradores y vendedores en adquisiciones y fusiones por un valor total acumulado de US$50 millones.",
    paragraphs: [
      "IC Abogados S.C. ha participado en adquisiciones representando compradores y vendedores y en fusiones con un valor total acumulado de $50 millones de dólares.",
      "Nuestro conocimiento en fusiones y adquisiciones, combinado con nuestra experiencia en impuestos, derecho administrativo, ambiental y energía, nos brinda una posición única para brindar asesoría integral y estratégica.",
    ],
    seoTitle: "Fusiones, adquisiciones y joint ventures en México | IC Abogados",
    seoDescription: "Representación de compradores y vendedores en adquisiciones y fusiones, con experiencia en impuestos, derecho administrativo, ambiental y energía. IC Abogados.",
  },
  {
    key: "litigio-mercantil-y-civil",
    title: "Litigio Mercantil y Civil",
    short: "Conflictos de negocios, actos mercantiles, societarios, contratos, propiedad y posesión.",
    paragraphs: [
      "Resolvemos a través de procesos jurisdiccionales los conflictos que se suscitan con relación a los negocios, actos mercantiles, conflictos societarios, contratos, propiedad y posesión de las personas y las empresas, buscando desde luego el más aguerrido patrocinio y las negociaciones más convenientes a su patrimonio.",
    ],
    seoTitle: "Litigio mercantil y civil en Ciudad de México y Querétaro | IC Abogados",
    seoDescription: "Conflictos de negocios, actos mercantiles, conflictos societarios, contratos, propiedad y posesión de personas y empresas. IC Abogados, litigio patrimonial.",
  },
  {
    title: "Ilícitos penales por pérdida o daño a la propiedad",
    short: "Servicios legales a compañías que han sufrido daños o pérdida en su propiedad por actos criminales.",
    paragraphs: ["Proveemos de servicios legales a compañías que han sufrido daños o pérdida en su propiedad derivados de actos criminales."],
  },
];
