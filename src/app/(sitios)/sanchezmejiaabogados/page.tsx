import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Lexend, Petrona } from "next/font/google";
import {
  Briefcase,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  GlobeHemisphereWest,
  HouseLine,
  Leaf,
  LinkedinLogo,
  MapPin,
  Phone,
  Receipt,
  Scales,
  Storefront,
  Tree,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Petrona({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s25-display" });
const body = Lexend({ subsets: ["latin"], variable: "--s25-body" });

export const metadata: Metadata = {
  title: "Sánchez Mejía Abogados Asociados S.C.",
  description: "Para nosotros es importante estar cerca de usted. Un profesionista especializado en cada área del derecho.",
};

const IMG = "/sitios/sanchezmejiaabogados";
const DISPLAY = "font-[family-name:var(--s25-display)]";
const H2 = `${DISPLAY} text-[clamp(2.5rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-1.5px]`;
const PHONE = { v: "55 5511 8266", full: "+52 55 5511 8266", href: "tel:+525555118266" };
const EMAIL = "administrativo@sanchezmejiaabogados.com";
const AVISO = "https://www.sanchezmejiaabogados.com/privacidad.html";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Despacho", href: "#despacho" },
  { label: "Historia", href: "#historia" },
  { label: "Asociados", href: "#asociados" },
  { label: "Agenda", href: "#agenda" },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/S%C3%A1nchez-Mej%C3%ADa-Abogados-Asociados-SC-163938786972875/?fref=ts", Icon: FacebookLogo },
  { label: "Twitter", href: "https://twitter.com/SanchezMejiaAbg", Icon: TwitterLogo },
  { label: "LinkedIn", href: "https://mx.linkedin.com/in/juan-pablo-s%C3%A1nchez-165387112", Icon: LinkedinLogo },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=rfeDvoOpCcA&feature=youtu.be", Icon: YoutubeLogo },
];

const CREDENCIALES = [
  { v: "1985", t: "Año en que se formó la Sociedad Civil, con corresponsalías en el interior de la República." },
  { v: "IUSTIME", t: "Asociación con la agrupación europea de despachos profesionales desde 2013." },
  { v: "Barra Mexicana", t: "Coordinación del Comité de Derecho Agrario, Rural y Urbanístico, Colegio de Abogados, A.C." },
  { v: "Nacional e internacional", t: "Convenios con diversos despachos jurídicos nacionales e internacionales." },
];

const AREAS = [
  { t: "Derecho agrario", d: "Sociedades, fiscal, financiero y asesoría.", Icon: Leaf },
  { t: "Derecho internacional", d: "Migratorios, naturalizaciones, contratos, planeación corporativa y de inversión.", Icon: GlobeHemisphereWest },
  { t: "Derecho ambiental", d: "Auditorías, litigios, concursos y asesoría.", Icon: Tree },
  { t: "Derecho laboral", d: "Juicios, auditorías y asesoría.", Icon: Briefcase },
  { t: "Derecho civil", d: "Contratos, arrendamiento, divorcios, juicios, sucesiones y asesoría.", Icon: HouseLine },
  { t: "Derecho mercantil", d: "Contratos, juicios, constitución de sociedades, asambleas, defensa de los derechos y asesoría.", Icon: Storefront },
  { t: "Derecho fiscal", d: "Juicios, amparos, planeación y asesoría.", Icon: Receipt },
  { t: "Derecho penal", d: "Procesal, amparo, todas las materias y asesoría.", Icon: Scales },
];

const DIRECTORIO = [
  { n: "Lic. Juan Pablo Sánchez Flores", c: "Director General, socio fundador 1985", lead: true },
  { n: "Lic. Manuel Sánchez Mejía", c: "Socio fundador 1985-2004", lead: true },
  { n: "Lic. Manuel Sánchez Flores", c: "Socio fundador 1985" },
  { n: "C.P. Oscar J. Fonseca Blanco", c: "Director SIPASA S.C., asociado" },
  { n: "Juan Pablo Sánchez Gómez", c: "Director IUSTIME-Sánchez Mejía Abogados, asociado" },
  { n: "Rosa Elena Damián Sánchez", c: "Coordinadora administrativa" },
  { n: "Oscar T. López Arteaga", c: "Coordinador de trámites administrativos" },
  { n: "María Isabel Álvarez Casillas", c: "Contacto" },
];

const SECTORES = [
  ["Hotelero", "Gobiernos", "Educativo (colegios)"],
  ["Productoras", "Constructoras", "De servicios"],
  ["Restaurantes", "Industrias del plástico", "Agrícola y ganadera"],
  ["Personas físicas"],
];

const ASOCIADOS = [
  { n: "IUSTIME", d: "Agrupación de despachos profesionales dentro y fuera de España, que llega a América a través de Sánchez Mejía Abogados." },
  { n: "SIPASA, S.C.", d: "Contable, fiscal y financiero. Contadores, abogados e ingenieros en sistemas." },
  { n: "Lander Abogados", d: "Firma uruguaya que brinda desde hace 60 años servicios profesionales a clientes nacionales y extranjeros." },
  { n: "Márquez & Beteta Abogados S.C.", d: "Amparo laboral y derecho laboral." },
  { n: "Lic. Luis Jaime López Tolsa Novoa", d: "Derecho corporativo y transacciones comerciales nacionales e internacionales." },
];

const AGENDA = [
  { img: "image6.jpg", f: "Mayo 2016", t: "Las Agroindustrias en México", d: "Sesión en la Barra Mexicana, Colegio de Abogados, A.C." },
  { img: "image5.jpg", f: "10 de marzo de 2016", t: "El Asociacionismo Rural y sus perspectivas empresariales", d: "Sesión a cargo del Lic. Juan Pablo Sánchez." },
  { img: "image3.jpg", f: "Marzo 2015", t: "Entrevista Proyecto Vanguardia", d: "El Lic. Juan Pablo Sánchez, experto en derecho agrario, platica del derecho agrario en México." },
  { img: "image4.jpg", f: "2013", t: "Asociación IUSTIME-Sánchez Mejía Abogados", d: "Asociación con la agrupación profesional de asesorías de Europa IUSTIME." },
];

export default function SanchezMejiaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s25-body)] text-[#0B1438] selection:bg-[#8A8F2C] selection:text-[#0B1438]`}
    >
      {/* Barra superior */}
      <div className="hidden bg-[#0B1438] text-[13px] text-white/85 md:block">
        <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-between px-8 xl:px-0">
          <div className="flex items-center gap-7">
            <a href={PHONE.href} className="flex items-center gap-2">
              <Phone size={15} aria-hidden="true" className="text-white/70" />
              <span className="link-u">{PHONE.v}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
              <EnvelopeSimple size={15} aria-hidden="true" className="text-white/70" />
              <span className="link-u">{EMAIL}</span>
            </a>
          </div>
          <ul className="flex items-center gap-[18px]">
            {SOCIAL.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} className="press block hover:text-white">
                  <Icon size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SiteNav
        logo={
          <a href="#top" aria-label="Sánchez Mejía Abogados Asociados S.C., inicio" className="block">
            <Image src={`${IMG}/wordmark.svg`} alt="" width={104} height={62} preload className="h-[50px] w-auto lg:h-[62px]" />
          </a>
        }
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(11,20,56,0.35)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center gap-[34px] px-5 md:px-8 lg:h-[104px] xl:px-0 [&>div:first-child]:mr-auto [&_nav_ul]:gap-[34px]"
        linkClassName="text-[15px] text-[#0B1438]"
        panelClassName="bg-white text-[#0B1438] font-[family-name:var(--s25-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl font-medium`}
        burgerClassName="bg-[#0B1438]"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#0B1438] px-[22px] py-[13px] text-[15px] font-medium text-white hover:bg-[#1C2756]">
            Contáctenos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#0B1438] text-white">
          <HeroIntro className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-12 pt-16 md:px-8 lg:gap-12 lg:pt-24 xl:px-0">
            <HeroItem as="h1" blur className={`${DISPLAY} max-w-[980px] text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[1.04] tracking-[-2px]`}>
              Para nosotros es importante estar cerca de usted.
            </HeroItem>
            <HeroItem className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[560px] text-[17px] leading-[29px] text-white/85 md:text-lg">
                Respondemos de inmediato a sus necesidades, de manera personalizada y con un profesionista especializado en cada área del derecho.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contacto" className="press rounded-[6px] bg-[#8A8F2C] px-7 py-[17px] text-base font-medium leading-5 text-[#0B1438] hover:bg-[#9DA235]">
                  Contáctenos
                </a>
                <a href="#servicios" className="press rounded-[6px] border border-white/40 px-[26px] py-4 text-base font-medium leading-5 hover:border-white/70 hover:bg-white/[0.06]">
                  Nuestros servicios
                </a>
              </div>
            </HeroItem>
          </HeroIntro>
        </section>
        <div className="bg-[linear-gradient(180deg,#0B1438_0%,#0B1438_38%,#FFFFFF_38%,#FFFFFF_100%)]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0">
            <MediaReveal delay={0.3} className="relative h-[260px] overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[540px]">
              <Image src={`${IMG}/slide1.jpg`} alt="Sala de juntas del despacho" fill preload sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </div>

        {/* Credenciales */}
        <section aria-label="Credenciales">
          <Stagger as="dl" className="mx-auto grid max-w-[1200px] gap-x-12 gap-y-10 px-5 pb-20 pt-16 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:pb-24 lg:pt-[72px] xl:px-0" gap={0.07}>
            {CREDENCIALES.map(({ v, t }) => (
              <StaggerItem key={v} className="flex flex-col gap-3 border-t-2 border-[#8A8F2C] pt-5">
                <dt className={`${DISPLAY} text-[30px] font-semibold leading-[35px]`}>{v}</dt>
                <dd className="text-[15px] leading-6 text-[#565B6E]">{t}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F6F5F0]">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-24 lg:py-32 xl:px-0">
            <Reveal className="flex flex-col gap-6">
              <h2 className={`${H2} lg:leading-[59px]`}>Nuestros servicios</h2>
              <p className="text-base leading-[27px] text-[#565B6E]">
                Procuramos tener a un profesionista por área, especializado en la misma y actualizado mediante estudio y práctica. Somos un grupo de profesionistas con presencia nacional e internacional.
              </p>
              <p className={`${DISPLAY} text-[22px] italic leading-[30px]`}>Tenemos especialistas en cada una de las áreas.</p>
            </Reveal>
            <Stagger className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-y-12" gap={0.05}>
              {AREAS.map(({ t, d, Icon }) => (
                <StaggerItem key={t} as="article" className="flex gap-5">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] border border-[#0B14381A] bg-white text-[#8A8F2C]">
                    <Icon size={24} />
                  </span>
                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className={`${DISPLAY} text-[26px] font-semibold leading-tight`}>{t}</h3>
                    <p className="text-[15px] leading-6 text-[#565B6E]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Cómo lo hacemos */}
        <section aria-labelledby="como" className="bg-[#8A8F2C]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-20 md:px-8 lg:gap-12 lg:pb-24 lg:pt-[104px] xl:px-0">
            <Reveal as="h2" id="como" className="text-lg font-medium">
              Cómo lo hacemos
            </Reveal>
            <Stagger as="ul" className={`${DISPLAY} flex flex-wrap items-end justify-between gap-x-10 gap-y-3 text-[clamp(2.75rem,4.8vw,4.25rem)] font-medium leading-none tracking-[-2.5px]`} gap={0.08}>
              {["Calidad", "Eficiencia", "Honestidad", "Orden"].map((w) => (
                <StaggerItem key={w} as="li" y={20}>
                  {w}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} as="p" className="max-w-[820px] text-[17px] leading-[29px] md:text-lg">
              Comunicación, competencia, cortesía, credibilidad, confiabilidad, velocidad de respuesta, seguridad y empatía.
            </Reveal>
          </div>
        </section>

        {/* Historia */}
        <section id="historia" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-start gap-12 px-5 py-20 md:px-8 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-24 lg:pb-32 lg:pt-[136px] xl:px-0">
          <div className="flex flex-col gap-4">
            <MediaReveal onView delay={0} className="img-zoom relative h-[300px] overflow-hidden rounded-[6px] sm:h-[400px]">
              <Image src={`${IMG}/slide3.jpg`} alt="Biblioteca del despacho" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="grid grid-cols-2 gap-4">
              <MediaReveal onView delay={0.1} className="img-zoom relative h-[150px] overflow-hidden rounded-[6px] sm:h-[200px]">
                <Image src={`${IMG}/slide2.jpg`} alt="Oficina del despacho" fill sizes="(min-width: 1024px) 252px, 50vw" className="object-cover" />
              </MediaReveal>
              <MediaReveal onView delay={0.18} className="img-zoom relative h-[150px] overflow-hidden rounded-[6px] sm:h-[200px]">
                <Image src={`${IMG}/aboutme.jpg`} alt="Máquina de escribir antigua" fill sizes="(min-width: 1024px) 252px, 50vw" className="object-cover" />
              </MediaReveal>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.375rem,3.9vw,3.25rem)] font-medium leading-[1.08] tracking-[-1.5px]`}>
              Ejercemos con calidad desde 1985
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col gap-6">
              <p className="text-[17px] leading-[29px]">
                El despacho nace de la idea de su socio fundador, el Lic. Manuel Sánchez Mejía, distinguido jurista en el ámbito nacional e internacional, destacado en el juicio de amparo y el derecho rural. Con sus hijos Manuel y Juan Pablo Sánchez Flores formó la Sociedad Civil en 1985, amplió los servicios a diversas materias del derecho y constituyó corresponsalías en el interior de la República.
              </p>
              <p className="text-base leading-[27px] text-[#565B6E]">
                Nos hemos destacado por un servicio personalizado, mediante la calidad y honradez en nuestros trabajos jurídicos. En litigio, tratamos de llegar a una buena solución, evitando que nuestros clientes carguen con su problema legal.
              </p>
            </Reveal>
            <Reveal delay={0.12} as="figure" className="flex flex-col gap-1.5 border-t border-[#0B14381F] pt-6">
              <blockquote className={`${DISPLAY} text-2xl italic`}>Gracias por su visita, esperamos servirles.</blockquote>
              <figcaption className="text-[15px] font-medium text-[#565B6E]">Lic. Juan Pablo Sánchez Flores, Director General</figcaption>
            </Reveal>
          </div>
        </section>

        {/* Directorio */}
        <section id="despacho" className="scroll-mt-24 bg-[#0B1438] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-20 md:px-8 lg:pb-[136px] lg:pt-32 xl:px-0">
            <Reveal as="h2" className={H2}>
              Directorio
            </Reveal>
            <div className="grid gap-12 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-[72px]">
              <figure className="flex flex-col gap-3.5">
                <MediaReveal onView delay={0} className="relative aspect-[560/354] w-full overflow-hidden rounded-[6px]">
                  <Image src={`${IMG}/team.jpg`} alt="Equipo Sánchez Mejía Abogados S.C." fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                </MediaReveal>
                <figcaption className="text-sm text-white/70">Equipo Sánchez Mejía Abogados S.C.</figcaption>
              </figure>
              <Stagger as="ul" className="grid content-start gap-x-8 gap-y-[30px] sm:grid-cols-2" gap={0.05}>
                {DIRECTORIO.map(({ n, c, lead }) => (
                  <StaggerItem key={n} as="li" className={`flex flex-col gap-1.5 border-l-2 pl-[18px] ${lead ? "border-[#8A8F2C]" : "border-white/20"}`}>
                    <p className={`${DISPLAY} text-[21px] font-semibold leading-tight`}>{n}</p>
                    <p className="text-[15px] leading-[22px] text-white/70">{c}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Clientes y asociados */}
        <section id="asociados" className="mx-auto grid max-w-[1200px] scroll-mt-24 gap-16 px-5 py-20 md:px-8 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-24 lg:py-32 xl:px-0">
          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-col gap-6">
              <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,2.75rem)] font-medium leading-[1.1] tracking-[-1px]`}>Nuestros clientes</h2>
              <p className="text-base text-[#565B6E]">Contamos con clientes en los siguientes sectores:</p>
            </Reveal>
            <Stagger className="flex flex-col gap-2.5" gap={0.06}>
              {SECTORES.map((row) => (
                <StaggerItem key={row[0]} as="ul" className="flex flex-wrap gap-2.5 lg:flex-nowrap">
                  {row.map((s) => (
                    <li key={s} className="rounded-[6px] bg-[#F6F5F0] px-4 py-2.5 text-[15px]">
                      {s}
                    </li>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,2.75rem)] font-medium leading-[1.1] tracking-[-1px]`}>
              Asociados
            </Reveal>
            <Stagger as="dl" className="flex flex-col gap-[22px] pt-2" gap={0.06}>
              {ASOCIADOS.map(({ n, d }) => (
                <StaggerItem key={n} className="grid gap-1.5 sm:grid-cols-[230px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-base font-semibold">{n}</dt>
                  <dd className="text-[15px] leading-[23px] text-[#565B6E]">{d}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="scroll-mt-24 bg-[#F6F5F0]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-20 md:px-8 lg:py-32 xl:px-0">
            <Reveal as="h2" className={H2}>
              Agenda y eventos
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[600px_minmax(0,1fr)]">
              <article className="flex flex-col gap-5">
                <MediaReveal onView delay={0} className="img-zoom relative aspect-[600/390] w-full overflow-hidden rounded-[6px]">
                  <Image src={`${IMG}/image7.jpg`} alt="Nombramiento de la Barra Mexicana, Colegio de Abogados, A.C." fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                </MediaReveal>
                <Reveal className="flex flex-col gap-5">
                  <p className="text-sm font-medium text-[#6B6F22]">Mayo 2016</p>
                  <h3 className={`${DISPLAY} text-[clamp(1.625rem,2.2vw,1.875rem)] font-semibold leading-[1.2]`}>Nombramiento de Barra Mexicana, Colegio de Abogados, A.C.</h3>
                  <p className="text-base leading-[26px] text-[#565B6E]">Coordinador del Comité de Derecho Agrario, Rural y Urbanístico.</p>
                </Reveal>
              </article>
              <Stagger as="ul" className="flex flex-col gap-7" gap={0.07}>
                {AGENDA.map(({ img, f, t, d }) => (
                  <StaggerItem key={t} as="li" className="flex gap-4 sm:gap-6">
                    <div className="img-zoom relative h-[82px] w-[124px] shrink-0 overflow-hidden rounded-[6px] sm:h-[110px] sm:w-[168px]">
                      <Image src={`${IMG}/${img}`} alt="" fill sizes="168px" className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-col gap-1.5">
                      <p className="text-sm font-medium text-[#6B6F22]">{f}</p>
                      <h3 className={`${DISPLAY} text-[clamp(1.1875rem,1.6vw,1.3125rem)] font-semibold leading-[1.24]`}>{t}</h3>
                      <p className="text-[15px] leading-[23px] text-[#565B6E]">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#0B1438] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_540px] lg:gap-24 lg:pb-[136px] lg:pt-32 xl:px-0">
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.75rem,4.8vw,4rem)] font-medium leading-[1.05] tracking-[-2px]`}>
                Contacto
              </Reveal>
              <Stagger className="flex flex-col gap-[26px] pt-3" gap={0.06}>
                <ContactRow Icon={MapPin} label="Dirección">
                  <p>
                    Calle Río Po No. 3, Col. Cuauhtémoc
                    <br />
                    C.P. 06500, Ciudad de México
                  </p>
                </ContactRow>
                <ContactRow Icon={Phone} label="Teléfono">
                  <a href={PHONE.href} className="link-u">{PHONE.full}</a>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimple} label="Correo">
                  <a href={`mailto:${EMAIL}`} className="link-u break-all">{EMAIL}</a>
                </ContactRow>
                <ContactRow Icon={Clock} label="Horario de atención">
                  <p>
                    Lunes a viernes, 9:00 a 18:00 (excepto de 15:00 a 16:00)
                    <br />
                    Sábado y domingo: cerrado
                  </p>
                </ContactRow>
              </Stagger>
              <Reveal delay={0.1}>
                <ul className="flex gap-3 pt-2">
                  {SOCIAL.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a href={href} aria-label={label} className="press flex h-10 w-10 items-center justify-center rounded-[6px] border border-white/25 hover:border-white/60 hover:bg-white/[0.06]">
                        <Icon size={18} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[6px] bg-white p-6 text-[#0B1438] md:p-11" noteClassName="text-sm text-[#565B6E]">
                <h3 className={`${DISPLAY} text-[32px] font-semibold leading-tight`}>Escríbanos</h3>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Nombre" name="nombre" autoComplete="given-name" />
                  <Field label="Apellido" name="apellido" autoComplete="family-name" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Mensaje</span>
                  <textarea name="mensaje" className={`${FIELD} h-[150px] resize-y py-3`} />
                </label>
                <button type="submit" className="press h-[54px] w-full rounded-[6px] bg-[#8A8F2C] text-base font-medium text-[#0B1438] hover:bg-[#9DA235]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-11 px-5 pb-28 pt-16 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <a href="#top" aria-label="Sánchez Mejía Abogados Asociados S.C., inicio" className="flex w-fit flex-col items-center gap-3.5">
              <Image src={`${IMG}/wordmark.svg`} alt="" width={104} height={62} />
              <Image src={`${IMG}/emblema.svg`} alt="" width={60} height={60} />
            </a>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-[15px] sm:flex sm:flex-wrap sm:gap-x-20">
              <ul className="flex flex-col gap-3">
                {[{ label: "Inicio", href: "#top" }, { label: "Servicios", href: "#servicios" }, { label: "Agenda", href: "#agenda" }, { label: "Despacho", href: "#despacho" }, { label: "Historia", href: "#historia" }].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {[{ label: "Asociados", href: "#asociados" }, { label: "IUSTIME", href: "#asociados" }, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
              <ul className="col-span-2 flex flex-col gap-3 sm:col-span-1">
                <li>
                  <a href={PHONE.href} className="link-u">{PHONE.v}</a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="link-u break-all">{EMAIL}</a>
                </li>
                <li>Calle Río Po No. 3, Col. Cuauhtémoc</li>
                <li>C.P. 06500, Ciudad de México</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#0B14381F] pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#565B6E]">© Sánchez Mejía Abogados Asociados S.C.</p>
            <a href={AVISO} className="link-u w-fit">Aviso de privacidad y políticas de servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "rounded-[6px] border border-[#CFCFC6] bg-[#FAFAF7] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0B1438] focus:shadow-[0_0_0_3px_rgba(138,143,44,0.3)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${FIELD} h-12 w-full`} />
    </label>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-5">
      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] bg-[#8A8F2C] text-[#0B1438]">
        <Icon size={20} />
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm text-white/70">{label}</p>
        <div className="text-[17px] leading-[26px]">{children}</div>
      </div>
    </StaggerItem>
  );
}
