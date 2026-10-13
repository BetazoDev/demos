// Todo el texto sale de vinlex-abogados.jimdosite.com (Inicio, Servicios, Contáctenos) y de su ficha de Google.
export type Area = { key: string; title: string; lead: string; items: string[]; page: boolean; seo: string };

export const areas: Area[] = [
  {
    key: "corporativo",
    title: "Derecho corporativo",
    lead: "Certeza jurídica en la toma de decisiones del negocio, de manera preventiva y correctiva.",
    items: [],
    page: false,
    seo: "Derecho corporativo en la Ciudad de México: certeza jurídica en la toma de decisiones del negocio, de manera preventiva y correctiva.",
  },
  {
    key: "civil",
    title: "Derecho civil",
    lead: "Ejecuciones hipotecarias, juicio reivindicatorio, arrendamiento inmobiliario, contratos y convenios, responsabilidad civil y cobranza.",
    items: ["Ejecuciones hipotecarias y de préstamos", "Juicio reivindicatorio", "Controversias de arrendamiento inmobiliario", "Elaboración y revisión de contratos y convenios", "Demandas de responsabilidad civil", "Recuperación de cartera vencida", "Cobranza civil y mercantil", "Indemnización por daños", "Propiedad y defensa de usufructo"],
    page: true,
    seo: "Abogados civiles en la Ciudad de México: ejecuciones hipotecarias, juicio reivindicatorio, arrendamiento, contratos, responsabilidad civil y cobranza.",
  },
  {
    key: "fiscal",
    title: "Derecho fiscal",
    lead: "Planeación fiscal, devoluciones de impuestos, defensa fiscal, prevención de lavado de dinero y comercio exterior.",
    items: ["Planeación fiscal", "Devoluciones de impuestos", "Defensa fiscal", "Prevención de lavado de dinero y simulación de operaciones", "Comercio exterior"],
    page: true,
    seo: "Abogados fiscalistas en la Ciudad de México: planeación fiscal, devoluciones de impuestos, defensa fiscal, prevención de lavado de dinero y comercio exterior.",
  },
  {
    key: "administrativo",
    title: "Derecho administrativo",
    lead: "Asesoría y representación ante dependencias federales y locales para evitar multas, clausuras y suspensión de actividades.",
    items: ["Procedimientos ante dependencias o secretarías de Estado, federales y locales", "COFEPRIS, CONDUCEF, PROFECO, entre otras", "Evitar multas, clausuras y suspensión de actividades"],
    page: true,
    seo: "Abogados de derecho administrativo en la Ciudad de México: asesoría y representación ante COFEPRIS, CONDUCEF, PROFECO y otras dependencias para evitar multas y clausuras.",
  },
  {
    key: "mercantil",
    title: "Derecho mercantil",
    lead: "Asesoría y defensa en juicios mercantiles, pagarés, cheques, facturas, recuperación de cartera vencida y ejecución de fideicomisos.",
    items: ["Asesoría y defensa en juicios mercantiles", "Elaboración y cobro de pagarés, cheques, facturas y contratos", "Recuperación de cartera vencida", "Administración de cartera vigente", "Asesoría en el otorgamiento de créditos", "Ejecución de fideicomisos"],
    page: true,
    seo: "Abogados mercantiles en la Ciudad de México: juicios mercantiles, cobro de pagarés y cheques, recuperación de cartera vencida y ejecución de fideicomisos.",
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    lead: "Divorcio, nulidad de matrimonio, pensión alimenticia, adopción, reconocimiento de paternidad, sucesiones y testamentaría.",
    items: ["Divorcio", "Nulidad de matrimonio", "Pensión alimenticia", "Adopción", "Reconocimiento de paternidad", "Rectificación de actas ante el Registro Civil", "Estado de interdicción", "Declaración de ausencia", "Sucesiones y testamentaría"],
    page: true,
    seo: "Abogados familiares en la Ciudad de México: divorcio, pensión alimenticia, adopción, reconocimiento de paternidad, sucesiones y testamentaría.",
  },
  {
    key: "penal",
    title: "Derecho penal",
    lead: "Asistencia integral en la etapa de investigación, mecanismos alternativos, medidas cautelares y delitos contra el patrimonio y las personas.",
    items: ["Asistencia integral en la etapa de investigación", "Mecanismos alternativos de solución al conflicto y procedimientos abreviados", "Oposición o solicitud de medidas cautelares", "Delitos societarios", "Delitos contra el patrimonio", "Delitos contra las personas"],
    page: true,
    seo: "Abogados penalistas en la Ciudad de México: etapa de investigación, procedimientos abreviados, medidas cautelares y delitos societarios, patrimoniales y contra las personas.",
  },
];

export const text = {
  tagline: "Asesoría, Consultoría, Representación y Defensa",
  about: "VINLEX Abogados es un despacho especializado en las áreas clave de defensa y asesoramiento legal a personas físicas y morales, reconociéndolos como las personas más importantes en nuestro trabajo.",
  philosophy: "Nuestra filosofía de trabajo se basa en la atención personalizada a cada uno de nuestros clientes, creando confianza para lograr los objetivos planteados y salvaguardar en todo momento los intereses y el patrimonio de nuestros representados.",
  philosophyShort: "Nuestra filosofía de trabajo se basa en la atención personalizada a cada uno de nuestros clientes, creando confianza para lograr los objetivos planteados.",
  clients: "Para VINLEX Abogados lo más importante son nuestros clientes, por lo que buscamos comprender sus necesidades y ofrecerles servicios de calidad que garanticen resultados personalizados.",
  mission: "Ser la firma legal mejor reconocida por su servicio, honradez, confianza y calidez, dando una solución efectiva a las diferentes necesidades de nuestros clientes mediante un servicio personalizado haciéndolo sentir seguro, confiable y único.",
  missionShort: "Ser la firma legal mejor reconocida por su servicio, honradez, confianza y calidez.",
  vision: "Contribuir a la sociedad prestando servicios profesionales apegados a la ética y con vocación de servicio, fortaleciendo nuestro compromiso de brindar una asesoría que genere confianza y certeza.",
  contact: "Si desea asesoría o agendar una cita, póngase en contacto con nosotros y le ayudaremos con mucho gusto.",
};

// Reseña de Google (autor tal como aparece).
export const quote = { text: "Excelente atención y un buen seguimiento de mi caso. Además de contar con abogados confiables.", author: "Aprendiz Errante" };
