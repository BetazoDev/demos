import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Commissioner, Young_Serif } from "next/font/google";
import {
  ArrowDownRight,
  ArrowRight,
  Briefcase,
  Buildings,
  CalendarCheck,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  FileText,
  Handshake,
  House,
  ListChecks,
  MapPin,
  Phone,
  PhoneCall,
  Scales,
  ShieldCheck,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--s26-display" });
const body = Commissioner({ subsets: ["latin"], variable: "--s26-body" });

export const metadata: Metadata = {
  title: "Acción Jurídica",
  description: "Atención oportuna, transparente y eficaz. Despacho de abogados profesionales con asesoría legal en Ciudad de México y Estado de México.",
};

const IMG = "/sitios/accionjuridica";
const SITE = "https://www.accionjuridica.com.mx";
const DISPLAY = "font-[family-name:var(--s26-display)] font-normal";
const H2 = `${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.12] tracking-[-0.5px]`;
const OFICINA = { v: "55 7581 9767", href: "tel:+525575819767" };
const MOVIL = { v: "55 2880 7601", href: "https://wa.me/5215528807601" };
const EMAIL = "contacto@accionjuridica.com.mx";

const NAV = [
  { label: "Acerca de", href: "#acerca-de" },
  { label: "Servicios", href: "#servicios" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Contacto", href: "#contacto" },
];

const NOSOTROS = [
  {
    t: "Experiencia ante tribunales",
    d: "Nuestros abogados cuentan con amplios conocimientos en las distintas ramas del derecho, producto del ejercicio constante en diversas áreas de la práctica jurídica durante varios años y ante los diversos tribunales del país.",
  },
  {
    t: "Misión",
    d: "Brindar a nuestros clientes alternativas de solución eficaces, en un ambiente de trato digno, honesto y profesional, con explicaciones sencillas y transparentes de su problemática.",
  },
  {
    t: "Visión",
    d: "Constituirnos como una firma líder, caracterizada por la obtención de resultados satisfactorios mediante una atención jurídica oportuna, eficiente y responsable.",
  },
];

const MATERIAS = [
  {
    t: "Materia familiar",
    Icon: UsersThree,
    d: "Constitución, organización y disolución del grupo familiar, en sus aspectos personales y patrimoniales.",
    e: "Por ejemplo: divorcio, pensión alimenticia, guarda y custodia, herencia.",
  },
  {
    t: "Materia civil",
    Icon: House,
    d: "Regulación y preservación de los intereses personales y patrimoniales de las personas.",
    e: "Por ejemplo: contratos, asuntos inmobiliarios, trámites ante el Registro Público de la Propiedad.",
  },
  {
    t: "Materia penal",
    Icon: Scales,
    d: "Investigación, persecución y sanción de conductas tipificadas como delitos, protegiendo a víctimas e inculpados.",
    e: "Por ejemplo: órdenes de aprehensión, denuncias, querellas.",
  },
  {
    t: "Materia laboral",
    Icon: Briefcase,
    d: "Derechos y obligaciones derivados de la relación entre patrones y trabajadores.",
    e: "Por ejemplo: despido injustificado, liquidaciones, demandas laborales.",
  },
  {
    t: "Materia mercantil",
    Icon: Handshake,
    d: "Asesoría en los aspectos legales de sus actividades comerciales y actos mercantiles.",
    e: "Por ejemplo: cobro de pagarés, cheques, letras de cambio, deudas, títulos de crédito.",
  },
  {
    t: "Materia administrativa",
    Icon: Buildings,
    d: "Que sus negocios y establecimientos cumplan con las leyes y reglamentos administrativos.",
    e: "Por ejemplo: uso de suelo, multas, clausuras.",
  },
];

const VALORES = [
  { t: "Trato humano", d: "Un trato respetuoso y amable, explicando con paciencia y claridad los puntos trascendentes y los avances de su asunto." },
  { t: "Responsabilidad", d: "Un grupo de trabajo con capacidades y conocimientos jurídicos amplios, comprometido con la búsqueda de resultados óptimos." },
  { t: "Profesionalismo", d: "Conocimientos jurídicos adecuados a las exigencias de cada cliente, apegados en todo momento al desempeño ético." },
  { t: "Honestidad", d: "Nos conducimos con verdad: le mostramos las posibilidades reales de su asunto y le permitimos consultar su avance." },
];

const PASOS = [
  {
    t: "La llamada",
    Icon: PhoneCall,
    d: "Le preguntaremos brevemente los antecedentes de su conflicto y algunos datos para programar su cita con un especialista en la materia.",
  },
  {
    t: "Su cita",
    Icon: CalendarCheck,
    d: "Recibirá la fecha, hora y nombre del abogado asignado. En la cita usted le planteará los detalles de su situación y llevará copia de los documentos relacionados, si los hay.",
  },
  {
    t: "La estrategia",
    Icon: FileText,
    d: "El abogado le explicará las alternativas y estrategias legales, la documentación necesaria y los honorarios de cada etapa del proceso.",
  },
  {
    t: "Después de la cita",
    Icon: ListChecks,
    d: "Le indicará los procesos, sus etapas, la duración estimada de los trámites y ante qué autoridades se presentarán.",
  },
];

function Logo() {
  return (
    <a href="#top" aria-label="Acción Jurídica, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="" width={220} height={53} preload className="h-auto w-[190px] lg:w-[220px]" />
    </a>
  );
}

export default function AccionJuridicaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s26-body)] text-[#333333] selection:bg-[#C3512F] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#EEEEEE] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(37,16,15,0.35)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[95px] xl:px-0 [&_nav_ul]:gap-9"
        linkClassName="text-[15px] font-medium text-[#333333]"
        panelClassName="bg-white text-[#333333] font-[family-name:var(--s26-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl`}
        burgerClassName="bg-[#333333]"
        breakpoint="xl"
        actions={
          <>
            <a href={OFICINA.href} className="flex items-center gap-2 text-[15px] font-semibold">
              <Phone size={18} aria-hidden="true" className="text-[#C3512F]" />
              <span className="link-u">{OFICINA.v}</span>
            </a>
            <a href="#contacto" className="press bg-[#C3512F] px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#A8441F]">
              Agenda una cita
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#25100F] text-white">
          <HeroIntro className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-10 pt-16 md:px-8 lg:pb-12 lg:pt-[104px] xl:px-0">
            <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.75rem,5.6vw,5rem)] leading-[1.04] tracking-[-1.5px]`}>
              Atención oportuna, <br className="hidden sm:block" />
              transparente y eficaz.
            </HeroItem>
            <HeroItem className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[540px] text-[17px] leading-[1.55] text-[#E8DAD3] md:text-[19px] md:leading-[29px]">
                Despacho de abogados profesionales con asesoría legal en Ciudad de México y Estado de México.
              </p>
              <div className="flex flex-wrap items-center gap-7">
                <a href="#contacto" className="press bg-[#C3512F] px-[30px] py-[18px] text-base font-semibold leading-5 hover:bg-[#D2603C]">
                  Agenda una cita
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-semibold">
                  Ver servicios
                  <ArrowDownRight size={18} aria-hidden="true" className="text-[#E9895A]" />
                </a>
              </div>
            </HeroItem>
          </HeroIntro>
          <MediaReveal delay={0.3} className="relative h-[240px] overflow-hidden sm:h-[320px] lg:h-[423px]">
            <Image src={`${IMG}/hero-balanza.jpg`} alt="Balanza y mazo sobre libros" fill preload sizes="100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Franja contacto */}
        <section aria-label="Datos de contacto" className="border-b border-[#EEEEEE]">
          <Stagger className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 md:px-8 lg:grid-cols-4 lg:gap-12 xl:px-0" gap={0.06}>
            <Strip Icon={Phone} label="Oficina">
              <a href={OFICINA.href} className="link-u">{OFICINA.v}</a>
            </Strip>
            <Strip Icon={WhatsappLogo} label="Móvil y WhatsApp">
              <a href={MOVIL.href} className="link-u">{MOVIL.v}</a>
            </Strip>
            <Strip Icon={Clock} label="Atención telefónica">
              <p>
                Lun a vie 9:00 a 20:00
                <br />
                Sábados 9:00 a 14:00
              </p>
            </Strip>
            <Strip Icon={CalendarCheck} label="Asesoría legal">
              <p>Sólo con previa cita</p>
            </Strip>
          </Stagger>
        </section>

        {/* Quiénes somos */}
        <section id="acerca-de" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-7 px-5 py-20 md:px-8 lg:pb-[120px] lg:pt-32 xl:px-0">
          <Reveal as="h2" className={H2}>
            ¿Quiénes somos?
          </Reveal>
          <Reveal delay={0.06} as="p" className={`${DISPLAY} max-w-[1040px] text-[clamp(1.5rem,2.3vw,1.875rem)] leading-[1.37] text-[#25100F]`}>
            Somos un equipo de abogados con alta especialización que ofrece una amplia gama de servicios legales en la República Mexicana, principalmente en Ciudad de México y Estado de México.
          </Reveal>
          <Stagger className="grid gap-10 pt-8 md:grid-cols-3 md:gap-14 lg:pt-12" gap={0.08}>
            {NOSOTROS.map(({ t, d }) => (
              <StaggerItem key={t} className="flex flex-col gap-3.5 border-t-2 border-[#C3512F] pt-6">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="text-base leading-[26px] text-[#5E5E5E]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F7F1EC]">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16 lg:py-[120px] xl:px-0">
            <Reveal className="flex flex-col items-start gap-7">
              <h2 className={H2}>Servicios</h2>
              <p className="text-[17px] leading-7 text-[#5E5E5E]">
                Nuestro equipo cuenta con conocimientos profundos en las distintas ramas del derecho, para brindarle servicios legales de alta calidad, de forma oportuna, transparente y eficaz.
              </p>
              <a href="#contacto" className="press bg-[#C3512F] px-[26px] py-4 text-[15px] font-semibold text-white hover:bg-[#A8441F]">
                Agenda una cita
              </a>
              <div className="img-zoom relative mt-0 h-[240px] w-full overflow-hidden sm:max-w-[360px]">
                <Image src={`${IMG}/documentos.jpg`} alt="Manos firmando documentos" fill sizes="360px" className="object-cover" />
              </div>
            </Reveal>
            <Stagger className="grid gap-5 sm:grid-cols-2" gap={0.06}>
              {MATERIAS.map(({ t, Icon, d, e }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 bg-white p-7 md:p-8">
                  <Icon size={28} aria-hidden="true" className="text-[#C3512F]" />
                  <h3 className={`${DISPLAY} text-2xl`}>{t}</h3>
                  <p className="text-[15px] leading-6 text-[#5E5E5E]">{d}</p>
                  <p className="text-[15px] font-medium leading-6 text-[#9A3F22]">{e}</p>
                </StaggerItem>
              ))}
              <StaggerItem as="article" className="flex flex-col gap-6 bg-[#25100F] px-7 py-9 text-white sm:col-span-2 md:px-8 lg:flex-row lg:gap-10">
                <div className="flex flex-1 flex-col gap-3.5">
                  <ShieldCheck size={28} aria-hidden="true" className="text-[#E9895A]" />
                  <h3 className={`${DISPLAY} text-[28px]`}>Juicio de amparo</h3>
                  <p className="text-base leading-[26px] text-[#E8DAD3]">
                    Protección de los derechos y garantías que otorga la Constitución cuando son violentados por reglamentos, sanciones, leyes, actos u omisiones de particulares o de los poderes públicos.
                  </p>
                </div>
                <p className="text-[15px] leading-6 text-[#F2C4A8] lg:w-[300px]">
                  Procede, por ejemplo, contra una orden de aprehensión, la clausura de un establecimiento, una sentencia civil, familiar o mercantil, o un laudo laboral.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Valores */}
        <section aria-labelledby="valores" className="bg-[#C3512F] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-20 md:px-8 lg:pb-28 lg:pt-[104px] xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 id="valores" className={`${DISPLAY} text-[clamp(2.25rem,3.2vw,2.75rem)] leading-[1.12] tracking-[-0.5px]`}>
                Valores
              </h2>
              <p className="max-w-[620px] text-[17px] leading-[29px] md:text-lg">
                Cualquiera de nuestros profesionales tratará su caso considerando los valores que determinan nuestra forma de proceder.
              </p>
            </Reveal>
            <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12" gap={0.07}>
              {VALORES.map(({ t, d }) => (
                <StaggerItem key={t} className="flex flex-col gap-3 border-t border-white/40 pt-5">
                  <h3 className={`${DISPLAY} text-2xl`}>{t}</h3>
                  <p className="text-base leading-[26px]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Cómo solicitar */}
        <section id="preguntas-frecuentes" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-14 px-5 py-20 md:px-8 lg:gap-16 lg:py-32 xl:px-0">
          <Reveal className="flex flex-col gap-5">
            <h2 className={H2}>¿Cómo solicito sus servicios?</h2>
            <p className="max-w-[760px] text-[17px] leading-[29px] text-[#5E5E5E] md:text-lg">
              Si tiene un conflicto legal en alguna de nuestras materias, llame a cualquiera de nuestros teléfonos para identificar su asunto y agendar una cita en alguno de nuestros despachos.
            </p>
          </Reveal>
          <div className="relative">
            <span aria-hidden="true" className="absolute left-7 right-[calc((100%-120px)/4-28px)] top-[27px] hidden h-0.5 bg-[#E7D6CB] lg:block" />
            <Stagger as="ol" className="relative grid gap-10 lg:grid-cols-4" gap={0.1}>
              {PASOS.map(({ t, Icon, d }, i) => (
                <StaggerItem key={t} as="li" className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-x-5 not-last:before:absolute not-last:before:-bottom-10 not-last:before:left-[27px] not-last:before:top-14 not-last:before:w-0.5 not-last:before:bg-[#E7D6CB] lg:flex lg:flex-col lg:gap-[18px] lg:before:hidden">
                  <span
                    aria-hidden="true"
                    className={`row-span-2 flex h-14 w-14 items-center justify-center rounded-full ${i === 0 ? "bg-[#C3512F] text-white" : "bg-white text-[#C3512F] ring-2 ring-[#C3512F]"}`}
                  >
                    <Icon size={24} />
                  </span>
                  <h3 className={`${DISPLAY} self-center text-2xl lg:self-auto`}>{t}</h3>
                  <p className="pt-2 text-[15px] leading-6 text-[#5E5E5E] lg:pt-0">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal>
            <a href={`${SITE}/preguntas-frecuentes/`} className="nudge flex w-fit items-center gap-2.5 text-base font-semibold text-[#A8441F]">
              Ver preguntas frecuentes
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#333333] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-20 lg:py-[120px] xl:px-0">
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-[18px]">
                <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.2vw,2.75rem)] leading-[1.11] tracking-[-0.5px]`}>Agenda una cita y localiza nuestro despacho</h2>
                <p className="text-[17px] leading-[27px] text-[#D6D6D6]">La asesoría legal se brinda sólo con previa cita.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-10" gap={0.06}>
                <ContactRow Icon={MapPin} label="Oficina Roma Norte">
                  <p>Durango 245, interior 203, Roma Norte, Cuauhtémoc, Ciudad de México</p>
                </ContactRow>
                <ContactRow Icon={MapPin} label="Oficina Lindavista">
                  <p>Salaverry 987, interior 203, Lindavista Norte, Gustavo A. Madero, Ciudad de México</p>
                </ContactRow>
                <ContactRow Icon={Phone} label="Teléfonos">
                  <p>
                    <a href={OFICINA.href} className="link-u">{OFICINA.v}</a> (oficina)
                    <br />
                    <a href={MOVIL.href} className="link-u">{MOVIL.v}</a> (móvil y WhatsApp)
                  </p>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimple} label="Correo electrónico">
                  <a href={`mailto:${EMAIL}`} className="link-u break-all">{EMAIL}</a>
                </ContactRow>
                <ContactRow Icon={Clock} label="Horario de atención telefónica">
                  <p>
                    Lunes a viernes de 9:00 a 20:00
                    <br />
                    Sábados de 9:00 a 14:00
                  </p>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#333333] md:p-11" noteClassName="text-sm text-[#5E5E5E]">
                <h3 className={`${DISPLAY} text-2xl`}>También puede enviarnos un mensaje</h3>
                <Field label="Nombre *" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Teléfono con clave LADA *" name="telefono" type="tel" autoComplete="tel" />
                  <Field label="Correo electrónico *" name="correo" type="email" autoComplete="email" />
                </div>
                <Field label="Asunto *" name="asunto" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Mensaje *</span>
                  <textarea name="mensaje" required className={`${FIELD} h-32 resize-y py-3`} />
                </label>
                <label className="flex items-center gap-2.5 text-sm text-[#5E5E5E]">
                  <input type="checkbox" name="aviso" className="h-[18px] w-[18px] shrink-0 accent-[#C3512F]" />
                  <span>
                    Estoy de acuerdo con el{" "}
                    <a href={`${SITE}/aviso-de-privacidad/`} className="underline underline-offset-2">
                      Aviso de Privacidad
                    </a>
                    .
                  </span>
                </label>
                <button type="submit" className="press w-full bg-[#C3512F] px-6 py-4 text-base font-semibold text-white hover:bg-[#A8441F]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                {[{ label: "Inicio", href: "#top" }, ...NAV].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="https://www.facebook.com/accionjuridicamx"
              aria-label="Facebook"
              className="press flex h-10 w-10 items-center justify-center rounded-full border border-[#CFCFCF] hover:border-[#C3512F] hover:text-[#C3512F]"
            >
              <FacebookLogo size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#EEEEEE] pt-6 text-[13px] leading-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <p className="max-w-[820px] text-[#666666]">
              © 2026 Acción Jurídica. Todos los derechos reservados. Despacho de abogados, consultoría jurídica y asesoría legal en Ciudad de México y Estado de México.
            {" "}<HemeronCredit /></p>
            <a href={`${SITE}/aviso-de-privacidad/`} className="link-u w-fit shrink-0 font-semibold">
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "border border-[#CFCFCF] bg-[#FCFCFC] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#C3512F] focus:shadow-[0_0_0_3px_rgba(195,81,47,0.15)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} required className={`${FIELD} h-12 w-full`} />
    </label>
  );
}

function Strip({ Icon, label, children }: { Icon: typeof Phone; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-3.5">
      <Icon size={22} aria-hidden="true" className="shrink-0 text-[#C3512F]" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm text-[#666666]">{label}</p>
        <div className="text-base font-semibold leading-[23px]">{children}</div>
      </div>
    </StaggerItem>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof Phone; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-4">
      <Icon size={22} aria-hidden="true" className="shrink-0 text-[#E9895A]" />
      <div className="flex min-w-0 flex-col gap-1.5">
        <p className="text-sm text-[#BDBDBD]">{label}</p>
        <div className="text-[17px] leading-[26px]">{children}</div>
      </div>
    </StaggerItem>
  );
}
