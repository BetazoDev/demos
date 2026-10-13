import estatua from "./assets/estatua.jpg";
import balanza from "./assets/balanza.jpg";
import libros from "./assets/libros.jpg";
import mazo from "./assets/mazo.jpg";

// Todo el texto sale de glab.mx (Misión y Visión, Acerca de Nosotros, Servicios y Contacto) y de la página de Facebook del despacho.
// Los servicios solo se publican como títulos: no se les inventa descripción. Equipo y paquetes de 2021: descontinuados, no se usan.
export type Area = { key: string; title: string };

export const areas: Area[] = [
  { key: "civil", title: "Asesoría integral en materia civil" },
  { key: "penal", title: "Asesoría integral en materia penal" },
  { key: "notarial-registral", title: "Asesoría integral en materia notarial y registral" },
  { key: "mercantil", title: "Asesoría integral en materia mercantil" },
  { key: "otros", title: "Otros rubros en los que nos especializamos" },
];

export const photos = { estatua, balanza, libros, mazo };

export const texto = {
  lema: "¡La nueva cara del Mundo Jurídico!",
  lede: "Te brindamos soluciones legales confiables y efectivas.",
  estatico: "El derecho no es estático. La complejidad del mundo actual exige una visión fresca, dinámica y, sobre todo, humana.",
  construimos: "No solo defendemos intereses; construimos soluciones estratégicas que se adaptan a la nueva realidad jurídica.",
  importante: "Para Gómez Luna Abogados SC, ¡lo más importante eres tú!",
  especializacion: "En Gómez Luna Abogados SC, encontrarás el más alto grado de especialización y trato profesional.",
  mision: "Proporcionar a nuestros clientes un servicio de calidad con un grado de especialización acorde a sus necesidades para la resolución de los conflictos.",
  vision: "En Gómez Luna Abogados SC, buscamos el posicionamiento como una de las mejores firmas dentro de la industria jurídica, atendiendo a distintos segmentos del mercado y manteniéndonos siempre a la vanguardia en nuestros procesos y servicios.",
  acerca: [
    "Nuestra firma fue fundada en el año 2017, a través de una estructura de respeto, apoyo y con un servicio de la más alta calidad y trato profesional a sus clientes.",
    "Siendo el sueño de dos hermanos que comparten la misma profesión y pasión por el derecho, encontraron en su actuar una necesidad de otorgar un servicio empático, comprometido, socialmente responsable y con base en resultados, con el afán de dignificar y engrandecer su profesión; motivo por el cual se dieron a la tarea de crear Gómez Luna Abogados Sociedad Civil.",
    "En Gómez Luna Abogados SC, las consultas y servicios legales que otorgamos a nuestros clientes se encuentran bajo el más estricto apego a las normas y al profesionalismo que nos caracteriza, actuando siempre en congruencia con la confidencialidad y respeto que el cliente merece.",
  ],
};
