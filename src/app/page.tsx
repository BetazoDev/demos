import { SITES } from "@/data/sites";
import { HeroIntro, HeroItem } from "@/components/motion";
import type { Metadata } from "next";
import { Directory } from "./directory";

export const metadata: Metadata = { title: "Directorio de rediseños" };

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#F7F7F5] font-sans text-[#141414] selection:bg-[#141414] selection:text-white">
      <div className="mx-auto max-w-[1320px] px-5 pb-28 pt-16 md:px-10 md:pt-24">
        <HeroIntro as="header" className="grid gap-10 border-b border-black/10 pb-12 md:grid-cols-[1.4fr_1fr] md:items-end md:pb-16">
          <div>
            <HeroItem as="h1" blur className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              Rediseños
            </HeroItem>
            <HeroItem as="p" className="mt-6 max-w-[34rem] text-lg leading-relaxed text-black/60">
              Propuestas de home para despachos de abogados en México, construidas con el logo, los colores y la información real de cada firma.
            </HeroItem>
          </div>
          <HeroItem className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between md:justify-end md:gap-10">
            <div>
              <p className="font-mono text-4xl tabular-nums tracking-tight">{SITES.length}</p>
              <p className="mt-1 text-sm text-black/50">sitios rediseñados</p>
            </div>
            {/* Enlace normal (sin prefetch): /contacto es una ruta privada que devuelve HTML. */}
            <a href="/contacto" className="press nudge inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border border-black/15 bg-white px-5 text-sm font-medium hover:border-black/40">
              Contactos por WhatsApp
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </HeroItem>
        </HeroIntro>
        <Directory sites={SITES} />
      </div>
    </main>
  );
}
