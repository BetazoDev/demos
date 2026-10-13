import hero from "./assets/hero-escalinatas.jpg";
import columnata from "./assets/columnata.jpg";
import sala from "./assets/sala-audiencias.jpg";

// Todo el texto sale de gardunomonterdeasociados.com (Inicio y «Ejercicio profesional»). Se corrigió «Alcandía».
export type Area = { key: string; title: string; lead: string; items?: string[]; itemsTitle?: string };

export const areas: Area[] = [
  {
    key: "amparo-penal",
    title: "Amparo penal",
    lead: "Contra actos u omisiones de autoridad que violen Derechos Humanos y Garantías otorgadas por la Constitución Política de los Estados Unidos Mexicanos.",
  },
  {
    key: "proceso-penal",
    title: "Proceso penal",
    lead: "Etapa de investigación, etapa intermedia y etapa de juicio oral.",
    itemsTitle: "Etapas",
    items: ["Etapa de investigación", "Etapa intermedia", "Etapa de juicio oral"],
  },
  {
    key: "representacion-juridica",
    title: "Representación jurídica",
    lead: "Protección de Derechos Humanos, coadyuvar con la autoridad, medidas cautelares, protección y restitución de derechos, reparación del daño.",
    itemsTitle: "Incluye",
    items: ["Protección de Derechos Humanos", "Coadyuvar con la autoridad", "Medidas cautelares", "Protección y restitución de derechos", "Reparación del daño"],
  },
  {
    key: "victimas-del-delito",
    title: "Atención y asesoría jurídica a víctimas del delito",
    lead: "Acceso universal a la justicia, defensa de Derechos Humanos y representación ante el órgano jurisdiccional, el tribunal de enjuiciamiento y el tribunal de alzada.",
    itemsTitle: "Incluye",
    items: ["Acceso universal a la justicia", "Defensa de Derechos Humanos", "Representación ante el órgano jurisdiccional", "Representación ante el tribunal de enjuiciamiento y el tribunal de alzada"],
  },
  {
    key: "procedimientos-administrativos",
    title: "Procedimientos administrativos",
    lead: "Sanciones ante actos u omisiones de servidores públicos.",
  },
  {
    key: "consultoria",
    title: "Consultoría",
    lead: "Prevención de delito a empresas y particulares; protección de datos personales.",
    itemsTitle: "En",
    items: ["Prevención de delito a empresas y particulares", "Protección de datos personales"],
  },
];

export const photos = { hero, columnata, sala };

export const partners = [
  {
    name: "Roberto Carlos Garduño Mejía",
    role: "Socio fundador",
    summary: "Licenciado en Derecho por la UNAM, con estudios de Maestría y Doctorado en Proceso Penal Acusatorio. Especialista en delitos de alto impacto.",
    bio: [
      "Licenciado en Derecho por la UNAM.",
      "Estudios de Maestría y Doctorado en Proceso Penal Acusatorio, así como diversos cursos, diplomados y actualización en materia de procuración de justicia en Sistema Penal Inquisitivo y Acusatorio.",
      "Experiencia profesional de 20 años en materia de procuración de justicia en la Procuraduría capitalina: Ex Fiscal Desconcentrado de Investigación en Cuajimalpa; Ex Fiscal Especializado en la Búsqueda, Localización e Investigación de Personas Desaparecidas (siendo el primer Fiscal).",
      "En la Fiscalía General de la República: Ex Coordinador General «D».",
      "Especialista en delitos de alto impacto.",
    ],
  },
  {
    name: "Euquenee Aimme Monterde Valero",
    role: "Socia fundadora",
    summary: "Licenciada en Derecho por la UNAM, con estudios de Maestría en Política Criminal. En la FGR fungió como Agente de Ministerio Público de la Federación.",
    bio: [
      "Licenciada en Derecho por la UNAM.",
      "Estudios de Maestría en Política Criminal, así como diversos cursos, diplomados y actualización en Sistema Penal Acusatorio.",
      "Becaria en el Instituto de Investigaciones Jurídicas UNAM. Estancia de investigación en la Universidad Complutense de Madrid.",
      "Publicaciones en el IIJ-UNAM: «Emergencia Sanitaria por Covid 19. Tema: Corrupción y Covid» y «COVID-19 y su circunstancia: Una visión jurídica plural de la pandemia (Vol. I Marcos normativos)».",
      "En la FGR fungió como Auxiliar Ministerial C y Agente de Ministerio Público de la Federación.",
    ],
  },
];
