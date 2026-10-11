import type { Metadata } from "next";
import Image from "next/image";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import { ArrowRight, ArrowUpRight, CaretDown, Check, DownloadSimple, EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, Phone, YoutubeLogo } from "@phosphor-icons/react/ssr";
import { Accordion, CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Red_Hat_Display({ subsets: ["latin"], variable: "--s09-display" });
const body = Red_Hat_Text({ subsets: ["latin"], variable: "--s09-body" });

export const metadata: Metadata = {
  title: "BDO México",
  description: "BDO México: 82 años de experiencia, brindando soluciones innovadoras y personalizadas para tu empresa.",
};

const IMG = "/sitios/bdomexico";
const SITE = "https://www.bdomexico.com/es-mx";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Conózcanos", href: "#conozcanos" },
  { label: "Ubicaciones", href: "#ubicaciones" },
  { label: "Eventos", href: "#eventos" },
];

const STATS = [
  ["82", "años de experiencia en México"],
  ["8", "ubicaciones en México"],
  ["1,800", "oficinas de BDO International en 166 países"],
  ["14", "años consecutivos como Súper Empresa Expansión"],
];

const SERVICES = [
  {
    t: "Auditoría y Aseguramiento",
    d: "Trabajamos de manera cercana con cada cliente para analizar su información financiera, identificar áreas de riesgo y evaluar procesos clave dentro de la organización. Apoyamos a organizaciones del sector privado, instituciones financieras, entidades gubernamentales y organizaciones sin fines de lucro.",
    sub: ["Auditoría de estados financieros", "Auditoría del sector gubernamental", "Examen y revisiones para fines especiales", "Examen del cumplimiento de obligaciones fiscales"],
  },
  { t: "Consultoría Fiscal", d: "Planeación y estrategia fiscal empresarial: precios de transferencia, comercio exterior y aduanas, seguridad social, contribuciones locales e impuestos de expatriados." },
  { t: "Consultoría Legal, Litigio y Solución de Controversias", d: "Asesoría fiscal, laboral, corporativa y administrativa para cumplimiento normativo y prevención de riesgos." },
  { t: "Consultoría", d: "Apoyamos la toma de decisiones estratégicas y la gestión de riesgos para impulsar el crecimiento." },
  { t: "Control Financiero", d: "Contabilidad, nómina, tesorería y cumplimiento fiscal para empresas en México." },
  { t: "Tecnología", d: "Desde la implementación de sistemas empresariales (ERP) hasta ciberseguridad, automatización de procesos y tecnologías emergentes." },
];

const INDUSTRIES = [
  ["Agroalimentos", "Instituciones Financieras & Finanzas Especializadas", "Servicios Financieros", "Fabricación de Productos Químicos y Farmacéuticos", "Hotelería y Turismo"],
  ["Manufactura", "Recursos Naturales", "Entidades no Lucrativas y Educación", "Sector Público"],
  ["Bienes Raíces y Construcción", "Tecnología, Medios y Telecomunicaciones", "Transporte y Logística", "Comercialización"],
];

const RECENT = [
  { f: "9 de octubre de 2026", t: "Novedades del Programa IMMEX 4.0", d: "La Secretaría de Economía ha presentado la nueva estrategia IMMEX 4.0 para modernizar la operación del programa y fortalecer la competitividad de la industria." },
  { f: "7 de octubre de 2026", t: "La IA ya está tomando decisiones. ¿Su consejo de administración está preparado para asumir la responsabilidad de los resultados?" },
  { t: "Manifestación de Valor: nueva prórroga de su entrada en vigor", d: "El SAT otorgó un periodo de transición y fechas obligatorias escalonadas para la transmisión electrónica de la Manifestación de Valor." },
  { t: "Boletín Tributario Agosto 2026", d: "Tesis del Segundo Tribunal Colegiado en Materia Administrativa del Décimo Sexto Circuito sobre las facultades de los visitadores." },
];

const EVENTS = [
  ["29", "Oct 2026", "Del crecimiento a la escala: transforma tu operación con Oracle NetSuite", "Cómo una solución como Oracle NetSuite puede ayudar a integrar la operación y acompañar el crecimiento de una empresa de una manera más ordenada."],
  ["10", "Nov 2026", "Perspectiva y la realidad fiscal para 2027", "Webinar. Los principales cambios e impactos del entorno fiscal para 2027 y la reforma a la Ley Aduanera, con nuestros especialistas fiscales y de comercio exterior."],
  ["18", "Nov 2026", "Temas relevantes en materia legal, seguridad social y PLD para 2027", "Webinar. Principales cambios y tendencias que deberán considerar las empresas para 2027, sus posibles impactos y medidas para anticipar riesgos."],
];

const OFFICES = [
  { n: ["BDO Ciudad de México", "Lago Alberto 442"], a: ["Lago Alberto 442 - Piso 4", "Colonia Anáhuac", "Ciudad de México, 11320"] },
  { n: ["BDO Ciudad de México", "Torre Mayor"], a: ["Paseo de la Reforma 505 - 31", "Colonia Cuauhtémoc", "Ciudad de México, 06500"] },
];

const SOCIAL = [
  { Icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/bdomexicocareers?mibextid=ZbWKwL" },
  { Icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/bdo_en_mexico?igsh=NmpmNjRnZ3dqaHk2" },
  { Icon: LinkedinLogo, label: "LinkedIn", href: "https://mx.linkedin.com/company/bdo-castillo-miranda" },
  { Icon: YoutubeLogo, label: "YouTube", href: "http://www.youtube.com/@bdomexico635" },
];

const H2 = "font-[family-name:var(--s09-display)] text-[clamp(2.25rem,3.4vw,3rem)] font-extrabold leading-[1.08] tracking-[-1px]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const ULINK = "nudge inline-flex w-fit items-center gap-2.5 border-b-2 border-current py-1 text-base font-bold transition-[color] duration-200 hover:text-[#E81A3B]";
const RED_BTN = "press bg-[#E81A3B] font-bold text-white hover:bg-[#C8102E]";

function Logo() {
  return (
    <a href="#top" aria-label="BDO México, inicio" className="flex items-center gap-3.5">
      <Image src={`${IMG}/logo.svg`} alt="BDO" width={104} height={40} preload className="h-8 w-auto md:h-10" />
      <span className="font-[family-name:var(--s09-display)] text-[15px] font-bold text-[#E81A3B]">México</span>
    </a>
  );
}

export default function BdoMexicoPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s09-body)] text-[#333333] selection:bg-[#E81A3B] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-black/10 bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(0,0,0,0.3)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-24`}
        linkClassName="text-[15px] font-medium text-[#333333]"
        panelClassName="bg-white text-[#333333] font-[family-name:var(--s09-body)]"
        panelLinkClassName="font-[family-name:var(--s09-display)] text-3xl font-extrabold"
        burgerClassName="bg-[#333333]"
        actions={
          <>
            <p className="text-sm font-medium text-[#5B6E7F]">
              <a href="https://www.bdomexico.com/en-gb/home" lang="en" className="link-u">EN</a>
              <span aria-hidden="true"> | </span>
              <span aria-current="page">ES</span>
            </p>
            <a href="#contacto" className={`${RED_BTN} px-6 py-3.5 text-[15px]`}>
              Contáctenos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden lg:h-[740px]">
          <div className={`${WRAP} relative z-10 flex flex-col gap-[30px] pb-14 pt-16 md:pt-24 lg:pb-0 lg:pt-[170px]`}>
            <HeroIntro className="flex max-w-[600px] flex-col gap-7">
              <HeroItem as="h1" blur className="font-[family-name:var(--s09-display)] text-[clamp(3.25rem,6.4vw,5.75rem)] font-extrabold leading-none tracking-[-2.5px]">
                Juntos, <br />prosperamos.
              </HeroItem>
              <HeroItem as="p" className="max-w-[480px] text-lg leading-[1.52] text-[#404040] md:text-[21px]">
                BDO México: 82 años de experiencia, brindando soluciones innovadoras y personalizadas para tu empresa.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-7 pt-3">
                <a href="#contacto" className={`${RED_BTN} px-[30px] py-[18px] text-base`}>
                  Contáctenos
                </a>
                <a href="#servicios" className={ULINK}>
                  Nuestros servicios
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </HeroItem>
            </HeroIntro>
            <HeroIntro delay={0.5} className="max-w-[440px]">
              <HeroItem y={12} className="flex flex-col gap-1.5 border-t border-[#333333]/20 pt-5">
                <p className="font-[family-name:var(--s09-display)] text-[17px] font-extrabold">Panorama Global de Riesgos 2026</p>
                <p className="text-[15px] leading-[1.53] text-[#555555]">Riesgo en todas partes: extendiendo la responsabilidad más allá de la función de riesgo.</p>
                <a
                  href={`${SITE}/publicaciones/publicaciones-internacionales/2026/panorama-global-de-riesgos-2026`}
                  className="nudge mt-1.5 inline-flex w-fit items-center gap-2 text-[15px] font-bold text-[#E81A3B] transition-[color] duration-200 hover:text-[#C8102E]"
                >
                  Descargar el informe
                  <DownloadSimple className="h-4 w-4" />
                </a>
              </HeroItem>
            </HeroIntro>
          </div>

          <div className="relative h-[340px] w-full [clip-path:polygon(0_0,100%_0,100%_100%,38.46%_100%)] md:h-[460px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[54.17%]">
            <MediaReveal className="absolute inset-0 overflow-hidden" delay={0.2}>
              <Image src={`${IMG}/hero-banner.jpg`} alt="Personas caminando, desenfocadas por el movimiento" fill preload sizes="(min-width: 1024px) 780px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
          <Reveal delay={0.9} y={0} duration={0.5} className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[180px] w-[44%] bg-[#E81A3B] [clip-path:polygon(100%_0,100%_100%,0_100%)] md:h-[260px] lg:h-[59.46%] lg:w-[21.53%]">
            {null}
          </Reveal>
        </section>

        {/* Cifras */}
        <section aria-label="BDO México en cifras" className="bg-[#204399] text-white">
          <Stagger as="dl" gap={0.07} className={`${WRAP} grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:gap-0`}>
            {STATS.map(([n, l], i) => (
              <StaggerItem key={l} className={`flex flex-col-reverse justify-end gap-2 py-1 lg:px-8 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/20"}`}>
                <dt className="text-base leading-[1.45] text-white/90">{l}</dt>
                <dd className="font-[family-name:var(--s09-display)] text-[clamp(2.75rem,4vw,3.5rem)] font-extrabold leading-none tracking-[-1px]">
                  <CountUp value={n} />
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Servicios */}
        <section id="servicios" className={`${WRAP} grid scroll-mt-24 gap-12 py-24 lg:grid-cols-[400px_1fr] lg:gap-20 lg:py-32`}>
          <Reveal className="flex flex-col gap-6">
            <h2 className={H2}>Cómo te puede ayudar BDO México</h2>
            <p className="text-lg leading-[1.6] text-[#404040]">
              En BDO México, el servicio al cliente es primordial y es clave para nuestro éxito en la construcción de relaciones sólidas y duraderas.
            </p>
            <a href={`${SITE}/servicios`} className={ULINK}>
              Ver todos los servicios
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion
              defaultOpen={0}
              className="flex flex-col gap-2"
              itemClassName="border-l-4 border-transparent bg-[#F7F7F7] transition-[background-color,border-color] duration-200 has-[[aria-expanded=true]]:border-[#E81A3B] has-[[aria-expanded=true]]:bg-[#F2F2F2]"
              buttonClassName="group flex w-full items-center justify-between gap-6 px-5 py-6 text-left md:px-8"
              iconClassName="text-[#333333] group-aria-expanded:text-[#E81A3B]"
              panelClassName="px-5 pb-9 md:px-8"
              items={SERVICES.map((s) => ({
                title: (
                  <span className="flex flex-col gap-1.5">
                    <span className="font-[family-name:var(--s09-display)] text-[21px] font-extrabold leading-tight group-aria-expanded:text-[clamp(1.375rem,2vw,1.625rem)]">{s.t}</span>
                    <span className="text-[15px] leading-[1.53] text-[#555555] group-aria-expanded:hidden">{s.d}</span>
                  </span>
                ),
                content: (
                  <div className="flex flex-col gap-[18px]">
                    <p className="text-[17px] leading-[1.6] text-[#404040]">{s.d}</p>
                    {s.sub && (
                      <ul className="grid gap-x-6 gap-y-3 pt-1.5 sm:grid-cols-2">
                        {s.sub.map((x) => (
                          <li key={x} className="flex items-start gap-2.5 text-base font-medium leading-[1.375]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E81A3B]" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ),
              }))}
            />
          </Reveal>
        </section>

        {/* Industrias */}
        <section id="industrias" className="scroll-mt-24 bg-[#333333] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-32 lg:pt-[120px]`}>
            <Reveal as="h2" className={H2}>Nuestras industrias</Reveal>
            <div className="grid gap-x-10 lg:grid-cols-3">
              {INDUSTRIES.map((col, ci) => (
                <Stagger key={ci} as="ul" gap={0.05} delay={ci * 0.08} className={`flex flex-col gap-[22px] border-white/20 lg:border-t lg:pt-7 ${ci === 0 ? "border-t pt-7" : "pt-[22px]"}`}>
                  {col.map((n) => (
                    <StaggerItem key={n} as="li" className="flex items-start justify-between gap-3.5">
                      <span className="font-[family-name:var(--s09-display)] text-[clamp(1.25rem,1.6vw,1.375rem)] font-bold leading-[1.32]">{n}</span>
                      <ArrowUpRight aria-hidden="true" className="mt-1 h-[18px] w-[18px] shrink-0 text-white/60" />
                    </StaggerItem>
                  ))}
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        {/* Conózcanos */}
        <section id="conozcanos" className={`${WRAP} grid scroll-mt-24 items-center gap-14 py-24 lg:grid-cols-[480px_1fr] lg:gap-24 lg:py-[136px]`}>
          <Reveal className="flex flex-col gap-6">
            <h2 className={H2}>Conózcanos</h2>
            <p className="text-lg leading-[1.67] text-[#404040]">
              Todo lo que hacemos tiene sus raíces en nuestro propósito principal de ayudar a las personas a prosperar todos los días. Esto comienza poniendo a nuestra gente en el centro de nuestro trabajo y se extiende a cómo tratamos y valoramos a nuestros clientes y a nuestras comunidades.
            </p>
            <p className="text-base leading-[1.625] text-[#5B6E7F]">
              BDO Castillo Miranda es miembro de BDO International, una red de contadores públicos y consultores de negocios a nivel mundial, con 1,800 oficinas en 166 países.
            </p>
          </Reveal>
          <Reveal delay={0.1} as="figure" className="flex flex-col gap-8 border-b-8 border-l-8 border-[#E81A3B] pb-11 pl-7 pt-2 md:pl-[52px]">
            <blockquote className="font-[family-name:var(--s09-display)] text-[clamp(1.375rem,2.2vw,1.75rem)] font-medium leading-[1.39] tracking-[-0.3px]">
              “Es un honor encabezar la dirección de BDO. Mi experiencia, conocimiento y entusiasmo sumado a la de todos los colaboradores de la firma, nos llevarán a un escenario de éxitos continuos refrendando nuestro compromiso con el cliente.”
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <span className="font-[family-name:var(--s09-display)] text-lg font-extrabold">C.P.C. Jaime Zaga Hadid</span>
              <span className="text-base text-[#5B6E7F]">Socio Director de BDO México (Castillo Miranda y Compañía, S.C.)</span>
            </figcaption>
          </Reveal>
        </section>

        {/* Publicaciones */}
        <section id="publicaciones" className="scroll-mt-24 bg-[#F2F2F2]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:pb-32 lg:pt-[120px]`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Publicaciones</h2>
              <p className="max-w-[640px] text-lg leading-[1.6] text-[#404040]">
                Consulta aquí nuestros comunicados más recientes, como video webinars, boletines, flash informativos y más.
              </p>
            </Reveal>
            <div className="grid items-start gap-14 lg:grid-cols-[620px_1fr]">
              <Reveal>
                <a href={`${SITE}/publicaciones/publicaciones-internacionales/enfocados-en-la-sostenibilidad`} className="group block bg-white">
                  <div className="img-zoom relative h-[220px] md:h-[330px]">
                    <Image src={`${IMG}/sostenibilidad.jpg`} alt="Multitud cruzando una calle de la ciudad" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-3.5 px-6 pb-9 pt-8 md:px-9">
                    <p className="text-sm font-medium text-[#5B6E7F]">13 de octubre de 2025</p>
                    <h3 className="font-[family-name:var(--s09-display)] text-[clamp(1.5rem,2.2vw,1.75rem)] font-extrabold leading-[1.21] tracking-[-0.4px] transition-[color] duration-200 group-hover:text-[#E81A3B]">
                      Encuesta global sobre servicios de sostenibilidad 2025
                    </h3>
                    <p className="text-base leading-[1.625] text-[#404040]">
                      En un año marcado por retrocesos normativos y presiones políticas, las empresas se enfrentan a un panorama de sostenibilidad cada vez más incierto.
                    </p>
                  </div>
                </a>
              </Reveal>
              <Stagger gap={0.07} className="flex flex-col gap-9 pt-1">
                {RECENT.map((p) => (
                  <StaggerItem key={p.t} as="article" className="flex flex-col gap-2">
                    {p.f && <p className="text-sm font-medium text-[#5B6E7F]">{p.f}</p>}
                    <h3 className="font-[family-name:var(--s09-display)] text-xl font-extrabold leading-[1.3]">{p.t}</h3>
                    {p.d && <p className="text-[15px] leading-[1.53] text-[#4A4A4A]">{p.d}</p>}
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <a href={`${SITE}/publicaciones`} className={ULINK}>
                    Ver todas las publicaciones
                    <ArrowRight className="h-[18px] w-[18px]" />
                  </a>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </section>

        {/* Eventos */}
        <section id="eventos" className={`${WRAP} flex scroll-mt-24 flex-col gap-12 py-24 lg:pb-32 lg:pt-[120px]`}>
          <Reveal className="flex flex-col gap-4">
            <h2 className={H2}>Eventos</h2>
            <p className="text-lg text-[#404040]">Explore nuestros próximos eventos online.</p>
          </Reveal>
          <Stagger gap={0.08} as="ul">
            {EVENTS.map(([day, month, t, d]) => (
              <StaggerItem key={t} as="li" className="grid gap-5 border-t border-[#333333]/[0.12] py-9 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-12">
                <p className="flex items-baseline gap-3 md:flex-col md:gap-0.5">
                  <span className="font-[family-name:var(--s09-display)] text-[clamp(3rem,4.4vw,4rem)] font-extrabold leading-none tracking-[-2px] text-[#E81A3B]">{day}</span>
                  <span className="text-[15px] font-semibold">{month}</span>
                </p>
                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--s09-display)] text-[clamp(1.25rem,1.7vw,1.5rem)] font-extrabold leading-[1.25]">{t}</h3>
                  <p className="text-base leading-[1.56] text-[#4A4A4A]">{d}</p>
                </div>
                <a href={`${SITE}/eventos`} className="press w-fit border border-[#333333] px-[22px] py-3.5 text-[15px] font-bold hover:bg-[#333333] hover:text-white">
                  Regístrese
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Contacto / Ubicaciones */}
        <section id="ubicaciones" className="relative isolate scroll-mt-24 overflow-hidden bg-[#F7F7F7]">
          <Image src={`${IMG}/map.jpg`} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-[0.28]" />
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_520px] lg:gap-[72px] lg:pb-32 lg:pt-[120px]`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className="font-[family-name:var(--s09-display)] text-[clamp(2.25rem,3.2vw,2.75rem)] font-extrabold leading-[1.09] tracking-[-1px]">
                Encuentre una oficina cerca de usted
              </Reveal>
              <Stagger gap={0.08} className="grid gap-6 pt-2 sm:grid-cols-2">
                {OFFICES.map((o) => (
                  <StaggerItem key={o.n[1]} as="address" className="flex flex-col gap-2 border border-[#333333]/10 bg-white px-6 py-[22px] not-italic">
                    <p className="font-[family-name:var(--s09-display)] text-[17px] font-extrabold leading-[1.3]">
                      {o.n[0]}
                      <br />
                      {o.n[1]}
                    </p>
                    <p className="text-[15px] leading-[1.53] text-[#404040]">
                      {o.a.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal className="flex flex-col gap-3">
                <a href="tel:+525585034200" className="flex w-fit items-center gap-3 text-[17px] font-medium">
                  <Phone className="h-5 w-5 text-[#E81A3B]" />
                  <span className="link-u">+52 (55) 8503-4200</span>
                </a>
                <a href="mailto:mexico@bdomexico.com" className="flex w-fit items-center gap-3 text-[17px] font-medium">
                  <EnvelopeSimple className="h-5 w-5 text-[#E81A3B]" />
                  <span className="link-u">mexico@bdomexico.com</span>
                </a>
              </Reveal>
              <Reveal className="flex flex-col gap-2.5 pt-2">
                <p className="text-[15px] font-semibold text-[#5B6E7F]">También en</p>
                <p className="max-w-[500px] font-[family-name:var(--s09-display)] text-[19px] font-bold leading-[1.47]">
                  Tijuana, Ciudad Juárez, Guadalajara, San Pedro Garza García, Querétaro, Mazatlán y Sonora.
                </p>
              </Reveal>
              <Reveal>
                <a href={`${SITE}/ubicaciones`} className={ULINK}>
                  Ver todas las ubicaciones
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.1} id="contacto" className="scroll-mt-28">
              <DemoForm className="flex flex-col gap-[18px] bg-white px-6 pb-9 pt-10 shadow-[0_12px_40px_rgba(0,0,0,0.1)] md:px-10" noteClassName="text-sm text-[#4A4A4A]">
                <div className="flex flex-col gap-3">
                  <h3 className="font-[family-name:var(--s09-display)] text-[30px] font-extrabold">Contáctenos</h3>
                  <p className="text-[15px] text-[#4A4A4A]">Complete el formulario a continuación:</p>
                </div>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Correo corporativo" name="correo" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Ciudad/Estado" name="ciudad" autoComplete="address-level2" />
                  <Field label="Empresa" name="empresa" autoComplete="organization" />
                </div>
                <label className="flex flex-col gap-[7px]">
                  <span className="text-sm font-semibold">Área de servicio por la cual nos contacta</span>
                  <span className="relative">
                    <select name="area" defaultValue="" className={`${INPUT} w-full appearance-none bg-white pr-10`}>
                      <option value="" disabled hidden />
                      {SERVICES.map((s) => (
                        <option key={s.t}>{s.t}</option>
                      ))}
                    </select>
                    <CaretDown aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
                  </span>
                </label>
                <label className="flex flex-col gap-[7px]">
                  <span className="text-sm font-semibold">Comentarios adicionales</span>
                  <textarea name="comentarios" rows={4} className={`${INPUT} h-[104px] resize-y py-3`} />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1.5">
                  <a href={`${SITE}/aviso-de-privacidad`} className="link-u text-sm text-[#4A4A4A]">Aviso de Privacidad</a>
                  <button type="submit" className={`${RED_BTN} px-9 py-4 text-base`}>
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#333333] text-white">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-[72px] lg:pb-10`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-7">
              <a href="#top" aria-label="BDO México, inicio" className="w-fit bg-white px-[18px] py-3.5">
                <Image src={`${IMG}/logo.svg`} alt="BDO" width={104} height={40} />
              </a>
              <nav aria-label="Pie de página">
                <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-white/85">
                  <li><a href="#contacto" className="link-u">Contacto</a></li>
                  <li><a href={`${SITE}/ubicaciones`} className="link-u">Ubicaciones</a></li>
                  <li><a href={`${SITE}/aviso-de-privacidad`} className="link-u">Aviso de Privacidad</a></li>
                  <li><a href={`${SITE}/terminos-y-condiciones`} className="link-u">Términos y Condiciones</a></li>
                </ul>
              </nav>
              <ul className="flex gap-3">
                {SOCIAL.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a href={href} aria-label={`${label} de BDO México`} className="press flex h-10 w-10 items-center justify-center border border-white/30 hover:border-white hover:bg-white/10">
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex max-w-[460px] flex-col items-start gap-4">
              <h2 className="font-[family-name:var(--s09-display)] text-[22px] font-extrabold">Regístrate por correo electrónico</h2>
              <p className="text-[15px] leading-[1.6] text-white/80">
                En BDO, creemos que un servicio excepcional al cliente comienza con la construcción de relaciones excepcionales. Regístrate para recibir nuestras últimas actualizaciones.
              </p>
              <a href={`${SITE}/subscribe-page`} className={`${RED_BTN} px-6 py-3.5 text-[15px]`}>
                Suscríbase ahora
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-[13px] text-white/65 md:flex-row md:justify-between">
            <p>BDO Copyright © 2026. Consulte Términos y condiciones para obtener más información.</p>
            <p>BDO Castillo Miranda es miembro de BDO International</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT = "h-12 border border-[#333333]/25 px-3.5 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#E81A3B] focus:shadow-[0_0_0_3px_rgba(232,26,59,0.12)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={INPUT} />
    </label>
  );
}
