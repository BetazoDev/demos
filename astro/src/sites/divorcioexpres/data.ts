import fachada from "./assets/fachada-centro-historico.jpg";

// Todo el texto sale de divorcioexpres.mx (Inicio, ¿Quiénes somos?, Divorcio exprés, Pensión alimenticia, Guarda y custodia,
// Patria potestad, Visitas y convivencias, Adopción, Designación de apoyo, Sucesiones y Contáctanos), puesto en «usted»,
// con erratas corregidas y «Distrito Federal» actualizado a «Ciudad de México». Se omitió el contenido legal desactualizado
// (tabla de porcentajes de pensión, artículo 282 y resumen de la reforma de 2008): el despacho debe revisarlo antes de publicarlo.
export type Block = { h?: string; p?: string[]; list?: string[]; after?: string[] };
export type Area = { key: string; title: string; lead: string; blocks: Block[] };

export const requisitos = [
  { title: "Acta de matrimonio", text: "No importa si se casó fuera de la Ciudad de México o en otro país: podemos hacer el trámite de cualquier forma." },
  { title: "Actas de nacimiento de los hijos", text: "Tampoco importa si no nacieron en la Ciudad de México, si nacieron fuera de México o son mayores de edad." },
  { title: "Escrituras o facturas de los bienes", text: "De los bienes que constituyan la sociedad conyugal: es necesario que podamos acreditar su existencia y propiedad. Si no cuenta con ellos, no se preocupe." },
  { title: "Datos del centro de trabajo de su cónyuge", text: "Para solicitar el pago de una pensión alimenticia bastante y suficiente a favor de sus hijos y a su favor en caso de ser procedente. Si no cuenta con los datos, nosotros los investigamos y conseguimos el pago de su pensión por descuento directo vía nómina." },
  { title: "Domicilio de la persona a la que vamos a demandar", text: "Si ya no viven juntos, es importante que contemos con los datos de localización de su aún cónyuge, el lugar en el que vive o en el que trabaja. Si no cuenta con ellos, nosotros podemos localizarlo." },
  { title: "Elaboración del convenio", text: "Nosotros nos encargamos de elaborar el convenio judicial de divorcio incausado en los términos que a usted le convengan." },
];
export const convenio = [
  "Guarda y custodia de los hijos",
  "Visitas y convivencias a favor del contrario",
  "Monto de pensión alimenticia",
  "Uso del domicilio conyugal",
  "Forma de liquidar la sociedad conyugal",
  "En casos de separación de bienes, solicitar compensación",
];

export const otros = ["Liquidación de sociedad conyugal", "Pago de compensación económica en separación de bienes", "Nulidad de acta de nacimiento", "Nulidad de matrimonio", "Autorizaciones judiciales a menores para salir del país"];

export const areas: Area[] = [
  {
    key: "divorcio-expres",
    title: "Divorcio exprés",
    lead: "La ley permite tramitar un juicio de divorcio de manera rápida y sencilla, conocido como divorcio exprés o divorcio incausado.",
    blocks: [
      { h: "Cómo funciona", p: ["Desaparece el sistema de causales de divorcio y se privilegia como única causa la sola voluntad de uno de los cónyuges para disolver el matrimonio.", "El procedimiento es simple y se limita a la presentación de una solicitud, a la que deberá acompañarse una propuesta de convenio para regular las consecuencias inherentes a la disolución del vínculo matrimonial."] },
    ],
  },
  {
    key: "pension-alimenticia",
    title: "Pensión alimenticia",
    lead: "Pueden reclamar el pago de alimentos los cónyuges, los concubinos, los hijos, los padres y los familiares más cercanos.",
    blocks: [
      { p: ["Si no está casado(a), puede interponer una demanda para el pago de pensión alimenticia si es concubino(a)."] },
      { h: "Requisitos para presentar la demanda", list: [
        "Acta de matrimonio. Si no está casado(a) pero es concubino(a), también podemos reclamar el pago de alimentos.",
        "Acta de nacimiento de los hijos, a favor de quienes vamos a reclamar la pensión alimenticia.",
        "Datos del trabajo del demandado(a): es necesario que tenga la información relativa al centro de trabajo de su contraparte o, en su caso, la forma en la que obtiene sus ingresos. Si es empleado en una empresa será más sencillo, porque pediremos el pago por descuento directo de nómina, es decir, la empresa le pagará a usted directamente la pensión alimenticia.",
      ] },
      { h: "Hijos mayores de edad", p: ["Si sus hijos ya son mayores de edad, también pueden reclamar el pago de pensión alimenticia si reúnen los siguientes requisitos:"], list: ["Que estudien en un grado acorde a su edad.", "Que tengan un buen aprovechamiento académico.", "Que no tengan hijos ni se hayan casado o unido en concubinato."] },
      { h: "Cancelación, reducción y aumento", p: ["¿Quiere la cancelación de la pensión alimenticia que actualmente está pagando porque quien la recibe no la merece o no la necesita? ¿Quiere la reducción del monto? ¿Desea el aumento de pensión?", "Probablemente sea otra persona la que se está beneficiando del producto de su trabajo y no sus hijos. Podemos demandar la rendición de cuentas para que sepa en qué está gastando el dinero que proporciona."] },
    ],
  },
  {
    key: "guarda-y-custodia",
    title: "Guarda y custodia",
    lead: "A diferencia de la patria potestad, versa sobre cuál de los progenitores tendrá bajo su cuidado a los menores hijos, sin que ello implique la pérdida de derechos y obligaciones del otro progenitor.",
    blocks: [
      { h: "La audiencia", p: ["Cuando a petición de parte interesada se deba resolver provisionalmente sobre la guarda y custodia de las niñas y los niños, previamente se dará vista a la parte contraria y se señalará día y hora para la audiencia que resolverá sobre la custodia de los menores. En ella, los menores serán escuchados ante un agente del Ministerio Público y el Juez, asistidos por un representante del DIF.", "Una vez que se escucha a los menores y la opinión de la representación, y valorando todos los elementos disponibles, pudiendo incluir valoraciones psicológicas, el Juez determinará a cuál de los progenitores corresponderá la custodia de los hijos."] },
      { h: "Obligaciones de crianza", p: ["Quienes ejerzan la patria potestad o la guarda y custodia de los menores, independientemente de que vivan o no en el mismo domicilio, deben dar cumplimiento a las obligaciones de crianza:"], list: ["Procurar la seguridad física, psicológica y sexual.", "Fomentar hábitos adecuados de alimentación, higiene y desarrollo físico, así como impulsar habilidades de desarrollo intelectual y escolares.", "Realizar demostraciones afectivas, con respeto y aceptación de estas por parte del menor.", "Determinar límites y normas de conducta preservando el interés superior del menor."], after: ["Se considerará incumplimiento de las obligaciones de crianza el que, sin justificación y de manera permanente y sistemática, no se realicen las actividades señaladas. No se considera incumplimiento el que cualquiera de los progenitores tenga jornadas laborales extensas."] },
    ],
  },
  {
    key: "patria-potestad",
    title: "Patria potestad",
    lead: "Es el conjunto de derechos y obligaciones que la ley reconoce a los padres sobre las personas y bienes de sus hijos mientras estos son menores de edad. Se considera el derecho de crianza, formación, educación, salud y administración de bienes, entre otros.",
    blocks: [
      { h: "Para qué sirve un juicio de pérdida de patria potestad", p: ["Para que no se requiera autorización del otro progenitor para obtener el pasaporte o la visa de sus hijos, ni tenga que pedirle autorización para salir del país con ellos, cambiar su residencia dentro del territorio nacional o fuera de este."] },
      { h: "¿Por qué puede un padre o una madre perder la patria potestad?", p: ["El Código Civil establece de manera clara las causales:"], list: ["Dejar en estado de abandono al menor.", "Dejar de proveer los alimentos, es decir, no pagar la pensión alimenticia.", "Cometer un delito en contra del menor.", "Generar actos de violencia en contra del menor, considerando violencia psicoemocional, verbal, física, sexual, etc."] },
      { h: "Cómo iniciarlo", p: ["Podemos iniciar un juicio de esta naturaleza en beneficio de sus hijos y en beneficio suyo. Si es casado(a), necesitamos el acta de matrimonio y el acta de nacimiento de sus hijos para iniciar este procedimiento.", "¿Quiere iniciar un proceso de pérdida o recuperación de patria potestad? Llame a nuestra oficina para hacer una cita y brindarle la asesoría que requiere."] },
    ],
  },
  {
    key: "visitas-y-convivencias",
    title: "Visitas y convivencias",
    lead: "La ley protege los derechos de los niños y de los padres que no ejercen la guarda y custodia para que puedan tener un régimen de visitas y convivencias con ellos.",
    blocks: [
      { p: ["No espere más: reclame sus derechos y los de sus hijos a tener un régimen de visitas y convivencias adecuadas, en los términos que sus hijos y usted necesitan.", "Le orientamos sobre la mejor forma de evitar que sus hijos convivan con alguien que los puede poner en riesgo o peligro, tanto en su desarrollo físico como emocional.", "Podemos iniciar cualquier proceso legal relacionado con sus hijos menores solo con su acta de nacimiento."] },
    ],
  },
  {
    key: "adopcion",
    title: "Adopción",
    lead: "Es el acto jurídico por el cual el Juez de lo Familiar constituye de manera irrevocable una relación de filiación entre el adoptante y el adoptado, y establece un parentesco consanguíneo entre el adoptado y la familia del adoptante.",
    blocks: [
      { h: "Podrán adoptar", list: ["Los cónyuges en forma conjunta, que al menos tengan dos años de casados.", "Los concubinos en forma conjunta, que demuestren una convivencia ininterrumpida de al menos dos años.", "Las personas físicas solteras mayores de 25 años.", "El tutor al pupilo, una vez aprobadas las cuentas de su administración.", "El cónyuge o concubino al hijo de su compañero que ejerza de manera individual la patria potestad y que demuestre una convivencia ininterrumpida de al menos dos años."], after: ["Los cónyuges o concubinos podrán adoptar cuando los dos estén conformes en considerar al adoptado como hijo, y aunque solo uno de ellos cumpla con el requisito de edad, siempre que la diferencia de edad entre cualquiera de los adoptantes y el adoptado sea de 17 años cuando menos."] },
      { h: "Podrán ser adoptados", list: ["El niño o niña menores de 18 años que carezca de persona que ejerza sobre ellos la patria potestad.", "Quienes hayan sido declarados judicialmente en situación de desamparo o estén bajo la tutela del Sistema para el Desarrollo Integral de la Familia.", "Aquellos cuyos padres o abuelos hayan sido sentenciados a la pérdida de la patria potestad.", "Aquellos cuyos padres, tutor o quienes ejerzan la patria potestad otorguen su consentimiento.", "El mayor de edad incapaz.", "El mayor de edad con plena capacidad jurídica, a juicio del Juez de lo Familiar y en atención al beneficio del adoptante y de la persona adoptada."] },
      { h: "Efectos jurídicos", list: ["Constitución plena e irrevocable entre adoptado y adoptante de todos los derechos y obligaciones inherentes entre padre e hijos consanguíneos.", "Constitución del parentesco consanguíneo.", "Obligación de proporcionar al adoptado el nombre y apellidos de los adoptantes, salvo que el Juez lo estime inconveniente.", "Extinción de la filiación entre el adoptado y sus progenitores y del parentesco con la familia de estos, salvo los impedimentos de matrimonio. Si el adoptante está casado o tiene una relación de concubinato con alguno de los progenitores del adoptado, no se extinguen los derechos, obligaciones y demás consecuencias jurídicas que resulten de la filiación consanguínea."] },
      { h: "Requisitos para la adopción", list: ["Que resulte benéfica para la persona que pretende adoptarse.", "Que el adoptante tenga más de 25 años cumplidos al momento en que el juez emita la resolución que otorgue la adopción y tenga 17 años más que el adoptado.", "Que el adoptante acredite contar con medios suficientes para proveer la subsistencia y educación del menor, como hijo propio.", "Que el solicitante exponga de forma clara y sencilla las razones de su pretensión.", "Que el solicitante demuestre un modo de vida honesto, así como la capacidad moral y social para procurar una familia adecuada y estable al adoptado.", "Que ninguno de los adoptantes haya sido procesado o se encuentre pendiente de proceso penal por delitos que atenten contra la familia, sexuales o, en su caso, contra la salud."] },
    ],
  },
  {
    key: "designacion-de-apoyo",
    title: "Designación de apoyo",
    lead: "Es un proceso mediante el cual se declara judicialmente el apoyo para personas con discapacidad, designándose un tutor y un curador para la protección de sus bienes. Garantiza y respeta la capacidad jurídica plena e igualitaria.",
    blocks: [
      { p: ["Se designan apoyos (personas de confianza o profesionales) para asistir a la persona en la decisión. El apoyo debe actuar siempre respetando la voluntad, deseos y preferencias de la persona."] },
      { h: "El proceso", p: ["Para tramitar la solicitud o demanda de designación de apoyos y salvaguardias, que se promueve mediante la vía de jurisdicción voluntaria ante un Juzgado de lo Familiar, se requieren los siguientes elementos principales:"], list: [
        "Escrito inicial: datos generales (nombre, domicilio, CURP e identificación oficial) tanto del promovente como de la persona que recibirá el apoyo.",
        "Acreditación de vínculo: documento que certifique el parentesco, convivencia o relación de confianza (actas de nacimiento, matrimonio, etc.).",
        "Exposición de hechos: explicación detallada de las razones por las cuales la persona requiere asistencia y las acciones específicas en las que la necesita (por ejemplo, cobro de pensión, trámites bancarios, administración de bienes o decisiones médicas).",
        "Certificado o expediente médico: expedido por una institución de salud o médico tratante que especifique la condición o la naturaleza de la discapacidad de la persona.",
        "Evaluación de necesidades: información sobre los ajustes razonables o las herramientas de comunicación necesarias para que la persona pueda expresar sus decisiones.",
        "Designación de personas de apoyo: nombre e identificación de la persona o personas propuestas para brindar la asistencia (o copia de la designación anticipada si existía alguna).",
        "Salvaguardias: medidas para garantizar que no exista conflicto de intereses ni abuso sobre la persona apoyada (por ejemplo, rendición de informes periódicos ante el juez).",
      ] },
    ],
  },
  {
    key: "sucesiones",
    title: "Sucesiones",
    lead: "Procedimiento encaminado a transmitir derechos y bienes a una persona, capacitada jurídicamente, por parte de otra que murió. Puede realizarse de dos maneras: testamentaria o intestamentaria.",
    blocks: [
      { h: "Testamentaria", p: ["Es aquella en la que se actualiza lo dispuesto en un testamento. Dentro de esta figura se pueden encontrar dos formas de acceder a los bienes de una persona: por medio del heredero o del legatario."], list: ["El heredero es quien hereda a título universal todos los bienes del finado.", "El legatario se queda con el bien asignado por el testador."], after: ["Los testamentos más usados son el público abierto, que se realiza ante un notario público, y el hológrafo, que se hace de puño y letra; la ley pide que se haga frente a dos testigos, quienes lo firmarán y posteriormente lo depositarán en el Archivo General de Notarías."] },
      { h: "Intestamentaria o legítima", p: ["Se caracteriza por la carencia de testamento y es la más común. Esta sucesión se da en caso de que una persona muera intestada, por lo que lo heredado se tiene que dar en una línea de tronco común.", "Si una persona muere intestada, le corresponderá la herencia al hijo, al cónyuge, a los padres, hermanos y parientes colaterales hasta el cuarto grado."] },
      { h: "El proceso", p: ["Las sucesiones, tanto legítima como testamentaria, constan de 4 secciones:"], list: ["Sección I: validez de testamento (testamentaria) o declaratoria de herederos (intestamentaria).", "Sección II: inventario y avalúos, iniciada por el albacea.", "Sección III: rendición de cuentas que hizo el albacea.", "Sección IV: adjudicación (testamentaria) o partición y adjudicación (intestamentaria)."] },
    ],
  },
];

export const photos = { fachada };
