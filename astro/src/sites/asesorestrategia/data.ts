import retrato from "./assets/jose-ruiz.jpg";
import fachada from "./assets/fachada-roma.jpg";
import llaves from "./assets/llaves-folio.jpg";

// Todo el texto sale de asesorestrategia.com (Inicio, La Firma, Servicios, Contacto). Ver lista-2/56-asesorestrategia.
export type Area = { key: string; title: string; short: string; lead: string; body: string; itemsTitle: string; items: string[]; related: string[] };

export const areas: Area[] = [
  {
    key: "familiar",
    title: "Derecho familiar y divorcios",
    short: "Divorcio incausado, pensión alimenticia, custodia y convivencia; liquidación de la sociedad conyugal cuidando el patrimonio.",
    lead: "Entendemos que cerrar un ciclo de pareja es una de las transiciones más difíciles de la vida. Nuestro enfoque en Derecho Familiar busca proteger lo más importante: su estabilidad emocional y el futuro de sus hijos.",
    body: "Más allá del trámite de divorcio incausado, diseñamos estrategias para garantizar una pensión alimenticia justa y un régimen de custodia y convivencia sano. Además, como financieros, cuidamos que la liquidación de la sociedad conyugal no destruya su patrimonio, asegurando que usted tenga los recursos para empezar de nuevo con tranquilidad.",
    itemsTitle: "Qué atendemos",
    items: ["Divorcio incausado", "Pensión alimenticia", "Custodia y convivencia", "Liquidación de la sociedad conyugal"],
    related: ["herencias", "inmobiliario"],
  },
  {
    key: "herencias",
    title: "Herencias y juicios sucesorios",
    short: "Redacción de testamentos, juicios sucesorios (intestados), adjudicación de inmuebles y cuentas bancarias, mediación entre herederos.",
    lead: "Su legado debe ser motivo de unión, no de conflicto. Asesoramos a familias en la redacción de testamentos claros que eviten problemas futuros, y gestionamos juicios sucesorios (intestados) con la sensibilidad que el duelo requiere.",
    body: "Nuestro objetivo es destrabar legalmente la adjudicación de inmuebles y cuentas bancarias lo más rápido posible. Actuamos como mediadores entre herederos para evitar litigios costosos y asegurar que la voluntad de quien partió se cumpla, protegiendo el valor de la masa hereditaria.",
    itemsTitle: "Qué atendemos",
    items: ["Redacción de testamentos", "Juicios sucesorios (intestados)", "Adjudicación de inmuebles y cuentas bancarias", "Mediación entre herederos"],
    related: ["familiar", "inmobiliario"],
  },
  {
    key: "inmobiliario",
    title: "Derecho inmobiliario y arrendamiento",
    short: "Due diligence inmobiliario, compraventa, regularización, contratos de arrendamiento blindados, recuperación de inmuebles y desalojo.",
    lead: "Una propiedad es la inversión más sólida, pero también la más expuesta. No nos limitamos a revisar papeles; realizamos un Due Diligence profundo para detectar vicios ocultos, deudas o riesgos legales antes de que firme cualquier escritura.",
    body: "Somos expertos en arrendamiento blindado: elaboramos contratos con póliza jurídica implícita y estrategias de desalojo exprés en caso de incumplimiento. Ya sea compraventa, regularización o renta, protegemos su ladrillo con la misma fuerza que su dinero.",
    itemsTitle: "Qué atendemos",
    items: ["Due diligence inmobiliario", "Compraventa", "Regularización", "Contratos de arrendamiento blindados (póliza jurídica implícita)", "Recuperación de inmuebles y desalojo"],
    related: ["contratos", "herencias"],
  },
  {
    key: "contratos",
    title: "Contratos y blindaje legal",
    short: "Contratos mercantiles y de compraventa, actas constitutivas, acuerdos de confidencialidad (NDA), relaciones laborales; departamento legal externo.",
    lead: "Un mal contrato puede quebrar una empresa. Nuestra práctica corporativa se enfoca en la prevención: redactamos y negociamos contratos mercantiles que cierran puertas a futuros litigios.",
    body: "Desde la constitución de su sociedad (Actas Constitutivas) hasta acuerdos de confidencialidad (NDA) y relaciones laborales, actuamos como su departamento legal externo. Brindamos la certeza jurídica que su negocio necesita para escalar sin miedo a contingencias legales sorpresa.",
    itemsTitle: "Qué atendemos",
    items: ["Contratos mercantiles y de compraventa", "Actas constitutivas", "Acuerdos de confidencialidad (NDA)", "Relaciones laborales", "Departamento legal externo"],
    related: ["inmobiliario", "familiar"],
  },
];

export const photos = { retrato, fachada, llaves };

export const socio = {
  name: "Lic. José Ruiz",
  role: "Socio director, abogado y economista",
  studies: "Maestría en Derecho (UNAM) | Analista Financiero",
  quote: "La protección patrimonial requiere una visión dual. No solo aplicamos la ley; analizamos el impacto económico de cada decisión jurídica.",
  paragraphs: [
    "Estratega jurídico con una visión clara: el conflicto se gana con inteligencia financiera y precisión legal.",
    "Con una sólida formación como Economista y Maestro en Derecho, el Lic. Ruiz se especializa en litigio fiscal y constitucional, con enfoque en resolver lo complejo. Su práctica se distingue por una capacidad de negociación orientada a resultados.",
    "¿Su ventaja competitiva? Entender los números detrás de las leyes. Ya sea en la defensa del patrimonio o en la reestructuración de una empresa, su enfoque garantiza que cada movimiento legal sea también una victoria económica.",
  ],
};

export const principios = [
  { title: "Calidad sobre volumen", text: "Para garantizar la excelencia, no aceptamos todas las solicitudes. Realizamos una evaluación previa de viabilidad técnica y ética en cada asunto. Trabajamos exclusivamente con clientes donde tenemos la certeza de poder aportar valor real y estratégico." },
  { title: "Atención personalizada", text: "Entendemos la angustia que genera un conflicto legal. Aquí usted no es un número de expediente; ofrecemos un acompañamiento empático y cercano, donde siempre tendrá acceso directo a quien defiende su patrimonio." },
  { title: "Estructura ágil y especializada", text: "Aunque la atención es personal, no trabajamos solos. Contamos con una sólida red de colaboradores especialistas que activamos según la complejidad de su caso, manteniendo siempre la dirección estratégica centralizada." },
];
