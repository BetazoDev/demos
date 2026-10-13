import fachada from "./assets/fachada.jpg";
import interior from "./assets/interior.jpg";

// Todo el texto sale de centraldeabogados.com (home actual) y de su versión de 2021. No hay equipo, cifras ni logo publicados.
export type Area = { title: string; text?: string };

export const areas: Area[] = [
  { title: "Cobro de pagarés y recuperación de créditos", text: "¿Prestaste dinero y no te pagan? Contrata nuestros servicios, te ayudamos a recuperar lo que te adeudan." },
  { title: "Cobro de seguros" },
  { title: "Divorcios y alimentos", text: "Te ofrecemos trato personalizado y discreción, asesorándote y guiándote en esos momentos en que los sentimientos nublan el entendimiento." },
  { title: "Pago por muerte o lesiones por atropellamiento o inferidas por máquinas" },
  { title: "Prescripción positiva de inmuebles (usucapión), propiedad y posesión" },
  { title: "Trámite de herencias (juicio sucesorio)", text: "Tramitamos tu herencia mediante juicio sucesorio con testamento (sucesión testamentaria) o sin testamento (sucesión intestamentaria)." },
  { title: "Otorgamiento y firma de escrituras" },
  { title: "Procedimientos de responsabilidad administrativa (PRA)" },
  { title: "Conciliación laboral prejudicial y despidos injustificados", text: "Consejo: no firmes nada hasta que no estés convencido de que te liquidan de acuerdo a la ley. Ven y consúltanos, con gusto te ayudaremos." },
  { title: "Carpetas de investigación y audiencias de control (penal)" },
  { title: "Gestoría en Registro Civil y Registro de la Propiedad y el Comercio", text: "Nuestro equipo de profesionales se encarga de la gestoría que necesitas." },
  { title: "Corresponsalía y segunda opinión", text: "Corresponsalía a despachos, empresas y personas físicas foráneas; segunda opinión." },
];

// «Te representamos en juicios para:» tal como aparece en la home actual
export const juicios = [
  "Cobro de pagarés",
  "Otorgamiento y firma de escrituras",
  "Cobro de seguros",
  "Divorcios",
  "Pago por muerte o lesiones por atropellamiento o inferidas por máquinas",
  "Prescripción positiva de inmuebles (usucapión)",
  "Trámite de herencias",
  "Procedimientos de responsabilidad administrativa (PRA)",
  "Conciliación laboral prejudicial",
  "Despidos injustificados",
];

export const seriedad = [
  { icon: "scales", title: "Asesoría jurídica" },
  { icon: "gavel", title: "Representación en juicios" },
  { icon: "chats-circle", title: "Segunda opinión" },
  { icon: "handshake", title: "Corresponsalía a despachos, empresas y personas físicas foráneas" },
];

export const materias = ["Civil", "Mercantil", "Penal", "Laboral", "Familiar"];

export const photos = { fachada, interior };
