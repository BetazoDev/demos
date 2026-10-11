import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { Bank, Briefcase, Buildings, Check, EnvelopeSimple, Handshake, MapPin, Phone, Scales } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const sans = Archivo({ subsets: ["latin"], variable: "--s12-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--s12-serif" });

export const metadata: Metadata = {
  title: "Barrón Abogados, Lawyer Trust",
  description: "Abogado de confianza. Excelencia, liderazgo y sobre todo confianza han caracterizado nuestro trabajo como consultoría de soluciones jurídicas.",
};

const IMG = "/sitios/barronabogados";
const SERIF = "font-[family-name:var(--s12-serif)]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Acerca de", href: "#acerca-de" },
  { label: "Política", href: "#politica" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Acerca de", href: "#acerca-de" },
  { label: "Misión", href: "#mision" },
  { label: "Visión", href: "#vision" },
  { label: "Política", href: "#politica" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const CLIENTS = [
  ["HSBC México", "Asesoría desde inicios de los noventa"],
  ["Bulova de México", "Apoderado legal en asuntos mercantiles"],
  ["Grupo Modelo", "Asuntos particulares de sus ejecutivos desde 2006"],
  ["CAPUFE", "Sociedades cooperativas del Sindicato Nacional de Trabajadores"],
  ["Seguro Social", "Asesor legal de la Sección XXXIII"],
];

const VALUES = ["Ética", "Honestidad", "Respeto", "Talento", "Compromiso"];

const PENAL = [
  "Procedimientos de extradición",
  "Colaboración con SEPROBAN en delitos contra instituciones bancarias",
  "Defensa de empleados y funcionarios de nuestros clientes",
  "Auditoría legal preventiva y control de confianza",
];

const AREAS = [
  { t: "Derecho Laboral", Icon: Briefcase, d: "Contratos individuales y colectivos, reglamento interior de trabajo, documentación ante IMSS, SAR e INFONAVIT, y políticas para el manejo de demandas y rescisiones laborales." },
  { t: "Derecho Financiero y Bancario", Icon: Bank, d: "Asesoría regulatoria a entidades financieras, estructuración de préstamos y créditos, inscripción en el Registro Nacional de Valores y asesoría a fondos de capital privado." },
  { t: "Civil, Mercantil y Arbitraje", Icon: Handshake, d: "Prevención de riesgos y litigio: juicios ordinarios y ejecutivos mercantiles, asuntos concursales, hipotecarios, de arrendamiento, familiares, ante Profeco y de amparo." },
  { t: "Derecho Administrativo", Icon: Buildings, d: "Amparo administrativo, litigio fiscal, licitaciones, inconformidades, concesiones, comercio exterior, patentes y marcas, competencia económica y desarrollo urbano." },
];

const OTHERS = ["Cobranza crediticia", "Investigaciones especiales", "Custodias", "Trámites administrativos"];

const TEAM = ["José Alejandro Barrón Rosales", "Alex Saúl Castillo Arroyo", "Pablo Moreno Salazar"];

function Logo() {
  return (
    <a href="#top" aria-label="Barrón Abogados, inicio" className="block">
      <Image src={`${IMG}/logo-wordmark-blanco.png`} alt="" width={300} height={41} preload className="h-auto w-[210px] sm:w-[300px]" />
    </a>
  );
}

export default function BarronAbogadosPage() {
  return (
    <div
      id="top"
      className={`${sans.variable} ${serif.variable} bg-white font-[family-name:var(--s12-sans)] leading-[normal] text-[#2C2C2C] selection:bg-[#AE0404] selection:text-white`}
    >
      {/* Barra superior */}
      <div className="bg-[#2C2C2C] text-[13px] font-medium text-[#D9D4CE]">
        <div className={`${WRAP} flex flex-wrap items-center justify-between gap-x-7 gap-y-1 py-2.5`}>
          <p className="hidden md:block">Doctor Rafael Lucio 51, Despacho 305, Col. Doctores</p>
          <div className="flex flex-wrap gap-x-7 gap-y-1">
            <a href="tel:+525557616077" className="link-u">Tel. 55 5761 6077</a>
            <a href="mailto:informes@barronabogados.com.mx" className="link-u">informes@barronabogados.com.mx</a>
          </div>
        </div>
      </div>

      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-white/15 bg-[#AE0404]"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(44,44,44,0.7)]"
        innerClassName={`${WRAP} flex h-[72px] items-center justify-between gap-8 lg:h-[88px]`}
        linkClassName="text-[15px] font-semibold text-white"
        panelClassName="bg-[#AE0404] text-white font-[family-name:var(--s12-sans)]"
        panelLinkClassName="font-extrabold tracking-[-0.5px]"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press bg-white px-6 py-[13px] text-[15px] font-bold text-[#AE0404] hover:bg-[#FBE9E7]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#AE0404]">
          <div className={`${WRAP} grid items-center gap-14 pb-20 pt-16 lg:grid-cols-[1fr_548px] lg:gap-[72px] lg:pb-28 lg:pt-24`}>
            <HeroIntro className="flex flex-col gap-7">
              <HeroItem as="h1" blur className="text-[clamp(3rem,6.7vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.026em] text-white">
                Abogado de
                <br />
                confianza
              </HeroItem>
              <HeroItem as="p" className={`${SERIF} max-w-[540px] text-lg leading-[1.52] text-[#FBE9E7] md:text-[21px]`}>
                Excelencia, liderazgo y sobre todo confianza han caracterizado nuestro trabajo como consultoría de soluciones jurídicas.
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-3.5 pt-2.5">
                <a href="#contacto" className="press bg-white px-8 py-[18px] text-base font-bold text-[#AE0404] hover:bg-[#FBE9E7]">
                  Contáctanos
                </a>
                <a href="#servicios" className="press border border-white/60 px-[31px] py-[17px] text-base font-bold text-white hover:border-white hover:bg-white/10">
                  Ver servicios
                </a>
              </HeroItem>
            </HeroIntro>
            <div className="bg-white/[0.08] p-2.5 sm:p-3.5">
              <MediaReveal className="relative aspect-[520/346] w-full overflow-hidden" delay={0.25}>
                <Image
                  src={`${IMG}/barronLawyer.jpg`}
                  alt="Papelería de Barrón Lawyer Trust, Abogado de confianza"
                  fill
                  preload
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </MediaReveal>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section aria-label="Clientes" className="bg-[#2C2C2C]">
          <div className={`${WRAP} flex flex-col gap-7 pb-[60px] pt-14`}>
            <Reveal as="p" className={`${SERIF} text-[17px] italic text-[#D9D4CE]`}>
              Por mencionar algunos de nuestros clientes:
            </Reveal>
            <Stagger as="ul" className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5" gap={0.06}>
              {CLIENTS.map(([n, d]) => (
                <StaggerItem key={n} as="li" className="flex flex-col gap-2 border-t-2 border-[#EE2929] pt-[18px]">
                  <p className="text-[22px] font-bold text-white">{n}</p>
                  <p className={`${SERIF} text-[15px] leading-[22px] text-[#C9C2BB]`}>{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Acerca de */}
        <section id="acerca-de" className="scroll-mt-24 bg-[#F3F0EB]">
          <div className={`${WRAP} grid items-center gap-12 py-24 lg:grid-cols-[460px_1fr] lg:gap-[88px] lg:pb-32 lg:pt-[136px]`}>
            <MediaReveal onView className="relative aspect-[460/480] w-full max-w-[460px] overflow-hidden" delay={0}>
              <Image src={`${IMG}/justicia.jpg`} alt="Estatua de la justicia con los ojos vendados y la balanza" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className="text-[clamp(2.25rem,3.4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.031em]">
                Lo más importante para
                <br className="hidden sm:inline" /> nosotros es su confianza
              </Reveal>
              <Reveal delay={0.08} className={`${SERIF} flex flex-col gap-6`}>
                <p className="text-lg leading-[1.58] text-[#3A3431] md:text-[19px]">
                  Somos un despacho que tiene todo el soporte jurídico y la experiencia para enfrentar sus necesidades. Nos destacamos por nuestra excelencia, liderazgo, constancia y capacidad profesional: elementos que han caracterizado nuestro trabajo y que dan soporte a nuestra filosofía.
                </p>
                <p className="text-[17px] leading-[28px] text-[#5A524D]">
                  Cuidar y fortalecer el nombre y el prestigio de nuestro despacho es una responsabilidad compartida, que implica la búsqueda constante del desarrollo personal.
                </p>
              </Reveal>
              <div className="flex flex-col gap-3.5 pt-5">
                <Reveal as="p" className={`${SERIF} text-base italic text-[#5A524D]`}>
                  Nuestros valores sirven como guía en la construcción de la confianza con nuestros clientes.
                </Reveal>
                <Stagger as="ul" className="flex flex-wrap gap-3" gap={0.05} delay={0.1}>
                  {VALUES.map((v) => (
                    <StaggerItem key={v} as="li" y={10} className="border border-[#AE0404]/[0.18] bg-white px-[18px] py-2.5 text-base font-semibold text-[#AE0404]">
                      {v}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Misión, visión y política */}
        <section id="mision" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_440px] lg:gap-[72px] lg:py-32`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className="text-[clamp(2.25rem,3.1vw,2.75rem)] font-extrabold tracking-[-0.023em]">
                Misión
              </Reveal>
              <Reveal delay={0.08} className={`${SERIF} flex flex-col gap-6`}>
                <p className="text-[clamp(1.5rem,2.1vw,1.875rem)] leading-[1.37]">
                  Proveer soluciones jurídicas que satisfagan sus necesidades de asesoría legal, actuando siempre bajo la responsabilidad social.
                </p>
                <p className="max-w-[560px] text-[17px] leading-[27px] text-[#5A524D]">
                  En BLT nos esforzamos para que cada caso se convierta en una historia de éxito para los clientes y para nosotros.
                </p>
              </Reveal>
            </div>
            <Stagger className="flex flex-col gap-5" gap={0.08}>
              <StaggerItem as="article" className="bg-[#2C2C2C] px-8 py-9 sm:px-10">
                <h3 id="vision" className="scroll-mt-28 text-[26px] font-extrabold text-white">Visión</h3>
                <p className={`${SERIF} mt-3.5 text-base leading-[26px] text-[#D9D4CE]`}>
                  Ser institución líder, de reconocido prestigio, en el campo del derecho nacional con una visión global de negocios, integrada por personas realizadas y clientes plenamente satisfechos.
                </p>
              </StaggerItem>
              <StaggerItem as="article" className="bg-[#AE0404] px-8 py-9 sm:px-10">
                <h3 id="politica" className="scroll-mt-28 text-[26px] font-extrabold text-white">Política</h3>
                <p className={`${SERIF} mt-3.5 text-base leading-[26px] text-[#FBE9E7]`}>
                  Garantizar a nuestros clientes un ambiente de seguridad, confianza, certeza y honestidad, para que encuentren la solución jurídica que requieren en el menor tiempo y al mejor costo.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F3F0EB]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:py-32`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className="text-[clamp(2.25rem,3.8vw,3.375rem)] font-extrabold leading-[1.1] tracking-[-0.028em]">Soluciones jurídicas</h2>
              <p className={`${SERIF} text-lg leading-[1.53] text-[#5A524D] md:text-[19px]`}>
                Servicios en materia penal, laboral, financiera, civil, mercantil y administrativa.
              </p>
            </Reveal>

            <div className="grid items-start gap-6 lg:grid-cols-[420px_1fr]">
              <Reveal as="article" className="flex flex-col gap-5 bg-[#2C2C2C] px-8 py-10 sm:px-10 sm:py-11">
                <Scales className="h-9 w-9 text-[#EE2929]" />
                <h3 className="text-[32px] font-extrabold leading-tight text-white">Derecho Penal</h3>
                <p className={`${SERIF} text-base leading-[26px] text-[#D9D4CE]`}>
                  En averiguación previa y proceso penal: presentación de denuncias, coadyuvancia con el Ministerio Público y promoción de los recursos de ley.
                </p>
                <ul className={`${SERIF} flex flex-col gap-3 pt-2`}>
                  {PENAL.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[15px] leading-[22px] text-white">
                      <Check className="mt-[3px] h-4 w-4 shrink-0 text-[#EE2929]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Stagger className="grid gap-6 sm:grid-cols-2" gap={0.07}>
                {AREAS.map(({ t, Icon, d }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 bg-white p-8 sm:p-9">
                    <Icon className="h-[30px] w-[30px] text-[#AE0404]" />
                    <h3 className="text-[22px] font-extrabold leading-[1.1]">{t}</h3>
                    <p className={`${SERIF} text-base leading-[26px] text-[#5A524D]`}>{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal className="flex flex-col gap-5 bg-[#AE0404] px-8 py-9 text-white sm:px-10 lg:flex-row lg:items-center lg:gap-12">
              <h3 className="w-[200px] shrink-0 text-[22px] font-extrabold">Otros servicios</h3>
              <ul className="flex flex-1 flex-col gap-3 text-base font-semibold sm:flex-row sm:flex-wrap sm:gap-x-10 lg:justify-between">
                {OTHERS.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Colaboradores */}
        <section id="colaboradores" aria-labelledby="colaboradores-title" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[1fr_520px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" id="colaboradores-title" className="text-[clamp(2.25rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                Personal que colabora
              </Reveal>
              <Reveal delay={0.08} className={`${SERIF} flex flex-col gap-6`}>
                <p className="text-xl leading-[1.5] text-[#3A3431] md:text-[22px]">
                  En BLT concebimos a la planeación jurídica como un elemento indispensable para el buen funcionamiento de las operaciones de nuestros clientes.
                </p>
                <p className="text-[17px] italic text-[#AE0404]">Muchos años avalan nuestra experiencia profesional.</p>
              </Reveal>
            </div>
            <Stagger as="ul" className="flex flex-col" gap={0.08}>
              {TEAM.map((n) => (
                <StaggerItem key={n} as="li" className="flex flex-col gap-1 border-l-[3px] border-[#AE0404] py-6 pl-6">
                  <span className={`${SERIF} text-[15px] text-[#5A524D]`}>Lic.</span>
                  <span className="text-[22px] font-bold sm:text-[26px]">{n}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#2C2C2C] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className="text-[clamp(2.5rem,3.8vw,3.375rem)] font-extrabold leading-[1.1] tracking-[-0.028em]">
                Contáctanos
              </Reveal>
              <Reveal delay={0.06} as="p" className={`${SERIF} text-lg leading-[1.53] text-[#D9D4CE] md:text-[19px]`}>
                Si necesitas más información sobre alguno de nuestros servicios, comunícate con nosotros o llena el siguiente formulario.
              </Reveal>
              <Stagger className="flex flex-col gap-6 pt-3" gap={0.08} delay={0.1}>
                <StaggerItem className="flex gap-4">
                  <MapPin className="h-6 w-6 shrink-0 text-[#EE2929]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-[#B5ADA6]">Oficina</p>
                    <p className={`${SERIF} text-lg leading-[27px]`}>
                      Doctor Rafael Lucio 51, Despacho 305,
                      <br />
                      Col. Doctores, C.P. 06720, Ciudad de México
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <Phone className="h-6 w-6 shrink-0 text-[#EE2929]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-[#B5ADA6]">Teléfonos</p>
                    <p className={`${SERIF} text-lg leading-[27px]`}>
                      Oficina <a href="tel:+525557616077" className="link-u">55 5761 6077</a>
                      <span aria-hidden="true" className="px-2">·</span>
                      Móvil <a href="tel:+525540963395" className="link-u">55 4096 3395</a>
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <EnvelopeSimple className="h-6 w-6 shrink-0 text-[#EE2929]" />
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="text-sm font-medium text-[#B5ADA6]">Correo</p>
                    <a href="mailto:informes@barronabogados.com.mx" className={`${SERIF} link-u w-fit break-all text-lg leading-[27px]`}>
                      informes@barronabogados.com.mx
                    </a>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>

            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#2C2C2C] sm:p-11" noteClassName={`${SERIF} text-sm text-[#5A524D]`}>
                <Field label="Nombre *" name="nombre" autoComplete="name" required />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Email *" name="email" type="email" autoComplete="email" required />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    className="h-[132px] resize-none border border-[#C5C5C5] bg-[#F3F0EB] px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#AE0404] focus:shadow-[0_0_0_3px_rgba(174,4,4,0.14)]"
                  />
                </label>
                <button type="submit" className="press w-full bg-[#AE0404] py-[18px] text-base font-bold text-white hover:bg-[#8F0303]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#AE0404] text-white">
        <div className={`${WRAP} flex flex-col gap-9 pb-28 pt-14 lg:pb-9`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] font-medium">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/20 pt-[22px] text-sm font-medium text-[#FBE9E7] sm:flex-row sm:justify-between">
            <p>© 2026 Barrón Abogados Lawyer Trust{" · "}<HemeronCredit /></p>
            <p>Abogado de confianza</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full border border-[#C5C5C5] bg-[#F3F0EB] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#AE0404] focus:shadow-[0_0_0_3px_rgba(174,4,4,0.14)]"
      />
    </label>
  );
}
