"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

export type Tag = "div" | "section" | "li" | "article" | "header" | "footer" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "figure" | "figcaption" | "ul" | "ol" | "dl" | "dt" | "dd" | "aside" | "nav" | "blockquote" | "address" | "form" | "main" | "small" | "strong";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
  /** px of upward travel; ignored under reduced motion */
  y?: number;
  /** seconds */
  duration?: number;
  as?: Tag;
  id?: string;
};

/**
 * Fades + lifts content in once when it scrolls into view.
 * Purpose: preventing a jarring change as sections arrive (marketing surface).
 * Reduced motion: opacity only, no travel.
 */
export function Reveal({ children, className, delay = 0, y = 18, duration = 0.7, as = "div", id }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;
  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, transform: `translateY(${reduce ? 0 : y}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: reduce ? 0.3 : duration, delay, ease: EASE_OUT }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** seconds between children (30-80ms) */
  gap?: number;
  delay?: number;
  as?: Tag;
};

/** Parent that staggers its <StaggerItem> children when it enters the viewport. */
export function Stagger({ children, className, gap = 0.06, delay = 0, as = "div" }: StaggerProps) {
  const MotionTag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className, y = 16, as = "div" }: { children: ReactNode; className?: string; y?: number; as?: Tag }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, transform: `translateY(${reduce ? 0 : y}px)` },
        show: { opacity: 1, transform: "translateY(0px)", transition: { duration: reduce ? 0.3 : 0.6, ease: EASE_OUT } },
      }}
    >
      {children}
    </MotionTag>
  );
}
