// Todo el texto sale de eduardocastilloabogados.com (Inicio, Acerca de, Servicios y soluciones, Clientes, Fideicomiso).
// Ver lista-2/78-eduardocastilloabogados/research.md.

export type Specialty = { key: string; title: string; lead?: string; page?: boolean };

/** Las tres con texto propio tienen página; el resto se lista en Servicios. */
export const specialties: Specialty[] = [
  { key: "litigio-mercantil", title: "Litigio mercantil", page: true, lead: "Despacho de profesionales en derecho altamente calificado en diversas áreas, especialmente en materia mercantil." },
  { key: "concursal", title: "Concursal", page: true, lead: "El titular es autor de «El Concurso Mercantil y su Proceso» y ha impartido conferencias sobre el concurso mercantil." },
  { key: "fiduciario", title: "Fiduciario", page: true, lead: "Especialidad del titular, autor de «El Fideicomiso, el fideicomiso de garantía y su ejecución»." },
  { key: "litigio-bancario", title: "Litigio bancario" },
  { key: "litigio-bursatil", title: "Litigio bursátil" },
  { key: "corporativo", title: "Corporativo" },
  { key: "amparo", title: "Amparo" },
  { key: "mediacion", title: "Mediación" },
  { key: "civil", title: "Civil en consultoría y litigio" },
  { key: "familiar", title: "Familiar en consultoría y litigio" },
  { key: "negociaciones", title: "Negociaciones extrajudiciales" },
  { key: "consultoria", title: "Consultoría en general" },
  { key: "tramites", title: "Trámites administrativos" },
];

export const withPage = specialties.filter((s) => s.page);
export const others = specialties.filter((s) => !s.page);

export const lema = "Juntos podemos resolver tus necesidades en el área legal";
export const promesa = "Servicio personalizado y directo en cada asunto.";

export const filosofia =
  "El despacho fue creado con una sola meta: proporcionar a sus clientes un servicio personalizado y directo en cada asunto que le es encomendado, no delegando los asuntos en terceros que muchas veces carecen de la experiencia y conocimientos suficientes.";

export const enfoque = [
  "Se arma jurídicamente el andamiaje legal necesario para evitar conflictos o diferencias.",
  "Ante una disputa, reaccionar de inmediato, tratando de resolver la controversia de manera rápida y eficiente.",
];

export const alcance = "El despacho ha atendido personas físicas y morales, dentro de éstas especialmente sociedades mercantiles del sector privado. No es exclusivamente de litigio: también se resuelven conflictos extrajudiciales y societarios.";

export const cobro = ["Por hora", "Un solo monto global por asunto", "Iguala por periodos pactados", "Al éxito, en casos especiales (porcentaje)"];

export const prioridades = [
  "Control directo del titular sobre cada asunto, sin delegar.",
  "Servicio personalizado y contacto directo con el titular.",
  "Informes con la periodicidad que requiera el cliente: semanales, quincenales, mensuales o por evento trascendente.",
];

export const titular = {
  name: "Lic. Eduardo Castillo",
  role: "Titular del despacho",
  bio: "Abogado egresado de la UNAM, titulado como Licenciado en Derecho en mayo de 1984. Ha ejercido en el sector público y privado, en empresas y despachos.",
  trayectoria: ["Asistente jurídico", "Gerente jurídico", "Director jurídico", "Asesor externo de diversas empresas", "Consultor jurídico", "Secretario de consejo de administración de diversas empresas", "Litigante", "Corporativista", "Abogado interno", "Socio de despacho"],
  docencia: "Profesor universitario de Derecho desde 1984 y maestro en la Maestría de Derecho Contractual, Notarial y Registral de la Escuela Libre de Derecho de Puebla.",
  capacitacion: "Diplomados sobre Procedimiento Mercantil en la Universidad de Sonora (campus Navojoa, Caborca y Hermosillo) y en la Barra de Abogados de Ciudad Obregón; conferencias en Unitec, UABC Mexicali y la Escuela Libre de Derecho de Puebla.",
  sinCorresponsales: "El despacho no tiene corresponsales en ninguna parte de la República Mexicana o el exterior; solo, de requerirse, se apoya o apoya a otros despachos.",
  idioma: "En el despacho se habla el idioma inglés.",
};

export const stats = [{ value: "29+", label: "años de experiencia en el mercado mexicano" }];

export const publicaciones = [
  { key: "juicio-oral", title: "El Juicio Oral Mercantil", area: "litigio-mercantil" },
  { key: "concurso", title: "El Concurso Mercantil y su Proceso", area: "concursal" },
  { key: "procedimientos", title: "Procedimientos Mercantiles", area: "litigio-mercantil" },
  { key: "fideicomiso", title: "El Fideicomiso, el fideicomiso de garantía y su ejecución", area: "fiduciario" },
];

export const libro = {
  title: "El Fideicomiso, el fideicomiso de garantía y su ejecución",
  text: "Esta obra muestra de manera precisa, concreta y sucinta el fideicomiso, sus bases y principales elementos de acuerdo con las normas que lo regulan en la actualidad; determina su naturaleza, las normas que aplican en función de la fecha de su constitución y su operatividad en la práctica.",
  donde: "Balderas 95, Colonia Centro, Delegación Cuauhtémoc, México, C.P. 06040, o en las Librerías de Cristal.",
};

export const clientes = [
  "ABC Capital S.A. Institución de Banca Múltiple",
  "Azul Textil, S.A. de C.V.",
  "Banco Interacciones, S.A. Institución de Banca Múltiple Grupo Financiero Interacciones",
  "Banco Multiva S.A. Institución de Banca Múltiple Grupo Financiero Multiva",
  "Bezaury, S.A. de C.V.",
  "Cualli Servicios, S.A. de C.V. Sociedad Financiera de Objeto Múltiple",
  "Distribuidora Omega, S.A. de C.V.",
  "Grupo Multisistemas de Seguridad Industrial, S.A. de C.V.",
  "Grupo Servicon, S.A. de C.V.",
  "Grupo Versicon, S.A. de C.V.",
  "Hi Tec de México, S.A. de C.V.",
  "Mori Seiki S.A. de C.V.",
  "Rotograbadores Internacionales, S.A. de C.V.",
  "Servicios Espectro Radioeléctricos, S.A. de C.V.",
  "Servicios Gráficos Internacionales, S.A. de C.V.",
  "Stan Mexicana, S.A. de C.V.",
  "Techint, S.A. de C.V.",
  "United Engravers, S.A. de C.V.",
];

/** Contenido propio de cada página de área (solo lo que el sitio del despacho publica). */
export const detalle: Record<string, { pubs: string[]; curso?: string }> = {
  "litigio-mercantil": { pubs: ["El Juicio Oral Mercantil", "Procedimientos Mercantiles"] },
  concursal: { pubs: ["El Concurso Mercantil y su Proceso"], curso: "Diplomado de Derecho Concursal, 2007 (curso tomado por el titular)" },
  fiduciario: { pubs: ["El Fideicomiso, el fideicomiso de garantía y su ejecución"] },
};
