// Todo el texto sale de gjarilloyabogados.com.mx (Inicio, Nosotros, Servicios 1 a 3). Ver lista-2/47-gjarillo/research.md.
export type Group = { title: string; items: string[] };
export type Area = { key: string; title: string; lead: string; groups: Group[] };

export const areas: Area[] = [
  {
    key: "laboral",
    title: "Derecho laboral",
    lead: "Para trabajadores, trabajadores burocráticos y empresas.",
    groups: [
      { title: "Trabajadores", items: ["Despidos injustificados", "Pago de prestaciones", "Participación de utilidades", "Seguridad social", "Pensiones"] },
      { title: "Empresas", items: ["Afores", "Demandas laborales", "Citatorios", "Convenios extrajudiciales", "Auditorías laborales"] },
    ],
  },
  {
    key: "civil",
    title: "Derecho civil",
    lead: "Juicios y contratos en materia civil.",
    groups: [{ title: "Incluye", items: ["Juicios reivindicatorios", "Contratos", "Hipotecas", "Arrendamiento", "Pagarés, cheques y facturas"] }],
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    lead: "Asuntos familiares y sucesorios.",
    groups: [{ title: "Incluye", items: ["Divorcio incausado (exprés)", "Pensión alimenticia", "Guarda y custodia", "Patria potestad", "Regulación de visitas", "Juicios sucesorios (testamentarios e intestados)"] }],
  },
];

export const objective = "El objetivo de nuestro equipo de abogados es otorgarle tranquilidad y certeza jurídica en los servicios en los que intervenimos para que conjuntamente encontremos la mejor solución en el menor tiempo y persiguiendo en todo momento los mejores resultados.";
export const about = "Somos un bufete de abogados con residencia en la Ciudad de México con alto nivel profesional y humano. Nuestro compromiso es brindar a nuestros clientes, tanto personas físicas como jurídicas, la asesoría, capacitación y representación legal que requieran en los diferentes ámbitos del derecho.";
export const corresponsales = ["Estado de México", "León, Guanajuato"];
