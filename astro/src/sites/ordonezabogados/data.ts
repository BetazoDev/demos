// Todo el texto sale de ordonezabogados.com.mx (Inicio: presentación, servicios), Facebook y Google Maps.
export type Servicio = { key: string; title: string; icon: string; lead: string; text: string; items?: string[] };

export const lema = "El blindaje laboral que tu empresa necesita";
export const compromiso = "Estamos comprometidos a proteger tus intereses.";
export const prevencion = "Prevención integral: te asesoramos para que estés protegido ante cualquier contingencia laboral que pueda afectar a tu negocio.";
export const trayectoria = "Con más de 40 años de experiencia en derecho laboral, somos una firma reconocida por nuestro respaldo profesional y enfoque especializado.";
export const objetivo = "Nuestro objetivo es brindarte la seguridad y la tranquilidad que necesitas en tu entorno empresarial.";

export const servicios: Servicio[] = [
  {
    key: "conflictos-laborales",
    title: "Representación legal en conflictos laborales",
    icon: "gavel",
    lead: "Demandas individuales y colectivas ante los tribunales laborales locales y federales.",
    text: "Demandas individuales y colectivas ante los tribunales laborales locales y federales.",
    items: ["Despidos", "Reinstalaciones", "Despidos masivos", "Liquidaciones por reducción de fuerza laboral"],
  },
  {
    key: "juicios-colectivos",
    title: "Juicios colectivos y procedimientos conciliatorios",
    icon: "handshake",
    lead: "Juicios colectivos y procedimientos conciliatorios en los centros de conciliación locales y federales.",
    text: "Atención de juicios colectivos y gestión de procedimientos conciliatorios en los centros de conciliación locales y federales.",
  },
  {
    key: "comisiones-laborales",
    title: "Comisiones laborales y conformidad normativa",
    icon: "clipboard-text",
    lead: "Relaciones colectivas de trabajo y registro de comisiones ante la Dirección General de Inspección del Trabajo.",
    text: "Administración, revisión y desarrollo de relaciones colectivas de trabajo mediante contratos y contratos de ley.",
    items: ["Conformación y registro de comisiones ante la Dirección General de Inspección del Trabajo"],
  },
  {
    key: "huelgas",
    title: "Representación ante Secretarías Auxiliares de Huelgas",
    icon: "megaphone-simple",
    lead: "Conflictos laborales relacionados con huelgas o huelgas estalladas.",
    text: "Conflictos laborales relacionados con huelgas o huelgas estalladas.",
  },
  {
    key: "amparo",
    title: "Asesoría y representación en juicios de amparo",
    icon: "scales",
    lead: "Amparos directos e indirectos; revisión de resoluciones de autoridades del trabajo.",
    text: "Amparos directos e indirectos; revisión de resoluciones de autoridades del trabajo.",
  },
  {
    key: "auditorias",
    title: "Auditorías legales y prevención de riesgos",
    icon: "shield-check",
    lead: "Auditorías para evaluar las condiciones laborales de la empresa y asegurar el cumplimiento normativo.",
    text: "Auditorías para evaluar las condiciones laborales de la empresa y asegurar el cumplimiento normativo.",
    items: ["Programas de revisión, corrección y supervisión permanentes"],
  },
];

// Reseñas de Google (4.4, 17 reseñas). Se corrige la concordancia de una reseña; el sentido es el original.
export const resenas = [
  { author: "Lalo M", text: "Excelentes abogados. Te asesoran y cuentas con ellos en todo momento." },
  { author: "Jose Grimaldi", text: "Muy buenos abogados, muy profesionales." },
  { author: "Alejandro Juarez", text: "Excelente servicio de abogacía." },
];
