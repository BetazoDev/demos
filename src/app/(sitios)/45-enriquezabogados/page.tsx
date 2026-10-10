import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Lato, Petrona } from "next/font/google";
import { ArrowRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Petrona({ subsets: ["latin"], variable: "--s45-display" });
const body = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--s45-body" });

export const metadata: Metadata = {
  title: "EA Enriva | Enríquez Abogados",
  description: "Prestación integral de servicios jurídicos. Rápida y eficiente capacidad de respuesta. Brindamos seguridad y confianza a nuestros clientes.",
};

const IMG = "/sitios/45-enriquezabogados";
const SITE = "https://www.enriquezabogados.com.mx";

const NAV = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Asuntos y clientes", href: "#asuntos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Galería", href: "#galeria" },
];

const FOOTER_NAV = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Asuntos y clientes", href: "#asuntos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
  { label: "Galería", href: "#galeria" },
  { label: "Aviso de privacidad", href: `${SITE}/A_P_ENRIQUEZ_10.10.19.pdf` },
];

const AREAS = [
  { t: "Derecho Constitucional", d: "Estudio, preparación y patrocinio de juicios de amparo directo e indirecto en todas sus instancias, ante Jueces de Distrito, Tribunales de Circuito y la Suprema Corte de Justicia de la Nación." },
  { t: "Arbitraje", d: "Procedimientos arbitrales de naturaleza pública y privada, bajo Reglas del CAM y CCI, nacionales e internacionales, incluida la asesoría en arbitrajes marítimos seguidos en Londres." },
  { t: "Derecho Administrativo", d: "Defensa ante autoridades federales y locales en licitaciones, contratación pública, concesiones, sanciones, contratos administrativos y conflictos agrarios, y juicios contencioso-administrativos." },
  { t: "Derecho Civil y Mercantil", d: "Juicios por cobranzas, incumplimientos contractuales, ejecución de garantías, daños y perjuicios, conflictos societarios e inmobiliarios, y ejecución de laudos y sentencias extranjeras." },
  { t: "Derecho Familiar", d: "Procedimientos relativos a la capacidad de las personas, divorcios, sucesiones y controversias del orden familiar: paternidad, alimentos, guarda y custodia de menores." },
  { t: "Derecho Corporativo, Financiero, Contractual y Transaccional", d: "Constitución, transformación, fusión, escisión y liquidación de sociedades, libros corporativos, coinversiones, y negociación y elaboración de contratos." },
  { t: "Asesoría Regulatoria y Consultiva", d: "Opiniones y estrategias jurídicas integrales sobre el marco regulatorio y de cumplimiento de cada proyecto, y auditoría en materia regulatoria y de riesgo jurídico." },
  { t: "Contratación con Gobierno", d: "Representación en adjudicación directa, invitación restringida y licitaciones con gobiernos municipales, estatales y federal, para servicios u obra pública." },
  { t: "Derecho Laboral", d: "Consultoría y litigio laboral individual y colectivo: contratación, terminación de relaciones laborales, conciliaciones, contratos colectivos y negociaciones salariales." },
];

const ASUNTOS = [
  { t: "Puente Albatros, Lázaro Cárdenas", d: "Consultoría a una importante constructora mexicana de infraestructura para la correcta finalización material y administrativa de la edificación del Puente Albatros, Michoacán." },
  { t: "Arbitraje comercial ante la CCI", d: "Defensa ante la CCI y los Tribunales Federales de un consorcio eléctrico hispano-mexicano, en un arbitraje por más de US$5 millones." },
  { t: "Puerto de Frontera, Tabasco", d: "Defensa de una importante constructora mexicana en los trabajos de rehabilitación del puerto, por un importe aproximado de US$20 millones." },
  { t: "Plaza Juárez", d: "Asesoría jurídico-administrativa al fideicomiso para la construcción del edificio sede de los Juzgados y Salas Familiares del Tribunal Superior de Justicia del Distrito Federal." },
  { t: "Securities and Exchange Commission", d: "Emplazamiento vía carta rogatoria, en Estados Unidos, de demandados mexicanos dentro de un procedimiento multimillonario seguido por la SEC." },
];

const CLIENTES = [
  ["Altamira Unión de Crédito", "Banco de México-FIRA", "Coats México", "Ducroire / Delcredere", "Fideicomiso para el Desarrollo de Energía Eléctrica (FIDE)"],
  ["Gas Express Nieto", "Grupo Altex", "Grupo Ambiental Toluca", "Grupo Convermex", "Grupo Financiero Banorte"],
  ["Grupo Gondi", "Grupo Modelo", "Grupo Shodo", "Impulsora de Desarrollo Integral (IDINSA)", "Papelera Industrial Potosina"],
  ["PMI Comercio Internacional", "TOPACD (Toshiba México)", "USA Technologies", "Vulcan Materials Company"],
];

const SOCIOS = [
  {
    cargo: "Socio",
    n: "Ernesto Enríquez Castillo",
    email: "eenriquez@eaenriva.com",
    bio: "Abogado por la Escuela Libre de Derecho, con Mención Honorífica. Maestro en Administración y Política Pública por la London School of Economics and Political Science y en Filosofía Jurídica y Política Contemporánea por la Universidad Carlos III de Madrid. Académico Supernumerario de la Academia Mexicana de Jurisprudencia y Legislación. Amplia experiencia en materia constitucional, procesal, administrativa, arbitral y corporativa-financiera.",
  },
  {
    cargo: "Socia",
    n: "Adriana Hernández del Valle",
    email: "ahernandez@eaenriva.com",
    bio: "Abogada por la Universidad Nacional Autónoma de México, con maestrías en Seguridad Nacional (CESNAV), Filosofía Jurídica y Política Contemporánea (Universidad Carlos III de Madrid) y Derecho Administrativo (Universidad Panamericana). Más de quince años en el sector público. Coordinadora Académica del Diplomado de Derecho Marítimo en el ITAM. Amplia experiencia en derecho administrativo, marítimo y seguridad nacional.",
  },
];

const ASOCIADOS = [
  { n: "Ángel Estrada Curiel", bio: "Abogado por la Universidad Anáhuac del Norte. Especialista en Derecho Corporativo, con experiencia en litigio y en asesoría a asociaciones sin fines de lucro." },
  { n: "Dulce Gargallo Cruz", bio: "Abogada por la UNAM, con mención honorífica, y Especialista en Derecho Fiscal. Ha trabajado en el Tribunal Federal de Justicia Fiscal y Administrativa." },
  { n: "Manuel Calva Merino", bio: "Abogado por la Universidad Anáhuac. Experiencia en conflictos individuales y colectivos de trabajo. Mediador Privado número 3, certificado por el TSJDF." },
  { n: "María Angélica Ramírez Aguayo", bio: "Abogada por la Universidad Panamericana, con más de veinte años de experiencia en materia consultiva, corporativa, transaccional y contractual." },
];

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = "font-[family-name:var(--s45-display)] font-medium tracking-[-0.5px] text-[clamp(2.25rem,3.5vw,3.125rem)] leading-[1.08]";
const DISPLAY = "font-[family-name:var(--s45-display)]";

function Logo() {
  return (
    <a href="#top" className="block" aria-label="EA Enriva, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Enríquez EA Enriva" width={202} height={56} preload className="h-12 w-auto lg:h-14" />
    </a>
  );
}

export default function EnriquezAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s45-body)] text-[#202020] selection:bg-[#2C4938] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#E4E7E3] bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(29,51,38,0.45)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-[95px]`}
        linkClassName="text-[15px] text-[#202020]"
        panelClassName="bg-white text-[#1D3326] font-[family-name:var(--s45-body)]"
        panelLinkClassName="font-[family-name:var(--s45-display)] text-3xl font-medium"
        burgerClassName="bg-[#1D3326]"
        actions={
          <>
            <a href={`${SITE}/en_index.html`} lang="en" className="link-u text-sm font-bold tracking-[1px] text-[#2C4938]">
              EN
            </a>
            <a href="#contacto" className="press bg-[#2C4938] px-6 py-3.5 text-[15px] font-bold text-white hover:bg-[#1D3326]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1D3326] text-white lg:h-[740px]">
          <Parallax className="absolute inset-0" distance={50}>
            <Image src={`${IMG}/gal-07.jpg`} alt="Sala de juntas del despacho EA Enriva" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(#1D3326D9,#1D3326D9)] md:bg-[linear-gradient(90deg,#1D3326F5_0%,#1D3326D0_50%,#1D332626_100%)]"
          />
          <div className={`${WRAP} relative flex h-full flex-col justify-between gap-20 pt-24 lg:pt-[150px]`}>
            <HeroIntro className="flex max-w-[760px] flex-col gap-7">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-1px]`}>
                Prestación integral de servicios jurídicos
              </HeroItem>
              <HeroItem as="p" className="max-w-[540px] text-lg leading-[1.53] text-[#E3EAE5] md:text-[19px]">
                Rápida y eficiente capacidad de respuesta. Brindamos seguridad y confianza a nuestros clientes.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-3">
                <a href="#contacto" className="press bg-white px-7 py-4 text-base font-bold text-[#2C4938] hover:bg-[#E3EAE5]">
                  Contáctanos
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-bold">
                  Áreas de especialidad
                  <ArrowRight size={18} color="#FFFFFF" aria-hidden="true" />
                </a>
              </HeroItem>
            </HeroIntro>
            <Stagger as="dl" className="flex flex-col gap-5 border-t border-white/25 pb-9 pt-7 md:flex-row md:flex-wrap md:gap-x-16" delay={0.6}>
              <StaggerItem className="flex flex-col gap-1.5">
                <dt className="text-[13px] text-[#B8C8BE]">Teléfonos</dt>
                <dd className="text-base">
                  <a href="tel:+525555967075" className="link-u">(55) 5596 7075</a> · <a href="tel:+525555967677" className="link-u">(55) 5596 7677</a>
                </dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-1.5">
                <dt className="text-[13px] text-[#B8C8BE]">Correo</dt>
                <dd className="text-base">
                  <a href="mailto:contacto@eaenriva.com" className="link-u">contacto@eaenriva.com</a>
                </dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-1.5">
                <dt className="text-[13px] text-[#B8C8BE]">Oficinas</dt>
                <dd className="text-base">Víctor Hugo 13, Col. Anzures, Ciudad de México</dd>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className={`${WRAP} grid scroll-mt-24 items-center gap-12 py-24 lg:grid-cols-[520px_1fr] lg:gap-24 lg:pb-[140px] lg:pt-[150px]`}>
          <MediaReveal onView delay={0} className="relative aspect-[520/640] w-full overflow-hidden">
            <Image src={`${IMG}/gal-01.jpg`} alt="Recepción del despacho" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-7">
            <Reveal as="h2" className={`${H2} text-[#1D3326]`}>
              Atención directa por parte de nuestros socios
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-7">
              <p className="text-lg leading-[1.5] md:text-xl">
                EA Enriva es un despacho orientado a la prestación integral de servicios jurídicos de calidad, con base en una rápida y eficiente capacidad de respuesta.
              </p>
              <p className="text-base leading-[27px] text-[#4B514D]">
                La firma concilia los mejores principios tradicionales del ejercicio del Derecho con una visión flexible y de innovación acorde con la dinámica global actual, lo cual brinda al cliente seguridad y confianza en el diseño de soluciones prácticas a sus diversas necesidades.
              </p>
            </Reveal>
            <Stagger as="dl" className="grid gap-8 pt-5 sm:grid-cols-2 sm:gap-12">
              <StaggerItem className="flex flex-col gap-2 border-t-2 border-[#2C4938] pt-5">
                <dt className="text-sm font-bold text-[#2C4938]">Socios</dt>
                <dd className="text-base leading-[25px]">
                  Ernesto Enríquez Castillo
                  <br />
                  Adriana Hernández del Valle
                </dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-2 border-t-2 border-[#2C4938] pt-5">
                <dt className="text-sm font-bold text-[#2C4938]">Oficinas</dt>
                <dd className="text-base leading-[25px]">
                  Víctor Hugo 13, Col. Anzures
                  <br />
                  C.P. 11590, Ciudad de México
                </dd>
              </StaggerItem>
            </Stagger>
            <Reveal delay={0.1} className="pt-2">
              <a href="#equipo" className="nudge inline-flex items-center gap-2.5 text-base font-bold text-[#2C4938]">
                Conoce al equipo
                <ArrowRight size={18} color="#2C4938" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Áreas de especialidad */}
        <section id="servicios" className="scroll-mt-24 bg-[#2C4938] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:gap-16 lg:pb-[140px] lg:pt-[130px]`}>
            <Reveal className="flex max-w-[720px] flex-col gap-[18px]">
              <h2 className={H2}>Áreas de especialidad</h2>
              <p className="max-w-[600px] text-lg leading-[1.53] text-[#D6E0DA] md:text-[19px]">
                Somos una firma de abogados que ofrece asesoría jurídica técnica, estratégica e integral.
              </p>
            </Reveal>
            <Stagger as="ul" className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16" gap={0.06}>
              {AREAS.map(({ t, d }) => (
                <StaggerItem key={t} as="li" className="flex flex-col gap-3.5 border-t border-white/[0.22] pt-7">
                  <h3 className={`${DISPLAY} text-[25px] font-medium leading-[30px]`}>{t}</h3>
                  <p className="text-[15px] leading-[25px] text-[#D6E0DA]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Asuntos representativos */}
        <section id="asuntos" className={`${WRAP} grid scroll-mt-24 gap-14 py-24 lg:grid-cols-[470px_1fr] lg:gap-24 lg:pb-[130px] lg:pt-[140px]`}>
          <Reveal className="flex flex-col gap-7">
            <h2 className={`${H2} text-[#1D3326]`}>Asuntos representativos</h2>
            <div className="flex flex-col gap-3.5 pt-6 lg:pt-9">
              <p className={`${DISPLAY} text-[clamp(2.75rem,4.4vw,4rem)] leading-[1.15] tracking-[-1px] text-[#2C4938]`}>
                <CountUp value="US$120 millones" />
              </p>
              <p className="text-base leading-[26px] text-[#4B514D]">
                Defensa exitosa ante el Tribunal Federal de Justicia Fiscal y Administrativa de la adjudicación de un contrato de obra pública para construir el Puente Baluarte, el puente más largo y más alto en México, en la autopista federal Durango-Manzanillo.
              </p>
            </div>
          </Reveal>
          <Stagger as="ul" className="flex flex-col gap-9 lg:pt-2" gap={0.07}>
            {ASUNTOS.map(({ t, d }) => (
              <StaggerItem key={t} as="li" className="grid gap-2 md:grid-cols-[250px_1fr] md:gap-10">
                <h3 className={`${DISPLAY} text-[22px] font-medium leading-[28px] text-[#1D3326]`}>{t}</h3>
                <p className="text-base leading-[26px] text-[#4B514D]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Clientes representativos */}
        <section aria-labelledby="clientes" className="bg-[#F5F2EC]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:gap-14 lg:pb-[130px] lg:pt-[120px]`}>
            <Reveal as="h2" id="clientes" className={`${DISPLAY} text-[clamp(2rem,3.1vw,2.75rem)] font-medium leading-tight tracking-[-0.5px] text-[#1D3326]`}>
              Clientes representativos
            </Reveal>
            <Stagger className="grid gap-x-10 gap-y-[18px] sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
              {CLIENTES.map((col) => (
                <StaggerItem key={col[0]} as="ul" className="flex flex-col gap-[18px]">
                  {col.map((c) => (
                    <li key={c} className={`${DISPLAY} text-[21px] leading-[27px] text-[#2C4938]`}>
                      {c}
                    </li>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className={`${WRAP} flex scroll-mt-24 flex-col gap-14 py-24 lg:py-[140px]`}>
          <Reveal className="flex flex-col gap-3.5">
            <h2 className={`${H2} text-[#1D3326]`}>Nuestro equipo</h2>
            <p className="text-lg text-[#4B514D] md:text-[19px]">Conoce a nuestros socios y asociados.</p>
          </Reveal>
          <Stagger className="grid gap-6 lg:grid-cols-2" gap={0.1}>
            {SOCIOS.map(({ cargo, n, bio, email }) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-4 bg-[#F5F2EC] px-6 pb-10 pt-9 md:px-12 md:pb-12 md:pt-11">
                <p className="text-sm font-bold text-[#2C4938]">{cargo}</p>
                <h3 className={`${DISPLAY} text-[clamp(1.75rem,2.4vw,2.125rem)] font-medium leading-tight text-[#1D3326]`}>{n}</h3>
                <p className="text-[15px] leading-[26px] text-[#4B514D]">{bio}</p>
                <a href={`mailto:${email}`} className="link-u mt-2 flex w-fit items-center gap-2.5 text-[15px] font-bold text-[#2C4938]">
                  <EnvelopeSimple size={18} color="#2C4938" aria-hidden="true" />
                  {email}
                </a>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="flex flex-col gap-7 pt-4">
            <Reveal as="h3" className={`${DISPLAY} text-[28px] font-medium text-[#1D3326]`}>
              Asociados
            </Reveal>
            <Stagger as="ul" className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
              {ASOCIADOS.map(({ n, bio }) => (
                <StaggerItem key={n} as="li" className="flex flex-col gap-2.5 border-t-2 border-[#2C4938] pt-5">
                  <p className="text-[17px] font-bold">{n}</p>
                  <p className="text-[15px] leading-6 text-[#4B514D]">{bio}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nuestro despacho */}
        <section id="galeria" className="scroll-mt-24 bg-[#202020] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-[140px] lg:pt-[130px]`}>
            <Reveal className="flex flex-col gap-3.5">
              <h2 className={H2}>Conoce nuestro nuevo despacho</h2>
              <p className="text-lg text-[#C9CFCB]">Víctor Hugo 13, Col. Anzures, Ciudad de México.</p>
            </Reveal>
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="grid gap-4 lg:grid-cols-[776fr_400fr] lg:gap-6">
                <Photo src="gal-11.jpg" alt="Oficina privada" className="h-[260px] sm:h-[380px] lg:h-[460px]" sizes="(min-width: 1024px) 776px, 100vw" />
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:grid-rows-2 lg:gap-6">
                  <Photo src="gal-05.jpg" alt="Máquina de escribir antigua" className="h-[160px] sm:h-[220px] lg:h-full" sizes="(min-width: 1024px) 400px, 50vw" delay={0.08} />
                  <Photo src="gal-14.jpg" alt="Llaves y libros en la biblioteca" className="h-[160px] sm:h-[220px] lg:h-full" sizes="(min-width: 1024px) 400px, 50vw" delay={0.16} />
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-[476fr_700fr] lg:gap-6">
                <Photo src="gal-24.jpg" alt="Terraza" className="h-[240px] sm:h-[320px]" sizes="(min-width: 1024px) 476px, 100vw" />
                <Photo src="gal-04.jpg" alt="Sala de juntas" className="h-[240px] sm:h-[320px]" sizes="(min-width: 1024px) 700px, 100vw" delay={0.08} />
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#F5F2EC]">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_600px] lg:gap-20 lg:py-[130px]`}>
            <div className="flex flex-col gap-9">
              <Reveal className="flex flex-col gap-3.5">
                <h2 className={`${H2} text-[#1D3326] xl:whitespace-nowrap`}>Comunícate con nosotros</h2>
                <p className="text-lg text-[#4B514D] md:text-[19px]">Envíanos un email o llámanos por teléfono.</p>
              </Reveal>
              <Stagger className="flex flex-col gap-9" gap={0.08}>
                <ContactRow Icon={Phone} k="Teléfonos">
                  <a href="tel:+525555967075" className="link-u w-fit">(55) 5596 7075</a>
                  <a href="tel:+525555967677" className="link-u w-fit">(55) 5596 7677</a>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimple} k="Correo">
                  <a href="mailto:contacto@eaenriva.com" className="link-u w-fit">contacto@eaenriva.com</a>
                </ContactRow>
                <ContactRow Icon={MapPin} k="Oficinas">
                  <p>
                    Víctor Hugo 13, Col. Anzures
                    <br />
                    C.P. 11590, Ciudad de México
                  </p>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[22px] bg-white p-6 md:p-12" noteClassName="text-sm text-[#4B514D]">
                <h3 className={`${DISPLAY} text-[30px] font-medium text-[#1D3326]`}>Envíanos un mensaje</h3>
                <Field label="Nombre completo" name="nombre" autoComplete="name" />
                <div className="grid gap-[22px] sm:grid-cols-2 sm:gap-5">
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Mensaje</span>
                  <textarea name="mensaje" rows={5} className={`${INPUT} h-[130px] resize-none py-3`} />
                </label>
                <button type="submit" className="press w-full bg-[#2C4938] px-7 py-4 text-base font-bold text-white hover:bg-[#1D3326]">
                  Enviar mensaje
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <Image src={`${IMG}/logo.svg`} alt="Enríquez EA Enriva" width={202} height={56} />
            <DemoForm className="flex w-full max-w-[380px] flex-col gap-2.5" noteClassName="text-sm text-[#4B514D]">
              <label htmlFor="s45-notificaciones" className="text-[15px] font-bold">
                ¿Quieres recibir notificaciones?
              </label>
              <div className="flex h-12 border border-[#C9CCC7] transition-[border-color,box-shadow] duration-200 focus-within:border-[#2C4938] focus-within:shadow-[0_0_0_3px_rgba(44,73,56,0.12)]">
                <input id="s45-notificaciones" name="email" type="email" autoComplete="email" placeholder="Escribe aquí tu email" className="min-w-0 flex-1 bg-transparent px-4 text-[15px] outline-none placeholder:text-[#6B706C]" />
                <button type="submit" aria-label="Suscribirme" className="press nudge flex w-12 shrink-0 items-center justify-center bg-[#2C4938] hover:bg-[#1D3326]">
                  <ArrowRight size={18} color="#FFFFFF" aria-hidden="true" />
                </button>
              </div>
            </DemoForm>
          </div>
          <div className="flex flex-col gap-5 border-t border-[#E4E7E3] pt-6 text-sm text-[#4B514D] lg:flex-row lg:items-center lg:justify-between">
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-7 gap-y-3">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p>© EA Enriva</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full border border-[#C9CCC7] bg-[#FAF9F6] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#2C4938] focus:shadow-[0_0_0_3px_rgba(44,73,56,0.12)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-12`} />
    </label>
  );
}

function ContactRow({ Icon, k, children }: { Icon: typeof Phone; k: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-[18px]">
      <Icon size={22} color="#2C4938" aria-hidden="true" className="mt-px shrink-0" />
      <div className="flex flex-col gap-1.5 text-[17px] leading-[26px]">
        <p className="text-sm font-bold leading-normal text-[#2C4938]">{k}</p>
        {children}
      </div>
    </StaggerItem>
  );
}

function Photo({ src, alt, className, sizes, delay = 0 }: { src: string; alt: string; className: string; sizes: string; delay?: number }) {
  return (
    <MediaReveal onView delay={delay} className={`img-zoom relative w-full overflow-hidden ${className}`}>
      <Image src={`${IMG}/${src}`} alt={alt} fill sizes={sizes} className="object-cover" />
    </MediaReveal>
  );
}
