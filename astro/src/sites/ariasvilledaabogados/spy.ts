export {};
// Índice lateral con resaltado de la sección visible. Se reinicia en cada navegación (View Transitions).
let off: (() => void) | null = null;

function init() {
  off?.();
  off = null;
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".av-index a[href^='#']"));
  if (!links.length) return;
  const targets = links.map((a) => document.getElementById(a.getAttribute("href")!.slice(1))).filter((el): el is HTMLElement => !!el);
  const setActive = (id: string) => links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === `#${id}`)));
  const io = new IntersectionObserver(
    (entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(vis.target.id);
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
  );
  targets.forEach((t) => io.observe(t));
  setActive(targets[0].id);
  off = () => io.disconnect();
}

document.addEventListener("astro:page-load", init);
document.addEventListener("astro:before-swap", () => {
  off?.();
  off = null;
});
init();
