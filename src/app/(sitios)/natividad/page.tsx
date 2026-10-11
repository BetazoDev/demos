import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Figtree, Josefin_Sans } from "next/font/google";
import {
  ArrowRight,
  Briefcase,
  Buildings,
  CaretDown,
  CheckSquare,
  EnvelopeSimple,
  FacebookLogo,
  IdentificationCard,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  MapTrifold,
  Phone,
  Scales,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Josefin_Sans({ subsets: ["latin"], weight: ["600", "700"], style: ["normal", "italic"], variable: "--s61-display" });
const body = Figtree({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s61-body" });

export const metadata: Metadata = {
  title: "Natividad Abogados, S. C.",
  description: "45 años de experiencia liderando el Derecho Laboral en México. Somos socios de negocios para alcanzar sus objetivos.",
};

const IMG = "/sitios/natividad";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s61-display)]";
const TEL = "tel:+525550897200";
const MAIL = "mailto:contacto@natividad.mx";
const BLOG = "https://natividad.mx/blog-grid";
const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61563379294009", Icon: FacebookLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/natividad-abogados-sc/posts/?feedView=all", Icon: LinkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/natividadabogados/", Icon: InstagramLogo },
];

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Blog", href: BLOG },
];

const CIFRAS = [
  { n: "+60", l: "Abogados" },
  { n: "+40", l: "Corresponsales" },
  { n: "99%", l: "Casos de éxito" },
  { n: "+1.3K", l: "Clientes" },
];

const VENTAJAS = [
  "Asesoría estratégica personalizada",
  "Cumplimiento normativo y reducción de riesgos",
  "Respuestas ejecutivas en tiempo real",
  "Cobertura nacional con red de corresponsales",
];

const VALORES = ["Pasión y compromiso", "Excelencia profesional", "Transparencia y confianza", "Lealtad y ética jurídica"];

const HITOS = [
  { t: "CONASAMI", d: "Miembros del Consejo de la Comisión Nacional de Salarios Mínimos por el Sector Empresarial desde 1980." },
  {
    t: "CCE, T-MEC y reformas",
    d: "Participación activa en el Consejo Coordinador Empresarial, asesores sobre el T-MEC (USMCA) y negociación de cambios legales desde 1987 hasta la reforma de 2022.",
  },
  {
    t: "Red nacional y alianzas globales",
    d: "La más extensa red de corresponsales en toda la República, bajo nuestra estricta coordinación jurídica, y alianzas estratégicas que trascienden las fronteras.",
  },
];

const SERVICIOS = [
  { t: "Colectivo y consultoría", d: "Asesoría y atención de demandas ante Juntas. Control del proceso y disminución de riesgos.", Icon: UsersThree },
  { t: "Litigio individual", d: "Demandas individuales ante Juntas Federales o Locales de Conciliación y Arbitraje y Tribunales Laborales.", Icon: Briefcase },
  { t: "Corresponsales", d: "Contamos con un área especializada en la Ciudad de México y con una red de 45 corresponsales de abogados.", Icon: MapTrifold },
  { t: "Amparo", d: "Asesoramiento y representación en casos de amparo directo e indirecto.", Icon: Scales },
  { t: "Litigio administrativo", d: "Impugnamos multas, negativas de permisos, entre otras que afecten a su empresa.", Icon: Buildings },
  { t: "REPSE", d: "Registro de Prestadoras de Servicios Especializados u Obras Especializadas.", Icon: IdentificationCard },
];

const OTROS = [
  { t: "Condiciones generales", d: "Experiencia y especialización en relaciones laborales y en temas de cumplimiento de trabajo." },
  { t: "Compliance laboral", d: "Detectamos y gestionamos los riesgos de incumplimiento normativo en el ámbito laboral." },
  { t: "Seguridad e higiene", d: "Especialistas en la correcta integración de la Comisión de Seguridad e Higiene." },
  { t: "Migratorio", d: "Un servicio integral y personalizado en derecho migratorio." },
  { t: "Capacitación y adiestramiento", d: "Especialistas en el cumplimiento en materia de capacitación." },
  { t: "Capacitación STPS", d: "Capacitación especializada esencial para el cumplimiento normativo." },
];

const SOCIOS_A = ["Tomás J. Natividad Galeana", "Enrique Soto Soto", "Mariel A. Trejo Barcenas", "Oscar Z. Larios Lozano"];
const SOCIOS_B = [
  ["María Concepción Galicia López", "Gil Pedraza Chávez", "Guadalupe Chávez Manjarrez", "Bárbara Cervantes Morales"],
  ["Juan Carlos Jiménez Villaseñor", "Guadalupe Villar Martínez", "Margarita Y. González Hernández"],
];
const ADMINISTRACION = ["Pedro V. Bonifacio Mestiza", "Carolina Izurieta Alarcón"];

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Natividad Abogados, inicio">
      <Image src={`${IMG}/logo.png`} alt="" width={1574} height={497} preload className="h-auto w-[150px] md:w-[184px]" />
    </a>
  );
}

export default function NatividadPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s61-body)] text-[#1C1D1E] selection:bg-[#FE0000] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-black/10 bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(0,0,0,0.45)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-8 px-5 md:h-24 md:px-8 xl:px-0"
        linkClassName="mx-1 text-base font-medium text-[#1C1D1E]"
        panelClassName="bg-white text-[#1C1D1E] font-[family-name:var(--s61-body)]"
        panelLinkClassName={`${DISPLAY} text-[28px] font-bold`}
        burgerClassName="bg-[#1C1D1E]"
        actions={
          <>
            <a href={TEL} className="link-u mr-2 text-base font-semibold text-[#1C1D1E]">
              +52 55 5089 7200
            </a>
            <a
              href="#contacto"
              className="press border-2 border-[#FE0000] px-[22px] py-[10px] text-base font-bold leading-[1.2] text-black transition-[background-color,color] duration-200 hover:bg-[#FE0000] hover:text-white"
            >
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid lg:h-[700px] lg:grid-cols-[minmax(0,740fr)_minmax(0,700fr)]">
          <HeroIntro className="flex flex-col justify-center gap-8 px-5 py-16 md:px-8 md:py-20 lg:py-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-[72px]">
            <HeroItem
              as="h1"
              blur
              className={`${DISPLAY} max-w-[560px] text-[clamp(2.75rem,4.75vw,4.25rem)] font-bold leading-[1.02] tracking-[-1px] text-black`}
            >
              Firma líder en derecho laboral
            </HeroItem>
            <HeroItem as="p" className="max-w-[548px] text-lg leading-[1.55] text-[#333333] md:text-xl">
              45 años de experiencia liderando el Derecho Laboral en México. Somos socios de negocios para alcanzar sus objetivos.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2">
              <a href="#contacto" className="press bg-[#FE0000] px-8 py-[18px] text-[19px] font-bold leading-[1.2] text-white transition-colors duration-200 hover:bg-[#D90000]">
                Contáctanos
              </a>
              <a href="#nosotros" className="nudge flex items-center gap-2.5 border-b-2 border-black pb-1 text-[17px] font-bold text-black">
                Conozca la firma
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[340px] overflow-hidden md:h-[480px] lg:h-full" delay={0.25}>
            <Image
              src={`${IMG}/recepcion.jpg`}
              alt="Recepción de Natividad Abogados con el logotipo iluminado"
              fill
              preload
              sizes="(min-width: 1024px) 49vw, 100vw"
              className="object-cover"
            />
          </MediaReveal>
        </section>

        {/* Cifras */}
        <section aria-label="Natividad Abogados en cifras" className="bg-[#FE0000] text-white">
          <Stagger className={`${WRAP} grid grid-cols-2 gap-x-6 gap-y-10 pb-14 pt-12 lg:grid-cols-4 lg:pb-14 lg:pt-[52px]`} gap={0.07}>
            {CIFRAS.map(({ n, l }) => (
              <StaggerItem key={l} className="flex flex-col gap-1.5">
                <p className={`${DISPLAY} text-[clamp(3rem,4.45vw,4rem)] font-bold leading-none`}>
                  <CountUp value={n} />
                </p>
                <p className="text-[19px] font-bold leading-[1.2]">{l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* La firma */}
        <section id="nosotros" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid items-center gap-12 pb-20 pt-20 lg:grid-cols-[500px_1fr] lg:gap-24 lg:pb-[120px] lg:pt-32`}>
            <MediaReveal onView className="relative aspect-[500/640] w-full max-w-[500px] overflow-hidden" delay={0}>
              <Image
                src={`${IMG}/oficinas.jpg`}
                alt="Interior de las oficinas de Natividad Abogados con escalera y obras de arte"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={`${DISPLAY} text-[clamp(2rem,2.95vw,2.625rem)] font-bold leading-[1.12] text-black`}>
                Planeación legal estratégica e integral para el cumplimiento de los objetivos empresariales
              </Reveal>
              <Reveal delay={0.08} className="space-y-6 text-lg leading-[1.67] text-[#333333]">
                <p>
                  Nos dedicamos a ser su aliado estratégico, humanizando el derecho laboral para que su empresa prospere con confianza y seguridad. Nuestra filosofía se centra en la planeación y la innovación constante, creciendo junto a nuestros clientes para el logro de sus objetivos.
                </p>
                <p>Somos una de las firmas más informadas y relacionadas del medio laboral empresarial en México.</p>
              </Reveal>
              <Stagger as="ul" className="grid gap-x-8 gap-y-5 pt-4 sm:grid-cols-2" gap={0.06}>
                {VENTAJAS.map((v) => (
                  <StaggerItem key={v} as="li" className="flex gap-3">
                    <CheckSquare className="h-6 w-6 shrink-0 text-[#FE0000]" />
                    <span className="text-[17px] font-semibold leading-6 text-black">{v}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Trayectoria */}
        <section aria-labelledby="trayectoria" className="bg-[#1C1D1E] text-white">
          <div className={`${WRAP} grid gap-16 py-20 lg:grid-cols-[540px_1fr] lg:gap-[104px] lg:py-32`}>
            <div className="flex flex-col gap-6">
              <Reveal className="flex flex-col gap-6">
                <p className={`${DISPLAY} text-[clamp(2.375rem,3.6vw,3.25rem)] font-bold italic leading-[1.08]`}>«Impossibilium nulla obligatio»</p>
                <p className="text-xl italic leading-[1.2] text-[#C9C9C9]">Nadie está obligado a lo imposible.</p>
                <p className="text-lg leading-[1.67] text-[#E3E3E3]">
                  Desde nuestro nacimiento nos ha regido este principio de vida. Sin embargo, nuestro compromiso nos impulsa a hacer hasta lo imposible para lograr el éxito en sus conflictos y ofrecer soluciones estratégicas.
                </p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-3.5 pt-5" gap={0.06}>
                {VALORES.map((v) => (
                  <StaggerItem key={v} as="li" className="flex items-center gap-3.5">
                    <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-[#FE0000]" />
                    <span className="text-[17px] font-semibold leading-[1.2]">{v}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div className="flex flex-col gap-10 lg:pt-2">
              <Reveal className="flex flex-col gap-4">
                <h2 id="trayectoria" className={`${DISPLAY} text-[clamp(1.875rem,2.5vw,2.25rem)] font-bold leading-[1.14]`}>
                  45 años, trayectoria de liderazgo
                </h2>
                <p className="text-lg leading-[1.6] text-[#C9C9C9]">
                  Líderes en Derecho Laboral, Seguridad Social y Derecho Administrativo, garantizando profesionalismo, confidencialidad y eficiencia.
                </p>
              </Reveal>
              <Stagger className="flex flex-col gap-10" gap={0.08}>
                {HITOS.map(({ t, d }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-2 border-t border-white/15 pt-6">
                    <h3 className={`${DISPLAY} text-2xl font-bold leading-[1.1]`}>{t}</h3>
                    <p className="text-[17px] leading-[1.59] text-[#C9C9C9]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="servicios" className="scroll-mt-24 bg-[#F5F5F5] text-black">
          <div className={`${WRAP} flex flex-col gap-16 pb-20 pt-20 lg:gap-[72px] lg:pb-[120px] lg:pt-32`}>
            <div className="grid gap-14 lg:grid-cols-[380px_1fr] lg:gap-[88px]">
              <div className="flex flex-col gap-6">
                <Reveal className="flex flex-col gap-6">
                  <h2 className={`${DISPLAY} text-[clamp(2rem,2.95vw,2.625rem)] font-bold leading-[1.12]`}>Soluciones integrales en derecho laboral</h2>
                  <p className="text-lg leading-[1.6] text-[#333333]">Servicios de asesoría empresarial en Derecho Laboral, Seguridad Social y Derecho Administrativo.</p>
                </Reveal>
                <MediaReveal onView className="relative h-[320px] w-full overflow-hidden sm:h-[440px]" delay={0.05}>
                  <Image
                    src={`${IMG}/letrero.jpg`}
                    alt="Letrero iluminado de Natividad Abogados, Asesores de Empresas"
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover"
                  />
                </MediaReveal>
              </div>
              <Stagger className="grid content-start gap-x-12 gap-y-12 sm:grid-cols-2 lg:gap-y-14 lg:pt-2" gap={0.06}>
                {SERVICIOS.map(({ t, d, Icon }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3">
                    <Icon className="h-8 w-8 text-[#FE0000]" />
                    <h3 className={`${DISPLAY} text-[26px] font-bold leading-[1.2]`}>{t}</h3>
                    <p className="text-base leading-[1.63] text-[#333333]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div className="flex flex-col gap-7 border-t border-black/15 pt-10">
              <Reveal as="h3" className={`${DISPLAY} text-2xl font-bold leading-none`}>
                Otros servicios
              </Reveal>
              <Stagger className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
                {OTROS.map(({ t, d }) => (
                  <StaggerItem key={t} className="flex flex-col gap-1.5">
                    <h4 className="text-[17px] font-bold leading-[1.2]">{t}</h4>
                    <p className="text-[15px] leading-[1.53] text-[#4A4A4A]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className="scroll-mt-24 bg-white text-black">
          <div className={`${WRAP} flex flex-col gap-14 pb-20 pt-20 lg:gap-16 lg:pb-[120px] lg:pt-32`}>
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.2vw,2.875rem)] font-bold leading-[1.05]`}>Estrategia y trayectoria</h2>
              <p className="text-lg leading-[1.6] text-[#333333]">
                El despacho es dirigido por el Socio Director, Tomás H. Natividad Sánchez, junto a un equipo de abogados especialistas.
              </p>
            </Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-[700px_1fr] lg:gap-[72px]">
              <MediaReveal onView className="relative aspect-[700/480] w-full overflow-hidden" delay={0}>
                <Image
                  src={`${IMG}/socios.jpg`}
                  alt="Los socios de Natividad Abogados"
                  fill
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="object-cover"
                />
              </MediaReveal>
              <Stagger className="flex flex-col gap-7" gap={0.07}>
                <StaggerItem className="flex flex-col gap-1.5 border-b border-black/15 pb-7">
                  <p className="text-[15px] font-semibold leading-[1.2] text-[#8B0101]">Socio fundador y Director general</p>
                  <h3 className={`${DISPLAY} pt-0.5 text-[30px] font-bold leading-none`}>Tomás H. Natividad S.</h3>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-3">
                  <p className="text-[15px] font-semibold leading-[1.2] text-[#8B0101]">Socios, consultoría y área colectiva</p>
                  <ul className="flex flex-col gap-3">
                    {SOCIOS_A.map((n) => (
                      <li key={n} className={`${DISPLAY} text-2xl font-semibold leading-none`}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              </Stagger>
            </div>
            <Stagger className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-[1fr_320px] lg:gap-[72px]" gap={0.08}>
              <StaggerItem className="flex flex-col gap-4">
                <p className="text-[15px] font-semibold leading-[1.2] text-[#8B0101]">Socios: litigio, seguridad social, derecho administrativo, amparo y materias relacionadas</p>
                <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {SOCIOS_B.map((col) => (
                    <ul key={col[0]} className="flex flex-col gap-2.5">
                      {col.map((n) => (
                        <li key={n} className="text-[17px] leading-[1.2] text-[#1C1D1E]">
                          {n}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-4">
                <p className="text-[15px] font-semibold leading-[1.2] text-[#8B0101]">Socios administración general / jurídica</p>
                <ul className="flex flex-col gap-4">
                  {ADMINISTRACION.map((n) => (
                    <li key={n} className="text-[17px] leading-[1.2] text-[#1C1D1E]">
                      {n}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative isolate scroll-mt-24 overflow-hidden bg-[#0D0D0E] text-white">
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={40}>
            <Image src={`${IMG}/patio.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0D0D0E]/80" />
          <div className={`${WRAP} grid items-center gap-14 py-20 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-[18px]">
                <h2 className={`${DISPLAY} text-[clamp(2.125rem,3.2vw,2.875rem)] font-bold leading-[1.11]`}>¿Necesitas asesoría laboral especializada?</h2>
                <p className="text-lg leading-[1.6] text-[#E3E3E3]">Completa nuestro formulario de contacto y uno de nuestros expertos te responderá a la brevedad.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-[26px]" gap={0.07}>
                {[
                  { Icon: MapPin, k: "Ubicación", v: "Buffon 4, Col. Nueva Anzures, Miguel Hidalgo, Ciudad de México, C.P. 11590" },
                  { Icon: Phone, k: "Teléfono", v: "+52 55 5089 7200", href: TEL },
                  { Icon: EnvelopeSimple, k: "Email", v: "contacto@natividad.mx", href: MAIL },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} className="flex gap-[18px]">
                    <Icon className="h-6 w-6 shrink-0 text-[#FE0000]" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-[15px] leading-[1.2] text-[#BDBDBD]">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit text-lg font-semibold leading-[1.45]">
                          {v}
                        </a>
                      ) : (
                        <p className="max-w-[400px] text-lg font-semibold leading-[1.45]">{v}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[18px] bg-white p-6 text-black md:p-11" noteClassName="text-sm text-[#4A4A4A]">
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo" name="correo" type="email" autoComplete="email" />
                <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-semibold leading-[1.2]">Servicios</span>
                  <span className="relative block">
                    <select name="servicio" defaultValue="" className={`${FIELD} h-[50px] w-full appearance-none pr-12`}>
                      <option value="" disabled hidden />
                      {[...SERVICIOS, ...OTROS].map(({ t }) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <CaretDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#333333]" />
                  </span>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-semibold leading-[1.2]">Escribe un mensaje</span>
                  <textarea name="mensaje" rows={4} className={`${FIELD} h-[120px] resize-y py-3`} />
                </label>
                <button type="submit" className="press w-full bg-[#FE0000] py-[17px] text-[19px] font-bold leading-[1.2] text-white transition-colors duration-200 hover:bg-[#D90000]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C1D1E] text-[#BDBDBD]">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10 lg:pt-[72px]`}>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[360px_1fr_1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-[22px] sm:col-span-2 lg:col-span-1">
              <a href="#top" aria-label="Natividad Abogados, inicio" className="block w-fit">
                <Image src={`${IMG}/logo-blanco.png`} alt="" width={1574} height={497} className="h-auto w-[220px]" />
              </a>
              <p className="max-w-[360px] text-[15px] leading-[1.6]">
                Natividad Abogados: 45 años garantizando profesionalismo, confidencialidad, eficiencia y seguridad laboral mediante asesoría especializada.
              </p>
              <div className="flex gap-3">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="press flex h-[42px] w-[42px] items-center justify-center border border-white/20 text-white transition-[border-color,color] duration-200 hover:border-[#FE0000] hover:text-[#FE0000]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <FooterCol
              title="Servicios"
              links={SERVICIOS.map(({ t }) => ({ label: t, href: "#servicios" }))}
            />
            <FooterCol
              title="Enlaces"
              links={[
                { label: "Inicio", href: "#top" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Servicios", href: "#servicios" },
                { label: "Equipo", href: "#equipo" },
                { label: "Blog", href: BLOG },
                { label: "Aviso de privacidad" },
              ]}
            />
            <div className="flex flex-col gap-3">
              <p className={`${DISPLAY} text-lg font-bold leading-none text-white`}>Contacto</p>
              <p className="max-w-[260px] text-[15px] leading-[1.53]">Buffon No. 4, Col. Nueva Anzures, Miguel Hidalgo, Ciudad de México 11590.</p>
              <a href={TEL} className="link-u w-fit text-[15px] leading-[1.53]">
                +52 55 5089 7200
              </a>
              <a href={MAIL} className="link-u w-fit text-[15px] leading-[1.53]">
                contacto@natividad.mx
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/[0.12] pt-6 text-[15px] md:flex-row md:items-center md:justify-between">
            <p className="text-[#9E9E9E]">© 2026 Natividad Abogados S. C.{" "}<HemeronCredit /></p>
            <p className="text-[#E3E3E3]">Aviso de privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "border border-[#D4D4D4] bg-[#F5F5F5] px-4 text-base text-black outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#FE0000] focus:shadow-[0_0_0_3px_rgba(254,0,0,0.14)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] font-semibold leading-[1.2]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${FIELD} h-[50px]`} />
    </label>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href?: string }[] }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3">
      <p className={`${DISPLAY} text-lg font-bold leading-none text-white`}>{title}</p>
      <ul className="flex flex-col gap-3 text-[15px] leading-[1.2]">
        {links.map((l) =>
          l.href ? (
            <li key={l.label}>
              <a href={l.href} className="link-u">
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.label}>{l.label}</li>
          ),
        )}
      </ul>
    </nav>
  );
}
