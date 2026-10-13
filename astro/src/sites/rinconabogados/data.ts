import type { ImageMetadata } from "astro";
import virgilio from "./assets/virgilio-rincon-salas.jpg";
import cesar from "./assets/cesar-rincon-mayorga.jpg";
import hugo from "./assets/hugo-orozco.jpg";
import ana from "./assets/ana-paula-ortega.jpg";
import roberto from "./assets/roberto-gonzalez.jpg";
import alejandro from "./assets/alejandro-rois.jpg";
import quetzal from "./assets/quetzal-valdez.jpg";
import diana from "./assets/diana-favela.jpg";
import sala from "./assets/sala-juntas.jpg";
import pasillo from "./assets/pasillo.jpg";
import recepcion from "./assets/recepcion.jpg";
import hero from "./assets/hero-oficina.jpg";

// Todo el texto sale de rinconabogados.com (servicios, Nosotros, Equipo) y de sus redes. Se condensa; no se agrega nada.
export type Area = {
  key: string;
  title: string;
  lead: string;
  intro: string;
  enfoque: string;
  reto: string;
  itemsTitle: string;
  items: string[];
  quote: string;
  image: ImageMetadata;
  alt: string;
};

export const areas: Area[] = [
  {
    key: "litigio",
    title: "Litigio y Solución de Controversias",
    lead: "Representación estratégica ante tribunales nacionales e internacionales, enfocada en resolver conflictos con precisión, visión jurídica y resultados medibles.",
    intro: "Transformamos los conflictos en oportunidades jurídicas. Con presencia en tribunales nacionales e internacionales, diseñamos defensas y estrategias procesales que protegen los intereses de nuestros clientes con precisión y rigor técnico.",
    enfoque: "Cada caso exige una táctica distinta. Nuestro equipo analiza cada situación con mirada estratégica, estructurando argumentos sólidos, basados en evidencia y precedentes. Más que reaccionar, anticipamos escenarios y planteamos soluciones legales medibles, eficientes y sostenibles en el tiempo. Ya sea en litigios civiles, mercantiles, constitucionales o arbitrales, nuestro compromiso es brindar acompañamiento continuo, comunicación clara y resultados que generen confianza.",
    reto: "El verdadero desafío no es solo ganar un caso, sino hacerlo de forma inteligente y responsable. En un entorno jurídico cambiante, combinamos tradición jurídica con metodologías innovadoras, apoyándonos en tecnología y análisis comparado para fortalecer cada representación.",
    itemsTitle: "Materias",
    items: ["Litigios civiles", "Litigios mercantiles", "Litigios constitucionales", "Litigios arbitrales"],
    quote: "Defender con estrategia, litigar con propósito y resolver con excelencia.",
    image: sala,
    alt: "Sala de juntas de la oficina de Ciudad de México con vista al Monumento a la Revolución",
  },
  {
    key: "corporativo",
    title: "Asesoría Corporativa y de Inversión",
    lead: "Estructuración legal y acompañamiento integral a empresas e inversionistas.",
    intro: "Nuestro equipo combina experiencia en derecho corporativo, financiero y comercial para diseñar estructuras sólidas que protejan cada inversión. Nos especializamos en la constitución, reorganización y operación de empresas nacionales e internacionales, así como en la asesoría a fondos de inversión, startups y corporaciones consolidadas.",
    enfoque: "Diseñamos soluciones a medida que integran gobierno corporativo, planeación fiscal, cumplimiento normativo y estrategias de inversión con visión a largo plazo. Desde la creación de sociedades hasta operaciones de fusiones, adquisiciones o coinversiones, nuestra prioridad es brindar claridad legal, eficiencia operativa y confianza en cada decisión.",
    reto: "En un entorno globalizado y digital, las empresas enfrentan nuevos desafíos jurídicos: regulaciones cambiantes, responsabilidad corporativa, privacidad de datos y transacciones internacionales. Abordamos cada desafío con un enfoque preventivo, estratégico y orientado a resultados.",
    itemsTitle: "Incluye",
    items: ["Constitución, reorganización y operación de empresas", "Fondos de inversión, startups y corporaciones", "Gobierno corporativo", "Planeación fiscal", "Cumplimiento normativo", "Fusiones, adquisiciones y coinversiones"],
    quote: "Acompañamos a cada cliente desde la idea de negocio hasta la consolidación de su inversión.",
    image: pasillo,
    alt: "Pasillo de oficinas con paredes de vidrio en la sede de Ciudad de México",
  },
  {
    key: "amparo",
    title: "Derecho Constitucional y Amparo",
    lead: "Defensa de derechos fundamentales mediante juicios de amparo, controversias constitucionales y acciones de inconstitucionalidad.",
    intro: "Defendemos los derechos fundamentales de personas, empresas e instituciones frente a actos de autoridad que vulneren la Constitución. Nuestra práctica se distingue por su profundidad técnica, rigor argumentativo y compromiso con la legalidad.",
    enfoque: "Cada caso constitucional requiere una visión integral: entender el acto de autoridad, evaluar su impacto jurídico y construir un argumento sólido que lo combata eficazmente. Nuestro equipo combina experiencia procesal con análisis doctrinal y jurisprudencial.",
    reto: "La defensa constitucional es más que un procedimiento: es una responsabilidad. En un contexto donde las decisiones públicas y privadas afectan derechos esenciales, actuamos con precisión, ética y compromiso, utilizando el juicio de amparo, la controversia constitucional y la acción de inconstitucionalidad como herramientas para restablecer el equilibrio jurídico.",
    itemsTitle: "Vías",
    items: ["Juicio de amparo", "Controversia constitucional", "Acción de inconstitucionalidad"],
    quote: "Defender la Constitución es defender la justicia misma.",
    image: recepcion,
    alt: "Recepción de la oficina de Ciudad de México con el letrero de Rincón Mayorga sobre mármol negro",
  },
  {
    key: "compliance",
    title: "Estrategia Regulatoria y Compliance",
    lead: "Diseño de políticas y estructuras jurídicas para cumplimiento normativo y prevención de riesgos.",
    intro: "Ayudamos a las organizaciones a navegar con seguridad en entornos regulatorios cada vez más exigentes. Nuestro equipo combina experiencia jurídica, visión empresarial y comprensión del marco normativo nacional e internacional.",
    enfoque: "La prevención es el eje de toda estrategia legal efectiva. Acompañamos a nuestros clientes en la creación, implementación y supervisión de programas de cumplimiento adaptados a su industria y tamaño. Desarrollamos manuales, políticas internas y estructuras de control que aseguran el cumplimiento con leyes financieras, fiscales, laborales, ambientales y de protección de datos.",
    reto: "Las empresas enfrentan un entorno normativo cambiante, donde un error puede generar consecuencias legales y de imagen. Nuestra labor es anticiparnos a esos riesgos: desde la evaluación de cumplimiento y debida diligencia, hasta la representación ante autoridades reguladoras.",
    itemsTitle: "Incluye",
    items: ["Programas de cumplimiento", "Manuales y políticas internas", "Debida diligencia", "Representación ante autoridades reguladoras"],
    quote: "El cumplimiento no es una obligación: es una estrategia de credibilidad y permanencia.",
    image: hero,
    alt: "Oficina de área abierta con paredes de vidrio y vista a la ciudad",
  },
];

export const otrasAreas = ["Acciones Colectivas", "Derecho Aeronáutico", "Derecho Bursátil", "Derecho Civil", "Derecho Electoral", "Licitaciones", "Derecho Mercantil", "Derecho Patrimonial", "Seguros y Fianzas"];

export const proceso = [
  { title: "Consulta inicial sin costo", text: "Reunión de 30 minutos." },
  { title: "Diseño de estrategia legal", text: "Plan de acción." },
  { title: "Ejecución con precisión", text: "Seguimiento personalizado." },
];

export const faq = [
  { q: "¿Qué tipo de asuntos atienden?", a: "Atendemos casos en litigio, arbitraje, amparo, derecho corporativo, fiscal y constitucional, así como en asesoría para empresas e inversionistas nacionales e internacionales." },
  { q: "¿Brindan atención a clientes fuera de México?", a: "Sí. Contamos con oficinas en Ciudad de México, Guadalajara y La Jolla, California, además de consultoría internacional en Europa (Estonia). Representamos clientes en diversos países y colaboramos con firmas aliadas." },
  { q: "¿Cómo se determinan los honorarios?", a: "Ofrecemos esquemas transparentes: tarifa fija, por etapas o bajo resultados, según la naturaleza del caso." },
];

export const publicaciones = [
  { title: "Reforma a la Ley de Amparo 2025: entre la tradición y la eficiencia procesal", by: "Ana Paula Ortega Decle y César Rincón", href: "https://www.rinconabogados.com/casos-de-estudio/reforma-a-la-ley-de-amparo-2025-entre-la-tradici%C3%B3n-y-la-eficiencia-procesal" },
];

export const team = [
  { name: "Virgilio Rincón Salas", role: "Fundador", photo: virgilio, bio: "Abogado postulante con más de 30 años de experiencia. Facultad de Derecho de la Universidad de Guadalajara, maestría por la misma; docente más de 10 años en su alma máter y en la Universidad Panamericana. Autor de «Apuntes de un litigante a la Ley de Amparo» y «La decadencia del Juicio de Amparo»." },
  { name: "César Rincón Mayorga", role: "Director General", photo: cesar, bio: "Abogado por el ITESM Campus Guadalajara (mención honorífica), Maestría en Derecho Constitucional (UNAM), cursa Doctorado en Derecho (UNAM); cursos en Harvard Law School. Alta especialidad en derecho constitucional, amparo, controversias constitucionales y acciones de inconstitucionalidad." },
  { name: "Hugo Orozco", role: "Abogado, Director de la Oficina de Guadalajara", photo: hugo, bio: "Más de 12 años de experiencia. Universidad de Guadalajara y maestría en Derecho Administrativo (UP Guadalajara). Presidente de la Academia de Estudios Alteños." },
  { name: "Ana Paula Ortega", role: "Abogada", photo: ana, bio: "Licenciada en Derecho con especialidad en Derecho Financiero (UNAM). Competencias de litigación y arbitraje internacional. Coautora del análisis sobre la reforma a la Ley de Amparo 2025." },
  { name: "Roberto González", role: "Abogado", photo: roberto, bio: "Licenciado en Derecho por la Universidad de Guadalajara (título 1990), más de 30 años de experiencia. Fue funcionario jurídico en Banca Promex, FIDELIQ y titular jurídico de la Delegación Regional Occidente del SAE." },
  { name: "Alejandro Rois", role: "Pasante", photo: alejandro, bio: "Estudiante de Derecho en la Universidad La Salle, inglés certificado por Cambridge. Experiencia en el área civil-mercantil." },
  { name: "Diana Favela", role: "Equipo administrativo, asistente de dirección", photo: diana, bio: "Más de 24 años de experiencia en administración, recursos humanos y contabilidad." },
  { name: "Quetzal Valdez", role: "Equipo administrativo", photo: quetzal, bio: "Recepción, canalización de llamadas, correspondencia y apoyo a clientes." },
];

export const photos = { hero, recepcion, sala, pasillo };
