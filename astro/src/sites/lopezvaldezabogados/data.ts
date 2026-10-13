import marco from "./assets/marco-escritorio.jpg";
import hero from "./assets/hero-marco.jpg";
import libros from "./assets/libros.jpg";
import sala from "./assets/sala-juntas.jpg";
import justicia from "./assets/justicia-logo.jpg";
import escritorio from "./assets/escritorio.jpg";
import juarez from "./assets/juarez.jpg";

// Todo el texto sale de lopezvaldezabogados.com (Inicio, Servicios, Quiénes somos, Contacto) y de la ficha de Google.
export type Area = { key: string; title: string; short: string; lead: string; itemsTitle?: string; items?: string[] };

export const areas: Area[] = [
  {
    key: "investigacion",
    title: "Etapa de investigación",
    short: "Investigación",
    lead: "Asesoría, consultoría y litigio en la investigación inicial y en la investigación complementaria.",
    itemsTitle: "Ofrecemos asesoría, consultoría y litigio en",
    items: [
      "Investigación inicial, que comienza con la denuncia, querella u otro requisito equivalente y concluye cuando el imputado queda a disposición del juez de control para que se le formule imputación.",
      "Investigación complementaria, que comprende desde la formulación de la imputación y se agota una vez que se haya cerrado la investigación.",
    ],
  },
  {
    key: "intermedia",
    title: "Etapa intermedia o de preparación a juicio",
    short: "Preparación a juicio",
    lead: "Asesoría, consultoría y litigio en la contestación de acusación y en el ofrecimiento de medios de prueba.",
    itemsTitle: "Ofrecemos asesoría, consultoría y litigio en",
    items: ["Contestación de acusación", "Ofrecimiento de medios de prueba"],
  },
  {
    key: "juicio",
    title: "Etapa de juicio",
    short: "Juicio",
    lead: "Comprende desde que se recibe el auto de apertura a juicio hasta la sentencia emitida por el tribunal de enjuiciamiento.",
    itemsTitle: "Ofrecemos asesoría, consultoría y litigio en",
    items: ["Alegato de apertura", "Alegato de clausura", "Interrogatorio", "Contrainterrogatorio"],
  },
  {
    key: "justicia-restaurativa",
    title: "Justicia restaurativa",
    short: "Justicia restaurativa",
    lead: "Asesoría y consultoría en mecanismos alternativos de solución de controversias, mediación, conciliación y junta restaurativa.",
    itemsTitle: "Ofrecemos asesoría y consultoría en",
    items: ["Mecanismos alternativos de solución de controversias", "Mediación", "Conciliación", "Junta restaurativa"],
  },
];

/** Servicio sin texto propio en el sitio actual: se menciona, no tiene página. */
export const amparo = "Amparo penal";

export const photos = { hero, libros, sala, justicia, escritorio, juarez, marco };

export const fundador = {
  name: "Mtro. Luis Marco Antonio López Valdez",
  role: "Socio fundador",
  photo: marco,
  intro:
    "Abogado penalista, licenciado en Derecho y maestro en Ciencias Penales por la Facultad de Derecho de la Universidad Anáhuac, candidato a doctor en Derecho por el Centro de Estudios Jurídicos Carbonell y egresado de la Academia de Destrezas en Litigación de California Western School of Law, en San Diego, California.",
  formacion: [
    "Licenciado en Derecho y maestro en Ciencias Penales por la Universidad Anáhuac.",
    "Candidato a doctor en Derecho por el Centro de Estudios Jurídicos Carbonell.",
    "Egresado de la Academia de Destrezas en Litigación de California Western School of Law, San Diego, California, EE. UU.",
    "Abogado certificado en conocimientos, habilidades y competencias en materia penal por el Tribunal Superior de Justicia del Estado de México.",
    "Estudios en técnicas de entrevistas e interrogatorios en los procedimientos penales por el FBI, y en balística forense y criminalística por el INACIPE.",
    "Diplomado en Seguridad Nacional por el CISEN.",
    "Miembro de la Comisión de Derecho Penal de la Barra Mexicana, Colegio de Abogados A.C. (BMA).",
  ],
  trayectoria: [
    { year: "1999", text: "Secretario particular de la Coordinadora General del Comité Nacional de Consulta y Participación de la Comunidad en Seguridad Pública (CONSEGU), Sistema Nacional de Seguridad Pública, Secretaría de Gobernación." },
    { year: "2001 a 2002", text: "Agente del Ministerio Público de la Federación, adscrito a la Fiscalía Especializada para la Atención de Delitos Contra la Salud (FEADS), Procuraduría General de la República." },
    { year: "2005", text: "Constituye la firma boutique López Valdez Abogados, junto con un grupo de abogados penalistas, para brindar asesoría jurídica y servicios legales especializados en materia penal." },
    { year: "2009 a 2016", text: "Capacitador certificado en el Sistema de Justicia Penal Acusatorio por la SETEC, Secretaría de Gobernación." },
    { year: "2014", text: "Implementa el Nuevo Sistema de Justicia Penal en el Estado de Veracruz, como Secretario Técnico del Consejo Consultivo para la Implementación del Sistema de Justicia Penal en ese estado." },
  ],
  docencia: [
    "Catedrático del Instituto Nacional de Ciencias Penales (INACIPE).",
    "Ha sido catedrático de Teoría del Delito, Teoría general del Proceso, Teoría de la Prueba, Justicia para Adolescentes, Garantías Constitucionales y Derechos Humanos, Delitos en Particular y Derecho Procesal Penal.",
    "Ha capacitado en el Sistema de Justicia Penal Acusatorio a policías, ministerios públicos, jueces y magistrados, locales y federales, en toda la República Mexicana.",
    "Ha impartido conferencias magistrales en procuración de justicia, seguridad pública, antilavado de dinero y delincuencia organizada.",
    "Ha sido miembro del Sistema Nacional de Investigadores (SNI, CONACYT).",
  ],
  libros: [
    { title: "Seguridad Nacional en México: Interferencias y Vulnerabilidades", note: "Autor. Editorial Porrúa." },
    { title: "Derecho Militar", note: "Coautor. Editorial Porrúa." },
    { title: "Temas Fundamentales del Código Nacional de Procedimientos Penales", note: "Coautor. Editorial Porrúa." },
    { title: "40 Años, 40 Voces", note: "Coautor. Libro homenaje por los 40 años de la fundación del INACIPE." },
  ],
  articulos: "Ha publicado artículos de derecho penal en las revistas Iuris Tantum (Facultad de Derecho de la Universidad Anáhuac), Criminogénesis y Nuevo Sistema de Justicia Penal (SETEC, Secretaría de Gobernación).",
};

export const firma = {
  historia: "En 2005 Marco López, con años de experiencia en áreas de seguridad pública y procuración de justicia del gobierno federal, junto con un grupo de abogados penalistas, constituye la firma boutique López Valdez Abogados, con el objetivo de brindar asesoría jurídica y prestación de servicios legales especializados en materia penal.",
  mision: "Brindamos seguridad, tranquilidad. Nuestra firma legal tiene como misión resolver y solucionar exitosamente los conflictos legales planteados por nuestros clientes y contribuir con nuestra práctica legal al fortalecimiento y consolidación del estado de derecho en México.",
  practica: "Atención personalizada, honestidad, lealtad, eficacia, eficiencia, humanismo y gran sensibilidad a los conflictos legales planteados por nuestros clientes. Somos una firma socialmente responsable y nuestro actuar se realiza en estricto apego a los principios de ética profesional del abogado.",
  atencion: "Nuestros abogados penalistas cuentan con estudios en Ciencias Penales y capacitación de destrezas en litigación. Brindamos atención personalizada con gran sensibilidad humana para entender a quién sufre el drama penal. Para nosotros es muy importante conocer lo que piensan y sienten nuestros clientes, con el objetivo de ayudarles de manera eficaz, eficiente y resolver exitosamente los asuntos legales que nos son encomendados. Juntos, cliente y abogado, diseñamos estrategias que coadyuvan en la construcción e implementación de potentes y efectivas acciones legales aplicables al caso en concreto.",
  capital: "Contamos con importante capital jurídico dentro del campo del derecho, amplia experiencia en Litigio Estratégico y Defensa Penal de personas y empresas, lo que nos permite cumplir exitosamente las exigencias de nuestros clientes.",
};

export const evaluacion = {
  title: "Evaluación jurídica estratégica",
  text: "Agende una sesión confidencial con un abogado penalista con más de 20 años de experiencia y reciba una evaluación jurídica clara, para diseñar una ruta legal sólida, preventiva y efectiva desde el primer momento.",
  href: "https://calendly.com/lopezvaldezabogados/consulta-juridica-estrategica",
};

export const stats = [
  { value: "+20", label: "años de experiencia como abogado penalista" },
  { value: "2005", label: "año de fundación de la firma" },
];

// Reseñas de Google (5 estrellas), tal como aparecen; solo se corrigen erratas evidentes de tecleo.
export const quotes = [
  { text: "El Lic. López Valdez tiene muchísimo conocimiento de la ley. Es sumamente profesional. Es muy dedicado, paciente y detallado en explicaciones y posibles causas a darse o a seguir. DOMINA de manera EXPERTA su materia y te brinda de verdad, la confianza que requieres de un abogado.", author: "Luz P. Claudia" },
  { text: "Espectacular atención a cliente. Mucho conocimiento de la ley, el proceso, técnicas jurídicas. Súper recomendado.", author: "NE Tourist" },
  { text: "Mi experiencia con el abogado Luis Marco Antonio López Valdés ha sido excelente, pues logró resolver mi caso legal de la manera más honesta y mejor posible. En poco tiempo. Anterior a él tuve otros dos abogados que no me resolvieron nada y me sacaron mucho dinero. Lo recomiendo ampliamente.", author: "Hayatim Benim" },
];
