"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { EASE_OUT } from "@/components/motion";
import type { Contact, ContactGroup } from "./types";

const GROUPS: { id: ContactGroup; label: string; desc: string }[] = [
  { id: "demo", label: "Con demo", desc: "Les hicimos rediseño: el segundo mensaje incluye su propuesta y la auditoría gratuita. Primero van los que hoy tienen la web caída o rota." },
  { id: "caida", label: "Web caída", desc: "Tienen dominio, pero su sitio no funciona. El segundo mensaje ofrece repararlo y la auditoría gratuita." },
  { id: "sinweb", label: "Sin web", desc: "Solo tienen ficha en Google Maps o Facebook. El segundo mensaje propone crear su sitio." },
  { id: "fuera", label: "Fuera de esta ronda", desc: "Sin mensaje: sin datos de contacto, con web funcionando y sin demo, o conviene revisarlos antes." },
];

const STATUSES = [
  { id: "pendiente", label: "Pendiente", dot: "bg-black/25" },
  { id: "m1", label: "1er mensaje enviado", dot: "bg-[#3B82F6]" },
  { id: "respondio", label: "Respondió", dot: "bg-[#D97706]" },
  { id: "m2", label: "Propuesta enviada", dot: "bg-[#7C3AED]" },
  { id: "interesado", label: "Interesado", dot: "bg-[#16A34A]" },
  { id: "sinwa", label: "Sin WhatsApp", dot: "bg-[#DC2626]" },
  { id: "descartado", label: "Descartado", dot: "bg-black/25" },
] as const;
type StatusId = (typeof STATUSES)[number]["id"];

// Seguimiento por navegador (misma clave que la versión anterior para no perder lo marcado).
const KEY = "contacto-whatsapp-v1";
type Saved = { sender: string; status: Record<string, StatusId>; edits: Record<string, string>; tab: ContactGroup };
const DEFAULT: Saved = { sender: "Manuel", status: {}, edits: {}, tab: "demo" };

const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const host = (u: string) => { try { return new URL(u).host.replace(/^www\./, ""); } catch { return u; } };

export function ContactBoard({ contacts }: { contacts: Contact[] }) {
  const reduce = useReducedMotion();
  const [saved, setSaved] = useState<Saved>(DEFAULT);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusId | "all">("all");
  const [toast, setToast] = useState("");
  const loaded = useRef(false);

  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setSaved({ ...DEFAULT, ...JSON.parse(raw) }); } catch {}
    loaded.current = true;
  }, []);
  useEffect(() => {
    if (!loaded.current) return;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch {}
  }, [saved]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1600);
    return () => clearTimeout(t);
  }, [toast]);

  const statusOf = (id: string): StatusId => saved.status[id] ?? "pendiente";
  const setStatus = (id: string, s: StatusId) => setSaved((p) => ({ ...p, status: { ...p.status, [id]: s } }));
  const render = (tpl: string | null, c: Contact) => (tpl ?? "").replaceAll("{nombre}", saved.sender.trim() || "[tu nombre]").replaceAll("{demo}", c.demo ?? "");
  const textFor = (c: Contact, step: 1 | 2) => saved.edits[`${c.id}:${step}`] ?? render(step === 1 ? c.m1 : c.m2, c);

  const inGroup = useMemo(() => contacts.filter((c) => c.group === saved.tab), [contacts, saved.tab]);
  const visible = useMemo(() => {
    const q = normalize(query.trim());
    return inGroup.filter((c) => {
      if (statusFilter !== "all" && statusOf(c.id) !== statusFilter) return false;
      return !q || normalize(`${c.firma} ${c.zona ?? ""} ${c.categoria} ${c.waDisplay ?? ""} ${c.phoneAlt ?? ""} ${c.web ?? ""}`).includes(q);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inGroup, query, statusFilter, saved.status]);
  const done = inGroup.filter((c) => statusOf(c.id) !== "pendiente").length;
  const group = GROUPS.find((g) => g.id === saved.tab)!;

  const copy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); setToast("Mensaje copiado"); } catch { setToast("No se pudo copiar"); }
  };
  const exportCsv = () => {
    const rows = [["Despacho", "Grupo", "WhatsApp", "Correo", "Estado", "Demo", "Web actual", "Segundo intento"]].concat(
      contacts.map((c) => [c.firma, GROUPS.find((g) => g.id === c.group)!.label, c.waDisplay ?? "", c.email ?? "", c.group === "fuera" ? "" : STATUSES.find((s) => s.id === statusOf(c.id))!.label, c.demo ?? "", c.web ?? "", (c.retry ?? []).map((r) => r.display).join(" / ")]));
    const csv = rows.map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    a.download = `seguimiento-whatsapp-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  return (
    <section aria-label="Contactos" className="pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Grupos" className="flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={saved.tab === g.id}
              onClick={() => setSaved((p) => ({ ...p, tab: g.id }))}
              className={`press inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm ${
                saved.tab === g.id ? "border-[#141414] bg-[#141414] text-white" : "border-black/15 bg-white text-black/70 hover:border-black/40"
              }`}
            >
              {g.label}
              <span className={`font-mono text-xs tabular-nums ${saved.tab === g.id ? "text-white/60" : "text-black/40"}`}>{contacts.filter((c) => c.group === g.id).length}</span>
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
            placeholder="Buscar despacho, zona o teléfono"
            className="h-11 w-full rounded-full border border-black/15 bg-white pl-11 pr-4 text-[15px] text-[#141414] placeholder:text-black/40 focus:border-black/50 focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <label className="relative">
          <span className="sr-only">Filtrar por estado</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusId | "all")}
            disabled={saved.tab === "fuera"}
            className="h-10 appearance-none rounded-full border border-black/15 bg-white pl-4 pr-9 text-sm text-black/70 hover:border-black/40 focus:border-black/50 focus:outline-none disabled:opacity-40"
          >
            <option value="all">Todos los estados</option>
            {STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <Chevron />
        </label>
        <label className="flex h-10 items-center gap-2 rounded-full border border-black/15 bg-white pl-4 pr-1.5 text-sm text-black/50 focus-within:border-black/50">
          Tu nombre
          <input
            value={saved.sender}
            onChange={(e) => setSaved((p) => ({ ...p, sender: e.target.value }))}
            autoComplete="name"
            className="h-7 w-32 rounded-full bg-black/[0.04] px-3 text-[#141414] focus:outline-none"
          />
        </label>
        <button type="button" onClick={exportCsv} className="press inline-flex h-10 items-center gap-2 rounded-full border border-black/15 bg-white px-4 text-sm text-black/70 hover:border-black/40">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v8m0 0L5 7m3 3 3-3M3 12.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Exportar
        </button>
      </div>

      <p className="mt-6 max-w-[62ch] text-sm text-black/50">{group.desc}</p>
      <p className="mt-2 text-sm text-black/50" aria-live="polite">
        {visible.length} {visible.length === 1 ? "despacho" : "despachos"}
        {saved.tab !== "fuera" && <> · {done} de {inGroup.length} con seguimiento</>}
      </p>

      <motion.ul layout className="mt-6 grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((c, i) => (
            <motion.li
              key={c.id}
              className="min-w-0"
              layout={!reduce}
              initial={{ opacity: 0, transform: reduce ? "translateY(0px)" : "translateY(18px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              exit={{ opacity: 0, transform: "scale(0.98)", transition: { duration: 0.15, ease: EASE_OUT } }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.05, ease: EASE_OUT, layout: { type: "spring", duration: 0.45, bounce: 0.1 } }}
            >
              <Card
                c={c}
                status={statusOf(c.id)}
                onStatus={(s) => setStatus(c.id, s)}
                text={(step) => textFor(c, step)}
                edited={(step) => saved.edits[`${c.id}:${step}`] !== undefined}
                onEdit={(step, value) => setSaved((p) => ({ ...p, edits: { ...p.edits, [`${c.id}:${step}`]: value } }))}
                onReset={(step) => setSaved((p) => { const edits = { ...p.edits }; delete edits[`${c.id}:${step}`]; return { ...p, edits }; })}
                onSent={(step) => {
                  const cur = statusOf(c.id);
                  if (step === 1 && cur === "pendiente") setStatus(c.id, "m1");
                  if (step === 2 && ["pendiente", "m1", "respondio"].includes(cur)) setStatus(c.id, "m2");
                }}
                onCopy={copy}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center">
          <p className="text-lg">Ningún despacho coincide con ese filtro.</p>
          <button onClick={() => { setQuery(""); setStatusFilter("all"); }} className="press mt-4 h-10 rounded-full bg-[#141414] px-5 text-sm text-white">
            Ver todos
          </button>
        </div>
      )}

      <div
        role="status"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#141414] px-4 py-2.5 text-sm text-white shadow-lg transition-[opacity,transform] duration-200 ease-[var(--ease-out)] ${toast ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        {toast}
      </div>
    </section>
  );
}

type CardProps = {
  c: Contact;
  status: StatusId;
  onStatus: (s: StatusId) => void;
  text: (step: 1 | 2) => string;
  edited: (step: 1 | 2) => boolean;
  onEdit: (step: 1 | 2, value: string) => void;
  onReset: (step: 1 | 2) => void;
  onSent: (step: 1 | 2) => void;
  onCopy: (text: string) => void;
};

function Card({ c, status, onStatus, text, edited, onEdit, onReset, onSent, onCopy }: CardProps) {
  // Con números para un segundo intento, «Sin WhatsApp» no se atenúa: aún hay a quién escribir.
  const dim = (status === "sinwa" && !c.retry) || status === "descartado";
  const meta = [c.categoria, c.zona, c.rating ? `★ ${c.rating.toFixed(1)} (${c.reviews} reseñas)` : null].filter(Boolean).join(" · ");
  return (
    <article className={`rounded-2xl bg-white p-5 ring-1 ring-black/5 transition-opacity duration-300 md:p-6 ${dim ? "opacity-55" : ""}`}>
      <div className={c.thumb ? "grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]" : ""}>
        {c.thumb && c.demo && (
          <a href={c.demo} target="_blank" rel="noopener" className="img-zoom relative hidden aspect-[16/10] overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/5 lg:block" aria-label={`Abrir la propuesta de ${c.firma}`}>
            <Image unoptimized src={c.thumb} alt="" fill sizes="240px" className="object-cover object-top" />
          </a>
        )}
        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs text-black/45">{meta}</p>
              <h2 className="mt-1 text-lg font-medium tracking-tight">{c.firma}</h2>
            </div>
            {c.group !== "fuera" && (
              <label className="relative shrink-0">
                <span className="sr-only">Estado de {c.firma}</span>
                <span aria-hidden="true" className={`pointer-events-none absolute left-3.5 top-1/2 size-2 -translate-y-1/2 rounded-full ${STATUSES.find((s) => s.id === status)!.dot}`} />
                <select
                  value={status}
                  onChange={(e) => onStatus(e.target.value as StatusId)}
                  className="h-9 appearance-none rounded-full border border-black/15 bg-white pl-8 pr-9 text-[13px] font-medium hover:border-black/40 focus:border-black/50 focus:outline-none"
                >
                  {STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
                <Chevron />
              </label>
            )}
          </div>

          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {c.waDisplay && <Fact label="WhatsApp"><span className="font-mono text-[13.5px] tabular-nums">{c.waDisplay}</span>{c.waSource && <span className="text-xs text-black/45">{c.waSource}</span>}</Fact>}
            {c.phoneAlt && (
              <Fact label="Tel. en Google Maps">
                <a href={`tel:+52${c.phoneAlt.replace(/\s/g, "")}`} className="link-u font-mono text-[13.5px] tabular-nums">{c.phoneAlt}</a>
                {/* Por si el número principal no tiene WhatsApp: abre el chat con el primer mensaje. */}
                <a href={`https://wa.me/52${c.phoneAlt.replace(/\s/g, "")}?text=${encodeURIComponent(text(1))}`} target="_blank" rel="noopener" className="link-u text-xs text-black/55">
                  Probar en WhatsApp
                </a>
              </Fact>
            )}
            {c.email && <Fact label="Correo"><a href={`mailto:${c.email}`} className="link-u">{c.email}</a></Fact>}
            {c.web && (
              <Fact label="Web actual">
                <a href={c.web} target="_blank" rel="noopener" className="link-u">{host(c.web)}</a>
                {c.webStatus && <span className={`rounded-full px-2 py-0.5 text-xs ${c.webBad ? "bg-[#FDECEA] text-[#B42318]" : "bg-black/5 text-black/55"}`}>{c.webStatus}</span>}
              </Fact>
            )}
            {c.facebook && <Fact label="Facebook"><a href={c.facebook} target="_blank" rel="noopener" className="link-u">Página</a></Fact>}
            {c.demo && <Fact label="Demo"><a href={c.demo} target="_blank" rel="noopener" className="link-u font-medium">{c.demo.replace(/^https:\/\//, "")}</a></Fact>}
            {c.maps && <Fact label="Mapa"><a href={c.maps} target="_blank" rel="noopener" className="link-u">Google Maps</a></Fact>}
          </dl>

          {c.retry && (
            <div className="mt-4 rounded-xl bg-[#EEF4FF] px-3.5 py-3">
              <p className="text-[13px] font-medium text-[#1E3A8A]">Segundo intento</p>
              <ul className="mt-2 flex flex-col gap-2">
                {c.retry.map((r) => (
                  <li key={r.wa} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[13px]">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${r.level === "alta" ? "bg-[#16A34A] text-white" : r.level === "media" ? "bg-[#1E3A8A] text-white" : "bg-black/[0.07] text-black/60"}`}>
                      {r.level === "alta" ? "WhatsApp publicado" : r.level === "media" ? "Probable" : "Fijo"}
                    </span>
                    <a href={`tel:+${r.wa}`} className="link-u font-mono text-[13.5px] tabular-nums">{r.display}</a>
                    <a href={`https://wa.me/${r.wa}?text=${encodeURIComponent(text(1))}`} target="_blank" rel="noopener" onClick={() => onSent(1)} className="link-u text-xs font-medium text-[#1E3A8A]">
                      Probar en WhatsApp
                    </a>
                    <span className="text-xs text-black/50">{r.source}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {c.note && <p className="mt-4 rounded-xl bg-[#FFF4DC] px-3.5 py-2.5 text-[13px] leading-snug text-[#7A4A00]">{c.note}</p>}
          {c.group === "fuera" && c.reason && <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-black/60">{c.reason}</p>}
        </div>
      </div>

      {c.group !== "fuera" && (
        <div className="mt-6 grid gap-5 border-t border-black/[0.06] pt-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          {([1, 2] as const).map((step) => {
            const value = text(step);
            const wa = c.wa ? `https://wa.me/${c.wa}?text=${encodeURIComponent(value)}` : null;
            const mail = (!c.wa || status === "sinwa") && c.email ? `mailto:${c.email}?subject=${encodeURIComponent(`Sitio web de ${c.firma}`)}&body=${encodeURIComponent(value)}` : null;
            return (
              <div key={step} className="flex min-w-0 flex-col gap-2.5">
                <p className="flex items-baseline gap-2 text-[13px] font-medium">
                  <span className="grid size-5 translate-y-[-1px] place-items-center rounded-full bg-[#141414] font-mono text-[11px] text-white">{step}</span>
                  {step === 1 ? "Primer mensaje" : "Cuando respondan"}
                  <span className="font-normal text-black/45">{step === 1 ? "para confirmar el contacto" : "como Hemeron"}</span>
                </p>
                <textarea
                  value={value}
                  onChange={(e) => onEdit(step, e.target.value)}
                  rows={step === 1 ? 3 : 8}
                  aria-label={`Mensaje ${step} para ${c.firma}`}
                  className="w-full resize-y rounded-xl border border-transparent bg-black/[0.035] px-4 py-3 text-[14px] leading-relaxed text-[#141414] [field-sizing:content] focus:border-black/15 focus:bg-white focus:outline-none"
                />
                <div className="flex flex-wrap items-center gap-2">
                  {wa && (
                    <a href={wa} target="_blank" rel="noopener" onClick={() => onSent(step)} className="press inline-flex h-10 items-center gap-2 rounded-full bg-[#141414] px-4 text-sm font-medium text-white hover:bg-black">
                      <WhatsAppIcon /> Abrir en WhatsApp
                    </a>
                  )}
                  {mail && (
                    <a href={mail} onClick={() => onSent(step)} className="press inline-flex h-10 items-center gap-2 rounded-full bg-[#141414] px-4 text-sm font-medium text-white hover:bg-black">
                      Enviar por correo
                    </a>
                  )}
                  <button type="button" onClick={() => onCopy(value)} className="press inline-flex h-10 items-center gap-2 rounded-full border border-black/15 bg-white px-4 text-sm hover:border-black/40">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M10.5 3.5v-.5A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5" stroke="currentColor" strokeWidth="1.4" /></svg>
                    Copiar
                  </button>
                  {edited(step) && (
                    <button type="button" onClick={() => onReset(step)} className="press h-10 rounded-full px-3 text-sm text-black/50 hover:text-black">
                      Restablecer
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-black/40">{label}</dt>
      <dd className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 [overflow-wrap:anywhere]">{children}</dd>
    </div>
  );
}

function Chevron() {
  return (
    <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-black/45" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="m2 3.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 13.5l.8-2.6A5.5 5.5 0 1 1 5.6 13l-3.1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6 5.8c.1 1.6 1.6 3.4 3.4 3.9l.8-.8 1.2.6-.3 1c-2.6.2-5.3-2.4-5.3-5l1-.3.5 1.2-.8.8" fill="currentColor" />
    </svg>
  );
}
