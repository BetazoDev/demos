import { groupsA } from "./groups-a";
import { groupsB, leaving } from "./groups-b";
import reforma from "./assets/reforma-amanecer.jpg";
import terminal from "./assets/terminal-aeropuerto.jpg";
import german from "./assets/german-martinez-saldana-angel.jpg";
import germanReforma from "./assets/german-martinez-saldana-reforma.jpg";
import eliud from "./assets/eliud-jahzeel-ocampo-lopez.jpg";

export type { Group, Item, Block } from "./groups-a";
export { leaving };
export const groups = [...groupsA, ...groupsB];
export const photos = { reforma, terminal, german, germanReforma, eliud };

export const intro = {
  statement: "En BAM-G combinamos experiencia jurídica, atención empática y un compromiso real con cada cliente. Nuestra prioridad: tu tranquilidad.",
  hero: "Todas tus opciones migratorias. Te acompañamos desde la asesoría inicial hasta la obtención de tu visa o residencia en México.",
  about: "En BAM-G confiamos en la fuerza de un equipo comprometido, ético y altamente especializado en derecho migratorio. Cada integrante aporta experiencia, cercanía y una visión estratégica que garantiza soluciones legales efectivas y acompañamiento humano en todo momento.",
  about2: "Estamos aquí para escucharte, orientarte y defender tus derechos con profesionalismo y responsabilidad.",
  vision: "Ser la opción líder en servicios legales migratorios, ofreciendo asesoría y procedimientos de alta calidad con un enfoque en resultados para México y el Mundo.",
  urgent: { title: "¿Detenido en el aeropuerto o retenido por migración?", text: "Solicita tu Amparo Urgente Contra Deportación. Estamos activos las 24 horas." },
};

export const process = {
  title: "Nuestro proceso",
  steps: [
    { t: "Contrata tu asesoría legal", d: "Desde solo $1,800 MXN (o $100 USD), inicia con una consulta personalizada." },
    { t: "Ten tu reunión con el abogado", d: "" },
    { t: "Iniciamos tu trámite migratorio", d: "" },
  ],
};

export const benefits = [
  "Más de 10 años de experiencia en migración legal en México",
  "Asesoría personalizada y estrategias a tu medida",
  "Gestión rápida y con prioridad ante Migración y SRE",
  "Atención a particulares, familias, empresas y ejecutivos",
  "Defensa ante procesos de deportación o negativas",
  "Tarifas claras y competitivas desde el primer contacto",
];

export const seals = ["Expertos en migración", "Procesos ágiles", "Atención legal directa", "Visión internacional"];

export const stats = [
  { value: "+10", label: "años de experiencia" },
  { value: "+4,500", label: "casos satisfactorios" },
];

export const team = [
  {
    name: "Germán Martínez Saldaña",
    role: "Socio Fundador y Director General de BAM-G",
    photo: german,
    bio: "Con estudios en UAM y UNAM, además de un Diplomado en Derecho Migratorio Mexicano, es miembro fundador del Primer Colegio Nacional de Abogadas y Abogados Migratorios. Con él a tu lado, tu caso está respaldado por excelencia legal, compromiso y experiencia.",
  },
  {
    name: "Eliud Jahzeel Ocampo López",
    role: "Coordinador de Gestión Jurídica en Casos Migratorios",
    photo: eliud,
    bio: "Egresado de la Licenciatura en Derecho por la Universidad Autónoma Metropolitana. Su labor se enfoca en la dirección y supervisión de casos migratorios, combinando un enfoque estratégico con un trato humano y cercano hacia cada cliente. Su experiencia en atención directa a personas en movilidad, adquirida en Cáritas CDMX, le ha permitido desarrollar habilidades para brindar soluciones claras, eficientes y personalizadas en áreas como regularización migratoria, defensa legal y acceso a derechos.",
  },
];

export const reviews = {
  rating: 4.8,
  count: 21,
  quotes: [
    { text: "El mejor despacho de inmigración, 100% recomendado. Contratar al Lic. Germán Martínez fue, sin duda, la mejor decisión que tomamos. Llegamos con un caso migratorio muy complejo relacionado con mi esposa y, desde el primer momento, nos recibieron con profesionalismo, calidez y una claridad que nos dio tranquilidad inmediata.", author: "Manuel Lopez" },
    { text: "El servicio de esta firma de abogados es simplemente excepcional, principalmente el licenciado German, el cual es sumamente profesional, meticuloso y atento en su trabajo. Te guía de la mano en todo momento y no tienes que preocuparte por nada.", author: "Erik Castillo Mesa" },
    { text: "El grupo de abogados es magnífico. Nos brindaron seguridad y apoyo hasta el final del caso con un resultado excelente.", author: "Taymi Camacho" },
    { text: "Excelente trabajo. Nosotros los buscamos para hacer reunificación familiar. Nos entregaron la claridad del proceso, teniendo claro el proceso, nos apoyaron en todo momento. Supremamente serios y organizados. Muy recomendados.", author: "Jairo Mazenett De silvestri" },
  ],
};

export const serviceNames = [...groups.map((g) => g.title), leaving.title];
