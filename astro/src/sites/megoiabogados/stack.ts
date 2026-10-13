export {};
// Tarjetas apiladas: cada tarjeta [data-stack] > li se reduce hasta 0.955 cuando la siguiente sube a taparla. Solo transform.
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let off: (() => void) | null = null;

function init() {
  off?.();
  off = null;
  const stacks = Array.from(document.querySelectorAll<HTMLElement>("[data-stack]"));
  if (!stacks.length) return;
  const cards = stacks.flatMap((s) => Array.from(s.children) as HTMLElement[]);
  if (reduce()) return cards.forEach((c) => (c.style.transform = ""));
  let raf = 0;
  const update = () => {
    raf = 0;
    for (const s of stacks) {
      const items = Array.from(s.children) as HTMLElement[];
      items.forEach((card, i) => {
        const next = items[i + 1];
        if (!next) return;
        const top = card.getBoundingClientRect().top;
        const h = card.offsetHeight;
        const nt = next.getBoundingClientRect().top;
        const overlap = Math.min(1, Math.max(0, (top + h - nt) / h));
        card.style.transform = overlap > 0.001 ? `scale(${(1 - 0.045 * overlap).toFixed(4)})` : "";
      });
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
