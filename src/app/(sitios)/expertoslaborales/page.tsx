import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Besley, Geist } from "next/font/google";
import { ArrowCircleRight, ChatCircleText, Handshake, MapPin, Phone, Scales, Warning, WhatsappLogo, XCircle } from "@phosphor-icons/react/ssr";
import { Accordion, CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Besley({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s10-display" });
const body = Geist({ subsets: ["latin"], variable: "--s10-body" });

export const metadata: Metadata = {
  title: "Expertos Laborales Abogados",
  description: "¿Te despidieron injustamente? No firmes nada todavía. Te decimos gratis cuánto te corresponde por ley y te ayudamos a cobrarlo.",
};

const IMG = "/sitios/expertoslaborales";
const WA = "https://wa.me/5215652736263";
const TEL = "tel:+525541708184";
const AVISO = "https://www.expertoslaborales.com/aviso-de-confidencialidad";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Aviso de confidencialidad", href: AVISO },
];

const GUARANTEES = [
  ["Gratis", "La asesoría inicial de tu despido es gratuita."],
  ["30%", "Solo cobramos cuando tú cobres, garantizado por escrito."],
  ["Sin anticipos", "Ni pagos durante el juicio: no pagas nada hasta que cobres."],
  ["Desde 2000", "Especialistas en materia laboral, con oficinas en la CDMX."],
];

const RIGHTS = [
  ["20 días de salario por cada año trabajado", "Aplica cuando reclamas tu reinstalación y el patrón se niega a regresarte a tu puesto, entre otros supuestos."],
  ["Prima de antigüedad: 12 días por año", "En caso de despido te corresponde sin importar cuántos años llevaras en la empresa."],
  ["Salarios caídos: hasta 12 meses", "Desde la fecha del despido. Si el juicio se alarga más, se generan intereses del 2% mensual sobre 15 meses de salario."],
  ["Todo lo que te quedaron a deber", "Días trabajados no pagados, aguinaldo y prima vacacional proporcionales, vacaciones no disfrutadas y, en su caso, reparto de utilidades."],
];

const DONT_SIGN = [
  { Icon: XCircle, t: "No firmes tu renuncia. Si te despidieron, no renunciaste. Firmar una renuncia puede acabar con tu derecho a la indemnización." },
  { Icon: XCircle, t: "No firmes hojas en blanco ni documentos que no te dejen leer con calma." },
  { Icon: XCircle, t: "No firmes un finiquito \"de conformidad\" sin que un abogado revise las cantidades. Muchas empresas ofrecen menos de lo que la ley ordena." },
  { Icon: ArrowCircleRight, t: "Si ya firmaste algo bajo presión, contáctanos de todos modos: en muchos casos todavía se puede pelear." },
];

const STEPS = [
  { Icon: ChatCircleText, n: "Paso 1", t: "Nos cuentas tu caso", d: "Por WhatsApp o teléfono. La asesoría inicial de tu despido es gratuita.", active: true },
  { Icon: Handshake, n: "Paso 2", t: "Conciliación", d: "Antes del juicio, la ley prevé una etapa de conciliación ante el Centro de Conciliación Laboral, que dura hasta 45 días naturales. Muchos casos se resuelven aquí, con un convenio en el que cobras rápido." },
  { Icon: Scales, n: "Paso 3", t: "Juicio, solo si no hay arreglo", d: "Si la empresa no ofrece lo justo, presentamos tu demanda ante los Tribunales Laborales. Nosotros llevamos todo el proceso; tú no pagas nada hasta que cobres.", last: true },
];

const SPECIALTIES = ["Despidos", "Recuperación de AFORE", "Accidente de trabajo", "Derechos laborales", "Asesoría y representación a empresas"];

const FAQ = [
  ["¿Y si me despidieron \"por faltas\" o con un pretexto?", "El patrón tiene la obligación de entregarte un aviso por escrito con la fecha y la causa del despido. Si no te lo dio, o la causa es falsa o no está prevista en la ley, el despido se considera injustificado y puedes reclamar tu indemnización completa."],
  ["¿Me pueden despedir estando embarazada o incapacitado?", "Un despido por embarazo es discriminatorio y da lugar a reclamos adicionales. Si te despidieron estando embarazada, con incapacidad o después de un accidente de trabajo, contáctanos de inmediato: tu caso puede valer más de lo que crees."],
  ["¿Cuánto cobra el despacho?", "El 30% de lo que recuperes, solo cuando tú cobres. Sin anticipos, sin pagos durante el juicio. Lo garantizamos por escrito en el contrato de servicios."],
  ["¿Cuál es la jornada legal? ¿Me deben pagar horas extra?", "En 2026 la jornada máxima sigue siendo de 48 horas semanales; la reforma publicada la reducirá gradualmente hasta 40 horas en 2030, sin que puedan bajarte el sueldo. Las horas extra se pagan al doble, y las que excedan el límite legal, al triple."],
  ["¿Cuántos días de vacaciones me tocan?", "Desde la reforma de vacaciones dignas: 12 días desde el primer año, y aumentan 2 días por año hasta llegar a 20 (después, 2 días más por cada 5 años). La prima vacacional es de mínimo 25%."],
];

const SERIF = "font-[family-name:var(--s10-display)] font-bold";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";

function Logo() {
  return (
    <a href="#top" aria-label="Expertos Laborales Abogados, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="" width={200} height={70} preload className="h-auto w-[160px] md:w-[200px]" />
    </a>
  );
}

function WhatsappCta({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <a
      href={WA}
      className={`press inline-flex items-center gap-2.5 rounded-[6px] px-7 py-[18px] text-[17px] font-semibold ${
        dark ? "bg-[#163547] text-white hover:bg-[#1F4760]" : "bg-[#40BABC] text-[#163547] hover:bg-[#5CC7C9]"
      } ${className}`}
    >
      <WhatsappLogo className="h-[22px] w-[22px] shrink-0" />
      Cuéntanos tu caso ahora
    </a>
  );
}

export default function ExpertosLaboralesPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s10-body)] text-[#163547] selection:bg-[#40BABC] selection:text-[#163547]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-white/10 bg-[#163547]"
        scrolledClassName="shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
        innerClassName={`${WRAP} flex h-[84px] items-center justify-between gap-8 lg:h-[104px]`}
        linkClassName="mx-0.5 text-[15px] font-medium text-white/90"
        panelClassName="bg-[#163547] text-white font-[family-name:var(--s10-body)]"
        panelLinkClassName="font-[family-name:var(--s10-display)] text-3xl font-bold"
        burgerClassName="bg-white"
        actions={
          <>
            <a href={TEL} className="flex items-center gap-2 text-base font-semibold text-white">
              <Phone className="h-[18px] w-[18px] text-[#40BABC]" />
              <span className="link-u">55 4170 8184</span>
            </a>
            <a href={WA} className="press inline-flex items-center gap-2 rounded-[6px] bg-[#40BABC] px-5 py-[13px] text-[15px] font-semibold text-[#163547] hover:bg-[#5CC7C9]">
              <WhatsappLogo className="h-[18px] w-[18px]" />
              Cuéntanos tu caso ahora
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#163547] text-white">
          <div className={`${WRAP} grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1fr_480px] lg:gap-[72px] lg:pb-24 lg:pt-[88px]`}>
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className={`${SERIF} text-[clamp(2.625rem,4.5vw,4rem)] leading-[1.05] tracking-[-1.5px]`}>
                ¿Te despidieron injustamente?
              </HeroItem>
              <HeroItem as="p" className="max-w-[540px] text-lg leading-[1.52] text-white/85 md:text-[21px]">
                No firmes nada todavía. Te decimos gratis cuánto te corresponde por ley y te ayudamos a cobrarlo.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
                <WhatsappCta />
                <p className="text-base text-white/80">
                  o llámanos al{" "}
                  <a href={TEL} className="link-u whitespace-nowrap">55 4170 8184</a>
                </p>
              </HeroItem>
              <HeroItem className="flex max-w-[560px] gap-3.5 border-l-[3px] border-[#40BABC] bg-white/[0.06] px-[22px] py-[18px]">
                <Warning className="h-[22px] w-[22px] shrink-0 text-[#40BABC]" />
                <p className="text-base leading-normal text-white/90">
                  Importante: solo tienes 2 meses desde el despido para demandar. Después de ese plazo, pierdes tu derecho a reclamar.
                </p>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="relative aspect-[480/560] w-full max-w-[480px] overflow-hidden rounded-[6px] max-lg:aspect-[4/3] max-lg:max-w-none" delay={0.3}>
              <Image src={`${IMG}/escritorio.jpg`} alt="Escritorio azul con libreta, pluma y lentes" fill preload sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Garantías */}
        <section aria-label="Garantías" className="bg-[#E8F5F5]">
          <Stagger gap={0.07} className={`${WRAP} grid gap-x-6 gap-y-9 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0`}>
            {GUARANTEES.map(([k, v], i) => (
              <StaggerItem key={k} className={`flex flex-col gap-2 lg:px-6 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#163547]/15"}`}>
                <p className={`${SERIF} text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.1] lg:whitespace-nowrap`}>
                  {k === "30%" ? <CountUp value={k} /> : k}
                </p>
                <p className="text-base leading-normal text-[#163547]/85">{v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Qué me corresponde */}
        <section className={`${WRAP} flex flex-col gap-[52px] py-24 lg:pb-[120px] lg:pt-32`}>
          <Reveal className="flex flex-col gap-[18px]">
            <h2 className={`${SERIF} max-w-[860px] text-[clamp(2.125rem,3.4vw,3rem)] leading-[1.13] tracking-[-0.8px]`}>
              ¿Qué me corresponde si me despidieron injustificadamente?
            </h2>
            <p className="text-lg leading-[1.53] text-[#163547]/80 md:text-[19px]">Si te despidieron sin una causa justificada, la ley te da derecho a reclamar:</p>
          </Reveal>
          <Stagger gap={0.07} className="grid gap-5 lg:h-[520px] lg:grid-cols-[440px_1fr]">
            <StaggerItem as="article" className="flex flex-col justify-end gap-4 rounded-[6px] bg-[#163547] px-8 pb-11 pt-10 text-white md:px-10 max-lg:min-h-[380px]">
              <p className="text-base font-semibold text-[#40BABC]">Indemnización constitucional</p>
              <h3 className={`${SERIF} text-[clamp(2.5rem,3.6vw,3.25rem)] leading-[1.06] tracking-[-1px]`}>3 meses de salario</h3>
              <p className="text-base leading-[1.625] text-white/85">
                90 días, calculados con tu salario integrado: incluye proporcional de aguinaldo, prima vacacional y demás prestaciones que recibías.
              </p>
            </StaggerItem>
            <div className="grid gap-5 sm:grid-cols-2">
              {RIGHTS.map(([t, d]) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-2.5 rounded-[6px] bg-[#F3F8F9] px-8 pb-8 pt-[30px]">
                  <h3 className={`${SERIF} text-2xl leading-[1.17]`}>{t}</h3>
                  <p className="text-[15px] leading-[1.6] text-[#163547]/80">{d}</p>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <WhatsappCta />
            <p className="text-[17px] text-[#163547]/80">Te calculamos lo que te corresponde gratis.</p>
          </Reveal>
        </section>

        {/* Plazo y qué no firmar */}
        <section className="bg-[#163547] text-white">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[460px_1fr] lg:gap-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${SERIF} text-[clamp(1.875rem,2.6vw,2.25rem)] leading-[1.14]`}>¿Cuánto tiempo tengo para demandar?</h2>
              <p className={`${SERIF} text-[clamp(4rem,6.7vw,6rem)] leading-none tracking-[-2px] text-[#40BABC]`}>2 meses</p>
              <p className="text-[17px] leading-[1.6] text-white/85">
                Solo 2 meses, contados a partir del día siguiente a tu despido. Es un plazo legal que no se puede extender: si lo dejas pasar, ya no podrás reclamar tu indemnización. Contáctanos lo antes posible, aunque todavía no estés seguro de demandar.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-7 rounded-[6px] border border-white/[0.12] bg-white/5 px-6 py-9 md:px-12 md:py-11">
              <h3 className={`${SERIF} text-[28px] leading-[1.21]`}>¿Qué no debo firmar si me despiden?</h3>
              <Stagger as="ul" gap={0.07} className="flex flex-col gap-7">
                {DONT_SIGN.map(({ Icon, t }) => (
                  <StaggerItem key={t} as="li" className="flex gap-4">
                    <Icon className="h-6 w-6 shrink-0 text-[#40BABC]" />
                    <p className="text-[17px] leading-[1.53] text-white/90">{t}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </section>

        {/* Proceso */}
        <section className={`${WRAP} flex flex-col gap-14 py-24 lg:py-32`}>
          <Reveal as="h2" className={`${SERIF} text-[clamp(2.125rem,3.4vw,3rem)] leading-[1.1] tracking-[-0.8px]`}>
            ¿Cómo es el proceso?
          </Reveal>
          <Stagger as="ol" gap={0.1} className="grid gap-12 md:grid-cols-3 md:gap-10">
            {STEPS.map(({ Icon, n, t, d, active, last }) => (
              <StaggerItem key={n} as="li" className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${active ? "bg-[#40BABC]" : "bg-[#E8F5F5]"}`}>
                    <Icon className="h-[26px] w-[26px]" />
                  </span>
                  <span aria-hidden="true" className={`h-0.5 flex-1 ${last ? "bg-transparent" : "bg-[#163547]/15"}`} />
                </div>
                <p className="text-[15px] font-semibold text-[#2F6A9E]">{n}</p>
                <h3 className={`${SERIF} text-[26px] leading-[1.19]`}>{t}</h3>
                <p className="text-base leading-[1.625] text-[#163547]/80">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className="scroll-mt-24 bg-[#E8F5F5]">
          <div className={`${WRAP} grid items-center gap-12 py-24 lg:grid-cols-[500px_1fr] lg:gap-[88px] lg:py-[120px]`}>
            <MediaReveal onView delay={0} className="relative aspect-[500/560] w-full overflow-hidden rounded-[6px] max-lg:aspect-[4/3]">
              <Image src={`${IMG}/laptop.jpg`} alt="Manos sobre el teclado de una laptop" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal className="flex flex-col gap-6">
                <h2 className={`${SERIF} text-[clamp(2rem,3.1vw,2.75rem)] leading-[1.11] tracking-[-0.6px]`}>Abogados especialistas en materia laboral</h2>
                <p className="font-[family-name:var(--s10-display)] text-[clamp(1.375rem,1.8vw,1.625rem)] italic leading-[1.35] text-[#2F6A9E]">“Atendemos tu asunto como si fuera nuestro.”</p>
                <p className="text-lg leading-[1.6]">
                  Fundados en el año 2000, con oficinas en la CDMX, nuestro objetivo es proporcionar a nuestros clientes tranquilidad al brindar soluciones integrales a sus problemas.
                </p>
                <p className="text-base leading-[1.625] text-[#163547]/80">
                  Entendemos que cuando usted consulta a un abogado es porque algo le preocupa. Un grupo de profesionales altamente capacitados y con gran compromiso moral se hace cargo de su problema como si fuera propio.
                </p>
              </Reveal>
              <Stagger as="ul" gap={0.05} className="flex max-w-[560px] flex-wrap gap-2.5 pt-2">
                {SPECIALTIES.map((s) => (
                  <StaggerItem key={s} as="li" y={8} className="rounded-[6px] border border-[#163547]/[0.12] bg-white px-4 py-2.5 text-[15px] font-medium">
                    {s}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[360px_1fr] lg:gap-24 lg:py-32`}>
          <Reveal className="flex flex-col gap-5">
            <h2 className={`${SERIF} text-[clamp(2.125rem,3.4vw,3rem)] leading-[1.08] tracking-[-0.8px]`}>Preguntas frecuentes</h2>
            <p className="text-[17px] leading-[1.6] text-[#163547]/80">
              Escríbenos por <a href={WA} className="link-u">WhatsApp</a> o llámanos al
              <br />
              <a href={TEL} className="link-u">55 4170 8184</a>.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion
              defaultOpen={0}
              className="border-t border-[#163547]/15"
              itemClassName="border-b border-[#163547]/15"
              buttonClassName={`flex w-full items-center justify-between gap-6 py-6 text-left ${SERIF} text-[clamp(1.25rem,1.7vw,1.4375rem)] leading-[1.3]`}
              iconClassName="text-[#2F6A9E]"
              panelClassName="pb-7 pr-10 text-base leading-[1.625] text-[#163547]/80"
              items={FAQ.map(([q, a]) => ({ title: q, content: a }))}
            />
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-[#40BABC]">
          <div className={`${WRAP} grid items-center gap-12 py-24 lg:grid-cols-[1fr_380px] lg:gap-24 lg:py-28`}>
            <Reveal className="flex flex-col items-start gap-6">
              <h2 className={`${SERIF} text-[clamp(2.125rem,3.2vw,2.875rem)] leading-[1.13] tracking-[-0.8px]`}>
                No dejes tu indemnización en manos de la empresa que te despidió.
              </h2>
              <p className="text-lg leading-normal md:text-xl">Escríbenos hoy: te decimos en minutos cuánto te corresponde y cómo cobrarlo.</p>
              <WhatsappCta dark />
            </Reveal>
            <Stagger as="ul" gap={0.07} className="flex flex-col gap-6 rounded-[6px] bg-white p-8">
              {[
                { Icon: Phone, k: "Teléfono", v: "55 4170 8184", href: TEL },
                { Icon: WhatsappLogo, k: "WhatsApp", v: "56 5273 6263", href: WA },
                { Icon: MapPin, k: "Oficinas", v: "Ciudad de México" },
              ].map(({ Icon, k, v, href }) => (
                <StaggerItem key={k} as="li" className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F5F5]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-[#2F6A9E]">{k}</span>
                    {href ? (
                      <a href={href} className="link-u w-fit text-[19px] font-semibold">{v}</a>
                    ) : (
                      <span className="text-[19px] font-semibold">{v}</span>
                    )}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-[#163547] text-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-14 lg:pb-9`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-white/85">
                {NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href={TEL} className="flex w-fit items-center gap-2 text-base font-semibold">
              <Phone className="h-[18px] w-[18px] text-[#40BABC]" />
              <span className="link-u">Tel. 55 4170 8184</span>
            </a>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/[0.12] pt-[22px] text-[13px] text-white/65 md:flex-row md:justify-between">
            <p>© 2026 Expertos Laborales Abogados. Ciudad de México.{" "}<HemeronCredit /></p>
            <a href={AVISO} className="link-u w-fit">Aviso de confidencialidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
