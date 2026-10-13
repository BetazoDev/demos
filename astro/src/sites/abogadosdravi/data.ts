import type { ImageMetadata } from "astro";
import heroOficina from "./assets/hero-oficina.jpg";
import llaves from "./assets/llaves.jpg";
import tazas from "./assets/tazas.jpg";
import libreta from "./assets/libreta.jpg";

// Todo el texto sale de abogadosdravi.com.mx (home, 8 páginas de servicio, Quiénes somos, Finalidad, Contáctenos, Aviso de privacidad).
// No se replican «éxito garantizado» ni «los únicos que garantizamos»; la lista de servicios de Familiar (copia de Civil) no se reutiliza.
export type Item = { t: string; d?: string };
export type Area = {
  key: string;
  title: string;
  /** Texto corto de la tarjeta */
  lead: string;
  intro: string;
  itemsTitle: string;
  items: Item[];
  closing?: string;
  image?: ImageMetadata;
  alt?: string;
};

export const areas: Area[] = [
  {
    key: "civil",
    title: "Derecho civil",
    lead: "Arrendamiento, contratos, rescisiones, lanzamientos, compraventa y regularización de inmuebles, y daños y perjuicios.",
    intro: "Ofrecemos soluciones legales efectivas para resolver tus problemas en el ámbito civil. Nuestro equipo de abogados especializados te brinda la asesoría y representación necesarias para proteger tus derechos y resolver cualquier conflicto relacionado con bienes, contratos y otras cuestiones legales.",
    itemsTitle: "Nuestros servicios en derecho civil incluyen",
    items: [
      { t: "Arrendamiento en general y especializado", d: "Celebración contractual, asesoría y litigio especializado en materia de arrendamiento de bienes muebles o inmuebles y en general." },
      { t: "Elaboración y asesoramiento de contratos de todo tipo", d: "Elaboración, asesoría, análisis y celebración de contratos especializados y en general, acorde a sus necesidades." },
      { t: "Rescisiones y terminaciones de todo tipo de contratos", d: "Asesoramiento y defensa legal ejerciendo sus derechos y obligaciones contratadas o convenidas vía extrajudicial o judicial." },
      { t: "Cumplimiento forzoso de obligaciones convenidas", d: "Cumplimiento de derechos y obligaciones pactadas (compra-venta, arrendamiento, permuta, prestación de servicios, etc.)." },
      { t: "Lanzamientos", d: "Reivindicación o recuperación de propiedades." },
      { t: "Gestión de compraventa de inmuebles", d: "Asesoramiento e investigación especializada para la adquisición de inmuebles, con la finalidad de evitar fraudes inmobiliarios." },
      { t: "Adjudicación de propiedades", d: "Regularización de bienes para la obtención de documento que avale su propiedad como la escritura pública." },
      { t: "Regularización de derechos y obligaciones", d: "Generación de los documentos que avalan alguna obligación (compraventa, título de propiedad, arrendamiento, etc.)." },
      { t: "Extravío o falta de documentos para acreditar la propiedad", d: "Asesoramiento y defensa para la acreditación de bienes en su posesión y que no pueda acreditar su propiedad." },
      { t: "Daños y perjuicios", d: "Asesoramiento y patrocinio por afectaciones de un tercero a su patrimonio o estado físico o psicológico por medio de alguna acción ilegal." },
    ],
    closing: "Entre otros.",
    image: llaves,
    alt: "Juego de llaves con etiqueta de madera sobre una mesa de roble junto a una ventana",
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    lead: "Divorcios, pensión alimenticia, testamentos y cualquier otro tema relacionado con el derecho familiar.",
    intro: "Nos especializamos en resolver problemas legales relacionados con el derecho familiar, ofreciendo soluciones legales eficaces y personalizadas. Nuestro equipo de abogados está listo para brindarte asesoría y apoyo en una amplia variedad de temas familiares, protegiendo tus derechos e intereses.",
    itemsTitle: "Asesoría en",
    items: [{ t: "Divorcios" }, { t: "Pensión alimenticia" }, { t: "Testamentos" }, { t: "Cualquier otro tema relacionado con el derecho familiar" }],
    closing: "Estamos aquí para ayudarte.",
    image: tazas,
    alt: "Dos tazas de cerámica sobre una mesa de madera junto a una ventana, con luz de mañana",
  },
  {
    key: "laboral",
    title: "Derecho laboral",
    lead: "Despidos injustificados, finiquitos y liquidaciones, Centro de Conciliación Laboral, incapacidad, riesgo de trabajo, IMSS y pensiones.",
    intro: "Somos un equipo especializado en derecho laboral, comprometido con la defensa de tus derechos como trabajador o empleador. Brindamos asesoría y representación legal en casos relacionados con despidos, liquidaciones, pensiones, demandas ante el IMSS e INFONAVIT, y mucho más.",
    itemsTitle: "Nuestros servicios laborales incluyen",
    items: [
      { t: "Despidos injustificados, pagos de finiquitos o liquidaciones", d: "Asesoramiento y litigio respecto a despidos injustificados, finiquitos o liquidaciones, ya sea ante una persona física o moral." },
      { t: "Asesoramiento y litigio en materia laboral burocrática", d: "Respecto a despidos injustificados, finiquitos o liquidaciones, ante instituciones o entes públicos." },
      { t: "Due diligence laboral", d: "Auditoría legal en materia laboral para empresas." },
      { t: "Representación ante el Centro de Conciliación Laboral", d: "Asesoramiento y representación de empresas o personas físicas ante el Centro, ya sea patrón o trabajador." },
      { t: "Gestión y patrocinio para acoso laboral", d: "Asesoramiento y litigio respecto a acoso laboral en su lugar de trabajo." },
      { t: "Liquidaciones o finiquitos de trabajadores", d: "Apoyo y representación para despidos, liquidaciones o finiquitos de trabajadores." },
      { t: "Terminaciones de relación laboral", d: "Asesoramiento y representación de trabajadores para la terminación de su relación laboral ante su patrón." },
      { t: "Elaboración y análisis de contratos laborales", d: "Estudio y asesoramiento de contratos laborales por tiempo determinado o indeterminado." },
      { t: "Incapacidad laboral", d: "Apoyo y representación por incapacidad temporal, parcial o total." },
      { t: "Riesgo de trabajo", d: "Asesoramiento y representación legal por riesgo de trabajo, sea para patrón o trabajador." },
      { t: "Recurso de inconformidad ante el IMSS y litigio por negativa de pensión", d: "Representación para la gestión del procedimiento administrativo para la impugnación de la resolución negativa y su demanda ante el órgano jurisdiccional que corresponda." },
      { t: "Pensión por cesantía, edad avanzada, viudez, etc.", d: "Representación para la gestión del procedimiento administrativo para la impugnación de la resolución negativa de pensión y su demanda ante el órgano jurisdiccional que corresponda." },
      { t: "Cobro de Afore", d: "Apoyo y gestión para el cobro total del Afore por fallecimiento o determinación de pensión del trabajador." },
      { t: "Contrato colectivo de trabajo", d: "Estudio y asesoramiento de contratos colectivos." },
      { t: "Obligaciones patronales", d: "Apoyo y asesoramiento especializado para patrones, sea persona física o moral, para el pleno cumplimiento conforme a la Ley Federal del Trabajo." },
    ],
    closing: "Entre otros.",
    image: heroOficina,
    alt: "Despacho con escritorio de madera, balanza de latón, lámpara encendida y una planta junto a la ventana",
  },
  {
    key: "administrativo",
    title: "Administrativo y fiscal",
    lead: "Juicios de nulidad federales y locales, créditos y resoluciones fiscales del SAT, multas, ISSSTE, negativa ficta y órganos disciplinarios.",
    intro: "Somos especialistas en litigio y asesoría en materia administrativa, brindando representación legal en procedimientos ante tribunales administrativos federales y locales. Nuestra experiencia nos permite impugnar actos de autoridad y proteger sus derechos frente a resoluciones injustas o indebidas emitidas por entidades gubernamentales.",
    itemsTitle: "Nuestros servicios",
    items: [
      { t: "Juicio de nulidad a nivel federal", d: "Nulidad de resoluciones emitidas por entes públicos que sean del conocimiento del Tribunal Federal de Justicia Administrativa." },
      { t: "Juicio de nulidad a nivel local", d: "Nulidad de resoluciones emitidas por entes públicos del conocimiento del Tribunal de Justicia Administrativa de la Ciudad de México o del Estado de México." },
      { t: "Nulidades y prescripciones de créditos fiscales", d: "Asesoramiento y representación para el litigio para la nulidad de resoluciones dictadas por el SAT y créditos fiscales." },
      { t: "Nulidades de requerimientos fiscales", d: "Asesoramiento y gestión legal para la nulidad de actas circunstanciadas o notificaciones del SAT." },
      { t: "Nulidades de resoluciones fiscales", d: "Combate de resoluciones dictadas por el SAT o sus diversas direcciones." },
      { t: "Nulidades por multas a nivel local y federal", d: "Asesoramiento y representación para la nulidad de resoluciones de multas a nivel federal o local." },
      { t: "Recurso de inconformidad ante el ISSSTE y otros organismos", d: "Asesoramiento y representación ante el proceso administrativo del recurso de inconformidad, ya sea ante el ISSSTE u otra dependencia de gobierno a nivel federal." },
      { t: "Juicio por negativa ficta federal y local", d: "Juicio de nulidad por negativa ficta a nivel federal o local." },
      { t: "Gestión y litigio en pensiones ante el ISSSTE", d: "Representación y asesoramiento para la gestión del procedimiento administrativo para la obtención de pensión, ya sea por cesantía y edad avanzada, viudez, entre otras." },
      { t: "Litigio y asesoramiento ante órganos disciplinarios gubernamentales", d: "Representación y asesoramiento ante órganos disciplinarios u órganos análogos, ya sea en el ámbito federal o local." },
    ],
    image: libreta,
    alt: "Libreta abierta con pluma fuente y lentes sobre un escritorio de madera, junto a una balanza de latón",
  },
  {
    key: "mercantil",
    title: "Derecho mercantil",
    lead: "Sociedades mercantiles, actas de asamblea, poderes, due diligence, contratos, recuperación de cartera vencida y cobro de títulos de crédito.",
    intro: "Contamos con un equipo de abogados mercantiles especializados en ofrecer soluciones legales efectivas para empresas y emprendedores. Brindamos asesoría y apoyo jurídico en una amplia variedad de cuestiones legales, siempre con el objetivo de proteger sus intereses y dar seguridad jurídica a sus operaciones comerciales.",
    itemsTitle: "Servicios legales en derecho mercantil",
    items: [
      { t: "Constitución, transformación y disolución de sociedades mercantiles", d: "Asesoramiento, apoyo y defensa dentro del ámbito legal para personas morales." },
      { t: "Actas de asamblea extraordinarias y ordinarias", d: "Apoyo jurídico, gestión y asesoramiento en asambleas ordinarias y extraordinarias de la sociedad que representa, con los formalismos que la ley exige." },
      { t: "Poderes notariales y simples", d: "Apoyo legal y asesoramiento para otorgamiento, revisión y revocación de cualquier poder notarial." },
      { t: "Due diligence legal", d: "Auditoría legal para empresas para su adquisición o venta." },
      { t: "Contratos mercantiles", d: "Elaboración, análisis y cumplimiento legal de contratos especializados en materia comercial, acorde a las necesidades que usted requiera o su representada." },
      { t: "Recuperación de cartera vencida", d: "Apoyo especializado para la recuperación de adeudos con clientes morosos extrajudicial y judicialmente." },
      { t: "Cobro de pagarés, cheques, letras de cambio, facturas y más", d: "Cobro judicial de obligaciones comerciales y cualquier título de crédito conforme a la normatividad aplicable." },
      { t: "Trámites y quejas ante la PROFECO", d: "Apoyo especializado y asesoramiento en quejas ante la Procuraduría Federal del Consumidor, así también demandas mercantiles con base en la falta de conciliación por la relación cliente-proveedor." },
    ],
    closing: "Entre otros.",
    image: libreta,
    alt: "Libreta abierta con pluma fuente y lentes sobre un escritorio de madera, junto a una balanza de latón",
  },
  {
    key: "amparos",
    title: "Amparos",
    lead: "Amparo directo e indirecto, recurso de queja, revisión, amparo adhesivo y revisión adhesiva en materias civil, familiar, mercantil, laboral y administrativa.",
    intro: "Somos expertos en juicios de amparo en materias civil, familiar, mercantil, laboral y contencioso administrativo. Defendemos sus derechos frente a actos de autoridad que vulneren sus garantías constitucionales, brindándole asesoría legal especializada y representación ante los tribunales.",
    itemsTitle: "Nuestros servicios",
    items: [
      { t: "Amparo directo", d: "Materias civil, familiar, mercantil, laboral y contencioso administrativo." },
      { t: "Amparo indirecto", d: "Materias civil, familiar, mercantil, laboral y contencioso administrativo." },
      { t: "Recurso de queja", d: "Asesoramiento y representación para combate de inadmisiones de amparos, suspensiones provisionales o de plano, inadmisión de fianzas o contrafianza, entre otros." },
      { t: "Recurso de revisión de amparo", d: "Asesoramiento y representación de resoluciones dictadas en amparo directo o indirecto o revisión fiscal." },
      { t: "Amparo adhesivo", d: "Asesoramiento y apoyo en materias civil, familiar, mercantil, laboral y contencioso administrativo." },
      { t: "Revisión adhesiva", d: "Asesoramiento y apoyo en materias civil, familiar, mercantil, laboral y contencioso administrativo." },
    ],
    closing: "Entre otros.",
    image: libreta,
    alt: "Libreta abierta con pluma fuente y lentes sobre un escritorio de madera, junto a una balanza de latón",
  },
  {
    key: "otros",
    title: "Otros servicios jurídicos",
    lead: "Exhortos, ejecución de sentencias internacionales, trámites, auditoría legal, investigación de antecedentes, análisis de riesgos y proyecciones legales.",
    intro: "Ofrecemos una amplia gama de servicios legales diseñados para asesorar, gestionar y representar a nuestros clientes en diversos trámites y procedimientos legales. Nuestro equipo de especialistas brinda soluciones efectivas para cada situación.",
    itemsTitle: "Nuestros servicios",
    items: [
      { t: "Diligencia de exhortos de diversas entidades", d: "Diligencia y apoyo de exhortos en la Ciudad de México o Estado de México." },
      { t: "Ejecución de sentencias internacionales", d: "Apoyo y asesoramiento en el cumplimiento de sentencias dictadas por órganos jurisdiccionales del extranjero para su cumplimiento en la CDMX o Estado de México." },
      { t: "Trámites ante órganos gubernamentales o privados", d: "Apoyo y gestión para trámites ante instituciones gubernamentales en la CDMX o Estado de México." },
      { t: "Auditoría legal", d: "Análisis y estudio de expedientes, juicios, recursos, prestaciones de servicios legales, etc." },
      { t: "Investigación de antecedentes legales", d: "Apoyo para la investigación de antecedentes de demandas de personas físicas o morales." },
      { t: "Análisis de riesgos legales", d: "Análisis, asesoramiento y estudio de juicios, expedientes, bienes, contratos, etc." },
      { t: "Proyecciones legales", d: "Análisis y asesoramiento de juicios y bienes, para su efecto legal a corto, mediano o largo plazo, y las consecuencias que puede producir para los fines que requiera." },
    ],
    image: heroOficina,
    alt: "Despacho con escritorio de madera, balanza de latón, lámpara encendida y una planta junto a la ventana",
  },
];

// Póliza Jurídica de Arrendamiento
export const poliza = {
  title: "Póliza Jurídica de Arrendamiento",
  lead: "Contrato de prestación de servicios legales para arrendadores, en dos modalidades: Básica y Completa.",
  intro: "Ofrecemos una solución jurídica integral para arrendadores que desean arrendar con confianza y respaldo legal. Nuestra Póliza Jurídica de Arrendamiento es un contrato de prestación de servicios legales que proporciona seguridad al establecer un vínculo entre arrendador y arrendatario.",
  libera: "Con nuestras pólizas te liberas de las complicaciones de investigación, elaboración de contratos, validación de información y seguimiento legal. Nos encargamos de todo el proceso para que tu inmueble esté protegido desde el primer día.",
  modalidades: "Contamos con dos modalidades: Póliza Jurídica Básica y Póliza Jurídica Completa. Ambas están diseñadas para proteger tu propiedad y tus ingresos, con la diferencia de que la Póliza Completa incluye acciones legales como desalojo, recuperación de rentas impagas y más.",
  incluye: [
    "Investigación exhaustiva del arrendatario y aval",
    "Validación de identidad y documentación",
    "Elaboración de contrato profesional personalizado",
    "Firma ante notario (según modalidad)",
    "Acompañamiento legal en todo el arrendamiento",
    "Protección contra incumplimientos, rentas no pagadas y uso indebido del inmueble",
  ],
  soloCompleta: "Gestión de desalojo y recuperación de rentas",
  diferencias: ["No cobramos deducibles", "No hay cargos extra dentro de la Ciudad de México"],
  costos: "Los costos son anuales y varían según el monto de la renta mensual, con posibilidad de cotizaciones especiales para rentas superiores a $50,000 MXN.",
  image: llaves,
  alt: "Juego de llaves con etiqueta de madera sobre una mesa de roble junto a una ventana",
};

export const firma = {
  quienes: [
    "Somos un equipo de abogados altamente capacitados y con una sólida trayectoria profesional. Nuestra experiencia nos permite analizar de manera ágil y precisa su situación jurídica, brindándole el apoyo necesario para alcanzar la solución más efectiva a su caso.",
    "Somos un despacho con una visión contemporánea, respaldada por años de experiencia en las áreas legales que más le importan. Trabajamos con madurez, honestidad y absoluta confidencialidad, ofreciéndole la confianza y seguridad que usted necesita en cada etapa del proceso legal.",
    "Cada consulta que recibimos es evaluada y estudiada en detalle por un equipo de más de tres especialistas, con un análisis profundo y una respuesta clara, precisa y orientada a resolver de manera práctica sus problemas legales.",
    "Nos comprometemos a ser su primer aliado, desde el asesoramiento inicial hasta el acompañamiento en casos que no requieran una intervención legal compleja. Estamos aquí para apoyarle con soluciones personalizadas y efectivas.",
  ],
  etica: "Abogados DRAVI es un despacho jurídico que busca la defensa y apoyo legal adecuados, el profesionalismo y la honestidad que sus clientes merecen, en una sociedad que día a día crece con ritmo acelerado y donde se requiere de profesionales altamente calificados para resolver su problemática. Seguimos la ideología «la Ley es una aliada y nosotros el instrumento».",
  finalidadPregunta: "¿Está defendiendo su propia causa pero desconoce las leyes específicas aplicables y los procedimientos jurídicos? Es probable que esto comprometa el resultado de su asunto.",
  valor: [
    "Los problemas legales suelen surgir en los momentos más inesperados. Ofrecemos servicios diseñados para brindarle la solución justa y adecuada a sus necesidades legales. Desde el momento en que intervenimos, trabajamos para sacarlo de apuros y resolver su situación de manera eficiente.",
    "Evaluamos su caso de manera justa, considerando factores como el tiempo, el grado de complejidad, los intereses en disputa y los gastos generados por los trámites. Además, dejamos perfectamente claros los honorarios para dar transparencia en todo momento.",
    "Formalizamos nuestra relación profesional mediante un contrato de prestación de servicios, que incluye un desglose detallado de los gastos. De esta manera, evitamos que usted enfrente riesgos asociados con prácticas desleales, como el coyotaje, o con abogados sin la preparación adecuada para litigar.",
  ],
};

export const resenas = [
  { text: "Me gustó mucho sus servicios, me ayudó a solucionar mi problema. Yo lo recomiendo.", author: "Valery Huerta Rosello" },
  { text: "Solucionaron mi problema.", author: "yeraldin Mejia Rodriguez" },
  { text: "Estoy en trámite de pensión y vamos en tiempo, gracias al Licenciado.", author: "Luna Castillo" },
];

export const photos = { heroOficina, llaves, tazas, libreta };
