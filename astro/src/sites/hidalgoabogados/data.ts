// Todo el texto sale de hidalgoabogados.com.mx (Inicio, Firma, Especialistas en Materia Penal, Éxitos). Ver lista-2/52-hidalgoabogados/research.md.
export type Area = { key: string; title: string; text: string };

export const areas: Area[] = [
  { key: "defensa", title: "Defensa de personas investigadas", text: "Defensa en las distintas etapas del procedimiento penal; recursos de impugnación ordinarios y extraordinarios hasta el Juicio de Amparo." },
  { key: "victimas", title: "Asesoría jurídica de víctimas", text: "Asesores jurídicos de las víctimas en materia penal." },
  { key: "representacion", title: "Representación legal especializada", text: "Defensores y asesores jurídicos en las distintas etapas del procedimiento penal, ante autoridades federales y del fuero común." },
  { key: "compliance", title: "Criminal compliance", text: "Construcción de programas de cumplimiento a la ley penal: «un traje a la medida de la empresa, que reduzca los riesgos en el cumplimiento del objeto social de ésta»." },
  { key: "ejecucion", title: "Ejecución de sanciones penales", text: "Concesión de beneficios a personas con pena de prisión ante los Jueces de Ejecución de Sanciones Penales." },
  { key: "consultoria", title: "Consultoría y construcción de acuerdos", text: "Consultoría, construcción de acuerdos y litigio contencioso especializado (solución de conflictos)." },
];

export const stats = [
  { value: "+20", label: "años de experiencia" },
  { value: "1999", label: "fundación de la firma" },
];

export const statement = "Más de 20 años de experiencia, trayectoria académica y trato personal para ofrecer las mejores opciones en la solución de sus problemas.";
export const method = "Resolvemos a través del estudio, la búsqueda, el consenso y el trabajo en equipo.";
export const firm = [
  "Somos una firma fundada en 1999. Tenemos constituidas alianzas con firmas nacionales e internacionales, lo que nos permite tener presencia e intervención en varios lugares y especialidades jurídicas.",
  "Nuestro sello distintivo es el trato personalizado y la satisfacción de nuestros clientes (su tranquilidad).",
];
export const precedents = "Contamos con una diversidad de precedentes judiciales obtenidos bajo el patrocinio de esta firma, que nos han permitido obtener la libertad personal de quienes representamos.";

export const lawyer = {
  name: "Mtro. Gabriel Hidalgo Pastor",
  role: "Especialista en materia penal (defensor o asesor jurídico), docente, consultor y autor de programas de Criminal Compliance",
  education: [
    "Licenciatura en Derecho, titulado el 5 de noviembre de 1999",
    "Maestría en Derecho Penal",
    "Maestría en Ciencias Penales (titulado)",
    "Posgrado en litigación oral, Universidad Alberto Hurtado (Santiago de Chile)",
    "Especialidad en Sistema Acusatorio, Escuela Libre de Derecho",
    "Maestro en Política Criminal y Diplomado en Estrategias de Litigación en Juicios Orales, Universidad de Salamanca (España)",
    "Formación adicional en lavado de dinero, proceso penal, averiguación previa, criminalidad empresarial y Criminal Compliance",
  ],
};
