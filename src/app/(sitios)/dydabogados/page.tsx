import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Public_Sans, Spectral } from "next/font/google";
import { ArrowRight, Bank, Broadcast, EnvelopeSimple, Handshake, MapPin, Phone, Scales } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Spectral({ subsets: ["latin"], weight: ["300", "400"], variable: "--s17-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--s17-body" });

export const metadata: Metadata = {
  title: "D&D Abogados",
  description: "Brindamos servicios jurídicos de excelencia. Consultoría y litigio en materias constitucional, administrativa, regulatoria, civil y mercantil.",
};

const IMG = "/sitios/dydabogados";
const D = "font-[family-name:var(--s17-display)]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const EMAIL = "contacto@dydabogados.mx";
const TEL = { label: "+52 55 92 19 06 28", href: "tel:+525592190628" };
const AVISO = "https://dydabogados.mx/aviso-de-privacidad/";

const NAV = [
  { label: "La firma", href: "#la-firma" },
  { label: "Áreas de práctica", href: "#areas-de-practica" },
  { label: "Abogados", href: "#abogados" },
];

const VALUES = ["Responsabilidad", "Calidad técnica", "Ética profesional", "Compromiso"];

const AREAS = [
  { t: "Consultoría y litigio constitucional", Icon: Scales, d: "Asesoría y defensa en materia de juicio de amparo, acciones de inconstitucionalidad, controversias constitucionales y proyectos legislativos." },
  { t: "Consultoría y litigio administrativo", Icon: Bank, d: "Asesoría y defensa en responsabilidad patrimonial del Estado, responsabilidades administrativas de los servidores públicos, procedimientos de contratación pública, proyectos de infraestructura y derecho administrativo sancionatorio." },
  { t: "Consultoría y litigio regulatorio", Icon: Broadcast, d: "Asesoría y defensa en materia de juicio de amparo especializado en competencia económica, radiodifusión y telecomunicaciones." },
  { t: "Litigio civil y mercantil", Icon: Handshake, d: "Litigio civil y mercantil enfocado en conflictos contractuales y responsabilidad por daño moral." },
];

const PARTNER_DATA: [string, ReactNode][] = [
  [
    "Educación",
    <>
      Escuela Libre de Derecho, Abogado (2006).
      <br />
      Harvard University, LLM (2010).
    </>,
  ],
  ["Idiomas", "Español, inglés y francés."],
  ["Docencia", "Profesor titular de Filosofía del Derecho en la Escuela Libre de Derecho (2022 a la fecha). Coordinador del Diplomado de Juicios Constitucionales en el ITAM (2010 a la fecha)."],
  ["Publicación", "El régimen de deuda pública local a la luz de las decisiones del Poder Judicial de la Federación, Tirant lo Blanch, 2015."],
];

const ASSOCIATES = [
  { n: "Rodolfo Nahum Dillanes Díaz", r: "Asociado Senior", note: "Más de diez años de experiencia en litigio constitucional y administrativo. Escuela Libre de Derecho." },
  { n: "Karen Daniela Aguilar Peña", r: "Asociada Junior" },
  { n: "Marco Antonio Campos Fabián", r: "Asociado Junior" },
  { n: "Bernardo Gorrosino Monzón", r: "Pasante" },
];

export default function DyDAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s17-body)] leading-[normal] text-[#181818] selection:bg-[#32689B] selection:text-white`}
    >
      <SiteNav
        logo={
          <a href="#top" aria-label="D&D Abogados, inicio" className="block">
            <Image src={`${IMG}/logo.svg`} alt="" width={79} height={52} preload className="h-auto w-[66px] lg:w-[79px]" />
          </a>
        }
        links={NAV}
        className="border-b border-[#E3E7EE] bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(25,30,45,0.5)]"
        innerClassName={`${WRAP} flex h-20 items-center gap-10 lg:h-[95px] [&>button]:ml-auto [&>nav]:ml-auto [&>nav>ul]:gap-10`}
        linkClassName="text-[15px] font-medium text-[#181818]"
        panelClassName="bg-white text-[#191E2D] font-[family-name:var(--s17-body)]"
        panelLinkClassName={`${D} font-light`}
        burgerClassName="bg-[#191E2D]"
        actions={
          <a href="#contacto" className="press bg-[#32689B] px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#28557F]">
            Contáctenos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section>
          <HeroIntro className={`${WRAP} flex flex-col gap-8 pb-16 pt-16 lg:pb-[88px] lg:pt-[104px]`}>
            <HeroItem as="h1" blur className={`${D} max-w-[1000px] text-[clamp(2.75rem,5.6vw,5rem)] font-light leading-[1.04] tracking-[-1.5px] text-[#191E2D]`}>
              Brindamos servicios jurídicos
              <br className="hidden sm:inline" /> de excelencia
            </HeroItem>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <HeroItem as="p" className="max-w-[560px] text-lg leading-[1.5] text-[#4A5163] md:text-xl">
                Consultoría y litigio en materias constitucional, administrativa, regulatoria, civil y mercantil.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#contacto" className="press bg-[#32689B] px-8 py-[18px] text-base font-semibold text-white hover:bg-[#28557F]">
                  Contáctenos
                </a>
                <a href="#areas-de-practica" className="nudge flex items-center gap-2.5 border-b border-[#191E2D] pb-1 text-base font-semibold text-[#191E2D]">
                  Ver áreas de práctica
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </HeroItem>
            </div>
          </HeroIntro>
          <div className="relative">
            <MediaReveal className="relative h-[300px] overflow-hidden sm:h-[420px] lg:h-[560px]" delay={0.3}>
              <Image src={`${IMG}/logo-header-azul.jpg`} alt="Vista de la Ciudad de México desde el Bosque de Chapultepec" fill preload sizes="100vw" className="object-cover" />
            </MediaReveal>
            <div className={`${WRAP} lg:absolute lg:inset-x-0 lg:bottom-0`}>
              <HeroIntro delay={0.9} className="-mt-12 flex lg:mt-0 lg:justify-end">
                <HeroItem y={16} className="relative flex w-full max-w-[560px] items-center bg-[#32689B] px-7 py-8 sm:px-12 sm:py-10 lg:min-h-[240px]">
                  <p className={`${D} text-[clamp(1.375rem,1.95vw,1.75rem)] leading-[1.29] text-white`}>
                    Un equipo multidisciplinario capaz de abordar con creatividad los problemas jurídicos de nuestros clientes.
                  </p>
                </HeroItem>
              </HeroIntro>
            </div>
          </div>
        </section>

        {/* La firma */}
        <section id="la-firma" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid items-center gap-12 pb-24 pt-24 lg:grid-cols-[456px_1fr] lg:gap-24 lg:pb-32 lg:pt-[136px]`}>
            <MediaReveal onView className="relative aspect-[456/620] w-full max-w-[456px] overflow-hidden" delay={0}>
              <Image src={`${IMG}/despacho.jpeg`} alt="Vestíbulo de un edificio corporativo en blanco y negro" fill sizes="(min-width: 1024px) 456px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${D} text-[clamp(2.5rem,3.9vw,3.5rem)] font-light leading-[1.15] tracking-[-1px] text-[#191E2D]`}>
                D&amp;D Abogados
              </Reveal>
              <Reveal delay={0.06} className="flex flex-col gap-7">
                <p className={`${D} text-[clamp(1.25rem,1.67vw,1.5rem)] leading-[1.46]`}>
                  Un despacho especializado en consultoría y litigio en materias constitucional, administrativa, regulatoria, civil y mercantil, que reúne la experiencia de sus socios en el sector público y en el privado.
                </p>
                <p className="text-[17px] leading-7 text-[#4A5163]">
                  Su enfoque multidisciplinario permite ofrecer a sus clientes la solución de sus problemas con responsabilidad, calidad técnica, ética profesional y compromiso con la transformación de la práctica jurídica.
                </p>
              </Reveal>
              <Stagger as="ul" className={`${D} flex flex-wrap gap-x-8 gap-y-2 border-t border-[#D9DEE6] pt-7 text-xl text-[#32689B] xl:flex-nowrap`} gap={0.05} delay={0.1}>
                {VALUES.map((v) => (
                  <StaggerItem key={v} as="li" y={10}>
                    {v}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas-de-practica" className="scroll-mt-24 bg-[#32689B] text-white">
          <div className={`${WRAP} flex flex-col gap-14 pb-24 pt-24 lg:gap-[72px] lg:pb-[136px] lg:pt-32`}>
            <Reveal className="flex max-w-[760px] flex-col gap-6">
              <h2 className={`${D} text-[clamp(2.5rem,3.9vw,3.5rem)] font-light leading-[1.15] tracking-[-1px]`}>Áreas de práctica</h2>
              <p className="text-[17px] leading-[30px] md:text-lg">
                En D&amp;D Abogados creemos firmemente que la mejor manera de cumplir con nuestros objetivos es entendiendo cabalmente en cada caso concreto las necesidades de nuestros clientes. Por esa razón nos esforzamos en proporcionar una atención personalizada.
              </p>
            </Reveal>
            <Stagger className="grid md:grid-cols-2" gap={0.07}>
              {AREAS.map(({ t, Icon, d }, i) => (
                <StaggerItem
                  key={t}
                  as="article"
                  className={`flex flex-col gap-5 border-t border-white/30 pb-12 pt-10 md:pb-[52px] md:pt-11 ${i % 2 === 0 ? "md:pr-14" : "md:border-l md:pl-14"}`}
                >
                  <Icon className="h-8 w-8" />
                  <h3 className={`${D} text-[clamp(1.75rem,2.25vw,2rem)] leading-[1.16]`}>{t}</h3>
                  <p className="text-base leading-[26px] text-[#EEF3F8]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Abogados */}
        <section id="abogados" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:gap-[72px] lg:py-[136px]`}>
            <Reveal className="flex max-w-[820px] flex-col gap-6">
              <h2 className={`${D} text-[clamp(2.25rem,3.6vw,3.25rem)] font-light leading-[1.1] tracking-[-1px] text-[#191E2D]`}>
                Asumimos nuestro compromiso
                <br className="hidden sm:inline" /> y responsabilidad profesional
              </h2>
              <p className="text-[17px] leading-[30px] text-[#4A5163] md:text-lg">
                Todos los abogados que formamos parte de D&amp;D Abogados tenemos un compromiso frente a la confianza que nos depositan nuestros clientes. Por eso nos conducimos bajo los parámetros más exigentes de honestidad, compromiso y dedicación.
              </p>
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_480px] lg:gap-16">
              <Reveal as="article" className="flex flex-col gap-5 border-t-2 border-[#191E2D] pt-10">
                <h3 className={`${D} text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.2] text-[#191E2D]`}>Rodrigo Bernardo Díez Gargari</h3>
                <p className="text-[15px] font-semibold text-[#32689B]">Socio Director</p>
                <p className="text-[17px] leading-7">
                  Tiene más de veinte años de experiencia en litigio constitucional y administrativo. Durante doce años fue socio director en su propio despacho.
                </p>
                <dl className="flex flex-col gap-4 pt-3">
                  {PARTNER_DATA.map(([k, v]) => (
                    <div key={k} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
                      <dt className="text-sm font-semibold leading-[22px] text-[#191E2D]">{k}</dt>
                      <dd className="text-[15px] leading-6 text-[#4A5163]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-9 bg-[#F1F4F8] px-7 pb-11 pt-10 sm:px-11" gap={0.07} delay={0.1}>
                {ASSOCIATES.map((a) => (
                  <StaggerItem key={a.n} as="li" className="flex flex-col gap-1.5">
                    <h3 className={`${D} text-2xl text-[#191E2D]`}>{a.n}</h3>
                    <p className="text-[15px] font-semibold text-[#32689B]">{a.r}</p>
                    {a.note && <p className="text-[15px] leading-6 text-[#4A5163]">{a.note}</p>}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#191E2D] text-white">
          <div className={`${WRAP} grid gap-14 pb-24 pt-24 lg:grid-cols-[500px_1fr] lg:gap-24 lg:pb-[136px] lg:pt-32`}>
            <Reveal className="flex flex-col items-start gap-7">
              <h2 className={`${D} text-[clamp(3rem,4.45vw,4rem)] font-light leading-[1.15] tracking-[-1px]`}>Contacto</h2>
              <p className="text-lg leading-[30px] text-[#D5D9E4] md:text-[19px]">
                Por favor contáctenos al correo y nosotros nos comunicaremos con usted lo antes posible.
              </p>
              <a href={`mailto:${EMAIL}`} className="press bg-[#32689B] px-8 py-[18px] text-base font-semibold text-white hover:bg-[#3D78B0]">
                Contáctenos
              </a>
            </Reveal>
            <Stagger as="ul" className="flex flex-col" gap={0.08} delay={0.1}>
              <StaggerItem as="li" className="flex gap-6 border-b border-white/15 pb-8 pt-2">
                <EnvelopeSimple className="h-6 w-6 shrink-0 text-[#8FB3D6]" />
                <div className="flex min-w-0 flex-col gap-2">
                  <p className="text-sm font-semibold text-[#AEB6C8]">Correo</p>
                  <a href={`mailto:${EMAIL}`} className={`${D} link-u w-fit break-all text-[clamp(1.375rem,2.1vw,1.875rem)] leading-9`}>
                    {EMAIL}
                  </a>
                </div>
              </StaggerItem>
              <StaggerItem as="li" className="flex gap-6 border-b border-white/15 py-8">
                <Phone className="h-6 w-6 shrink-0 text-[#8FB3D6]" />
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-[#AEB6C8]">Teléfono</p>
                  <a href={TEL.href} className={`${D} link-u w-fit text-[clamp(1.375rem,2.1vw,1.875rem)] leading-9`}>
                    {TEL.label}
                  </a>
                </div>
              </StaggerItem>
              <StaggerItem as="li" className="flex gap-6 py-8">
                <MapPin className="h-6 w-6 shrink-0 text-[#8FB3D6]" />
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-[#AEB6C8]">Dirección</p>
                  <address className="text-[17px] not-italic leading-[29px] md:text-lg">
                    Av. Presidente Masaryk No. 101, Piso 10, Despacho 1002-A
                    <br />
                    Col. Chapultepec Morales, C.P. 11570
                    <br />
                    Alc. Miguel Hidalgo, Ciudad de México
                  </address>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-[#1D1E1E]">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <a href="#top" aria-label="D&D Abogados, inicio" className="block w-fit">
              <Image src={`${IMG}/logo-blanco.svg`} alt="" width={79} height={52} />
            </a>
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-10 gap-y-3 text-[15px] text-[#E4E6EA]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={AVISO} className="link-u">
                    Aviso de privacidad
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/[0.12] pt-6 text-sm text-[#A9AEB8] md:flex-row md:justify-between">
            <p>© Domínguez y Díez 2026{" · "}<HemeronCredit /></p>
            <p>Av. Presidente Masaryk No. 101, Piso 10, Ciudad de México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
