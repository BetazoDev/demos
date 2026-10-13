import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

// Cada despacho declara sus tipografías en src/sites/<slug>/fonts.json:
// [{ "name": "Gloock", "cssVariable": "--f-slug-display", "weights": [400], "styles": ["normal"] }]
// Se juntan aquí para que ningún agente toque este archivo.
type FontDecl = { name: string; cssVariable: string; weights?: (number | string)[]; styles?: ("normal" | "italic")[]; fallbacks?: string[] };
const sitesDir = path.resolve("src/sites");
const seen = new Set<string>();
const fonts = (fs.existsSync(sitesDir) ? fs.readdirSync(sitesDir) : []).flatMap((slug) => {
  const f = path.join(sitesDir, slug, "fonts.json");
  if (!fs.existsSync(f)) return [];
  const decls = JSON.parse(fs.readFileSync(f, "utf8")) as FontDecl[];
  return decls
    .filter((d) => (seen.has(d.cssVariable) ? false : (seen.add(d.cssVariable), true)))
    .map((d) => ({
      provider: fontProviders.google(),
      name: d.name,
      cssVariable: d.cssVariable,
      weights: d.weights ?? [400, 500, 600, 700],
      styles: d.styles ?? ["normal"],
      subsets: ["latin", "latin-ext"] as ("latin" | "latin-ext")[],
      fallbacks: d.fallbacks ?? ["sans-serif"],
    }));
});

export default defineConfig({
  // Las demos se sirven desde el mismo dominio que el directorio (sin prefijo): /slug, /slug/servicios...
  site: process.env.SITE_URL ?? "https://demos.diabolicalservices.tech",
  trailingSlash: "never",
  build: { format: "directory", assets: "_l2" },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  image: { layout: "constrained", responsiveStyles: true },
  fonts,
  vite: { plugins: [tailwindcss()] },
});
