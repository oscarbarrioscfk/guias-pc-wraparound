// Modelo de contenido del motor wraparound (Decision 6 de docs/decisiones.md):
// una sesion es datos tipados, nunca HTML escrito a mano por guia.

export type Moment = "inicio" | "manos" | "cierre";

export type ContentBlock =
  | { id: string; moment: Moment; kind: "paragraph"; text: string }
  | { id: string; moment: Moment; kind: "callout"; text: string }
  | { id: string; moment: Moment; kind: "flowchart"; title: string; steps: string[]; iterations: number }
  | { id: string; moment: Moment; kind: "algorithm"; steps: string[] }
  | { id: string; moment: Moment; kind: "glossary"; terms: { term: string; definition: string }[] }
  | { id: string; moment: Moment; kind: "checklist"; items: string[] };

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
  numero: number;
  titulo: string;
  aprendizajesEsperados: string[];
  materiales: string[];
  // reparto de tiempo sugerido por momento, en porcentaje: [inicio, manos, cierre]
  duracion: [number, number, number];
  blocks: ContentBlock[];
  annotations: Annotation[];
}

export interface Guia {
  slug: string;
  titulo: string;
  grado: string;
  resumen: string;
  sesionesTotales: number;
  sesionesDisponibles: number[]; // numeros de sesion ya migradas
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
