// Todo el texto sale de cyca.mx (Áreas de práctica, CYCA, Nosotros) y del sitio archivado. Ver lista-2/41-cyca/research.md.
export type Group = { title: string; items: string[] };
export type Area = { key: string; title: string; lead: string; short: string; groups: Group[] };

export const areas: Area[] = [
  {
    key: "corporativo",
    title: "Corporativo",
    short: "Creación, cuidado, manejo y administración de todo tipo de sociedad.",
    lead: "Se asesora y auxilia a todo tipo de sociedad para su creación, cuidado, manejo y administración: estructura y funcionamiento societario, negocios e inversiones, instrumentos jurídicos, prevención de delitos y sanciones empresariales.",
    groups: [
      { title: "Creación y transmisión", items: ["Constitución", "Fusiones y escisiones", "Adquisiciones y due diligence"] },
      { title: "Administración y vigilancia", items: ["Consejos", "Asambleas", "Libros corporativos"] },
      { title: "Extinción", items: ["Liquidación", "Enajenación"] },
      { title: "Operaciones relacionadas", items: ["Contratos", "Auditoría legal", "Gobierno corporativo"] },
    ],
  },
  {
    key: "fiscal",
    title: "Fiscal",
    short: "Cumplimiento fiscal, planeación nacional e internacional y defensa del contribuyente.",
    lead: "Asesoría a personas físicas y morales en cumplimiento de normatividad fiscal, pago de contribuciones, planeación fiscal nacional e internacional, prevención de contingencias y defensa del contribuyente.",
    groups: [{ title: "Incluye", items: ["Prevención", "Consultoría y planeación", "Auditoría interna", "Devolución de contribuciones", "Atención de auditorías", "Negociación con autoridades", "Litigio administrativo y judicial"] }],
  },
  {
    key: "administrativo",
    title: "Administrativo",
    short: "Asesoría a los sectores privado y público: contratación, concesiones y licitaciones.",
    lead: "Asesoría a los sectores privado y público.",
    groups: [
      { title: "Sector privado", items: ["Trámites gubernamentales", "Contratación gubernamental", "Asociaciones público-privadas", "Concesión", "Coinversión"] },
      { title: "Sector público", items: ["Bases de licitación", "Contratos", "Leyes y reglamentos", "Libros blancos y auditorías", "Capacitación", "Transparencia", "Iniciativas de ley"] },
    ],
  },
  {
    key: "financiero",
    title: "Financiero",
    short: "Cumplimiento de normatividad financiera y defensa ante autoridades.",
    lead: "Cumplimiento de normatividad financiera, trámites, defensa ante autoridades y consultoría para entidades financieras y comerciales.",
    groups: [
      { title: "Autoridades", items: ["CNBV", "PROFECO", "BANXICO", "CONDUSEF", "SHCP"] },
      { title: "Entidades", items: ["SOFOM", "Sociedades mercantiles", "Bancos", "SAPI"] },
    ],
  },
];

export const additional = ["Auditorías", "Capacitación", "Actualización"];

export const principles = ["Responsabilidad", "Calidad", "Eficiencia", "Seguridad jurídica"];

export const partners = [
  {
    key: "francisco-castillo-espinosa",
    name: "Francisco Castillo Espinosa",
    role: "Abogado socio (Derecho fiscal, civil y mercantil)",
    bio: "Maestro en Derecho Fiscal por el Colegio Superior de Ciencias Jurídicas y Licenciado en Derecho por la UNAM. Tiene más de treinta años de experiencia como abogado litigante en las áreas civil, mercantil y fiscal, y como asesor de corporativos y de empresas de desarrollo inmobiliario y administración de bienes inmuebles.",
  },
  {
    key: "giovanni-castillo-madrid",
    name: "Giovanni F. Castillo Madrid",
    role: "Abogado socio (Impuestos)",
    bio: "Maestro en Impuestos Internacionales (LL.M.) por la Universidad de Leiden y Maestro en Impuestos por la Universidad Panamericana; Licenciado en Derecho por el ITAM. Trabajó en Aréchiga y Del Rey, Chevez, Ruiz, Zamarripa y Cía., Doporto & Asociados y Ernst & Young México, donde fue Senior Manager en International Tax Services. Es profesor en la Universidad Iberoamericana.",
  },
  {
    key: "vannesa-castillo-madrid",
    name: "Vannesa Castillo Madrid",
    role: "Abogada (penal y financiero)",
    bio: "Licenciada en Derecho por la Universidad Anáhuac del Sur, certificada en prevención de operaciones con recursos de procedencia ilícita y con especialidades en Derecho Procesal Penal (INACIPE). Tiene quince años de experiencia en materia penal, once de ellos en el sector financiero (Ixe y Grupo Financiero Banorte, CONDUSEF, ABM).",
  },
];

export const stats = [
  { value: "2011", label: "año de fundación de la firma" },
  { value: "+30", label: "años como abogado litigante de Francisco Castillo Espinosa" },
  { value: "4.3", label: "calificación en Google, con 10 reseñas" },
];
