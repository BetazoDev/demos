import escritorio from "./assets/escritorio-librero.jpg";
import sillon from "./assets/sillon-oficina.jpg";
import sala from "./assets/sala-de-espera.jpg";
import mark from "./assets/mark.png";

// Todo el texto sale del sitio del despacho y de su ficha de Google Maps (ver 05-chavezcleto/brand.json).
export type Area = { key: string; title: string; text: string; icon: string };

export const areas: Area[] = [
  { key: "civil", title: "Derecho Civil", icon: "bank", text: "Contratos, obligaciones, incumplimientos, controversias, arrendamiento, propiedad y demás asuntos de naturaleza civil." },
  { key: "familiar", title: "Derecho Familiar", icon: "users-three", text: "Divorcio, guarda y custodia, alimentos, convivencia, sucesiones y demás controversias relacionadas con el ámbito familiar." },
  { key: "mercantil", title: "Derecho Mercantil", icon: "briefcase", text: "Cobranza judicial y extrajudicial, contratos mercantiles, obligaciones, controversias comerciales y procedimientos judiciales." },
  { key: "penal", title: "Derecho Penal", icon: "scales", text: "Asesoría y representación jurídica, defensa penal y atención de procedimientos en sus distintas etapas." },
  { key: "laboral", title: "Derecho Laboral", icon: "identification-badge", text: "Asesoría y representación en conflictos laborales, relaciones de trabajo, terminaciones, prestaciones y procedimientos ante las autoridades competentes." },
  { key: "administrativo", title: "Derecho Administrativo", icon: "file-text", text: "Defensa y representación frente a actos de autoridades, procedimientos administrativos y controversias derivadas de la actuación administrativa." },
  { key: "amparo", title: "Amparo", icon: "shield-check", text: "Defensa de derechos frente a actos de autoridad mediante el juicio de amparo, conforme a las circunstancias particulares de cada asunto." },
  { key: "notarial", title: "Servicios y trámites notariales", icon: "stamp", text: "Asesoría y acompañamiento jurídico en la preparación y gestión de diversos actos y trámites de naturaleza notarial." },
];

export const photos = { escritorio, sillon, sala, mark };

// Reseñas de Google (5 estrellas), tal como aparecen en su ficha; solo se corrigen espacios y erratas menores.
export const reviews = [
  {
    text: "Excelente despacho. El abogado Erik Chavez tomó mi caso que ningún abogado quería tomar por lo complicado que era, estaba en riesgo el patrimonio de mi familia pero por su excelente trabajo, humanidad, puntualidad y costo acorde a mi alcance lo logramos y hoy puedo disfrutar el patrimonio de mi familia. Fue una bendición haberlo encontrado.",
    author: "Francisco Ramirez",
  },
  {
    text: "Recomendado ampliamente. Solucionó todos los problemas jurídicos que tuve de una forma favorable. Además con una calidad humana, respeto, y siempre servicial en abogado. No me cobró de más, y siempre me asesoró. También se ajustaba a mis horarios laborales. Estoy muy agradecido. Gracias por su labor.",
    author: "Mario Durán",
  },
  {
    text: "Un excelente servicio y atención. El Lic. Chavez da explicación a detalle de la situación que uno se encuentra y sobre todo es empático y humano ante la situación. Ampliamente recomendable y a un costo accesible. Muchas gracias Lic. Chavez.",
    author: "Ivan Romero",
  },
];

export const pillars = ["Experiencia", "Confidencialidad", "Compromiso"];
