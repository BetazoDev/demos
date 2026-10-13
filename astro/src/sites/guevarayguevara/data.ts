import fachada from "./assets/fachada.jpg";
import lampara from "./assets/lampara.jpg";
import lamparaColumnas from "./assets/lampara-columnas.jpg";

// Todo el texto sale de guevarayguevara.com (Principal, Nuestros Servicios, Asociados, Principales Clientes, Objetivos, Contáctanos).
export type Area = { key: string; title: string; row: string; lead: string; detail?: string; items?: string[] };

export const areas: Area[] = [
  {
    key: "bancario-empresarial",
    title: "Derecho bancario y empresarial",
    row: "Asuntos societarios, corporativos y fiscales; servicios jurídicos integrales y de vanguardia.",
    lead: "Experiencia en derecho bancario y empresarial: asuntos societarios, corporativos y fiscales.",
    detail: "Servicios jurídicos integrales y de vanguardia para el desarrollo y protección de los intereses de los clientes.",
    items: ["Asuntos societarios", "Asuntos corporativos", "Asuntos fiscales"],
  },
  {
    key: "civil-mercantil",
    title: "Civil y mercantil",
    row: "Juicios ejecutivos y ordinarios mercantiles, ordinarios civiles, especiales hipotecarios y procedimientos concursales.",
    lead: "Litigio civil y mercantil.",
    items: ["Juicios ejecutivos y ordinarios mercantiles", "Juicios ordinarios civiles", "Juicios especiales hipotecarios", "Procedimientos concursales: quiebras, suspensión de pagos y concursos mercantiles"],
  },
  {
    key: "cobranza",
    title: "Cobranza judicial y extrajudicial",
    row: "Asesoría legal y cobranza judicial y extrajudicial.",
    lead: "Asesoría legal y cobranza judicial y extrajudicial.",
  },
  {
    key: "litigio",
    title: "Familiar, laboral, penal, administrativo y amparo",
    row: "Litigio familiar, laboral, penal, administrativo y amparo, incluidos amparos civiles y mercantiles.",
    lead: "Litigio familiar, laboral, penal, administrativo y amparo, incluidos amparos civiles y mercantiles.",
  },
];

export const photos = { fachada, lampara, lamparaColumnas };

export type Person = { key: string; name: string; role: string; short: string; school: string; cedula: string; focus: string; path: string[] };

export const people: Person[] = [
  {
    key: "guevara-rojas",
    name: "José Luis Guevara Rojas",
    role: "Titular y fundador",
    short: "Abogado por la Escuela Libre de Derecho, con posgrado en derecho mercantil. Asesoría jurídica y litigio en materia civil, mercantil, familiar, bancario, concursal y amparo.",
    school: "Abogado por la Escuela Libre de Derecho (1992-1996), con posgrado en derecho mercantil.",
    cedula: "2937473",
    focus: "Asesoría jurídica y litigio en materia civil, mercantil, familiar, bancario, concursal y amparo.",
    path: [
      "Bufete Torres Zapién y Asociados, S.C.",
      "Banco del Atlántico (demandas en contra del banco)",
      "Auditor jurídico de cartera crediticia de FOBAPROA y abogado asociado en Apoyo Jurídico Integral, S.A.",
      "Lechuga Abogados, S.C.: quiebras, suspensión de pagos y concursos mercantiles",
      "Asesor jurídico en la liquidación de Afianzadora Mexicana, S.A. de C.V., en liquidación",
    ],
  },
  {
    key: "guevara-colin",
    name: "José Luis Guevara Colín",
    role: "Asociado y fundador",
    short: "Licenciado en Derecho por la UNAM. Experiencia bancaria, societaria, corporativa, mercantil, civil, concursal y fiscal.",
    school: "Licenciado en Derecho por la UNAM.",
    cedula: "360046",
    focus: "Experiencia bancaria, societaria, corporativa, mercantil, civil, concursal y fiscal.",
    path: [
      "Apoderado y secretario del Consejo de Constructora y Perforadora Latina, S.A. de C.V. y filiales, de Banco Ve por Más, S.A. y de Grupo Agersa y filiales",
      "Director jurídico y director de cuidado intensivo de Banco Internacional, S.A.",
      "Socio fundador de Abarca y Landero, Abogados, S.C.",
      "Subdirector jurídico en Banca Cremi",
      "Responsable de lo fiscal y corporativo en el área legal de Cervecería Moctezuma",
    ],
  },
];

export const clients = ["HSBC México, S.A.", "Banco Mercantil del Norte, S.A. (Banorte)", "BBVA Bancomer, S.A.", "Diversas personas físicas y morales"];

export const objectives = [
  "Prestar servicios profesionales en forma honorable, honesta, eficiente, responsable y oportuna.",
  "Brindar asesoría jurídica de manera honesta y de excelente calidad, que cubra las necesidades requeridas por empresas y comerciantes.",
  "Atender los asuntos, consultas y conflictos legales que nos encomienden, de manera oportuna, profesional, eficiente, personalizada y humana.",
];

export const sedes = [
  { label: "León, Guanajuato", text: "Mariano Escobedo 4502, Interior 5, Col. San Isidro, C.P. 37530" },
  { label: "Guadalajara, Jalisco", text: "Avenida Hidalgo 1114, esquina Gregorio Dávila, Col. Centro, C.P. 44100" },
  { label: "Colima, Colima", text: "Allende 491, Col. Centro, C.P. 28000" },
  { label: "Celaya, Guanajuato", text: "Ignacio Zaragoza 102, Col. Centro, C.P. 38000" },
];
