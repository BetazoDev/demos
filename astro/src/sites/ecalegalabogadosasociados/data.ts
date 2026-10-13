import sala from "./assets/sala-audiencias.jpg";
import puertas from "./assets/puertas-sala.jpg";
import ciudad from "./assets/ciudad-hora-dorada.jpg";

// Todo sale de la página de Facebook del despacho y de su ficha de Google Maps.
export const areas = [
  { title: "Derecho Civil" },
  { title: "Derecho Familiar", note: "Pensiones alimenticias. Inscripción en el buró de deudores alimentarios." },
  { title: "Derecho Mercantil" },
  { title: "Derecho Administrativo" },
  { title: "Derecho Laboral" },
  { title: "Amparo" },
];

/** Reseñas de Google de 5 estrellas, texto literal y autor tal como aparece. */
export const quotes = [
  { text: "Excelente trato, muy amables y muy eficaces muchas gracias por ayudarme en mi caso... los recomiendo ampliamente.", author: "Yoshira Menez", when: "hace 3 años" },
  { text: "Excelente servicio, resolvieron el problema que tenía, muy recomendable.", author: "leonardo ortiz rodriguez", when: "hace 3 años" },
  { text: "Excelente forma de trabajo, eficiente y responsable. Lo recomiendo.", author: "Mayra GL", when: "hace 3 años" },
  { text: "La verdad una persona muy empática con la situación que uno le presenta, no se anda con rodeos y da una solución rápida y concisa.", author: "Victor alfonso Arroyo Renteria", when: "hace 3 años" },
  { text: "Por fin un lugar con seriedad y servicio que realmente se preocupa por la verdad y la justicia, en hora buena felicidades, éxito y prosperidad.", author: "Gabriel Meneses", when: "hace 3 años" },
];

export const photos = { sala, puertas, ciudad };
