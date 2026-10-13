import hero from "./assets/hero-kintsugi.jpg";
import lluvia from "./assets/ventana-lluvia.jpg";

// Todo el texto sale de fidemabogados.com.mx (inicio) y de las capturas de Wayback de 2021 de sus subpáginas, hoy en 404
// (Nosotros, Litigio especializado en materia de daños, Gastos del juicio, Contacto).
export type Tipo = { key: string; title: string; text: string };

export const tipos: Tipo[] = [
  { key: "hechos-delictuosos", title: "Daño moral por hechos delictuosos", text: "Muerte de un ser querido imputable a un tercero; afectación a la integridad corporal." },
  { key: "actividades-periodisticas", title: "Daño moral por actividades periodísticas", text: "Sátira; hechos actuales; personas públicas." },
  { key: "propiedad-intelectual", title: "Daños derivados de la propiedad intelectual", text: "Derecho de autor; patentes; marcas." },
  { key: "animales-peligrosos", title: "Daños generados por animales peligrosos", text: "Animales domésticos; silvestres propiedad de particulares; en zoológicos o circos." },
  { key: "turismo-riesgoso", title: "Daños por actividades turísticas riesgosas", text: "Tirolesas, paracaidismo, parapente, rapel." },
  { key: "medicamentos", title: "Efectos secundarios de medicamentos", text: "Medicamentos farmacéuticos y «milagro»." },
  { key: "privacidad", title: "Daños relacionados con la privacidad", text: "Uso no autorizado de imagen; divulgación de información privada en medios o internet; intromisión en la vida privada." },
  { key: "incumplimiento-contractual", title: "Incumplimiento de las relaciones contractuales", text: "Paquetes de bodas y eventos especiales, agencias de viajes, servicios funerarios, despidos injustificados, negligencia de profesionistas." },
  { key: "integridad-psiquica", title: "Afectación de la integridad psíquica", text: "Hostigamiento laboral y escolar; afectación al honor, la reputación, los sentimientos o los afectos." },
  { key: "cosas-peligrosas", title: "Daños derivados de cosas que generan peligro", text: "Productos químicos nocivos o defectuosos, sustancias peligrosas, vehículos y máquinas peligrosas, fallas de juegos mecánicos, incendios, explosiones." },
  { key: "mala-practica", title: "Mala práctica profesional", text: "Negligencia médica, negación de atención médica, malas cirugías, malos diagnósticos y tratamientos." },
  { key: "entidades-gobierno", title: "Daños ocasionados por entidades del gobierno", text: "Actividad administrativa irregular; hechos imputables a servidores públicos; errores judiciales; privación de la libertad." },
];

export const definicion = "Es la afectación que una persona sufre en sus sentimientos, afectos, creencias, decoro, honor, reputación, vida privada, configuración y aspecto físicos, o bien en la consideración que de sí misma tienen los demás.";
export const indemnizacion = "Nuestro despacho ofrece defensa especializada en tribunales para obtener la justa indemnización por los daños que nuestros clientes sufran en diversos rubros de su vida.";
export const gastos = "El despacho valora cada caso en particular y puede hacerse cargo de los gastos necesarios para llevar los juicios hasta obtener la justa indemnización: emplazamientos, pruebas periciales, copias, transporte y viáticos, etcétera.";

export const photos = { hero, lluvia };
export const waLink = (intro: string) => `https://wa.me/525546036101?text=${encodeURIComponent(intro)}`;
