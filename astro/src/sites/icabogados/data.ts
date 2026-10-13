import horacio from "./assets/horacio-cuevas.jpg";
import cesar from "./assets/cesar-tarello.jpg";
import alejandra from "./assets/alejandra-de-la-isla.jpg";
import arturo from "./assets/arturo-bravo.jpg";
import myriam from "./assets/myriam-lopez-cardenas.jpg";
import joana from "./assets/joana-olvera.jpg";
import jorge from "./assets/jorge-rodriguez.jpg";
import juan from "./assets/juan-salazar.jpg";
import moises from "./assets/moises-sanchez.jpg";
import type { Img } from "@/kit/types";

// Texto de icabogados.com (inicio, equipo y artículos; Wayback 2019-2025). Las bios son de 2019-2020: confirmar con el despacho.
export const home = {
  headline: "Somos los abogados que quieres de tu lado",
  lede: "Porque nuestros contrarios nos temen. Litigio y asesoría patrimonial, de empresa e inversión extranjera, en Ciudad de México y Querétaro.",
  statement: "Nuestro récord de éxito es alto, al igual que nuestra honestidad al pronosticar la posibilidad de éxito.",
  intro: [
    "En el año 2003 comenzamos brindando servicios especializados en Derecho Administrativo, Constitucional e Inversión Extranjera.",
    "Desde el año 2005 brindamos servicios a medianas y grandes empresas transnacionales.",
  ],
  introMore: "Nos expandimos a Derecho Comercial, Corporativo, Litigio, Telecomunicaciones y Energía, y a la representación de afectados en casos penales de daños al patrimonio, mediante alianzas con abogados de confianza. Cada oficina local mantiene su autonomía, pero opera bajo la misma marca.",
};

export const values = [
  { title: "Honestidad", text: "Siempre te decimos la verdad con alto profesionalismo." },
  { title: "Compromiso", text: "Entendemos tu situación particular y nos comprometemos con ella." },
  { title: "Integridad", text: "Somos íntegros, hacemos lo que prometemos." },
  { title: "Dedicación", text: "Peleamos incansablemente." },
];

export const stats = [
  { value: "2003", label: "año en que comenzamos, con Derecho Administrativo, Constitucional e Inversión Extranjera" },
  { value: "+90%", label: "tasa de éxito, según el despacho" },
  { value: "US$50", label: "millones de dólares: valor total acumulado de las adquisiciones y fusiones en las que hemos participado" },
];

export type Person = { name: string; role?: string; bio: string; photo: Img };
export const team: Person[] = [
  { name: "Horacio Cuevas M.B.A.", bio: "Con doble nacionalidad, mexicana y canadiense. Fue socio director de despachos en México, Director Ejecutivo de Política Energética Internacional del Gobierno de Alberta y Experto en Marcos Regulatorios del BID en Washington D.C. M.B.A. con especialización en Energía y Medio Ambiente por la Universidad de Alberta y Licenciado en Derecho con honores por la Universidad Autónoma de Querétaro. Habla español e inglés.", photo: horacio },
  { name: "Cesar Tarello", role: "Abogado litigante", bio: "Ha llevado más de mil casos complejos de litigio civil, electoral, administrativo, constitucional y agrario. Licenciado con honores por la Universidad Autónoma de Querétaro (1998), con maestría en Derecho. Profesor de derecho constitucional y administrativo, miembro de la Asociación de Profesionales del Derecho en Querétaro A.C. y asesor de la Legislatura de Querétaro.", photo: cesar },
  { name: "Alejandra de la Isla", role: "Abogada, litigio constitucional y administrativo", bio: "Experta en derecho constitucional y juicio de amparo, con litigio administrativo, electoral, civil y familiar; ha defendido asuntos de telecomunicaciones. Asesora legislativa de la LVIII Legislatura de Querétaro, Especialista en Justicia Constitucional por la Universidad de Castilla-La Mancha (2019) y docente en la Universidad Autónoma de Querétaro.", photo: alejandra },
  { name: "Arturo Bravo", role: "Abogado, laboral empresarial, extranjería y migración", bio: "Ha participado en la constitución de empresas con capital extranjero en el Bajío y es referente en migración y extranjería en Querétaro. Maestría en Derecho Corporativo por la Universidad Anáhuac y miembro de la Asociación Nacional de Abogados de Empresa S.C.", photo: arturo },
  { name: "Myriam López Cárdenas", role: "Abogada, civil y administrativo", bio: "Experiencia en derecho civil y administrativo, con capacidad analítica en el análisis de documentación y la formulación de conclusiones legales. Egresada de la UNAM, con diplomado en Derecho Procesal Fiscal.", photo: myriam },
  { name: "Joana Olvera", role: "Abogada, laboral empresarial y migración", bio: "Egresada de la Universidad Autónoma de Querétaro. Asesora en contratos, terminación de relaciones laborales, demandas, temas sindicales, inspecciones y trámites migratorios para personal extranjero.", photo: joana },
  { name: "Jorge Rodríguez", role: "Abogado, civil y penal", bio: "Experiencia en materia civil y penal en múltiples estados; ha representado a empresas, principalmente de telecomunicaciones.", photo: jorge },
  { name: "Juan Salazar", role: "Abogado, litigio administrativo, constitucional y civil", bio: "Experiencia en litigio administrativo, constitucional y civil, con proyectos industriales en energía y turismo. Posgrados en Litigio Civil y Derecho Ambiental por la Universidad Iberoamericana y en Derecho Administrativo por el ITAM.", photo: juan },
  { name: "Moisés Sánchez", role: "Abogado, civil y mercantil", bio: "Experiencia en materia civil y mercantil y en el Servicio Postal Mexicano; representa empresas de distintos giros, principalmente de telecomunicaciones.", photo: moises },
];

// Reseñas de Google (hace 6 años). La de Ashley Sartison es la traducción automática de Google; la de Tom Kieckhafer está en su idioma original.
export const quotes = [
  { text: "Recomiendo ampliamente este bufete. Son muy competentes, receptivos, se comunican con claridad y rapidez en inglés y español, y lo más importante, son honestos con sus honorarios. Siempre buscan la mejor solución para obtener la resolución más rápida.", author: "Ashley Sartison", when: "hace 6 años" },
  { text: "IC Abogados SC has done an amazing job for our HOA over the past two years. The timely communication and thorough explanations have enabled us to make critical decisions quickly.", author: "TOM KIECKHAFER", when: "hace 6 años", lang: "en" },
];
