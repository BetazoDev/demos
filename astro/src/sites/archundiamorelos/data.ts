import hero from "./assets/hero-pared-coral.jpg";
import escritorio from "./assets/escritorio-cuaderno.jpg";
import calle from "./assets/calle-arbolada.jpg";

// Solo lo que el despacho declara en su micrositio: «asesoría, consultoría, orientación y representación jurídica y legal»
// y las materias «derecho penal, civil, mercantil, administrativo fiscal, constitucional y amparo».
export const materias = ["Derecho penal", "Derecho civil", "Derecho mercantil", "Derecho administrativo fiscal", "Derecho constitucional y amparo"];
export const servicios = ["Asesoría", "Consultoría", "Orientación", "Representación jurídica y legal"];
export const photos = { hero, escritorio, calle };
export const waLink = (intro: string) => `https://wa.me/525535182101?text=${encodeURIComponent(intro)}`;
