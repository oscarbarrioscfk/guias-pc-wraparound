// Experimento (rama experimento/visor-doble): en vez de re-tipografiar el
// contenido como bloques (el motor de docs/decisiones.md), este prototipo
// deja la pagina del PDF tal cual como imagen -- Visor 1 -- y le superpone
// zonas interactivas que activan un segundo visor con los comentarios
// pedagogicos, tal como el proof of concept que trajo el usuario.

export type ZoneType = "reveal" | "animate-bar" | "swap-page" | "read-aloud";

export interface HotspotZone {
  id: string;
  // caja en porcentaje sobre la imagen de la pagina, para que escale con ella
  box: { x: number; y: number; w: number; h: number };
  panel: "top" | "left" | "right";
  orden: number; // orden vertical dentro de su panel
  type: ZoneType;
  // el texto morado del proof of concept: que pasa al tocar la zona
  direccionEscena: string;
  // el texto blanco/gris del proof of concept: lo que ve quien usa el visor
  contenido: string;
  // solo para type "swap-page": a que pagina cambia el Visor 1
  swapTargetPage?: number;
  swapTargetLabel?: string;
  // solo para type "read-aloud": el pasaje real de la guia que se lee en voz alta
  textoParaLeer?: string;
}

export const guiaSlug = "certezas-en-la-incertidumbre";
export const paginaBase = 10; // folio 9, "Lo que sabemos, lo que debemos saber"

export const zonas: HotspotZone[] = [
  {
    id: "zona-anexo",
    box: { x: 9, y: 11, w: 28, h: 31 },
    panel: "left",
    orden: 1,
    type: "swap-page",
    direccionEscena: "Al picar sobre esta zona se intercambia la vista a la página completa del Anexo 1.2.",
    contenido: "Consulta el Anexo 1.2 completo",
    swapTargetPage: 51,
    swapTargetLabel: "Anexo 1.2 — Reto",
  },
  {
    id: "zona-titulo",
    box: { x: 38, y: 11, w: 33, h: 8 },
    panel: "top",
    orden: 1,
    type: "reveal",
    direccionEscena: "Al picar acá sale el siguiente texto:",
    contenido: "Tenga en cuenta que esta actividad tiene una posible conexión con matemáticas y explore esto con sus estudiantes o aclárelo si no es evidente.",
  },
  {
    id: "zona-duracion",
    box: { x: 71, y: 11.5, w: 22, h: 7 },
    panel: "right",
    orden: 1,
    type: "animate-bar",
    direccionEscena: "Al picar se activa una animación de la barra llenándose y diciendo 15% y se muestra el siguiente texto:",
    contenido: "Adapte este porcentaje a las necesidades de su sesión y asegúrese de mantener suficiente tiempo para un cierre adecuado de la sesión o del avance sobre la misma.",
  },
  {
    id: "zona-callout",
    box: { x: 37, y: 37, w: 53, h: 16 },
    panel: "right",
    orden: 2,
    type: "read-aloud",
    direccionEscena: "Al picar se reproduce una voz que lee el texto y una animación a la izquierda de un dado girando y se muestra el siguiente texto:",
    contenido: "Si está proyectando esta guía puede reproducir el texto en el recuadro y mostrar a los estudiantes la animación.",
    textoParaLeer:
      "Imagina que dos personas están lanzando un dado, el cual puede mostrar un número entre 1 y 6 en cada lanzamiento. Queremos determinar si, después de varios lanzamientos, ambas personas obtendrán una suma similar o muy diferente y cómo se afecta esta respuesta según la cantidad de lanzamientos.",
  },
  {
    id: "zona-parrafo",
    box: { x: 37, y: 55, w: 53, h: 34 },
    panel: "left",
    orden: 2,
    type: "reveal",
    direccionEscena: "Al picar sobre esta zona se muestra el siguiente texto:",
    contenido:
      "Pida a un estudiante distinto que lea el texto en voz alta y al finalizar cada párrafo confirme la compresión de conceptos clave como computador, procesador, tiempo atmosférico. Antes de iniciar puede escribir el número en el tablero y confirmar si los y las estudiantes pueden leerlo.",
  },
];
