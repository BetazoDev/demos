import type { Service } from "./data";

export const divorcio: Service = {
  key: "divorcio",
  title: "Divorcio",
  blurb: "Consigue tu divorcio en línea en 8 días hábiles.",
  price: "Desde $4,000",
  headline: "Abogados especialistas en divorcio",
  lede: "Obtén tu divorcio desde $4,000 + IVA, en línea y en 8 días hábiles. Evita juicios largos y costosos: proceso ágil y discreto.",
  tiersTitle: "Tipos de divorcio",
  tiers: [
    { name: "Divorcio voluntario", text: "Si ya tomaron la decisión y están de acuerdo en todo, pueden separarse de forma rápida, ordenada y sin conflictos. Nosotros preparamos el convenio, presentamos la solicitud y les acompañamos en todo el proceso." },
    { name: "Divorcio administrativo", text: "Si están de acuerdo, no tienen hijos y ya liquidaron sus bienes, pueden separarse rápido, fácil y directamente ante el Registro Civil, sin juicios ni trámites complicados. Nosotros los acompañamos para que todo sea seguro y ágil." },
    { name: "Divorcio unilateral", text: "¿No consiguen ponerse de acuerdo en su divorcio? Podemos ayudarles a tramitar un divorcio unilateral." },
  ],
  stepsTitle: "Consigue tu divorcio en 3 sencillos pasos",
  steps: [
    "Proporciona al abogado la documentación necesaria para comenzar tu trámite",
    "Firma el convenio de divorcio",
    "Preséntate con el abogado para finalizar tu divorcio",
  ],
  listTitle: "¿Qué incluye el divorcio?",
  list: [
    "Tramitación de tu divorcio",
    "Formatos debidamente requisitados para presentarlos ante el Registro Civil",
    "Redacción de convenio de liquidación de bienes",
    "Escrito para realizar manifestación bajo protesta de decir la verdad sobre que no existe descendencia",
    "Seguimiento a tu trámite",
    "Asesoría especializada con abogados en todo momento",
  ],
  faq: [
    { q: "¿En qué consiste un divorcio exprés o divorcio administrativo?", a: ["Se trata de la disolución del vínculo matrimonial. El divorcio exprés o administrativo en la Ciudad de México (CDMX) es un procedimiento ágil y económico para disolver el matrimonio cuando ambos cónyuges están de acuerdo y cumplen con ciertos requisitos."] },
    { q: "¿En qué se diferencia entonces de una separación?", a: ["Una separación se produce cuando un matrimonio pone fin a su relación o convivencia.", "La principal diferencia con el divorcio es que la separación se da sin la disolución del vínculo matrimonial. Por tanto, el matrimonio sigue legalmente vigente y los cónyuges no pueden contraer matrimonio con otra persona."] },
    { q: "¿Qué requisitos debo cumplir para poder hacer un divorcio?", a: ["Debe haber transcurrido por lo menos un año a partir de la firma del acta de matrimonio, ambos cónyuges deben estar de acuerdo (en la separación y en la repartición de bienes, si éstos se adquirieron) y no tener hijos."] },
    { q: "¿Es necesario que participe el otro cónyuge?", a: ["El otro cónyuge deberá intervenir únicamente en dos momentos del proceso: deberá firmar el convenio y deberá acudir de manera presencial ante la autoridad competente para la ratificación del divorcio."] },
    { q: "¿Qué incluye la tarifa?", a: ["Incluye todo lo necesario para obtener el divorcio, desde la redacción de la documentación solicitada hasta la inscripción en el Registro Civil.", "El precio del servicio es desde $4,000 + IVA y se aceptan pagos por transferencia bancaria, enlace de pago (pago con tarjeta de crédito) y Apple Pay."] },
    { q: "¿Qué documentación necesito para poder iniciar el divorcio?", a: ["Formato de solicitud, acta de matrimonio, identificación oficial de cada uno de los solicitantes y comprobante de domicilio con menos de tres meses de antigüedad (del declarado por los divorciantes)."] },
    { q: "¿Cómo será el proceso de divorcio?", a: ["Una vez que hayas llenado el formulario y hayas realizado el pago, un abogado experto se comunicará contigo para brindarte asesoría jurídica y revisará los documentos necesarios para tramitar tu divorcio.", "Una vez entregados los documentos se procederá a la redacción del formato que tendrás que llevar ante el Registro Civil junto con la hoja del pago de derechos y la cita previamente solicitada. El abogado responsable dará seguimiento a su resolución para que se realice la anotación y se formalice el divorcio."] },
  ],
};
