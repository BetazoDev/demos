"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { EASE_OUT } from "./motion/reveal";

/**
 * Wraps a contact form in these redesign prototypes. Submitting does not send anything:
 * it shows an inline note that the form is a demo. Pass the site's own fields as children.
 */
export function DemoForm({
  children,
  className = "",
  noteClassName = "text-sm opacity-70",
  note = "Formulario de demostración: el envío no está conectado.",
}: {
  children: ReactNode;
  className?: string;
  noteClassName?: string;
  note?: string;
}) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {children}
      <AnimatePresence>
        {sent && (
          <motion.p
            role="status"
            className={noteClassName}
            initial={{ opacity: 0, transform: "translateY(4px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            {note}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
