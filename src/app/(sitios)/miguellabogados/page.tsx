import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Cardo, Lato } from "next/font/google";
import { ArrowRight, Check, EnvelopeSimple, MapPin, Phone, Quotes } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Cardo({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--s53-display" });
const body = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--s53-body" });

export const metadata: Metadata = {
  title: "Miguel López & Soto Abogados, S.C.",
  description: "Despacho especializado en Derecho Mercantil y Civil, con más de dos décadas de experiencia.",
};

const IMG = "/sitios/miguellabogados";
const EMAIL = "licsm@miguellabogados.com.mx";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const AREAS = ["Derecho Civil y Mercantil", "Consultoría en migración e inversión extranjera", "Seguros y Fianzas"];

const PRINCIPLES = [
  ["Misión", "Prestar servicios de excelencia, cuidando hasta el último detalle en ofrecer a nuestros clientes seguridad jurídica y un apoyo real para el correcto funcionamiento de sus negocios y de sus empresas."],
  ["Filosofía", "Sin importar si usted es un inversionista nacional o extranjero, a través de nuestros servicios en derecho corporativo su empresa contará con un óptimo desempeño organizacional y operativo, base para la realización de negocios exitosos en nuestro país."],
  ["Tradición", "Nuestra firma cuenta con abogados con amplia experiencia en todas las cuestiones relativas a la estructura corporativa de su empresa, desde la elaboración de los estatutos de su sociedad hasta su constitución, contratos, due diligence y consultoría en materia mercantil y civil."],
];

const MERCANTIL = [
  "Elaboración y revisión de contratos civiles y mercantiles.",
  "Due diligence.",
  "Constitución de sociedades.",
  "Consultoría sobre constitución de sociedades, escisiones, liquidaciones, asambleas de socios, aumento de capital y modificación de estatutos.",
  "Procedimientos contenciosos ante Tribunales del Fuero Común y Federal.",
  "Arbitraje y controversias mercantiles.",
  "Inversión extranjera.",
  "Controversias sobre contratos de seguro y fianzas.",
];

const MIGRATORIOS = [
  "Asesoría sobre las ventajas y desventajas de las posibles alternativas para obtener una forma migratoria.",
  "Asistencia en la creación de la documentación requerida para maximizar las posibilidades de aprobación de la solicitud.",
  "Representación ante el Instituto Nacional de Migración y la Secretaría de Relaciones Exteriores.",
  "Tramitación de formas migratorias de Residente Temporal y Permanente.",
];

const EXPATRIADOS = [
  "Autorizaciones de internación para trabajar, invertir, estudiar, prestar asesoría técnica o sostener pláticas de negocios.",
  "Residencia permanente e importación y exportación de menajes de casa y automóviles.",
  "Cambios de calidad migratoria, permisos de trabajo y obtención de la nacionalidad mexicana.",
  "Impugnación de resoluciones migratorias ante autoridades administrativas y tribunales federales.",
];

const H2 = "font-[family-name:var(--s53-display)] text-[clamp(2.375rem,3.3vw,2.875rem)] leading-[1.2]";
const H3 = "font-[family-name:var(--s53-display)] text-[clamp(1.625rem,2.1vw,1.875rem)] leading-[1.2]";

function CheckList({ items, gap = 0.05 }: { items: string[]; gap?: number }) {
  return (
    <Stagger as="ul" className="flex flex-col gap-3.5" gap={gap}>
      {items.map((it) => (
        <StaggerItem key={it} as="li" className="flex gap-3.5 text-base leading-6 text-[#3D3434]">
          <Check size={16} color="#D7002E" className="mt-1 shrink-0" aria-hidden="true" />
          <span>{it}</span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Miguel López & Soto Abogados, inicio">
      <Image src={`${IMG}/logo-mls-ink.png`} alt="Miguel López & Soto Abogados S.C." width={388} height={22} loading="eager" className="h-auto w-[250px] sm:w-[320px] xl:w-[388px]" />
    </a>
  );
}

export default function MiguelLopezSotoPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s53-body)] text-[#331919] selection:bg-[#D7002E] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_30px_-20px_rgba(51,25,25,0.5)]"
        innerClassName="mx-auto flex h-[72px] max-w-[1200px] items-center gap-10 px-5 md:px-8 lg:h-[88px] xl:px-0 [&>button]:ml-auto [&>nav]:ml-auto [&>nav>ul]:gap-10 [&>nav_li:first-child>a]:font-bold [&>nav_li:first-child>a]:text-[#D7002E]"
        linkClassName="text-[15px] text-[#331919]"
        panelClassName="bg-white text-[#331919] font-[family-name:var(--s53-body)]"
        panelLinkClassName="font-[family-name:var(--s53-display)] text-3xl"
        burgerClassName="bg-[#331919]"
        actions={
          <a href="#contacto" className="press rounded-[2px] bg-[#D7002E] px-[22px] py-[13px] text-[15px] font-bold text-white hover:bg-[#B80027]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#432222] text-white lg:h-[640px] lg:grid-cols-[minmax(0,800px)_1fr]">
          <HeroIntro className="flex flex-col justify-between gap-14 px-5 pb-12 pt-20 md:px-8 lg:pb-[52px] lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-12 lg:pt-[100px]">
            <div className="flex flex-col gap-7">
              <HeroItem as="h1" blur className="font-[family-name:var(--s53-display)] text-[clamp(2.625rem,4.1vw,3.625rem)] leading-[1.1]">
                Excelencia en consultoría legal empresarial
              </HeroItem>
              <HeroItem as="p" className="max-w-[460px] text-lg leading-[29px] text-[#E8DAD6] md:text-[19px]">
                Despacho especializado en Derecho Mercantil y Civil, con más de dos décadas de experiencia.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-3">
                <a href="#contacto" className="press rounded-[2px] bg-[#D7002E] px-7 py-4 text-base font-bold hover:bg-[#B80027]">
                  Contáctanos
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-bold">
                  Ver servicios
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </HeroItem>
            </div>
            <HeroItem as="ul" className="flex flex-col gap-2 text-sm text-[#D9C6C1] sm:flex-row sm:flex-wrap sm:gap-y-2 xl:flex-nowrap">
              {AREAS.map((a, i) => (
                <li
                  key={a}
                  className={`whitespace-nowrap sm:py-1 ${i > 0 ? "sm:pl-[18px]" : ""} ${i < AREAS.length - 1 ? "sm:border-r sm:border-white/20 sm:pr-[18px]" : ""}`}
                >
                  {a}
                </li>
              ))}
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[320px] overflow-hidden md:h-[440px] lg:h-full" delay={0.25}>
            <Image src={`${IMG}/servicios.jpg`} alt="Oficina del despacho con el letrero Miguel López & Soto Abogados" fill preload sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="mx-auto grid max-w-[1200px] scroll-mt-24 gap-12 px-5 py-24 md:px-8 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-[88px] lg:pb-[120px] lg:pt-32 xl:px-0">
          <MediaReveal onView delay={0} className="relative h-[360px] overflow-hidden md:h-[480px] lg:h-[762px]">
            <Image src={`${IMG}/derecho-mercantil-870.jpg`} alt="Sala de juntas del despacho" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={H2}>Nosotros</Reveal>
            <Reveal as="p" delay={0.06} className="text-lg leading-[30px] text-[#3D3434]">
              Somos un despacho de abogados con más de dos décadas de experiencia, especializados en las áreas de Derecho Mercantil y Civil. Ofrecemos consultoría a empresas para la realización de negocios: patentes y marcas comerciales, contratos de confidencialidad y exclusividad, joint venture, coinversión, asambleas de sociedades, fusiones, escisiones y due diligence.
            </Reveal>
            <Stagger as="dl" className="flex flex-col gap-8 pt-7" gap={0.08}>
              {PRINCIPLES.map(([t, d]) => (
                <StaggerItem key={t} className="flex flex-col gap-3 border-t border-[#D7002E]/60 pt-6 sm:flex-row sm:gap-8">
                  <dt className="font-[family-name:var(--s53-display)] text-2xl sm:w-[150px] sm:shrink-0">{t}</dt>
                  <dd className="text-base leading-[26px] text-[#4C4C4C]">{d}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F6F0EE]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-24 md:px-8 lg:pb-32 lg:pt-[120px] xl:px-0">
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Servicios</h2>
              <p className="text-lg text-[#4C4C4C]">Tenemos una amplia gama de servicios legales.</p>
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[minmax(0,540px)_1fr] lg:items-start lg:gap-[72px]">
              <Reveal className="flex flex-col gap-7 bg-white px-6 pb-10 pt-9 sm:px-11 sm:pb-12 sm:pt-11">
                <h3 className={H3}>Derecho mercantil</h3>
                <CheckList items={MERCANTIL} />
              </Reveal>
              <div className="flex flex-col gap-14 lg:pt-11">
                <div className="flex flex-col gap-6">
                  <Reveal as="h3" className={H3}>Servicios migratorios</Reveal>
                  <CheckList items={MIGRATORIOS} />
                </div>
                <div className="flex flex-col gap-5">
                  <Reveal className="flex flex-col gap-5">
                    <h3 className={H3}>Consultoría y apoyo a expatriados</h3>
                    <p className="text-base leading-[26px] text-[#4C4C4C]">
                      Asesoramos a expatriados de corporaciones en México sobre la importación temporal de su menaje de casa, su exportación al finalizar su estadía y la obtención de visas para que sus cónyuges e hijos puedan residir en México.
                    </p>
                  </Reveal>
                  <CheckList items={EXPATRIADOS} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lema */}
        <section aria-label="Lema" className="relative isolate overflow-hidden bg-[#331919] text-white">
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={40}>
            <Image src={`${IMG}/fragmentos.jpg`} alt="" fill sizes="100vw" className="object-cover object-[50%_10%]" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(-90deg,#331919F5_0%,#331919E0_50%,#33191926_100%)] max-lg:bg-[linear-gradient(-90deg,#331919F5_0%,#331919E0_60%,#331919B3_100%)]" />
          <div className="mx-auto flex max-w-[1200px] px-5 py-24 md:px-8 lg:h-[520px] lg:items-center lg:justify-end lg:py-0 xl:px-0">
            <Reveal className="flex max-w-[680px] flex-col gap-7 lg:mr-0 lg:w-[680px]">
              <Quotes size={48} color="#D7002E" aria-hidden="true" />
              <blockquote className="font-[family-name:var(--s53-display)] text-[clamp(2rem,3.3vw,2.875rem)] italic leading-[1.26]">
                Prestar servicios de excelencia a nuestros clientes como apoyo a sus empresas.
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#432222] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 md:px-8 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-24 lg:pb-32 lg:pt-[120px] xl:px-0">
            <div className="flex flex-col gap-10 pt-2">
              <Reveal as="h2" className={H2}>Contacto</Reveal>
              <Stagger className="flex flex-col gap-7" gap={0.08}>
                <StaggerItem className="flex gap-[18px]">
                  <MapPin size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#CDB8B3]">Dirección</p>
                    <address className="text-lg not-italic leading-[27px]">
                      Leibnitz 133, Col. Anzures, Miguel Hidalgo,
                      <br />
                      C.P. 11590, Ciudad de México
                    </address>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <Phone size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#CDB8B3]">Teléfono</p>
                    <a href="tel:+525555451711" className="link-u w-fit text-lg leading-[27px]">(52) 55 5545 1711</a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <EnvelopeSimple size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <p className="text-sm text-[#CDB8B3]">Correo</p>
                    <a href={`mailto:${EMAIL}`} className="link-u w-fit break-all text-lg leading-[27px]">{EMAIL}</a>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[22px] bg-white px-6 pb-10 pt-9 text-[#331919] sm:px-11 sm:pb-12 sm:pt-11" noteClassName="text-sm text-[#5A5050]">
                <h3 className={H3}>Mándenos un mensaje</h3>
                <p className="text-[15px] leading-[23px] text-[#5A5050]">En breve nos pondremos en contacto. Favor de llenar todos los campos.</p>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Mensaje</span>
                  <textarea name="mensaje" rows={5} required className="h-[132px] resize-none rounded-[2px] border border-[#CFC4C2] px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#D7002E] focus:shadow-[0_0_0_3px_rgba(215,0,46,0.15)]" />
                </label>
                <button type="submit" className="press rounded-[2px] bg-[#D7002E] py-4 text-base font-bold text-white hover:bg-[#B80027]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#331919] text-[#E8DAD6]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Image src={`${IMG}/logo-mls-white.png`} alt="Miguel López & Soto Abogados S.C." width={352} height={20} className="h-auto w-[260px] sm:w-[352px]" />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px]">
                {NAV.map((l) => (
                  <li key={l.href}><a href={l.href} className="link-u">{l.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-[#BFA9A4] sm:flex-row sm:justify-between">
            <p>© 2026 Miguel López &amp; Soto Abogados, S.C.{" "}<HemeronCredit /></p>
            <p>Derecho Mercantil y Civil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="h-12 rounded-[2px] border border-[#CFC4C2] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#D7002E] focus:shadow-[0_0_0_3px_rgba(215,0,46,0.15)]"
      />
    </label>
  );
}
