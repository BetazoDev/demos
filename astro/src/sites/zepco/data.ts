import enrique from "./assets/enrique.jpg";
import luis from "./assets/luis.jpg";
import vladimir from "./assets/vladimir.jpg";
import haide from "./assets/haide.jpg";
import angel from "./assets/angel.jpg";

// Todo el texto sale de zepco.mx (Inicio y Equipo). El sitio no publica bios, aviso de privacidad ni horario.
export type Area = { key: string; title: string; text: string };

export const areas: Area[] = [
  { key: "inmobiliario", title: "Derecho Inmobiliario", text: "Asesoría legal integral en todas las etapas de proyectos inmobiliarios: desarrollos residenciales, comerciales, industriales y hoteleros." },
  { key: "propiedad-intelectual", title: "Propiedad Intelectual", text: "Protegemos marcas, patentes, derechos de autor y otros activos intangibles. Asesoramos tanto en la vía administrativa como judicial." },
  { key: "litigio", title: "Litigio en Materia Civil, Mercantil, Familiar y Corporativo", text: "Representación legal especializada en controversias patrimoniales, familiares y societarias." },
  { key: "estructuracion-corporativa", title: "Estructuración Corporativa", text: "Asesoramos a empresas e inversionistas en la creación de estructuras legales sólidas y eficientes, con atención especializada en proyectos con participación extranjera." },
  { key: "proteccion-patrimonial", title: "Protección Patrimonial", text: "Diseñamos estrategias legales para proteger su patrimonio, incluyendo capitulaciones, fideicomisos, testamentos y estructuras patrimoniales." },
];

export const tambien = "También: investigación de títulos de propiedad.";

export const equipo = [
  { name: "Enrique Esteban Zepeda Vázquez", role: "Socio Fundador", photo: enrique, alt: "Enrique Esteban Zepeda Vázquez, socio fundador, frente a un librero de tomos de leyes", pos: "50% 14%" },
  { name: "Luis Xavier Zepeda Vázquez", role: "Socio Fundador", photo: luis, alt: "Luis Xavier Zepeda Vázquez, socio fundador, de pie en su oficina", pos: "50% 14%" },
  { name: "Vladimir Torres Bueno", role: "Socio", photo: vladimir, alt: "Vladimir Torres Bueno, socio, en su oficina", pos: "50% 12%" },
  { name: "Haidé Arteaga Prado", role: "Abogada Litigante", photo: haide, alt: "Haidé Arteaga Prado, abogada litigante, en su oficina", pos: "50% 14%" },
];

export const photos = { angel };

export const texto = {
  lede: "Con más de 50 años de experiencia asesorando, protegiendo y representando a nuestros clientes.",
  bienvenida: [
    "La fundación de Zepeda & Torres se remonta al año de 1975, formalmente bajo el nombre de Bufete Zepeda Trujillo, a partir del cual comienza a prestar servicios profesionales de abogacía, tanto en su aspecto de asesoría en materia de planeación legal, negociaciones, contrataciones e investigaciones, como de litigio.",
    "Nuestro equipo cuenta con amplia experiencia en la planeación legal de proyectos inmobiliarios y corporativos, tanto a nivel nacional como internacional, incluyendo jurisdicciones de Common Law.",
  ],
  representamos: "Representamos a empresas, inversionistas y personas físicas en la toma de decisiones clave, mitigando riesgos legales y resolviendo controversias con soluciones innovadoras. Nuestra firma destaca por su enfoque multidisciplinario y por defender los intereses de nuestros clientes ante todas las instancias, con respaldo de una red internacional de despachos aliados.",
  excelencia: "Brindamos claridad, seguridad y compromiso en cada asunto legal. Nuestra experiencia y enfoque especializado nos convierten en un aliado confiable para empresas, inversionistas y particulares.",
  equipoLede: "Desde 1975, hemos formado un equipo sólido y multidisciplinario que combina experiencia, colaboración y altos estándares de calidad para brindar un servicio legal confiable y comprometido en cada asunto.",
  contacto: "Para contactarnos, llena el formulario y nos pondremos en contacto a la brevedad o bien llama al +52 (55) 5260 6244 ext. 0.",
};

export const valores = [
  { q: "Equipo Especializado", a: "Abogados altamente capacitados, lo que nos permite ofrecer soluciones jurídicas integrales, precisas y estratégicas." },
  { q: "Experiencia y Trayectoria", a: "Con más de 50 años de práctica jurídica, hemos acompañado a empresas, inversionistas y particulares en sus operaciones." },
  { q: "Compromiso y Responsabilidad", a: "Atendemos cada caso con atención personalizada. Nos involucramos a fondo, y proponemos soluciones profesionales." },
];

export const stats = [
  { value: "+50", label: "años de experiencia" },
  { value: "1975", label: "año de fundación" },
];
