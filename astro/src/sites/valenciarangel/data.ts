import pluma from "./assets/pluma.jpg";
import torre from "./assets/torre.jpg";
import contratos from "./assets/contratos.jpg";

// Todo el texto sale de valenciarangel.com (Servicios, Firma, FAQ, Contacto). Las imágenes son de ambiente generadas, sin personas ni texto.
export type Group = { title?: string; items: string[] };
export type Area = { key: string; title: string; lead: string; groups: Group[] };

const rev = "Revisión de documentos para elaboración de estrategia";

export const areas: Area[] = [
  {
    key: "asesoria",
    title: "Asesoría y consultoría",
    lead: "Estrategias jurídicas, estrategias de protección, consultas gubernamentales, estudio regulatorio y auditorías legales.",
    groups: [{ items: ["Estrategias jurídicas", "Estrategias de protección", "Consultas gubernamentales", "Estudio regulatorio", "Auditorías legales"] }],
  },
  {
    key: "propiedad-intelectual",
    title: "Propiedad intelectual",
    lead: "Contratos de derecho de autor, registro de obras y de software, y registro de reservas de derechos al uso exclusivo.",
    groups: [
      { title: "Contratos en materia de derecho de autor", items: ["Contratos de cesión de derechos patrimoniales", "Contratos de obra por encargo", "Contratos de licencias de uso", "Entre otros"] },
      { title: "Registro", items: ["Registro de obras literarias", "Registro de software", "Registro de obras pictóricas o de dibujo", "Registro de reservas de derechos al uso exclusivo: publicaciones periódicas, difusiones periódicas, personajes ficticios, personas o grupos dedicados a actividades artísticas y promociones publicitarias"] },
      { title: "Además", items: [rev, "Consultoría jurídica", "Litigio"] },
    ],
  },
  {
    key: "propiedad-industrial",
    title: "Propiedad industrial",
    lead: "Contratos de licencias de uso, copropiedad y cesión de derechos, y registro de marcas, avisos comerciales, patentes, modelos de utilidad y diseños industriales.",
    groups: [
      { title: "Contratos en materia de propiedad industrial", items: ["Contratos de licencias de uso", "Contrato de copropiedad y reglas de uso", "Contrato de cesión de derechos", "Entre otros"] },
      { title: "Registro", items: ["Registro de marcas", "Registro de avisos comerciales", "Registro de patentes", "Registro de modelos de utilidad", "Registro de diseños industriales"] },
    ],
  },
  {
    key: "mercantil",
    title: "Mercantil",
    lead: "Revisión y negociación de contratos de comercio, operaciones con cheques, pagarés y facturas, estudio jurídico de estatutos y litigio.",
    groups: [
      { title: "Revisión y negociación de contratos en materia de comercio", items: ["Crédito, prenda, compraventa, arrendamiento financiero, comisión, depósito, intermediación, distribución, franquicia, suministro, consignación"] },
      { title: "Operaciones relacionadas con", items: ["Cheques, pagarés, facturas, créditos, préstamo, contratos de crédito y prenda"] },
      { title: "Además", items: [rev, "Consultoría jurídica", "Estudio jurídico de estatutos de la empresa", "Litigio"] },
    ],
  },
  {
    key: "corporativo",
    title: "Corporativo",
    lead: "Constitución de sociedades, estatutos sociales, acciones y libros corporativos, contratos entre socios, actas de asambleas, inversión extranjera y auditoría legal.",
    groups: [{ items: ["Constitución de sociedades", "Elaboración de estatutos sociales", "Emisión de acciones y libros corporativos", "Contratos entre socios y accionistas", "Actas de asambleas ordinarias y extraordinarias", "Inversión extranjera", rev, "Auditoría legal", "Consultoría jurídica"] }],
  },
  {
    key: "amparo",
    title: "Amparo",
    lead: "Revisión de documentos para elaboración de estrategia y consultoría jurídica.",
    groups: [{ items: [rev, "Consultoría jurídica"] }],
  },
  {
    key: "civil",
    title: "Civil",
    lead: "Contratos civiles, sociedades civiles y asociaciones, consultoría jurídica y litigio.",
    groups: [
      { title: "Contratos", items: ["Compraventa, arrendamiento, donación, comodato, hipoteca, prenda, fianza, préstamo, promesa, prestación de servicios profesionales, de obra, depósito, asociación civil y sociedad civil, entre otros"] },
      { title: "Además", items: ["Sociedades civiles y asociaciones", rev, "Consultoría jurídica", "Litigio"] },
    ],
  },
  {
    key: "familiar",
    title: "Familiar",
    lead: "Sucesiones, derechos hereditarios, guarda y custodia, patria potestad, pensión alimenticia, divorcio y cambio de régimen patrimonial.",
    groups: [{ items: ["Sucesiones testamentarias e intestamentarias", "Derechos hereditarios", "Guarda y custodia", "Patria potestad", "Pensión alimenticia", "Divorcio", "Cambio de régimen patrimonial", rev, "Consultoría jurídica", "Litigio"] }],
  },
  {
    key: "administrativo",
    title: "Administrativo",
    lead: "Dirección General de Asociaciones Religiosas y Tribunal Federal de Justicia Fiscal y Administrativa.",
    groups: [{ items: ["Dirección General de Asociaciones Religiosas", "Tribunal Federal de Justicia Fiscal y Administrativa"] }],
  },
  {
    key: "laboral",
    title: "Laboral",
    lead: "Contratos de trabajadores, despido y liquidación, renuncia y finiquito, y convenios ante la Junta Federal y Local de Conciliación y Arbitraje.",
    groups: [{ items: ["Contratos de trabajadores: individuales, indefinidos o por tiempo u obra determinada", "Despido: liquidación", "Renuncia: finiquito", "Convenios ante la Junta Federal y Local de Conciliación y Arbitraje", "Consultoría jurídica"] }],
  },
  {
    key: "migratorios",
    title: "Servicios migratorios",
    lead: "Cambio de condición de estancia, regularización migratoria, permiso de trabajo, constancia de empleador y visas de residencia.",
    groups: [
      { title: "Cambio de condición de estancia", items: ["Residente temporal por vínculo familiar", "Residente temporal estudiante a residente temporal", "Residente permanente por vínculo familiar", "Residente temporal a residente permanente"] },
      { title: "Trámites", items: ["Regularización migratoria por vínculo familiar, por tener documento vencido o realizar actividades no autorizadas", "Notificaciones de cambios de estado civil, nombre, nacionalidad, domicilio o lugar de trabajo de residentes temporales y permanentes", "Obtención de permiso de trabajo", "Obtención de Constancia de Inscripción de Empleador", "Actualización de Constancia de Empleador"] },
      { title: "Visas", items: ["Visa de residencia temporal", "Visa de residente permanente", "Visa por oferta de empleo", "Visa por unidad familiar"] },
    ],
  },
];

export const litigios = "Litigios: civil, mercantil, familiar, laboral y administrativo.";

export const photos = { pluma, torre, contratos };

export const equipo = [
  { name: "Gabriela Valencia Rangel", role: "Abogada", bio: "Egresada de la Escuela Libre de Derecho con Mención Especial. Especialidad en Derecho Mercantil por la Escuela Libre de Derecho. Estudios en Régimen Constitucional en materia Económica (Escuela Libre de Derecho, Lic. Elisur Arteaga Nava) y Derechos Fundamentales en México (Lic. Miguel Carbonell, Instituto de Investigaciones Jurídicas de la UNAM). Invitada por el Tecnológico de Monterrey, Campus Estado de México, para impartir la cátedra «El Derecho Migratorio y la Empresa»." },
  { name: "Martha Cristina Bravo Rojas", role: "Lic. en Derecho", bio: "Egresada del Tecnológico de Monterrey, Campus Estado de México, con especialidad en Derecho Mercantil por la Escuela Libre de Derecho." },
  { name: "Laura Muños Garay", role: "Lic. en Derecho", bio: "Egresada de la Facultad de Derecho de la UNAM, Ciudad Universitaria. Diplomado en Propiedad Intelectual por la UNAM. Especialidad en derechos de autor por el Instituto de Propiedad Intelectual y Derecho de la Competencia (IPIDEC)." },
  { name: "Elizabeth González Flores", role: "Lic. en Derecho", bio: "Egresada de la Facultad de Derecho de la UNAM, Ciudad Universitaria. Especialidad en Derecho Empresarial por la División de Estudios de Posgrado de la Facultad de Derecho de la UNAM. Cursa la especialidad en derecho civil en la Escuela Libre de Derecho." },
  { name: "Jaír Isaac Anzures Ornelas", role: "Lic. en Derecho", bio: "Egresado de la Universidad de Londres. Diplomado en juicio de amparo por la Suprema Corte de Justicia de la Nación y diplomado en educación financiera por la CONDUSEF. Cursos de la UAM sobre amparo indirecto, control de convencionalidad y herramientas constitucionales en el proceso civil." },
];

export const firma = {
  alta: "Somos una firma de abogados con alta especialización, lo que nos permite atender sus necesidades jurídicas.",
  mueve: "Nos mueve proporcionar soluciones inteligentes, personalizadas, oportunas, innovadoras, actualizadas, integrales y confiables.",
  multi: "Somos una firma de abogados que se compone por un grupo multidisciplinario de profesionales altamente capacitados y en constante actualización.",
  vanguardia: "Estar a la vanguardia legislativa nos permite obtener un blindaje de seguridad para cada caso.",
};

// Reseñas de Google (5 estrellas), tal como aparecen.
export const quotes = [
  { text: "La mejor atención, muy profesionales, y excelente servicio", author: "Ana Moreno" },
  { text: "Excelente atención, muy profesional su servicio", author: "Ricardo Fabricio Careaga Rodriguez" },
  { text: "Excelente atención", author: "ALBERTO CARRANZA" },
];

// Preguntas frecuentes del despacho (faq). Se corrigieron erratas de tecleo; areaKeys relaciona cada pregunta con sus servicios.
export type Faq = { q: string; p?: string[]; ul?: string[]; after?: string; area: string };
export const faqs: Faq[] = [
  {
    q: "¿Qué tipos de divorcio existen y cuándo aplica cada uno?",
    area: "familiar",
    p: [
      "Administrativo: los divorciantes son mayores de edad; es voluntad de ambos divorciarse; tienen un año o más de casados; la divorciante no esté embarazada; no tienen hijos, o teniéndolos, son mayores de edad y no requieran alimentos; están casados bajo separación de bienes, o estando casados bajo sociedad conyugal, ésta ya fue liquidada; se promueve ante un Juez del Registro Civil del lugar en el que tienen constituido su domicilio conyugal.",
      "Incausado: los divorciantes pueden ser menores de edad; uno solo tiene la voluntad de divorciarse; tienen un año o más de casados; indistintamente tienen hijos menores de edad, mayores de edad que requieren alimentos, o mayores de edad que no requieren alimentos; están casados por sociedad conyugal o separación de bienes; se debe adjuntar propuesta de convenio, que contenga principalmente fijación de alimentos, régimen de convivencia, guarda y custodia de menores, uso de domicilio conyugal y forma de liquidar los bienes de la sociedad conyugal, si es el caso.",
      "Incausado por mutuo consentimiento: los divorciantes pueden ser menores de edad; ambos tienen la voluntad de divorciarse; tienen un año o más de casados; indistintamente tienen hijos menores de edad, mayores de edad que requieran alimentos, o mayores de edad que no requieran alimentos; están casados por sociedad conyugal o separación de bienes; se debe adjuntar convenio firmado por ambos divorciantes que contenga principalmente fijación de alimentos, régimen de convivencia, guarda y custodia de menores, uso de domicilio conyugal y forma de liquidar los bienes de la sociedad conyugal, si es el caso.",
    ],
  },
  {
    q: "¿Cuál es la diferencia entre patria potestad y guarda y custodia?",
    area: "familiar",
    p: [
      "La patria potestad es la relación filial que detentan ambos padres sobre sus hijos menores de edad no emancipados, aun habiéndose divorciado, y acarrea para los padres derechos y obligaciones de crianza en las que debe imperar el respeto.",
      "La guarda y custodia, a pesar de conllevar igualmente derechos y obligaciones de crianza para con sus hijos menores de edad no emancipados, será ejercida por el padre que cohabite con ellos, salvo cuestión expresa de un Juez Familiar.",
    ],
  },
  { q: "¿Qué comprende la pensión alimenticia?", area: "familiar", p: ["Comida, vestido, habitación, atención médica y hospitalaria, gastos de embarazo y parto, y educación."] },
  {
    q: "¿Cuál es la diferencia entre sociedad conyugal y separación de bienes?",
    area: "familiar",
    p: [
      "En la sociedad conyugal, los cónyuges son copropietarios a partes iguales de todos y cada uno de los bienes que se hayan adquirido durante el matrimonio, sin importar si alguno no aportó cantidad de dinero en la adquisición, o aportó menos.",
      "En la separación de bienes, los cónyuges son únicos y exclusivos propietarios de todos y cada uno de los bienes que cada uno haya adquirido durante el matrimonio.",
    ],
  },
  {
    q: "¿Qué tipos de sucesiones existen?",
    area: "familiar",
    p: [
      "Testamentaria, en caso de que la persona fallecida haya otorgado testamento para disponer de sus bienes.",
      "Legítima o intestamentaria, en caso de que la persona fallecida no haya otorgado testamento para disponer de sus bienes.",
    ],
  },
  {
    q: "¿Cómo se acredita un concubinato?",
    area: "familiar",
    p: ["Mediante declaración de Juez del Registro Civil, siempre que los concubinos no estén casados, o estándolo no se hayan divorciado; han cohabitado por lo menos durante dos años; o no habiendo cohabitado durante dos años, tienen un hijo."],
  },
  {
    q: "¿Cómo obtengo mi visa para trabajar en México?",
    area: "migratorios",
    p: [
      "El procedimiento migratorio se deberá iniciar ante el Instituto Nacional de Migración en México, en donde una empresa debidamente constituida e inscrita ante el mismo solicita una visa por la oferta laboral a favor del extranjero. En caso de cumplir con los requerimientos legales, se autorizará una entrevista consular ante autoridad mexicana en el exterior, a efecto de otorgar la visa correspondiente.",
      "Posteriormente, usted podrá ingresar al país y continuar con el procedimiento para que sea expedida su tarjeta como residente temporal con permiso para trabajar.",
    ],
  },
  {
    q: "¿Cómo obtengo mi carta de naturalización mexicana?",
    area: "migratorios",
    p: ["Es muy importante contar con una condición de estancia legal en México, ya que existen diversas formas de adquirir este derecho:"],
    ul: [
      "Por residencia.",
      "Por ser descendiente de un mexicano.",
      "Por tener hijos mexicanos por nacimiento.",
      "Por ser originario de un país latinoamericano o de la península ibérica.",
      "Por haber prestado servicios o realizado obras destacadas en materia cultural, social, científica, técnica, artística, deportiva o empresarial.",
      "Por haber contraído matrimonio civil con varón o mujer mexicanos.",
      "Por estar sujeto a patria potestad o ser hijo adoptivo de mexicanos.",
    ],
  },
  {
    q: "¿Qué puedo proteger en materia de derechos de autor?",
    area: "propiedad-intelectual",
    p: ["Las creaciones respecto a obras literarias, artísticas, musicales, coreográficas, composiciones musicales, pictóricas, esculturales, cinematográficas, programas informáticos, dibujos, fotográficas, arquitectónicas, artículos periodísticos, caricaturas, mapas, programas de radio y televisión, obras de arte aplicado, etc."],
  },
];
