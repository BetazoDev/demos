import type { Area, Group } from "./types";
import { areasA } from "./areas-a";
import { areasB } from "./areas-b";
import { areasC } from "./areas-c";
import hero from "./assets/hero-clinica.jpg";
import banda from "./assets/banda-mazo-estetoscopio.jpg";
import documentos from "./assets/documentos-expediente.jpg";
import eric from "./assets/eric-andrade-torres.jpg";
import sandra from "./assets/sandra-canales-martinez.jpg";

// Todo el texto sale de lexonabogados.mx (inicio, nuestro despacho, páginas de servicio, aviso de privacidad).
export const areas: Area[] = [...areasA, ...areasB, ...areasC];
export const byKey = (k: string) => areas.find((a) => a.key === k)!;

export const groups: { key: Group; title: string; lead?: string }[] = [
  { key: "sanitario", title: "Derecho médico y sanitario", lead: "Nuestras principales áreas de especialidad son el Derecho Sanitario y la defensa del médico ante denuncias y demandas de pacientes o por multas de autoridades como COFEPRIS." },
  { key: "penal", title: "Juicios penales" },
  { key: "familiar", title: "Juicios familiares" },
  { key: "civil", title: "Juicios civiles" },
];

// Las 8 especialidades de la página de inicio del despacho, con sus palabras.
export const especialidades: { key: string; label: string }[] = [
  { key: "defensa-medico-legal", label: "Defensa por demanda de pacientes" },
  { key: "multas-cofepris", label: "Multas impuestas por COFEPRIS" },
  { key: "normatividad-sanitaria", label: "Normatividad sanitaria" },
  { key: "aviso-publicidad", label: "Avisos de publicidad" },
  { key: "aviso-funcionamiento", label: "Avisos de funcionamiento" },
  { key: "contratos-consentimientos", label: "Contratos y consentimientos informados" },
  { key: "registro-marca", label: "Registro de marca" },
  { key: "cobro-cirugias", label: "Cobro de carta de cirugía" },
];

export const photos = { hero, banda, documentos };

export const team = [
  {
    name: "Lic. Eric Andrade Torres",
    role: "Socio fundador",
    photo: eric,
    short: "Preparación formal en gestión empresarial y administración de empresas médicas.",
    bio: [
      "Licenciado en Derecho, egresado de la Universidad Nacional Autónoma de México. Cuenta con preparación formal en gestión empresarial y administración de empresas médicas, por la Universidad Católica de Chile, la UNAM y el Tecnológico de Monterrey.",
      "Es socio fundador del bufete jurídico Lexon Abogados. Sus áreas de experiencia son la creación, gestión, administración y defensa legal de instituciones de salud, clínicas y médicos privados.",
    ],
    studies: null as string[] | null,
  },
  {
    name: "Lic. Sandra Mercedes Canales Martínez",
    role: "Socia",
    photo: sandra,
    short: "Abogada especialista en derecho penal médico y sanitario.",
    bio: [
      "Licenciada en Derecho, egresada por la Universidad Autónoma de México. Abogada especialista en Derecho penal médico y sanitario, socia de Lexon Abogados y Consultores, despacho que actualmente asesora clínicas médicas.",
    ],
    studies: [
      "Licenciatura en Derecho por la Universidad Autónoma de México",
      "Diplomado en Derecho penal en el sistema acusatorio",
      "Especialidad en Derecho Penal por la Universidad Autónoma de México",
      "Especialidad en Derecho Sanitario por la Universidad Autónoma de México",
    ],
  },
];

export const quienes = "“Lexon Abogados” somos una empresa jurídica con operaciones en México, dedicada al estudio exhaustivo del Derecho, cuyo principal objetivo es poner a disposición del público una amplia gama de soluciones innovadoras en la prestación de servicios legales. Nuestros servicios están orientados hacia médicos privados, clínicas y consultorios.";

export const especialidadesDespacho = [
  { title: "Derecho Sanitario", text: "Asesoría jurídica especializada para instituciones, clínicas y profesionales de la salud." },
  { title: "Derecho Penal Médico", text: "Defensa y acompañamiento legal ante controversias relacionadas con la práctica médica." },
  { title: "Cumplimiento Regulatorio", text: "Prevención, revisión y mejora del cumplimiento normativo de establecimientos médicos." },
];

export const mision = "Aprovechar los beneficios que la tecnología, las plataformas digitales y los medios de comunicación ofrecen, para brindar a nuestros clientes servicios legales integrales, de alto rendimiento, con bajos tiempos de resolución de asuntos y con una excelente experiencia de comunicación entre abogado y cliente. Cuidando de mantener los valores esperados de una empresa jurídica tradicional: honestidad, accesibilidad, prontitud y efectividad.";
export const vision = "Mantener las actividades de la empresa siempre a la vanguardia, implementando herramientas tecnológicas que ayuden a mejorar el rendimiento, la accesibilidad, la eficiencia y la efectividad de nuestros servicios legales. Queremos que las comunicaciones entre Lexon y sus clientes se realicen de forma transparente, clara y simple, a través de herramientas de uso cotidiano. Nuestro modelo de atención siempre estará adaptado a las necesidades de nuestros clientes y nuestras herramientas y conocimientos actualizados, para así hacer frente a la nueva realidad jurídica.";

export const comparacion = {
  sanitario: {
    title: "Abogado sanitario",
    intro: "Se enfoca en el marco legal de los sistemas de salud y las políticas públicas relacionadas con la sanidad. Su labor abarca:",
    items: [
      { h: "Regulación del sector salud", d: "Asesoramiento sobre normativas aplicables a la operación y funcionamiento correcto de hospitales, clínicas y las que rigen la prestación de servicios de salud, incluyendo los que prestan los médicos de forma individual." },
      { h: "Legislación sanitaria", d: "Cumplimiento de leyes que rigen la atención médica. Trámites para licencias de establecimientos de salud y gestión de Residuos Peligrosos Biológico-Infecciosos (RPBI)." },
      { h: "Derechos de los pacientes", d: "Defensa de derechos como la confidencialidad, el acceso al expediente clínico y el consentimiento informado." },
      { h: "Consultoría a instituciones", d: "Apoyo en la gestión de contratos, convenios y acuerdos en el sector salud." },
      { h: "Salud pública", d: "Asesoramiento en políticas de prevención y promoción de la salud, incluyendo campañas de vacunación y el control de enfermedades infecciosas." },
      { h: "Defensa", d: "Representación de médicos o instituciones de salud frente a multas o medidas impuestas por autoridades sanitarias como la COFEPRIS." },
    ],
  },
  medico: {
    title: "Abogado en derecho médico",
    intro: "Se especializa en la relación jurídica entre médicos, pacientes e instituciones de salud, con un enfoque más específico en la práctica médica y sus implicaciones legales. Sus áreas de acción incluyen:",
    items: [
      { h: "Responsabilidad médica", d: "Representación en casos de negligencia, mala praxis o errores médicos." },
      { h: "Ética médica", d: "Resolución de conflictos relacionados con el consentimiento informado, decisiones de tratamiento y cuestiones bioéticas." },
      { h: "Defensa de médicos", d: "Asesoramiento a profesionales de la salud en procesos judiciales o administrativos derivados de su ejercicio profesional." },
      { h: "Contratos y normativas laborales", d: "Gestión de contratos laborales, derechos profesionales y seguros de responsabilidad para médicos." },
      { h: "Litigios por daños médicos", d: "Actuación en demandas relacionadas con lesiones, daños o fallecimientos derivados de atención médica." },
    ],
  },
  diferencia: [
    "El abogado en Derecho Médico se centra en conflictos individuales relacionados con la práctica médica y su impacto en pacientes y profesionales de la salud.",
    "El abogado sanitario se ocupa del marco regulatorio general de los sistemas de salud, tanto en el ámbito público como en el privado.",
  ],
};
