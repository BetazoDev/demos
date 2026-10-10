import type { MetadataRoute } from "next";

// Las propuestas se comparten por enlace directo; ningún buscador debe indexarlas.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
