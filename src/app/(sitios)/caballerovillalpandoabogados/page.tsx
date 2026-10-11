import type { Metadata } from "next";
import Image from "next/image";
import { Marcellus, Mulish } from "next/font/google";
import {
  BankIcon,
  BuildingsIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  FileTextIcon,
  HandshakeIcon,
  MapPinIcon,
  PhoneIcon,
  QuotesIcon,
  ReceiptIcon,
  ScalesIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Marcellus({ subsets: ["latin"], weight: "400", variable: "--s21-display" });
const body = Mulish({ subsets: ["latin"], variable: "--s21-body" });

export const metadata: Metadata = {
  title: "Caballero Villalpando & Asociados",
  description: "Firma de abogados en México especializada en litigio en materia fiscal y administrativa. Atención total y asesoría en los aspectos del ámbito jurídico.",
};

const IMG = "/sitios/caballerovillalpandoabogados";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const MAR = "font-[family-name:var(--s21-display)]";
const TEL1 = "tel:+525562739744";
const TEL2 = "tel:+525562739746";
const EMAIL = "fcaballero@caballerovillalpandoabogados.mx";
const FACEBOOK = "https://www.facebook.com/CaballeroVillalpandoAsociados/";
const TWITTER = "https://twitter.com/abogadoscva";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Conócenos", href: "#conocenos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const VALORES = [
  ["Profesionalismo", "Mantenemos nuestra práctica con actitud y conducta impecables, con servicios legales responsables y confiables fundamentados en conocimientos actualizados."],
  ["Excelencia", "Nos esforzamos día a día para ofrecer un mejor servicio en cada caso, con calidez, comprensión, respeto y ante todo responsabilidad."],
  ["Actitud de servicio", "Tenemos la convicción de la prioridad que representan nuestros clientes y nos mantenemos atentos al cumplimiento de los objetivos conjuntos."],
  ["Ética", "Nos manejamos con responsabilidad, congruencia personal y consistencia. Ser confiables e íntegros son valores que cuidamos por sobre todas las cosas."],
];

const MATERIAS = [
  { t: "Derecho Corporativo", Icon: BuildingsIcon, d: "Apoyamos a nuestros clientes a satisfacer los requerimientos cotidianos en la vida de sus sociedades." },
  { t: "Derecho Civil", Icon: FileTextIcon, d: "Elaboración, revisión y supervisión de los contratos que celebran nuestros clientes." },
  { t: "Derecho Mercantil", Icon: HandshakeIcon, d: "Elaboración, revisión y supervisión de contratos en materia mercantil." },
  { t: "Derecho Penal", Icon: ScalesIcon, d: "Abogados penalistas debidamente especializados en el nuevo sistema de justicia penal." },
];

const FIELD =
  "h-12 border border-[#CFCAC0] bg-[#FAFAF8] px-4 text-base text-[#0E0E0E] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#9C7308] focus:shadow-[0_0_0_3px_rgba(185,137,9,0.18)]";

function Logo({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  return (
    <a href="#top" className={`block ${className}`} aria-label="Caballero Villalpando & Asociados, inicio">
      <Image src={`${IMG}/${inverse ? "logo-white.svg" : "logo.svg"}`} alt="" width={229} height={60} className="h-full w-auto" preload={!inverse} />
    </a>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-[#1D2127]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={FIELD} />
    </label>
  );
}

export default function CaballeroVillalpandoPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s21-body)] text-[#1D2127] selection:bg-[#B98909] selection:text-[#0E0E0E]`}
    >
      <SiteNav
        logo={<Logo className="h-12 lg:h-[60px]" />}
        links={NAV}
        className="border-b border-[#E6E2D8] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(14,14,14,0.35)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-[95px]`}
        linkClassName="mx-1 text-[15px] font-semibold text-[#1D2127]"
        panelClassName="bg-white text-[#0E0E0E] font-[family-name:var(--s21-body)]"
        panelLinkClassName="font-[family-name:var(--s21-display)] text-3xl"
        burgerClassName="bg-[#0E0E0E]"
        actions={
          <>
            <a href={TEL1} className="link-u flex items-center gap-2 text-[15px] font-semibold text-[#1D2127] lg:mr-2">
              <PhoneIcon className="h-[18px] w-[18px] text-[#9C7308]" />
              55 6273 9744
            </a>
            <a href="#contacto" className="press bg-[#B98909] px-[26px] py-3.5 text-[15px] font-bold text-[#0E0E0E] hover:bg-[#9C7308]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#0E0E0E] text-white">
          <HeroIntro className={`${WRAP} flex flex-col gap-7 pb-16 pt-20 lg:pb-[72px] lg:pt-24`}>
            <HeroItem as="h1" blur className={`${MAR} text-[clamp(3rem,6.7vw,6rem)] leading-[1.04]`}>
              Litigio en materia fiscal <br className="hidden sm:block" />y administrativa
            </HeroItem>
            <HeroItem as="p" className="text-lg leading-[1.5] text-[#CFCAC0] md:text-xl md:leading-[30px]">
              Atención total y asesoría en los aspectos del ámbito jurídico.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#contacto" className="press bg-[#B98909] px-[34px] py-[18px] text-base font-bold text-[#0E0E0E] hover:bg-[#9C7308]">
                Contáctanos
              </a>
              <a href="#servicios" className="press border border-[#FFFFFF66] px-[33px] py-[17px] text-base font-semibold text-white hover:border-white hover:bg-white/10">
                Ver servicios
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[260px] overflow-hidden sm:h-[360px] lg:h-[460px]" delay={0.3}>
            <Image src={`${IMG}/slide-law-office-1.jpg`} alt="Mazo, balanza y reloj de arena frente a libros de derecho" fill preload sizes="100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Credenciales */}
        <section aria-label="La firma en datos" className="bg-[#B98909]">
          <Stagger className={`${WRAP} grid gap-8 py-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12`} gap={0.07}>
            {[
              ["20 años", "de experiencia conjunta de nuestros abogados"],
              ["Fiscal y administrativo", "la especialidad en litigio con la que nace la firma"],
              ["Municipal, Estatal y Federal", "instancias gubernamentales en las que patrocinamos asuntos"],
              ["Personas físicas y morales", "nacionales y extranjeras"],
            ].map(([k, v], i) => (
              <StaggerItem key={k} className="flex flex-col gap-2">
                <p className={`${MAR} text-[26px] leading-[30px] text-[#0E0E0E] lg:min-h-[62px]`}>{i === 0 ? <CountUp value={k} duration={1.2} /> : k}</p>
                <p className="text-[15px] leading-[22px] text-[#1A1405]">{v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ¿Quiénes somos? */}
        <section id="conocenos" className={`${WRAP} grid scroll-mt-24 gap-12 py-24 lg:grid-cols-[500px_1fr] lg:gap-24 lg:pb-32 lg:pt-36`}>
          <MediaReveal onView delay={0} className="img-zoom relative aspect-[500/620] w-full overflow-hidden">
            <Image src={`${IMG}/nosotros-mazo.jpg`} alt="Mazo de juez sobre una mesa de madera" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-6 lg:pt-6">
            <Reveal as="h2" className={`${MAR} text-[clamp(2.5rem,4.4vw,3.25rem)] leading-[1.1] text-[#0E0E0E]`}>
              ¿Quiénes somos?
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-6">
              <p className="text-lg leading-[1.55] md:text-[21px] md:leading-8">
                Caballero Villalpando &amp; Asociados, S.C. es una firma de abogados en México que se especializa en brindar servicios legales de litigio en materias fiscal y administrativa.
              </p>
              <p className="text-base leading-[27px] text-[#555555]">
                La prestación de un servicio pronto, responsable y profesional hizo necesario el crecimiento de la firma para atender todas las necesidades legales de nuestros clientes. Hoy CVA está conformada por abogados con una amplia experiencia que abarca un periodo conjunto de 20 años, al servicio de personas físicas con actividad empresarial y de personas morales nacionales y extranjeras.
              </p>
            </Reveal>
            <Reveal delay={0.14} className="flex flex-col gap-3.5 border-l-2 border-[#B98909] pl-7 pt-7">
              <p className="text-[15px] leading-[23px] text-[#555555]">
                Algunos de nuestros miembros han trabajado para firmas de nivel internacional y grandes empresas como:
              </p>
              <p className={`${MAR} flex flex-col gap-x-3.5 text-[21px] leading-8 text-[#0E0E0E] sm:flex-row sm:flex-wrap`}>
                <span>Deloitte</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span>Grupo Empresarial Ángeles</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span>Thyssen-Krupp</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Fundador */}
        <section aria-label="Palabras del fundador" className="relative isolate overflow-hidden bg-[#C9A253]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={30}>
            <Image src={`${IMG}/fancy.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#B9890926]" />
          <Reveal className="mx-auto flex max-w-[1064px] flex-col items-center gap-9 px-5 py-24 text-center md:px-8 lg:py-28">
            <QuotesIcon className="h-12 w-12 text-[#0E0E0E]" />
            <blockquote className={`${MAR} text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.35] text-[#0E0E0E]`}>
              CVA nace como una firma de abogados especializados en litigio en materias fiscal y administrativa, con el propósito original de representar los intereses de sus clientes, personas físicas y morales, en tales ámbitos del derecho.
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[17px] font-bold text-[#0E0E0E]">Lic. Francisco Javier Caballero Villalpando</p>
              <p className="text-[15px] text-[#2A2108]">CEO y fundador</p>
            </div>
          </Reveal>
        </section>

        {/* Objetivo y valores */}
        <section aria-labelledby="objetivo" className="bg-[#F4F4F4]">
          <div className={`${WRAP} flex flex-col gap-16 py-24 lg:gap-20 lg:pb-32 lg:pt-[136px]`}>
            <Reveal className="flex flex-col gap-6">
              <h2 id="objetivo" className={`${MAR} text-[clamp(2.25rem,3.8vw,2.75rem)] leading-[1.15] text-[#0E0E0E]`}>
                Nuestro objetivo
              </h2>
              <p className="max-w-[940px] text-xl leading-[1.5] md:text-2xl md:leading-9">
                Proporcionamos una atención total, asesorándole en los aspectos relevantes de su actividad comercial cuando ésta trasciende al ámbito jurídico, trabajando conjuntamente en la solución pertinente a cada caso con absoluta diligencia y atención personalizada.
              </p>
            </Reveal>
            <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
              {VALORES.map(([t, d]) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t-2 border-[#B98909] pt-7">
                  <h3 className={`${MAR} text-2xl text-[#0E0E0E]`}>{t}</h3>
                  <p className="text-[15px] leading-6 text-[#555555]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de servicio */}
        <section id="servicios" className={`${WRAP} flex scroll-mt-24 flex-col gap-14 py-24 lg:py-[136px]`}>
          <Reveal className="flex flex-col gap-5">
            <h2 className={`${MAR} text-[clamp(2.5rem,4.4vw,3.25rem)] leading-[1.15] text-[#0E0E0E]`}>Áreas de servicio</h2>
            <p className="max-w-[780px] text-[17px] leading-[29px] text-[#555555] md:text-lg">
              Los servicios jurídicos que ofrecemos se enmarcan en el ámbito de asesoría, consultoría, asistencia jurídica, patrocinio y procuración, en las siguientes ramas del derecho.
            </p>
          </Reveal>
          <Stagger className="grid gap-6 lg:grid-cols-2" gap={0.08}>
            {[
              { t: "Derecho Fiscal", Icon: ReceiptIcon, d: "Analizamos y resolvemos problemáticas derivadas de la interpretación de las leyes tributarias y atendemos controversias ante autoridades fiscales locales y federales, como el SAT y la Tesorería de la Ciudad de México: devoluciones, autorización para recibir donativos deducibles y análisis de la viabilidad de un probable litigio." },
              { t: "Derecho Administrativo", Icon: BankIcon, d: "Patrocinamos toda clase de asuntos ante instancias gubernamentales en sus niveles municipal, estatal y federal, incluyendo la tramitación y seguimiento de recursos de inconformidad y de revisión ante dependencias como Profeco, Condusef y CNBV." },
            ].map(({ t, Icon, d }) => (
              <StaggerItem key={t} as="article" className="flex flex-col gap-[22px] bg-[#0E0E0E] px-7 pb-12 pt-10 sm:px-12 sm:pb-[52px] sm:pt-12 lg:min-h-[385px]">
                <Icon className="h-9 w-9 text-[#B98909]" />
                <h3 className={`${MAR} text-[28px] leading-tight text-white sm:text-[34px]`}>{t}</h3>
                <p className="text-base leading-[27px] text-[#CFCAC0]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Stagger className="grid gap-10 pt-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
            {MATERIAS.map(({ t, Icon, d }) => (
              <StaggerItem key={t} as="article" className="flex flex-col gap-3.5">
                <Icon className="h-[30px] w-[30px] text-[#9C7308]" />
                <h3 className={`${MAR} text-2xl text-[#0E0E0E]`}>{t}</h3>
                <p className="text-[15px] leading-6 text-[#555555]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="grid gap-8 bg-[#F4F4F4] p-7 sm:p-12 lg:grid-cols-[300px_1fr] lg:gap-16">
            <h3 className={`${MAR} text-[32px] leading-[38px] text-[#0E0E0E]`}>
              Procuración <br />y asistencia
            </h3>
            <dl className="flex flex-col gap-7">
              {[
                ["Procuración y mediación en asuntos de impacto ciudadano", "Un servicio adicional para nuestros clientes desarrolladores inmobiliarios."],
                ["Procuración", "Cuando así convenga a las circunstancias del caso, nuestros socios están preparados para constituirse en apoderados."],
                ["Asistencia foránea", "Cuando resulta conveniente o necesario, y mediante previo acuerdo con los clientes, nuestros abogados brindan asistencia foránea."],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1.5">
                  <dt className="text-[17px] font-bold text-[#0E0E0E]">{k}</dt>
                  <dd className="text-[15px] leading-6 text-[#555555]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#0E0E0E] text-white">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[1fr_540px] lg:gap-24 lg:pb-[136px] lg:pt-32`}>
            <div className="flex flex-col gap-7">
              <Reveal className="flex flex-col gap-7">
                <h2 className={`${MAR} text-[clamp(2.5rem,4.4vw,3.25rem)] leading-[1.15]`}>Contáctanos</h2>
                <p className="text-[17px] leading-[29px] text-[#CFCAC0] md:text-lg">Consulte con nuestro equipo de expertos las soluciones completas a sus problemas legales.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-[26px] pt-5" gap={0.07}>
                <StaggerItem className="flex gap-[18px]">
                  <MapPinIcon className="h-6 w-6 shrink-0 text-[#B98909]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-[#A39E94]">Dirección</p>
                    <p className="text-[17px] leading-[26px]">
                      Oficina WTC, Montecito 38, Col. Nápoles, <br className="hidden sm:block" />
                      C.P. 03810, Benito Juárez, Ciudad de México
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <PhoneIcon className="h-6 w-6 shrink-0 text-[#B98909]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-[#A39E94]">Teléfonos</p>
                    <p className="text-[17px] leading-[26px]">
                      <a href={TEL1} className="link-u">
                        55 6273 9744
                      </a>
                      <span className="mx-1.5">/</span>
                      <a href={TEL2} className="link-u">
                        55 6273 9746
                      </a>
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <EnvelopeSimpleIcon className="h-6 w-6 shrink-0 text-[#B98909]" />
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="text-sm text-[#A39E94]">Correo electrónico</p>
                    <a href={`mailto:${EMAIL}`} className="link-u w-fit text-sm leading-[26px] [overflow-wrap:anywhere] sm:text-[17px]">
                      {EMAIL}
                    </a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <ClockIcon className="h-6 w-6 shrink-0 text-[#B98909]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-[#A39E94]">Horario</p>
                    <p className="text-[17px] leading-[26px]">Lunes a viernes, 9:00 am a 6:00 pm</p>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#0E0E0E] sm:p-12" noteClassName="text-sm text-[#555555]">
                <p className={`${MAR} pb-1 text-[22px] leading-[30px]`}>
                  En CVA estamos para servirle: registre sus datos y en breve nos pondremos en contacto con usted.
                </p>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#1D2127]">Mensaje</span>
                  <textarea name="mensaje" rows={5} className={`${FIELD} h-32 resize-y py-3`} />
                </label>
                <button type="submit" className="press w-full bg-[#B98909] py-[18px] text-base font-bold text-[#0E0E0E] hover:bg-[#9C7308]">
                  Enviar mensaje
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#171717] text-[#A39E94]">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="grid gap-10 sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_auto] lg:gap-20">
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              <Logo inverse className="h-[60px] w-fit" />
              <p className="max-w-[420px] text-[15px] leading-6">
                Firma de abogados en México que se especializa en brindar servicios legales de litigio en materias fiscal y administrativa.
              </p>
            </div>
            <nav aria-label="Pie de página">
              <ul className="flex flex-col gap-3 text-[15px] text-[#E8E4DC]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-3">
              <p className="text-sm">Llámanos</p>
              <a href={TEL1} className={`${MAR} link-u w-fit text-[26px] text-white`}>
                55 6273 9744 / 46
              </a>
              <div className="flex gap-3 pt-2">
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="press flex h-10 w-10 items-center justify-center border border-[#FFFFFF33] text-white hover:border-[#B98909] hover:text-[#B98909]">
                  <FacebookLogoIcon className="h-[18px] w-[18px]" />
                </a>
                <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="press flex h-10 w-10 items-center justify-center border border-[#FFFFFF33] text-white hover:border-[#B98909] hover:text-[#B98909]">
                  <TwitterLogoIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#FFFFFF1F] pt-6 text-sm lg:flex-row lg:justify-between">
            <p>© Caballero Villalpando &amp; Asociados, S.C. Todos los derechos reservados.</p>
            <p>Oficina WTC, Montecito 38, Nápoles, Ciudad de México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
