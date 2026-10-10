import type { Metadata } from "next";
import Image from "next/image";
import { Libre_Franklin, Noto_Serif_Display } from "next/font/google";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Noto_Serif_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s15-display" });
const body = Libre_Franklin({ subsets: ["latin"], variable: "--s15-body" });

export const metadata: Metadata = {
  title: "DJM Abogados",
  description: "Experiencia y dedicación alineadas con la excelencia. Desde 2008, derecho penal, amparo, consultoría en análisis de riesgos y derecho civil.",
};

const IMG = "/sitios/15-djmabogados";
const D = "font-[family-name:var(--s15-display)]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const EN = "https://www.djmabogados.com/home";

const NAV = [
  { label: "DJM Abogados", href: "#djm-abogados" },
  { label: "Consultoría", href: "#consultoria" },
  { label: "Derecho penal", href: "#derecho-penal" },
  { label: "Derecho civil", href: "#derecho-civil" },
  { label: "Despachos asociados", href: "#despachos-asociados" },
  { label: "Clientes", href: "#clientes" },
];

const INSTANCES = [
  [
    ["Averiguaciones previas y carpetas de investigación", "Defensas y acusaciones ante la Procuraduría General de la República y las procuradurías de los estados y de la Ciudad de México."],
    ["Procesos penales", "El equipo atiende personalmente todas las audiencias y diligencias, con prioridad en la protección de los derechos del cliente."],
    ["Sistema acusatorio", "Estudios y capacitación para litigar bajo el sistema acusatorio derivado de la reforma de 2008."],
    ["Amparo penal", "Defensa contra actos de autoridad que violen los derechos humanos de los clientes, mediante el juicio de amparo."],
  ],
  [
    ["Ejecución de sentencias", "Representación de los clientes en la etapa final del proceso penal."],
    ["Extradiciones", "Conocimientos especializados en temas de extradición."],
    ["Compliance en materia penal", "Protocolos y manuales de Compliance Penal y análisis de riesgos ante la responsabilidad penal de las personas morales."],
  ],
];

const CLIENTS = [
  ["c16", "Brenette Inmobiliaria y Constructora"],
  ["c21", "Crédito Maestro"],
  ["c15", "Financiera Crecer"],
  ["c11", "Grupo Trimex"],
  ["c25", "Questro"],
  ["c24", "Italpasta"],
  ["c13", "IUSA"],
  ["c17", "MExCom Publicidad Integral"],
  ["c26", "Possehl"],
  ["c12", "Recubre"],
  ["c22", "El Sardinero"],
  ["c18", "Destinos en Movimiento, Solkay Turismo y Convenciones"],
  ["c23", "Volkswagen"],
];

const FIRMS = [
  { n: "Jáuregui y Del Valle, S.C.", a: ["Torre Arcos Bosques I, Pisos 8 y 9", "Paseo de los Tamarindos No. 400-B", "Bosques de las Lomas, C.P. 05120", "Ciudad de México"], t: "+52 (55) 5267-4500", h: "tel:+525552674500" },
  { n: "BJE, S.C. (Bufete Jurídico Especializado)", a: ["Av. Paseo de las Palmas 830-401", "Lomas de Chapultepec, C.P. 11000", "Ciudad de México"] },
  { n: "Del Río y Moreno De Leija", a: ["Puerto Real 5, Col. Hipódromo Condesa", "C.P. 06170, Ciudad de México"], t: "+52 (55) 5202-4155", h: "tel:+525552024155" },
];

function Lang({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span aria-current="true">ES</span>
      <span aria-hidden="true"> | </span>
      <a href={EN} hrefLang="en" lang="en" className="link-u">
        EN
      </a>
    </span>
  );
}

export default function DjmAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s15-body)] leading-[normal] text-[#424242] selection:bg-[#135671] selection:text-white`}
    >
      <SiteNav
        logo={
          <a href="#top" aria-label="DJM Abogados, inicio" className="block">
            <Image src={`${IMG}/logo-logo.png`} alt="" width={110} height={58} preload className="h-auto w-[92px] lg:w-[110px]" />
          </a>
        }
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(19,86,113,0.55)]"
        innerClassName={`${WRAP} flex h-[84px] items-center gap-[30px] lg:h-[100px] [&>button]:ml-auto [&>nav]:ml-auto [&>nav>ul]:gap-[30px]`}
        linkClassName="text-[15px] font-medium text-[#424242]"
        panelClassName="bg-white text-[#135671] font-[family-name:var(--s15-body)]"
        panelLinkClassName={D}
        burgerClassName="bg-[#135671]"
        actions={
          <span className="flex items-center gap-[30px]">
            <Lang className="text-sm text-[#6E6B60]" />
            <a href="#contacto" className="press bg-[#135671] px-[22px] py-[13px] text-[15px] font-semibold text-white hover:bg-[#0F4659]">
              Contáctanos
            </a>
          </span>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative lg:h-[740px]">
          <MediaReveal className="relative h-[340px] overflow-hidden sm:h-[440px] lg:absolute lg:inset-x-0 lg:top-0 lg:h-[620px]" delay={0.15}>
            <div className="absolute inset-0 lg:inset-auto lg:left-[-0.37%] lg:top-[-22.6%] lg:h-[188.7%] lg:w-[162.5%]">
              <Image src={`${IMG}/Home.jpg`} alt="Fuente de la Diana Cazadora, Ciudad de México" fill preload sizes="(min-width: 1024px) 162vw, 100vw" className="object-cover object-[68%_50%]" />
            </div>
          </MediaReveal>
          <div className={`${WRAP} relative -mt-20 sm:-mt-28 lg:mt-0 lg:pt-[300px]`}>
            <HeroIntro className="flex max-w-[740px] flex-col gap-[26px] bg-white px-6 pb-10 pt-10 sm:px-14 sm:pb-[52px] sm:pt-14" delay={0.2}>
              <HeroItem y={12}>
                <span aria-hidden="true" className="block h-[3px] w-14 bg-[#928F83]" />
              </HeroItem>
              <HeroItem as="h1" blur className={`${D} text-[clamp(2.125rem,3.06vw,2.75rem)] font-medium leading-[1.09] text-[#135671]`}>
                Experiencia y dedicación
                <br className="hidden sm:inline" /> alineadas con la excelencia.
              </HeroItem>
              <HeroItem as="p" className="text-[17px] leading-[1.61] sm:text-lg">
                Desde 2008, uno de los mejores despachos en derecho penal, amparo, consultoría en análisis de riesgos y derecho civil.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-1.5">
                <a href="#contacto" className="press bg-[#135671] px-7 py-4 text-base font-semibold text-white hover:bg-[#0F4659]">
                  Contáctanos
                </a>
                <a href="tel:+525553350555" className="nudge flex items-center gap-2.5 text-base font-semibold">
                  <Phone className="h-[18px] w-[18px] text-[#135671]" />
                  <span className="link-u">+52 (55) 5335-0555</span>
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* La firma */}
        <section id="djm-abogados" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid gap-10 pb-24 pt-16 lg:grid-cols-[300px_1fr] lg:gap-20 lg:pb-[120px]`}>
            <Reveal className="flex flex-col gap-2">
              <p className={`${D} text-[clamp(5rem,8.4vw,7.5rem)] leading-none text-[#928F83]`}>2008</p>
              <p className="text-[15px] leading-[23px] text-[#6E6B60]">Año de fundación de DJM Abogados.</p>
            </Reveal>
            <div className="flex flex-col gap-9 lg:pt-3">
              <Reveal as="h2" delay={0.06} className={`${D} text-[clamp(1.75rem,2.65vw,2.375rem)] leading-[1.26] text-[#135671]`}>
                DJM destaca por sus resultados, su excelencia y su trato personalizado con cada uno de sus clientes.
              </Reveal>
              <Stagger className="grid gap-6 text-base leading-[27px] md:grid-cols-2 md:gap-12" gap={0.08}>
                <StaggerItem as="p">
                  Su filosofía, basada en el estudio exhaustivo de cada uno de los asuntos que representa, le permite generar estrategias idóneas para alcanzar siempre sus objetivos.
                </StaggerItem>
                <StaggerItem as="p">
                  La firma acompaña a sus clientes durante toda la relación contractual con atención personalizada, bajo los más altos estándares de lealtad y confidencialidad.
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </section>

        {/* Derecho penal */}
        <section id="derecho-penal" className="scroll-mt-24 bg-[#135671] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[400px_1fr] lg:gap-20 lg:py-28`}>
            <Reveal className="flex flex-col gap-7">
              <h2 className={`${D} text-[clamp(2.5rem,3.5vw,3.125rem)] leading-[1.1]`}>Derecho penal</h2>
              <p className="text-[17px] leading-7 text-[#DCE7EC]">
                Un equipo de profesionales expertos en litigio y asesoría penal, en sus diversas instancias. El despacho asume defensas y acusaciones en los delitos previstos en la normatividad nacional e internacional.
              </p>
              <blockquote className={`${D} border-l-[3px] border-[#928F83] py-1 pl-6 text-[21px] italic leading-[29px]`}>
                La fortaleza del despacho radica en la amplia experiencia de su socio fundador, quien ha logrado integrar un equipo de abogados altamente calificados en litigio penal.
              </blockquote>
            </Reveal>
            <div className="grid gap-9 md:grid-cols-2 md:gap-12">
              {INSTANCES.map((col, ci) => (
                <Stagger key={ci} as="ul" className="flex flex-col gap-9" gap={0.07} delay={ci * 0.1}>
                  {col.map(([t, d]) => (
                    <StaggerItem key={t} as="li" className="flex flex-col gap-2.5">
                      <h3 className={`${D} text-[23px] font-medium leading-[29px]`}>{t}</h3>
                      <p className="text-[15px] leading-6 text-[#DCE7EC]">{d}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        {/* Consultoría y civil */}
        <section className="bg-[#F4F2ED]">
          <div className={`${WRAP} grid gap-16 py-24 lg:grid-cols-[680px_1fr] lg:gap-12 lg:py-28`}>
            <article id="consultoria" className="flex scroll-mt-28 flex-col gap-6">
              <MediaReveal onView className="img-zoom relative h-[240px] overflow-hidden sm:h-[340px]" delay={0}>
                <Image src={`${IMG}/consultoria.jpg`} alt="Asesores revisando documentos en una tableta" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
              </MediaReveal>
              <Reveal className="flex flex-col gap-6">
                <h2 className={`${D} text-[clamp(1.875rem,2.5vw,2.25rem)] leading-[1.14] text-[#135671]`}>Consultoría jurídica en análisis de riesgos</h2>
                <p className="text-base leading-[27px]">
                  DJM Abogados apoya a sus clientes no sólo durante los litigios, sino también a través de servicios de consultoría jurídica en análisis de riesgos.
                </p>
                <p className="text-base leading-[27px]">
                  El despacho realiza análisis exhaustivos que permiten a sus clientes generar estrategias para enfrentar cualquier posible situación adversa o bien restituir sus derechos.
                </p>
              </Reveal>
            </article>
            <article id="derecho-civil" className="flex scroll-mt-28 flex-col gap-6">
              <MediaReveal onView className="img-zoom relative h-[240px] overflow-hidden sm:h-[340px]" delay={0.1}>
                <Image src={`${IMG}/derecho-civil.jpg`} alt="Abogado con las manos entrelazadas sobre el escritorio" fill sizes="(min-width: 1024px) 472px, 100vw" className="object-cover" />
              </MediaReveal>
              <Reveal delay={0.08} className="flex flex-col gap-6">
                <h2 className={`${D} text-[clamp(1.875rem,2.5vw,2.25rem)] leading-[1.14] text-[#135671]`}>Derecho civil</h2>
                <p className="text-base leading-[27px]">Asesoría jurídica en materia de derecho civil, convenios y contratos, entre otros.</p>
                <p className="text-base leading-[27px]">
                  El despacho ha auxiliado exitosamente a diversos clientes en la disolución de sus matrimonios, minimizando altos costos económicos, repercusiones jurídicas y conflictos de carácter personal.
                </p>
              </Reveal>
            </article>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col items-center gap-12 py-24 lg:py-[104px]`}>
            <Reveal className="flex flex-col items-center gap-4 text-center">
              <h2 className={`${D} text-[clamp(2.5rem,3.2vw,2.875rem)] text-[#135671]`}>Clientes</h2>
              <p className="text-[17px] leading-[1.5]">Dentro de los principales clientes de DJM Abogados se encuentran las siguientes empresas.</p>
            </Reveal>
            <Stagger as="ul" className="flex max-w-[1197px] flex-wrap justify-center gap-y-2" gap={0.04}>
              {CLIENTS.map(([f, alt]) => (
                <StaggerItem key={f} as="li" y={10} className="flex h-[112px] w-1/3 items-center justify-center sm:w-1/4 md:w-[171px]">
                  <span className="relative block h-[66px] w-[96px] sm:w-[124px]">
                    <Image src={`${IMG}/clientes/${f}.png`} alt={alt} fill sizes="124px" className="object-contain" />
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Despachos asociados */}
        <section id="despachos-asociados" className="scroll-mt-24 bg-[#F4F2ED]">
          <div className={`${WRAP} grid gap-10 py-24 lg:grid-cols-[340px_1fr] lg:gap-20 lg:py-[104px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${D} text-[clamp(2.25rem,2.95vw,2.625rem)] leading-[1.14] text-[#135671]`}>Despachos asociados</h2>
              <p className="text-base leading-[26px]">DJM Abogados trabaja en conjunto con las siguientes firmas.</p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col" gap={0.08}>
              {FIRMS.map((f, i) => (
                <StaggerItem
                  key={f.n}
                  as="li"
                  className={`grid gap-3 py-7 md:grid-cols-[250px_1fr_160px] md:gap-8 ${i > 0 ? "border-t border-[#928F83]/40" : "pt-0 md:pt-7"}`}
                >
                  <h3 className={`${D} text-[22px] font-medium leading-[29px] text-[#2B2B2B]`}>{f.n}</h3>
                  <address className="text-[15px] not-italic leading-6">
                    {f.a.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  {f.t ? (
                    <a href={f.h} className="link-u w-fit self-start text-[15px] font-semibold text-[#2B2B2B]">
                      {f.t}
                    </a>
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-16 pb-24 pt-24 lg:gap-[72px] lg:pb-[120px] lg:pt-[104px]`}>
            <MediaReveal onView className="relative h-[200px] overflow-hidden sm:h-[300px]" delay={0}>
              <Image src={`${IMG}/contacto.jpg`} alt="Muro de listones de madera en las oficinas de DJM Abogados" fill sizes="(min-width: 1240px) 1200px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="grid gap-14 lg:grid-cols-[440px_1fr] lg:gap-20">
              <div className="flex flex-col gap-8">
                <Reveal as="h2" className={`${D} text-[clamp(2.5rem,3.2vw,2.875rem)] text-[#135671]`}>
                  Contacto
                </Reveal>
                <Stagger className="flex flex-col gap-8" gap={0.08}>
                  <StaggerItem className="flex gap-4">
                    <MapPin className="h-[22px] w-[22px] shrink-0 text-[#135671]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[13px] font-semibold text-[#6E6B60]">Oficina</p>
                      <address className="text-base not-italic leading-[26px] text-[#2B2B2B]">
                        Bosque de Alisos #13, Interior 1
                        <br />
                        Col. Bosques de las Lomas, Alcaldía Cuajimalpa
                        <br />
                        C.P. 05120, Ciudad de México
                      </address>
                    </div>
                  </StaggerItem>
                  <StaggerItem className="flex gap-4">
                    <Phone className="h-[22px] w-[22px] shrink-0 text-[#135671]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[13px] font-semibold text-[#6E6B60]">Teléfonos</p>
                      <p className="text-base leading-[26px] text-[#2B2B2B]">
                        <a href="tel:+525553350555" className="link-u">+52 (55) 5335-0555</a> y{" "}
                        <a href="tel:+525555751732" className="link-u">5575-1732</a>
                        <br />
                        Fax +52 (55) 5545-2833
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem className="flex gap-4">
                    <EnvelopeSimple className="h-[22px] w-[22px] shrink-0 text-[#135671]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[13px] font-semibold text-[#6E6B60]">Correo</p>
                      <a href="mailto:info@djmabogados.com.mx" className="link-u w-fit text-base leading-[26px] text-[#2B2B2B]">
                        info@djmabogados.com.mx
                      </a>
                    </div>
                  </StaggerItem>
                </Stagger>
              </div>
              <Reveal delay={0.1}>
                <DemoForm className="flex flex-col gap-[18px] bg-[#F4F2ED] p-6 text-[#2B2B2B] sm:p-11" noteClassName="text-sm text-[#424242]">
                  <Field label="Nombre completo" name="nombre" autoComplete="name" />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Mensaje</span>
                    <textarea
                      name="mensaje"
                      rows={6}
                      className="h-[150px] resize-none border border-[#CFCBC0] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#135671] focus:shadow-[0_0_0_3px_rgba(19,86,113,0.14)]"
                    />
                  </label>
                  <label className="flex items-center gap-3 text-sm text-[#424242]">
                    <input type="checkbox" name="aviso" required className="h-[18px] w-[18px] shrink-0 accent-[#135671]" />
                    Acepto el aviso de privacidad
                  </label>
                  <button type="submit" className="press w-fit bg-[#135671] px-10 py-4 text-base font-semibold text-white hover:bg-[#0F4659]">
                    Enviar
                  </button>
                </DemoForm>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#5F5C52] text-white">
        <div className={`${WRAP} flex flex-col gap-11 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <a href="#top" aria-label="DJM Abogados, inicio" className="block w-fit">
              <Image src={`${IMG}/logo-djm-blanco.png`} alt="" width={120} height={63} className="h-auto w-[120px]" />
            </a>
            <nav aria-label="Pie de página" className="grid grid-cols-2 gap-x-14 gap-y-3 text-[15px] sm:flex sm:gap-14">
              <ul className="flex flex-col gap-3">
                {NAV.slice(0, 4).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {NAV.slice(4).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contacto" className="link-u">
                    Contacto
                  </a>
                </li>
                <li>Aviso de Privacidad</li>
              </ul>
              <ul className="col-span-2 flex flex-col gap-3 pt-4 sm:pt-0">
                <li>
                  <a href="tel:+525553350555" className="link-u">+52 (55) 5335-0555</a>
                </li>
                <li>
                  <a href="tel:+525555751732" className="link-u">+52 (55) 5575-1732</a>
                </li>
                <li>
                  <a href="mailto:info@djmabogados.com.mx" className="link-u">info@djmabogados.com.mx</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/20 pt-6 text-[13px] text-white/85 sm:flex-row sm:justify-between">
            <p>DJM Abogados. Todos los derechos reservados.</p>
            <Lang />
          </div>
        </div>
      </footer>
    </div>
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
        className="h-12 w-full border border-[#CFCBC0] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#135671] focus:shadow-[0_0_0_3px_rgba(19,86,113,0.14)]"
      />
    </label>
  );
}
