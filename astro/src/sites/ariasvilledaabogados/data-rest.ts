import type { Area } from "./data";

const rest: Area[] = [
  {
    key: "civil",
    title: "Litigio civil",
    short: "Litigio civil",
    teaser: "Acción reivindicatoria, prescripción adquisitiva, juicio hipotecario y arrendamientos.",
    lede: "Procesos judiciales, representación legal, elaboración y revisión de contratos, y administración de arrendamientos.",
    blocks: [
      {
        heading: "Procesos judiciales",
        items: ["Acción reivindicatoria de la propiedad", "Inmatriculación de inmuebles", "Prescripción adquisitiva", "Información ad perpetuam", "Acciones rescisorias de contratos", "Cumplimiento forzoso de las obligaciones contractuales", "Juicio especial hipotecario", "Pago y reclamación de daños y perjuicios", "Daño moral"],
        columns: true,
      },
      {
        heading: "Representación legal ante",
        items: ["Tribunales federales, locales y autoridades relacionadas con la administración e impartición de justicia", "Juicios ordinarios y ejecutivos", "Diligencias de jurisdicción voluntaria", "Arbitrajes", "Recursos procesales", "Amparos"],
        columns: true,
      },
      { heading: "Elaboración y revisión", paragraphs: ["Documentos legales y contratos."] },
      {
        heading: "Administración de arrendamientos",
        paragraphs: ["A través del cobro de rentas para prevenir morosidad y controversias con inquilinos y, en caso de presentarse, atenderlas de manera inmediata para la seguridad patrimonial y económica del cliente."],
      },
      {
        heading: "Procesos más comunes",
        paragraphs: [
          "Juicio de prescripción positiva (usucapión): es la forma de adquirir la propiedad de un bien inmueble mediante la posesión continuada durante el tiempo y en las condiciones que establece la ley, es decir, de manera pacífica, continua, pública, de buena fe y en calidad de propietario. Podemos ayudarlo a regularizar su propiedad mediante el trámite de este juicio.",
          "Juicio reivindicatorio: es el proceso judicial para obtener la posesión de un inmueble cuando está ocupado por un tercero sin derecho y sin justa causa. Debe promoverse lo antes posible, ya que existe el riesgo de perder la propiedad a causa de la prescripción positiva que opera a favor de quien ocupa el inmueble.",
          "Controversias de arrendamiento inmobiliario: proceso judicial de tramitación especial ante un juez civil para resolver la controversia derivada de una relación contractual de arrendamiento. Atendemos tanto a arrendadores que han dejado de recibir el pago de rentas como a inquilinos que tienen problemas de solvencia para cubrir sus obligaciones.",
        ],
      },
    ],
  },
  {
    key: "mercantil",
    title: "Litigio mercantil",
    short: "Litigio mercantil",
    teaser: "Cheques, pagarés y letras de cambio, cobranza extrajudicial, embargo y remate.",
    lede: "Participamos en la tramitación y solución de todo tipo de procesos mercantiles.",
    blocks: [
      {
        items: ["Medios preparatorios a juicio mercantil", "Patrocinio de litigios derivados de incumplimientos a las obligaciones de pago de cheques, pagarés, contratos, letras de cambio, etc.", "Cobranza extrajudicial", "Gestoría y seguimiento de trámites ante el Registro Público de la Propiedad y del Comercio", "Inscripción de embargo y remate de bienes muebles e inmuebles"],
      },
    ],
  },
  {
    key: "familiar",
    title: "Litigio familiar",
    short: "Litigio familiar",
    teaser: "Divorcios, guarda y custodia, pensión alimenticia, sucesiones y testamentos.",
    lede: "Participamos en la elaboración y resolución de procesos y controversias del orden familiar.",
    blocks: [
      {
        items: ["Divorcio incausado, tramitado en la Ciudad de México", "Divorcios necesarios en todos los estados de la República Mexicana", "Juicios de guarda y custodia de menores", "Procesos para el establecimiento del régimen de visitas y convivencias con los menores", "Juicios de pérdida de patria potestad", "Juicios de alimentos para el establecimiento de pensión alimenticia", "Sucesiones testamentarias e intestamentarias", "Redacción, análisis y explicación de testamentos"],
      },
    ],
  },
  {
    key: "laboral",
    title: "Litigio laboral",
    short: "Litigio laboral",
    teaser: "Despidos, indemnizaciones, convenios, seguridad social y juicios ante el IMSS.",
    lede: "Participamos en la tramitación de procesos laborales individuales y colectivos ante las autoridades laborales federales y locales en toda la República.",
    blocks: [
      {
        items: ["Presentación de demandas", "Contestación de demandas y seguimiento de juicios laborales", "Despidos justificados e injustificados", "Indemnizaciones", "Seguimiento de amparo en juicio laboral", "Seguridad social", "Elaboración, revisión y seguimiento de todo tipo de convenios ante las autoridades laborales", "Seguimiento y tramitación de juicios ante el Instituto Mexicano del Seguro Social"],
      },
    ],
  },
  {
    key: "penal",
    title: "Litigio penal",
    short: "Litigio penal",
    teaser: "Denuncias y querellas, defensa ante el Ministerio Público y amparo.",
    lede: "Estando conscientes de que la libertad es uno de los valores humanos más preciados, participamos en el patrocinio y defensa en procedimientos de carácter penal, ya sea como víctima u ofendido o como probable responsable.",
    blocks: [
      {
        items: ["Presentación de denuncias o querellas ante el agente del Ministerio Público", "Defensa de delitos ante el agente del Ministerio Público y los juzgados penales", "Trámite de demandas de amparo por órdenes de aprehensión, presentación, etc.", "Consultoría", "Preparación y atención a toda clase de denuncias, querellas y procesos penales por conductas que afecten a las empresas, sus funcionarios y las relaciones entre estos y con terceros", "Consultoría y tramitación de constancias de antecedentes registrales, así como su apostilla y legalización para que surtan efectos en el extranjero"],
      },
    ],
  },
];

export default rest;
