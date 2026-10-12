import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Fredoka, Nunito_Sans } from "next/font/google";
import type { Icon as PhIcon } from "@phosphor-icons/react";
import {
  AirplaneTilt,
  ArrowRight,
  Bus,
  ChartLineUp,
  ChatsCircle,
  ClipboardText,
  DeviceMobile,
  EnvelopeSimple,
  FacebookLogo,
  Flag,
  InstagramLogo,
  MapPin,
  MapPinLine,
  Phone,
  UsersThree,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Fredoka({ subsets: ["latin"], weight: ["500", "600"], variable: "--s69-display" });
const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--s69-body" });

export const metadata: Metadata = {
  title: "Didáctica Viajes",
  description: "Operadora de experiencias extraordinarias a través de viajes escolares. Desde 1993, viajes escolares coordinados en México.",
};

const IMG = "/sitios/didactica";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s69-display)]";
const WA_MAIN = "https://wa.me/5214492537391?text=Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20de%20un%20viaje%20a%20";
const WA_ALT = "https://wa.me/5214492884673";
const MAPS = "https://goo.gl/maps/vY6wGD9pg5WC33uR8";

const NAV = [
  { label: "¿Por qué elegirnos?", href: "#elegirnos" },
  { label: "¿Cómo trabajamos?", href: "#trabajamos" },
  { label: "Nacionales", href: "#nacionales" },
  { label: "Internacionales", href: "#internacionales" },
  { label: "Contacto", href: "#contacto" },
];

const PROMESAS: { icon: PhIcon; t: string; p: string }[] = [
  { icon: Flag, t: "Más de 25 destinos", p: "Contamos con más de 25 increíbles destinos nacionales e internacionales." },
  { icon: MapPinLine, t: "Cotiza y personaliza", p: "Puedes cotizar y personalizar tu viaje escolar coordinado." },
  { icon: DeviceMobile, t: "Inicia hoy mismo", p: "Contáctanos por WhatsApp y comienza tu experiencia Didáctica." },
];

const CIFRAS = [
  { n: "+27", l: "años de experiencia" },
  { n: "+10K", l: "viajes realizados" },
  { n: "+25", l: "destinos nacionales e internacionales" },
  { n: "+600K", l: "alumnos viajeros satisfechos" },
  { n: "+600", l: "escuelas participantes" },
];

const NACIONALES = ["Barrancas del Cobre", "Teotihuacán, CDMX", "Six Flags, CDMX", "Guadalajara", "Querétaro", "San Miguel de Allende", "Monterrey", "Mazamitla", "Chichén Itzá", "CDMX", "Campeche", "Huasteca Potosina"];
const FOTOS_NACIONALES = ["barrancas", "cdmx", "chichen-itza", "guadalajara", "monterrey", "san-miguel", "mazamitla", "cascadas", "npi", "guanajuato", "cdmx2", "cdmx3"];

const INTERNACIONALES = [
  { flag: "usa", t: "Disneyland, Disneyworld y Universal Studios", k: "Viaje de integración y graduación", p: "Disfruta la magia al visitar los principales parques de diversiones del mundo, la mejor manera de festejar tu graduación." },
  { flag: "usa", t: "NASA, Houston y Orlando", k: "Viaje de integración académico", p: "Experimenta directamente los programas educativos de ciencias, tecnología, ingeniería y matemáticas que han llevado al hombre al espacio." },
  { flag: "usa", t: "Nueva York", k: "Viaje cultural, integración, graduación y curso de idiomas en verano", p: "Desde el bullicio de Times Square hasta la Estatua de la Libertad, pasando por Wall Street, el Puente de Brooklyn y Central Park." },
  { flag: "usa", t: "Washington", k: "Viaje cultural, integración y graduación", p: "Los edificios, museos y construcciones del National Mall y el símbolo de poder en la Casa Blanca." },
  { flag: "canada", t: "Canadá", k: "Viaje cultural, integración, graduación y curso de idiomas en Toronto", p: "Interactúa con el idioma inglés y la cultura canadiense, famosa por su hospitalidad." },
  { flag: "peru", t: "Perú", k: "Viaje cultural, integración y graduación", p: "Explora los secretos de los incas en Machu Picchu y Cusco, donde se funden las tradiciones prehispánicas con el espíritu colonial." },
  { flag: "reino-unido", t: "Reino Unido, Londres", k: "Viaje cultural, integración, graduación y curso de idiomas en verano", p: "Perfecciona el idioma inglés y explora impresionantes sitios en uno de los países de mayor riqueza cultural del mundo." },
  { flag: "francia", t: "Francia, París", k: "Extensión cultural, integración y graduación", p: "La cultura y el romanticismo francés complementan la experiencia europea en la ciudad de París." },
];

const OBJETIVOS = [
  { badge: "aprendizaje", t: "Aprendizaje", p: "Viajamos a nuevos entornos educativos en un ambiente de motivación extraordinaria, fomentando el desarrollo armónico y la formación integral a través de un aprendizaje natural y fluido durante el viaje." },
  { badge: "diversion", t: "Diversión", p: "Generamos viajes inolvidables a través de programas de animación especiales, combinando visitas recreativas y una gran variedad de divertidas actividades." },
  { badge: "seguridad", t: "Seguridad", p: "Proporcionamos el más alto nivel de seguridad a través de programas de seguridad integral, profesionalmente diseñados." },
];

const RECURSOS: { icon: PhIcon; t: string; p: string }[] = [
  { icon: UsersThree, t: "Nuestra gente", p: "Coordinadores capacitados en técnicas operativas, control y manejo de grupos, animación, trabajo en equipo y primeros auxilios con Cruz Roja. Asumen control, seguridad, logística, servicios y comunicaciones." },
  { icon: Bus, t: "Nuestras herramientas", p: "Proveedores de primer nivel, transporte Gran Turismo por autopistas, seguro del viajero, botiquín de primeros auxilios, gafetes, brazaletes y bufandas neón, y radiocomunicación entre coordinadores." },
  { icon: ClipboardText, t: "Nuestros procedimientos", p: "Técnicas especializadas de coordinación: control, manejo, atención, seguridad, logística, reglas de seguridad y asistencia médica de primeros auxilios." },
  { icon: ChatsCircle, t: "Nuestra crónica de viaje", p: "Fotografías, videos, audios, ubicaciones en tiempo real y pases de lista casi en tiempo real. Papás tranquilos en casa, contentos de ver disfrutar el viaje a sus hijos." },
  { icon: ChartLineUp, t: "Nuestra experiencia", p: "Estadísticas operativas impecables. Operamos viajes escolares desde 1993, con más de 10,000 viajes realizados y más de 300,000 alumnos transportados a nivel nacional e internacional." },
];

function Logo({ preload = false, className = "" }: { preload?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="Didáctica Viajes, inicio" className="press block w-fit">
      <Image src={`${IMG}/logo.svg`} alt="Didáctica, máxima aventura al viajar" width={180} height={48} preload={preload} className={`h-auto ${className}`} />
    </a>
  );
}

function CtaCotiza({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contacto"
      className={`press nudge inline-flex h-14 items-center gap-2.5 rounded-full bg-[#FFDE01] px-7 text-[17px] font-semibold text-[#1B252F] hover:bg-[#FFE94D] ${DISPLAY} ${className}`}
    >
      Cotiza tu viaje
      <ArrowRight size={18} weight="bold" aria-hidden="true" />
    </a>
  );
}

export default function DidacticaPage() {
  return (
    <div id="top" className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s69-body)] text-[#1B252F] selection:bg-[#FFDE01] selection:text-[#1B252F]`}>
      <SiteNav
        overlay
        logo={<Logo preload className="w-[140px] md:w-[180px]" />}
        links={NAV}
        breakpoint="xl"
        className="text-white"
        scrolledClassName="bg-[#1B252F]/95 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] backdrop-blur"
        innerClassName={`${WRAP} flex h-[76px] items-center justify-between gap-8 xl:h-24`}
        linkClassName="text-[15px] font-semibold text-white/90 hover:text-white"
        panelClassName={`bg-[#2E3091] text-white font-[family-name:var(--s69-body)]`}
        panelLinkClassName={`${DISPLAY} text-3xl font-medium`}
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className={`press hidden h-11 items-center rounded-full bg-[#FFDE01] px-[22px] text-[15px] font-semibold text-[#1B252F] hover:bg-[#FFE94D] xl:inline-flex ${DISPLAY}`}>
            Cotiza tu viaje
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section aria-labelledby="hero-title" className="relative isolate flex min-h-[640px] flex-col justify-end overflow-hidden bg-[#0E1250] pb-16 pt-32 md:min-h-[760px] lg:h-[860px] lg:pb-24">
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={50}>
            <Image
              src={`${IMG}/portadilla2.jpg`}
              alt="Grupo escolar de Didáctica con la bandera de México frente al London Eye"
              fill
              preload
              sizes="100vw"
              className="object-cover object-[60%_30%] md:object-center"
            />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0E1250CC_0%,#0E125080_18%,#0E125066_50%,#0E125014_100%)] lg:bg-[linear-gradient(90deg,#0E1250D9_0%,#0E125066_45%,#0E125014_100%)]" />
          <HeroIntro className={`${WRAP} flex flex-col items-start gap-7`} delay={0.15}>
            <HeroItem className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <AirplaneTilt size={16} weight="fill" className="text-[#FFDE01]" aria-hidden="true" />
              Viajes escolares coordinados en México
            </HeroItem>
            <HeroItem as="h1" blur className={`${DISPLAY} max-w-[720px] text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] text-white`}>
              <span id="hero-title">Experiencias extraordinarias a través de viajes escolares</span>
            </HeroItem>
            <HeroItem as="p" className="max-w-[600px] text-lg leading-relaxed text-white/90 md:text-[21px]">
              Desde 1993 hemos viajado con cientos de miles de alumnos con servicios de la más alta calidad.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-3.5">
              <CtaCotiza />
              <a href={WA_MAIN} target="_blank" rel="noopener" className={`press inline-flex h-14 items-center gap-2.5 rounded-full border-[1.5px] border-white/50 px-[26px] text-[17px] font-medium text-white hover:border-white hover:bg-white/10 ${DISPLAY}`}>
                <WhatsappLogo size={20} aria-hidden="true" />
                Contáctanos
              </a>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Comienza tu viaje */}
        <section aria-labelledby="comienza-title" className={`${WRAP} grid gap-12 py-20 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-[88px] lg:py-[104px]`}>
          <Reveal className="flex flex-col gap-4">
            <h2 id="comienza-title" className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] font-semibold leading-[1.1] text-[#2E3091]`}>
              Comienza tu viaje
            </h2>
            <p className="text-lg leading-relaxed text-[#54595F] md:text-[19px]">
              Nos consolidamos como los principales expertos en viajes escolares coordinados. Miles de testimonios de excelencia de nuestros clientes nos avalan.
            </p>
          </Reveal>
          <Stagger as="ul" className="flex flex-col" gap={0.07}>
            {PROMESAS.map((item, i) => (
              <StaggerItem key={item.t} as="li" className={`flex items-start gap-6 py-7 ${i < PROMESAS.length - 1 ? "border-b border-[#2E3091]/12" : ""} ${i === 0 ? "pt-0 lg:pt-0" : ""}`}>
                <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[#FFF7F9] text-[#2E3091]">
                  <item.icon size={24} aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className={`${DISPLAY} text-2xl font-medium leading-tight`}>{item.t}</h3>
                  <p className="text-base leading-relaxed text-[#54595F]">{item.p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Cifras */}
        <section aria-label="Cifras" className="bg-[#2E3091]">
          <Stagger as="dl" className={`${WRAP} grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-16`} gap={0.07}>
            {CIFRAS.map((c) => (
              <StaggerItem key={c.l} className="flex flex-col gap-1.5">
                <dd className={`${DISPLAY} order-1 text-[clamp(2.75rem,4.3vw,3.5rem)] font-semibold leading-none text-[#FFDE01]`}>
                  <CountUp value={c.n} />
                </dd>
                <dt className="order-2 max-w-[200px] text-[15px] font-semibold leading-snug text-white/80">{c.l}</dt>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Destinos nacionales */}
        <section id="nacionales" aria-labelledby="nac-title" className={`${WRAP} scroll-mt-24 flex flex-col gap-12 py-20 lg:py-[104px]`}>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-[680px] flex-col gap-3.5">
              <h2 id="nac-title" className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] font-semibold leading-[1.1] text-[#2E3091]`}>
                Destinos nacionales
              </h2>
              <p className="text-lg leading-relaxed text-[#54595F]">
                Descubre en compañía de tus amigos y compañeros la gran riqueza histórica y cultural que ofrece nuestro país, además de pasar momentos únicos de gran diversión.
              </p>
            </div>
            <a href="#contacto" className={`${DISPLAY} nudge inline-flex shrink-0 items-center gap-2 text-[17px] font-medium text-[#2E3091]`}>
              Ver todos los destinos
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </a>
          </Reveal>
          <Stagger as="ul" className="flex flex-wrap gap-2.5" gap={0.03}>
            {NACIONALES.map((n) => (
              <StaggerItem key={n} as="li" className={`${DISPLAY} rounded-full border-[1.5px] border-[#2E3091]/20 px-[18px] py-2.5 text-base font-medium leading-none text-[#2E3091]`}>
                {n}
              </StaggerItem>
            ))}
          </Stagger>
          <Stagger as="ul" className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:gap-5 lg:grid-cols-6" gap={0.05}>
            {FOTOS_NACIONALES.map((f, i) => (
              <StaggerItem key={f} as="li" className="relative aspect-square rounded-full border-4 border-[#FFDE01] bg-[#FFDE01]">
                <span className="img-zoom absolute inset-0 overflow-hidden rounded-full">
                  <Image src={`${IMG}/${f}.png`} alt={`Grupo escolar en un viaje de Didáctica (${i + 1})`} fill sizes="(min-width: 1024px) 160px, (min-width: 640px) 25vw, 33vw" className="scale-[1.45] object-cover" />
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Destinos internacionales */}
        <section id="internacionales" aria-labelledby="int-title" className="scroll-mt-24 bg-[#FFF7F9]">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:py-[100px]`}>
            <Reveal className="flex max-w-[760px] flex-col gap-3.5">
              <h2 id="int-title" className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] font-semibold leading-[1.1] text-[#2E3091]`}>
                Destinos internacionales
              </h2>
              <p className="text-lg leading-relaxed text-[#54595F]">
                Proyectamos a nuestros alumnos como grandes viajeros internacionales, convirtiendo cada viaje, visita y actividad en una gran aula de clases, siempre con el soporte de nuestros coordinadores profesionales.
              </p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col" gap={0.05}>
              {INTERNACIONALES.map((d, i) => (
                <StaggerItem key={d.t} as="li" className={`flex items-start gap-5 py-6 md:gap-7 ${i < INTERNACIONALES.length - 1 ? "border-b border-[#2E3091]/12" : ""}`}>
                  <span className="relative size-11 shrink-0 overflow-hidden rounded-full md:size-12">
                    <Image src={`${IMG}/${d.flag}.png`} alt="" fill sizes="48px" className="scale-125 object-cover" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <h3 className={`${DISPLAY} text-[22px] font-medium leading-tight md:text-[26px]`}>{d.t}</h3>
                    <p className="text-[15px] font-bold leading-snug text-[#DA2746]">{d.k}</p>
                    <p className="text-base leading-relaxed text-[#54595F]">{d.p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section id="elegirnos" aria-labelledby="eleg-title" className={`${WRAP} scroll-mt-24 flex flex-col gap-16 py-20 lg:py-[104px]`}>
          <div className="grid items-center gap-10 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-16">
            <Reveal className="flex flex-col gap-5">
              <h2 id="eleg-title" className={`${DISPLAY} text-[clamp(2.25rem,3.6vw,3.25rem)] font-semibold leading-[1.05] text-[#2E3091]`}>
                Nos responsabilizamos de todo
              </h2>
              <p className="text-lg leading-relaxed text-[#54595F]">
                El tiempo, la dedicación, el esfuerzo y sobre todo la gran responsabilidad que asume la escuela y los maestros operando un viaje por su cuenta ahora recae en nosotros, obteniendo un viaje extraordinario y seguro.
              </p>
              <p className="text-lg leading-relaxed text-[#54595F]">
                Desde 1993 hemos servido a miles de escuelas, maestros y cientos de miles de alumnos y padres de familia, que nos consolidan como los principales expertos en el país.
              </p>
            </Reveal>
            <MediaReveal onView className="img-zoom relative aspect-[576/420] w-full overflow-hidden rounded-[28px]">
              <Image src={`${IMG}/internacionales.jpg`} alt="Grupo escolar de Didáctica en Trafalgar Square, Londres" fill sizes="(min-width: 1024px) 576px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
          <div className="flex flex-col gap-7">
            <Reveal as="h3" className={`${DISPLAY} text-[30px] font-medium`}>
              Objetivos de viaje
            </Reveal>
            <Stagger as="ul" className="grid gap-10 md:grid-cols-3 md:gap-12" gap={0.08}>
              {OBJETIVOS.map((o) => (
                <StaggerItem key={o.t} as="li" className="flex flex-col gap-4 border-t-[3px] border-[#FFDE01] pt-7">
                  <Image src={`${IMG}/${o.badge}.png`} alt="" width={72} height={72} className="size-[72px]" />
                  <h4 className={`${DISPLAY} text-[26px] font-medium leading-tight`}>{o.t}</h4>
                  <p className="text-base leading-relaxed text-[#54595F]">{o.p}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section id="trabajamos" aria-labelledby="trab-title" className="scroll-mt-24 bg-[#1B252F] text-white">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:gap-14 lg:py-[100px]`}>
            <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 id="trab-title" className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] font-semibold leading-[1.1]`}>
                ¿Cómo trabajamos?
              </h2>
              <p className="max-w-[520px] text-[17px] leading-relaxed text-[#FFDE01] md:text-right">Normalmente asignamos 1 coordinador por cada 10 alumnos.</p>
            </Reveal>
            <Stagger as="ul" className="grid gap-5 md:grid-cols-2 lg:grid-cols-6" gap={0.06}>
              {RECURSOS.map((r, i) => (
                <StaggerItem key={r.t} as="li" className={`flex flex-col gap-[18px] rounded-3xl border border-white/10 bg-white/[0.06] p-[30px] pb-[34px] ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
                  <r.icon size={30} className="text-[#FFDE01]" aria-hidden="true" />
                  <h3 className={`${DISPLAY} text-[23px] font-medium leading-tight`}>{r.t}</h3>
                  <p className="text-[15px] leading-relaxed text-white/72">{r.p}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Fotos de viaje */}
        <section aria-label="Fotos de nuestros viajes" className="grid grid-cols-1 sm:grid-cols-3">
          {[
            { src: "20180222_093857.jpg", alt: "Grupo escolar celebrando frente a una catedral" },
            { src: "grupo-plaza.jpg", alt: "Grupo escolar de Didáctica en una plaza" },
            { src: "cruz-roja.jpg", alt: "Capacitación de coordinadores en primeros auxilios con Cruz Roja" },
          ].map((f, i) => (
            <MediaReveal key={f.src} onView delay={i * 0.08} className="img-zoom relative aspect-[8/7] overflow-hidden sm:aspect-[480/420]">
              <Image src={`${IMG}/${f.src}`} alt={f.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </MediaReveal>
          ))}
        </section>

        {/* Contacto */}
        <section id="contacto" aria-labelledby="contacto-title" className={`${WRAP} scroll-mt-24 grid gap-14 py-20 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-20 lg:py-[104px]`}>
          <Reveal className="flex flex-col gap-9">
            <h2 id="contacto-title" className={`${DISPLAY} text-[clamp(2.25rem,3.6vw,3.25rem)] font-semibold leading-[1.05] text-[#2E3091]`}>
              Comienza hoy tu experiencia Didáctica
            </h2>
            <p className="text-lg leading-relaxed text-[#54595F]">Escríbenos por WhatsApp o llámanos. Con gusto cotizamos y personalizamos el viaje escolar coordinado de tu escuela.</p>
            <a href={WA_MAIN} target="_blank" rel="noopener" className={`press inline-flex h-14 w-fit items-center gap-2.5 rounded-full bg-[#2E3091] px-[26px] text-[17px] font-medium text-white hover:bg-[#242676] ${DISPLAY}`}>
              <WhatsappLogo size={22} aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
            <address className="flex flex-col gap-[18px] not-italic">
              <p className="flex items-start gap-3.5 text-base font-semibold leading-relaxed">
                <Phone size={22} className="mt-0.5 shrink-0 text-[#DA2746]" aria-hidden="true" />
                <span>
                  <a href="tel:+524499751859" className="link-u">(449) 975 1859</a>
                  <span className="text-[#54595F]"> · </span>
                  <a href="tel:+524492884673" className="link-u">(449) 288 4673</a>
                </span>
              </p>
              <p className="flex items-start gap-3.5 text-base font-semibold leading-relaxed">
                <MapPin size={22} className="mt-0.5 shrink-0 text-[#DA2746]" aria-hidden="true" />
                <a href={MAPS} target="_blank" rel="noopener" className="link-u">Calle Florencia 107, Fracc. Santa Anita, Aguascalientes</a>
              </p>
              <p className="flex items-start gap-3.5 text-base font-semibold leading-relaxed">
                <EnvelopeSimple size={22} className="mt-0.5 shrink-0 text-[#DA2746]" aria-hidden="true" />
                <span className="flex flex-wrap gap-x-2 [overflow-wrap:anywhere]">
                  <a href="mailto:atencion@didactica.com.mx" className="link-u">atencion@didactica.com.mx</a>
                  <span className="text-[#54595F]">·</span>
                  <a href="mailto:asesoria2@didactica.com.mx" className="link-u">asesoria2@didactica.com.mx</a>
                </span>
              </p>
            </address>
            <ul className="flex gap-3" aria-label="Redes sociales">
              {[
                { icon: FacebookLogo, href: "https://www.facebook.com/viajesdidacticacorporativo", l: "Facebook" },
                { icon: InstagramLogo, href: "https://www.instagram.com/viajesdidactica/", l: "Instagram" },
                { icon: YoutubeLogo, href: "https://www.youtube.com/user/VIAJESDIDACTICA", l: "YouTube" },
              ].map((s) => (
                <li key={s.l}>
                  <a href={s.href} target="_blank" rel="noopener" aria-label={s.l} className="press grid size-11 place-items-center rounded-full bg-[#FFF7F9] text-[#2E3091] hover:bg-[#FFDE01]">
                    <s.icon size={22} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-4 rounded-[28px] bg-[#FFF7F9] p-6 sm:p-10" noteClassName="text-sm text-[#54595F]">
              <h3 className={`${DISPLAY} mb-2 text-[26px] font-medium`}>Cotiza tu viaje</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" name="name" autoComplete="name" />
                <Field label="Escuela" name="school" autoComplete="organization" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <Field label="Teléfono" name="phone" type="tel" autoComplete="tel" />
              </div>
              <Field label="Destino de interés" name="destination" />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold">Mensaje</span>
                <textarea name="message" rows={4} className="min-h-[120px] rounded-2xl border border-[#2E3091]/15 bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#2E3091] focus:shadow-[0_0_0_3px_rgba(46,48,145,0.12)]" />
              </label>
              <button type="submit" className={`press mt-2 h-14 rounded-full bg-[#FFDE01] text-[17px] font-semibold text-[#1B252F] hover:bg-[#FFE94D] ${DISPLAY}`}>
                Enviar cotización
              </button>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#1B252F] text-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Logo className="w-[160px] md:w-[200px]" />
            <nav aria-label="Pie de página" className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-semibold text-white/72">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="link-u hover:text-white">{l.label}</a>
              ))}
              <a href="https://didactica.com.mx/index.php/aviso-de-privacidad/" target="_blank" rel="noopener" className="link-u hover:text-white">Aviso de privacidad</a>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
            <p>© 2026 Didáctica Viajes. Máxima aventura al viajar.{" "}<HemeronCredit /></p>
            <a href={WA_ALT} target="_blank" rel="noopener" className="link-u inline-flex w-fit items-center gap-2 hover:text-white">
              <WhatsappLogo size={16} aria-hidden="true" />
              WhatsApp (449) 288 4673
            </a>
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
        className="h-14 rounded-full border border-[#2E3091]/15 bg-white px-5 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#2E3091] focus:shadow-[0_0_0_3px_rgba(46,48,145,0.12)]"
      />
    </label>
  );
}
