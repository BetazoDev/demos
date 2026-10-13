// Texto de bam-g.com/servicios (erratas corregidas). Cada grupo = una página de servicio.
export type Item = { t: string; d?: string };
export type Block = { title?: string; items: Item[] };
export type Group = { key: string; title: string; label: string; lede: string; blocks: Block[]; summary: string };

export const groupsA: Group[] = [
  {
    key: "visas-mexicanas",
    title: "Visas mexicanas",
    label: "Cómo internarse a México",
    lede: "Cómo internarse a México: visa de turista, residencia temporal o permanente, unidad familiar, oferta de empleo y defensa jurídica en la internación.",
    summary: "Visa de turista, residente temporal, residente temporal estudiante, residente permanente, unidad familiar, oferta de empleo y visas especiales.",
    blocks: [
      {
        title: "Visas Mexicanas",
        items: [
          { t: "Visa de Turista en México", d: "Tramitamos tu visa para ingresar por motivos turísticos, familiares o de negocios sin fines de lucro. Evaluamos requisitos y gestionamos el trámite ante el consulado o la SRE para un ingreso sin contratiempos ni riesgos migratorios." },
          { t: "Visa de Residente Temporal", d: "Diseñamos tu estrategia legal para residir en México hasta por 4 años, ya sea por motivos económicos, personales o familiares. Incluye apoyo documental, citas consulares y seguimiento hasta la expedición de la tarjeta." },
          { t: "Visa de Residente Temporal Estudiante", d: "Asesoramos en la obtención de visa para estudiar en instituciones mexicanas, garantizando el cumplimiento de requisitos académicos y migratorios, con énfasis en tu derecho a permanencia y movilidad." },
          { t: "Visa de Residente Permanente", d: "Tramitamos tu residencia definitiva por vínculo familiar, solvencia económica («Golden Visa»), tiempo de estancia o integración. Esta modalidad otorga estabilidad legal y acceso a derechos plenos." },
          { t: "Visa por Unidad Familiar", d: "Asistimos a cónyuges, hijos o padres de ciudadanos o residentes para obtener la visa correspondiente, ya sea desde México o el extranjero." },
          { t: "Visa por Oferta de Empleo", d: "Gestionamos la visa con base en una oferta laboral válida. Incluye elaboración legal de la carta de oferta y coordinación con el empleador registrado ante el INM." },
          { t: "Visas Especiales u Otras", d: "Atendemos casos de visas por motivos culturales, humanitarios, religiosos u otras causas legales contempladas por la legislación mexicana." },
        ],
      },
      {
        title: "Asistencia legal para internación y defensa jurídica",
        items: [
          { t: "Proceso de Internación con Carta Invitación", d: "Elaboramos documentos formales y válidos para respaldar tu entrada con fines personales, familiares o profesionales. Útil si ingresas sin visa, pero con justificación legal." },
          { t: "Amparo contra Deportación desde el Aeropuerto", d: "Si te detienen al ingresar o pretenden devolverte sin justificación legal, promovemos amparo urgente para suspender la deportación, protegiendo tu derecho de audiencia y legalidad." },
          { t: "Amparo contra Alerta Migratoria que impide ingresar a México", d: "Si una alerta migratoria te impide ingresar o abordar vuelos hacia México, promovemos juicio de amparo para suspender la medida y garantizar tu entrada legal." },
        ],
      },
    ],
  },
  {
    key: "tramites-migratorios",
    title: "Trámites migratorios individuales",
    label: "Cómo permanecer en México",
    lede: "Cómo permanecer en México: documento migratorio, cambio de condición de estancia, permiso de trabajo, regularización, naturalización y doble nacionalidad.",
    summary: "Documento migratorio, cambio de condición de estancia, permiso de trabajo, regularización, naturalización mexicana y doble nacionalidad.",
    blocks: [
      {
        items: [
          { t: "Expedición o Reposición de Documento Migratorio", d: "Asesoría integral para obtener o reponer tu tarjeta de residencia temporal o permanente. Incluye validación de requisitos, presentación ante INM y entrega segura." },
          { t: "Cambio de Condición de Estancia", d: "Modificamos tu tipo de estancia (por ejemplo, de turista a residente temporal por unidad familiar) mediante trámite correctamente fundamentado y presentado." },
          { t: "Permiso de Trabajo para Extranjeros", d: "Tramitamos tu autorización laboral si ya cuentas con tarjeta de residencia válida. Incluye soporte legal para contratos y relaciones laborales." },
          { t: "Regularización Migratoria Ordinaria", d: "Si tu estancia se ha vuelto irregular, diseñamos la estrategia adecuada para regularizarla sin sanciones, ya sea por vías ordinarias o familiares." },
          { t: "Regularización por Juicio de Amparo (COMAR)", d: "Cuando el COMAR impide o retrasa tu trámite, promovemos dos amparos: uno para obtener la cita y otro para conseguir la tarjeta de visitante por razones humanitarias y el CURP. Esto habilita acceso al empleo formal y servicios financieros." },
          { t: "Naturalización Mexicana", d: "Acompañamos todo el proceso para adquirir la nacionalidad mexicana por residencia, matrimonio o vínculo familiar. Incluye asesoría sobre constancias, exámenes y requisitos extraordinarios." },
          { t: "Doble Nacionalidad (Inscripción de Acta de Nacimiento Extranjera)", d: "Si eres hijo de mexicanos nacido en el extranjero, tramitamos la inscripción de tu acta para ejercer derechos como mexicano sin perder tu nacionalidad actual." },
        ],
      },
    ],
  },
];
