"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Site } from "@/data/sites";
import { EASE_OUT } from "@/components/motion";

const FILTERS = [
  { id: "all", label: "Todos" },
  { id: "despacho", label: "Despachos" },
  { id: "otros", label: "Otros giros" },
  { id: "unavailable", label: "Sin sitio" },
] as const;
type FilterId = (typeof FILTERS)[number]["id"];

const KIND_LABEL: Record<Site["kind"], string> = {
  despacho: "Despacho",
  auditoría: "Auditoría",
  colegio: "Colegio de abogados",
  legaltech: "Legaltech",
  vacante: "Vacante",
  arquitectura: "Arquitectura",
};

const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function Directory({ sites }: { sites: Site[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterId>("all");
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    return sites.filter((s) => {
      if (filter === "despacho" && (s.kind !== "despacho" || s.status !== "home")) return false;
      if (filter === "otros" && s.kind === "despacho") return false;
      if (filter === "unavailable" && s.status !== "unavailable") return false;
      if (!q) return true;
      return normalize(`${s.num} ${s.name} ${s.domain}`).includes(q);
    });
  }, [sites, query, filter]);

  return (
    <section aria-label="Directorio" className="pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Filtrar" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`press h-10 rounded-full border px-4 text-sm ${
                filter === f.id ? "border-[#141414] bg-[#141414] text-white" : "border-black/15 bg-white text-black/70 hover:border-black/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="relative block md:w-80">
          <span className="sr-only">Buscar despacho</span>
          <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="m11 11 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o dominio"
            className="h-11 w-full rounded-full border border-black/15 bg-white pl-11 pr-4 text-[15px] text-[#141414] placeholder:text-black/40 focus:border-black/50 focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-black/50" aria-live="polite">
        {visible.length} {visible.length === 1 ? "resultado" : "resultados"}
      </p>

      <motion.ul layout className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((s, i) => (
            <motion.li
              key={s.slug}
              className="min-w-0"
              layout={!reduce}
              initial={{ opacity: 0, transform: reduce ? "translateY(0px)" : "translateY(18px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              exit={{ opacity: 0, transform: "scale(0.97)", transition: { duration: 0.15, ease: EASE_OUT } }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: EASE_OUT, layout: { type: "spring", duration: 0.45, bounce: 0.1 } }}
            >
              {s.status === "home" ? <Card site={s} eager={i < 3} /> : <UnavailableCard site={s} />}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center">
          <p className="text-lg">Ningún sitio coincide con “{query}”.</p>
          <button onClick={() => { setQuery(""); setFilter("all"); }} className="press mt-4 h-10 rounded-full bg-[#141414] px-5 text-sm text-white">
            Ver todos
          </button>
        </div>
      )}
    </section>
  );
}

function Card({ site, eager }: { site: Site; eager: boolean }) {
  return (
    <Link href={`/${site.slug}`} className="group block focus-visible:outline-offset-8">
      <div className="img-zoom relative aspect-[16/10] overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/5">
        <Image
          src={`/thumbs/${site.num}.webp`}
          alt={`Rediseño de la home de ${site.name}`}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
          preload={eager}
        />
      </div>
      <div className="nudge mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs text-black/45">
            <span className="font-mono tabular-nums">{site.num}</span>
            {site.kind !== "despacho" && <span className="rounded-full bg-black/5 px-2 py-0.5">{KIND_LABEL[site.kind]}</span>}
          </p>
          <h2 className="mt-1 truncate text-lg font-medium tracking-tight">{site.name}</h2>
          <p className="truncate text-sm text-black/50">{site.domain}</p>
        </div>
        <svg className="mt-6 shrink-0 text-black/40 group-hover:text-black" width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}

function UnavailableCard({ site }: { site: Site }) {
  return (
    <div>
      <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-black/20 bg-white px-8 text-center">
        <p className="text-sm leading-relaxed text-black/55">
          Sitio no disponible: sin contenido verificable en línea ni en archivos públicos.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-mono text-xs tabular-nums text-black/45">{site.num}</p>
        <h2 className="mt-1 truncate text-lg font-medium tracking-tight text-black/60">{site.name}</h2>
        <a href={site.url} target="_blank" rel="noreferrer" className="link-u text-sm text-black/50">
          {site.domain}
        </a>
      </div>
    </div>
  );
}
