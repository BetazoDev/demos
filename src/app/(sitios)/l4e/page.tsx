import type { Metadata } from "next";
import Image from "next/image";
import { Onest, Sora } from "next/font/google";
import type { Icon as PhIcon } from "@phosphor-icons/react";
import {
  ArrowRightIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  LightbulbIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  MicrophoneStageIcon,
  PhoneIcon,
  RocketLaunchIcon,
  ScalesIcon,
  ShieldCheckIcon,
  TargetIcon,
  VaultIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Sora({ subsets: ["latin"], variable: "--s04-display" });
const body = Onest({ subsets: ["latin"], variable: "--s04-body" });

export const metadata: Metadata = {
  title: "Legal for Everyone (L4E)",
  description: "Despacho legal moderno y accesible. Expertos en modelos de negocio no tradicionales y estructuras híbridas que otros despachos prefieren evitar.",
};

const IMG = "/sitios/l4e";
const CONTAINER = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SORA = "font-[family-name:var(--s04-display)]";
const H2 = `${SORA} text-[clamp(2.25rem,3.6vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.029em]`;
const TEL = "tel:+525584060999";
const WA = "https://wa.me/525584060999?text=Hola%20quiero%20contratar%20al%20despacho%20Legal%20for%20Everyone";

const NAV = [
  { label: "Legal for Everyone", href: "#despacho" },
  { label: "Áreas de especialidad", href: "#areas" },
  { label: "Abogados", href: "#socios" },
  { label: "Contáctanos", href: "#contacto" },
];

const AREAS: { g: string; d?: string; items: [string, string][] }[] = [
  {
    g: "Corporativo, contractual y compliance",
    items: [
      ["Derecho Corporativo y Societario", "Desde la constitución de startups hasta reestructuras complejas, fusiones y diseño de gobierno corporativo para empresas en crecimiento."],
      ["Derecho Contractual", "Diseño de modelos escalables y negociación de contratos de inversión, joint ventures y alianzas estratégicas."],
      ["Compliance y Regulación", "Blindaje legal integral, auditoría de riesgos y cumplimiento en prevención de lavado de dinero (PLD/FT)."],
    ],
  },
  {
    g: "Derecho Deportivo y Talento",
    d: "Representamos deportistas, artistas e influencers: desde el registro de marca hasta la defensa contra representantes abusivos o marcas que no cumplen los contratos.",
    items: [
      ["Entretenimiento y Gestión de Talento", "Protección de marcas personales y contratos de representación y explotación de imagen para la rentabilidad del talento y los activos digitales."],
      ["Propiedad Intelectual y Derechos de Autor", "Registro de marcas, gestión de derechos de autor y de imagen, y contratos de licencia de activos intangibles."],
      ["Derecho Deportivo y Representación de Atletas", "Derechos económicos y de imagen de atletas y agencias, contratos de representación y transferencias, y litigio estratégico ante clubes y ligas."],
    ],
  },
  {
    g: "Estructuración y Crecimiento Corporativo",
    items: [
      ["Fideicomisos y Estructuración Patrimonial", "Fideicomisos de administración, inversión y garantía para el blindaje patrimonial y la protección de activos familiares."],
      ["Derecho Inmobiliario y Proyectos Especiales", "Desarrollos complejos, propiedad fraccionada y esquemas híbridos en la CDMX y zonas turísticas, con due diligence inmobiliario."],
      ["Derecho Financiero, Crédito e Inversiones", "Asesoría a fondos, SOFOMes e inversionistas: levantamiento de capital, contratos de crédito y recuperación de cartera."],
    ],
  },
];

const INDUSTRIAS: { Icon: PhIcon; t: string; d: string }[] = [
  { Icon: RocketLaunchIcon, t: "Ecosistema Startup", d: "Acompañamiento legal integral (legal management) para fundadores y empresas tecnológicas, con paquetes de protección total (regulatorio, corporativo y litigio) o paquetes básicos por área." },
  { Icon: VaultIcon, t: "Capital Privado", d: "Family Offices e inversionistas que requieren estructuras de coinversión seguras." },
  { Icon: LightbulbIcon, t: "Modelos de Negocio Innovadores", d: "Estructuración de proyectos digitales, sorteos, esquemas especiales y negocios regulatoriamente sensibles." },
  { Icon: MicrophoneStageIcon, t: "Gestión de Talento y Entretenimiento", d: "Blindaje, negociación y representación para deportistas, artistas, actores y creadores de contenido." },
];

const RAZONES: { Icon: PhIcon; t: string; d: string }[] = [
  { Icon: TargetIcon, t: "Enfoque en proyectos especiales", d: "Somos expertos en modelos de negocio no tradicionales y estructuras híbridas que otros despachos prefieren evitar." },
  { Icon: ShieldCheckIcon, t: "Visión preventiva", d: "No solo litigamos: regularizamos y blindamos tu negocio para asegurar un crecimiento sin obstáculos legales." },
  { Icon: ScalesIcon, t: "Estrategia procesal", d: "Cuando el conflicto es inevitable, diseñamos defensas patrimoniales y procesales de alta complejidad." },
];

const SOCIOS = [
  { f: "luis-angel-salas-navarro.jpg", n: "Luis Ángel Salas Navarro", s: "Derecho financiero, propiedad intelectual, corporativo y entretenimiento" },
  { f: "delfino-enrique-ochoa.jpg", n: "Delfino Enrique Ochoa de León", s: "Bancario y financiero, compliance y gobierno corporativo, litigio civil y mercantil" },
  { f: "mauricio-yrigoyen.png", n: "Mauricio Yrigoyen Auza", s: "Derecho del entretenimiento, deportivo e inmobiliario" },
];

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Legal for Everyone, inicio">
      <Image src={`${IMG}/logo.svg`} alt="L4E" width={72} height={44} preload />
    </a>
  );
}

export default function L4EPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s04-body)] text-[#1D1E20] selection:bg-[#F7992D] selection:text-[#1D1E20]`}
    >
      <SiteNav
        overlay
        logo={<Logo />}
        links={NAV}
        className="text-white"
        scrolledClassName="bg-[#0D141A]"
        innerClassName={`${CONTAINER} flex h-[88px] items-center justify-between gap-8 lg:h-[100px]`}
        linkClassName="text-[15px] font-medium text-white/85 transition-colors duration-200 hover:text-white"
        panelClassName="bg-[#0D141A] text-white font-[family-name:var(--s04-body)]"
        panelLinkClassName={`${SORA} text-3xl font-semibold tracking-[-0.02em]`}
        burgerClassName="bg-white"
        actions={
          <>
            <a href={TEL} className="link-u text-[15px] font-medium text-white">
              55 8406 0999
            </a>
            <a href="#contacto" className="press rounded-full bg-[#F7992D] px-[22px] py-3 text-[15px] font-semibold text-[#1D1E20] hover:bg-[#FFAA48]">
              Programa una consulta
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate flex flex-col overflow-hidden bg-[#0D141A] text-white lg:min-h-[800px]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={50}>
            <Image src={`${IMG}/hero-biblioteca.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0D141A]/30" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(-90deg,#0D141A00_15%,#0D141AEB_100%)]" />
          <HeroIntro className={`${CONTAINER} flex w-full flex-1 flex-col justify-between gap-16 pt-36 lg:gap-0 lg:pt-[72px]`}>
            <div className="flex flex-1 flex-col justify-center gap-7">
              <HeroItem as="h1" blur className={`${SORA} max-w-[860px] text-[clamp(2.75rem,5.85vw,5.25rem)] font-semibold leading-[1.03] tracking-[-0.036em]`}>
                Despacho legal moderno y accesible
              </HeroItem>
              <HeroItem as="p" className="max-w-[560px] text-lg leading-[1.5] text-white/82 md:text-xl">
                Somos expertos en modelos de negocio no tradicionales y estructuras híbridas que otros despachos prefieren evitar.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-3.5 pt-3">
                <a href="#contacto" className="press rounded-full bg-[#F7992D] px-[30px] py-[18px] text-base font-semibold text-[#1D1E20] hover:bg-[#FFAA48]">
                  Programa una consulta
                </a>
                <a href="#areas" className="press rounded-full border border-white/40 px-[29px] py-[17px] text-base font-medium text-white hover:border-white/70 hover:bg-white/10">
                  Ver áreas de especialidad
                </a>
              </HeroItem>
            </div>
            <HeroItem as="dl" className="grid gap-6 border-t border-white/20 pb-9 pt-7 sm:grid-cols-2 lg:flex lg:gap-16">
              <div className="flex flex-col gap-1.5 lg:w-[420px]">
                <dt className="text-[13px] font-medium text-white/60">Oficinas</dt>
                <dd className="text-[15px] leading-[23px]">Lago Zúrich No. 219, Torre II, Piso 12, Ampliación Granada, Ciudad de México</dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className="text-[13px] font-medium text-white/60">Horario</dt>
                <dd className="text-[15px] leading-[23px]">Lunes a Viernes, 8:30 a.m. a 5:30 p.m.</dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className="text-[13px] font-medium text-white/60">Contacto</dt>
                <dd className="text-[15px] leading-[23px]">
                  <a href="mailto:contacto@l4e.mx" className="link-u">contacto@l4e.mx</a>
                </dd>
              </div>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Despacho del Siglo XXI */}
        <section id="despacho" className="scroll-mt-4 bg-[#EAF3FB]">
          <div className={`${CONTAINER} grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-16 lg:pb-32 lg:pt-[136px] xl:gap-24`}>
            <Reveal className="flex flex-col gap-7">
              <h2 className={H2}>Despacho del Siglo XXI</h2>
              <p className="text-xl leading-[1.5] md:text-[22px]">
                Olvídate de los despachos tradicionales: somos una firma moderna, dinámica y orientada a soluciones, diseñada para las necesidades legales de hoy.
              </p>
              <p className="text-base leading-[1.625] text-[#3E4247]">
                Combinamos tecnología, un enfoque centrado en el cliente y un equipo de expertos para ofrecerte asesoramiento legal claro, eficiente y accesible. Creemos que el acceso a una representación legal de calidad debe ser para todos.
              </p>
              <p className="text-base leading-[1.625] text-[#3E4247]">
                Nuestra historia comienza con la visión compartida de tres socios fundadores, egresados de Derecho del ITAM, que decidieron romper con los esquemas convencionales para fundar un despacho interdisciplinario y moderno.
              </p>
              <a href="#socios" className="nudge flex w-fit items-center gap-2.5 pt-2 text-base font-semibold">
                Conoce a nuestros socios
                <ArrowRightIcon size={18} aria-hidden="true" />
              </a>
            </Reveal>
            <div className="relative h-[460px] sm:h-[560px] lg:h-[640px]">
              <MediaReveal onView className="absolute inset-0 overflow-hidden" delay={0}>
                <Image src={`${IMG}/busto-libreros.jpg`} alt="Busto clásico frente a libreros" fill sizes="(min-width: 1024px) 504px, 100vw" className="object-cover" />
              </MediaReveal>
              <Reveal as="p" delay={0.5} className={`${SORA} absolute bottom-0 left-0 w-[85%] max-w-[340px] bg-[#1D1E20] px-7 py-6 text-xl font-semibold leading-[1.32] text-white sm:px-8 sm:py-7 sm:text-[22px]`}>
                La esencia de L4E es la colaboración.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Áreas de especialidad */}
        <section id="areas" className="scroll-mt-4 bg-[#1D1E20] text-white">
          <div className={`${CONTAINER} flex flex-col gap-14 py-20 lg:gap-16 lg:pb-28 lg:pt-32`}>
            <Reveal className="flex flex-col gap-[18px]">
              <h2 className={H2}>Áreas de especialidad</h2>
              <p className="text-lg leading-[1.58] text-white/70 md:text-[19px]">Soluciones legales modernas en derecho corporativo, deportivo e inmobiliario.</p>
            </Reveal>
            <div>
              {AREAS.map((a) => (
                <Stagger key={a.g} className="grid gap-8 border-t border-white/15 pb-12 pt-11 md:grid-cols-3 lg:grid-cols-[300px_repeat(3,minmax(0,1fr))] lg:gap-14" gap={0.06}>
                  <StaggerItem className="flex flex-col gap-3.5 md:col-span-3 lg:col-span-1">
                    <h3 className={`${SORA} text-2xl font-semibold leading-[1.25] text-[#F7992D]`}>{a.g}</h3>
                    {a.d && <p className="text-[15px] leading-6 text-white/70">{a.d}</p>}
                  </StaggerItem>
                  {a.items.map(([t, d]) => (
                    <StaggerItem key={t} className="flex flex-col gap-3">
                      <h4 className="text-lg font-semibold leading-6">{t}</h4>
                      <p className="text-[15px] leading-6 text-white/70">{d}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        {/* Industrias */}
        <section aria-labelledby="industrias" className={`${CONTAINER} flex flex-col gap-14 py-20 lg:py-[136px]`}>
          <Reveal as="h2" id="industrias" className={H2}>
            Industrias que atendemos
          </Reveal>
          <Stagger className="grid border-t border-[#1D1E20]/12 md:grid-cols-2" gap={0.07}>
            {INDUSTRIAS.map(({ Icon, t, d }) => (
              <StaggerItem
                key={t}
                as="article"
                className="flex flex-col gap-5 border-b border-[#1D1E20]/12 py-10 md:pb-[52px] md:pt-12 md:odd:border-r md:odd:pr-10 md:even:pl-10 lg:odd:pr-16 lg:even:pl-16"
              >
                <Icon size={32} aria-hidden="true" />
                <h3 className={`${SORA} text-[clamp(1.5rem,2vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.018em]`}>{t}</h3>
                <p className="max-w-[480px] text-base leading-[1.6] text-[#3E4247] md:text-[17px]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Por qué escogernos */}
        <section className="bg-[#EAF3FB] lg:grid lg:grid-cols-[43%_minmax(0,1fr)]">
          <MediaReveal onView className="relative h-[420px] overflow-hidden sm:h-[540px] lg:h-auto lg:min-h-[760px]" delay={0}>
            <Image src={`${IMG}/biblioteca.png`} alt="Gran biblioteca con bóveda pintada y mesas de lectura" fill sizes="(min-width: 1024px) 43vw, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-10 px-5 py-16 md:px-8 lg:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-1200px)/2))] xl:pl-24">
            <Reveal as="h2" className={`${SORA} text-[clamp(2rem,3.05vw,2.75rem)] font-semibold leading-[1.11] tracking-[-0.027em]`}>
              ¿Por qué escoger Legal for Everyone?
            </Reveal>
            <Stagger className="flex flex-col gap-7" gap={0.08}>
              {RAZONES.map(({ Icon, t, d }) => (
                <StaggerItem key={t} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1D1E20]">
                    <Icon size={22} className="text-[#F7992D]" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[19px] font-semibold leading-[30px]">{t}</h3>
                    <p className="text-base leading-[1.625] text-[#3E4247]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal>
              <a href="#contacto" className="press inline-block rounded-full bg-[#1D1E20] px-[30px] py-[18px] text-base font-semibold leading-[19px] text-white hover:bg-[#33353A]">
                Programa una consulta
              </a>
            </Reveal>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className={`${CONTAINER} flex scroll-mt-4 flex-col gap-14 py-20 lg:pb-32 lg:pt-[136px]`}>
          <Reveal className="flex flex-col gap-[18px]">
            <h2 className={H2}>Nuestros socios</h2>
            <p className="max-w-[640px] text-lg leading-[1.58] text-[#3E4247] md:text-[19px]">
              Formados en el ITAM, nuestros socios combinan el rigor técnico jurídico con una visión estratégica de negocios.
            </p>
          </Reveal>
          <Stagger className="grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-3" gap={0.08}>
            {SOCIOS.map((p) => (
              <StaggerItem key={p.n} as="article" className="flex flex-col gap-2">
                <div className="img-zoom relative mb-1 h-[420px] overflow-hidden sm:h-[380px] lg:h-[460px]">
                  <Image src={`${IMG}/${p.f}`} alt={p.n} fill sizes="(min-width: 1024px) 379px, (min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
                </div>
                <h3 className={`${SORA} text-[22px] font-semibold leading-[29px]`}>{p.n}</h3>
                <p className="text-sm font-semibold leading-[22px] text-[#6A6F75]">Socio</p>
                <p className="text-[15px] leading-6 text-[#3E4247]">{p.s}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-4 bg-[#1D1E20] text-white">
          <div className={`${CONTAINER} grid gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-16 lg:py-32 xl:gap-24`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${SORA} text-[clamp(2.25rem,3.35vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em]`}>
                Programa una consulta jurídica
              </Reveal>
              <Reveal as="p" delay={0.06} className="text-[17px] leading-[1.61] text-white/70 md:text-lg">
                Hablemos de tu situación bajo estricta confidencialidad y sin compromiso. Te daremos una evaluación honesta y una guía clara sobre tus próximos pasos.
              </Reveal>
              <Stagger className="flex flex-col gap-6 pt-4" gap={0.07}>
                <ContactRow Icon={MapPinIcon} k="Oficinas">
                  Lago Zúrich No. 219, Torre II, Piso 12, Col. Ampliación Granada, Alcaldía Miguel Hidalgo, C.P. 11529, Ciudad de México
                </ContactRow>
                <ContactRow Icon={PhoneIcon} k="Teléfono y WhatsApp">
                  <a href={TEL} className="link-u">+52 55 8406 0999</a>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimpleIcon} k="Correo">
                  <a href="mailto:contacto@l4e.mx" className="link-u">contacto@l4e.mx</a>
                </ContactRow>
                <ContactRow Icon={ClockIcon} k="Horario">
                  Lunes a Viernes, 8:30 a.m. a 5:30 p.m.
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white px-6 py-9 text-[#1D1E20] sm:px-10 sm:py-11" noteClassName="text-sm text-[#3E4247]">
                <Field label="Nombre*" name="name" placeholder="Escribir nombre" autoComplete="name" />
                <Field label="Correo electrónico*" name="email" type="email" placeholder="Escribir correo" autoComplete="email" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold leading-[18px]">Mensaje*</span>
                  <textarea name="message" rows={4} placeholder="Escribe tu consulta" className={`${INPUT} h-28 resize-none py-3.5`} />
                </label>
                <Field label="¿Cuándo requieres la consulta o contratar servicios legales?*" name="when" placeholder="Respuesta corta" />
                <fieldset className="flex flex-col gap-2.5">
                  <legend className="mb-2.5 text-sm font-semibold leading-[18px]">¿Por qué medio prefieres realizar tu consulta?*</legend>
                  {["Por llamada o videollamada", "Mediante visita física a nuestras oficinas"].map((o) => (
                    <label key={o} className="flex cursor-pointer items-center gap-2.5 text-[15px] leading-5 text-[#3E4247]">
                      <input
                        type="radio"
                        name="medio"
                        value={o}
                        className="h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-[1.5px] border-[#1D1E20]/40 bg-white transition-colors duration-150 checked:border-[5px] checked:border-[#1D1E20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D1E20]"
                      />
                      {o}
                    </label>
                  ))}
                </fieldset>
                <div className="pt-1">
                  <button type="submit" className="press rounded-full bg-[#F7992D] px-[30px] py-4 text-base font-semibold leading-[19px] text-[#1D1E20] hover:bg-[#FFAA48]">
                    Enviar mensaje
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D141A] text-white">
        <div className={`${CONTAINER} flex flex-col gap-14 pb-28 pt-16 lg:pb-10 lg:pt-[72px]`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-5">
              <Logo />
              <p className={`${SORA} text-lg font-semibold leading-[27px]`}>Legal for Everyone</p>
              <p className="text-sm leading-[21px] text-white/70">
                Lago Zúrich No. 219, Torre II, Piso 12,
                <br />
                Col. Ampliación Granada, C.P. 11529, Ciudad de México
              </p>
            </div>
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-24">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3 text-[15px] leading-[23px] text-white/70">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u hover:text-white">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-3 text-[15px] leading-[23px] text-white/70">
                <a href="mailto:contacto@l4e.mx" className="link-u w-fit hover:text-white">contacto@l4e.mx</a>
                <a href={TEL} className="link-u w-fit hover:text-white">+52 55 8406 0999</a>
                <p>Lunes a Viernes, 8:30 a.m. a 5:30 p.m.</p>
                <ul className="flex gap-3 pt-2">
                  <li>
                    <a href="https://mx.linkedin.com/company/l4emx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="press flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F7992D] hover:text-[#F7992D]">
                      <LinkedinLogoIcon size={18} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="press flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F7992D] hover:text-[#F7992D]">
                      <WhatsappLogoIcon size={18} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="border-t border-white/12 pt-6 text-[13px] leading-5 text-white/50">© 2026 Legal for Everyone (L4E). Despacho de abogados en la Ciudad de México.</p>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full border border-[#1D1E20]/15 bg-[#F4F6F8] px-4 text-[15px] text-[#1D1E20] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#6A6F75] focus:border-[#1D1E20] focus:shadow-[0_0_0_3px_rgba(247,153,45,0.35)]";

function ContactRow({ Icon, k, children }: { Icon: PhIcon; k: string; children: React.ReactNode }) {
  return (
    <StaggerItem className="flex gap-4">
      <Icon size={22} className="mt-0.5 shrink-0 text-[#F7992D]" aria-hidden="true" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-[13px] font-medium leading-[21px] text-white/60">{k}</p>
        <div className="text-base leading-[26px]">{children}</div>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", placeholder, autoComplete }: { label: string; name: string; type?: string; placeholder: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold leading-[18px]">{label}</span>
      <input name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} className={`${INPUT} h-12`} />
    </label>
  );
}
