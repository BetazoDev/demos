import sala from "./assets/sala-consulta.jpg";
import mazo from "./assets/mazo-y-libros.jpg";
import escritorio from "./assets/escritorio.jpg";

// Textos de «Nuestras especialidades» de abogadostapiayasociados.com.mx, con erratas corregidas
// («permitenos», «se refiera», «de de», «la que la»). `lead` es la primera idea del mismo texto.
export type Area = { key: string; title: string; lead: string; text: string };

export const areas: Area[] = [
  {
    key: "divorcio",
    title: "Divorcio",
    lead: "Por divorcio se entiende la disolución legal del matrimonio.",
    text: "Por divorcio se entiende la disolución legal del matrimonio. Para las parejas que lo viven, se trata de un proceso muy difícil. Cuando se toma la decisión de disolver el vínculo matrimonial, muchas dudas llegan, permítanos apoyarle en dicho proceso.",
  },
  {
    key: "guarda-y-custodia",
    title: "Guarda y custodia",
    lead: "Es el derecho y obligación que tienen los padres con sus menores hijos respecto de cuidados y cohabitar.",
    text: "La guarda y custodia es el derecho y obligación que tienen los padres con sus menores hijos respecto de cuidados y cohabitar. De una forma clara se podría definir que la guarda y custodia se refiere a con quién vivirá el hijo después del divorcio, con todos los efectos relativos al cuidado de un menor.",
  },
  {
    key: "pension-alimenticia",
    title: "Pensión alimenticia",
    lead: "Derecho del acreedor alimentario de recibir los bienes necesarios para garantizar su subsistencia.",
    text: "El concepto de alimentos o pensión alimenticia, en el Derecho Familiar, se refiere a aquel derecho con el que cuenta un sujeto denominado acreedor alimentario, de recibir los bienes necesarios para garantizar su subsistencia, por parte de otro que es el deudor alimentario, lo anterior en razón de algún grado de filiación, matrimonio o concubinato.",
  },
  {
    key: "juicio-sucesorio",
    title: "Juicio sucesorio",
    lead: "La sucesión hereditaria se presenta una vez que muere una persona, transmitiendo su patrimonio.",
    text: "La sucesión hereditaria es la figura legal que se presenta una vez que muere una persona, transmitiendo su patrimonio y puede realizarse sobre todos sus bienes, llamándose a esto herencia; o sobre bienes determinados, a lo que se llama legado. La herencia son todas las cosas que una persona deja al morir.",
  },
  {
    key: "violencia-familiar",
    title: "Violencia familiar",
    lead: "Actos de agresión que se producen en el seno de un hogar, por parte de uno de los miembros contra otros.",
    text: "La violencia familiar son todos los actos de agresión que se producen en el seno de un hogar, es decir, la violencia ejercida en el terreno de la convivencia familiar, por parte de uno de los miembros contra otros, contra alguno o contra todos ellos.",
  },
  {
    key: "adopcion",
    title: "Adopción",
    lead: "La adopción simple genera solo derechos y deberes entre el adoptante y el adoptado.",
    text: "La adopción simple es la que genera solo derechos y deberes entre el adoptante y el adoptado, pero no crea relación alguna de parentesco entre el adoptado y los parientes del adoptante ni entre el adoptante y los parientes del adoptado. Todo se reduce a la relación entre adoptante y adoptado.",
  },
];

export const photos = { sala, mazo, escritorio };
