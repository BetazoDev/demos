import type { Metadata } from "next";
import Image from "next/image";
import { Fira_Sans, Rufina } from "next/font/google";
import { ArrowRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Rufina({ subsets: ["latin"], weight: ["400", "700"], variable: "--s51-display" });
const body = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--s51-body" });

export const metadata: Metadata = {
  title: "Márquez y Beteta Abogados",
  description: "Despacho jurídico en la Ciudad de México especializado en asesoría legal integral, con un enfoque personalizado para cada cliente.",
};

const IMG = "/sitios/marquezybeteta";
const EMAIL = "info@marquezybeteta.com";
const PRIVACY = "https://marquezybeteta.com/index.php/politica-de-privacidad/";
const PHONES = ["55 9221 6980", "55 9216 0702"];
const tel = (n: string) => `tel:+52${n.replace(/\s/g, "")}`;

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  { t: "Litigio en conflictos individuales", img: "4937.jpg" },
  { t: "Auditorías y carpeta de operación laboral", img: "31566.jpg" },
  { t: "Conflictos colectivos", img: "126.jpg" },
  { t: "Recursos legales y recursos humanos", img: "2209543.jpg" },
];

const H2 = "font-[family-name:var(--s51-display)] text-[clamp(2.25rem,3.7vw,3.25rem)] font-bold leading-[1.1]";

function Logo({ className = "w-[150px] lg:w-[190px]" }: { className?: string }) {
  return (
    <a href="#top" className="block" aria-label="Márquez y Beteta Abogados, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Márquez y Beteta Abogados" width={190} height={78} loading="eager" className={`h-auto ${className}`} />
    </a>
  );
}

export default function MarquezBetetaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s51-body)] text-[#1B2D4C] selection:bg-[#1B2D4C] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#E3E7EE] bg-white"
        scrolledClassName="shadow-[0_10px_30px_-20px_rgba(27,45,76,0.45)]"
        innerClassName="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[121px] xl:px-0 [&>nav>ul]:gap-10"
        linkClassName="text-base font-medium text-[#1B2D4C]"
        panelClassName="bg-white text-[#1B2D4C] font-[family-name:var(--s51-body)]"
        panelLinkClassName="font-[family-name:var(--s51-display)] text-3xl font-bold"
        burgerClassName="bg-[#1B2D4C]"
        actions={
          <>
            <a href={tel(PHONES[0])} className="link-u flex items-center gap-2 text-base font-medium text-[#1B2D4C] lg:max-xl:hidden">
              <Phone size={18} aria-hidden="true" />
              {PHONES[0]}
            </a>
            <a href="#contacto" className="press bg-[#1B2D4C] px-[26px] py-3.5 text-base font-semibold text-white hover:bg-[#263F69]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid items-center lg:grid-cols-[1fr_minmax(0,580px)] lg:gap-16">
          <HeroIntro className="flex flex-col px-5 py-20 md:px-8 lg:py-16 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-0">
            <HeroItem className="flex items-center gap-4">
              <span aria-hidden="true" className="h-0.5 w-12 bg-[#FF0000]" />
              <span className="text-[17px] font-medium text-[#344A75]">Fundada en 2007</span>
            </HeroItem>
            <HeroItem as="h1" blur className="mt-7 font-[family-name:var(--s51-display)] text-[clamp(2.75rem,4.9vw,4.375rem)] font-bold leading-[1.02] tracking-[-1px]">
              Servicios jurídicos especializados.
            </HeroItem>
            <HeroItem as="p" className="mt-7 max-w-[520px] text-lg leading-[29px] text-[#3E4C66] md:text-[19px]">
              Despacho jurídico en la Ciudad de México especializado en asesoría legal integral, con un enfoque personalizado para cada cliente.
            </HeroItem>
            <HeroItem className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a href="#contacto" className="press bg-[#1B2D4C] px-8 py-[18px] text-[17px] font-semibold text-white hover:bg-[#263F69]">
                Contáctanos
              </a>
              <a href="#servicios" className="nudge flex items-center gap-2.5 text-[17px] font-semibold">
                Ver servicios
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[380px] overflow-hidden md:h-[520px] lg:h-[640px]" delay={0.25}>
            <Image src={`${IMG}/4646.jpg`} alt="Sala de juntas del despacho" fill preload sizes="(min-width: 1024px) 580px, 100vw" className="object-cover object-[89%_50%]" />
          </MediaReveal>
        </section>

        {/* Credenciales */}
        <section aria-label="Trayectoria" className="bg-[#1B2D4C] text-white">
          <Stagger className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-14 md:px-8 lg:flex-row lg:items-center lg:gap-0 xl:px-0" gap={0.08}>
            <StaggerItem className="flex flex-col gap-2 lg:w-[250px] lg:shrink-0">
              <p className="font-[family-name:var(--s51-display)] text-[52px] font-bold leading-none">2007</p>
              <p className="text-base leading-[23px] text-[#C9D2E1]">Año de fundación del despacho</p>
            </StaggerItem>
            <span aria-hidden="true" className="hidden h-24 w-px shrink-0 bg-[#3A4D70] lg:mr-14 lg:block" />
            <StaggerItem className="flex flex-col gap-2 border-t border-[#3A4D70] pt-10 lg:w-[250px] lg:shrink-0 lg:border-0 lg:pt-0">
              <CountUp value="40 años" className="font-[family-name:var(--s51-display)] text-[52px] font-bold leading-none" />
              <p className="text-base leading-[23px] text-[#C9D2E1]">De experiencia de nuestro fundador en derecho laboral</p>
            </StaggerItem>
            <span aria-hidden="true" className="hidden h-24 w-px shrink-0 bg-[#3A4D70] lg:mr-14 lg:block" />
            <StaggerItem as="p" className="border-t border-[#3A4D70] pt-10 font-[family-name:var(--s51-display)] text-[clamp(1.5rem,1.9vw,1.6875rem)] leading-[1.3] lg:flex-1 lg:border-0 lg:pt-0">
              Ofrecemos soluciones adecuadas a las necesidades legales particulares de cada caso.
            </StaggerItem>
          </Stagger>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="mx-auto max-w-[1200px] scroll-mt-28 px-5 py-24 md:px-8 lg:py-[120px] xl:px-0">
          <Reveal as="h2" className={H2}>¿Quiénes somos?</Reveal>
          <Reveal as="p" delay={0.08} className="mt-9 max-w-[1040px] font-[family-name:var(--s51-display)] text-[clamp(1.625rem,2.5vw,2.25rem)] leading-[1.3]">
            Márquez y Beteta Abogados es un despacho jurídico ubicado en la Ciudad de México, especializado en ofrecer asesoría legal integral con un enfoque personalizado para cada cliente.
          </Reveal>
          <MediaReveal onView delay={0} className="relative mt-[72px] h-[260px] overflow-hidden md:h-[340px] lg:h-[420px]">
            <Image src={`${IMG}/5207.jpg`} alt="Recepción del despacho" fill sizes="(min-width: 1240px) 1200px, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-28 bg-[#F2F5F7]">
          <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-24 md:px-8 lg:pb-[120px] lg:pt-28 xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Servicios legales profesionales</h2>
              <p className="max-w-[620px] text-lg leading-[29px] text-[#3E4C66] md:text-[19px]">
                Somos representantes de personas físicas y morales ante organismos públicos y entidades de gobierno.
              </p>
            </Reveal>
            <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.07}>
              {SERVICES.map((s) => (
                <StaggerItem key={s.t} as="article" className="img-zoom relative isolate flex h-[280px] flex-col justify-end p-7 text-white md:h-[340px] md:p-9">
                  <Image src={`${IMG}/${s.img}`} alt="" fill sizes="(min-width: 768px) 590px, 100vw" className="-z-20 object-cover" />
                  <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#1B2D4C00_20%,#1B2D4CF0_100%)]" />
                  <span aria-hidden="true" className="h-0.5 w-10 bg-[#FF0000]" />
                  <h3 className="mt-[18px] max-w-[440px] font-[family-name:var(--s51-display)] text-[clamp(1.625rem,2.3vw,2rem)] font-bold leading-[1.16]">{s.t}</h3>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className="mx-auto grid max-w-[1200px] scroll-mt-28 gap-16 px-5 py-24 md:px-8 lg:grid-cols-[1fr_420px] lg:gap-20 lg:py-[120px] xl:px-0">
          <div className="flex flex-col">
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Nuestro equipo legal</h2>
              <p className="max-w-[560px] text-lg leading-[29px] text-[#3E4C66] md:text-[19px]">
                Expertos en Derecho, complementariedad, coordinación, eficiencia y mayor capacidad de respuesta y confianza.
              </p>
            </Reveal>
            <MediaReveal onView delay={0} className="relative mt-12 h-[240px] overflow-hidden sm:h-[320px] lg:h-[380px]">
              <Image src={`${IMG}/equipo-x2.jpg`} alt="Equipo de Márquez y Beteta Abogados" fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
          <Reveal delay={0.1} as="article" className="flex flex-col">
            <div className="relative aspect-[420/472] w-full max-w-[420px] bg-[#F2F5F7]">
              <Image src={`${IMG}/nacho-x2.jpg`} alt="José Ignacio Márquez Perera" fill sizes="420px" className="object-cover" />
            </div>
            <h3 className="mt-7 font-[family-name:var(--s51-display)] text-[30px] font-bold leading-[35px]">José Ignacio Márquez Perera</h3>
            <p className="mt-2 flex items-center gap-3 text-base font-medium text-[#344A75]">
              <span aria-hidden="true" className="h-0.5 w-6 bg-[#FF0000]" />
              Nuestro fundador
            </p>
            <p className="mt-[18px] text-[17px] leading-[27px] text-[#3E4C66]">
              Cuarenta años de experiencia como asesor de empresas y particulares en el ámbito legal laboral, en materia individual y colectiva.
            </p>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-28 bg-[#1B2D4C] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-16 px-5 py-24 md:px-8 lg:grid-cols-[1fr_440px] lg:gap-24 lg:pb-[120px] lg:pt-28 xl:px-0">
            <div className="flex flex-col">
              <Reveal className="flex flex-col gap-5">
                <h2 className="font-[family-name:var(--s51-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] font-bold leading-[1.1]">Contacto</h2>
                <p className="text-lg leading-[29px] text-[#C9D2E1] md:text-[19px]">Horario de atención de 9 am a 7 pm.</p>
              </Reveal>
              <Stagger className="mt-14 flex flex-col gap-8" gap={0.08}>
                <StaggerItem className="flex flex-col gap-2.5">
                  <p className="flex items-center gap-2.5 text-[15px] text-[#C9D2E1]">
                    <EnvelopeSimple size={18} color="#F4818A" aria-hidden="true" />
                    Correo electrónico
                  </p>
                  <a href={`mailto:${EMAIL}`} className="link-u w-fit break-all text-[clamp(1.375rem,2.3vw,2rem)] font-medium leading-[1.2]">{EMAIL}</a>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5">
                  <p className="flex items-center gap-2.5 text-[15px] text-[#C9D2E1]">
                    <Phone size={18} color="#F4818A" aria-hidden="true" />
                    Teléfonos
                  </p>
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[clamp(1.375rem,2.3vw,2rem)] font-medium leading-[1.2]">
                    <a href={tel(PHONES[0])} className="link-u">{PHONES[0]}</a>
                    <span aria-hidden="true">·</span>
                    <a href={tel(PHONES[1])} className="link-u">{PHONES[1]}</a>
                  </p>
                </StaggerItem>
              </Stagger>
            </div>
            <div className="flex flex-col">
              <MediaReveal onView delay={0.05} className="relative h-[240px] overflow-hidden md:h-[300px]">
                <Image src={`${IMG}/4973.jpg`} alt="Pasillo de las oficinas" fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
              </MediaReveal>
              <Reveal delay={0.1} className="mt-8 flex flex-col gap-3">
                <p className="flex items-center gap-2.5 text-[15px] text-[#C9D2E1]">
                  <MapPin size={18} color="#F4818A" aria-hidden="true" />
                  Dirección
                </p>
                <address className="text-[19px] not-italic leading-[30px]">
                  Córdoba 42, piso 2, despacho 209
                  <br />
                  Col. Roma Norte, C.P. 06700
                  <br />
                  Alcaldía Cuauhtémoc, Ciudad de México
                </address>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo className="w-[190px]" />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px] font-medium">
                {NAV.map((l) => (
                  <li key={l.href}><a href={l.href} className="link-u">{l.label}</a></li>
                ))}
                <li><a href={PRIVACY} target="_blank" rel="noopener noreferrer" className="link-u">Política de Privacidad</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-[#E3E7EE] pt-6 text-sm text-[#5A6478] lg:flex-row lg:justify-between">
            <p>Marquez y Beteta Abogados, S.C.</p>
            <p>
              Córdoba 42, despacho 209, Roma Norte, Ciudad de México · <a href={`mailto:${EMAIL}`} className="link-u">{EMAIL}</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
