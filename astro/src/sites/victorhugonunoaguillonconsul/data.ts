import marmol from "./assets/marmol.jpg";

// Todo el texto sale de la ficha de Google, la página de Facebook y los volantes del propio abogado.

// Los precios de los paquetes salen de un volante de su ficha de Google y su vigencia no está confirmada: no se publican.
// Para mostrarlos, confirmar con el abogado y cambiar SHOW_PRICES a true.
export const SHOW_PRICES = false;

export const servicios = [
  { q: "Consultoría jurídica", a: "Asesoría y análisis para la mejor toma de decisiones." },
  { q: "Contratos", a: "Elaboración, revisión y actualización de contratos. Convenios entre socios y accionistas." },
  { q: "Marcas e IMPI", a: "Gestoría y consultoría ante el IMPI: búsqueda y análisis de antecedentes; registro de marca; nombre comercial; avisos comerciales y slogans; contestación de requerimientos; oposiciones y seguimiento de expedientes; asesoría para proteger activos intangibles." },
  { q: "Consultoría para emprendedores", a: "De la idea al negocio seguro. Estrategia, prevención y gestión. Constitución y regularización de negocios." },
  { q: "Abogado externo para tu negocio", a: "Acompañamiento continuo para que tu empresa crezca con seguridad. Asesoría jurídica mensual (igualas)." },
  { q: "Diagnóstico jurídico empresarial", a: "Analizamos tu negocio, identificamos riesgos y te entregamos un plan de acción para proteger lo que has construido." },
  { q: "Derecho laboral, cobranza y auditoría documental", a: "Derecho laboral y prevención de riesgos; cobranza y recuperación de adeudos; auditoría documental básica; acompañamiento en negociaciones." },
  { q: "Asesoría preventiva y capacitación", a: "Asesoría preventiva («Evita problemas antes de que ocurran») y capacitación y talleres («Impulsa el desarrollo de tu equipo»)." },
];

export const paquetes = [
  {
    name: "Plan Emprendedor",
    para: "Ideal para pequeños negocios",
    price: "$3,500 / mes",
    items: ["Consultas", "Revisión de documentos sencillos", "Orientación jurídica", "1 reunión mensual", "Atención por WhatsApp y correo"],
  },
  {
    name: "Plan Negocio",
    para: "Para PyMES y empresas en crecimiento",
    price: "$6,500 / mes",
    items: ["Consultas recurrentes", "Revisión y elaboración de documentos", "Asesoría laboral preventiva", "1 reunión mensual", "Seguimiento de asuntos"],
  },
  {
    name: "Plan Empresarial",
    para: "Para empresas con mayor actividad y necesidades jurídicas",
    price: "$10,000 a $15,000 / mes",
    items: ["Asesoría jurídica continua", "Contratos y negociaciones", "Prevención de riesgos", "Revisión documental", "Seguimiento y atención prioritaria"],
  },
];

export const paquetesNota = "Litigios, trámites especializados o asuntos extraordinarios se cotizan por separado.";

export const resenas = [
  { text: "Excelente servicio y atención, brindando seguridad y confianza…", author: "dan dorantes" },
  { text: "Excelente servicio, recomendado ampliamente.", author: "Ana Jimenéz" },
  { text: "Excelente!", author: "Yunue Mendoza" },
  { text: "Excelente!!!", author: "FABIAN mendoza" },
];

export const areasComposer = servicios.map((s) => s.q);
export const photos = { marmol };
