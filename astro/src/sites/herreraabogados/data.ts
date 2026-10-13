// Todo el texto sale de herrera-abogados.com.mx (Español, sección Práctica, Pro bono y Socios). Sin cifras ni fotos del despacho.
export type Area = { key: string; title: string; text?: string; topics?: string[] };

export const areas: Area[] = [
  { key: "transacciones", title: "Transacciones comerciales", text: "Asesoría y representación en negocios dentro y fuera de México." },
  { key: "energia", title: "Energía" },
  { key: "inmuebles", title: "Inmuebles" },
  { key: "regulatorio", title: "Administrativo y regulatorio" },
  { key: "acciones-colectivas", title: "Acciones de clase y colectivas" },
  { key: "criptomonedas", title: "Criptomonedas" },
  {
    key: "telecomunicaciones",
    title: "Telecomunicaciones",
    text: "Asesorías jurídicas especializadas a la conformación de nuevos actores del sector y al crecimiento y mantenimiento de los actuales.",
    topics: ["Telefonía fija", "Telefonía móvil", "VOIP", "MVNO", "Internet y ethernet", "Radiodifusión", "Infraestructura", "Video y contenido"],
  },
  {
    key: "nuevas-tecnologias",
    title: "Nuevas tecnologías",
    topics: ["Redes sociales", "Comercio electrónico", "Cómputo en la nube", "Software", "Aplicaciones", "IoT", "IA", "Big Data", "Fintech"],
  },
  { key: "pro-bono", title: "Pro bono", text: "Actividades en las que compartimos nuestro tiempo, conocimientos y recursos, ayudando a personas físicas y morales con impacto positivo en la sociedad." },
];

export const clients = ["Bancos centrales", "Sociedades cooperativas", "Empresas de seguridad", "Empresas de energía y financieras", "Personas físicas", "Gobiernos y organismos internacionales"];

export const partners = [
  {
    name: "José Luis Herrera Vaca",
    role: "Socio",
    focus: "Energía, administrativo y acciones colectivas",
    bio: "Trabajó en el Senado de la República y fue consultor del BID en Washington, D.C. En Pemex, de 2002 a 2014, fue Titular de la Unidad de Asuntos Internacionales y presidente del Grupo Marítimo Pemex durante 10 años. Desde 2014 ejerce en la práctica privada en energía, administrativo y acciones colectivas. Fue electo en 2014 y reelecto en 2017 miembro del Órgano de Auditoría de los FIDAC, en Londres. Cursó el doctorado y la maestría en la Universidad Panamericana y la Maestría en Derecho Internacional en Georgetown. Es docente en la Anáhuac México Sur, la Panamericana y la Escuela Libre de Derecho, y autor de publicaciones en derecho energético y marítimo.",
  },
  {
    name: "Juan Antonio Ramírez",
    role: "Socio",
    focus: "Competencia económica, telecomunicaciones y tecnologías de la información",
    bio: "Más de 20 años de experiencia en competencia económica, telecomunicaciones, TI, derecho internacional, mercantil y corporativo, comercio electrónico y datos personales. Ha ocupado puestos directivos en telecomunicaciones y TI y fue vicepresidente jurídico adjunto de la Asociación de Internet.MX (antes AMIPCI). Cuenta con estudios de doctorado en derecho, varias maestrías y especialidades, y es docente en múltiples universidades.",
  },
  {
    name: "José Sifuentes",
    role: "Socio",
    focus: "Corporativo, fusiones y adquisiciones, valores y finanzas",
    bio: "Abogado corporativo, de fusiones y adquisiciones, valores y finanzas. Asesora en financiamientos, en el sector energético (Pemex, petróleo y gas, electricidad) y en transacciones corporativas complejas.",
  },
];

export const manifesto = "Nuestra práctica legal es un servicio a nuestros clientes que implica una atención ética, personalizada, profesional y leal con un sentido práctico y dirigida a la realización de negocios.";
export const honorarios = "Nuestro trabajo es un traje hecho a la medida, por lo cual nuestros honorarios también lo son.";
