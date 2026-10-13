import type { ImageMetadata } from "astro";
import alejandro from "./assets/alejandro-lira.jpg";
import maribeth from "./assets/maribeth-duprat.jpg";

// Todo el texto sale de dupratlira.com (inicio, nosotros, páginas de servicios, aviso de privacidad) y de su ficha de Google.
export type Group = { title?: string; items: string[] };
export type Area = { key: string; title: string; lead: string; groups: Group[]; lawyer?: "lira" | "duprat"; seo: string };

export const areas: Area[] = [
  {
    key: "laboral",
    title: "Derecho laboral",
    lead: "Para patrones y para trabajadores: auditorías, despidos, liquidaciones, prestaciones y litigio ante tribunales laborales.",
    lawyer: "lira",
    seo: "Abogados laboralistas en la Ciudad de México para patrones y trabajadores: despidos, liquidaciones, prestaciones, seguridad social y litigio laboral.",
    groups: [
      { title: "Para patrones", items: ["Auditorías laborales: contratos, reglamentos internos y actas de comisiones mixtas", "Orientación legal", "Atención de requerimientos de la STPS, la Procuraduría del Trabajo y el IMSS", "Asesoría en procesos de despido y finiquitos", "Convenios de terminación", "Representación ante el Centro de Conciliación Laboral", "Litigio ante tribunales laborales"] },
      { title: "Para trabajadores", items: ["Despidos injustificados", "Liquidaciones y finiquitos", "Rescisiones", "Salarios caídos", "Condiciones de trabajo", "Prestaciones: aguinaldo, prima vacacional, prima dominical, descansos y antigüedad", "Seguridad social: IMSS, INFONAVIT y AFORE"] },
    ],
  },
  {
    key: "mercantil",
    title: "Derecho mercantil",
    lead: "Contratos mercantiles, cobranza judicial, cobro de cheques, pagarés y facturas, conflictos entre socios y juicios orales mercantiles.",
    seo: "Abogados mercantiles en la Ciudad de México: contratos, cobranza judicial, cobro de pagarés y cheques, conflictos entre socios y juicios orales mercantiles.",
    groups: [{ items: ["Contratos mercantiles", "Cobranza judicial para empresas", "Cobro de cheques, pagarés, facturas y letras de cambio", "Litigio por cumplimiento o rescisión", "Defensa de deudores o acreedores", "Conflictos entre socios", "Juicios orales mercantiles"] }],
  },
  {
    key: "civil",
    title: "Derecho civil",
    lead: "Arrendamiento inmobiliario, escrituras, contratos, usucapión, juicios hipotecarios y daños y perjuicios.",
    lawyer: "lira",
    seo: "Abogados civiles en la Ciudad de México: arrendamiento, escrituras, nulidad de contratos, usucapión, juicios hipotecarios y daños y perjuicios.",
    groups: [{ items: ["Arrendamiento inmobiliario", "Otorgamiento y firma de escrituras", "Cumplimiento, rescisión y nulidad de contratos", "Juicio reivindicatorio", "Usucapión", "Juicios especiales hipotecarios", "Tercerías excluyentes de dominio", "Daños y perjuicios", "Inmatriculación judicial"] }],
  },
  {
    key: "corporativo",
    title: "Derecho corporativo",
    lead: "Constitución de sociedades, actas de asamblea y consejo, fusión y escisión, transformaciones y fideicomisos.",
    seo: "Abogados corporativos en la Ciudad de México: constitución de sociedades, actas, fusión y escisión, fideicomisos y propiedad intelectual.",
    groups: [{ items: ["Constitución de sociedades", "Actas de asamblea y consejo", "Fusión y escisión", "Transformaciones", "Protocolización de actas y certificación de firmas", "Fideicomisos", "Propiedad intelectual"] }],
  },
  {
    key: "fiscal",
    title: "Derecho fiscal",
    lead: "Créditos fiscales del SAT, el IMSS y el INFONAVIT, facultades de comprobación, devoluciones, embargos y bloqueo de cuentas.",
    lawyer: "duprat",
    seo: "Abogados fiscalistas en la Ciudad de México: créditos fiscales del SAT, facultades de comprobación, devolución de saldos a favor y bloqueo de cuentas.",
    groups: [{ items: ["Créditos fiscales del SAT, el IMSS y el INFONAVIT", "Facultades de comprobación", "Devolución de saldos a favor", "Embargos y bloqueo de cuentas (UIF)", "Cancelación del certificado de sello digital", "Rectificación de la prima del seguro de riesgos de trabajo"] }],
  },
  {
    key: "administrativo",
    title: "Derecho administrativo",
    lead: "Inspecciones y sanciones, licitaciones, concesiones, permisos y uso de suelo, quejas ante PROFECO y CONDUSEF y clausuras.",
    lawyer: "duprat",
    seo: "Abogados de derecho administrativo en la Ciudad de México: sanciones, licitaciones, concesiones, uso de suelo, clausuras y responsabilidad patrimonial del Estado.",
    groups: [{ items: ["Inspecciones y sanciones laborales", "Licitaciones", "Concesiones, permisos y uso de suelo", "Quejas ante PROFECO y CONDUSEF", "Clausuras y sanciones de COFEPRIS e INVEA", "Infracciones de la Guardia Nacional", "Multas de tránsito", "Responsabilidad patrimonial del Estado y responsabilidades administrativas"] }],
  },
  {
    key: "seguridad-social",
    title: "Seguridad social",
    lead: "Pensiones ante el IMSS y el ISSSTE, cambio de régimen y recuperación de AFORE e INFONAVIT.",
    seo: "Abogados de seguridad social en la Ciudad de México: pensiones del IMSS y el ISSSTE, cambio de régimen y recuperación de AFORE e INFONAVIT.",
    groups: [{ items: ["Pensiones ante el IMSS y el ISSSTE: otorgamiento, incremento, suspensión, compatibilidad y cuota pensionaria", "Cambio de régimen (décimo transitorio del ISSSTE)", "Recuperación de AFORE e INFONAVIT"] }],
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    lead: "Divorcios, pensión alimenticia, régimen de convivencia, paternidad, sucesiones, concubinato y pérdida de patria potestad.",
    lawyer: "lira",
    seo: "Abogados familiares en la Ciudad de México: divorcios, pensión alimenticia, régimen de convivencia, sucesiones, concubinato y pérdida de patria potestad.",
    groups: [{ items: ["Divorcios", "Pensión alimenticia", "Régimen de convivencia", "Paternidad", "Rectificación de actas", "Sucesiones", "Concubinato", "Pérdida de patria potestad"] }],
  },
  {
    key: "negligencia-medica",
    title: "Negligencia médica",
    lead: "Asesoría y representación para obtener una indemnización por responsabilidad civil o patrimonial del Estado y por daño moral.",
    seo: "Abogados de negligencia médica en la Ciudad de México: asesoría y representación para indemnización por responsabilidad civil, patrimonial del Estado y daño moral.",
    groups: [{ items: ["Indemnización por responsabilidad civil", "Indemnización por responsabilidad patrimonial del Estado", "Daño moral"] }],
  },
];

export type Person = { id: "lira" | "duprat"; name: string; short: string; role: string; cedula: string; photo: ImageMetadata; bio: string[] };
export const team: Person[] = [
  {
    id: "lira",
    name: "Lic. Alejandro Lira Duarte",
    short: "Alejandro Lira Duarte",
    role: "Especialista en litigio laboral, civil y familiar",
    cedula: "7263776",
    photo: alejandro,
    bio: [
      "Licenciado en Derecho con posgrado en Derecho Fiscal por la Universidad Tecnológica de México, y estudios internacionales en defensa del derecho laboral y seguridad social en encuentros especializados en La Habana, Cuba.",
      "Combina el ejercicio en despachos con experiencia dentro de empresas. Trabajó previamente en la Junta Federal de Conciliación y Arbitraje, con litigio en juzgados civiles y familiares y juicios mercantiles. Es el responsable de datos personales del despacho.",
    ],
  },
  {
    id: "duprat",
    name: "Mtra. Maribeth Duprat Mendoza",
    short: "Maribeth Duprat Mendoza",
    role: "Especialista en litigio fiscal y administrativo",
    cedula: "5625004",
    photo: maribeth,
    bio: [
      "Maestra en Derecho por la UNAM, con especialidad en Derecho Fiscal por la Universidad Tecnológica de México, especialización en Justicia Fiscal y Administrativa y formación en Mecanismos Alternativos de Solución de Controversias, ambas del Tribunal Federal de Justicia Administrativa.",
      "Más de 15 años en el sector público y privado. Durante ocho años fue Secretaria de Acuerdos en el Tribunal Federal de Justicia Administrativa y antes Subdirectora de Medios de Defensa en la Procuraduría de la Defensa del Contribuyente (PRODECON).",
    ],
  },
];

// Reseñas de Google (autor tal como aparece; erratas corregidas).
export const quotes = [
  { text: "Llegué por recomendación, obteniendo la mejor respuesta y disposición para poder resolver mi litigio, sin duda son un gran equipo de profesionales y expertos en la materia, pero sobre todo la honestidad y responsabilidad los caracteriza. ¡Muchas gracias por todo!", author: "Haydee Elizabeth Gutierrez Rodriguez" },
  { text: "Duprat Lira es un excelente servicio, claramente explican el procedimiento a seguir, los probables tiempos y van dando informes del avance del proceso, quedé muy satisfecho de su servicio, los recomiendo ampliamente.", author: "Mario" },
  { text: "Fue una consulta muy productiva y eficiente, la licenciada Maribeth Duprat resolvió todas mis dudas.", author: "Marta Mayorga" },
];
