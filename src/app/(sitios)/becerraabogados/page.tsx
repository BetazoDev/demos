import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Gilda_Display, Nunito_Sans } from "next/font/google";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  BuildingsIcon,
  CaretDownIcon,
  CopyrightIcon,
  FacebookLogoIcon,
  GlobeHemisphereWestIcon,
  MapPinIcon,
  PhoneIcon,
  ReceiptIcon,
  ScalesIcon,
  ShareNetworkIcon,
  ShieldCheckIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Gilda_Display({ subsets: ["latin"], weight: "400", variable: "--s18-display" });
const body = Nunito_Sans({ subsets: ["latin"], variable: "--s18-body" });

export const metadata: Metadata = {
  title: "Becerra Orefice Abogados",
  description:
    "Aptitud, actitud y humanismo frente a los problemas de los clientes, adoptándolos como si fueran propios. Becerra Orefice Abogados, S.C., Ciudad de México.",
};

const IMG = "/sitios/becerraabogados";
const FACEBOOK = "http://www.facebook.com/pages/Becerra-Orefice-Abogados/239246529524716";
const TWITTER = "https://twitter.com/becerraabogados";
const MAPS =
  "https://maps.google.com.mx/maps?f=q&source=embed&hl=es&geocode=&q=Rio+Tiber+91+Int.+401+Col+Cuauht%C3%A9moc,+Delegaci%C3%B3n+Cuauht%C3%A9moc&aq=&sll=23.625269,-102.540613&sspn=20.87598,43.286133&ie=UTF8&hq=&hnear=Eje+2+Poniente+(R%C3%ADo+Tiber)+91,+Cuauht%C3%A9moc,+Ciudad+de+M%C3%A9xico,+Distrito+Federal&t=m&ll=19.429768,-99.16925&spn=0.012141,0.012875&z=15";
const TEL = "tel:+525552085560";

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Socios", href: "#socios" },
];

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Contacto", href: "#contacto" },
];

const AREAS = [
  { t: "Derecho corporativo", Icon: BuildingsIcon, d: "Constitución de sociedades, actas de asamblea y de consejo, poderes, contratos civiles y mercantiles, y auditoría legal de empresas." },
  { t: "Derechos de autor, marcas y patentes", Icon: CopyrightIcon, d: "Registro de marcas, obras, patentes y diseños industriales; contratos de propiedad intelectual y defensa en conflictos de la materia." },
  { t: "Litigio", Icon: ScalesIcon, d: "Defensa como actor o demandado en materia civil y mercantil, recuperación de cartera vencida, cobro de créditos hipotecarios y juicio de amparo." },
  { t: "Derecho laboral", Icon: BriefcaseIcon, d: "Asesoría en relaciones laborales individuales y colectivas, y defensa en conflictos ante las autoridades del trabajo." },
  { t: "Derecho fiscal", Icon: ReceiptIcon, d: "Demandas de nulidad fiscal, recursos de revocación, devoluciones y compensaciones, planeación fiscal y amparos administrativos." },
  { t: "Derecho penal", Icon: ShieldCheckIcon, d: "Denuncias y querellas ante Ministerios Públicos, asistencia legal en órdenes de aprehensión, amparos y fianzas." },
  { t: "Derecho migratorio", Icon: GlobeHemisphereWestIcon, d: "Trámites de nacionalidad y extranjería ante el Instituto Nacional de Migración: internación, estancia y salida de extranjeros." },
];

const SOCIOS = [
  {
    n: "Héctor Antonio Becerra Orefice",
    c: [
      "Licenciado en Derecho por la Universidad Anáhuac.",
      "Maestría en Administración Pública, Universidad Anáhuac.",
      "Director Jurídico en el Instituto Mexiquense de Cultura Física y Deporte.",
      "Diplomados en materia laboral, procesal civil y proceso mercantil.",
    ],
  },
  {
    n: "Juan Enrique Benítez Jove",
    c: [
      "Licenciado en Derecho por la Universidad Anáhuac.",
      "Diploma en Derecho Penal por la Barra Mexicana de Abogados.",
      "Catedrático del programa Horus en materia penal en el Estado de México.",
    ],
  },
  {
    n: "Rubén Adrián Noriega Cornejo",
    c: [
      "Licenciado en Derecho por la UNAM.",
      "Director Jurídico de Verificación en la Secretaría de Protección Civil del Distrito Federal.",
      "Diploma en Derecho Fiscal y Administrativo.",
    ],
  },
  {
    n: "Omar Sánchez Lira",
    c: ["Licenciado en Derecho por la Universidad Anáhuac.", "Diploma en Derecho Corporativo.", "Diplomados en Derecho Migratorio y en Propiedad Industrial."],
  },
];

const ESTADOS = [
  "Aguascalientes", "B. California", "B. California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango",
  "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro",
  "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas", "Otro País",
];

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const FIELD =
  "h-[50px] rounded-[6px] border border-[#D8CBB5] bg-[#FFFCF6] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#980F3A] focus:shadow-[0_0_0_3px_rgba(152,15,58,0.14)]";


function Logo({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  return (
    <a href="#top" className={`block ${className}`} aria-label="Becerra Orefice Abogados, inicio">
      <Image src={`${IMG}/${inverse ? "logo-white.svg" : "logo.svg"}`} alt="" width={160} height={104} className="h-full w-auto" preload={!inverse} />
    </a>
  );
}

export default function BecerraAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s18-body)] text-[#2A1A20] selection:bg-[#980F3A] selection:text-white`}
    >
      {/* Utility bar (scrolls away; the nav below stays sticky) */}
      <div className="hidden bg-[#81072C] text-sm text-white lg:block">
        <div className={`${WRAP} flex h-11 items-center justify-between`}>
          <div className="flex items-center gap-8">
            <p className="flex items-center gap-2">
              <MapPinIcon className="h-[15px] w-[15px] text-[#F3D9A0]" />
              Río Tiber 91, Despacho 401, Col. Cuauhtémoc, Ciudad de México
            </p>
            <a href={TEL} className="link-u flex items-center gap-2">
              <PhoneIcon className="h-[15px] w-[15px] text-[#F3D9A0]" />
              55 5208 5560
            </a>
          </div>
          <p className="font-semibold">
            Español <span aria-hidden="true">&nbsp;|&nbsp;</span> Inglés
          </p>
        </div>
      </div>

      <SiteNav
        logo={<Logo className="h-[60px] lg:h-[104px]" />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(129,7,44,0.45)]"
        innerClassName={`${WRAP} flex h-[84px] items-center justify-between gap-10 lg:h-[124px] [&>nav]:ml-auto`}
        linkClassName="mx-1 text-base font-semibold text-[#2A1A20]"
        panelClassName="bg-white text-[#2A1A20] font-[family-name:var(--s18-body)]"
        panelLinkClassName="font-[family-name:var(--s18-display)] text-3xl"
        burgerClassName="bg-[#81072C]"
        actions={
          <>
            <a href={TEL} className="text-base font-semibold text-[#81072C] lg:hidden">
              55 5208 5560
            </a>
            <a href="#contacto" className="press rounded-[6px] bg-[#980F3A] px-[26px] py-[14px] text-base font-bold text-white hover:bg-[#81072C]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#FBF5EA]">
          <div className={`${WRAP} flex flex-col gap-12 pb-20 pt-14 md:pt-20 lg:flex-row lg:items-center lg:gap-20 lg:pb-[104px] lg:pt-24`}>
            <HeroIntro className="flex flex-1 flex-col gap-8">
              <HeroItem as="h1" blur className="font-[family-name:var(--s18-display)] text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.03] tracking-[-1px]">
                Aptitud, actitud <br />y humanismo
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-lg leading-[1.55] text-[#5F5459] md:text-xl md:leading-[31px]">
                Frente a los problemas de los clientes, adoptándolos como si fueran propios, es algo que nos diferencia de la competencia.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-2">
                <a href="#contacto" className="press rounded-[6px] bg-[#980F3A] px-8 py-[18px] text-[17px] font-bold text-white hover:bg-[#81072C]">
                  Contáctanos
                </a>
                <a href="#areas" className="nudge flex items-center gap-2.5 text-[17px] font-bold text-[#980F3A]">
                  Ver áreas de práctica
                  <ArrowRightIcon className="h-[18px] w-[18px]" />
                </a>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="relative h-[300px] w-full overflow-hidden rounded-[6px] sm:h-[420px] lg:h-[480px] lg:w-[520px] lg:shrink-0" delay={0.25}>
              <Image
                src={`${IMG}/abogados_l.jpg`}
                alt="Mazo de juez sobre su base"
                fill
                preload
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-[2.4%_50%]"
              />
            </MediaReveal>
          </div>
        </section>

        {/* Credenciales */}
        <section aria-label="La firma en cifras" className="border-b border-[#EADFCB]">
          <Stagger className={`${WRAP} grid grid-cols-3 gap-y-8 py-12 lg:flex lg:items-center lg:py-14`} gap={0.07}>
            {[
              ["4", "socios"],
              ["3", "asociados"],
              ["7", "áreas de práctica"],
            ].map(([n, l], i) => (
              <StaggerItem
                key={l}
                className={`flex flex-col gap-2 lg:h-16 lg:flex-1 lg:flex-row lg:items-center lg:gap-4 ${i === 0 ? "pr-4 lg:pr-8" : "border-l border-[#EADFCB] px-4 lg:px-8"}`}
              >
                <CountUp value={n} duration={0.9} className="font-[family-name:var(--s18-display)] text-[clamp(3rem,5vw,4rem)] leading-none text-[#980F3A]" />
                <span className="text-[15px] font-semibold leading-[22px] md:text-[17px]">{l}</span>
              </StaggerItem>
            ))}
            <StaggerItem
              as="p"
              className="col-span-3 border-t border-[#EADFCB] pt-8 font-[family-name:var(--s18-display)] text-[22px] leading-[30px] md:text-2xl lg:w-[411px] lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
            >
              Socios miembros de la Barra Mexicana, Colegio de Abogados
            </StaggerItem>
          </Stagger>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className={`${WRAP} grid scroll-mt-28 items-start gap-12 py-24 lg:grid-cols-[1fr_480px] lg:gap-[88px] lg:py-[136px]`}>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className="font-[family-name:var(--s18-display)] text-[clamp(2.25rem,4vw,2.875rem)] leading-[1.11]">
              Una firma legal consolidada al paso de los años
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-6">
              <p className="text-lg leading-[1.63] md:text-[19px] md:leading-[31px]">
                Becerra Orefice Abogados se ha consolidado gracias a la gran visión, compromiso y honradez de su titular, el Licenciado Héctor A. Becerra Orefice, quien con su experiencia ha sabido liderar la firma. Hoy contamos con una extensa cartera de clientes que nos respaldan y recomiendan.
              </p>
              <p className="text-[17px] leading-[28px] text-[#5F5459]">
                Contamos con un equipo de abogados especializados en las distintas ramas del derecho: corporativo, fiscal, laboral, propiedad intelectual, civil, mercantil, penal, administrativo y contencioso.
              </p>
              <p className="text-[17px] leading-[28px] text-[#5F5459]">
                BOAA se encuentra integrado por cuatro socios, tres asociados y un equipo interdisciplinario de profesionales especializados en áreas complementarias a las disciplinas jurídicas.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="flex flex-col gap-10 rounded-[6px] bg-[#980F3A] px-7 pb-12 pt-10 text-white md:px-12 md:pb-[52px] md:pt-12">
            {[
              ["Misión", "Comprometidos con la sociedad en general para ayudarles a solucionar sus problemas legales de forma personalizada, con el más alto nivel profesional, enmarcados en un código ético de responsabilidad y honradez."],
              ["Visión", "Continuar fortaleciéndonos como una firma confiable, transparente y dentro del marco de la Ley en beneficio de los intereses de nuestro cliente, manejando costos razonables y determinados, manteniendo siempre la mejor calidad en nuestro servicio."],
            ].map(([t, d]) => (
              <div key={t} className="flex flex-col gap-3.5">
                <h3 className="font-[family-name:var(--s18-display)] text-[34px] leading-tight">{t}</h3>
                <p className="text-[17px] leading-[27px]">{d}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-28 bg-[#FBF5EA]">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[380px_1fr] lg:gap-20 lg:py-[136px]`}>
            <div className="flex flex-col gap-7">
              <Reveal className="flex flex-col gap-7">
                <h2 className="font-[family-name:var(--s18-display)] text-[clamp(2.25rem,4vw,2.875rem)] leading-[1.11]">Áreas de práctica</h2>
                <p className="text-[17px] leading-[28px] text-[#5F5459]">
                  En Becerra Orefice Abogados prestamos servicios legales personalizados con el más alto nivel profesional, especializados en cada una de las áreas del derecho, para lograr un análisis objetivo de cada asunto.
                </p>
              </Reveal>
              <MediaReveal onView delay={0.05} className="img-zoom relative h-[240px] overflow-hidden rounded-[6px] sm:h-[300px]">
                <Image src={`${IMG}/abogados_j.jpg`} alt="Pluma firmando un documento" fill sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
              </MediaReveal>
            </div>
            <Stagger className="grid items-start gap-x-12 gap-y-12 sm:grid-cols-2" gap={0.06}>
              {AREAS.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5">
                  <Icon className="h-[30px] w-[30px] text-[#980F3A]" />
                  <h3 className="font-[family-name:var(--s18-display)] text-[26px] leading-[31px]">{t}</h3>
                  <p className="text-base leading-[26px] text-[#5F5459]">{d}</p>
                </StaggerItem>
              ))}
              <StaggerItem className="flex flex-col items-start gap-5 rounded-[6px] bg-[#81072C] p-8">
                <p className="font-[family-name:var(--s18-display)] text-[26px] leading-[31px] text-white xl:whitespace-nowrap">Envíanos tus comentarios</p>
                <a href="#contacto" className="press rounded-[6px] bg-white px-6 py-[14px] text-base font-bold text-[#81072C] hover:bg-[#FBF5EA]">
                  Contáctanos
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className={`${WRAP} scroll-mt-28 py-24 lg:py-[136px]`}>
          <Reveal className="flex max-w-[760px] flex-col gap-5">
            <h2 className="font-[family-name:var(--s18-display)] text-[clamp(2.5rem,4.5vw,3.25rem)] leading-[1.1]">Socios</h2>
            <p className="text-lg leading-[29px] text-[#5F5459]">
              Abogados serios, dinámicos y constantemente capacitados, miembros de la Fraternidad Legal Internacional Phi Delta Phi y de la Barra Mexicana, Colegio de Abogados.
            </p>
          </Reveal>
          <Stagger className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {SOCIOS.map(({ n, c }) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-3 border-t-2 border-[#980F3A] pt-7">
                <h3 className="font-[family-name:var(--s18-display)] text-[26px] leading-[31px]">{n}</h3>
                <ul className="flex flex-col gap-2.5 pt-2">
                  {c.map((x) => (
                    <li key={x} className="text-[15px] leading-[23px] text-[#5F5459]">
                      {x}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-28 bg-[#F5D78E]">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[1fr_560px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-9">
              <Reveal as="h2" className="font-[family-name:var(--s18-display)] text-[clamp(2.75rem,5vw,3.75rem)] leading-[1.1]">
                Contáctanos
              </Reveal>
              <Stagger className="flex flex-col gap-9" gap={0.07}>
                <StaggerItem className="flex gap-[18px]">
                  <MapPinIcon className="h-6 w-6 shrink-0 text-[#81072C]" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold text-[#81072C]">Dirección</p>
                    <p className="text-lg leading-[28px]">
                      Río Tiber 91, Despacho 401
                      <br />
                      Col. Cuauhtémoc, C.P. 06500
                      <br />
                      Ciudad de México
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <PhoneIcon className="h-6 w-6 shrink-0 text-[#81072C]" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold text-[#81072C]">Teléfono</p>
                    <a href={TEL} className="link-u w-fit text-lg leading-[28px]">
                      55 5208 5560
                    </a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <ShareNetworkIcon className="h-6 w-6 shrink-0 text-[#81072C]" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold text-[#81072C]">Síguenos</p>
                    <div className="flex flex-col text-lg leading-[28px]">
                      <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="link-u w-fit">
                        Facebook: Becerra Orefice Abogados
                      </a>
                      <a href={TWITTER} target="_blank" rel="noopener noreferrer" className="link-u w-fit">
                        Twitter: @becerraabogados
                      </a>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer" className="nudge flex w-fit items-center gap-2.5 text-base font-bold text-[#81072C]">
                    Ver en Google Maps
                    <ArrowUpRightIcon className="h-[18px] w-[18px]" />
                  </a>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[6px] bg-white p-6 sm:p-11" noteClassName="text-sm text-[#5F5459]">
                <h3 className="font-[family-name:var(--s18-display)] text-[30px] leading-tight">Envíanos tus comentarios</h3>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Estado</span>
                  <span className="relative">
                    <select name="estado" defaultValue="" className={`${FIELD} w-full appearance-none pr-10 text-[#2A1A20] [&:has(option[value='']:checked)]:text-[#6E6468]`}>
                      <option value="" disabled>
                        Selecciona tu estado
                      </option>
                      {ESTADOS.map((e) => (
                        <option key={e}>{e}</option>
                      ))}
                    </select>
                    <CaretDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E6468]" />
                  </span>
                </label>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                  <Field label="E-mail" name="email" type="email" autoComplete="email" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Dudas o comentarios</span>
                  <textarea name="comentarios" rows={4} className={`${FIELD} h-[120px] resize-y py-3`} />
                </label>
                <button type="submit" className="press self-start rounded-[6px] bg-[#980F3A] px-9 py-4 text-[17px] font-bold text-white hover:bg-[#81072C]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#81072C] text-white">
        <div className={`${WRAP} flex flex-col gap-11 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <Logo inverse className="h-[104px] w-fit" />
            <nav aria-label="Pie de página" className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
              <ul className="flex flex-wrap gap-x-10 gap-y-3 text-base font-semibold">
                {FOOTER_NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="press hover:text-[#F3D9A0]">
                  <FacebookLogoIcon className="h-[22px] w-[22px]" />
                </a>
                <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="press hover:text-[#F3D9A0]">
                  <TwitterLogoIcon className="h-[22px] w-[22px]" />
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-[#F1D5DD] lg:flex-row lg:justify-between">
            <p>Copyright © 2026 Becerra Orefice, S.C.{" "}<HemeronCredit /></p>
            <p>Río Tiber 91, Despacho 401, Col. Cuauhtémoc, Ciudad de México · 55 5208 5560</p>
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
      <input name={name} type={type} autoComplete={autoComplete} className={FIELD} />
    </label>
  );
}
