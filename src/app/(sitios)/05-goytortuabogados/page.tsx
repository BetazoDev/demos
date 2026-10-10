import type { Metadata } from "next";
import Image from "next/image";
import { Brygada_1918, Urbanist } from "next/font/google";
import type { Icon as PhIcon } from "@phosphor-icons/react";
import {
  ArrowRightIcon,
  CheckIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  LinkedinLogoIcon,
  QuotesIcon,
  TwitterLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Brygada_1918({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s05-display" });
const body = Urbanist({ subsets: ["latin"], variable: "--s05-body" });

export const metadata: Metadata = {
  title: "Goytortúa & Asociados",
  description: "Excelencia jurídica y visión global. Despacho especializado en la protección de intereses corporativos y patrimoniales.",
};

const IMG = "/sitios/05-goytortuabogados";
const SITE = "https://goytortuabogados.com";
const BLOG = `${SITE}/blog`;
const WA = "https://wa.me/5215554534229";
const CONTAINER = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s05-display)]";
const H2 = `${SERIF} text-[clamp(2.25rem,3.35vw,3rem)] font-medium leading-[1.1] tracking-[-0.017em]`;

const NAV = [
  { label: "Servicios a Empresas", href: "#empresas" },
  { label: "Servicios a Particulares", href: "#particulares" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: "#articulos" },
  { label: "Contacto", href: "#contacto" },
];

const RECONOCIMIENTOS = [
  ["Top Abogados 2022, 2024 y 2025", "Derecho corporativo, mercantil, internacional y arbitraje"],
  ["Pro bono, Estados Unidos", "Asistencia legal en restitución internacional de menores"],
  ["Países Bajos, Holanda", "Reconocimiento internacional por restitución de menores"],
  ["Business International Network", "Profesionalismo y asistencia legal, 2022 y 2024"],
];

const PUERTAS = [
  {
    id: "empresas",
    img: "fondo-compliance.webp",
    alt: "Columna con la palabra compliance frente a edificios corporativos",
    t: "Soluciones legales para empresas",
    d: "Asesoría estratégica para que las organizaciones se enfoquen en su crecimiento mientras garantizamos la seguridad jurídica de sus operaciones.",
    items: [
      ["Compliance y gestión de riesgos corporativos", "Políticas de cumplimiento preventivo adaptadas a las normativas vigentes, mitigando riesgos penales y administrativos."],
      ["Derecho societario y mercantil", "Constitución de sociedades, gestión de asambleas y gobierno corporativo, para empresas de diversos sectores y personas físicas con actividad empresarial."],
      ["Arbitraje comercial y elaboración de contratos", "Resolución de disputas nacionales e internacionales y contratos redactados con precisión técnica y visión de negocio."],
    ],
  },
  {
    id: "particulares",
    img: "sucesion-testamentaria.webp",
    alt: "Manos entregando un cofre de madera de una generación a otra",
    t: "Protección patrimonial para particulares",
    d: "Entendemos el esfuerzo detrás de cada patrimonio familiar y personal: soluciones que brindan orden, seguridad y tranquilidad a largo plazo.",
    items: [
      ["Sucesión testamentaria nacional e internacional", "Procesos sucesorios complejos, incluso con patrimonios en diversas jurisdicciones, asegurando la voluntad del finado."],
      ["Restitución internacional de menores", "Controversias transfronterizas de sustracción ilegal de menores, aplicando la ley y los tratados internacionales."],
      ["Regularización de inmuebles", "Procesos de regularización que transforman la tenencia de su propiedad en certeza patrimonial."],
    ],
  },
];

/* Column order (left column first) so the list reads naturally when stacked on mobile. */
const AREAS = [
  "Área corporativa y derecho societario",
  "Asistencia en derecho internacional",
  "Comercio internacional e inversión extranjera",
  "Elaboración contractual",
  "Representación en materia civil",
  "Representación en materia mercantil",
  "Litigio constitucional y administrativo",
];

const VALORES = [
  ["Empatía", "Entender y ponernos en la situación del otro y actuar en consecuencia."],
  ["Profesionalismo", "Nos conducimos con absoluta seriedad en nuestro trabajo."],
  ["Compromiso", "Con los intereses de los demás y con el trabajo que realizamos."],
  ["Honestidad", "Absoluta transparencia con el cliente, hablando y actuando con la verdad."],
];

const ARTICULOS = [
  {
    date: "2026-10-05",
    d: "5 de octubre de 2026",
    t: "Cómo ejecutar un laudo arbitral extranjero en México",
    x: "Requisitos y límites para solicitar en México el reconocimiento y la ejecución de un laudo arbitral dictado en otro país, conforme al Código de Comercio.",
    href: BLOG,
  },
  {
    date: "2026-10-01",
    d: "1 de octubre de 2026",
    t: "Cláusula penal en contratos: cómo pactarla y qué límites revisar",
    x: "Qué es una cláusula penal, cuándo puede exigirse, cómo opera frente al cumplimiento del contrato y cuáles son sus límites bajo el Código Civil Federal.",
    href: BLOG,
  },
  {
    date: "2026-10-01",
    d: "1 de octubre de 2026",
    t: "Asamblea ordinaria anual: guía práctica para sociedades anónimas en México",
    x: "Checklist para preparar la asamblea ordinaria anual de una sociedad anónima: informes, convocatoria, quórum, acta y seguimiento.",
    href: `${SITE}/asamblea-ordinaria-anual-sociedades-anonimas-mexico/`,
  },
];

const SOCIAL: { label: string; href: string; Icon: PhIcon }[] = [
  { label: "Facebook", href: "https://www.facebook.com/GOYTORTUA.ABOGADOS", Icon: FacebookLogoIcon },
  { label: "X", href: "https://twitter.com/fgoytortua", Icon: TwitterLogoIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/goytortua-y-asociados-s-c/", Icon: LinkedinLogoIcon },
];

function Logo({ reverse = false }: { reverse?: boolean }) {
  return (
    <a href="#top" className="block" aria-label="Goytortúa & Asociados, inicio">
      <Image
        src={`${IMG}/${reverse ? "logo-reverso" : "logo"}.svg`}
        alt="Goytortúa & Asociados Abogados"
        width={67}
        height={72}
        preload={!reverse}
        className="h-[60px] w-auto lg:h-[72px]"
      />
    </a>
  );
}

export default function GoytortuaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s05-body)] font-medium text-[#001E30] selection:bg-[#FFBA60] selection:text-[#001E30]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#001E30]/8 bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(0,30,48,0.45)]"
        innerClassName={`${CONTAINER} flex h-[88px] items-center justify-between gap-10 lg:h-[103px] [&>nav]:ml-auto`}
        linkClassName="text-base font-semibold text-[#001E30]"
        panelClassName="bg-white text-[#001E30] font-[family-name:var(--s05-body)]"
        panelLinkClassName={`${SERIF} text-3xl font-medium`}
        burgerClassName="bg-[#001E30]"
        actions={
          <a href="#contacto" className="press bg-[#FFBA60] px-6 py-3.5 text-base font-bold text-[#001E30] hover:bg-[#FFC77D]">
            Agenda tu cita
          </a>
        }
      />

      <main>
        {/* Hero */}
        <HeroIntro as="section" className="grid bg-[#001E30] text-white lg:min-h-[720px] lg:grid-cols-[54.86%_minmax(0,1fr)]">
          <div className="flex flex-col justify-center gap-8 px-5 py-20 md:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-16">
            <HeroItem as="h1" blur className={`${SERIF} text-[clamp(2.75rem,4.45vw,4rem)] font-medium leading-[1.05] tracking-[-0.023em]`}>
              Excelencia jurídica y visión global
            </HeroItem>
            <HeroItem as="p" className="max-w-[500px] text-lg leading-[1.55] text-[#C7CAC1] md:text-xl">
              Liderazgo y autoridad jurídica en México. Despacho especializado en la protección de intereses corporativos y patrimoniales.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2">
              <a href="#contacto" className="press bg-[#FFBA60] px-[30px] py-[18px] text-[17px] font-bold text-[#001E30] hover:bg-[#FFC77D]">
                Agenda tu cita
              </a>
              <a href="#areas" className="nudge flex items-center gap-2.5 text-[17px] font-semibold">
                Ver áreas de práctica
                <ArrowRightIcon size={18} className="text-[#FFBA60]" aria-hidden="true" />
              </a>
            </HeroItem>
          </div>
          <div className="relative h-[440px] sm:h-[520px] lg:h-auto">
            <MediaReveal className="absolute inset-0 overflow-hidden" delay={0.25}>
              <Image
                src={`${IMG}/francisco-goytortua.webp`}
                alt="Lic. Francisco J. Goytortúa Chambon en una conferencia"
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[60%_center] lg:origin-right lg:scale-[1.2] lg:object-right"
              />
            </MediaReveal>
            <HeroItem className="absolute bottom-8 left-0 flex flex-col gap-1 bg-[#001E30] px-6 py-[18px] lg:bottom-12">
              <p className={`${SERIF} text-[19px] font-medium`}>Lic. Francisco J. Goytortúa Chambon</p>
              <p className="text-sm font-semibold text-[#FFBA60]">Socio Director y Presidente</p>
            </HeroItem>
          </div>
        </HeroIntro>

        {/* Reconocimientos */}
        <section aria-label="Reconocimientos" className="border-b border-[#001E30]/8">
          <Stagger className={`${CONTAINER} grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12`} gap={0.07}>
            {RECONOCIMIENTOS.map(([t, d]) => (
              <StaggerItem key={t} className="flex flex-col gap-2">
                <h2 className={`${SERIF} text-xl font-semibold leading-[1.25]`}>{t}</h2>
                <p className="text-[15px] leading-[23px] text-[#4B5560]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Trayectoria */}
        <section id="nosotros" className="scroll-mt-24 bg-[#EDEBE8]">
          <div className={`${CONTAINER} grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] lg:gap-16 lg:py-32 xl:gap-[88px]`}>
            <MediaReveal onView className="relative aspect-[540/620] w-full overflow-hidden" delay={0}>
              <Image src={`${IMG}/el-despacho.webp`} alt="Auditorio con el gafete del Lic. Francisco Goytortúa Chambon en la mesa" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={H2}>
                Liderazgo, autoridad y trayectoria
              </Reveal>
              <Reveal delay={0.06} className="flex flex-col gap-6">
                <p className="text-lg leading-[1.63] md:text-[19px]">
                  En Goytortúa &amp; Asociados nuestra práctica converge con la excelencia académica, la experiencia en litigio y la prevención de controversias. Combinamos la agilidad de una firma boutique con la profundidad intelectual de la academia de élite.
                </p>
                <p className="text-base leading-[1.65] text-[#3A4652] md:text-[17px]">
                  El despacho es dirigido por el Lic. Francisco J. Goytortúa Chambon, autor del libro &quot;Derecho Internacional Público: Casos Prácticos&quot;, abogado postulante, académico y consultor técnico en la celebración de tratados internacionales.
                </p>
              </Reveal>
              <div className="flex flex-col gap-4 border-t border-[#001E30]/15 pt-7">
                <p className="text-[15px] font-bold leading-[25px]">Afiliaciones</p>
                <Stagger as="ul" className="flex flex-wrap items-center gap-4" gap={0.07}>
                  {[
                    { f: "incam.png", a: "Ilustre y Nacional Colegio de Abogados de México", w: "w-[200px] sm:w-[240px]" },
                    { f: "amedip.png", a: "AMEDIP", w: "w-[72px]" },
                    { f: "bni.png", a: "BNI", w: "w-[104px]" },
                  ].map((l) => (
                    <StaggerItem key={l.f} as="li" className="flex h-24 items-center bg-white px-[18px] py-3.5">
                      <span className={`relative block h-[68px] ${l.w}`}>
                        <Image src={`${IMG}/${l.f}`} alt={l.a} fill sizes="240px" className="object-contain" />
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className={`${CONTAINER} flex flex-col gap-16 py-20 lg:gap-[72px] lg:pb-[120px] lg:pt-32`}>
          <div className="grid gap-16 md:grid-cols-2 md:gap-12">
            {PUERTAS.map((p, i) => (
              <article key={p.id} id={p.id} className="flex scroll-mt-28 flex-col">
                <MediaReveal onView className="img-zoom relative h-[240px] overflow-hidden sm:h-[280px]" delay={i * 0.1}>
                  <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(min-width: 768px) 576px, 100vw" className="object-cover" />
                </MediaReveal>
                <div className="flex flex-col gap-5 pt-9">
                  <Reveal as="h2" className={`${SERIF} max-w-[440px] text-[clamp(1.875rem,2.4vw,2.125rem)] font-medium leading-[1.09] tracking-[-0.024em]`}>
                    {p.t}
                  </Reveal>
                  <Reveal as="p" delay={0.05} className="text-base leading-[1.65] text-[#3A4652] md:text-[17px]">
                    {p.d}
                  </Reveal>
                  <Stagger as="ul" className="flex flex-col gap-[22px] pt-3" gap={0.07}>
                    {p.items.map(([a, x]) => (
                      <StaggerItem key={a} as="li" className="flex flex-col gap-1.5 border-l-[3px] border-[#FFBA60] pl-5">
                        <h3 className="text-lg font-bold leading-6">{a}</h3>
                        <p className="text-base leading-[26px] text-[#3A4652]">{x}</p>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </article>
            ))}
          </div>
          <Reveal id="areas" className="grid scroll-mt-28 gap-8 bg-[#001E30] px-6 py-10 text-white sm:px-12 sm:py-11 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
            <div className="flex flex-col gap-4">
              <h2 className={`${SERIF} text-[30px] font-medium leading-[35px]`}>Áreas de práctica</h2>
              <a href={`${SITE}/areas-de-practica/`} className="nudge flex w-fit items-center gap-2.5 text-base font-bold leading-[21px] text-[#FFBA60]">
                Ver todas las áreas
                <ArrowRightIcon size={18} aria-hidden="true" />
              </a>
            </div>
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
              {AREAS.map((a) => (
                <li key={a} className="text-[17px] leading-7">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Filosofía */}
        <section aria-labelledby="filosofia" className="bg-[#001E30] text-white">
          <div className={`${CONTAINER} flex flex-col gap-14 py-20 lg:py-32`}>
            <Reveal as="h2" id="filosofia" className={`${H2} max-w-[720px]`}>
              Nuestra filosofía: el derecho como herramienta social
            </Reveal>
            <Reveal as="blockquote" delay={0.06} className="border-l-[3px] border-[#FFBA60] py-1 pl-6 sm:pl-10">
              <p className={`${SERIF} text-[clamp(1.5rem,2.25vw,2rem)] italic leading-[1.34]`}>
                &quot;Entendemos y valoramos el esfuerzo personal y colectivo que conlleva una empresa, así como los beneficios económicos, sociales y humanos a favor de los individuos.&quot;
              </p>
            </Reveal>
            <div className="grid gap-12 pt-4 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-20">
              <Reveal as="p" className="text-base leading-7 text-[#C7CAC1] md:text-[17px]">
                Aplicamos la concepción del jurista italiano Piero Calamandrei: el derecho como una herramienta social. No somos solo consultores; somos aliados estratégicos que transforman la norma legal en soluciones precisas, en un despacho donde la academia y la práctica convergen para beneficio de nuestros representados.
              </Reveal>
              <Stagger className="grid gap-x-10 gap-y-7 sm:grid-cols-2" gap={0.06}>
                {VALORES.map(([t, d]) => (
                  <StaggerItem key={t} className="flex flex-col gap-1.5">
                    <h3 className={`${SERIF} text-[22px] font-semibold leading-[29px] text-[#FFBA60]`}>{t}</h3>
                    <p className="text-base leading-[26px] text-[#C7CAC1]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section aria-labelledby="equipo" className={`${CONTAINER} flex flex-col gap-14 py-20 lg:py-32`}>
          <Reveal as="h2" id="equipo" className={H2}>
            Nuestro equipo
          </Reveal>
          <Stagger className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[540px_minmax(0,1fr)_minmax(0,1fr)]" gap={0.08}>
            <StaggerItem as="article" className="flex flex-col gap-5 bg-[#EDEBE8] p-7 sm:p-11 md:col-span-2 lg:col-span-1">
              <h3 className={`${SERIF} text-[28px] font-semibold leading-[34px]`}>Lic. Francisco J. Goytortúa Chambon</h3>
              <p className="text-[15px] font-bold leading-5 text-[#0E557F]">Socio Director y Presidente</p>
              <p className={`${SERIF} text-[19px] italic leading-7`}>
                &quot;El derecho es una herramienta social que utilizamos para obtener las soluciones precisas que las personas y empresas necesitan.&quot;
              </p>
              <ul className="flex flex-col gap-3 pt-2">
                {[
                  "Licenciado en Derecho por la UNAM, con posgrado en la misma institución y estudios de Doctorado en Derecho y Justicia por la Universidad de Deusto, España.",
                  "Profesor por oposición en la Facultad de Derecho de la UNAM y en la Universidad Iberoamericana.",
                  "Colaborador técnico en la aprobación de tratados internacionales y asesor jurídico en el Senado de la República.",
                  "Autor de \"Derecho Internacional Público. Casos prácticos\" (LIMUSA, 2013).",
                ].map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-[23px] text-[#3A4652]">
                    <CheckIcon size={16} className="mt-1 shrink-0 text-[#0E557F]" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            {[
              {
                f: "oscar-vasquez-del-mercado.webp",
                n: "Dr. Óscar Vásquez del Mercado Cordero",
                r: "Consejero Honorario y Consultor Estratégico",
                d: "Doctor en Derecho por la UNAM e Investigador Nacional Nivel II (SNI de CONACYT), con más de 40 años de trayectoria en materia mercantil y civil.",
              },
              {
                f: "pilar-lopez-spindola.webp",
                n: "Lic. Pilar López Spíndola",
                r: "Área de Derecho Comercial Internacional",
                d: "Especialista en arbitraje y resolución de disputas comerciales, en especial en el eje comercial México-China.",
              },
            ].map((p) => (
              <StaggerItem key={p.n} as="article" className="flex flex-col gap-2.5">
                <div className="img-zoom relative h-[380px] overflow-hidden">
                  <Image src={`${IMG}/${p.f}`} alt={p.n} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                </div>
                <h3 className={`${SERIF} text-[22px] font-semibold leading-7`}>{p.n}</h3>
                <p className="text-sm font-bold leading-[18px] text-[#0E557F]">{p.r}</p>
                <p className="text-[15px] leading-[23px] text-[#3A4652]">{p.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Testimonios */}
        <section aria-labelledby="testimonios" className="bg-[#EDEBE8]">
          <div className={`${CONTAINER} flex flex-col gap-14 py-20 lg:py-[120px]`}>
            <Reveal as="h2" id="testimonios" className={H2}>
              ¿Qué dicen nuestros clientes?
            </Reveal>
            <Stagger className="grid gap-8 md:grid-cols-2" gap={0.08}>
              {[
                ["Sólo alguien con la altura del Lic. Francisco Goytortúa podría resolver la situación como la resolvió. Rebasó mis expectativas llevando el caso a excelentes resultados.", "Imagen, Estilo y Belleza, S.A. de C.V."],
                ["Desde el inicio se estableció el objetivo mediante un contrato de prestación de servicios y todo el proceso se ha dado en forma ética y profesional, manteniendo a los clientes informados de los avances.", "Creditaria Finhimex"],
              ].map(([q, a]) => (
                <StaggerItem key={a} as="figure" className="flex flex-col justify-between gap-8 bg-white p-7 sm:p-11 lg:min-h-[340px]">
                  <div className="flex flex-col gap-5">
                    <QuotesIcon size={32} className="text-[#0E557F]" aria-hidden="true" />
                    <blockquote className={`${SERIF} text-[clamp(1.25rem,1.6vw,1.4375rem)] font-normal leading-[1.43]`}>{q}</blockquote>
                  </div>
                  <figcaption className="text-[15px] font-bold leading-5 text-[#0E557F]">{a}</figcaption>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Artículos */}
        <section id="articulos" className={`${CONTAINER} flex scroll-mt-24 flex-col gap-10 py-20 lg:py-[120px]`}>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className={H2}>Artículos recientes</h2>
            <a href={BLOG} className="nudge flex items-center gap-2.5 text-base font-bold leading-[21px]">
              Ir al blog
              <ArrowRightIcon size={18} aria-hidden="true" />
            </a>
          </Reveal>
          <Stagger as="ul" className="flex flex-col" gap={0.07}>
            {ARTICULOS.map((a) => (
              <StaggerItem key={a.t} as="li" className="border-t border-[#001E30]/15">
                <a href={a.href} className="group grid gap-3 py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[240px_420px_minmax(0,1fr)] lg:gap-12">
                  <p className="text-sm leading-[22px] text-[#5A6470]">
                    <time dateTime={a.date}>{a.d}</time>
                    <br />
                    Francisco J. Goytortúa Chambon
                  </p>
                  <h3 className={`${SERIF} text-[clamp(1.375rem,1.7vw,1.5rem)] font-medium leading-[1.3] transition-colors duration-200 group-hover:text-[#0E557F]`}>{a.t}</h3>
                  <p className="text-base leading-[26px] text-[#3A4652] md:col-start-2 lg:col-start-auto">{a.x}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#001E30] text-white">
          <div className={`${CONTAINER} grid gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_580px] lg:gap-16 lg:py-[120px] xl:gap-24`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${SERIF} text-[clamp(2.5rem,3.9vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.018em]`}>
                Contáctanos
              </Reveal>
              <Reveal as="p" delay={0.06} className="text-lg leading-[1.55] text-[#C7CAC1] md:text-xl">
                Que las empresas y las personas se enfoquen en sus objetivos; nosotros seremos el respaldo legal que necesitan.
              </Reveal>
              <Stagger className="flex flex-col gap-6 pt-5" gap={0.07}>
                <ContactRow Icon={EnvelopeSimpleIcon} k="Correo" v="contacto@goytortuabogados.com" href="mailto:contacto@goytortuabogados.com" />
                <ContactRow Icon={WhatsappLogoIcon} k="Teléfono y WhatsApp" v="+52 55 5453 4229" href={WA} external />
              </Stagger>
              <Reveal delay={0.1}>
                <ul className="flex gap-3 pt-3">
                  {SOCIAL.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="press flex h-11 w-11 items-center justify-center border border-white/20 hover:border-[#FFBA60] hover:text-[#FFBA60]"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#001E30] sm:p-11" noteClassName="text-sm text-[#3A4652]">
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Nombre*" name="name" autoComplete="name" />
                  <Field label="Empresa" name="company" autoComplete="organization" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Teléfono*" name="phone" type="tel" autoComplete="tel" />
                  <Field label="Correo*" name="email" type="email" autoComplete="email" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold leading-[18px]">Mensaje*</span>
                  <textarea name="message" rows={5} className={`${INPUT} h-[140px] resize-none py-3`} />
                </label>
                <div>
                  <button type="submit" className="press bg-[#FFBA60] px-8 py-4 text-[17px] font-bold leading-5 text-[#001E30] hover:bg-[#FFC77D]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#00131F] text-[#C7CAC1]">
        <div className={`${CONTAINER} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <Logo reverse />
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-24">
              <FooterCol
                h="Páginas"
                links={[
                  ["Áreas de Práctica", `${SITE}/areas-de-practica/`],
                  ["El Despacho", `${SITE}/el-despacho/`],
                  ["Blog", BLOG],
                  ["Contacto", "#contacto"],
                ]}
              />
              <FooterCol
                h="Principales servicios"
                links={[
                  ["Sucesión Testamentaria", `${SITE}/sucesion-testamentaria-mexico/`],
                  ["Elaboración de Contratos", `${SITE}/elaboracion-de-contratos/`],
                  ["Derecho Internacional", `${SITE}/derecho-internacional/`],
                  ["Compliance", `${SITE}/compliance/`],
                ]}
              />
            </div>
          </div>
          <p className="border-t border-white/12 pt-6 text-[13px] leading-[21px]">© 2026 Goytortúa &amp; Asociados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full border border-[#001E30]/20 bg-white px-4 text-base text-[#001E30] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#001E30] focus:shadow-[0_0_0_3px_rgba(255,186,96,0.55)]";

function FooterCol({ h, links }: { h: string; links: [string, string][] }) {
  return (
    <nav aria-label={h} className="flex flex-col gap-3">
      <p className={`${SERIF} text-lg font-semibold leading-[23px] text-white`}>{h}</p>
      <ul className="flex flex-col gap-3 text-[15px] leading-[21px]">
        {links.map(([l, href]) => (
          <li key={l}>
            <a href={href} className="link-u hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactRow({ Icon, k, v, href, external = false }: { Icon: PhIcon; k: string; v: string; href: string; external?: boolean }) {
  return (
    <StaggerItem className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20">
        <Icon size={20} className="text-[#FFBA60]" aria-hidden="true" />
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <p className="text-sm font-semibold leading-5 text-[#C7CAC1]">{k}</p>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="link-u w-fit text-[17px] font-semibold leading-[27px] [overflow-wrap:anywhere] sm:text-[19px]"
        >
          {v}
        </a>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold leading-[18px]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-[50px]`} />
    </label>
  );
}
