import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Forum, Work_Sans } from "next/font/google";
import { ArrowRight, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Forum({ subsets: ["latin"], weight: "400", variable: "--s23-display" });
const body = Work_Sans({ subsets: ["latin"], variable: "--s23-body" });

export const metadata: Metadata = {
  title: "Escalona Llanes Abogados",
  description: "Litigio y consultoría en materia penal, civil, mercantil y amparo.",
};

const IMG = "/sitios/escalonallanesabogados";
const SITE = "https://escalonallanesabogados.mx";
const DISPLAY = "font-[family-name:var(--s23-display)] font-normal";

const NAV = [
  { label: "Socios", href: "#socios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Consultas", href: "#consultas" },
  { label: "Pro Bono", href: "#pro-bono" },
  { label: "Blog", href: `${SITE}/blog/` },
];

const MATERIAS = ["Derecho penal", "Derecho civil", "Derecho mercantil y comercial", "Juicio de amparo"];

const ESPECIALIZADOS = [
  {
    t: "Negociación asistida",
    d: "Facilitamos la comunicación entre las partes para llegar a un acuerdo satisfactorio. Antes y durante la negociación se brinda asesoría sobre los alcances y limitantes de la situación.",
  },
  {
    t: "Asesoría para los procedimientos de mediación",
    d: "Asesoramos a las partes para emprender una mediación o cuando participan en un procedimiento de mediación, para que conozcan sus derechos, obligaciones y herramientas para llegar a un convenio.",
  },
];

const SOCIOS = [
  {
    n: "Alejandro Llanes Pineda",
    p: [
      "Especialidad en el Juicio de Amparo",
      "Especialidad en Procesal Civil y Mercantil",
      "Diplomado en Juicios Orales y Sistema Acusatorio",
      "Diplomado de Mediación",
      "Maestría en Derecho Procesal Constitucional",
    ],
  },
  {
    n: "Luis Escalona González Cortés",
    p: ["Especialidad en el Juicio de Amparo", "Diplomado en Mediación", "Maestría en Derecho Constitucional y Derechos Humanos"],
  },
];

const PHONES = [
  { v: "55 5250 4237", href: "tel:+525552504237" },
  { v: "55 5545 0582", href: "tel:+525555450582" },
];
const EMAIL = "miriam@escalonallanesabogados.mx";

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  ...NAV,
  { label: "Cotización", href: "#cotizacion" },
];

export default function EscalonaLlanesPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s23-body)] text-[#1B1B1B] selection:bg-[#1B1B1B] selection:text-white`}
    >
      <SiteNav
        logo={
          <a href="#top" aria-label="Escalona Llanes Abogados, inicio" className="block">
            <Image src={`${IMG}/logo.svg`} alt="" width={234} height={90} preload className="h-[62px] w-auto lg:h-[90px]" />
          </a>
        }
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(27,27,27,0.45)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center gap-9 px-5 md:px-8 lg:h-[104px] xl:px-0 [&>div:first-child]:mr-auto [&_nav_ul]:gap-9"
        linkClassName="text-[15px] font-medium leading-6 text-[#1B1B1B]"
        panelClassName="bg-white text-[#1B1B1B] font-[family-name:var(--s23-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl`}
        burgerClassName="bg-[#1B1B1B]"
        actions={
          <a href="#cotizacion" className="press bg-[#1B1B1B] px-[26px] py-[14px] text-[15px] font-semibold leading-[18px] text-white hover:bg-[#3A3839]">
            Cotización
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[600px] overflow-hidden bg-[#1B1B1B] lg:h-[720px]">
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={50}>
            <Image src={`${IMG}/slide.jpg`} alt="Balanza de la justicia" fill preload sizes="100vw" className="object-cover object-[30%_center] lg:object-center" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#1B1B1B4D_0%,#1B1B1BB3_45%,#1B1B1BF2_100%)] lg:bg-[linear-gradient(90deg,#1B1B1B00_0%,#1B1B1B1A_16%,#1B1B1BE0_44%,#1B1B1BF2_100%)]"
          />
          <div className="mx-auto flex w-full max-w-[1200px] items-end px-5 pb-16 pt-40 md:px-8 lg:items-center lg:justify-end lg:py-0 xl:px-0">
            <HeroIntro className="flex w-full max-w-[720px] flex-col gap-7">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.5rem,4.2vw,3.5rem)] leading-[1.06] text-white`}>
                Asuntos complejos y relevantes en el área de litigio
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-[17px] leading-[1.6] text-white/85 md:text-[19px] md:leading-[30px]">
                Litigio y consultoría en materia penal, civil, mercantil y amparo.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-7 pt-3">
                <a href="#cotizacion" className="press bg-white px-[30px] py-4 text-base font-semibold leading-[19px] text-[#1B1B1B] hover:bg-[#E9E8E6]">
                  Cotización
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-semibold leading-[19px] text-white">
                  Ver servicios
                  <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-12 px-5 py-20 md:px-8 lg:py-28 xl:px-0">
          <Reveal as="h2" className={`${DISPLAY} max-w-[1040px] text-[clamp(1.75rem,2.9vw,2.5rem)] leading-[1.25]`}>
            Somos una firma de abogados que se especializa en el litigio y la consultoría en derecho penal, mercantil y comercial, civil, juicio de amparo y negociaciones.
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_640px] lg:gap-[60px]">
            <Reveal delay={0.08} className="flex flex-col gap-5 border-t border-[#4D4A4C] pt-7 text-[17px] leading-[27px] text-[#303030] lg:max-w-[500px]">
              <p>
                Escalona Llanes Abogados, S.C. es una firma especializada en la atención de asuntos jurídicos en las diferentes materias como litigio, consultoría y servicios especializados.
              </p>
              <p>
                Nos especializamos en la atención de asuntos complejos y relevantes en el área de litigio, brindando soluciones satisfactorias e inteligentes a asuntos que la mayoría de los abogados no encuentran solución.
              </p>
            </Reveal>
            <MediaReveal onView delay={0} className="relative aspect-[640/400] w-full overflow-hidden">
              <Image src={`${IMG}/servicios_2.jpg`} alt="Mano sosteniendo un mazo de juez" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="relative isolate scroll-mt-24 overflow-hidden bg-[#1B1B1B] text-white">
          <Image src={`${IMG}/bgservindex.jpg`} alt="" fill sizes="100vw" className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#1B1B1BD6]" />
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-20 md:px-8 lg:py-28 xl:px-0">
            <Reveal className="flex flex-col gap-4">
              <h2 className={`${DISPLAY} text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.1]`}>Servicios</h2>
              <p className="text-[17px] leading-[29px] text-white/80 md:text-lg">La firma se especializa en el litigio y la consultoría en las materias:</p>
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-20">
              <Stagger as="ul" className="flex max-w-[680px] flex-col" gap={0.07}>
                {MATERIAS.map((m) => (
                  <StaggerItem key={m} as="li" className={`${DISPLAY} border-t border-white/[0.18] py-[22px] text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.14]`}>
                    {m}
                  </StaggerItem>
                ))}
              </Stagger>
              <Stagger className="flex flex-col gap-9" gap={0.08} delay={0.1}>
                {ESPECIALIZADOS.map(({ t, d }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3">
                    <h3 className={`${DISPLAY} text-[26px] leading-[31px]`}>{t}</h3>
                    <p className="text-base leading-[26px] text-white/[0.76]">{d}</p>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <a href={`${SITE}/servicios/`} className="nudge flex w-fit items-center gap-2.5 text-base font-semibold leading-[19px]">
                    Ver todos los servicios
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-14 px-5 py-20 md:px-8 lg:py-28 xl:px-0">
          <Reveal className="flex flex-col gap-3.5">
            <h2 className={`${DISPLAY} text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.1]`}>Socios</h2>
            <p className="text-[17px] leading-[29px] text-[#303030] md:text-lg">Escalona Llanes Abogados, S.C.</p>
          </Reveal>
          <Stagger className="grid items-start gap-6 md:grid-cols-2" gap={0.08}>
            {SOCIOS.map(({ n, p }) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-5 bg-[#F4F4F3] p-7 md:p-11">
                <h3 className={`${DISPLAY} text-[clamp(1.75rem,2.6vw,2.125rem)] leading-[1.15]`}>{n}</h3>
                <p className="text-[15px] leading-6 text-[#5E5E5E]">Licenciado en derecho por la Universidad Panamericana. Posgrados en la Universidad Panamericana:</p>
                <ul className="flex flex-col gap-2.5">
                  {p.map((x) => (
                    <li key={x} className="flex items-baseline gap-3.5 text-base leading-[23px]">
                      <span aria-hidden="true" className="h-px w-3.5 shrink-0 -translate-y-[5px] bg-[#4D4A4C]" />
                      {x}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Consultas y Pro Bono */}
        <section id="consultas" className="grid scroll-mt-24 bg-[#F4F4F3] lg:grid-cols-[minmax(0,600fr)_minmax(0,840fr)]">
          <MediaReveal onView delay={0} className="relative h-[300px] overflow-hidden md:h-[420px] lg:h-auto lg:min-h-[645px]">
            <Image src={`${IMG}/slide2.jpg`} alt="Libros y mazo de juez sobre una mesa de madera" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-12 px-5 py-16 md:px-8 lg:py-[104px] lg:pl-20 lg:pr-[max(2rem,calc((100vw-1200px)/2))]">
            <Reveal className="flex flex-col gap-4">
              <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,2.75rem)] leading-[1.1]`}>Consultas</h2>
              <p className="text-[17px] leading-[27px] text-[#303030]">
                Si desea consultar a un abogado para que lo asesore o le brinde información, puede contactarnos de lunes a viernes de 9:00 a 17:00 hrs para concertar una cita y venir a nuestras oficinas.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                {PHONES.map(({ v, href }) => (
                  <a key={v} href={href} className="flex items-center gap-2.5 text-lg font-semibold leading-[23px]">
                    <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                    <span className="link-u">{v}</span>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal id="pro-bono" delay={0.08} className="flex max-w-[640px] scroll-mt-28 flex-col gap-4 border-t border-[#4D4A4C40] pt-10">
              <h3 className={`${DISPLAY} text-[32px] leading-[37px]`}>Pro Bono</h3>
              <p className="text-base leading-[26px] text-[#303030]">
                El servicio Pro Bono se otorga a las personas que no cuentan con la capacidad para pagar un abogado: como empresa socialmente responsable, nos interesa que el cliente tenga la oportunidad de solucionar su asunto. Otra opción es el Bufete Jurídico Gratuito de la Universidad Panamericana.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Cotización */}
        <section id="cotizacion" className="mx-auto grid max-w-[1200px] scroll-mt-24 gap-14 px-5 py-20 md:px-8 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-20 lg:py-28 xl:px-0">
          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-3.5">
              <h2 className={`${DISPLAY} text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.1]`}>Cotización</h2>
              <p className="text-[17px] leading-[29px] text-[#303030] md:text-lg lg:whitespace-nowrap">Para mayor información comunícate con nosotros.</p>
            </Reveal>
            <Stagger className="flex flex-col gap-8" gap={0.06}>
              <ContactItem Icon={MapPin} label="Dirección">
                <p>Calle Gutenberg 178, Col. Anzures, Alcaldía Miguel Hidalgo, C.P. 11590, Ciudad de México</p>
              </ContactItem>
              <ContactItem Icon={Phone} label="Teléfonos">
                {PHONES.map(({ v, href }) => (
                  <a key={v} href={href} className="link-u block w-fit">{v}</a>
                ))}
              </ContactItem>
              <ContactItem Icon={Mail} label="Correo">
                <a href={`mailto:${EMAIL}`} className="link-u block w-fit break-all">{EMAIL}</a>
              </ContactItem>
              <ContactItem Icon={Clock} label="Horario">
                <p>Lunes a viernes, 9:00 a 17:00 hrs</p>
              </ContactItem>
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-[22px] bg-[#F4F4F3] p-6 md:p-12" noteClassName="text-sm text-[#5E5E5E]">
              <Field label="Nombre (requerido)" name="nombre" autoComplete="name" required />
              <Field label="Correo electrónico (requerido)" name="correo" type="email" autoComplete="email" required />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold leading-[22px]">Tipo de asunto</span>
                <span className="relative block">
                  <select
                    name="tipo"
                    defaultValue=""
                    className={`${FIELD} h-[52px] w-full appearance-none pr-12 text-[15px] [&:has(option[value='']:checked)]:text-[#8A8A8A]`}
                  >
                    <option value="" disabled>
                      Penal, Civil, Mercantil, Amparo, Negociaciones u Otros
                    </option>
                    {["Penal", "Civil", "Mercantil", "Amparo", "Negociaciones", "Otros"].map((o) => (
                      <option key={o} value={o} className="text-[#1B1B1B]">
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1B1B1B]" />
                </span>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold leading-[22px]">Descripción del asunto</span>
                <textarea name="descripcion" className={`${FIELD} h-[150px] resize-y py-3.5`} />
              </label>
              <button type="submit" className="press w-fit bg-[#1B1B1B] px-9 py-4 text-base font-semibold leading-[19px] text-white hover:bg-[#3A3839]">
                Enviar
              </button>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#1B1B1B] text-white/80">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-28 pt-16 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <a href="#top" aria-label="Escalona Llanes Abogados, inicio" className="block w-fit">
              <Image src={`${IMG}/logo-logo-slider.png`} alt="" width={150} height={102} />
            </a>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-[15px] leading-6 sm:flex sm:flex-wrap sm:gap-x-20">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3">
                  {FOOTER_NAV.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-u">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex flex-col gap-3">
                <li>Aviso de Privacidad</li>
                <li>Contadores</li>
                <li>
                  <a href="#pro-bono" className="link-u">Probono</a>
                </li>
              </ul>
              <ul className="col-span-2 flex flex-col gap-3 sm:col-span-1">
                <li>Calle Gutenberg 178, Col. Anzures</li>
                <li>Ciudad de México</li>
                <li>
                  <a href={PHONES[0].href} className="link-u">{PHONES[0].v}</a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="link-u break-all">{EMAIL}</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="border-t border-white/15 pt-6 text-sm leading-[22px] text-white/60">© 2026 Escalona Llanes Abogados, S.C.{" "}<HemeronCredit /></p>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "border border-[#4D4A4C4D] bg-white px-4 text-base text-[#1B1B1B] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1B1B1B] focus:shadow-[0_0_0_3px_rgba(27,27,27,0.1)]";

function Field({ label, name, type = "text", autoComplete, required }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold leading-[22px]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} required={required} className={`${FIELD} h-[52px]`} />
    </label>
  );
}

function ContactItem({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-4">
      <Icon size={20} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1B1B1B]" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-[13px] font-semibold leading-[21px] text-[#5E5E5E]">{label}</p>
        <div className="text-[17px] leading-[26px] text-[#1B1B1B]">{children}</div>
      </div>
    </StaggerItem>
  );
}
