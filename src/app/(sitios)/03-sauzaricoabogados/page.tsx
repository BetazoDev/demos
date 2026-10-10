import type { Metadata } from "next";
import Image from "next/image";
import { Albert_Sans, EB_Garamond } from "next/font/google";
import type { Icon as PhIcon } from "@phosphor-icons/react";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingsIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  FlagIcon,
  HouseLineIcon,
  IdentificationBadgeIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  ScalesIcon,
  StarIcon,
  WarningCircleIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = EB_Garamond({ subsets: ["latin"], variable: "--s03-display" });
const body = Albert_Sans({ subsets: ["latin"], variable: "--s03-body" });

export const metadata: Metadata = {
  title: "Sauza & Rico Abogados",
  description: "Abogados migratorios en México. Agenda una cita gratis de 15 minutos y lleva tu caso migratorio con éxito.",
};

const IMG = "/sitios/03-sauzaricoabogados";
const SITE = "https://sauzaricoabogados.com/";
const WA = "https://wa.me/5215547921055";
const CONTAINER = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s03-display)]";
const H2 = `${SERIF} text-[clamp(2.5rem,3.9vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.02em]`;

const NAV = [
  { label: "Para personas", href: "#servicios" },
  { label: "Para empresas", href: "#servicios" },
  { label: "Para mexicanos", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: `${SITE}blog/` },
  { label: "FAQ", href: `${SITE}faq/` },
];

const FOOTER_NAV = [
  { label: "Para personas", href: "#servicios" },
  { label: "Para empresas", href: "#servicios" },
  { label: "Para mexicanos", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Pago en línea", href: `${SITE}tienda-2/` },
  { label: "Descargables", href: `${SITE}descargas/` },
  { label: "Blog", href: `${SITE}blog/` },
  { label: "FAQ", href: `${SITE}faq/` },
];

const AYUDA = ["Ser mexicano", "Tener visa", "Ser residente", "Crear tu empresa"];

const CIFRAS = [
  { n: "17", l: "años de experiencia" },
  { n: "4,525", l: "obtenciones de residencia" },
  { n: "7", l: "expertos migratorios" },
  { n: "+2,537", l: "clientes satisfechos" },
];

const SERVICIOS: { Icon: PhIcon; t: string }[] = [
  { Icon: IdentificationBadgeIcon, t: "Visa" },
  { Icon: HouseLineIcon, t: "Residencias" },
  { Icon: FlagIcon, t: "Nacionalidad" },
  { Icon: BookOpenIcon, t: "Pasaporte" },
  { Icon: BriefcaseIcon, t: "Empleadores extranjeros" },
  { Icon: WarningCircleIcon, t: "Alertas migratorias, deportaciones y negativas" },
  { Icon: BuildingsIcon, t: "Creación de empresas" },
  { Icon: ScalesIcon, t: "Juicios familiares" },
];

const FOTOS = [
  { f: "emma-3-300px.jpg", a: "Clienta mostrando su carta de naturalización" },
  { f: "chico-1-300px.jpg", a: "Cliente con su carta de naturalización en el Centro Histórico" },
  { f: "emma-2-300px.jpg", a: "Clienta con su carta de naturalización frente a Bellas Artes" },
  { f: "chico-2-300px.jpg", a: "Cliente celebrando su nacionalidad mexicana" },
  { f: "emma-1-300px.jpg", a: "Clienta celebrando su nacionalidad mexicana" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3.5" aria-label="Sauza & Rico Abogados Migratorios, inicio">
      <Image src={`${IMG}/monograma.svg`} alt="" width={48} height={48} preload className="h-11 w-11 sm:h-12 sm:w-12" />
      <span className="flex flex-col gap-0.5">
        <span className={`${SERIF} text-[24px] font-semibold leading-none text-[#002D72] sm:text-[27px]`}>Sauza &amp; Rico</span>
        <span className="text-[9px] font-semibold uppercase leading-normal tracking-[0.22em] text-[#5A6782] sm:text-[10px]">Abogados migratorios</span>
      </span>
    </a>
  );
}

export default function SauzaRicoPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s03-body)] text-[#14213F] selection:bg-[#002D72] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="border-b border-[#E3E6EF] bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(0,34,91,0.45)]"
        innerClassName={`${CONTAINER} flex h-20 items-center justify-between gap-8 xl:h-[88px]`}
        linkClassName="text-[15px] font-medium text-[#1F2A44]"
        panelClassName="bg-white text-[#14213F] font-[family-name:var(--s03-body)]"
        panelLinkClassName={`${SERIF} text-3xl font-medium`}
        burgerClassName="bg-[#002D72]"
        topBar={
          <div className="hidden bg-[#00225B] text-[13px] text-[#D5DEF2] xl:block">
            <div className={`${CONTAINER} flex h-[42px] items-center justify-between`}>
              <p className="flex items-center gap-2.5">
                <MapPinIcon size={15} className="text-[#AFC0E4]" aria-hidden="true" />
                Av. Ejército Nacional 1112, Oficina 802, Polanco, CDMX
              </p>
              <ul className="flex items-center gap-7">
                <li>
                  <a href="tel:+525511045551" className="link-u flex items-center gap-2">
                    <PhoneIcon size={15} className="text-[#AFC0E4]" aria-hidden="true" />
                    +52 55 1104 5551
                  </a>
                </li>
                <li>
                  <a href="tel:+525510067284" className="link-u flex items-center gap-2">
                    <PhoneIcon size={15} className="text-[#AFC0E4]" aria-hidden="true" />
                    +52 55 1006 7284
                  </a>
                </li>
                <li>
                  <a href="mailto:selene@sauzaricoabogados.com" className="link-u flex items-center gap-2">
                    <EnvelopeSimpleIcon size={15} className="text-[#AFC0E4]" aria-hidden="true" />
                    selene@sauzaricoabogados.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
        actions={
          <>
            <a href={`${SITE}tienda-2/`} className="link-u text-[15px] font-medium text-[#1F2A44]">
              Pago en línea
            </a>
            <a href="#contacto" className="press rounded-[6px] bg-[#002D72] px-[22px] py-[13px] text-[15px] font-semibold text-white hover:bg-[#183881]">
              Agenda tu consulta
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#00225B] text-white">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={40}>
            <Image src={`${IMG}/calle-de-mexico.jpg`} alt="" fill preload sizes="100vw" className="object-cover object-center" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#00225BF2_0%,#00225BB8_100%)] lg:bg-[linear-gradient(90deg,#00225BF2_0%,#00225B8C_50%,#00225B00_90%)]"
          />
          <HeroIntro className={`${CONTAINER} flex flex-col gap-12 py-20 lg:min-h-[720px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-24`}>
            <div className="flex max-w-[700px] flex-col gap-7">
              <HeroItem as="h1" blur className={`${SERIF} text-[clamp(3rem,5.6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]`}>
                Abogados migratorios en México
              </HeroItem>
              <HeroItem as="p" className="max-w-[480px] text-lg leading-[1.5] text-[#E1E7F5] md:text-xl">
                Agenda una cita gratis de 15 minutos y lleva tu caso migratorio con éxito.
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-3.5 pt-2">
                <a href="#contacto" className="press rounded-[6px] bg-white px-7 py-[17px] text-[17px] font-semibold text-[#002D72] hover:bg-[#E6EAF4]">
                  Agenda tu consulta
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-2.5 rounded-[6px] bg-[#157351] px-6 py-4 text-[17px] font-semibold text-white hover:bg-[#1A8560]">
                  <WhatsappLogoIcon size={20} aria-hidden="true" />
                  WhatsApp
                </a>
              </HeroItem>
            </div>
            <HeroItem className="w-full rounded-[6px] border border-white/18 bg-[#00225BCC] px-6 py-7 backdrop-blur-[8px] sm:px-8 lg:w-[380px] lg:shrink-0">
              <p className="text-[15px] font-semibold text-[#AFC0E4]">Te ayudamos a</p>
              <ul>
                {AYUDA.map((a, i) => (
                  <li key={a} className={i < AYUDA.length - 1 ? "border-b border-white/18" : ""}>
                    <a href="#servicios" className="nudge flex items-center justify-between py-4">
                      <span className={`${SERIF} text-[clamp(1.625rem,2.1vw,1.875rem)] font-medium leading-[1.3]`}>{a}</span>
                      <ArrowUpRightIcon size={20} className="text-[#AFC0E4]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Cifras */}
        <section aria-label="Cifras" className="border-b border-[#E3E6EF]">
          <Stagger as="dl" className={`${CONTAINER} grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:gap-10 lg:py-16`} gap={0.07}>
            {CIFRAS.map((c) => (
              <StaggerItem key={c.l} className="flex flex-col gap-1">
                <dt className="order-2 text-base text-[#4A5672] md:text-[17px]">{c.l}</dt>
                <dd className={`${SERIF} order-1 text-[clamp(3rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.02em] text-[#002D72]`}>
                  <CountUp value={c.n} />
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F4F4F9] xl:scroll-mt-36">
          <div className={`${CONTAINER} py-20 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className={`${H2} text-[#002D72] lg:text-[60px]`}>¿En qué te ayudamos?</h2>
              <nav aria-label="Público" className="w-full rounded-[8px] border border-[#DCE1EC] bg-white p-1.5 md:w-fit">
                <ul className="grid grid-cols-3 gap-1 text-[13px] font-semibold sm:text-[15px] md:flex md:gap-2">
                  <li>
                    <a href="#servicios" aria-current="true" className="press block whitespace-nowrap rounded-[6px] bg-[#002D72] px-2 py-2.5 text-center text-white sm:px-[18px]">
                      Para personas
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" className="press block whitespace-nowrap rounded-[6px] px-2 py-2.5 text-center text-[#1F2A44] hover:bg-[#F4F4F9] sm:px-[18px]">
                      Para empresas
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" className="press block whitespace-nowrap rounded-[6px] px-2 py-2.5 text-center text-[#1F2A44] hover:bg-[#F4F4F9] sm:px-[18px]">
                      Para mexicanos
                    </a>
                  </li>
                </ul>
              </nav>
            </Reveal>
            <Stagger as="ul" className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-[#DCE1EC] bg-[#DCE1EC] lg:grid-cols-4" gap={0.05}>
              {SERVICIOS.map(({ Icon, t }) => (
                <StaggerItem key={t} as="li" className="bg-white">
                  <a href="#contacto" className="nudge flex h-full min-h-[170px] flex-col justify-between gap-6 p-5 transition-colors duration-200 hover:bg-[#F8F9FC] sm:min-h-[210px] sm:p-7 lg:min-h-[230px] lg:p-8">
                    <span className="flex items-start justify-between">
                      <Icon size={36} className="h-8 w-8 text-[#002D72] sm:h-9 sm:w-9" aria-hidden="true" />
                      <ArrowUpRightIcon size={18} className="text-[#8C97B3]" aria-hidden="true" />
                    </span>
                    <span className={`${SERIF} text-[21px] font-medium leading-[1.1] text-[#14213F] sm:text-[28px]`}>{t}</span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nacionalizados */}
        <section aria-labelledby="nacionalizados" className="bg-[#00225B] text-white">
          <div className={`${CONTAINER} py-20 lg:py-28`}>
            <Reveal className="flex max-w-[760px] flex-col gap-3.5">
              <h2 id="nacionalizados" className={H2}>
                Nuestros nacionalizados de septiembre
              </h2>
              <p className="text-lg text-[#C9D4EE]">Clientes que obtuvieron la nacionalidad mexicana con nosotros.</p>
            </Reveal>
            <Stagger
              as="ul"
              className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
              gap={0.06}
            >
              {FOTOS.map((p) => (
                <StaggerItem key={p.f} as="li" className="img-zoom relative aspect-[227/300] w-[62%] shrink-0 snap-start overflow-hidden rounded-[6px] sm:w-[38%] lg:w-auto">
                  <Image src={`${IMG}/${p.f}`} alt={p.a} fill sizes="(min-width: 1024px) 230px, 62vw" className="object-cover" />
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-7">
                <div className="flex items-center gap-4">
                  <span className="flex gap-[3px] text-[#F5C451]" role="img" aria-label="5 estrellas">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} size={20} weight="fill" aria-hidden="true" />
                    ))}
                  </span>
                  <p className="text-[17px] font-semibold">70 reseñas de 5 estrellas</p>
                </div>
                <p className="text-base text-[#C9D4EE]">Top 5% de empresas mejor valoradas por Trustindex</p>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="press flex w-fit items-center gap-2.5 rounded-[6px] bg-[#157351] px-[22px] py-[15px] text-base font-semibold hover:bg-[#1A8560]">
                <WhatsappLogoIcon size={20} aria-hidden="true" />
                También quiero ser mexicano
              </a>
            </Reveal>
          </div>
        </section>

        {/* Formas de emigrar */}
        <section className={`${CONTAINER} grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[560px_minmax(0,1fr)] xl:gap-24 lg:py-32`}>
          <MediaReveal onView className="relative aspect-[560/600] w-full overflow-hidden rounded-[6px]" delay={0}>
            <Image src={`${IMG}/aeropuerto.jpg`} alt="Sala de documentación de un aeropuerto" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </MediaReveal>
          <Reveal className="flex flex-col gap-7">
            <h2 className={`${H2} text-[#002D72] min-[1400px]:whitespace-nowrap`}>Formas de emigrar a México</h2>
            <p className="text-[17px] leading-[1.72] text-[#4A5672] md:text-lg">
              Si tienes el propósito de vivir en el país, se deben tener en cuenta aspectos como la nacionalidad de origen, la edad, estado civil, actividad económica, estudios, experiencia laboral y los vínculos existentes con una empresa que te contrate, o con un esposo(a) o hijo(a) de nacionalidad mexicana.
            </p>
            <div className="flex items-center gap-5 border-t border-[#DCE1EC] pt-7">
              <span className="relative h-16 w-16 shrink-0 bg-[#002D72]">
                <Image src={`${IMG}/monograma-blanco.png`} alt="" fill sizes="64px" className="object-contain" />
              </span>
              <p className={`${SERIF} text-[clamp(1.5rem,2.1vw,1.875rem)] font-medium leading-[1.17] text-[#14213F]`}>
                Te ayudamos a encontrar la mejor solución migratoria.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-24 bg-[#F4F4F9] xl:scroll-mt-36">
          <div className={`${CONTAINER} flex flex-col gap-14 py-20 lg:gap-16 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${H2} text-[#002D72] lg:text-[60px]`}>Nosotros</h2>
              <p className="max-w-[900px] text-lg leading-[1.7] text-[#2A3550] md:text-xl">
                Sauza &amp; Rico Abogados, S.C. es una firma de abogados especializados en Derecho Migratorio y Familiar. Contamos con más de diecisiete años de experiencia trabajando con empresas nacionales e internacionales que desean contratar extranjeros para laborar en México, y con extranjeros que desean residir por más de un año en el país. Si deseas trabajar, constituir una empresa, adquirir un inmueble o vivir aquí con tu pensión de jubilado, te podemos ayudar.
              </p>
            </Reveal>
            <Stagger className="grid gap-10 md:grid-cols-3" gap={0.07}>
              {[
                ["Misión", "Solucionar problemas legales en materia migratoria asesorando a nuestros clientes en todo momento para proteger sus intereses en México."],
                ["Visión", "Ser una alternativa profesional en el mercado de servicios jurídicos en México, logrando la confianza de nuestros clientes con base en resultados."],
                ["Valores", "Compromiso, ética e integridad, honestidad, profesionalismo y responsabilidad."],
              ].map(([t, d]) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3 border-t-2 border-[#002D72] pt-6">
                  <h3 className={`${SERIF} text-[30px] font-medium text-[#002D72]`}>{t}</h3>
                  <p className="text-base leading-[1.625] text-[#4A5672]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Stagger className="grid gap-6 lg:grid-cols-2" gap={0.08}>
              {[
                {
                  i: "SS",
                  n: "Selene Sauza Quebrado",
                  r: "Abogada especialista en migración",
                  b: "Egresada de la Facultad de Derecho de la UNAM, con Maestría en Derecho. Ayuda a extranjeros y a sus familias a emigrar a México y obtener su residencia temporal o permanente y su pasaporte mexicano.",
                },
                {
                  i: "SG",
                  n: "Sarai Gertrudiz Sandoval",
                  r: "Asociada",
                  b: "Licenciada en Contaduría por la UNAM. Asesora a personas físicas y morales del extranjero para constituir su empresa y elegir el régimen fiscal más favorable, evitando la doble tributación.",
                },
              ].map((p) => (
                <StaggerItem key={p.n} as="article" className="flex flex-col gap-5 rounded-[8px] border border-[#DCE1EC] bg-white p-7 sm:flex-row sm:gap-6 sm:p-9">
                  <span className={`${SERIF} flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E6EAF4] text-2xl font-medium text-[#002D72]`} aria-hidden="true">
                    {p.i}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className={`${SERIF} text-[clamp(1.625rem,2.1vw,1.875rem)] font-medium leading-tight text-[#14213F]`}>{p.n}</h3>
                    <p className="text-[15px] font-semibold text-[#183881]">{p.r}</p>
                    <p className="text-base leading-[1.625] text-[#4A5672]">{p.b}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Consultas */}
        <section aria-labelledby="consultas" className={`${CONTAINER} flex flex-col items-center gap-12 py-20 lg:py-[120px]`}>
          <Reveal as="h2" id="consultas" className={`${H2} max-w-[900px] text-center text-[#002D72]`}>
            ¿No estás seguro por dónde empezar? ¡Hablemos!
          </Reveal>
          <Stagger className="grid w-full gap-6 md:grid-cols-2" gap={0.08}>
            <StaggerItem className="flex flex-col items-start gap-5 rounded-[8px] bg-[#002D72] p-8 sm:p-12 lg:min-h-[290px]">
              <p className="text-base font-semibold text-[#AFC0E4]">Para empezar</p>
              <h3 className={`${SERIF} text-[clamp(2rem,2.8vw,2.5rem)] font-medium leading-[1.08] text-white`}>Cita gratis de 15 minutos</h3>
              <a href="#contacto" className="press rounded-[6px] bg-white px-6 py-[15px] text-base font-semibold text-[#002D72] hover:bg-[#E6EAF4]">
                Agenda tu consulta
              </a>
            </StaggerItem>
            <StaggerItem className="flex flex-col items-start gap-5 rounded-[8px] border border-[#DCE1EC] bg-[#F4F4F9] p-8 sm:p-12 lg:min-h-[290px]">
              <p className="text-base font-semibold text-[#183881]">¿Necesitas más tiempo?</p>
              <h3 className={`${SERIF} text-[clamp(2rem,2.8vw,2.5rem)] font-medium leading-[1.08] text-[#14213F]`}>Prueba una consulta de 40 minutos</h3>
              <a href="#contacto" className="press rounded-[6px] border-[1.5px] border-[#002D72] px-6 py-[14px] text-base font-semibold text-[#002D72] hover:bg-[#002D72] hover:text-white">
                Consulta premium
              </a>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#00225B] text-white xl:scroll-mt-36">
          <div className={`${CONTAINER} grid gap-14 py-20 lg:grid-cols-[1fr_560px] lg:gap-[88px] lg:py-[120px]`}>
            <div className="flex flex-col gap-8">
              <Reveal as="h2" className={H2}>
                Visítanos en Ciudad de México
              </Reveal>
              <Stagger className="flex flex-col gap-8" gap={0.07}>
                <ContactRow Icon={MapPinIcon} k="Dirección">
                  <p>
                    Av. Ejército Nacional 1112, Oficina 802, Colonia Polanco,
                    <br />
                    Alcaldía Miguel Hidalgo, C.P. 11530, Ciudad de México
                  </p>
                </ContactRow>
                <ContactRow Icon={PhoneIcon} k="Teléfonos">
                  <a href="tel:+525511045551" className="link-u w-fit">+52 55 1104 5551</a>
                  <a href="tel:+525510067284" className="link-u w-fit">+52 55 1006 7284</a>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimpleIcon} k="Correo">
                  <a href="mailto:selene@sauzaricoabogados.com" className="link-u w-fit [overflow-wrap:anywhere]">selene@sauzaricoabogados.com</a>
                  <a href="mailto:contacto@sauzaricoabogados.com" className="link-u w-fit [overflow-wrap:anywhere]">contacto@sauzaricoabogados.com</a>
                </ContactRow>
                <ContactRow Icon={WhatsappLogoIcon} k="WhatsApp">
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="link-u w-fit">+52 1 55 4792 1055</a>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[8px] bg-white p-6 text-[#14213F] sm:p-11" noteClassName="text-sm text-[#4A5672]">
                <h3 className={`${SERIF} text-[34px] font-medium`}>Escríbenos</h3>
                <Field label="Nombre" name="name" autoComplete="name" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="h-[130px] resize-none rounded-[6px] border border-[#BFC7D9] px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#002D72] focus:shadow-[0_0_0_3px_rgba(0,45,114,0.14)]"
                  />
                </label>
                <button type="submit" className="press h-[54px] w-full rounded-[6px] bg-[#002D72] text-base font-semibold text-white hover:bg-[#183881]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="overflow-hidden bg-[#001A47] text-[#C9D4EE]">
        <div className={`${CONTAINER} flex flex-col gap-10 pt-14`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex items-center gap-3.5 text-white">
              <li>
                <a href="https://www.facebook.com/sauzaricoabogados" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="press block hover:text-[#AFC0E4]">
                  <FacebookLogoIcon size={22} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abogados_migratorios_sr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="press block hover:text-[#AFC0E4]">
                  <InstagramLogoIcon size={22} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="press block hover:text-[#AFC0E4]">
                  <WhatsappLogoIcon size={22} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-[13px] text-[#8FA0C8] sm:flex-row sm:justify-between">
            <p>Copyright © Sauza &amp; Rico Abogados, S.C.</p>
            <a href={SITE} className="link-u w-fit">Avisos de privacidad</a>
          </div>
          <Image src={`${IMG}/wordmark-royal.png`} alt="" width={2400} height={242} sizes="(min-width: 1280px) 1200px, 100vw" className="h-auto w-full" />
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ Icon, k, children }: { Icon: PhIcon; k: string; children: React.ReactNode }) {
  return (
    <StaggerItem className="flex gap-4">
      <Icon size={22} className="mt-0.5 shrink-0 text-[#AFC0E4]" aria-hidden="true" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm font-semibold text-[#AFC0E4]">{k}</p>
        <div className="flex flex-col text-[17px] leading-[1.61] md:text-lg">{children}</div>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] rounded-[6px] border border-[#BFC7D9] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#002D72] focus:shadow-[0_0_0_3px_rgba(0,45,114,0.14)]"
      />
    </label>
  );
}
