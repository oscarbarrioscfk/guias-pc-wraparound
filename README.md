# Guías PC — Explorador Wraparound

Explorador docente, al estilo *Teacher's Book Wraparound*, para las Guías de Pensamiento Computacional de Colombia Programa (Ministerio TIC + British Council + ACOFI). Convierte el contenido para estudiantes (Guía 1) y el marco pedagógico docente (Guía 0) en un recurso navegable: embebible en el LMS y usable desde el celular.

## Estado del proyecto

Piloto funcionando: Astro + TypeScript, sin backend. La Sesión 1 de Guía 1 ("Certezas en la incertidumbre") ya está migrada end-to-end como prueba del motor wraparound — ver [Desarrollo](#desarrollo) para correrla.

## Contenido

- [`docs/decisiones.md`](docs/decisiones.md) — diagrama de flujo del recorrido docente y las seis decisiones clave (experiencia en el aula + arquitectura y sostenibilidad).
- [Documento visual de decisiones](https://claude.ai/artifact/J4Z9HYCKmauiK1NEH2TAqb) — la misma información como artifact interactivo.

## Referentes

- **Guía 1** — "Certezas en la incertidumbre", grado 6º (Colombia Programa): contenido del estudiante, 5 sesiones.
- **Guía 0** — Introducción docente, grado 6º (Colombia Programa): marco pedagógico general (UMC, RTI, equidad de género, inclusión).
- **Code.org, Lesson 9** ("How AI Uses Data"): formato wraparound con barra lateral de objetivos/estándares y guía de enseñanza cronometrada.
- ***Writing with Power*** — Teacher Wraparound Edition (Perfection Learning): el referente más fuerte hasta ahora — columna central con el texto del estudiante, márgenes izquierdo/derecho con notas docentes ancladas por flecha a párrafos específicos, franjas de diferenciación por nivel de ELL, y páginas de "Planning Guide" con tabla de estándares y tiempos por capítulo.
- ***Our Choice*** (Al Gore / Push Pop Press): referente de profundidad de interactividad en infografías dentro de un libro digital.

## Próximos pasos

Con el piloto de la Sesión 1 validando el motor (ver [`docs/plataforma.md`](docs/plataforma.md) para la comparación que llevó a Astro), lo que sigue es: migrar las sesiones 2 a 5 de esta guía, decidir el hosting real y el embebido de prueba en un LMS, y evaluar si vale la pena sumar `vite-plugin-pwa`/Workbox en lugar del service worker artesanal actual.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para probar antes de desplegar
```

Piloto disponible en `/guias/certezas-en-la-incertidumbre/sesion-1`: implementa el layout wraparound (Decisión 1), el diagrama de flujo interactivo con lanzamientos de dado reales (Decisión 2), y un service worker mínimo para que la sesión visitada quede disponible sin conexión (Decisión 5).
