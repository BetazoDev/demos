import type { Metadata } from "next";
import Image from "next/image";
import { Golos_Text, Lexend } from "next/font/google";
import { ArrowDownRightIcon, CaretRightIcon, CheckIcon, EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Lexend({ subsets: ["latin"], variable: "--s20-display" });
const body = Golos_Text({ subsets: ["latin"], variable: "--s20-body" });

export const metadata: Metadata = {
  title: "López Luna Abogados",
  description: "Creamos soluciones frente a los nuevos retos de la era digital. Firma boutique especializada en derecho de las TIC y litigio administrativo, civil, mercantil y constitucional.",
};

const IMG = "/sitios/lopezluna";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const LEX = "font-[family-name:var(--s20-display)]";
const H2 = `${LEX} text-[clamp(2.375rem,4.4vw,3.25rem)] font-light leading-[1.15] tracking-[-1px]`;
const ENGLISH = "https://lopezluna.com/home/";

const NAV = [
  { label: "Derecho TIC", href: "#tic" },
  { label: "Litigio", href: "#litigio" },
  { label: "Digitalius", href: "#digitalius" },
  { label: "Quiénes somos", href: "#somos" },
];

const ESPECIALIDADES = [
  ["Telecomunicaciones", "Privacidad y protección de datos", "Comercio electrónico", "Propiedad intelectual"],
  ["Gobernanza de internet", "FinTech", "Startups digitales", "Convenios en materia de TIC"],
];

const MATERIAS = [
  ["Administrativo", "Patrocinio de procedimientos ante autoridades administrativas y jurisdiccionales en telecomunicaciones, radiodifusión, competencia económica, propiedad intelectual, publicidad exterior, protección al consumidor, salud, responsabilidades administrativas de servidores públicos, licitaciones, expropiaciones, usos de suelo y cumplimiento regulatorio."],
  ["Civil y mercantil", "Juicios derivados de transacciones celebradas por medios electrónicos y de contratos en materia de TIC."],
  ["Constitucional", "Juicios de amparo en materia civil y administrativa, y asesoría a autoridades en la promoción de controversias constitucionales y acciones de inconstitucionalidad."],
];

const FORMACION = [
  "Licenciado en derecho y especialización en derecho administrativo, Facultad de Derecho de la UNAM.",
  "Diplomado en derecho de las TIC, ITAM.",
  "Maestro en derecho de las TIC, Universidad de Oslo, en cooperación con el Centro Noruego de Investigación para la Informática y el Derecho.",
  "Consultor invitado en la Asociación de Internet.mx.",
  "Catedrático de derecho procesal administrativo en la Facultad de Derecho de la UNAM.",
];

function Logo({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  return (
    <a href="#top" className={`block ${className}`} aria-label="López Luna Abogados, inicio">
      <Image src={`${IMG}/${inverse ? "logo-white.svg" : "logo.svg"}`} alt="" width={228} height={49} className="h-full w-auto" preload={!inverse} />
    </a>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <StaggerItem as="li" className="flex gap-2.5 text-base leading-[22px]">
      <CheckIcon className="mt-[3px] h-4 w-4 shrink-0 text-[#00435E]" />
      <span>{children}</span>
    </StaggerItem>
  );
}

export default function LopezLunaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s20-body)] text-[#0D1423] selection:bg-[#00A3C4] selection:text-[#0D1423]`}
    >
      <SiteNav
        logo={<Logo className="h-[38px] lg:h-[49px]" />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(0,27,75,0.35)]"
        innerClassName={`${WRAP} flex h-[76px] items-center justify-between gap-9 lg:h-[92px] [&>nav]:ml-auto`}
        linkClassName="mx-0.5 text-[15px] font-medium text-[#0D1423]"
        panelClassName="bg-white text-[#0D1423] font-[family-name:var(--s20-body)]"
        panelLinkClassName="font-[family-name:var(--s20-display)] text-3xl font-light"
        burgerClassName="bg-[#001B4B]"
        actions={
          <>
            <a href={ENGLISH} className="link-u text-[15px] font-medium text-[#0D1423]">
              English
            </a>
            <a href="#contacto" className="press rounded-full bg-[#001B4B] px-[26px] py-[13px] text-[15px] font-semibold text-white hover:bg-[#1D395D] lg:ml-4">
              Contacto
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#0D1423] text-white">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden opacity-90" distance={40}>
            <Image src={`${IMG}/header-inicio-bb.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0D142399_0%,#0D1423E6_75%)] lg:bg-[linear-gradient(90deg,#0D1423F2_0%,#0D1423B3_55%,#0D142333_100%)]"
          />
          <HeroIntro className={`${WRAP} flex min-h-[560px] flex-col justify-end gap-8 pb-16 pt-32 lg:h-[700px] lg:pb-[104px]`}>
            <HeroItem as="h1" blur className={`${LEX} text-[clamp(2.375rem,4.4vw,3.75rem)] font-light leading-[1.12] tracking-[-1.2px]`}>
              Creamos soluciones frente a los nuevos <br className="hidden lg:block" />
              retos de la era digital
            </HeroItem>
            <HeroItem as="p" className="max-w-[580px] text-lg leading-[1.55] text-[#D6DEE8] md:text-xl md:leading-[31px]">
              Firma boutique especializada en derecho de las TIC y litigio administrativo, civil, mercantil y constitucional.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-2">
              <a href="#contacto" className="press rounded-full bg-[#00A3C4] px-[34px] py-[17px] text-base font-semibold text-[#0D1423] hover:bg-[#1FABBD]">
                Contacto
              </a>
              <a href="#tic" className="nudge flex items-center gap-2.5 text-base font-semibold">
                Conozca nuestros servicios
                <ArrowDownRightIcon className="h-[18px] w-[18px] text-[#00A3C4]" />
              </a>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Derecho TIC */}
        <section id="tic" className={`${WRAP} grid scroll-mt-24 gap-14 py-24 lg:grid-cols-[1fr_560px] lg:gap-[88px] lg:py-[136px]`}>
          <div className="flex flex-col gap-[26px]">
            <Reveal as="h2" className={H2}>
              Derecho TIC
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-[26px]">
              <p className={`${LEX} text-xl font-light leading-[1.5] md:text-[22px] md:leading-[33px]`}>
                Hoy estamos frente a la Cuarta Revolución Industrial, también llamada Industria 4.0, que reinventa el funcionamiento de las organizaciones y de la sociedad.
              </p>
              <p className="text-[17px] leading-[28px] text-[#4B5566]">
                Esta transformación digital ha generado nuevos retos, y el mundo del derecho también ha tenido que adaptarse. Así surge el derecho de las TIC, también conocido como derecho informático, derecho del ciberespacio o derecho digital.
              </p>
              <p className="text-[17px] leading-[28px] text-[#4B5566]">
                Nuestro objetivo es brindar acompañamiento y consultoría integrales para el cumplimiento normativo, la realización de proyectos y el cierre de transacciones. Cuando es necesario, defendemos los intereses de nuestros clientes ante las autoridades mexicanas competentes.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col gap-9">
            <MediaReveal onView delay={0.05} className="relative h-[240px] overflow-hidden sm:h-[300px]">
              <Image src={`${IMG}/derecho-tic-bg.jpg`} alt="Mano humana estrechando la mano de un robot" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-[18px]">
              <p className="text-base font-semibold">Nos especializamos en:</p>
              <Stagger className="grid gap-x-7 gap-y-3.5 sm:grid-cols-2" gap={0.04}>
                {ESPECIALIDADES.map((col) => (
                  <ul key={col[0]} className="flex flex-col gap-3.5">
                    {col.map((e) => (
                      <Check key={e}>{e}</Check>
                    ))}
                  </ul>
                ))}
                <ul className="sm:col-span-2">
                  <Check>Cumplimiento normativo y solución de controversias en contextos digitales</Check>
                </ul>
              </Stagger>
            </div>
          </div>
        </section>

        {/* Litigio */}
        <section id="litigio" className="scroll-mt-24 bg-[#0D1423] text-white">
          <div className={`${WRAP} flex flex-col gap-16 pb-24 pt-24 lg:gap-[72px] lg:pb-[136px] lg:pt-32`}>
            <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-[72px]">
              <Reveal className="flex flex-col gap-6">
                <h2 className={H2}>Litigio</h2>
                <p className="max-w-[720px] text-lg leading-[1.6] text-[#C9D3E0] md:text-[19px] md:leading-[30px]">
                  Seguros de que la especialización es un presupuesto ético y de eficacia en la prestación de servicios profesionales, López Luna ejerce la defensa de los intereses de sus clientes únicamente en cuatro materias.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col gap-1.5">
                <CountUp value="4" duration={0.9} className={`${LEX} text-[clamp(5rem,9vw,7.5rem)] font-extralight leading-none text-[#00A3C4]`} />
                <p className="text-base leading-6 text-[#C9D3E0]">materias: administrativa, civil, mercantil y constitucional</p>
              </Reveal>
            </div>
            <Stagger className="flex flex-col" gap={0.08}>
              {MATERIAS.map(([m, d]) => (
                <StaggerItem key={m} className="grid gap-3 border-t border-[#FFFFFF24] py-9 md:grid-cols-[380px_1fr] md:gap-[72px]">
                  <h3 className={`${LEX} text-2xl font-light md:text-[28px]`}>{m}</h3>
                  <p className="text-[17px] leading-[28px] text-[#C9D3E0]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Digitalius */}
        <section id="digitalius" className="scroll-mt-24 bg-[#EAF3F7]">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[500px_1fr] lg:gap-0 lg:py-[136px]`}>
            <MediaReveal onView delay={0} className="relative h-[360px] overflow-hidden sm:h-[480px] lg:h-[620px]">
              <Image src={`${IMG}/digitalius-bg.jpg`} alt="Código binario en perspectiva" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col justify-center gap-7 lg:py-14 lg:pl-20">
              <Reveal className="flex flex-col gap-7">
                <h2 className={H2}>Digitalius</h2>
                <p className="text-[17px] leading-[1.7] text-[#4B5566] md:text-lg md:leading-[30px]">
                  Nuestro compromiso con la actualización permanente y la innovación nos mantiene a la vanguardia. Estamos convencidos de que el intercambio de información y la discusión sobre temas de actualidad contribuyen al conocimiento. Por eso, López Luna lanzó Digitalius.
                </p>
              </Reveal>
              <Stagger className="grid gap-8 py-2 sm:grid-cols-2 sm:gap-10" gap={0.08}>
                {[
                  ["Primero", "Compartir información relevante sobre el derecho de las TIC, derecho informático, derecho cibernético y derecho digital: los acontecimientos jurisdiccionales y doctrinales más destacados de la era digital."],
                  ["Segundo", "Ofrecer un foro para expresar libre y respetuosamente las opiniones acerca de esos acontecimientos, para enriquecer nuestra comprensión de las cuestiones jurídicas de las TIC."],
                ].map(([k, d]) => (
                  <StaggerItem key={k} className="flex flex-col gap-3 border-t-2 border-[#00435E] pt-5">
                    <h3 className={`${LEX} text-xl text-[#00435E]`}>{k}</h3>
                    <p className="text-base leading-[26px] text-[#4B5566]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1} className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-2">
                <a href="#contacto" className="press rounded-full bg-[#001B4B] px-[30px] py-4 text-base font-semibold text-white hover:bg-[#1D395D]">
                  Regístrate
                </a>
                <a href="mailto:digitalius@lopezluna.com" className="link-u flex items-center gap-2.5 text-base font-semibold text-[#00435E]">
                  <EnvelopeSimpleIcon className="h-[18px] w-[18px]" />
                  digitalius@lopezluna.com
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="somos" className={`${WRAP} grid scroll-mt-24 items-start gap-14 py-24 lg:grid-cols-[1fr_520px] lg:gap-[88px] lg:py-[136px]`}>
          <div className="flex flex-col gap-[26px]">
            <Reveal as="h2" className={H2}>
              Quiénes somos
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-[26px]">
              <p className={`${LEX} text-[19px] font-light leading-[1.57] md:text-[21px] md:leading-[33px]`}>
                Somos una firma boutique especializada en derecho de las TIC y litigio administrativo, civil, mercantil y constitucional. Brindamos servicios jurídicos enfocándonos tanto en la prevención como en la resolución de conflictos, siempre de una manera ética, innovadora, proactiva y apegada a derecho.
              </p>
              <p className="text-[17px] leading-[28px] text-[#4B5566]">
                Ser una firma boutique nos permite ofrecer asistencia personalizada y definida estratégicamente de acuerdo con los objetivos planteados. Damos soluciones oportunas y a la medida de las necesidades de nuestros clientes, centrándonos en prestar servicios jurídicos de alta calidad que superen las expectativas.
              </p>
            </Reveal>
            <MediaReveal onView delay={0.05} className="img-zoom relative h-[220px] overflow-hidden sm:h-[260px]">
              <Image src={`${IMG}/quienes-somos-bg.jpg`} alt="Sala de juntas con mesa larga" fill sizes="(min-width: 1024px) 592px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
          <Reveal delay={0.12} as="aside" className="flex flex-col gap-7 bg-[#EEF3F7] px-6 pb-12 pt-10 sm:px-11 sm:pt-11">
            <div className="flex flex-col gap-2">
              <h3 className={`${LEX} text-[28px] sm:text-[32px]`}>Paulo López Luna</h3>
              <p className="text-base font-semibold text-[#00435E]">Director de la firma</p>
            </div>
            <div className="flex items-center gap-5 border-y border-[#C9D6E2] py-6">
              <CountUp value="+15" duration={1.1} className={`${LEX} text-[56px] font-light leading-none text-[#00435E]`} />
              <p className="flex-1 text-base leading-6">años de experiencia asesorando a clientes de diversas industrias</p>
            </div>
            <Stagger as="ul" className="flex flex-col gap-3.5" gap={0.05}>
              {FORMACION.map((f) => (
                <StaggerItem key={f} as="li" className="flex gap-3 text-[15px] leading-[23px] text-[#4B5566]">
                  <CaretRightIcon className="mt-[3px] h-4 w-4 shrink-0 text-[#00435E]" />
                  <span>{f}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="flex flex-col gap-2 text-[15px]">
              <p className="font-semibold">Conferencias destacadas</p>
              <p className="leading-[23px] text-[#4B5566]">
                “El derecho al olvido en internet. Análisis del caso Google México” y “Elaboración de convenios en materia de TIC”.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#001B4B] text-white">
          <div className={`${WRAP} flex flex-col gap-14 pb-24 pt-24 lg:pb-[120px] lg:pt-28`}>
            <Reveal as="h2" className={`${LEX} text-[clamp(3rem,5vw,4rem)] font-light leading-[1.1] tracking-[-1.2px]`}>
              Contacto
            </Reveal>
            <Stagger className="grid gap-10 md:grid-cols-3 md:gap-12" gap={0.08}>
              {[
                { Icon: MapPinIcon, k: "Oficina", v: "Ciudad de México" },
                { Icon: PhoneIcon, k: "Teléfono", v: "55 1366 2345", href: "tel:+525513662345" },
                { Icon: EnvelopeSimpleIcon, k: "Correo", v: "info@lopezluna.com", href: "mailto:info@lopezluna.com" },
              ].map(({ Icon, k, v, href }) => (
                <StaggerItem key={k} className="flex flex-col gap-3.5 border-t border-[#FFFFFF33] pt-7">
                  <p className="flex items-center gap-2.5 text-[15px] font-semibold text-[#B9C7D8]">
                    <Icon className="h-[18px] w-[18px] text-[#00A3C4]" />
                    {k}
                  </p>
                  {href ? (
                    <a href={href} className={`link-u w-fit ${LEX} text-2xl font-light lg:text-[28px]`}>
                      {v}
                    </a>
                  ) : (
                    <p className={`${LEX} text-2xl font-light lg:text-[28px]`}>{v}</p>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1423] text-[#AEB9C8]">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-[72px] lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
            <div className="flex max-w-[520px] flex-col gap-6">
              <Logo inverse className="h-[49px] w-fit" />
              <p className="text-[15px] leading-6">
                Brindamos servicios jurídicos enfocándonos tanto en la prevención como en la resolución de conflictos, siempre protegiendo los intereses de nuestros clientes de una manera ética, innovadora, proactiva y apegada a derecho.
              </p>
            </div>
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px] text-[#E3E8EF]">
                {[...NAV, { label: "English", href: ENGLISH }].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#FFFFFF1F] pt-6 text-sm sm:flex-row sm:justify-between">
            <p>López Luna ©</p>
            <div className="flex gap-7">
              <p>Aviso de privacidad</p>
              <p>Política de uso</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
