import oficina from "./assets/oficina-noche.jpg";
import aldaba from "./assets/aldaba-leon.jpg";

// Servicios tal como el despacho los publica en su ficha de Google (Google Posts), puestos en «usted».
export type Area = { key: string; title: string; lead: string };

export const areas: Area[] = [
  { key: "materia-penal", title: "Materia penal", lead: "¿Le acusan injustificadamente de algún delito? Somos especialistas en materia penal." },
  { key: "ministerio-publico", title: "Asistencia ante el Ministerio Público", lead: "Contamos con asistencia legal ante agente del Ministerio Público las 24 horas." },
  { key: "pension-alimenticia", title: "Pensión alimenticia", lead: "¿Tiene problemas de pensión alimenticia? Nosotros le ayudamos." },
  { key: "intestados", title: "Intestados (sucesiones)", lead: "Si los bienes de sus padres quedaron intestados, somos su mejor opción." },
  { key: "familiar-y-civil", title: "Materia familiar y civil", lead: "Materia familiar y civil en la Ciudad de México y el Estado de México." },
];

// Reseñas de Google (cita literal, autor tal como aparece, antigüedad relativa de la fecha de lectura).
export const reviews = [
  {
    text: "Sin lugar a duda muy recomendable y súper profesionales. En especial a Lic. Julio Cesar ha sido muy atento desde un principio, resolviendo todas mis dudas. Es apreciable el interés por mantener puntualmente informado al cliente, satisfecha con el servicio recibido. Muchas gracias",
    author: "Maria Lopez",
    when: "hace 4 años",
  },
  {
    text: "La mejor opción si tienes un problema legal, el abogado titular ha demostrado ser conocedor de las leyes y dinámico en la forma de llevar los asuntos, aclarando cualquier duda y estando al pendiente de los juicios y sus clientes en todo momento.",
    author: "Gabriela Rojas herrera",
    when: "hace 2 años",
  },
  {
    text: "Un excelente trabajo, muy profesional, cumpliendo los tiempos, la verdad es que me ayudo en todo el proceso y siempre explicándome con lujo de detalle, lo recomiendo ampliamente.",
    author: "Alejandra Osornio",
    when: "hace 4 años",
  },
];

export const photos = { oficina, aldaba };
