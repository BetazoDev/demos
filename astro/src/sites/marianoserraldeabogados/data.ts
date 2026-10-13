import capitel from "./assets/capitel-columna.jpg";
import torre from "./assets/torre-polanco-fachada.jpg";

export const photos = { capitel, torre };

export const intro = {
  title: "Servicios legales en defensa de tus intereses",
  lede: "Firma legal especializada en el rubro corporativo, brindamos asesoría y representación laboral, civil, mercantil, propiedad industrial y derechos de autor.",
  statement: "Contamos con una amplia gama de servicios que cubren las distintas necesidades legales de nuestros clientes.",
};

// Áreas de práctica con las palabras del despacho (Facebook, YouTube, Instagram y capturas de su sitio anterior).
export type Area = { key: string; title: string; text: string };
// Lista oficial vigente: laboral, civil, mercantil, propiedad industrial y derechos de autor, con «corporativo» como especialidad.
export const main: Area[] = [
  { key: "corporativo", title: "Corporativo", text: "Servicios legales integrales para corporativos: asesoría y representación integral en las áreas relacionadas con la actividad comercial y de negocios de los clientes, y documentación societaria (cambios en la participación de los socios)." },
  { key: "civil-mercantil", title: "Civil y mercantil", text: "Asesoría y defensa legal en materia civil. Asesoría y representación en materia mercantil." },
  { key: "laboral", title: "Laboral", text: "Representación y defensa laboral a corporativos y trabajadores: indemnización constitucional por despido injustificado, rescisión de relaciones laborales, riesgos y accidentes de trabajo, aguinaldo y prima vacacional, conciliación." },
  { key: "propiedad-industrial", title: "Propiedad industrial y derechos de autor", text: "Protege la originalidad y uso de tus obras, creaciones, invenciones, marcas y patentes: registro de patente, marca o modelo de utilidad, y protección de obras literarias, musicales, cinematográficas y de cómputo." },
];
export const others: Area[] = [
  { key: "seguridad-social", title: "Seguridad social (IMSS e ISSSTE)", text: "Afíliate o continúa voluntariamente ante el IMSS o el ISSSTE. Cotizar o recuperar derechos en el IMSS." },
  { key: "familiar", title: "Familiar", text: "Divorcio, alimentos, guarda y custodia, régimen de convivencia, pérdida de patria potestad y planeación patrimonial." },
  { key: "administrativo-amparo", title: "Administrativo y amparo", text: "Trámites en materia administrativa y amparo; impugnación de actos de autoridad ante el Tribunal Federal de Justicia Administrativa." },
  { key: "migratorio", title: "Migratorio", text: "Planeación para contratar personal extranjero y evitar contingencias." },
  { key: "penal", title: "Acompañamiento penal", text: "Seguimiento y ampliación de denuncias en Fiscalía: presencia y seguimiento constante." },
];
export const allAreas = [...main, ...others];

export const reviews = {
  rating: 5.0,
  count: 5,
  quotes: [
    { text: "Muy transparente al explicar el Licenciado Mariano.", author: "Kenia Serrano" },
    { text: "Licenciados muy puntuales en su trabajo, gracias.", author: "Daniel Ferrer" },
    { text: "Muy atento el lic.", author: "Mosqueda Javier (Mosco)" },
    { text: "Buen trabajo Lic.", author: "Eduardo M" },
    { text: "Muy bien.", author: "Jose Manuel Islas Sanchez" },
  ],
};

export const serviceNames = allAreas.map((a) => a.title);
