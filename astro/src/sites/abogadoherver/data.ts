import francisco from "./assets/equipo-francisco-gomez.jpg";
import edgar from "./assets/equipo-edgar-herver-hd.jpg";
import dante from "./assets/equipo-dante-vera.jpg";
import armando from "./assets/equipo-armando-lopez.jpg";

// Todo el texto sale de abogadoherver.com (única página), Facebook y Google Maps. Ver lista-2/42-abogadoherver/brand.json.
export type Area = { key: string; title: string; short: string; lead: string; items: string[]; itemsTitle: string; lawyer: string };

export const lema = "Más que abogados, somos aliados estratégicos en la protección de tus derechos.";
export const descripcion = "Especialistas en Derecho Civil, Familiar y Penal en Ciudad de México. Asesoría legal, litigio y defensa de tus derechos.";
export const confianza = "Abogados profesionales y de confianza, comprometidos con la defensa de tus derechos, la protección de tus intereses y la búsqueda de soluciones legales estratégicas para cada asunto.";
export const asesoria = "Brindamos asesoría y representación, protegiendo tus derechos, patrimonio e intereses mediante estrategias legales sólidas y soluciones jurídicas efectivas.";
export const equipoFrase = "En Herver Abogados contamos con un equipo de colaboradores comprometidos con la excelencia.";

export const areas: Area[] = [
  {
    key: "civil",
    title: "Derecho Civil",
    short: "Civil",
    lead: "Juicios ordinarios civiles, contratos, daños y perjuicios, prescripción, reivindicación de inmuebles y arrendamiento.",
    itemsTitle: "Asuntos que atendemos",
    items: [
      "Juicios ordinarios civiles",
      "Cumplimiento, rescisión y nulidad de contratos",
      "Juicios de incumplimiento de contrato",
      "Reclamación de daños y perjuicios",
      "Responsabilidad civil",
      "Prescripción positiva y negativa (usucapión)",
      "Reivindicación y recuperación de inmuebles",
      "Juicios de arrendamiento",
      "Juicios de otorgamiento y firma de escritura",
    ],
    lawyer: "edgar",
  },
  {
    key: "familiar",
    title: "Derecho Familiar",
    short: "Familiar",
    lead: "Divorcio voluntario e incausado, pensión alimenticia, guarda y custodia, convivencias y patria potestad.",
    itemsTitle: "Asuntos que atendemos",
    items: [
      "Divorcio voluntario e incausado",
      "Pensión alimenticia: incremento, reducción y cese de alimentos",
      "Guarda y custodia de menores",
      "Reconocimiento de paternidad",
      "Régimen de convivencias",
      "Sucesiones familiares",
      "Juicios de pérdida o suspensión de patria potestad",
    ],
    lawyer: "dante",
  },
  {
    key: "penal",
    title: "Derecho Penal",
    short: "Penal",
    lead: "Asesoría y defensa en procedimientos penales, denuncias y querellas, víctimas, imputados y juicio oral.",
    itemsTitle: "Asuntos que atendemos",
    items: [
      "Asesoría y defensa en procedimientos penales",
      "Presentación y seguimiento de denuncias y querellas",
      "Representación de víctimas u ofendidos",
      "Defensa de personas investigadas o imputadas",
      "Audiencias iniciales, intermedias y de juicio oral",
      "Audiencias ante juzgados de control",
      "Carpetas de investigación",
      "Amparos en materia penal",
      "Delitos patrimoniales",
      "Delitos familiares",
    ],
    lawyer: "francisco",
  },
];

export const team = [
  { id: "edgar", name: "Edgar Herver", role: "Derecho Civil", photo: edgar, position: "50% 22%" },
  { id: "dante", name: "Dante Vera", role: "Derecho Familiar", photo: dante, position: "50% 24%" },
  { id: "francisco", name: "Francisco Gomez", role: "Derecho Penal", photo: francisco, position: "50% 22%" },
  { id: "armando", name: "Armando López", role: "Derecho Laboral", photo: armando, position: "50% 14%" },
];

// Reseñas de Google (5.0, 250 reseñas). Solo las cinco que se pudieron leer; textos literales, sin cambios.
export const resenas = [
  { author: "Raúl García Reséndiz", text: "Excelente atención y servicio. El equipo fue muy profesional, atento y claro al explicar cada paso del proceso. Resolvieron mis dudas de manera rápida y me brindaron confianza en todo momento. Recomiendo ampliamente sus servicios por su seriedad, compromiso y trato amable." },
  { author: "Edwyn González", text: "El Lic. Armando López el mejor asesor para hacer mi testamento. Él me explicó todo con mucha claridad, me dio las mejores recomendaciones según mi situación y redactó el documento perfecto y legal. Ahora tengo la tranquilidad de saber que todo quedará en orden." },
  { author: "Michell Ramirez", text: "Tuve una excelente experiencia con este bufete de abogados. Desde el primer momento recibí una atención profesional, amable y clara. Los abogados demostraron un amplio conocimiento de la ley y me explicaron cada paso del proceso de manera sencilla, resolviendo todas mis dudas." },
  { author: "gael", text: "Excelente despacho de abogados. Destacan por su profesionalismo, atención personalizada y amplio conocimiento jurídico. Brindan asesoría clara, acompañamiento constante y soluciones eficaces a los asuntos legales. Totalmente recomendable por su compromiso y seriedad." },
  { author: "Patricia Ramirez", text: "Un profesional excelente el lic. Armando López me transmitió mucha seguridad y tranquilidad desde la primera consulta. Manejó mi asunto con mucha seriedad, ética y eficiencia." },
];
