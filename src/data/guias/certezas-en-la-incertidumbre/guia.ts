import type { Guia } from "../../../types";

export const guia: Guia = {
  slug: "certezas-en-la-incertidumbre",
  titulo: "Certezas en la incertidumbre",
  grado: "Grado 6º",
  resumen:
    "5 sesiones orientadas a trabajar con eventos aleatorios para caracterizarlos estadísticamente, usando el diagrama de flujo como herramienta para desarrollar algoritmos con bucles, condicionales, números aleatorios y variables en MakeCode.",
  sesionesTotales: 5,
  sesionesDisponibles: [1],
  // tal como aparecen en "Identificación de los aprendizajes" (portada de la guía)
  strands: ["algoritmos", "practicas-datos", "modelacion", "logica", "computacion-fisica"],
  portadaPdfPage: 1,
  paginasDestacadas: [
    { pdfPage: 9, etiqueta: "Portada de la Sesión 1" },
    { pdfPage: 10, etiqueta: "Folio 9 · Lo que sabemos, lo que debemos saber" },
    { pdfPage: 11, etiqueta: "Folio 10 · Simulaciones y algoritmos" },
    { pdfPage: 12, etiqueta: "Folio 11 · Figura 1: diagrama de flujo" },
    { pdfPage: 13, etiqueta: "Folio 12 · Manos a la obra desconectadas" },
    { pdfPage: 14, etiqueta: "Folio 13 · Promedios de la simulación" },
    { pdfPage: 15, etiqueta: "Folio 14 · Glosario y Antes de irnos" },
    { pdfPage: 16, etiqueta: "Folio 15 · Autoevaluación" },
    { pdfPage: 17, etiqueta: "Folio 16 · Reflexión final" },
  ],
};
