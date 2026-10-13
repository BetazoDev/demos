import type { ImageMetadata } from "astro";
import agustin from "./assets/equipo/agustin-rios.png";
import fatima from "./assets/equipo/fatima-cambronero.png";
import joseef from "./assets/equipo/joseef-gustavo-saldana-palma.png";
import valentin from "./assets/equipo/valentin-perez-vite.png";
import jessica from "./assets/equipo/jessica-mayorga-pena.png";
import ana from "./assets/equipo/ana-maria-tapia-cuevas.png";
import joel from "./assets/equipo/joel-ibarra-gomez.png";
import israel from "./assets/equipo/israel-aguilar-herrera.jpg";
import saul from "./assets/equipo/saul-roman-servin-tapia.jpg";
import hero from "./assets/hero-satin.jpg";
import servidores from "./assets/servidores.jpg";
import sello from "./assets/sello.jpg";

// Todo el texto sale de riosabogados.com (páginas de servicio y Quiénes somos). Condensado, sin ideas nuevas.
export type Area = { key: string; title: string; lead: string; items: string[]; owner?: string; seo: string };

export const areas: Area[] = [
  {
    key: "derecho-informatico",
    title: "Derecho Informático",
    lead: "Protección de datos personales, seguridad de datos en el comercio electrónico, firma electrónica y nombres de dominio.",
    items: ["Protección de datos personales (LFPDPPP)", "Seguridad de datos en el comercio electrónico", "Firma electrónica", "Preparación de acuerdos de comercio electrónico", "Gobernanza de Internet", "Privacidad", "Derechos de los consumidores", "Nombres de dominio"],
    owner: "Fátima Cambronero",
    seo: "Abogados de derecho informático en la Ciudad de México: protección de datos personales, comercio electrónico, firma electrónica y nombres de dominio.",
  },
  {
    key: "propiedad-industrial",
    title: "Propiedad Industrial",
    lead: "Marcas, avisos y nombres comerciales, patentes, modelos de utilidad, diseños industriales, licencias, franquicias y secretos industriales.",
    items: ["Búsqueda de antecedentes", "Solicitudes de marca, aviso comercial y nombre comercial", "Patentes, modelos de utilidad, diseños industriales y circuitos integrados", "Conservación de derechos", "Licencias, franquicias y cesiones", "Secretos industriales", "Litigio"],
    seo: "Abogados de propiedad industrial en la Ciudad de México: registro de marcas, patentes, modelos de utilidad, diseños industriales, licencias y secretos industriales.",
  },
  {
    key: "propiedad-intelectual",
    title: "Propiedad Intelectual",
    lead: "Registro de programas de cómputo, obras musicales, de arquitectura y diseño gráfico, reservas de derechos y contratos de licencia.",
    items: ["Registro de programas de cómputo, obras musicales, de arquitectura y diseño gráfico", "Reservas de derechos", "Contratos de comisión, licencias y transmisión de derechos", "Mantenimiento de derechos", "Litigio"],
    seo: "Abogados de propiedad intelectual y derechos de autor en la Ciudad de México: registro de obras, reservas de derechos y contratos de licencia.",
  },
  {
    key: "derecho-corporativo",
    title: "Derecho Corporativo",
    lead: "Auditorías corporativas, constitución de sociedades, actas de asamblea y de consejo, poderes, libros corporativos y contratos mercantiles.",
    items: ["Auditorías corporativas", "Constitución de sociedades", "Actas de asamblea y de consejo", "Poderes", "Libros corporativos", "Contratos mercantiles", "Litigio societario"],
    seo: "Abogados corporativos en la Ciudad de México: constitución de sociedades, actas, poderes, libros corporativos, contratos mercantiles y litigio societario.",
  },
  {
    key: "civil-y-mercantil",
    title: "Derecho Civil y Mercantil",
    lead: "Contratos de compraventa, servicios, arrendamiento, créditos, distribución y suministro; pagarés, cheques y otros títulos de crédito.",
    items: ["Contratos de compraventa y de prestación de servicios", "Contratos de arrendamiento, créditos y préstamos", "Contratos de distribución, agencia y suministro", "Pagarés, cheques y otros títulos de crédito", "Responsabilidad civil", "Asuntos de familia"],
    seo: "Abogados civiles y mercantiles en la Ciudad de México: contratos, títulos de crédito, responsabilidad civil y asuntos de familia.",
  },
  {
    key: "derecho-administrativo",
    title: "Derecho Administrativo",
    lead: "Permisos, licencias, autorizaciones y concesiones, licitaciones, uso de suelo, sanciones administrativas y responsabilidad patrimonial de autoridades.",
    items: ["Permisos, licencias, autorizaciones y concesiones", "Licitaciones", "Uso de suelo, construcciones y anuncios", "Sanciones administrativas", "Impuestos y derechos", "Responsabilidad patrimonial de autoridades"],
    seo: "Abogados de derecho administrativo en la Ciudad de México: permisos, licencias, concesiones, licitaciones, uso de suelo y sanciones administrativas.",
  },
  {
    key: "litigio",
    title: "Litigio",
    lead: "Controversias civiles, familiares, mercantiles, de arrendamiento, administrativas y de propiedad intelectual, amparo y mediación.",
    items: ["Controversias civiles y familiares", "Controversias mercantiles", "Controversias de arrendamiento inmobiliario y juicios hipotecarios", "Controversias administrativas y de propiedad intelectual", "Amparo, acciones y controversias constitucionales", "Quejas ante la CNDH y la CDHDF, y peticiones ante la CIDH", "Mediación"],
    seo: "Abogados litigantes en la Ciudad de México: controversias civiles, mercantiles, administrativas y de propiedad intelectual, amparo y mediación.",
  },
  {
    key: "derecho-migratorio",
    title: "Derecho Migratorio",
    lead: "Residencia temporal y permanente, renovaciones, internaciones, ampliación de visa de turista, naturalizaciones y permisos de matrimonio.",
    items: ["Residencia temporal y permanente", "Renovaciones", "Cambio de lugar de trabajo", "Constancia de inscripción del empleador", "Internaciones", "Ampliación de visa de turista", "Naturalizaciones", "Notificación de baja laboral", "Permisos de matrimonio de mexicanos con extranjeros"],
    seo: "Abogados de derecho migratorio en la Ciudad de México: residencia temporal y permanente, renovaciones, naturalizaciones y permisos de matrimonio.",
  },
];

export const principles = ["Excelencia", "Honradez", "Calidad", "Rapidez"];

export type Person = { name: string; role: string; bio?: string; photo: ImageMetadata; legal: boolean };
export const team: Person[] = [
  { name: "Agustín Ríos", role: "Socio Fundador y Director General", legal: true, photo: agustin, bio: "Fundó el Despacho en el año de 1999 con el objeto de brindar una alternativa fresca y diferente en materia de prestación de servicios legales. Egresado de la Universidad Panamericana, con Maestría en Alta Dirección de Empresas para Ejecutivos con Experiencia (MEDEX) por el IPADE. Ha sido profesor y conferencista en la UNAM, Tec de Monterrey e ITAM, impartiendo materias relacionadas con la Propiedad Industrial y Derecho Informático. Miembro de IAPP, AMPPI y AMIPCI." },
  { name: "Fátima Cambronero", role: "Responsable del Área de Derecho Informático", legal: true, photo: fatima, bio: "Argentina, abogada; gobernanza de Internet, privacidad, protección de datos personales, comercio electrónico, derechos de los consumidores y nombres de dominio. Docente en diplomados y especializaciones en ISDI, Universidad Panamericana Guadalajara y Universidad Anáhuac México Sur, entre otras." },
  { name: "Joseef Gustavo Saldaña Palma", role: "Abogado en Propiedad Intelectual y litigio", legal: true, photo: joseef, bio: "Abogado en materia de Propiedad Intelectual y especialista en litigio de la misma materia; egresado de la Universidad del Valle de México." },
  { name: "Valentín Pérez Vite", role: "Abogado en Propiedad Intelectual", legal: true, photo: valentin, bio: "Abogado con 13 años de experiencia en el campo de los derechos de autor; cursos especializados de la WIPO, el Instituto Nacional del Derecho de Autor y el Instituto Mexicano de la Propiedad Industrial. Enfoque en derechos de autor, reservas de derechos, contratos y marcas." },
  { name: "Jessica Mayorga Peña", role: "Abogada en derecho de empresa, migratorio y consumo", legal: true, photo: jessica, bio: "Licenciada en Derecho por la UNAM, especialista en Derecho de Empresa por la Universidad Panamericana; encargada del legal funcionamiento de las sociedades desde su creación hasta la liquidación. Conocimientos en materia migratoria y más de diez años en relaciones de consumo." },
  { name: "Ana María Tapia Cuevas", role: "Encargada de cuentas por cobrar y pagar", legal: false, photo: ana },
  { name: "Joel Ibarra Gómez", role: "Auxiliar administrativo", legal: false, photo: joel, bio: "Encargado de facturación, movimientos IMSS, apoyo de cobranza, contables y administrativos." },
  { name: "Israel Aguilar Herrera", role: "Mensajería y apoyo a las áreas del despacho", legal: false, photo: israel },
  { name: "Saúl Román Servín Tapia", role: "Encargado de archivo", legal: false, photo: saul, bio: "Persona sorda; técnico en diseño gráfico en publicidad en el Centro Computacional de Valle de México e instructor de Lengua de Señas Mexicana." },
];

export const images = { hero, servidores, sello };
