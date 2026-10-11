import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Libre_Franklin, Taviraj } from "next/font/google";
import { ArrowRight, EnvelopeSimple, LinkedinLogo, MapPin, Phone, Printer } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Taviraj({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--s48-display" });
const body = Libre_Franklin({ subsets: ["latin"], variable: "--s48-body" });

export const metadata: Metadata = {
  title: "Fernández Braniff Abogados",
  description: "Derecho Corporativo, Financiero, Fiscal y Litigio en materia Civil y Mercantil en México, desde 1988.",
};

const IMG = "/sitios/fbamex";
const LINKEDIN = "https://mx.linkedin.com/company/fernandez-braniff-abogados-s.c.";

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "La firma", href: "#la-firma" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Asociaciones", href: "#asociaciones" },
];

const FOOTER_NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "La firma", href: "#la-firma" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nuestro equipo", href: "#equipo" },
  { label: "Asociaciones", href: "#asociaciones" },
  { label: "Contacto", href: "#contacto" },
];

const STATS = [
  { n: "1988", l: "Año de fundación de la firma, por el Lic. Jorge Fernández Braniff" },
  { n: "16", l: "Áreas de práctica, del Derecho Corporativo al Arbitraje y el Litigio" },
  { n: "13", l: "Países de la alianza Law Firm of the Americas, que la firma cofundó en 2002" },
];

const SERVICIOS = [
  { t: "Sociedades", d: "Constitución, fusión, liquidación y adquisición del control de sociedades mercantiles y civiles; asambleas, consejos de administración y auditorías corporativas." },
  { t: "Contratos", d: "Elaboración, negociación, formalización y registro de contratos y convenios mercantiles, civiles y administrativos, así como su litigio." },
  { t: "Inversión extranjera", d: "Co-inversión y representaciones, solicitudes ante la Comisión Nacional de Inversiones Extranjeras y trámites ante el Registro Nacional." },
  { t: "Propiedad industrial e intelectual", d: "Registro y protección de marcas, nombres y avisos comerciales, patentes, secretos industriales y franquicias, en México y en el extranjero." },
  { t: "Derechos de autor", d: "Registro y procedimientos para proteger obras literarias, científicas, musicales, de arquitectura, fotografía, cinematografía y programas de cómputo." },
  { t: "Inmobiliario", d: "Arrendamiento, compraventa de inmuebles, fraccionamientos y condominios. Representación de propietarios y arrendatarios de oficinas y centros comerciales." },
  { t: "Administrativo", d: "Autorizaciones, permisos, concesiones y licitaciones públicas; desincorporación de paraestatales y amparo contra leyes y actos de autoridad." },
  { t: "Turismo", d: "Contratos sobre operaciones turísticas, estructuración y comercialización de desarrollos turísticos, litigio y amparo en la materia." },
  { t: "Financiero, bancario y bursátil", d: "Contratos con intermediarios financieros, fideicomisos, financiamientos, garantías y reestructuraciones financieras, incluyendo litigio y amparo." },
  { t: "Fiscal", d: "Asesoría y consulta a sociedades mercantiles, personas físicas residentes en el extranjero y personas morales sin fines de lucro; litigio y amparo." },
  { t: "Civil", d: "Contratos, testamentos, sucesiones, arrendamientos y asuntos familiares como divorcio, patria potestad y adopción; litigio y amparo." },
  { t: "Mercantil", d: "Contratos en general, seguros, fianzas, comisiones, transporte, suministro y distribución; litigio incluyendo amparo en la materia." },
  { t: "Migratorio", d: "Internación y legal estancia de personas extranjeras, requisitos ante las autoridades de migración y cambio o conservación de la calidad migratoria." },
  { t: "Comercio exterior", d: "Programas PITEX, ALTEX e Industria Maquiladora; permisos, preferencias arancelarias, certificados de origen y cuotas de importación y exportación." },
  { t: "Arbitraje", d: "Solución de controversias entre comerciantes por la vía arbitral, nacional e internacional, en representación de las partes o como árbitros." },
  { t: "Litigio", d: "Niveles federal, estatal y municipal, incluidas apelaciones: litigio mercantil, protección al consumidor, competencia, bienes raíces, construcción e hipotecas." },
];

const SOCIOS = [
  {
    n: "Lic. Jorge Fernández Braniff",
    c: "Socio fundador",
    src: "equipo-socio-fundador.jpg",
    bio: "Autorizado para ejercer en todos los estados de la República. Experiencia en Derecho Constitucional, Corporativo, Bancario, Inversiones Extranjeras, Amparo y Litigio Civil y Mercantil. Asesor del Gobierno Federal en privatizaciones como MICONSA y los Canales 7 y 13. Árbitro del Centro de Mediación y Arbitraje Comercial de la Cámara Nacional de Comercio de la Ciudad de México.",
  },
  {
    n: "Lic. Jorge Fernández Braniff Méndez",
    c: "Socio",
    src: "equipo-socio.jpg",
    bio: "Licenciado en Derecho por la Universidad Anáhuac Norte. Inició en el despacho en 2010 en litigio civil y mercantil y después en el área Corporativa. De 2015 a 2020 trabajó en White & Case, S.C., en recuperación de cartera, concursos mercantiles y arbitrajes internacionales. Domina el idioma inglés.",
  },
];

const PAISES = [
  ["Estados Unidos", "México", "Argentina", "Brasil", "Chile"],
  ["Costa Rica", "Panamá", "Puerto Rico", "Venezuela", "Uruguay"],
  ["República Dominicana", "España", "Portugal"],
];

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s48-display)]";
const H2 = `${DISPLAY} text-[clamp(2.375rem,3.6vw,3.25rem)] leading-[1.1]`;

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-4" aria-label="Fernández Braniff Abogados, inicio">
      <Image src={`${IMG}/monograma.svg`} alt="" width={35} height={60} preload className="h-[52px] w-auto lg:h-[60px]" />
      <Image src={`${IMG}/wordmark.svg`} alt="Fernández Braniff Abogados" width={190} height={34} preload className="h-[30px] w-auto lg:h-[34px]" />
    </a>
  );
}

export default function FernandezBraniffPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s48-body)] text-[#212529] selection:bg-[#265925] selection:text-[#F8EED9]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#193F26]"
        scrolledClassName="shadow-[0_12px_30px_-18px_rgba(10,30,16,0.8)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-24`}
        linkClassName="text-[15px] text-[#F8EED9]"
        panelClassName="bg-[#193F26] text-[#F8EED9] font-[family-name:var(--s48-body)]"
        panelLinkClassName="font-[family-name:var(--s48-display)] text-3xl font-light"
        burgerClassName="bg-[#F8EED9]"
        actions={
          <a href="#contacto" className="press rounded-full bg-[#F8EED9] px-6 py-3 text-[15px] font-medium text-[#193F26] hover:bg-white">
            Solicitar una asesoría
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#193F26] text-[#F8EED9] lg:h-[700px] lg:grid-cols-[1fr_minmax(0,680px)]">
          <HeroIntro className="flex flex-col justify-center gap-7 px-5 py-20 md:px-8 lg:pb-6 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-16 lg:pt-0">
            <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.75rem,4.75vw,4.25rem)] font-light leading-[1.07]`}>
              Fernández Braniff
              <br />
              Abogados
            </HeroItem>
            <HeroItem as="p" className="max-w-[470px] text-lg leading-[29px] text-[#F8EED9D9]">
              Derecho Corporativo, Financiero, Fiscal y Litigio en materia Civil y Mercantil en México, desde 1988.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-3">
              <a href="#contacto" className="press rounded-full bg-[#F8EED9] px-[30px] py-4 text-base font-medium text-[#193F26] hover:bg-white">
                Solicitar una asesoría
              </a>
              <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-medium">
                Ver servicios
                <ArrowRight size={18} color="#F8EED9" aria-hidden="true" />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal delay={0.25} className="relative h-[420px] overflow-hidden md:h-[560px] lg:h-full">
            <Image src={`${IMG}/hero-angel-duotono.jpg`} alt="Ángel de la Independencia y mazo de juez, en duotono verde" fill preload sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Credenciales */}
        <section aria-label="Datos de la firma" className="bg-[#F8EED9]">
          <Stagger as="dl" className={`${WRAP} grid gap-10 py-14 md:grid-cols-3 md:gap-16`} gap={0.08}>
            {STATS.map(({ n, l }) => (
              <StaggerItem key={n} className="flex flex-col-reverse justify-end gap-2">
                <dt className="text-[15px] leading-[23px] text-[#3A463E]">{l}</dt>
                <dd className={`${DISPLAY} text-5xl leading-[53px] text-[#193F26]`}>{n === "1988" ? n : <CountUp value={n} />}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className={`${WRAP} grid scroll-mt-24 items-center gap-14 py-24 lg:grid-cols-[520px_1fr] lg:gap-24 lg:pb-[140px] lg:pt-[150px]`}>
          <Reveal className="flex flex-col gap-6">
            <h2 className={`${H2} text-[#193F26]`}>Nosotros</h2>
            <p className="text-[17px] leading-[29px]">
              La firma se funda en 1988 por el Licenciado Jorge Fernández Braniff, junto con otros abogados activamente involucrados en la práctica del Derecho Corporativo, Financiero, Fiscal y Litigio en materia Civil y Mercantil en México.
            </p>
            <p className="text-[17px] leading-[29px]">
              Los socios y asociados cuentan con una vasta experiencia, producto de su participación en los despachos de mayor prestigio de la Ciudad de México y en el Gobierno Mexicano. Desde su fundación atienden asesorías corporativas, opiniones legales, litigios e inversiones, tanto nacionales como extranjeras.
            </p>
          </Reveal>
          <div className="relative aspect-[584/600] w-full max-w-[584px]">
            <MediaReveal onView delay={0} className="absolute left-0 top-0 h-[78.3%] w-[71.9%] overflow-hidden">
              <Image src={`${IMG}/imagen-recorte.jpg`} alt="Oficina con biblioteca y escritorio de madera" fill sizes="(min-width: 1024px) 420px, 72vw" className="object-cover" />
            </MediaReveal>
            <Reveal y={0} delay={0.18} duration={0.5} className="absolute left-[55.5%] top-[41.7%] h-[58.3%] w-[44.5%] bg-white p-1.5 md:p-2.5">
              <MediaReveal onView delay={0.18} className="relative h-full w-full overflow-hidden">
                <Image src={`${IMG}/imagen-2-recorte.jpg`} alt="Corredor con arcos" fill sizes="(min-width: 1024px) 240px, 44vw" className="object-cover" />
              </MediaReveal>
            </Reveal>
          </div>
        </section>

        {/* La firma */}
        <section id="la-firma" className="scroll-mt-24 bg-[#265925] text-[#F8EED9]">
          <Reveal className={`${WRAP} flex flex-col items-center gap-8 py-24 text-center lg:py-[130px]`}>
            <h2 className={H2}>La firma</h2>
            <p className={`${DISPLAY} max-w-[960px] text-[clamp(1.625rem,2.5vw,2.25rem)] font-light leading-[1.36]`}>
              Surge como respuesta a la necesidad de empresas e inversionistas de obtener servicios legales especializados de óptima calidad, a un costo razonable.
            </p>
            <p className="max-w-[640px] text-lg leading-[31px] text-[#F8EED9D9]">
              Se mantiene una política de desarrollo moderado y controlado, a fin de proporcionar siempre a nuestros clientes un trato directo y personal en la solución de sus problemas legales.
            </p>
          </Reveal>
        </section>

        {/* Servicios */}
        <section id="servicios" className={`${WRAP} flex scroll-mt-24 flex-col gap-14 py-24 lg:py-[140px]`}>
          <Reveal className="flex flex-col gap-5">
            <h2 className={`${H2} text-[#193F26]`}>Servicios</h2>
            <p className="max-w-[680px] text-lg leading-[30px] text-[#3A463E]">
              Asesorías corporativas, opiniones legales, litigios e inversiones, tanto nacionales como extranjeras, para personas físicas y morales en México y en el extranjero.
            </p>
          </Reveal>
          <Stagger as="ul" className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-11" gap={0.04}>
            {SERVICIOS.map(({ t, d }) => (
              <StaggerItem key={t} as="li" className="flex flex-col gap-3 border-t border-[#193F2638] pt-[22px]">
                <h3 className={`${DISPLAY} text-[22px] font-medium leading-7 text-[#193F26]`}>{t}</h3>
                <p className="text-[15px] leading-6 text-[#4A544D]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Equipo */}
        <section id="equipo" className="scroll-mt-24 bg-[#F8EED9]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:pb-[150px] lg:pt-[140px]`}>
            <Reveal as="h2" className={`${H2} text-[#193F26]`}>
              Nuestro equipo y asociados
            </Reveal>
            <Stagger className="grid gap-12 lg:grid-cols-2" gap={0.12}>
              {SOCIOS.map(({ n, c, src, bio }) => (
                <StaggerItem key={n} as="article" className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <div className="relative aspect-[220/290] w-[180px] shrink-0 overflow-hidden sm:w-[220px]">
                    <Image src={`${IMG}/${src}`} alt={n} fill sizes="220px" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className={`${DISPLAY} text-[26px] font-medium leading-[33px] text-[#193F26]`}>{n}</h3>
                    <p className="text-sm font-semibold text-[#265925]">{c}</p>
                    <p className="text-[15px] leading-[25px]">{bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Asociaciones */}
        <section id="asociaciones" className="scroll-mt-24 bg-[#193F26] text-[#F8EED9]">
          <div className={`${WRAP} flex flex-col gap-16 py-24 lg:pb-[120px] lg:pt-[140px]`}>
            <Reveal className="flex flex-col gap-[18px]">
              <h2 className={H2}>Law Firm of the Americas</h2>
              <p className={`${DISPLAY} text-[clamp(1.25rem,1.7vw,1.5rem)] font-light leading-[1.3] text-[#FADA8D]`}>Una alianza de Firmas Independientes de Abogados</p>
              <p className="max-w-[760px] text-[17px] leading-[29px] text-[#F8EED9CC]">
                La firma ha colaborado por años con despachos de Estados Unidos, Centro y Sudamérica y Europa. Como socio fundador participó en la conformación de esta agrupación de prestadores de servicios jurídicos, constituida el 22 de enero de 2002.
              </p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col" gap={0.08}>
              {PAISES.map((row) => (
                <StaggerItem key={row[0]} as="li" className="flex flex-wrap gap-x-7 gap-y-1 border-t border-[#F8EED933] py-[22px] md:gap-x-14">
                  {row.map((p) => (
                    <span key={p} className={`${DISPLAY} text-[clamp(1.75rem,2.8vw,2.5rem)] font-light leading-[1.2]`}>
                      {p}
                    </span>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className={`${WRAP} grid scroll-mt-24 gap-14 py-24 lg:grid-cols-[500px_1fr] lg:gap-24 lg:py-[140px]`}>
          <div className="flex flex-col gap-7">
            <Reveal className="flex flex-col gap-7">
              <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.3vw,3rem)] leading-[1.125] text-[#193F26]`}>Solicitar una asesoría personalizada</h2>
              <p className="text-lg leading-[30px] text-[#3A463E]">Te asesoramos en todos tus procesos legales para lograr una solución óptima.</p>
            </Reveal>
            <Stagger className="flex flex-col gap-[22px] pt-3" gap={0.07}>
              <ContactRow Icon={MapPin} k="Dirección">
                <p>Guadalajara 29, Mezz. B, Col. Roma Norte, Cuauhtémoc, C.P. 06700, Ciudad de México</p>
              </ContactRow>
              <ContactRow Icon={Phone} k="Teléfono">
                <a href="tel:+525555533031" className="link-u w-fit">+52 55 5553 3031</a>
              </ContactRow>
              <ContactRow Icon={Printer} k="Fax">
                <p>+52 55 5553 8296</p>
              </ContactRow>
              <ContactRow Icon={EnvelopeSimple} k="Correo">
                <a href="mailto:fba@prodigy.net.mx" className="link-u w-fit">fba@prodigy.net.mx</a>
              </ContactRow>
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-5 bg-[#F8EED9] p-6 md:p-12" noteClassName="text-sm text-[#3A463E]">
              <h3 className={`${DISPLAY} text-[30px] text-[#193F26]`}>Contáctanos</h3>
              <Field label="Nombre" name="nombre" autoComplete="name" />
              <Field label="Correo" name="correo" type="email" autoComplete="email" />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-[#193F26]">Mensaje</span>
                <textarea name="mensaje" rows={6} className={`${INPUT} h-[150px] resize-none py-3`} />
              </label>
              <div className="flex justify-end pt-2">
                <button type="submit" className="press rounded-full bg-[#193F26] px-10 py-4 text-base font-medium text-[#F8EED9] hover:bg-[#265925]">
                  Enviar
                </button>
              </div>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#193F26] text-[#F8EED9D9]">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-20 lg:pb-10`}>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <Image src={`${IMG}/logo-footer.svg`} alt="Fernández Braniff Abogados, Est. 1988" width={128} height={196} />
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3.5 text-[15px]">
                  {FOOTER_NAV.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex max-w-[300px] flex-col gap-3.5 text-[15px] leading-[23px]">
                <p>Guadalajara 29, Mezz. B, Col. Roma Norte, Cuauhtémoc, C.P. 06700, Ciudad de México</p>
                <p>
                  <a href="tel:+525555533031" className="link-u">+52 55 5553 3031</a>
                </p>
                <p>
                  <a href="mailto:fba@prodigy.net.mx" className="link-u">fba@prodigy.net.mx</a>
                </p>
                <a href={LINKEDIN} className="link-u mt-1.5 flex w-fit items-center gap-2.5 text-[#FADA8D]">
                  <LinkedinLogo size={22} color="#FADA8D" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#F8EED933] pt-6 text-[13px] text-[#F8EED9B3] sm:flex-row sm:justify-between">
            <p>© 2026 Fernández Braniff Abogados, S.C.{" "}<HemeronCredit /></p>
            <p className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="https://www.fbamex.com/#acceso-miembros" className="link-u">Acceso a miembros</a>
              <a href="https://www.fbamex.com/politicas-de-privacidad" className="link-u">Políticas de privacidad</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full border border-[#193F2640] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#193F26] focus:shadow-[0_0_0_3px_rgba(25,63,38,0.14)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[#193F26]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-[52px]`} />
    </label>
  );
}

function ContactRow({ Icon, k, children }: { Icon: typeof Phone; k: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-4">
      <Icon size={22} color="#265925" aria-hidden="true" className="mt-px shrink-0" />
      <div className="flex flex-col gap-1 text-[17px] leading-[26px]">
        <p className="text-[13px] font-medium leading-normal text-[#5A665E]">{k}</p>
        {children}
      </div>
    </StaggerItem>
  );
}
