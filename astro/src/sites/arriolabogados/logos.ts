import type { ImageMetadata } from "astro";

// Logos de clientes que el despacho publica en su página «Clientes» (arriolabogados.com/clientes). Marcas de terceros: confirmar permiso.
const mods = import.meta.glob<{ default: ImageMetadata }>("./assets/clientes/*.{png,jpg,jpeg,webp}", { eager: true });
export const logos = Object.entries(mods)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, m]) => ({ src: m.default.src, width: m.default.width, height: m.default.height }));

// Selección para la tira de la home: los 34 logos con más presencia a tamaño pequeño (calculado por tinta total), en el orden del sitio.
const featuredNames = ["13", "4", "5", "6", "7", "8", "image001", "image002", "image006", "image007", "image008", "image009", "image010", "image013", "image014", "image016", "image018", "image026", "image034", "image036", "image037", "image039", "image049", "image050", "image056", "image057", "image059", "image060", "image061", "image062", "image063", "nuevos-c1", "nuevos-c11", "nuevos-c5"];
const pick = new Set(featuredNames.map((n) => `./assets/clientes/${n}.png`));
export const featured = Object.entries(mods)
  .filter(([k]) => pick.has(k))
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, m]) => ({ src: m.default.src, width: m.default.width, height: m.default.height }));
