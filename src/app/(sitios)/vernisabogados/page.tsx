import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Barlow, Jost } from "next/font/google";
import {
  Briefcase,
  ChalkboardTeacher,
  Check,
  CheckCircle,
  ClipboardText,
  EnvelopeSimple,
  FacebookLogo,
  FileX,
  Handshake,
  InstagramLogo,
  MapPin,
  Phone,
  Receipt,
  Scales,
  ShieldCheck,
  Users,
  Wallet,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Jost({ subsets: ["latin"], variable: "--s44-display" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--s44-body" });

export const metadata: Metadata = {
  title: "Vernis Abogados",
  description: "Firma de abogados especialistas en materia laboral, con eficiencia, ética profesional y vocación de servicio. Líder en materia laboral desde 1996.",
};

const IMG = "/sitios/vernisabogados";
const PUBLICACIONES = "https://vernisabogados.com/publicaciones-y-formatos.html";
const WHATSAPP = "https://wa.me/525585815594";

const NAV = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Trabajadores", href: "#trabajadores" },
  { label: "Póliza legal", href: "#poliza-legal" },
  { label: "Publicaciones", href: PUBLICACIONES },
  { label: "Contacto", href: "#contacto" },
];

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Trabajadores", href: "#trabajadores" },
  { label: "Póliza legal", href: "#poliza-legal" },
  { label: "Publicaciones y formatos", href: PUBLICACIONES },
  { label: "Contacto", href: "#contacto" },
];

const STATS = [
  { n: "1996", l: "Año de fundación de la firma" },
  { n: "+25", l: "Años de experiencia en litigio y consultoría laboral" },
  { n: "+400", l: "Empresas de diversas ramas confían en nosotros" },
  { n: "STPS", l: "Firma certificada por la Secretaría del Trabajo y Previsión Social para impartir cursos" },
];

const SERVICES = [
  { t: "Consultoría laboral", Icon: ClipboardText, d: "Auditorías internas: revisión de documentos, reingenierías en nóminas, controles administrativos y políticas, previniendo futuras contingencias en las relaciones obrero-patronales." },
  { t: "Derecho laboral", Icon: Scales, d: "Prevención de conflictos obrero-patronales y defensa en conciliación o juicio, en materia individual o colectiva." },
  { t: "Seguridad social", Icon: ShieldCheck, d: "Reingenierías en nóminas y grados de riesgo en las empresas." },
  { t: "Capacitación", Icon: ChalkboardTeacher, d: "Firma certificada por la Secretaría del Trabajo y Previsión Social para impartir cursos." },
  { t: "Absorbemos tu pasivo laboral", Icon: Handshake, d: "La nueva alternativa a la subcontratación, a partir de nuestra póliza legal." },
];

const BENEFITS = [
  { t: "Eliminación del pasivo laboral", Icon: FileX, d: "Absorbemos todo el pasivo laboral a partir de la fecha en que se firma el contrato." },
  { t: "Atención jurídica laboral", Icon: Briefcase, d: "Ante cualquier autoridad competente a través del despacho, sin costo adicional." },
  { t: "Contrataciones y despidos", Icon: Users, d: "Abogados laborales especializados en esta área se encargan de todo." },
  { t: "Reconocimiento", Icon: CheckCircle, d: "De antigüedad, salarios, prestaciones y todas las condiciones de trabajo de cada trabajador." },
  { t: "Ahorro en personal", Icon: Wallet, d: "En el área de Recursos Humanos: calculamos y pagamos la nómina, aportaciones e impuestos." },
  { t: "Deducciones y otros ahorros", Icon: Receipt, d: "La factura es totalmente deducible y generamos ahorros en la reingeniería de su nómina." },
];

const SECTORS = ["Aeronáutico", "Automotriz", "Industria eléctrica", "Sector financiero", "Gubernamental", "Industria manufacturera", "PYMES", "Servicios de consumo"];

const CLIENTS = ["Siemens", "Grupo MVS", "Dish", "Liconsa", "Seidor", "Telecomm", "INDEP", "Up Sí Vale", "Alazán", "ASPA", "Maristas"];

const RUBROS = [
  "Compensación para altos ejecutivos",
  "Modificación de las condiciones de trabajo",
  "Cálculos de indemnizaciones",
  "Disminución de salarios",
  "Cumplimientos de contrato",
  "Despidos injustificados",
  "Reclamo de aguinaldo",
  "Reclamo de vacaciones",
  "Inscripciones ante el IMSS",
  "Pensiones",
  "Rescisión de contratos",
  "Incumplimiento de pago de salarios",
  "Comisiones pendientes de pago",
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/vernis.abogados/", Icon: InstagramLogo },
  { label: "Facebook", href: "https://www.facebook.com/Vernis-Abogados-102121381475754/", Icon: FacebookLogo },
  { label: "WhatsApp", href: WHATSAPP, Icon: WhatsappLogo },
];

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = "font-[family-name:var(--s44-display)] font-light text-[clamp(2.25rem,3.6vw,3.125rem)] leading-[1.08]";

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Vernis Abogados, inicio">
      <Image src={`${IMG}/logo-vernis-blanco.png`} alt="Vernis Abogados" width={220} height={56} preload className="h-11 w-auto xl:h-14" />
    </a>
  );
}

export default function VernisAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s44-body)] text-[#0E1A33] selection:bg-[#E9D98F] selection:text-[#0E1A33]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="bg-[#0E1A33]"
        scrolledClassName="shadow-[0_12px_30px_-18px_rgba(4,29,56,0.9)]"
        innerClassName={`${WRAP} flex h-[76px] items-center justify-between gap-8 xl:h-[96px]`}
        linkClassName="text-[15px] font-medium text-white"
        panelClassName="bg-[#0E1A33] text-white font-[family-name:var(--s44-body)]"
        panelLinkClassName="font-[family-name:var(--s44-display)] text-3xl font-light"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#E9D98F] px-[22px] py-3 text-[15px] font-semibold text-[#0E1A33] hover:bg-[#F3E7B0]">
            Agenda tu cita
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[620px] flex-col justify-end overflow-hidden bg-[#0E1A33] lg:h-[740px]">
          <Parallax className="absolute inset-0" distance={50}>
            <Image src={`${IMG}/firma-lider.jpg`} alt="Ciudad de México de noche" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,#0E1A3399_0%,#0E1A33E6_65%,#0E1A33F0_100%)] md:bg-[linear-gradient(90deg,#0E1A33F0_0%,#0E1A33B3_50%,#0E1A3326_100%)]"
          />
          <div className={`${WRAP} relative w-full pb-16 pt-32 lg:pb-24`}>
            <HeroIntro className="flex max-w-[820px] flex-col gap-7">
              <HeroItem as="h1" blur className="font-[family-name:var(--s44-display)] text-[clamp(2.75rem,5.3vw,4.75rem)] font-light leading-[1.05] text-white">
                Líder en materia laboral <span className="block text-[#E9D98F]">desde 1996</span>
              </HeroItem>
              <HeroItem as="p" className="max-w-[560px] text-lg leading-[1.5] text-[#E2E8F0] md:text-xl">
                Firma de abogados especialistas en materia laboral, con eficiencia, ética profesional y vocación de servicio.
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-3.5 pt-2">
                <a href="#contacto" className="press rounded-[6px] bg-[#E9D98F] px-7 py-4 text-[17px] font-semibold text-[#0E1A33] hover:bg-[#F3E7B0]">
                  Agenda tu cita
                </a>
                <a href="#poliza-legal" className="press rounded-[6px] border border-white/55 px-[27px] py-[15px] text-[17px] font-medium text-white hover:border-white hover:bg-white/10">
                  Conoce la póliza legal
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* Cifras */}
        <section aria-label="Cifras" className="bg-[#041D38]">
          <Stagger as="dl" className={`${WRAP} grid grid-cols-1 gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12`} gap={0.08}>
            {STATS.map(({ n, l }) => (
              <StaggerItem key={n} className="flex flex-col-reverse justify-end gap-2.5 border-l border-[#E9D98F59] pl-5">
                <dt className="text-base leading-[23px] text-[#C8D3DE]">{l}</dt>
                <dd className="font-[family-name:var(--s44-display)] text-5xl font-light leading-none text-[#E9D98F]">
                  {n.startsWith("+") ? <CountUp value={n} /> : n}
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className={`${WRAP} grid scroll-mt-24 gap-12 py-24 lg:grid-cols-[540px_1fr] lg:gap-24 lg:pb-[120px] lg:pt-32`}>
          <Reveal className="flex flex-col gap-8">
            <h2 className="font-[family-name:var(--s44-display)] text-[clamp(2.5rem,3.75vw,3.375rem)] font-light leading-[1.06]">Quiénes somos</h2>
            <p className="font-[family-name:var(--s44-display)] text-[clamp(1.25rem,1.75vw,1.5625rem)] font-light leading-[1.4]">
              En Vernis Abogados nos identificamos con las necesidades de nuestros clientes, buscando la mejor solución a los conflictos en la etapa de conciliación o en la defensa de los asuntos que nos encomiendan.
            </p>
          </Reveal>
          <div className="flex flex-col gap-6 lg:pt-3.5">
            <Reveal delay={0.08} className="flex flex-col gap-6 text-[17px] leading-[28px] text-[#3B4558]">
              <p>Atendemos asuntos en materia individual o colectiva, derecho administrativo del trabajo, auditorías, previsión social, capacitación y relación con sindicatos.</p>
              <p>
                Colaboramos a formar criterios de las autoridades laborales federales y locales, y contribuimos al desarrollo de diversas jurisprudencias y reformas de leyes laborales. Somos expertos en negociación y mediación de conflictos, obteniendo el mayor beneficio para nuestros clientes.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="flex flex-col gap-2 rounded-[6px] bg-[#F3F5F8] px-6 py-7 md:px-8">
              <h3 className="font-[family-name:var(--s44-display)] text-[28px]">Oscar Vernis</h3>
              <p className="text-[15px] font-semibold text-[#4F6B7A]">Fundador y Socio Director</p>
              <p className="text-base leading-[26px] text-[#3B4558]">
                Licenciado en Derecho egresado del Centro Universitario México, con estudios de Negociación y Mediación por la Universidad de Harvard y colaborador en la edición de la Ley Federal del Trabajo.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Empresas */}
        <section id="empresas" className="scroll-mt-24 bg-[#F3F5F8]">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[460px_1fr] lg:gap-[88px] lg:py-[120px]`}>
            <MediaReveal onView delay={0} className="relative h-[340px] overflow-hidden rounded-[6px] md:h-[480px] lg:h-auto lg:min-h-[723px]">
              <Image src={`${IMG}/sector.jpg`} alt="Torre corporativa" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-[18px]">
                <h2 className={H2}>Somos una firma innovadora</h2>
                <p className="text-[17px] leading-[28px] text-[#3B4558]">
                  Brindamos servicios a empresas nacionales y multinacionales. Con apego a la legalidad, nos hemos especializado en litigio y consultoría laboral, con un equipo de abogados especialistas y una asesoría dinámica, actuando siempre éticamente.
                </p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-7" gap={0.07}>
                {SERVICES.map(({ t, Icon, d }) => (
                  <StaggerItem key={t} as="li" className="flex gap-[22px]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-[#0E1A33]">
                      <Icon size={24} color="#E9D98F" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-[family-name:var(--s44-display)] text-[22px] leading-tight">{t}</h3>
                      <p className="text-base leading-[25px] text-[#3B4558]">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Póliza legal */}
        <section id="poliza-legal" className="scroll-mt-24 bg-[#0E1A33] text-white">
          <div className={`${WRAP} flex flex-col gap-16 py-24 lg:gap-20 lg:pb-32 lg:pt-[120px]`}>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_540px] lg:gap-20">
              <Reveal className="flex flex-col gap-6">
                <h2 className={H2}>Póliza legal única en el mercado</h2>
                <p className="font-[family-name:var(--s44-display)] text-[clamp(1.25rem,1.6vw,1.4375rem)] font-light leading-[1.4] text-[#E9D98F]">
                  La nueva alternativa a la subcontratación: absorbemos tu pasivo laboral a partir de la póliza jurídica única en el mercado.
                </p>
                <p className="text-[17px] leading-[28px] text-[#C8D3DE]">
                  El pasivo laboral es la deuda implícita generada durante los años que un empleado presta servicio a la empresa. Su cálculo toma en cuenta los beneficios que marca la Ley Federal del Trabajo, como prima de antigüedad, indemnización por despido, planes de pensiones o beneficios en contratos colectivos.
                </p>
              </Reveal>
              <MediaReveal onView delay={0.1} className="img-zoom relative h-[260px] overflow-hidden rounded-[6px] sm:h-[360px] lg:h-[420px]">
                <Image src={`${IMG}/alternativa-a-la-subcontratacion.jpg`} alt="Firma de contrato entre abogado y cliente" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
              </MediaReveal>
            </div>
            <Stagger as="ul" className="grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12" gap={0.07}>
              {BENEFITS.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="li" className="flex gap-[18px]">
                  <Icon size={28} color="#E9D98F" aria-hidden="true" className="shrink-0" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-[family-name:var(--s44-display)] text-[21px] leading-tight">{t}</h3>
                    <p className="text-base leading-[25px] text-[#B9C6D3]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Sectores y clientes */}
        <section aria-labelledby="sectores" className={`${WRAP} flex flex-col gap-16 py-24 lg:gap-[72px] lg:py-[120px]`}>
          <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
            <Reveal className="flex flex-col gap-4">
              <h2 id="sectores" className="font-[family-name:var(--s44-display)] text-[clamp(2.25rem,3.2vw,2.75rem)] font-light leading-[1.09]">
                Nuestros sectores
              </h2>
              <p className="text-[17px] leading-[27px] text-[#3B4558]">Contamos con una amplia gama en los siguientes ramos.</p>
            </Reveal>
            <Stagger as="ul" className="flex flex-wrap content-start gap-3" gap={0.04}>
              {SECTORS.map((s) => (
                <StaggerItem key={s} as="li" className="rounded-[6px] border border-[#0E1A3333] px-5 py-3.5 font-[family-name:var(--s44-display)] text-[19px] leading-tight">
                  {s}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="grid gap-8 border-t border-[#0E1A331F] pt-14 lg:grid-cols-[360px_1fr] lg:gap-16">
            <Reveal className="flex flex-col gap-4">
              <h2 className="font-[family-name:var(--s44-display)] text-[clamp(2.25rem,3.2vw,2.75rem)] font-light leading-[1.09]">Algunos de nuestros clientes</h2>
              <p className="text-[17px] leading-[27px] text-[#3B4558]">Contamos con la confianza y preferencia de más de 400 empresas de diversas ramas.</p>
            </Reveal>
            <Stagger as="ul" className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-0" gap={0.04}>
              {CLIENTS.map((c) => (
                <StaggerItem key={c} as="li" className="py-[18px] font-[family-name:var(--s44-display)] text-[clamp(1.375rem,2vw,1.75rem)] font-light leading-[1.4] text-[#2A3550]">
                  {c}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Trabajadores */}
        <section id="trabajadores" className="scroll-mt-24 bg-[#F3F5F8]">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[470px_1fr] lg:gap-[88px] lg:py-[120px]`}>
            <Reveal className="flex flex-col items-start gap-6">
              <h2 className={H2}>Para trabajadores</h2>
              <p className="font-[family-name:var(--s44-display)] text-[clamp(1.25rem,1.7vw,1.5rem)] font-light leading-[1.42]">
                Asesoramos de manera gratuita y nuestros honorarios son solo a resultados de tu juicio.
              </p>
              <p className="text-[17px] leading-[28px] text-[#3B4558]">
                Como especialistas en materia laboral representamos a empleados, dando el mejor consejo y consultoría en los siguientes rubros.
              </p>
              <a href="#contacto" className="press rounded-[6px] bg-[#0E1A33] px-7 py-4 text-[17px] font-semibold text-white hover:bg-[#1C2B4D]">
                Agenda tu cita
              </a>
            </Reveal>
            <Reveal delay={0.08} className="self-start rounded-[6px] bg-white p-6 md:p-10">
              <Stagger className="grid gap-x-8 gap-y-5 sm:grid-cols-2" gap={0.04} delay={0.1}>
                {[RUBROS.slice(0, 7), RUBROS.slice(7)].map((col) => (
                  <ul key={col[0]} className="flex flex-col gap-5">
                    {col.map((r) => (
                      <StaggerItem key={r} as="li" className="flex gap-3 text-[17px] leading-[23px]">
                        <Check size={20} color="#4F6B7A" aria-hidden="true" className="mt-px shrink-0" />
                        {r}
                      </StaggerItem>
                    ))}
                  </ul>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-[#0E1A33] text-white">
          <Image src={`${IMG}/polanco.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-[#0E1A33E8]" />
          <div className={`${WRAP} relative grid items-center gap-14 py-24 lg:grid-cols-[1fr_500px] lg:gap-[88px] lg:py-[120px]`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-4">
                <h2 className={H2}>¡No dudes en contactarnos!</h2>
                <p className="text-lg leading-[29px] text-[#C8D3DE]">Si tienes alguna duda o comentario, escríbenos o llámanos.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-6" gap={0.07}>
                <ContactRow Icon={EnvelopeSimple} k="Correo">
                  <a href="mailto:contacto@abogadosmx.mx" className="link-u w-fit">contacto@abogadosmx.mx</a>
                </ContactRow>
                <ContactRow Icon={Phone} k="Llámanos">
                  <a href="tel:+525524576030" className="link-u w-fit">(55) 2457 6030</a>
                  <a href="tel:+525524576020" className="link-u w-fit">(55) 2457 6020</a>
                </ContactRow>
                <ContactRow Icon={WhatsappLogo} k="WhatsApp">
                  <a href={WHATSAPP} className="link-u w-fit">55 8581 5594</a>
                </ContactRow>
                <ContactRow Icon={MapPin} k="Encuéntranos">
                  <p>
                    Av. Isaac Newton 53, Polanco IV Secc.,
                    <br />
                    Miguel Hidalgo, C.P. 11550, Ciudad de México
                  </p>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[6px] bg-white p-6 text-[#0E1A33] md:p-11" noteClassName="text-sm text-[#3B4558]">
                <h3 className="font-[family-name:var(--s44-display)] text-[30px]">Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo" name="correo" type="email" autoComplete="email" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea name="mensaje" rows={5} className={`${INPUT} h-[130px] resize-none py-3`} />
                </label>
                <button type="submit" className="press w-full rounded-[6px] bg-[#E9D98F] px-6 py-4 text-[17px] font-semibold text-[#0E1A33] hover:bg-[#F3E7B0]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#041D38] text-[#B9C6D3]">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-[72px] lg:pb-9`}>
          <div className="grid gap-10 sm:grid-cols-2 lg:flex lg:justify-between">
            <div className="flex max-w-[340px] flex-col gap-5">
              <Image src={`${IMG}/logo-vernis-blanco.png`} alt="Vernis Abogados" width={220} height={56} />
              <p className="text-[15px] leading-[23px]">Firma de abogados especialistas en materia laboral desde 1996.</p>
            </div>
            <nav aria-label="Pie de página">
              <ul className="flex flex-col gap-3 text-[15px] text-white">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex max-w-[300px] flex-col gap-3 text-[15px] leading-[23px]">
              <p>Isaac Newton 53, Polanco IV Secc., Miguel Hidalgo, C.P. 11550, Ciudad de México</p>
              <p>
                <a href="tel:+525524576030" className="link-u">55 2457 6030</a> · <a href="tel:+525524576020" className="link-u">55 2457 6020</a>
              </p>
              <p>
                <a href="mailto:contacto@abogadosmx.mx" className="link-u">contacto@abogadosmx.mx</a>
              </p>
            </div>
            <ul className="flex gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className="press flex h-[42px] w-[42px] items-center justify-center rounded-[6px] border border-white/20 hover:border-[#E9D98F80] hover:bg-white/5">
                    <Icon size={20} color="#E9D98F" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/[0.12] pt-6 text-sm text-[#9FB0C0] sm:flex-row sm:justify-between">
            <p>© Vernis Abogados</p>
            <p className="flex gap-6">
              <span>Condiciones de uso</span>
              <span>Aviso de privacidad</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full rounded-[6px] border border-[#0E1A3326] bg-[#F3F5F8] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0E1A33] focus:shadow-[0_0_0_3px_rgba(14,26,51,0.12)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-[50px]`} />
    </label>
  );
}

function ContactRow({ Icon, k, children }: { Icon: typeof Phone; k: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-3.5">
      <Icon size={22} color="#E9D98F" aria-hidden="true" className="mt-px shrink-0" />
      <div className="flex flex-col gap-1 text-[17px] leading-[26px]">
        <p className="text-sm font-semibold leading-normal text-[#E9D98F]">{k}</p>
        {children}
      </div>
    </StaggerItem>
  );
}
