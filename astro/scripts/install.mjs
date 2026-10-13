// Copia el resultado de `astro build` a la carpeta pública de Next.js para servirlo desde el mismo dominio:
//   dist/_l2/            -> public/_l2/        (CSS, JS, imágenes, fuentes con hash; las páginas los piden en /_l2/...)
//   dist/<slug>/...      -> public/_a/<slug>/  (páginas; next.config.ts las reescribe: /<slug>/... -> /_a/<slug>/.../index.html)
// public/_l2 y public/_a son generados (están en .gitignore); se vuelven a crear en cada build (Dockerfile incluido).
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const pub = path.resolve("../public");
if (!fs.existsSync(dist)) throw new Error("Falta dist/: ejecuta astro build primero");

fs.rmSync(path.join(pub, "_l2"), { recursive: true, force: true });
fs.rmSync(path.join(pub, "_a"), { recursive: true, force: true });
fs.cpSync(path.join(dist, "_l2"), path.join(pub, "_l2"), { recursive: true });

let sites = 0;
for (const entry of fs.readdirSync(dist, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name === "_l2") continue;
  fs.cpSync(path.join(dist, entry.name), path.join(pub, "_a", entry.name), { recursive: true });
  sites++;
}
console.log(`install: ${sites} sitios copiados a public/_a y assets a public/_l2`);
