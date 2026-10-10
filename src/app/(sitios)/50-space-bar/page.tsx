import type { Metadata } from "next";
import Image from "next/image";
import { Gabarito, JetBrains_Mono, Manrope } from "next/font/google";
import { ArrowDown, CalendarDays, Check, Clock3, MapPin, ShieldCheck, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { CountUp, HeroIntro, HeroItem, Marquee, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Gabarito({ subsets: ["latin"], variable: "--s50-display" });
const body = Manrope({ subsets: ["latin"], variable: "--s50-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--s50-mono" });

export const metadata: Metadata = {
  title: "Space.bar | Desarrollador Web & AI Engineer",
  description: "¡Únete a nuestro equipo de trabajo! Estamos buscando nuevos talentos: Desarrollador Web & AI Engineer en Space.bar.",
};

const IMG = "/sitios/50-space-bar";
const SITE = "https://www.space.bar";

const NAV = [
  { label: "Nosotros", href: "#por-que-space-bar" },
  { label: "Servicios", href: `${SITE}/servicios` },
  { label: "¿Cómo lo hacemos?", href: `${SITE}/como-lo-hacemos` },
  { label: "Portafolio", href: `${SITE}/portafolio` },
  { label: "Nuestras empresas", href: "#nuestras-empresas" },
];

const PROFILE = [
  { title: "Perfil", items: ["Lic. en Ingeniería en Sistemas / Software.", "Experiencia mínima de 2 años en desarrollo web (Front end / Back end)."] },
  {
    title: "Inteligencia Artificial",
    items: [
      "Experiencia integrando soluciones de IA en aplicaciones web.",
      "Uso de APIs de modelos de lenguaje (LLMs) y/o servicios de ML.",
      "Conocimientos en prompt engineering, procesamiento de lenguaje natural (NLP) y automatización con IA.",
      "Desarrollo utilizando Gemini Code y/o Claude Code o similares.",
    ],
  },
];

const STACK: [string, string[]][][] = [
  [["Frontend", ["React", "Next.js", "Vue"]], ["Backend", ["Node.js", "TypeScript"]]],
  [["Fundamentos", ["HTML5", "CSS3", "JavaScript"]], ["APIs", ["REST", "GraphQL"]]],
  [["Bases de datos SQL y NoSQL", ["PostgreSQL", "MySQL", "MongoDB"]], ["Control de versiones", ["Git"]]],
];

const FUNCTIONS = [
  "Desarrollar aplicaciones web modernas (frontend y/o backend) con altos estándares de calidad y performance.",
  "Integrar modelos y APIs de IA (OpenAI, Anthropic, Gemini y propios, como Ollama o vLLM).",
  "Diseñar arquitecturas web escalables y seguras.",
  "Optimizar el rendimiento, SEO y accesibilidad de las aplicaciones.",
  "Participar en revisiones de código y buenas prácticas de desarrollo.",
  "Mantenerse actualizado en tendencias de IA, frameworks web y herramientas cloud.",
];

const AI_FEATURES = ["Chatbots inteligentes", "Motores de recomendación", "Búsqueda semántica", "Automatización de flujos y procesos (Ej. N8N o propios)"];

const BENEFITS = [
  { Icon: ShieldCheck, t: "Prestaciones de Ley" },
  { Icon: CalendarDays, t: "6 días personales al año" },
  { Icon: TrendingUp, t: "Oportunidad de crecimiento profesional" },
  { Icon: Clock3, t: "Horario", d: "De 09:00 am a 6:00 pm, de Lunes a Viernes." },
  { Icon: MapPin, t: "Lugar", d: "Lomas de Chapultepec III Sección, entre Palmas y Periférico." },
];

const FIGURES = [
  ["+500", "Proyectos digitales exitosos"],
  ["+100", "Desarrollos eCommerce B2B & B2C"],
  ["+30", "Tripulantes, expertos en desarrollo, eCommerce y marketing"],
  ["+20", "Años innovando el espacio digital"],
];

const SERVICES = [
  ["eCommerce", "/ecommerce"],
  ["eCommerce B2B", "/eCommerce-B2B"],
  ["Desarrollo a la medida", "/desarrollo-a-la-medida"],
  ["Páginas Web", "/paginas-web"],
  ["Marketing Digital", "/marketing-digital"],
  ["Servicios de Infraestructura", "/servicios-de-infraestructura"],
  ["Consultoría", "/consultoria"],
];

/* Lucide brand icons (removed from lucide-react v1): same 24px stroke drawings the design uses. */
const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com/spacebarmx/",
    svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/spacebar.mx/",
    svg: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/spacebarmx",
    svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/18842539/",
    svg: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const H2 = "font-[family-name:var(--s50-display)] text-[clamp(2.25rem,3.4vw,3rem)] font-bold leading-[1.1]";

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Space.bar, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Space.bar" width={156} height={40} loading="eager" className="h-auto w-[140px] sm:w-[156px]" />
    </a>
  );
}

export default function SpaceBarPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} ${mono.variable} bg-white font-[family-name:var(--s50-body)] text-[#121118] selection:bg-[#A11292] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#1211181A] bg-white"
        scrolledClassName="shadow-[0_10px_30px_-20px_rgba(18,17,24,0.45)]"
        innerClassName="mx-auto flex h-[72px] max-w-[1200px] items-center gap-8 px-5 md:px-8 lg:h-[87px] xl:px-0 [&>button]:ml-auto [&>nav]:ml-auto"
        linkClassName="text-[15px] font-medium text-[#121118]"
        panelClassName="bg-white text-[#121118] font-[family-name:var(--s50-body)]"
        panelLinkClassName="font-[family-name:var(--s50-display)] text-3xl font-semibold"
        burgerClassName="bg-[#121118]"
        actions={
          <a
            href={`${SITE}/contactanos`}
            className="press rounded-lg px-[22px] py-3 text-[15px] font-bold text-[#121118] outline outline-[1.5px] -outline-offset-1 outline-[#121118] hover:bg-[#121118] hover:text-white"
          >
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#121118] text-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-16 md:px-8 lg:min-h-[660px] lg:grid-cols-[1fr_500px] lg:gap-16 lg:py-0 xl:px-0">
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className="font-[family-name:var(--s50-display)] text-[clamp(2.75rem,5.3vw,4.75rem)] font-bold leading-[1.03]">
                Desarrollador Web <br className="hidden sm:block" />
                &amp; AI Engineer
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-lg leading-[1.55] text-white/80 md:text-xl">
                ¡Únete a nuestro equipo de trabajo! Estamos buscando nuevos talentos.
              </HeroItem>
              <HeroItem as="ul" className="flex flex-col gap-3 pb-2 pt-1 text-base text-white/90">
                {[
                  { Icon: Wallet, t: "25k a 30k netos" },
                  { Icon: Clock3, t: "Lunes a Viernes, de 09:00 am a 6:00 pm" },
                  { Icon: MapPin, t: "Lomas de Chapultepec III Sección, entre Palmas y Periférico" },
                ].map(({ Icon, t }) => (
                  <li key={t} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white/70" strokeWidth={1.75} />
                    {t}
                  </li>
                ))}
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href="#postulate" className="press rounded-lg bg-[#A11292] px-8 py-[17px] text-[17px] font-bold hover:bg-[#B5189F]">
                  Postúlate aquí
                </a>
                <a href="#requisitos" className="group flex items-center gap-2.5 text-[17px] font-semibold">
                  Ver requisitos
                  <ArrowDown className="h-[18px] w-[18px] transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-y-0.5 motion-reduce:transition-none" />
                </a>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]" delay={0.25}>
              <Image src={`${IMG}/integracion-astronautas.webp`} alt="Ilustración de astronautas programando en computadoras" fill preload sizes="(min-width: 1024px) 500px, 420px" className="object-contain" />
            </MediaReveal>
          </div>
        </section>
        <div aria-hidden="true" className="h-1.5 bg-[linear-gradient(90deg,#F32525_0%,#D11D53_20%,#7C09C6_80%,#5600F9_100%)]" />

        {/* Intro */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 pb-6 pt-20 md:px-8 lg:pb-10 lg:pt-[130px] xl:px-0">
          <Reveal as="p" className="max-w-[1080px] font-[family-name:var(--s50-display)] text-[clamp(1.625rem,2.7vw,2.375rem)] font-medium leading-[1.27]">
            En Spacebar estamos en búsqueda de un Desarrollador Web &amp; AI Engineer, enfocado a desarrollar e implementar soluciones web escalables que integren tecnologías de Inteligencia Artificial.
          </Reveal>
          <Reveal as="p" delay={0.08} className="max-w-[760px] text-lg leading-[31px] text-[#4A4852] md:text-[19px]">
            Contribuirás a la automatización de procesos, la optimización de experiencias digitales y el desarrollo de productos innovadores en plataformas web y ecommerce.
          </Reveal>
        </section>

        {/* ¿Qué necesitas? */}
        <section id="requisitos" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-12 px-5 pb-24 pt-16 md:px-8 lg:pb-[130px] lg:pt-[90px] xl:px-0">
          <Reveal as="h2" className={H2}>¿Qué necesitas?</Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="flex flex-col gap-10">
              {PROFILE.map((g) => (
                <Stagger key={g.title} className="flex flex-col gap-4" gap={0.05}>
                  <StaggerItem as="h3" className="font-[family-name:var(--s50-display)] text-2xl font-semibold">{g.title}</StaggerItem>
                  {g.items.map((it) => (
                    <StaggerItem key={it} className="flex gap-3.5 text-[17px] leading-[26px] text-[#2B2933]">
                      <Check className="h-5 w-5 shrink-0 text-[#A11292]" strokeWidth={2} />
                      <p>{it}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              ))}
            </div>
            <Reveal delay={0.1} className="flex flex-col gap-7 rounded-lg bg-[#F5F3F7] p-6 sm:p-11">
              <h3 className="font-[family-name:var(--s50-display)] text-2xl font-semibold">Experiencia y conocimientos sólidos en</h3>
              {STACK.map((row) => (
                <div key={row[0][0]} className="grid gap-7 md:grid-cols-[304px_1fr] md:gap-x-7 lg:grid-cols-1 xl:grid-cols-[304px_1fr]">
                  {row.map(([label, chips]) => (
                    <div key={label} className="flex flex-col gap-2.5">
                      <p className="text-sm font-bold text-[#5B5966]">{label}</p>
                      <ul className="flex flex-wrap gap-2.5">
                        {chips.map((c) => (
                          <li key={c} className="rounded-lg bg-white px-3.5 py-2 font-[family-name:var(--s50-mono)] text-[15px] outline outline-1 -outline-offset-1 outline-[#12111826]">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Funciones */}
        <section className="bg-[#F5F3F7]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-5 py-24 md:px-8 lg:py-[130px] xl:px-0">
            <Reveal as="h2" className={H2}>Funciones</Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-start lg:gap-14">
              <Stagger as="ul" className="flex flex-col" gap={0.06}>
                {FUNCTIONS.map((f) => (
                  <StaggerItem key={f} as="li" className="flex gap-4 border-t border-[#1211181F] py-5 text-lg leading-[27px] text-[#2B2933]">
                    <Check className="h-[22px] w-[22px] shrink-0 text-[#A11292]" strokeWidth={2} />
                    <p>{f}</p>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1} className="flex flex-col gap-5 rounded-lg bg-[#121118] p-8 text-white sm:p-10">
                <div className="relative h-[180px] w-[180px]">
                  <Image src={`${IMG}/audit.png`} alt="Ilustración de un astronauta frente a una pantalla holográfica" fill sizes="180px" className="object-contain" />
                </div>
                <h3 className="font-[family-name:var(--s50-display)] text-[28px] font-semibold leading-[34px]">Implementar funcionalidades basadas en IA</h3>
                <ul className="flex flex-col gap-3">
                  {AI_FEATURES.map((f) => (
                    <li key={f} className="flex gap-3 text-[17px] leading-[26px] text-white/90">
                      <Sparkles className="mt-[3px] h-5 w-5 shrink-0 text-white/70" strokeWidth={1.75} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ofrecemos */}
        <section className="bg-[#121118] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-24 md:px-8 lg:grid-cols-[460px_1fr] lg:gap-20 lg:py-[130px] xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Ofrecemos</h2>
              <p className="font-[family-name:var(--s50-display)] text-[clamp(3rem,4.4vw,4rem)] font-bold leading-[1.05]">25k a 30k</p>
              <p className="text-[17px] text-white/70">Sueldo neto</p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col" gap={0.06}>
              {BENEFITS.map(({ Icon, t, d }) => (
                <StaggerItem key={t} as="li" className="flex gap-[18px] border-t border-white/[0.14] py-[22px]">
                  <Icon className="h-6 w-6 shrink-0" strokeWidth={1.75} />
                  <div className="flex flex-col gap-1">
                    <p className="font-[family-name:var(--s50-display)] text-[22px] font-semibold leading-[25px]">{t}</p>
                    {d && <p className="text-base leading-6 text-white/70">{d}</p>}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ¿Por qué Space.bar? */}
        <section id="por-que-space-bar" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-14 px-5 py-24 md:px-8 lg:py-[130px] xl:px-0">
          <Reveal className="flex flex-col gap-4">
            <h2 className={H2}>¿Por qué Space.bar?</h2>
            <p className="max-w-[720px] text-lg leading-[30px] text-[#4A4852] md:text-[19px]">
              Somos Space.bar, tu socio de negocios en el espacio digital: desde desarrollo web, eCommerce y marketing digital hasta dominios, hosting y protección legal digital.
            </p>
          </Reveal>
          <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
            {FIGURES.map(([n, l]) => (
              <StaggerItem key={n} className="flex flex-col gap-2.5 border-t border-[#12111826] pt-6">
                <CountUp value={n} className="font-[family-name:var(--s50-display)] text-6xl font-bold leading-none tabular-nums text-[#A11292]" />
                <p className="text-base leading-6 text-[#4A4852]">{l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Postúlate */}
        <section id="postulate" className="scroll-mt-24 bg-[linear-gradient(90deg,#5600F9_0%,#7C09C6_45%,#D11D53_100%)] text-white">
          <Reveal className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-20 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-[110px] xl:px-0">
            <div className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--s50-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] font-bold leading-[1.1]">Únete al equipo Space.Bar</h2>
              <p className="text-xl text-white/90">Si estás interesado en esta vacante</p>
            </div>
            <a
              href={`${SITE}/desarrollador-web---ai-engineer`}
              target="_blank"
              rel="noopener noreferrer"
              className="press w-fit shrink-0 rounded-lg bg-white px-9 py-[19px] text-lg font-bold text-[#A11292] hover:bg-[#F5F3F7]"
            >
              Postúlate aquí
            </a>
          </Reveal>
        </section>
      </main>

      <footer>
        <div className="bg-[#121118] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-16 pt-20 md:grid-cols-2 md:px-8 xl:grid-cols-[260px_1fr_340px_200px] xl:gap-16 xl:px-0">
            <div className="flex flex-col gap-5">
              <Image src={`${IMG}/logo-blanco.svg`} alt="Space.bar" width={172} height={44} className="h-auto w-[172px]" />
              <a href={`${SITE}/bolsa-de-trabajo`} className="link-u w-fit text-[15px] font-semibold leading-[normal]">Bolsa de trabajo</a>
            </div>
            <nav aria-label="Servicios" className="flex flex-col gap-3">
              <p className="font-[family-name:var(--s50-display)] text-lg font-semibold leading-[normal]">Servicios</p>
              <ul className="flex flex-col gap-3 text-[15px] leading-[normal] text-white/70">
                {SERVICES.map(([l, p]) => (
                  <li key={p}><a href={`${SITE}${p}`} className="link-u hover:text-white">{l}</a></li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-3.5">
              <p className="font-[family-name:var(--s50-display)] text-lg font-semibold leading-[normal]">Síguenos</p>
              <ul className="flex gap-3">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="press flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] hover:bg-white/[0.16]">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {s.svg}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="font-[family-name:var(--s50-display)] text-lg font-semibold leading-[normal]">Suscríbete al boletín</p>
              <DemoForm className="flex flex-col gap-2" noteClassName="text-sm text-white/70">
                <div className="flex gap-2">
                  <label className="min-w-0 flex-1">
                    <span className="sr-only">Correo electrónico</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Correo electrónico"
                      className="h-[46px] w-full rounded-lg border border-white/20 bg-white/[0.06] px-3.5 text-[15px] text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-white/60 focus:border-[#A11292] focus:shadow-[0_0_0_3px_rgba(161,18,146,0.35)]"
                    />
                  </label>
                  <button type="submit" className="press h-[46px] shrink-0 rounded-lg bg-[#A11292] px-[18px] text-[15px] font-bold hover:bg-[#B5189F]">
                    Suscribirse
                  </button>
                </div>
              </DemoForm>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[family-name:var(--s50-display)] text-lg font-semibold leading-[normal]">Certificaciones</p>
              <Image src={`${IMG}/bc-partner.png`} alt="BigCommerce Partner" width={180} height={55} className="h-[55px] w-[180px] object-contain" />
              <Image src={`${IMG}/bigcommerce-b2b.png`} alt="BigCommerce B2B Specialized" width={66} height={96} className="h-[96px] w-[66px] object-contain" />
            </div>
          </div>
        </div>

        <section id="nuestras-empresas" aria-labelledby="empresas-t" className="scroll-mt-24 bg-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 py-12 md:px-8 xl:px-0">
            <Reveal as="h2" id="empresas-t" className="font-[family-name:var(--s50-display)] text-2xl font-bold">
              Nuestras empresas
            </Reveal>
            <Reveal delay={0.08} className="hidden w-full md:block">
              <Image src={`${IMG}/nuestras-empresas.png`} alt="bilda.bar, Pengo, Posicionamiento.mx, Kalpa protección digital y QueremosComer.com" width={2400} height={111} sizes="(min-width: 1240px) 1200px, 100vw" className="h-auto w-full" />
            </Reveal>
            <Marquee className="w-full md:hidden" duration={28} gap={48}>
              <Image src={`${IMG}/nuestras-empresas.png`} alt="bilda.bar, Pengo, Posicionamiento.mx, Kalpa protección digital y QueremosComer.com" width={2400} height={111} sizes="1220px" className="h-14 w-auto max-w-none" />
            </Marquee>
          </div>
        </section>

        <div className="bg-[#121118] text-sm text-white/70">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 pb-24 pt-[22px] sm:flex-row sm:justify-between md:px-8 lg:pb-[22px] xl:px-0">
            <p>Todos los Derechos Reservados SPACEBAR S. de R.L. de C.V.</p>
            <p>Aviso de privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
