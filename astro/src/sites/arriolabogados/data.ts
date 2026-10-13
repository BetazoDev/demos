import ventana from "./assets/equipo-tres-abogados-ventana-1600.jpg";
import perfil from "./assets/abogado-ventana-perfil-1600.jpg";
import manos from "./assets/detalle-manos-traje-1600.jpg";
import sala from "./assets/equipo-tres-abogados-sala-1600.jpg";
import sofa from "./assets/equipo-tres-abogados-sofa.jpg";
import angel from "./assets/equipo-tres-abogados-ventana-angel.jpg";
import retrato from "./assets/abogado-sentado-retrato.jpg";
import type { Img } from "@/kit/types";

// Todo el texto sale de arriolabogados.com (inicio, páginas de servicios, aviso de privacidad) y de la ficha de Google.
export type Area = {
  key: string;
  title: string;
  /** Texto corto para listas */
  short: string;
  lead: string;
  itemsTitle: string;
  items: string[];
  extra?: string;
  image?: Img;
  imageAlt?: string;
  position?: string;
};

export const areas: Area[] = [
  {
    key: "propiedad-intelectual",
    title: "Propiedad Intelectual",
    short: "Registro de marcas, patentes, derechos de autor, nulidades y secretos industriales.",
    lead: "Tenemos amplia experiencia en estrategias y en juicios, para la protección de la propiedad intelectual, ejecución de auditorías y todo tipo de procesos registrales, de control y vigilancia.",
    itemsTitle: "Proveemos consultoría profesional en",
    items: ["Protección y defensa de patentes", "Derechos de autor", "Registro de marcas", "Demanda de nulidad", "Demandas contra terceros que usen la marca sin autorización", "Secretos industriales", "Variedades vegetales"],
    extra: "Asimismo, contamos con un departamento especializado que atiende temas de regulación sanitaria a empresas de la industria farmacéutica, cosmética y de alimentos y bebidas.",
    image: ventana,
    imageAlt: "Tres abogados de Arriola Abogados frente a un ventanal con vista a Reforma y el Ángel de la Independencia",
    position: "50% 40%",
  },
  {
    key: "corporativo",
    title: "Corporativo",
    short: "Desde la constitución de empresa hasta fusiones y adquisiciones, en inglés y en español.",
    lead: "Asesoría desde la constitución de empresa, acuerdos de accionistas, buen gobierno corporativo, relaciones entre accionistas, responsabilidad de directores y revisión de contratos.",
    itemsTitle: "Brindando asesoría en",
    items: [
      "Redacción, revisión y control de documentación y registros corporativos",
      "Estructuración, negociación, elaboración y cierre de acuerdos comerciales de distribución, desarrollo, proveedores, accionistas, operativos y financieros, tanto en inglés como en español",
      "Análisis e investigación de nuevos proyectos de inversión, fusiones y adquisiciones",
      "Redacción de manuales, políticas legales, códigos de ética y opiniones legales",
    ],
    image: perfil,
    imageAlt: "Abogado de Arriola Abogados de perfil junto a un ventanal",
    position: "40% 50%",
  },
  {
    key: "civil-mercantil",
    title: "Civil y Mercantil",
    short: "Redacción y evaluación de los instrumentos jurídicos de nuestros clientes.",
    lead: "Redacción y evaluación de los instrumentos jurídicos de nuestros clientes. Suministramos las herramientas legales indispensables para asegurar el total cumplimiento de las obligaciones contractuales y una defensa apropiada.",
    itemsTitle: "Incluye",
    items: ["Revisión y reporte de situación legal de propiedades", "Emisión de títulos de propiedad y pólizas", "Contratos de compra-venta", "Asesoría, orientación y apoyo ante el cumplimiento de obligaciones del marco jurídico vigente"],
    image: sala,
    imageAlt: "Tres abogados de Arriola Abogados de pie en una sala con estantería de madera",
    position: "50% 35%",
  },
  {
    key: "fiscal",
    title: "Fiscal",
    short: "Defensa fiscal ante IMSS, SAT, INFONAVIT y Finanzas, y estrategias apegadas a derecho.",
    lead: "Un bufete dedicado a la defensa fiscal y a la elaboración de estrategias fiscales apegadas a derecho, encaminadas al crecimiento y optimización de nuestros clientes.",
    itemsTitle: "Entre nuestros principales servicios",
    items: ["Asesoría y defensa fiscal ante IMSS, SAT, INFONAVIT y Finanzas", "Amparos", "Asesoría corporativa", "Patrimonial, esquemas y beneficios especiales para cada empresa", "Blindaje de operaciones"],
    image: manos,
    imageAlt: "Detalle de manos, reloj y saco de traje sobre un escritorio",
    position: "50% 50%",
  },
  {
    key: "startups",
    title: "Startups y emprendedores",
    short: "Contratos, protección de datos, propiedad intelectual, I+D+i y rondas de financiación.",
    lead: "Con un equipo interdisciplinario ofrecemos asesoría a startups y emprendedores en todos los aspectos necesarios.",
    itemsTitle: "Incluye",
    items: ["Contratos de propuestas", "Contratos de servicios", "Protección de datos personales", "Desarrollo tecnológico", "Propiedad intelectual", "Asesoría en I+D+i"],
    extra: "Igualmente apoyamos en rondas de financiación para la captación de capital semilla y capital de crecimiento y expansión.",
  },
];

// Sección «Sobre Nosotros» del sitio actual.
export const mision = "Ofrecer servicios con el más alto estándar de calidad, a un precio competitivo. Que nuestros clientes queden satisfechos y desarrollar una relación de largo plazo con ellos.";
export const vision = {
  lead: "Trabajo anticipado sumado a la experiencia y conocimiento de las necesidades de cada cliente: un traje a la medida es nuestro valor agregado.",
  text: "Todas nuestras estrategias están encaminadas a reducir riesgos y proveer soluciones expeditas a nuestros clientes.",
};

// Reseñas de Google (extractos literales, nombre tal como aparece).
export const quotes = [
  { text: "Los recomiendo 100x100! Puedo decirles que son expertos en Propiedad Intelectual; es decir todo lo que tiene que ver con registros de marcas, diseños, patentes, etc.", author: "CaRyto MaRti", when: "hace 2 meses" },
  { text: "En cada etapa encontramos asesoría clara, atención oportuna y la confianza de estar respaldados por verdaderos especialistas en propiedad intelectual.", author: "tania alatorre", when: "hace 4 meses" },
  { text: "Me ayudó a registrar la marca de mi negocio de forma rápida y sin complicaciones. Explicó cada paso del proceso con mucha claridad y siempre estuvo atento a mis dudas.", author: "Izet Ortega", when: "hace 2 meses" },
];

export const publicaciones = [
  { title: "La broma del huachicol en México", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5046" },
  { title: "El Derecho de Acceso a la Justicia", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5077" },
  { title: "¿Y el avión apá?", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5130" },
  { title: "Ya empezaron las clases en la Televisión", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5154" },
  { title: "Todo nos gusta todo lento en Latinoamérica", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5168" },
  { title: "Festejo del 15 de septiembre en México en Pandemia", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5200" },
  { title: "Descubren marcas de gel antibacterial tóxicas en México y Estados Unidos", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5212" },
  { title: "Campeche es el primer Estado en semáforo verde en México", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5256" },
  { title: "China protege con «Copyright» un artículo escrito por un sistema de Inteligencia Artificial", source: "latamartech.com", href: "https://latamartech.com/cada-loco-con-su-tema-noticias-de-martech-en-latinoamerica/china-protege-con-copyright-un-articulo-escrito-por-un-ia/" },
  { title: "¿Ambush Marketing? Capítulo 1", source: "latamartech.com", href: "https://latamartech.com/cada-loco-con-su-tema-noticias-de-martech-en-latinoamerica/ambush-marketing-capitulo-1/" },
  { title: "Ley «antichancla» en México", source: "puntodeencuentro.pe", href: "http://www.puntodeencuentro.pe/columna.html?id=5237" },
];

export const videos = [
  { title: "¿Qué es la Propiedad Intelectual?", id: "fj-4Fq5x_Ok" },
  { title: "¿Qué es una marca?", id: "OcUJ6cRf8rk" },
];

export const photos = { ventana, perfil, manos, sala, sofa, angel, retrato };
