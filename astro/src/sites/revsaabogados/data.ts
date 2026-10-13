import hero from "./assets/hero-roma.jpg";
import banda from "./assets/banda-escritorio.jpg";
import armando from "./assets/raul-armando-varela.jpg";
import enrique from "./assets/raul-enrique-varela.jpg";
import sergio from "./assets/sergio-amaro.jpg";
import alicia from "./assets/alicia-curiel.jpg";

// Todo el texto sale de revsaabogados.com (inicio, conócenos, áreas, por qué elegirnos, equipo, preguntas frecuentes, contacto).
export type Opinion = { text: string; author: string; src?: "google" };
export type Area = { key: string; title: string; short: string; lead: string; items: string[]; more: boolean; icon: string; opinions: string[]; meta: string };

export const opiniones: Record<string, Opinion> = {
  giovanni: { author: "Giovanni Peñaloza Tapia", text: "El mejor asesoramiento y trato adecuado para el proceso adecuado de una sucesión testamentaria." },
  paz: { author: "María de la Paz Bautista", text: "El mejor respaldo jurídico para celebrar la firma de venta de un inmueble en cual protegieron mis intereses y pude concretar mi trámite de forma correcta con el comprador." },
  jesus: { author: "Jesús Javier Enríquez Cruz", text: "Asistencia profesional para la firma de la compra de mi primer departamento invirtiendo mis ahorros y revisión correcta del contrato que debía firmar siempre velando por mis intereses." },
  perez: { author: "Familia Pérez", text: "Correcta asesoría y seguimiento de nuestro asunto en materia penal explicándonos a detalle cada parte del proceso y cumpliendo con creces el objetivo planteado en la representación." },
  morales: { author: "Familia Morales", text: "Asistencia inmediata a nuestra llamada para atender el seguimiento de nuestro asunto en la Fiscalía, y siempre disponibles sin importar el horario, siendo madrugada o noche, para atender todas nuestras dudas y resolvernos." },
  empresarial: { author: "Clientes Sector Empresarial", text: "El mejor despacho para llevar el litigio en materia contenciosa administrativa con reportes mensuales de las acciones planteadas respetando siempre la confidencialidad de cada uno de nuestros asuntos, contando con un frente jurídico confiable." },
  educativo: { author: "Clientes Sector Educativo", text: "REVSA se ha distinguido por la transparencia y claridad para explicarnos a detalle, como institución educativa, todos aquellos requerimientos que recibimos por parte de autoridades gubernamentales y poder dar contestación adecuada y oportuna a las solicitudes planteadas." },
  michel: { author: "Michel Flores Aguilar", text: "Gracias a REVSA recuperé mi casa después de tantos años en manos de mi padrastro." },
  guillermina: { author: "Guillermina Hernández Carbajal", text: "Seriamente agradecida con el despacho REVSA Abogados por su labor profesional en mi divorcio. La atención brindada por el Lic. Raúl Varela fue excelente." },
  abril: { author: "Abril Quintana Pérez", text: "Muy agradecida con el apoyo y asesoramiento para el trámite de mi liquidación laboral, el honorario se ajustó a mi necesidad económica con planes de pago accesibles y obtuve una liquidación justa." },
  iran: { author: "Iran Nayeli Guerrero Cervantes", text: "La mejor opción para poder cobrar un pagaré que me debían desde hace mucho tiempo obligando al pago a mi deudor." },
  nora: { author: "Nora Arguello de la Vega", text: "Satisfecha y agradecida con REVSA por el correcto y justo cobro de las deudas que tenían personas conmigo y conforme a la ley pude cobrar mis pagarés." },
  juancarlos: { author: "Juan Carlos Herrera Vega", text: "Excelente despacho siempre profesionales y me ayudaron a que me liquidaran de mi antiguo trabajo de forma justa y como lo marca la ley." },
  giovanna: { author: "Giovanna Galvez Peralta", src: "google", text: "Excelente servicio, me agradó su eficiencia y su enfoque resolutivo en favor del cliente." },
  zintzun: { author: "Juan Carlos Zintzun Sanabria", src: "google", text: "Excelente servicio y los honorarios accesibles." },
};

export const areas: Area[] = [
  {
    key: "familiar", title: "Familiar", icon: "users-three",
    short: "Divorcio, pensión alimenticia, guarda y custodia, violencia familiar, testamentos, intestado.",
    lead: "Divorcio, pensión alimenticia, guarda y custodia, violencia familiar, testamentos e intestado.",
    meta: "Abogados familiares en la Roma Sur, CDMX: divorcio, pensión alimenticia, guarda y custodia, violencia familiar, testamentos e intestado.",
    items: ["Divorcio", "Pensión alimenticia", "Guarda y custodia", "Violencia familiar", "Testamentos", "Intestado"], more: false,
    opinions: ["giovanni", "guillermina"],
  },
  {
    key: "penal", title: "Penal", icon: "scales",
    short: "Denuncias, detenciones, amparos, citatorios, audiencias iniciales, desahogo probatorio.",
    lead: "Denuncias, detenciones, amparos, citatorios, audiencias iniciales y desahogo probatorio.",
    meta: "Abogados penalistas en la Roma Sur, CDMX: denuncias, detenciones, amparos, citatorios, audiencias iniciales y desahogo probatorio.",
    items: ["Denuncias", "Detenciones", "Amparos", "Citatorios", "Audiencias iniciales", "Desahogo probatorio"], more: false,
    opinions: ["perez", "morales"],
  },
  {
    key: "civil-mercantil", title: "Civil / Mercantil", icon: "handshake",
    short: "Embargos, lanzamientos, contratos entre particulares, acompañamiento a notarías o dependencias de gobierno, inmuebles y pagarés.",
    lead: "Embargos, lanzamientos, contratos entre particulares, inmuebles, pagarés y acompañamiento a notarías o dependencias de gobierno.",
    meta: "Abogados civiles y mercantiles en la Roma Sur, CDMX: embargos, lanzamientos, contratos, inmuebles, pagarés y acompañamiento a notarías.",
    items: ["Embargos", "Lanzamientos", "Contratos entre particulares", "Acompañamiento a notarías o dependencias de gobierno", "Inmuebles", "Pagarés"], more: true,
    opinions: ["paz", "jesus", "iran", "nora"],
  },
  {
    key: "laboral", title: "Laboral", icon: "identification-badge",
    short: "Despidos injustificados, pago de utilidades, rescisión de contrato, conciliaciones, acoso laboral.",
    lead: "Despidos injustificados, pago de utilidades, rescisión de contrato, conciliaciones y acoso laboral.",
    meta: "Abogados laboralistas en la Roma Sur, CDMX: despidos injustificados, pago de utilidades, rescisión de contrato, conciliaciones y acoso laboral.",
    items: ["Despidos injustificados", "Pago de utilidades", "Rescisión de contrato", "Conciliaciones", "Acoso laboral"], more: true,
    opinions: ["abril", "juancarlos"],
  },
  {
    key: "contenciosa-administrativa", title: "Contenciosa Administrativa", icon: "buildings",
    short: "Multas PROFECO, requerimientos por parte del estado, créditos fiscales tendientes a ser ejecutados.",
    lead: "Multas PROFECO, requerimientos por parte del Estado, créditos fiscales tendientes a ser ejecutados y demandas contra órganos de gobierno.",
    meta: "Contencioso administrativo en la Roma Sur, CDMX: multas PROFECO, requerimientos del Estado, créditos fiscales y demandas contra órganos de gobierno.",
    items: ["Multas PROFECO", "Requerimientos por parte del Estado", "Créditos fiscales tendientes a ser ejecutados", "Demandas contra órganos de gobierno", "Juicio contencioso administrativo"], more: true,
    opinions: ["empresarial", "educativo"],
  },
  {
    key: "pymes", title: "Representación PYMES (Empresarial)", icon: "storefront",
    short: "Creación de empresas nuevas, juicios laborales, juicios contenciosos administrativos, asistencia en trámites notariales, paquetes de servicios jurídicos.",
    lead: "Creación de empresas nuevas, juicios laborales, juicios contenciosos administrativos, asistencia en trámites notariales y paquetes de servicios jurídicos.",
    meta: "Representación jurídica de PYMES en la Roma Sur, CDMX: creación de empresas, juicios laborales y contenciosos administrativos, trámites notariales y paquetes de servicios.",
    items: ["Creación de empresas nuevas", "Juicios laborales", "Juicios contenciosos administrativos", "Asistencia en trámites notariales", "Paquetes de servicios jurídicos"], more: false,
    opinions: ["empresarial"],
  },
];

export const photos = { hero, banda };

export const team = [
  {
    name: "Mtro. Raúl Armando Varela González", role: "Titular de REVSA Abogados", photo: armando,
    bio: "Litigante en materia civil-mercantil, administrativo y laboral. Licenciado en Derecho por la Universidad del Valle de México, con maestría en Administración, maestría en Ciencias Jurídicas, especialidad en Derecho Administrativo y en Derecho Penal, y doctorante en Política Criminal. Profesor universitario de Derecho Penal, Civil y Administrativo en el Centro de Estudios Tecnológicos y Universitarios IAMP y asesor jurídico en la Unidad de Protección Ciudadana Aragón de la Secretaría de Seguridad Pública de la Ciudad de México.",
  },
  {
    name: "Mtro. Raúl Enrique Varela Curiel", role: "Socio fundador REVSA Abogados", photo: enrique,
    bio: "Litigante en materia civil, familiar y penal. Licenciado en Derecho por la Universidad del Valle de México, doctor en Administración Pública y doctorante en Política Criminal, con estudios de Global Business en la School of Management de Walden University y maestría en juicios orales con especialización en técnicas de litigación y justicia para adolescentes. Socio fundador del Despacho Jurídico Enlaces Profesionales REVSA S.C., coordinador jurídico de Diálogos A.C., directivo de la Academia de Peritos en Ciencias Forenses y Consultoría Técnica Legal A.C. y asesor legislativo en el Congreso de la Ciudad de México.",
  },
  {
    name: "Mtro. Sergio Michaell Amaro González", role: "Socio fundador (2023 a la fecha)", photo: sergio,
    bio: "Litigante en materia civil, familiar y penal. Licenciado en Derecho por la Universidad del Valle de México, con maestría en Juicios Orales en la Academia de Peritos y Ciencias Forenses y diplomado en Argumentación Jurídica en el Sistema Penal Acusatorio. Fue jefe de pasantes de REVSA Abogados (2018-2019), director general de REVSA Abogados (2022-2024) y coordinador de eventos académicos LATAM (2021-2023); desde 2023 es director académico de Juristas LATAM.",
  },
  { name: "Alicia Haydee Curiel Ramírez", role: "Asesor jurídico, equipo litigante", photo: alicia, bio: "" },
];

export const quienes = "Somos una red de profesionistas con el objetivo de apoyar a la industria, empresas y a otros profesionistas independientes a cumplir con sus objetivos o resolver sus necesidades de una manera responsable y eficaz.";
export const mision = "Brindar servicios jurídicos eficaces, confiables y de alta calidad, planteamiento de soluciones ante controversias jurídicas aplicando todo nuestro saber y experiencia en tribunales con la firme convicción de satisfacer las necesidades y objetivos de nuestros clientes.";
export const vision = "Ser el despacho de abogados de mayor trascendencia jurídica y social manteniéndonos íntegros, generando para nuestros socios y colaboradores un crecimiento profesional sostenible y para nuestros clientes ser “la mejor opción”.";
export const valores = ["Confianza", "Responsabilidad", "Honestidad", "Lealtad", "Integridad", "Transparencia", "Orientación al cliente"];
export const porque = [
  { h: "Mejores prácticas legales", d: "Nuestro objetivo es conducir a las organizaciones a una oportuna identificación, análisis, evaluación y tratamiento de sus riesgos." },
  { h: "Eficiencia y confianza", d: "Nuestro propósito primordial es ofrecer una capacitación técnica continua, con la que formemos especialistas que respondan de manera eficiente y eficaz." },
  { h: "Resultados que mereces", d: "Contamos con una amplia trayectoria asesorando exitosamente diversas carteras." },
];
export const stats = [
  { value: "+17", label: "años de fundación del despacho" },
  { value: "+150", label: "casos anuales en diversas materias" },
  { value: "100", label: "asuntos similares atendidos en cada materia, aproximadamente" },
];

export const faq = [
  { q: "¿Cuántos años de experiencia tienen?", a: "Más de 17 años de fundación del despacho llevando un concentrado de poco más de 150 casos anuales, en diversas materias con litigantes especialistas y comprometidos con los resultados." },
  { q: "¿Qué asunto es el más importante que han llevado?", a: "Hemos llevado asuntos de vital relevancia a nivel empresarial y contra órganos de gobierno. Nuestros clientes son pequeños y medianos empresarios, así como trabajadores de empresas privadas con asuntos de carácter familiar o civil, a los que asignamos el mismo grado de compromiso y responsabilidad para solucionarlos." },
  { q: "¿Cuántos asuntos como el mío han llevado anteriormente?", a: "Cada asunto legal es especial y con circunstancias distintas entre sí; sin embargo, contamos con la experiencia necesaria para conocer los procesos indicados para cada uno de ellos, con un margen de experiencia de aproximadamente 100 asuntos similares en cada materia que llevamos." },
  { q: "¿Cuál es el rango de honorarios sobre el que trabajan?", a: "Contamos con planes de pago accesibles para cada uno de nuestros clientes, acordes a sus necesidades y su capacidad económica, priorizando encontrar la solución adecuada al conflicto legal que nos plantean." },
  { q: "¿Cuál será el seguimiento que le darán a mi asunto en particular?", a: "Cuando contratas los servicios de REVSA Abogados contratas un equipo completo de litigantes especializados, quienes darán un seguimiento constante a tu asunto en los tribunales todos los días y responderán tus dudas manteniéndote informado del estado procesal, adjuntando evidencias de tu expediente en cada avance." },
  { q: "¿Atienden casos de emergencia en cualquier momento?", a: "Claro que sí. Contamos con un teléfono de llamadas de emergencia para atender el asunto con inmediatez y brindar el desglose de honorarios por el asunto a tratar." },
];
