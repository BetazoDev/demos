import columnas from "./assets/columnas.jpg";
import escalera from "./assets/escalera.jpg";
import apreton from "./assets/apreton.jpg";
import edificio from "./assets/edificio.jpg";
import concreto from "./assets/concreto.jpg";
import type { Img } from "@/kit/types";

// Todo el texto sale de abogadoscej.com (home, especialidades, páginas por materia) y de su ficha de Google.
export type Area = {
  key: string;
  title: string;
  /** Línea para índices y tarjetas (texto del sitio, condensado) */
  summary: string;
  /** Frase propia de la página de la materia, si la hay */
  lede?: string;
  items: string[];
  itemsTitle: string;
  more?: { title: string; items: string[] };
  note?: string;
  quote?: { text: string; by: string };
  plans?: { name: string; price: string }[];
  photo?: Img;
  alt?: string;
};

export const areas: Area[] = [
  {
    key: "familiar",
    title: "Derecho familiar",
    summary: "Divorcio, guarda y custodia, pensión alimenticia, convivencias familiares, herencias y sucesiones, paternidad y filiación.",
    itemsTitle: "Asuntos que atendemos",
    items: ["Divorcio", "Guarda y custodia", "Pensión alimenticia", "Convivencias familiares", "Herencias y sucesiones", "Paternidad y filiación", "Concubinato", "Adopción", "Patrimonio familiar"],
    photo: columnas,
    alt: "Columnas neoclásicas de mármol",
  },
  {
    key: "civil",
    title: "Civil e inmobiliario",
    summary: "Regularización de inmuebles, usucapión, arrendamiento y pólizas jurídicas, contratos y compraventa, escrituración, copropiedad, daños y responsabilidad civil.",
    lede: "Protección inmobiliaria antes de firmar.",
    itemsTitle: "Asuntos que atendemos",
    items: ["Arrendamiento y pólizas jurídicas: contratos, controversias y desalojo", "Contratos y compraventa", "Escrituración (acción proforma)", "Prescripción adquisitiva", "Copropiedad", "Daños y responsabilidad civil, daño moral", "Reconocimiento de posesión", "Remate inmobiliario: revisión legal antes de invertir", "Fraude inmobiliario y defensa del patrimonio"],
    photo: escalera,
    alt: "Escalera curva de mármol con iluminación cálida",
  },
  {
    key: "mercantil",
    title: "Mercantil y empresarial",
    summary: "Cobro de adeudos, juicios mercantiles, contratos comerciales, laboral patronal, corporativo y societario, protección de datos y planes jurídicos mensuales para empresas.",
    itemsTitle: "Asuntos que atendemos",
    items: ["Cobro de adeudos", "Juicios mercantiles", "Contratos comerciales", "Laboral patronal", "Corporativo y societario", "Protección de datos", "Mediación mercantil", "Títulos de crédito", "Comercio electrónico"],
    plans: [
      { name: "CEJ Emprendedor", price: "$3,900" },
      { name: "CEJ Negocio", price: "$6,900" },
      { name: "CEJ PyME 360", price: "$13,900" },
      { name: "Dirección Jurídica Externa", price: "$24,900" },
    ],
    note: "Precios en pesos mexicanos más IVA, por mes. Los litigios y asuntos específicos se cotizan por separado.",
    photo: apreton,
    alt: "Apretón de manos entre dos personas en traje frente a un edificio",
  },
  {
    key: "penal",
    title: "Defensa penal",
    summary: "Investigación y citatorios, detenciones y audiencias, fuero común y federal, defensa en juicio, atención a víctimas, amparo penal y recursos.",
    lede: "Defensa y atención a víctimas.",
    itemsTitle: "Qué incluye",
    items: ["Investigación y citatorios", "Detenciones y audiencias", "Fuero común y federal", "Defensa en juicio", "Atención a víctimas", "Amparo penal y recursos", "Atención a fraudes financieros e inmobiliarios"],
    more: {
      title: "Delitos",
      items: ["Fraude financiero, comercial, por internet o por llamadas", "Extorsión", "Robo a transeúnte, a transporte, de vehículos, a casa y a negocio", "Amenazas", "Lesiones", "Despojo", "Abuso de confianza", "Violencia familiar", "Daño a la propiedad", "Narcomenudeo", "Delitos sexuales", "Homicidio"],
    },
    photo: edificio,
    alt: "Torre de vidrio y bronce vista desde abajo",
  },
  {
    key: "amparo",
    title: "Amparo",
    summary: "Protección constitucional frente a actos y omisiones de las autoridades: amparo directo e indirecto en materia penal, administrativa, fiscal, civil, mercantil y familiar.",
    lede: "Protección constitucional frente a actos y omisiones de las autoridades.",
    itemsTitle: "Materias",
    items: ["Libertad y asuntos penales", "Multas y actos administrativos", "Créditos fiscales y embargos", "Sentencias civiles y mercantiles", "Resoluciones familiares", "Educación y titulación", "Salud y tratamientos", "Pensiones y seguridad social"],
    note: "Amparo directo e indirecto.",
    quote: { text: "Que todo el que se queje con justicia, tenga un tribunal que lo escuche, lo ampare y lo defienda contra el fuerte y el arbitrario.", by: "José María Morelos" },
  },
  {
    key: "administrativo",
    title: "Administrativo y fiscal",
    summary: "Defensa ante multas, sanciones, créditos fiscales y actos del SAT; responsabilidad de servidores públicos; juicio contencioso administrativo; licencias y permisos.",
    itemsTitle: "Asuntos que atendemos",
    items: ["Multas y sanciones", "Licencias y permisos", "Responsabilidad de servidores públicos", "Juicio contencioso administrativo y amparo", "Defensa ante el SAT"],
    photo: concreto,
    alt: "Arquitectura de concreto contra el cielo",
  },
  {
    key: "militar",
    title: "Derecho militar y Guardia Nacional",
    summary: "Delitos militares, expedientes disciplinarios y sanciones; seguridad social militar y representación de elementos y sus familiares.",
    lede: "Primera consulta sin costo.",
    itemsTitle: "Asuntos que atendemos",
    items: ["Delitos militares", "Expedientes disciplinarios", "Sanciones injustas", "Responsabilidades por faltas graves y no graves", "Seguridad social militar: haber de retiro, pensiones, SECORE", "Licencias: Registro Federal de Armas, ISSFAM"],
  },
  {
    key: "gestoria",
    title: "Gestoría y trámites gubernamentales",
    summary: "Trámites ante CFE, SACMEX, Secretaría de Finanzas, Registro Público de la Propiedad y del Comercio, Registro Civil y alcaldías.",
    itemsTitle: "Trámites",
    items: ["CFE", "Alcaldías: alineamiento y número oficial, obras, licencias y planos", "Registro Público de la Propiedad y del Comercio: constancia de gravamen y folio real", "SACMEX", "Secretaría de Finanzas: predial", "Registro Civil: actas"],
  },
  {
    key: "capacitaciones",
    title: "Capacitaciones para abogados",
    summary: "Cursos de práctica forense en materia familiar, derecho civil y taller de elaboración de contratos civiles.",
    itemsTitle: "Cursos",
    items: ["Práctica forense en materia familiar I: divorcio", "Práctica forense en materia familiar II: guarda y custodia y alimentos", "Práctica forense en materia familiar III: sucesiones", "Derecho civil: obligaciones y contratos", "Taller de elaboración de contratos civiles"],
    note: "Formato de 5 horas presenciales más 4 horas en línea, con constancia. Reserve con solo $199.",
  },
];

/** Las cinco materias con foto: pasan en la pila de tarjetas de la home */
export const featured = areas.filter((a) => a.photo);
export const others = areas.filter((a) => !a.photo);

export const steps = ["Cuéntenos su caso", "Valoración preliminar sin costo", "Conozca el servicio y su inversión"];

export const reviews = [
  { text: "El Licenciado Francisco Aldaba es un profesional por que sí nos ha solucionado los problemas que hemos tenido además de inteligente y con un trato amable, lo recomendamos ampliamente, estamos muy felices con el por la sentencia favorable que obtuvo, por eso y muchas cosas más es nuestro Licenciado. Muchas gracias Licenciado Francisco Aldaba.", author: "Vertin Valdivia", when: "hace 6 meses" },
  { text: "Excelente atención, Le agradezco mucho a la Lic. Miriam que fue la encargada de llevar mi asunto", author: "Nallely Avila", when: "hace 6 meses" },
  { text: "Excelente asesoría!. logro hacerme contratos para mis servicios muy muy rápido en tiempo y en forma. tienen una forma de trabajar muy limpia!. Gracias por su apoyo!! 5 estrellas", author: "V Ghost", when: "hace 4 años" },
];

export const serviceSchema = (a: Area, origin: URL | undefined) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: a.title,
  description: a.summary,
  provider: { "@id": new URL("/abogadoscej#organizacion", origin).href },
  areaServed: ["Ciudad de México", "San Luis Potosí"],
});
