import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display_SC, Source_Sans_3 } from "next/font/google";
import {
  ArrowRightIcon,
  BuildingsIcon,
  CoinsIcon,
  EnvelopeSimpleIcon,
  HandshakeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  ScalesIcon,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Playfair_Display_SC({ subsets: ["latin"], weight: ["400", "700"], variable: "--s19-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--s19-body" });

export const metadata: Metadata = {
  title: "Marquez Durand Abogados",
  description: "Despacho jurídico corporativo creado en 1988 por especialistas en derecho civil y mercantil, con un perfil marcado hacia el litigio.",
};

const IMG = "/sitios/19-marquezdurandabogados";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SC = "font-[family-name:var(--s19-display)] tracking-[0.6px]";

const NAV = [
  { label: "Áreas", href: "#areas" },
  { label: "La firma", href: "#acerca" },
  { label: "Socios", href: "#socios" },
  { label: "Clientes", href: "#clientes" },
];

const AREAS = [
  { t: "Investigaciones (due diligence)", Icon: MagnifyingGlassIcon, d: "Reportes de crédito. Información corporativa: directores, accionistas, operaciones, entornos comerciales y mercantiles. Información financiera." },
  { t: "Cobranza judicial y extrajudicial", Icon: CoinsIcon, d: "Cobranza y recuperación extrajudicial. Cobranza judicial." },
  { t: "Negociaciones y mediación", Icon: HandshakeIcon, d: "Procesos para no ir a juicio y obtener con ello resultados beneficiosos para las partes en conflicto." },
  { t: "Derecho corporativo, contratos y convenios", Icon: BuildingsIcon, d: "Constitución de sociedades con o sin inversión extranjera. Contratos. Convenios." },
  { t: "Derecho civil y mercantil, litigio", Icon: ScalesIcon, d: "Elaboración y negociación de contratos. Procuraduría Federal del Consumidor. Litigio." },
];

const CLIENTES = [
  ["Tapón Corona", "Arrendadora, Soluciones y Negocios", "Banco Santander (México)", "Santander Vivienda", "Banco Monex", "Beamonte México Holding"],
  ["BI Partners México", "Cobranza Amigable", "Daewoo Electronics Corporation de México", "Divimex Produce", "Docuformas", "Kiwii Capital"],
  ["Liquid Capital", "QAD Mexicana", "Servicios de Cobranza de Recuperación y Seguimiento", "Surtidos Homeopáticos", "Stream Lease", "Grupo Xcaret"],
];

function Logo() {
  return (
    <a href="#top" className="flex flex-col gap-1 font-[family-name:var(--s19-display)]" aria-label="Marquez Durand Abogados, inicio">
      <span className="whitespace-nowrap text-[20px] font-bold leading-none tracking-[1.5px] text-[#3F0705] sm:text-2xl">MARQUEZ DURAND</span>
      <span className="text-xs leading-none tracking-[7.2px] text-[#602E0C]">ABOGADOS</span>
    </a>
  );
}

export default function MarquezDurandPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s19-body)] text-[#222228] selection:bg-[#3F0705] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(63,7,5,0.4)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-10 lg:h-24 [&>nav]:ml-auto`}
        linkClassName="mx-1 text-[15px] font-medium leading-[23px] text-[#222228]"
        panelClassName="bg-white text-[#3F0705] font-[family-name:var(--s19-body)]"
        panelLinkClassName="font-[family-name:var(--s19-display)] text-3xl tracking-[0.6px]"
        burgerClassName="bg-[#3F0705]"
        actions={
          <a href="#contacto" className="press bg-[#3F0705] px-6 py-[13px] text-[15px] font-semibold leading-[18px] text-white hover:bg-[#602E0C]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid lg:h-[680px] lg:grid-cols-[minmax(0,780fr)_minmax(0,660fr)]">
          <HeroIntro className="flex flex-col justify-center gap-7 bg-[#3F0705] px-5 py-20 md:px-8 lg:py-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-20">
            <HeroItem as="h1" blur className={`${SC} max-w-[580px] text-[clamp(2.5rem,4.2vw,3.625rem)] leading-[1.05] text-white`}>
              Despacho jurídico corporativo
            </HeroItem>
            <HeroItem as="p" className="max-w-[470px] text-lg leading-[1.53] text-[#FFFFFFD9] md:text-[19px] md:leading-[29px]">
              Firma creada en 1988 por especialistas en derecho civil y mercantil, con un perfil marcado hacia el litigio.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-3">
              <a href="#contacto" className="press bg-white px-7 py-4 text-base font-semibold leading-[19px] text-[#3F0705] hover:bg-[#F5F2EF]">
                Contáctanos
              </a>
              <a href="#areas" className="nudge flex items-center gap-2.5 text-base font-semibold leading-[19px] text-white">
                Áreas de la firma
                <ArrowRightIcon className="h-[18px] w-[18px]" />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[340px] overflow-hidden sm:h-[460px] lg:h-full" delay={0.25}>
            {/* Design frames the right half of the photo at 2x width: same crop at every size */}
            <div className="absolute -inset-y-[5.8%] right-0 w-[200%]">
              <Image src={`${IMG}/hero.jpg`} alt="Fachada de un edificio corporativo de cristal" fill preload sizes="(min-width: 1024px) 92vw, 200vw" className="object-cover" />
            </div>
          </MediaReveal>
        </section>

        {/* Credenciales */}
        <section aria-label="La firma" className={`${WRAP} grid gap-10 py-16 lg:grid-cols-[340px_1fr] lg:gap-12`}>
          <Reveal as="p" className="text-lg leading-[1.45] md:text-xl md:leading-[29px]">
            Servicios jurídicos integrales para empresas y particulares, bajo las más altas normas de ética y disciplina.
          </Reveal>
          <Stagger className="grid gap-8 sm:grid-cols-3 sm:gap-12" gap={0.08}>
            {[
              ["1988", "Año de creación de la firma"],
              ["Civil y mercantil", "Especialidad de sus fundadores"],
              ["Tribunales y arbitraje", "Representación profesional de sus clientes"],
            ].map(([k, v]) => (
              <StaggerItem key={k} className="flex flex-col gap-2 border-t border-[#998675] pt-5">
                <p className={`${SC} text-[26px] leading-[31px] text-[#3F0705]`}>{k}</p>
                <p className="text-[15px] leading-[23px] text-[#222228CC]">{v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Áreas */}
        <section id="areas" className="scroll-mt-24 bg-[#F5F2EF]">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[380px_1fr] lg:gap-[60px] lg:py-28`}>
            <div className="flex flex-col gap-6">
              <Reveal className="flex flex-col gap-6">
                <h2 className={`${SC} text-[clamp(2.25rem,4vw,2.875rem)] leading-[1.11] text-[#3F0705]`}>Áreas de la firma</h2>
                <p className="max-w-[360px] text-[17px] leading-[26px] text-[#222228D9]">
                  Asesoría competitiva y confiable, con representación ante los tribunales y en los procedimientos arbitrales.
                </p>
              </Reveal>
              <MediaReveal onView delay={0.05} className="img-zoom relative aspect-[380/430] w-full max-w-[380px] overflow-hidden">
                <Image src={`${IMG}/img1.jpg`} alt="Oficina con escritorio, lámpara y librero" fill sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
              </MediaReveal>
            </div>
            <Stagger className="grid sm:grid-cols-2" gap={0.06}>
              {AREAS.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t border-[#3F070526] py-8 pr-8">
                  <Icon className="h-7 w-7 text-[#3F0705]" />
                  <h3 className={`${SC} max-w-[320px] text-[22px] leading-[28px] text-[#3F0705]`}>{t}</h3>
                  <p className="max-w-[320px] text-base leading-[25px] text-[#222228D9]">{d}</p>
                </StaggerItem>
              ))}
              <StaggerItem className="flex min-h-[270px] flex-col justify-end gap-5 bg-[#3F0705] p-8">
                <p className="max-w-[300px] text-[19px] leading-[28px] text-white">
                  Soluciones únicas enfocadas en los requerimientos de las personas y empresas que confían en la firma.
                </p>
                <a href="#contacto" className="nudge flex w-fit items-center gap-2.5 text-base font-semibold leading-[19px] text-white">
                  Contáctanos
                  <ArrowRightIcon className="h-[18px] w-[18px]" />
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Acerca de la firma */}
        <section id="acerca" className="scroll-mt-24 bg-[#222228] text-white">
          <div className={`${WRAP} flex flex-col gap-10 py-24 lg:py-[120px]`}>
            <Reveal as="h2" className={`${SC} text-[clamp(2.25rem,4vw,2.875rem)] leading-[1.11]`}>
              Acerca de la firma
            </Reveal>
            <Reveal as="p" delay={0.08} className="max-w-[900px] text-[clamp(1.375rem,2.2vw,1.75rem)] font-light leading-[1.4]">
              Marquez Durand Abogados es una firma creada en el año de 1988 por especialistas en derecho civil y mercantil.
            </Reveal>
            <Stagger className="grid gap-10 pt-4 md:grid-cols-3 md:gap-[60px]" gap={0.08}>
              {[
                "Brindamos servicios jurídicos integrales respaldando a empresas y particulares bajo las más altas normas de ética, disciplina y proyección, para ofrecer soluciones únicas enfocadas en los requerimientos de quienes confían en la firma.",
                "Nuestro equipo está conformado por un grupo de profesionales capacitados para brindar soluciones al cliente a través de la asesoría competitiva y confiable, representándolos ante los tribunales y en los procedimientos arbitrales.",
                "El despacho tiene un perfil marcado hacia el litigio: esa experiencia contenciosa nos permite tener un conocimiento real de las consecuencias legales en tribunales y brindar patrocinio y representación profesional.",
              ].map((t) => (
                <StaggerItem key={t} as="p" className="border-t border-[#998675] pt-6 text-base leading-[26px] text-[#FFFFFFC7]">
                  {t}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className={`${WRAP} grid scroll-mt-24 gap-12 py-24 lg:grid-cols-[380px_1fr] lg:gap-[60px] lg:py-28`}>
          <Reveal as="h2" className={`${SC} text-[clamp(2.25rem,4vw,2.875rem)] leading-[1.11] text-[#3F0705]`}>
            Socios y asociados
          </Reveal>
          <Stagger className="grid gap-10 sm:grid-cols-2" gap={0.1}>
            {[
              ["Mtra. Laura Angélica Márquez Durand", "Socia", "Cédula Profesional 2290371"],
              ["Dr. Luis Miguel Márquez Durand", "Socio", "Cédula Profesional 6416044"],
            ].map(([n, c, ced]) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-2.5 border-t-2 border-[#3F0705] pt-7">
                <h3 className={`${SC} text-[28px] leading-[35px] text-[#3F0705]`}>{n}</h3>
                <p className="text-base font-semibold leading-[25px] text-[#602E0C]">{c}</p>
                <p className="text-[15px] leading-[23px] text-[#222228B3]">{ced}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-24 bg-[#3F0705] text-white">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:py-28`}>
            <Reveal className="flex flex-col gap-3.5">
              <h2 className={`${SC} text-[clamp(2.25rem,4vw,2.875rem)] leading-[1.11]`}>Clientes</h2>
              <p className="text-lg leading-[28px] text-[#FFFFFFC7]">Personas y empresas que confían en la firma.</p>
            </Reveal>
            <Stagger className="grid gap-[18px] border-t border-[#FFFFFF33] pt-8 md:grid-cols-3 md:gap-12" gap={0.08}>
              {CLIENTES.map((col) => (
                <StaggerItem key={col[0]} as="ul" className="flex flex-col gap-[18px]">
                  {col.map((c) => (
                    <li key={c} className="text-lg leading-6">
                      {c}
                    </li>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative isolate scroll-mt-24 overflow-hidden bg-[#222228] text-white">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={30}>
            <Image src={`${IMG}/chair.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#222228C4]" />
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[420px_1fr] lg:gap-[60px] lg:py-32`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${SC} text-[clamp(2.5rem,4.5vw,3.25rem)] leading-[1.1]`}>Contacto</h2>
              <p className="max-w-[400px] text-lg leading-[1.53] text-[#FFFFFFD9] md:text-[19px] md:leading-[29px]">
                Representación ante los tribunales y en los procedimientos arbitrales para empresas y particulares.
              </p>
            </Reveal>
            <Stagger className="flex flex-col" gap={0.08}>
              {[
                { Icon: PhoneIcon, k: "Teléfono", v: "(55) 4444-3271", href: "tel:+525544443271" },
                { Icon: EnvelopeSimpleIcon, k: "Correo", v: "asistencia@marquezdurandabogados.mx", href: "mailto:asistencia@marquezdurandabogados.mx" },
                { Icon: MapPinIcon, k: "Dirección", v: "Puebla 398-601, Col. Roma Norte, C.P. 06700, Ciudad de México" },
              ].map(({ Icon, k, v, href }) => (
                <StaggerItem key={k} className="flex gap-4 border-t border-[#FFFFFF40] py-7 sm:gap-6">
                  <Icon className="h-[26px] w-[26px] shrink-0" />
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <p className="text-sm font-semibold leading-[22px] text-[#E2D8CF]">{k}</p>
                    {href ? (
                      <a href={href} className="link-u w-fit text-[17px] leading-[1.35] [overflow-wrap:anywhere] sm:text-2xl sm:leading-8">
                        {v}
                      </a>
                    ) : (
                      <p className="text-[17px] leading-[1.35] sm:text-2xl sm:leading-8">{v}</p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`${WRAP} flex flex-col gap-8 pb-28 pt-12 lg:flex-row lg:items-center lg:justify-between lg:pb-12`}>
          <Logo />
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] leading-[23px]">
              {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-u">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm leading-[22px] text-[#222228B3]">© 2023 Marquez Durand Abogados</p>
        </div>
      </footer>
    </div>
  );
}
