// Todo el texto sale de enley.mx: inicio, páginas de cada trámite, blog y aviso de privacidad. Precios en pesos mexicanos, sin IVA.
export type Tier = { name: string; price?: string; unit?: string; text?: string; features?: string[] };
export type Faq = { q: string; a: string[] };
export type Service = {
  key: string;
  title: string;
  /** Texto de la tarjeta de la home */
  blurb: string;
  /** Etiqueta de precio para listas */
  price: string;
  /** Titular secundario de la página del trámite */
  headline: string;
  lede: string;
  introTitle?: string;
  intro?: string[];
  tiersTitle?: string;
  tiers?: Tier[];
  tiersNote?: string;
  tiers2Title?: string;
  tiers2?: Tier[];
  listTitle?: string;
  list?: string[];
  list2Title?: string;
  list2?: string[];
  stepsTitle?: string;
  steps?: string[];
  faq?: Faq[];
};

export const home = {
  tagline: "La solución integral a tus problemas legales",
  lede: "Un equipo de abogados y contadores expertos, listos para ayudarte cuando y desde dónde tú quieras.",
  statement: "Unimos el conocimiento de los mejores abogados con la velocidad y comodidad de la tecnología.",
  que: [
    "Somos una empresa dedicada a los servicios legales y contables en línea creada en España en 2018. Nuestro equipo ya ha ayudado a más de 10,000 clientes en diferentes trámites legales y contables de todo tipo.",
    "Llegamos a México con un equipo de abogados expertos de las mejores universidades, ofreciendo el mejor servicio y con los mejores precios. Desde la Ciudad de México, te ayudamos en cualquier lugar del país.",
  ],
  stepsTitle: "¿Cómo funcionan nuestros servicios?",
  stepsLead: "Nuestros servicios son completamente en línea para que puedas realizar tu trámite cuando y desde dónde tú quieras.",
  steps: [
    "Llena el formulario correspondiente al trámite que necesitas",
    "Nos ponemos en contacto contigo para comentar tu caso y resolver cualquier duda",
    "Se inicia tu trámite, sobre el que estarás permanentemente informado",
  ],
  whyTitle: "¿Por qué elegir Enley?",
  why: [
    { title: "Servicio Integral Experto", text: "Deja que los mejores abogados y contadores realicen el trámite por ti." },
    { title: "Velocidad", text: "Utilizamos la tecnología y procesos de automatización para resolver tus problemas lo más rápido posible." },
    { title: "El mejor precio", text: "Servicios de la mejor calidad y a un mejor precio que el de un abogado tradicional." },
    { title: "Facilidad", text: "Procesos legales de la manera más sencilla." },
  ],
  stats: [
    { value: "+10,000", label: "clientes en trámites legales y contables" },
    { value: "2,000", label: "empresas constituidas" },
    { value: "+1,000", label: "marcas registradas" },
    { value: "+1,500", label: "clientes que nos han confiado su contabilidad" },
  ],
};

// Reseñas de Google publicadas en enley.mx (texto tal cual, nombre como aparece).
export const reviews = [
  { text: "Uno de los mejores servicios legales que hay en México lo recomiendo mucho, desde la atención hasta la solución a nuestros problemas legales", author: "Sandra Abugaber" },
  { text: "EXCELENTE SERVICIO!! Me apoyaron con renovación de registro REPSE, durante todo el proceso estuvieron en comunicación, muy profesionales y excelente trato. Los recomiendo ampliamente", author: "César Pineda" },
  { text: "Super atentos y dieron seguimiento muy profesional a mi registro de marca, haciéndolo posible.", author: "Mireya Acosta" },
  { text: "Agradecido totalmente, súper confiables siempre están al pendiente a cualquier duda y un muy buen precio", author: "Rafael Jimenez" },
];

export const posts = [
  { date: "2025-11-11", title: "How to get a Trademark in Mexico?", text: "Learn the key steps, timelines, and legal requirements for successfully obtaining and maintaining a trademark in Mexico.", slug: "how-to-get-a-trademark-in-mexico", lang: "en" },
  { date: "2025-11-09", title: "How to incorporate a company in Mexico?", text: "Discover the key legal requirements, restrictions, and practical steps foreigners must follow to successfully incorporate a company in Mexico.", slug: "how-to-incorporate-a-company-in-mexico", lang: "en" },
  { date: "2025-11-06", title: "¿Puede un extranjero o una empresa extranjera constituir una empresa en México?", text: "Descubre qué requisitos y limitaciones debe enfrentar una persona o empresa extranjera al intentar constituir una sociedad en México.", slug: "puede-un-extranjero-o-una-empresa-extranjera-constituir-una-empresa-en-mexico", lang: "es" },
  { date: "2025-11-04", title: "¿Qué es y cómo funciona el «Divorcio Express»?", text: "Descubre si tú y tu pareja cumplen los requisitos para acceder al llamado «Divorcio Express» y cómo este proceso puede simplificar la disolución de su matrimonio.", slug: "que-es-y-como-funciona-el-divorcio-express", lang: "es" },
  { date: "2025-11-02", title: "¿Qué es y para qué sirve un registro de marca?", text: "Descubre cómo funciona el registro de marca en México y qué pasos debes seguir para proteger legalmente tu identidad comercial.", slug: "que-es-y-para-que-sirve-un-registro-de-marca", lang: "es" },
];
