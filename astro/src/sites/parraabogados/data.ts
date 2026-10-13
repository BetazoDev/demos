import condesa from "./assets/condesa.jpg";
import escritorio from "./assets/escritorio.jpg";

// Todo el texto sale de parra-asociados.ueniweb.com (descripción, servicios, facilidades, horario, áreas cubiertas).
export const empresas = {
  key: "empresas",
  title: "Asesoría legal a empresas",
  lead: "Constitución de negocios y sociedades, consultas legales para compañías, contratos, trámites burocráticos y necesidades fiscales.",
  items: [
    "Constitución de negocios y sociedades, anónima o limitada",
    "Consultas legales para su compañía",
    "Contratos",
    "Trámites burocráticos relacionados con su negocio",
    "Necesidades fiscales",
  ],
};

export const trabajadores = { key: "trabajadores", title: "Asesoría a trabajadores gratuita" };

export const areas = [empresas, trabajadores];

// Datos de la sección «Facilidades» y del banner del sitio actual.
export const facts = [
  { label: "Facilidades", value: "Consulta gratuita" },
  { label: "Descuento especial", value: "10 % de descuento en el primer servicio" },
  { label: "Áreas cubiertas", value: "Toda la República" },
  { label: "Horario de apertura", value: "Lunes a viernes, 9:00 a 18:00" },
];

export const facilidades = ["Consulta gratuita", "Solo con reserva concertada", "Wi-Fi disponible"];

export const photos = { condesa, escritorio };
