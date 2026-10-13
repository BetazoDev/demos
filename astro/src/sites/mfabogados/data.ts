// Todo el texto sale de m-f-abogados-com-mx.webnode.mx (Áreas de práctica, Quién es Moreno&Fuertes, Nuestros socios, Contacto), con erratas corregidas.
export type Area = { key: string; title: string; teaser: string; items: string[] };

export const areas: Area[] = [
  {
    key: "mercantil",
    title: "Derecho mercantil",
    teaser: "Recuperación de créditos, derecho societario y corporativo, concursos mercantiles.",
    items: ["Recuperación de todo tipo de créditos, incluso cartera crediticia y bancaria", "Derecho societario y corporativo", "Concursos mercantiles", "Arrendamiento financiero", "Fideicomisos"],
  },
  {
    key: "civil",
    title: "Derecho civil",
    teaser: "Cumplimiento y rescisión de contratos, arrendamiento, responsabilidad civil, daños y perjuicios.",
    items: [
      "Cumplimiento y rescisión de contratos",
      "Asesoría en contratos con garantía hipotecaria, prendaria u otra",
      "Contratos de arrendamiento con y sin pacto arbitral, y con o sin procedimientos convencionales de ejecución",
      "Responsabilidad objetiva y subjetiva",
      "Juicios de apeo y deslinde",
      "Prescripción",
      "Daños y perjuicios",
    ],
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    teaser: "Divorcios, sucesiones, pensiones alimentarias y régimen de sociedad conyugal.",
    items: ["Divorcios", "Sucesiones testamentarias e intestamentarias", "Alimentos (pensiones alimentarias)", "Liquidación del régimen de sociedad conyugal y cambio de régimen", "Juicios de interdicción"],
  },
  {
    key: "penal",
    title: "Derecho penal",
    teaser: "Defensa penal, atención de juicios, amparo en materia penal.",
    items: ["Defensa penal", "Atención de juicios", "Investigación", "Apoyo como asesor jurídico", "Auxilio en agencia del Ministerio Público", "Amparo en materia penal"],
  },
  {
    key: "laboral",
    title: "Derecho laboral",
    teaser: "Juicios laborales, convenios, contratos laborales y atención ante IMSS y STPS.",
    items: ["Asesoría en inversión", "Atención de juicios laborales", "Firma de convenios", "Desarrollo de contratos laborales", "Atención ante autoridades administrativas (IMSS, STPS)", "Contratación de personal"],
  },
];

export const partners = [
  {
    name: "Lic. Marcos Eduardo Moreno G.",
    role: "Director General, miembro fundador",
    short: "Diplomado en criminalística y criminología, con especialidad en juicios orales.",
    bio: "Diplomado en criminalística y criminología, con especialidad en juicios orales. Fue abogado en un despacho jurídico de 2009 a 2010 y en Vega Abogados s.c. de 2010 a 2013, y apoderado legal de Payroling Corporation s.a. de c.v. de 2013 a 2016.",
  },
  {
    name: "Lic. Alejandro Fuertes B.",
    role: "Dirección Adjunta, miembro fundador",
    short: "Con especialidad en juicios orales y fuerte en derecho familiar.",
    bio: "Egresado del Centro de Estudios Superiores en Ciencias Jurídicas y Criminológicas, con especialidad en juicios orales y desarrollado en derecho familiar. Fue abogado en Soluciones Integrales Fuertes y Asociados s.c. de 2008 a 2013; en 2013 funda la firma, especializado en materia familiar y civil.",
  },
];

export const firma = {
  descripcion: "Moreno & Fuertes Abogados s.c. nace en 2013 como una firma de abogados con una nueva ideología de la aplicación de los servicios legales, con el espíritu de poder ofrecer una nueva forma de hacer valer los derechos de nuestros clientes, con diligencia, honestidad y lealtad.",
  frase: "Una nueva forma de hacer valer los derechos de nuestros clientes, con diligencia, honestidad y lealtad.",
  mision: "Inculcar valores a los colaboradores para fortalecer su esquema de trabajo.",
  vision: "Posicionarnos entre las mejores firmas de abogados de la Ciudad de México y en toda la República Mexicana.",
  objetivo: "Ofrecer servicios profesionales a todas las esferas de la sociedad mexicana.",
  valores: ["Honestidad", "Lealtad", "Compromiso"],
  lema: "Formamos parte de la solución, no del problema.",
};
