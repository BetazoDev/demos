import terraza from "./assets/terraza.jpg";
import obra from "./assets/obra.jpg";
import planos from "./assets/planos.jpg";
import calle from "./assets/calle-roma-sur.jpg";
import oficina from "./assets/oficina.jpg";

// Todo el texto sale del sitio Wix anterior de M&A Abogados (páginas de servicios, Acerca de, Nuestro equipo, Nuestros clientes, Contacto)
// y del H1 y párrafo del sitio actual. Erratas del original corregidas (COORPORATIVO, DESARROLO, ADMINSITRATIVO, SEVICIOS).
export type Group = { title: string; items: string[] };
export type Area = { key: string; title: string; row: string; lead?: string; groups?: Group[]; items?: string[]; image?: any; alt?: string };

export const areas: Area[] = [
  {
    key: "establecimientos-mercantiles",
    title: "Establecimientos mercantiles",
    row: "Regularización, apertura de establecimientos nuevos y diversas gestiones, con los documentos idóneos para un adecuado funcionamiento.",
    lead: "Enfocados principalmente a la prevención de sanciones, proporcionando los documentos idóneos para un adecuado funcionamiento.",
    image: terraza,
    alt: "Terraza de un restaurante al atardecer con mesas de madera y luces cálidas",
    groups: [
      { title: "Regularización", items: ["Vecinales", "Zonales", "Revalidación extemporánea"] },
      { title: "Apertura de establecimientos nuevos", items: ["Análisis y revisión documental", "Derechos", "Bajo impacto", "Vecinal", "Zonal"] },
      {
        title: "Diversas gestiones",
        items: ["Modificación de nombre comercial", "Modificación de superficie (bajo impacto, vecinal, zonal)", "Aviso o revalidación de enseres", "Cese de actividades", "Aviso o modificación de salud", "Extensión de cajones de estacionamiento", "Ampliación de horario (zonal)", "Aviso por única ocasión"],
      },
    ],
  },
  {
    key: "obras-construccion",
    title: "Obras y construcción",
    row: "Proyectos ante INBA, INAH, SEDUVI y alcaldía; licencias, seguridad estructural, subdivisión y fusión de predios.",
    lead: "Enfocados principalmente a la prevención de sanciones, proporcionando los documentos idóneos para el desarrollo de la obra.",
    image: obra,
    alt: "Columnas de concreto con cimbra y varillas en un edificio en construcción",
    items: ["Proyectos ante INBA, INAH, SEDUVI y alcaldía", "Rompimiento de banqueta", "Constancia de seguridad estructural", "Visto bueno de seguridad y operación", "Subdivisión y fusión de predios", "Alineamiento y número oficial", "Licencia de construcción especial", "Publicitación", "Auditoría de manifestaciones de construcción"],
  },
  {
    key: "desarrollo-urbano",
    title: "Desarrollo urbano",
    row: "Certificados de uso de suelo, derechos adquiridos, dictámenes de aplicación de normas y homologación.",
    image: planos,
    alt: "Planos arquitectónicos sobre una mesa de dibujo con escalímetro y compás",
    items: ["Certificado de uso de suelo", "Certificado de uso de suelo digital", "Certificado por reconocimiento de actividad", "Certificado de derechos adquiridos", "Dictámenes de aplicación de normas", "Homologación"],
  },
  {
    key: "proteccion-civil",
    title: "Protección civil y medio ambiente",
    row: "Programas internos, especiales y para obras; capacitaciones, simulacros y dictámenes en materia de protección civil.",
    items: ["Programas internos", "Programas especiales", "Programas para obras", "Capacitaciones", "Simulacros", "Dictámenes en materia de protección civil"],
  },
  {
    key: "litigio-administrativo",
    title: "Litigio administrativo",
    row: "Procedimientos ante Inveacdmx, alcaldías, Sedema, Paot, Profeco, Salud y Protección civil; nulidad de resoluciones y sanciones.",
    lead: "Procedimientos administrativos ante Inveacdmx, Alcaldía, Sedema, Paot, Profeco, Salud y Protección civil.",
    items: ["Nulidad de resoluciones y sanciones en diversas materias", "Apelaciones"],
  },
  {
    key: "litigio-civil",
    title: "Litigio civil",
    row: "Contratos diversos, controversias del arrendamiento, propiedad y materia mercantil.",
    items: ["Contratos diversos", "Controversias del arrendamiento", "Propiedad", "Mercantil"],
  },
  {
    key: "corporativo",
    title: "Corporativo",
    row: "Constitución de personas morales, poderes, régimen de propiedad en condominio y gestiones ante Catastro y el Registro Público de la Propiedad.",
    items: ["Constitución de personas morales", "Poderes", "Régimen de propiedad en condominio", "Gestiones ante Catastro", "Gestiones ante el Registro Público de la Propiedad en la CDMX"],
  },
];

export const photos = { calle, oficina, terraza, obra, planos };

export const asociados = ["Mtro. Héctor Moreno", "Lic. David Moreno", "Lic. Edith Aguilera"];
export const colaboradores = ["Lic. Héctor Ricardez", "Lic. Andrea Pérez", "Lic. Armando Arellano", "Lic. Alejandra Barrera", "Lic. Sarah Reyes", "Lic. Mariana Mason", "Lic. Esveyde Arenas", "Lic. Antonio Peredo", "Lic. Víctor Tejeda"];

// Nombres leídos del collage de logos de la página «Nuestros clientes» del sitio anterior (no se usan los logos).
export const clients = [
  "Casa O", "Bakéa", "Madre Roof", "Madre Café", "Blanco Castelar", "Ventura", "Amati", "Sonora Grill Prime", "Sublime", "Phonique",
  "República del Distrito", "Vanderbilt", "Café Vida", "Galea", "Clikalia", "Ventanas", "Calacas", "Krüx", "El Huequito", "Amorino",
  "Villa Rica", "Primus Microcervecería", "Rokai", "El Depósito", "La Roma Brewing Co.", "La Casa de los Abuelos", "La Casa del Pastor", "2Concepts", "Dante",
];

export const about = "Somos una Sociedad Civil, integrada por profesionales del Derecho especializados en la rama del Derecho Administrativo, con la participación de colaboradores que representan experiencia y juventud, circunstancia peculiar que permite conocer y entender los antecedentes y actualizaciones que nuestros servicios profesionales requieren, facilitando la interpretación de los cambios generados en la legislación que regula el tema de establecimientos mercantiles, derivados de la dinámica social y legislativa, y dándonos la posibilidad de emitir criterios objetivos en la solución de los casos específicos que atendemos, logrando con nuestra experiencia un trabajo de excelencia.";

export const quote = { text: "Muy profesionales y eficientes. Difícil encontrar abogados que te digan las cosas como son y que te resuelvan o te eviten tener problemas. Lo recomiendo 100%.", author: "Guillermo Robert", when: "hace un año" };
