import elias from "./assets/elias-roberto-torres-garcia.jpg";
import stephanie from "./assets/stephanie-ballesteros-suarez.jpg";
import abdir from "./assets/abdir-de-jesus-gonzalez-morales.jpg";
import pasillo from "./assets/pasillo.jpg";
import ciudad from "./assets/ciudad-noche.jpg";
import hero from "./assets/hero-escritorio.jpg";

// Todo el texto sale de torresytorreslitigacion.mx (home, 7 páginas de servicio, La Firma, CDMX). Se corrigen erratas; no se agrega nada.
export type Faq = { q: string; a: string };
export type Area = {
  key: string;
  group: "personas" | "organizaciones";
  title: string;
  /** Texto corto de la tarjeta (el que publica el sitio) */
  lead: string;
  /** Titular secundario de la página del servicio */
  kicker: string;
  paragraphs: string[];
  why: string;
  casesTitle: string;
  cases: string[];
  scope: string[];
  faq: Faq[];
  faqTitle: string;
};

export const areas: Area[] = [
  {
    key: "defensa-penal",
    group: "personas",
    title: "Defensa penal",
    lead: "Intervenimos desde los primeros actos de investigación hasta las audiencias y recursos, con una estrategia construida a partir de los hechos, los riesgos y la situación procesal.",
    kicker: "Defensa penal estratégica en Ciudad de México",
    paragraphs: [
      "Un asunto penal puede afectar de forma inmediata la libertad, el patrimonio, la reputación profesional y la estabilidad familiar de una persona. Por eso, la defensa no debe esperar a que el problema esté judicializado: conviene intervenir desde el primer citatorio, acto de investigación, detención, notificación o señalamiento, para entender el alcance real del riesgo y tomar decisiones con información clara.",
      "En Grupo Roberto Torres & Torres diseñamos estrategias de defensa penal a partir del análisis de los hechos, la carpeta de investigación, los datos de prueba disponibles, la actuación de la autoridad y la situación personal o empresarial del cliente. El objetivo es construir una posición jurídica sólida desde el inicio, cuidar el debido proceso, preparar comparecencias y audiencias, y anticipar escenarios como medidas cautelares, vinculación a proceso, acuerdos, salidas alternas, juicio oral o recursos.",
      "La atención es directa, confidencial y estratégica. Revisamos cada caso con enfoque técnico y práctico para definir qué conviene hacer, qué información debe preservarse, qué riesgos existen y cuáles son los siguientes pasos ante el Ministerio Público, jueces de control o tribunales. También orientamos a familiares, directivos o representantes de empresas cuando necesitan actuar rápido y con prudencia frente a una investigación penal.",
    ],
    why: "Declarar, entregar información o comparecer sin conocer la carpeta y los riesgos procesales puede limitar opciones posteriores de defensa.",
    casesTitle: "Casos que requieren orientación especializada",
    cases: ["Detención o posible orden de aprehensión", "Citatorios y comparecencias ante el Ministerio Público", "Investigaciones en las que una persona aparece como imputada", "Audiencia inicial, vinculación a proceso y medidas cautelares", "Preparación de defensa para etapas intermedia y de juicio oral", "Recursos y revisión de resoluciones penales"],
    scope: ["Análisis inicial de hechos, documentos y antecedentes", "Representación ante autoridades ministeriales y judiciales", "Diseño de teoría del caso y estrategia probatoria", "Preparación y acompañamiento en audiencias", "Evaluación de riesgos inmediatos y escenarios procesales", "Comunicación directa sobre avances y decisiones relevantes"],
    faqTitle: "Dudas sobre defensa penal",
    faq: [
      { q: "¿Atienden asuntos penales urgentes?", a: "Sí. Cuando existe detención, citatorio, audiencia próxima o riesgo inmediato, conviene solicitar orientación cuanto antes para identificar los primeros pasos." },
      { q: "¿La consulta garantiza un resultado?", a: "No. Ningún resultado puede garantizarse. La consulta permite revisar información inicial, explicar riesgos y definir una ruta jurídica posible." },
      { q: "¿La atención es confidencial?", a: "Sí. La información se maneja con discreción y responsabilidad profesional desde el primer contacto." },
    ],
  },
  {
    key: "carpetas-de-investigacion",
    group: "personas",
    title: "Carpetas de investigación",
    lead: "Revisamos el contexto de la investigación y participamos como defensa o asesoría jurídica, según la posición procesal y las necesidades del asunto.",
    kicker: "Defensa y asesoría en carpetas de investigación",
    paragraphs: [
      "La carpeta de investigación concentra actos ministeriales, entrevistas, documentos, dictámenes, registros y datos de prueba que pueden definir si un asunto se archiva, continúa en investigación o se judicializa. Su integración no siempre es evidente para quien recibe un citatorio o se entera de una denuncia, por lo que conviene revisar el contexto antes de declarar, entregar información o asumir una postura procesal.",
      "Intervenimos desde los primeros actos de investigación para orientar a personas citadas, denunciantes, víctimas, testigos, imputados o representantes de empresas que necesitan acudir ante el Ministerio Público con preparación. La defensa o asesoría jurídica permite identificar riesgos, cuidar derechos, ordenar la información disponible y evitar comparecencias improvisadas que puedan generar contradicciones o limitar opciones posteriores.",
      "El servicio puede incluir revisión de actuaciones, análisis de documentos, preparación para comparecencias, aportación de datos de prueba, solicitud de diligencias y seguimiento de acuerdos ministeriales. También ayudamos a valorar si existen omisiones, actos que deban impulsarse o elementos que convenga preservar para una posible judicialización, una salida alterna o una estrategia de defensa en etapas posteriores.",
    ],
    why: "Ignorar un citatorio o comparecer sin preparación puede generar consecuencias procesales y dejar sin atender información relevante para la defensa.",
    casesTitle: "Casos que requieren orientación especializada",
    cases: ["Recepción de un citatorio ministerial", "Comparecencia como imputado, denunciante, víctima o testigo", "Investigación iniciada sin claridad sobre su alcance", "Necesidad de solicitar diligencias o aportar datos de prueba", "Revisión de omisiones o actuaciones dentro de la carpeta", "Preparación para una posible judicialización"],
    scope: ["Orientación previa a comparecencias", "Revisión y análisis de actuaciones disponibles", "Aportación de datos de prueba", "Solicitud de actos de investigación y diligencias", "Acompañamiento ante el Ministerio Público", "Preparación de estrategia para etapas posteriores"],
    faqTitle: "Dudas sobre carpetas de investigación",
    faq: [
      { q: "¿Pueden acompañarme a una comparecencia?", a: "Sí. Primero se revisa el carácter de la comparecencia y la información disponible para preparar la intervención." },
      { q: "¿Pueden solicitar actos de investigación?", a: "Dependiendo de la posición procesal y del caso, pueden proponerse diligencias y aportarse datos de prueba pertinentes." },
      { q: "¿Atienden tanto defensa como asesoría a víctimas?", a: "El despacho puede evaluar ambas posiciones. El alcance específico se define después de revisar el caso y posibles conflictos de interés." },
    ],
  },
  {
    key: "proceso-penal-y-juicios-orales",
    group: "personas",
    title: "Proceso penal y juicios orales",
    lead: "Preparamos cada audiencia con atención a la teoría del caso, los datos de prueba, la argumentación jurídica y las consecuencias de cada decisión procesal.",
    kicker: "Litigación en proceso penal y juicios orales",
    paragraphs: [
      "El proceso penal acusatorio exige preparación técnica, claridad estratégica y capacidad de respuesta en audiencia. Cada etapa tiene objetivos, cargas y consecuencias distintas: control de detención, audiencia inicial, vinculación a proceso, medidas cautelares, investigación complementaria, etapa intermedia, juicio oral y recursos. Actuar sin una estrategia definida puede afectar la libertad, el patrimonio y la reputación desde los primeros actos judiciales.",
      "Trabajamos la defensa a partir de una teoría del caso construida con hechos verificables, datos de prueba, antecedentes de la carpeta, riesgos procesales y objetivos concretos para cada audiencia. La preparación incluye análisis de imputación, argumentos jurídicos, estrategia probatoria, debate de medidas cautelares, admisión o exclusión de medios de prueba, interrogatorio, contrainterrogatorio y alegatos de apertura o clausura cuando el asunto llega a juicio oral.",
      "El acompañamiento busca que cada decisión procesal tenga sentido dentro de una ruta de defensa. Revisamos escenarios, explicamos consecuencias, preparamos intervenciones ante juez de control o tribunal de enjuiciamiento y damos seguimiento a resoluciones o recursos procedentes. La prioridad es anticipar riesgos, sostener una defensa ordenada y proteger los derechos de la persona durante todo el procedimiento.",
    ],
    why: "Una audiencia sin preparación puede afectar la libertad, las medidas cautelares, la admisión de pruebas y las opciones disponibles para etapas posteriores.",
    casesTitle: "Etapas en las que intervenimos",
    cases: ["Control de detención y audiencia inicial", "Formulación de imputación y vinculación a proceso", "Debate de medidas cautelares", "Investigación complementaria", "Audiencia intermedia y exclusión de pruebas", "Juicio oral y recursos procedentes"],
    scope: ["Planeación de teoría del caso", "Argumentación en audiencias", "Preparación de interrogatorios y contrainterrogatorios", "Análisis y estrategia de medios de prueba", "Alegatos de apertura y clausura", "Seguimiento de resoluciones y recursos"],
    faqTitle: "Dudas sobre proceso penal y juicios orales",
    faq: [
      { q: "¿Intervienen desde la audiencia inicial?", a: "Sí. El despacho puede intervenir desde etapas tempranas o asumir la defensa en una etapa posterior, previa revisión del expediente." },
      { q: "¿Qué es la teoría del caso?", a: "Es la explicación jurídica y probatoria que organiza los hechos, la posición de la defensa y la forma en que se sostendrá durante el proceso." },
      { q: "¿También preparan recursos?", a: "Sí. Se analiza la procedencia de los medios de impugnación según la resolución, los plazos y los antecedentes del asunto." },
    ],
  },
  {
    key: "amparo-penal",
    group: "personas",
    title: "Amparo penal",
    lead: "Analizamos actos de autoridad y resoluciones penales para determinar si existe una vía constitucional procedente y qué efectos podría tener.",
    kicker: "Juicio de amparo en materia penal",
    paragraphs: [
      "El amparo penal es una vía constitucional para cuestionar actos de autoridad que pueden afectar la libertad, la seguridad jurídica, el debido proceso o derechos fundamentales dentro de una investigación o procedimiento penal. No todos los actos son combatibles por la misma vía ni en el mismo momento, por lo que la primera tarea es identificar con precisión qué autoridad actuó, qué resolvió u omitió, y qué efectos produce esa actuación.",
      "La estrategia de amparo requiere analizar el acto reclamado, los plazos, la definitividad, la etapa procesal, los antecedentes del caso y la posibilidad de solicitar suspensión provisional o definitiva. También debe revisarse si existen recursos ordinarios pendientes, si el amparo sería directo o indirecto, y qué argumentos constitucionales pueden sostenerse sin debilitar la defensa penal principal.",
      "El servicio puede incluir evaluación de procedencia, preparación de demanda, conceptos de violación, solicitud y seguimiento de suspensión, atención de requerimientos y acompañamiento ante órganos jurisdiccionales federales. Buscamos que el amparo se use como una herramienta técnica y oportuna, alineada con la estrategia general del asunto penal y sin generar expectativas que la vía constitucional no puede cumplir.",
    ],
    why: "Los plazos de amparo pueden ser breves y la vía no sustituye automáticamente los recursos ordinarios. Una evaluación tardía puede cerrar alternativas.",
    casesTitle: "Casos que requieren orientación especializada",
    cases: ["Órdenes, actos o determinaciones de autoridad con posible afectación a derechos", "Resoluciones dictadas dentro de procedimientos penales", "Necesidad de solicitar suspensión provisional o definitiva", "Sentencias o resoluciones que podrían combatirse en amparo directo", "Omisiones de autoridad con relevancia constitucional", "Revisión de estrategias federales de defensa"],
    scope: ["Identificación del acto reclamado", "Análisis de procedencia y plazos", "Preparación de demanda de amparo", "Solicitud y seguimiento de suspensión", "Formulación de conceptos de violación", "Seguimiento ante órganos jurisdiccionales federales"],
    faqTitle: "Dudas sobre amparo penal",
    faq: [
      { q: "¿Todo acto penal puede combatirse por amparo?", a: "No. Deben revisarse procedencia, definitividad, interés jurídico o legítimo, plazos y características del acto." },
      { q: "¿Qué diferencia hay entre amparo directo e indirecto?", a: "En términos generales, el directo se relaciona con sentencias definitivas y ciertas resoluciones que ponen fin al juicio; el indirecto atiende otros actos previstos por la ley." },
      { q: "¿La suspensión siempre se concede?", a: "No. Depende del acto, los requisitos legales y la valoración del órgano jurisdiccional." },
    ],
  },
  {
    key: "penal-financiero",
    group: "organizaciones",
    title: "Penal financiero",
    lead: "Atendemos asuntos donde convergen operaciones financieras, documentación corporativa, flujos de recursos, posibles fraudes y responsabilidades penales.",
    kicker: "Defensa y consultoría en derecho penal financiero",
    paragraphs: [
      "Los asuntos de derecho penal financiero combinan riesgos penales, trazabilidad de operaciones, documentación contable, flujos de recursos, responsabilidades internas y posibles consecuencias patrimoniales. Pueden surgir por señalamientos de fraude, lavado de dinero, administración indebida, uso irregular de recursos, operaciones inusuales o conflictos entre socios, directivos, clientes, proveedores o instituciones financieras.",
      "La estrategia requiere ordenar cronológicamente los hechos, identificar participantes, revisar documentos, contratos, transferencias, comunicaciones y antecedentes operativos antes de responder ante autoridades o terceros. En este tipo de asuntos, una explicación incompleta o una reacción precipitada puede generar contradicciones, dificultar la acreditación del origen y destino de recursos o aumentar la exposición de personas y organizaciones.",
      "Acompañamos a personas, directivos, empresas e instituciones financieras en defensa penal y consultoría preventiva. El trabajo puede incluir análisis jurídico de operaciones, revisión de documentación sensible, evaluación de riesgos, preparación de comparecencias, coordinación con información financiera y diseño de rutas de respuesta ante investigaciones o contingencias penales relacionadas con la actividad económica.",
    ],
    why: "Responder sin integrar la documentación financiera y la secuencia operativa puede producir contradicciones o impedir explicar adecuadamente el origen y destino de recursos.",
    casesTitle: "Casos que requieren orientación especializada",
    cases: ["Investigaciones relacionadas con lavado de dinero", "Fraudes financieros o patrimoniales", "Operaciones inusuales o sensibles bajo revisión", "Conflictos derivados de administración o disposición de recursos", "Señalamientos relacionados con documentación financiera", "Contingencias penales para directivos o responsables de operación"],
    scope: ["Análisis jurídico de operaciones y antecedentes", "Defensa ante autoridades ministeriales y judiciales", "Coordinación con información financiera y documental", "Evaluación de riesgos para personas y organizaciones", "Estrategia en investigaciones complejas", "Consultoría preventiva penal financiera"],
    faqTitle: "Dudas sobre penal financiero",
    faq: [
      { q: "¿Atienden investigaciones por lavado de dinero?", a: "Sí. Se revisan los hechos, operaciones, documentación y estado procesal para definir el alcance de la defensa o consultoría." },
      { q: "¿Trabajan con empresas y directivos?", a: "Sí. La atención puede involucrar a personas físicas, directivos y organizaciones, cuidando posibles conflictos de interés." },
      { q: "¿La revisión incluye documentación financiera?", a: "Sí. La documentación es esencial para comprender operaciones, responsabilidades y posibles explicaciones jurídicas." },
    ],
  },
  {
    key: "compliance-penal",
    group: "organizaciones",
    title: "Compliance penal",
    lead: "Ayudamos a empresas e instituciones a identificar vulnerabilidades, documentar controles y preparar respuestas ante incidentes con posible relevancia penal.",
    kicker: "Compliance penal y prevención de riesgos para empresas",
    paragraphs: [
      "La prevención penal corporativa busca reducir la exposición de empresas, directivos, representantes y equipos operativos mediante controles, políticas internas, capacitaciones, canales de denuncia e investigaciones internas. Un programa útil no debe quedarse en documentos genéricos: necesita reflejar la operación real, los riesgos del negocio, las responsabilidades internas y la forma en que la organización responde ante incidentes sensibles.",
      "En Compliance penal, consultoría preventiva y capacitaciones ayudamos a identificar riesgos jurídico-penales antes de que se conviertan en conflictos mayores. El trabajo puede incluir diagnóstico de procesos, revisión de políticas anticorrupción, lineamientos para manejo de información, protocolos de escalamiento, criterios para investigaciones internas, documentación de controles y sesiones de capacitación para equipos directivos, administrativos u operativos.",
      "El enfoque es práctico y preventivo. Buscamos que la empresa pueda demostrar qué medidas adoptó, quiénes son responsables de ejecutarlas, cómo se documentan los controles y qué ruta debe seguirse ante una denuncia, fraude, conflicto interno, posible delito corporativo o incidente con impacto penal. También orientamos la preparación de respuestas ordenadas cuando la organización necesita actuar con rapidez y preservar evidencia.",
    ],
    why: "La falta de controles, responsables y evidencia documental dificulta reaccionar ante incidentes y explicar qué medidas preventivas adoptó la organización.",
    casesTitle: "Casos que requieren orientación especializada",
    cases: ["Necesidad de revisar riesgos penales de la operación", "Diseño o actualización de políticas anticorrupción", "Creación de canales internos de denuncia", "Investigaciones internas por conductas irregulares", "Capacitación de equipos directivos y operativos", "Respuesta a incidentes con posible impacto penal"],
    scope: ["Diagnóstico inicial de riesgos", "Diseño de protocolos y políticas internas", "Lineamientos para investigaciones internas", "Capacitación en prevención de delitos", "Revisión de canales de denuncia", "Planes de respuesta y documentación de incidentes"],
    faqTitle: "Dudas sobre compliance penal",
    faq: [
      { q: "¿El compliance penal es solo para empresas grandes?", a: "No. El alcance puede ajustarse al tamaño, sector, riesgos y complejidad de cada organización." },
      { q: "¿Pueden impartir capacitaciones?", a: "Sí. Los contenidos se adaptan a directivos, personal operativo o áreas específicas según los riesgos identificados." },
      { q: "¿Atienden investigaciones internas?", a: "Sí. Se puede diseñar y acompañar una metodología de investigación que preserve información y documente hallazgos." },
    ],
  },
  {
    key: "programa-centinela",
    group: "organizaciones",
    title: "Programa Centinela",
    lead: "Una línea especializada para organizaciones que necesitan identificar vulnerabilidades, diseñar protocolos de respuesta y reducir impactos legales, económicos y operativos.",
    kicker: "Respuesta legal para crisis digitales antes de que el riesgo escale",
    paragraphs: [
      "Si tu empresa enfrentó fraude, robo de identidad, filtración de datos, accesos no autorizados u operaciones sospechosas, necesitas una ruta jurídica clara para actuar sin perder evidencia ni agravar responsabilidades.",
    ],
    why: "",
    casesTitle: "Señales de urgencia",
    cases: ["Hubo pérdida económica o movimientos de recursos no autorizados", "Existen accesos no autorizados a cuentas, sistemas o expedientes", "Clientes, usuarios o proveedores ya presentaron reclamos", "Hay uso indebido de datos personales o suplantación de identidad", "Aparecieron operaciones inusuales o triangulaciones sin explicación", "Existe una denuncia interna, filtración de datos o posible lavado de dinero"],
    scope: [],
    faqTitle: "Dudas comunes antes de pedir diagnóstico",
    faq: [
      { q: "¿Programa Centinela es solo para fintech?", a: "No. Está diseñado para fintech, instituciones financieras y empresas con operaciones digitales, manejo de datos, pagos, usuarios, proveedores o procesos sensibles." },
      { q: "¿Qué hago si ya ocurrió un fraude?", a: "Evita borrar información, alterar accesos o comunicar decisiones sin una ruta clara. Conviene documentar lo ocurrido, preservar evidencia y solicitar un diagnóstico inicial." },
      { q: "¿Qué documentos debo enviar?", a: "Una descripción breve del incidente, fechas, áreas afectadas, reportes, capturas, contratos, comunicaciones, registros o cualquier documento que ayude a entender el contexto." },
      { q: "¿Puede contratarse preventivamente?", a: "Sí. Puede usarse para diseñar protocolos, capacitar equipos, revisar vulnerabilidades y preparar criterios de respuesta antes de que ocurra un incidente." },
      { q: "¿Atienden en línea?", a: "Sí. La primera orientación puede realizarse por videollamada o WhatsApp, de acuerdo con la documentación disponible y la urgencia del asunto." },
      { q: "¿Garantizan un resultado?", a: "No. La estrategia depende del caso concreto, los documentos, los tiempos y las autoridades o terceros involucrados. No se garantizan resultados." },
    ],
  },
];

export const centinela = {
  diagTitle: "Diagnóstico inicial",
  diagLead: "¿Qué ordenamos primero?",
  diag: ["Qué ocurrió, cuándo y qué área está afectada.", "Qué evidencia existe y cómo debe preservarse.", "Qué riesgos enfrenta la empresa, directivos y operación."],
  incident: [
    { t: "Incidente", d: "Tipo de evento, fecha, área afectada y decisiones ya tomadas." },
    { t: "Evidencia", d: "Reportes, capturas, contratos, logs, correos, mensajes y accesos." },
    { t: "Personas", d: "Directivos, empleados, clientes, proveedores o terceros involucrados." },
    { t: "Exposición", d: "Datos, dinero, clientes, autoridad, reputación y responsabilidad penal." },
  ],
  systemTitle: "Una ruta para decidir sin improvisar",
  system: [
    { t: "Diagnóstico", d: "Revisión inicial del incidente, documentación, tiempos y áreas afectadas." },
    { t: "Mapa de riesgo", d: "Riesgos penales, operativos, reputacionales y de responsabilidad interna." },
    { t: "Protocolo", d: "Acciones inmediatas, responsables internos y criterios de escalamiento." },
    { t: "Evidencia", d: "Preservación de documentos, registros, comunicaciones y trazabilidad." },
    { t: "Acompañamiento", d: "Orientación en decisiones sensibles, autoridades, denuncias o terceros." },
  ],
  tags: ["Fraude", "Robo de identidad", "Filtración de datos", "Operaciones sospechosas", "Riesgo penal financiero"],
};

export const lineas = [
  { key: "personas" as const, title: "Defensa para personas", kicker: "Atención penal urgente" },
  { key: "organizaciones" as const, title: "Prevención para organizaciones", kicker: "Consultoría corporativa" },
];

export const metodo = ["Revisión inicial", "Definición de estrategia", "Ejecución y seguimiento"];

export const faqHome: Faq[] = [
  { q: "¿Atienden asuntos penales urgentes?", a: "Sí. Cuando existe detención, citatorio, audiencia próxima o riesgo inmediato, conviene solicitar orientación cuanto antes para identificar los primeros pasos." },
  { q: "¿La consulta garantiza un resultado?", a: "No. Ningún resultado puede garantizarse. La consulta permite revisar información inicial, explicar riesgos y definir una ruta jurídica posible." },
  { q: "¿La atención es confidencial?", a: "Sí. La información se maneja con discreción y responsabilidad profesional desde el primer contacto." },
  { q: "¿Cómo puedo iniciar una consulta?", a: "Puedes comunicarte por WhatsApp o mediante el formulario de contacto." },
];

export const firma = {
  intro: "Somos una firma legal especializada en litigación penal estratégica, consultoría preventiva y representación jurídica en asuntos de alta sensibilidad. Nuestro trabajo se distingue por una atención directa, un análisis minucioso de cada carpeta o procedimiento y una visión integral de los riesgos legales que enfrentan personas, empresas e instituciones.",
  intro2: "En nuestro despacho entendemos que cada asunto penal exige más que conocimiento jurídico: requiere oportunidad, criterio, planeación y una defensa construida paso a paso. Por eso trabajamos con comunicación constante, absoluta confidencialidad y estrategias diseñadas conforme a las necesidades reales de cada cliente.",
  mision: "Brindar defensa, representación y consultoría penal con análisis técnico, confidencialidad y comunicación clara, para que cada persona, empresa o institución pueda tomar decisiones informadas frente a una situación jurídica sensible.",
  vision: "Consolidarse como una firma penal de referencia en Ciudad de México para asuntos de defensa estratégica, penal financiero, amparo y prevención de riesgos, manteniendo atención directa, rigor jurídico y enfoque preventivo.",
  valores: "Confidencialidad, lealtad profesional, preparación constante, claridad en la comunicación, actuación ética y compromiso con estrategias jurídicas diseñadas a partir de los hechos, documentos y riesgos reales de cada caso.",
  compromiso: "Actuar con prudencia, honestidad y responsabilidad profesional, sin prometer resultados y explicando al cliente los escenarios, límites y pasos relevantes de su asunto.",
  equipoLead: "El despacho integra perfiles con experiencia en litigación, investigación ministerial y resolución de asuntos jurídicos complejos.",
};

export const team = [
  { name: "Lic. Elías Roberto Torres García", role: "Socio fundador", photo: elias, bio: "Socio fundador de Grupo Roberto Torres & Torres. Licenciado en Derecho y especialista en materia penal financiera, con experiencia en defensa penal, sistema acusatorio, juicios orales, amparo, lavado de dinero y compliance penal." },
  { name: "Lic. Stephanie Ballesteros Suárez", role: "Abogada asociada", photo: stephanie, bio: "Profesional del Derecho especializada en Derecho Fiscal, Contabilidad y Auditorías, con experiencia en análisis normativo, desarrollo de soluciones jurídicas y optimización de procesos. Destaca por su pensamiento crítico, liderazgo y capacidad de gestión, orientados a generar resultados y valor para las organizaciones." },
  { name: "Abdir de Jesús González Morales", role: "Pasante de Derecho", photo: abdir, bio: "Profesional en formación con experiencia práctica, participando en investigación jurídica, análisis de asuntos y apoyo en la elaboración de estrategias legales. Destaca por su responsabilidad, capacidad de aprendizaje y atención al detalle." },
];

export const photos = { hero, pasillo, ciudad };
