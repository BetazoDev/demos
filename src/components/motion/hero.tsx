"use client";

import { motion, useReducedMotion, useScroll, useTransform, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { EASE_IN_OUT, EASE_OUT, type Tag } from "./reveal";

/**
 * Orchestrates the first-viewport entrance on page load (not on scroll).
 * Wrap the hero copy column; mark each line/element with <HeroItem>.
 */
export function HeroIntro({ children, className, delay = 0.1, gap = 0.09, as = "div" }: { children: ReactNode; className?: string; delay?: number; gap?: number; as?: Tag }) {
  const MotionTag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </MotionTag>
  );
}

/** One element of the hero entrance. `blur` softens the headline as it lands. */
export function HeroItem({ children, className, y = 24, blur = false, as = "div" }: { children: ReactNode; className?: string; y?: number; blur?: boolean; as?: Tag }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, transform: `translateY(${reduce ? 0 : y}px)`, filter: blur && !reduce ? "blur(6px)" : "blur(0px)" },
        show: { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)", transition: { duration: reduce ? 0.3 : 0.9, ease: EASE_OUT } },
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Media that unveils with a clip-path wipe (bottom to top) on load or on view,
 * while the inner image settles from a slight zoom. Put an <Image fill> inside.
 */
export function MediaReveal({ children, className, delay = 0.2, onView = false }: { children: ReactNode; className?: string; delay?: number; onView?: boolean }) {
  const reduce = useReducedMotion();
  const hidden = reduce ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)" };
  const shown = reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" };
  const trigger = onView ? { whileInView: shown, viewport: { once: true, margin: "0px 0px -80px 0px" } } : { animate: shown };
  return (
    <motion.div className={className} initial={hidden} {...trigger} transition={{ duration: reduce ? 0.4 : 1.1, delay, ease: EASE_IN_OUT }}>
      <motion.div
        className="relative h-full w-full"
        initial={{ transform: reduce ? "scale(1)" : "scale(1.08)" }}
        {...(onView ? { whileInView: { transform: "scale(1)" }, viewport: { once: true } } : { animate: { transform: "scale(1)" } })}
        transition={{ duration: reduce ? 0 : 1.6, delay, ease: EASE_OUT }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Subtle scroll-linked drift for a background/hero image (±distance px).
 * The inner layer is scaled just enough (from the measured container height) to never reveal an edge.
 * Decorative; disabled under reduced motion. Parent must clip overflow.
 */
export function Parallax({ children, className, distance = 60 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [scale, setScale] = useState(1.12);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const h = el.getBoundingClientRect().height || 1;
      setScale(Math.max(1.04, 1 + (2 * distance + 8) / h));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [distance]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const transform = useTransform(y, (v) => `translateY(${reduce ? 0 : v}px) scale(${reduce ? 1 : scale})`);
  return (
    <div ref={ref} className={className}>
      <motion.div className="absolute inset-0" style={{ transform }}>
        {children}
      </motion.div>
    </div>
  );
}
