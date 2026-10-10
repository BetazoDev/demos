import type { Metadata } from "next";
import Image from "next/image";
import { Figtree, Schibsted_Grotesk } from "next/font/google";
import {
  Briefcase,
  Building2,
  Calculator,
  Check,
  FilePenLine,
  HeartHandshake,
  KeyRound,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  Users,
} from "lucide-react";
import { Accordion, CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { LinkedinIcon, YoutubeIcon } from "./_components/social-icons";

const display = Schibsted_Grotesk({ subsets: ["latin"], weight: ["600", "700"], variable: "--s55-display" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--s55-body" });

export const metadata: Metadata = {
  title: "RAND Abogados",
  description: "Abogados expertos en asesorías jurídicas. Somos una firma con 24 años de experiencia, expertos en abordar situaciones legales complejas con eficacia.",
};

const IMG = "/sitios/55-despachofiscalrand";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = "font-[family-name:var(--s55-display)] font-bold tracking-[-0.5px]";
const WHATSAPP = "https://wa.me/5215618459623";
const BLOG = "https://despachofiscalrand.com.mx/blog/";
const PRIVACY = "https://despachofiscalrand.com.mx/politica-privacidad/";
const LINKEDIN = "https://www.linkedin.com/company/rand-abogados/";
const YOUTUBE = "https://www.youtube.com/@rand_mx";

const NAV = [
  { label: "Servicios legales", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
  { label: "Blog", href: BLOG },
];

const SERVICES = [
  { t: "Derecho administrativo", Icon: Landmark, d: "Asistencia experta en la prevención de riesgos patrimoniales, con estrategias legales sólidas para proteger tus recursos." },
  { t: "Derecho corporativo", Icon: Building2, d: "Prevenimos riesgos patrimoniales y evitamos litigios para proteger tus intereses empresariales." },
  { t: "Derecho mercantil", Icon: Briefcase, d: "Gestionamos relaciones comerciales y actividades empresariales para garantizar el cumplimiento legal." },
  { t: "Derecho civil", Icon: Scale, d: "Desde la protección de tus derechos personales hasta la gestión de bienes, sucesiones y contratos." },
  { t: "Servicios en contabilidad", Icon: Calculator, d: "Servicios contables completos para gestionar y analizar tus transacciones financieras." },
  { t: "Derecho laboral", Icon: Users, d: "Relaciones justas y equilibradas entre empleadores y empleados, con cumplimiento normativo." },
  { t: "Derecho familiar", Icon: HeartHandshake, d: "Soluciones legales para proteger a la familia, con enfoque en bienestar y justicia." },
  { t: "Contratos", Icon: FilePenLine, d: "Documentos redactados con precisión que protegen tus intereses y minimizan riesgos." },
  { t: "Administración inmobiliaria", Icon: KeyRound, d: "Nos encargamos de los aspectos legales de tus propiedades, desde los contratos de arrendamiento." },
];

const PILLARS = [
  ["Abogados expertos en casos difíciles", "Resolvemos situaciones complejas con estrategias innovadoras y experiencia."],
  ["Seguridad para nuestros clientes", "Protección sólida y confiable: tus intereses resguardados con diligencia y compromiso."],
  ["Abogados especializados en cada materia", "Un equipo especializado en diversas áreas del derecho, con soluciones integrales y precisas."],
];

const SECTORS = ["Comercio minorista y mayorista", "Servicios públicos", "Transporte y logística", "Salud", "Petroquímico", "Electrónico", "Construcción", "Automotriz", "Alimenticio"];

const FAQ = [
  ["¿Cuánto puede durar un proceso legal?", "Depende de la complejidad del caso, la carga de trabajo de los tribunales y las acciones de las partes. En la consulta inicial evaluamos tu situación y te damos una estimación del tiempo."],
  ["¿Cuál es el costo de un servicio jurídico?", "Los costos varían según la complejidad y naturaleza del caso. En la consulta inicial evaluamos tu situación y te damos un presupuesto detallado y transparente."],
  ["¿Cómo puedo programar una cita?", "Para programar una cita con uno de nuestros abogados, puedes llamar a nuestro número de teléfono o enviar un correo electrónico a nuestra dirección de contacto."],
  ["¿Cómo puede un abogado fiscalista ayudarme con mis impuestos?", "Un abogado fiscalista puede ayudarte a optimizar tu situación fiscal, evitar problemas con la autoridad tributaria y representarte en casos de disputas o auditorías fiscales."],
  ["¿Qué servicios ofrece un despacho de abogados?", "Ofrecemos asesoría en derecho fiscal, contabilidad, derecho familiar, derecho mercantil, derecho laboral, derecho corporativo y derecho administrativo, entre otros."],
];

const FOOTER_COLS = [
  { title: "Servicios legales", links: ["Derecho administrativo", "Derecho corporativo", "Derecho mercantil", "Derecho civil", "Servicios en contabilidad"] },
  { title: "", links: ["Derecho laboral", "Derecho familiar", "Administración inmobiliaria", "Contratos"] },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" aria-label="RAND Abogados, inicio" className="block">
      <Image
        src={`${IMG}/${inverse ? "logo-rand-white.png" : "logo-rand-transparent.png"}`}
        alt="RAND Abogados. Nuestra unión es tu solución"
        width={inverse ? 190 : 172}
        height={inverse ? 71 : 64}
        loading={inverse ? "lazy" : "eager"}
        className={inverse ? "h-[60px] w-auto lg:h-[71px]" : "h-[52px] w-auto lg:h-16"}
      />
    </a>
  );
}

export default function RandPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s55-body)] text-[#2D2E3E] selection:bg-[#FDD02D] selection:text-[#2D2E3E]`}
    >
      {/* Barra superior */}
      <div className="hidden bg-[#FEDF84] text-sm font-medium lg:block">
        <div className={`${WRAP} flex h-11 items-center justify-between`}>
          <ul className="flex items-center gap-7">
            <li>
              <a href="tel:+525618459623" className="link-u flex items-center gap-2">
                <Phone className="h-[15px] w-[15px]" aria-hidden="true" />
                Atención al cliente: 56 1845 9623
              </a>
            </li>
            <li>
              <a href="mailto:contacto@rand.com.mx" className="link-u flex items-center gap-2">
                <Mail className="h-[15px] w-[15px]" aria-hidden="true" />
                contacto@rand.com.mx
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <a href="tel:+525618457366" className="link-u">Recursos humanos: 56 1845 7366</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de RAND Abogados" className="press hover:text-[#5A5C78]">
              <LinkedinIcon className="h-[17px] w-[17px]" />
            </a>
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube de RAND Abogados" className="press hover:text-[#5A5C78]">
              <YoutubeIcon className="h-[17px] w-[17px]" />
            </a>
          </div>
        </div>
      </div>

      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#2D2E3E14] bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(45,46,62,0.45)]"
        innerClassName={`${WRAP} flex h-[76px] items-center justify-between lg:h-[92px] [&>nav]:ml-auto [&>nav]:mr-9 [&>nav>ul]:gap-9`}
        linkClassName="text-[15px] font-semibold text-[#2D2E3E]"
        panelClassName="bg-white text-[#2D2E3E] font-[family-name:var(--s55-body)]"
        panelLinkClassName="font-[family-name:var(--s55-display)] text-3xl font-bold tracking-[-0.5px] border-[#2D2E3E1F]"
        burgerClassName="bg-[#2D2E3E]"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#FDD02D] px-[22px] py-[13px] text-[15px] font-bold leading-[18px] text-[#2D2E3E] hover:bg-[#F2C417]">
            Contáctanos ahora
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#2D2E3E]">
          <div className={`${WRAP} grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16 lg:pb-24 lg:pt-[88px]`}>
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className="max-w-[640px] font-[family-name:var(--s55-display)] text-[clamp(2.5rem,4.6vw,3.625rem)] font-bold leading-[1.04] tracking-[-1.5px] text-white">
                Abogados expertos en asesorías jurídicas
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-[17px] leading-[1.6] text-white/[0.82] md:text-[19px] md:leading-[30px]">
                Somos una firma con 24 años de experiencia, expertos en abordar situaciones legales complejas con eficacia.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-6 gap-y-5 pt-2">
                <a href="#contacto" className="press rounded-[6px] bg-[#FDD02D] px-[30px] py-[17px] text-base font-bold leading-[19px] text-[#2D2E3E] hover:bg-[#F2C417]">
                  Contáctanos ahora
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link-u flex items-center gap-2.5 text-base font-semibold text-white">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp 56 1845 9623
                </a>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="relative aspect-square w-full overflow-hidden rounded-[6px]" delay={0.25}>
              <Image src={`${IMG}/cdmx-randcommx.jpg`} alt="Torres de oficinas en la Ciudad de México al anochecer" fill preload sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Cifras */}
        <section aria-labelledby="cifras-titulo" className="bg-[#FDD02D]">
          <div className={`${WRAP} flex flex-col gap-10 py-14 xl:flex-row xl:items-center xl:gap-12`}>
            <Reveal className="flex flex-col gap-2 xl:w-[400px] xl:shrink-0">
              <h2 id="cifras-titulo" className={`${H2} text-[clamp(1.625rem,2.4vw,1.875rem)] leading-[1.17] xl:whitespace-nowrap`}>
                Nuestro impacto en números
              </h2>
              <p className="max-w-[380px] text-base leading-[26px]">Cifras que reflejan el éxito en cada caso resuelto para nuestros clientes.</p>
            </Reveal>
            <Stagger as="dl" className="grid gap-8 sm:grid-cols-3 sm:gap-12 xl:flex-1" gap={0.08}>
              {[
                ["+7000", "Casos resueltos"],
                ["24", "Años de experiencia"],
                ["9", "Sectores atendidos"],
              ].map(([v, k]) => (
                <StaggerItem key={k} className="flex flex-col-reverse gap-1 border-l border-[#2D2E3E40] pl-7">
                  <dt className="text-base font-semibold leading-[26px]">{k}</dt>
                  <dd className="font-[family-name:var(--s55-display)] text-[clamp(2.75rem,4vw,3.5rem)] font-bold leading-none tracking-[-1.5px]">
                    <CountUp value={v} />
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:py-28 xl:flex-row xl:gap-[72px]`}>
            <Reveal className="flex flex-col gap-5 xl:w-[340px] xl:shrink-0">
              <h2 className={`${H2} text-[clamp(2.125rem,3.4vw,2.625rem)] leading-[1.1]`}>Servicios de consultoría jurídica</h2>
              <p className="max-w-[330px] text-[17px] leading-[27px] text-[#666666]">
                En RAND® nos especializamos en servicios jurídicos, manejando con éxito situaciones complejas y desafiantes con soluciones estratégicas.
              </p>
            </Reveal>
            <Stagger className="grid flex-1 gap-x-12 gap-y-10 md:grid-cols-2" gap={0.05}>
              {SERVICES.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="article" className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-[#2D2E3E]">
                    <Icon className="h-[22px] w-[22px] text-[#FDD02D]" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-[family-name:var(--s55-display)] text-xl font-bold leading-[25px] tracking-[-0.2px]">{t}</h3>
                    <p className="text-[15px] leading-[23px] text-[#666666]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-24">
          <div className={`${WRAP} grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-28 xl:grid-cols-[560px_1fr] xl:gap-20`}>
            <MediaReveal onView delay={0} className="img-zoom relative aspect-[560/520] w-full overflow-hidden rounded-[6px]">
              <Image src={`${IMG}/presentacion-1-randcommx.jpg`} alt="Sala de juntas de RAND Abogados con vista a la ciudad" fill sizes="(min-width: 1280px) 560px, (min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={`${H2} text-[clamp(2.125rem,3.4vw,2.625rem)] leading-[1.1]`}>
                Somos una firma experta en soluciones jurídicas
              </Reveal>
              <Reveal as="p" delay={0.08} className="text-[17px] leading-[27px] text-[#666666]">
                Contamos con abogados expertos en distintas áreas jurídicas, desde el derecho mercantil y laboral hasta servicios de contabilidad y servicios digitales, con asesoría integral y estratégica para enfrentar desafíos complejos.
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-5 pt-2" gap={0.08} delay={0.1}>
                {PILLARS.map(([t, d]) => (
                  <StaggerItem as="li" key={t} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FDD02D]">
                      <Check className="h-4 w-4 text-[#2D2E3E]" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-[family-name:var(--s55-display)] text-lg font-bold leading-[23px] tracking-[-0.2px]">{t}</h3>
                      <p className="text-[15px] leading-6 text-[#666666]">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section aria-labelledby="sectores-titulo" className="bg-[#FDD02D]">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:py-[104px]`}>
            <Reveal className="flex flex-col gap-3.5">
              <h2 id="sectores-titulo" className={`${H2} text-[clamp(2.125rem,3.6vw,2.75rem)] leading-[1.09]`}>
                Sectores que confían en nosotros
              </h2>
              <p className="max-w-[640px] text-[17px] leading-[1.6] md:text-lg md:leading-[29px]">
                Hemos colaborado con una amplia variedad de industrias, brindando soluciones legales especializadas que impulsan el éxito y la eficiencia.
              </p>
            </Reveal>
            <Stagger as="ul" className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.04}>
              {SECTORS.map((s) => (
                <StaggerItem as="li" key={s} className="border-t border-[#2D2E3E33] py-[22px] font-[family-name:var(--s55-display)] text-[clamp(1.375rem,2vw,1.625rem)] font-semibold leading-[1.2] tracking-[-0.4px]">
                  {s}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section id="preguntas-frecuentes" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:flex-row lg:gap-20 lg:py-28`}>
            <Reveal className="flex flex-col gap-[18px] lg:w-[380px] lg:shrink-0">
              <h2 className={`${H2} text-[clamp(2.125rem,3.4vw,2.625rem)] leading-[1.1]`}>Preguntas frecuentes</h2>
              <p className="text-xl font-semibold leading-8">Todo lo que necesitas saber</p>
              <p className="max-w-[360px] text-base leading-[26px] text-[#666666]">
                Encuentra las respuestas a las dudas más frecuentes sobre nuestros servicios. Si tienes preguntas adicionales, no dudes en contactarnos.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex-1">
              <Accordion
                defaultOpen={0}
                className="flex flex-col gap-3"
                itemClassName="rounded-[6px] bg-[#F5F5F6] px-5 py-3 transition-colors duration-200 ease-[var(--ease-out)] has-[[aria-expanded=true]]:bg-[#FFF6D6] md:px-[26px]"
                buttonClassName="flex w-full items-center justify-between gap-4 py-2.5 text-left font-[family-name:var(--s55-display)] text-[17px] font-semibold leading-6 tracking-[-0.2px] text-[#2D2E3E] md:text-lg"
                panelClassName="pb-2.5 text-base leading-[26px] text-[#333333]"
                items={FAQ.map(([q, a]) => ({ title: q, content: <p>{a}</p> }))}
              />
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#2D2E3E] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:flex-row lg:items-start lg:gap-16 lg:py-28`}>
            <div className="flex flex-1 flex-col gap-8">
              <Reveal as="h2" className={`${H2} text-[clamp(2.5rem,4vw,3rem)] leading-[1.1]`}>
                Contacto
              </Reveal>
              <Reveal as="p" delay={0.06} className="max-w-[560px] text-[17px] leading-[1.65] text-white/[0.82] md:text-lg md:leading-[29px]">
                Para más información o asesoría personalizada, contáctanos. Nuestro equipo está listo para ofrecerte soluciones legales en Puebla, San Luis Potosí, Estado de México y Toluca.
              </Reveal>
              <Stagger className="flex flex-wrap gap-x-10 gap-y-7 pt-2" gap={0.07}>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={Phone}>Teléfonos</Label>
                  <div className="flex flex-col text-[19px] font-medium leading-7">
                    <a href="tel:+525552031493" className="link-u w-fit">55 5203 1493</a>
                    <a href="tel:+525526240973" className="link-u w-fit">55 2624 0973</a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={MessageCircle}>WhatsApp</Label>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link-u w-fit text-[19px] font-medium leading-7">56 1845 9623</a>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={Mail}>Correo</Label>
                  <a href="mailto:contacto@rand.com.mx" className="link-u w-fit text-[19px] font-medium leading-7">contacto@rand.com.mx</a>
                </StaggerItem>
              </Stagger>
              <Reveal delay={0.1}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="press inline-block rounded-[6px] bg-[#FDD02D] px-[30px] py-[17px] text-base font-bold leading-[19px] text-[#2D2E3E] hover:bg-[#F2C417]">
                  Contáctanos ahora
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="flex w-full flex-col gap-[18px] rounded-[6px] bg-[#FEDF84] p-7 text-[#2D2E3E] md:p-10 lg:w-[420px] lg:shrink-0">
              <h3 className="font-[family-name:var(--s55-display)] text-[28px] font-bold leading-8 tracking-[-0.5px]">Oportunidades de carrera en nuestra firma</h3>
              <p className="text-base leading-[26px]">Buscamos profesionales talentosos y dedicados para unirse a nuestra firma.</p>
              <div className="flex flex-col gap-1 py-1.5">
                <p className="text-sm font-semibold leading-[22px]">Recursos humanos</p>
                <a href="tel:+525618457366" className="link-u w-fit text-base leading-6">56 1845 7366</a>
                <a href="mailto:reclutamiento@rand.com.mx" className="link-u w-fit break-all text-base leading-6">reclutamiento@rand.com.mx</a>
              </div>
              <a
                href="mailto:reclutamiento@rand.com.mx?subject=Env%C3%ADo%20de%20CV"
                className="press w-fit rounded-[6px] border-[1.5px] border-[#2D2E3E] px-6 py-[13px] text-[15px] font-bold leading-[18px] hover:bg-[#2D2E3E] hover:text-[#FEDF84]"
              >
                Envía tu CV
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.12] bg-[#2D2E3E] text-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-14 lg:pb-9`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <Logo inverse />
            <div className="flex flex-col gap-8 md:flex-row md:gap-[72px]">
              {FOOTER_COLS.map((col, i) => (
                <nav key={i} aria-label={col.title || "Más servicios legales"} className="flex flex-col gap-2.5">
                  {col.title ? (
                    <p className="text-sm font-bold leading-[22px] text-[#FDD02D]">{col.title}</p>
                  ) : (
                    <span aria-hidden="true" className="hidden h-[22px] md:block" />
                  )}
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#servicios" className="link-u text-[15px] leading-6 text-white/80 transition-colors duration-200 hover:text-white">{l}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
              <nav aria-label="RAND" className="flex flex-col gap-2.5">
                <p className="text-sm font-bold leading-[22px] text-[#FDD02D]">RAND</p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    ["Nosotros", "#nosotros"],
                    ["Blog", BLOG],
                    ["Contacto", "#contacto"],
                    ["Aviso de privacidad", PRIVACY],
                  ].map(([l, href]) => (
                    <li key={l}>
                      <a href={href} className="link-u text-[15px] leading-6 text-white/80 transition-colors duration-200 hover:text-white">{l}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3.5 pt-1.5">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de RAND Abogados" className="press text-white hover:text-[#FDD02D]">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube de RAND Abogados" className="press text-white hover:text-[#FDD02D]">
                    <YoutubeIcon className="h-5 w-5" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <p className="border-t border-white/[0.12] pt-[22px] text-sm leading-[22px] text-white/60">RAND® 2024 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

function Label({ Icon, children }: { Icon: typeof Phone; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-sm font-semibold leading-[17px] text-[#FDD02D]">
      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      {children}
    </p>
  );
}
