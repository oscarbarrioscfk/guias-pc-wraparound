import { defineConfig } from "astro/config";

// Hosting definitivo sigue abierto (ver docs/plataforma.md); esto solo apunta
// a la vista previa publica en GitHub Pages. ASTRO_BASE permite construir
// esta misma rama bajo un subdirectorio distinto (ej. /preview/visor-doble/)
// cuando el workflow de despliegue publica varias ramas en un solo sitio de
// Pages -- ver .github/workflows/deploy.yml.
export default defineConfig({
  site: "https://oscarbarrioscfk.github.io",
  base: process.env.ASTRO_BASE || "/guias-pc-wraparound/",
});
