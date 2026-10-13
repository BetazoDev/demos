import type { Service } from "./data";

const dudas = "Podrás contactar con tu abogado siempre que lo necesites por correo electrónico a contacto@enley.mx.";

export const repse: Service = {
  key: "repse",
  title: "REPSE",
  blurb: "Consigue o renueva tu REPSE y protégete de posibles multas.",
  price: "Primera consulta gratuita",
  headline: "Consigue o renueva tu REPSE",
  lede: "Podrás hacer el trámite completamente en línea, asesorado y acompañado por un abogado experto. Asegura el cumplimiento legal y evita sanciones.",
  introTitle: "En Enley tramitamos tu REPSE por ti",
  intro: [
    "Contar con el Registro de Prestadoras de Servicios Especializados u Obras Especializadas (REPSE) te permite acceder a una mayor cantidad de clientes y te protege de multas que pudiera aplicar la Secretaría del Trabajo y Previsión Social (STPS).",
    "En 2021 se realizó una reforma laboral que prohíbe el «outsourcing» o subcontratación. Cualquier persona que desee prestar un servicio u obra especializada a otra persona (ponga trabajadores propios a disposición del contratante) deberá contar con el registro REPSE.",
    "Tienen la obligación de contratar REPSE las personas físicas o morales (empresas) que pongan trabajadores propios a disposición de un tercero para la prestación de servicios.",
  ],
  listTitle: "¿Qué podemos hacer por ti?",
  list: ["REPSE para personas físicas", "REPSE para personas morales"],
  stepsTitle: "Cómo funciona nuestro servicio",
  steps: [
    "Te ponemos en contacto con un abogado experto",
    "Te realizamos una serie de preguntas y solicitamos la entrega de los documentos relevantes",
    "Preparamos y presentamos la solicitud ante la STPS",
  ],
  faq: [
    { q: "¿Para qué sirve este registro?", a: ["En abril de 2021 entró en vigor una reforma laboral que prohíbe la subcontratación, permitiendo únicamente la subcontratación de servicios u obras especializadas.", "Un requisito para demostrar la especialización de obras o servicios es contar con un registro REPSE."] },
    { q: "¿Qué pasa si presto servicios sin un registro REPSE?", a: ["El artículo 1004-C de la Ley Federal del Trabajo (LFT) establece que a la empresa que brinde este servicio sin registro, conforme a lo establecido en los artículos 14 y 15, se le impondrá una multa de 2,000 a 50,000 veces la Unidad de Medida y Actualización (UMA)."] },
    { q: "¿Qué significa que las actividades u obras sean especializadas?", a: ["Que estos servicios no forman parte del objeto social o actividad principal de quien recibe el servicio."] },
    { q: "¿Los servicios especializados que preste deben estar incluidos en mi objeto social?", a: ["Sí, deben estar incluidos textualmente en el objeto social, salvo que sean servicios complementarios (los que únicamente se prestarán a empresas del mismo grupo corporativo)."] },
    { q: "¿En cuánto tiempo me debe dar respuesta la STPS?", a: ["La STPS cuenta con 20 días hábiles a partir de la fecha de ingreso de la solicitud de registro o renovación para emitir una resolución."] },
    { q: "Si tengo dudas durante el proceso, ¿dónde puedo resolverlas?", a: [dudas] },
  ],
};

export const contaduria: Service = {
  key: "contaduria",
  title: "Contaduría",
  blurb: "Dile adiós a los trámites y deja que nuestros contadores se encarguen de la gestión de tu empresa.",
  price: "Desde $750 al mes",
  headline: "Tu contaduría online para personas y empresas",
  lede: "Dile adiós a los trámites complicados. Deja que nuestros expertos se encarguen de todo sin salir de casa, y ahorra tiempo y dinero.",
  tiersTitle: "Servicio fiscal y contable",
  tiers: [
    { name: "Básico", price: "Desde $750", unit: "+ IVA al mes", features: ["Declaración mensual de impuestos", "Elaboración de reporte de ingresos y gastos", "Asesorías con especialistas en temas fiscales y contables", "Estrategia de optimización de impuestos"] },
    { name: "Pro", features: ["Declaración mensual y anual de impuestos", "Estrategia de optimización de impuestos", "Emisión de facturas y complementos de pago"] },
    { name: "Nuevas Pymes", text: "Válido solo para empresas constituidas con Enley durante los primeros 3 meses desde su constitución." },
  ],
  tiers2Title: "Otros servicios que te pueden interesar",
  tiers2: [
    { name: "Regularización Fiscal", price: "A medida", features: ["Cambio de opinión de cumplimiento a positivo", "Reporte de análisis fiscal por videoconferencia", "Asesorías con especialistas en temas fiscales y contables"] },
    { name: "Asesoría Fiscal", price: "$640", unit: "+ IVA, pago único", text: "Te ayudamos a ponerte al corriente ante el SAT y ahorrar dinero.", features: ["Presentamos tu análisis fiscal por videoconferencia y/o video", "Nuestros especialistas fiscales resuelven todas tus dudas"] },
  ],
};

export const constancia: Service = {
  key: "constancia-empleador",
  title: "Constancia del Empleador",
  blurb: "Obtén tu Constancia del Empleador ante el Instituto Nacional de Migración en 20 días.",
  price: "Desde $5,000",
  headline: "Constancia del Empleador ante el INM",
  lede: "Obtén tu Constancia del Empleador ante el Instituto Nacional de Migración. Realiza el trámite completamente en línea y deja que nuestros abogados se encarguen de todo.",
  tiersTitle: "Tu constancia del empleador",
  tiers: [{ name: "Constancia del Empleador", price: "$5,000", text: "Todo el trámite en aproximadamente 20 días." }],
  tiersNote: "Precio en pesos mexicanos, sin IVA.",
  stepsTitle: "Consigue tu constancia del empleador en 4 sencillos pasos",
  steps: [
    "Proporciona los documentos necesarios a nuestros abogados",
    "Revisamos que tu documentación sea correcta y completa",
    "Agendamos una cita ante el INM",
    "Ingresamos tu documentación",
  ],
  listTitle: "Documentos para persona física",
  list: ["Identificación oficial", "Comprobante de domicilio", "Constancia de inscripción en el RFC", "Constancia de última declaración de impuestos", "Aviso de registro como prestadores de servicios especializados o de ejecución de obras especializadas expedido por la STPS"],
  list2Title: "Documentos para persona moral",
  list2: ["Acta constitutiva", "Poder del representante legal", "Identificación del representante legal", "Lista de empleados y su nacionalidad", "Aviso de registro como prestadores de servicios especializados o de ejecución de obras especializadas expedido por la STPS"],
  faq: [
    { q: "¿Qué vigencia tiene la constancia del empleador?", a: ["El documento cuenta con una vigencia de un año, toda vez que debe actualizarse una vez que las empresas realizan la presentación de su declaración de impuestos, dentro de los 30 días siguientes."] },
    { q: "¿Cuándo se debe actualizar la constancia del empleador?", a: ["Deberá actualizarse dentro de los 30 días siguientes a que ocurra la modificación que le dé origen, en los siguientes casos: cambio de representante o apoderado legal, cambio de domicilio, actualización anual de la declaración de impuestos y obtención o renovación del número de REPSE.", "La constancia siempre debe encontrarse debidamente actualizada para poder continuar con los procesos llevados a cabo ante el Instituto Nacional de Migración."] },
    { q: "¿Cuántos trabajadores debo tener dados de alta?", a: ["Las empresas podrán contratar temporalmente a trabajadores extranjeros en una proporción que no exceda del diez por ciento de los de la especialidad, conforme al artículo 7 de la Ley Federal del Trabajo."] },
    { q: "¿Qué es la visa por oferta de empleo?", a: ["La visa por oferta de empleo es aplicable para personas extranjeras que pretendan internarse en México en la condición de visitante con permiso para realizar actividades remuneradas y que cuenten con una oferta de empleo."] },
    { q: "¿Cuáles son las condiciones de estancia que permiten trabajar al migrante en México?", a: ["Residente temporal con permiso para trabajar, residente permanente, visitante con permiso para realizar actividades remuneradas y visitante por razones humanitarias."] },
  ],
};
