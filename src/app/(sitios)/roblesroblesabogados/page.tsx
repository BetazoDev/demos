import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Bellefair, Lato } from "next/font/google";
import { ArrowDown, EnvelopeSimple, FacebookLogo, Phone, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Bellefair({ subsets: ["latin"], weight: "400", variable: "--s67-display" });
const body = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--s67-body" });

export const metadata: Metadata = {
  title: "Robles & Robles Abogados",
  description:
    "Especialistas en Juicio de Amparo. Despacho dirigido por el Lic. Héctor Jesús Robles Díaz Mercado, con experiencia en materia administrativa, fiscal, civil e inmobiliaria.",
};

const IMG = "/sitios/roblesroblesabogados";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s67-display)] font-normal";
const H2 = `${SERIF} text-[clamp(2.75rem,4.2vw,3.75rem)] leading-[1.05]`;
const PHONE = "tel:+525529518851";
const EMAIL = "mailto:roblesroblesabogados@gmail.com";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Servicios", href: "#servicios" },
  { label: "Juicio de Amparo", href: "#amparo" },
  { label: "Contacto", href: "#contacto" },
];

const SOCIAL = [
  { Icon: YoutubeLogo, label: "youtube.com/@roblesroblesabogados", href: "https://www.youtube.com/@roblesroblesabogados", name: "YouTube" },
  { Icon: FacebookLogo, label: "facebook.com/abogadosrobles", href: "https://www.facebook.com/abogadosrobles", name: "Facebook" },
  { Icon: TiktokLogo, label: "tiktok.com/@roblesroblesabogados", href: "https://www.tiktok.com/@roblesroblesabogados", name: "TikTok" },
];

const INSTANCIAS = [
  ["Tribunal Federal de Justicia Administrativa y sus Salas Regionales", "Juicio de nulidad"],
  ["Tribunales de Justicia Administrativa de la Ciudad de México, Estado de México y la República", "Juicio de nulidad"],
  ["Tribunal Superior de Justicia, ante sus Salas Civiles", "Recurso de apelación contra sentencias definitivas"],
  ["Juzgados de Distrito y Tribunales Colegiados de Circuito", "Juicio de Amparo directo e indirecto"],
];

const MATERIAS = [
  ["Materia administrativa y fiscal", "Contra actos de autoridades administrativas en los tres niveles de gobierno."],
  ["Materia civil e inmobiliaria", "Contra sentencias definitivas y resoluciones que afectan su patrimonio."],
  ["Amparo directo e indirecto", "Ante Juzgados de Distrito y Tribunales Colegiados de Circuito."],
];

const SERVICIOS = [
  {
    t: "Multas, clausuras y órdenes de demolición",
    img: "administrativo.jpg",
    alt: "Firma de un acuerdo después de un apretón de manos",
    d: "Defensa ante multas, clausuras, órdenes de demolición y visitas de verificación del INVEA, alcaldías, PAOT, SEDUVI, COFEPRIS, PROFECO, SAT y otras autoridades. También brindamos acompañamiento preventivo.",
  },
  {
    t: "Licitaciones y obra pública",
    img: "licitaciones.jpg",
    alt: "Revisión de documentos de una licitación",
    d: "Defensa en procesos de licitación ante convocantes como IMSS, PEMEX y CFE: inconformidades en cada etapa, procedimientos de sanción a licitantes, proveedores y contratistas, inhabilitación y multas.",
  },
  {
    t: "Derecho civil e inmobiliario",
    img: "civil-inmobiliario.jpg",
    alt: "Llaves de un inmueble sobre un contrato firmado",
    d: "Impugnación de sentencias en juicios reivindicatorios, de prescripción (usucapión), de controversias de arrendamiento y de otorgamiento de escrituras, y recuperación de inmuebles invadidos.",
  },
  {
    t: "Regularización de inmuebles",
    img: "regularizacion.jpg",
    alt: "Reloj sobre documentos de una propiedad",
    d: "Escrituración y registro ante el Registro Público de la Propiedad, herencias y copropiedad, doble titulación, defensa contra invasiones y desalojos.",
  },
  {
    t: "Derecho migratorio",
    img: "migratorio.jpg",
    alt: "Ángel de la Independencia en la Ciudad de México",
    d: "Solicitudes de refugio ante la COMAR, Tarjeta de Visitante por Razones Humanitarias e impugnación de resoluciones de la COMAR y omisiones del INM.",
  },
];

function Logo({ preload = false }: { preload?: boolean }) {
  return (
    <a href="#top" aria-label="Robles & Robles Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo.png`}
        alt="Robles & Robles Abogados. Especialistas en Juicio de Amparo"
        width={300}
        height={34}
        preload={preload}
        sizes="300px"
        className="h-auto w-[228px] sm:w-[300px]"
      />
    </a>
  );
}

export default function RoblesRoblesPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s67-body)] text-[#121212] selection:bg-[#323232] selection:text-white`}
    >
      <SiteNav
        logo={<Logo preload />}
        links={NAV}
        className="border-b border-[#E6E6E6] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(18,18,18,0.45)]"
        innerClassName="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[91px] xl:px-0"
        linkClassName="text-[15px] text-[#4A4A4A] hover:text-[#121212] [&[href='#top']]:font-bold [&[href='#top']]:text-[#121212]"
        panelClassName="bg-white text-[#121212] font-[family-name:var(--s67-body)]"
        panelLinkClassName={`${SERIF} text-[2rem]`}
        burgerClassName="bg-[#121212]"
        actions={
          <>
            <a href={PHONE} className="link-u text-[15px] font-bold text-[#121212]">
              55 2951 8851
            </a>
            <a href="#contacto" className="press bg-[#323232] px-6 py-[13px] text-sm font-bold leading-[1.2] tracking-[0.3px] text-white hover:bg-[#121212]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section aria-labelledby="hero-title" className="bg-[#323232]">
          <HeroIntro className={`${WRAP} flex flex-col items-center gap-7 pb-14 pt-20 text-center md:pt-28 lg:pb-[72px] lg:pt-32`}>
            <HeroItem
              as="h1"
              blur
              className={`${SERIF} text-[clamp(3rem,7.2vw,6.5rem)] leading-none tracking-[-1px] text-white`}
            >
              <span id="hero-title">
                Especialistas en
                <br />
                Juicio de Amparo
              </span>
            </HeroItem>
            <HeroItem as="p" className="max-w-[640px] text-[17px] leading-[1.55] text-[#D6D6D6] md:text-[19px] md:leading-[29px]">
              Despacho dirigido por el Lic. Héctor Jesús Robles Díaz Mercado, con experiencia en materia administrativa, fiscal, civil e inmobiliaria.
            </HeroItem>
            <HeroItem className="flex flex-wrap justify-center gap-3.5 pt-3">
              <a href="#contacto" className="press bg-white px-[30px] py-4 text-[15px] font-bold leading-[1.2] text-[#121212] hover:bg-[#E6E6E6]">
                Contáctanos
              </a>
              <a
                href="#servicios"
                className="press group flex items-center gap-2.5 border border-[#8A8A8A] px-[30px] py-4 text-[15px] font-bold leading-[1.2] text-white hover:border-white hover:bg-white/5"
              >
                Ver servicios
                <ArrowDown aria-hidden="true" className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-y-0.5" />
              </a>
            </HeroItem>
          </HeroIntro>
        </section>
        <div className="bg-[linear-gradient(180deg,#323232_0%,#323232_50%,#FFFFFF_50%,#FFFFFF_100%)]">
          <div className={WRAP}>
            <MediaReveal className="relative h-[280px] overflow-hidden sm:h-[400px] lg:h-[540px]" delay={0.3}>
              <Image
                src={`${IMG}/hero-justicia.jpg`}
                alt="Estatua de la Justicia con la balanza y la espada"
                fill
                preload
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-[50%_23%]"
              />
            </MediaReveal>
          </div>
        </div>

        {/* Firma */}
        <section aria-label="El despacho" className={`${WRAP} flex flex-col gap-12 py-20 md:py-24 lg:gap-16 lg:pb-32 lg:pt-[120px]`}>
          <Reveal as="p" className={`${SERIF} text-[clamp(1.875rem,3.2vw,2.875rem)] leading-[1.17]`}>
            Somos uno de los pocos despachos de abogados en el país especializados en la impugnación de actos, omisiones y resoluciones del orden administrativo, fiscal, civil e inmobiliario.
          </Reveal>
          <Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-[340px_1fr_1fr] lg:gap-16" gap={0.07}>
            <StaggerItem className="flex flex-col gap-2.5 border-t border-[#121212] pt-6 md:col-span-2 lg:col-span-1">
              <p className={`${SERIF} text-[30px] leading-[35px]`}>
                Lic. Héctor Jesús
                <br />
                Robles Díaz Mercado
              </p>
              <p className="text-[15px] text-[#5A5A5A]">Dirige Robles &amp; Robles Abogados</p>
            </StaggerItem>
            <StaggerItem className="border-t border-[#DDDDDD] pt-6 text-base leading-[27px] text-[#3C3C3C]">
              <p>
                Contamos con amplia experiencia en las materias administrativa, fiscal, civil, inmobiliaria y en el Juicio de Amparo como última instancia en la protección de los derechos de nuestros clientes, lo que nos convierte en uno de los pocos despachos que se especializa en esta rama del derecho.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-5 border-t border-[#DDDDDD] pt-6 text-base leading-[27px] text-[#3C3C3C]">
              <p>
                Buscamos resolver inconvenientes jurídicos administrativos, fiscales, civiles e inmobiliarios que afecten el quehacer del individuo o la empresa, encontrando soluciones adecuadas para proteger sus derechos.
              </p>
              <p>Garantizamos asesoría oportuna e idónea, orientada a la protección efectiva de sus derechos e intereses.</p>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Instancias */}
        <section aria-labelledby="instancias" className="bg-[#F4F4F4]">
          <div className={`${WRAP} flex flex-col gap-10 pb-20 pt-16 lg:pb-20 lg:pt-[72px]`}>
            <Reveal as="h2" className={`${SERIF} text-[clamp(1.875rem,2.6vw,2.125rem)] leading-tight`}>
              <span id="instancias">Instancias en las que litigamos</span>
            </Reveal>
            <Stagger as="ul" className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
              {INSTANCIAS.map(([t, m], i) => (
                <StaggerItem
                  key={t}
                  as="li"
                  className={`flex flex-col gap-3.5 border-[#CFCFCF] py-1 sm:self-start sm:pr-7 ${i > 0 ? "border-t pt-8 sm:border-t-0 sm:pt-1" : ""} ${i % 2 === 1 ? "sm:border-l sm:pl-7" : ""} ${i === 2 ? "lg:border-l lg:pl-7" : ""}`}
                >
                  <h3 className="text-[17px] font-bold leading-6">{t}</h3>
                  <p className="text-[15px] leading-[23px] text-[#5A5A5A]">{m}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Juicio de Amparo */}
        <section id="amparo" aria-labelledby="amparo-title" className="scroll-mt-20 bg-[#323232] text-white lg:flex">
          <MediaReveal onView delay={0} className="relative h-[340px] overflow-hidden sm:h-[460px] lg:h-auto lg:w-[43%] lg:max-w-[620px] lg:shrink-0">
            <Image
              src={`${IMG}/amparo.jpg`}
              alt="Figura de la Justicia junto a volúmenes de leyes"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover object-[8%_50%]"
            />
          </MediaReveal>
          <div className="flex flex-1 flex-col items-start gap-7 px-5 py-20 md:px-8 lg:py-24 lg:pl-[clamp(3rem,6.7vw,6rem)] lg:pr-[max(2rem,calc((100vw-1200px)/2))]">
            <Reveal as="h2" className={H2}>
              <span id="amparo-title">Juicio de Amparo</span>
            </Reveal>
            <Reveal delay={0.06} as="p" className="text-[17px] leading-[29px] text-[#D6D6D6]">
              Nos hemos especializado en el Juicio de Amparo en diferentes ramas del derecho para salvaguardar los derechos humanos y las garantías fundamentales de nuestros clientes ante las instancias federales, con un servicio profesional, ético y especializado.
            </Reveal>
            <Stagger as="dl" className="flex w-full flex-col py-2" gap={0.07}>
              {MATERIAS.map(([a, b]) => (
                <StaggerItem key={a} className="flex flex-col gap-2 py-[18px] sm:flex-row sm:gap-6">
                  <dt className={`${SERIF} text-2xl leading-tight sm:w-[300px] sm:shrink-0 lg:w-[220px] xl:w-[300px]`}>{a}</dt>
                  <dd className="text-[15px] leading-[23px] text-[#BDBDBD]">{b}</dd>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <a href="#contacto" className="press inline-block bg-white px-[30px] py-4 text-[15px] font-bold leading-[1.2] text-[#121212] hover:bg-[#E6E6E6]">
                Contáctanos
              </a>
            </Reveal>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" aria-labelledby="servicios-title" className={`${WRAP} grid scroll-mt-20 gap-14 py-24 lg:grid-cols-[360px_1fr] lg:gap-20 lg:pb-[120px] lg:pt-32`}>
          <Reveal className="flex flex-col items-start gap-6 lg:sticky lg:top-32 lg:self-start">
            <h2 id="servicios-title" className={H2}>
              Servicios
            </h2>
            <p className="text-base leading-[27px] text-[#3C3C3C]">
              Impugnamos actos, omisiones y resoluciones de autoridades de la administración pública federal, estatal y municipal mediante recursos administrativos, juicios de nulidad, recursos de apelación y el Juicio de Amparo.
            </p>
            <a href="#contacto" className="link-u mt-2 text-[15px] font-bold">
              Contáctanos
            </a>
          </Reveal>
          <Stagger as="ul" className="flex flex-col gap-12" gap={0.07}>
            {SERVICIOS.map(({ t, img, alt, d }) => (
              <StaggerItem key={t} as="li" className="flex flex-col gap-6 sm:flex-row sm:gap-9">
                <div className="img-zoom relative aspect-[220/150] w-full shrink-0 sm:w-[220px]">
                  <Image src={`${IMG}/${img}`} alt={alt} fill sizes="(min-width: 640px) 220px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2.5 sm:pt-1.5">
                  <h3 className={`${SERIF} text-[clamp(1.625rem,2.2vw,1.875rem)] leading-[35px]`}>{t}</h3>
                  <p className="text-[15px] leading-[25px] text-[#4A4A4A]">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Misión, Visión y frase */}
        <section aria-label="Misión y visión" className="bg-[#F4F4F4]">
          <div className={`${WRAP} pt-20 lg:pt-28`}>
            <Stagger className="grid gap-12 md:grid-cols-2 lg:gap-24" gap={0.08}>
              {[
                [
                  "Misión",
                  "Funcionar como un bufete jurídico con los más altos estándares de ética, calidad, profesionalismo, especialización y sólidos valores humanos en la relación con nuestros clientes; así hemos logrado recuperar la confianza entre abogado y cliente que en México se ha perdido.",
                ],
                [
                  "Visión",
                  "Ser reconocidos como el bufete jurídico líder a nivel nacional en materia administrativa, fiscal, civil, inmobiliaria y constitucional, por nuestro desarrollo profesional y la actualización constante en estas materias.",
                ],
              ].map(([h, p]) => (
                <StaggerItem key={h} className="flex flex-col gap-[18px]">
                  <h2 className={`${SERIF} text-[40px] leading-tight`}>{h}</h2>
                  <p className="text-[17px] leading-[29px] text-[#3C3C3C]">{p}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="figure" className="flex flex-col items-center gap-7 py-24 text-center md:px-10 lg:px-20 lg:pb-32 lg:pt-[120px]">
              <span aria-hidden="true" className="block h-px w-16 bg-[#121212]" />
              <blockquote className={`${SERIF} max-w-[960px] text-[clamp(1.875rem,3.1vw,2.75rem)] leading-[1.25]`}>
                <p>“Estamos a su disposición para ofrecerle la mayor de nuestras riquezas, nuestro profesionalismo, dedicación y calidad humana.”</p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-20 bg-[#323232] text-white">
          <div className={`${WRAP} grid gap-14 py-20 md:py-24 lg:grid-cols-[1fr_520px] lg:gap-24 lg:py-[120px]`}>
            <div className="flex flex-col gap-10">
              <Reveal as="h2" className={H2}>
                <span id="contacto-title">Comunícate con nosotros</span>
              </Reveal>
              <Stagger className="flex flex-col gap-7" gap={0.07}>
                {[
                  { Icon: Phone, l: "Celular", v: "55 2951 8851", href: PHONE },
                  { Icon: EnvelopeSimple, l: "Correo electrónico", v: "roblesroblesabogados@gmail.com", href: EMAIL },
                ].map(({ Icon, l, v, href }) => (
                  <StaggerItem key={l} className="flex gap-[18px]">
                    <Icon aria-hidden="true" className="h-[22px] w-[22px] shrink-0" />
                    <div className="flex min-w-0 flex-col gap-1.5">
                      <p className="text-sm leading-[1.2] text-[#BDBDBD]">{l}</p>
                      <a href={href} className="link-u w-fit text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.2] [overflow-wrap:anywhere]">
                        {v}
                      </a>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1} as="ul" className="flex flex-col gap-3.5 border-t border-[#555555] pt-7 lg:max-w-[584px]">
                {SOCIAL.map(({ Icon, label, href }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="link-u inline-flex items-center gap-3.5 text-[15px] leading-[1.2] text-[#D6D6D6] hover:text-white">
                      <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-white" />
                      {label}
                    </a>
                  </li>
                ))}
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#121212] sm:p-11" noteClassName="text-sm text-[#5A5A5A]">
                <h3 className={`${SERIF} text-[32px] leading-tight`}>Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold leading-[1.2] text-[#323232]">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={4}
                    className="h-[120px] resize-y border border-[#BDBDBD] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#323232] focus:shadow-[0_0_0_3px_rgba(50,50,50,0.12)]"
                  />
                </label>
                <button type="submit" className="press w-full bg-[#323232] py-4 text-[15px] font-bold leading-[1.2] text-white hover:bg-[#121212]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-[#3C3C3C]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u hover:text-[#121212]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-5 border-t border-[#E0E0E0] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#5A5A5A]">© 2026 Robles &amp; Robles Abogados. Especialistas en Juicio de Amparo.{" "}<HemeronCredit /></p>
            <ul className="flex items-center gap-[18px]">
              {SOCIAL.map(({ Icon, href, name }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="press block text-[#323232] hover:text-[#8A8A8A]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold leading-[1.2] text-[#323232]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-12 border border-[#BDBDBD] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#323232] focus:shadow-[0_0_0_3px_rgba(50,50,50,0.12)]"
      />
    </label>
  );
}
