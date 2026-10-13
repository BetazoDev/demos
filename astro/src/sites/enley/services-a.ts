import type { Service } from "./data";

const pasos4 = [
  "Llena el formulario correspondiente al trámite legal que necesitas",
  "Nos pondremos en contacto para comentar tu caso y resolver cualquier duda",
  "Se te asignará un abogado, que será quien llevará tu caso",
  "Se inicia tu trámite, del que estarás permanentemente informado",
];
const dudas = "Podrás contactar con tu abogado siempre que lo necesites por correo electrónico a contacto@enley.mx.";

export const constitucion: Service = {
  key: "creacion-empresa",
  title: "Constitución de empresa",
  blurb: "Consigue tu SAS o tu empresa tradicional en pocos días y completamente en línea.",
  price: "Desde $1,500",
  headline: "Crea tu empresa en 72 horas",
  lede: "Tu empresa por solo $1,500, con trámite completamente en línea y acompañado siempre por un abogado experto. Primera consulta gratuita.",
  introTitle: "En Enley constituimos tu sociedad",
  intro: [
    "Desde hace unos años la ley permite crear empresas de forma más rápida, fácil y económica. Son las denominadas Sociedades por Acciones Simplificadas (SAS).",
    "Son exactamente iguales a una sociedad tradicional, solamente con dos limitantes: los socios no pueden ser empresas y la facturación anual debe ser inferior a 7 millones de pesos.",
    "No obstante, si una SAS no encaja con lo que estás buscando, nuestro equipo de abogados te ofrece la constitución tradicional.",
  ],
  tiersTitle: "Diferencias entre la empresa tradicional y la SAS",
  tiers: [
    { name: "SAS", price: "$1,500", text: "Consigue tu empresa al mejor precio. Proceso completamente en línea y con todos los gastos incluidos.", features: ["Todos los tipos de negocio", "Sin intervención de fedatario público", "Proceso completamente en línea", "Los ingresos anuales no pueden superar los 7 millones de pesos"] },
    { name: "Empresa tradicional", price: "$18,000", text: "Nuestros abogados tramitan tu empresa de forma tradicional.", features: ["Todos los tipos de negocio", "Con intervención de fedatario público", "Sin limitaciones de ingresos"] },
  ],
  tiersNote: "Precio cerrado, sin sorpresas ni gastos adicionales. Precios en pesos mexicanos, sin IVA.",
  listTitle: "Documentación necesaria",
  list: ["CURP", "RFC", "Identificación oficial", "Acta de nacimiento", "Comprobante de domicilio", "Constancia de situación fiscal", "Acta de matrimonio (si aplica)", "Identificación del cónyuge (si aplica)", "e.Firma vigente de cada accionista (SAS)"],
  stepsTitle: "Constituye tu empresa cuándo y desde dónde tú quieras",
  steps: pasos4,
  faq: [
    { q: "¿La SAS es una sociedad igual de válida que otro tipo de sociedades?", a: ["Sí, esta sociedad se puede utilizar igual que una S.A., S. de R.L. o cualquier otro tipo de sociedad que se utilice para conducir negocios.", "Cualquier acto realizado por la sociedad es válido igual que cualquier otra empresa."] },
    { q: "¿Las SAS tienen alguna limitación?", a: ["Sí, las SAS no pueden generar ingresos anuales iguales o superiores a 7 millones de pesos (cantidades actualizables anualmente); y además las empresas o las personas que tengan control accionario respecto de otra sociedad no pueden ser accionistas de una SAS."] },
    { q: "¿Qué pasa con mi SAS si genera ingresos anuales superiores a 7 millones de pesos?", a: ["Si la SAS genera ingresos superiores a los 7 millones de pesos anuales, es necesario cambiar el tipo de sociedad ante un fedatario público."] },
    { q: "¿Existe un capital mínimo necesario para constituir una sociedad?", a: ["Las sociedades tradicionales se pueden constituir con un capital mínimo de $2 pesos y las SAS con un capital mínimo de $1 peso."] },
    { q: "Si no quiero una SAS, ¿qué otro tipo de empresas puedo constituir?", a: ["La legislación mexicana prevé varios tipos de sociedades (S.A., S. de R.L., A.C., entre otros). Para determinar el tipo de sociedad que mejor se ajusta a tus necesidades, consulta con nuestros especialistas."] },
    { q: "¿Puedo constituir una empresa en cualquier estado de la República?", a: ["Sí. Sin embargo, si optas por la constitución de una sociedad tradicional, es necesario considerar que la presencia física de los socios es indispensable ante el fedatario público al momento de su constitución.", "Si constituyes una SAS, no se requerirá la presencia física de los accionistas en ningún momento."] },
    { q: "Si tengo dudas durante el proceso, ¿dónde puedo resolverlas?", a: [dudas] },
  ],
};

export const marca: Service = {
  key: "registro-marca",
  title: "Registro de marca",
  blurb: "Protege tu marca en México y en Europa, renuévala o declara su uso para que no te la quiten.",
  price: "Desde $5,900",
  headline: "Registra tu marca desde $5,900",
  lede: "Te ayudamos a registrar, renovar y declarar el uso de tu marca. Podrás hacer el trámite completamente en línea. Primera consulta gratuita.",
  tiersTitle: "Tu marca nacional",
  tiers: [
    { name: "Búsqueda de marca", price: "$750", text: "Analizamos tu marca y buscamos otras existentes que puedan obstaculizar el registro. ¿Quieres saber si tu marca está registrada? Descúbrelo en menos de 24 horas." },
    { name: "Registro de marca", price: "$5,900", text: "Registra tu marca en México." },
    { name: "Registro + Estudio", price: "$6,500", text: "Te ofrecemos el servicio más completo para proteger tu marca." },
  ],
  tiersNote: "Precios en pesos mexicanos, sin IVA.",
  listTitle: "En Enley registramos tu marca",
  list: [
    "Evita el uso indebido de tu marca o de marcas con características similares a la tuya.",
    "Evita que otras personas registren tu marca como si fuera suya.",
    "Convierte tu marca en un activo para tu empresa, con la posibilidad de otorgar licencias de uso de marca o cobrar regalías.",
    "Protege tu marca a nivel nacional e internacional.",
    "Obtén el derecho de utilizar los símbolos ® (registrada) o ™ (marca registrada).",
  ],
  list2Title: "¿Qué más podemos hacer por ti?",
  list2: ["Declaración de uso", "Renovación de marca", "Registro de marca en Europa"],
  stepsTitle: "Cómo funciona nuestro servicio",
  steps: pasos4,
  faq: [
    { q: "¿Para qué me sirve registrar una marca?", a: ["Para evitar que otras personas hagan uso indebido de tu marca o utilicen marcas con características similares a la tuya, y para que nadie la registre como si fuera suya y pueda demandarte por su uso.", "Además te da la posibilidad de otorgar licencias de uso de marca o cobrar regalías, y el derecho a utilizar los símbolos ® (registrada) o ™ (marca registrada)."] },
    { q: "¿Qué puedo registrar como marca?", a: ["Todo signo perceptible por los sentidos que distinga productos y servicios de una clase en el mercado. Es decir, denominaciones, letras, números, elementos figurativos, combinaciones de colores, hologramas, formas tridimensionales, nombres comerciales, nombres propios de una persona física, sonidos, olores, entre otros."] },
    { q: "¿El registro de una marca tiene vigencia?", a: ["Sí, 10 años a partir de la fecha de su registro."] },
    { q: "Llegada la vigencia de una marca registrada, ¿se pierde el registro?", a: ["No. Uno puede solicitar la renovación de una marca por un periodo de 10 años adicionales cada vez que se solicite la renovación.", "En caso de no solicitar la renovación, el registro de marca es susceptible a cancelación o pérdida."] },
    { q: "¿Tengo que hacer algo para conservar mi marca durante ese periodo de 10 años?", a: ["Sí, es necesario que al tercer aniversario del otorgamiento del registro se presente la declaración de uso de marca para comprobar al IMPI que dicha marca se está utilizando. De no presentar dicha declaración, el registro es susceptible a cancelación."] },
    { q: "¿Qué significa que tengo que registrar mi marca por clase?", a: ["La ley divide los productos y servicios en clases, por lo que es necesario registrar la marca en cada clase en la que quieras que esté protegida.", "Por ejemplo: si tu marca contempla la compraventa de autopartes y también servicios de arreglos a vehículos, debes registrarla en la clase de venta de autopartes y en la clase de talleres mecánicos. De esta manera la marca está protegida de manera integral."] },
    { q: "¿El registro de una marca ante el IMPI está garantizado?", a: ["No. El registro de cada marca depende de sus características específicas y del universo de marcas similares existentes en la clase específica. Puede que el registro sea exitoso bajo una clase y en otra no.", "Por eso es altamente recomendable realizar un estudio de viabilidad para entender el porcentaje de éxito del registro. Nuestros abogados te asesorarán para tomar las medidas que aumenten la probabilidad de éxito de cada registro."] },
    { q: "Si tengo dudas durante el proceso, ¿dónde puedo resolverlas?", a: [dudas] },
  ],
};
