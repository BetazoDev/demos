import victor from "./assets/victor-carrillo.jpg";
import herreria from "./assets/fachada-herreria.jpg";
import porton from "./assets/fachada-porton.jpg";

// Todo el texto sale de solucionesjuridicas.com.mx (páginas de servicios, inicio y contacto), con ortografía y
// terminología actualizadas (Ciudad de México en lugar de Distrito Federal). Laboral y amparo se mencionan en el sitio
// y en Facebook, pero no tienen página propia: aparecen solo como nota.
export type Group = { title: string; items: string[] };
export type Area = {
  key: string;
  title: string;
  /** Texto de cabecera y metadescripción */
  lead: string;
  /** Texto corto para las filas de la lista */
  short: string;
  /** Párrafos de explicación del propio despacho */
  intro?: { title: string; text: string }[];
  groups: Group[];
  /** Nombre de la especialidad para SEO */
  seo: string;
};

export const areas: Area[] = [
  {
    key: "familiar",
    short: "Divorcio incausado, guarda y custodia, convivencias y pensión alimenticia.",
    title: "Derecho familiar y divorcios",
    seo: "abogados familiares y de divorcios en la Ciudad de México",
    lead: "Apoyamos a nuestros clientes cuando enfrentan conflictos familiares: divorcio incausado («exprés»), guarda y custodia, convivencias y pensión alimenticia.",
    intro: [
      { title: "Divorcio incausado", text: "El divorcio es la disolución del vínculo matrimonial. En la Ciudad de México el divorcio incausado, también conocido como divorcio exprés, es de tramitación única y especial: no se requieren causales para solicitarlo." },
      { title: "Pensión alimenticia", text: "Es la obligación que surge entre las personas por razón de parentesco de atender las necesidades alimentarias de quienes no pueden cubrirlas por sí mismos, por su edad, estado físico o salud. Existe entre cónyuges y concubinos, de padres a hijos, de hijos a padres y a favor de los familiares más cercanos. Si usted y sus hijos necesitan recibir alimentos, o el pago que hace de ellos es excesivo, podemos ayudarle a resolverlo." },
    ],
    groups: [
      {
        title: "Procesos que atendemos",
        items: ["Divorcio incausado («exprés») en la Ciudad de México", "Divorcios necesarios en toda la República Mexicana", "Juicios de guarda y custodia de menores", "Régimen de visitas y convivencias con menores", "Juicios de pérdida de patria potestad", "Juicio de alimentos y pensión alimenticia", "Toda clase de controversias del orden familiar"],
      },
    ],
  },
  {
    key: "civil",
    short: "Juicio ordinario o ejecutivo civil, usucapión, arrendamientos y regularización de propiedades.",
    title: "Derecho civil",
    seo: "abogados civilistas en la Ciudad de México",
    lead: "Abogados civilistas para juicio ordinario o ejecutivo civil ante autoridades judiciales locales y federales, arrendamientos y regularización de propiedades.",
    intro: [
      { title: "Usucapión", text: "El juicio de prescripción positiva es la forma de adquirir la propiedad de un inmueble mediante la posesión de manera pacífica, continua, pública, de buena fe y en calidad de propietario, durante el tiempo que establece la ley. Podemos ayudarle a regularizar su propiedad con este trámite." },
      { title: "Juicio reivindicatorio", text: "Es el proceso judicial para obtener la posesión de un inmueble ocupado por un tercero sin derecho y sin justa causa. Debe promoverse lo antes posible: existe el riesgo de perder la propiedad por la usucapión que opera a favor de quien la ocupa." },
      { title: "Arrendamiento inmobiliario", text: "Es el proceso judicial de tramitación especial ante un juez civil para resolver la controversia derivada de un contrato de arrendamiento. Atendemos tanto a arrendadores que han dejado de recibir rentas como a inquilinos con problemas para cubrir sus pagos." },
    ],
    groups: [
      {
        title: "Procesos que atendemos",
        items: ["Juicio ordinario o ejecutivo civil", "Redacción, elaboración y revisión de documentos legales", "Regularización de propiedades: usucapión, reivindicatorio, otorgamiento y firma de escritura, inmatriculación judicial", "Recursos de queja, inconformidad, responsabilidad, apelación y juicio de amparo", "Administración de arrendamiento de inmuebles, casa habitación y locales comerciales", "Juicio de arrendamiento y cobranza de rentas"],
      },
    ],
  },
  {
    key: "mercantil",
    short: "Cobro de pagarés, cheques y letras de cambio, contratos y recuperación de cartera vencida.",
    title: "Derecho mercantil y cobranza",
    seo: "abogados mercantilistas y de cobranza en la Ciudad de México",
    lead: "Asesoría legal gratuita para el cobro de pagarés, cheques y letras de cambio, contratos mercantiles y recuperación de cartera vencida.",
    groups: [
      {
        title: "Cobro y juicios",
        items: ["Cobro de pagarés, cheques y letras de cambio", "Juicio ejecutivo y juicios ordinarios mercantiles", "Procesos arbitrales", "Recuperación de cartera vencida, judicial y extrajudicial"],
      },
      {
        title: "Empresas y contratos",
        items: ["Elaboración y revisión de contratos típicos, atípicos y documentos legales", "Contratación nacional e internacional", "Procedimientos de concurso mercantil", "Empresas familiares y pymes", "Atención a inversionistas extranjeros y nacionales", "Gestoría ante corredores públicos y el Registro Público de la Propiedad y el Comercio"],
      },
    ],
  },
  {
    key: "penal",
    short: "Denuncias, querellas y defensa de personas implicadas en la comisión de delitos.",
    title: "Derecho penal",
    seo: "abogados penalistas en la Ciudad de México",
    lead: "Redactamos denuncias y querellas y defendemos a personas implicadas en la comisión de delitos, coadyuvando ante el Ministerio Público.",
    intro: [{ title: "Denuncias, querellas y defensa", text: "Como abogados penalistas apoyamos a nuestros clientes en la redacción de denuncias y querellas y defendemos a personas implicadas en la comisión de delitos, coadyuvando ante el Ministerio Público y dando continuidad a los procedimientos penales." }],
    groups: [
      {
        title: "Delitos que atendemos",
        items: ["Delitos fiscales", "Delitos contra el medio ambiente", "Delitos económicos", "Delitos contra las personas y sus bienes", "Delitos contra el honor", "Delitos contra la libertad y la seguridad", "Delitos cometidos en contra de los trabajadores", "Delitos en el ámbito de la administración pública", "Delitos electorales", "Negligencia profesional o médica y accidentes de tránsito"],
      },
    ],
  },
  {
    key: "corporativo",
    short: "Constitución y fusión de sociedades, actas, poderes, patentes y marcas.",
    title: "Derecho corporativo y empresas",
    seo: "abogados corporativos y de empresas en la Ciudad de México",
    lead: "Determinamos el tipo de sociedad que mejor satisface las necesidades de cada proyecto, y atendemos su funcionamiento, constitución, transformación, fusión y escisión.",
    groups: [
      {
        title: "Sociedades",
        items: ["Constitución, transformación, fusión y escisión de sociedades civiles o mercantiles", "Venta, fusión y adquisición de sociedades", "Actas constitutivas, actas de asamblea de accionistas y sesiones de consejos de administración", "Otorgamiento de poderes o mandatos", "Auditoría legal de empresas", "Revisión de permisos, licencias, autorizaciones y concesiones, con su renovación o refrendo"],
      },
      {
        title: "Propiedad intelectual (asesoría legal gratuita)",
        items: ["Registro de patentes y marcas ante el IMPI", "Registro de derechos de autor ante el INDAUTOR", "Certificados de registro de obra", "Reserva de derechos al uso exclusivo de nombres artísticos, publicaciones, revistas y personajes ficticios", "Controversias de propiedad intelectual, pago de regalías, daños y perjuicios, daño moral"],
      },
      { title: "Contratos", items: ["Registro y elaboración de todo tipo de contratos para actividades empresariales"] },
    ],
  },
  {
    key: "fiscal",
    short: "Representación ante autoridades fiscales y administrativas, permisos y licencias.",
    title: "Materia fiscal y administrativa",
    seo: "abogados fiscalistas y administrativos en la Ciudad de México",
    lead: "Representamos a nuestros clientes ante autoridades fiscales y administrativas, federales y locales, y gestionamos permisos, avisos y licencias.",
    groups: [
      {
        title: "Representación",
        items: ["Procedimientos ante juzgados de distrito, tribunales colegiados de circuito, el Tribunal Federal de Justicia Administrativa y el tribunal contencioso administrativo local", "Recursos de inconformidad, revocación y revisión", "Juicio de nulidad contra la SHCP y la Tesorería", "Procesos contenciosos contra el IMSS", "Procedimientos ante la Procuraduría Federal del Consumidor"],
      },
      {
        title: "Gestoría",
        items: ["Autorizaciones, permisos, manifestaciones, avisos y licencias ante autoridades administrativas federales y locales", "Trámites para sorteos y espectáculos públicos", "Pago de impuestos", "Nulidad de multas y condonación de recargos"],
      },
    ],
  },
];

// Recortes de la foto propia de la fachada (Facebook); se deja fuera el teléfono del letrero, que no coincide con las fuentes actuales.
export const photos = { herreria, porton, victor };

export const reviews = [
  { text: "El servicio es perfecto! La atención y sobre todo llevan el proceso contigo de la forma más atenta y humana posible. El ambiente es totalmente profesional y sin duda alguna recomiendo para cualquier situación que se requiera para un abogado.", author: "Alejandro Gazga", when: "hace 4 meses" },
  { text: "Excelente servicio de soluciones jurídicas. Desde el primer contacto se nota el profesionalismo, la atención y el compromiso con cada caso. Brindan asesoría clara, personalizada y con un enfoque realmente orientado a encontrar soluciones.", author: "Nancy Abigail Melgoza Valdos", when: "hace un mes" },
  { text: "Excelente atención y profesionalismo de parte de todo el equipo, desde el primer momento me brindaron confianza, explicaron de manera clara y siempre estuvieron al pendiente de mi caso.", author: "Luis Alberto López", when: "hace 4 meses" },
];

export const person = { name: "Lic. Víctor Carrillo Estrada", role: "Dirige el despacho", photo: victor };

export const waLink = (intro: string) => `https://wa.me/525517984108?text=${encodeURIComponent(intro)}`;
