import { SITES, type Site } from "@/data/sites";
import { SITES2 } from "@/data/sites2";
import { SITES3 } from "@/data/sites3";
import { HeroIntro, HeroItem } from "@/components/motion";
import type { Metadata } from "next";
import { Directory, type Entry, type List } from "./directory";

const KIND_LABEL: Record<Site["kind"], string> = {
  despacho: "Despacho",
  auditoría: "Auditoría",
  colegio: "Colegio de abogados",
  legaltech: "Legaltech",
  vacante: "Vacante",
  arquitectura: "Arquitectura",
  viajes: "Viajes escolares",
};
const KIND_LABEL2: Record<(typeof SITES2)[number]["kind"], string> = { despacho: "Despacho", legaltech: "Legaltech", contable: "Contable", asociación: "Asociación" };

const list1: Entry[] = SITES.map((s) => ({
  slug: s.slug,
  name: s.name,
  domain: s.domain,
  thumb: `/thumbs/${s.num}.webp`,
  kindLabel: s.kind === "despacho" ? null : KIND_LABEL[s.kind],
  isDespacho: s.kind === "despacho",
}));
const list2: Entry[] = SITES2.map((s) => ({
  slug: s.slug,
  name: s.name,
  domain: s.domain,
  thumb: `/thumbs/l2-${s.slug}.webp`,
  kindLabel: s.kind === "despacho" ? null : KIND_LABEL2[s.kind],
  isDespacho: s.kind === "despacho",
}));
const list3: Entry[] = SITES3.map((s) => ({
  slug: s.slug,
  name: s.name,
  domain: s.domain,
  thumb: `/thumbs/p-${s.slug}.webp`,
  kindLabel: s.category || null,
  isDespacho: /abogad|despacho|jur[ií]dic|legal/i.test(s.category),
}));
const LISTS: List[] = [
  { id: "1", label: "Lista 1", stack: "Next.js", entries: list1 },
  ...(list2.length ? [{ id: "2", label: "Lista 2", stack: "Astro", entries: list2 }] : []),
  ...(list3.length ? [{ id: "3", label: "Prospector", stack: "Astro", entries: list3 }] : []),
];

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
              Propuestas para despachos de abogados en México, construidas con el logo, los colores y la información real de cada firma. La lista 1 reúne homes en Next.js; la lista 2, sitios completos en Astro con transiciones de vista.
            </HeroItem>
          </div>
          <HeroItem className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between md:justify-end md:gap-10">
            <div>
              <p className="font-mono text-4xl tabular-nums tracking-tight">{SITES.length + SITES2.length}</p>
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
        <Directory lists={LISTS} />
      </div>
    </main>
  );
}
