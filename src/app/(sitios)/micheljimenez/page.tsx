import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Figtree, Marcellus } from "next/font/google";
import { ArrowRight, BookmarkSimple, Buildings, MapPin, Quotes } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Marcellus({ subsets: ["latin"], weight: "400", variable: "--s58-display" });
const body = Figtree({ subsets: ["latin"], variable: "--s58-body" });

export const metadata: Metadata = {
  title: "Michel Jiménez Abogados",
  description: "Dedicados a deliberar la excelencia. Nos ocupamos de desarrollar adecuadas estrategias de litigio. Representación en Ciudad de México y Guadalajara.",
};

const IMG = "/sitios/micheljimenez";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const D = "font-[family-name:var(--s58-display)]";
const H2 = `${D} text-[clamp(2.5rem,3.75vw,3.375rem)] leading-[1.24] tracking-[-0.5px] text-[#004142]`;
const LINK = "nudge inline-flex w-fit items-center gap-3 border-b-2 border-[#E49E63] pb-1.5 text-sm font-bold tracking-[1.4px] text-[#004142] transition-colors duration-200 hover:text-[#005C5D]";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Despacho", href: "#despacho" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const CREDENCIALES = [
  ["Especialistas en", "Asesoría y gestión corporativa"],
  ["Representación en", "Ciudad de México y Guadalajara"],
  ["Litigio ante", "Tribunales del fuero local y federal"],
];

const MATERIAS = ["Civil", "Mercantil", "Familiar", "Constitucional y Amparo", "Administrativo", "Propiedad Intelectual", "Licitaciones", "Seguros y Fianzas"];

const SOCIOS = [
  {
    nombre: "Óscar Michel Márquez",
    bio: "Licenciado y Maestro en Derecho por la Universidad Panamericana, Campus Guadalajara, con posgrados en Derecho Constitucional y Amparo y en Derecho Administrativo. Ha sido profesor adjunto de Derecho Fiscal y Estrategias Fiscales en la misma universidad y ha formado parte de grandes despachos reconocidos a nivel nacional.",
    preparacion: [
      "Law Management Program, Universidad de Yale",
      "Program on Negotiation, Harvard Law School (2019)",
      "Procedimientos frente a la Corte Interamericana de Derechos Humanos, Latin American Bar Association, Washington, D.C.",
    ],
    colegios: ["Barra Mexicana de Abogados, desde 2013", "Asociación Nacional de Abogados de Empresa (ANADE), desde 2017"],
  },
  {
    nombre: "Adrián Jiménez Navarro",
    bio: "Licenciado por el ITESM, Campus Guadalajara, graduado con excelencia académica, y Maestro por la Universidad Panamericana, Campus Ciudad de México. Especialista en Amparo. Inició su carrera en el Tribunal de Justicia Administrativa, región Occidente, y después formó parte de una prestigiada firma de abogados.",
    preparacion: [
      "Diplomado en Justicia Alternativa, Instituto de Estudios Jurídicos de Jalisco",
      "Diplomado en Metodología de las audiencias en el sistema penal acusatorio, Instituto de Investigaciones Jurídicas de la UNAM",
      "Cursos de derechos humanos, negociación, litigación oral y argumentación jurídica, Centro de Estudios Jurídicos Carbonell",
    ],
    colegios: ["Asociación Nacional de Abogados de Empresa (ANADE), desde 2017"],
  },
];

const VALORES = [
  ["Responsabilidad", "Nos comprometemos con todos los objetivos fijados para alcanzar el éxito en cada uno de nuestros proyectos."],
  ["Honestidad", "Contamos con un equipo de trabajo altamente calificado, para brindar a cada cliente seguridad y confianza."],
  ["Lealtad", "Acompañamos a nuestros clientes en todo el proceso legal, enfocando nuestros esfuerzos en defender sus intereses y patrimonio."],
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="block" aria-label="Michel Jiménez Abogados, inicio">
      <Image
        src={`${IMG}/dl-footer-logotipo.png`}
        alt=""
        width={103}
        height={145}
        preload={!footer}
        className={
          footer
            ? "h-auto w-[86px] md:w-[103px]"
            : "mj-logo h-auto w-[50px] origin-left transition-transform duration-300 ease-[var(--ease-out)] lg:w-[82px]"
        }
      />
    </a>
  );
}

function Pipe() {
  return <span className="mx-[5px]">|</span>;
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className={`${D} text-[21px] leading-[1.24] text-[#005C5D]`}>{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[15px] leading-[23px] text-[#363936]">
            <span aria-hidden="true" className="mt-[11px] h-[2px] w-3.5 shrink-0 bg-[#E49E63]" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MichelJimenezPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s58-body)] text-[#363936] selection:bg-[#E49E63] selection:text-[#004142]`}
    >
      <SiteNav
        overlay
        logo={<Logo />}
        links={NAV}
        className="[&_nav_li:first-child_a]:text-[#E49E63]"
        scrolledClassName="bg-[#004142] shadow-[0_12px_32px_-22px_rgba(0,0,0,0.7)] lg:[&>div:first-of-type]:h-[96px] lg:[&>div:first-of-type]:pt-0 lg:[&_.mj-logo]:scale-[0.62]"
        innerClassName={`${WRAP} flex h-[88px] items-center gap-8 lg:h-[151px] lg:pt-9 lg:transition-[height,padding-top] lg:duration-300 lg:ease-[var(--ease-out)] xl:gap-11 [&>button]:ml-auto [&>nav]:ml-auto [&_nav_ul]:gap-9`}
        linkClassName="text-sm font-semibold uppercase tracking-[1.6px] text-white"
        panelClassName="bg-[#004142] text-white font-[family-name:var(--s58-body)]"
        panelLinkClassName={`${D} text-[28px]`}
        burgerClassName="bg-white"
        actions={
          <span className="flex items-center gap-8 max-lg:flex-col max-lg:items-start max-lg:gap-6 xl:gap-11">
            <span className="text-[13px] font-semibold tracking-[1.6px] text-[#9DC3C2] lg:max-xl:hidden">
              CDMX <Pipe /> GDL
            </span>
            <a href="#contacto" className="press bg-[#E49E63] px-[22px] py-3.5 text-[13px] font-bold tracking-[1.4px] text-[#004142] hover:bg-[#EDB283]">
              SOLICITAR ASESORÍA
            </a>
          </span>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#00292A]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={50}>
            <Image src={`${IMG}/idx-bg-header-01.jpg`} alt="" fill preload sizes="100vw" className="object-cover object-center" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#00292A80]" />
          <HeroIntro className="flex flex-col">
            <div className={`${WRAP} flex flex-col gap-[30px] pb-20 pt-[168px] md:pt-[200px] lg:pb-[120px] lg:pt-[301px]`}>
              <HeroItem as="h1" blur className={`${D} text-[clamp(2.75rem,6.12vw,5.5rem)] leading-[1.03] tracking-[-1px] text-white`}>
                Dedicados a deliberar <br className="max-md:hidden" />
                la excelencia
              </HeroItem>
              <HeroItem as="p" className="text-[clamp(1.0625rem,1.46vw,1.3125rem)] leading-[1.52] text-[#D3E3E2]">
                Nos ocupamos de desarrollar adecuadas estrategias de litigio.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-4 pt-3.5">
                <a href="#contacto" className="press nudge flex items-center gap-3 bg-[#E49E63] px-[30px] py-[19px] text-sm font-bold tracking-[1.4px] text-[#004142] hover:bg-[#EDB283]">
                  SOLICITAR ASESORÍA
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
                <a href="#despacho" className="press px-[29px] py-[18px] text-sm font-semibold tracking-[1.4px] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] hover:bg-white/10">
                  CONOCE EL DESPACHO
                </a>
              </HeroItem>
            </div>
            <HeroItem className="border-t border-white/15">
              <div className={`${WRAP} grid gap-7 py-9 md:grid-cols-3 md:gap-12 lg:pb-11`}>
                {CREDENCIALES.map(([a, b]) => (
                  <div key={a} className="flex flex-col gap-2">
                    <p className="text-[15px] leading-[1.2] text-[#9DC3C2]">{a}</p>
                    <p className={`${D} text-[clamp(1.375rem,1.75vw,1.5625rem)] leading-tight text-white xl:whitespace-nowrap`}>{b}</p>
                  </div>
                ))}
              </div>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Nuestro despacho */}
        <section id="despacho" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-[100px] lg:pb-[140px] lg:pt-[150px]`}>
            <div className="flex flex-col">
              <Reveal as="h2" className={H2}>
                Nuestro despacho
              </Reveal>
              <Reveal as="p" delay={0.08} className={`${D} mt-7 text-[clamp(1.375rem,1.8vw,1.625rem)] leading-[1.385] text-[#005C5D]`}>
                Una firma que nace como reto y proyecto personal de los socios fundadores, Óscar Michel Márquez y Adrián Jiménez Navarro, con el objetivo de aportar estrategias vanguardistas e innovadoras.
              </Reveal>
              <Reveal delay={0.14} className="mt-7 flex flex-col text-[17px] leading-[1.7] md:text-lg md:leading-[30px]">
                <p>
                  Ofrecemos servicios legales de excelencia, combinando la juventud con la amplia experiencia y compromiso de nuestro equipo en Derecho Civil y Familiar, Mercantil, Constitucional y Amparo, Administrativo, Licitaciones, Seguros y Fianzas.
                </p>
                <p className="mt-[18px]">
                  Nuestra prioridad son nuestros clientes: en Michel Jiménez nos volveremos especialistas en tu caso, siempre privilegiando la constancia y el trato personalizado de nuestros integrantes.
                </p>
                <a href="#socios" className={`${LINK} mt-10`}>
                  CONOCE EL DESPACHO
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </Reveal>
            </div>
            <MediaReveal onView delay={0} className="relative aspect-[520/620] w-full overflow-hidden bg-[#004142] lg:aspect-auto lg:h-[620px]">
              <Image src={`${IMG}/dl-despacho-bg-header-01.jpg`} alt="Edificio de oficinas visto desde abajo" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover object-center" />
            </MediaReveal>
          </div>
        </section>

        {/* Lema */}
        <section aria-label="Lema" className="relative isolate overflow-hidden bg-[#004142]">
          <Image src={`${IMG}/dl-servicios-bg-header-01.jpg`} alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#004142D9]" />
          <Reveal className="mx-auto flex max-w-[1080px] flex-col items-center gap-7 px-5 py-24 text-center md:px-8 lg:py-[130px]">
            <Quotes className="h-10 w-10 text-[#E49E63]" />
            <blockquote className={`${D} text-[clamp(1.875rem,3.47vw,3.125rem)] leading-[1.2] text-white`}>
              Protegemos sus intereses, propiedades, <br className="max-md:hidden" />
              negocios y derechos
            </blockquote>
          </Reveal>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#ECEDEC]">
          <div className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16 xl:grid-cols-[470px_minmax(0,1fr)] xl:gap-[100px] lg:py-[130px]`}>
            <Reveal className="flex flex-col gap-6 text-[17px] leading-[1.7] md:text-lg md:leading-[30px]">
              <h2 className={H2}>Servicios</h2>
              <p>Brindamos representación y defensa a nuestros clientes en diversos juicios ante Tribunales Judiciales del fuero Local y Federal, en todas sus instancias.</p>
              <p>También representamos a nuestros clientes en procedimientos administrativos, recursos de inconformidad e impugnación de actos de autoridad ante dependencias de gobierno.</p>
              <a href="#materias" className={LINK}>
                VER SERVICIOS
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </Reveal>
            <div id="materias" className="scroll-mt-28 bg-white px-6 py-9 md:px-12 md:py-11">
              <Reveal as="h3" className={`${D} text-[clamp(1.625rem,2.1vw,1.875rem)] leading-[1.24] text-[#005C5D]`}>
                Litigio en materias
              </Reveal>
              <Stagger as="ul" gap={0.05} className="mt-7 grid gap-x-10 gap-y-[22px] sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
                {MATERIAS.map((m) => (
                  <StaggerItem key={m} as="li" className="flex items-center gap-3.5">
                    <BookmarkSimple className="h-[18px] w-[18px] shrink-0 text-[#C77A3C]" />
                    <span className="text-lg font-semibold leading-[1.2] text-[#004142] md:text-[19px]">{m}</span>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal as="p" delay={0.1} className="mt-9 text-base leading-[26px]">
                Una de nuestras principales áreas de especialización es el Derecho Privado, en particular civil, mercantil y familiar: planeación, implementación y defensa de asuntos patrimoniales, familiares y de negocio ante Tribunales Federales y Locales de toda la República.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Dirigido por */}
        <section id="socios" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} py-24 lg:py-[140px]`}>
            <Reveal as="h2" className={H2}>
              Dirigido por
            </Reveal>
            <Stagger gap={0.1} className="mt-12 grid gap-16 lg:mt-16 lg:grid-cols-2 lg:gap-20">
              {SOCIOS.map((s) => (
                <StaggerItem key={s.nombre} as="article" className="flex flex-col border-t-2 border-[#005C5D] pt-9">
                  <h3 className={`${D} text-[clamp(1.875rem,2.5vw,2.25rem)] leading-tight text-[#004142]`}>{s.nombre}</h3>
                  <p className="mt-2 text-base font-semibold leading-[1.2] text-[#A8622A]">Abogado y socio fundador</p>
                  <p className="mt-[22px] text-base leading-[26px]">{s.bio}</p>
                  <div className="mt-[30px] flex flex-col gap-[30px]">
                    <List title="Preparación" items={s.preparacion} />
                    <List title="Colegios" items={s.colegios} />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Visión, misión y valores */}
        <section id="filosofia" aria-label="Visión, misión y valores" className="scroll-mt-24 bg-[#005C5D]">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-[110px] lg:py-[130px]`}>
            <Stagger gap={0.08} className="flex flex-col gap-12">
              {[
                ["Visión", "Ser una de las firmas más reconocidas en México, por la excelencia en nuestra prestación de servicios debido a la implementación de buenas prácticas comerciales y ética profesional, acordes a los nuevos retos tecnológicos y sociales."],
                ["Misión", "Presentar estrategias legales personalizadas para cubrir las necesidades de nuestros clientes, en busca de superar sus expectativas y, con ello, ganar su lealtad y confianza."],
              ].map(([h, p]) => (
                <StaggerItem key={h} className="flex flex-col gap-4">
                  <h2 className={`${D} text-[clamp(2.125rem,2.8vw,2.5rem)] leading-[1.24] text-white`}>{h}</h2>
                  <p className="text-[17px] leading-[1.7] text-[#D7E6E5] md:text-lg md:leading-[30px]">{p}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="bg-[#004142] px-6 py-10 md:px-12 md:py-11">
              <Reveal>
                <h2 className={`${D} text-[clamp(2.125rem,2.8vw,2.5rem)] leading-[1.24] text-white`}>Valores</h2>
                <p className="mt-3.5 text-[17px] leading-[27px] text-[#C3D8D7]">Estos principios rigen nuestra forma de vida, tanto en lo personal como en el ámbito laboral.</p>
              </Reveal>
              <Stagger as="dl" gap={0.08} delay={0.1} className="mt-9 flex flex-col gap-[30px]">
                {VALORES.map(([h, p]) => (
                  <StaggerItem key={h} className="grid gap-2 sm:grid-cols-[190px_1fr] sm:gap-7">
                    <dt className={`${D} text-[23px] leading-[1.24] text-[#E49E63]`}>{h}</dt>
                    <dd className="text-base leading-[26px] text-[#E3EEEE]">{p}</dd>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#ECEDEC]">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)] lg:gap-14 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-20 lg:py-[130px]`}>
            <MediaReveal onView delay={0} className="relative min-h-[380px] overflow-hidden bg-[#9DB4B8] md:min-h-[520px] lg:min-h-0">
              <Image src={`${IMG}/dl-contacto-bg-01.jpg`} alt="Fachada del Museo Soumaya, Polanco" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover object-center" />
            </MediaReveal>
            <div className="flex flex-col">
              <Reveal as="h2" className={H2}>
                Asesoría personal
              </Reveal>
              <Reveal as="p" delay={0.06} className="mt-[18px] text-lg leading-[30px] md:text-[19px]">
                Estamos preparados para ser su aliado y representarlo ahora mismo.
              </Reveal>
              <Stagger gap={0.07} delay={0.08} className="mt-9 flex flex-col gap-6 sm:flex-row sm:gap-12">
                <StaggerItem className="flex gap-3.5">
                  <MapPin className="h-[22px] w-[22px] shrink-0 text-[#005C5D]" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-semibold leading-[1.2] text-[#005C5D]">Oficina Ciudad de México</p>
                    <address className="text-base not-italic leading-[25px]">
                      Calle Galileo No. 31 Int. 302, Polanco, <br className="max-sm:hidden" />
                      Alcaldía Miguel Hidalgo, C.P. 11560, CDMX
                    </address>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-3.5">
                  <Buildings className="h-[22px] w-[22px] shrink-0 text-[#005C5D]" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-semibold leading-[1.2] text-[#005C5D]">Representación en</p>
                    <p className="text-base leading-[25px]">Ciudad de México <Pipe /> Guadalajara</p>
                  </div>
                </StaggerItem>
              </Stagger>
              <Reveal delay={0.12} className="mt-10">
                <DemoForm className="flex flex-col gap-[22px] bg-white p-6 md:p-10" noteClassName="text-sm text-[#005C5D]">
                  <div className="grid gap-[22px] sm:grid-cols-2 sm:gap-6">
                    <Field label="Nombre(s)" name="nombre" autoComplete="given-name" />
                    <Field label="Apellidos" name="apellidos" autoComplete="family-name" />
                  </div>
                  <div className="grid gap-[22px] sm:grid-cols-2 sm:gap-6">
                    <Field label="Número telefónico" name="telefono" type="tel" autoComplete="tel" placeholder="Ej. 52 5500000000" />
                    <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                  </div>
                  <label className="flex flex-col gap-2.5">
                    <span className="text-sm font-semibold leading-[1.2] text-[#004142]">Mensaje</span>
                    <textarea name="mensaje" rows={4} className={`${FIELD} h-[109px] resize-y py-3`} />
                  </label>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1.5">
                    <span className="text-sm">Aviso de privacidad</span>
                    <button type="submit" className="press nudge flex items-center gap-3 bg-[#004142] px-7 py-[18px] text-sm font-bold tracking-[1.4px] text-white hover:bg-[#005C5D]">
                      SOLICITAR ASESORÍA
                      <ArrowRight className="h-[18px] w-[18px] text-[#E49E63]" />
                    </button>
                  </div>
                </DemoForm>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#004142]">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10 lg:pt-[72px]`}>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-[72px]">
            <Logo footer />
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-base leading-[26px] text-[#D0E0DF]">Calle Galileo No. 31 Int. 302, Polanco, Alcaldía Miguel Hidalgo, C.P. 11560, CDMX</p>
              <p className="text-sm font-bold tracking-[1.6px] text-[#E49E63]">CDMX <Pipe /> GUADALAJARA</p>
            </div>
            <nav aria-label="Pie de página" className="md:w-[220px]">
              <ul className="flex flex-col gap-3.5">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u text-[15px] text-[#D0E0DF]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/12 pt-[26px] text-sm text-[#A9C3C2] sm:flex-row sm:justify-between">
            <p>© 2026 Michel Jiménez, Abogados. Derechos reservados.{" "}<HemeronCredit /></p>
            <p>Aviso de privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "w-full border-0 border-b-[1.5px] border-[#B9C9C8] bg-[#F6F7F6] px-3.5 text-[15px] text-[#363936] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#6B706B] focus:border-[#005C5D] focus:shadow-[0_1.5px_0_0_#005C5D]";

function Field({ label, name, type = "text", autoComplete, placeholder }: { label: string; name: string; type?: string; autoComplete?: string; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-2.5">
      <span className="text-sm font-semibold leading-[1.2] text-[#004142]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} placeholder={placeholder} className={`${FIELD} h-[49px]`} />
    </label>
  );
}
