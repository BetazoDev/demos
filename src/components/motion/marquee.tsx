import type { CSSProperties, ReactNode } from "react";

/**
 * Endless horizontal strip for logo walls / credential lists. Max ONE per page.
 * CSS animation (off main thread), pauses on hover (fine pointers), static under reduced motion.
 * `duration` in seconds for one full loop; `gap` in px between items.
 * Each half carries trailing padding equal to the gap so the -50% loop is seamless.
 */
export function Marquee({ children, className = "", duration = 40, gap = 64 }: { children: ReactNode; className?: string; duration?: number; gap?: number }) {
  const track = { ["--marquee-duration" as string]: `${duration}s` } as CSSProperties;
  const half: CSSProperties = { gap, paddingRight: gap };
  return (
    <div className={`marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}>
      <div className="marquee-track flex w-max" style={track}>
        <div className="flex shrink-0 items-center" style={half}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={half} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
