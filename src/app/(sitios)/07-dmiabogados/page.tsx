import type { Metadata } from "next";
import Image from "next/image";
import { Archivo, Gloock } from "next/font/google";
import { ArrowRight, EnvelopeSimple, LinkedinLogo, MapPin, Phone, TwitterLogo } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--s07-display" });
const body = Archivo({ subsets: ["latin"], variable: "--s07-body" });

export const metadata: Metadata = {
  title: "DMI Abogados Consultores",
  description: "Asesoría y litigio en materia tributaria. Soluciones innovadoras, personalizadas y contundentes a los problemas fiscales de nuestros clientes.",
};

const IMG = "/sitios/07-dmiabogados";
const SITE = "https://www.dmiabogados.mx";

const NAV = [
  { label: "Asesoría y litigio", href: "#asesoria" },
  { label: "Servicios adicionales", href: "#servicios" },
  { label: "Socios", href: "#socios" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Novedades", href: `${SITE}/novedades` },
  { label: "English", href: `${SITE}/home-eng` },
];

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Asesoría y litigio", href: "#asesoria" },
  { label: "Servicios adicionales", href: "#servicios" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Novedades", href: `${SITE}/novedades` },
  { label: "Contacto", href: "#contacto" },
];

const STATS = [
  ["10+", "años de experiencia"],
  ["90%+", "casos de éxito"],
  ["6+", "áreas de servicio"],
  ["50+", "clientes selectos"],
];

const MVV = [
  ["Misión", "Ser reconocidos como verdaderos aliados en la integración de soluciones legales tributarias para nuestro selecto grupo de clientes."],
  ["Visión", "Brindar a nuestros clientes tranquilidad en materia legal tributaria con soluciones innovadoras, personalizadas y contundentes."],
  ["Valores", "Honestidad, calidad, eficiencia, profesionalismo."],
];

const GROUPS = [
  {
    id: "asesoria",
    title: "Asesoría y litigio",
    img: "legal-tributaria.jpg",
    alt: "Firma de un documento legal",
    items: [
      ["Asesoría legal tributaria", "Opiniones sobre la interpretación de las disposiciones fiscales, planeaciones fiscales, trámites ante el SAT y la PRODECON, y procedimientos de fiscalización, EFOS, Certificado de Sello Digital y Beneficiario Controlador."],
      ["Litigio fiscal", "Medios de defensa contra resoluciones que causan agravio en materia fiscal y contra créditos fiscales determinados por autoridades hacendarias locales o federales."],
      ["Litigio constitucional", "Juicio de amparo contra adiciones o reformas a las leyes tributarias, locales y federales, y contra actos de las autoridades fiscales que violen garantías o derechos humanos."],
    ],
  },
  {
    id: "servicios",
    title: "Servicios adicionales",
    img: "reestructura.jpg",
    alt: "Apretón de manos al cerrar un acuerdo",
    items: [
      ["Prevención de lavado de dinero", "Cumplimiento de obligaciones y auditorías en materia de PLD, manual de políticas y procedimientos, programa de conocimiento del cliente y seguimiento ante la CNBV y la UIF."],
      ["Reestructuras corporativas", "Diagnósticos y opiniones fiscales en adquisiciones, ventas, fusiones o escisiones, identificación de riesgos y asistencia en los trámites de la reestructura."],
      ["Contable-financiero", "Propiedad y familia, institucionalización y gobierno corporativo, apoyo a la administración (NIF, US GAAP, IFRS) y proyectos de crecimiento y rentabilidad."],
    ],
  },
];

const CASES = [
  ["2024", "Negativa de devolución de saldo a favor de IVA", "Empresa inmobiliaria. El TFJA declaró la nulidad y reconoció el derecho a la devolución con actualización e intereses.", "$140 MDP"],
  ["2024", "Negativa de devolución de saldo a favor de IVA", "Empresa de centros telefónicos de llamadas. Con una pericial en telecomunicaciones se demostró la ilegalidad de la resolución.", "$31 MDP"],
  ["2023", "Crédito fiscal por rechazo de deducciones", "Empresa de la industria de plásticos. Se acreditó la materialidad de las operaciones y se declaró la nulidad.", "$36 MDP"],
  ["2016", "Procedencia de gastos de establecimiento permanente", "Empresa extranjera de plataformas marítimas. El TCC confirmó la nulidad declarada por la Sala Superior del TFJA.", "$45 MDP"],
  ["2014", "Negativa de devolución de IVA", "Empresa de construcción de carreteras. Se ordenó la devolución con actualización e intereses.", "$150 MDP"],
  ["2013", "Declaratoria de prescripción de crédito fiscal", "Persona física, empresaria independiente. Se declaró la nulidad lisa y llana del crédito.", "$20 MDP"],
];

const CAREER = [
  ["1993", "Basham, Ringe y Correa, S.C., área de litigio fiscal"],
  ["1994", "Poder Judicial de la Federación"],
  ["1995", "Chevez, Ruiz, Zamarripa y Cía., S.C., asociado de litigio fiscal de 2001 a 2007"],
  ["2008", "Deloitte (Galaz, Yamazaki, Ruiz Urquiza, S.C.), director del área legal"],
  ["2011", "Funda DMI Abogados Consultores, S.C."],
];

const CLIENTS = [
  "Advance K", "Agavis Digital", "América Móvil", "TTEC", "Bepensa Bebidas",
  "Cosmetic Colors", "Cotemar", "Emerson Electric", "Fibra Plus", "GEO@SEA N.V.",
  "Groupe SEB", "Grupo VonHauke", "Jaguar Ingenieros", "Jugos y Bebidas del Valle de México (Calahua)", "La Casa de Toño",
  "MAPS", "Mundo Joven", "Novapack", "Office Max", "Plami",
  "Procesa Chiapas", "Qiagen México", "Quad/Graphics", "Resuelve tu Deuda", "Steve Madden",
];

const H2 = "font-[family-name:var(--s07-display)] text-[clamp(2.5rem,4.2vw,3.5rem)] leading-[1.05] tracking-[-0.8px]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="DMI Abogados Consultores, inicio" className={`block shrink-0 ${className}`}>
      <Image src={`${IMG}/logo.svg`} alt="" width={64} height={64} preload className="h-full w-full" />
    </a>
  );
}

export default function DmiAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s07-body)] text-[#17152B] selection:bg-[#B22029] selection:text-white`}
    >
      <SiteNav
        overlay
        logo={<Logo className="h-[52px] w-[52px] lg:h-16 lg:w-16" />}
        links={NAV}
        scrolledClassName="bg-[#19165D]"
        innerClassName={`${WRAP} flex h-[84px] items-center justify-between gap-8 lg:h-[104px]`}
        linkClassName="mx-0.5 text-[15px] font-medium text-white"
        panelClassName="bg-[#19165D] text-white font-[family-name:var(--s07-body)]"
        panelLinkClassName="font-[family-name:var(--s07-display)] text-3xl"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press bg-[#B22029] px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#981B23]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate flex flex-col overflow-hidden bg-[#19165D] text-white lg:h-[820px]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={40}>
            <Image src={`${IMG}/hero-poster.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#19165D]/55 bg-[linear-gradient(90deg,#19165DFA_0%,#19165DE6_42%,#19165D1A_100%)] md:bg-transparent" />

          <HeroIntro className={`${WRAP} flex w-full flex-1 flex-col justify-center gap-7 pb-16 pt-36 lg:pb-0 lg:pt-[104px]`}>
            <HeroItem as="h1" blur className="max-w-[860px] font-[family-name:var(--s07-display)] text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.04] tracking-[-1.5px]">
              Asesoría y litigio en materia tributaria.
            </HeroItem>
            <HeroItem as="p" className="max-w-[600px] text-lg leading-[1.5] text-white/85 md:text-xl">
              Nos enfocamos en la solución de los problemas fiscales de nuestros clientes, a través de soluciones innovadoras, personalizadas y contundentes.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#contacto" className="press bg-[#B22029] px-[30px] py-[18px] text-base font-semibold hover:bg-[#981B23]">
                Contáctanos
              </a>
              <a href="#casos" className="press nudge flex items-center gap-2.5 border border-white/40 px-[25px] py-4 text-base font-semibold hover:bg-white/10">
                Ver casos de éxito
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </HeroItem>
          </HeroIntro>

          <HeroIntro as="dl" delay={0.45} gap={0.07} className={`${WRAP} grid w-full grid-cols-2 gap-x-6 gap-y-8 pb-16 md:grid-cols-4 md:gap-8`}>
            {STATS.map(([n, l]) => (
              <HeroItem key={l} y={16} className="flex flex-col-reverse gap-1.5 border-t border-white/25 pt-6">
                <dt className="text-base text-white/70">{l}</dt>
                <dd className="font-[family-name:var(--s07-display)] text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.1]">
                  <CountUp value={n} />
                </dd>
              </HeroItem>
            ))}
          </HeroIntro>
        </section>

        {/* Acerca de nosotros */}
        <section id="nosotros" className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[520px_1fr] lg:gap-24 lg:pb-32 lg:pt-[140px]`}>
          <Reveal className="flex flex-col gap-7">
            <h2 className={H2}>Acerca de nosotros</h2>
            <p className="text-[clamp(1.1875rem,1.6vw,1.3125rem)] leading-[1.52]">
              Fundada en 2011, DMI Abogados Consultores, S.C. representa a empresas nacionales y extranjeras de las ramas industriales y de servicios más importantes.
            </p>
            <p className="text-[17px] leading-[1.6] text-[#17152B]/70">
              Buscamos siempre el debido cumplimiento de las obligaciones fiscales de nuestros clientes y la optimización de sus recursos económicos.
            </p>
          </Reveal>
          <Stagger as="dl" gap={0.08} className="flex flex-col gap-9 lg:pt-3">
            {MVV.map(([k, v]) => (
              <StaggerItem key={k} className="flex flex-col gap-3 border-t border-[#17152B]/15 pt-7 sm:flex-row sm:gap-8">
                <dt className="font-[family-name:var(--s07-display)] text-[28px] leading-[1.2] sm:w-[150px] sm:shrink-0">{k}</dt>
                <dd className="text-lg leading-[1.6] text-[#17152B]/80">{v}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="bg-[#FAF7F7]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-32 lg:pt-[120px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Áreas de práctica</h2>
              <p className="max-w-[760px] text-lg leading-[1.58] text-[#17152B]/80 md:text-[19px]">
                Nuestros servicios de asesoría en materia legal tributaria incluyen la asesoría contable, financiera, reestructuras corporativas, prevención de lavado de dinero, así como el litigio fiscal y constitucional.
              </p>
            </Reveal>
            <Stagger gap={0.08} className="grid gap-8 lg:grid-cols-2">
              {GROUPS.map((g) => (
                <StaggerItem key={g.id} as="article" className="flex flex-col bg-white outline outline-1 -outline-offset-1 outline-[#17152B]/[0.08]">
                  <div id={g.id} className="img-zoom relative h-[200px] md:h-[220px]">
                    <Image src={`${IMG}/${g.img}`} alt={g.alt} fill sizes="(min-width: 1024px) 584px, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-8 px-6 pb-10 pt-9 md:px-11 md:pb-12 md:pt-10">
                    <h3 className="font-[family-name:var(--s07-display)] text-[clamp(1.875rem,2.6vw,2.125rem)] leading-[1.1]">{g.title}</h3>
                    {g.items.map(([t, d]) => (
                      <div key={t} className="flex flex-col gap-2">
                        <h4 className="text-[19px] font-semibold text-[#B22029]">{t}</h4>
                        <p className="text-base leading-[1.625] text-[#17152B]/75">{d}</p>
                      </div>
                    ))}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Casos de éxito */}
        <section id="casos" className="bg-[#19165D] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[330px_1fr] lg:gap-20 lg:pb-[136px] lg:pt-32`}>
            <Reveal className="flex flex-col items-start gap-6">
              <h2 className={`${H2} lg:whitespace-nowrap`}>Casos de éxito</h2>
              <p className="text-lg leading-[1.6] text-white/80">
                Asuntos relevantes con resultados favorables en medios de defensa (recursos de revocación y juicios de nulidad), en contra de créditos fiscales y negativas de devolución.
              </p>
              <a href={`${SITE}/casos-de-exito`} className="nudge flex items-center gap-2.5 border-b border-white/50 pb-1 pt-2 text-base font-semibold transition-[border-color] duration-200 hover:border-white">
                Ver todos los casos
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </Reveal>
            <Stagger as="ol" gap={0.06} className="flex flex-col">
              {CASES.map(([year, title, desc, amount], i) => (
                <StaggerItem
                  key={amount}
                  as="li"
                  className={`grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 px-5 py-6 md:flex md:gap-7 md:px-7 md:py-[26px] ${i % 2 === 0 ? "bg-white/5" : ""}`}
                >
                  <p className="text-[15px] font-semibold text-white/65 md:w-12 md:shrink-0">{year}</p>
                  <p className="text-right font-[family-name:var(--s07-display)] text-[28px] leading-none md:order-last md:w-40 md:shrink-0 md:text-[34px]">{amount}</p>
                  <div className="col-span-2 flex flex-col gap-1.5 md:flex-1">
                    <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                    <p className="text-[15px] leading-[1.53] text-white/70">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Socio fundador */}
        <section id="socios" className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[460px_1fr] lg:gap-[88px] lg:py-[140px]`}>
          <MediaReveal onView delay={0} className="relative aspect-[460/600] w-full max-w-[460px] overflow-hidden">
            <Image src={`${IMG}/diego-lopez-quevedo.jpg`} alt="Diego López Quevedo, socio fundador de DMI Abogados" fill sizes="(min-width: 1024px) 460px, (min-width: 768px) 460px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-7">
            <Reveal className="flex flex-col gap-2.5">
              <h2 className="font-[family-name:var(--s07-display)] text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.06] tracking-[-0.6px]">Diego López Quevedo</h2>
              <p className="text-[17px] font-semibold text-[#B22029]">Socio fundador</p>
            </Reveal>
            <Reveal delay={0.08} as="p" className="text-[17px] leading-[1.65] text-[#17152B]/80">
              Licenciado en Derecho por la Universidad Iberoamericana, con cursos de posgrado en Derecho Fiscal y en Amparo en la Universidad Panamericana. Ha patrocinado a empresas mexicanas y extranjeras en numerosos litigios contra actos de autoridades fiscales federales y locales, y ha promovido juicios de amparo que han formado parte de jurisprudencias emitidas por la Suprema Corte de Justicia de la Nación.
            </Reveal>
            <Stagger as="dl" gap={0.06} className="flex flex-col gap-3.5 pt-2">
              {CAREER.map(([y, t]) => (
                <StaggerItem key={y} className="flex gap-6">
                  <dt className="w-16 shrink-0 font-[family-name:var(--s07-display)] text-xl">{y}</dt>
                  <dd className="pt-0.5 text-base leading-normal text-[#17152B]/80">{t}</dd>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" className="text-base leading-[1.625] text-[#17152B]/70">
              Miembro de la ANADE, donde coordinó el Comité de Derecho Constitucional y Amparo (2015-2016), y de la Comisión Fiscal y de Derecho Constitucional de la Barra Mexicana, Colegio de Abogados.
            </Reveal>
            <Reveal className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
              {[
                { Icon: Phone, label: "(55) 8580-5641", href: "tel:+525585805641" },
                { Icon: EnvelopeSimple, label: "dlopez@dmiabogados.mx", href: "mailto:dlopez@dmiabogados.mx" },
                { Icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/in/diego-l%C3%B3pez-quevedo-6782a766/" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-2.5 text-base font-medium">
                  <Icon className="h-5 w-5 shrink-0 text-[#B22029]" />
                  <span className="link-u">{label}</span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Nuestros clientes */}
        <section id="clientes" className="bg-[#FAF7F7]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-32 lg:pt-[120px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Nuestros clientes</h2>
              <p className="max-w-[720px] text-lg leading-[1.58] text-[#17152B]/80 md:text-[19px]">
                Representamos a empresas nacionales y extranjeras de las ramas industriales y de servicios más importantes. Entre otras, hemos prestado servicios a:
              </p>
            </Reveal>
            <Stagger as="ul" gap={0.04} className="grid grid-cols-2 gap-x-8 gap-y-[26px] border-t border-[#17152B]/[0.12] pt-[26px] sm:grid-cols-3 lg:grid-cols-5">
              {CLIENTS.map((c) => (
                <StaggerItem key={c} as="li" y={10} className="font-[family-name:var(--s07-display)] text-[clamp(1.25rem,1.7vw,1.4375rem)] leading-[1.26]">
                  {c}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contáctanos */}
        <section id="contacto" className="bg-[#B22029] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className="font-[family-name:var(--s07-display)] text-[clamp(3rem,5vw,4rem)] leading-[1.05] tracking-[-1px]">
                Contáctanos
              </Reveal>
              <Reveal delay={0.06} as="p" className="text-lg leading-[1.5] text-white/90 md:text-xl">
                Nos pondremos en contacto contigo lo antes posible.
              </Reveal>
              <Stagger as="ul" gap={0.08} className="flex flex-col gap-[26px] pt-6">
                {[
                  { Icon: MapPin, k: "Dirección", v: "Mariano Escobedo 752, PH 17, Col. Anzures,\nMiguel Hidalgo, C.P. 11590, Ciudad de México" },
                  { Icon: Phone, k: "Teléfono", v: "(55) 3612-8906", href: "tel:+525536128906" },
                  { Icon: EnvelopeSimple, k: "Correo electrónico", v: "contacto@dmiabogados.mx", href: "mailto:contacto@dmiabogados.mx" },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} as="li" className="flex gap-4">
                    <Icon className="mt-0.5 h-[22px] w-[22px] shrink-0" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-sm font-medium text-white/90">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit text-lg leading-[1.5]">{v}</a>
                      ) : (
                        <p className="text-lg leading-[1.5] sm:whitespace-pre-line">{v}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white px-6 pb-10 pt-9 text-[#17152B] md:px-11 md:pt-11" noteClassName="text-sm text-[#17152B]/70">
                <h3 className="font-[family-name:var(--s07-display)] text-[30px] leading-tight">Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                <Field label="Asunto" name="asunto" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea name="mensaje" rows={5} className="h-32 resize-y border border-[#17152B]/25 px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#B22029] focus:shadow-[0_0_0_3px_rgba(178,32,41,0.15)]" />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-sm text-[#17152B]/70">Aviso de Privacidad</p>
                  <button type="submit" className="press bg-[#B22029] px-9 py-4 text-base font-semibold text-white hover:bg-[#981B23]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#19165D] text-white">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <Logo className="h-16 w-16" />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-white/85">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/dmi-abogados-consultores-s-c/" aria-label="LinkedIn de DMI Abogados" className="press flex h-10 w-10 items-center justify-center border border-white/30 hover:bg-white/10">
                <LinkedinLogo className="h-[18px] w-[18px]" />
              </a>
              <a href="https://twitter.com/DMI_ABOGADOS" aria-label="Twitter de DMI Abogados" className="press flex h-10 w-10 items-center justify-center border border-white/30 hover:bg-white/10">
                <TwitterLogo className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:justify-between">
            <p>DMI Abogados Consultores, S.C. 2025</p>
            <p>Aviso de Privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] border border-[#17152B]/25 px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#B22029] focus:shadow-[0_0_0_3px_rgba(178,32,41,0.15)]"
      />
    </label>
  );
}
