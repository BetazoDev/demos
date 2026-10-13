import equipo from "./assets/equipo-escalera.jpg";
import socios from "./assets/socios.jpg";
import jose from "./assets/jose-armando-salcedo.jpg";
import patricia from "./assets/patricia-caballero.jpg";
import cira from "./assets/cira-vargas.jpg";
import arturo from "./assets/arturo-ventura.jpg";
import oscar from "./assets/oscar-sanchez.jpg";
import type { ImageMetadata } from "astro";

// Equipo, fotos y testimonios tal como los publica scyaa.com (Acerca de e Inicio). Las bios se condensan y se corrigen erratas;
// la de Arturo Ventura Martínez queda donde el sitio la corta. Las fotos del equipo y de los socios son propias del despacho.
export const photos = { equipo, socios };

export type Person = { name: string; role: string; photo: ImageMetadata; bio: string; partner: boolean };

export const team: Person[] = [
  {
    name: "José Armando Julián Salcedo Arranz",
    role: "Socio",
    partner: true,
    photo: jose,
    bio: "Socio desde 1996, desarrolla las áreas de laboral, corporativo y contratos. Su práctica incluye negociación, consultoría, planeación y litigio, y la representación de sus clientes en negociaciones y litigios a nivel nacional e internacional. Es Corredor Público 29, mediador 271 del Tribunal Superior de Justicia de la Ciudad de México y árbitro ante el Instituto Nacional del Derecho de Autor y la Procuraduría Federal del Consumidor. Miembro del Colegio de Corredores Públicos, de la Asociación Nacional de Abogados de Empresa Colegio (ANADE) y del Instituto Mexicano de Ejecutivos de Finanzas (IMEF).",
  },
  {
    name: "Patrícia Caballero Serrano",
    role: "Socia",
    partner: true,
    photo: patricia,
    bio: "Socia desde 2001, desarrolla la especialidad en materia procesal civil, mercantil y familiar. Su práctica incluye negociación y consultoría a nivel nacional e internacional. Mediadora 288 del Tribunal Superior de Justicia de la Ciudad de México y miembro de la Asociación Nacional de Abogados de Empresa Colegio (ANADE).",
  },
  {
    name: "Cira Angélica Vargas Echeverría",
    role: "Abogada asociada",
    partner: false,
    photo: cira,
    bio: "Especializada en litigio, principalmente inmobiliario, civil, mercantil y administrativo, con amplia experiencia en la defensa a través del juicio de nulidad y el juicio de amparo. Miembro de la Asociación Nacional de Abogados de Empresa Colegio (ANADE).",
  },
  {
    name: "Arturo Ventura Martínez",
    role: "Abogado asociado",
    partner: false,
    photo: arturo,
    bio: "Licenciado en Derecho con amplia experiencia en litigio, particularmente civil, mercantil y laboral. Especializado en el juicio constitucional de amparo y en la atención y seguimiento de las visitas de inspección que practica la Secretaría del Trabajo en los centros de trabajo, a nivel local y federal. Cuenta con experiencia en la presentación y seguimiento de denuncias penales para el cobro de fianzas de fidelidad.",
  },
  {
    name: "Oscar Isaac Sánchez Hernández",
    role: "Abogado asociado",
    partner: false,
    photo: oscar,
    bio: "Especializado en litigio, particularmente civil, mercantil y laboral, con experiencia en procedimientos penales para hacer efectivas las fianzas de fidelidad. Colaboró como auxiliar jurídico en el Fondo de la Información y Documentación para la Industria, fideicomiso público del CONACYT.",
  },
];

export const testimonials = [
  { text: "El servicio de SCYAA se distingue por su puntualidad, seriedad y profesionalismo.", author: "Daniela Velazquez", lang: "es" },
  { text: "SCYAA have been our lawyers for over 15 years. They have been a valuable partner in our Mexican business, providing legal advice as well as insight into what makes Mexico unique. They have been knowledgeable, dependable & trustworthy.", author: "Exequiel “Ike” Lat", lang: "en" },
];
