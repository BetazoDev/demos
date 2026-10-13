// Todo el texto sale de megoiabogados.com (Inicio, Servicios, Cursos, Agendar cita). El sitio no nombra abogados ni publica reseñas.
export type Area = { key: string; title: string; text: string; icon: string };

export const areas: Area[] = [
  { key: "administrativo", title: "Derecho administrativo", icon: "buildings", text: "Multas, requerimientos, visitas de inspección o vigilancia; impugnar actos de autoridad ante autoridad judicial para invocar su nulidad." },
  { key: "bancario", title: "Derecho bancario", icon: "bank", text: "Cargos, transferencias y cheques no reconocidos, robo de identidad, cheques falsos, seguros de daños o de vida, trámites ante CONDUSEF." },
  { key: "familiar", title: "Derecho familiar", icon: "users-three", text: "Divorcios, guarda y custodia, alimentos, patria potestad, testamentos, intestamentarios." },
  { key: "civil", title: "Derecho civil", icon: "file-text", text: "Responsabilidad civil, contratos, reivindicatorias, prescripción, propiedad." },
  { key: "mercantil", title: "Derecho mercantil", icon: "handshake", text: "Pagaré, créditos, ejecutivo mercantil, ordinario mercantil, juicio oral mercantil." },
  { key: "penal", title: "Derecho penal", icon: "gavel", text: "Robo, despojo, lesiones, homicidios, portación de armas de fuego." },
  { key: "laboral", title: "Derecho laboral", icon: "briefcase", text: "Despidos, liquidaciones, convenios, contratos individuales y colectivos." },
];

export const otros = [
  { key: "suscripcion", title: "Asesoría jurídica por suscripción mensual", icon: "phone-call", text: "Atención telefónica personal de un abogado, y presencial en la oficina, de lunes a viernes." },
  { key: "cursos", title: "Cursos y talleres", icon: "graduation-cap", text: "Actualización, estudio y seguimiento de temas de interés general para público, abogados y litigantes. El abogado estudiado es el mejor defensor." },
];

export const pillars = [
  { icon: "seal-check", title: "Honradez y lealtad a nuestros clientes", text: "Nuestros abogados se encuentran comprometidos con la ética y el profesionalismo." },
  { icon: "chats-circle", title: "Seguimiento oportuno a tu proceso", text: "Se brinda atención personalizada y seguimiento electrónico a tu asunto." },
  { icon: "shield-check", title: "Seguridad y confianza", text: "Nuestros servicios se otorgan bajo criterios de calidad y basados en los procesos legales previamente establecidos por la autoridad judicial." },
];
