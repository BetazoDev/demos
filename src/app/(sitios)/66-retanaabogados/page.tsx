import type { Metadata } from "next";
import Image from "next/image";
import { Hanken_Grotesk, Young_Serif } from "next/font/google";
import { ArrowRight, Briefcase, FilePenLine, Globe, Landmark, Mail, MapPin, Phone, Play } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--s66-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--s66-body" });

export const metadata: Metadata = {
  title: "Retana Abogados",
  description: "Firma legal especializada en derecho empresarial y corporativo. Nuestro enfoque: la empresa y el empresario.",
};

const IMG = "/sitios/66-retanaabogados";
const PHOTO =
  "https://images.unsplash.com/photo-1760558604077-7075de86bb0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTE2MDcwOTZ8&ixlib=rb-4.1.0&q=80&w=1080";
const VIDEO = "https://www.youtube.com/watch?v=NlNxS7nyiFI";
const CURSOS = "https://www.retanaabogados.com.mx/Cursos/";
const PHONE = "tel:+525538470954";
const EMAIL = "mailto:contacto@retanaabogados.com.mx";

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s66-display)]";
const H2 = `${SERIF} text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.125]`;

const NAV = [
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Práctica", href: "#practica" },
  { label: "Protección patrimonial", href: "#proteccion-patrimonial" },
  { label: "Cursos", href: CURSOS },
];

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Práctica", href: "#practica" },
  { label: "Contactos", href: "#contacto" },
  { label: "Cursos", href: CURSOS },
];

const MISION_VISION = [
  ["Misión", "Proveer servicios jurídicos especializados, así como la prevención y mitigación de riesgos legales, mediante la adopción de soluciones novedosas."],
  [
    "Visión",
    "Ser reconocidos como líderes innovadores en la prestación de servicios jurídicos, siendo aliados estratégicos de nuestros clientes. Nos comprometemos a anticiparnos a las necesidades legales del mercado con soluciones vanguardistas y personalizadas.",
  ],
];

const PRACTICA = [
  {
    Icon: Briefcase,
    t: "Mercantil",
    d: "Servicios especializados en derecho mercantil, con un enfoque destacado en dos áreas clave: el cobro de cartera vencida y la protección de la propiedad intelectual.",
  },
  {
    Icon: FilePenLine,
    t: "Contratos",
    d: "Los contratos no son solo documentos legales, sino herramientas fundamentales para construir relaciones sólidas y duraderas entre las partes involucradas.",
  },
  {
    Icon: Landmark,
    t: "Fiscal",
    d: "Servicios diseñados para ayudar a empresas y particulares a cumplir con sus obligaciones fiscales mientras minimizan los riesgos legales asociados.",
  },
  {
    Icon: Globe,
    t: "Comercio internacional",
    d: "Una amplia gama de servicios en derecho del comercio internacional para empresas y organizaciones que operan en un entorno globalizado.",
  },
];

function Logo() {
  return (
    <a href="#top" aria-label="Retana Abogados, inicio" className="flex flex-col gap-0.5 text-[#1C3D72]">
      <span className={`${SERIF} text-[30px] leading-8`}>retana</span>
      <span className="text-[10px] font-semibold leading-[1.2] tracking-[5.4px]">ABOGADOS</span>
    </a>
  );
}

export default function RetanaAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s66-body)] text-[#1A1A1A] selection:bg-[#1C3D72] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#F5EFE4]"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(28,61,114,0.45)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center gap-9 px-5 md:px-8 lg:h-24 xl:px-0 [&>div:first-child]:mr-auto [&_nav_ul]:gap-9"
        linkClassName="text-[15px] font-medium leading-6 text-[#1C3D72]"
        panelClassName="bg-[#F5EFE4] text-[#1C3D72] font-[family-name:var(--s66-body)]"
        panelLinkClassName={`${SERIF} text-3xl`}
        burgerClassName="bg-[#1C3D72]"
        actions={
          <a href="#contacto" className="press rounded-full bg-[#1C3D72] px-[26px] py-[13px] text-[15px] font-semibold leading-[18px] text-white hover:bg-[#15305A]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#F5EFE4]">
          <div className={`${WRAP} flex flex-col items-center pt-16 lg:pt-24`}>
            <HeroIntro className="flex flex-col items-center gap-7 text-center">
              <HeroItem as="h1" blur className={`${SERIF} max-w-[1200px] text-[clamp(2.125rem,4.2vw,3.75rem)] leading-[1.085] text-[#1C3D72]`}>
                Firma legal especializada en derecho empresarial y corporativo
              </HeroItem>
              <HeroItem as="p" className="text-lg leading-8 text-[#1C3D72]/85 md:text-xl">
                Nuestro enfoque: la empresa y el empresario.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center justify-center gap-4 pb-12 pt-2 lg:pb-[84px]">
                <a href="#contacto" className="press rounded-full bg-[#1C3D72] px-8 py-[17px] text-base font-semibold leading-[19px] text-white hover:bg-[#15305A]">
                  Contáctanos
                </a>
                <a
                  href="#practica"
                  className="press rounded-full px-[30px] py-4 text-base font-semibold leading-[19px] text-[#1C3D72] shadow-[inset_0_0_0_1.5px_#1C3D72] hover:bg-[#1C3D72]/[0.07]"
                >
                  Ver práctica
                </a>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="img-zoom relative h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[460px]" delay={0.3}>
              <a href={VIDEO} target="_blank" rel="noopener noreferrer" aria-label="Ver el video de Retana Abogados en YouTube" className="group absolute inset-0 flex items-center justify-center">
                <span className="absolute inset-y-0 -left-[4.5%] w-[109%]">
                  <Image
                    src={`${IMG}/video-poster.jpg`}
                    alt=""
                    fill
                    preload
                    sizes="(min-width: 1240px) 1308px, 109vw"
                    className="object-cover object-[50%_58%]"
                  />
                </span>
                <span className="press relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white/90 group-hover:bg-white lg:h-[84px] lg:w-[84px]">
                  <Play className="ml-0.5 h-6 w-6 text-[#1C3D72] lg:h-[30px] lg:w-[30px]" strokeWidth={1.75} aria-hidden="true" />
                </span>
              </a>
            </MediaReveal>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section id="sobre-nosotros" className={`${WRAP} scroll-mt-20 py-20 lg:scroll-mt-24 lg:py-28`}>
          <Reveal as="h2" className={`${H2} text-[#1C3D72]`}>
            ¿Quiénes somos?
          </Reveal>
          <Stagger className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16 lg:mt-14" gap={0.08}>
            {MISION_VISION.map(([t, d]) => (
              <StaggerItem key={t} as="article" className="flex flex-col gap-4 border-t-2 border-[#C9B086] pt-7">
                <h3 className={`${SERIF} text-[30px] leading-[34px] text-[#1C3D72]`}>{t}</h3>
                <p className="text-[17px] leading-[27px] md:text-lg md:leading-[29px]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Práctica */}
        <section id="practica" className="scroll-mt-20 bg-[#1C3D72] text-white lg:scroll-mt-24">
          <div className={`${WRAP} py-20 lg:py-28`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Práctica del Derecho empresarial</h2>
              <p className="text-[17px] leading-[27px] text-white/80 md:text-lg md:leading-[29px]">Asesoría y estrategias acordes a las necesidades de usted o su negocio.</p>
            </Reveal>
            <Stagger className="mt-12 grid gap-px bg-white/15 md:grid-cols-2 lg:mt-14" gap={0.07}>
              {PRACTICA.map(({ Icon, t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-[18px] bg-[#1C3D72] py-10 md:px-10 lg:px-12 lg:py-11">
                  <Icon className="h-[30px] w-[30px] text-[#C9B086]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className={`${SERIF} text-[clamp(1.625rem,2.1vw,1.875rem)] leading-[1.15]`}>{t}</h3>
                  <p className="text-[17px] leading-[27px] text-white/80">{d}</p>
                  <a href="#contacto" className="nudge flex w-fit items-center gap-2 text-[15px] font-semibold leading-[18px] text-[#C9B086]">
                    Leer más
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Protección patrimonial */}
        <section id="proteccion-patrimonial" className="scroll-mt-20 bg-[#F5EFE4] lg:scroll-mt-24">
          <div className={`${WRAP} grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-16 lg:py-28 xl:gap-20`}>
            <MediaReveal onView delay={0} className="img-zoom relative aspect-[5/6] w-full max-w-[500px] overflow-hidden">
              <Image src={PHOTO} alt="Fachada de un edificio clásico vista desde abajo" fill unoptimized sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="p" className="text-[17px] font-medium leading-[27px] text-[#1C3D72] md:text-lg md:leading-[29px]">
                Nuestra especialización es el Derecho empresarial. Por tal motivo, nuestra función principal es asegurar la protección de su patrimonio.
              </Reveal>
              <Reveal as="h2" delay={0.06} className={`${SERIF} text-[clamp(2.375rem,3.6vw,3.25rem)] leading-[1.115] text-[#1C3D72]`}>
                Protección patrimonial
              </Reveal>
              <Reveal delay={0.12} className="flex flex-col gap-6 text-[17px] leading-[27px]">
                <p>
                  La protección patrimonial es fundamental para garantizar la seguridad financiera y el bienestar de individuos y empresas. No se trata solo de evitar pérdidas financieras, sino también de preservar la estabilidad y el legado para las generaciones futuras.
                </p>
                <p>
                  Nuestro compromiso es proporcionar asesoramiento experto y soluciones personalizadas: ayudamos a nuestros clientes a identificar riesgos potenciales, implementar estructuras legales adecuadas y tomar medidas preventivas para salvaguardar sus activos.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section aria-labelledby="valores" className={`${WRAP} flex flex-col gap-7 py-20 lg:py-[104px]`}>
          <Reveal as="p" className="text-[17px] leading-[27px] text-[#1C3D72]/80 md:text-lg md:leading-[29px]">
            Nuestros servicios están sustentados por un conjunto de valores:
          </Reveal>
          <Reveal as="h2" delay={0.08} id="valores" className={`${SERIF} max-w-[1100px] text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.155] text-[#1C3D72]`}>
            Confianza, compromiso, experiencia, innovación, resultados y responsabilidad.
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 bg-[#1C3D72] text-white lg:scroll-mt-24">
          <div className={`${WRAP} grid items-start gap-12 py-20 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16 lg:py-28 xl:gap-20`}>
            <Reveal className="flex flex-col items-start gap-6">
              <h2 className={`${SERIF} max-w-[520px] text-[clamp(2.25rem,3.5vw,3.125rem)] leading-[1.12]`}>¿Necesitas hablar con nosotros?</h2>
              <a href={EMAIL} className="press rounded-full bg-[#C9B086] px-8 py-[17px] text-base font-bold leading-[19px] text-[#1C3D72] hover:bg-[#D6C19D]">
                Contáctanos
              </a>
            </Reveal>
            <Stagger as="dl" className="flex flex-col" gap={0.07} delay={0.05}>
              {[
                { Icon: MapPin, k: "Oficinas", v: "Ciudad de México\nOrizaba, Veracruz" },
                { Icon: Phone, k: "Teléfono", v: "55 3847 0954", href: PHONE },
                { Icon: Mail, k: "E-mail", v: "contacto@retanaabogados.com.mx", href: EMAIL },
              ].map(({ Icon, k, v, href }) => (
                <StaggerItem key={k} className="flex gap-5 border-t border-white/20 py-[26px]">
                  <Icon className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#C9B086]" strokeWidth={1.75} aria-hidden="true" />
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <dt className="text-sm font-semibold leading-[22px] text-[#C9B086]">{k}</dt>
                    <dd className="whitespace-pre-line text-[19px] leading-[29px] [overflow-wrap:anywhere] md:text-[22px] md:leading-[31px]">
                      {href ? (
                        <a href={href} className="link-u">
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-white text-[#1C3D72]">
        <div className={`${WRAP} flex flex-col gap-8 pb-28 pt-12 lg:flex-row lg:items-center lg:justify-between lg:pb-12`}>
          <Logo />
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] leading-6">
              {FOOTER_NAV.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="link-u">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm leading-[22px] text-[#1A1A1A]/70">© 2024 retanaabogados.com.mx</p>
        </div>
      </footer>
    </div>
  );
}
