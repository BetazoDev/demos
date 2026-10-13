import type { Area } from "./types";

// Texto condensado de las páginas de lexonabogados.mx: servicios en materia penal, juicios familiares y juicios civiles.
export const areasC: Area[] = [
  {
    key: "penal",
    group: "penal",
    title: "Servicios en materia penal",
    icon: "gavel",
    short: "Defensa y asesoría de imputados y víctimas en el sistema penal acusatorio: detenidos ante el MP, audiencias, recursos y amparo.",
    lead: "Defensa y asesoría de imputados y víctimas en el nuevo sistema penal acusatorio, desde la detención ante el Ministerio Público hasta los recursos.",
    meta: "Abogados penalistas en Ciudad de México: asistencia a detenidos ante el Ministerio Público, representación en audiencias, asesoría a víctimas y recursos en el sistema penal acusatorio.",
    blocks: [
      { t: "text", title: "Un área especializada", p: ["Dentro del despacho existe un área de especialización en el nuevo sistema penal acusatorio, encargada de atender la defensa y de fungir como asesor jurídico privado, según la contratación de los servicios profesionales.", "Nuestro objetivo es ofrecer una defensa profesional, adecuada y eficaz que garantice a las víctimas, acusados o imputados que sus garantías constitucionales y derechos fundamentales no sean violentados."] },
      { t: "list", title: "Qué incluyen nuestros servicios penales", items: ["Asesoría y defensa legal a toda persona implicada como investigada ante el Agente del Ministerio Público, en la etapa de investigación inicial", "Asistencia a detenidos ante el Ministerio Público: atención y representación las 24 horas", "Representación y acompañamiento en audiencias, ante el juez de control o de juicio", "Asistencia jurídica a víctimas", "Recursos: queja, revocación, apelación, amparo directo e indirecto y revisión"] },
      { t: "text", title: "Detenidos ante el Ministerio Público", p: ["Ningún indiciado puede ser retenido por más de 48 horas por el Ministerio Público, o más de 96 horas en los casos de delincuencia organizada; antes de que finalice ese lapso debe ser puesto a disposición de un juez o ser liberado (artículo 19 constitucional)."] },
      { t: "list", title: "Derechos de las personas detenidas", intro: "Tienen su fundamento en el artículo 20, apartado B, de la Constitución. Algunos de ellos:", items: ["Ser tratado como inocente mientras no sea declarado culpable mediante sentencia emitida por un juez", "Declarar o entrevistarse con el Ministerio Público y guardar silencio, sin que pueda usarse en su perjuicio", "Comunicarse con su abogado desde el momento de su detención y en todo el proceso", "No ser incomunicado, intimidado ni torturado", "Elegir libremente a su abogado defensor", "Ser informado de sus derechos y de la causa de su detención", "Que se le reciban las pruebas y testigos que ofrezca", "Tener acceso a la carpeta de investigación desde que se encuentra detenido"] },
      { t: "text", title: "Representación en audiencias", p: ["El Código Nacional de Procedimientos Penales (artículo 17) establece que la defensa es un derecho fundamental e irrenunciable de todo imputado y que debe ejercerse con la asistencia de un defensor. Es muy importante contar con un abogado con experiencia en el sistema penal acusatorio y con cédula profesional, ya sea como asesor jurídico de las víctimas o como defensor de la persona imputada.", "Si no cuenta con un abogado particular, el Estado le asignará uno de oficio. Es recomendable contar con un abogado de confianza que diseñe la mejor estrategia legal posible, con atención personalizada."] },
    ],
  },
  {
    key: "familiar",
    group: "familiar",
    title: "Juicios familiares",
    icon: "users-three",
    short: "Divorcio, pensión alimenticia, guarda y custodia, visitas y convivencias, rectificación de actas, reconocimiento de paternidad, sucesiones.",
    lead: "Divorcio, pensión alimenticia, guarda y custodia, visitas y convivencias, rectificación de actas, reconocimiento de paternidad y sucesiones.",
    meta: "Abogados familiares en Ciudad de México: divorcio incausado, pensión alimenticia, guarda y custodia, convivencias, rectificación de actas, paternidad y sucesiones.",
    blocks: [
      { t: "list", title: "Asuntos que atendemos", items: ["Divorcio", "Pensión alimenticia", "Guarda y custodia", "Visitas y convivencias", "Rectificación de actas", "Reconocimiento de paternidad", "Sucesión intestamentaria y testamentaria"] },
      { t: "text", title: "Divorcio incausado", p: ["El divorcio incausado, o divorcio exprés, es la disolución del matrimonio que puede promover uno de los cónyuges ante la autoridad judicial manifestando su voluntad de no continuar con el matrimonio, sin necesidad de señalar la causa. Deja a los cónyuges en aptitud de contraer otra unión matrimonial.", "En este tipo de juicios no se requiere la voluntad de ambas partes. Si las partes no acuerdan lo relativo a los menores, la pensión alimenticia, la guarda y custodia o los bienes, el juez deja a salvo los derechos para hacerlos valer por la vía incidental."] },
      { t: "list", title: "Requisitos del divorcio", items: ["Copia de acta certificada (original) de matrimonio", "Copia de acta certificada (original) de nacimiento de los hijos, en caso de haberlos", "Copia de comprobante de domicilio no mayor a 3 meses", "Copia de credencial para votar (INE) con fotografía"] },
      { t: "list", title: "Qué incluye nuestro servicio de divorcio", items: ["Escrito inicial de demanda de divorcio", "Propuesta de convenio que regule las consecuencias de la disolución del vínculo matrimonial", "Asesoría personalizada durante todo el proceso", "Envío de alertas por autos emitidos por la autoridad judicial", "Representación legal en audiencias", "Una copia de su sentencia de divorcio y el oficio dirigido al juez del registro civil donde se ordena la anotación del divorcio en su acta de matrimonio"] },
      { t: "list", title: "Qué no incluye", items: ["Inscripción de la disolución del vínculo matrimonial en el Registro Civil", "Copias certificadas adicionales de la sentencia"] },
      { t: "text", title: "Duración", p: ["El proceso de disolución del vínculo matrimonial tiene una duración de entre 3 y 6 meses, dependiendo de la carga de trabajo de los tribunales."] },
    ],
  },
  {
    key: "civil",
    group: "civil",
    title: "Juicios civiles",
    icon: "bank",
    short: "Rescisión de contrato, otorgamiento de escrituras, controversias de arrendamiento, contratos.",
    lead: "Rescisión de contrato, otorgamiento de escrituras, controversias de arrendamiento y contratos.",
    meta: "Abogados civiles en Ciudad de México: rescisión de contratos, otorgamiento de escrituras, controversias de arrendamiento y elaboración de contratos.",
    blocks: [
      { t: "list", title: "Asuntos que atendemos", items: ["Rescisión de contrato", "Otorgamiento de escrituras", "Controversias de arrendamiento", "Contratos"] },
      { t: "text", title: "Rescisión de contratos", p: ["Un contrato es un acuerdo de voluntades entre dos personas físicas o morales. Los más comunes son la compraventa, el arrendamiento y el mutuo, regulados por los códigos civiles y, en materia mercantil, por el Código de Comercio.", "Cualquiera de las partes puede rescindir o poner fin anticipadamente a un contrato válido y vigente, por incumplimiento de las obligaciones pactadas o por convenir así a sus intereses. La rescisión puede demandarse ante la autoridad jurisdiccional junto con el pago de la penalidad establecida y la indemnización por daños y perjuicios."] },
      { t: "list", title: "Causas de rescisión más comunes", items: ["Incumplimiento de obligaciones por una de las partes", "Imposibilidad de seguir con la obligación a su término de vigencia", "Fraude o mala fe en la celebración del contrato"] },
      { t: "list", title: "Requisitos para rescindir un contrato", items: ["Contrato celebrado en original", "Copia de credencial de elector del promovente", "Comprobante de domicilio del promovente", "Credencial para votar de 2 testigos (copias)"] },
      { t: "list", title: "Qué incluimos al asesorarle en la rescisión", items: ["Escrito solicitando la rescisión del contrato", "Asesoría personalizada durante todo el proceso", "Convenio que regule las condiciones para la rescisión del contrato"] },
      { t: "list", title: "Para elaborar un contrato", items: ["Copia de la credencial para votar (INE) de las partes de ambos lados", "Copia del poder notarial que faculta a las partes para la celebración del contrato", "En su caso, copia de las escrituras del inmueble"] },
    ],
  },
];
