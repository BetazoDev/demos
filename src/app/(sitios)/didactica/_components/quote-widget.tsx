"use client";

import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

// Cotizador: compone la solicitud y la abre en el WhatsApp real de Didáctica. No guarda ni envía nada más.
const WA = "5214492537391";
const NACIONALES = ["Barrancas del Cobre", "Teotihuacán, CDMX", "Six Flags, CDMX", "Guadalajara", "Querétaro", "San Miguel de Allende", "Monterrey", "Mazamitla", "Chichén Itzá", "CDMX", "Campeche", "Huasteca Potosina"];
const INTERNACIONALES = ["Disneyland, Disneyworld y Universal Studios", "NASA, Houston y Orlando", "Nueva York", "Washington", "Canadá", "Perú", "Reino Unido, Londres", "Francia, París"];
const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const field =
  "h-12 w-full appearance-none rounded-full border border-[#1B252F]/12 bg-white pl-4 pr-10 text-[15px] text-[#1B252F] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#2E3091] focus:shadow-[0_0_0_3px_rgba(46,48,145,0.14)]";

export function QuoteWidget({ className = "", display }: { className?: string; display: string }) {
  const [destino, setDestino] = useState("");
  const [alumnos, setAlumnos] = useState("");
  const [mes, setMes] = useState("");

  // Las filas de destinos (enlaces a #cotizar con data-destino) preseleccionan el destino aquí.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-destino]");
      if (a?.dataset.destino) setDestino(a.dataset.destino);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const texto = `Hola, me gustaría cotizar un viaje escolar${destino ? ` a ${destino}` : ""}${alumnos ? ` para ${alumnos} alumnos` : ""}${mes ? ` en ${mes}` : ""}.`;
  const href = `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;

  return (
    <form
      aria-label="Cotiza tu viaje"
      className={`flex flex-col gap-3 rounded-[24px] bg-white/92 p-5 shadow-[0_24px_60px_-24px_rgba(14,18,80,0.45)] ring-1 ring-white/60 backdrop-blur-md sm:p-6 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener");
      }}
    >
      <p className={`${display} text-[22px] font-medium leading-tight text-[#1B252F]`}>Cotiza tu viaje</p>
      <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1B252F]">
        Destino
        <span className="relative">
          <select value={destino} onChange={(e) => setDestino(e.target.value)} className={field}>
            <option value="">Elige un destino</option>
            <optgroup label="Nacionales">{NACIONALES.map((d) => <option key={d}>{d}</option>)}</optgroup>
            <optgroup label="Internacionales">{INTERNACIONALES.map((d) => <option key={d}>{d}</option>)}</optgroup>
          </select>
          <CaretDown size={16} weight="bold" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1B252F]/55" />
        </span>
      </label>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1B252F]">
          Alumnos
          <input type="number" inputMode="numeric" min={1} max={999} placeholder="40" value={alumnos} onChange={(e) => setAlumnos(e.target.value)} className={`${field} pr-4 placeholder:text-[#1B252F]/45`} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold text-[#1B252F]">
          Mes
          <span className="relative">
            <select value={mes} onChange={(e) => setMes(e.target.value)} className={field}>
              <option value="">Cuando sea</option>
              {MESES.map((m) => <option key={m}>{m}</option>)}
            </select>
            <CaretDown size={16} weight="bold" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1B252F]/55" />
          </span>
        </label>
      </div>
      <button
        type="submit"
        className={`press group mt-1 inline-flex h-14 items-center justify-between rounded-full bg-[#FFDE01] pl-6 pr-2 text-[16px] font-semibold text-[#1B252F] hover:bg-[#FFE94D] ${display}`}
      >
        Cotiza tu viaje por WhatsApp
        <span className="grid size-10 place-items-center rounded-full bg-[#1B252F] text-[#FFDE01] transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5">
          <ArrowRight size={18} weight="bold" aria-hidden="true" />
        </span>
      </button>
      <p className="text-xs leading-snug text-[#1B252F]/60">Se abre WhatsApp con tu solicitud lista para enviar.</p>
    </form>
  );
}
