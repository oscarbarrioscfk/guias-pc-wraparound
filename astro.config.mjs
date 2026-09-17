import { defineConfig } from "astro/config";

// Hosting definitivo sigue abierto (ver docs/plataforma.md); esto solo apunta
// a la vista previa publica en GitHub Pages, que sirve el sitio bajo un
// subdirectorio con el nombre del repo en vez de la raiz del dominio.
export default defineConfig({
  site: "https://oscarbarrioscfk.github.io",
  base: "/guias-pc-wraparound/",
});
