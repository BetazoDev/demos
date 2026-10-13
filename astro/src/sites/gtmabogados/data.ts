// Todo el texto sale de gtm-sc-abogados.com (única página). Los servicios no tienen descripción propia: solo títulos.
export type Service = { key: string; title: string };
export type ServiceGroup = { key: string; title: string; items: Service[] };

export const groups: ServiceGroup[] = [
  {
    key: "laboral",
    title: "Materia laboral",
    items: [
      { key: "auditorias", title: "Auditorías administrativas laborales" },
      { key: "individuales", title: "Conflictos individuales de trabajo" },
      { key: "procedimientos", title: "Procedimientos administrativos del trabajo" },
      { key: "colectivos", title: "Conflictos colectivos de trabajo; formación de sindicatos" },
    ],
  },
  {
    key: "administrativa",
    title: "Materia administrativa",
    items: [
      { key: "consultoria", title: "Patrocinio legal y consultoría en materia administrativa" },
      { key: "responsabilidades", title: "Patrocinio legal en procedimiento de responsabilidades administrativas de los servidores públicos" },
      { key: "prevencion", title: "Atención y prevención de acciones y omisiones en los que pudieran incurrir los servidores públicos" },
    ],
  },
];

export const services: Service[] = groups.flatMap((g) => g.items);

export const team = [
  {
    name: "Lic. Angel Orlando García Gutiérrez",
    role: "Fundador",
    cedula: "1616809",
    bio: "Con experiencia de más de 20 años en materia del trabajo, así como en derecho administrativo en las materias de responsabilidades administrativas de servidores públicos y adquisiciones, cuenta con estudios de maestría en derecho laboral y diplomados en la misma materia.",
  },
  {
    name: "Lic. Adrián Octavio Argudín Rosales",
    role: "Equipo multidisciplinario",
    cedula: "4503581",
    bio: "Con experiencia en materia de responsabilidades administrativas de los servidores públicos y en la rama del derecho del trabajo.",
  },
  {
    name: "Lic. Christian Andrade Ramírez",
    role: "Equipo multidisciplinario",
    cedula: "7110394",
    bio: "Especialista en derecho del trabajo, rama en la que inició desde que estudiaba la carrera y una vez titulado, continuó ejerciendo hasta la presente fecha.",
  },
];

export const clients = [
  "Instituto del Fondo Nacional de la Vivienda para los Trabajadores (INFONAVIT)",
  "Hospital Juárez de México (organismo público descentralizado de la Administración Pública Federal)",
  "Asociación de Jubilados del Banco Nacional de Comercio Exterior",
  "Impresiones Aries al Instante, S.A. de C.V.",
  "Grupo Educativo Chaptor, S.A. de C.V.",
  "Greenpeace México, A.C.",
  "Fideicomiso de Formación y Capacitación para el Personal de la Marina Mercante Nacional (FIDENA)",
];

export const legal = {
  razon: "Grupo de Trabajo Multidisciplinario, S. C.",
  rfc: "GTM010312HW7",
  constituida: "2001",
};
