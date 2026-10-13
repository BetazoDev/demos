import estatua from "./assets/justicia-estatua.jpg";
import calle from "./assets/calle-roma-norte.jpg";

// Las siete áreas con la descripción que el propio sitio publica en su Inicio (abogadosencdmx.com), y los seis servicios que enlista.
export type Area = { key: string; title: string; lead: string };

export const areas: Area[] = [
  { key: "familiar", title: "Derecho familiar", lead: "Divorcios, custodia, pensión alimenticia y violencia familiar." },
  { key: "penal", title: "Derecho penal", lead: "Defensa penal, amparos, recursos y asesoría a víctimas." },
  { key: "civil", title: "Derecho civil", lead: "Contratos, daños, responsabilidad civil y sucesiones." },
  { key: "corporativo", title: "Derecho corporativo", lead: "Constitución de sociedades, fusiones y compliance." },
  { key: "inmobiliario", title: "Derecho inmobiliario", lead: "Compraventa, arrendamiento y regularización de propiedad." },
  { key: "migratorio", title: "Derecho migratorio", lead: "Visas, residencia temporal y permanente, naturalización." },
  { key: "laboral", title: "Derecho laboral", lead: "Despidos, liquidaciones, demandas y acoso laboral." },
];

export const servicios = ["Asesoría legal inicial", "Representación en tribunales", "Negociación y mediación", "Gestión documental", "Consultoría preventiva", "Seguimiento post-resolución"];

export const photos = { estatua, calle };
