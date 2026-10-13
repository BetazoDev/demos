export {};
// Firma de movimiento de Rincón Mayorga: la foto [data-grow] se amplía de 0.82 a 1 mientras cruza la ventana (solo transform).
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let off: Array<() => void> = [];

function grow() {
  const els = document.querySelectorAll<HTMLElement>("[data-grow]");
  if (!els.length) return;
  if (reduce()) return els.forEach((el) => el.style.setProperty("--s", "1"));
  let raf = 0;
  const tick = () => {
    raf = 0;
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      // 0 cuando el borde superior entra por abajo, 1 cuando el bloque ya ocupa el centro
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.75)));
      const e = 1 - Math.pow(1 - p, 3);
      el.style.setProperty("--s", (0.82 + 0.18 * e).toFixed(4));
    });
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
  window.addEventListener("scroll", on, { passive: true });
  window.addEventListener("resize", on);
  tick();
  off.push(() => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); });
}

document.addEventListener("astro:page-load", grow);
document.addEventListener("astro:before-swap", () => { off.forEach((f) => f()); off = []; });
