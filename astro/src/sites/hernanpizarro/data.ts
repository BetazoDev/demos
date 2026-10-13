import titular from "./assets/titular.jpg";
import recepcion from "./assets/recepcion.jpg";
import fachada from "./assets/fachada.jpg";

// Todo el texto sale de hernanpizarroabogado.com.mx (Inicio, Acerca de nosotros, Servicios y Contáctenos).
export type Area = { key: string; title: string; lead: string; itemsTitle: string; items: string[]; cta: string };

export const consulta =
  "Analizamos y planteamos las posibles soluciones, estableciendo las consecuencias legales; la finalidad de la asesoría consiste en dilucidar y reducir al máximo riesgos y problemas.";

export const areas: Area[] = [
  {
    key: "civil",
    title: "Civil",
    lead: "Elaboración de contratos y juicios civiles: reivindicatoria, prescripción adquisitiva, daños y perjuicios, daño moral y amparo.",
    itemsTitle: "Contratos y juicios",
    cta: "civil",
    items: [
      "Contratos de arrendamiento",
      "Cesión de derechos",
      "Mutuo con interés",
      "Compraventa",
      "Comodato",
      "Promesa de compraventa",
      "Servicios profesionales",
      "Acción reivindicatoria",
      "Prescripción adquisitiva",
      "Información ad perpetuam",
      "Acciones rescisorias",
      "Cumplimiento forzoso",
      "Acción especial hipotecaria",
      "Daños y perjuicios",
      "Daño moral",
      "Amparo directo o indirecto",
    ],
  },
  {
    key: "familiar",
    title: "Familiar",
    lead: "Juicios sucesorios, divorcio express o incausado, guarda y custodia, pensión alimenticia y demás controversias de orden familiar.",
    itemsTitle: "Asuntos que atendemos",
    cta: "materia familiar",
    items: [
      "Juicios sucesorios, testamentarios e intestamentarios",
      "Rectificación de actas",
      "Divorcio express o incausado",
      "Controversias de orden familiar",
      "Guarda y custodia",
      "Régimen de visitas",
      "Incumplimiento de convenios",
      "Pensión alimenticia",
      "Pérdida de patria potestad",
      "Reconocimiento de paternidad (ADN)",
      "Cambio de régimen matrimonial",
    ],
  },
  {
    key: "mercantil",
    title: "Mercantil",
    lead: "Contratos mercantiles, cobranza extrajudicial y judicial, y asuntos ante PROFECO, CNBV, CONDUSEF y otras autoridades administrativas.",
    itemsTitle: "Asuntos que atendemos",
    cta: "materia mercantil",
    items: [
      "Contratos mercantiles",
      "Cobranza extrajudicial",
      "Requerimientos de pago",
      "Cobranza judicial en juicios ordinarios o ejecutivos",
      "Asuntos ante PROFECO",
      "Asuntos ante CNBV",
      "Asuntos ante CONDUSEF",
      "Otras autoridades administrativas",
    ],
  },
  {
    key: "laboral",
    title: "Laboral",
    lead: "Contratos individuales, colectivos y por obra determinada; convenios, finiquitos, renuncias y liquidaciones.",
    itemsTitle: "Asuntos que atendemos",
    cta: "materia laboral",
    items: [
      "Contratos individuales",
      "Contratos colectivos",
      "Contratos por obra determinada",
      "Convenios",
      "Finiquitos",
      "Renuncias",
      "Liquidaciones",
      "Seguimiento de procedimientos ante autoridades laborales",
    ],
  },
  {
    key: "corporativo-inmobiliario",
    title: "Corporativo e inmobiliario",
    lead: "Constitución de sociedades civiles y mercantiles, actas de asamblea, asesoría inmobiliaria y compraventa de bienes inmuebles.",
    itemsTitle: "Asuntos que atendemos",
    cta: "derecho corporativo e inmobiliario",
    items: ["Constitución de sociedades civiles y mercantiles", "Actas de asamblea", "Asesoría inmobiliaria", "Compraventa de bienes inmuebles"],
  },
  {
    key: "negligencia-medica",
    title: "Negligencia médica",
    lead: "Asesoría y patrocinio a profesionales de la medicina en demandas o quejas, y asistencia y defensa a pacientes afectados por negligencia en el servicio médico.",
    itemsTitle: "Atendemos",
    cta: "negligencia médica",
    items: ["Profesionales de la medicina en demandas o quejas", "Pacientes afectados por negligencia en el servicio médico"],
  },
  {
    key: "asesoria-juridica",
    title: "Asesoría jurídica y juicios administrativos",
    lead: "Consultoría y asesoría jurídica; documentos legales; acompañamiento ante el gobierno y tribunales administrativos; amparo directo e indirecto.",
    itemsTitle: "Incluye",
    cta: "asesoría jurídica",
    items: [
      "Consultoría y asesoría jurídica",
      "Elaboración, revisión, análisis y dictamen de documentos legales",
      "Acompañamiento ante el gobierno de la CDMX y el federal",
      "Tribunales contenciosos administrativos",
      "PROFECO y CONDUSEF",
      "Juicios de amparo directo e indirecto en materia civil, administrativa o penal",
    ],
  },
];

export const valores = ["Compromiso", "Profesionalismo", "Responsabilidad", "Discrecionalidad", "Calidad", "Honestidad"];

export const titularInfo = {
  name: "Lic. Hernán A. Pizarro Monzón",
  role: "Titular del despacho",
  bio: "Egresado de la Universidad Nacional Autónoma de México, se ha desempeñado como abogado litigante y asesor tanto del sector público como del privado, en grupos empresariales, dependencias gubernamentales y como asesor de legisladores, entre otros.",
};

export const photos = { titular, recepcion, fachada };
