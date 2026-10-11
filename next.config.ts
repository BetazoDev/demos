import type { NextConfig } from "next";
import { SITES } from "./src/data/sites";

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
  // Enlaces antiguos con numeración (/01-floreslozano) llevan a la URL actual (/floreslozano).
  async redirects() {
    return SITES.map((s) => ({ source: `/${s.num}-${s.slug}`, destination: `/${s.slug}`, permanent: true }));
  },
};

export default nextConfig;
