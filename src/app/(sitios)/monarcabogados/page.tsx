import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import type { Icon as PhIcon } from "@phosphor-icons/react";
import {
  AirplaneTiltIcon,
  ArrowRightIcon,
  BankIcon,
  BriefcaseIcon,
  BuildingsIcon,
  CalculatorIcon,
  ChatsCircleIcon,
  CoinsIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  FlagIcon,
  GlobeHemisphereWestIcon,
  IdentificationCardIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PaperPlaneRightIcon,
  PathIcon,
  PhoneIcon,
  QuotesIcon,
  ShieldCheckIcon,
  StampIcon,
  TiktokLogoIcon,
  TwitterLogoIcon,
  UserPlusIcon,
  UsersFourIcon,
  UsersThreeIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--s02-display" });
const body = Figtree({ subsets: ["latin"], variable: "--s02-body" });

export const metadata: Metadata = {
  title: "Monarca Abogados",
  description: "Abogados en la Ciudad de México especialistas en visas mexicanas, naturalización y servicios migratorios.",
};

const IMG = "/sitios/monarcabogados";
const SITE = "https://monarcabogados.com";

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog y noticias", href: `${SITE}/blog-y-noticias/` },
  { label: "FAQ", href: `${SITE}/preguntas-frecuentes/` },
  { label: "Contacto", href: "#contacto" },
];

const FOOTER_NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog y noticias", href: `${SITE}/blog-y-noticias/` },
  { label: "Preguntas frecuentes", href: `${SITE}/preguntas-frecuentes/` },
  { label: "Contacto", href: "#contacto" },
];

const STATS = [
  { n: "+2,000", l: "casos de éxito" },
  { n: "+100", l: "nacionalidades con las que hemos trabajado" },
  { n: "+20", l: "proyectos empresariales en los últimos 2 años" },
  { n: "4", l: "idiomas: español, inglés, francés e italiano" },
];

type Item = { Icon: PhIcon; t: string; d: string };

const VISAS: Item[] = [
  { Icon: BriefcaseIcon, t: "Por oferta de empleo", d: "Visa de visitante con permiso para actividades remuneradas y residencia temporal por oferta de empleo." },
  { Icon: UsersThreeIcon, t: "Por unidad familiar", d: "Residencia temporal o permanente por unidad familiar." },
  { Icon: BankIcon, t: "Por solvencia económica", d: "Residencia en la modalidad de solvencia económica." },
  { Icon: AirplaneTiltIcon, t: "Otras visas mexicanas", d: "Visas que se tramitan ante un Consulado de México." },
];

const PERSONAS: Item[] = [
  { Icon: ChatsCircleIcon, t: "Asesoría legal migratoria", d: "Llamada de hasta 35 minutos con un experto en procesos migratorios, también presencial en CDMX." },
  { Icon: IdentificationCardIcon, t: "Naturalización", d: "Obtención de la nacionalidad mexicana: lazos permanentes con México más allá de un trámite." },
  { Icon: StampIcon, t: "Trámites para extranjeros en México", d: "Gestión de trámites migratorios, incluida la carta invitación para viajar a México." },
  { Icon: FlagIcon, t: "Trámites para mexicanos", d: "Reconocimiento de la nacionalidad mexicana a personas de padres mexicanos nacidas en el exterior." },
];

const EMPRESAS: Item[] = [
  { Icon: BuildingsIcon, t: "Emprenda su proyecto", d: "Creación y constitución de su propia empresa mexicana." },
  { Icon: UserPlusIcon, t: "Contrate personal extranjero", d: "Asesoría legal y contable sobre las implicaciones de contratar personal extranjero en México." },
  { Icon: CalculatorIcon, t: "Asesoría contable y fiscal", d: "Servicios del área contable para personas extranjeras residentes en México." },
];

const COMO: Item[] = [
  { Icon: UsersFourIcon, t: "Equipo interdisciplinario", d: "El equipo está conformado por contadores, además de abogados, y buscamos alianzas con profesionales de otras áreas." },
  { Icon: MagnifyingGlassIcon, t: "Cada caso es único", d: "Analizamos los casos de manera personalizada para proyectar situaciones y contemplar todos los escenarios posibles." },
  { Icon: CoinsIcon, t: "Más beneficios, menos costos", d: "Parte de nuestro valor agregado es aumentar beneficios y disminuir costos para nuestros clientes." },
];

const RAZONES: Item[] = [
  { Icon: BriefcaseIcon, t: "Experiencia amplia", d: "Hemos trabajado tanto en la iniciativa privada como en dependencias gubernamentales." },
  { Icon: GlobeHemisphereWestIcon, t: "Presencia digital", d: "Le ayudamos con sus trámites independientemente de su ubicación en el mundo." },
  { Icon: ShieldCheckIcon, t: "Seguridad jurídica", d: "Priorizamos su seguridad jurídica y su historial migratorio con México." },
  { Icon: PathIcon, t: "A la medida", d: "Identificamos sus necesidades migratorias y encontramos juntos la mejor solución." },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/MonarcaAbogadosMigratorios", Icon: FacebookLogoIcon },
  { label: "Instagram", href: "https://www.instagram.com/monarca_abogados_inmigracion/", Icon: InstagramLogoIcon },
  { label: "YouTube", href: "https://www.youtube.com/@MONARCAABOGADOSMIGRATORIOS", Icon: YoutubeLogoIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/monarca-abogados/", Icon: LinkedinLogoIcon },
  { label: "TikTok", href: "http://www.tiktok.com/@monarcaabogados", Icon: TiktokLogoIcon },
  { label: "X", href: "https://twitter.com/MonarcaAbogados", Icon: TwitterLogoIcon },
];

const H2 = "font-[family-name:var(--s02-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.029em]";
const CONTAINER = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`block ${className}`} aria-label="Monarca Abogados Migratorios, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Monarca Abogados Migratorios" width={200} height={65} className="h-full w-auto" preload />
    </a>
  );
}

function ServiceItem({ Icon, t, d, dark = false }: Item & { dark?: boolean }) {
  return (
    <div className={`flex gap-4 border-t py-5 ${dark ? "border-white/14" : "border-[#D5DDEA]"}`}>
      <Icon size={24} className="shrink-0 text-[#FF7621]" aria-hidden="true" />
      <div className="flex flex-col gap-1.5">
        <h4 className={`text-[18px] font-bold leading-[23px] ${dark ? "text-white" : "text-[#022257]"}`}>{t}</h4>
        <p className={`text-[15px] leading-[23px] ${dark ? "text-[#C9D3E6]" : "text-[#4B5468]"}`}>{d}</p>
      </div>
    </div>
  );
}

export default function MonarcaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s02-body)] text-[#232323] selection:bg-[#FF7621] selection:text-[#022257]`}
    >
      <SiteNav
        logo={<Logo className="h-[52px] lg:h-[65px]" />}
        links={NAV}
        className="bg-[#022257]"
        scrolledClassName="shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
        innerClassName={`${CONTAINER} flex h-20 items-center justify-between gap-8 lg:h-24`}
        linkClassName="text-base font-medium text-[#D7DFEE] transition-colors duration-200 hover:text-white"
        panelClassName="bg-[#022257] text-white font-[family-name:var(--s02-body)]"
        panelLinkClassName="font-[family-name:var(--s02-display)] text-3xl font-bold tracking-[-0.02em]"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press rounded-full bg-[#FF7621] px-6 py-[13px] text-[15px] font-bold text-[#022257] hover:bg-[#FF8A40]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#022257]">
          <HeroIntro className={`${CONTAINER} flex flex-col gap-10 pt-12 lg:gap-12 lg:pt-[72px]`}>
            <HeroItem
              as="h1"
              blur
              className="font-[family-name:var(--s02-display)] text-[clamp(3rem,7.8vw,7rem)] font-bold leading-[0.965] tracking-[-0.036em] text-white"
            >
              Los sueños no tienen fronteras.
            </HeroItem>
            <div className="grid gap-10 lg:grid-cols-[440px_1fr] lg:items-end lg:gap-[72px]">
              <div className="flex flex-col gap-6 lg:pb-14">
                <HeroItem as="p" className="font-[family-name:var(--s02-display)] text-[clamp(1.75rem,2.4vw,2.125rem)] font-semibold tracking-[-0.018em] text-[#FF7621]">
                  ¡Nos vemos en México!
                </HeroItem>
                <HeroItem as="p" className="text-lg leading-[1.53] text-[#C9D3E6] md:text-[19px]">
                  Abogados en la Ciudad de México especialistas en visas mexicanas, naturalización y servicios migratorios.
                </HeroItem>
                <HeroItem className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#contacto" className="press nudge flex items-center gap-2.5 rounded-full bg-[#FF7621] px-6 py-4 text-base font-bold text-[#022257] hover:bg-[#FF8A40] sm:px-[30px] sm:py-[17px] sm:text-[17px]">
                    Contáctanos
                    <ArrowRightIcon size={18} aria-hidden="true" />
                  </a>
                  <a href="#servicios" className="press rounded-full border border-white/35 px-6 py-[15px] text-base font-semibold text-white hover:border-white/60 hover:bg-white/8 sm:px-7 sm:py-4 sm:text-[17px]">
                    Ver servicios
                  </a>
                </HeroItem>
              </div>
              <MediaReveal className="relative h-[280px] overflow-hidden rounded-t-[20px] sm:h-[360px] lg:h-[420px] lg:rounded-t-[28px]" delay={0.3}>
                <Image
                  src={`${IMG}/paralax-fijo.jpg`}
                  alt="Clienta firmando documentos con dos asesoras en una oficina"
                  fill
                  preload
                  sizes="(min-width: 1280px) 688px, (min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </MediaReveal>
            </div>
          </HeroIntro>
          <div className="border-t border-white/12">
            <Stagger as="dl" className={`${CONTAINER} grid grid-cols-2 gap-x-6 gap-y-8 pb-12 pt-10 lg:grid-cols-4 lg:gap-12`} gap={0.07}>
              {STATS.map((s) => (
                <StaggerItem key={s.n} className="flex flex-col gap-1.5">
                  <dt className="order-2 text-[15px] leading-[23px] text-[#C9D3E6] md:text-base">{s.l}</dt>
                  <dd className="order-1 font-[family-name:var(--s02-display)] text-[clamp(2.5rem,3.4vw,3rem)] font-bold leading-none tracking-[-0.025em] text-[#FF7621]">
                    <CountUp value={s.n} />
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="nosotros" className={`${CONTAINER} grid scroll-mt-24 items-center gap-12 py-20 lg:grid-cols-[480px_1fr] lg:gap-24 lg:py-32`}>
          <Reveal className="mx-auto w-full max-w-[400px] lg:max-w-[480px]">
            <Image
              src={`${IMG}/quienes-somos-MONARCA.png`}
              alt="Pirámide de Kukulcán en Chichén Itzá"
              width={496}
              height={501}
              sizes="(min-width: 1024px) 480px, 400px"
              className="h-auto w-full"
            />
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={`${H2} text-[#022257]`}>
              ¿Quiénes somos?
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-6">
              <p className="text-xl font-medium leading-[1.52] text-[#232323] md:text-[23px]">
                Somos personas antes que profesionistas. Personas con valores que buscan ofrecer su talento, experiencia y conocimiento a quienes quieren cumplir sus sueños en este país.
              </p>
              <p className="text-[17px] leading-[1.67] text-[#4B5468] md:text-lg">
                Somos un equipo de profesionales especialistas en procesos migratorios en México. La firma, establecida en Ciudad de México, atiende a clientes provenientes de países de todos los continentes.
              </p>
              <p className="text-[17px] leading-[1.67] text-[#4B5468] md:text-lg">
                Apoyamos a la comunidad extranjera para migrar a México por trabajo, familia, negocios, estudios, inversiones, entre muchos otros motivos.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Valores */}
        <section aria-label="Nuestros valores" className="bg-[#FF7621] text-[#022257]">
          <div className={`${CONTAINER} grid gap-8 py-16 lg:grid-cols-[760px_1fr] lg:items-center lg:gap-20 lg:py-24`}>
            <Reveal as="p" className="font-[family-name:var(--s02-display)] text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[1.08] tracking-[-0.029em]">
              El servicio que ofrecemos se basa en altos estándares de ética, lealtad y legalidad.
            </Reveal>
            <Reveal as="p" delay={0.08} className="text-lg font-medium leading-[1.55] md:text-xl">
              Nuestro sello distintivo es la atención personalizada al cliente; la empatía por las causas justas, el amor por México y su gente.
            </Reveal>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F0F5FA]">
          <div className={`${CONTAINER} py-20 lg:py-32`}>
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className={`${H2} text-[#022257]`}>Servicios</h2>
              <p className="text-lg leading-[1.58] text-[#4B5468] md:text-[19px]">
                Asesoría legal y contable para personas extranjeras, familias y empresas que quieren vivir, trabajar o invertir en México.
              </p>
            </Reveal>
            <Stagger className="mt-14 grid gap-6 lg:grid-cols-[460px_1fr]" gap={0.08}>
              <StaggerItem as="article" className="flex flex-col gap-5 rounded-[24px] bg-[#022257] p-6 sm:p-10 lg:row-span-2">
                <h3 className="font-[family-name:var(--s02-display)] text-[30px] font-bold tracking-[-0.02em] text-white">Visas mexicanas</h3>
                <div className="flex flex-col">
                  {VISAS.map((it) => (
                    <ServiceItem key={it.t} {...it} dark />
                  ))}
                </div>
                <div className="img-zoom relative min-h-[180px] flex-1 overflow-hidden rounded-[16px]">
                  <Image
                    src={`${IMG}/como-trabajamos-MONARCA-1.png`}
                    alt="Reloj de bolsillo y lupa sobre una solicitud de visa"
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="scale-[1.15] object-cover"
                  />
                </div>
              </StaggerItem>
              <StaggerItem as="article" className="flex flex-col gap-5 rounded-[24px] bg-white p-6 sm:p-10">
                <h3 className="font-[family-name:var(--s02-display)] text-[30px] font-bold tracking-[-0.02em] text-[#022257]">Personas y familias</h3>
                <div className="grid sm:grid-cols-2 sm:gap-x-8">
                  {PERSONAS.map((it) => (
                    <ServiceItem key={it.t} {...it} />
                  ))}
                </div>
              </StaggerItem>
              <StaggerItem as="article" className="flex flex-col gap-5 rounded-[24px] bg-white p-6 sm:p-10">
                <h3 className="font-[family-name:var(--s02-display)] text-[30px] font-bold tracking-[-0.02em] text-[#022257]">Empresas</h3>
                <div className="grid sm:grid-cols-3 sm:gap-x-8">
                  {EMPRESAS.map((it) => (
                    <ServiceItem key={it.t} {...it} />
                  ))}
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className={`${CONTAINER} grid items-center gap-12 py-20 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-32`}>
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <h2 className={`${H2} text-[#022257]`}>¿Cómo trabajamos?</h2>
              <p className="text-lg leading-[1.58] text-[#4B5468] md:text-[19px]">
                Día con día ponemos en práctica nuestra filosofía institucional, siempre buscando la mejora continua.
              </p>
            </Reveal>
            <Stagger className="flex flex-col gap-10" gap={0.08}>
              {COMO.map(({ Icon, t, d }) => (
                <StaggerItem key={t} className="flex gap-5">
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#FFF0E6]">
                    <Icon size={24} className="text-[#C24E0A]" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-bold text-[#022257]">{t}</h3>
                    <p className="text-base leading-[1.59] text-[#4B5468] md:text-[17px]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <MediaReveal onView className="img-zoom relative aspect-[540/620] w-full overflow-hidden rounded-[28px]" delay={0}>
            <Image
              src={`${IMG}/como-trabajamos-MONARCA-2.png`}
              alt="Manos llenando formularios de solicitud de visa"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="scale-[1.12] object-cover"
            />
          </MediaReveal>
        </section>

        {/* Por qué nosotros */}
        <section className="bg-[#F0F5FA]">
          <div className={`${CONTAINER} py-20 lg:py-28`}>
            <Reveal as="h2" className={`${H2} text-[#022257]`}>
              ¿Por qué nosotros?
            </Reveal>
            <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
              {RAZONES.map(({ Icon, t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t-2 border-[#022257] pt-7">
                  <Icon size={30} className="text-[#C24E0A]" aria-hidden="true" />
                  <h3 className="font-[family-name:var(--s02-display)] text-2xl font-bold tracking-[-0.017em] text-[#022257]">{t}</h3>
                  <p className="text-base leading-[1.625] text-[#4B5468]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Testimonios */}
        <section aria-labelledby="testimonios" className="bg-[#022257] text-white">
          <div className={`${CONTAINER} py-20 lg:py-[120px]`}>
            <Reveal as="h2" id="testimonios" className={H2}>
              Testimonios
            </Reveal>
            <Stagger className="mt-14 grid gap-6 lg:grid-cols-[640px_1fr]" gap={0.08}>
              <StaggerItem as="figure" className="flex flex-col justify-between gap-8 rounded-[28px] bg-[#FF7621] p-8 text-[#022257] sm:p-12 lg:row-span-2">
                <QuotesIcon size={44} aria-hidden="true" />
                <blockquote className="font-[family-name:var(--s02-display)] text-[clamp(1.75rem,2.4vw,2.125rem)] font-semibold leading-[1.26] tracking-[-0.015em]">
                  “Los mejores abogados que pude encontrar. Jacqueline y Daniel me apoyaron en todo el proceso.”
                </blockquote>
                <figcaption className="flex flex-col gap-0.5">
                  <span className="text-[17px] font-bold">Rocío C.</span>
                  <span className="text-[15px]">Nacionalidad peruana</span>
                </figcaption>
              </StaggerItem>
              {[
                { q: "“Had a great experience with the Monarca team. Me and my family were sorted in days in what would have been months without them.”", n: "Luis S.", o: "Nacionalidad estadounidense" },
                { q: "“Mi trámite lo pudimos realizar de manera ágil y salió favorable por la preparación y asesoría.”", n: "Paola H.", o: "Nacionalidad colombiana" },
              ].map((t) => (
                <StaggerItem key={t.n} as="figure" className="flex flex-col gap-5 rounded-[28px] border border-white/12 bg-white/6 p-8 sm:p-10">
                  <blockquote className="text-lg leading-[1.53] md:text-[19px]">{t.q}</blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px]">
                    <span className="font-bold text-[#FF7621]">{t.n}</span>
                    <span className="text-[#C9D3E6]">{t.o}</span>
                  </figcaption>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className={`${CONTAINER} grid scroll-mt-24 gap-14 py-20 lg:grid-cols-[1fr_600px] lg:gap-[88px] lg:py-32`}>
          <div className="flex flex-col gap-9">
            <Reveal className="flex flex-col gap-4">
              <h2 className={`${H2} text-[#022257]`}>¡Estamos aquí para escucharte!</h2>
              <p className="text-lg text-[#4B5468] md:text-[19px] xl:whitespace-nowrap">Completa el formulario y nos pondremos en contacto pronto.</p>
            </Reveal>
            <Stagger className="flex flex-col gap-9" gap={0.08}>
              <ContactRow Icon={MapPinIcon} k="Dirección">
                <p>
                  Sófocles No. 150, Oficina 3001, Polanco III Sección,
                  <br />
                  Alcaldía Miguel Hidalgo, C.P. 11540, Ciudad de México
                </p>
              </ContactRow>
              <ContactRow Icon={PhoneIcon} k="Teléfono">
                <p>
                  <a href="tel:+525527753142" className="link-u">+52 55 2775 3142</a>
                  <span aria-hidden="true">{"  /  "}</span>
                  <a href="tel:+525545895521" className="link-u">+52 55 4589 5521</a>
                </p>
              </ContactRow>
              <ContactRow Icon={EnvelopeSimpleIcon} k="Correo electrónico">
                <p>Lic. Oscar Daniel Hernández García</p>
                <p className="[overflow-wrap:anywhere]">
                  <a href="mailto:danielhgarcia@monarcaabogados.com" className="link-u">danielhgarcia@monarcaabogados.com</a>
                </p>
                <p className="[overflow-wrap:anywhere]">
                  Contacto: <a href="mailto:jacquelineleal@monarcaabogados.com" className="link-u">jacquelineleal@monarcaabogados.com</a>
                </p>
              </ContactRow>
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-5 rounded-[28px] bg-[#F0F5FA] p-6 sm:p-12" noteClassName="text-sm text-[#4B5468]">
              <Field label="Nombre completo" name="name" autoComplete="name" />
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <Field label="Número de teléfono" name="phone" type="tel" autoComplete="tel" />
              </div>
              <Field label="Asunto" name="subject" />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#022257]">Mensaje</span>
                <textarea
                  name="message"
                  rows={5}
                  className="h-[140px] resize-none rounded-[14px] border border-[#C7D1E2] bg-white px-4 py-3 text-base text-[#022257] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#022257] focus:shadow-[0_0_0_3px_rgba(2,34,87,0.12)]"
                />
              </label>
              <div>
                <button type="submit" className="press nudge flex items-center gap-2.5 rounded-full bg-[#FF7621] px-9 py-[17px] text-[17px] font-bold text-[#022257] hover:bg-[#FF8A40]">
                  Enviar
                  <PaperPlaneRightIcon size={18} aria-hidden="true" />
                </button>
              </div>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#022257] text-white">
        <div className={`${CONTAINER} flex flex-col gap-14 pb-28 pt-16 lg:pb-10 lg:pt-[72px]`}>
          <div className="grid gap-12 md:grid-cols-2 lg:flex lg:justify-between lg:gap-8">
            <div className="flex max-w-[360px] flex-col gap-5">
              <Logo className="h-[65px]" />
              <p className="text-base leading-[1.625] text-[#C9D3E6]">Somos un equipo de profesionales especialistas en procesos migratorios en México.</p>
            </div>
            <nav aria-label="Pie de página">
              <ul className="flex flex-col gap-3.5 text-base leading-[1.2]">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex w-full max-w-[400px] flex-col gap-4 md:col-span-2 lg:col-span-1">
              <p className="font-[family-name:var(--s02-display)] text-2xl font-bold">¡Suscríbete a nuestro newsletter!</p>
              <DemoForm className="flex flex-col gap-3" noteClassName="text-sm text-[#C9D3E6]">
                <div className="flex h-14 items-center justify-between gap-3 rounded-full bg-white p-1.5 pl-[22px] transition-shadow duration-200 focus-within:shadow-[0_0_0_3px_rgba(255,118,33,0.5)]">
                  <input
                    type="email"
                    name="newsletter"
                    required
                    autoComplete="email"
                    placeholder="Correo electrónico"
                    aria-label="Correo electrónico"
                    className="min-w-0 flex-1 bg-transparent text-[15px] text-[#022257] outline-none placeholder:text-[#6B7385]"
                  />
                  <button type="submit" aria-label="Suscribirme" className="press nudge flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF7621] text-[#022257] hover:bg-[#FF8A40]">
                    <ArrowRightIcon size={20} aria-hidden="true" />
                  </button>
                </div>
              </DemoForm>
            </div>
          </div>
          <div className="flex flex-col gap-6 border-t border-white/14 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-[#C9D3E6]">
              <li>© 2026 Monarca Abogados{" · "}<HemeronCredit /></li>
              <li>
                <a href={`${SITE}/terminos-y-condiciones-de-uso-del-sitio-web-y-contratacion-de-servicios-profesionales/`} className="link-u">
                  Términos y condiciones de contratación
                </a>
              </li>
              <li>
                <a href={`${SITE}/aviso-de-privacidad/`} className="link-u">Aviso de privacidad integral</a>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="press flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white hover:bg-[#FF7621] hover:text-[#022257]"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ Icon, k, children }: { Icon: PhIcon; k: string; children: React.ReactNode }) {
  return (
    <StaggerItem className="flex gap-[18px]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#022257]">
        <Icon size={20} className="text-[#FF7621]" aria-hidden="true" />
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm font-bold text-[#022257]">{k}</p>
        <div className="text-base leading-[1.59] text-[#4B5468] md:text-[17px]">{children}</div>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-[#022257]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[54px] rounded-[14px] border border-[#C7D1E2] bg-white px-4 text-base text-[#022257] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#022257] focus:shadow-[0_0_0_3px_rgba(2,34,87,0.12)]"
      />
    </label>
  );
}
