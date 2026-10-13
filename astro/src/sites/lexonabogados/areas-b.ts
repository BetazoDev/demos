import type { Area } from "./types";

// Texto condensado de las páginas de servicio de lexonabogados.mx (cumplimiento, contratos, marca y cobro).
export const areasB: Area[] = [
  {
    key: "auditorias-medicas",
    group: "sanitario",
    title: "Auditorías médicas internas",
    icon: "list-checks",
    short: "Revisión interna de procesos de clínica o consultorio conforme a sistemas de gestión de calidad.",
    lead: "Revisión interna de los procesos de su clínica o consultorio conforme a sistemas de gestión de la calidad.",
    meta: "Auditorías médicas internas para clínicas y consultorios en Ciudad de México: revisión de procesos, manuales y procedimientos conforme a sistemas de gestión de la calidad.",
    blocks: [
      { t: "text", title: "Qué es una auditoría médica", p: ["Una auditoría médica es una revisión interna de los procedimientos que se llevan en la clínica, el consultorio o la marca personal como médico independiente. Su objetivo es comprobar que reúne los requisitos establecidos en las normas de gestión de la calidad.", "Para lograr una auditoría externa con éxito, es importante que haya auditorías internas por lo menos una vez al año."] },
      { t: "text", title: "Norma ISO 9001:2015", p: ["Si el objetivo de su empresa, clínica o consultorio es lograr un impacto al promocionar productos médicos, de atención de la salud, belleza y actos quirúrgicos, recomendamos implementar las normas ISO 9000, que promueven procesos basados en la calidad.", "La Norma ISO 9001:2015 establece el estándar internacional para certificar los Sistemas de Gestión de la Calidad. Adoptarla es una decisión estratégica de crecimiento que ayuda a mejorar el desempeño en el ámbito médico."] },
      { t: "benefits", title: "Beneficios de un sistema de gestión de la calidad", items: [{ h: "Proporcionar regularmente servicios que satisfagan los requisitos del cliente y los legales y reglamentarios aplicables" }, { h: "Facilitar oportunidades de aumentar la satisfacción del cliente" }, { h: "Abordar los riesgos y oportunidades asociados con su contexto y objetivos" }, { h: "Demostrar la conformidad con los requisitos especificados del sistema de gestión de la calidad" }] },
      { t: "text", title: "Cómo trabajamos", p: ["El objetivo principal de una auditoría interna no es detectar fraudes: se trata de revisar los protocolos implementados en clínicas o consultorios, verificar si cumplen con las normas de calidad, realizar los cambios o mejoras necesarios y lograr la estandarización.", "Los profesionales de Lexon Abogados se especializan en la revisión y verificación de manuales de procesos, procedimientos normalizados de operación (PNO) y demás documentos relativos."] },
    ],
  },
  {
    key: "normatividad-sanitaria",
    group: "sanitario",
    title: "Evaluación del cumplimiento de la normatividad sanitaria",
    icon: "shield-check",
    short: "Auditoría con la Ley y las NOM; entrega de diagnóstico y plan de acciones de mejora.",
    lead: "Asesoría de cumplimiento normativo para su consultorio o clínica: auditoría con la Ley y las NOM, diagnóstico y plan de acciones de mejora.",
    meta: "Evaluación del cumplimiento de la normatividad y legislación sanitaria para clínicas y consultorios en Ciudad de México: auditoría con la Ley y las NOM y plan de mejora.",
    blocks: [
      { t: "steps", title: "Cómo revisamos si su clínica o consultorio cumple con la normatividad sanitaria", items: ["Sostenemos una videollamada o visitamos el establecimiento para conocer el área de especialidad.", "Entregamos un plan de trabajo y oferta económica.", "Realizamos una auditoría con la Ley y las NOM.", "Entregamos diagnóstico y plan de acciones de mejora."] },
      { t: "text", title: "Qué revisamos", p: ["A través de un análisis exhaustivo de leyes, reglamentos, Normas Oficiales Mexicanas y guías de práctica clínica, determinamos cuáles son los requisitos que debe cumplir el ejercicio de la medicina."] },
      { t: "list", title: "Qué normatividad debe cumplir", intro: "Depende del nivel de atención del establecimiento. Podemos agruparla de la siguiente forma:", items: ["Normatividad sanitaria: normas relacionadas con la infraestructura necesaria para la prestación de servicios médicos a pacientes", "Normatividad relacionada con el manejo de residuos peligrosos biológico-infecciosos (RPBI)", "Normatividad de seguridad e higiene: equipo de seguridad, identificación de tuberías, seguridad de las instalaciones, entre otras", "Normatividad en materia comercial", "Normatividad en materia de publicidad", "Guías de práctica clínica: no son normatividad propiamente dicha, pero cobran relevancia porque definen cómo debe practicarse el acto médico de forma correcta"] },
      { t: "benefits", title: "Beneficios de revisar el cumplimiento", items: [{ h: "Evita multas de COFEPRIS, PROFECO u otras autoridades" }, { h: "Descubre áreas de mejora para trabajarlas antes de una visita de verificación" }, { h: "Implementa acciones esenciales de seguridad del paciente" }, { h: "Evita demandas y denuncias de pacientes y genera evidencia de su práctica médica" }, { h: "Le diferencia de otros médicos por establecer un sistema basado en normatividad y calidad" }] },
    ],
  },
  {
    key: "contratos-consentimientos",
    group: "sanitario",
    title: "Redacción de contratos y consentimientos informados",
    icon: "signature",
    short: "Contratos de prestación de servicios médicos y cartas de consentimiento informado.",
    lead: "Redacción y revisión de contratos y consentimientos informados, diseñados para proteger tanto a los profesionales de la salud como a sus pacientes.",
    meta: "Redacción de contratos de prestación de servicios médicos y consentimientos informados en Ciudad de México, por abogados especialistas en derecho médico y sanitario.",
    blocks: [
      { t: "text", title: "Contratos de prestación de servicios médicos", p: ["Redactamos contratos completos y personalizados que establecen los derechos y obligaciones de médicos y pacientes, asegurando claridad en las responsabilidades y el alcance de los servicios ofrecidos.", "Nuestros contratos cumplen con las normativas legales y éticas vigentes para proteger a los profesionales de posibles conflictos futuros."] },
      { t: "text", title: "Consentimientos informados", p: ["Elaboramos cartas de consentimiento informado que explican de manera detallada y comprensible los procedimientos médicos, sus beneficios, riesgos y alternativas, facilitando la comprensión y aceptación informada de los pacientes.", "Estos documentos ayudan a prevenir malentendidos y brindan respaldo legal al profesional en caso de controversias."] },
      { t: "benefits", title: "Beneficios de nuestros servicios", items: [{ h: "Protección legal", d: "Minimice el riesgo de disputas mediante documentos bien estructurados y adaptados a su práctica médica." }, { h: "Transparencia y claridad", d: "Documentos que promueven la confianza del paciente y establecen una comunicación clara entre profesional y paciente." }, { h: "Cumplimiento normativo", d: "Cada contrato y consentimiento cumple con la normativa y legislación de salud vigente." }, { h: "Abogados especialistas", d: "Sus documentos serán redactados por especialistas del Derecho sanitario y médico." }] },
    ],
  },
  {
    key: "registro-marca",
    group: "sanitario",
    title: "Registro de marca para clínicas y médicos",
    icon: "trademark-registered",
    short: "Búsqueda de anterioridades, solicitud ante el IMPI, seguimiento y entrega del título.",
    lead: "Este registro permite a médicos y empresas médicas proteger sus activos de marca, diferenciarse en el mercado y construir una identidad propia.",
    meta: "Registro de marca ante el IMPI para clínicas y médicos privados en Ciudad de México: búsqueda de anterioridades, solicitud, seguimiento y entrega del título.",
    blocks: [
      { t: "steps", title: "Qué pasos seguimos para registrar una marca", items: ["Verificamos que la marca no esté previamente registrada o que no haya alguna parecida en grado de confusión.", "Realizamos la solicitud y preparamos los anexos.", "Consultamos constantemente el estatus y, en su caso, desahogamos prevenciones y aclaraciones.", "Entregamos el título de la marca registrada."] },
      { t: "text", title: "Quiénes pueden registrar una marca", p: ["Cualquier persona, física o moral, puede registrar una marca ante el Instituto Mexicano de la Propiedad Industrial (IMPI), lo que la faculta para hacer uso de ella en la industria, el comercio o en los servicios que preste.", "Además, es importante una correcta gestión de la marca, conocida como branding: acciones encaminadas a su posicionamiento y a sus valores."] },
      { t: "list", title: "Requisitos para registrar una marca", items: ["Nombre de la marca a registrar", "Logo de la empresa o producto", "Nombre y domicilio de quienes se ostenten como titulares", "CURP o RFC de los titulares", "Reglas de uso en caso de cotitularidad", "Acuse de ingreso o registro de la marca, si fue registrada en otro país", "Comprobante de pago de derechos ante el IMPI"] },
      { t: "text", title: "Qué hacemos por usted", p: ["Ofrecemos asesoría y gestión en el proceso de registro de su marca. Partiendo de la investigación del uso de la marca y del proceso para su obtención, diseñamos una estrategia efectiva para proteger su activo y dar certeza jurídica a su clínica o práctica privada."] },
    ],
  },
  {
    key: "cobro-cirugias",
    group: "sanitario",
    title: "Cobro de cirugías (cartas de seguro)",
    icon: "currency-circle-dollar",
    short: "Gestión y recuperación de honorarios médicos ante aseguradoras: cobro, facturación y complemento de pago.",
    lead: "Gestión y recuperación de honorarios médicos derivados de cirugías o procedimientos médicos generados a través de aseguradoras legalmente constituidas en la República Mexicana.",
    meta: "Cobro de cirugías y cartas de autorización de seguro para médicos en Ciudad de México: gestión de cobro, facturación y complemento de pago de honorarios médicos.",
    blocks: [
      { t: "text", title: "Cómo trabajamos", p: ["Sabemos que su profesión requiere altos niveles de concentración, por eso ponemos a su disposición un servicio de gestión y recuperación de honorarios médicos y de equipo quirúrgico.", "Nuestro equipo se encargará de la gestión del cobro, la facturación y el complemento de pago por los honorarios médicos derivados de la póliza de gastos médicos mayores contratada por sus pacientes, dando seguimiento desde el inicio de la gestión hasta que se haya concretado el pago."] },
      { t: "list", title: "Documentos que solicitamos", items: ["Carta de autorización emitida por la aseguradora ante quien se hayan generado los honorarios por cirugías o procedimientos", "Constancia de situación fiscal actualizada, no mayor a tres meses", "Cuenta de correo electrónico"] },
    ],
  },
];
