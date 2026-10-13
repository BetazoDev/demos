# Lista 2: demos en Astro

Sitios multipágina de despachos de abogados de la CDMX hechos con Astro 7, Tailwind 4, View Transitions (`ClientRouter`) y movimiento propio. Cada despacho tiene su carpeta `src/sites/<slug>/` (datos, tipografías, imágenes y componentes propios) y sus páginas en `src/pages/<slug>/`. Se sirven desde el mismo dominio que el directorio, sin prefijo: `/<slug>`, `/<slug>/servicios`, `/<slug>/servicios/<area>`, `/<slug>/nosotros`, `/<slug>/contacto`.

## Comandos

```bash
pnpm install
pnpm dev                 # http://localhost:4321 (reinicia el servidor si cambias un fonts.json)
pnpm build               # astro build + scripts/install.mjs (copia el resultado a ../public)
pnpm astro check         # tipos (hay falsos positivos conocidos en las envolturas Layout/Page de algunos sitios)
```

## Cómo se publica junto al directorio (Next.js)

- `pnpm build` genera `dist/` y `scripts/install.mjs` lo copia a `../public/_a/<slug>/` (páginas) y `../public/_l2/` (CSS, JS, imágenes y fuentes con hash). Ambas carpetas son generadas y están en `.gitignore`.
- `../next.config.ts` reescribe `/<slug>` y `/<slug>/*` hacia `/_a/<slug>/.../index.html` según `../src/data/sites2.ts` (generado con `lista-2/_tools/gen-sites2.mjs`).
- El `Dockerfile` del portafolio tiene una etapa `astro` (pnpm) que hace este build antes de `next build`. Las fuentes se descargan de Google al compilar (reintenta hasta 3 veces).
- Todas las páginas llevan `noindex` y el botón flotante «Sitio demo» de Hemeron (`src/kit/DemoBadge.astro`).

## Estructura

- `src/kit/`: componentes compartidos (SiteLayout, Nav, Hero, Footer, Button, AreasIndex, Composer → wa.me, ContactBlock, Reviews, Team, Accordion, Prose…). Cada sitio recibe su tema por variables CSS (`--c-*`, `--f-*`) desde `src/sites/<slug>/site.ts` (tipo `SiteConfig` en `src/kit/types.ts`).
- `src/scripts/motion.ts`: revelados al scroll, contadores, frase que se llena, parallax, navegación, redactor de WhatsApp. `src/styles/kit.css`: utilidades y movimiento.
- `astro.config.ts` junta las tipografías declaradas en cada `src/sites/*/fonts.json` (API de fuentes de Astro, Google Fonts autoalojadas).
- Los contenidos salen de `lista-2/NN-slug/brand.json` y `research.md` (ver `lista-2/INDEX.md` y `lista-2/STATUS.md`). Nada está inventado; los datos dudosos se anotan en cada reporte y en `INDEX.md`.
