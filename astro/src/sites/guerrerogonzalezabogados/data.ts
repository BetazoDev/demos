// Todo el texto sale de guerrerogonzalezabogados.com (secciones Despacho, Áreas de práctica y Contacto). Ver lista-2/46-guerrerogonzalezabogados/research.md.
export type Area = { key: string; title: string; text: string };

export const areas: Area[] = [
  { key: "bancario", title: "Bancario", text: "Asistencia en la preparación y negociación de contratos de crédito, incluyendo financiamientos estructurados, compras apalancadas y bursatilizaciones." },
  { key: "contratacion-gubernamental", title: "Contratación gubernamental, energía y privatizaciones", text: "Estructurar el esquema para la licitación y contratación con el Gobierno Mexicano: revisión de bases, propuestas técnicas y económicas, empresas de propósito específico, juntas aclaratorias, contratos administrativos, concesiones, autorizaciones y permisos; litigio administrativo." },
  { key: "fusiones-y-adquisiciones", title: "Fusiones y adquisiciones", text: "Operaciones en una gran variedad de industrias, desde la planeación, auditorías y preparación contractual hasta la negociación y asuntos posteriores al cierre." },
  { key: "inmobiliario", title: "Inmobiliario y arrendamientos", text: "Adquisición, transferencia, registro y gravámenes de inmuebles (hipotecas, servidumbres, arrendamientos, fideicomisos), contratos de construcción y arrendamientos para arrendadores y arrendatarios, desarrolladores, inversionistas y entidades gubernamentales; operaciones en zona prohibida, uso de suelo y zonificación." },
  { key: "inversion-extranjera", title: "Inversión extranjera", text: "Asistencia a empresas extranjeras para obtener las autorizaciones necesarias para operar en México, por inversión directa o indirecta. Muchos de nuestros clientes son inversionistas extranjeros." },
  { key: "litigio", title: "Litigio, arbitraje y mediación", text: "Litigios mercantiles ante tribunales locales y federales (ejecución de laudos y resoluciones extranjeras, medidas cautelares, conflictos de accionistas, concursos, construcción, bancaria y valores) y litigio administrativo (competencia económica, protección al consumidor, salud, obras públicas, expropiaciones)." },
  { key: "corporativo", title: "Práctica corporativa general", text: "Constitución, operación y liquidación de sociedades mercantiles y asociaciones en participación; auditorías legales en adquisiciones, fusiones e inversiones; defensa ante tomas hostiles y litigio corporativo entre accionistas o socios." },
  { key: "quiebras", title: "Quiebras y concursos mercantiles", text: "Solución de problemas de derechos de acreedores en la fase de conciliación o en el procedimiento de quiebra, con práctica de litigio para ejecutar sus derechos." },
];

export const values = ["Confianza", "Compromiso", "Eficacia", "Ética"];

export const about = [
  "Guerrero González Abogados fue fundado como un despacho de servicios legales integrales. Nuestro despacho se encuentra conformado por destacados abogados en el ejercicio profesional.",
  "Nuestros abogados están conscientes de mantener una constante actualización jurídica a fin de hacer frente a los retos económicos y financieros. La estrecha comunicación e interrelación con nuestros clientes es para nosotros de gran importancia para obtener resultados exitosos.",
  "Hemos establecido sólidas relaciones con diversas firmas legales a lo largo del mundo, con las que hemos realizado un gran número de transacciones internacionales, y contamos con una amplia red de despachos en todo el país.",
  "Desde sus inicios, el despacho ha mantenido en todas sus áreas de práctica los estándares más altos de calidad y ética.",
];

export const commitment = {
  lead: "Prestar los mejores servicios legales, basados en la atención personalizada a cada uno de nuestros clientes en cualquier momento.",
  rest: "En Guerrero González Abogados, S.C., comprendemos tanto el negocio de nuestros clientes como a ellos mismos.",
};
