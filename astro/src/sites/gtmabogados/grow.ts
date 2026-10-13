export {};
// La banda [data-grow-frame] pasa de 0.72 a 1 de escala mientras entra en pantalla. Solo transform; sin movimiento reducido no hace nada.
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
let off: (() => void) | null = null;

function init() {
  off?.();
  off = null;
  const frames = Array.from(document.querySelectorAll<HTMLElement>("[data-grow-frame]"));
  if (!frames.length) return;
  if (reduce()) return frames.forEach((f) => (f.style.transform = ""));
  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    for (const f of frames) {
      const host = f.parentElement ?? f;
      const r = host.getBoundingClientRect();
      // 0 cuando la banda asoma por abajo; 1 cuando su centro llega al 45% de la ventana
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.55 + r.height * 0.5)));
      f.style.transform = `scale(${(0.72 + 0.28 * ease(p)).toFixed(4)})`;
    }
  };
  const handler = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", handler, { passive: true });
  window.addEventListener("resize", handler);
  update();
  off = () => {
    window.removeEventListener("scroll", handler);
    window.removeEventListener("resize", handler);
    if (raf) cancelAnimationFrame(raf);
  };
}

document.addEventListener("astro:page-load", init);
document.addEventListener("astro:before-swap", () => {
  off?.();
  off = null;
});
init();
