export {};
// Firma de movimiento de Central de Abogados: «Te representamos en juicios para:» se enfoca fila por fila al cruzar el centro de la ventana (opacity + transform).
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let off: Array<() => void> = [];

function focus() {
  const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-focus] > li"));
  if (!rows.length) return;
  if (reduce()) return rows.forEach((r) => r.style.setProperty("--f", "1"));
  let raf = 0;
  const tick = () => {
    raf = 0;
    const vh = window.innerHeight;
    rows.forEach((r) => {
      const b = r.getBoundingClientRect();
      const d = Math.abs(b.top + b.height / 2 - vh * 0.52) / (vh * 0.5);
      r.style.setProperty("--f", Math.min(1, Math.max(0, 1.15 - d * 1.15)).toFixed(3));
    });
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
  window.addEventListener("scroll", on, { passive: true });
  window.addEventListener("resize", on);
  tick();
  off.push(() => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); });
}

document.addEventListener("astro:page-load", focus);
document.addEventListener("astro:before-swap", () => { off.forEach((f) => f()); off = []; });
