// Todo el texto sale de calizsosaabogados.com y calizsosaabogados.com.mx (servicios, acerca de, banners) y de su ficha de Google.
export const areas = [
  {
    key: "inmobiliario",
    title: "Derecho inmobiliario",
    lead: "Asesoría e inicio de procedimientos para regularizar o recuperar una propiedad.",
    items: ["Juicios de arrendamiento", "Juicio reivindicatorio", "Juicio de otorgamiento y firma de escritura", "Juicio de prescripción", "Cancelación de hipoteca", "Juicios sucesorios", "Elaboración y revisión de contratos de compraventa y arrendamiento"],
  },
  {
    key: "familiar",
    title: "Derecho familiar",
    lead: "Asesoría y patrocinio en juicio.",
    items: ["Juicio de divorcio", "Juicio de pensión alimenticia", "Juicio de guarda y custodia", "Régimen de visitas"],
  },
  {
    key: "corresponsalia",
    title: "Corresponsalía jurídica y trámites ante dependencias",
    lead: "Apoyo a despachos y abogados foráneos en juzgados, dependencias y empresas de la Ciudad de México.",
    items: ["Presentación de escritos en juzgados y dependencias", "Presentación y seguimiento a exhortos", "Audiencias y comparecencias en juzgados", "Presentación de oficios", "Investigación de inmuebles y constancias y búsquedas en el Registro Público de la Propiedad y de Comercio", "Revisión de acuerdos en expedientes autorizados", "Trámite de copias certificadas"],
  },
] as const;

// Preguntas y respuestas de los banners del propio sitio, puestas en usted.
export const situaciones = [
  { q: "¿Su inquilino le adeuda pago de rentas o abandonó el inmueble sin desocuparlo completamente?", a: "Le ayudamos a cobrar y recuperar su inmueble." },
  { q: "¿Alguien ocupa indebidamente su inmueble?", a: "Le ayudamos a recuperarlo." },
  { q: "¿Compró un inmueble y el vendedor no quiere acudir a la notaría a firmar escrituras?", a: "Le ayudamos con el proceso judicial para que el vendedor acuda a la notaría." },
];

export const mision = "Ofrecer soluciones legales oportunas, humanas y bajo la perspectiva de que nuestros clientes y su patrimonio son nuestra prioridad.";
export const vision = "Posicionarnos como una de las principales firmas legales en el País, utilizando en nuestros servicios legales estrategias jurídicas adecuadas que nos permitan resolver los problemas de nuestros clientes de manera oportuna y eficaz.";
export const valores = [
  { title: "Servicio a cliente" },
  { title: "Trabajo en equipo" },
  { title: "Profesionalismo", text: "Respeto, honestidad, empatía y ética." },
];

export const reviews = [
  { text: "Excelente servicio. Recibí una asesoría gratuita clara y profesional que resolvió mis dudas, se nota el compromiso y la ética.", author: "Gabriel Morales Geraldine Gabriela", when: "hace 7 meses" },
  { text: "100% recomendables. Fueron muy atentos en todo momento y me brindaron toda la información que necesitaba de manera clara y profesional.", author: "Javier Vazquez", when: "hace 4 meses" },
  { text: "Excelente trato. Asesoría profesional y amable durante todo el proceso. Recomendados, en especial la Licenciada Rebeca.", author: "Manuel Damián Juárez Castro", when: "hace 6 meses" },
  { text: "Mucho detalle, paciencia, respeto y empatía recibí por parte del Abogado Paul, recomiendo ampliamente y doy las gracias por su orientación que me clarificó mis dudas para tomar la mejor decisión en cuanto a las alternativas sobre mi caso.", author: "Juan Carlos Aguilar", when: "editado hace 3 meses" },
  { text: "Agradecida con la atención y asesoría legal de Caliz Sosa Abogados. Durante mi proceso legal estuvieron siempre en la mejor disposición de atender mis dudas y logramos obtener un resultado favorable. Recomiendo ampliamente.", author: "Olimpia Rojas Luviano", when: "hace 11 meses" },
];
