import type { Metadata } from "next";
import Image from "next/image";
import { Cinzel, Nunito_Sans } from "next/font/google";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Cinzel({ subsets: ["latin"], variable: "--s16-display" });
const body = Nunito_Sans({ subsets: ["latin"], variable: "--s16-body" });

export const metadata: Metadata = {
  title: "Blancas Abogados",
  description: "Más de 30 años de experiencia. Somos una firma de abogados con distintas áreas de práctica para ofrecerte los servicios que realmente necesitas.",
};

const IMG = "/sitios/16-blancas";
const D = "font-[family-name:var(--s16-display)]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const BAND =
  "https://images.unsplash.com/photo-1776291690930-3a7982170964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTE2MDY3OTJ8&ixlib=rb-4.1.0&q=80&w=1920";

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas-de-practica" },
  { label: "Contacto", href: "#contacto" },
];

const TEL = { label: "+52 55 5255 2881", href: "tel:+525552552881" };
const EMAIL = "contacto@blancas.mx";

const AREAS = [
  { t: "Administrativo", items: ["Administrativo", "Ambiente y Recursos Naturales", "Protección al Consumidor", "Seguridad Social", "Legislativo"] },
  { t: "Financiero", items: ["Bancario y financiero", "Financiamiento de proyectos e infraestructura", "Reestructuras y Concursos Mercantiles", "Seguros y Fianzas"] },
  { t: "Comercial", items: ["Corporativo", "Franquicias y Licencias", "Fusiones y Adquisiciones", "Laboral (auditorías y medidas preventivas)", "Licitaciones y Privatizaciones"] },
  { t: "Litigio", items: ["Arbitraje Comercial y Medios Alternos de Solución de Controversias", "Civil, Familiar y Mercantil", "Constitucional", "Patrimonial y Sucesorio", "Penal"] },
];

function Logo() {
  return (
    <a href="#top" aria-label="Blancas Abogados, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="" width={207} height={62} preload className="h-auto w-[160px] lg:w-[207px]" />
    </a>
  );
}

export default function BlancasPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s16-body)] leading-[normal] text-[#1F2A24] selection:bg-[#1A5633] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(26,86,51,0.6)]"
        innerClassName={`${WRAP} flex h-[84px] items-center gap-10 lg:h-[100px] [&>button]:ml-auto [&>nav]:ml-auto`}
        linkClassName="text-[15px] text-[#1F2A24]"
        panelClassName="bg-white text-[#1A5633] font-[family-name:var(--s16-body)]"
        panelLinkClassName={D}
        burgerClassName="bg-[#1A5633]"
        actions={
          <span className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <a href={TEL.href} className="link-u text-[15px] font-bold text-[#1A5633]">
              {TEL.label}
            </a>
            <a href="#contacto" className="press bg-[#1A5633] px-6 py-[13px] text-[15px] font-bold text-white hover:bg-[#144528]">
              Contáctanos
            </a>
          </span>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#1A5633] text-white">
          <HeroIntro className={`${WRAP} flex flex-col gap-12 pb-20 pt-20 lg:gap-14 lg:pb-24 lg:pt-28`}>
            <HeroItem as="h1" blur className={`${D} text-[clamp(2.75rem,6.4vw,5.75rem)] leading-[1.05] tracking-[-0.5px]`}>
              Más de 30 años
              <br /> de experiencia
            </HeroItem>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex max-w-[600px] flex-col gap-9">
                <HeroItem as="p" className="text-lg leading-[1.55] text-[#E3ECE6] md:text-xl">
                  Somos una firma de abogados con distintas áreas de práctica para ofrecerte los servicios que realmente necesitas.
                </HeroItem>
                <HeroItem className="flex flex-wrap gap-3.5">
                  <a href="#contacto" className="press bg-white px-[30px] py-[17px] text-base font-bold text-[#1A5633] hover:bg-[#E3ECE6]">
                    Contáctanos
                  </a>
                  <a href="#areas-de-practica" className="press border border-white/55 px-[30px] py-[17px] text-base font-bold hover:border-white hover:bg-white/10">
                    Ver áreas de práctica
                  </a>
                </HeroItem>
              </div>
              <HeroItem as="ul" className="flex w-full max-w-[340px] flex-col gap-[18px] border-t border-white/35 pt-6 text-base leading-[23px]">
                <li className="flex gap-3.5">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>
                    Copérnico No. 27, Col. Anzures,
                    <br />
                    Ciudad de México
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <Phone className="h-5 w-5 shrink-0" />
                  <a href={TEL.href} className="link-u">
                    {TEL.label}
                  </a>
                </li>
                <li className="flex gap-3.5">
                  <EnvelopeSimple className="h-5 w-5 shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="link-u">
                    {EMAIL}
                  </a>
                </li>
              </HeroItem>
            </div>
          </HeroIntro>
        </section>

        {/* Franja de imagen */}
        <div className="relative h-[300px] overflow-hidden bg-[#1A5633] md:h-[460px]">
          <Parallax className="absolute inset-x-0 -inset-y-12" distance={40}>
            <Image src={BAND} alt="Paseo de la Reforma con el Ángel de la Independencia al fondo, Ciudad de México" fill unoptimized sizes="100vw" className="object-cover" />
          </Parallax>
        </div>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-24 bg-white">
          <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-8 px-5 py-24 text-center md:px-8 lg:py-[136px]">
            <Reveal as="h2" className={`${D} text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.15] text-[#1A5633]`}>
              Blancas Abogados
            </Reveal>
            <Reveal delay={0.05}>
              <span aria-hidden="true" className="block h-px w-[72px] bg-[#1A5633]" />
            </Reveal>
            <Reveal delay={0.1} as="p" className="max-w-[900px] text-[clamp(1.375rem,2.1vw,1.875rem)] font-light leading-[1.47]">
              Nuestros socios y asociados son altamente reconocidos en el medio y especialistas, cada uno en su área, para ayudarte a tomar las mejores decisiones.
            </Reveal>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas-de-practica" className="scroll-mt-24 bg-[#EEF2EE]">
          <div className={`${WRAP} flex flex-col gap-14 pb-24 pt-24 lg:pb-32 lg:pt-[120px]`}>
            <Reveal as="h2" className={`${D} text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.15] text-[#1A5633]`}>
              Áreas de práctica
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-2" gap={0.07}>
              {AREAS.map((a) => (
                <StaggerItem key={a.t} as="article" className="flex flex-col gap-6 bg-white px-7 pb-10 pt-9 sm:px-11 sm:pb-11 sm:pt-10">
                  <h3 className={`${D} text-[clamp(1.625rem,2.1vw,1.875rem)] text-[#1A5633]`}>{a.t}</h3>
                  <ul className="flex flex-col gap-3">
                    {a.items.map((i) => (
                      <li key={i} className="flex gap-3.5 text-[17px] leading-[25px]">
                        <span aria-hidden="true" className="mt-3 block h-px w-3.5 shrink-0 bg-[#1A5633]" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#1A5633] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_520px] lg:gap-24 lg:py-[120px]`}>
            <div className="flex flex-col gap-9">
              <Reveal as="h2" className={`${D} text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.1]`}>
                Contáctanos
              </Reveal>
              <Reveal delay={0.06} as="p" className="text-lg leading-[1.58] text-[#E3ECE6] md:text-[19px]">
                Con gusto te atenderemos en nuestras oficinas, o mándanos tus datos y nos ponemos de inmediato en contacto contigo.
              </Reveal>
              <Stagger className="flex flex-col gap-7 pt-3" gap={0.08} delay={0.1}>
                <StaggerItem className="flex gap-[18px]">
                  <MapPin className="h-[22px] w-[22px] shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#BFD3C6]">Dirección</p>
                    <p className="text-lg md:text-xl">Copérnico No. 27, Col. Anzures, Ciudad de México</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <Phone className="h-[22px] w-[22px] shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#BFD3C6]">Teléfono</p>
                    <a href={TEL.href} className="link-u w-fit text-lg md:text-xl">
                      {TEL.label}
                    </a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <EnvelopeSimple className="h-[22px] w-[22px] shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#BFD3C6]">Correo electrónico</p>
                    <a href={`mailto:${EMAIL}`} className="link-u w-fit text-lg md:text-xl">
                      {EMAIL}
                    </a>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#1F2A24] sm:p-11" noteClassName="text-sm text-[#5E6862]">
                <h3 className={`${D} text-[28px] text-[#1A5633]`}>Envíanos tus datos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={4}
                    className="h-28 resize-none border border-[#C5CEC8] px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1A5633] focus:shadow-[0_0_0_3px_rgba(26,86,51,0.14)]"
                  />
                </label>
                <button type="submit" className="press w-full bg-[#1A5633] py-4 text-base font-bold text-white hover:bg-[#144528]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex justify-between gap-6 border-t border-[#DDE3DE] pt-6 text-sm">
            <p className="text-[#5E6862]">© 2026 Blancas Abogados</p>
            <a href="#top" className="link-u text-[#1A5633]">
              Volver arriba
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-12 w-full border border-[#C5CEC8] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1A5633] focus:shadow-[0_0_0_3px_rgba(26,86,51,0.14)]"
      />
    </label>
  );
}
