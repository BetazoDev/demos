// Texto de las páginas de servicio de cardenas-soriano.com (Derecho Constitucional, Administrativo, Civil, Mercantil, Familiar y Asesoría legislativa).
export type Asunto = { t: string; d?: string };
export type Area = {
  key: string;
  slug: string;
  title: string;
  kind: string;
  lead: string;
  asuntos: Asunto[];
  audienceTitle: string;
  audienceIntro: string;
  audience: string[];
  why: { t: string; d: string }[];
  practice: string[];
  faq: { q: string; a: string };
  cta: string;
};

export const areas: Area[] = [
  {
    key: "constitucional",
    slug: "derecho-constitucional",
    title: "Derecho Constitucional",
    kind: "Litigio y consultoría",
    lead: "Impugnamos leyes, actos y omisiones de autoridad con estrategia constitucional clara, orientada a proteger derechos y contener riesgos.",
    asuntos: [
      { t: "Juicio de amparo indirecto", d: "Contra leyes, actos u omisiones de autoridad que violen derechos humanos y sus garantías." },
      { t: "Juicio de amparo directo" },
      { t: "Controversias constitucionales" },
      { t: "Acciones de inconstitucionalidad" },
      { t: "Procedimientos ante el Sistema Interamericano de Derechos Humanos" },
      { t: "Derechos humanos y grupos vulnerables" },
      { t: "Consultoría constitucional preventiva" },
    ],
    audienceTitle: "De personas físicas a poderes del Estado.",
    audienceIntro: "Representamos a quienes necesitan hacer valer la Constitución o defender la regularidad de sus actos frente a ella:",
    audience: ["Personas físicas", "Empresas", "Colectividades y grupos vulnerables", "Organismos públicos", "Autoridades", "Poderes del Estado", "Organizaciones civiles"],
    why: [
      { t: "Conocemos la norma desde su origen", d: "Nuestro socio fundador integró los grupos redactores del CNPCF y de la LGMASC: entendemos cómo se construye una norma y, por lo tanto, cómo se defiende o se impugna." },
      { t: "Visión pública y privada", d: "La experiencia como Director Jurídico del IMSS nos permite anticipar cómo razonan y litigan las autoridades, una ventaja decisiva en el litigio constitucional." },
      { t: "Estrategia antes que impulso", d: "No promovemos amparos en automático: evaluamos procedencia, suspensión y efectos para que cada paso tenga un propósito claro dentro de tu caso." },
    ],
    practice: [
      "Defendemos a personas, empresas e instituciones frente a violaciones a los derechos humanos reconocidos en la Constitución y en los tratados internacionales de los que México es parte. Analizamos la viabilidad de cada asunto con honestidad: identificamos el acto reclamado, las autoridades responsables, los conceptos de violación con mayor fuerza y la vía procesal idónea, antes de comprometer tiempo y recursos de nuestros clientes en un litigio.",
      "Nuestra práctica abarca el juicio de amparo indirecto y directo, las controversias constitucionales entre poderes y órdenes de gobierno, las acciones de inconstitucionalidad y la consultoría preventiva sobre constitucionalidad de normas y actos. También acompañamos a autoridades y entes públicos que requieren defender la regularidad constitucional de sus actos, con una visión que combina experiencia en el sector privado y en la administración pública federal.",
    ],
    faq: {
      q: "¿Cuándo procede un juicio de amparo?",
      a: "Procede contra normas generales, actos u omisiones de autoridad que violen derechos humanos, y en ciertos casos contra actos de particulares equiparados a autoridad. Existen plazos estrictos, por regla general de 15 días hábiles, por lo que es fundamental buscar asesoría en cuanto conoces el acto que te afecta.",
    },
    cta: "Cuéntanos qué acto o norma te afecta y evaluamos contigo la viabilidad de la vía constitucional, sin compromiso.",
  },
  {
    key: "administrativo",
    slug: "derecho-administrativo",
    title: "Derecho Administrativo",
    kind: "Litigio y consultoría",
    lead: "Defendemos a personas y empresas frente a sanciones, clausuras, licitaciones y actos administrativos con una ruta firme.",
    asuntos: [
      { t: "Juicio de nulidad", d: "Impugnación de multas, créditos, sanciones y resoluciones ante el TFJA y tribunales estatales." },
      { t: "Responsabilidades administrativas" },
      { t: "Competencia económica" },
      { t: "Telecomunicaciones y radiodifusión" },
      { t: "Recursos administrativos" },
      { t: "Contratación pública" },
      { t: "Consultoría regulatoria preventiva" },
    ],
    audienceTitle: "De personas físicas a poderes del Estado.",
    audienceIntro: "Atendemos a quienes se relacionan con la autoridad administrativa desde cualquiera de los dos lados de la ventanilla:",
    audience: ["Personas físicas", "Empresas", "Personas servidoras públicas", "Agentes económicos", "Usuarios de servicios regulados", "Autoridades", "Entes públicos", "Contratistas y proveedores del Estado"],
    why: [
      { t: "Fuimos parte de la institución", d: "Dirigir lo jurídico en el IMSS, la institución con mayor litigio del país, nos enseñó cómo decide, litiga y negocia la autoridad. Esa visión institucional hoy trabaja a favor de nuestros clientes." },
      { t: "Mediación certificada en materia administrativa", d: "Contamos con certificación de facilitador del Tribunal Federal de Justicia Administrativa: cuando conviene un acuerdo con la autoridad, podemos construirlo con validez plena." },
      { t: "Rigor técnico verificable", d: "Cada defensa parte de un diagnóstico honesto de procedencia y riesgo, no de promesas: te decimos qué se puede ganar, qué no y por qué." },
    ],
    practice: [
      "Asesoramos y representamos a nuestros clientes en procedimientos administrativos y en su impugnación: juicios de nulidad ante el Tribunal Federal de Justicia Administrativa y tribunales locales, recursos administrativos, procedimientos de responsabilidades administrativas de personas servidoras públicas y de particulares vinculados con faltas graves, así como procedimientos en materia de competencia económica, telecomunicaciones y radiodifusión.",
      "Nuestra ventaja es la doble perspectiva: hemos litigado contra la autoridad y hemos sido autoridad. La experiencia de nuestro socio fundador como Director Jurídico del IMSS, la institución con mayor litigio del país, nos permite anticipar los criterios, tiempos y razonamientos de los entes públicos, y construir defensas que dialogan con esa lógica institucional en lugar de ignorarla.",
    ],
    faq: {
      q: "Me impusieron una multa administrativa, ¿qué puedo hacer?",
      a: "Existen dos rutas principales: el recurso administrativo ante la propia autoridad y el juicio de nulidad ante el tribunal competente. La elección depende de los plazos, la prueba disponible y la estrategia; en algunos casos también procede el amparo. Lo importante es actuar dentro del plazo legal, que suele ser breve.",
    },
    cta: "Platícanos tu asunto con la autoridad y te decimos con claridad qué vía conviene: recurso, juicio, mediación o una combinación.",
  },
  {
    key: "civil",
    slug: "derecho-civil",
    title: "Derecho Civil",
    kind: "Litigio y consultoría",
    lead: "Protegemos tu patrimonio en contratos, daños, propiedad y controversias civiles con estrategia procesal precisa.",
    asuntos: [
      { t: "Incumplimiento de contratos", d: "Cumplimiento forzoso, rescisión y pago de daños derivados de contratos civiles." },
      { t: "Responsabilidad civil y daños" },
      { t: "Propiedad y posesión" },
      { t: "Arrendamiento" },
      { t: "Cobranza judicial" },
      { t: "Juicios orales civiles" },
      { t: "Consultoría contractual preventiva" },
    ],
    audienceTitle: "De personas físicas a poderes del Estado.",
    audienceIntro: "Acompañamos a cualquier persona o empresa involucrada en relaciones o controversias civiles:",
    audience: ["Personas físicas", "Empresas", "Propietarios y poseedores", "Arrendadores y arrendatarios", "Acreedores y deudores", "Autoridades", "Particulares en controversias civiles"],
    why: [
      { t: "Redactamos las reglas del juego", d: "Participamos en el grupo redactor del CNPCF, el código que rige los nuevos juicios civiles orales: conocemos su lógica, sus plazos y sus oportunidades estratégicas." },
      { t: "Litigamos o mediamos, según convenga", d: "No todo se resuelve en tribunal. Con certificaciones de mediación, podemos cerrar tu conflicto con un convenio con calidad de cosa juzgada en una fracción del tiempo." },
      { t: "Estrategia patrimonial completa", d: "Analizamos costo, tiempo y probabilidad antes de recomendar el camino: tu patrimonio merece decisiones informadas, no litigios por inercia." },
    ],
    practice: [
      "Asesoramos y representamos a nuestros clientes en asuntos relacionados con contratos, obligaciones, responsabilidad civil, daños y perjuicios, propiedad, posesión, arrendamiento y cualquier procedimiento de carácter civil. Nuestro trabajo inicia antes del conflicto: revisamos y diseñamos contratos que previenen controversias, y cuando el conflicto ya existe, elegimos con el cliente la vía más eficiente para resolverlo.",
      "El litigio civil mexicano vive su mayor transformación en un siglo con la entrada en vigor gradual del Código Nacional de Procedimientos Civiles y Familiares, que instaura la oralidad y la justicia digital en todo el país. Nuestro socio fundador integró el grupo redactor de ese código: litigamos con las reglas nuevas no como novedad, sino como algo que conocemos desde su diseño. Cuando un acuerdo es viable, además, contamos con certificación para mediar y darle a ese acuerdo la fuerza de una sentencia.",
    ],
    faq: {
      q: "¿Qué cambia con el nuevo Código Nacional (CNPCF) en un juicio civil?",
      a: "Los juicios transitan a un sistema predominantemente oral, con audiencias concentradas, mayor uso de tecnología (expediente y firmas electrónicas, audiencias virtuales) y plazos más ágiles. La vigencia es gradual según cada entidad federativa, con fecha límite nacional del 1 de abril de 2027, por lo que la estrategia depende de qué reglas aplican en tu caso concreto.",
    },
    cta: "Cuéntanos tu conflicto contractual, patrimonial o de daños y recibe un diagnóstico claro de vías, tiempos y costos.",
  },
];
