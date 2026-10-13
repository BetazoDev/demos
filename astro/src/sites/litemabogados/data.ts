import maqueta from "./assets/maqueta-edificio.jpg";
import torres from "./assets/torres-cristal.jpg";
import firma from "./assets/firma-contrato.jpg";
import bronce from "./assets/estatua-bronce.jpg";
import duotono from "./assets/estatua-duotono.jpg";

// Todo el texto sale de litemabogados.com.mx (servicios, nosotros, inicio) y de la ficha de Google. Se condensa, no se reescribe.
export type Area = {
  key: string;
  title: string;
  lead: string;
  body?: string[];
  itemsTitle?: string;
  items: string[];
  note?: string;
  seo: string;
};

export const areas: Area[] = [
  {
    key: "civil",
    title: "Asuntos Civiles",
    lead: "Preservar los derechos, propiedades, posesiones, contratos y el patrimonio en general de nuestros clientes.",
    body: [
      "Somos expertos en todo tipo de asuntos de naturaleza civil, la rama del derecho que regula las relaciones personales y patrimoniales entre individuos: personas físicas, empresas e incluso gobierno.",
      "Actuamos con acciones preventivas, como la elaboración de un convenio o la redacción de un contrato para evitar problemas futuros, participamos en negociaciones para el traslado de dominio de bienes o derechos y representamos a nuestros clientes en todo México.",
    ],
    itemsTitle: "Juicios y procesos en los que representamos",
    items: [
      "Juicios derivados de controversias de arrendamiento",
      "Juicios reivindicatorios",
      "Juicios de prescripción positiva (usucapión)",
      "Juicios de rescisión, cumplimiento, terminación y nulidad de cualquier clase de contratos",
      "Ejecución forzosa, embargos, lanzamientos, toma de posesión y desalojos",
      "Traslado de dominio de inmuebles: donaciones, compraventas, usufructo y cesión de derechos",
      "Elaboración, estudio y corrección de contratos y convenios civiles",
    ],
    seo: "Abogados civiles en la Ciudad de México: contratos, propiedad y posesión, juicios reivindicatorios, usucapión, arrendamiento y desalojos. Despacho en Polanco.",
  },
  {
    key: "mercantil",
    title: "Asuntos Mercantiles",
    lead: "Representamos a empresas, Pymes y comerciantes en los distintos procesos judiciales en defensa de sus intereses.",
    body: [
      "Actuamos como intermediarios en operaciones de comercio de personas físicas y morales, vigilando el cumplimiento de los acuerdos celebrados entre las partes.",
      "No solo representamos a empresas y comerciantes: también a quienes, derivado de una operación o contrato con un comerciante, desean iniciar una demanda en su contra o defenderse de ella.",
    ],
    itemsTitle: "Juicios y operaciones en los que somos expertos",
    items: [
      "Juicios ejecutivos mercantiles: pagarés, cheques, letras de cambio y títulos de crédito",
      "Juicios ordinarios mercantiles",
      "Cobranza de facturas expedidas y no pagadas por venta de mercancía o servicios",
      "Demandas contra instituciones de crédito, bancos y empresas por el incumplimiento de un servicio",
      "Reclamaciones y aclaraciones ante instituciones bancarias del país",
      "Rescisión, terminación y cumplimiento de contratos mercantiles: arrendamiento financiero, compraventa, comisión mercantil, crédito, suministro y franquicia",
      "Requerimiento judicial de pago, embargos y remates",
      "Derecho corporativo: constitución de sociedades mercantiles, liquidaciones, fusiones y actas de asamblea",
    ],
    seo: "Abogados mercantiles en la Ciudad de México: cobranza de pagarés, cheques y facturas, juicios ejecutivos, reclamaciones bancarias y derecho corporativo.",
  },
  {
    key: "familiar",
    title: "Asuntos Familiares",
    lead: "El derecho familiar regula todo lo relacionado con la familia, sus integrantes y los conflictos que surgen de sus relaciones.",
    body: [
      "Fungimos como intermediarios en procesos de conciliación y mediación entre los integrantes de la familia o con agentes externos, y representamos a alguno de sus miembros en un procedimiento judicial. También denunciamos sucesiones testamentarias e intestamentarias, ante notario o en proceso judicial.",
    ],
    itemsTitle: "Procesos que atendemos",
    items: [
      "Divorcio incausado (exprés) y divorcio voluntario",
      "Pensión alimenticia",
      "Guarda y custodia",
      "Adopción",
      "Régimen de visitas y convivencias",
      "Salida de menores del país",
      "Pérdida y suspensión de la patria potestad",
      "Reconocimiento, contradicción, desconocimiento e investigación de paternidad",
      "Violencia familiar",
      "Liquidación de sociedad conyugal",
      "Sucesiones intestamentarias (sin testamento) y testamentarias (con testamento)",
    ],
    note: "En herencias, legados y sucesiones contamos con la colaboración de la empresa heyCasa: si no se cuenta con los recursos para pagar los servicios, estos pueden financiarse, así como todos los gastos, con la venta de los inmuebles heredados.",
    seo: "Abogados familiares en la Ciudad de México: divorcio incausado, pensión alimenticia, guarda y custodia, patria potestad y sucesiones. Despacho en Polanco.",
  },
  {
    key: "inmobiliarias",
    title: "Inversiones Inmobiliarias",
    lead: "Hacemos que todas las operaciones inmobiliarias de nuestros clientes estén blindadas contra posibles fraudes, incumplimientos y abusos.",
    body: [
      "Representamos a nuestros clientes en cualquier operación relacionada con la materia inmobiliaria: actuamos como intermediarios en negociaciones con terceros, coadyuvamos con notarios para el mejor manejo de su cartera inmobiliaria y los representamos en cualquier proceso judicial en defensa de su patrimonio y bienes.",
    ],
    itemsTitle: "Algunos de nuestros servicios",
    items: [
      "Compraventa de bienes raíces",
      "Operaciones inmobiliarias: compraventas, adquisiciones y traslación de dominio de casas, terrenos, departamentos, locales comerciales y bodegas",
      "Administración de bienes inmuebles, propiedad en condominio y arrendamiento",
      "Inversiones de obra: asesoría y representación en construcción, desarrollos y remodelaciones",
      "Contratos inmobiliarios de toda clase",
      "Regularización de predios y trámites ante el Registro Público de la Propiedad, el sistema de aguas y la tesorería",
    ],
    seo: "Abogados inmobiliarios en la Ciudad de México: compraventa de bienes raíces, contratos inmobiliarios, regularización de predios y trámites ante el Registro Público.",
  },
  {
    key: "amparo",
    title: "Juicio de Amparo",
    lead: "Asesoramos y representamos a nuestros clientes cuando las autoridades, sea cual sea su nivel de gobierno, han menoscabado sus derechos fundamentales.",
    body: [
      "Velamos por la integridad de la esfera jurídica de nuestros clientes. Sin importar la materia de la que se trate, la prioridad de esta firma es que nuestra clientela sea respetada por todas las autoridades, sin transgresión alguna a sus derechos humanos y en estricto apego a nuestra Constitución Política de los Estados Unidos Mexicanos.",
    ],
    itemsTitle: "Nuestro enfoque",
    items: ["Asesoría y representación", "Respeto por la autoridad", "Derechos humanos", "Apego a la Constitución"],
    seo: "Abogados de amparo en la Ciudad de México: asesoría y representación cuando una autoridad afecta sus derechos fundamentales. Despacho en Polanco.",
  },
  {
    key: "penal",
    title: "Derecho Penal",
    lead: "Defendemos a personas acusadas de algún delito y representamos a las víctimas y afectados, tanto a nivel local como federal.",
    body: [
      "Contamos con indiscutible experiencia en materia penal: nos encargamos de la defensa del imputado, de la representación de la víctima u ofendido y del amparo en contra de una orden de aprehensión o detención.",
    ],
    itemsTitle: "Delitos",
    items: [
      "Delitos patrimoniales: robo, abuso de confianza y fraude",
      "Homicidio",
      "Violencia familiar",
      "Violación, abuso y acoso sexual",
      "Daño en propiedad",
      "Lesiones y riña",
      "Portación y posesión de armas",
      "Posesión de estupefacientes y psicotrópicos",
      "Falsificación y uso de documentos oficiales",
      "Usurpación de profesiones",
      "Delitos ambientales",
    ],
    seo: "Abogados penales en la Ciudad de México: defensa de imputados y representación de víctimas, a nivel local y federal, y amparo contra orden de aprehensión.",
  },
];

/** Otros servicios publicados por el despacho sin página propia. */
export const otros = ["Asuntos arrendamiento", "Juicio sucesorio", "Asuntos migratorios"];

export const photos = { maqueta, torres, firma, bronce, duotono };

/** Reseñas de Google (autor y fecha tal como aparecen; texto literal, recortado a pasajes completos). */
export const quotes = [
  { text: "Siempre me explicaron cada paso del juicio y me dieron la confianza para seguir adelante. Al final el resultado valió completamente la pena, porque finalmente pude recuperar la propiedad.", author: "Ariel Sotelo", when: "hace 7 meses" },
  { text: "Desde el inicio hubo claridad y seguimiento. Finalmente, hoy por fin lograron recuperar mi casa y estoy enteramente agradecido. Recomiendo ampliamente a Litem Abogados por su profesionalismo, atención y experiencia.", author: "Jose Roberto Castaneda", when: "hace 5 meses" },
  { text: "Siempre estuvieron trabajando y reportando todos los procedimientos. Finalmente todo llegó a buen término y hoy ya cuento con las escrituras de mi predio.", author: "Fabiola Rosales", when: "hace 3 meses" },
];
