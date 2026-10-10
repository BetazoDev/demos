import type { Metadata } from "next";
import Image from "next/image";
import { Epilogue, Libre_Baskerville } from "next/font/google";
import { ArrowRight, ArrowUpRight, LinkedinLogo, MapPin } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Libre_Baskerville({ subsets: ["latin"], variable: "--s40-display" });
const body = Epilogue({ subsets: ["latin"], variable: "--s40-body" });

export const metadata: Metadata = {
  title: "PDeA Abogados",
  description: "Somos una firma mexicana que asesora y representa a empresas, inversionistas y personas en asuntos legales de alta complejidad.",
};

const IMG = "/sitios/40-pdea";
const LINKEDIN = "https://www.linkedin.com/company/pdea-abogados/";

const NAV = [
  { label: "Equipo", href: "#equipo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Nosotros", href: "#nosotros" },
];

const PILLARS = [
  { t: "Estudio constante", d: "Seguimos de cerca la evolución de la legislación, los criterios judiciales y la actuación de las autoridades para incorporar ese conocimiento a los asuntos de nuestros clientes." },
  { t: "Atención directa", d: "Los socios participan directamente en el análisis y conducción de los asuntos, manteniendo una relación cercana con el cliente." },
  { t: "Estrategias a la medida", d: "Cada asunto plantea retos distintos. Trabajamos en crear propuestas novedosas que beneficien a nuestros clientes, atendiendo a sus necesidades." },
  { t: "Trabajo colaborativo", d: "Sumamos conocimientos y experiencias dentro del despacho e integramos la participación de otros especialistas cuando el asunto lo requiere." },
];

const BASE_AREAS = ["Controversias fiscales", "Controversias en derecho administrativo", "Asesoría fiscal", "Asesoría en derecho administrativo"];

const OTHER_AREAS = [
  [
    "Bancario y financiero",
    "Comercio exterior y aduanas",
    "Competencia económica",
    "Concursos mercantiles",
    "Constitucional y amparo",
    "Cumplimiento regulatorio",
    "Estructuración de inversiones",
  ],
  [
    "Fusiones y adquisiciones",
    "Gestión gubernamental",
    "Mediación y arbitraje",
    "Penal económico y empresarial",
    "Prevención de lavado de dinero",
    "Seguridad social",
    "Subcontratación especializada",
  ],
];

const FOUNDERS = [
  { n: "Luis Pérez de Acha", r: "Socio Fundador", src: "luis-perez-de-acha.jpg" },
  { n: "Antonio Ibarra de Rueda", r: "Socio Director", src: "antonio-ibarra-de-rueda.jpg" },
];

const PARTNERS = [
  { n: "Julio Amavizca Espinoza", r: "Socio", src: "julio-amavizca.jpg" },
  { n: "José Eduardo González Platas", r: "Socio", src: "jose-eduardo-gonzalez.jpg" },
  { n: "José Pablo Coffin Robles", r: "Socio", src: "jose-pablo-coffin.jpg" },
  { n: "Oscar R. Robledo Mendoza", r: "Socio", src: "oscar-robledo.jpg" },
  { n: "Denise Tron Zuccher", r: "Socia", src: "denise-tron.jpg" },
  { n: "Santiago Vélez Suberbie", r: "Socio", src: "santiago-velez.jpg" },
];

const PUBLICATIONS = [
  { t: "Conocer a tus verdaderos padres ¿es un derecho?", m: "Blog · 2 de octubre de 2026" },
  { t: "Avisos e informes | Guía PLD", m: "Artículo · 1 de octubre de 2026" },
  { t: "Materialidad de las operaciones y marcas digitales", m: "Blog · 25 de septiembre de 2026" },
  { t: "Bloqueo de cuentas por la UIF y acuerdo arbitral", m: "Blog · 21 de septiembre de 2026" },
];

const SLATE_BTN = "press inline-flex bg-[#343E47] font-medium text-white hover:bg-[#46525D]";
const PAD = "px-5 md:px-8 xl:px-0";

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="PDeA Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo.png`}
        alt="PDeA, Pérez de Acha Ibarra de Rueda"
        width={footer ? 236 : 264}
        height={footer ? 34 : 38}
        preload={!footer}
        className={footer ? "h-auto w-[236px]" : "h-auto w-[210px] sm:w-[264px]"}
      />
    </a>
  );
}

function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="nudge flex w-fit items-center gap-2.5 text-base font-medium text-[#343E47]"
    >
      {children}
      <ArrowRight size={18} className="text-[#F32836]" />
    </a>
  );
}

export default function PdeaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s40-body)] text-[#343E47] selection:bg-[#F32836] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(52,62,71,0.45)]"
        innerClassName="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between gap-10 px-5 md:px-8 lg:h-[96px] xl:px-0 [&>div:first-child]:mr-auto"
        linkClassName="text-[15px] text-[#343E47]"
        panelClassName="bg-white text-[#343E47] font-[family-name:var(--s40-body)]"
        panelLinkClassName="font-[family-name:var(--s40-display)] text-3xl"
        burgerClassName="bg-[#343E47]"
        actions={
          <>
            <span className="text-sm font-semibold tracking-[1px]" lang="en">
              EN
            </span>
            <a href="#contacto" className={`${SLATE_BTN} px-6 py-3.5 text-[15px] lg:ml-5`}>
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="flex flex-col gap-14 pt-16 lg:gap-16 lg:pt-[88px]">
          <HeroIntro className={`mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 ${PAD}`}>
            <HeroItem as="h1" blur className="font-[family-name:var(--s40-display)] text-[clamp(2.25rem,4.03vw,3.625rem)] leading-[1.17] tracking-[-1px]">
              Experiencia jurídica, atención directa <br className="hidden xl:block" />
              y estrategias a la medida.
            </HeroItem>
            <div className="flex flex-col items-start gap-9">
              <HeroItem as="p" className="max-w-[620px] text-[19px] leading-[30px] text-[#343E47]/85">
                Somos una firma mexicana que asesora y representa a empresas, inversionistas y personas en asuntos legales de alta complejidad.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#contacto" className={`${SLATE_BTN} px-[30px] py-[18px] text-base`}>
                  Contáctanos
                </a>
                <ArrowLink href="#servicios">Áreas de práctica</ArrowLink>
              </HeroItem>
            </div>
          </HeroIntro>
          <div className="relative h-[440px] md:h-[520px] lg:h-[560px]">
            <MediaReveal className="absolute inset-0 overflow-hidden" delay={0.3}>
              <Image
                src={`${IMG}/hero.jpg`}
                alt="Vista aérea de la glorieta del Ángel de la Independencia sobre Paseo de la Reforma"
                fill
                preload
                sizes="100vw"
                className="object-cover"
              />
            </MediaReveal>
            <Reveal className="absolute bottom-0 left-5 right-5 flex flex-col justify-center bg-[#F32836] px-7 py-8 sm:right-auto sm:w-[420px] md:left-8 md:h-[192px] md:px-10 xl:left-[calc((100%-1200px)/2)]">
              <p className="font-[family-name:var(--s40-display)] text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.29] text-white">
                Nos respaldan más de <CountUp value="30" className="tabular-nums" /> años de experiencia.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Detrás de cada estrategia */}
        <section aria-labelledby="estrategia" className="bg-[#343E47] text-white">
          <div className={`mx-auto grid max-w-[1200px] gap-12 py-24 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-14 xl:grid-cols-[360px_1fr] xl:gap-20 lg:pb-32 lg:pt-[120px] ${PAD}`}>
            <Reveal as="h2" id="estrategia" className="font-[family-name:var(--s40-display)] text-[clamp(2rem,2.9vw,2.625rem)] leading-[1.19]">
              Detrás de cada estrategia
            </Reveal>
            <Stagger className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:gap-y-14" gap={0.07}>
              {PILLARS.map(({ t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-4 border-t-2 border-[#F32836] pt-7">
                  <h3 className="font-[family-name:var(--s40-display)] text-2xl">{t}</h3>
                  <p className="text-base leading-[26px] text-white/[0.78]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="servicios" className={`mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-14 py-24 lg:pb-32 lg:pt-[120px] ${PAD}`}>
          <Reveal as="h2" className="font-[family-name:var(--s40-display)] text-[clamp(2.25rem,3.35vw,3rem)] leading-[1.1]">
            Áreas de práctica
          </Reveal>
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-12 xl:grid-cols-[500px_1fr] xl:gap-[72px]">
            <Reveal className="flex flex-col gap-7 border-t-[3px] border-[#F32836] bg-[#F4F4F4] p-7 pb-9 md:p-10 md:pb-11">
              <p className="text-base leading-[26px]">
                Nuestra práctica tiene una sólida base en materia fiscal y administrativa, desarrollada especialmente a través de la atención de asuntos litigiosos.
              </p>
              <ul className="flex flex-col gap-[18px]">
                {BASE_AREAS.map((a) => (
                  <li key={a} className="font-[family-name:var(--s40-display)] text-[clamp(1.25rem,1.6vw,1.4375rem)] leading-[1.3]">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="flex flex-col gap-8 lg:pt-2">
              <Reveal as="p" delay={0.08} className="text-[17px] leading-7 text-[#343E47]/85">
                A partir de esa experiencia hemos ampliado nuestras capacidades hacia otras áreas relacionadas con las necesidades de nuestros clientes.
              </Reveal>
              <Stagger className="grid gap-x-10 gap-y-[18px] sm:grid-cols-2" gap={0.04} delay={0.1}>
                {OTHER_AREAS.map((col, i) => (
                  <ul key={i} className="flex flex-col gap-[18px]">
                    {col.map((a) => (
                      <StaggerItem key={a} as="li" y={10} className="text-[17px] font-medium">
                        {a}
                      </StaggerItem>
                    ))}
                  </ul>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="grid scroll-mt-24 bg-[#F4F4F4] lg:grid-cols-[43%_1fr]">
          <MediaReveal onView delay={0} className="relative h-[380px] overflow-hidden md:h-[520px] lg:h-auto lg:min-h-[836px]">
            <Image src={`${IMG}/oficinas-terraza.jpg`} alt="Terraza de las oficinas de PDeA en Torre Reforma" fill sizes="(min-width: 1024px) 43vw, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-7 px-5 py-20 md:px-8 lg:py-[120px] lg:pb-32 lg:pl-16 lg:pr-[max(2rem,calc((100vw-1200px)/2))] xl:pl-[88px]">
            <Reveal as="h2" className="font-[family-name:var(--s40-display)] text-[clamp(1.875rem,2.65vw,2.375rem)] leading-[1.21]">
              Trayectoria, criterio y una forma propia de ejercer el derecho
            </Reveal>
            <Reveal as="p" delay={0.06} className="text-[17px] leading-7">
              PDeA Abogados ha construido su práctica profesional a partir de asuntos fiscales, administrativos y de juicio de amparo de alta complejidad. La experiencia acumulada frente a autoridades y tribunales ha marcado un estilo propio de análisis de los problemas jurídicos.
            </Reveal>
            <Reveal as="p" delay={0.1} className="font-[family-name:var(--s40-display)] text-xl leading-[30px]">
              Hoy combinamos esa tradición litigiosa con una práctica de asesoría, prevención y estructuración cada vez más amplia.
            </Reveal>
            <Stagger className="grid gap-x-10 gap-y-8 pt-4 sm:grid-cols-2" gap={0.08}>
              {[
                { t: "Alianzas", d: "Cuando es necesario, trabajamos de manera coordinada con una red de firmas y especialistas externos que nos permite integrar las capacidades que exige cada caso." },
                { t: "Pro bono", d: "Integrantes de PDeA Abogados participan en la asociación Justicia Justa, A.C., dedicada a la investigación y al litigio de interés público." },
              ].map(({ t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3 border-t border-[#343E47]/20 pt-5">
                  <h3 className="font-[family-name:var(--s40-display)] text-[21px]">{t}</h3>
                  <p className="text-[15px] leading-6 text-[#343E47]/85">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className={`mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-16 py-24 lg:pb-32 lg:pt-[120px] ${PAD}`}>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-[1fr_330px_330px] xl:items-end">
            <div className="flex flex-col gap-6 md:col-span-2 xl:col-span-1 xl:pb-2 xl:pr-12">
              <Reveal as="h2" className="font-[family-name:var(--s40-display)] text-[clamp(2rem,2.8vw,2.5rem)] leading-[1.2]">
                Experiencia que se integra para cada asunto
              </Reveal>
              <Reveal as="p" delay={0.06} className="max-w-[640px] text-[17px] leading-7 text-[#343E47]/85">
                Conformamos equipos basados en las características de cada caso, conjuntando conocimientos y experiencia jurídica. La participación directa de los socios permite mantener continuidad, criterio compartido y atención cercana.
              </Reveal>
            </div>
            {FOUNDERS.map(({ n, r, src }, i) => (
              <figure key={n} className="flex flex-col gap-3.5">
                <MediaReveal onView delay={i * 0.1} className="img-zoom relative aspect-square w-full overflow-hidden bg-[#F4F4F4]">
                  <Image src={`${IMG}/${src}`} alt={`Retrato de ${n}`} fill sizes="(min-width: 1280px) 330px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </MediaReveal>
                <Reveal as="figcaption" delay={0.1 + i * 0.08} className="flex flex-col gap-[5px]">
                  <span className="font-[family-name:var(--s40-display)] text-[22px] leading-[29px]">{n}</span>
                  <span className="text-sm text-[#343E47]/70">{r}</span>
                </Reveal>
              </figure>
            ))}
          </div>
          <Stagger as="ul" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6" gap={0.05}>
            {PARTNERS.map(({ n, r, src }) => (
              <StaggerItem key={n} as="li" className="flex flex-col gap-3.5">
                <div className="img-zoom relative aspect-square w-full bg-[#F4F4F4]">
                  <Image src={`${IMG}/${src}`} alt={`Retrato de ${n}`} fill sizes="(min-width: 1024px) 180px, (min-width: 640px) 33vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[15px] font-medium leading-5">{n}</span>
                  <span className="text-sm text-[#343E47]/70">{r}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <ArrowLink href="https://www.pdea.mx/people" external>
              Conoce a todo el equipo
            </ArrowLink>
          </Reveal>
        </section>

        {/* Publicaciones */}
        <section id="publicaciones" className="scroll-mt-24 bg-[#F4F4F4]">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 py-24 lg:pb-[120px] lg:pt-28 ${PAD}`}>
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-[family-name:var(--s40-display)] text-[clamp(2.25rem,3.35vw,3rem)] leading-[1.1]">Publicaciones</h2>
              <ArrowLink href="https://www.pdea.mx/insights" external>
                Ver más publicaciones
              </ArrowLink>
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[680px_1fr]">
              <article className="flex flex-col gap-6">
                <MediaReveal onView delay={0} className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[400px]">
                  <Image src={`${IMG}/publicacion-gasolineras.jpg`} alt="Pipa de combustible en una estación de servicio, vista aérea" fill sizes="(min-width: 1280px) 680px, (min-width: 1024px) 58vw, 100vw" className="object-cover" />
                </MediaReveal>
                <Reveal className="flex flex-col gap-6">
                  <h3 className="font-[family-name:var(--s40-display)] text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.29]">
                    El nuevo candado fiscal a las gasolineras - Paquete Económico 2027
                  </h3>
                  <p className="text-sm text-[#343E47]/70">Artículo · 24 de septiembre de 2026</p>
                </Reveal>
              </article>
              <Stagger as="ul" className="flex flex-col gap-10" gap={0.07} delay={0.1}>
                {PUBLICATIONS.map(({ t, m }) => (
                  <StaggerItem key={t} as="li" className="flex flex-col gap-2.5 border-l-2 border-[#F32836] pl-6">
                    <h3 className="font-[family-name:var(--s40-display)] text-xl leading-7">{t}</h3>
                    <p className="text-sm text-[#343E47]/70">{m}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#343E47] text-white">
          <div className={`mx-auto grid max-w-[1200px] items-start gap-14 py-24 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-16 lg:pb-32 lg:pt-[120px] xl:gap-24 ${PAD}`}>
            <div className="flex flex-col gap-10">
              <Reveal as="h2" className="font-[family-name:var(--s40-display)] text-[clamp(2.25rem,3.9vw,3.5rem)] leading-[1.1]">
                Queremos saber de ti
              </Reveal>
              <Stagger className="flex flex-col gap-7" gap={0.07}>
                {[
                  { k: "Correo electrónico", v: "pdea@pdea.mx", href: "mailto:pdea@pdea.mx" },
                  { k: "Teléfono", v: "+52 (55) 5279 8860", href: "tel:+525552798860" },
                ].map(({ k, v, href }) => (
                  <StaggerItem key={k} className="flex flex-col gap-2">
                    <span className="text-sm text-white/70">{k}</span>
                    <a href={href} className="link-u w-fit font-[family-name:var(--s40-display)] text-[clamp(1.375rem,2vw,1.75rem)]">
                      {v}
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1}>
                <a href="mailto:pdea@pdea.mx" className="press inline-flex bg-white px-[30px] py-[18px] text-base font-medium text-[#343E47] hover:bg-[#E6E8EA]">
                  Contáctanos
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="flex flex-col gap-[22px] border border-white/15 bg-white/[0.06] p-7 md:p-11">
              <div className="flex items-center gap-3">
                <MapPin size={22} className="text-[#F32836]" />
                <h3 className="text-[15px] font-semibold">Oficinas</h3>
              </div>
              <address className="text-lg not-italic leading-[30px]">
                Torre Reforma
                <br />
                Paseo de la Reforma 483, Piso 24
                <br />
                Colonia Cuauhtémoc, CP 06500
                <br />
                Ciudad de México
              </address>
              <a
                href="https://maps.app.goo.gl/2nVGmSEvi5vup6UN7"
                target="_blank"
                rel="noopener noreferrer"
                className="nudge flex w-fit items-center gap-2 text-[15px] font-semibold"
              >
                Ver ubicación
                <ArrowUpRight size={16} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 border-t border-white/15 pt-5 text-[15px]">
                <LinkedinLogo size={20} />
                <span className="link-u">LinkedIn</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`mx-auto flex max-w-[1200px] flex-col gap-10 pb-28 pt-14 lg:pb-10 ${PAD}`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo footer />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#343E47]/15 pt-6 text-[13px] text-[#343E47]/70 sm:flex-row sm:justify-between">
            <p>PDeA Abogados</p>
            <div className="flex gap-7">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link-u">
                LinkedIn
              </a>
              <span>Aviso de Privacidad</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
