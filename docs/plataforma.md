# Plataforma, lenguaje y formato

Evalúa las cinco familias de opciones planteadas en el artifact de decisiones contra las seis decisiones ya acordadas en [`decisiones.md`](decisiones.md), y cierra con una recomendación concreta de stack.

## Comparación contra las seis decisiones

| Opción | D1 Wraparound anclado por párrafo | D2 Interactividad (popover + diagrama animado) | D3 Navegar por sesión/momento | D4 Un solo build LMS + móvil | D5 Offline tras 1ª carga | D6 Motor + datos para 79 guías |
|---|---|---|---|---|---|---|
| **A. PDF enriquecido** | ⚠️ posible con hotspots, pero no reflow real en móvil | ❌ sin animación real dentro del PDF | ⚠️ depende del lector de PDF del LMS | ❌ la mayoría de LMS solo lo muestra como descarga estática | ✅ nativo, es el punto fuerte | ⚠️ requiere pipeline de generación de PDF, no trivial |
| **B. Web app a medida** | ✅ control total de layout responsivo | ✅ SVG/CSS/JS propio, sin límites | ✅ control total del router/estado | ✅ un solo build, iframe + enlace directo | ✅ PWA + service worker | ✅ es exactamente "motor + datos" |
| **C. Herramientas de autoría (H5P, Genially)** | ⚠️ posible a la fuerza, no es el modelo nativo | ✅ fuerte en H5P para hotspots/diagramas | ⚠️ limitado a la estructura del tipo de contenido | ✅ H5P tiene soporte LMS nativo (Moodle) | ❌ mayoría requiere conexión al servidor de la herramienta | ⚠️ autoría manual por guía en su editor |
| **D. Libro de texto digital (Bookwidgets, Actively Learn)** | ⚠️ layout fijo de la plataforma, poco control | ⚠️ interactividad limitada a sus propios widgets | ⚠️ limitado a su estructura de unidades | ✅ integración LTI ya resuelta | ❌ SaaS, requiere conexión | ❌ autoría manual, sin API de plantillas |
| **E. Motor propio tipo *Our Choice*** (Canvas/WebGL) | ✅ control total | ✅ el máximo posible | ✅ control total | ✅ un solo build | ✅ con trabajo extra de cacheo de assets | ⚠️ mucho más caro de construir y mantener que B |

## Recomendación

**Opción B — web app a medida** es la única que cumple las seis decisiones a la vez, en particular D5 (offline explícito, no negociable) y D6 (escalar a 79 guías sin reautoría manual por guía). C y D fallan en offline por diseño (dependen de un servidor de terceros). A no soporta la interactividad ni el embebido en LMS que ya se acordaron. E es una versión más cara de B sin beneficio claro para el piloto de una guía de grado 6º.

### Stack concreto propuesto

- **Generación**: sitio estático (Astro) en vez de una SPA completa (React/Vue) — la mayor parte del contenido es de lectura, no hace falta el peso de un framework de aplicación; Astro renderiza HTML en build y solo envía JS donde de verdad hay interactividad (los hotspots, el toggle de capa, los diagramas animados).
- **Contenido y anotaciones**: un archivo por sesión (YAML o JSON) con esquema propio — texto en Markdown, y cada anotación (`comentario`, `diferenciacion`, `diagrama`, `recurso`) con una referencia al párrafo o bloque que ancla, siguiendo el patrón de *Writing with Power*. Esto es el "motor + datos" de la Decisión 6: agregar una guía nueva es agregar archivos de contenido, no escribir HTML a mano.
- **Offline**: service worker (Workbox vía `vite-plugin-pwa`, que Astro soporta de forma nativa) cacheando el contenido de cada guía visitada. Los recursos externos (simulador de MakeCode) quedan fuera del cache — coherente con dejarlos para la fase 2 de interactividad (Decisión 2).
- **Diagramas interactivos**: SVG dibujado a mano + CSS/JS, igual que el diagrama de flujo del documento de decisiones — sin librería de gráficos, mínimo peso, funciona offline.
- **Embebido en LMS**: iframe simple (`<iframe src="...">`) apuntando al sitio publicado; suficiente para la mayoría de instalaciones de Moodle, que es el LMS más común en implementaciones públicas en Colombia. Una integración LTI formal (con calificación/SSO) queda como decisión futura, solo si el LMS específico de Colombia Programa la exige.
- **Hosting**: cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages) con despliegue automático desde este mismo repositorio.
- **Lenguaje**: TypeScript/JavaScript. No se necesita backend ni base de datos propia para esta primera versión — todo el contenido se resuelve en build time o en el navegador, lo cual además refuerza el requisito de offline.

### El riesgo real, no el técnico

El mayor riesgo no es de plataforma sino de contenido: las guías solo existen hoy como PDF diagramado. Hay que re-transcribir el texto de cada sesión a Markdown/YAML y decidir los puntos de anclaje de cada anotación una sola vez para el piloto (Guía 1, 5 sesiones). Para escalar a las 79 guías, en algún momento va a hacer falta el archivo fuente de diagramación (InDesign u otro) en vez de partir del PDF ya exportado.

## Próximo paso

Con el stack acordado, el siguiente paso es escalar el andamiaje del proyecto (Astro + esquema de contenido + primer service worker) y migrar la Sesión 1 de Guía 1 como piloto end-to-end.
