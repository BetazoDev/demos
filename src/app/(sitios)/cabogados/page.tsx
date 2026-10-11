import type { Metadata } from "next";
import Image from "next/image";
import { Epilogue, Golos_Text } from "next/font/google";
import type { Icon as PhIcon } from "@phosphor-icons/react";
import {
  ArrowUpRightIcon,
  BankIcon,
  BuildingsIcon,
  CaretDownIcon,
  CheckCircleIcon,
  CoinsIcon,
  CompassIcon,
  EnvelopeSimpleIcon,
  HandshakeIcon,
  HouseLineIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ShieldCheckIcon,
  StorefrontIcon,
  TrendDownIcon,
  UsersIcon,
  UsersThreeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Epilogue({ subsets: ["latin"], variable: "--s06-display" });
const body = Golos_Text({ subsets: ["latin"], variable: "--s06-body" });

export const metadata: Metadata = {
  title: "Cimet Abogados",
  description: "Firma legal estratégica especializada en derecho civil, mercantil, financiero, inmobiliario, así como de seguros y fianzas.",
};

const IMG = "/sitios/cabogados";
const CONTAINER = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const EPI = "font-[family-name:var(--s06-display)]";
const H2 = `${EPI} text-[clamp(2.25rem,3.2vw,2.875rem)] font-semibold leading-[1.11] tracking-[-0.026em]`;
const TEL = "tel:+525521209268";
const WA = "https://wa.me/525521209268?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20sus%20servicios%20legales";
const MAPS = "https://goo.gl/maps/qSqt6MyQughM4wdm6";
const ADDRESS = "Plaza Villa Madrid 1, PH, Roma Norte, Cuauhtémoc, C.P. 06700, Ciudad de México";

const NAV = [
  { label: "Acerca de la firma", href: "#acerca" },
  { label: "Principales fortalezas", href: "#fortalezas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const FORTALEZAS = [
  ["Experiencia", "Efectividad", "Confianza", "Lealtad"],
  ["Asertividad", "Confidencialidad", "Compromiso", "Resultados"],
];

const SERVICIOS: { Icon: PhIcon; t: string; d: string }[] = [
  { Icon: UsersIcon, t: "Derecho Civil", d: "Regula las relaciones o actos celebrados entre los particulares." },
  { Icon: StorefrontIcon, t: "Derecho Mercantil", d: "Regula las relaciones comerciales o actos de comercio." },
  { Icon: BuildingsIcon, t: "Derecho Corporativo", d: "Relacionado con el aspecto interno y regulatorio de todas las sociedades." },
  { Icon: ShieldCheckIcon, t: "Seguros y Fianzas", d: "Regula todo aquello relativo a las pólizas de seguros y fianzas." },
  { Icon: TrendDownIcon, t: "Concursos Mercantiles y Quiebras", d: "Procedimientos cuando un comerciante o persona moral enfrenta complicaciones financieras." },
  { Icon: HandshakeIcon, t: "Mediación y Arbitraje", d: "Métodos alternativos de solución de conflictos entre partes." },
  { Icon: HouseLineIcon, t: "Derecho Inmobiliario", d: "Regula todos los actos y contratos relacionados con bienes inmuebles." },
  { Icon: UsersThreeIcon, t: "Derecho Familiar", d: "Regula y busca proteger todo lo inherente a la familia y sus integrantes." },
  { Icon: BankIcon, t: "Derecho Administrativo", d: "Regula la organización y actividades de la administración pública." },
  { Icon: CompassIcon, t: "Asesoría y Estrategia Jurídica", d: "La información adecuada y las alternativas más acertadas para solucionar la problemática existente." },
  { Icon: CoinsIcon, t: "Financiamiento de Litigios", d: "Financiamiento de litigios nacionales e internacionales." },
  { Icon: MagnifyingGlassIcon, t: "Due Diligence Legal", d: "Investigación durante la potencial compra de una sociedad para determinar riesgos." },
];

const FOOTER_SERVICIOS = [
  ["Derecho Civil", "Derecho Mercantil", "Derecho Corporativo", "Seguros y fianzas", "Concursos Mercantiles", "Mediación y Arbitraje"],
  ["Derecho Inmobiliario", "Derecho Familiar", "Derecho Administrativo", "Asesoría y Estrategia Jurídica", "Financiamiento de litigios", "Due Diligence Legal"],
];

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Cimet Abogados, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Cimet Abogados" width={213} height={48} preload className="h-10 w-auto sm:h-12" />
    </a>
  );
}

const CTA = "press inline-block rounded-[6px] bg-[#E18413] font-semibold text-[#000022] hover:bg-[#F0962A]";

export default function CimetPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s06-body)] text-[#000022] selection:bg-[#E18413] selection:text-[#000022]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#000022] text-white"
        scrolledClassName="shadow-[0_10px_30px_-16px_rgba(0,0,0,0.7)]"
        innerClassName={`${CONTAINER} flex h-20 items-center justify-between gap-9 lg:h-[103px] [&>nav]:ml-auto`}
        linkClassName="text-[15px] font-medium leading-5 text-white"
        panelClassName="bg-[#000022] text-white font-[family-name:var(--s06-body)]"
        panelLinkClassName={`${EPI} text-3xl font-semibold tracking-[-0.02em]`}
        burgerClassName="bg-white"
        actions={
          <>
            <p className="text-sm font-semibold leading-[18px] text-[#DDDDDD]">
              <span aria-current="true">ES</span>
              {" / "}
              <a href="https://cabogados.com.mx/?lang=en" lang="en" className="link-u hover:text-white">
                EN
              </a>
            </p>
            <a href="#contacto" className={`${CTA} px-[22px] py-[13px] text-[15px] leading-5`}>
              Permítanos asesorarle
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#000022] text-white">
          <div className={CONTAINER}>
            <div className="border-t border-white/10" />
            <HeroIntro className="flex flex-col gap-12 pb-20 pt-14 lg:gap-14 lg:pb-28 lg:pt-24">
              <HeroItem as="h1" blur className={`${EPI} text-[clamp(2.375rem,3.9vw,3.5rem)] font-semibold leading-[1.11] tracking-[-0.029em]`}>
                Comprometidos en ofrecerte soluciones y brindarte resultados eficientes.
              </HeroItem>
              <div className="grid gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-end lg:gap-16">
                <div className="flex flex-col items-start gap-8">
                  <HeroItem as="p" className="text-lg leading-[1.53] text-[#DDDDDD] md:text-[19px]">
                    Firma legal estratégica especializada en derecho civil, mercantil, financiero, inmobiliario, así como de seguros y fianzas.
                  </HeroItem>
                  <HeroItem>
                    <a href="#contacto" className={`${CTA} px-7 py-[18px] text-[17px] leading-5`}>
                      Permítanos asesorarle
                    </a>
                  </HeroItem>
                  <HeroItem className="flex w-full flex-col gap-1 border-t border-white/10 pt-6">
                    <p className="text-sm leading-5 text-[#A8A8B8]">Llámenos</p>
                    <a href={TEL} className={`${EPI} link-u w-fit text-[30px] font-semibold leading-9`}>
                      55 2120 9268
                    </a>
                  </HeroItem>
                </div>
                <MediaReveal className="relative h-[300px] overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[440px]" delay={0.3}>
                  <Image src={`${IMG}/mazo.jpg`} alt="Mazo de juez sobre fondo blanco" fill preload sizes="(min-width: 1024px) 716px, 100vw" className="object-cover" />
                </MediaReveal>
              </div>
            </HeroIntro>
          </div>
        </section>

        {/* Fortalezas */}
        <section id="fortalezas" className="scroll-mt-20 bg-[#E18413] lg:scroll-mt-24">
          <div className={`${CONTAINER} grid items-center gap-6 py-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-14`}>
            <Reveal as="h2" className={`${EPI} text-[26px] font-semibold leading-[30px]`}>
              Principales
              <br className="hidden lg:block" /> fortalezas
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-2 lg:gap-3.5" gap={0.045}>
              {FORTALEZAS.map((row) => (
                <li key={row[0]}>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:flex-nowrap lg:justify-between">
                    {row.map((w) => (
                      <StaggerItem key={w} as="li" className={`${EPI} text-[clamp(1.5rem,2.1vw,1.875rem)] font-medium leading-[1.2] tracking-[-0.02em]`}>
                        {w}
                      </StaggerItem>
                    ))}
                  </ul>
                </li>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Acerca de la firma */}
        <section id="acerca" className={`${CONTAINER} grid scroll-mt-20 items-center gap-12 py-20 lg:scroll-mt-24 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16 lg:py-32 xl:gap-[88px]`}>
          <MediaReveal onView className="img-zoom relative aspect-[560/480] w-full overflow-hidden rounded-[6px]" delay={0}>
            <Image src={`${IMG}/acuerdo.jpg`} alt="Apretón de manos sobre un escritorio con documentos" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={H2}>
              Acerca de la firma
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col gap-6">
              <p className="text-xl leading-[1.52] md:text-[21px]">
                Cimet Abogados es una firma legal estratégica en la que se brinda atención directa y personalizada a cada cliente.
              </p>
              <p className="text-base leading-[1.59] text-[#45475A] md:text-[17px]">
                Trabajamos con el compromiso ético y profesional que exigen las necesidades específicas de cada caso, para lograr siempre resultados satisfactorios y soluciones eficaces.
              </p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-3.5 pt-2" gap={0.07}>
              {["Atención directa y personalizada", "Compromiso ético y profesional", "Resultados satisfactorios y soluciones eficaces"].map((x) => (
                <StaggerItem key={x} as="li" className="flex items-center gap-3 text-base font-medium leading-6 md:text-[17px]">
                  <CheckCircleIcon size={22} className="shrink-0 text-[#BF5802]" aria-hidden="true" />
                  {x}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-20 bg-[#F2F2F5] lg:scroll-mt-24">
          <div className={`${CONTAINER} flex flex-col gap-12 py-20 lg:py-[120px]`}>
            <Reveal as="h2" className={H2}>
              Servicios
            </Reveal>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.045}>
              {SERVICIOS.map(({ Icon, t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 rounded-[6px] bg-white px-[26px] py-7 lg:min-h-[250px]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#000022]">
                    <Icon size={22} className="text-[#E18413]" aria-hidden="true" />
                  </span>
                  <h3 className={`${EPI} text-[19px] font-semibold leading-6`}>{t}</h3>
                  <p className="text-[15px] leading-[23px] text-[#45475A]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Financiamiento de litigios */}
        <section aria-labelledby="financiamiento" className="bg-[#000022] text-white lg:grid lg:min-h-[600px] lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-7 px-5 py-20 md:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-16 xl:pr-[88px]">
            <Reveal as="h2" id="financiamiento" className={`${H2} xl:whitespace-nowrap`}>
              Financiamiento de litigios
            </Reveal>
            <Reveal as="p" delay={0.06} className="text-xl leading-[1.52] text-[#E18413] md:text-[21px]">
              Somos una firma líder en México en el financiamiento de litigios nacionales e internacionales.
            </Reveal>
            <Reveal as="p" delay={0.1} className="text-base leading-[1.59] text-[#DDDDDD] md:text-[17px]">
              Desde el arbitraje nacional e internacional hasta asuntos de índole civil, mercantil, financiero, inmobiliario y de seguros y fianzas, sumamos fuerzas para la impartición de justicia en México y la obtención de resultados.
            </Reveal>
            <Reveal delay={0.14}>
              <a href="#contacto" className={`${CTA} px-7 py-[18px] text-[17px] leading-5`}>
                Permítanos asesorarle
              </a>
            </Reveal>
          </div>
          <MediaReveal onView className="relative h-[320px] overflow-hidden sm:h-[420px] lg:h-auto" delay={0}>
            <Image src={`${IMG}/laptop.jpg`} alt="Manos trabajando en una laptop sobre un escritorio de madera" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-[#000022]/20" />
          </MediaReveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className={`${CONTAINER} grid scroll-mt-20 gap-14 py-20 lg:scroll-mt-24 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-16 lg:py-32 xl:gap-[88px]`}>
          <Reveal className="order-2 lg:order-1">
            <DemoForm className="flex flex-col gap-[18px] rounded-[6px] bg-[#F2F2F5] p-6 sm:p-10" noteClassName="text-sm text-[#45475A]">
              <Field label="Nombre completo" name="name" autoComplete="name" />
              <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-4">
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <Field label="Teléfono de contacto" name="phone" type="tel" autoComplete="tel" />
              </div>
              <Field label="Dirección" name="address" autoComplete="street-address" />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold leading-[18px]">Área de servicio</span>
                <span className="relative">
                  <select name="service" defaultValue="" className={`${INPUT} h-[50px] cursor-pointer appearance-none pr-11 [&:has(option[value='']:checked)]:text-[#6B6D7C]`}>
                    <option value="" disabled>
                      Seleccione un área de servicio
                    </option>
                    {SERVICIOS.map((s) => (
                      <option key={s.t} value={s.t}>
                        {s.t}
                      </option>
                    ))}
                  </select>
                  <CaretDownIcon size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
                </span>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold leading-[18px]">Mensaje</span>
                <textarea name="message" rows={5} className={`${INPUT} h-[130px] resize-none py-3`} />
              </label>
              <div>
                <button type="submit" className={`${CTA} px-8 py-4 text-[17px] leading-5`}>
                  Enviar
                </button>
              </div>
            </DemoForm>
          </Reveal>
          <div className="order-1 flex flex-col gap-7 lg:order-2">
            <Reveal className="flex flex-col gap-7">
              <h2 className={H2}>Contacto</h2>
              <p className="text-[17px] leading-[1.61] text-[#45475A] md:text-lg">
                Puede llamarnos o completar el formulario y nos pondremos en contacto con usted a la brevedad.
              </p>
              <a href={TEL} className={`${EPI} link-u w-fit text-[clamp(2rem,2.8vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]`}>
                55 2120 9268
              </a>
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-[22px] border-t border-[#000022]/12 pt-6" gap={0.07}>
              <ContactRow Icon={WhatsappLogoIcon} k="WhatsApp">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="link-u">55 2120 9268</a>
              </ContactRow>
              <ContactRow Icon={EnvelopeSimpleIcon} k="E-mail">
                <a href="mailto:contacto@cabogados.com.mx" className="link-u [overflow-wrap:anywhere]">contacto@cabogados.com.mx</a>
              </ContactRow>
              <ContactRow Icon={MapPinIcon} k="Dirección">
                {ADDRESS}
              </ContactRow>
            </Stagger>
            <Reveal>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="nudge flex w-fit items-center gap-2.5 text-[17px] font-semibold leading-[22px]">
                Ver en Google Maps
                <ArrowUpRightIcon size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#000022] text-[#C4C4D0]">
        <div className={`${CONTAINER} flex flex-col gap-14 pb-28 pt-16 lg:pb-10 lg:pt-20`}>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[300px_minmax(0,1fr)_300px] lg:gap-16">
            <div className="flex flex-col gap-5">
              <Logo />
              <p className="text-[15px] leading-[23px]">Firma legal estratégica especializada en derecho civil, mercantil, financiero, inmobiliario, así como de seguros y fianzas.</p>
              <p className="text-[13px] leading-5 text-[#A8A8B8]">Vínculos: SCJN, CJF, TSJCDMX, TSJEdomex, FGR, RPP</p>
            </div>
            <nav aria-label="Servicios" className="flex flex-col gap-3.5">
              <p className={`${EPI} text-base font-semibold leading-6 text-white`}>Servicios</p>
              <div className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                {FOOTER_SERVICIOS.map((col) => (
                  <ul key={col[0]} className="flex flex-col gap-2.5 text-sm leading-[21px]">
                    {col.map((s) => (
                      <li key={s}>
                        <a href="#servicios" className="link-u hover:text-white">{s}</a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </nav>
            <div className="flex flex-col gap-3 text-sm leading-[21px]">
              <p className={`${EPI} text-base font-semibold leading-6 text-white`}>Permítanos asesorarle</p>
              <a href="mailto:contacto@cabogados.com.mx" className="link-u w-fit hover:text-white">contacto@cabogados.com.mx</a>
              <a href={TEL} className="link-u w-fit hover:text-white">55 2120 9268</a>
              <p>{ADDRESS}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/12 pt-6 text-[13px] leading-5 text-[#A8A8B8] sm:flex-row sm:justify-between">
            <p>© 2026 Cimet Abogados. Todos los derechos reservados.</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              <li>
                <a href="#acerca" className="link-u hover:text-white">Acerca de la firma</a>
              </li>
              <li>
                <a href="#servicios" className="link-u hover:text-white">Servicios</a>
              </li>
              <li>Aviso de privacidad</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full rounded-[6px] border border-[#000022]/15 bg-white px-4 text-base text-[#000022] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#000022] focus:shadow-[0_0_0_3px_rgba(225,132,19,0.35)]";

function ContactRow({ Icon, k, children }: { Icon: PhIcon; k: string; children: React.ReactNode }) {
  return (
    <StaggerItem as="li" className="flex gap-3.5">
      <Icon size={22} className="mt-0.5 shrink-0 text-[#BF5802]" aria-hidden="true" />
      <div className="flex min-w-0 flex-col gap-0.5">
        <p className="text-sm leading-5 text-[#6B6D7C]">{k}</p>
        <div className="text-base font-medium leading-[26px] md:text-[17px]">{children}</div>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold leading-[18px]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-[50px]`} />
    </label>
  );
}
