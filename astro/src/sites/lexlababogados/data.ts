import hero from "./assets/hero-sala-juntas.jpg";
import expedientes from "./assets/expedientes-escritorio.jpg";
import pedro from "./assets/pedro-roldan-marin.jpg";

export const photos = { hero, expedientes, pedro };

// Todo el texto sale de lexlababogados.com (inicio y páginas de servicio), con erratas corregidas.
export type Service = {
  key: string;
  title: string;
  icon: string;
  text: string;
  /** Texto de la página propia (si la hay) */
  lead?: string;
  meta?: string;
  listTitle?: string;
  items?: string[];
  ordered?: boolean;
  note?: string;
};

export const services: Service[] = [
  {
    key: "auditoria-legal",
    meta: "Auditoría legal laboral para empresas: diagnóstico de riesgos, corrección de contratos y expedientes, procesos y auditoría de seguimiento. Abogados laboralistas en la CDMX.",
    title: "Auditoría Legal",
    icon: "clipboard-text",
    text: "Revisamos contratos, establecemos procesos, detectamos riesgos, corregimos documentos y procuramos cumplimiento normativo. Prevenimos multas, demandas e inspecciones. Blindamos tu empresa desde el principio con nuestros servicios legales.",
    lead: "Analizamos tu empresa, emitimos un diagnóstico, detectamos riesgos legales, corregimos documentación, creamos procesos y protegemos a tu empresa frente a demandas laborales, inspecciones de la STPS, el IMSS, sindicatos o empleados conflictivos.",
    listTitle: "Etapas de la auditoría",
    ordered: true,
    items: ["Conocer la empresa", "Analizar contratos y expedientes", "Revisar los tipos de colaboradores y sus ciclos", "Dictamen de riesgos y elaboración de contratos", "Auditoría de seguimiento"],
  },
  {
    key: "consultoria-legal-laboral",
    meta: "Consultoría legal laboral con asesoría ilimitada bajo iguala mensual para RRHH, Dirección y Contabilidad. Valoración inicial sin costo. Abogados laboralistas en la CDMX.",
    title: "Consultoría Legal Laboral",
    icon: "chats-circle",
    text: "Resuelve dudas cotidianas, toma decisiones seguras y evita demandas. Te acompañamos en cada problemática laboral, protegiendo tu empresa, tu dinero y tu operación. Asesoría legal especializada para RRHH, Dirección y/o Contabilidad.",
    lead: "Asesoría ilimitada bajo un modelo de iguala mensual. Resuelve dudas cotidianas, toma decisiones seguras y evita demandas, con asesoría legal especializada para RRHH, Dirección y/o Contabilidad.",
    listTitle: "Problemáticas que atendemos",
    items: ["Faltas y retardos", "Bajo rendimiento", "Indisciplina", "Protección del patrimonio: NDA, no competencia y resguardo de equipo", "Rescisión justificada", "Robo", "Acoso", "Abuso de confianza"],
    note: "Valoración inicial sin costo.",
  },
  {
    key: "documentacion-legal",
    title: "Documentación Legal",
    icon: "files",
    text: "Obtén documentos laborales ilimitados, hechos por abogados especialistas. Solicita, recibe y usa sin límites, sin cotizar por hora, ni documento, ni por evento. Evita errores, cumple la ley y asegura respaldo jurídico en cada documento que tu empresa necesita.",
  },
  {
    key: "seguro-contra-demandas",
    meta: "Seguro contra demandas laborales: defensa legal permanente por mensualidad, desde la contestación de demanda hasta las audiencias y amparos. Abogados laboralistas en la CDMX.",
    title: "Seguro Contra Demandas",
    icon: "shield-check",
    text: "Defensa legal laboral total permanente. Asegura tu empresa con servicios legales y mientras otros despachos cotizan, nosotros trabajamos en defenderte. Preparamos tu empresa, generamos evidencia y te representamos de principio a fin en cada etapa del proceso.",
    lead: "Defensa legal laboral total y permanente por mensualidad. Preparamos tu empresa, generamos evidencia y te representamos de principio a fin en cada etapa del proceso.",
    listTitle: "Qué cubre",
    items: ["Estudio del expediente", "Contestación de demanda", "Poderes notariales", "Análisis y objeción de pruebas", "Preparación de testigos", "Convenio judicial", "Todas las audiencias", "Amparos"],
  },
  {
    key: "desvinculacion-de-empleados",
    meta: "Desvinculación de empleados con abogado especialista: renuncia voluntaria, liquidación negociada, despido justificado y fin de contrato. Abogados laboralistas en la CDMX.",
    title: "Desvinculación de Empleados",
    icon: "door-open",
    text: "Desvinculación laboral acompañado de un abogado especialista. Te asistimos en todo el proceso para que no tomes riesgos, actúes equivocadamente ni enfrentes la baja tú solo. Paga lo justo, no pagues liquidaciones completas a malos empleados.",
    lead: "Desvinculación laboral acompañado de un abogado especialista. Te asistimos en todo el proceso, con documentación y asistencia, para que no tomes riesgos, actúes equivocadamente ni enfrentes la baja tú solo.",
    listTitle: "Tipos de baja",
    items: ["Renuncia voluntaria", "Liquidación negociada", "Despido justificado", "Fin de contrato"],
    note: "Paga lo justo, no pagues liquidaciones completas a malos empleados.",
  },
  {
    key: "inspecciones-de-la-autoridad",
    meta: "Defensa en inspecciones de la Secretaría del Trabajo: respuesta al acta, procedimiento sancionador y juicio de nulidad o amparo. Abogados laboralistas en la CDMX.",
    title: "Inspecciones de la Autoridad",
    icon: "magnifying-glass",
    text: "Evita multas derivadas de inspecciones o visitas y procedimientos administrativos de la Secretaría del Trabajo. Corrige errores en tiempo real y responde con estrategia. Defensa desde el primer requerimiento hasta tribunales, por parte de abogados especialistas.",
    lead: "Evita multas derivadas de inspecciones o visitas y procedimientos administrativos de la Secretaría del Trabajo. Corrige errores en tiempo real y responde con estrategia, desde el primer requerimiento hasta tribunales.",
    listTitle: "Seguro contra Inspecciones Laborales, en tres etapas",
    ordered: true,
    items: ["Respuesta al acta", "Procedimiento sancionador", "Juicio de nulidad o amparo"],
  },
];

export const pagedServices = services.filter((s) => s.lead);

export const about = [
  "Somos una firma legal especializada en materia laboral que protege a las empresas de forma integral.",
  "Comenzamos con una auditoría legal para detectar riesgos y necesidades específicas. A partir de ahí, implementamos la documentación jurídica necesaria para prevenir problemas antes de que ocurran.",
  "Acompañamos a nuestros clientes con consultoría diaria, resolviendo situaciones reales como faltas, incidentes o cambios normativos, con soluciones prácticas y oportunas.",
  "Además, brindamos protección ante demandas laborales y respaldo frente a inspecciones de la STPS y otras autoridades.",
  "Todo esto bajo un plan anual de trabajo enfocado en cumplimiento y control de riesgos, incluyendo la correcta desvinculación de personal.",
];

export const coverage = {
  title: "Atendemos toda la República.",
  text: "Contamos con cobertura en todos los estados de la república a través de alianzas con otros despachos foráneos especializados en materia laboral. Esto ayuda a reducir costos indirectos como hospedaje, transporte y alimentos; asimismo permite una atención inmediata, con beneficios de cercanía y buena relación con funcionarios locales y atención simultánea en todo el país a su empresa.",
};

export type Person = { name: string; role: string; bio: string };
export const lead: Person = { name: "Pedro Roldán Marín", role: "Socio Director", bio: "Especialista en Consultoría Laboral, Litigio, Derecho Administrativo y Derecho Colectivo." };
export const team: Person[] = [
  { name: "Juan Villegas Ramírez", role: "Socio", bio: "Abogado litigante con amplia experiencia en conflictos individuales." },
  { name: "Cinthya Daniela Hdez. Villa", role: "Abogada Consultora", bio: "Contratos, avisos de rescisión, actas administrativas." },
  { name: "Gerardo Ramirez Alvarado", role: "Abogado Consultor", bio: "Auditorías laborales, actas para rescindir y derecho administrativo." },
  { name: "Alma Jenifer Domínguez Parra", role: "Abogada Litigante", bio: "Desvinculaciones laborales, audiencias prejudiciales y citatorios laborales." },
  { name: "Mariel Guzmán Jiménez", role: "Abogada Litigante", bio: "Contestación de demandas laborales y audiencias preliminares." },
  { name: "Alin García Pedroza", role: "Abogado Litigante", bio: "Inspecciones de la Secretaría del Trabajo y juicios de nulidad." },
  { name: "Flor Amaranta Bautista Mtz.", role: "Abogada Litigante", bio: "Abogada con experiencia en juicios laborales." },
  { name: "Meztli García González", role: "Abogada Litigante", bio: "Abogada con experiencia en conflictos individuales." },
  { name: "Frida Ma. Palancares Matías", role: "Abogada Litigante", bio: "Abogada con práctica en litigios ante tribunales laborales." },
  { name: "Marco Antonio Angoa García", role: "Abogado", bio: "Seguimiento a auditorías, renuncias y finiquitos." },
  { name: "Mariano Navarro Murguía", role: "Abogado", bio: "Abogado especializado en demandas y conciliaciones laborales." },
  { name: "Alexa Ceballos Gaspar", role: "Abogada", bio: "Seguimiento a auditorías, demandas y procesos legales." },
];

export const reviews = {
  rating: 5.0,
  count: 30,
  quotes: [
    { text: "Estoy contenta de que el despacho Laboral LexLab me asesorara y resolviera una demanda laboral que no había encontrado alguien confiable y serio, en LexLab me explicaron claramente las alternativas y los posibles resultados, además de los costos en tiempo y dinero. Me siento protegida y tengo claro el final. Recomiendo ampliamente al despacho!", author: "Laura Marin" },
    { text: "Excelente servicio! El licenciado Pedro nos apoyó en el área de recursos humanos de nuestra empresa con una cuestión delicada laboral, siempre se portó super profesional, abocado a ayudarnos y salir en los mejores términos.", author: "Joshua Aarón Vargas Gasca" },
    { text: "Excelente acompañamiento en el Centro de Conciliación Laboral. Gracias a la dedicación, empatía y profesionalismo de LexLab, todo el proceso fue mucho más tranquilo y favorable.", author: "Gilda Castro" },
    { text: "La atención personalizada del Lic. Pedro Roldan y la asesoría excelente!! Muy profesional, me ayudó mucho.", author: "Jessica Llanes" },
  ],
};

export const serviceNames = services.map((s) => s.title);
