import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Cabin, Oranienbaum } from "next/font/google";
import {
  ChartLineUp,
  ChartPieSlice,
  ChatsCircle,
  ClipboardText,
  Clock,
  Coins,
  EnvelopeSimple,
  FacebookLogo,
  Handshake,
  InstagramLogo,
  MapPin,
  Money,
  Phone,
  Prohibit,
  Receipt,
  Scales,
  SignOut,
  Umbrella,
  WarningOctagon,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Oranienbaum({ subsets: ["latin"], weight: "400", variable: "--s42-display" });
const body = Cabin({ subsets: ["latin"], variable: "--s42-body" });

export const metadata: Metadata = {
  title: "CARED Abogados",
  description: "Especialistas en derecho del trabajo y seguridad social. Asesoría, acompañamiento y representación jurídica en Ciudad de México.",
};

const IMG = "/sitios/caredabogados";
const PHONE = { label: "56 4743 0073", href: "tel:+525647430073" };
const EMAIL = "info@caredabogados.com";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contáctanos", href: "#contacto" },
];

const MODALITIES = [
  { Icon: ChatsCircle, t: "Asesoría" },
  { Icon: Handshake, t: "Acompañamiento" },
  { Icon: Scales, t: "Representación jurídica" },
];

const SITUATIONS = [
  { Icon: SignOut, t: "Despido injustificado" },
  { Icon: Money, t: "Renunciaste y no te pagaron" },
  { Icon: ClipboardText, t: "No te respetan tus condiciones generales de trabajo" },
  { Icon: WarningOctagon, t: "Acoso u hostigamiento laboral" },
  { Icon: ChartLineUp, t: "Derechos escalafonarios de preferencia y antigüedad" },
  { Icon: Receipt, t: "Pago de prestaciones devengadas" },
  { Icon: ChartPieSlice, t: "Reparto de utilidades (PTU)" },
  { Icon: Umbrella, t: "Otorgamiento de pensiones" },
  { Icon: Coins, t: "Devolución de aportaciones" },
  { Icon: Prohibit, t: "Discriminación" },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61568464602204", Icon: FacebookLogo },
  { label: "Instagram", href: "https://www.instagram.com/cared.abogados/", Icon: InstagramLogo },
];

const GOLD_BTN = "press inline-flex bg-[#CEAD74] font-semibold text-[#142249] hover:bg-[#DBBE8A]";
const PAD = "px-5 md:px-8 xl:px-0";
const FIELD =
  "w-full border border-[#142249]/20 bg-white px-4 text-base text-[#050914] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#142249] focus:shadow-[0_0_0_3px_rgba(20,34,73,0.12)]";

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="CARED Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo.svg`}
        alt="CARED Abogados"
        width={140}
        height={90}
        preload={!footer}
        className={footer ? "h-auto w-[140px]" : "h-auto w-[104px] lg:w-[140px]"}
      />
    </a>
  );
}

export default function CaredAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s42-body)] text-[#142249] selection:bg-[#CEAD74] selection:text-[#142249]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#142249]"
        scrolledClassName="shadow-[0_12px_30px_-18px_rgba(5,9,20,0.7)]"
        innerClassName="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[112px] xl:px-0"
        linkClassName="text-[15px] font-medium text-white [&[href='#top']]:text-[#CEAD74]"
        panelClassName="bg-[#142249] text-white font-[family-name:var(--s42-body)]"
        panelLinkClassName="font-[family-name:var(--s42-display)] text-3xl"
        burgerClassName="bg-white"
        actions={
          <>
            <a href={PHONE.href} className="flex items-center gap-2 text-[15px] font-medium text-white">
              <Phone size={18} className="text-[#CEAD74]" />
              <span className="link-u">{PHONE.label}</span>
            </a>
            <a href="#contacto" className={`${GOLD_BTN} px-[22px] py-[13px] text-[15px] lg:ml-2`}>
              Cuéntanos sobre tu asunto
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#142249] text-white lg:min-h-[700px] lg:grid-cols-[minmax(0,1fr)_37.5%]">
          <div className="flex flex-col justify-between gap-16 px-5 pb-14 pt-16 md:px-8 lg:pb-16 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-16 lg:pt-[88px]">
            <HeroIntro className="flex flex-col items-start gap-9">
              <HeroItem as="h1" blur className="max-w-[720px] font-[family-name:var(--s42-display)] text-[clamp(2.625rem,4.45vw,4rem)] leading-[1.05]">
                Especialistas en derecho del trabajo y seguridad social
              </HeroItem>
              <HeroItem as="ul" className="flex flex-col gap-2 border-l-2 border-[#CEAD74] py-1 pl-[22px] text-[19px] leading-[27px] text-[#E4E7F0]">
                <li>¿Fuiste despedido?</li>
                <li>¿Sufriste algún riesgo de trabajo?</li>
                <li>¿Necesitas asesoría para recibir tu pensión o la de un familiar?</li>
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-3.5 pt-2">
                <a href="#contacto" className={`${GOLD_BTN} px-7 py-[17px] text-base`}>
                  Cuéntanos sobre tu asunto
                </a>
                <a href="#servicios" className="press inline-flex border border-white/50 px-[27px] py-4 text-base font-medium hover:border-white hover:bg-white/10">
                  Ver servicios
                </a>
              </HeroItem>
            </HeroIntro>
            <Reveal delay={0.5} className="flex max-w-[716px] flex-wrap gap-x-12 gap-y-5 border-t border-white/15 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-[#AEB6CC]">Oficinas</span>
                <span className="text-[15px]">Torre Blanca, Miguel Hidalgo, CDMX</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-[#AEB6CC]">Correo</span>
                <a href={`mailto:${EMAIL}`} className="link-u w-fit text-[15px]">
                  {EMAIL}
                </a>
              </div>
            </Reveal>
          </div>
          <MediaReveal className="relative h-[420px] overflow-hidden md:h-[520px] lg:h-auto" delay={0.25}>
            <Image src={`${IMG}/hero-firma.jpg`} alt="Mano firmando un documento con pluma" fill preload sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* ¿Quiénes somos? */}
        <section aria-labelledby="quienes" className="relative isolate overflow-hidden">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={40}>
            <Image src={`${IMG}/pluma-libreta.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#142249]/[0.08]" />
          <div className={`mx-auto flex max-w-[1200px] items-center py-20 lg:min-h-[620px] lg:py-0 ${PAD}`}>
            <Reveal className="flex max-w-[620px] flex-col gap-6 bg-white px-7 py-10 md:px-16 md:pb-[68px] md:pt-16">
              <h2 id="quienes" className="font-[family-name:var(--s42-display)] text-[clamp(2.5rem,3.6vw,3.25rem)] leading-[1.06]">
                ¿Quiénes somos?
              </h2>
              <p className="text-lg leading-[30px] text-[#2A3150]">
                Somos un equipo de especialistas en derecho laboral y de seguridad social que asesoramos, acompañamos y representamos a nuestros clientes en defensa de sus derechos laborales y de seguridad social, mediante un servicio eficaz de solución de conflictos en el nuevo esquema de justicia laboral que contribuya a la satisfacción de nuestros clientes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Nuestros servicios */}
        <section id="servicios" className="scroll-mt-28 bg-[#142249] text-white">
          <div className={`mx-auto grid max-w-[1200px] items-center gap-14 py-24 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16 lg:py-[120px] xl:gap-[100px] ${PAD}`}>
            <MediaReveal onView delay={0} className="relative aspect-[420/560] w-full overflow-hidden">
              <Image src={`${IMG}/estatua-justicia.jpg`} alt="Estatua de la justicia con balanza y espada" fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className="font-[family-name:var(--s42-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.05]">
                Nuestros servicios
              </Reveal>
              <Reveal as="p" delay={0.06} className="text-lg leading-[30px] text-[#D9DEEA]">
                Los servicios que prestamos son de asesoría, acompañamiento y representación jurídica apegada a la Ley Federal del Trabajo y a la ley de seguridad social, reglamentos y contratos colectivos o contrato ley, según corresponda en el ámbito de la competencia.
              </Reveal>
              <Stagger as="ul" className="flex flex-col pt-3" gap={0.08} delay={0.1}>
                {MODALITIES.map(({ Icon, t }) => (
                  <StaggerItem key={t} as="li" className="flex items-center gap-5 border-t border-[#CEAD74]/40 py-[22px]">
                    <Icon size={28} className="shrink-0 text-[#CEAD74]" />
                    <span className="font-[family-name:var(--s42-display)] text-[clamp(1.75rem,2.4vw,2.125rem)] leading-tight">{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Situaciones */}
        <section aria-labelledby="situaciones" className="bg-[#F3F4F7]">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 py-24 lg:pb-28 lg:pt-[120px] ${PAD}`}>
            <Reveal className="flex max-w-[920px] flex-col gap-[18px]">
              <h2 id="situaciones" className="font-[family-name:var(--s42-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.05]">
                ¿Tienes alguna de estas situaciones?
              </h2>
              <p className="max-w-[640px] text-lg leading-[29px] text-[#3A4160]">
                Asesoramos, acompañamos y representamos a nuestros clientes en defensa de sus derechos laborales y de seguridad social.
              </p>
            </Reveal>
            <Stagger as="ul" className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5" gap={0.04}>
              {SITUATIONS.map(({ Icon, t }) => (
                <StaggerItem key={t} as="li" className="flex min-h-[150px] flex-col justify-between gap-6 sm:min-h-[180px] bg-white px-5 pb-6 pt-6 sm:px-[26px] sm:pb-7 sm:pt-[30px] lg:h-[212px]">
                  <Icon size={30} className="shrink-0" />
                  <span className="text-[17px] font-semibold leading-6 sm:text-lg">{t}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#contacto" className="press inline-flex bg-[#142249] px-7 py-[17px] text-base font-semibold text-white hover:bg-[#22336A]">
                Cuéntanos sobre tu asunto
              </a>
              <p className="text-base text-[#3A4160]">
                o llámanos al{" "}
                <a href={PHONE.href} className="link-u">
                  {PHONE.label}
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className={`mx-auto grid max-w-[1200px] scroll-mt-28 items-start gap-14 py-24 lg:grid-cols-[1fr_minmax(0,540px)] lg:gap-16 lg:py-32 xl:gap-24 ${PAD}`}>
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <h2 className="font-[family-name:var(--s42-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.05]">Cuéntanos sobre tu asunto</h2>
              <p className="text-lg leading-[29px] text-[#3A4160]">Escríbenos y nosotros nos comunicaremos contigo.</p>
            </Reveal>
            <div className="flex flex-col gap-5 border-t border-[#142249]/15 pt-8">
              <Reveal as="h3" className="font-[family-name:var(--s42-display)] text-[30px] leading-[35px]">
                O si lo prefieres, visítanos en nuestras oficinas
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-5" gap={0.06}>
                {[
                  { Icon: MapPin, k: "Dirección", v: "Primera Privada de Lago Guija 16-A, Col. Torre Blanca, Miguel Hidalgo, Ciudad de México, C.P. 11280" },
                  { Icon: Phone, k: "Teléfono y WhatsApp", v: PHONE.label, href: PHONE.href },
                  { Icon: EnvelopeSimple, k: "Correo", v: EMAIL, href: `mailto:${EMAIL}` },
                  { Icon: Clock, k: "Atención", v: "Lunes a viernes" },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} as="li" className="flex gap-4">
                    <Icon size={22} className="shrink-0" />
                    <div className="flex min-w-0 flex-col gap-[3px]">
                      <span className="text-[13px] font-medium text-[#5B6380]">{k}</span>
                      {href ? (
                        <a href={href} className="link-u w-fit text-[17px] leading-[26px] text-[#050914]">
                          {v}
                        </a>
                      ) : (
                        <span className="max-w-[520px] text-[17px] leading-[26px] text-[#050914]">{v}</span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal className="flex flex-wrap items-center gap-4">
              <span className="text-[15px] text-[#3A4160]">Síguenos en nuestras redes sociales</span>
              <span className="flex gap-4">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="press flex h-10 w-10 items-center justify-center border border-[#142249]/25 hover:border-[#142249] hover:bg-[#142249] hover:text-[#CEAD74]"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </span>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-[22px] bg-[#F3F4F7] p-6 md:p-12" noteClassName="text-sm text-[#3A4160]">
              <h3 className="font-[family-name:var(--s42-display)] text-[34px] leading-tight">Envíanos un mensaje</h3>
              <Field label="Nombre" name="nombre" autoComplete="name" />
              <div className="grid gap-[22px] sm:grid-cols-2 sm:gap-4">
                <Field label="Email" name="email" type="email" autoComplete="email" />
                <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Mensaje</span>
                <textarea name="mensaje" rows={5} className={`${FIELD} h-[140px] resize-none py-3`} />
              </label>
              <button type="submit" className="press flex w-full justify-center bg-[#142249] px-6 py-[17px] text-base font-semibold text-white hover:bg-[#22336A]">
                Enviar mensaje
              </button>
              <p className="text-[13px] text-[#5B6380]">Al enviar aceptas nuestro aviso de privacidad.</p>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#142249] text-white">
        <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 pb-28 pt-[72px] lg:pb-10 ${PAD}`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <Logo footer />
            <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-[88px]">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3.5 text-[15px]">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex max-w-[300px] flex-col items-start gap-3.5 text-[15px] leading-[23px] text-[#D9DEEA]">
                <p>Primera Privada de Lago Guija 16-A, Col. Torre Blanca, Miguel Hidalgo, CDMX 11280</p>
                <a href={PHONE.href} className="link-u">
                  {PHONE.label}
                </a>
                <a href={`mailto:${EMAIL}`} className="link-u">
                  {EMAIL}
                </a>
              </div>
              <div className="flex gap-3">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="press flex h-10 w-10 items-center justify-center border border-white/25 text-[#CEAD74] hover:border-[#CEAD74]"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-[13px] text-[#AEB6CC] sm:flex-row sm:justify-between">
            <p>© 2026 CARED ABOGADOS{" · "}<HemeronCredit /></p>
            <p>Aviso de privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${FIELD} h-[50px]`} />
    </label>
  );
}
