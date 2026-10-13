import arcadas from "./assets/arcadas-centro.jpg";
import escritorio from "./assets/escritorio-lampara.jpg";
import contratos from "./assets/contratos-pluma.jpg";

// Todo el texto sale de mendozaalvareza.com.mx (una sola página, ver lista-2/57-mendozaalvarez/research.md).
// Los dos servicios solo tienen título en su sitio: no se les inventa descripción.
export const areas = [
  { key: "asesoria-legal", title: "Asesoría legal", image: escritorio, alt: "Escritorio de nogal con un libro de leyes abierto y una lámpara de bronce encendida" },
  { key: "asesoria-empresarial-y-litigio", title: "Asesoría empresarial y litigio", image: contratos, alt: "Documentos y una pluma fuente sobre una carpeta de piel azul marino" },
];

export const photos = { arcadas, escritorio, contratos };

export const valores = ["Responsabilidad", "Honestidad", "Calidez", "Integridad", "Confianza", "Pasión"];

export const texto = {
  lema: "Asesoría legal a tu alcance",
  intro: "En Mendoza Álvarez Abogados nos destacamos por ser un despacho legal en la Ciudad de México, somos una empresa de primer nivel que brinda servicios y logra resultados que superan expectativas.",
  compromiso: "Estamos comprometidos desde hace más de 38 años en brindar asesoría de alta calidad mediante servicios que otorgan seguridad jurídica y un valor agregado a nuestros clientes.",
  especializado: "Somos un despacho legal especializado en servicios jurídicos y empresariales que busca la seguridad y rentabilidad de nuestros clientes.",
  formacion: "Nuestra formación profesional y experiencia nos permite ser capaces de evaluar correctamente diversas situaciones legales a fin de ayudar a nuestros clientes a prevenir o solucionar conflictos de manera objetiva en beneficio de los intereses de nuestros representados.",
  mision: "Satisfacer las necesidades de nuestros clientes en Mendoza Álvarez Abogados mediante un servicio profesional y atención personalizada. Desde hace más de 38 años, atendemos cada uno de tus requerimientos.",
  vision: "Ser la empresa líder como despacho legal en la Ciudad de México, gracias a la excelente calidad de nuestro servicio y atención al cliente.",
  serviciosLede: "En Mendoza Álvarez Abogados tenemos un enorme compromiso con cada uno de nuestros clientes, por eso contamos con una gran gama de servicios.",
  contactoLede: "Comunícate con Mendoza Álvarez Abogados para brindarte una asesoría y agendar una cita.",
};
