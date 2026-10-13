import alfredo from "./assets/alfredo-calderon.jpg";
import delia from "./assets/delia-orozco.jpg";
import fernando from "./assets/fernando-miralles.jpg";
import libros from "./assets/litigacion-oral-penal-hd.jpg";
import balanza from "./assets/soluciones-legales-optimas-hd.jpg";

// Todo el texto sale de calderon-orozco.com.mx (Servicios, Juicios Orales, La Firma, Fundadores y Abogados).
export type Area = { key: string; title: string; lead: string; items?: string[]; itemsTitle?: string };

export const areas: Area[] = [
  {
    key: "penal",
    title: "Defensa en materia Penal",
    lead: "Asesoría jurídica de la víctima u ofendido o defensa del imputado ante denuncia o querella, fuero local y federal, bajo el procedimiento penal acusatorio (juicio oral penal).",
    itemsTitle: "Incluye",
    items: ["Amparo penal", "Extradiciones internacionales", "Operaciones con recursos de procedencia ilícita", "Delitos financieros, fiscales y patrimoniales", "Delitos informáticos y electorales", "Delitos contra la salud", "Homicidios y delitos sexuales", "Delitos ecológicos", "Extinción de dominio", "Hechos de corrupción", "Responsabilidad patrimonial del Estado", "Delitos cometidos por empresas"],
  },
  {
    key: "juicio-oral",
    title: "Juicio Oral Penal",
    lead: "Abogados certificados por la SETEC y acreditados por el Consejo Nacional de Seguridad, la SEGOB y el Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública.",
    itemsTitle: "Etapas del proceso",
    items: ["Investigación", "Intermedia", "Juicio Oral", "Ejecución Penal: libertad condicionada, libertad anticipada, sustitución y suspensión temporal de penas, permisos humanitarios y preliberación"],
  },
  {
    key: "civil",
    title: "Defensa Civil",
    lead: "Controversias inmobiliarias, revisión y elaboración de contratos, regularización y adquisición de inmuebles.",
    itemsTitle: "Incluye",
    items: ["Controversias inmobiliarias", "Revisión y elaboración de contratos", "Regularización y adquisición de inmuebles", "Arrendamientos", "Medios preparatorios a juicio", "Diligencias de consignación", "Jurisdicción voluntaria", "Daño moral"],
  },
  {
    key: "mercantil",
    title: "Defensa Mercantil",
    lead: "Contratos mercantiles, cobro de cheques y pagarés, cumplimiento e incumplimiento de relaciones comerciales.",
    itemsTitle: "Incluye",
    items: ["Contratos mercantiles", "Cobro de cheques y pagarés", "Cumplimiento e incumplimiento de relaciones comerciales", "Juicios ejecutivos y ordinarios mercantiles", "Ejecución de fideicomisos"],
  },
  {
    key: "familiar",
    title: "Defensa Familiar",
    lead: "Pensiones alimenticias, divorcios, pérdida de patria potestad y sucesiones.",
    itemsTitle: "Incluye",
    items: ["Pensiones alimenticias", "Divorcios", "Pérdida de patria potestad", "Convenios de vistas y convivencias", "Sucesiones", "Petición y trámite de cartas rogatorias"],
  },
  {
    key: "laboral",
    title: "Defensa Laboral",
    lead: "Contratos de trabajo individuales y colectivos, negociación con sindicatos y juicios ante la junta de conciliación y arbitraje local y federal.",
    itemsTitle: "Incluye",
    items: ["Contratos de trabajo individuales y colectivos", "Negociación con sindicatos", "Juicios ante la junta de conciliación y arbitraje local y federal", "Mediación"],
  },
  {
    key: "administrativa",
    title: "Defensa Administrativa",
    lead: "Responsabilidades administrativas de servidores públicos, actos de particulares vinculados con faltas administrativas y sanciones a empresas.",
  },
  {
    key: "empresarial",
    title: "Derecho Empresarial y Compliance",
    lead: "Constitución de empresas, asesoría en compliance y responsabilidad penal y administrativa de la empresa.",
    itemsTitle: "Incluye",
    items: ["Constitución de empresas", "Asesoría en compliance y responsabilidad penal y administrativa de la empresa", "Diseño de la Política de Integridad Empresarial", "Negociación estratégica con medios alternos de solución de controversias"],
  },
];

export const photos = { libros, balanza };

export const team = [
  {
    name: "Alfredo T. Calderón Martínez",
    role: null,
    photo: alfredo,
    bio: "Doctor Honoris Causa por el Colegio de Especialidades Jurídicas de Monterrey, Maestro en Leyes (LLM) con «Méritos» por la London School of Economics y Licenciado en Derecho con Mención Honorífica por la UNAM. Catedrático del INACIPE, la Universidad Anáhuac del Norte y el CISA. Autor de «Teoría del Delito y Juicio Oral» (IIJ-UNAM). Cuenta con 5 certificaciones SETEC y 4 acreditaciones SEGOB/CNS, y es miembro de la Barra Mexicana de Abogados.",
  },
  {
    name: "Delia Orozco",
    role: null,
    photo: delia,
    bio: "Doctorada en Derecho por el Centro de Estudios de Posgrado (CEP). Abogada postulante en materia penal, civil y mercantil, catedrática del INACIPE, de la Academia Regional de Seguridad Pública del Centro y de la Universidad Iberoamericana. Ha capacitado a ministerios públicos federales y policías en varios estados. Cuenta con 1 certificación SETEC y 4 acreditaciones SEGOB/CNS.",
  },
  {
    name: "Fernando Miralles Escobar",
    role: "Abogado",
    photo: fernando,
    bio: "Licenciado en derecho con mención honorífica y especialista en derecho civil por la UNAM, con 19 años de experiencia litigando asuntos en materia civil, familiar, mercantil, laboral y fiscal. Domina los idiomas alemán e inglés.",
  },
];
