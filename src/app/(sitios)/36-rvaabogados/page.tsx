import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Brygada_1918, Jost } from "next/font/google";
import { ArrowRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const brygada = Brygada_1918({ subsets: ["latin"], variable: "--s36-display" });
const jost = Jost({ subsets: ["latin"], variable: "--s36-body" });

export const metadata: Metadata = {
  title: "RVA Abogados",
  description: "Asesoría legal para compañías mexicanas y extranjeras. Transacciones domésticas y transfronterizas, litigio y asuntos regulatorios desde la Ciudad de México.",
};

const IMG = "/sitios/36-rvaabogados";
const SITE = "https://www.rvaabogados.com";
const FD = "font-[family-name:var(--s36-display)]";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = `${FD} text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.1] tracking-[-0.01em]`;

const NAV = [
  { label: "Equipo", href: "#equipo" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Clientes", href: "#clientes" },
  { label: "COVID-19", href: "#covid" },
];

const DESTACADAS = [
  ["Corporativo, Fusiones y Adquisiciones", "Gobierno corporativo, reestructuras, inversiones extranjeras, capitales de inversión, constitución y expansión de negocios, joint ventures y contratos comerciales."],
  ["Litigio Civil", "Casos complejos en juzgados locales y federales en toda la nación, ante agencias administrativas y paneles arbitrales internacionales."],
  ["Impuestos", "Asesoría fiscal nacional e internacional, desde los efectos fiscales de beneficios de empleados hasta reorganizaciones internacionales y venta de acciones, con litigantes fiscales expertos."],
  ["Energía y Minería", "Asesoramos a nuestros clientes para participar en las negociaciones derivadas de la reforma energética ante la Comisión Reguladora de Energía, la Secretaría de Energía, la Comisión Nacional de Hidrocarburos y Pemex."],
];

const TODAS = [
  ["Administrativo", "Arbitraje y Medios Alternativos", "Banca y Finanzas", "Cabildeo y Relaciones Gubernamentales", "Competencia Económica"],
  ["Comercio Internacional y Aduanal", "Contratos Gubernamentales", "Corporativo, Fusiones y Adquisiciones", "Cumplimiento Respecto Protección de Datos", "Energía y Minería"],
  ["Gobierno Corporativo y Cumplimiento", "Impuestos", "Precios de Transferencia", "Inmobiliario", "Litigio Civil"],
  ["Propiedad Intelectual y Tecnología", "Regulaciones Alimentos y Medicina", "Trabajo, Empleo y Migración", "Fintech"],
];

const SOCIOS = [
  {
    n: "Jorge E. Barrera Garibay",
    img: "team-jorge-barrera-bw.jpg",
    p: "Derecho societario, corporativo-transaccional, inversiones extranjeras, propiedad intelectual e industrial y migratorio.",
    tel: "+52 (55) 5242 0773",
    telHref: "tel:+525552420773",
    mail: "jorge.barrera@trva.com.mx",
  },
  {
    n: "Alfonso Oñate Laborde",
    img: "team-alfonso-onate-bw.jpg",
    p: "Consejero fundador del Consejo de la Judicatura Federal. Presidente de la Academia Mexicana de Protección de Datos Personales, A.C.",
    tel: "+52 (55) 5242 0771",
    telHref: "tel:+525552420771",
    mail: "alfonso.onate@trva.com.mx",
  },
  {
    n: "Raymundo Díaz Grajales",
    img: "team-raymundo-diaz-bw.jpg",
    p: "",
    tel: "+52 (55) 5242 0771",
    telHref: "tel:+525552420771",
    mail: "raymundo.diaz@trva.com.mx",
  },
];

const CLIENTES = [
  ["American Airlines", "Brightstar", "Central National", "Coeur Mexicana", "Electronic Arts", "Empacadora San Marcos"],
  ["Eurocopter México", "Grupo Herdez", "Hershey Foods Corp.", "H. Stern", "INTEL", "Kimberly Clark"],
  ["Kingston", "Konica Business Machines", "McDonald's", "MINSA", "Nutrisa", "Okidata"],
  ["Princess Cruises", "Satélites Mexicanos (SATMEX)", "SK Group", "Telefónica Ingeniería de Seguridad", "Visa International Service Association", "WestLB"],
];

const PUBLICACIONES = [
  ["22 de noviembre de 2023", "Registro de marca internacional ante el IMPI"],
  ["10 de noviembre de 2023", "Apoyo para las zonas afectadas por el huracán Otis"],
  ["19 de octubre de 2023", "Caen acciones de grupos aeroportuarios"],
  ["11 de octubre de 2023", "México apoya el nearshoring"],
];

const COVID = ["Resoluciones gubernamentales", "Autoridades jurisdiccionales", "Incentivos y apoyos", "Laboral", "Manual de buenas prácticas para la reapertura"];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="RVA Abogados, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="RVA Abogados" width={98} height={64} preload={!footer} className={footer ? "h-16 w-auto" : "h-[52px] w-auto lg:h-16"} />
    </a>
  );
}

export default function RVAAbogadosPage() {
  return (
    <div
      id="top"
      className={`${brygada.variable} ${jost.variable} bg-white font-[family-name:var(--s36-body)] text-[#2F2E2E] selection:bg-[#930F27] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(47,46,46,0.5)]"
        innerClassName={`${WRAP} flex h-[80px] items-center justify-between gap-10 lg:h-[104px] [&>nav]:ml-auto`}
        linkClassName="text-[15px] font-medium text-[#2F2E2E]"
        panelClassName="bg-white text-[#2F2E2E] font-[family-name:var(--s36-body)]"
        panelLinkClassName={`${FD} text-3xl`}
        burgerClassName="bg-[#2F2E2E]"
        actions={
          <a href="#contacto" className="press bg-[#930F27] px-6 py-3.5 text-[15px] font-medium text-white hover:bg-[#7A0C20]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 bottom-[120px] bg-[#930F27] md:bottom-[180px] lg:bottom-[250px]" />
          <div className={`${WRAP} pt-16 lg:pt-[104px]`}>
            <HeroIntro className="flex flex-col gap-7 pb-14 lg:pb-[72px]">
              <HeroItem as="h1" blur className={`${FD} max-w-[940px] text-[clamp(2.5rem,4.75vw,4.25rem)] leading-[1.07] tracking-[-0.015em] text-white`}>
                Asesoría legal para compañías mexicanas y extranjeras
              </HeroItem>
              <HeroItem as="p" className="max-w-[620px] text-lg leading-[1.55] text-white/85 md:text-xl md:leading-[30px]">
                Transacciones domésticas y transfronterizas, litigio y asuntos regulatorios desde la Ciudad de México.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-8 pt-3">
                <a href="#contacto" className="press bg-white px-7 py-4 text-base font-medium text-[#930F27] hover:bg-[#F6F3F1]">
                  Contáctanos
                </a>
                <a href="#areas" className="nudge flex items-center gap-2.5 text-base font-medium text-white">
                  Áreas de práctica
                  <ArrowRight size={18} />
                </a>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="relative h-[240px] overflow-hidden md:h-[360px] lg:h-[500px]" delay={0.3}>
              <Image src={`${IMG}/oficina.jpg`} alt="Vestíbulo de las oficinas de RVA Abogados con vitral y barandal de herrería" fill preload sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Credencial MSI */}
        <section aria-label="MSI Global Alliance">
          <Reveal className={`${WRAP} flex flex-col gap-6 pb-20 pt-12 md:flex-row md:items-center md:gap-12 lg:pb-[88px] lg:pt-14`}>
            <Image src={`${IMG}/msi-global-alliance.jpg`} alt="MSI Global Alliance, independent legal & accounting firms" width={196} height={110} className="h-[110px] w-[196px] shrink-0 object-contain" />
            <span aria-hidden="true" className="hidden h-[72px] w-px shrink-0 bg-[#C5C3C3] md:block" />
            <p className={`${FD} max-w-[760px] text-xl leading-[1.45] md:text-2xl md:leading-[34px]`}>
              Miembro de MSI Global Alliance, red internacional de firmas legales y contables independientes que afilia a más de 90 países.
            </p>
          </Reveal>
        </section>

        {/* Firma */}
        <section aria-labelledby="firma" className="bg-[#F6F3F1]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:gap-16 lg:py-[120px]`}>
            <div className="grid gap-10 lg:grid-cols-[520px_1fr] lg:gap-24">
              <Reveal className="flex flex-col gap-6">
                <h2 id="firma" className={H2}>
                  Rubio Villegas y Asociados
                </h2>
                <p className="max-w-[500px] text-lg leading-[29px] text-[#4F4D4D]">
                  RVA Abogados es un despacho con sede en la Ciudad de México que representa a compañías mexicanas y extranjeras ante juzgados, autoridades y en sus transacciones.
                </p>
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col gap-5 text-base leading-[26px] text-[#4F4D4D] lg:pt-3">
                <p>
                  Nuestra práctica corporativa y de fusiones y adquisiciones es una de las más activas del despacho: gobierno corporativo, reestructuras, inversiones extranjeras, capitales de inversión, joint ventures, contratos comerciales y transacciones del día a día.
                </p>
                <p>
                  Hemos encabezado algunas de las transacciones de fusiones y adquisiciones más importantes a nivel nacional en ingreso de inversión extranjera directa, asesorando a nuestros clientes en operaciones domésticas y transfronterizas.
                </p>
                <p>Nuestra práctica de litigio fiscal ha sido parte del despacho desde su fundación.</p>
              </Reveal>
            </div>
            <Reveal className="flex flex-col gap-5 border-t border-[#C5C3C3] pt-12">
              <p className="text-[15px] font-medium text-[#6B6A6A]">Industrias en las que hemos asesorado</p>
              <p className={`${FD} text-[clamp(1.375rem,2.1vw,1.875rem)] leading-[1.37]`}>
                Aerolíneas, aeropuertos, industria automotriz, bienes de consumo, electricidad, entretenimiento, alimentos, seguros y servicios financieros, marítimo, minería, farmacéutico, puertos, industria editorial, química, inmobiliaria, tecnología y software, telecomunicaciones.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-12 pb-20 pt-24 lg:grid-cols-[340px_1fr] lg:gap-20 lg:pb-24 lg:pt-32`}>
            <Reveal className="flex flex-col gap-6">
              <h2 className={H2}>Áreas de práctica</h2>
              <p className="max-w-[320px] text-[17px] leading-[27px] text-[#4F4D4D]">
                Nuestros abogados trabajan en forma conjunta con las demás prácticas del despacho para atender cada asunto en todas sus fases.
              </p>
            </Reveal>
            <Stagger className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:gap-y-14" gap={0.07}>
              {DESTACADAS.map(([t, d]) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t-2 border-[#930F27] pt-7">
                  <h3 className={`${FD} text-[26px] leading-[31px]`}>{t}</h3>
                  <p className="text-base leading-[26px] text-[#4F4D4D]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="bg-[#930F27] text-white">
            <div className={`${WRAP} flex flex-col gap-10 pb-20 pt-[72px]`}>
              <Reveal as="h3" className={`${FD} text-[32px] leading-[38px]`}>
                Todas nuestras áreas
              </Reveal>
              <Stagger className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
                {TODAS.map((col) => (
                  <StaggerItem key={col[0]} as="ul" className="flex flex-col gap-4">
                    {col.map((a) => (
                      <li key={a} className="text-[17px] leading-[23px]">
                        {a}
                      </li>
                    ))}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Equipo directivo */}
        <section id="equipo" className="scroll-mt-24 bg-[#F6F3F1]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:gap-14 lg:py-32`}>
            <Reveal as="h2" className={H2}>
              Equipo directivo
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[640px_1fr] lg:gap-[72px]">
              <article className="grid gap-7 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-9">
                <MediaReveal onView delay={0} className="relative aspect-[280/372] w-full max-w-[280px] overflow-hidden">
                  <Image src={`${IMG}/team-marcela-trujillo-bw.jpg`} alt="Marcela Trujillo Zepeda" fill sizes="280px" className="object-cover" />
                </MediaReveal>
                <Reveal delay={0.1} className="flex flex-col gap-3 pt-1">
                  <h3 className={`${FD} text-[30px] leading-[35px]`}>Marcela Trujillo Zepeda</h3>
                  <p className="text-[15px] font-medium leading-[23px] text-[#930F27]">Socia Administradora</p>
                  <p className="text-base leading-[26px] text-[#4F4D4D]">
                    Se unió a Rubio Villegas y Asociados en 1992 y se volvió socia tres años después. Encabeza las áreas de derecho corporativo e inmobiliario: fusiones y adquisiciones, inversiones extranjeras, gobierno corporativo y derecho bancario.
                  </p>
                  <div className="flex flex-col gap-1 pt-2 text-[15px] leading-[23px]">
                    <a href="tel:+525552420771" className="link-u w-fit">
                      +52 (55) 5242 0771
                    </a>
                    <a href="mailto:marcela.trujillo@trva.com.mx" className="link-u w-fit text-[#930F27]">
                      marcela.trujillo@trva.com.mx
                    </a>
                  </div>
                </Reveal>
              </article>
              <Stagger className="flex flex-col gap-10" gap={0.08}>
                {SOCIOS.map((s) => (
                  <StaggerItem key={s.n} as="article" className="flex gap-5 sm:gap-7">
                    <div className="relative h-[136px] w-[112px] shrink-0 overflow-hidden">
                      <Image src={`${IMG}/${s.img}`} alt={s.n} fill sizes="112px" className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-col gap-2">
                      <h3 className={`${FD} text-[22px] leading-[26px]`}>{s.n}</h3>
                      {s.p && <p className="text-[15px] leading-[23px] text-[#4F4D4D]">{s.p}</p>}
                      <div className="flex flex-wrap gap-x-5 gap-y-1 pt-0.5 text-[15px] leading-[23px]">
                        <a href={s.telHref} className="link-u">
                          {s.tel}
                        </a>
                        <a href={`mailto:${s.mail}`} className="link-u break-all text-[#930F27]">
                          {s.mail}
                        </a>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-3.5">
              <h2 className={H2}>Clientes representativos</h2>
              <p className="text-base leading-6 text-[#6B6A6A]">Selección publicada en el perfil de Marcela Trujillo Zepeda, socia administradora.</p>
            </Reveal>
            <Stagger className="grid gap-x-10 gap-y-[18px] border-t border-[#C5C3C3] pt-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
              {CLIENTES.map((col) => (
                <StaggerItem key={col[0]} as="ul" className="flex flex-col gap-[18px]">
                  {col.map((c) => (
                    <li key={c} className={`${FD} text-[21px] leading-[27px]`}>
                      {c}
                    </li>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Publicaciones */}
        <section id="publicaciones" className="scroll-mt-24 bg-[#2F2E2E] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_340px] lg:gap-20 lg:py-[120px]`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <h2 className={H2}>Publicaciones</h2>
                <a href={`${SITE}/copia-de-publicaciones-3`} className="nudge flex w-fit items-center gap-2.5 text-base font-medium sm:pb-2">
                  Ver todas las publicaciones
                  <ArrowRight size={18} />
                </a>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-9" gap={0.07}>
                {PUBLICACIONES.map(([f, t]) => (
                  <StaggerItem key={t} as="li" className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-10">
                    <p className="text-[15px] leading-[29px] text-white/70">{f}</p>
                    <p className={`${FD} text-[clamp(1.375rem,1.9vw,1.625rem)] leading-[1.27]`}>{t}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal id="covid" delay={0.1} className="flex scroll-mt-24 flex-col gap-5 self-start bg-[#930F27] p-8 md:p-9">
              <h2 className={`${FD} text-[30px] leading-[45px]`}>COVID-19</h2>
              <p className="text-[15px] leading-[23px] text-white/85">Boletines, decretos y memorándums del despacho sobre la emergencia sanitaria.</p>
              <ul className="flex flex-col gap-3 pt-2">
                {COVID.map((c) => (
                  <li key={c}>
                    <a href={`${SITE}/covid-19`} className="link-u text-base font-medium leading-[22px]">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[440px_1fr] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-9">
              <Reveal as="h2" className={H2}>
                Contáctanos
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-9" gap={0.07}>
                <ContactItem Icon={MapPin} label="Oficina">
                  Río Duero 31, Col. Cuauhtémoc
                  <br />
                  Alcaldía Cuauhtémoc, C.P. 06500
                  <br />
                  Ciudad de México
                </ContactItem>
                <ContactItem Icon={Phone} label="Teléfono">
                  <a href="tel:+525552420771" className="link-u">
                    +52 (55) 5242 0771
                  </a>
                </ContactItem>
                <ContactItem Icon={EnvelopeSimple} label="Correo para aviso de pagos">
                  <a href="mailto:mexico@trva.com.mx" className="link-u">
                    mexico@trva.com.mx
                  </a>
                </ContactItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-[#F6F3F1] p-6 md:p-12" noteClassName="text-sm text-[#4F4D4D]">
                <h3 className={`${FD} text-[28px] leading-[42px]`}>Envíanos un mensaje</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre *" name="nombre" autoComplete="name" required />
                  <Field label="Email *" name="email" type="email" autoComplete="email" required />
                </div>
                <Field label="Asunto" name="asunto" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    className="h-[140px] resize-none border border-[#C5C3C3] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#930F27] focus:shadow-[0_0_0_3px_rgba(147,15,39,0.12)]"
                  />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a href={`${SITE}/aviso-de-privacidad`} className="link-u text-sm text-[#6B6A6A]">
                    Aviso de Privacidad
                  </a>
                  <button type="submit" className="press bg-[#930F27] px-10 py-[15px] text-base font-medium text-white hover:bg-[#7A0C20]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C5C3C3]">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-12`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo footer />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] leading-[23px]">
                {[
                  { label: "Inicio", href: "#top" },
                  { label: "Equipo", href: "#equipo" },
                  { label: "Publicaciones", href: "#publicaciones" },
                  { label: "Clientes", href: "#clientes" },
                  { label: "Áreas de práctica", href: "#areas" },
                  { label: "Contacto", href: "#contacto" },
                  { label: "COVID-19", href: "#covid" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#C5C3C3] pt-6 text-sm leading-[21px] text-[#6B6A6A] md:flex-row md:justify-between">
            <p>© RVA Abogados. Río Duero 31, Col. Cuauhtémoc, Ciudad de México.</p>
            <a href={`${SITE}/aviso-de-privacidad`} className="link-u w-fit">
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactItem({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem as="li" className="flex gap-4">
      <Icon size={22} className="mt-0.5 shrink-0 text-[#930F27]" />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium leading-[21px] text-[#6B6A6A]">{label}</p>
        <p className="text-[17px] leading-[26px]">{children}</p>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete, required }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium leading-[21px]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-[50px] border border-[#C5C3C3] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#930F27] focus:shadow-[0_0_0_3px_rgba(147,15,39,0.12)]"
      />
    </label>
  );
}
