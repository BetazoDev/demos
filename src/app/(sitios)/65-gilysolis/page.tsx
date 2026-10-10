import type { Metadata } from "next";
import Image from "next/image";
import { Barlow, Libre_Bodoni } from "next/font/google";
import {
  Briefcase,
  Buildings,
  CalendarBlank,
  Check,
  Ear,
  EnvelopeSimple,
  FacebookLogo,
  Handshake,
  InstagramLogo,
  LinkedinLogo,
  ListChecks,
  MapPin,
  Path,
  Phone,
  Quotes,
  TiktokLogo,
  TwitterLogo,
  VideoCamera,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Libre_Bodoni({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--s65-display" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--s65-body" });

export const metadata: Metadata = {
  title: "Gil & Solís, Abogados",
  description: "En Gil & Solís protegemos tus intereses legales con soluciones innovadoras y personalizadas para empresas y emprendedores.",
};

const IMG = "/sitios/65-gilysolis";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s65-display)]";
const H2 = `${SERIF} text-[clamp(2.25rem,3.4vw,2.875rem)] font-medium leading-[1.1] text-[#011836]`;
const SITE = "https://www.gilysolis.com.mx";
const PHONE = "tel:+522222434026";
const EMAIL = "mailto:contacto@gilysolis.com.mx";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Blog", href: `${SITE}/blog` },
  { label: "Contacto", href: "#contacto" },
];

const VALORES = [
  ["Honestidad", "Siempre actuamos con ética y transparencia, priorizando el bienestar de nuestros clientes."],
  ["Prevención", "Nos adelantamos a los riesgos legales para garantizar la tranquilidad de tu negocio."],
  ["Excelencia", "Nos esforzamos por ofrecer soluciones efectivas y adaptadas a cada situación."],
  ["Compromiso", "Construimos relaciones de confianza a largo plazo con nuestros clientes."],
  ["Juventud", "La energía y creatividad de un equipo joven para ofrecer soluciones innovadoras y dinámicas."],
];

const REVISAMOS = [
  ["Contratos laborales y mercantiles", "Expedientes de personal", "Riesgos de demanda o conciliación", "Estructura corporativa"],
  ["Cumplimiento normativo", "Focos rojos en la operación", "Necesidad de iguala o acompañamiento recurrente"],
];

const OTROS = [
  {
    Icon: Briefcase,
    t: "Laboral Empresarial",
    d: "Ayudamos a empresas a prevenir demandas, corregir riesgos documentales, fortalecer su operación laboral y tomar decisiones sensibles con respaldo jurídico.",
    meta: "45-60 min · $1,500",
  },
  {
    Icon: Buildings,
    t: "Consultoría Corporativa",
    d: "Acompañamos a empresas y socios en la estructura jurídica de su operación, contratos, relaciones internas y decisiones clave para crecer con bases legales sólidas.",
    meta: "60 min · $1,500",
  },
];

const RECURRENTES = [
  {
    t: "Iguala Legal Empresarial",
    d: "Acompañamiento continuo para empresas que requieren respaldo jurídico frecuente en temas laborales, corporativos y contractuales.",
    items: [
      ["Consultas recurrentes", "Revisión de decisiones sensibles"],
      ["Seguimiento preventivo", "Respaldo en la operación diaria"],
    ],
  },
  {
    t: "Compliance Laboral",
    d: "Regularizamos documentos, procesos y controles internos para reducir vulnerabilidades laborales y fortalecer el cumplimiento patronal.",
    items: [
      ["Auditoría documental laboral", "Regularización de contratos y expedientes"],
      ["Reglamentos, políticas y formatos internos", "Plan de implementación"],
    ],
  },
  {
    t: "Compliance Penal",
    d: "Diseñamos mecanismos preventivos para identificar riesgos penales derivados de la operación empresarial y fortalecer la cultura de cumplimiento.",
    items: [
      ["Identificación de riesgos", "Políticas y controles internos"],
      ["Protocolos de prevención", "Revisión del entorno de cumplimiento"],
    ],
  },
];

const PASOS = [
  { Icon: Ear, t: "Escuchamos y diagnosticamos", d: "Entendemos el contexto de tu operación, tus riesgos actuales y la urgencia real del asunto." },
  { Icon: ListChecks, t: "Priorizamos", d: "No todo se corrige al mismo tiempo. Te ayudamos a distinguir lo urgente, lo necesario y lo estratégico." },
  { Icon: Path, t: "Diseñamos la ruta legal", d: "Definimos acciones concretas: documentos, regularización, implementación, defensa o acompañamiento continuo." },
  { Icon: Handshake, t: "Acompañamos la ejecución", d: "Nos involucramos para que la estrategia no se quede en teoría y realmente fortalezca tu operación." },
];

const TESTIMONIOS = [
  ["“Excelente atención y profesionalismo. Felicidades a todo el grupo.”", "Jesús Vázquez"],
  ["“Son muy buenos en la materia. Yo en lo personal los recomiendo, tienen un gran equipo de trabajo y son confiables, es eficaz su trabajo.”", "Gerardo Rivera"],
];

const AFILIADOS = [
  ["xcpower", "XC Power"],
  ["teleper", "Teleper"],
  ["qion", "QiOn"],
  ["supercool", "Supercool"],
  ["hemi", "HEMI"],
  ["ibayro", "Ibayro Industrial"],
  ["colegio-notarios-puebla", "Colegio de Notarios del Estado de Puebla"],
  ["link", "Link Electric Vehicles"],
  ["dse", "DSE Digital Stream Energy"],
  ["logo-w", "Afiliado de Gil & Solís"],
  ["convenio-hex", "Afiliado de Gil & Solís"],
  ["citizens", "Citizens Companies"],
];

const TEMAS = [
  "Actualización de obligaciones laborales 2026",
  "Cuantificaciones de juicio en materia laboral",
  "Registro de marca en México: la importancia de proteger tu legado",
  "IA para abogados",
  "Contratos comerciales: redacción especializada",
  "Workshop intensivo en oralidad familiar",
];

const REDES = [
  { Icon: FacebookLogo, label: "Facebook", href: "https://web.facebook.com/GilySolisAbogados" },
  { Icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/gilysolisabogados/" },
  { Icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/company/gil-y-solis-abogados/" },
  { Icon: TiktokLogo, label: "TikTok", href: "https://www.tiktok.com/@gilysolisabogados" },
  { Icon: YoutubeLogo, label: "YouTube", href: "https://www.youtube.com/@gilysolisabogados/featured" },
  { Icon: TwitterLogo, label: "Twitter", href: "https://twitter.com/GilySolis" },
];

export default function GilySolisPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-[#FFFDFD] font-[family-name:var(--s65-body)] text-[#011836] selection:bg-[#02306D] selection:text-white`}
    >
      <SiteNav
        logo={
          <a href="#top" aria-label="Gil & Solís, Abogados, inicio" className="block">
            <Image src={`${IMG}/logo-gs-900.png`} alt="Gil & Solís, Consultoría y litigio" width={142} height={72} preload className="h-[56px] w-auto lg:h-[72px]" />
          </a>
        }
        links={NAV}
        className="bg-[#FFFDFD]"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(1,24,54,0.4)]"
        innerClassName="mx-auto flex h-[80px] max-w-[1200px] items-center gap-9 px-5 md:px-8 lg:h-[104px] xl:px-0 [&>div:first-child]:mr-auto [&_nav_ul]:gap-9"
        linkClassName="text-base font-medium text-[#011836]"
        panelClassName="bg-[#FFFDFD] text-[#011836] font-[family-name:var(--s65-body)]"
        panelLinkClassName={`${SERIF} text-3xl font-medium`}
        burgerClassName="bg-[#011836]"
        actions={
          <a href="#contacto" className="press bg-[#02306D] px-6 py-[14px] text-base font-semibold text-white hover:bg-[#011836]">
            Agenda una consulta
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#02306D] lg:min-h-[660px] lg:grid-cols-[62.5fr_37.5fr]">
          <div className="flex flex-col justify-between gap-16 px-5 pb-14 pt-16 md:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-14 lg:pt-[104px]">
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className={`${SERIF} max-w-[724px] text-[clamp(2.5rem,4.2vw,3.25rem)] font-medium leading-[1.1] text-white`}>
                Enfócate en tus proyectos, déjanos el papeleo
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-lg leading-[1.5] text-[#CDD6E4] md:text-xl">
                En Gil &amp; Solís protegemos tus intereses legales con soluciones innovadoras y personalizadas para empresas y emprendedores.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
                <a href="#contacto" className="press bg-[#FFFDFD] px-7 py-[17px] text-base font-semibold text-[#02306D] hover:bg-[#ECE7E7]">
                  Agenda una consulta
                </a>
                <a href="#servicios" className="press px-[27px] py-4 text-base font-semibold text-white outline outline-1 -outline-offset-1 outline-white/45 hover:bg-white/10">
                  Ver servicios
                </a>
              </HeroItem>
            </HeroIntro>
            <HeroIntro delay={0.45} className="flex max-w-[724px] flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-6">
              <HeroItem y={12} className="flex flex-col gap-1">
                <p className={`${SERIF} text-[22px] font-medium leading-[1.2] text-white`}>Puebla, CDMX y en línea</p>
                <p className="text-[15px] leading-[1.2] text-[#B9C5D8]">Atención a empresas</p>
              </HeroItem>
              <HeroItem y={12} className="flex flex-col gap-1">
                <p className={`${SERIF} text-[22px] font-medium leading-[1.2] text-white`}>
                  <CountUp value="Más de 10 años" />
                </p>
                <p className="text-[15px] leading-[1.2] text-[#B9C5D8]">de experiencia</p>
              </HeroItem>
            </HeroIntro>
          </div>
          <MediaReveal className="relative h-[380px] overflow-hidden md:h-[500px] lg:h-auto" delay={0.25}>
            <Image
              src={`${IMG}/foto-portafolios.jpg`}
              alt="Persona de traje con un portafolios de piel"
              fill
              preload
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </MediaReveal>
        </section>

        {/* Quiénes somos */}
        <section id="nosotros" className="scroll-mt-20 bg-[#ECE7E7] lg:scroll-mt-[104px]">
          <div className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[1fr_420px] lg:gap-16 lg:pb-32 lg:pt-[120px] xl:grid-cols-[1fr_500px] xl:gap-[88px]`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={H2}>
                ¿Quiénes somos?
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col gap-6 text-lg leading-[29px] text-[#3D4350]">
                <p>
                  Somos un despacho de abogados en Puebla y CDMX, enfocados en consultoría jurídica empresarial, registro de marcas, constitución de empresas y compliance laboral. Nuestro equipo joven y experimentado combina energía, creatividad y trayectoria para brindar soluciones legales ágiles y efectivas.
                </p>
                <p>
                  Con más de 10 años de experiencia, hemos ayudado a decenas de negocios a proteger sus intereses legales, construir bases sólidas y resolver conflictos de manera eficiente.
                </p>
              </Reveal>
              <Reveal delay={0.16} className="flex flex-col gap-2.5 border-l-[3px] border-[#02306D] pl-7 pt-2">
                <p className={`${SERIF} text-[clamp(1.5rem,2.2vw,1.75rem)] italic leading-[1.3] text-[#02306D]`}>
                  Más que abogados, somos solucionadores de problemas.
                </p>
                <p className="text-base leading-[25px] text-[#3D4350]">
                  Nuestra visión es convertirnos en un despacho multidisciplinario donde se fusionen servicios para individuos y empresas.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="bg-[#FFFDFD] p-8 md:p-11">
              <h3 className={`${SERIF} text-[28px] font-medium leading-[1.2]`}>Nuestros valores</h3>
              <Stagger as="dl" className="mt-[26px] flex flex-col gap-[26px]" delay={0.15}>
                {VALORES.map(([t, d]) => (
                  <StaggerItem key={t} className="flex flex-col gap-1">
                    <dt className="text-[17px] font-bold leading-[1.2] text-[#02306D]">{t}</dt>
                    <dd className="text-base leading-6 text-[#3D4350]">{d}</dd>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </section>

        {/* Servicios principales */}
        <section id="servicios" className={`${WRAP} scroll-mt-20 py-24 lg:scroll-mt-[104px] lg:py-32`}>
          <Reveal className="flex max-w-[760px] flex-col gap-4">
            <h2 className={H2}>Servicios principales</h2>
            <p className="text-lg leading-[29px] text-[#3D4350]">
              Estas son las áreas en las que ayudamos a empresas a prevenir riesgos, tomar mejores decisiones y fortalecer su operación jurídica.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,620fr)_minmax(0,556fr)]" gap={0.08}>
            <StaggerItem as="article" className="flex flex-col gap-6 bg-[#02306D] p-8 text-white md:p-12">
              <p className="text-base font-semibold leading-[1.2] text-[#B9C5D8]">60 min · $2,500</p>
              <h3 className={`${SERIF} text-[clamp(1.875rem,2.6vw,2.125rem)] font-medium leading-[1.15]`}>Diagnóstico Jurídico Empresarial</h3>
              <p className="text-[17px] leading-[27px] text-[#DCE3EE]">
                Sesión inicial para detectar riesgos, ordenar prioridades y definir una ruta legal clara para tu empresa. Ideal para empresas que están creciendo, reordenándose o enfrentando decisiones delicadas.
              </p>
              <p className="text-base font-bold leading-[1.2]">¿Qué revisamos?</p>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
                {REVISAMOS.map((col) => (
                  <ul key={col[0]} className="flex flex-col gap-3">
                    {col.map((it) => (
                      <CheckItem key={it} className="text-white">
                        {it}
                      </CheckItem>
                    ))}
                  </ul>
                ))}
              </div>
              <a href="#contacto" className="press mt-auto w-fit bg-[#FFFDFD] px-[26px] py-4 text-base font-semibold text-[#02306D] hover:bg-[#ECE7E7]">
                Agenda una consulta
              </a>
            </StaggerItem>
            <div className="grid gap-6">
              {OTROS.map(({ Icon, t, d, meta }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-4 bg-[#ECE7E7] p-8 md:p-11">
                  <Icon className="h-8 w-8 text-[#02306D]" />
                  <h3 className={`${SERIF} text-[clamp(1.625rem,2.3vw,1.875rem)] font-medium leading-[1.2]`}>{t}</h3>
                  <p className="text-[17px] leading-[27px] text-[#3D4350]">{d}</p>
                  <p className="text-base font-semibold leading-[1.2] text-[#4A6991]">{meta}</p>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </section>

        {/* Servicios recurrentes */}
        <section aria-labelledby="recurrentes" className="bg-[#011836] text-white">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[340px_1fr] lg:gap-16 lg:py-32 xl:grid-cols-[400px_1fr] xl:gap-[88px]`}>
            <Reveal className="flex flex-col gap-6">
              <h2 id="recurrentes" className={`${SERIF} text-[clamp(2rem,3vw,2.5rem)] font-medium leading-[1.15]`}>
                Servicios recurrentes para empresas que prefieren prevenir
              </h2>
              <p className="text-lg leading-[29px] text-[#C3CDDB]">
                Acompañamiento continuo para operar mejor, tomar decisiones con respaldo y reducir riesgos antes de que se conviertan en contingencias costosas.
              </p>
            </Reveal>
            <div className="flex flex-col gap-12">
              <Stagger className="flex flex-col gap-12" gap={0.08}>
                {RECURRENTES.map(({ t, d, items }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3.5">
                    <h3 className={`${SERIF} text-[clamp(1.5rem,2.2vw,1.75rem)] font-medium leading-[1.2]`}>{t}</h3>
                    <p className="text-[17px] leading-[27px] text-[#C3CDDB]">{d}</p>
                    <div className="grid gap-2.5 pt-1 sm:grid-cols-2 sm:gap-6">
                      {items.map((col) => (
                        <ul key={col[0]} className="flex flex-col gap-2.5">
                          {col.map((it) => (
                            <CheckItem key={it} className="text-[#E3E8F0]">
                              {it}
                            </CheckItem>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal className="flex flex-col gap-3.5 border-t border-white/[0.18] pt-8">
                <h3 className="text-[17px] font-bold leading-[1.2]">Servicios complementarios</h3>
                <p className="text-[17px] leading-[27px] text-[#C3CDDB]">
                  Constitución de empresas, redacción y revisión de contratos, registro de marca y contabilidad estratégica.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Así trabajamos */}
        <section aria-labelledby="asi-trabajamos" className={`${WRAP} py-24 lg:py-32`}>
          <Reveal as="h2" id="asi-trabajamos" className={H2}>
            Así trabajamos con tu empresa
          </Reveal>
          <Stagger as="ol" className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
            {PASOS.map(({ Icon, t, d }) => (
              <StaggerItem key={t} as="li" className="flex flex-col gap-4 border-t-2 border-[#02306D] pt-7">
                <Icon className="h-[30px] w-[30px] text-[#02306D]" />
                <h3 className={`${SERIF} text-2xl font-medium leading-[29px]`}>{t}</h3>
                <p className="text-base leading-[26px] text-[#3D4350]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Testimonios */}
        <section aria-labelledby="testimonios" className="bg-[#ECE7E7]">
          <div className={`${WRAP} py-24 lg:pb-[120px] lg:pt-28`}>
            <Reveal as="h2" id="testimonios" className={`${SERIF} max-w-[760px] text-[clamp(2rem,3vw,2.5rem)] font-medium leading-[1.15]`}>
              La confianza de nuestros clientes respalda nuestro trabajo
            </Reveal>
            <Stagger className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-[72px]" gap={0.1}>
              {TESTIMONIOS.map(([q, n]) => (
                <StaggerItem key={n} as="figure" className="flex flex-col gap-5">
                  <Quotes className="h-8 w-8 text-[#4A6991]" aria-hidden="true" />
                  <blockquote className={`${SERIF} text-[clamp(1.375rem,1.9vw,1.625rem)] italic leading-[1.4]`}>{q}</blockquote>
                  <figcaption className="text-base font-bold leading-[1.2] text-[#02306D]">{n}</figcaption>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Afiliados */}
        <section aria-labelledby="afiliados" className={`${WRAP} py-24 lg:pb-[120px] lg:pt-28`}>
          <Reveal className="flex max-w-[720px] flex-col gap-3.5">
            <h2 id="afiliados" className={H2}>
              Nuestros afiliados
            </h2>
            <p className="text-lg leading-[29px] text-[#3D4350]">
              En Gil &amp; Solís Abogados mantenemos convenios de colaboración con diversas empresas, instituciones y asociaciones profesionales.
            </p>
          </Reveal>
          <Stagger as="ul" className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:gap-y-12" gap={0.04}>
            {AFILIADOS.map(([f, name]) => (
              <StaggerItem
                key={f}
                as="li"
                className={`relative aspect-square overflow-hidden ${f === "colegio-notarios-puebla" ? "border border-[#D8D2D2]" : ""}`}
              >
                <Image src={`${IMG}/afiliado-${f}.jpg`} alt={name} fill sizes="(min-width: 1024px) 190px, (min-width: 640px) 25vw, 33vw" className="object-cover" />
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Eventos */}
        <section id="eventos" className="relative isolate scroll-mt-20 overflow-hidden bg-[#02306D] text-white lg:scroll-mt-[104px]">
          <Image src={`${IMG}/foto-edificio.jpg`} alt="" fill sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[#02306D]/[0.94]" aria-hidden="true" />
          <div className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[1fr_440px] lg:gap-16 lg:py-32 xl:grid-cols-[1fr_500px] xl:gap-[88px]`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={`${SERIF} text-[clamp(2rem,3vw,2.5rem)] font-medium leading-[1.15]`}>
                Webinars y eventos corporativos sobre Control Jurídico Empresarial
              </Reveal>
              <Reveal delay={0.08} as="p" className="text-lg leading-[29px] text-[#D3DBE8]">
                Gil &amp; Solís organiza eventos y webinars gratuitos enfocados en derecho laboral, manejo de conflictos y optimización operativa, con contenidos prácticos para directivos y profesionales.
              </Reveal>
              <Reveal delay={0.12} as="h3" className="text-[17px] font-bold leading-[1.2]">
                Talleres y webinars recientes
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-3" gap={0.05} delay={0.1}>
                {TEMAS.map((t) => (
                  <StaggerItem key={t} as="li" className="flex gap-3 text-[17px] leading-6">
                    <CalendarBlank className="mt-0.5 h-5 w-5 shrink-0 text-[#AFC0D8]" aria-hidden="true" />
                    <span>{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[18px] bg-[#FFFDFD] p-7 text-[#011836] md:p-11" noteClassName="text-sm text-[#3D4350]">
                <h3 className={`${SERIF} text-[26px] font-medium leading-[31px]`}>Suscríbete y recibe invitaciones exclusivas</h3>
                <p className="text-base leading-6 text-[#3D4350]">
                  Ingresa a sesiones privadas para empresarios, dueños de negocios y directivos, enfocadas a prevenir riesgos legales.
                </p>
                <Field label="Email*" name="email" type="email" autoComplete="email" required h="h-11" />
                <div className="grid gap-[14px] sm:grid-cols-2">
                  <Field label="Nombre" name="nombre" autoComplete="given-name" h="h-11" />
                  <Field label="Apellido" name="apellido" autoComplete="family-name" h="h-11" />
                </div>
                <div className="grid gap-[14px] sm:grid-cols-2">
                  <Field label="Empresa" name="empresa" autoComplete="organization" h="h-11" />
                  <Field label="Posición" name="posicion" autoComplete="organization-title" h="h-11" />
                </div>
                <label className="flex items-center gap-2.5 text-[15px] leading-[1.2] text-[#3D4350]">
                  <input type="checkbox" name="terminos" className="h-[18px] w-[18px] shrink-0 accent-[#02306D]" />
                  Acepto los términos y condiciones
                </label>
                <button type="submit" className="press w-full bg-[#02306D] px-6 py-4 text-base font-semibold text-white hover:bg-[#011836]">
                  Registrarse
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 bg-[#ECE7E7] lg:scroll-mt-[104px]">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[1fr_480px] lg:gap-16 lg:py-32 xl:grid-cols-[1fr_540px] xl:gap-24`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-4">
                <h2 className={`${SERIF} text-[clamp(2.25rem,3.3vw,2.75rem)] font-medium leading-[1.16]`}>Evita riesgos jurídicos con asesoría especializada</h2>
                <p className="text-lg leading-[29px] text-[#3D4350]">Deja tus datos y pronto te contactaremos.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-6" gap={0.07}>
                {[
                  { Icon: Phone, k: "Teléfono", v: "222 243 4026", href: PHONE },
                  { Icon: EnvelopeSimple, k: "Correo electrónico", v: "contacto@gilysolis.com.mx", href: EMAIL },
                  { Icon: MapPin, k: "Oficinas", v: "Puebla  |  CDMX" },
                  { Icon: VideoCamera, k: "Asesoría en línea", v: "Atendemos empresas en Puebla, CDMX y en modalidad en línea." },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} className="flex gap-[18px]">
                    <Icon className="h-6 w-6 shrink-0 text-[#02306D]" aria-hidden="true" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-[15px] font-semibold leading-[1.2] text-[#4A6991]">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit break-all text-[19px] leading-[29px]">
                          {v}
                        </a>
                      ) : (
                        <p className="whitespace-pre-wrap text-[19px] leading-[29px]">{v}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[18px] bg-[#FFFDFD] p-7 md:p-11" noteClassName="text-sm text-[#3D4350]">
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-[14px]">
                  <Field label="Nombre" name="nombre" autoComplete="given-name" />
                  <Field label="Apellido" name="apellido" autoComplete="family-name" />
                </div>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-[14px]">
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-[14px]">
                  <Field label="Empresa" name="empresa" autoComplete="organization" />
                  <Field label="Ciudad" name="ciudad" autoComplete="address-level2" />
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[15px] font-semibold leading-[1.2]">Mensaje</span>
                  <textarea name="mensaje" rows={4} placeholder="Escribe tu mensaje aquí" className={`${INPUT} h-[120px] resize-none py-3`} />
                </label>
                <button type="submit" className="press w-full bg-[#02306D] px-6 py-4 text-base font-semibold text-white hover:bg-[#011836]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#011836] text-[#D3DBE8]">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-[72px] lg:pb-10`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <a href="#top" className="flex w-fit items-center gap-5" aria-label="Gil & Solís, Abogados, inicio">
              <Image src={`${IMG}/monograma-gs-calado.png`} alt="" width={72} height={72} className="h-[72px] w-[72px]" />
              <span className="flex flex-col gap-1">
                <span className={`${SERIF} text-2xl font-medium leading-[1.2] text-white`}>Gil &amp; Solís, Abogados</span>
                <span className="text-[15px] leading-[1.2] text-[#B9C5D8]">Consultoría y litigio</span>
              </span>
            </a>
            <div className="flex flex-wrap gap-x-[72px] gap-y-10">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3 text-[15px] leading-[1.2]">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-3 text-[15px] leading-[1.2]">
                <p className="font-bold text-white">Oficinas</p>
                <p className="whitespace-pre-wrap">Puebla  |  CDMX</p>
                <a href={PHONE} className="link-u w-fit">
                  222 243 4026
                </a>
                <a href={EMAIL} className="link-u w-fit">
                  contacto@gilysolis.com.mx
                </a>
                <ul className="flex gap-4 pt-2">
                  {REDES.map(({ Icon, label, href }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="press -m-1 flex p-1 hover:text-white">
                        <Icon className="h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-[#A9B6C9] md:flex-row md:items-center md:justify-between">
            <p>© 2026. Gil &amp; Solís, Abogados. Todos los derechos reservados.</p>
            <ul className="flex gap-7">
              <li>
                <a href={`${SITE}/aviso-legal`} className="link-u">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href={`${SITE}/aviso-privacidad`} className="link-u">
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full border border-[#CFC8C8] bg-[#F4F1F1] px-3.5 text-base text-[#011836] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#6E7480] focus:border-[#02306D] focus:shadow-[0_0_0_3px_rgba(2,48,109,0.14)]";

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  h = "h-[46px]",
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  h?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[15px] font-semibold leading-[1.2]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} required={required} className={`${INPUT} ${h}`} />
    </label>
  );
}

function CheckItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={`flex gap-2.5 text-base leading-[22px] ${className}`}>
      <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#9FB3D1]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
