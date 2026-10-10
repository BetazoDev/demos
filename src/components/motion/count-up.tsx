"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Counts the numeric part of a real figure ("+2,000", "94%", "4,525", "1.3K", "1988")
 * up from 0 when it enters the viewport. Server render shows the final value.
 * Years (4 digits, no separators) are left static: counting a year reads wrong.
 */
export function CountUp({ value, className, duration = 1.4 }: { value: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const isYear = /^\d{4}$/.test(value.trim());
  const animatable = !!match && !isYear;
  const startedRef = useRef(false);

  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const useComma = numStr.includes(",");
  const target = parseFloat(numStr.replace(/,/g, ""));
  const format = (n: number) => {
    const fixed = n.toFixed(decimals);
    const [i, d] = fixed.split(".");
    const int = useComma ? Number(i).toLocaleString("en-US") : i;
    return prefix + int + (d ? "." + d : "") + suffix;
  };

  useLayoutEffect(() => {
    if (!animatable || reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (r.top > window.innerHeight) ref.current.textContent = format(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!animatable || reduce || !inView || startedRef.current || !ref.current) return;
    startedRef.current = true;
    const node = ref.current;
    const controls = animate(0, target, {
      duration,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => {
        node.textContent = format(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
