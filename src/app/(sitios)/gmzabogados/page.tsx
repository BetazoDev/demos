import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Work_Sans, Zilla_Slab } from "next/font/google";
import { Bank, Briefcase, Buildings, Clock, EnvelopeSimple, LinkedinLogo, MapPin, Paperclip, Phone, Scales, Scroll, Trophy } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Zilla_Slab({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--s62-display" });
const body = Work_Sans({ subsets: ["latin"], variable: "--s62-body" });

export const metadata: Metadata = {
  title: "Gómez Mendieta Abogados, S.C.",
  description: "Litigio estratégico desde 1984. Más de cuatro décadas defendiendo intereses, protegiendo patrimonio y resolviendo controversias complejas.",
};

const IMG = "/sitios/gmzabogados";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s62-display)]";
const TEL = "tel:+525552509193";
const MAIL = "mailto:gmzabogadosmx@gmail.com";
const NOTICIAS = "https://gmzabogados.com/noticias";
const LINKEDIN = "https://www.linkedin.com/in/horacio-gomez-gorostizaga-1744975a";

const NAV = [
  { label: "Áreas de práctica", href: "#areas" },
  { label: "La firma", href: "#firma" },
  { label: "Nuestro equipo", href: "#equipo" },
  { label: "Noticias", href: NOTICIAS },
];

const CREDENCIALES = [
  { n: "1984", l: "Año de fundación" },
  { n: "Más de 40 años", l: "de experiencia y prestigio en litigio" },
  { n: "Nacional", l: "uno de los despachos de mayor prestigio en el ámbito del litigio" },
];

const FORMA = [
  {
    t: "Estrategia y atención directa",
    d: "Cada asunto se analiza desde el riesgo, la prueba, el procedimiento y el objetivo del cliente. Diseñamos estrategias jurídicas personalizadas con participación directa del equipo responsable.",
  },
  {
    t: "Litigio estratégico",
    d: "Representamos a personas, familias, empresas e inversionistas en asuntos que exigen preparación procesal, capacidad de reacción y una estrategia orientada a proteger sus intereses y patrimonio.",
  },
];

const AREAS = [
  {
    t: "Civil",
    Icon: Scroll,
    d: "Controversias civiles y patrimoniales: contratos, arrendamiento, propiedad y posesión, responsabilidad civil, daños, sucesiones y cumplimiento o rescisión de obligaciones.",
  },
  {
    t: "Mercantil",
    Icon: Briefcase,
    d: "Contratos comerciales, conflictos societarios, cobranza y recuperación de cartera, incumplimientos, medidas cautelares, ejecución y controversias empresariales.",
  },
  {
    t: "Inmobiliario",
    Icon: Buildings,
    d: "Compraventa, arrendamiento, regularización, auditoría legal y controversias sobre propiedad, posesión, desarrollos y servidumbres.",
  },
  {
    t: "Amparo",
    Icon: Scales,
    d: "Amparo directo e indirecto, suspensión de actos de autoridad, recursos y defensa constitucional frente a resoluciones judiciales y administrativas.",
  },
  {
    t: "Derecho deportivo",
    Icon: Trophy,
    d: "Contratos, patrocinios, derechos de imagen y representación en controversias relacionadas con atletas, clubes, federaciones y organizaciones deportivas.",
  },
  {
    t: "Administrativo",
    Icon: Bank,
    d: "Defensa frente a multas, sanciones, clausuras, responsabilidad patrimonial del Estado y actos de autoridad; recursos administrativos, permisos, licencias y juicios de nulidad.",
  },
];

const EQUIPO = [
  {
    n: "Horacio Gómez Gorostizaga",
    r: "Socio",
    d: "Abogado litigante en materia civil, mercantil, amparo, inmobiliaria y administrativa, con enfoque en controversias complejas y estrategia procesal.",
  },
  {
    n: "María de las Mercedes Gómez Gorostizaga",
    r: "Socia",
    d: "Participa en la atención y seguimiento de asuntos jurídicos de la firma, con un enfoque profesional, estratégico y cercano al cliente.",
  },
  {
    n: "José Eduardo Gómez Mendieta",
    r: "Socio",
    d: "Participa en la atención de asuntos y controversias legales, aportando experiencia y continuidad a la práctica profesional de la firma.",
  },
  {
    n: "Alfredo Barrera",
    r: "Abogado",
    d: "Participa en el análisis, preparación y seguimiento de asuntos jurídicos y procedimientos encomendados a la firma.",
  },
];

const CONTACTO = [
  { Icon: MapPin, k: "Gómez Mendieta Abogados, S.C.", v: ["Calle Goethe 99, C.P. 11590", "Miguel Hidalgo, Ciudad de México"] },
  { Icon: Phone, k: "Teléfono oficina", v: ["55 5250 9193"], href: TEL },
  { Icon: EnvelopeSimple, k: "Correo electrónico", v: ["gmzabogadosmx@gmail.com"], href: MAIL },
  { Icon: Clock, k: "Horario", v: ["Lunes a viernes, 09:00 a.m. a 06:00 p.m.", "Sábado y domingo, cerrado"] },
];

function Logo({ preload = false }: { preload?: boolean }) {
  return (
    <a href="#top" className="block" aria-label="Gómez Mendieta Abogados, S.C., inicio">
      <Image src={`${IMG}/logo.svg`} alt="" width={206} height={64} preload={preload} className="h-auto w-[160px] md:w-[206px]" />
    </a>
  );
}

export default function GomezMendietaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s62-body)] text-[#1B1B1B] selection:bg-[#413D3C] selection:text-white`}
    >
      <SiteNav
        logo={<Logo preload />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(27,27,27,0.45)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-8 px-5 md:h-[100px] md:px-8 xl:px-0"
        linkClassName="mx-1 text-base font-medium leading-[1.2] text-[#1B1B1B]"
        panelClassName="bg-white text-[#1B1B1B] font-[family-name:var(--s62-body)]"
        panelLinkClassName={`${DISPLAY} text-[28px] font-semibold`}
        burgerClassName="bg-[#1B1B1B]"
        actions={
          <>
            <a href={TEL} className="link-u mr-2 text-base font-medium text-[#1B1B1B]">
              55 5250 9193
            </a>
            <a href="#contacto" className="press bg-[#413D3C] px-[22px] py-[13px] text-base font-medium leading-[1.2] text-white transition-colors duration-200 hover:bg-[#2C2928]">
              Agenda una consulta
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#413D3C] lg:h-[740px] lg:grid-cols-[minmax(0,900fr)_minmax(0,540fr)]">
          <HeroIntro className="flex flex-col justify-center gap-8 px-5 py-20 md:px-8 md:py-24 lg:py-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-20">
            <HeroItem as="h1" blur className={`${DISPLAY} max-w-[700px] text-[clamp(3rem,5.45vw,4.875rem)] font-semibold leading-[1.03] text-white`}>
              Litigio estratégico desde 1984
            </HeroItem>
            <HeroItem as="p" className="max-w-[560px] text-lg leading-[1.55] text-[#E4E2E0] md:text-xl">
              Más de cuatro décadas defendiendo intereses, protegiendo patrimonio y resolviendo controversias complejas.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2">
              <a href="#contacto" className="press bg-[#DCE3E8] px-[30px] py-[18px] text-[17px] font-semibold leading-[1.2] text-[#1B1B1B] transition-colors duration-200 hover:bg-white">
                Agenda una consulta
              </a>
              <a href={TEL} className="link-u flex items-center gap-2.5 text-[17px] font-semibold text-white">
                <Phone className="h-5 w-5 text-[#DCE3E8]" />
                55 5250 9193
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[380px] overflow-hidden md:h-[520px] lg:h-full" delay={0.25}>
            <Image
              src={`${IMG}/angel-independencia.jpg`}
              alt="Ángel de la Independencia sobre Paseo de la Reforma, Ciudad de México"
              fill
              preload
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[35%_50%]"
            />
          </MediaReveal>
        </section>

        {/* Credenciales */}
        <section aria-label="Credenciales" className="bg-[#DCE3E8]">
          <Stagger className={`${WRAP} grid gap-8 pb-[52px] pt-12 sm:grid-cols-3 sm:gap-10 lg:gap-14`} gap={0.07}>
            {CREDENCIALES.map(({ n, l }) => (
              <StaggerItem key={n} className="flex flex-col gap-1.5">
                <p className={`${DISPLAY} text-[clamp(2.125rem,2.8vw,2.5rem)] font-semibold leading-[1.1]`}>
                  <CountUp value={n} />
                </p>
                <p className="max-w-[360px] text-base leading-normal text-[#3F4A52]">{l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* La firma */}
        <section id="firma" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-16 pb-20 pt-20 lg:gap-20 lg:pb-[120px] lg:pt-32`}>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-24">
              <div className="flex flex-col gap-6">
                <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.375rem,3.35vw,3rem)] font-semibold leading-[1.1]`}>
                  Historia
                </Reveal>
                <Reveal delay={0.08} className="space-y-6 text-lg leading-[1.72] text-[#5E5E5E]">
                  <p>
                    Gómez Mendieta Abogados, S.C. es un bufete jurídico mexicano que, con más de 40 años de existencia y experiencia, se ha consolidado en México como uno de los despachos de mayor prestigio en el ámbito del litigio a nivel nacional.
                  </p>
                  <p>
                    Fundado en 1984 por el Lic. José Horacio Gómez Mendieta, combina más de cuatro décadas de experiencia con una práctica jurídica enfocada en la prevención y solución de controversias complejas.
                  </p>
                </Reveal>
              </div>
              <MediaReveal onView className="relative aspect-[500/560] w-full max-w-[500px] overflow-hidden" delay={0}>
                <Image src={`${IMG}/balanza.jpg`} alt="Balanza de la justicia frente a un librero" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
              </MediaReveal>
            </div>
            <Stagger className="grid gap-12 md:grid-cols-2 md:gap-16" gap={0.08}>
              {FORMA.map(({ t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3 border-t-2 border-[#1B1B1B] pt-8">
                  <h3 className={`${DISPLAY} text-[clamp(1.625rem,2.1vw,1.875rem)] font-semibold leading-[1.2]`}>{t}</h3>
                  <p className="text-[17px] leading-[1.65] text-[#5E5E5E]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-24 bg-[#F6F6F6]">
          <div className={`${WRAP} flex flex-col gap-12 pb-20 pt-20 lg:gap-14 lg:pb-32 lg:pt-[120px]`}>
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className={`${DISPLAY} text-[clamp(2.375rem,3.35vw,3rem)] font-semibold leading-[1.2]`}>Áreas de práctica</h2>
              <p className="text-lg leading-[1.6] text-[#5E5E5E]">
                Litigio y asesoría legal en derecho civil, mercantil, administrativo, amparo, inmobiliario y deportivo.
              </p>
            </Reveal>
            <Stagger className="grid gap-px border border-[#D5D3CF] bg-[#D5D3CF] sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
              {AREAS.map(({ t, d, Icon }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 bg-white px-7 pb-10 pt-8 md:px-9 md:pt-9 lg:min-h-[298px]">
                  <Icon className="h-[30px] w-[30px] text-[#56626B]" />
                  <h3 className={`${DISPLAY} text-[28px] font-semibold leading-[1.2]`}>{t}</h3>
                  <p className="text-base leading-[1.63] text-[#5E5E5E]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Visión y misión */}
        <section aria-label="Visión y misión" className="bg-[#413D3C] text-white">
          <div className={`${WRAP} grid gap-14 py-20 lg:grid-cols-[1fr_400px] lg:gap-[104px] lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-6">
              <h2 className={`${DISPLAY} text-[22px] font-semibold leading-[1.2] text-[#DCE3E8]`}>Visión</h2>
              <blockquote className={`${DISPLAY} text-[clamp(1.625rem,2.36vw,2.125rem)] font-medium italic leading-[1.32]`}>
                “Ser un despacho de abogados líder en México, reconocido por su excelencia en litigio, innovación jurídica y compromiso ético, ofreciendo soluciones legales integrales que generen confianza y valor para nuestros clientes nacionales e internacionales.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-5 self-start border-l border-[#DCE3E8]/35 pl-8 pt-1">
              <h2 className={`${DISPLAY} text-[22px] font-semibold leading-[1.2] text-[#DCE3E8]`}>Misión</h2>
              <p className="text-[17px] leading-[1.7] text-[#E4E2E0]">
                Brindar soluciones legales estratégicas y personalizadas en litigio civil, mercantil, amparo, inmobiliario y derecho deportivo, con un equipo de abogados comprometidos con la excelencia, ética profesional y resultados que protejan los intereses de nuestros clientes en México y el extranjero.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Nuestro equipo */}
        <section id="equipo" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:gap-16 lg:py-32`}>
            <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.375rem,3.35vw,3rem)] font-semibold leading-[1.2]`}>
              Nuestro equipo
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
              <Reveal as="article" className="flex flex-col gap-3.5 bg-[#F6F6F6] px-6 pb-10 pt-9 md:px-10">
                <p className="text-base font-semibold leading-[1.2] text-[#56626B]">Fundador</p>
                <h3 className={`${DISPLAY} text-[clamp(1.875rem,2.5vw,2.25rem)] font-semibold leading-[1.11]`}>José Horacio Gómez Mendieta</h3>
                <p className="text-[17px] leading-[1.65] text-[#5E5E5E]">
                  Fundador de Gómez Mendieta Abogados en 1984. Estableció una tradición de litigio estratégico, ética profesional y atención personalizada que ha guiado a la firma durante más de cuatro décadas.
                </p>
              </Reveal>
              <Stagger className="grid gap-x-12 gap-y-11 sm:grid-cols-2" gap={0.07}>
                {EQUIPO.map(({ n, r, d }) => (
                  <StaggerItem key={n} as="article" className="flex flex-col gap-2 border-t-2 border-[#1B1B1B] pt-6">
                    <h3 className={`${DISPLAY} text-2xl font-semibold leading-[1.2]`}>{n}</h3>
                    <p className="text-[15px] font-semibold leading-[1.2] text-[#56626B]">{r}</p>
                    <p className="text-base leading-[1.63] text-[#5E5E5E]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#DCE3E8]">
          <div className={`${WRAP} grid gap-14 py-20 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-[120px]`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-3.5">
                <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.35vw,3rem)] font-semibold leading-[1.1]`}>Comunícate con nosotros</h2>
                <p className="text-[19px] leading-[1.2] text-[#3F4A52]">O, aún mejor, ¡ven a visitarnos!</p>
              </Reveal>
              <Stagger className="flex flex-col gap-[26px]" gap={0.07}>
                {CONTACTO.map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} className="flex gap-[18px]">
                    <Icon className="h-6 w-6 shrink-0 text-[#413D3C]" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-[15px] leading-[1.2] text-[#4A555E]">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit break-all text-lg font-medium leading-[1.2] sm:break-normal">
                          {v[0]}
                        </a>
                      ) : (
                        v.map((line) => (
                          <p key={line} className="text-lg font-medium leading-[1.2]">
                            {line}
                          </p>
                        ))
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1} className="self-start">
              <DemoForm className="flex flex-col gap-5 bg-white p-6 md:p-11" noteClassName="text-sm text-[#5E5E5E]">
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico*" name="correo" type="email" autoComplete="email" required />
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-medium leading-[1.2]">Mensaje</span>
                  <textarea name="mensaje" rows={5} className={`${FIELD} h-[140px] resize-y py-3`} />
                </label>
                <label className="press flex w-fit cursor-pointer items-center gap-2 text-[15px] font-medium leading-[1.2] text-[#413D3C] focus-within:underline">
                  <Paperclip className="h-[18px] w-[18px]" />
                  Adjuntar archivos
                  <input type="file" name="archivos" multiple className="sr-only" />
                </label>
                <button type="submit" className="press w-full bg-[#413D3C] py-[18px] text-[17px] font-semibold leading-[1.2] text-white transition-colors duration-200 hover:bg-[#2C2928]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px] font-medium leading-[1.2]">
                {[{ label: "Inicio", href: "#top" }, ...NAV].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="press flex h-11 w-11 items-center justify-center border border-[#B9C1C7] text-[#413D3C] transition-[border-color] duration-200 hover:border-[#413D3C]"
            >
              <LinkedinLogo className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-col gap-3 border-t border-black/[0.12] pt-6 text-[15px] leading-[1.2] text-[#5E5E5E] md:flex-row md:items-center md:justify-between">
            <p>Copyright © 2026 Gómez Mendieta Abogados, S.C. Todos los derechos reservados.{" "}<HemeronCredit /></p>
            <p>Calle Goethe 99, Miguel Hidalgo, Ciudad de México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "border border-[#B9C1C7] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#413D3C] focus:shadow-[0_0_0_3px_rgba(65,61,60,0.14)]";

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] font-medium leading-[1.2]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} required={required} className={`${FIELD} h-[52px]`} />
    </label>
  );
}
