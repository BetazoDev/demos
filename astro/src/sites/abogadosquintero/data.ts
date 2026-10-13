import madre from "./assets/madre-abuela.jpg";
import mano from "./assets/mano-escribiendo.jpg";

// Todo el texto sale de abogadosquintero.com (sitio de una página). Se corrigen faltas de ortografía; no se usan cifras ni
// testimonios de la plantilla (sin respaldo), ni «desde 1963», ni el FAQ (cita datos legales sin fuente).
export type Area = { key: string; title: string; text: string[]; items?: string[] };

export const areas: Area[] = [
  {
    key: "pension-alimenticia",
    title: "Pensión alimenticia",
    text: ["Aumento, reducción o cancelación.", "Defendemos tus derechos como madre o padre, buscando soluciones que garanticen el bienestar de tus hijos."],
  },
  {
    key: "divorcio",
    title: "Divorcio",
    text: ["Incausado, voluntario y administrativo.", "Asesoramos en todo momento el proceso de este juicio protegiendo tus intereses y buscando acuerdos justos para las partes involucradas."],
  },
  {
    key: "testamentarios-y-sucesiones",
    title: "Testamentarios y sucesiones",
    text: ["Te brindamos asesoría legal, asegurando que tus bienes sean distribuidos conforme a tus deseos y protegiendo a tus seres queridos en un futuro.", "Nos especializamos en la tramitación de juicios sucesorios, tanto testamentarios como intestamentarios, brindando opciones tanto judiciales como notariales."],
  },
  {
    key: "guarda-y-custodia",
    title: "Guarda y custodia, visitas y convivencias",
    text: ["Juicios relacionados con la guarda y custodia, las visitas y convivencias y la sustracción de menores."],
    items: ["Pérdida de la patria potestad", "Suspensión de la patria potestad", "Limitación de la patria potestad"],
  },
  {
    key: "otros-asuntos-familiares",
    title: "Otros asuntos familiares",
    text: ["Nos encargamos de la rectificación de actas, la acreditación de concubinato y los juicios de interdicción."],
  },
  {
    key: "modificacion-de-acuerdos",
    title: "Modificación de acuerdos previos",
    text: ["Nos especializamos en modificar acuerdos previos para adaptarlos a las nuevas circunstancias y necesidades de nuestros clientes, brindando soluciones justas y equitativas.", "Nuestro equipo evalúa cuidadosamente los cambios relevantes, como situaciones financieras o necesidades de los hijos, para proporcionar asesoría legal y representación efectiva en la solicitud de modificaciones adecuadas."],
  },
  {
    key: "gestiones",
    title: "Gestiones",
    text: ["En Abogados Quintero te ayudamos en las gestiones de tus asuntos, como por ejemplo:"],
    items: ["Gestión para trámites de pensiones", "Obtención de documentos", "Devoluciones de expedientes", "Obtención de copias certificadas", "Asistencia para elaboración de escritos", "Avalúos y peritajes"],
  },
];

export const tambien = "También: compra y venta de inmuebles, contratos y convenios.";

export const photos = { madre, mano };

export const esperar = [
  { title: "Compromiso", text: "Compromiso inquebrantable en la defensa de tus intereses." },
  { title: "Atención", text: "Respuestas rápidas y claras a todas tus preguntas y preocupaciones." },
  { title: "Confidencialidad", text: "Confidencialidad absoluta y respeto por tu privacidad." },
];

export const texto = {
  tranquilidad: "Nuestra prioridad es brindar tranquilidad a su familia y ofrecer asesoría en cada etapa del proceso.",
  gestion: "Gestionaremos su proceso legal de la forma más oportuna y eficiente posible, buscando alcanzar resultados favorables.",
  amplia: "Ofrecemos una amplia gama de servicios legales y asesoramiento en el ámbito familiar de los cuales destacan:",
  cotizacion: "Rellene para solicitar más información y una cotización personalizada por nuestro equipo de abogados.",
};
