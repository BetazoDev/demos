import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Literata, Manrope } from "next/font/google";
import { ArrowRight, BadgeCheck, Check, Mail, MapPin, Phone } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Literata({ subsets: ["latin"], variable: "--s46-display" });
const body = Manrope({ subsets: ["latin"], variable: "--s46-body" });

export const metadata: Metadata = {
  title: "Mejía Ramos Abogados, S.C.",
  description: "Servicios jurídicos de la más alta calidad: consultoría, mediación y litigio, con la definición transparente de honorarios razonables.",
};

const IMG = "/sitios/mra";

const NAV = [
  { label: "Perfil", href: "#perfil" },
  { label: "Áreas de práctica", href: "#areas-de-practica" },
  { label: "Corresponsalías", href: "#corresponsalias" },
  { label: "Abogados", href: "#abogados" },
  { label: "Contacto", href: "#contacto" },
];

type Area = { t: string; d: string; items?: string[] };

const AREAS_A: Area[] = [
  {
    t: "Derecho Mercantil",
    d: "Colaboramos con el análisis general del asunto y el diseño de las estrategias de negocio, para evitar que el cliente incurra en riesgos que se traduzcan en una pérdida del valor del negocio.",
    items: [
      "Constitución y operación de sociedades mercantiles",
      "Logística, transportación y Derecho marítimo",
      "Expedición, reposición y cancelación de títulos de crédito",
      "Asambleas de sociedades y derecho de minorías",
      "Recuperación de créditos y cartera vencida",
    ],
  },
  {
    t: "Derecho Familiar",
    d: "Atendemos cada caso estableciendo prioridades concretas para obtener, en el menor tiempo posible, los mayores resultados.",
    items: ["Divorcios y adopciones", "Pensiones alimenticias", "Reconocimiento y desconocimiento de paternidad", "Juicios sucesorios con efectos en México y en el extranjero"],
  },
  {
    t: "Derecho Migratorio",
    d: "Internación, regularización y nacionalización de extranjeros en la República Mexicana.",
    items: ["Formas migratorias temporales y definitivas", "Modificación de la característica migratoria vigente"],
  },
];

const AREAS_B: Area[] = [
  {
    t: "Derecho Civil",
    d: "Amplia experiencia en la problemática inmobiliaria en la Ciudad de México: investigación de antecedentes registrales y titularidad inmobiliaria, y formalización de contratos de transmisión de propiedad. Procesos judiciales sobre garantías civiles, propiedad, arrendamiento y prescripción positiva.",
  },
  {
    t: "Licitaciones Públicas y Obras y Adquisiciones Públicas",
    d: "Preparación de licitaciones, análisis de bases y juntas de aclaraciones; administración jurídica de contratos de obra pública, bitácora y estimaciones; y controversias por finiquitos, ajuste de costos, gastos extraordinarios y precios unitarios.",
  },
  {
    t: "Derechos Humanos y Juicio de Amparo",
    d: "Tramitación del juicio constitucional para la protección de los derechos humanos, en procedimientos judiciales y en la preservación de garantías como el derecho a la intimidad, al nombre y a un medio ambiente adecuado.",
  },
  {
    t: "Compliance de Instituciones de Educación Superior",
    d: "Evaluación preventiva del cumplimiento de los requisitos de la Secretaría de Educación Pública y asistencia en las visitas de inspección a universidades privadas con reconocimiento de validez oficial de estudios.",
    items: ["Asistencia y asesoría en visitas de inspección", "Procedimientos administrativos de sanción", "Impugnación de multas y sanciones"],
  },
];

const DESTACADOS = [
  { t: "Carretera Cuernavaca-Acapulco", d: "Procedimientos judiciales en materia administrativa relacionados con la ejecución de la carretera." },
  { t: "Segundos pisos de la Ciudad de México", d: "Juicios derivados de su construcción, promovidos en contra del Fideicomiso para el Mejoramiento de las Vías de Comunicación del Distrito Federal." },
];

const FOTOS = [
  { src: "banner-zocalo.jpg", alt: "Zócalo de la Ciudad de México" },
  { src: "banner-angel.jpg", alt: "Ángel de la Independencia de noche" },
  { src: "banner-alameda.jpg", alt: "Alameda Central y Torre Latinoamericana" },
];

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s46-display)]";
const H2 = `${DISPLAY} font-medium tracking-[-0.8px] text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.15]`;

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Mejía Ramos Abogados, inicio">
      <Image src={`${IMG}/logo-mra.png`} alt="Mejía Ramos Abogados" width={193} height={80} preload className="h-16 w-auto lg:h-20" />
    </a>
  );
}

export default function MejiaRamosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s46-body)] text-[#2B2B2B] selection:bg-[#FE8500] selection:text-[#1F1B18]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(31,27,24,0.5)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-24`}
        linkClassName="text-[15px] font-semibold text-[#2B2B2B]"
        panelClassName="bg-white text-[#1F1B18] font-[family-name:var(--s46-body)]"
        panelLinkClassName="font-[family-name:var(--s46-display)] text-3xl font-medium"
        burgerClassName="bg-[#1F1B18]"
        actions={
          <a href="#contacto" className="press rounded-full bg-[#2B2B2B] px-[26px] py-[13px] text-[15px] font-bold text-white hover:bg-[#1F1B18]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#FE8500] text-[#1F1B18]">
          <div className={`${WRAP} flex flex-col pt-24 lg:pt-[130px]`}>
            <HeroIntro className="flex max-w-[1040px] flex-col gap-8">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.875rem,6.1vw,5.5rem)] font-medium leading-[1.03] tracking-[-0.03em]`}>
                Servicios jurídicos de la más alta calidad
              </HeroItem>
              <HeroItem as="p" className="max-w-[560px] text-lg leading-[1.55] text-[#2A211A] md:text-xl">
                Consultoría, mediación y litigio, con la definición transparente de honorarios razonables.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-2.5">
                <a href="#contacto" className="press rounded-full bg-[#1F1B18] px-[30px] py-[17px] text-base font-bold text-white hover:bg-[#3A2F27]">
                  Contáctanos
                </a>
                <a href="#areas-de-practica" className="nudge flex items-center gap-2.5 text-base font-bold">
                  Áreas de práctica
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </a>
              </HeroItem>
            </HeroIntro>
            <Stagger as="dl" className="mt-20 flex flex-col gap-5 border-t border-[#1F1B1840] pb-10 pt-[30px] md:flex-row md:flex-wrap md:gap-x-[72px] lg:mt-[110px]" delay={0.6}>
              <StaggerItem className="flex flex-col gap-1.5">
                <dt className="text-[13px] font-bold text-[#3A2A1C]">Oficinas</dt>
                <dd className="text-base font-medium">Cozumel No. 32, Col. Roma, Ciudad de México</dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-1.5">
                <dt className="text-[13px] font-bold text-[#3A2A1C]">Teléfonos</dt>
                <dd className="text-base font-medium">
                  <a href="tel:+525552562938" className="link-u">55 5256 2938</a> / <a href="tel:+525552562939" className="link-u">55 5256 2939</a>
                </dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-1.5">
                <dt className="text-[13px] font-bold text-[#3A2A1C]">Correo</dt>
                <dd className="text-base font-medium">
                  <a href="mailto:mejiaramos@mra.org.mx" className="link-u">mejiaramos@mra.org.mx</a>
                </dd>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Perfil */}
        <section id="perfil" className={`${WRAP} flex scroll-mt-24 flex-col gap-11 py-24 lg:pb-[130px] lg:pt-[140px]`}>
          <Reveal as="h2" className={H2}>
            Perfil de la firma
          </Reveal>
          <Reveal as="p" delay={0.08} className={`${DISPLAY} max-w-[1080px] text-[clamp(1.375rem,2.2vw,1.9375rem)] leading-[1.42]`}>
            Mejía Ramos Abogados, S.C. presta servicios jurídicos en las ramas de consultoría, mediación y litigio, combinando la experiencia y el conocimiento profundo y actualizado del ordenamiento jurídico con la definición transparente de honorarios razonables que preserven el valor del derecho o negocio que se confíe a la firma.
          </Reveal>
          <Stagger className="grid gap-10 pt-6 md:grid-cols-2 md:gap-20" gap={0.1}>
            <StaggerItem className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <p className={`${DISPLAY} text-[clamp(4rem,5.9vw,5.25rem)] leading-none tracking-[-2px] text-[#A65300]`}>2011</p>
              <p className="flex-1 text-base leading-[26px] text-[#4A4A4A]">
                Despacho constituido el 20 de octubre de 2011, ante la fe del Notario Público número 193 del Distrito Federal.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-2.5 border-l-[3px] border-[#FE8500] pl-8">
              <h3 className={`${DISPLAY} text-2xl font-medium`}>Socio fundador</h3>
              <p className="text-base leading-[26px] text-[#4A4A4A]">
                Experiencia adquirida como encargado de las áreas jurídicas en los principales consorcios inmobiliarios mexicanos.
              </p>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Áreas de práctica */}
        <section id="areas-de-practica" className="scroll-mt-24 bg-[#EDEDED]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-[140px] lg:pt-[130px]`}>
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className={H2}>Áreas de práctica</h2>
              <p className="max-w-[640px] text-lg leading-7 text-[#4A4A4A]">En cada área de práctica, la firma ha desempeñado actividades de consultoría y litigio.</p>
            </Reveal>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              {[AREAS_A, AREAS_B].map((col) => (
                <Stagger key={col[0].t} className="flex flex-col gap-6" gap={0.08}>
                  {col.map((a) => (
                    <AreaCard key={a.t} {...a} />
                  ))}
                </Stagger>
              ))}
            </div>
          </div>
        </section>

        {/* Asuntos destacados */}
        <section aria-labelledby="asuntos-destacados" className="bg-[#2B2B2B] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-[140px] lg:pt-[130px]`}>
            <Reveal className="flex max-w-[760px] flex-col gap-[18px]">
              <h2 id="asuntos-destacados" className={H2}>
                Asuntos destacados
              </h2>
              <p className="text-[17px] leading-[27px] text-[#D0D0D0]">
                Resultados exitosos en procedimientos judiciales instruidos en contra de organismos descentralizados y entidades federales, así como de entidades locales, municipales y el Gobierno del Distrito Federal.
              </p>
            </Reveal>
            <Stagger className="grid gap-12 md:grid-cols-2" gap={0.1}>
              {DESTACADOS.map(({ t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t-[3px] border-[#FE8500] pt-7">
                  <h3 className={`${DISPLAY} text-[clamp(1.625rem,2.3vw,2rem)] font-medium leading-[1.16]`}>{t}</h3>
                  <p className="text-[17px] leading-[27px] text-[#D0D0D0]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Corresponsalías */}
        <section id="corresponsalias" className={`${WRAP} grid scroll-mt-24 items-center gap-12 py-24 lg:grid-cols-[1fr_549px] lg:gap-20 lg:py-[140px]`}>
          <Reveal className="flex flex-col gap-6">
            <h2 className={H2}>Corresponsalías</h2>
            <p className="text-[17px] leading-[29px] text-[#3A3A3A]">
              Nuestros abogados y colaboradores cuentan con un profundo conocimiento de la mecánica y funcionamiento de las autoridades administrativas, judiciales y de procuración de justicia en la Ciudad de México y su zona metropolitana, y con la infraestructura para informar diariamente a sus clientes de cualquier avance en los procedimientos.
            </p>
            <p className="text-[17px] leading-[29px] text-[#3A3A3A]">
              Ponemos esta experiencia a disposición de abogados que residan en otras entidades. Hemos colaborado con firmas de otras localidades y países, desde la asociación hasta la simple distribución de gastos.
            </p>
          </Reveal>
          <div className="flex flex-col gap-4">
            {FOTOS.map(({ src, alt }, i) => (
              <MediaReveal key={src} onView delay={i * 0.1} className="img-zoom relative aspect-[549/177] w-full overflow-hidden">
                <Image src={`${IMG}/${src}`} alt={alt} fill sizes="(min-width: 1024px) 549px, 100vw" className="object-cover" />
              </MediaReveal>
            ))}
          </div>
        </section>

        {/* Abogados */}
        <section id="abogados" className="scroll-mt-24 bg-[#EDEDED]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-[140px] lg:pt-[130px]`}>
            <Reveal as="h2" className={H2}>
              Abogados de la firma
            </Reveal>
            <Reveal delay={0.08} className="grid gap-10 bg-white px-6 py-10 md:px-16 md:py-14 lg:grid-cols-[380px_1fr] lg:gap-20">
              <div className="flex flex-col gap-3.5">
                <p className="text-[15px] font-bold text-[#A65300]">Socio de la firma</p>
                <h3 className={`${DISPLAY} text-[clamp(2rem,2.7vw,2.375rem)] font-medium leading-[1.16] tracking-[-0.5px]`}>Lic. Álvaro Ricardo Mejía Ramos</h3>
                <p className="text-base leading-[26px] text-[#4A4A4A]">Consultoría y litigio en Derecho Civil, Mercantil, Administrativo y Amparo.</p>
              </div>
              <div className="flex flex-col gap-7 text-base leading-[27px] text-[#3A3A3A]">
                <p>
                  Licenciado en Derecho, aspirante al grado de Maestro en Derecho por la Universidad Nacional Autónoma de México. Cursó el Diplomado &quot;International Human Rights&quot; en la Universidad Sapienza di Roma, en Roma, Italia.
                </p>
                <p>
                  Ha trabajado en diversas firmas de abogados, entre ellas Goodrich y Riquelme, S.C. y Lechuga Abogados, S.C. Fue subdirector jurídico de Amparo en el Instituto para la Protección al Ahorro Bancario y Director del área de litigio en diversos grupos empresariales del giro inmobiliario.
                </p>
                <p className="flex items-center gap-3 text-[15px] font-bold leading-normal text-[#2B2B2B]">
                  <BadgeCheck size={20} color="#A65300" aria-hidden="true" />
                  Cédula Profesional 3891579
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#FE8500] text-[#1F1B18]">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_600px] lg:gap-20 lg:py-[130px]`}>
            <div className="flex flex-col gap-9">
              <Reveal className="flex flex-col gap-3.5">
                <h2 className={`${DISPLAY} text-[clamp(2.5rem,3.9vw,3.5rem)] font-medium leading-[1.1] tracking-[-1px]`}>Contacto</h2>
                <p className="text-lg font-semibold text-[#2A211A]">Mejía Ramos Abogados, S.C.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-9" gap={0.08}>
                <ContactRow Icon={MapPin} k="Oficinas">
                  <p>
                    Cozumel No. 32, esquina con Sinaloa
                    <br />
                    Col. Roma, Cuauhtémoc, C.P. 06700
                    <br />
                    Ciudad de México
                  </p>
                </ContactRow>
                <ContactRow Icon={Phone} k="Teléfonos">
                  <p>
                    <a href="tel:+525552562938" className="link-u">55 5256 2938</a> / <a href="tel:+525552562939" className="link-u">55 5256 2939</a>
                  </p>
                </ContactRow>
                <ContactRow Icon={Mail} k="Correo electrónico">
                  <a href="mailto:mejiaramos@mra.org.mx" className="link-u w-fit">mejiaramos@mra.org.mx</a>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col items-start gap-5 bg-white p-6 text-[#2B2B2B] md:p-12" noteClassName="text-sm text-[#4A4A4A]">
                <h3 className={`${DISPLAY} text-[30px] font-medium`}>Escríbenos</h3>
                <div className="grid w-full gap-5 sm:grid-cols-2">
                  <Field label="Nombre *" name="nombre" autoComplete="name" />
                  <Field label="Correo electrónico *" name="correo" type="email" autoComplete="email" />
                </div>
                <Field label="Asunto *" name="asunto" />
                <label className="flex w-full flex-col gap-2">
                  <span className="text-sm font-bold">Mensaje *</span>
                  <textarea name="mensaje" required rows={5} className={`${INPUT} h-[130px] resize-none py-3`} />
                </label>
                <button type="submit" className="press rounded-full bg-[#1F1B18] px-8 py-4 text-base font-bold text-white hover:bg-[#3A2F27]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#2B2B2B]">
        <div className={`${WRAP} flex flex-col gap-9 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Image src={`${IMG}/logo-mra.png`} alt="Mejía Ramos Abogados" width={193} height={80} />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#E6E6E6]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#BDBDBD] lg:flex-row lg:justify-between">
            <p>Cozumel No. 32, Col. Roma, Cuauhtémoc, C.P. 06700, Ciudad de México · 55 5256 2938</p>
            <p>© 2026 Mejía Ramos Abogados, S.C.{" "}<HemeronCredit /></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AreaCard({ t, d, items }: Area) {
  return (
    <StaggerItem as="article" className="flex flex-col gap-4 bg-white px-6 pb-9 pt-8 md:px-10 md:pb-10 md:pt-9">
      <h3 className={`${DISPLAY} text-[26px] font-medium leading-[31px]`}>{t}</h3>
      <p className="text-[15px] leading-[25px] text-[#4A4A4A]">{d}</p>
      {items && (
        <ul className="flex flex-col gap-2.5 pt-1.5">
          {items.map((it) => (
            <li key={it} className="flex gap-3 text-[15px] leading-[21px]">
              <Check size={16} color="#A65300" aria-hidden="true" className="mt-0.5 shrink-0" />
              {it}
            </li>
          ))}
        </ul>
      )}
    </StaggerItem>
  );
}

const INPUT =
  "w-full border border-[#CFCFCF] bg-[#F7F7F7] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1F1B18] focus:shadow-[0_0_0_3px_rgba(254,133,0,0.25)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-sm font-bold">{label}</span>
      <input name={name} type={type} required autoComplete={autoComplete} className={`${INPUT} h-12`} />
    </label>
  );
}

function ContactRow({ Icon, k, children }: { Icon: typeof Phone; k: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-[18px]">
      <Icon size={22} color="#1F1B18" aria-hidden="true" className="mt-px shrink-0" />
      <div className="flex flex-col gap-1.5 text-[17px] leading-[26px]">
        <p className="text-sm font-bold leading-normal text-[#2A211A]">{k}</p>
        {children}
      </div>
    </StaggerItem>
  );
}
