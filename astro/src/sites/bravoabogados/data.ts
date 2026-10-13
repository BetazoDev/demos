import type { ImageMetadata } from "astro";
import salvador from "./assets/salvador-bravo-mier.jpg";
import claudia from "./assets/claudia-elisa-bravo.jpg";
import javier from "./assets/javier-andres-bravo-duran.jpg";
import rosario from "./assets/rosario-vazquez-villegas.jpg";
import pilar from "./assets/maria-del-pilar-miranda-figueroa.jpg";
import martin from "./assets/martin-sanchez-maldonado.jpg";
import francisco from "./assets/francisco-javier-romo-zaragoza.jpg";
import nudo from "./assets/nudo-vial.jpg";
import torres from "./assets/torres-transmision.jpg";
import librero from "./assets/librero-oficina.jpg";

// Todo el texto sale del sitio original del despacho (Wayback, 2025-03-05). Se condensa, no se reescribe.
export type Caso = { title: string; text: string };
export type Area = { key: string; title: string; summary: string; lead: string; casesTitle: string; cases: Caso[]; seo: string };

export const areas: Area[] = [
  {
    key: "administrativo",
    title: "Derecho Administrativo",
    summary: "Asesoría y juicios de amparo y contencioso administrativo para empresas concesionarias de obras y servicios públicos.",
    lead: "Asesoría y juicios, de amparo y contencioso administrativo, para empresas concesionarias de obras y servicios públicos y para quienes se ven afectados por actos de las autoridades federales, locales y municipales.",
    casesTitle: "Asuntos atendidos",
    cases: [
      { title: "Relleno sanitario de Querétaro", text: "Juicio de amparo por el que se obtuvo la confirmación del fallo de la licitación pública que otorgó la concesión del relleno sanitario de la Ciudad de Querétaro." },
      { title: "Relleno sanitario de Xalapa", text: "Juicio contencioso administrativo por el que se obtuvo la nulidad de la resolución que había revocado el fallo por el cual se otorgó la concesión del relleno sanitario de la Ciudad de Xalapa." },
      { title: "Relleno sanitario de Veracruz", text: "Juicio de amparo por el que se obtuvo la nulidad del acuerdo de la Legislatura del Estado de Veracruz, que había dejado de aprobar la concesión del relleno sanitario de la Ciudad de Veracruz." },
      { title: "Servicio de limpia de Silao, Guanajuato", text: "Juicio contencioso administrativo por el que se obtuvo la nulidad del acuerdo de cabildo que había revocado la concesión del servicio público integral de limpia del Municipio de Silao, Guanajuato." },
      { title: "Residuos sólidos de Cancún, Quintana Roo", text: "Juicios contencioso administrativo y de amparo por los que se obtuvo la revocación del fallo que el Municipio de Benito Juárez, Quintana Roo, había otorgado sobre la concesión de la recolección de residuos sólidos de la Ciudad de Cancún, para que se otorgara a la empresa que actualmente la opera." },
      { title: "Residuos sólidos de Juárez, Nuevo León", text: "Juicio contencioso administrativo por el que se obtuvo la nulidad de la resolución del Ayuntamiento de Juárez, Nuevo León, que había dado por terminado el contrato de prestación de servicios de recolección de residuos sólidos." },
      { title: "Línea 12 del Metro", text: "Juicio contencioso administrativo seguido por el Director General de Obras para el Transporte de la Secretaría de Obras y Servicios del Gobierno del Distrito Federal contra la resolución del Contralor General que le impuso destitución, inhabilitación por diez años y una sanción económica de $1'026,126,912.98 pesos, respecto del proyecto integral de la construcción de la Línea 12 Tláhuac-Mixcoac del Metro. Se obtuvo sentencia favorable." },
      { title: "Servicio de limpia de Tuxtla Gutiérrez, Chiapas", text: "Juicios contenciosos administrativos por los que se logró que el Ayuntamiento de Tuxtla Gutiérrez, Chiapas, conviniera con la empresa concesionaria el pago del adeudo pendiente, de más de doscientos millones de pesos, por el servicio integral de limpia de la ciudad, y que el servicio se siguiera prestando." },
      { title: "Relleno sanitario de Tlalnepantla: fallo de la concesión", text: "Juicio contencioso administrativo por el que se obtuvo sentencia favorable que confirmó el fallo de la concesión del relleno sanitario de Tlalnepantla, impugnado por otra empresa licitante." },
      { title: "Relleno sanitario de Naucalpan", text: "Juicio contencioso administrativo por el que se obtuvo el pago de las contraprestaciones mensuales por la operación del relleno sanitario del Municipio de Naucalpan, cuyo adeudo rebasaba los cincuenta millones de pesos." },
      { title: "Relleno sanitario de Tlalnepantla: contraprestaciones", text: "Juicio contencioso administrativo por el que se obtuvo el pago de las contraprestaciones mensuales por la operación del relleno sanitario de Tlalnepantla, Estado de México, y la ampliación del término de la concesión." },
      { title: "Ayuntamiento de Veracruz", text: "Juicios contenciosos administrativos por los que se convino la forma de pago del adeudo del Ayuntamiento de Veracruz con la empresa concesionaria, pactándose nuevamente las condiciones para la prestación del servicio concesionado." },
    ],
    seo: "Abogados de derecho administrativo y amparo en la Ciudad de México para empresas concesionarias de obras y servicios públicos: rellenos sanitarios, servicios de limpia y licitaciones.",
  },
  {
    key: "civil-mercantil",
    title: "Derecho Civil y Mercantil",
    summary: "Asuntos de naturaleza mercantil, civil y penal que se derivan de las actividades de la industria y el comercio.",
    lead: "Asuntos de naturaleza mercantil, civil y penal que se derivan de las actividades de la industria y el comercio.",
    casesTitle: "Asuntos atendidos",
    cases: [
      { title: "Concurso mercantil de TRIBASA", text: "Todos los juicios mercantiles promovidos en contra de Triturados Basálticos y Derivados, S.A. de C.V. (TRIBASA, ahora PINFRA) que estaban vigentes durante su juicio de concurso mercantil, con resultados favorables en el ochenta por ciento de los mismos, lo que ayudó a que la empresa saliera de su estado concursal." },
      { title: "Terminal de Almacenamiento Tapachula, PEMEX", text: "Juicio mercantil seguido por United Construcciones, S.A. de C.V. contra CCC Fabricaciones y Construcciones, S.A. de C.V., por incumplimientos al subcontrato derivado del contrato de obra pública de la nueva Terminal de Almacenamiento Tapachula, Chiapas, celebrado con PEMEX Refinación (ahora PEMEX Transformación Industrial). Se obtuvo sentencia favorable." },
      { title: "Medidores para la Comisión Federal de Electricidad", text: "Juicio mercantil seguido por Fuerza, Automatización, Voltaje y Construcción, S.A. de C.V. contra Hola Innovación, S.A. de C.V., por incumplimientos al contrato de prestación de servicios para la instalación de medidores, derivado del contrato marco celebrado con la Comisión Federal de Electricidad. Se obtuvo sentencia favorable." },
      { title: "Aeropuertos de Cancún, Cozumel y Mérida", text: "Juicios de controversia de arrendamiento seguidos por Aeropuerto de Cancún, Aeropuerto de Cozumel y Aeropuerto de Mérida contra Operadora Aero Boutiques y Aero Boutiques de México, con la rescisión de los contratos de arrendamiento sobre diversas superficies dentro de las instalaciones de cada aeropuerto." },
    ],
    seo: "Abogados civiles y mercantiles en la Ciudad de México: juicios mercantiles, contratos de obra y de servicios y controversias de arrendamiento para empresas.",
  },
  {
    key: "arbitraje",
    title: "Arbitraje Internacional",
    summary: "Juicios de arbitraje ante la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional.",
    lead: "Juicios de arbitraje ante la Corte Internacional de Arbitraje de la Cámara de Comercio Internacional (ICC).",
    casesTitle: "Arbitrajes atendidos",
    cases: [
      { title: "Arbitraje No. 10593/KGA, refinería de Tula", text: "Arbitraje No. 10593/KGA sobre el contrato a precio alzado para la ingeniería de detalle complementaria, procura de equipo y materiales, construcción, apoyo en la puesta en operación y capacitación de personal de una planta desmineralizadora en la refinería «Miguel Hidalgo», en Tula, Hidalgo." },
      { title: "Arbitraje No. 10658/KGA, línea de transmisión Escárcega Potencia-Ticul II", text: "Arbitraje No. 10658/KGA sobre el contrato de obra para completar la construcción civil, electromecánica, pruebas y puesta en servicio de la línea de transmisión Escárcega Potencia-Ticul II, en los estados de Campeche y Yucatán." },
    ],
    seo: "Arbitraje internacional ante la Corte Internacional de Arbitraje de la CCI: abogados con arbitrajes de obra e infraestructura. Bufete en la Ciudad de México.",
  },
];

/** Áreas del bufete sin página propia (el sitio original solo las nombra). */
export const otras = ["Amparo", "Derecho Penal", "Derecho Laboral", "Área corporativa"];

export const clientes = [
  "Triturados Basálticos y Derivados (TRIBASA, ahora PINFRA)",
  "Acciones Bursátiles SOMEX Casa de Bolsa (ahora Casa de Bolsa BBVA Bancomer)",
  "Bancomer",
  "Aeropuertos del Sureste (ASUR)",
  "Fertilizantes del Estado de México",
  "Grupo VEOLIA México",
  "Intelligencia México",
  "Periódico La Verdad",
];

export const fundador = {
  name: "Salvador Bravo Mier",
  role: "Abogado fundador",
  photo: salvador,
  bio: [
    "Realizó sus estudios de licenciatura en la Universidad La Salle y estudios de posgrado en Derecho Administrativo y Amparo en la Universidad Panamericana. Cuenta con el nombramiento de Auditor Legal de la Comisión Nacional de Valores (CNV).",
    "Trabajó en General Electric de México, siendo su último puesto el de Gerente de Asuntos Administrativos y relaciones con Gobierno. También trabajó en Constructora General del Norte como Director de Relaciones Industriales.",
  ],
  linkedin: "https://www.linkedin.com/in/salvador-bravo-mier-1613883a/",
};

export type Persona = { name: string; role?: string; bio?: string; photo: ImageMetadata };
export const equipo: Persona[] = [
  { name: "Claudia Elisa Bravo", role: "Licenciada en Derecho", bio: "Egresada de la Universidad de las Américas. Abogada francesa por la Universidad de Saint Martin d’Hères en Grenoble, reconocida por el Centro Regional de Formación Profesional para Abogados (CRPA) Bordeaux, Francia.", photo: claudia },
  { name: "Javier Andrés Bravo Duran", role: "Licenciado en Derecho", bio: "Egresado de la Universidad Nacional Autónoma de México, con residencia en París, Francia.", photo: javier },
  { name: "Rosario Vázquez Villegas", role: "Abogada", bio: "Licenciada en Derecho por la UNAM. Especializada en Derecho Civil y Mercantil.", photo: rosario },
  { name: "María del Pilar Miranda Figueroa", role: "Abogada", bio: "Licenciada en Derecho por la UNAM. Especializada en Derecho Administrativo y Derecho Ambiental.", photo: pilar },
  { name: "Martín Sánchez Maldonado", photo: martin },
  { name: "Francisco Javier Romo Zaragoza", role: "Abogado", bio: "Licenciado en Derecho por la Universidad Iberoamericana Ciudad de México. Con especialidad en negocios turísticos.", photo: francisco },
];

export const corresponsales: { name: string; city: string }[] = [
  { name: "Roxanna Vázquez Villegas", city: "Tuxtla Gutiérrez, Chiapas" },
  { name: "Jazmin Alejandra Mendoza López", city: "Puebla, Puebla" },
  { name: "Mario Guadalupe Covarrubias", city: "Monterrey, Nuevo León" },
  { name: "Pilar Carolina Cervantes Fonatsu", city: "Nuevo Laredo, Tamaulipas" },
  { name: "Renato Ronzón Leyva, Ronzón & Leyva", city: "Xalapa, Veracruz" },
  { name: "José Cárcamo López", city: "Cancún, Quintana Roo" },
  { name: "Jessica Reyes Góngora", city: "Campeche, Campeche" },
  { name: "Laura Alejandrin Tamay Ek", city: "Chetumal, Quintana Roo" },
  { name: "Román Domingo Muñoz", city: "San Luis Potosí, San Luis Potosí" },
  { name: "Walter Hassan Soto", city: "Los Mochis, Sinaloa" },
];

export const photos = { nudo, torres, librero };
