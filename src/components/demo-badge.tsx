"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE_OUT } from "@/components/motion";
import { HemeronLogo } from "./hemeron-logo";

const WHATSAPP = "524491254443";
const SITE = "https://hemeron.com/";

const COPY = {
  es: {
    pill: "Sitio demo",
    talk: "Hablemos",
    eyebrow: "Propuesta de rediseño",
    title: (name: string) => (name ? `Así podría verse el sitio de ${name}` : "Así podría verse su sitio"),
    body: "Este es un sitio demo que preparamos en Hemeron con su logo, sus colores y la información que ya tienen publicada. Todavía no es su sitio oficial: los formularios no envían datos.",
    points: [
      "Diseño actual que se adapta a celular, tablet y computadora",
      "Carga rápida y estructura lista para aparecer en Google",
      "Contacto directo por WhatsApp, llamada o correo en un toque",
    ],
    audit: "También le hacemos sin costo una auditoría de su sitio actual.",
    whatsapp: "Hablemos por WhatsApp",
    visit: "Conocer Hemeron",
    close: "Cerrar",
    message: (name: string, url: string) => `Hola, vi la propuesta de sitio web${name ? ` para ${name}` : ""} (${url}) y me gustaría platicar.`,
  },
  en: {
    pill: "Demo site",
    talk: "Let's talk",
    eyebrow: "Website redesign proposal",
    title: (name: string) => (name ? `This is how the ${name} website could look` : "This is how your website could look"),
    body: "This is a demo site Hemeron prepared with your logo, your colors and the information you already publish. It is not your official website yet: forms don't send any data.",
    points: [
      "Modern design that adapts to phone, tablet and desktop",
      "Fast loading and a structure ready to show up on Google",
      "Direct contact by WhatsApp, phone or email in one tap",
    ],
    audit: "We can also audit your current website for free.",
    whatsapp: "Let's talk on WhatsApp",
    visit: "Visit Hemeron",
    close: "Close",
    message: (name: string, url: string) => `Hi, I saw the website proposal${name ? ` for ${name}` : ""} (${url}) and I'd like to talk.`,
  },
};

/** Botón flotante y modal que identifican cada propuesta como demo de Hemeron. */
export function DemoBadge() {
  const reduce = useReducedMotion();
  const dialog = useRef<HTMLDialogElement>(null);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [atEnd, setAtEnd] = useState(false);
  const appeared = useRef(false);
  const t = COPY[lang];

  // Idioma, nombre y URL salen de la propia página: el bundle no conoce a los demás despachos.
  useEffect(() => {
    setLang(document.getElementById("top")?.getAttribute("lang") === "en" ? "en" : "es");
    setName(document.title.split(" | ")[0].trim());
    setUrl(window.location.origin + window.location.pathname);
  }, []);

  // Al llegar al pie se oculta para no tapar el crédito de Hemeron.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      setAtEnd(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const close = () => {
    const el = dialog.current;
    if (!el?.open || el.dataset.closing) return;
    el.dataset.closing = "";
    const done = () => { delete el.dataset.closing; el.close(); };
    el.addEventListener("animationend", done, { once: true });
    setTimeout(() => el.open && el.dataset.closing !== undefined && done(), 400);
  };

  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.message(name, url))}`;

  return (
    <>
      <motion.button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        initial={{ opacity: 0, transform: reduce ? "translateY(0px)" : "translateY(14px)" }}
        animate={atEnd
          ? { opacity: 0, transform: reduce ? "translateY(0px)" : "translateY(10px)", transition: { duration: 0.2, ease: EASE_OUT } }
          : { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.5, ease: EASE_OUT, delay: appeared.current ? 0 : 1.2 } }}
        onAnimationComplete={() => { appeared.current = true; }}
        style={{ pointerEvents: atEnd ? "none" : "auto" }}
        className="press fixed bottom-4 left-4 z-40 inline-flex h-11 items-center gap-2.5 rounded-full bg-[#0E0E0E] pl-3.5 pr-4 font-[family-name:var(--font-geist-sans)] text-[13.5px] font-medium tracking-[-0.005em] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] ring-1 ring-white/12 hover:bg-[#1c1c1c] sm:bottom-6 sm:left-6"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-[#3DDC84] shadow-[0_0_0_3px_rgba(61,220,132,0.18)]" />
        {t.pill}
        <span aria-hidden="true" className="h-3.5 w-px bg-white/20" />
        <span className="text-white/70">{t.talk}</span>
      </motion.button>

      <dialog
        ref={dialog}
        aria-labelledby="demo-dialog-title"
        className="demo-dialog"
        onCancel={(e) => { e.preventDefault(); close(); }}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <div className="relative rounded-t-[28px] bg-white px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 text-[#141414] shadow-2xl sm:rounded-[24px] sm:p-8">
          <div aria-hidden="true" className="mx-auto -mt-2 mb-5 h-1 w-10 rounded-full bg-black/12 sm:hidden" />
          <div className="flex items-center justify-between">
            <HemeronLogo className="h-[18px] w-auto text-[#0E0E0E]" />
            <button
              type="button"
              onClick={close}
              aria-label={t.close}
              className="press -mr-2 grid size-9 place-items-center rounded-full text-black/50 hover:bg-black/5 hover:text-black"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="mt-7 font-[family-name:var(--font-geist-mono)] text-[11.5px] uppercase tracking-[0.08em] text-black/45">{t.eyebrow}</p>
          <h2 id="demo-dialog-title" className="mt-2 text-balance text-[26px] font-semibold leading-[1.1] tracking-[-0.025em]">
            {t.title(name)}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-black/62">{t.body}</p>

          <ul className="mt-6 grid gap-3">
            {t.points.map((point) => (
              <li key={point} className="flex gap-3 text-[14.5px] leading-snug">
                <svg className="mt-0.5 size-[18px] shrink-0 text-[#1F9D5C]" viewBox="0 0 18 18" aria-hidden="true">
                  <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.12" />
                  <path d="m5.5 9.2 2.3 2.3 4.7-4.9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl bg-[#F4F4F1] px-4 py-3 text-[14px] leading-snug text-black/70">{t.audit}</p>

          <div className="mt-6 grid gap-2.5">
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="press inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0E0E0E] px-5 text-[15px] font-medium text-white hover:bg-[#262626]"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.5 13.5l.8-2.6A5.5 5.5 0 1 1 5.6 13l-3.1.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M6 5.8c.1 1.6 1.6 3.4 3.4 3.9l.8-.8 1.2.6-.3 1c-2.6.2-5.3-2.4-5.3-5l1-.3.5 1.2-.8.8" fill="currentColor" />
              </svg>
              {t.whatsapp}
            </a>
            <a
              href={SITE}
              target="_blank"
              rel="noopener"
              className="press inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-black/15 px-5 text-[15px] font-medium hover:border-black/40"
            >
              {t.visit}
              <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
