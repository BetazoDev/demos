export {};
// Firma de movimiento de Torres & Torres: los paneles [data-stack] > .tt-panel se apilan; el anterior se encoge (transform) y se oscurece (opacity)
// a medida que el siguiente lo cubre.
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let off: Array<() => void> = [];

function stack() {
  const host = document.querySelector<HTMLElement>("[data-stack]");
  if (!host || reduce()) return;
  const panels = Array.from(host.querySelectorAll<HTMLElement>(".tt-panel"));
  if (panels.length < 2) return;
  let raf = 0;
  // Un panel más alto que la ventana se ancla por abajo (top negativo) para que se vea completo antes de que lo cubra el siguiente.
  const place = () => panels.forEach((p) => (p.style.top = `${Math.min(84, window.innerHeight - p.offsetHeight - 16)}px`));
  const tick = () => {
    raf = 0;
    panels.forEach((p, i) => {
      const next = panels[i + 1];
      if (!next) return;
      const top = parseFloat(p.style.top) || 84;
      const h = p.offsetHeight;
      const nextTop = next.getBoundingClientRect().top;
      const t = Math.min(1, Math.max(0, (top + h - nextTop) / h));
      p.style.setProperty("--k", (1 - 0.05 * t).toFixed(4));
      p.style.setProperty("--shade", (0.55 * t).toFixed(3));
    });
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
  const onResize = () => { place(); on(); };
  window.addEventListener("scroll", on, { passive: true });
  window.addEventListener("resize", onResize);
  place();
  tick();
  off.push(() => { window.removeEventListener("scroll", on); window.removeEventListener("resize", onResize); if (raf) cancelAnimationFrame(raf); });
}

document.addEventListener("astro:page-load", stack);
document.addEventListener("astro:before-swap", () => { off.forEach((f) => f()); off = []; });
