import { areas as a1 } from "./areas";
import { areasB } from "./areas-b";
import gustavo from "./assets/gustavo-cardenas-soriano.jpg";
import brochure from "./assets/brochure-litigio-mediacion-familiar.jpg";
import vidrio from "./assets/vidrio-esmeralda.jpg";
import sala from "./assets/sala-juntas.jpg";
import libro from "./assets/libro-abierto.jpg";
import libreta from "./assets/libreta-pluma.jpg";
import torre from "./assets/torre-latinoamericana.jpg";

export type { Area } from "./areas";
export const areas = [...a1, ...areasB];
export const photos = { gustavo, brochure, vidrio, sala, libro, libreta, torre };

// Servicios sin página propia (texto breve en cardenas-soriano.com/servicios).
export const otherLitigation = [
  { t: "Acciones colectivas", d: "Gestión de riesgos colectivos antes, durante y después del litigio, con enfoque legal, reputacional y de negocio." },
  { t: "Libertad de expresión y daño moral", d: "Defensa de la libertad de expresión, el honor, la vida privada y la propia imagen." },
  { t: "Derecho del entretenimiento", d: "Protección de proyectos creativos, contratos, derechos y reputación en industrias culturales, medios y entretenimiento." },
  { t: "Derecho Digital", d: "Asuntos donde tecnología, prueba digital y proceso judicial exigen una estrategia jurídica actualizada." },
  { t: "Derecho Electoral", d: "Impugnaciones, procedimientos sancionadores y controversias electorales." },
];
export const mediation = {
  title: "Mediación y conciliación",
  text: "Resolución certificada sin las complejidades de un juicio, con la fuerza de una sentencia.",
  items: ["Mediación y conciliación administrativa", "Mediación y conciliación mercantil", "Mediación y conciliación civil", "Mediación y conciliación familiar", "Mediación colectiva"],
};
export const training = {
  title: "Capacitación jurídica",
  text: "Formación jurídica especializada, impartida por quienes participaron en la redacción de las leyes.",
  items: ["Capacitación en el CNPCF", "Capacitación en la LGMASC", "Capacitación en Justicia digital", "Capacitación en Oralidad", "Capacitación en Argumentación jurídica", "Capacitación en Técnica procesal"],
};

export const process = {
  title: "El respaldo necesario para asegurar tu tranquilidad.",
  steps: [
    { t: "Diagnóstico", d: "Analizamos el contexto legal, institucional y humano para determinar si conviene litigar, mediar o prevenir." },
    { t: "Estrategia", d: "Diseñamos un plan de acción claro: los pasos a seguir, los recursos necesarios y las decisiones a tomar." },
    { t: "Acompañamiento", d: "Ejecutamos la estrategia con comunicación constante, para aportar certeza sobre el avance y los pasos a seguir." },
  ],
};

export const founder = {
  name: "Gustavo Cárdenas Soriano",
  role: "Socio fundador",
  quote: "Las normas que hoy aplican tribunales y mecanismos alternativos en todo el país, las conocemos desde su redacción.",
  bio: "Más de 15 años de experiencia en los sectores público y privado; su paso por distintos despachos y su desempeño como Director Jurídico del IMSS fortalecieron su criterio técnico y visión institucional. Participó en los grupos redactores del Código Nacional de Procedimientos Civiles y Familiares y de la Ley General de Mecanismos Alternativos de Solución de Controversias.",
  credentials: ["Facilitador en materia administrativa certificado por el Tribunal Federal de Justicia Administrativa", "Facilitador Privado por el Poder Judicial del Estado de México", "Hemos formado a poderes judiciales de la Federación y de los estados, así como a universidades y colegios de abogados"],
};

export const stats = [
  { value: "15+", label: "años de experiencia pública y privada" },
  { value: "2", label: "certificaciones como facilitador" },
  { value: "2", label: "leyes nacionales con nuestra participación en su redacción" },
  { value: "22", label: "especialidades" },
];

export const contribution = "Cárdenas Soriano Abogados no solo aplica la ley: ayudó a escribirla, participando en la revisión del CNPCF y de la Ley de Mecanismos Alternativos con enfoque en justicia digital.";

export const publications = [
  { t: "Del papel a la práctica: desafíos y soluciones en la aplicación del Código Nacional de Procedimientos Civiles y Familiares", by: "Gustavo Cárdenas Soriano" },
  { t: "El perfil judicial frente a la nueva justicia civil y familiar", by: "Obra coordinada por Gustavo Cárdenas Soriano" },
  { t: "Código de procedimientos civiles de la Ciudad de México en esquemas" },
  { t: "Ley General de Mecanismos Alternativos de Solución de Controversias comentada", by: "Artículos 86 a 93" },
  { t: "Libertad de expresión y daño moral: estudio argumentativo sobre el estándar de malicia efectiva" },
  { t: "Litigio & mediación familiar", by: "Brochure" },
];

export const reviews = {
  rating: 5.0,
  count: 14,
  quotes: [
    { text: "El Lic. Cárdenas llevó a cabo el proceso legal para divorciar, exitosamente, a mi hija; a pesar de que el proceso se llevó a cabo en otro país, Panamá. Es importantísimo mencionar que el Lic. Cárdenas fue totalmente empático y siempre estuvo atento de que el proceso fuese justo para mi hija. Mi agradecimiento y reconocimiento a su profesionalismo.", author: "Estela Rivera Rivera" },
    { text: "Super confiable, literalmente se merece toda mi confianza. No vuelvo a intentar con nadie más…", author: "Ricardo Cortes" },
    { text: "El mejor servicio que me ha tocado.", author: "Adolfo Notholt Baz" },
  ],
};

export const serviceNames = [
  ...areas.map((a) => a.title),
  ...otherLitigation.map((o) => o.t),
  mediation.title,
  training.title,
];
