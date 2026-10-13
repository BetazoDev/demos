// Todo el texto sale del sitio archivado de García & Escamilla (Wayback 21-nov-2024). Ver lista-2/51-garciaescamillaabogados/research.md.
export type Area = { key: string; title: string; lead?: string; short: string; items?: string[] };

export const areas: Area[] = [
  {
    key: "civil",
    title: "Derecho civil",
    short: "Controversias de arrendamiento inmobiliario, juicios de desahucio, recuperación y adquisición de propiedad, contratos.",
    items: ["Controversias de arrendamiento inmobiliario", "Juicios de desahucio", "Recuperación de propiedad", "Adquisición de propiedad", "Cumplimiento de contratos (compraventa, prestación de servicios, donación, comodato, mutuo, arrendamiento, etcétera)", "Elaboración de contratos", "Responsabilidad civil"],
  },
  {
    key: "mercantil",
    title: "Derecho mercantil",
    short: "Derechos de los consumidores, cobro de pagarés y facturas no pagadas, operaciones de crédito, contratos mercantiles.",
    items: ["Derechos de los consumidores", "Cobro de pagarés y facturas no pagadas", "Operaciones de crédito", "Contratos mercantiles", "Controversias entre bancos y cuentahabientes", "Pólizas de seguros"],
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    short: "Divorcio, pensión alimenticia, guarda y custodia de menores, régimen de visitas, sucesiones.",
    items: ["Divorcio", "Pensión alimenticia", "Cancelación de pensión alimenticia", "Guarda y custodia de menores", "Régimen de visitas y convivencias", "Reconocimiento de paternidad", "Sucesión testamentaria", "Sucesión intestamentaria", "Juicios de interdicción", "Identidad de persona"],
  },
  {
    key: "amparo",
    title: "Juicio de amparo",
    short: "Amparo por violación a derechos humanos por parte de las autoridades locales y federales.",
    lead: "Promovemos juicio de amparo por violación a derechos humanos de nuestros clientes por parte de las autoridades locales y federales.",
  },
  {
    key: "laboral",
    title: "Derecho laboral",
    short: "Despido injustificado, pago de prestaciones, indemnización constitucional, liquidaciones.",
    items: ["Despido injustificado", "Pago de prestaciones", "Indemnización constitucional", "Liquidaciones", "Declaración de beneficiarios de trabajador fallecido"],
  },
  {
    key: "ministerio-publico",
    title: "Diligencias en el Ministerio Público",
    short: "Asesoría jurídica ante el Ministerio Público, denuncias y querellas, comparecencias.",
    items: ["Asesoría jurídica ante el Ministerio Público", "Denuncias y querellas", "Comparecencias", "Devolución de bienes asegurados"],
  },
];

export const experience = "Un despacho jurídico con 10 años de experiencia en materia civil, mercantil, familiar y amparo.";
export const experienceMore = "Además, atendemos y brindamos asesoría legal en materia laboral y penal ante el Ministerio Público. Ofrecemos alternativas viables a nuestros clientes, como la mediación como solución de controversias.";
export const consult = { price: "$1,200", title: "Consulta y asesoría jurídica", detail: "Presencial o remota. Consulta personalizada con un costo accesible." };
