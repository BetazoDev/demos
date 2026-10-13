import escritorio from "./assets/escritorio.jpg";

// Todo el texto sale de la página de Facebook de Suárez Abogados (gráficas, portada y publicaciones).
export const pensiones = {
  title: "Pensiones IMSS, ISSSTE, ISSFAM e ISSEMYM",
  tipos: ["Cesantía en edad avanzada", "Vejez", "Invalidez", "Desgaste físico", "Viudez", "Orfandad", "Ascendencia", "Riesgo de trabajo"],
  casos: [
    { q: "¿Te negaron la pensión?", a: "¡Te ayudamos a obtenerla!" },
    { q: "¿Pensión suspendida?", a: "¡Te ayudamos a reactivarla!" },
    { q: "¿Reducción injusta o pensión sin actualizar?", a: "Evaluación legal personalizada." },
    { q: "¿Te pensionaste o jubilaste por el ISSSTE o ISSFAM antes de 2016?", a: "Podrías recibir un ajuste en tu pensión." },
  ],
};

export const laboral = {
  title: "Derecho laboral",
  lead: "¿Tus derechos han sido vulnerados? Soluciona tus problemas laborales con representación jurídica especializada.",
  nota: "Asesoría gratuita",
};

export const petrolero = {
  title: "Trabajador petrolero",
  items: [
    "Dudas en la aplicación del contrato colectivo de trabajo o del reglamento de trabajo del personal de confianza",
    "Jubilación por años de servicio, riesgo de trabajo o riesgo no de trabajo",
    "Ajuste de jubilación",
    "Reconocimiento de antigüedad",
  ],
};

export const imss = {
  title: "Trabajador IMSS",
  lead: "Contrato colectivo de trabajo y régimen de jubilaciones y pensiones.",
  items: [
    "Jubilación por años de servicio, por edad avanzada y vejez (cláusulas 59B y 110)",
    "Pensión por invalidez (cláusula 57)",
    "Riesgo de trabajo",
    "Indemnización de hasta 1,095 días de salario por riesgo de trabajo (cláusula 89)",
  ],
};

export const areasComposer = ["Pensiones IMSS, ISSSTE, ISSFAM e ISSEMYM", "Derecho laboral", "Trabajador petrolero", "Trabajador IMSS"];

export const photos = { escritorio };
