import heroAbogada from "./assets/hero-abogada.jpg";
import mariaElena from "./assets/maria-elena.jpg";
import mariaEsther from "./assets/maria-esther.png";

// Todo el texto sale de abogadosparaemprendedoresmx.com (Inicio, Nosotros, Servicios y Póliza empresarial) y de su aviso de privacidad.
export type Area = { key: string; title: string; short: string; lead: string; itemsTitle: string; items: string[]; cta: string };

export const areas: Area[] = [
  {
    key: "constitucion",
    title: "Constitución de empresa",
    short: "Te acompañamos en el proceso de formalización de tu empresa.",
    lead: "Te acompañamos en el proceso de formalización de tu empresa.",
    itemsTitle: "Figuras que constituimos",
    cta: "constitución de empresa",
    items: ["Persona física con actividad empresarial", "Sociedad por Acciones Simplificada (sin notario)", "Sociedad civil", "Sociedad de Responsabilidad Limitada (S. de R.L.)", "Sociedad Anónima (S.A.)"],
  },
  {
    key: "protege-tu-idea",
    title: "Protege tu idea de negocio",
    short: "Registro de marca ante el IMPI, derechos de autor y convenio de confidencialidad.",
    lead: "Registro de marca ante el IMPI, registro de derechos de autor y convenio de confidencialidad.",
    itemsTitle: "Cómo la protegemos",
    cta: "cómo proteger mi idea de negocio",
    items: ["Registro de marca ante el IMPI: estudio de factibilidad y trámite completo hasta el título", "Registro de derechos de autor", "Convenio de confidencialidad"],
  },
  {
    key: "documentos-que-exige-la-ley",
    title: "Documentos que exige la ley",
    short: "Aviso de privacidad, contratos laborales y términos y condiciones para ventas por internet.",
    lead: "Aviso de privacidad, contratos laborales y los demás documentos que la ley exige a tu negocio.",
    itemsTitle: "Documentos",
    cta: "los documentos que exige la ley",
    items: [
      "Aviso de privacidad",
      "Consentimiento informado (expedientes médicos, COFEPRIS)",
      "Contrato laboral por tiempo indeterminado",
      "Contrato de comisionista independiente",
      "Ventas por internet: términos y condiciones, políticas de envíos, devoluciones, garantías y pagos (PROFECO)",
    ],
  },
  {
    key: "operacion",
    title: "Operación de tu empresa",
    short: "Propuestas de servicios, órdenes de compra y contratos de servicios y de arrendamiento.",
    lead: "Propuesta de prestación de servicios o cotización, orden de compra, y contratos de servicios y de arrendamiento.",
    itemsTitle: "Documentos",
    cta: "la operación de mi empresa",
    items: ["Propuesta de prestación de servicios o cotización", "Orden de compra", "Contrato de prestación de servicios", "Contrato de arrendamiento"],
  },
  {
    key: "poliza-empresarial",
    title: "Póliza empresarial para emprendedores",
    short: "Planes de asesoría legal continua para tu emprendimiento.",
    lead: "Planes de asesoría legal continua: Pyme 3, Pyme a tu medida 5 y Pyme a tu medida 10.",
    itemsTitle: "Asesoría en",
    cta: "la póliza empresarial para emprendedores",
    items: [
      "Creación y funcionamiento de sociedades civiles y mercantiles",
      "Laboral: contratos, renuncias, terminaciones, actas administrativas, recibos y confidencialidad",
      "Contratos con proveedores y clientes",
      "Propiedad intelectual: marcas y derechos de autor",
      "Cumplimiento en materia de datos personales",
      "Documentación para negocios por internet: términos y condiciones, sitio seguro y Ley Federal de Protección al Consumidor",
    ],
  },
];

export const planes = [
  { name: "Pyme 3", big: "3 meses", text: "3 servicios legales y asesoría durante tres meses." },
  { name: "Pyme a tu medida 5", big: "6 meses", text: "Cinco servicios y asesoría por seis meses, con consultas ilimitadas por correo o WhatsApp." },
  { name: "Pyme a tu medida 10", big: "1 año", text: "Diez servicios y asesoría por un año." },
];

export const serviciosIncluibles = [
  "Aviso de privacidad",
  "Convenio de confidencialidad",
  "Registro de marca",
  "Desahogo de requerimiento del IMPI",
  "Derechos de autor",
  "Contrato laboral",
  "Contrato de comisión",
  "Contrato de servicios profesionales",
  "Renuncia y finiquito",
  "Acta de asamblea anual ordinaria",
  "Términos y condiciones de uso de página web",
];

export const testimonios = [
  { text: "Iniciar un negocio nunca es fácil, al llegar a los requerimientos legales busqué muchos abogados pero ninguno como especializado en emprendedores. Al hablar con María Elena, desde el primer momento se nota que te entiende. Tiene una sensibilidad con los emprendedores que no vas a encontrar en ningún otro lugar. Sus planes están pensados para adaptarse 100% a nuestras necesidades. Su trabajo siempre es muy profesional. Todo a tiempo y con la mejor calidad posible. Lo mejor es contratar los paquetes ya que cuentan con lo que requieres para arrancar. Sin duda tu mejor opción para empezar.", author: "Jorge Olavarrieta" },
  { text: "La atención que abogados para emprendedores nos brinda es de la mejor calidad. Desde el primer momento nos sentimos apoyadas.", author: "Patricia, Clínica Dental Vite" },
  { text: "Deseamos agradecer a Abogados para emprendedores mx el apoyo brindado para la resolución de nuestros problemas. Gracias a su desempeño profesional, pudimos tomar las riendas del negocio. La asesoría y el servicio se desarrollaron de manera continua hasta lograr el objetivo, siempre resolviendo nuestras dudas y proponiendo soluciones. Muchísimas gracias.", author: "Restaurante La Cassola" },
  { text: "Ofrecer la asesoría empresarial multidisciplinaria es excelente, hoy en día es difícil encontrar profesionales responsables y serios que cumplan.", author: "Alejandro, BioSlim" },
  { text: "Los problemas que tenía eran sobre un acuerdo de confidencialidad y dudas sobre registro de marca y personaje. Resolvieron todas mis dudas de forma clara y amena. Elaboraron un acuerdo de confidencialidad acorde a lo que necesitaba exactamente y, ahora, puedo contratar a las personas que necesito para mis proyectos sin miedo a que el acuerdo no funcione o no se adapte correctamente, llevándome a posibles problemas en el futuro. El trato desde un principio fue muy bueno, la licenciada es una persona agradable y muy profesional. Le recomendaría a cualquiera, sobre todo a quien se sienta muy desorientado, a contratar sus servicios.", author: "Jennifer Vargas" },
  { text: "Los esfuerzos logrados son el mejor resultado. Les agradezco por poner todo el profesionalismo y por la generosidad y la honestidad que me han mostrado.", author: "Gina, Particular" },
];

export const equipo = [
  {
    name: "María Elena Cortés Zárate",
    role: "Abogada titular",
    photo: mariaElena,
    quote: "Como abogada con más de 28 años de experiencia, me he percatado que, para un dueño de negocio, es vital contar con la prevención legal y las herramientas que le permitan crecer él mismo y su negocio, lo cual genera un ahorro en tiempo, dinero y desgaste emocional, por eso me entusiasma ayudar a las personas en todos esos aspectos.",
  },
  {
    name: "María Esther Cortés",
    role: null,
    photo: mariaEsther,
    quote: "Fomentar la prevención legal resulta ser uno de los instrumentos idóneos para romper con los mitos y acercar al emprendedor, dueño de negocio o empresario, al cumplimiento de sus objetivos. Para ello es importante que se deje de ver al abogado como un enemigo y un obstáculo y se le visualice como un facilitador y parte del equipo, para ello es que estamos trabajando.",
  },
];

export const photos = { heroAbogada, mariaElena, mariaEsther };
