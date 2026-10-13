// Todo el texto sale de ulvyn.com (inicio, servicios, cuatro páginas de área, nosotros), puesto en usted, y de su ficha de Google.
export type Area = {
  key: string;
  title: string;
  icon: string;
  lead: string;
  consult: string[];
  litigate: string[];
  extra?: string;
};

export const areas: Area[] = [
  {
    key: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    icon: "brain",
    lead: "Aseguramos la viabilidad jurídica y el despliegue seguro de sus desarrollos tecnológicos.",
    extra: "Enfoque «Legal by Design».",
    consult: ["Diagnóstico legal de implementación de IA", "Evaluación de riesgos algorítmicos", "Gobernanza y compliance en uso de datos", "Evaluación de impacto en protección de datos", "Diseño de políticas internas de IA", "Protección jurídica de software y algoritmos", "Estructuración contractual de modelos entrenados", "Auditoría de datasets y fuentes de entrenamiento", "Estrategia de propiedad sobre outputs generativos", "Prevención de contingencias regulatorias"],
    litigate: ["Demandas por uso indebido de datos", "Infracción de derechos de autor en IA", "Responsabilidad por decisiones automatizadas dañinas", "Defensa ante sanciones regulatorias", "Acciones por explotación ilegal de datasets"],
  },
  {
    key: "etica-automatizada",
    title: "Ética Automatizada",
    icon: "scales",
    lead: "Mitigamos los riesgos de discriminación y garantizamos que sus sistemas automatizados operen dentro del marco de los derechos fundamentales.",
    consult: ["Detección de sesgos algorítmicos", "Auditorías de transparencia y explicabilidad", "Políticas éticas de IA", "Supervisión humana (Human-in-the-Loop)", "Análisis de impacto en derechos fundamentales", "Protocolos de mitigación de discriminación algorítmica", "Capacitación ejecutiva en gobernanza algorítmica"],
    litigate: ["Discriminación automatizada", "Scoring crediticio injusto", "Exclusión laboral vía IA", "Violación de derechos humanos por sistemas automatizados", "Peritajes sobre sesgo algorítmico"],
  },
  {
    key: "robotica-avanzada",
    title: "Robótica Avanzada",
    icon: "robot",
    lead: "Definimos y defendemos la responsabilidad legal en la interacción entre humanos y máquinas autónomas.",
    consult: ["Riesgos en implementación de robots industriales", "Contratos en robótica colaborativa", "Compliance de drones", "Responsabilidad en vehículos autónomos", "Cadena fabricante, integrador y operador", "Auditoría de seguridad en automatización física", "Asignación contractual de responsabilidad"],
    litigate: ["Responsabilidad civil por accidentes autónomos", "Defectos de diseño o programación", "Lesiones laborales por robots colaborativos", "Responsabilidad penal por negligencia tecnológica", "Litigios contractuales por implementación fallida"],
  },
  {
    key: "litigios-tecnologicos",
    title: "Litigios Tecnológicos",
    icon: "gavel",
    lead: "Protegemos sus activos, blindamos sus proyectos y combatimos la sobrerregulación que frena su innovación.",
    consult: ["Estrategia regulatoria en tecnología", "Riesgos en plataformas digitales", "Protección de activos tecnológicos", "Competencia desleal digital", "Contratos en proyectos tecnológicos", "Compliance en telecomunicaciones y servicios digitales", "Estrategia ante investigaciones tecnológicas"],
    litigate: ["Amparos contra regulación excesiva", "Competencia desleal digital", "Defensa penal por piratería digital", "Disputas contractuales tecnológicas (SLAs, software, licenciamiento)", "Daños tecnológicos complejos (informática forense)"],
  },
];

export const definicion = "Human-AI Interaction Law: el derecho de la interacción entre humanos y sistemas inteligentes.";

export const steps = [
  { title: "Agende la consultoría", text: "Reserve su sesión estratégica, presencial o en línea." },
  { title: "Revisión del caso", text: "Análisis de riesgos, impacto tecnológico y opciones legales." },
  { title: "Acción jurídica", text: "Recomendaciones preventivas y, si procede, litigio estratégico." },
];

export const director = {
  name: "Germán Martínez Saldaña",
  role: "Director",
  bio: "Maestro en Derecho Constitucional por la UNAM y pionero en el Derecho de Sistemas Autónomos a nivel nacional. Germán traduce la alta ingeniería en defensas jurídicas inquebrantables, abordando los retos de la Inteligencia Artificial desde la óptica comercial, la ética automatizada y la protección estricta de los derechos fundamentales.",
};

export const mision = "Defender derechos fundamentales e intereses estratégicos frente a tecnologías emergentes, mediante consultoría y litigio especializado.";
export const valores = ["Excelencia jurídica", "Integridad ética", "Actualización tecnológica permanente", "Innovación responsable", "Independencia y firmeza", "Compromiso con el sistema jurídico mexicano"];

export const faqs = [
  { q: "¿Qué es el derecho de inteligencia artificial en México?", a: "Es el conjunto de normas, regulaciones y criterios jurídicos que rigen el desarrollo, implementación y uso de sistemas de IA." },
  { q: "¿Dónde están ubicados y atienden en toda la República?", a: "Nuestras oficinas están en Ignacio L. Vallarta 1, 3er piso, colonia Tabacalera, Ciudad de México. Atendemos en toda la República, de forma presencial y en línea." },
  { q: "¿Ofrecen consultoría a startups y PyMEs tecnológicas?", a: "Sí. Atendemos a startups, PyMEs tecnológicas, empresas de automatización industrial, desarrolladores de software y fintech." },
];

export const serviceSchema = (a: Area, origin: URL | undefined) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: a.title,
  description: a.lead,
  provider: { "@id": new URL("/ulvyn#organizacion", origin).href },
  areaServed: "México",
});
