"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { EASE_OUT } from "./reveal";

export type AccordionItem = { title: ReactNode; content: ReactNode };

/**
 * Disclosure list (FAQ, servicios desplegables). One open at a time by default.
 * Height + opacity 220ms ease-out (accordion is the sanctioned height exception).
 */
export function Accordion({
  items,
  className = "",
  itemClassName = "border-b border-current/15",
  buttonClassName = "flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium",
  panelClassName = "pb-6 pr-10 text-base leading-relaxed opacity-80",
  iconClassName = "",
  defaultOpen = -1,
  multiple = false,
}: {
  items: AccordionItem[];
  className?: string;
  itemClassName?: string;
  buttonClassName?: string;
  panelClassName?: string;
  iconClassName?: string;
  defaultOpen?: number;
  multiple?: boolean;
}) {
  const [openSet, setOpenSet] = useState<number[]>(defaultOpen >= 0 ? [defaultOpen] : []);
  const reduce = useReducedMotion();
  const base = useId();
  const toggle = (i: number) =>
    setOpenSet((s) => (s.includes(i) ? s.filter((x) => x !== i) : multiple ? [...s, i] : [i]));

  return (
    <div className={className}>
      {items.map((it, i) => {
        const open = openSet.includes(i);
        return (
          <div key={i} className={itemClassName}>
            <button
              type="button"
              className={`press ${buttonClassName}`}
              aria-expanded={open}
              aria-controls={`${base}-p${i}`}
              id={`${base}-b${i}`}
              onClick={() => toggle(i)}
            >
              <span>{it.title}</span>
              <span aria-hidden="true" className={`relative block h-4 w-4 shrink-0 ${iconClassName}`}>
                <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                <span className={`absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-200 ease-[var(--ease-out)] ${open ? "scale-y-0" : ""}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`${base}-p${i}`}
                  role="region"
                  aria-labelledby={`${base}-b${i}`}
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.22, ease: EASE_OUT }}
                >
                  <div className={panelClassName}>{it.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
