import type { Metadata } from "next";
import Image from "next/image";
import { Be_Vietnam_Pro, Castoro } from "next/font/google";
import {
  ArrowRight,
  Briefcase,
  ClockCounterClockwise,
  EnvelopeSimple,
  HouseLine,
  MapPin,
  Medal,
  Phone,
  Quotes,
  Scales,
  Scroll,
  ShieldCheck,
  Storefront,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const castoro = Castoro({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--s34-display" });
const vietnam = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--s34-body" });

export const metadata: Metadata = {
  title: "G.A & Avilés Abogados",
  description: "Abogados luchando por su libertad. Hemos ayudado a cientos de personas a resolver sus temas legales.",
};

const IMG = "/sitios/34-gaaviles";
const FD = "font-[family-name:var(--s34-display)]";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
];

const PILARES = [
  { t: "Historia", Icon: ClockCounterClockwise, d: "Somos una firma de abogados constituida desde 2013, bajo los lineamientos que la ley señala." },
  { t: "Equipo", Icon: UsersThree, d: "Nuestros abogados son profesionistas especializados en las diferentes ramas del derecho, lo que garantiza un servicio de calidad a cada uno de los asuntos asignados." },
  { t: "Prestigio", Icon: Medal, d: "Hemos sido reconocidos por autoridades, medios de comunicación y empresarios como uno de los despachos más competitivos en el mercado." },
];

const AREAS = [
  { t: "Derecho Familiar", Icon: HouseLine, d: "Divorcio, pensión alimenticia, guarda y custodia, régimen de visitas, violencia familiar, tutela, reconocimiento de paternidad, sucesiones, patria potestad y rectificación de actas." },
  { t: "Derecho Civil", Icon: Scroll, d: "Teoría de la imprevisión, controversias de arrendamiento, juicio hipotecario, usucapión, juicios reivindicatorios, contratos, cesión de derechos y copropiedad." },
  { t: "Derecho Laboral", Icon: Briefcase, d: "Representación ante Conciliación y Arbitraje y la Procuraduría Federal de la Defensa del Trabajo, seguridad social, contratos laborales, emplazamiento a huelga y amparos." },
  { t: "Derecho Mercantil", Icon: Storefront, d: "Contratos mercantiles, juicio ejecutivo mercantil, concursos mercantiles, juicios de procedimiento oral y títulos de crédito: pagarés, cheques y letras de cambio." },
  { t: "Derecho Penal", Icon: Scales, d: "Denuncias, querellas, personas detenidas, carpetas de investigación ante el Ministerio Público, juicios orales, amparos directos e indirectos, extradición y protección de empresas." },
  { t: "Compliance", Icon: ShieldCheck, d: "Identificación y prevención de riesgos legales, asesoría y capacitación, políticas de confidencialidad, reglamentos y manuales, prevención de delitos y cumplimiento tributario y laboral." },
];

const SERVICIOS = [
  ["Debido Proceso", "En todo juicio deben respetarse tus derechos por parte de la autoridad, que está obligada a recibir tus pruebas y escuchar tus pretensiones."],
  ["Abuso de Autoridad", "Todo acto realizado por un servidor público en contravención a sus funciones y a los derechos de las personas debe ser sancionado."],
  ["Violencia Familiar", "Está prohibido ejercer violencia física, psicoemocional, sexual, económica o patrimonial en contra de los miembros de la familia."],
  ["Visitas y Convivencias", "Tus hijos tienen derecho de ver y convivir con ambos padres y familiares. No es una decisión unilateral de los padres."],
  ["Retención de Menores", "Padre o madre no puede retener a un menor que por mandato judicial o convenio tiene derecho de convivir con su progenitor."],
  ["Discriminación", "Nadie puede atentar contra tu dignidad y tus derechos por motivos de color, posición social, trabajo, estado de salud o características físicas."],
  ["Extorsión", "Realizar o no algo contra tu voluntad por exigencia o amenaza es un delito."],
  ["Auditoría Empresarial", "Revisar y tener toda la documentación de tu empresa en apego a la ley evita responsabilidades administrativas o penales."],
];

const VALORES = ["Profesionalismo", "Ética", "Lealtad", "Honradez", "Honestidad"];

const TESTIMONIOS = [
  ["Atención muy profesional y sobre todo mucha confianza por parte del bufete.", "Adrián E.", "Gerente de Ventas"],
  ["El abogado encargado de atender mi asunto fue muy atento y siempre me habló con la verdad.", "Pedro M.", "Marketing Manager"],
  ["Abogados muy éticos y profesionales.", "Saúl C.", "Director de TI"],
  ["Abogados que inspiran mucha confianza.", "César O.", "Profesor"],
];

const CONTACTO = [
  { Icon: MapPin, k: "Dirección", v: "Thiers 154, Anzures, Ciudad de México" },
  { Icon: Phone, k: "Teléfono", v: "55 2727 9841", href: "tel:+525527279841" },
  { Icon: EnvelopeSimple, k: "Correo", v: "info@gaaviles.com", href: "mailto:info@gaaviles.com" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="G.A & Avilés Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo-ga-blanco-crop.png`}
        alt="G.A & Avilés Abogados"
        width={footer ? 120 : 96}
        height={footer ? 102 : 81}
        preload={!footer}
        className={footer ? "h-[102px] w-auto" : "h-[60px] w-auto lg:h-[81px]"}
      />
    </a>
  );
}

export default function GAAvilesPage() {
  return (
    <div
      id="top"
      className={`${castoro.variable} ${vietnam.variable} bg-white font-[family-name:var(--s34-body)] text-[#222831] selection:bg-[#AFA939] selection:text-[#222831]`}
    >
      <SiteNav
        overlay
        logo={<Logo />}
        links={NAV}
        className="[&_nav_li:first-child_a]:text-[#AFA939]"
        scrolledClassName="bg-[#222831]"
        innerClassName={`${WRAP} flex h-[92px] items-center justify-between gap-10 lg:h-[137px] [&>nav]:ml-auto [&_nav_ul]:gap-10`}
        linkClassName="text-[15px] font-medium text-white"
        panelClassName="bg-[#222831] text-white font-[family-name:var(--s34-body)]"
        panelLinkClassName={`${FD} text-3xl`}
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press bg-[#AFA939] px-6 py-[13px] text-[15px] font-semibold text-[#222831] hover:bg-[#C2BC4D]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate flex flex-col overflow-hidden bg-[#222831] lg:min-h-[860px]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={50}>
            <Image src={`${IMG}/bg_1.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 max-md:bg-[#222831]/80 md:bg-[linear-gradient(90deg,#222831F2_0%,#222831B3_50%,#2228314D_100%)]"
          />

          <div className={`${WRAP} flex flex-1 flex-col justify-center pb-16 pt-36 lg:pb-0 lg:pt-[137px]`}>
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className={`${FD} text-[clamp(3rem,6.4vw,5.75rem)] leading-[1.055] tracking-[-0.016em] text-white`}>
                <span className="sm:block">Abogados luchando</span> por su <em className="italic text-[#AFA939]">libertad.</em>
              </HeroItem>
              <HeroItem as="p" className="max-w-[540px] text-[17px] leading-[1.65] text-white/85 md:text-lg md:leading-[29px]">
                Hemos ayudado a cientos de personas a resolver sus temas legales. Ahora ellos confían plenamente en nosotros.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-8 pt-2">
                <a href="#contacto" className="press bg-[#AFA939] px-[30px] py-[17px] text-[15px] font-semibold text-[#222831] hover:bg-[#C2BC4D]">
                  Contáctanos
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-[15px] font-semibold text-white">
                  Ver servicios
                  <ArrowRight size={18} />
                </a>
              </HeroItem>
            </HeroIntro>
          </div>

          <HeroIntro delay={0.5} gap={0.08} className="border-t border-white/[0.18] bg-[#222831]/90">
            <div className={`${WRAP} grid gap-7 py-9 md:grid-cols-3 md:gap-6 lg:gap-0 lg:pb-10 lg:pt-8`}>
              {[
                ["+2,000", "casos completados exitosamente"],
                ["2013", "año en que se constituyó la firma"],
                ["Anzures, CDMX", "Thiers 154, Ciudad de México"],
              ].map(([v, t]) => (
                <HeroItem key={v} y={12} className="flex flex-col gap-1.5">
                  <p className={`${FD} text-[40px] leading-tight text-white`}>{/\d/.test(v) ? <CountUp value={v} /> : v}</p>
                  <p className="text-[15px] text-white/70">{t}</p>
                </HeroItem>
              ))}
            </div>
          </HeroIntro>
        </section>

        {/* Por qué nosotros */}
        <section id="nosotros" className="scroll-mt-4 bg-[#F5F4EF]">
          <div className={`${WRAP} grid items-center gap-12 py-24 lg:grid-cols-[480px_1fr] lg:gap-[104px] lg:py-32`}>
            <MediaReveal onView delay={0} className="relative aspect-[3/4] w-full max-w-[480px] overflow-hidden">
              <Image src={`${IMG}/servicios1.jpg`} alt="Estatua de la justicia con balanza y espada" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${FD} text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.05] tracking-[-0.017em]`}>
                ¿Por qué nosotros?
              </Reveal>
              <Reveal as="p" delay={0.08} className="text-lg leading-[1.55] text-[#3A414C] md:text-xl md:leading-[31px]">
                En G.A &amp; Avilés encontrarás la mejor solución al conflicto legal en que te encuentres, de manera eficiente y con la mayor celeridad en el proceso.
              </Reveal>
              <Stagger className="flex flex-col gap-8 pt-5" gap={0.08}>
                {PILARES.map(({ t, Icon, d }) => (
                  <StaggerItem key={t} className="flex gap-6">
                    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-[#222831]">
                      <Icon size={24} className="text-[#AFA939]" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className={`${FD} text-[26px] leading-tight`}>{t}</h3>
                      <p className="text-base leading-[26px] text-[#4A515C]">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Áreas de experiencia */}
        <section id="experiencia" className="scroll-mt-4 bg-[#222831] text-white">
          <div className={`${WRAP} flex flex-col gap-14 pb-24 pt-24 lg:gap-[72px] lg:pb-[120px] lg:pt-32`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${FD} text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.1] tracking-[-0.017em]`}>Áreas de experiencia</h2>
              <p className="text-lg text-white/70">Nuestro trabajo: más de 2,000 casos completados exitosamente.</p>
            </Reveal>
            <Stagger className="grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16" gap={0.06}>
              {AREAS.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-4">
                  <Icon size={32} className="text-[#AFA939]" />
                  <h3 className={`${FD} text-[30px] leading-tight`}>{t}</h3>
                  <p className="text-[15px] leading-[26px] text-white/70">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-4 bg-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[380px_1fr] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${FD} text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.1] tracking-[-0.017em]`}>
                Servicios
              </Reveal>
              <MediaReveal onView delay={0.05} className="img-zoom relative h-[240px] w-full md:h-[300px]">
                <Image src={`${IMG}/pen7.jpg`} alt="Pluma fuente sobre una superficie reflejante" fill sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
              </MediaReveal>
              <Reveal delay={0.1}>
                <a href="http://gaaviles.com/servicios.html" className="nudge flex w-fit items-center gap-2.5 text-[15px] font-semibold">
                  Ver servicios
                  <ArrowRight size={18} />
                </a>
              </Reveal>
            </div>
            <Stagger className="grid gap-x-14 gap-y-10 pt-0 sm:grid-cols-2 md:gap-y-12 lg:pt-3" gap={0.05}>
              {SERVICIOS.map(([t, d]) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-2.5">
                  <h3 className={`${FD} text-2xl leading-tight`}>{t}</h3>
                  <p className="text-[15px] leading-[25px] text-[#4A515C]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Misión y valores */}
        <section aria-label="Misión y valores" className="bg-[#AFA939] text-[#222831]">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:gap-14 lg:py-[104px]`}>
            <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:gap-16">
              <Reveal as="h2" className={`${FD} text-[30px] leading-tight`}>
                Misión
              </Reveal>
              <Reveal as="p" delay={0.08} className={`${FD} text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.3] tracking-[-0.011em]`}>
                Prestar un servicio jurídico de calidad, con profesionalismo y eficacia, garantizando la defensa de los intereses de nuestros clientes en cualquier etapa del juicio o proceso, con respeto irrestricto a sus derechos humanos.
              </Reveal>
            </div>
            <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:gap-16">
              <Reveal as="h2" className={`${FD} text-[30px] leading-tight`}>
                Valores
              </Reveal>
              <Stagger as="ul" className="flex flex-wrap gap-x-11 gap-y-3 lg:pt-2" gap={0.05}>
                {VALORES.map((v) => (
                  <StaggerItem key={v} as="li" y={10} className="text-[19px] font-semibold">
                    {v}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section aria-labelledby="testimonios" className="bg-[#F5F4EF]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:gap-16 lg:py-32`}>
            <Reveal as="h2" id="testimonios" className={`${FD} text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.1] tracking-[-0.017em]`}>
              Clientes satisfechos
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[620px_1fr] lg:gap-24">
              <Reveal as="figure" delay={0.06} className="flex flex-col gap-8">
                <Quotes size={44} className="text-[#2C384D]" />
                <blockquote className={`${FD} text-[clamp(1.75rem,2.8vw,2.5rem)] italic leading-[1.25]`}>
                  Capaces de resolver un divorcio tomando siempre en consideración el interés de los menores.
                </blockquote>
                <figcaption className="flex flex-col gap-1">
                  <span className="text-base font-semibold">Daniel P.</span>
                  <span className="text-[15px] text-[#5A616C]">Gerente Comercial</span>
                </figcaption>
              </Reveal>
              <Stagger className="flex flex-col gap-9 lg:pt-2" gap={0.08}>
                {TESTIMONIOS.map(([q, n, r]) => (
                  <StaggerItem key={n} as="figure" className="flex flex-col gap-2">
                    <blockquote className="text-[17px] leading-[26px]">&ldquo;{q}&rdquo;</blockquote>
                    <figcaption className="text-[15px] text-[#5A616C]">
                      {n} <span aria-hidden="true" className="px-1">·</span> {r}
                    </figcaption>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-4 bg-[#222831] text-white">
          <div className={`${WRAP} grid items-center gap-14 py-24 lg:grid-cols-[1fr_600px] lg:gap-24 lg:py-[120px]`}>
            <div className="flex flex-col gap-10">
              <Reveal as="h2" className={`${FD} text-[clamp(3rem,5vw,4.5rem)] leading-none tracking-[-0.017em]`}>
                Contacto
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-6" gap={0.07}>
                {CONTACTO.map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} as="li" className="flex gap-[18px]">
                    <Icon size={22} className="mt-0.5 shrink-0 text-[#AFA939]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[15px] text-white/60">{k}</p>
                      <p className="text-[19px] font-medium">
                        {href ? (
                          <a href={href} className="link-u">
                            {v}
                          </a>
                        ) : (
                          v
                        )}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.15}>
                <a
                  href="https://wa.me/525527279841"
                  className="press inline-flex items-center gap-3 bg-[#AFA939] px-7 py-[17px] text-[15px] font-semibold text-[#222831] hover:bg-[#C2BC4D]"
                >
                  <WhatsappLogo size={20} />
                  Mándanos WhatsApp
                </a>
              </Reveal>
            </div>
            <MediaReveal onView delay={0.05} className="img-zoom relative h-[300px] w-full md:h-[440px] lg:h-[520px]">
              <Image src={`${IMG}/corte.jpg`} alt="Sala de sesiones vista desde lo alto" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1F26] text-white/80">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <Logo footer />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px] font-medium">
                {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/[0.12] pt-6 text-[15px] text-white/60 md:flex-row md:justify-between">
            <p>Todos los derechos reservados G.A &amp; Avilés Abogados</p>
            <p>Thiers 154, Anzures, CDMX, México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
