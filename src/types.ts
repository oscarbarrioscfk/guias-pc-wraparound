// Modelo de contenido del motor wraparound (Decision 6 de docs/decisiones.md):
// una sesion es datos tipados, nunca HTML escrito a mano por guia.

export type Moment = "inicio" | "manos" | "cierre";

// Numero de pagina FISICA del PDF original de la guia (no el folio impreso,
// que trae un desfase). Cada bloque se puede rastrear hasta la pagina exacta
// de la que se transcribio -- es la base de "ver la pagina original".
type WithPdfPage = { pdfPage: number };

export type ContentBlock =
  | ({ id: string; moment: Moment; kind: "paragraph"; text: string } & WithPdfPage)
  | ({ id: string; moment: Moment; kind: "callout"; text: string } & WithPdfPage)
  | ({ id: string; moment: Moment; kind: "flowchart"; title: string; steps: string[]; iterations: number } & WithPdfPage)
  | ({ id: string; moment: Moment; kind: "algorithm"; steps: string[] } & WithPdfPage)
  | ({ id: string; moment: Moment; kind: "glossary"; terms: { term: string; definition: string }[] } & WithPdfPage)
  | ({ id: string; moment: Moment; kind: "checklist"; items: string[] } & WithPdfPage);

export type AnnotationKind = "comentario" | "diferenciacion" | "diagrama" | "recurso";

export interface Annotation {
  id: string;
  anchor: string; // id de un ContentBlock
  kind: AnnotationKind;
  title: string;
  body: string;
}

export interface Session {
  guiaSlug: string;
  guiaTitulo: string;
  grado: string;
  numero: number;
  titulo: string;
  aprendizajesEsperados: string[];
  materiales: string[];
  // reparto de tiempo sugerido por momento, en porcentaje: [inicio, manos, cierre]
  duracion: [number, number, number];
  // pagina fisica de la portada/banner de esta sesion en la guia original
  portadaPdfPage: number;
  // "Desconectadas", "Conectadas", o "Desconectadas y conectadas": ver Guia 0
  manosModalidad: string;
  blocks: ContentBlock[];
  annotations: Annotation[];
}

export type Strand =
  | "algoritmos"
  | "logica"
  | "practicas-datos"
  | "seguridad"
  | "modelacion"
  | "computacion-fisica"
  | "equidad"
  | "ia";

export const STRAND_LABEL: Record<Strand, string> = {
  algoritmos: "Algoritmos, patrones, abstracción y descomposición",
  logica: "Lógica, programación y depuración",
  "practicas-datos": "Prácticas de datos",
  seguridad: "Seguridad en el mundo digital",
  modelacion: "Modelación y simulación",
  "computacion-fisica": "Computación física",
  equidad: "Equidad en el acceso y la participación en el mundo digital",
  ia: "Inteligencia artificial",
};

export interface Guia {
  slug: string;
  titulo: string;
  grado: string;
  resumen: string;
  sesionesTotales: number;
  sesionesDisponibles: number[]; // numeros de sesion ya migradas
  strands: Strand[]; // tal como aparecen en la pagina de resumen de la guia
  portadaPdfPage: number; // pagina fisica de la portada en el PDF original
  // paginas fisicas ya migradas, para la galeria de la portada
  paginasDestacadas: { pdfPage: number; etiqueta: string }[];
}

/** Ruta al recorte de un icono de eje ya extraido de Guía 0 (public/iconos). */
export function strandIconSrc(base: string, strand: Strand): string {
  return `${base}iconos/${strand}.png`;
}

/** Ruta a la imagen de una pagina fisica del PDF original de una guia. */
export function paginaSrc(base: string, guiaSlug: string, pdfPage: number): string {
  const n = String(pdfPage).padStart(2, "0");
  return `${base}guias/${guiaSlug}/paginas/p${n}.webp`;
}

export const ANNOTATION_LABEL: Record<AnnotationKind, string> = {
  comentario: "Nota pedagógica",
  diferenciacion: "Diferenciación",
  diagrama: "Diagrama interactivo",
  recurso: "Recurso externo",
};

export const ANNOTATION_ICON: Record<AnnotationKind, string> = {
  comentario: "💬",
  diferenciacion: "🧩",
  diagrama: "📊",
  recurso: "🔗",
};

export const MOMENT_LABEL: Record<Moment, string> = {
  inicio: "Lo que sabemos, lo que debemos saber",
  manos: "Manos a la obra",
  cierre: "Antes de irnos",
};
