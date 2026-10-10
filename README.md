# Rediseños de despachos (portafolio)

Directorio de 65 propuestas de home para despachos de abogados en México (y algunos otros giros), pasadas a código desde los diseños de Pencil (`../redisenos-despachos.pen`). Cada sitio usa su logo, colores e información reales.

## Correr el proyecto

```bash
npm install
npm run dev
```

Abre http://localhost:3000. En desarrollo el directorio queda abierto.

## Privacidad

- El directorio (`/`) y sus miniaturas son solo para el equipo: están protegidos con HTTP Basic Auth (`src/proxy.ts`). Configura `PORTFOLIO_USER` y `PORTFOLIO_PASSWORD` en el servidor; si faltan, en producción el directorio responde 404.
- Cada propuesta se comparte por enlace directo (`https://<dominio>/NN-slug`). Las páginas no enlazan entre sí ni al directorio, y el título de la pestaña es solo el nombre del despacho.
- Todo el sitio lleva `noindex, nofollow` y `robots.txt` bloquea a los buscadores.

## Despliegue (Dokploy u otro host con Docker)

El repositorio incluye un `Dockerfile` (Next.js `output: "standalone"`, Node 22, puerto 3000).

1. En Dokploy crea una aplicación desde este repositorio de GitHub, rama `main`, tipo de build **Dockerfile**.
2. Variables de entorno: `PORTFOLIO_USER` y `PORTFOLIO_PASSWORD`.
3. Puerto del contenedor: `3000`. Asigna el dominio y despliega.

Sin Docker: `npm ci && npm run build` y luego `node .next/standalone/server.js` (copiando antes `public/` y `.next/static/` dentro de `.next/standalone/`).

## Estructura

- `src/app/page.tsx` + `src/app/directory.tsx`: el directorio (búsqueda y filtros).
- `src/app/(sitios)/NN-slug/page.tsx`: una ruta por despacho (`/01-floreslozano`, `/02-monarcabogados`, ...). Cada página carga sus propias fuentes con `next/font/google`.
- `src/components/motion/`: primitivos de animación compartidos (Motion + CSS):
  - `HeroIntro` / `HeroItem`: entrada escalonada del primer pantallazo.
  - `Reveal`, `Stagger` / `StaggerItem`: aparición al hacer scroll (una sola vez).
  - `MediaReveal`: barrido con clip-path para fotos; `Parallax`: deriva sutil de imágenes de fondo.
  - `CountUp`: cifras reales que cuentan al entrar en pantalla (los años no cuentan).
  - `Marquee`, `Accordion`, `SiteNav` (header con estado al hacer scroll y menú móvil accesible).
  - Clases en `globals.css`: `press` (feedback al presionar), `link-u` (subrayado), `nudge` (flecha), `img-zoom`.
  - Todo respeta `prefers-reduced-motion` y los hovers solo aplican con puntero fino.
- `src/components/demo-form.tsx`: los formularios no envían nada; muestran un aviso de demostración.
- `src/data/sites.ts`: lista de sitios del directorio.
- `public/sitios/NN-slug/`: logos (SVG extraídos del diseño o PNG originales) e imágenes de cada despacho.
- `public/thumbs/`: miniaturas del directorio.

## Notas

- Los textos, nombres, cifras y datos de contacto vienen de los sitios de cada despacho; ver `../NN-slug/brand.md` y `../INDEX.md` para fuentes y datos a confirmar.
- Tres sitios (14, 27, 52) no tienen rediseño porque no existe contenido verificable en línea; aparecen en el directorio como "Sitio no disponible".
- Algunas fotos de ambiente se cargan desde Unsplash (sitios 16, 24 y 66).
