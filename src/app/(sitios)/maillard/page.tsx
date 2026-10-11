import type { Metadata } from "next";
import Image from "next/image";
import { Literata, Schibsted_Grotesk } from "next/font/google";
import { ArrowRight, Files, GlobeHemisphereWest, Handshake, LockKey, MagnifyingGlass, MapPin, Phone, PresentationChart } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Schibsted_Grotesk({ subsets: ["latin"], variable: "--s59-display" });
const body = Literata({ subsets: ["latin"], variable: "--s59-body" });

export const metadata: Metadata = {
  title: "Maillard Abogados Laborales",
  description: "Abogados laborales desde 1983. Somos la firma líder en estrategias empresariales de consultoría jurídica especializada en derecho laboral.",
};

const IMG = "/sitios/maillard";
const SITE = "https://maillard.com.mx/";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const D = "font-[family-name:var(--s59-display)]";
const H2 = `${D} text-[clamp(2.25rem,3.06vw,2.75rem)] font-bold leading-[1.05] tracking-[-1px]`;

const NAV = [
  { label: "Socios", href: "#socios" },
  { label: "Contratos", href: "#contratos" },
  { label: "Revista Evidencias", href: SITE },
  { label: "Organismos públicos", href: "#organismos-publicos" },
  { label: "Eventos", href: "#eventos" },
];

const CREDENCIALES = [
  { a: "+30 años", b: "De experiencia nos respaldan", count: true },
  { a: "Nacional e internacional", b: "Presencia en los sectores privado y público" },
  { a: "CDMX y Guadalajara", b: "Oficinas" },
  { a: "Tres idiomas", b: "Español, inglés y japonés para empresas extranjeras" },
];

const QUIENES = [
  "Somos la firma líder en estrategias empresariales de consultoría jurídica especializada en derecho laboral, fundada en 1983.",
  "Prestamos servicios a empresas nacionales e internacionales.",
  "Estamos posicionados como pieza clave dentro del sector empresarial.",
];

const SERVICIOS = [
  { t: "Consultoría", d: "Asesoría laboral." },
  { t: "Litigio", d: "Atención a demandas interpuestas por empleados ante las autoridades competentes del trabajo, en todas sus etapas." },
  { t: "Amparos", d: "Elaboración y atención de amparos directos e indirectos, así como de los recursos que la Ley de Amparo prevé." },
  { t: "Diagnóstico laboral", d: "Evaluación y análisis del cumplimiento de las obligaciones laborales en el centro de trabajo." },
  { t: "Administración de contratos colectivos", d: "Elaboración de CCT, revisiones salariales, negociaciones contractuales, emplazamientos a huelga, demandas de titularidad y terminación de CCT.", id: "contratos" },
  { t: "Reglamentos interiores de trabajo", d: "Análisis, elaboración, depósito y actualización de reglamentos interiores de trabajo y asesoría para su aplicación." },
  { t: "Convenios", d: "Negociación para la terminación de la relación laboral." },
  { t: "Asesoría a organismos públicos", d: "Asesoría y representación de organismos públicos.", id: "organismos-publicos" },
  { t: "Inspección del trabajo", d: "Prevención, asesoría y atención de la inspección del trabajo y del juicio contencioso administrativo que derive de ella." },
  { t: "Contratos individuales de trabajo", d: "Selección del tipo de contrato según la relación de trabajo, revisión, elaboración y apoyo en la suscripción." },
];

const FORTALEZAS = [
  { Icon: MagnifyingGlass, t: "Inspección del trabajo", d: "Un departamento altamente especializado brinda asesoría en la prevención y atención de las diversas etapas del procedimiento." },
  { Icon: Files, t: "Legal Tracking", d: "Expedientes digitalizados que se consultan de manera digital y actualizada, optimizando los tiempos de respuesta." },
  { Icon: Handshake, t: "Relaciones institucionales", d: "Relación institucional con las principales centrales obreras y participación activa con instituciones de gobierno e internacionales." },
  { Icon: PresentationChart, t: "Conferencias y actualizaciones", d: "Conferencias y seminarios para clientes, y cursos de capacitación a jurídico, recursos humanos y directores generales.", id: "eventos" },
  { Icon: GlobeHemisphereWest, t: "Socios multiculturales", d: "Socios con visión y cultura globales, formados en el extranjero y en contacto constante con profesionales internacionales." },
  { Icon: LockKey, t: "Tecnología de la información", d: "Infraestructura robusta que mantiene resguardada, segura y confidencial la información de nuestros clientes." },
];

const TRAYECTORIA = [
  "Miembro de la Barra Mexicana Colegio de Abogados desde 1993 y de la International Bar Association (IBA)",
  "Mentor Endeavor desde 2013",
  "Vicepresidente de las Comisiones de Trabajo y Previsión Social y de Seguridad Social de CONCAMIN",
  "Académico de número de la Academia Mexicana de Derecho Procesal del Trabajo desde 2005",
];

const EQUIPO = [
  { n: "Lic. Raúl Maillard Barquera", c: "Socio", d: "Consultoría, relaciones públicas, juicios individuales, negociaciones colectivas y amparos directos, indirectos y adhesivos." },
  { n: "Lic. Ary R. Argumedo Miranda", c: "Socio y director de litigio", d: "Dirige los litigios individuales que atiende el despacho y supervisa el área de amparos." },
  { n: "Lic. Denise Evelyn Palma García", c: "Socia", d: "Directora del Área de Inspección del Trabajo y Consultoría; Vicepresidenta de Normatividad Laboral de CONCAMIN." },
  { n: "Mtro. César Maillard Cárdenas", c: "Subdirector de la firma", d: "Licenciatura en Derecho por la Universidad Iberoamericana y maestría en Administración de Empresas en el IPADE." },
  { n: "Lic. Hiroshi Kawagoe", c: "Servicio a empresas extranjeras", d: "Fue socio de Arthur Andersen y Deloitte. Brinda servicios a empresas extranjeras en japonés e inglés." },
];

const SEDES = [
  { ciudad: "Ciudad de México", dir: ["Río Po #39, Col. Cuauhtémoc", "CDMX, C.P. 06500"], tel: "+52 (55) 5662 9882", href: "tel:+525556629882" },
  { ciudad: "Guadalajara", dir: ["Calle Aldous Huxley 5055, Interior 2", "Col. Jardines Universidad, C.P. 45110", "Zapopan, Jalisco"], tel: "33 3113 5821", href: "tel:+523331135821" },
];

const FOOTER_COLS = [
  [
    { label: "Socios", href: "#socios" },
    { label: "Contratos", href: "#contratos" },
    { label: "Revista Evidencias", href: SITE },
    { label: "Organismos públicos", href: "#organismos-publicos" },
  ],
  [
    { label: "Empresa Socialmente Responsable", href: SITE },
    { label: "Eventos", href: "#eventos" },
    { label: "Faq's", href: SITE },
    { label: "Contacto", href: "#contacto" },
  ],
];

function Logo({ white = false }: { white?: boolean }) {
  return (
    <a href="#top" className="block shrink-0" aria-label="Maillard Abogados Laborales, inicio">
      <Image
        src={`${IMG}/${white ? "logo-blanco" : "logo"}.svg`}
        alt=""
        width={64}
        height={80}
        preload={!white}
        className={white ? "h-20 w-auto" : "h-14 w-auto lg:h-20"}
      />
    </a>
  );
}

function Rule({ w = "w-[18px]", pt = "mt-[13px]" }: { w?: string; pt?: string }) {
  return <span aria-hidden="true" className={`${pt} h-[2px] ${w} shrink-0 bg-[#00A99D]`} />;
}

export default function MaillardPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s59-body)] text-[#24303B] selection:bg-[#176175] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#E3E8EA] bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(23,97,117,0.45)]"
        innerClassName={`${WRAP} flex h-20 items-center gap-8 lg:h-[123px] xl:gap-10 [&>button]:ml-auto [&>nav]:ml-auto [&_nav_ul]:gap-6 xl:[&_nav_ul]:gap-[30px]`}
        linkClassName={`${D} text-[15px] font-medium text-[#24303B]`}
        panelClassName={`bg-white text-[#176175] ${D}`}
        panelLinkClassName="text-[28px] font-bold tracking-[-0.5px]"
        burgerClassName="bg-[#176175]"
        actions={
          <span className={`${D} flex items-center gap-8 max-lg:flex-col max-lg:items-start max-lg:gap-6 xl:gap-10`}>
            <span className="flex gap-2.5 text-[13px] font-semibold text-[#5B6873] lg:max-xl:hidden">
              <span>ES</span>
              <span lang="en">EN</span>
              <span lang="ja">日本</span>
            </span>
            <a href="#contacto" className="press bg-[#176175] px-[22px] py-[13px] text-[15px] font-semibold text-white hover:bg-[#12505F]">
              Contáctanos
            </a>
          </span>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] xl:grid-cols-[minmax(0,1fr)_620px]">
          <HeroIntro className="flex flex-col justify-center gap-7 px-5 py-16 md:px-8 md:py-20 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-14">
            <HeroItem as="h1" blur className={`${D} text-[clamp(2.5rem,4.31vw,3.875rem)] font-bold leading-[1.03] tracking-[-0.029em] text-[#176175]`}>
              Abogados laborales <br className="max-sm:hidden" />
              desde 1983
            </HeroItem>
            <HeroItem as="p" className="max-w-[500px] text-[17px] leading-[1.6] md:text-[19px] md:leading-[30px]">
              Somos la firma líder en estrategias empresariales de consultoría jurídica especializada en derecho laboral.
            </HeroItem>
            <HeroItem className={`${D} flex flex-wrap items-center gap-x-7 gap-y-5 pt-2.5`}>
              <a href="#contacto" className="press nudge flex items-center gap-3 bg-[#176175] px-7 py-[18px] text-base font-semibold text-white hover:bg-[#12505F]">
                Contáctanos
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
              <a href="#servicios" className="border-b-2 border-[#00A99D] pb-1 text-base font-semibold text-[#176175] transition-colors duration-200 hover:border-[#176175]">
                Nuestros servicios
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[360px] overflow-hidden bg-[#9FB8BF] md:h-[480px] lg:h-auto" delay={0.25}>
            <Image
              src={`${IMG}/hero-video-frame-reforma.jpg`}
              alt="Ángel de la Independencia y Paseo de la Reforma, Ciudad de México"
              fill
              preload
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 43vw, 100vw"
              className="object-cover object-center"
            />
          </MediaReveal>
        </section>

        {/* Credenciales */}
        <section aria-label="Credenciales" className="bg-[#F2F2F2]">
          <Stagger gap={0.07} className={`${WRAP} grid gap-x-8 gap-y-7 py-11 sm:grid-cols-2 lg:grid-cols-4 lg:pb-12`}>
            {CREDENCIALES.map(({ a, b, count }) => (
              <StaggerItem key={a} className="flex flex-col gap-1.5">
                <p className={`${D} text-2xl font-bold leading-[1.2] tracking-[-0.4px] text-[#176175]`}>{count ? <CountUp value={a} /> : a}</p>
                <p className="text-[15px] leading-[22px] text-[#4A5560]">{b}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ¿Quiénes somos? */}
        <section id="quienes-somos" className="scroll-mt-24 bg-[#204146]">
          <div className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-[120px] xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-[100px]`}>
            <div className="flex flex-col gap-8">
              <Reveal as="h2" className={`${H2} text-white`}>
                ¿Quiénes somos?
              </Reveal>
              <Stagger as="ul" gap={0.08} className="flex flex-col gap-[22px]">
                {QUIENES.map((t) => (
                  <StaggerItem key={t} as="li" className="flex gap-[18px] text-[17px] leading-[1.6] text-[#E2ECEC] md:text-lg md:leading-[29px]">
                    <Rule />
                    {t}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.12} className="flex flex-col gap-7 bg-[#176175] px-7 py-9 md:px-11 md:py-10">
              <h2 className={`${D} text-[28px] font-bold leading-[1.2] tracking-[-0.5px] text-white`}>Visión de negocios</h2>
              <p className="text-[19px] leading-[1.55] text-white md:text-[22px] md:leading-[34px]">
                Conseguir siempre los mejores resultados, consolidándonos como la mejor firma laboral y, de este modo, poder lograr un cambio para nuestros colaboradores, nuestros clientes y para México.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Nuestros servicios */}
        <section id="servicios" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14 lg:py-[130px] xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-20`}>
            <div className="flex flex-col gap-8">
              <Reveal as="h2" className={`${H2} max-w-[340px] text-[#176175]`}>
                Nuestros servicios
              </Reveal>
              <MediaReveal onView delay={0} className="relative aspect-[340/420] w-full max-w-[340px] overflow-hidden bg-[#3A2A24] max-lg:max-h-[420px]">
                <Image src={`${IMG}/s9.jpg`} alt="Manos firmando un documento con pluma" fill sizes="340px" className="object-cover object-center" />
              </MediaReveal>
            </div>
            <Stagger gap={0.05} className="grid items-start gap-x-14 gap-y-11 pt-2 md:grid-cols-2">
              {SERVICIOS.map(({ t, d, id }) => (
                <StaggerItem key={t} as="article" className="border-l-2 border-[#00A99D] pl-5">
                  <h3 id={id} className={`${D} scroll-mt-32 text-[21px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#176175]`}>
                    {t}
                  </h3>
                  <p className="mt-2.5 text-base leading-[26px] text-[#3E4A55]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Fortalezas corporativas */}
        <section id="fortalezas" className="relative isolate scroll-mt-24 overflow-hidden bg-[#176175]">
          <Image src={`${IMG}/fortalezas.jpg`} alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#176175F0]" />
          <div className={`${WRAP} grid items-start gap-12 py-24 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14 lg:py-[130px] xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-[90px]`}>
            <Reveal className="flex flex-col gap-[26px]">
              <h2 className={`${H2} text-white`}>Fortalezas corporativas</h2>
              <p className="text-[17px] leading-[1.7] text-[#DCEBEC] md:text-lg md:leading-[30px]">
                Profesionistas altamente calificados, con un enfoque humanístico y corporativo que comparten los valores de la empresa, y un conocimiento práctico y teórico en actualización permanente.
              </p>
            </Reveal>
            <Stagger gap={0.06} className="grid gap-x-12 gap-y-11 md:grid-cols-2">
              {FORTALEZAS.map(({ Icon, t, d, id }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3">
                  <Icon className="h-7 w-7 text-[#5FD3C9]" />
                  <h3 id={id} className={`${D} scroll-mt-32 text-[21px] font-semibold leading-[1.25] tracking-[-0.3px] text-white`}>
                    {t}
                  </h3>
                  <p className="text-base leading-[26px] text-[#D3E4E5]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className="scroll-mt-24 bg-[#F2F2F2]">
          <div className={`${WRAP} py-24 lg:py-[130px]`}>
            <Reveal as="h2" className={`${H2} text-[#176175]`}>
              Socios
            </Reveal>
            <div className="mt-12 grid items-start gap-14 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[560px_minmax(0,1fr)] xl:gap-16">
              <Reveal as="article" className="bg-white px-6 py-9 md:p-11">
                <h3 className={`${D} text-[clamp(1.625rem,2.1vw,1.875rem)] font-bold leading-[1.2] tracking-[-0.6px] text-[#176175]`}>Lic. César Maillard Canudas</h3>
                <p className={`${D} mt-2 text-base font-medium text-[#0B6E67]`}>Socio fundador y Socio Director</p>
                <p className="mt-[22px] text-base leading-[26px] text-[#3E4A55]">
                  Licenciado en Derecho por la Universidad Iberoamericana, especializado en Derecho Laboral; estudió en Holy Names College (Oakland) y en el Kenshu Center de Tokio. Ejerce desde 1974 y en 1983 fue designado Socio Director. Participa en negociaciones colectivas de trabajo, litigios, relaciones públicas y asesoría en materia laboral.
                </p>
                <ul className="mt-[26px] flex flex-col gap-3">
                  {TRAYECTORIA.map((t) => (
                    <li key={t} className="flex gap-3.5 text-[15px] leading-[23px]">
                      <Rule w="w-3.5" pt="mt-[11px]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Stagger gap={0.07} className="flex flex-col gap-[34px] pt-2">
                {EQUIPO.map(({ n, c, d }) => (
                  <StaggerItem key={n} as="article" className="flex flex-col gap-1.5">
                    <div className={`${D} flex flex-wrap items-baseline gap-x-3.5 gap-y-1`}>
                      <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.3px] text-[#176175]">{n}</h3>
                      <p className="text-[15px] font-medium text-[#0B6E67]">{c}</p>
                    </div>
                    <p className="text-base leading-[26px] text-[#3E4A55]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#3C495A]">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-14 lg:py-[130px] xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-[90px]`}>
            <div className="flex flex-col">
              <Reveal as="h2" className={`${D} text-[clamp(2.5rem,3.33vw,3rem)] font-bold leading-[1.1] tracking-[-1px] text-white`}>
                Contáctanos
              </Reveal>
              <Stagger gap={0.08} className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
                {SEDES.map(({ ciudad, dir, tel, href }) => (
                  <StaggerItem key={ciudad} className="flex flex-col gap-4 border-t-2 border-[#00A99D] pt-6">
                    <h3 className={`${D} text-[22px] font-semibold leading-[1.2] text-white`}>{ciudad}</h3>
                    <div className="flex gap-3">
                      <MapPin className="mt-[3px] h-5 w-5 shrink-0 text-[#5FD3C9]" />
                      <address className="text-base not-italic leading-[26px] text-[#E1E7EC] xl:whitespace-nowrap">
                        {dir.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                    </div>
                    <a href={href} className="flex w-fit items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-[#5FD3C9]" />
                      <span className={`${D} link-u text-[17px] font-medium text-white`}>{tel}</span>
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
              <MediaReveal onView delay={0.1} className="relative mt-12 h-[200px] w-full overflow-hidden bg-[#2E6EA6] md:h-[230px]">
                <Image src={`${IMG}/socios.jpg`} alt="Edificios corporativos vistos desde abajo contra el cielo" fill sizes="(min-width: 1280px) 610px, (min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
              </MediaReveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white px-6 py-9 md:p-11" noteClassName="text-sm text-[#176175]">
                <h3 className={`${D} text-[26px] font-bold leading-[1.2] tracking-[-0.5px] text-[#176175]`}>Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" placeholder="Introducir nombre" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" placeholder="Introducir correo electrónico" />
                <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" placeholder="Introducir número telefónico" />
                <label className="flex flex-col gap-2">
                  <span className={`${D} text-sm font-semibold leading-[1.2]`}>Mensaje</span>
                  <textarea name="mensaje" rows={4} placeholder="Escriba su mensaje" className={`${FIELD} h-[110px] resize-y py-3`} />
                </label>
                <button type="submit" className={`${D} press w-full bg-[#176175] py-[17px] text-base font-semibold text-white hover:bg-[#12505F]`}>
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={`${D} bg-[#2B3542]`}>
        <div className={`${WRAP} flex flex-col gap-11 pb-28 pt-16 lg:pb-9`}>
          <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-[72px]">
            <Logo white />
            <nav aria-label="Pie de página" className="flex flex-wrap gap-x-14 gap-y-8">
              {FOOTER_COLS.map((col, i) => (
                <ul key={i} className="flex flex-col gap-3.5 leading-[1.2]">
                  {col.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-u text-[15px] text-[#C9D3DB]">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
              <ul aria-label="Idiomas" className="flex flex-col gap-3.5 text-[15px] leading-[1.2] text-[#C9D3DB]">
                <li>Español</li>
                <li lang="en">English</li>
                <li lang="ja">日本</li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/12 pt-6 text-sm leading-[1.2] text-[#A9B5C0] sm:flex-row sm:justify-between">
            <p>© Maillard Abogados Laborales. Todos los derechos reservados.</p>
            <p>Aviso de Privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "w-full bg-[#F4F6F7] px-3.5 text-[15px] text-[#24303B] shadow-[inset_0_0_0_1px_#C9D2D8] outline-none transition-[box-shadow] duration-200 placeholder:text-[#6A747D] focus:shadow-[inset_0_0_0_1px_#176175,0_0_0_3px_rgba(23,97,117,0.15)]";

function Field({ label, name, type = "text", autoComplete, placeholder }: { label: string; name: string; type?: string; autoComplete?: string; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className={`${D} text-sm font-semibold leading-[1.2]`}>{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} placeholder={placeholder} className={`${FIELD} h-12`} />
    </label>
  );
}
