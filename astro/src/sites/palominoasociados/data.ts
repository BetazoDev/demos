// Todo el texto sale de palominoasociados.com (inicio, asesoría, servicios legales) y de su ficha de Google.
export type Area = { key: string; title: string; icon: string; items: string[]; lede?: string; related: string[] };

export const areas: Area[] = [
  { key: "penal", title: "Derecho penal", icon: "gavel", items: ["Denuncias", "Asesoría jurídica a víctima", "Representación en el Ministerio Público", "Defensa penal", "Prevención a delitos", "Representación en juicio"], related: ["amparo", "responsabilidades", "familiar"] },
  { key: "laboral", title: "Derecho laboral", icon: "briefcase", items: ["Despidos", "Reparto de utilidades", "Liquidaciones", "Reinstalación", "Renuncias", "Elaboración de contratos laborales"], related: ["seguridad-social", "issste", "amparo"] },
  { key: "polizas", title: "Pólizas jurídicas", icon: "shield-check", lede: "Le apoyamos con seguros jurídicos empresariales e individuales, además de pólizas de arrendamiento.", items: ["Póliza de arrendamiento", "Seguro jurídico empresarial", "Seguro jurídico individual"], related: ["civil", "mercantil"] },
  { key: "migratorio", title: "Derecho migratorio", icon: "airplane-tilt", items: ["Naturalizaciones", "Visas de trabajo", "Residencias temporales y permanentes", "Regularización de estatus migratorio", "Certificación y apostillado de documentos"], related: ["notariales", "civil"] },
  { key: "responsabilidades", title: "Responsabilidades administrativas de servidores públicos", icon: "buildings", items: ["Procedimiento de responsabilidad", "Procedimiento resarcitorio ante la Auditoría Superior de la Federación", "Defensa ante órgano interno de control"], related: ["penal", "amparo"] },
  { key: "issste", title: "Pensiones ISSSTE", icon: "identification-card", items: ["Incremento de pensión", "Ajuste de UMAS a salario mínimo", "Demanda por descuentos incorrectos", "Incompatibilidad y negativa de pensión"], related: ["seguridad-social", "laboral", "amparo"] },
  { key: "civil", title: "Derecho civil", icon: "house-line", items: ["Arrendamiento inmobiliario", "Problemas de propiedad", "Prescripción", "Compraventas", "Cumplimiento e incumplimiento de contrato", "Medios preparatorios"], related: ["notariales", "mercantil", "polizas"] },
  { key: "mercantil", title: "Derecho mercantil", icon: "handshake", items: ["Pagarés", "Representación en CONDUSEF", "Cobros indebidos de tarjetas", "Cheques devueltos y robados", "Títulos de crédito", "Recuperación de cartera"], related: ["civil", "amparo", "polizas"] },
  { key: "familiar", title: "Derecho familiar", icon: "users-three", items: ["Divorcio exprés", "Testamentos y herencias", "Pensión alimentaria", "Guarda y custodia", "Reconocimiento de paternidad", "Patria potestad"], related: ["notariales", "civil", "amparo"] },
  { key: "amparo", title: "Amparo", icon: "scales", items: ["Amparo civil", "Amparo penal", "Amparo laboral", "Amparo administrativo", "Amparo familiar"], related: ["penal", "laboral", "civil"] },
  { key: "seguridad-social", title: "Seguridad social", icon: "first-aid-kit", items: ["Jubilaciones", "Pensiones", "Modalidad 40", "Pensiones por viudez y orfandad"], related: ["issste", "laboral"] },
  { key: "notariales", title: "Trámites notariales", icon: "stamp", items: ["Escrituraciones", "Testamentos", "Fe de hechos", "Copias certificadas", "Poderes notariales", "Protocolización de actas", "Constitución de sociedades"], related: ["civil", "familiar", "mercantil"] },
];

export const process = [
  "Agendemos una cita para asesorarle de manera personal con uno de nuestros abogados.",
  "Recibirá la mejor representación legal y acompañamiento en el proceso de resolución de su conflicto.",
];

// Reseñas de Google citadas tal como aparecen (se omiten las que nombran a personas del despacho y la reseña crítica).
export const reviews = [
  { text: "Excelente despacho jurídico, conformado de abogados muy profesionales y con años de experiencia, perfecto dominio de varias ramas del derecho, siempre comprometidos y desempeñándose honestamente.", author: "Miguel Avila", when: "2021" },
  { text: "Un excelente trato y lo más importante compromiso del abogado con el caso, así como la claridad con la que explica los procedimientos legales. Mi reconocimiento para el despacho.", author: "Olvido Alvarez", when: "hace 2 años" },
  { text: "Definitivamente los mejores abogados en todas las áreas. Puedes estar totalmente tranquilo que llevarán tu caso con ética y responsabilidad. Humanos y sobre todo 100% confiables.", author: "Nancy García", when: "2023" },
  { text: "Excelente servicios, muy claro todo desde el inicio y muy buenos resultados. Muchas gracias por todo excelentes abogados!", author: "Red Educativa MH", when: "2023" },
  { text: "Toda la confianza en este despacho donde coinciden profesionales serios y honestos, sus logros son frecuentes un espacio de confiabilidad", author: "ROSALVA MUSIÑO", when: "2024" },
];

export const serviceSchema = (a: Area, origin: URL | undefined) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: a.title,
  description: `${a.title}: ${a.items.join(", ").toLowerCase()}.`,
  provider: { "@id": new URL("/palominoasociados#organizacion", origin).href },
  areaServed: "Ciudad de México",
});
