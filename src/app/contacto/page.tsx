import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { HeroIntro, HeroItem } from "@/components/motion";
import { authConfigured, SESSION_COOKIE, verifySession } from "@/lib/directory-auth";
import { ContactBoard } from "./contact-board";
import { loadContacts } from "./data";

export const metadata: Metadata = { title: "Contactos" };

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-[#F7F7F5] font-sans text-[#141414] selection:bg-[#141414] selection:text-white">
      <div className="mx-auto max-w-[1320px] px-5 pb-28 pt-16 md:px-10 md:pt-24">
        <HeroIntro as="header" className="grid gap-10 border-b border-black/10 pb-12 md:grid-cols-[1.4fr_1fr] md:items-end md:pb-16">
          <div>
            <HeroItem as="h1" blur className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              Contactos
            </HeroItem>
            <HeroItem as="p" className="mt-6 max-w-[34rem] text-lg leading-relaxed text-black/60">
              Primero un mensaje para confirmar que el número es del despacho; cuando respondan, la presentación de Hemeron con algo específico de su firma.
            </HeroItem>
          </div>
          <HeroItem className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between md:justify-end md:gap-10">
            <p className="max-w-[16rem] text-sm leading-relaxed text-black/50">
              Si WhatsApp indica que un número no tiene cuenta, márcalo «Sin WhatsApp» y llama.
            </p>
            {/* Enlace normal: el directorio es otra ruta privada. */}
            <a href="/" className="press inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border border-black/15 bg-white px-5 text-sm font-medium hover:border-black/40">
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="rotate-180">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Directorio
            </a>
          </HeroItem>
        </HeroIntro>
        <Suspense fallback={<p className="pt-10 text-sm text-black/50">Cargando contactos…</p>}>
          <Board />
        </Suspense>
      </div>
    </main>
  );
}

async function Board() {
  // El proxy ya exige sesión; se vuelve a comprobar aquí, junto a los datos.
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!authConfigured() || !verifySession(token)) notFound();
  return <ContactBoard contacts={loadContacts()} />;
}
