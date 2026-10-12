import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Fredoka, Nunito_Sans } from "next/font/google";
import { ArrowRight, EnvelopeSimple, FacebookLogo, InstagramLogo, MapPin, Phone, YoutubeLogo } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { QuoteWidget } from "./_components/quote-widget";
import { Statement } from "./_components/statement";

const display = Fredoka({ subsets: ["latin"], weight: ["500", "600"], variable: "--s69-display" });
const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--s69-body" });

export const metadata: Metadata = {
  title: "Didáctica Viajes",
  description: "Máxima aventura al viajar. Operadora de viajes escolares coordinados desde 1993, con más de 25 destinos nacionales e internacionales.",
};

const IMG = "/sitios/didactica";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8";
// Margen izquierdo que alinea con WRAP cuando una sección sangra hasta el borde de la ventana.
const GUTTER_L = "pl-5 md:pl-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]";
const DISPLAY = "font-[family-name:var(--s69-display)]";
const WA_GENERAL = "https://wa.me/5214492537391?text=" + encodeURIComponent("Hola, me gustaría cotizar un viaje escolar coordinado.");
const WA_ALT = "https://wa.me/5214492884673";
const MAPS = "https://goo.gl/maps/vY6wGD9pg5WC33uR8";

const NAV = [
  { label: "Destinos", href: "#destinos" },
  { label: "Nuestros viajes", href: "#viajes" },
  { label: "¿Cómo trabajamos?", href: "#trabajamos" },
  { label: "Contacto", href: "#contacto" },
];

const CIFRAS = [
  { n: "+27", l: "años de experiencia" },
  { n: "+10K", l: "viajes realizados" },
  { n: "+25", l: "destinos nacionales e internacionales" },
  { n: "+600K", l: "alumnos viajeros" },
  { n: "+600", l: "escuelas participantes" },
];

const NACIONALES = ["Barrancas del Cobre", "Teotihuacán, CDMX", "Six Flags, CDMX", "Guadalajara", "Querétaro", "San Miguel de Allende", "Monterrey", "Mazamitla", "Chichén Itzá", "CDMX", "Campeche", "Huasteca Potosina"];

const INTERNACIONALES = [
  { flag: "usa", t: "Disneyland, Disneyworld y Universal Studios", k: "Integración y graduación", p: "Los principales parques de diversiones del mundo, la mejor manera de festejar una graduación." },
  { flag: "usa", t: "NASA, Houston y Orlando", k: "Integración académica", p: "Programas educativos de ciencias, tecnología, ingeniería y matemáticas, en el lugar que llevó al hombre al espacio." },
  { flag: "usa", t: "Nueva York", k: "Cultural, integración, graduación y curso de idiomas en verano", p: "De Times Square a la Estatua de la Libertad, Wall Street, el Puente de Brooklyn y Central Park." },
  { flag: "usa", t: "Washington", k: "Cultural, integración y graduación", p: "Los museos y monumentos del National Mall y la Casa Blanca." },
  { flag: "canada", t: "Canadá", k: "Cultural, integración, graduación y curso de idiomas en Toronto", p: "El idioma inglés y la cultura canadiense, famosa por su hospitalidad." },
  { flag: "peru", t: "Perú", k: "Cultural, integración y graduación", p: "Los secretos de los incas en Machu Picchu y Cusco, donde se funden las tradiciones prehispánicas con el espíritu colonial." },
  { flag: "reino-unido", t: "Reino Unido, Londres", k: "Cultural, integración, graduación y curso de idiomas en verano", p: "Perfeccionar el inglés y explorar uno de los países de mayor riqueza cultural del mundo." },
  { flag: "francia", t: "Francia, París", k: "Extensión cultural, integración y graduación", p: "La cultura y el romanticismo francés complementan la experiencia europea." },
];

const FOTOS_CIRCULARES = ["barrancas", "cdmx", "chichen-itza", "guadalajara", "monterrey", "san-miguel", "mazamitla", "cascadas", "npi", "guanajuato", "cdmx2", "cdmx3"];

const RECURSOS = [
  { t: "Nuestras herramientas", p: "Proveedores de primer nivel, transporte Gran Turismo por autopistas, seguro del viajero, botiquín de primeros auxilios, gafetes, brazaletes y bufandas neón, y radiocomunicación entre coordinadores." },
  { t: "Nuestros procedimientos", p: "Técnicas especializadas de coordinación: control, manejo, atención, seguridad, logística, reglas de seguridad y asistencia médica de primeros auxilios." },
  { t: "Nuestra crónica de viaje", p: "Fotografías, videos, audios, ubicación en tiempo real y pases de lista casi en tiempo real. Papás tranquilos en casa, viendo disfrutar el viaje a sus hijos." },
  { t: "Nuestra experiencia", p: "Estadísticas operativas impecables. Operamos viajes escolares desde 1993, con más de 10,000 viajes realizados y más de 300,000 alumnos transportados." },
];

const OBJETIVOS = [
  { letra: "A", t: "Aprendizaje", p: "Nuevos entornos educativos en un ambiente de motivación extraordinaria, con un aprendizaje natural y fluido durante el viaje." },
  { letra: "D", t: "Diversión", p: "Programas de animación especiales que combinan visitas recreativas con una gran variedad de actividades." },
  { letra: "S", t: "Seguridad", p: "Programas de seguridad integral, profesionalmente diseñados, con el más alto nivel de seguridad." },
];

function Logo({ preload = false, className = "" }: { preload?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="Didáctica Viajes, inicio" className="press block w-fit">
      <Image src={`${IMG}/logo.svg`} alt="Didáctica, máxima aventura al viajar" width={180} height={48} preload={preload} className={`h-auto ${className}`} />
    </a>
  );
}

function CtaCotiza({ href = "#cotizar", className = "" }: { href?: string; className?: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className={`press group inline-flex h-14 w-fit items-center gap-3 rounded-full bg-[#FFDE01] pl-6 pr-1.5 text-[16px] font-semibold text-[#1B252F] hover:bg-[#FFE94D] ${DISPLAY} ${className}`}
    >
      Cotiza tu viaje
      <span className="grid size-11 place-items-center rounded-full bg-[#1B252F] text-[#FFDE01] transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5">
        <ArrowRight size={18} weight="bold" aria-hidden="true" />
      </span>
    </a>
  );
}

export default function DidacticaPage() {
  return (
    <div id="top" className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s69-body)] text-[#1B252F] selection:bg-[#FFDE01] selection:text-[#1B252F]`}>
      <SiteNav
        overlay
        logo={<Logo preload className="w-[124px] md:w-[150px]" />}
        links={NAV}
        breakpoint="lg"
        className="px-4 pt-4 md:px-6 md:pt-5"
        innerClassName="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-6 rounded-full bg-white/88 pl-5 pr-2 shadow-[0_18px_50px_-22px_rgba(14,18,80,0.45)] ring-1 ring-[#1B252F]/8 backdrop-blur-xl"
        linkClassName="text-[15px] font-semibold text-[#1B252F]/80 hover:text-[#1B252F]"
        panelClassName={`bg-white text-[#1B252F] font-[family-name:var(--s69-body)]`}
        panelLinkClassName={`${DISPLAY} text-3xl font-medium`}
        burgerClassName="bg-[#1B252F]"
        actions={
          <a href="#cotizar" className={`press inline-flex h-12 items-center rounded-full bg-[#FFDE01] px-6 text-[15px] font-semibold text-[#1B252F] hover:bg-[#FFE94D] ${DISPLAY}`}>
            Cotiza tu viaje
          </a>
        }
      />

      <main>
        {/* Hero: el texto va arriba, sobre el cielo, para que el grupo, la bandera y la manta queden a la vista. */}
        <div className="relative">
          <section aria-labelledby="hero-title" className="relative isolate flex min-h-[78svh] flex-col overflow-hidden bg-[#0E1250] pb-10 pt-28 md:pt-32 lg:min-h-[100svh] lg:max-h-[1000px]">
            <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={50}>
              <Image
                src={`${IMG}/portadilla2.jpg`}
                alt="Grupo escolar de Didáctica con la bandera de México frente al London Eye"
                fill
                preload
                sizes="100vw"
                className="object-cover object-[60%_75%] lg:object-[center_bottom]"
              />
            </Parallax>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0E1250CC_0%,#0E125080_34%,#0E125000_60%,#0E125047_100%)]" />
            <div className={`${WRAP} lg:grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14`}>
              <HeroIntro className="flex flex-col items-start gap-6" delay={0.15}>
                <HeroItem as="h1" blur className={`${DISPLAY} max-w-[600px] text-[clamp(2.75rem,5.6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.01em] text-white`}>
                  <span id="hero-title">Máxima aventura al viajar</span>
                </HeroItem>
                <HeroItem as="p" className="max-w-[640px] text-lg leading-relaxed text-white/88 md:text-xl">
                  Viajes escolares coordinados desde 1993. Más de 25 destinos.
                </HeroItem>
                <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-4">
                  <CtaCotiza />
                  <a href="#destinos" className={`${DISPLAY} nudge inline-flex items-center gap-2 text-[16px] font-medium text-white`}>
                    Ver destinos
                    <ArrowRight size={16} weight="bold" aria-hidden="true" />
                  </a>
                </HeroItem>
              </HeroIntro>
            </div>
          </section>
          {/* Cotizador: arriba a la derecha sobre el cielo en escritorio; bajo la foto en celular. */}
          <div id="cotizar" data-badge-avoid className={`relative z-10 -mt-12 scroll-mt-28 px-5 md:px-8 lg:absolute lg:top-32 lg:mt-0 lg:w-[400px] lg:px-0 lg:right-[max(2rem,calc((100vw-1200px)/2+2rem))]`}>
            <HeroIntro delay={0.45}>
              <HeroItem>
                <QuoteWidget display={DISPLAY} className="mx-auto max-w-[440px] lg:max-w-none" />
              </HeroItem>
            </HeroIntro>
          </div>
        </div>

        {/* Trayectoria */}
        <section aria-label="Trayectoria" className="bg-[#F4F5FA]">
          <div className={`${WRAP} flex flex-col gap-16 pb-24 pt-20 md:pb-32 md:pt-28 lg:gap-20 lg:pt-32`}>
            <Statement
              text="Desde 1993 hemos viajado con cientos de miles de alumnos con servicios de la más alta calidad, consolidándonos como los principales expertos en viajes escolares coordinados de México."
              className={`${DISPLAY} max-w-[1040px] text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-[1.18] text-[#1B252F]`}
            />
            <Stagger as="dl" className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[#1B252F]/10 pt-10 md:grid-cols-3 lg:grid-cols-5" gap={0.07}>
              {CIFRAS.map((c) => (
                <StaggerItem key={c.l} className="flex flex-col gap-1.5">
                  <dd className={`${DISPLAY} order-1 text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-none tabular-nums text-[#2E3091]`}>
                    <CountUp value={c.n} />
                  </dd>
                  <dt className="order-2 max-w-[180px] text-[15px] leading-snug text-[#5B5F73]">{c.l}</dt>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Destinos */}
        <section id="destinos" aria-labelledby="dest-title" className={`${WRAP} scroll-mt-24 grid gap-12 py-24 md:py-32 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col gap-5">
              <h2 id="dest-title" className={`${DISPLAY} text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-[1.02] text-[#1B252F]`}>
                Más de 25 destinos para tu grupo
              </h2>
              <p className="max-w-[46ch] text-lg leading-relaxed text-[#5B5F73]">
                Viajes culturales, de integración, de graduación y cursos de idiomas en verano. Cada viaje, visita y actividad se convierte en una gran aula de clases.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 flex flex-col gap-4">
              <h3 className={`${DISPLAY} text-xl font-medium`}>Nacionales</h3>
              <ul className="flex flex-wrap gap-2">
                {NACIONALES.map((n) => (
                  <li key={n}>
                    <a href="#cotizar" data-destino={n} className="press inline-block rounded-full bg-[#F4F5FA] px-4 py-2 text-[15px] font-semibold text-[#1B252F] hover:bg-[#FFDE01]">
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4">
            <Reveal as="h3" className={`${DISPLAY} text-xl font-medium`}>
              Internacionales
            </Reveal>
            <Stagger as="ul" className="flex flex-col" gap={0.05}>
              {INTERNACIONALES.map((d, i) => (
                <StaggerItem key={d.t} as="li" className={i < INTERNACIONALES.length - 1 ? "border-b border-[#1B252F]/8" : ""}>
                  <a
                    href="#cotizar"
                    data-destino={d.t}
                    aria-label={`Cotizar viaje a ${d.t}`}
                    className="group -mx-4 flex items-start gap-5 rounded-3xl px-4 py-6 transition-colors duration-200 hover:bg-[#F4F5FA] md:gap-6"
                  >
                    <span className="relative mt-1 size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-[#1B252F]/8 md:size-12">
                      <Image src={`${IMG}/${d.flag}.png`} alt="" fill sizes="48px" className="scale-125 object-cover" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className={`${DISPLAY} text-[22px] font-medium leading-tight md:text-[26px]`}>{d.t}</span>
                      <span className="text-sm font-bold text-[#2E3091]">{d.k}</span>
                      <span className="max-w-[60ch] text-[15px] leading-relaxed text-[#5B5F73]">{d.p}</span>
                    </span>
                    <span className={`${DISPLAY} mt-2 hidden shrink-0 items-center gap-1.5 text-[15px] font-medium text-[#1B252F]/45 transition-[color,transform] duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:text-[#1B252F] md:inline-flex`}>
                      Cotizar
                      <ArrowRight size={16} weight="bold" aria-hidden="true" />
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nuestros viajes */}
        <section id="viajes" aria-labelledby="viajes-title" className="scroll-mt-24 overflow-hidden bg-[#F4F5FA]">
          <div className={`${WRAP} flex flex-col gap-10 py-24 md:py-32`}>
            <Reveal className="flex flex-col gap-4">
              <h2 id="viajes-title" className={`${DISPLAY} text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-[1.02]`}>
                Así se ven nuestros viajes
              </h2>
              <p className="max-w-[52ch] text-lg leading-relaxed text-[#5B5F73]">Fotografías de los grupos que han viajado con Didáctica. Maestros, alumnos y papás disfrutan mientras nuestros coordinadores se encargan de toda la operación.</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
              <MediaReveal onView className="img-zoom relative col-span-2 aspect-[16/10] overflow-hidden rounded-[24px] md:col-span-7 md:aspect-auto md:min-h-[440px]">
                <Image src={`${IMG}/internacionales.jpg`} alt="Grupo escolar de Didáctica en Trafalgar Square, Londres" fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
              </MediaReveal>
              <MediaReveal onView delay={0.08} className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[24px] md:col-span-5 md:aspect-auto">
                <Image src={`${IMG}/20180222_093857.jpg`} alt="Grupo escolar celebrando frente a una catedral" fill sizes="(min-width: 1024px) 480px, 50vw" className="object-cover" />
              </MediaReveal>
              <MediaReveal onView delay={0.12} className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[24px] md:col-span-5 md:aspect-[4/3]">
                <Image src={`${IMG}/grupo-plaza.jpg`} alt="Grupo escolar de Didáctica en una plaza" fill sizes="(min-width: 1024px) 480px, 50vw" className="object-cover" />
              </MediaReveal>
              <Reveal delay={0.16} className="col-span-2 flex items-center rounded-[24px] bg-[#2E3091] p-8 text-white md:col-span-7 md:p-10">
                <p className={`${DISPLAY} text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.2]`}>
                  Normalmente asignamos un coordinador por cada 10 alumnos. Papás tranquilos en casa, casi como si nos acompañaran al viaje.
                </p>
              </Reveal>
            </div>
          </div>
          <div aria-label="Más fotos de viajes" role="region">
            <Stagger as="ul" className="flex gap-4 overflow-x-auto px-5 pb-24 [scrollbar-width:none] md:gap-5 md:px-8 md:pb-32 [&::-webkit-scrollbar]:hidden" gap={0.04}>
              {FOTOS_CIRCULARES.map((f, i) => (
                <StaggerItem key={f} as="li" className="relative size-[132px] shrink-0 overflow-hidden rounded-full shadow-[0_14px_30px_-16px_rgba(14,18,80,0.4)] md:size-[160px]">
                  <Image src={`${IMG}/${f}.png`} alt={`Grupo escolar en un viaje de Didáctica (${i + 1})`} fill sizes="160px" className="scale-[1.45] object-cover" />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Cómo trabajamos: una banda fotográfica a sangre y una lista de dos columnas con reglas, sin tarjetas. */}
        <section id="trabajamos" aria-labelledby="trab-title" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-4 py-24 md:pt-32 md:pb-14`}>
            <Reveal as="h2" id="trab-title" className={`${DISPLAY} text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-[1.02]`}>
              ¿Cómo trabajamos?
            </Reveal>
            <Reveal as="p" delay={0.05} className="max-w-[52ch] text-lg leading-relaxed text-[#5B5F73]">
              El tiempo, la dedicación y la gran responsabilidad de operar un viaje por cuenta de la escuela ahora recaen en nosotros.
            </Reveal>
          </div>
          <div className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#1B252F] md:min-h-[600px]">
            <MediaReveal onView className="absolute inset-0 -z-20">
              <Image src={`${IMG}/cruz-roja.jpg`} alt="Capacitación de coordinadores en primeros auxilios con Cruz Roja" fill sizes="100vw" className="object-cover object-[center_40%]" />
            </MediaReveal>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#1B252F00_30%,#1B252FD9_100%)]" />
            <div className={`${WRAP} pb-12 pt-40 md:pb-16`}>
              <div className="flex max-w-[640px] flex-col gap-3 text-white">
                <h3 className={`${DISPLAY} text-[clamp(1.875rem,3.2vw,2.75rem)] font-medium leading-[1.08]`}>Nuestra gente</h3>
                <p className="text-[17px] leading-relaxed text-white/85">
                  Coordinadores capacitados en control y manejo de grupos, animación, trabajo en equipo y primeros auxilios con Cruz Roja. Asumen control, seguridad, logística, servicios y comunicaciones.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,46%)]">
            <Stagger as="dl" className={`${GUTTER_L} flex flex-col pr-5 pt-4 md:pr-8 lg:pr-16`} gap={0.07}>
              {RECURSOS.map((r, i) => (
                <StaggerItem key={r.t} className={`grid gap-2 py-9 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 ${i < RECURSOS.length - 1 ? "border-b border-[#1B252F]/10" : ""}`}>
                  <dt className={`${DISPLAY} text-2xl font-medium leading-tight`}>{r.t}</dt>
                  <dd className="max-w-[60ch] text-[16px] leading-relaxed text-[#5B5F73]">{r.p}</dd>
                </StaggerItem>
              ))}
            </Stagger>
            <MediaReveal onView delay={0.1} className="img-zoom relative mt-10 aspect-[4/3] overflow-hidden lg:mt-0 lg:aspect-auto lg:min-h-[560px]">
              <Image src={`${IMG}/grupo-plaza.jpg`} alt="Grupo escolar de Didáctica reunido en una plaza" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Objetivos y contacto */}
        <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-24 bg-[#2E3091] text-white">
          <div className={`${WRAP} grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-5">
                <h2 id="contacto-title" className={`${DISPLAY} text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-[1.02]`}>
                  Comienza hoy tu experiencia Didáctica
                </h2>
                <p className="max-w-[46ch] text-lg leading-relaxed text-white/80">Nos responsabilizamos de todo: un viaje extraordinario y seguro, con tres objetivos en cada salida.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-6" gap={0.08}>
                {OBJETIVOS.map((o) => (
                  <StaggerItem key={o.t} as="li" className="flex items-start gap-5">
                    <span aria-hidden="true" className={`${DISPLAY} grid size-14 shrink-0 place-items-center rounded-full bg-[#FFDE01] text-2xl font-semibold text-[#1B252F]`}>
                      {o.letra}
                    </span>
                    <span className="flex flex-col gap-1">
                      <h3 className={`${DISPLAY} text-2xl font-medium leading-tight`}>{o.t}</h3>
                      <p className="max-w-[48ch] text-[15px] leading-relaxed text-white/78">{o.p}</p>
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1} className="flex flex-col justify-between gap-12 lg:pl-10 lg:pt-3">
              <address className="flex flex-col gap-5 not-italic">
                <p className="flex items-start gap-3.5 text-[17px] font-semibold leading-relaxed">
                  <Phone size={22} className="mt-0.5 shrink-0 text-[#FFDE01]" aria-hidden="true" />
                  <span className="flex flex-wrap gap-x-3">
                    <a href="tel:+524499751859" className="link-u">(449) 975 1859</a>
                    <a href="tel:+524492884673" className="link-u">(449) 288 4673</a>
                  </span>
                </p>
                <p className="flex items-start gap-3.5 text-[17px] font-semibold leading-relaxed">
                  <MapPin size={22} className="mt-0.5 shrink-0 text-[#FFDE01]" aria-hidden="true" />
                  <a href={MAPS} target="_blank" rel="noopener" className="link-u">Calle Florencia 107, Fracc. Santa Anita, Aguascalientes</a>
                </p>
                <p className="flex items-start gap-3.5 text-[17px] font-semibold leading-relaxed">
                  <EnvelopeSimple size={22} className="mt-0.5 shrink-0 text-[#FFDE01]" aria-hidden="true" />
                  <span className="flex flex-col gap-1 [overflow-wrap:anywhere]">
                    <a href="mailto:atencion@didactica.com.mx" className="link-u">atencion@didactica.com.mx</a>
                    <a href="mailto:asesoria2@didactica.com.mx" className="link-u">asesoria2@didactica.com.mx</a>
                  </span>
                </p>
                <ul className="mt-2 flex gap-3" aria-label="Redes sociales">
                  {[
                    { icon: FacebookLogo, href: "https://www.facebook.com/viajesdidacticacorporativo", l: "Facebook" },
                    { icon: InstagramLogo, href: "https://www.instagram.com/viajesdidactica/", l: "Instagram" },
                    { icon: YoutubeLogo, href: "https://www.youtube.com/user/VIAJESDIDACTICA", l: "YouTube" },
                  ].map((s) => (
                    <li key={s.l}>
                      <a href={s.href} target="_blank" rel="noopener" aria-label={s.l} className="press grid size-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 hover:bg-[#FFDE01] hover:text-[#1B252F]">
                        <s.icon size={22} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </address>
              <div className="flex flex-col gap-4">
                <p className="max-w-[40ch] text-[15px] leading-relaxed text-white/70">Cotiza y personaliza el viaje escolar coordinado de tu escuela por WhatsApp.</p>
                <CtaCotiza href={WA_GENERAL} />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#1B252F] text-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-14 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Logo className="w-[150px]" />
            <nav aria-label="Pie de página" className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-semibold text-white/72">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="link-u hover:text-white">{l.label}</a>
              ))}
              <a href="https://didactica.com.mx/index.php/aviso-de-privacidad/" target="_blank" rel="noopener" className="link-u hover:text-white">Aviso de privacidad</a>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between">
            <p>© 2026 Didáctica Viajes. Máxima aventura al viajar.{" "}<HemeronCredit /></p>
            <a href={WA_ALT} target="_blank" rel="noopener" className="link-u w-fit hover:text-white">WhatsApp (449) 288 4673</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
