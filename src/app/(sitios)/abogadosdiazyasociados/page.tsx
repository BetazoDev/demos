import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Barlow, Cardo } from "next/font/google";
import {
  ArrowUpRight,
  ArrowsClockwise,
  Briefcase,
  CalendarCheck,
  CaretDown,
  CheckCircle,
  Coins,
  EnvelopeSimple,
  FacebookLogo,
  GraduationCap,
  HouseLine,
  IdentificationCard,
  InstagramLogo,
  Laptop,
  LinkedinLogo,
  Phone,
  Star,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Cardo({ subsets: ["latin"], weight: "400", variable: "--s41-display" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--s41-body" });

export const metadata: Metadata = {
  title: "Díaz & Asociados, Abogados Internacionales",
  description: "Abogados de extranjería en Ciudad de México. Te acompañamos hasta obtener tu visa, residencia o nacionalidad española.",
};

const IMG = "/sitios/abogadosdiazyasociados";
const PHONE = { label: "+52 55 3475 1362", href: "tel:+525534751362" };
const EMAIL = "contacto@diazyasociados.es";
const CDMX_ADDRESS = "Av. Ejército Nacional Mexicano 718, Polanco, Polanco III Secc, Miguel Hidalgo, 11520 Ciudad de México";

const NAV = [
  { label: "México", href: "#mexico" },
  { label: "Buenos Aires", href: "#oficinas" },
  { label: "Bogotá", href: "#oficinas" },
  { label: "Medellín", href: "#oficinas" },
  { label: "Oficinas internacionales", href: "#oficinas" },
  { label: "Blog", href: "https://abogadosdiazyasociados.com/blog/" },
];

const CREDENTIALS = [
  { v: "+95%", k: "Índice de aprobación de nuestros casos", count: true },
  { v: "5,0", k: "En Google, a base de 42 reseñas" },
  { v: "2 años", k: "De residencia legal necesitan los mexicanos para solicitar la nacionalidad española" },
  { v: "Online", k: "Y presencial: asesoría por videollamada, WhatsApp o correo antes de viajar" },
];

const MX_POINTS = [
  "Asesoramiento integral en visados, residencia española y nacionalidad española para ciudadanos mexicanos.",
  "Preparación y revisión de toda la documentación legal con seguridad jurídica.",
  "Comunicación rápida y cercana por WhatsApp o correo durante todo el proceso.",
  "Soluciones claras y eficaces, tanto desde México como una vez en España.",
];

const SERVICES = [
  { Icon: Briefcase, t: "Permisos de trabajo en España", d: "Gestionamos permisos de trabajo y residencia, por cuenta ajena o propia, hasta obtener tu autorización para trabajar legalmente en España." },
  { Icon: ArrowsClockwise, t: "Renovación de residencia", d: "Gestionamos la renovación y modificación de tu tarjeta de residencia, evitando errores que puedan provocar retrasos o denegaciones." },
  { Icon: Laptop, t: "Visa nómada digital", d: "Tramitamos tu residencia como trabajador remoto en España, ideal para freelancers, emprendedores digitales o empleados de empresas extranjeras." },
  { Icon: CalendarCheck, t: "Permiso de larga duración", d: "Te asesoramos para obtener la residencia de larga duración, que te permite vivir y trabajar en España de forma indefinida." },
  { Icon: HouseLine, t: "Arraigo en España", d: "Regularizamos tu estatus mediante arraigo social, laboral o familiar y preparamos tu expediente completo." },
  { Icon: GraduationCap, t: "Visa de estudiante en España", d: "Gestionamos la documentación académica, el seguro médico y la solicitud consular de tu visa de estudios." },
  { Icon: UsersThree, t: "Reagrupación familiar", d: "Gestionamos la residencia para tus familiares, permitiéndoles vivir legalmente en España contigo." },
  { Icon: Coins, t: "Residencia no lucrativa", d: "Tramitamos la residencia sin actividad laboral, ideal para personas con ingresos pasivos o jubilados que desean vivir en España." },
];

const STEPS = [
  { t: "Evaluación de tu caso", d: "Analizamos tu perfil personal, profesional y familiar para determinar qué vía es la más adecuada, con sus tiempos y costos reales." },
  { t: "Elección del tipo de visa", d: "Te asesoramos para elegir la opción migratoria más segura y conveniente, con sus requisitos, ventajas y plazos." },
  { t: "Preparación de documentación", d: "Te indicamos qué documentos necesitas y revisamos cada uno para que cumpla con los requisitos del consulado español." },
  { t: "Presentación ante el Consulado", d: "Agendamos tu cita, te preparamos para la entrevista y presentamos tu expediente ante el Consulado Español en México." },
  { t: "Seguimiento y resolución", d: "Atendemos requerimientos y te acompañamos hasta la aprobación de tu visa y tu llegada a España." },
];

const REASONS = [
  { t: "Especialización en trámites México-España", d: "Despacho especializado en procesos migratorios entre México y España, con conocimiento profundo de ambos sistemas legales y de los criterios consulares españoles." },
  { t: "Gestión integral desde México", d: "Iniciamos y gestionamos tu trámite sin que tengas que viajar a España, coordinando citas consulares y acompañándote también tras tu llegada." },
  { t: "Asesoría personalizada en español", d: "Asesoría 100 % personalizada, sin barreras de idioma ni culturales, con una estrategia adaptada a tu situación, objetivos y presupuesto." },
  { t: "Experiencia comprobada", d: "Una amplia trayectoria ayudando a mexicanos a vivir, estudiar y trabajar en España, anticipando problemas y maximizando las posibilidades de aprobación." },
];

const REVIEWS = [
  { q: "¡Excelente atención! Tuvimos un encuentro de asesoría y fue de extrema utilidad, con información de calidad, respondiendo a todas nuestras preguntas con claridad y ayudándonos a planificar los pasos a seguir.", a: "Ramiro Cortés, reseña en Google" },
  { q: "Quiero agradecer profundamente a Ignacio y su equipo por su profesionalismo y dedicación durante todo el proceso de obtención de mi ciudadanía española.", a: "Gastón Renz, reseña en Google" },
];

const OFFICES = [
  { c: "Buenos Aires, Argentina", a: "Uruguay 743, C1015ABO Ciudad Autónoma de Buenos Aires", p: "+54 9 11 6469-3476", tel: "+5491164693476" },
  { c: "Bogotá, Colombia", a: "Cl. 77 #13-47, Edificio Centro de Negocios 77, oficina 608, Chapinero", p: "+57 312 602 2283", tel: "+573126022283" },
  { c: "Medellín, Colombia", a: "Dann Financiera, Cra. 43A #7 50A, Oficina 1605, El Poblado", p: "+57 311 522 9980", tel: "+573115229980" },
  { c: "España", a: "Madrid, Alicante, Valencia y Marbella" },
  { c: "Londres, Reino Unido", a: "53 Davies St, London W1K 5JH", p: "+44 7429 569661", tel: "+447429569661" },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/people/D%C3%ADaz-asociados-MigracionesExtranjer%C3%ADa/100087870932439/", Icon: FacebookLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/d%C3%ADaz-asociados-abogados/", Icon: LinkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/migracionesyextranjeria.dya/", Icon: InstagramLogo },
];

const H2 = "font-[family-name:var(--s41-display)] text-[clamp(2.125rem,3.06vw,2.75rem)] leading-[1.11]";
const NAVY_BTN = "press inline-flex rounded-[6px] bg-[#23264E] font-semibold text-white hover:bg-[#33376A]";
const PAD = "px-5 md:px-8 xl:px-0";
const FIELD =
  "h-[46px] w-full rounded-[6px] border border-[#23264E]/20 bg-white px-3.5 text-[15px] text-[#333333] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#23264E] focus:shadow-[0_0_0_3px_rgba(35,38,78,0.12)]";

function Logo({ white = false }: { white?: boolean }) {
  return (
    <a href="#top" aria-label="Díaz & Asociados, inicio" className="block">
      <Image
        src={`${IMG}/${white ? "logo-white.png" : "logo.png"}`}
        alt="Díaz & Asociados, Abogados Internacionales"
        width={white ? 150 : 140}
        height={white ? 70 : 65}
        preload={!white}
        className={white ? "h-auto w-[150px]" : "h-auto w-[118px] lg:w-[140px]"}
      />
    </a>
  );
}

export default function DiazAsociadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s41-body)] text-[#23264E] selection:bg-[#CE943F] selection:text-[#23264E]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(35,38,78,0.45)]"
        innerClassName="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between gap-9 px-5 md:px-8 lg:h-[96px] xl:px-0 [&>div:first-child]:mr-auto"
        breakpoint="xl"
        linkClassName="text-base text-[#23264E] [&[href='#mexico']]:font-semibold"
        panelClassName="bg-white text-[#23264E] font-[family-name:var(--s41-body)]"
        panelLinkClassName="font-[family-name:var(--s41-display)] text-3xl"
        burgerClassName="bg-[#23264E]"
        actions={
          <a href="#contacto" className={`${NAVY_BTN} px-[22px] py-[13px] text-base`}>
            Reservar cita
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden lg:h-[720px]">
          <Parallax className="relative h-[300px] overflow-hidden sm:h-[400px] lg:absolute lg:inset-0 lg:h-auto" distance={50}>
            <Image
              src={`${IMG}/hero-mapa.jpg`}
              alt="Mapa con rutas iluminadas de Latinoamérica hacia España"
              fill
              preload
              sizes="100vw"
              className="object-cover object-[30%_50%] lg:object-center"
            />
          </Parallax>
          <div className={`relative mx-auto flex max-w-[1200px] py-14 lg:h-full lg:justify-end lg:pb-0 lg:pt-[240px] ${PAD}`}>
            <HeroIntro className="flex max-w-[520px] flex-col items-start gap-7">
              <HeroItem as="h1" blur className="font-[family-name:var(--s41-display)] text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.02] tracking-[-1px]">
                Da el primer paso hacia España
              </HeroItem>
              <HeroItem as="p" className="text-[19px] leading-[29px] text-[#23264E]/90">
                Abogados de extranjería en Ciudad de México. Te acompañamos hasta obtener tu visa, residencia o nacionalidad española.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#contacto" className={`${NAVY_BTN} px-7 py-[17px] text-[17px]`}>
                  Reservar cita
                </a>
                <a
                  href={PHONE.href}
                  className="press flex items-center gap-2.5 rounded-[6px] border border-[#23264E]/35 bg-white/70 px-6 py-4 text-[17px] font-semibold hover:border-[#23264E] hover:bg-white"
                >
                  <Phone size={18} />
                  {PHONE.label}
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* Credenciales */}
        <section aria-label="Credenciales" className="bg-[#0F1433]">
          <Stagger as="dl" className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-8 py-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 ${PAD}`} gap={0.07}>
            {CREDENTIALS.map(({ v, k, count }) => (
              <StaggerItem key={v} className="flex flex-col-reverse justify-end gap-2">
                <dt className="text-[15px] leading-[22px] text-white/80">{k}</dt>
                <dd className="font-[family-name:var(--s41-display)] text-[40px] leading-10 text-[#CE943F]">{count ? <CountUp value={v} /> : v}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* México */}
        <section id="mexico" className={`mx-auto grid max-w-[1200px] scroll-mt-24 items-center gap-12 py-24 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-16 lg:py-[120px] xl:gap-20 ${PAD}`}>
          <MediaReveal onView delay={0} className="relative aspect-[540/600] w-full overflow-hidden rounded-[6px]">
            <Image src={`${IMG}/zocalo-cdmx.jpg`} alt="Catedral Metropolitana y bandera de México en el Zócalo de la Ciudad de México" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-[26px]">
            <Reveal as="h2" className={H2}>
              Abogados migratorios en México, expertos en emigración a España
            </Reveal>
            <Reveal as="p" delay={0.06} className="text-lg leading-[29px] text-[#333333]">
              Emigrar a España desde México es una decisión importante que requiere una asesoría legal especializada. Nuestros abogados expertos en inmigración española te acompañan en cada paso, desde la evaluación inicial de tu caso hasta la obtención de tu visa, residencia o nacionalidad española.
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-3.5 pt-1" gap={0.06} delay={0.1}>
              {MX_POINTS.map((p) => (
                <StaggerItem key={p} as="li" className="flex gap-3.5">
                  <CheckCircle size={22} className="mt-0.5 shrink-0 text-[#CE943F]" />
                  <span className="text-[17px] leading-[26px]">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F1F1F4]">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 py-24 lg:pb-[120px] lg:pt-28 ${PAD}`}>
            <Reveal className="flex flex-col gap-[18px]">
              <h2 className={`${H2} max-w-[760px]`}>Servicios de abogados migratorios a España desde México</h2>
              <p className="max-w-[680px] text-lg leading-[29px] text-[#333333]">
                Cada trámite es único y requiere un análisis personalizado, por eso evaluamos tu situación particular para diseñar la mejor estrategia migratoria según tus objetivos.
              </p>
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-14">
              <Reveal className="flex flex-col items-start gap-[22px] rounded-[6px] bg-[#23264E] px-7 py-10 text-white md:px-10 md:py-11">
                <IdentificationCard size={36} className="text-[#CE943F]" />
                <h3 className="font-[family-name:var(--s41-display)] text-[clamp(1.875rem,2.4vw,2.125rem)] leading-[1.12]">Nacionalidad española para mexicanos</h3>
                <p className="text-[17px] leading-[27px] text-white/90">
                  Muchos mexicanos pueden acceder a la nacionalidad española por descendencia, residencia (solo 2 años para ciudadanos mexicanos) u opción en casos específicos.
                </p>
                <p className="text-base leading-[26px] text-white/70">
                  Analizamos tu situación y gestionamos todo el proceso legal para que obtengas tu nacionalidad de forma segura y sin complicaciones.
                </p>
                <a href="#contacto" className="press inline-flex rounded-[6px] bg-[#CE943F] px-6 py-[15px] text-base font-semibold text-[#23264E] hover:bg-[#DAA656]">
                  Reservar cita
                </a>
              </Reveal>
              <Stagger className="grid gap-x-12 gap-y-10 pt-2 md:grid-cols-2" gap={0.05}>
                {SERVICES.map(({ Icon, t, d }) => (
                  <StaggerItem key={t} as="article" className="flex gap-[18px]">
                    <Icon size={28} className="shrink-0" />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[19px] font-semibold leading-tight">{t}</h3>
                      <p className="text-[15px] leading-[23px] text-[#333333]">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="scroll-mt-24 bg-[#23264E] text-white">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 py-24 lg:gap-16 lg:pb-[120px] lg:pt-28 ${PAD}`}>
            <Reveal as="h2" className={`${H2} max-w-[640px]`}>
              ¿Cómo funciona el proceso de emigración a España?
            </Reveal>
            <Stagger as="ol" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5" gap={0.07}>
              {STEPS.map(({ t, d }, i) => (
                <StaggerItem key={t} as="li" className="flex flex-col gap-3.5 border-t border-[#CE943F]/50 pt-6">
                  <span className="font-[family-name:var(--s41-display)] text-[44px] leading-[44px] text-[#CE943F]">{i + 1}</span>
                  <h3 className="text-lg font-semibold leading-[23px]">{t}</h3>
                  <p className="text-[15px] leading-[23px] text-white/75">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className={`mx-auto grid max-w-[1200px] items-start gap-14 py-24 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-16 lg:pb-32 lg:pt-[120px] xl:gap-20 ${PAD}`}>
          <div className="flex flex-col gap-10">
            <Reveal as="h2" className="font-[family-name:var(--s41-display)] text-[clamp(2rem,2.8vw,2.5rem)] leading-[1.15]">
              ¿Por qué elegir Díaz &amp; Asociados como tus abogados de inmigración en México?
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-[30px]" gap={0.07}>
              {REASONS.map(({ t, d }) => (
                <StaggerItem key={t} as="li" className="flex flex-col gap-2 border-l-2 border-[#CE943F] pl-[22px]">
                  <h3 className="text-[19px] font-semibold">{t}</h3>
                  <p className="text-base leading-[26px] text-[#333333]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="flex flex-col gap-8 rounded-[6px] bg-[#F1F1F4] p-7 md:p-11">
            <div className="flex items-center gap-5">
              <span className="font-[family-name:var(--s41-display)] text-[clamp(3.5rem,5vw,4.5rem)] leading-none">5,0</span>
              <div className="flex min-w-0 flex-col gap-2">
                <span className="flex gap-1 text-[#CE943F]" role="img" aria-label="5 de 5 estrellas">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={20} />
                  ))}
                </span>
                <span className="text-[15px] text-[#333333]">Excelente, a base de 42 reseñas en Google</span>
              </div>
            </div>
            {REVIEWS.map(({ q, a }) => (
              <figure key={a} className="flex flex-col gap-3 border-t border-[#23264E]/[0.12] pt-7">
                <blockquote className="font-[family-name:var(--s41-display)] text-xl leading-[29px]">{q}</blockquote>
                <figcaption className="text-sm font-medium text-[#555555]">{a}</figcaption>
              </figure>
            ))}
          </Reveal>
        </section>

        {/* Oficinas */}
        <section id="oficinas" className="scroll-mt-24 bg-[#F1F1F4]">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 py-24 lg:pb-[120px] lg:pt-28 ${PAD}`}>
            <Reveal className="flex flex-col gap-[18px]">
              <h2 className="max-w-[820px] font-[family-name:var(--s41-display)] text-[clamp(2rem,2.92vw,2.625rem)] leading-[1.14]">
                Nuestra oficina está en Ciudad de México, pero nuestro compromiso cruza fronteras
              </h2>
              <p className="max-w-[720px] text-lg leading-[29px] text-[#333333]">
                Te acompañamos estés donde estés. Desde aquí asesoramos a ciudadanos mexicanos en trámites de visados, residencia y nacionalidad española, coordinando cada proceso con profesionales en España.
              </p>
            </Reveal>
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,400px)_1fr]">
              <Reveal className="flex flex-col items-start gap-[18px] rounded-[6px] bg-[#23264E] p-7 text-white md:p-10">
                <h3 className="font-[family-name:var(--s41-display)] text-[32px] leading-tight">Ciudad de México</h3>
                <p className="text-[17px] leading-[26px] text-white/90">{CDMX_ADDRESS}</p>
                <a href={PHONE.href} className="flex items-center gap-2.5 text-lg font-semibold">
                  <Phone size={20} className="text-[#CE943F]" />
                  <span className="link-u">{PHONE.label}</span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CDMX_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nudge flex items-center gap-2 pt-2 text-base font-semibold text-[#CE943F]"
                >
                  Cómo llegar
                  <ArrowUpRight size={16} />
                </a>
              </Reveal>
              <Stagger className="grid gap-x-8 gap-y-9 pt-2 sm:grid-cols-2 md:grid-cols-3" gap={0.05}>
                {OFFICES.map(({ c, a, p, tel }) => (
                  <StaggerItem key={c} className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold">{c}</h3>
                    <p className="text-[15px] leading-[23px] text-[#333333]">{a}</p>
                    {p && (
                      <a href={`tel:${tel}`} className="link-u text-[15px] font-medium">
                        {p}
                      </a>
                    )}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#23264E] text-white">
          <div className={`mx-auto grid max-w-[1200px] items-start gap-14 py-24 lg:grid-cols-[1fr_minmax(0,580px)] lg:gap-16 lg:pb-32 lg:pt-[120px] xl:gap-20 ${PAD}`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className="font-[family-name:var(--s41-display)] text-[clamp(2.25rem,3.34vw,3rem)] leading-[1.1]">
                Da el paso hacia tu futuro en España
              </Reveal>
              <Reveal as="p" delay={0.06} className="text-lg leading-[29px] text-white/85">
                Tu proyecto de vida en España merece hacerse con seguridad jurídica y acompañamiento profesional. Nuestro equipo te asesora desde México para que tomes decisiones claras y evites errores desde el inicio.
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-[22px] pt-3" gap={0.07} delay={0.1}>
                {[
                  { Icon: Phone, k: "Ciudad de México", v: PHONE.label, href: PHONE.href },
                  { Icon: EnvelopeSimple, k: "Correo", v: EMAIL, href: `mailto:${EMAIL}` },
                  { Icon: VideoCamera, k: "Atención", v: "Presencial en Polanco u online por videollamada, WhatsApp o correo" },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} as="li" className="flex gap-4">
                    <Icon size={22} className="shrink-0 text-[#CE943F]" />
                    <div className="flex min-w-0 max-w-[420px] flex-col gap-1">
                      <span className="text-sm text-white/65">{k}</span>
                      {href ? (
                        <a href={href} className="link-u w-fit break-all text-lg font-medium sm:break-normal">
                          {v}
                        </a>
                      ) : (
                        <span className="text-lg font-medium">{v}</span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[18px] rounded-[6px] bg-white p-6 text-[#23264E] md:p-10" noteClassName="text-sm text-[#333333]">
                <h3 className="font-[family-name:var(--s41-display)] text-[30px] leading-tight">Solicita tu consulta</h3>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-3.5">
                  <Field label="Nombre" name="nombre" autoComplete="name" />
                  <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                </div>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-3.5">
                  <Field label="Prefijo del país" name="prefijo" autoComplete="tel-country-code" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel-national" />
                </div>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-3.5">
                  <SelectField label="Área legal" name="area" options={["Derecho de Extranjería"]} />
                  <SelectField label="Oficina" name="oficina" options={["México", "Buenos Aires", "Bogotá", "Medellín", "España", "Londres"]} />
                </div>
                <Field label="Asunto" name="asunto" />
                <label className="flex flex-col gap-[7px]">
                  <span className="text-sm font-medium">Cuéntanos más</span>
                  <textarea name="mensaje" rows={4} className={`${FIELD} h-[110px] resize-none py-3`} />
                </label>
                <button type="submit" className={`${NAVY_BTN} w-full justify-center py-4 text-[17px]`}>
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0F1433] text-white">
        <div className={`mx-auto flex max-w-[1200px] flex-col gap-12 pb-28 pt-16 lg:pb-9 ${PAD}`}>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[360px_1fr_1fr] lg:gap-16">
            <div className="flex flex-col items-start gap-5 md:col-span-2 lg:col-span-1">
              <Logo white />
              <p className="text-[15px] leading-6 text-white/70">
                Despacho de abogados experto en derecho de extranjería, con oficinas en Argentina, España, México, Colombia y Reino Unido.
              </p>
              <div className="flex gap-3">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="press flex h-10 w-10 items-center justify-center rounded-[6px] border border-white/20 hover:border-[#CE943F] hover:text-[#CE943F]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 text-[15px] text-white/80">
              <h3 className="font-semibold text-[#CE943F]">Contacto</h3>
              <a href={PHONE.href} className="link-u">Ciudad de México: {PHONE.label}</a>
              <a href="tel:+5491164693476" className="link-u">Buenos Aires: +54 9 11 6469-3476</a>
              <a href="tel:+573126022283" className="link-u">Bogotá: +57 312 602 2283</a>
              <a href="tel:+573115229980" className="link-u">Medellín: +57 311 522 9980</a>
              <a href={`mailto:${EMAIL}`} className="link-u">{EMAIL}</a>
            </div>
            <nav aria-label="Oficinas" className="flex flex-col items-start gap-3 text-[15px] text-white/80">
              <h3 className="font-semibold text-[#CE943F]">Oficinas</h3>
              <a href="#mexico" className="link-u">México</a>
              {["Buenos Aires", "Bogotá", "Medellín", "España", "Londres"].map((o) => (
                <a key={o} href="#oficinas" className="link-u">
                  {o}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/[0.12] pt-6 text-sm text-white/60 lg:flex-row lg:justify-between">
            <p>© Copyright Díaz y Asociados 2026. Todos los derechos reservados.{" "}<HemeronCredit /></p>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              <li>Aviso legal</li>
              <li>Política de privacidad</li>
              <li>Configuración de cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-sm font-medium">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={FIELD} />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-sm font-medium">{label}</span>
      <span className="relative block">
        <select name={name} defaultValue={options[0]} className={`${FIELD} appearance-none pr-10`}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <CaretDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
      </span>
    </label>
  );
}
