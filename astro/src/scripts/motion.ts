// Movimiento compartido de la lista 2: revelados al hacer scroll, contadores, frase que se llena,
// parallax, navegación, acordeón y redactor de mensaje por WhatsApp.
// Se inicializa en cada navegación (View Transitions) y se limpia antes del intercambio de página.

const EASE = (t: number) => 1 - Math.pow(1 - t, 3);
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let cleanups: Array<() => void> = [];

const onScroll = (fn: () => void) => {
  let raf = 0;
  const handler = () => {
    if (!raf)
      raf = requestAnimationFrame(() => {
        raf = 0;
        fn();
      });
  };
  window.addEventListener("scroll", handler, { passive: true });
  window.addEventListener("resize", handler);
  fn();
  cleanups.push(() => {
    window.removeEventListener("scroll", handler);
    window.removeEventListener("resize", handler);
    if (raf) cancelAnimationFrame(raf);
  });
};

function reveals() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]");
  if (!els.length) return;
  els.forEach((el) => {
    if (el.hasAttribute("data-stagger")) Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)));
    if (el.dataset.delay) el.style.setProperty("--delay", `${el.dataset.delay}ms`);
    if (el.dataset.gap) el.style.setProperty("--gap", `${el.dataset.gap}ms`);
  });
  if (reduce()) return els.forEach((el) => el.classList.add("is-in"));
  const pending = new Set<HTMLElement>(els);
  const show = (el: HTMLElement) => {
    el.classList.add("is-in");
    pending.delete(el);
    io.unobserve(el);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) show(e.target as HTMLElement);
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 },
  );
  els.forEach((el) => io.observe(el));
  // Un salto de scroll puede dejar un bloque por encima de la ventana sin que el observador lo vea: se muestra igual.
  onScroll(() => {
    pending.forEach((el) => {
      if (el.getBoundingClientRect().bottom < 0) show(el);
    });
  });
  cleanups.push(() => io.disconnect());
}

function counters() {
  const els = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!els.length) return;
  const run = (el: HTMLElement) => {
    const raw = el.dataset.count ?? el.textContent ?? "";
    const m = raw.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!m || reduce()) return void (el.textContent = raw);
    const [, pre, num, suf] = m;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = (num.split(".")[1] ?? "").length;
    // Los años de cuatro dígitos no cuentan: se muestran tal cual.
    if (/^\d{4}$/.test(num)) return void (el.textContent = raw);
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 1400);
      el.textContent = `${pre}${(target * EASE(p)).toLocaleString("es-MX", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suf}`;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        run(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

function statements() {
  const els = document.querySelectorAll<HTMLElement>("[data-statement]");
  if (!els.length) return;
  els.forEach((el) => {
    if (el.dataset.ready) return;
    const words = (el.textContent ?? "").trim().split(/\s+/);
    el.textContent = "";
    words.forEach((w, i) => {
      const s = document.createElement("span");
      s.className = "w";
      s.textContent = i < words.length - 1 ? `${w} ` : w;
      el.appendChild(s);
    });
    el.dataset.ready = "1";
  });
  if (reduce()) return;
  onScroll(() => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.4 + r.height)));
      const ws = el.children;
      const n = ws.length;
      for (let i = 0; i < n; i++) (ws[i] as HTMLElement).style.setProperty("--p", Math.min(1, Math.max(0, (p - i / n) * n)).toFixed(3));
    });
  });
}

function parallax() {
  const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
  if (!els.length || reduce()) return;
  onScroll(() => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const host = el.parentElement ?? el;
      const r = host.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const d = parseFloat(el.dataset.parallax || "50");
      const ratio = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = `translate3d(0, ${(-ratio * d).toFixed(1)}px, 0) scale(1.14)`;
    });
  });
}

function nav() {
  const shell = document.querySelector<HTMLElement>("[data-nav]");
  if (!shell) return;
  const toggle = shell.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const panel = shell.querySelector<HTMLElement>("[data-nav-panel]");
  const setOpen = (open: boolean) => {
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    panel?.classList.toggle("is-open", open);
    shell.classList.toggle("menu-open", open);
  };
  const onToggle = () => setOpen(toggle?.getAttribute("aria-expanded") !== "true");
  const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
  const onPanelClick = (e: Event) => (e.target as Element).closest("a") && setOpen(false);
  toggle?.addEventListener("click", onToggle);
  document.addEventListener("keydown", onKey);
  panel?.addEventListener("click", onPanelClick);

  // Enlace de la página actual
  const here = location.pathname.replace(/\/$/, "") || "/";
  shell.querySelectorAll<HTMLAnchorElement>("a[data-nav-link]").forEach((a) => {
    const href = new URL(a.href).pathname.replace(/\/$/, "") || "/";
    const root = shell.dataset.root ?? "/";
    const active = href === here || (href !== root && href !== "/" && here.startsWith(href + "/"));
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });

  let last = window.scrollY;
  onScroll(() => {
    const y = window.scrollY;
    const open = toggle?.getAttribute("aria-expanded") === "true";
    shell.classList.toggle("is-scrolled", y > 24);
    shell.classList.toggle("is-hidden", !open && y > 160 && y > last + 2);
    if (y < last - 2 || y <= 160) shell.classList.remove("is-hidden");
    last = y;
  });
  cleanups.push(() => {
    toggle?.removeEventListener("click", onToggle);
    document.removeEventListener("keydown", onKey);
    panel?.removeEventListener("click", onPanelClick);
  });
}

// Redactor de mensaje: arma un enlace wa.me con lo que la persona escribe y lo abre. No envía nada por sí mismo.
function waForms() {
  const forms = document.querySelectorAll<HTMLFormElement>("form[data-wa]");
  const setArea = (v: string) =>
    forms.forEach((f) => {
      const sel = f.elements.namedItem("area") as HTMLSelectElement | null;
      const opt = sel && Array.from(sel.options).find((o) => o.value === v || o.text === v);
      if (sel && opt) sel.value = opt.value;
    });
  const q = new URLSearchParams(location.search).get("area");
  if (q) setArea(q);
  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-area]");
    if (a?.dataset.area && forms.length && a.getAttribute("href")?.startsWith("#")) setArea(a.dataset.area);
  };
  document.addEventListener("click", onClick);
  cleanups.push(() => document.removeEventListener("click", onClick));

  forms.forEach((f) => {
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const d = new FormData(f);
      const area = String(d.get("area") || "").trim();
      const nombre = String(d.get("nombre") || "").trim();
      const mensaje = String(d.get("mensaje") || "").trim();
      let t = f.dataset.intro || "Hola, me gustaría una orientación legal";
      if (area) t += ` sobre ${area}`;
      t += ".";
      if (mensaje) t += ` ${mensaje}`;
      if (nombre) t += ` Mi nombre es ${nombre}.`;
      window.open(`https://wa.me/${f.dataset.wa}?text=${encodeURIComponent(t)}`, "_blank", "noopener");
    };
    f.addEventListener("submit", onSubmit);
    cleanups.push(() => f.removeEventListener("submit", onSubmit));
  });
}

// Insignia «Sitio demo»: se aparta al llegar al pie y cuando un bloque marcado con data-badge-avoid ocupa la franja inferior.
function badge() {
  const btn = document.querySelector<HTMLElement>("[data-demo-pill]");
  const dlg = document.querySelector<HTMLDialogElement>("[data-demo-dialog]");
  if (!btn || !dlg) return;
  const close = () => {
    if (!dlg.open || dlg.dataset.closing !== undefined) return;
    dlg.dataset.closing = "";
    const done = () => {
      delete dlg.dataset.closing;
      dlg.close();
    };
    dlg.addEventListener("animationend", done, { once: true });
    setTimeout(() => dlg.dataset.closing !== undefined && done(), 400);
  };
  const open = () => dlg.showModal();
  const onCancel = (e: Event) => {
    e.preventDefault();
    close();
  };
  const onBackdrop = (e: MouseEvent) => e.target === dlg && close();
  btn.addEventListener("click", open);
  dlg.addEventListener("cancel", onCancel);
  dlg.addEventListener("click", onBackdrop);
  dlg.querySelectorAll("[data-demo-close]").forEach((b) => b.addEventListener("click", close));

  const avoid = document.querySelectorAll("[data-badge-avoid]");
  let avoidHit = false;
  let atEnd = false;
  const apply = () => btn.toggleAttribute("data-hidden", atEnd || avoidHit);
  let io: IntersectionObserver | undefined;
  if (avoid.length) {
    io = new IntersectionObserver(
      (entries) => {
        avoidHit = entries.some((e) => e.isIntersecting);
        apply();
      },
      { rootMargin: `-${Math.max(0, window.innerHeight - 96)}px 0px 0px 0px` },
    );
    avoid.forEach((el) => io!.observe(el));
  }
  onScroll(() => {
    atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140;
    apply();
  });
  cleanups.push(() => {
    btn.removeEventListener("click", open);
    dlg.removeEventListener("cancel", onCancel);
    dlg.removeEventListener("click", onBackdrop);
    io?.disconnect();
  });
}

function init() {
  reveals();
  counters();
  statements();
  parallax();
  nav();
  waForms();
  badge();
}

document.addEventListener("astro:page-load", init);
document.addEventListener("astro:before-swap", () => {
  cleanups.forEach((fn) => fn());
  cleanups = [];
});
