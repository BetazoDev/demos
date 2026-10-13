import arco from "./assets/arco-madrid.jpg";
import fachada from "./assets/fachada-madrid-hora-azul.jpg";
import madrid from "./assets/madrid-atardecer.jpg";
import equipo from "./assets/equipo-2026.jpg";
import ainhoaDesk from "./assets/ainhoa-manero-escritorio.jpg";

export { team } from "./team";
export { guide, routes } from "./nacionalidad";
export const photos = { arco, fachada, madrid, equipo, ainhoaDesk };

export const intro = {
  hero: "¿Quieres vivir en España? Te ayudamos a gestionar tu visado desde México.",
  statement: "Ofrecemos asesoramiento especializado tanto a empresas como a particulares en trámites de nacionalidad española, permisos de trabajo, visados de estudiante y residencia no lucrativa.",
  about: "Bienvenidos a Sterna Abogados, su despacho de referencia en Madrid para asuntos de extranjería e inmigración. Nuestro equipo de expertos utiliza tecnología de vanguardia para garantizar un servicio eficiente y personalizado.",
  mission: "Nuestra misión es centrarnos en cada uno de nuestros clientes y en sus objetivos para poder proveer el mejor servicio posible.",
  why: ["Evaluación personalizada", "Acompañamiento continuo", "Representación legal ante las autoridades migratorias"],
};

// Servicios de la versión México del sitio. Solo la nacionalidad tiene página propia (texto suficiente).
export type Service = { key: string; title: string; text: string; href?: boolean };
export const services: Service[] = [
  { key: "nacionalidad-espanola", title: "Nacionalidad española", text: "Gestión personalizada para adquirir la ciudadanía española (por residencia, por opción, por simple presunción, hijos menores, Ley de Memoria Democrática, demanda contenciosa-administrativa).", href: true },
  { key: "nomada-digital", title: "Nómada digital", text: "Trámites especializados para nómadas digitales: residencia inicial de tres años renovable, con ingresos mínimos de 2,500 € al mes y empresa con al menos un año." },
  { key: "estudiantes", title: "Estudiantes", text: "Asistencia en la obtención de visas de estudio en España; el permiso puede solicitarse desde España en los primeros 60 días." },
  { key: "permisos-de-trabajo", title: "Permisos de trabajo", text: "Orientación para conseguir permisos de trabajo para extranjeros." },
  { key: "larga-duracion", title: "Permiso de larga duración", text: "Asesoría en permisos para estancias prolongadas en España." },
  { key: "familias", title: "Tarjeta de residencia para familias", text: "Gestión de residencia para familias de residentes en España." },
  { key: "renovacion", title: "Renovación de residencia", text: "Servicios para la renovación de tarjetas de residencia." },
  { key: "arraigo", title: "Arraigo", text: "Asesoramiento para obtener la residencia por arraigo en España, ya sea social, laboral o familiar." },
  { key: "no-lucrativa", title: "Residencia no lucrativa", text: "Ayuda en solicitudes de residencia sin actividad laboral." },
  { key: "empresas", title: "Servicios para empresas", text: "Traslado intraempresarial, permisos para profesionales altamente cualificados y emprendedores, contratación de empleados extranjeros." },
];

export const offices = [
  { city: "Ciudad de México", label: "Despacho México", address: "Plaza de la República #55, despacho 101, colonia Tabacalera, Alcaldía Cuauhtémoc, C.P. 06030", phone: "+52 55 8957 7743", tel: "+525589577743" },
  { city: "Madrid", label: "Sede Madrid", address: "Calle de Orense 33, 1ªA, C.P. 28020", phone: "+34 911 270 920", tel: "+34911270920" },
  { city: "Valencia", label: "Oficina Valencia", address: "Avda. del Oeste, 50-1ª, 46001" },
];

export const reviews = {
  rating: 4.2,
  count: 197,
  quotes: [
    { text: "Estamos muy agradecidos con la gestión tan profesional y amable de Marta y su equipo de Sterna durante todo nuestro proceso para obtener la residencia española. El equipo de profesionales estuvo siempre pendiente del proceso y esto se reflejó en la agilidad de nuestra gestión.", author: "Maria Eugenia Serrano" },
    { text: "Muy satisfecho por haber trabajado con el equipo de Sterna. El equipo siempre mostró gran interés, flexibilidad y conocimiento en el proceso. No hubo ambigüedad, solamente hitos que completar y así obtuve la resolución de mi residencia en España en un tiempo muy cercano al que se me mencionó inicialmente. Altamente recomendados.", author: "David Rascon" },
    { text: "Quiero dejar este review para expresar mi más sincero agradecimiento a Sterna Abogados y, especialmente, a Andrés Fermín por la excelente atención y el apoyo que nos brindaron durante todo el proceso de obtención de la nacionalidad y el pasaporte Español.", author: "Emilio Adell" },
    { text: "Muy agradecida y muy contenta con Sterna Abogados. Marta y Tomas realizan un excelente trabajo 150% recomendados en cualquier tramite migratorio para España, siempre atentos, organizados y puntuales.", author: "Monica Lopez" },
  ],
};

export const serviceNames = services.map((s) => s.title);
