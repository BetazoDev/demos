import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Urbanist, Work_Sans } from "next/font/google";
import { ArrowRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Urbanist({ subsets: ["latin"], variable: "--s24-display" });
const body = Work_Sans({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s24-body" });

export const metadata: Metadata = {
  title: "López Alcántara & Asociados, abogados, s.c.",
  description: "Boutique de servicios jurídicos, desde 1983. Servicios de confianza F2F (face to face) al servicio de su empresa.",
};

const IMG = "/sitios/lopezabo";
const PHOTO =
  "https://images.unsplash.com/photo-1669063299452-a0209a565b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTE1ODk3ODl8&ixlib=rb-4.1.0&q=80&w=1080";
const AVISO = "http://lopezabo.com.mx/ESW/Files/AVISODEPRIVACIDAD_LA&A_1112.pdf";
const EMAIL = "lopezabo@lopezabo.com.mx";
const DISPLAY = "font-[family-name:var(--s24-display)]";
const H2 = `${DISPLAY} text-[clamp(2.5rem,4.2vw,3.5rem)] font-bold leading-[1.05] tracking-[-1.5px]`;

const NAV = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Ideología", href: "#ideologia" },
  { label: "Equipo", href: "#equipo" },
  { label: "Áreas de efectividad", href: "#areas" },
  { label: "Experiencia", href: "#experiencia" },
];

const CREDENCIALES = [
  { v: "1983", t: "Año de fundación del despacho." },
  { v: "2003", t: "Establecidos en Sinaloa 182, Col. Roma, Ciudad de México." },
  { v: "F2F", t: "Atención directa y personal de los socios y asociados de la firma." },
  { v: "7", t: "Abogados: tres socios y cuatro asociados.", count: true },
];

const IDEOLOGIA = [
  { k: "Misión", v: "Entregar servicios de confianza a nuestros clientes.", big: true },
  {
    k: "Visión",
    v: "Alcanzar el reconocimiento de nuestros clientes, como su boutique de servicios jurídicos de confianza, por la efectividad y acierto en la prevención y solución de situaciones problema, con su satisfacción total.",
  },
  {
    k: "Valores",
    v: "Lealtad, honestidad y responsabilidad en nuestras relaciones de negocios, sociales y públicas, como base de la confianza reconocida y del éxito profesional de nuestra firma.",
  },
];

const AREAS = [
  { t: "Asuntos civiles", l: ["Asesoría legal y contencioso", "Arrendamientos", "Propiedades", "Responsabilidad civil", "Contratos"] },
  { t: "Asuntos corporativos y mercantiles", l: ["Títulos de crédito", "Auditorías legales", "Sociedades: constitución, asambleas, fusiones, consejos, liquidaciones"] },
  { t: "Asuntos de cobranza", l: ["Judicial y extrajudicial", "Documentos mercantiles", "Hipoteca"] },
  {
    t: "Asuntos administrativos",
    l: [
      "Trámites ante dependencias federales, estatales y municipales",
      "Procesos de licitación",
      "Comisión Federal de Competencia Económica",
      "Inversiones extranjeras",
      "Marcas y patentes",
      "Migratorios",
    ],
  },
  { t: "Asuntos laborales", l: ["Trámites ante autoridades laborales municipales, estatales y federales", "Procesos ante Juntas de Conciliación y Arbitraje", "Convenios"] },
  { t: "Asuntos penales", l: ["Denuncias o querellas", "Integración de averiguaciones previas ante Ministerio Público", "Seguimiento de procesos ante juzgados federales y locales"] },
  { t: "Asuntos fiscales", l: ["I.S.R., I.V.A., I.M.S.S.", "Aduaneros"] },
];

const SOCIOS = [
  { i: "AL", n: "Adolfo López Alcántara", c: "Socio Fundador" },
  { i: "AL", n: "Adriana López Alcántara", c: "Socio Director" },
  { i: "KL", n: "Karla López Garibay", c: "Socio" },
];
const ASOCIADOS = ["Luis Sevilla", "Diego Arce", "Jorge Castro", "Armando López Cervantes"];

const CLIENTES: [string, string][][] = [
  [
    ["ExxonMobil México", "Fabricación y venta de lubricantes"],
    ["Holcim", "Fabricación y venta de cemento"],
    ["Concretos Apasco", "Concreto premezclado"],
    ["Carvajal Tecnología y Servicios", "Soluciones tecnológicas"],
    ["Copamex", "Papel y especialidades"],
    ["First Cash México", "Red nacional de casas de empeño"],
  ],
  [
    ["Grupo Collado", "Aceros y especialidades"],
    ["Forzaform", "Impresos de especialidad y formas"],
    ["ALA de México", "Limpieza de oficinas y productos para el aseo"],
    ["El Oso", "Ceras para calzado"],
    ["Gano Café", "Comercializadora de café"],
    ["Cargraphics", "Soluciones de impresión"],
  ],
  [
    ["Industrias Ganolife", "Industrializadora de café"],
    ["Ideas Inteligentes, Innovación y Formación Turística", "Consultoría y capacitación turística"],
    ["Isquisa", "Fertilizantes y agroquímicos"],
    ["American Loan Employee Services", "Outsourcing de recursos humanos"],
    ["TIP de México", "Renta y venta de cajas secas para tráiler"],
    ["Avantatge MEM", "Importadora de diseño y moda"],
  ],
  [
    ["Promotora Automotriz Irapuato", "Distribuidora de automóviles Toyota"],
    ["Promotora Automotriz Santa Fe", "Distribuidora de automóviles Toyota"],
    ["Aérea Motriz", "Distribuidora de automóviles Honda"],
    ["Grupo Vera Imagen", "Escuela de estilismo y estéticas"],
  ],
];

function Logo() {
  return (
    <a href="#top" aria-label="López Alcántara & Asociados, abogados, s.c., inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="" width={379} height={26} preload className="h-auto w-[260px] sm:w-[320px] xl:w-[379px]" />
    </a>
  );
}

export default function LopezAlcantaraPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s24-body)] text-[#14142B] selection:bg-[#333399] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(20,20,43,0.3)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center gap-8 px-5 md:px-8 lg:h-24 xl:px-0 [&>div:first-child]:mr-auto"
        linkClassName="text-[15px] font-medium text-[#14142B]"
        panelClassName="bg-white text-[#14142B] font-[family-name:var(--s24-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl font-bold tracking-[-0.5px]`}
        burgerClassName="bg-[#14142B]"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#333399] px-[22px] py-[13px] text-[15px] font-semibold text-white hover:bg-[#28287F]">
            Contáctenos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#333399] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 pb-20 pt-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-24 lg:pb-[120px] lg:pt-28 xl:px-0">
            <HeroIntro className="flex flex-col gap-9">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(3rem,5.6vw,5rem)] font-bold leading-[1.03] tracking-[-2px]`}>
                Boutique de servicios jurídicos, desde 1983.
              </HeroItem>
              <HeroItem as="p" className="max-w-[600px] text-[17px] leading-[1.55] text-white/[0.88] md:text-[19px] md:leading-[29px]">
                Servicios de confianza F2F (face to face): la atención directa y personal de nuestros socios y asociados, al servicio de su empresa.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-7 pt-2">
                <a href="#contacto" className="press rounded-[6px] bg-white px-7 py-[17px] text-base font-semibold text-[#333399] hover:bg-[#E9E9F7]">
                  Contáctenos
                </a>
                <a href="#areas" className="nudge flex items-center gap-2 text-base font-semibold">
                  Áreas de efectividad
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </HeroItem>
            </HeroIntro>
            <HeroIntro as="dl" delay={0.45} gap={0.14} className="flex flex-col gap-[18px] border-t border-white/35 pt-7">
              <HeroItem as="dt" y={12} className="text-[15px] font-medium text-white/[0.72]">
                Nuestra fórmula
              </HeroItem>
              {[
                { op: "", t: "Atención personalizada" },
                { op: "+", t: "Prevención / solución de problemas" },
                { op: "=", t: "Seguridad jurídica", strong: true },
              ].map(({ op, t, strong }) => (
                <HeroItem as="dd" y={12} key={t} className={`${DISPLAY} flex gap-3.5 text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.17]`}>
                  <span aria-hidden="true" className="w-5 shrink-0 font-medium text-white/55">{op}</span>
                  <span className={strong ? "font-bold" : "font-medium"}>{t}</span>
                </HeroItem>
              ))}
            </HeroIntro>
          </div>
        </section>

        {/* Credenciales */}
        <section aria-label="Credenciales" className="border-b border-[#14142B1A]">
          <Stagger as="dl" className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 md:px-8 lg:grid-cols-4 lg:gap-12 lg:py-16 xl:px-0" gap={0.07}>
            {CREDENCIALES.map(({ v, t, count }) => (
              <StaggerItem key={v} className="flex flex-col gap-2">
                <dt className={`${DISPLAY} text-[clamp(2.5rem,3.4vw,3rem)] font-bold leading-none text-[#333399]`}>
                  {count ? <CountUp value={v} duration={0.9} /> : v}
                </dt>
                <dd className="text-[15px] leading-[23px] text-[#55556E]">{t}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[540px_minmax(0,1fr)] lg:gap-24 lg:py-32 xl:px-0">
          <MediaReveal onView delay={0} className="relative aspect-[540/620] w-full overflow-hidden rounded-[6px]">
            <Image src={PHOTO} alt="Interior de un edificio histórico de la Ciudad de México" fill unoptimized sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={H2}>
              Quiénes somos
            </Reveal>
            <Reveal delay={0.06} as="p" className="text-[19px] leading-[1.55] md:text-[21px] md:leading-8">
              Nuestra vida profesional al servicio empresarial nos llevó a crear este concepto de boutique de servicios jurídicos, que satisface la necesidad de las empresas de alta exigencia.
            </Reveal>
            <Reveal delay={0.12} className="flex flex-col gap-6 text-base leading-[27px] text-[#55556E]">
              <p>
                En nuestro concepto de servicios boutique garantizamos la atención personal de los socios y asociados de esta firma, para acompañarlos más allá de la solución de problemas: en la mejor forma de prevenir aquellas situaciones que la operación día a día genera a una empresa.
              </p>
              <p>
                Ofrecemos alta efectividad tendiente a satisfacer las expectativas del cliente, en un ambiente de confianza creciente, basado en los principios de lealtad, honestidad y responsabilidad.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Ideología */}
        <section id="ideologia" className="scroll-mt-24 bg-[#000066] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-28 lg:pb-[136px] lg:pt-32 xl:px-0">
            <Reveal className="flex flex-col gap-6">
              <h2 className={`${H2} lg:leading-[59px]`}>Corazón ideológico</h2>
              <p className="text-base leading-[27px] text-white/[0.78]">
                Brindar un servicio jurídico F2F requiere mantener un alto nivel de compromiso con las necesidades y expectativas de nuestros clientes. Este corazón ideológico guía la vida profesional de la firma y lo compartimos cada uno de los abogados que somos parte de ella.
              </p>
            </Reveal>
            <Stagger as="dl" className="flex flex-col gap-11" gap={0.08}>
              {IDEOLOGIA.map(({ k, v, big }) => (
                <StaggerItem key={k} className="grid gap-3 border-t border-white/20 pt-7 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-10">
                  <dt className="text-base font-semibold text-[#B9B9F0]">{k}</dt>
                  <dd
                    className={`${DISPLAY} font-semibold ${big ? "text-[clamp(1.875rem,2.8vw,2.5rem)] leading-[1.3]" : "text-[clamp(1.375rem,1.9vw,1.625rem)] leading-[1.31]"}`}
                  >
                    {v}
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de efectividad */}
        <section id="areas" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-14 px-5 py-20 md:px-8 lg:py-32 xl:px-0">
          <Reveal as="h2" className={H2}>
            Áreas de efectividad
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-14" gap={0.05}>
            <StaggerItem as="article" className="flex flex-col justify-between gap-4 rounded-[6px] bg-[#333399] p-8 text-white">
              <div className="flex flex-col gap-3.5">
                <h3 className={`${DISPLAY} text-[26px] font-bold leading-[30px]`}>Queremos ser parte de su equipo</h3>
                <p className="text-[15px] leading-6 text-white/85">
                  Soluciones preventivas y correctivas para las situaciones problema que la operación de una organización genera día a día.
                </p>
              </div>
            </StaggerItem>
            {AREAS.map(({ t, l }) => (
              <StaggerItem key={t} as="article" className="flex flex-col gap-4 rounded-[6px] bg-[#F3F3F8] p-8">
                <h3 className={`${DISPLAY} text-[22px] font-bold leading-[26px]`}>{t}</h3>
                <ul className="flex flex-col gap-2 text-[15px] leading-[22px] text-[#55556E]">
                  {l.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Equipo */}
        <section id="equipo" className="scroll-mt-24 bg-[#F3F3F8]">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-[104px] lg:py-32 xl:px-0">
            <Reveal className="flex flex-col gap-6">
              <h2 className={H2}>Equipo</h2>
              <p className="text-base leading-[27px] text-[#55556E]">
                Fundado en 1983, el despacho ha crecido en experiencia y especialidad al servicio del sector empresarial. Sus abogados se han formado como litigantes o como corporativistas para reconocidas empresas nacionales y transnacionales.
              </p>
            </Reveal>
            <div className="flex flex-col gap-12">
              <Stagger as="ul" className="flex flex-col" gap={0.08}>
                {SOCIOS.map(({ i, n, c }) => (
                  <StaggerItem key={n} as="li" className="flex flex-wrap items-center gap-x-6 gap-y-1 py-5">
                    <span aria-hidden="true" className={`${DISPLAY} flex h-14 w-14 shrink-0 items-center justify-center rounded-[6px] bg-[#333399] text-xl font-bold text-white`}>
                      {i}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <span className={`${DISPLAY} text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-tight`}>{n}</span>
                      <span className="text-[15px] font-semibold text-[#333399]">{c}</span>
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal className="flex flex-col gap-5 border-t border-[#14142B1F] pt-8">
                <h3 className="text-[15px] font-semibold text-[#333399]">Asociados</h3>
                <ul className={`${DISPLAY} flex flex-wrap gap-x-8 gap-y-3 text-[22px] font-semibold xl:flex-nowrap xl:whitespace-nowrap`}>
                  {ASOCIADOS.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-12 px-5 py-20 md:px-8 lg:py-32 xl:px-0">
          <Reveal className="flex flex-col gap-12">
            <h2 className={H2}>Experiencia</h2>
            <p className="max-w-[760px] text-lg leading-[1.55] md:text-xl md:leading-[30px]">
              Nuestro aval más importante es la recomendación de quienes nos honran con permitirnos ser sus abogados de confianza. Algunas de estas organizaciones son:
            </p>
          </Reveal>
          <Stagger className="grid gap-x-8 gap-y-[22px] pt-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {CLIENTES.map((col) => (
              <StaggerItem key={col[0][0]} as="ul" className="flex flex-col gap-[22px]">
                {col.map(([n, g]) => (
                  <li key={n} className="flex flex-col gap-[3px]">
                    <span className={`${DISPLAY} text-lg font-bold leading-tight`}>{n}</span>
                    <span className="text-[15px] leading-[21px] text-[#55556E]">{g}</span>
                  </li>
                ))}
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal as="p" className="text-[15px] italic text-[#55556E]">
            No insertamos imágenes de los logos de nuestros clientes por respeto a sus políticas de privacidad y uso de marcas.
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#333399] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_540px] lg:gap-24 lg:pb-[136px] lg:pt-32 xl:px-0">
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.75rem,4.8vw,4rem)] font-bold leading-[1.05] tracking-[-2px]`}>
                Nuestras oficinas
              </Reveal>
              <Reveal delay={0.06} as="p" className="max-w-[480px] text-[17px] leading-[29px] text-white/[0.88] md:text-[19px]">
                Complete el formulario o escríbanos directamente.
              </Reveal>
              <Stagger className="flex flex-col gap-[26px] pt-5" gap={0.07} delay={0.1}>
                <ContactRow Icon={MapPin} label="Dirección">
                  <p>
                    Sinaloa No. 182 - 001 y 002, Col. Roma
                    <br />
                    06700 Ciudad de México
                  </p>
                </ContactRow>
                <ContactRow Icon={Phone} label="Teléfono">
                  <p>
                    <a href="tel:+525552861460" className="link-u">+52 55 5286 1460</a>
                    {" / "}
                    <a href="tel:+525552861303" className="link-u">1303</a>
                  </p>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimple} label="Correo">
                  <a href={`mailto:${EMAIL}`} className="link-u break-all">{EMAIL}</a>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[6px] bg-white p-6 text-[#14142B] md:p-11" noteClassName="text-sm text-[#55556E]">
                <h3 className={`${DISPLAY} text-[32px] font-bold leading-tight`}>Contacto</h3>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Nombre" name="nombre" autoComplete="name" />
                  <Field label="Organización" name="organizacion" autoComplete="organization" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                  <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Comentarios</span>
                  <textarea name="comentarios" className={`${FIELD} h-[150px] resize-y py-3`} />
                </label>
                <button type="submit" className="press h-[54px] w-full rounded-[6px] bg-[#333399] text-base font-semibold text-white hover:bg-[#28287F]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                {[{ label: "Inicio", href: "#top" }, ...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#14142B1F] pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#55556E]">© López Alcántara &amp; Asociados, abogados, s.c.</p>
            <a href={AVISO} className="link-u w-fit text-[#333399]">Aviso de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "rounded-[6px] border border-[#C9C9DA] bg-[#FAFAFD] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#333399] focus:shadow-[0_0_0_3px_rgba(51,51,153,0.15)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${FIELD} h-12 w-full`} />
    </label>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-5">
      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] bg-white/[0.12]">
        <Icon size={20} />
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm font-semibold text-white/70">{label}</p>
        <div className="text-lg leading-[27px]">{children}</div>
      </div>
    </StaggerItem>
  );
}
