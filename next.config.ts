import type { NextConfig } from "next";
import { SITES } from "./src/data/sites";
import { SITES2 } from "./src/data/sites2";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Lista 2: los sitios de Astro se generan en public/_a/<slug>/ (astro/scripts/install.mjs) y se sirven en /<slug>/...
  async rewrites() {
    return {
      beforeFiles: SITES2.flatMap((s) => [
        { source: `/${s.slug}`, destination: `/_a/${s.slug}/index.html` },
        { source: `/${s.slug}/:path*`, destination: `/_a/${s.slug}/:path*/index.html` },
      ]),
      afterFiles: [],
      fallback: [],
    };
  },
  // Enlaces antiguos con numeración (/01-floreslozano) llevan a la URL actual (/floreslozano).
  async redirects() {
    return SITES.map((s) => ({ source: `/${s.num}-${s.slug}`, destination: `/${s.slug}`, permanent: true }));
  },
};

export default nextConfig;
