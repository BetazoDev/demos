// Todo el texto sale de rcaabogados.com (sitio 2025, textos en script.js). Ver lista-2/79-rcaabogados/research.md.
// Erratas corregidas: «Auditorias», «mal praxis». Las cifras y reconocimientos son declaraciones del propio despacho.

export type Area = { key: string; title: string; lead: string; services: string[] };

export const areas: Area[] = [
  {
    key: "litigio",
    title: "Litigio",
    lead: "Experiencia en atención de juicios complejos en la CDMX y toda la República Mexicana y otros países.",
    services: ["Juicios civiles", "Juicios mercantiles", "Juicios penales", "Juicios y procedimientos administrativos", "Juicios orales", "Juicio de amparo", "Juicios especiales hipotecarios", "Juicios laborales patronales", "Cobranza judicial y extrajudicial", "Tramitación de recursos", "Ejecución de sentencias", "Cooperación procesal internacional", "Mediación y arbitraje", "Controversias de propiedad industrial", "Gestión de carteras", "Reclamos y conflictos contra aseguradoras, mala praxis médica"],
  },
  {
    key: "fiscal",
    title: "Fiscal",
    lead: "Especialización en normatividad tributaria y aduanera, cumplimiento y procedimientos contenciosos.",
    services: ["Planeación y estrategia fiscal, nacional e internacional", "Aspectos preventivos Due-Diligence", "Fusiones y adquisiciones", "Soluciones globales", "Consultoría fiscal", "Aplicación de estímulos fiscales", "Planeación patrimonial de personas físicas", "Facilidades Administrativas", "Asesoría y estudios de Precios de Transferencia", "Recursos de revocación (SAT)", "Juicio de nulidad (TFJA)", "Litigio aduanero", "Juicios de Amparo", "Auditorías", "Trámites, solicitudes, devoluciones y autorizaciones", "Atención de requerimientos", "Confirmaciones de criterio", "Quejas y consultas ante PRODECON", "APA’s unilateral o bilateral", "Mutual agreement procedures", "Compliance fiscal"],
  },
  {
    key: "financiero",
    title: "Financiero",
    lead: "Atendemos a todas las entidades financieras desde su creación, procesos de supervisión así como fusiones y adquisiciones.",
    services: ["Constitución y transformación de entidades financieras", "Autorización y registro de entidades", "Adquisición y fusión de entidades", "Contestación a requerimientos de CNBV, UIF, Banco de México y CONDUSEF", "Procedimientos de sanción y nulidad de multas", "Auditorías en materia de PLD y sistemas automatizados", "Procedimientos de cancelación de registro", "Defensa en delitos financieros", "Compliance"],
  },
  {
    key: "fintech",
    title: "Fintech",
    lead: "Innovación legal aplicada a servicios financieros digitales y tecnología.",
    services: ["Análisis de factibilidad de proyectos", "Autorización y cumplimiento para Instituciones de Tecnología Financiera (ITF)", "Constitución y regulación de Instituciones de Financiamiento Colectivo y de Fondo de Pago Electrónico", "Trámites y gestión ante CNBV, Banco de México y CONDUSEF", "Creación de modelos de negocios para la operación de activos y monedas virtuales", "Autorizaciones temporales de modelos novedosos (Sandbox)"],
  },
  {
    key: "inmobiliario",
    title: "Inmobiliario",
    lead: "Protegemos las inversiones patrimoniales de personas físicas y desarrolladores, prevenimos y resolvemos asuntos relacionados con terrenos e inmuebles.",
    services: ["Contratos de arrendamiento y fideicomisos", "Búsqueda de antecedentes en Registro Público y Agrario", "Desarrollos hoteleros, comerciales e industriales", "Contratos de obra, arrendamientos, permutas y gravámenes", "Desincorporación de ejidos y expropiaciones", "Auditorías para determinar el estatus de inmuebles", "Elaboración de contratos de multipropiedad", "Constitución y liberación de garantías inmobiliarias", "Recuperación de inmuebles"],
  },
  {
    key: "laboral",
    title: "Laboral",
    lead: "Relaciones de trabajo, defensa patronal y cumplimiento normativo laboral.",
    services: ["Consultoría y litigio", "Auditorías de seguridad social", "Procesos de migración laboral", "Capital Humano", "Rentabilidad", "Estabilidad", "Responsabilidad Social", "Planeación Integral", "Planeación fiscal de recursos humanos"],
  },
  {
    key: "penal",
    title: "Penal",
    lead: "Amplia experiencia en el combate e investigación de delitos patrimoniales, prevención y gestión de riesgos en materia penal tributaria y corporativo.",
    services: ["Atención de asuntos en materia de corrupción", "Preparación de denuncias, querellas y juicios penales", "Defensa de empleados y compañías en carpetas de investigación", "Auditoría legal para prevenir la comisión de ilícitos", "Planeación de estrategias para enfrentar crisis", "Juicios de amparo en materia penal", "Atención de procedimientos de extradición", "Defensa en procesos penales federales y del fuero común", "Compliance"],
  },
  {
    key: "competencia-economica",
    title: "Competencia Económica",
    lead: "Asesoría en libre competencia, fusiones y prácticas monopólicas.",
    services: ["Notificaciones de concentraciones", "Investigaciones por prácticas monopólicas", "Políticas de precios y distribución", "Solicitudes de inmunidad y reducción de sanciones", "Obtención de autorizaciones para fusiones y adquisiciones", "Representación en investigaciones de abusos de poder de mercado"],
  },
  {
    key: "migracion",
    title: "Migración",
    lead: "Gestión de permisos, visas, naturalización y extranjería en México.",
    services: ["Presentación de informes de inversión extranjera", "Permisos CNIE", "Apostilla y legalización de documentos", "Trámites de naturalización y visas", "Avisos al INAMI", "Medios de defensa", "Permisos, avisos y cambio de estatus", "Procedimientos consulares y solicitudes de Asilo Político", "Contratación laboral de extranjeros"],
  },
  {
    key: "consultoria",
    title: "Consultoría",
    lead: "Consultores especializados en brindar soluciones inteligentes y confiables.",
    services: ["Contratos y análisis de riesgos", "Inversiones inmobiliarias y negocios internacionales", "Planeación fiscal", "Soluciones IT para cumplimiento regulatorio", "Creación de entidades financieras", "Prevención de lavado de dinero", "Capacitación para instituciones públicas y privadas", "Implementación de gobierno corporativo", "Compliance (anticorrupción y penal)", "Diseño de contratos y convenios, acompañamiento en proyectos y negocios"],
  },
  {
    key: "corporativo",
    title: "Corporativo",
    lead: "Fusiones, adquisiciones, cumplimiento y estructura legal empresarial.",
    services: ["Creación y constitución de sociedades", "Manejo de libros corporativos", "Actas de asambleas y de consejo", "Fusiones y escisiones", "Due diligence (auditorías de compra)", "Adquisiciones y enajenación de acciones", "Liquidación de sociedades", "Gobierno corporativo", "Registro de marcas y patentes"],
  },
  {
    key: "comercio-exterior",
    title: "Comercio Exterior",
    lead: "Asesoría legal estratégica en normatividad aduanera, inversión extranjera y optimización de operaciones comerciales a nivel internacional.",
    services: ["Inversión Extranjera y Estructuración Corporativa", "Estructuración Integral de Operaciones de Importación y Exportación", "Cumplimiento Aduanero y Regulación Comercial", "Programas de Fomento y Optimización Fiscal", "Auditorías, Fiscalización y Defensa Estratégica", "Estrategia Sectorial y Relaciones Gubernamentales"],
  },
];

export const lema = "Especialistas en resolver asuntos relevantes y complejos";
export const frase = "Soluciones que generen certeza, seguridad y confianza.";
export const descripcion = [
  "Con 25 años de experiencia, nuestra Firma se ha distinguido por ofrecer servicios profesionales especializados en los ámbitos jurídicos y de negocios empresariales.",
  "Nuestro compromiso es brindar asesoría de alta calidad, focalizada en obtener resultados satisfactorios y confiables para nuestros clientes y aliados.",
  "Trabajamos con dedicación y excelencia para ofrecer soluciones que generen certeza, seguridad y confianza.",
];
export const sectores = "Contamos con 12 áreas de especialidad que nos posicionan como firma líder y referente de servicios profesionales a los sectores Médico, Financiero, Energía, Construcción y Comercio Internacional.";

/** Cifras que el despacho publica en su sitio; no están verificadas por terceros. */
export const cifras = [
  { value: "3000+", label: "casos ganados" },
  { value: "500+", label: "clientes nacionales y extranjeros" },
  { value: "90%", label: "tasa de éxito" },
  { value: "12", label: "áreas legales" },
];
export const notaCifras = "Cifras y reconocimientos declarados por el despacho en su sitio. No están verificados por terceros.";

export const reconocimientos = [
  { title: "Clasificación Diamante en Derecho", text: "Corporativo, Litigio, Bancario, Financiero y Penal." },
  { title: "Tops México, Los Mejores Abogados de México 2025", text: "Galardón «Al servicio y a la calidad»." },
];
export const alianzas = ["LemonTech", "Foster Swiss", "ACAMS", "ANADE Colegio de Abogados", "ACFE Capítulo México"];

/** Reseñas de Google con el texto tal como aparece. */
export const resenas = [
  { author: "Sol Garcia", text: "Quiero recomendar ampliamente al despacho RCA Abogados S.C. por el excelente manejo de mi proceso legal. Desde el inicio demostraron un alto nivel de profesionalismo, calidad en el servicio, confianza y una eficacia que se reflejó en los resultados obtenidos. Su compromiso y atención personalizada hicieron una gran diferencia en mi caso. Sin duda, son un equipo altamente confiable y competente." },
  { author: "Skyfloor Administración", text: "Hace un mes fui despedido de manera injustificada y decidí acudir al equipo de RCA ABOGADOS SC para solicitar asesoría legal. A pesar de las complicaciones de mi caso, me brindaron un acompañamiento profesional y comprometido durante todo el proceso. Gracias a su experiencia y dedicación, lograron que recibiera una liquidación justa. Recomiendo ampliamente sus servicios." },
];

export const privacidad = {
  responsable: "RCA abogados, SC., con oficinas principales en Calzada General Mariano Escobedo número 353A, interior 902, Colonia Chapultepec Morales, Delegación Miguel Hidalgo, CP. 11570 en la Ciudad de México, es responsable del manejo de los datos personales.",
  datos: "Los datos personales que se recaban son nombre, edad, domicilio, RFC, teléfono y correo. No se recaban datos sensibles.",
  arco: "Los derechos ARCO pueden ejercerse ante el área administrativa, al teléfono (+52 55) 5525 8052 o en protecciondedatos@rcaabogados.com.",
  autoridad: "Autoridad: INAI.",
};
