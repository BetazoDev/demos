// Todo el texto sale del sitio anterior del despacho (Wayback 2023: Inicio y Especialidades), su página de Facebook y su ficha de Google.
export type Servicio = { key: string; title: string; text: string; items?: { name: string; text: string }[] };

export const descripcion = "Somos un despacho diseñado para ayudar a proteger y salvaguardar tus intereses frente a otros.";
export const promesa = "Reportándote a cada momento el avance de tu proceso para tu tranquilidad y confort, haciendo que tu proyecto tenga calidad y rapidez.";

export const servicios: Servicio[] = [
  {
    key: "divorcio",
    title: "Divorcio",
    text: "Administrativo, judicial y exprés.",
    items: [
      { name: "Administrativo", text: "Es voluntad de las partes y sin reservas." },
      { name: "Judicial", text: "A pesar de que exista oposición, el divorcio subsiste." },
      { name: "Exprés", text: "Estando ambos de acuerdo en cuanto a todas las cuestiones inherentes al matrimonio." },
    ],
  },
  { key: "pension-alimenticia", title: "Pensión alimenticia", text: "Comienzas a cobrar tu pensión desde el primer mes en que inicias tu juicio." },
  { key: "guarda-y-custodia", title: "Guarda y custodia", text: "Podrás recuperar o salvaguardar el cuidado de los que más quieres." },
  { key: "patria-potestad", title: "Patria potestad", text: "Perderá todo derecho o adquirirá todo derecho quien haya incumplido con las necesidades indispensables de un incapaz." },
  { key: "paternidad", title: "Reconocimiento o desconocimiento de paternidad", text: "Reconocer o desconocer un vínculo filial." },
  { key: "juicios-sucesorios", title: "Juicios sucesorios", text: "Obtendrás la titularidad que te corresponde por tu herencia, para que puedas escriturar." },
  { key: "interdiccion", title: "Interdicción", text: "Adquirirás la capacidad para resguardar a una persona con capacidades distintas." },
  { key: "concubinato", title: "Concubinato", text: "Acreditarlo con la finalidad de lograr un beneficio frente a otras instituciones." },
  { key: "dependencia-economica", title: "Dependencia económica", text: "Acreditar el vínculo existente entre familiares fallecidos y ustedes, para adquirir un beneficio por parte de alguna institución." },
  { key: "pasaportes-y-visas", title: "Pasaportes y visas", text: "Tramitación de citas, orientación y tips." },
  {
    key: "acuerdos-y-gestiones",
    title: "Derecho familiar, acuerdos y gestiones extrajudiciales",
    text: "Solución de controversias en el seno de la familia para resguardo y protección de los más desprotegidos.",
    items: [
      { name: "Acuerdos", text: "Convenios voluntarios para la solución de conflictos." },
      { name: "Gestiones extrajudiciales", text: "Tramitación de requerimientos y documentos." },
    ],
  },
];

// Reseñas de Google (calificación 4.9, 9 opiniones). Se corrigen erratas de ortografía; el sentido es el original.
export const resenas = [
  { author: "Daniela Vanegas", text: "Los mejores abogados, los recomendaría mil veces ya que hacen un trabajo espectacular y nos dan la tranquilidad y confianza que necesitamos!" },
  { author: "Victor Fabian Juarez Rosas", text: "Un excelente despacho de abogados, con buenos resultados en corto tiempo, muy recomendado y confiable, con un excelente trato y disposición; muchas gracias, abogados Martínez." },
  { author: "Alejandro A Vazquez", text: "Excelente servicio profesional. Puntualidad y responsabilidad los identifica." },
];
