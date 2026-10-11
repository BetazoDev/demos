import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Ibarra_Real_Nova, Lato } from "next/font/google";
import { ArrowRight, Check, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Ibarra_Real_Nova({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s54-display" });
const body = Lato({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--s54-body" });

export const metadata: Metadata = {
  title: "Roel Abogados",
  description: "Fundado en 1925 por el Lic. Ernesto Roel Peña, es el despacho especializado en materia laboral más antiguo de México.",
};

const IMG = "/sitios/roelabogados";
const EMAIL = "contacto@roelabogados.net";
const COMUNICADOS = "https://www.roelabogados.net/comunicados.php";

const NAV = [
  { label: "Nuestra firma", href: "#nuestra-firma" },
  { label: "Historia", href: "#historia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const FIGURES = [
  ["1925", "Año de fundación"],
  ["100 años", "De servicio ininterrumpido"],
  ["+500", "Juicios en trámite"],
  ["+100", "Empresas con asesoría permanente"],
];

const INSTITUTIONAL = [
  {
    t: "Organismos tripartitos",
    items: [
      "Comisión Nacional de los Salarios Mínimos",
      "Comisión Nacional para la Participación de los Trabajadores en las Utilidades de las Empresas",
      "Junta Federal de Conciliación y Arbitraje",
      "Junta Local de Conciliación y Arbitraje de la Ciudad de México",
    ],
  },
  {
    t: "Participación activa",
    items: ["Comisión Laboral de la Barra Mexicana Colegio de Abogados", "Comisión Laboral de la Confederación Patronal de la República Mexicana (COPARMEX)"],
  },
  {
    t: "Relación con centrales obreras",
    items: ["CTM, CROC, CROM y CTC", "Coordinador Nacional de Trabajadores de la C.R.T.", "Sindicatos Libertad de Trabajadores de México"],
    note: "Esto facilita al cliente su relación con el sindicato titular del contrato colectivo de trabajo.",
  },
];

const PARTNERS = [
  ["Lic. César Roel González", "1910 / 1978", "p-cesar-roel-gonzalez.jpg"],
  ["Lic. Antero G. Roel González", "1918 / 1987", "p-antero-roel-gonzalez.jpg"],
  ["Lic. Sergio Roel Ruiz", "1920 / 1983", "p-sergio-roel-ruiz.jpg"],
  ["Lic. Alfredo Roel Ruiz", "1930 / 2002", "p-alfredo-roel-ruiz.jpg"],
  ["Lic. Ernesto Roel Paniagua", "1940 / 2011", "p-ernesto-roel-paniagua.jpg"],
];

const TEAM = [
  ["Lic. Jorge Enrique Roel Paniagua", "p-jorge-enrique-roel-paniagua.jpg"],
  ["Lic. Guillermo Roel Paniagua", "p-guillermo-roel-paniagua.jpg"],
  ["Lic. Alejandro Roel Calvillo", "p-alejandro-roel-calvillo.jpg"],
  ["Alfredo Roel Trigos", "p-alfredo-roel-trigos.jpg"],
];

const SERVICES = [
  ["Asesoría general en materia laboral", "Preventiva y correctiva: herramientas para proteger su negocio, vigilando la correcta aplicación de la ley, con asesoría y capacitación a diferentes niveles."],
  ["Representación en litigios laborales", "Individuales y colectivos: desde demandas por despido hasta despidos colectivos, emplazamientos a huelga y juicios de titularidad de un contrato colectivo."],
  ["Contratos colectivos de trabajo", "Planeación y elaboración de un contrato razonable para ambas partes, para una relación obrero patronal lo más armónica posible."],
  ["Auditorías laborales", "Visitas a oficinas y plantas, análisis del Departamento de Personal, cumplimiento legal, responsabilidad patronal y relación con los sindicatos."],
  ["Fusiones y adquisiciones", "Consecuencias laborales de la venta, fusión o adquisición de empresas, desde la terminación de relaciones de trabajo hasta la representación en demandas."],
  ["Inspecciones de la Secretaría del Trabajo", "Análisis de riesgo y estrategias para enfrentar una inspección. Si llega, nos desplazamos inmediatamente a su empresa para atenderla."],
];

const OTHER_SERVICES = [
  [
    "Documentación inicial: contratos, reglamentos, recibos y procedimientos",
    "Análisis de riesgos laborales y soluciones estratégicas",
    "Contratos individuales de trabajo",
    "Bajas y recortes de personal, individuales o colectivos",
    "Toda la documentación requerida en materia laboral",
    "Conflictos individuales y colectivos ante autoridades laborales, administrativas y del poder judicial",
    "Revisiones de contratos colectivos de trabajo",
    "Juicios de amparo en conflictos laborales",
  ],
  [
    "Cumplimiento de las NOMs",
    "Comunicados inmediatos sobre noticias, reformas y jurisprudencia laboral",
    "Programas de capacitación y adiestramiento",
    "Reglamentos interiores de trabajo, políticas internas y códigos de conducta",
    "Apoyo directo a Recursos Humanos y Relaciones Laborales",
    "Recursos ante multas por inspecciones de la STPS",
    "Relaciones con sindicatos",
    "Videoconferencias en plataforma digital",
  ],
];

const PUBLICATIONS = [
  ["Premio al Mérito Barrista 2023", "Otorgado al Lic. Jorge Enrique Roel Paniagua (revista La Barra)."],
  ["Chambers & Partners Latin America 2020", "Nos ha catalogado dentro de las mejores firmas legales en México (Podium Legal)."],
  ["Los mejores abogados de México 2019", "Edición especial: los mejores abogados en derecho laboral en México."],
  ["El mundo del abogado", "Formamos parte del Consejo Editorial de la revista mensual."],
  ["Edición especial Reforma 2025", "Roel Abogados celebra 100 años de servicio ininterrumpido."],
  ["Cumpliendo décadas", "Aniversarios LX (1985), LXXV (2000), XC (2015) y C (2025)."],
];

const PHONES = [
  ["55 33 17 66 al 69", "+525555331766"],
  ["55 14 44 55", "+525555144455"],
  ["55 14 75 67", "+525555147567"],
];

const H2 = "font-[family-name:var(--s54-display)] text-[clamp(2.5rem,3.75vw,3.375rem)] font-semibold leading-[1.1]";
const SERIF = "font-[family-name:var(--s54-display)]";

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Roel Abogados, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Roel Abogados, desde 1925" width={150} height={63} loading="eager" className="h-auto w-[120px] lg:w-[150px]" />
    </a>
  );
}

export default function RoelAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s54-body)] text-[#1D3557] selection:bg-[#973F1D] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="bg-[#1D3557] text-white"
        scrolledClassName="shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
        innerClassName="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[99px] xl:px-0 [&>nav>ul]:gap-[30px]"
        linkClassName="text-[15px] font-bold text-[#E6EAF1]"
        panelClassName="bg-[#1D3557] text-white font-[family-name:var(--s54-body)]"
        panelLinkClassName={`${SERIF} text-3xl font-semibold`}
        burgerClassName="bg-white"
        actions={
          <>
            <span className="text-[15px] text-[#C3CCDA]">English</span>
            <a href="#contacto" className="press bg-[#973F1D] px-6 py-[13px] text-[15px] font-bold text-white hover:bg-[#AC4A24]">
              Contáctenos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#14263F] text-white">
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={50}>
            <Image src={`${IMG}/fondo-index1.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#14263FF5_0%,#14263FD9_45%,#14263F4D_100%)] max-md:bg-[linear-gradient(90deg,#14263FF5_0%,#14263FE0_60%,#14263FB3_100%)]" />
          <HeroIntro className="mx-auto flex max-w-[1200px] flex-col justify-between gap-16 px-5 pb-12 pt-20 md:px-8 lg:min-h-[740px] lg:pt-[120px] xl:px-0">
            <div className="flex max-w-[760px] flex-col">
              <HeroItem as="h1" blur className={`${SERIF} text-[clamp(2.75rem,5.6vw,5rem)] font-semibold leading-[1.03] tracking-[-0.5px]`}>
                Tradición y abolengo en Derecho Laboral.
              </HeroItem>
              <HeroItem as="p" className="mt-7 max-w-[560px] text-lg leading-[1.55] text-[#DDE3EC] md:text-xl">
                Fundado en 1925 por el Lic. Ernesto Roel Peña, es el despacho especializado en materia laboral más antiguo de México.
              </HeroItem>
              <HeroItem className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#contacto" className="press bg-[#973F1D] px-8 py-[18px] text-[17px] font-bold hover:bg-[#AC4A24]">
                  Contáctenos
                </a>
                <a href="#nuestra-firma" className="nudge flex items-center gap-2.5 text-[17px] font-bold">
                  Conozca la firma
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </HeroItem>
            </div>
            <HeroItem as="dl" className="grid grid-cols-2 gap-x-10 gap-y-8 border-t border-white/25 pt-7 lg:grid-cols-4">
              {FIGURES.map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse justify-end gap-1.5">
                  <dt className="text-[15px] text-[#C3CCDA]">{l}</dt>
                  <dd className={`${SERIF} text-[clamp(2.25rem,3.2vw,2.875rem)] font-semibold leading-none`}>
                    <CountUp value={v} />
                  </dd>
                </div>
              ))}
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Nuestra firma */}
        <section id="nuestra-firma" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-center gap-12 px-5 py-24 md:px-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-24 lg:py-32 xl:px-0">
          <MediaReveal onView delay={0} className="relative mx-auto aspect-[417/590] w-full max-w-[420px]">
            <Image src={`${IMG}/angeli.png`} alt="Ángel de la Independencia sobre Paseo de la Reforma" fill sizes="420px" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col">
            <Reveal as="h2" className={H2}>Nuestra firma</Reveal>
            <Reveal as="p" delay={0.06} className={`${SERIF} mt-7 text-[clamp(1.375rem,1.7vw,1.5rem)] leading-[1.46] text-[#1B365D]`}>
              Roel Abogados, bufete de gran tradición y abolengo en Derecho Laboral, fue fundado en 1925 por el Lic. Ernesto Roel Peña. Hoy es uno de los más grandes y prestigiosos despachos jurídicos especializados en materia laboral en México.
            </Reveal>
            <Reveal delay={0.1} className="mt-6 flex flex-col gap-4 text-[17px] leading-7 text-[#3A4658]">
              <p>
                El Despacho cuenta con un nutrido grupo profesional de abogados, además de un amplio equipo secretarial y operacional que brinda asistencia jurídica y administrativa. Ya en su cuarta generación, cuenta con un programa de computación para el manejo, control y archivo de los expedientes, donde usted puede consultar su estado procesal.
              </p>
              <p>Muchos grandes y afamados despachos en el ámbito laboral, así como un gran número de abogados laboralistas, se han formado en Roel Abogados.</p>
            </Reveal>
            <Reveal as="blockquote" delay={0.14} className={`${SERIF} mt-9 border-l-[3px] border-[#973F1D] pl-6 text-[clamp(1.375rem,1.8vw,1.625rem)] italic leading-[1.38]`}>
              Convierta a nuestro equipo de Abogados en una extensión jurídica de su departamento de Recursos Humanos.
            </Reveal>
          </div>
        </section>

        {/* Ámbito institucional */}
        <section aria-label="Ámbito institucional" className="bg-[#1D3557] text-white">
          <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 lg:pb-[120px] lg:pt-28 xl:px-0">
            <Reveal as="p" className={`${SERIF} max-w-[900px] text-[clamp(1.75rem,2.8vw,2.5rem)] font-semibold leading-[1.2]`}>
              Algunos de sus miembros han representado al sector patronal en varias organizaciones mexicanas tripartitas.
            </Reveal>
            <Stagger className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16" gap={0.08}>
              {INSTITUTIONAL.map((c) => (
                <StaggerItem key={c.t} className="border-t-2 border-[#973F1D] pt-6">
                  <h3 className="text-lg font-bold">{c.t}</h3>
                  <ul className="mt-[18px] flex flex-col gap-3 text-base leading-6 text-[#D3DAE5]">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  {c.note && <p className="mt-[18px] text-[15px] italic leading-[23px] text-[#AEB9CA]">{c.note}</p>}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Historia familiar */}
        <section id="historia" className="scroll-mt-24 bg-[#F3F3EC]">
          <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 lg:pb-32 lg:pt-[120px] xl:px-0">
            <div className="grid gap-14 lg:grid-cols-[340px_1fr] lg:gap-[88px]">
              <Reveal as="figure" className="mx-auto flex w-full max-w-[340px] flex-col">
                <div className="relative aspect-[340/470] w-full">
                  <Image src={`${IMG}/p-ernesto-roel-pena.jpg`} alt="Lic. Ernesto Roel Peña" fill sizes="340px" className="object-cover" />
                </div>
                <figcaption className="flex flex-col gap-1.5 bg-[#1D3557] px-[26px] py-[22px] text-white">
                  <span className={`${SERIF} text-[26px] font-semibold leading-tight`}>Lic. Ernesto Roel Peña</span>
                  <span className="text-[15px] text-[#C3CCDA]">Fundador, 1900 / 1987</span>
                </figcaption>
              </Reveal>
              <div className="flex flex-col">
                <Reveal className="flex flex-col gap-6">
                  <h2 className={H2}>Historia familiar</h2>
                  <p className="max-w-[620px] text-lg leading-[29px] text-[#3A4658]">
                    El Despacho, ya en su cuarta generación, celebra 100 años de servicio ininterrumpido. Algunos socios y familiares a través de los años:
                  </p>
                </Reveal>
                <Stagger as="ul" className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2" gap={0.06}>
                  {PARTNERS.map(([n, y, img]) => (
                    <StaggerItem key={n} as="li" className="flex items-center gap-[18px]">
                      <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-full">
                        <Image src={`${IMG}/${img}`} alt={n} fill sizes="84px" className="object-cover" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className={`${SERIF} text-xl font-semibold leading-6`}>{n}</p>
                        <p className="text-[15px] text-[#5B6577]">{y}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>

            <div className="mt-24 border-t border-[#D8D6CB] pt-14">
              <Reveal as="h3" className={`${SERIF} text-[clamp(2rem,2.7vw,2.375rem)] font-semibold`}>Colaboradores</Reveal>
              <Stagger as="ul" className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4" gap={0.07}>
                {TEAM.map(([n, img]) => (
                  <StaggerItem key={n} as="li" className="flex flex-col gap-[22px]">
                    <div className="relative aspect-square w-full max-w-[156px] overflow-hidden rounded-full">
                      <Image src={`${IMG}/${img}`} alt={n} fill sizes="156px" className="object-cover" />
                    </div>
                    <p className={`${SERIF} max-w-[230px] text-[clamp(1.125rem,1.6vw,1.375rem)] font-semibold leading-[1.18]`}>{n}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-24 md:px-8 lg:pb-32 lg:pt-[120px] xl:px-0">
          <Reveal className="flex flex-col gap-5">
            <h2 className={H2}>Servicios</h2>
            <p className="max-w-[660px] text-lg leading-[30px] text-[#3A4658] md:text-[19px]">
              Aproveche la experiencia que le brinda el Despacho Roel Abogados a sus 100 años de existencia en materia laboral, y proteja a su empresa.
            </p>
          </Reveal>
          <Stagger className="mt-16 grid gap-x-[72px] gap-y-12 md:grid-cols-2" gap={0.06}>
            {SERVICES.map(([t, d]) => (
              <StaggerItem key={t} as="article" className="flex flex-col gap-3 border-l-2 border-[#973F1D] pl-7">
                <h3 className={`${SERIF} text-[clamp(1.375rem,1.8vw,1.625rem)] font-semibold leading-[1.2]`}>{t}</h3>
                <p className="text-base leading-[26px] text-[#3A4658]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-[72px] flex flex-col gap-7 bg-[#F3F3EC] px-6 py-10 sm:px-14 sm:py-12">
            <h3 className={`${SERIF} text-[28px] font-semibold`}>Otros servicios</h3>
            <div className="grid gap-3.5 md:grid-cols-2 md:gap-14">
              {OTHER_SERVICES.map((col) => (
                <ul key={col[0]} className="flex flex-col gap-3.5">
                  {col.map((it) => (
                    <li key={it} className="flex gap-3 text-base leading-[23px] text-[#2E3A4D]">
                      <Check size={16} color="#973F1D" className="mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Publicaciones */}
        <section id="publicaciones" className="scroll-mt-24 bg-[#1D3557] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 md:px-8 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-[88px] lg:py-[120px] xl:px-0">
            <div className="flex flex-col gap-5">
              <MediaReveal onView delay={0} className="img-zoom relative aspect-[540/348] w-full">
                <Image src={`${IMG}/reforma.jpg`} alt="Edición especial de Reforma por los 100 años de Roel Abogados" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
              </MediaReveal>
              <div className="grid grid-cols-2 gap-5">
                <MediaReveal onView delay={0.1} className="img-zoom relative aspect-[260/312] w-full">
                  <Image src={`${IMG}/labarra.jpg`} alt="Portada de la revista La Barra, Premio al Mérito Barrista 2023" fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
                </MediaReveal>
                <MediaReveal onView delay={0.18} className="img-zoom relative aspect-[260/312] w-full">
                  <Image src={`${IMG}/1985.jpg`} alt="Invitación al LX aniversario del despacho, 1985" fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
                </MediaReveal>
              </div>
            </div>
            <div className="flex flex-col">
              <Reveal as="h2" className={`${SERIF} text-[clamp(2.25rem,3.3vw,3rem)] font-semibold leading-[1.1]`}>
                Publicaciones y reconocimientos
              </Reveal>
              <Stagger as="ul" className="mt-11 flex flex-col gap-7" gap={0.06}>
                {PUBLICATIONS.map(([t, d]) => (
                  <StaggerItem key={t} as="li" className="flex flex-col gap-1.5">
                    <h3 className={`${SERIF} text-2xl font-semibold leading-[1.2]`}>{t}</h3>
                    <p className="text-base leading-6 text-[#C3CCDA]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-24 bg-[#EEF0F3]">
          <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 lg:py-28 xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Clientes</h2>
              <p className="max-w-[640px] text-lg leading-[30px] text-[#3A4658] md:text-[19px]">
                Brindamos asesoría permanente a más de cien empresas de todas las ramas de la economía nacional.
              </p>
            </Reveal>
            <Stagger className="mt-12 grid gap-6 md:grid-cols-3" gap={0.08}>
              {["slider1.png", "slider2.png", "slider3.png"].map((f, i) => (
                <StaggerItem key={f} className="relative aspect-[747/686] w-full md:aspect-auto md:h-[clamp(14rem,25vw,22.625rem)]">
                  <Image src={`${IMG}/${f}`} alt={`Logotipos de clientes de Roel Abogados, grupo ${i + 1}`} fill sizes="(min-width: 768px) 384px, 100vw" className="object-contain" />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto grid max-w-[1200px] scroll-mt-24 gap-14 px-5 py-24 md:px-8 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-[72px] lg:pb-32 lg:pt-[120px] xl:px-0">
          <div className="flex flex-col">
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Contacto</h2>
              <p className="max-w-[600px] text-lg leading-[29px] text-[#3A4658]">
                ¿Tiene usted alguna pregunta? Por favor no dude en contactarnos directamente. Nuestro equipo se pondrá en contacto con usted para ayudarlo.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="mt-10">
              <DemoForm className="flex flex-col gap-5" noteClassName="text-sm text-[#3A4658]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre" name="nombre" autoComplete="name" />
                  <Field label="E-mail" name="email" type="email" autoComplete="email" />
                </div>
                <Field label="Asunto" name="asunto" />
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold">Comentarios</span>
                  <textarea name="comentarios" rows={5} className="h-[140px] resize-none border border-[#C9CFD9] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1D3557] focus:shadow-[0_0_0_3px_rgba(29,53,87,0.14)]" />
                </label>
                <div className="pt-2">
                  <button type="submit" className="press bg-[#973F1D] px-9 py-[17px] text-[17px] font-bold text-white hover:bg-[#AC4A24]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="flex h-fit flex-col gap-9 bg-[#973F1D] px-6 py-10 text-white sm:px-11 sm:py-12">
            <div className="flex flex-col gap-2.5">
              <p className="flex items-center gap-2.5 text-[15px] font-bold text-[#F3DCD2]">
                <MapPin size={20} color="#FFFFFF" aria-hidden="true" />
                Oficinas
              </p>
              <address className="text-[19px] not-italic leading-[29px]">
                Av. Paseo de la Reforma 369, piso 8
                <br />
                Colonia y Alcaldía Cuauhtémoc
                <br />
                C.P. 06500, Ciudad de México
              </address>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="flex items-center gap-2.5 text-[15px] font-bold text-[#F3DCD2]">
                <Phone size={20} color="#FFFFFF" aria-hidden="true" />
                Teléfonos
              </p>
              <ul className="text-[19px] leading-[29px]">
                {PHONES.map(([label, num]) => (
                  <li key={num}>
                    <a href={`tel:${num}`} className="link-u">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="flex items-center gap-2.5 text-[15px] font-bold text-[#F3DCD2]">
                <EnvelopeSimple size={20} color="#FFFFFF" aria-hidden="true" />
                E-mail
              </p>
              <a href={`mailto:${EMAIL}`} className="link-u w-fit break-all text-[19px] leading-[29px]">{EMAIL}</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#14263F] text-[#E6EAF1]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-[30px] gap-y-3 text-[15px] font-bold">
                {[...NAV.slice(0, 4), { label: "Comunicados", href: COMUNICADOS }, ...NAV.slice(4)].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u" {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-[#AEB9CA] lg:flex-row lg:justify-between">
            <p>© 2026 Roel Abogados, desde 1925 · Aviso de privacidad{" · "}<HemeronCredit /></p>
            <p>
              Intranet · Audiencias · English · Tel.{" "}
              <a href={`tel:${PHONES[0][1]}`} className="link-u">{PHONES[0][0]}</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] font-bold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] border border-[#C9CFD9] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1D3557] focus:shadow-[0_0_0_3px_rgba(29,53,87,0.14)]"
      />
    </label>
  );
}
