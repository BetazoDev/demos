// Todo el texto sale de scyaa.com (Áreas de Experiencia y sus subpáginas, Acerca de), con erratas corregidas y sin el nombre
// anterior «Salcedo Caballero Yamazaki» ni las promesas de resultado del tema («ganar es más fácil de lo que usted piensa»).
export type Group = { title: string; items: string[] };
export type Qa = { q: string; a: string };
export type Area = {
  key: string;
  title: string;
  /** Texto corto para filas */
  short: string;
  /** Texto de cabecera y metadescripción */
  lead: string;
  paras?: string[];
  groups?: Group[];
  faq?: Qa[];
  seo: string;
};

export const areas: Area[] = [
  {
    key: "corporativo",
    title: "Corporativo",
    seo: "abogados corporativos para empresas en la Ciudad de México",
    short: "Constitución, transformación, fusión, escisión, disolución y liquidación de sociedades.",
    lead: "Somos especialistas en la constitución, transformación, fusión, escisión, disolución y liquidación de sociedades, sucursales, oficinas de representación y agrupaciones de interés económico.",
    paras: [
      "Asesoramos, desde un punto de vista fiscal y legal, sobre la forma societaria más conveniente según las necesidades del cliente.",
      "Brindamos asesoría legal en la adquisición, enajenación, consolidación, fusión o escisión de toda clase de personas morales y organizaciones, fideicomisos, auditorías legales, y en el arrendamiento, adquisición, enajenación y constitución de garantías sobre toda clase de bienes muebles e inmuebles.",
      "Hemos representado a diversas empresas en todo tipo de operaciones y les proporcionamos asesoría constante en sus actividades cotidianas.",
      "Asesoramos a las empresas desde su constitución: usamos estrategias legales y preparamos y negociamos la documentación constitutiva. Nuestros servicios continúan con la elaboración, mantenimiento y conservación de libros y documentos corporativos.",
    ],
  },
  {
    key: "laboral",
    title: "Laboral",
    seo: "abogados laboralistas para empresas en la Ciudad de México",
    short: "Consultoría y planeación laboral, contratos, relaciones sindicales y seguridad social.",
    lead: "Consultoría legal laboral para las áreas de recursos humanos, tanto en asuntos cotidianos como estratégicos.",
    paras: [
      "Contamos con vasta experiencia en las necesidades de las áreas de recursos humanos y su papel estratégico en las organizaciones.",
      "Nuestro consejo contribuye a maximizar el potencial productivo de las empresas, minimizando los riesgos laborales y optimizando el manejo del recurso humano.",
    ],
    groups: [
      {
        title: "Algunos de nuestros ámbitos de acción",
        items: [
          "Atención de procedimientos administrativos y judiciales por demandas laborales",
          "Contratos laborales individuales para las distintas áreas de negocios",
          "Contratación, control y protección de outsourcing",
          "Reglamento interno de trabajo, comisiones y otras obligaciones básicas",
          "Liquidaciones y pagos de contingencias laborales",
          "Contratos colectivos y manejo de relaciones sindicales",
          "Seguridad social",
          "Formatos: cláusulas, cartas de sanción, cartas de despido y otros",
          "Planeación e implementación de esquemas de compensación variable para ejecutivos",
        ],
      },
    ],
    faq: [
      { q: "¿Podemos cambiar las utilidades de los trabajadores por un bono de productividad?", a: "No, son cosas totalmente independientes. Las utilidades no pueden condicionarse a otro requisito que el de asistencia y nivel salarial, conforme a las reglas establecidas por la Ley Federal del Trabajo. Puede establecerse adicionalmente un bono de productividad, pero en todo caso tendrían que pagarse los dos." },
      { q: "¿Los directivos pueden renunciar al cobro de horas extras?", a: "Técnicamente, en México todos los empleados, sin importar el nivel, tienen los mismos derechos y obligaciones. Por ello todos tienen derecho al cobro de horas extras, desde el director general hasta el ayudante de intendencia, y no es válida la renuncia a su cobro, aun a cambio de una prestación directa distinta." },
      { q: "¿Una empresa que ha acumulado pérdidas en varios ejercicios y tiene utilidad en otro que no supera las pérdidas tiene que repartir utilidades a los trabajadores?", a: "Sí. Las utilidades son exclusivamente por el ejercicio fiscal en curso y no pueden compensarse con pérdidas de otros ejercicios: aunque fiscalmente sí se haga esta compensación, para efectos del pago a los trabajadores esta figura no debe hacerse." },
    ],
  },
  {
    key: "migratorio",
    title: "Migratorio",
    seo: "abogados migratorios para empresas con personal extranjero",
    short: "Representación ante el Instituto Nacional de Migración y la SRE para el personal extranjero.",
    lead: "Su representación ante el Instituto Nacional de Migración, en todo lo que refiere a la situación migratoria del personal extranjero de su empresa.",
    paras: [
      "Nos encargamos de que todos los colaboradores de la empresa tengan garantizada su estancia legal en el territorio nacional, así como los permisos y autorizaciones necesarias para realizar las actividades que tienen encomendadas.",
      "El alcance de nuestros servicios no se limita a los colaboradores: vigilamos que la situación migratoria de sus familias y dependientes se encuentre conforme a la normatividad vigente.",
      "Tenemos presentes las obligaciones y necesidades de las empresas para que cumplan con las leyes migratorias y laborales aplicables a la contratación de extranjeros, manteniendo actualizados sus registros ante las instituciones competentes en materia migratoria.",
    ],
    groups: [
      {
        title: "Los servicios más relevantes",
        items: [
          "Asesoría en la obtención de la calidad migratoria para realizar actividades en territorio nacional",
          "Autorizaciones para la internación de extranjeros con objeto de trabajar, invertir, estudiar, prestar asesoría técnica, sostener pláticas de negocios o vivir bajo dependencia económica de familiares",
          "Naturalización de extranjeros",
          "Permisos necesarios para nupcias, adopciones, salidas temporales, adquisición de inmuebles, entre otros",
          "Representación ante el Instituto Nacional de Migración y la Secretaría de Relaciones Exteriores",
        ],
      },
    ],
  },
  {
    key: "contratos",
    title: "Contratos",
    seo: "abogados para la elaboración y revisión de contratos",
    short: "Elaboración y revisión de contratos con asesoría legal y fiscal.",
    lead: "Un servicio ágil, confiable y honesto en la revisión y preparación de los acuerdos de negocios de nuestros clientes.",
    paras: [
      "Es un área de gran importancia y dinamismo dentro de la firma. No solo revisamos y preparamos los acuerdos de negocios: prestamos la asesoría legal y fiscal indispensable para garantizar la elección del mejor vehículo, que brinde el mejor escenario posible.",
      "Contamos con un equipo de abogados y asesores comprometidos en analizar los aspectos legales y comerciales a la luz de las normas nacionales e internacionales, para que nuestros clientes hagan negocios que garanticen el éxito de sus planeaciones y eviten conflictos futuros.",
      "Nuestros abogados también han participado en las estrategias para dar por terminados contratos otorgados en contravención de los intereses de nuestros clientes, de modo que puedan seguir haciendo negocios en las distintas áreas minimizando los riesgos asociados.",
    ],
  },
  {
    key: "litigio",
    title: "Litigio",
    seo: "abogados litigantes civiles, mercantiles, laborales y administrativos",
    short: "Demandas y denuncias; negociación, mediación, conciliación y arbitraje.",
    lead: "Atendemos los procedimientos litigiosos, demandas y denuncias, para hacer valer el cumplimiento de los derechos de nuestros clientes.",
    paras: [
      "Nuestra participación busca garantizar el cumplimiento del plan de negocios de nuestros clientes, exigiendo el respeto de sus derechos e impidiendo que terceros busquen generar falsas obligaciones.",
    ],
    groups: [
      {
        title: "Atendemos",
        items: [
          "Procedimientos alternativos para la solución de controversias: negociación, mediación, conciliación y arbitraje",
          "Juicios civiles, mercantiles, laborales y administrativos",
          "Procedimientos contenciosos ante la Procuraduría Federal del Consumidor",
          "Procedimientos contenciosos ante las distintas procuradurías, comisiones y organismos gubernamentales",
        ],
      },
    ],
  },
  {
    key: "inmobiliario",
    title: "Inmobiliario",
    seo: "abogados inmobiliarios en la Ciudad de México",
    short: "Seguridad en adquisiciones, construcciones y enajenaciones; permisos y autorizaciones.",
    lead: "Nuestro principal objetivo es garantizar a nuestros clientes plena seguridad en sus operaciones y transacciones inmobiliarias.",
    paras: [
      "Garantizamos las adquisiciones, construcciones y enajenaciones inmobiliarias y, además, la obtención y el litigio de los diversos permisos y autorizaciones necesarias para realizar las actividades inmobiliarias planeadas.",
    ],
  },
  {
    key: "propiedad-intelectual",
    title: "Patentes, marcas y derechos de autor",
    seo: "abogados de propiedad intelectual, marcas y patentes",
    short: "Obtención y renovación de registros de marcas, patentes y nombres comerciales.",
    lead: "Área especializada en la atención de los derechos de propiedad intelectual de nuestros clientes.",
    paras: [
      "Contamos con especialistas que garantizan la correcta protección de sus derechos por invenciones, marcas o autorías, llevando los procedimientos administrativos y judiciales necesarios para garantizar su respeto.",
    ],
    groups: [
      { title: "Asesoramos en", items: ["Obtención y renovación de los registros de marcas, patentes y nombres comerciales", "Derechos de propiedad industrial o artística"] },
    ],
  },
  {
    key: "recuperacion-de-cartera",
    title: "Recuperación de cartera",
    seo: "abogados para recuperación de cartera vencida",
    short: "Visitas, procedimientos alternativos y requerimientos ante fedatarios o judiciales.",
    lead: "Procedimientos ágiles y directos para buscar la pronta recuperación de las cuentas por cobrar de nuestros clientes.",
    paras: [
      "Un vasto equipo de profesionales lleva a cabo visitas, procedimientos alternativos y requerimientos ante fedatarios o judiciales, a efecto de obtener lo antes posible el pago de las obligaciones a favor de nuestros socios de negocios.",
    ],
  },
];

export const administrativo = "Preparación, desarrollo, negociación y seguimiento de todo tipo de procesos administrativos ante cualquier autoridad federal, local o municipal.";

export const waLink = (intro: string) => `https://wa.me/525552646256?text=${encodeURIComponent(intro)}`;
