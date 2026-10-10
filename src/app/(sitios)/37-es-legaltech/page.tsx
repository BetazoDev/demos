import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Geist, Unbounded } from "next/font/google";
import {
  ArrowRight,
  Calculator,
  ChatsCircle,
  Check,
  ClipboardText,
  Coins,
  EnvelopeSimple,
  FacebookLogo,
  HouseLine,
  LinkedinLogo,
  ListChecks,
  MapPin,
  Phone,
  Scales,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const unbounded = Unbounded({ subsets: ["latin"], variable: "--s37-display" });
const geist = Geist({ subsets: ["latin"], variable: "--s37-body" });

export const metadata: Metadata = {
  title: "ES Legaltech Firm",
  description: "Donde la tecnología y el derecho convergen. Adoptamos la tecnología no como un diferenciador, sino como una cultura y forma de brindar los servicios legales.",
};

const IMG = "/sitios/37-es-legaltech";
const SITE = "https://es-legaltech.mx";
const FD = "font-[family-name:var(--s37-display)]";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";

const NAV = [
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios Legaltech®", href: "#servicios" },
  { label: "Lex-i®", href: "#lexi" },
  { label: "Talento", href: "#talento" },
  { label: "Lo último", href: `${SITE}/LoUltimo` },
];

const CIFRAS = [
  ["3000+", "Personas representadas"],
  ["4000+", "Juicios representados"],
  ["1300+", "Contratos administrados"],
  ["100%", "Cobertura de servicios nacional"],
];

const SERVICIOS = [
  [
    { Icon: ChatsCircle, t: "E-Consulting", d: "¿No tienes tiempo de desplazarte? ¿Es una consulta rápida? Chatea con un experto de manera digital." },
    { Icon: Scales, t: "Administración digital de juicios", d: "Olvídate de no saber el estatus de las gestiones que realizamos por ti." },
    { Icon: ClipboardText, t: "Autodiagnóstico laboral", d: "Conoce en minutos el estado que guarda tu empresa respecto de sus relaciones laborales y sus áreas de oportunidad." },
    { Icon: Calculator, t: "Calculadora de finiquitos y liquidaciones", d: "Calcula el finiquito o liquidación de tus empleados de manera rápida y gratuita." },
  ],
  [
    { Icon: Coins, t: "Calculadora de UMAs", d: "La Unidad de Medida y Actualización es la referencia económica para determinar la cuantía de obligaciones previstas en las leyes." },
    { Icon: ListChecks, t: "Aplicación NOM 035-STPS-2018", d: "Aplica el cuestionario y obtén el dictamen para cumplir con la obligación de la Secretaría del Trabajo." },
    { Icon: HouseLine, t: "Calculadora de servicios Home Office", d: "Calcula el costo de servicios de oficina que debes pagar a tus empleados en home office." },
  ],
];

const PROBONO = [
  ["Constitución legal", "Registro de marcas", "Diseño legal estratégico de start ups"],
  ["Aviso de privacidad", "Relaciones laborales", "Contratos"],
];

const REDES = [
  { Icon: FacebookLogo, href: "https://www.facebook.com/GEDB.LEGALTECH/", label: "Facebook" },
  { Icon: TwitterLogo, href: "https://twitter.com/gedb_abogados", label: "Twitter" },
  { Icon: LinkedinLogo, href: "https://www.linkedin.com/company/gedb-legaltech-mx/", label: "LinkedIn" },
  { Icon: WhatsappLogo, href: "https://wa.me/5215578666254", label: "WhatsApp" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="ES Legaltech Firm, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="ES Legaltech Firm" width={140} height={59} preload={!footer} className={footer ? "h-[59px] w-auto" : "h-12 w-auto lg:h-[59px]"} />
    </a>
  );
}

export default function ESLegaltechPage() {
  return (
    <div
      id="top"
      className={`${unbounded.variable} ${geist.variable} bg-white font-[family-name:var(--s37-body)] text-[#222126] selection:bg-[#A7CF42] selection:text-[#222126]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="bg-[#222126]"
        scrolledClassName="shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-9 xl:h-24 [&>nav]:ml-auto [&_nav_ul]:gap-7`}
        linkClassName="text-[15px] font-medium text-white"
        panelClassName="bg-[#222126] text-white font-[family-name:var(--s37-body)]"
        panelLinkClassName={`${FD} text-2xl font-medium`}
        burgerClassName="bg-white"
        actions={
          <>
            <a href={`${SITE}/Admin`} className="link-u text-sm text-white/70">
              Acceso abogados
            </a>
            <a href="#contacto" className="press rounded-[8px] bg-[#A7CF42] px-[22px] py-[13px] text-[15px] font-semibold text-[#222126] hover:bg-[#B8DC5C]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#222126] text-white">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={50}>
            <Image src={`${IMG}/hero-img10.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 max-md:bg-[#222126]/90 md:bg-[linear-gradient(90deg,#222126F7_0%,#222126E6_50%,#2221268C_100%)]"
          />
          <div className={`${WRAP} pb-14 pt-24 lg:pt-[136px]`}>
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className={`${FD} max-w-[880px] text-[clamp(2.25rem,3.9vw,3.5rem)] font-medium leading-[1.125] tracking-[-0.027em]`}>
                Donde la tecnología y el derecho convergen
              </HeroItem>
              <HeroItem as="p" className="max-w-[600px] text-lg leading-[1.55] text-white/85 md:text-xl md:leading-[30px]">
                Adoptamos la tecnología no como un diferenciador, sino como una cultura y forma de brindar los servicios legales.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
                <a href="#contacto" className="press rounded-[8px] bg-[#A7CF42] px-7 py-[17px] text-base font-semibold text-[#222126] hover:bg-[#B8DC5C]">
                  Contáctanos
                </a>
                <a href="#servicios" className="press rounded-[8px] border border-white/50 px-7 py-4 text-base font-medium hover:border-white hover:bg-white/10">
                  Servicios Legaltech®
                </a>
              </HeroItem>
            </HeroIntro>

            <div className="flex flex-col gap-5 pt-20 lg:pt-[120px]">
              <Stagger as="dl" className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8 lg:grid-cols-4" gap={0.07} delay={0.3}>
                {CIFRAS.map(([v, t]) => (
                  <StaggerItem key={t} className="flex flex-col-reverse gap-2">
                    <dt className="text-base leading-6 text-white/85">{t}</dt>
                    <dd className={`${FD} text-[clamp(2rem,3.1vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.023em] text-[#A7CF42]`}>
                      <CountUp value={v} />
                    </dd>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal as="p" delay={0.5} className="text-[13px] leading-5 text-white/60">
                *Datos tomados desde la fecha de creación de la firma.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-10 py-24 lg:grid-cols-[260px_1fr] lg:gap-24 lg:py-32`}>
            <Reveal className="flex flex-col gap-2.5">
              <p className={`${FD} text-[clamp(3.5rem,5.6vw,5rem)] font-medium leading-none tracking-[-0.0375em] text-[#3B7639]`}>2003</p>
              <p className="max-w-[220px] text-base leading-6 text-[#5B5E6D]">Año en que se estableció ES Legaltech Firm.</p>
            </Reveal>
            <div className="flex flex-col gap-12">
              <Reveal as="h2" delay={0.06} className={`${FD} text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium leading-[1.3] tracking-[-0.024em]`}>
                Somos la primera firma de abogados en brindar servicios legales basados en tecnología. Eso es ser Legaltech®.
              </Reveal>
              <Reveal as="p" delay={0.12} className="max-w-[760px] text-lg leading-[29px] text-[#5B5E6D]">
                Esto nos permite brindarte servicios de manera disruptiva: más rápidos, más eficientes, asertivos y económicos. Con nosotros estarás protegido tanto en la parte preventiva como en la correctiva, con transparencia en la información.
              </Reveal>
              <Stagger className="grid gap-10 pt-2 md:grid-cols-2 md:gap-14" gap={0.08}>
                {[
                  ["¿Qué significa ser Legaltech®?", "Brindarte los servicios legales que conoces, siempre acompañados de componentes tecnológicos que nos permiten ofrecerte rapidez, transparencia en la información, mayor porcentaje de éxito y precios competitivos, predecibles y flexibles."],
                  ["Competitivos y transparentes", "Utilizamos un sistema de facturación por precio cerrado. Por nuestra filosofía de trabajo por proyectos y el uso de la última tecnología, el cliente ya no soporta costos operativos superfluos que no le aportan valor."],
                ].map(([t, d]) => (
                  <StaggerItem key={t} className="flex flex-col gap-3 border-t-[3px] border-[#A7CF42] pt-6">
                    <h3 className="text-xl font-semibold leading-[26px]">{t}</h3>
                    <p className="text-base leading-[26px] text-[#5B5E6D]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-24 bg-[#F2F2F2]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className={`${FD} text-[clamp(2rem,3.1vw,2.75rem)] font-medium leading-[1.16] tracking-[-0.027em]`}>Áreas de práctica</h2>
              <p className="max-w-[720px] text-lg leading-[29px] text-[#5B5E6D]">
                Creemos en la especialización como base del éxito: nuestras áreas están enfocadas a empresas en el ámbito laboral, civil y mercantil.
              </p>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[1fr_520px]">
              <Reveal as="article" className="flex flex-col overflow-hidden rounded-[8px] bg-[#222126]">
                <MediaReveal onView delay={0.05} className="relative h-[220px] w-full md:h-[260px]">
                  <Image src={`${IMG}/img11.jpg`} alt="Dos supervisores con casco revisan una obra en construcción" fill sizes="(min-width: 1024px) 656px, 100vw" className="object-cover" />
                </MediaReveal>
                <div className="flex flex-col gap-4 px-7 pb-10 pt-8 md:px-10 md:pb-11 md:pt-10">
                  <h3 className={`${FD} text-[30px] font-medium leading-[45px] tracking-[-0.02em] text-[#A7CF42]`}>Laboral</h3>
                  <p className="text-[17px] leading-[27px] text-white/90">
                    Representamos a las empresas ante cualquier contingencia de carácter laboral. Estamos especializados en las demandas laborales de alto riesgo y volumen.
                  </p>
                  <p className="text-base leading-[26px] text-white/70">
                    Nuestras estrategias son elaboradas por nuestro robot Lex-i®, que con su algoritmo establece la mejor estrategia posible para cada caso, elevando el porcentaje de éxito y reduciendo los errores humanos.
                  </p>
                </div>
              </Reveal>
              <Stagger className="flex flex-col gap-6" gap={0.08} delay={0.1}>
                <StaggerItem as="article" className="flex flex-1 flex-col gap-3.5 rounded-[8px] bg-white p-7 md:p-10">
                  <h3 className={`${FD} text-2xl font-medium leading-9 tracking-[-0.02em]`}>Civil y Mercantil</h3>
                  <p className="text-base leading-[26px] text-[#5B5E6D]">
                    Somos expertos en la elaboración de contratos con lenguaje comercial para facilitar su negociación y firma. Sus cláusulas han sido probadas en juicios.
                  </p>
                  <p className="text-base leading-[26px] text-[#5B5E6D]">Con nuestro software administramos tus contratos vigilando su cumplimiento, vencimientos y renovaciones.</p>
                </StaggerItem>
                <StaggerItem as="article" className="flex flex-1 flex-col gap-3.5 rounded-[8px] bg-white p-7 md:p-10">
                  <h3 className={`${FD} text-2xl font-medium leading-9 tracking-[-0.02em]`}>Derechos Digitales</h3>
                  <p className="text-base leading-[26px] text-[#5B5E6D]">
                    Regulamos tu patrimonio intangible: el registro de una marca, códigos fuente, imagen comercial en redes y contratos para la adquisición de nuevas tecnologías.
                  </p>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </section>

        {/* Servicios Legaltech */}
        <section id="servicios" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[340px_1fr] lg:gap-24 lg:py-32`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${FD} text-[clamp(2rem,2.8vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]`}>Servicios Legaltech®</h2>
              <p className="max-w-[320px] text-lg leading-[29px] text-[#5B5E6D]">Ponemos a tu disposición los siguientes servicios.</p>
            </Reveal>
            <div className="grid gap-9 md:grid-cols-2 md:gap-12">
              {SERVICIOS.map((col, ci) => (
                <Stagger key={ci} as="ul" className="flex flex-col gap-9" gap={0.07} delay={ci * 0.1}>
                  {col.map(({ Icon, t, d }) => (
                    <StaggerItem key={t} as="li" className="flex gap-[18px]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#A7CF42]/20">
                        <Icon size={22} className="text-[#3B7639]" />
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-lg font-semibold leading-[23px]">{t}</h3>
                        <p className="text-[15px] leading-[23px] text-[#5B5E6D]">{d}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        {/* Lex-i */}
        <section id="lexi" className="scroll-mt-24 bg-[#A7CF42]">
          <div className={`${WRAP} grid items-center gap-12 py-20 lg:grid-cols-[1fr_560px] lg:gap-20 lg:py-24`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={`${FD} max-w-[560px] text-[clamp(1.875rem,2.8vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]`}>
                Conoce a nuestro abogado virtual Lex-i®
              </Reveal>
              <Reveal as="p" delay={0.08} className="max-w-[520px] text-lg leading-[29px] md:text-[19px]">
                Utiliza a Lex-i®, el primer abogado bot que te facilitará las labores legales habituales.
              </Reveal>
              <Reveal delay={0.14}>
                <a href={`${SITE}/lexi`} className="press nudge inline-flex items-center gap-2.5 rounded-[8px] bg-[#222126] px-[26px] py-4 text-base font-semibold text-white hover:bg-[#35343B]">
                  Conoce a Lex-i®
                  <ArrowRight size={18} />
                </a>
              </Reveal>
            </div>
            <MediaReveal onView delay={0.05} className="relative aspect-[560/324] w-full overflow-hidden rounded-[8px]">
              <Image src={`${IMG}/lexi-img26-x2.jpg`} alt="Mano que toca una interfaz digital con el ícono de un robot" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Talento y Pro bono */}
        <section aria-label="Talento y Pro bono" className="bg-[#F2F2F2]">
          <Stagger className={`${WRAP} grid gap-6 py-24 lg:grid-cols-2 lg:py-32`} gap={0.1}>
            <StaggerItem as="article" className="flex flex-col gap-7 rounded-[8px] bg-[#222126] p-7 text-white md:p-12">
              <h2 id="talento" className={`${FD} scroll-mt-28 text-[32px] font-medium leading-[48px] tracking-[-0.025em]`}>
                Talento
              </h2>
              <p className="text-lg leading-7 text-white/90">¡Nuestro mayor activo eres tú! Cambiamos la forma de ser abogado ofreciendo flexibilidad.</p>
              {[
                ["Modelo híbrido", "Trabaja desde home office o en oficina. En ciertas áreas de práctica puedes colaborar con nosotros sin importar dónde vivas."],
                ["Retribución justa y competitiva", "Cada abogado participa de manera directa en la retribución de las cuentas en las que trabaja: entre más aportas, más ganas."],
              ].map(([t, d]) => (
                <div key={t} className="flex flex-col gap-1.5">
                  <h3 className="text-[17px] font-semibold leading-[26px] text-[#A7CF42]">{t}</h3>
                  <p className="text-[15px] leading-[23px] text-white/70">{d}</p>
                </div>
              ))}
              <div className="flex flex-col gap-3 border-t border-white/15 pt-6">
                <h3 className="text-[15px] font-semibold leading-[23px]">Vacantes</h3>
                <p className="text-[15px] leading-[23px] text-white/85">Abogado Laboralista · Abogado de Litigio Mercantil · Abogado Corporativista</p>
              </div>
            </StaggerItem>
            <StaggerItem as="article" className="flex flex-col gap-6 rounded-[8px] bg-white p-7 md:p-12">
              <h2 id="probono" className={`${FD} scroll-mt-28 text-[32px] font-medium leading-[48px] tracking-[-0.025em]`}>
                Pro bono
              </h2>
              <p className="text-lg leading-7">Comprometidos con la comunidad, tenemos un programa de apoyo jurídico para emprendedores sociales en:</p>
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-8">
                {PROBONO.map((col) => (
                  <ul key={col[0]} className="flex flex-col gap-2.5">
                    {col.map((t) => (
                      <li key={t} className="flex gap-2.5 text-[15px] leading-5">
                        <Check size={18} className="shrink-0 text-[#3B7639]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <p className="text-[15px] leading-[23px] text-[#5B5E6D]">
                ¿Estás empezando y no tienes recursos? Aplica con nosotros y si cumples el perfil te apoyamos sin ningún costo.
              </p>
              <p className="text-[15px] leading-[23px] text-[#5B5E6D]">La firma se ha adherido al Juramento del General Counsel (The General Counsel Oath).</p>
              <a href={`${SITE}/bienestar`} className="press w-fit rounded-[8px] border border-[#222126] px-6 py-3.5 text-[15px] font-semibold hover:bg-[#222126] hover:text-white">
                Aplicar
              </a>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[460px_1fr] lg:gap-20 lg:py-32`}>
            <div className="flex flex-col gap-8">
              <Reveal className="flex flex-col gap-8">
                <h2 className={`${FD} text-[clamp(2rem,3.1vw,2.75rem)] font-medium leading-[1.16] tracking-[-0.027em]`}>Contáctanos</h2>
                <p className="max-w-[440px] text-lg leading-[29px] text-[#5B5E6D]">Estamos comprometidos a ayudarte y orientarte en el momento que lo necesites.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-8" gap={0.07}>
                <ContactItem Icon={MapPin} label="Ciudad de México">
                  Río Misisipi 49, piso 14 (Torre M49)
                </ContactItem>
                <ContactItem Icon={MapPin} label="León, Guanajuato">
                  Paseo de los Insurgentes 3356, Torre 2, Despacho 402-1, Col. San José de las Piletas, Puerta Bajío
                </ContactItem>
                <ContactItem Icon={Phone} label="Teléfono y WhatsApp">
                  <a href="tel:+5215578666254" className="link-u">
                    +52 1 (55) 7866 6254
                  </a>
                </ContactItem>
                <ContactItem Icon={EnvelopeSimple} label="Correo">
                  <a href="mailto:contacto@gedb-legaltech.mx" className="link-u">
                    contacto@gedb-legaltech.mx
                  </a>
                </ContactItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[8px] bg-[#F2F2F2] p-6 md:p-12" noteClassName="text-sm text-[#5B5E6D]">
                <h3 className={`${FD} text-2xl font-medium leading-9 tracking-[-0.02em]`}>Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold leading-[21px]">¿En qué podemos ayudarte?</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    className="h-[150px] resize-none rounded-[8px] border border-[#D6D6D9] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#3B7639] focus:shadow-[0_0_0_3px_rgba(167,207,66,0.35)]"
                  />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a href={`${SITE}/AvisoPrivacidad`} className="link-u text-sm text-[#5B5E6D]">
                    Aviso de Privacidad
                  </a>
                  <button type="submit" className="press rounded-[8px] bg-[#222126] px-9 py-[15px] text-base font-semibold text-white hover:bg-[#35343B]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#222126] text-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3.5">
              <Logo footer />
              <p className="text-sm leading-[21px] text-white/70">Donde la Tecnología y el Derecho convergen®</p>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <nav aria-label="Pie de página">
                <ul className="flex flex-wrap gap-x-[26px] gap-y-3 text-sm leading-[21px] text-white/85">
                  {[
                    { label: "Áreas de práctica", href: "#areas" },
                    { label: "Nosotros", href: "#nosotros" },
                    { label: "Talento", href: "#talento" },
                    { label: "Servicios Legaltech®", href: "#servicios" },
                    { label: "Lex-i®", href: "#lexi" },
                    { label: "Bienestar", href: "#probono" },
                    { label: "Lo último", href: `${SITE}/LoUltimo` },
                    { label: "Contacto", href: "#contacto" },
                  ].map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-u">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex gap-3">
                {REDES.map(({ Icon, href, label }) => (
                  <li key={label}>
                    <a href={href} aria-label={label} className="press flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/20 hover:border-[#A7CF42] hover:text-[#A7CF42]">
                      <Icon size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-[13px] leading-5 text-white/60 md:flex-row md:justify-between">
            <p>Copyright © 2026 GEDB Legaltech SC® Firm</p>
            <ul className="flex gap-6">
              <li>
                <a href={`${SITE}/AvisoPrivacidad`} className="link-u">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href={`${SITE}/TerminosCondiciones`} className="link-u">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactItem({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem as="li" className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#A7CF42]/20">
        <Icon size={20} className="text-[#3B7639]" />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold leading-[21px]">{label}</p>
        <p className="text-base leading-[25px] text-[#5B5E6D]">{children}</p>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold leading-[21px]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[50px] rounded-[8px] border border-[#D6D6D9] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#3B7639] focus:shadow-[0_0_0_3px_rgba(167,207,66,0.35)]"
      />
    </label>
  );
}
