// Servicios de Lozano Guzmán Abogados. Fuente: abogadoscdmx.com.mx/servicios/* (12 páginas). Listas condensadas, sin añadir servicios.
// lead: texto introductorio propio del sitio donde existe (laboral, penal, notariales); en las demás es una enumeración de sus propias listas.
export type Area = { key: string; short: string; summary: string; title: string; icon: string; lead: string; body?: string; itemsTitle: string; items: string[] };

const T = "Algunos de nuestros servicios";

export const areas: Area[] = [
  {
    key: "laboral", summary: "Despidos injustificados; recuperación de Afore y fondo de vivienda; pensiones por accidente laboral y riesgo de trabajo; convenios y liquidaciones; juicios para burócratas del Estado de México; asuntos ante juntas locales, federales y Tribunal Federal del Trabajo.", short: "Laboral", title: "Asesoría legal en materia laboral", icon: "hard-hat",
    lead: "Una de las principales tareas de nuestro despacho en temas de trabajo es vigilar que se aplique la justicia laboral con respeto a las conquistas laborales de los trabajadores.",
    body: "Nuestra firma está al corriente en las reformas en materia laboral, que tienen como propósito que la justicia laboral para los trabajadores del país sea más rápida y eficaz, al quedar a cargo de los Poderes Judiciales Federal y estatales, con un trámite más breve: de un promedio de cuatro años a seis meses aproximadamente para obtener una sentencia definitiva.",
    itemsTitle: T,
    items: ["Juicios especializados en derecho laboral para burócratas del Estado de México", "Asuntos ante juntas locales, federales y Tribunal Federal del Trabajo, patrocinando los intereses del sector privado, de organismos descentralizados del sector público, ayuntamientos y particulares", "Despidos injustificados", "Recuperación de Afore y fondo de vivienda", "Pensiones por accidente laboral y riesgo de trabajo", "Celebración de convenios y liquidaciones"],
  },
  {
    key: "penal", summary: "Denuncias y querellas; juicios orales; trámite de libertad del detenido en sede ministerial y judicial las 24 horas, los 365 días del año; asesor jurídico de la víctima; liberación de bienes asegurados; beneficios de preliberación.", short: "Penal", title: "Asesoría legal en materia penal", icon: "gavel",
    lead: "Nuestra firma se aboca a frenar abusos, proteger al inocente, defender los derechos de cualquier persona a la que se le imputa un delito, así como acompañar a la víctima para que sea reparada del daño y que su agresor no quede impune.",
    itemsTitle: T,
    items: ["Presentación de denuncias o querellas ante el ministerio público", "Especialista en juicios orales", "Trámite de la libertad del detenido en sede ministerial y judicial, las 24 horas, los 365 días del año", "Asesor jurídico de la víctima de un delito", "Liberación de bienes asegurados (vehículos, cuentas bancarias, inmuebles)", "Beneficios de preliberación para los reos que cumplen una sentencia"],
  },
  {
    key: "familiar", summary: "Divorcio (express, incausado, voluntario y administrativo); guarda y cuidado; convivencias; pérdida de patria potestad; pensión alimenticia; violencia intrafamiliar y medidas de protección; sucesorios; concubinato; testamentos; reconocimiento de paternidad; adopción.", short: "Familiar", title: "Asesoría legal en materia familiar", icon: "users-three",
    lead: "Divorcio, guarda y cuidado, convivencias, pensión alimenticia, violencia intrafamiliar, sucesiones, reconocimiento de paternidad y adopción.",
    itemsTitle: T,
    items: ["Divorcio (express, incausado, voluntario y administrativo)", "Guarda y cuidado", "Convivencias", "Pérdida de patria potestad", "Pensión alimenticia", "Violencia intrafamiliar y medidas de protección", "Juicios sucesorios intestamentarios", "Concubinato", "Testamentos", "Corrección de actas", "Reconocimiento de paternidad", "Adopción", "Liquidación de sociedad conyugal", "Nulidad de actas"],
  },
  {
    key: "civil", summary: "Elaboración y revisión de contratos; regularización de propiedad judicial y notarial; desocupación por inquilino moroso; juicio reivindicatorio; escrituración; disolución de copropiedad; responsabilidad civil.", short: "Civil", title: "Asesoría legal en materia civil", icon: "scroll",
    lead: "Contratos, regularización de la propiedad, desocupación por inquilino moroso, escrituración y responsabilidad civil.",
    itemsTitle: T,
    items: ["Elaboración y revisión de contratos", "Regularización de propiedad judicial y notarial", "Desocupación por inquilino moroso", "Juicio reivindicatorio", "Escrituración", "Disolución de copropiedad", "Terminación y cumplimiento de contratos", "Responsabilidad civil"],
  },
  {
    key: "notariales", summary: "Convenios con notarías del Estado de México y de la Ciudad de México: fusión de predios, usucapión, cesión de derechos, poderes, constitución de sociedad, fe de hechos, compraventas, régimen en condominio, escrituraciones, herencias.", short: "Trámites notariales", title: "Trámites notariales", icon: "stamp",
    lead: "Contamos con convenios con notarías tanto del Estado de México como de la Ciudad de México.",
    itemsTitle: T,
    items: ["Fusión de predios", "Usucapión", "Cesión de derechos", "Poderes", "Constitución de sociedad", "Fe de hechos", "Compraventas", "Régimen en condominio", "Escrituraciones", "Herencias"],
  },
  {
    key: "corporativa", summary: "Asesoría a PyMEs desde su constitución; actas de asamblea; reestructuración, fusión y liquidación; permisos, licencias y concesiones; due diligence; patentes y derechos de autor; contratos.", short: "Corporativa", title: "Asesoría legal en materia corporativa", icon: "buildings",
    lead: "Asesoría a PyMEs desde su constitución: creación y reestructuración de empresas, actas de asamblea, permisos y contratos.",
    itemsTitle: T,
    items: ["Asesoría a PyMEs desde su constitución", "Actas de asamblea", "Reestructuración, fusión y liquidación de empresas", "Permisos, licencias y concesiones", "Due diligence", "Patentes y derechos de autor", "Contratos"],
  },
  {
    key: "mercantil", summary: "Juicios orales mercantiles; cobro judicial de facturas, cheques, pagarés; recuperación de cartera vencida de instituciones financieras; providencias precautorias; comercio digital; juicio especial hipotecario.", short: "Mercantil", title: "Asesoría legal en materia mercantil", icon: "storefront",
    lead: "Juicios orales mercantiles, cobro judicial de títulos de crédito y recuperación de cartera vencida.",
    itemsTitle: T,
    items: ["Juicios orales mercantiles", "Cobro judicial de facturas, cheques y pagarés", "Juicios contra aseguradoras y afianzadoras", "Recuperación de cartera vencida de instituciones financieras", "Providencias precautorias", "Comercio digital", "Juicio especial hipotecario"],
  },
  {
    key: "fiscal", summary: "Defensa del contribuyente en auditorías; recursos de inconformidad, revocación y revisión; juicio de nulidad; procedimientos administrativos de ejecución; devolución de impuestos; firma electrónica; recurso ante el IMSS.", short: "Fiscal", title: "Asesoría legal en materia fiscal", icon: "calculator",
    lead: "Defensa del contribuyente en auditorías, recursos de inconformidad, juicio de nulidad y devolución de impuestos.",
    itemsTitle: T,
    items: ["Defensa del contribuyente en auditorías", "Recursos de inconformidad, revocación y revisión", "Juicio de nulidad", "Procedimientos administrativos de ejecución", "Devolución de impuestos", "Firma electrónica", "Nómina", "Recurso ante el IMSS"],
  },
  {
    key: "inmobiliaria", summary: "Recuperar o regularizar inmuebles; pólizas jurídicas de renta; avalúos; trámites en Registro Público y Catastro; licencias y permisos (uso de suelo, construcción, demolición, funcionamiento, lotificación).", short: "Inmobiliaria", title: "Asesoría legal en materia inmobiliaria", icon: "house-line",
    lead: "Recuperar o regularizar inmuebles, pólizas jurídicas de renta, avalúos y trámites ante el Registro Público y Catastro.",
    itemsTitle: T,
    items: ["Recuperar o regularizar inmuebles", "Pólizas jurídicas de renta", "Avalúos", "Trámites en Registro Público y Catastro", "Licencias y permisos: uso de suelo, construcción, demolición, funcionamiento y lotificación"],
  },
  {
    key: "amparo", summary: "Amparo contra órdenes de aprehensión, desalojos, embargos, inmovilización de cuentas, arrestos administrativos, multas y clausuras, destituciones de servidores públicos, negativa de medicamentos en hospitales públicos.", short: "Amparo", title: "Asesoría legal en materia de amparo", icon: "shield-check",
    lead: "Amparo contra actos de autoridad: órdenes de aprehensión, desalojos, embargos, inmovilización de cuentas, multas y clausuras.",
    itemsTitle: T,
    items: ["Amparo contra órdenes de aprehensión", "Amparo contra desalojos y embargos", "Amparo contra inmovilización de cuentas", "Amparo contra arrestos administrativos", "Amparo contra multas y clausuras", "Amparo contra destituciones de servidores públicos", "Amparo por negativa de medicamentos en hospitales públicos"],
  },
  {
    key: "administrativa", summary: "Defensa en procedimientos sancionadores; juicio de nulidad; Condusef y seguros; cargos no reconocidos; infracciones de tránsito; verificaciones, multas y clausuras; afirmativas y negativas fictas.", short: "Administrativa", title: "Asesoría legal en materia administrativa y ante autoridades administrativas", icon: "bank",
    lead: "Defensa en procedimientos sancionadores, juicio de nulidad, Condusef, Profeco, seguros y cargos no reconocidos.",
    itemsTitle: T,
    items: ["Defensa en procedimientos sancionadores municipales, estatales y federales", "Juicio de nulidad", "Condusef y seguros", "Profeco", "Cargos no reconocidos", "Infracciones de tránsito", "Verificaciones, multas y clausuras", "Uso de suelo y establecimientos mercantiles", "Afirmativas y negativas fictas"],
  },
  {
    key: "medios-alternativos", summary: "Mediación, negociación y convenios ante PROFECO, Centros de Justicia Alternativa y CONAMED.", short: "Medios alternativos de solución de controversias", title: "Asesoría en materia de medios alternativos de solución a las controversias", icon: "handshake",
    lead: "Mediación, negociación y convenios ante PROFECO, los Centros de Justicia Alternativa y CONAMED.",
    itemsTitle: T,
    items: ["Mediación", "Negociación", "Convenios ante PROFECO", "Convenios ante Centros de Justicia Alternativa", "Convenios ante CONAMED"],
  },
];
