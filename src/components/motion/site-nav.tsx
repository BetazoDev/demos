"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { EASE_OUT } from "./reveal";

export type NavLink = { label: string; href: string };

type SiteNavProps = {
  logo: ReactNode;
  links: NavLink[];
  /** Right side on desktop (CTA button, language toggle, phone...). Also shown at the end of the mobile panel. */
  actions?: ReactNode;
  /** Classes for the bar at rest (top of page). */
  className?: string;
  /** Classes added once the page is scrolled (background, shadow, border...). */
  scrolledClassName?: string;
  /** Inner container classes (max width, padding, height). */
  innerClassName?: string;
  linkClassName?: string;
  /** Mobile panel surface classes (background + text color). */
  panelClassName?: string;
  /** Mobile panel link classes. */
  panelLinkClassName?: string;
  /** Color classes for the hamburger icon lines. */
  burgerClassName?: string;
  /** Desktop breakpoint where links show inline. */
  breakpoint?: "md" | "lg" | "xl";
  /** Render fixed over the hero (out of flow) instead of sticky in flow; use scrolledClassName for its solid state. */
  overlay?: boolean;
  /** Content shown above the bar (utility strip). Collapses away on scroll is NOT done: keep it short. */
  topBar?: ReactNode;
};

/**
 * Sticky site header with scroll state and an accessible mobile menu.
 * Scroll state: background/shadow transition (cheap properties) after 24px.
 * Mobile panel: opacity + translateY drop-in 260ms ease-out, links stagger 40ms; Escape closes; body scroll locked.
 */
export function SiteNav({
  logo,
  links,
  actions,
  className = "",
  scrolledClassName = "",
  innerClassName = "mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:px-8 xl:px-0",
  linkClassName = "",
  panelClassName = "bg-white text-neutral-900",
  panelLinkClassName = "",
  burgerClassName = "bg-current",
  breakpoint = "lg",
  overlay = false,
  topBar,
}: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const panelId = useId();
  const firstLink = useRef<HTMLAnchorElement>(null);
  const burger = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const show = { md: "md:flex", lg: "lg:flex", xl: "xl:flex" }[breakpoint];
  const hide = { md: "md:hidden", lg: "lg:hidden", xl: "xl:hidden" }[breakpoint];

  return (
    <header
      className={`${overlay ? "fixed inset-x-0 top-0" : "sticky top-0"} z-50 transition-[background-color,box-shadow,border-color,color] duration-300 ease-[var(--ease-out)] ${className} ${scrolled || open ? scrolledClassName : ""}`}
    >
      {topBar}
      <div className={innerClassName}>
        <div className="relative z-10 flex shrink-0 items-center">{logo}</div>

        <nav aria-label="Principal" className={`hidden items-center ${show}`}>
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className={`link-u ${linkClassName}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`hidden items-center gap-5 ${show}`}>{actions}</div>

        <button
          ref={burger}
          type="button"
          className={`press relative z-10 -mr-2 flex h-11 w-11 items-center justify-center ${hide}`}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 top-0 h-[1.5px] w-6 transition-transform duration-200 ease-[var(--ease-out)] ${burgerClassName} ${open ? "translate-y-[5.25px] rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-[1.5px] w-6 transition-transform duration-200 ease-[var(--ease-out)] ${burgerClassName} ${open ? "-translate-y-[5.25px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            className={`fixed inset-x-0 bottom-0 top-0 z-0 flex flex-col overflow-y-auto px-6 pb-10 pt-28 ${hide} ${panelClassName}`}
            initial={{ opacity: 0, transform: reduce ? "none" : "translateY(-12px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: reduce ? "none" : "translateY(-8px)", transition: { duration: 0.18, ease: EASE_OUT } }}
            transition={{ duration: 0.26, ease: EASE_OUT }}
          >
            <motion.ul
              className="flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
            >
              {links.map((l, i) => (
                <motion.li
                  key={l.href + l.label}
                  variants={{
                    hidden: { opacity: 0, transform: reduce ? "none" : "translateY(8px)" },
                    show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.3, ease: EASE_OUT } },
                  }}
                >
                  <Link
                    ref={i === 0 ? firstLink : undefined}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-current/15 py-4 text-2xl ${panelLinkClassName}`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            {actions && <div className="mt-8 flex flex-wrap items-center gap-4" onClick={() => setOpen(false)}>{actions}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
