import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Familjen_Grotesk, Manrope } from "next/font/google";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BankIcon,
  ChatsCircleIcon,
  EnvelopeSimpleIcon,
  HandshakeIcon,
  LightningIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  MedalIcon,
  PhoneIcon,
  ScalesIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Familjen_Grotesk({ subsets: ["latin"], variable: "--s33-display" });
const body = Manrope({ subsets: ["latin"], variable: "--s33-body" });

export const metadata: Metadata = {
  title: "Portos Abogados",
  description: "Excelencia en Derecho Penal. Litigio penal y constitucional para instituciones, personas físicas y morales, a nivel local y federal.",
};

const IMG = "/sitios/portos";
const DISPLAY = "font-[family-name:var(--s33-display)]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const MAPS = "https://maps.app.goo.gl/wzcPNC1BPEDYabKo6";
const MAIL = "mailto:info@portos.mx";

const NAV = [
  { label: "La Firma", href: "#la-firma" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Profesionales", href: "#profesionales" },
];

const BADGES = [
  { src: "Portos-Chambers-2026.png", alt: "Chambers ranked in Latin America 2026: Portos Abogados" },
  { src: "Portos-Chambers-2026-3.png", alt: "Chambers ranked in Latin America 2026: José Manuel Portos" },
  { src: "Portos-Chambers-2026-2.png", alt: "Chambers ranked in Latin America 2026: Ángel Ortega Ramírez" },
];

const AREAS = [
  { t: "Consultoría en Derecho Penal", Icon: ChatsCircleIcon },
  { t: "Representación en Litigios en Materia Penal", Icon: ScalesIcon },
  { t: "Derecho Constitucional y Amparo en Materia Penal", Icon: BankIcon },
  { t: "Responsabilidad de Empresa y Compliance Penal", Icon: ShieldCheckIcon },
  { t: "Acuerdos y Negociaciones", Icon: HandshakeIcon },
  { t: "Manejo de Crisis (Litigio)", Icon: LightningIcon },
];

const DELITOS = [
  "Delitos patrimoniales y financieros",
  "Delitos fiscales y de lavado de dinero",
  "Fraudes",
  "Delitos corporativos",
  "Delitos relacionados con la corrupción",
  "Delitos contra la propiedad intelectual e industrial",
];

const PHONES = [
  ["+52 55 5575 6423", "+52 55 5575 6289"],
  ["+52 55 5254 8469", "+52 55 5575 9410"],
];

const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

function Logo() {
  return (
    <a href="#top" aria-label="Portos Abogados, inicio" className="block">
      <Image src={`${IMG}/logo-portos-cream.png`} alt="Portos Abogados" width={215} height={40} preload className="h-8 w-auto lg:h-10" />
    </a>
  );
}

export default function PortosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-[#0A1822] font-[family-name:var(--s33-body)] text-[#0A1822] selection:bg-[#C14620] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        overlay
        className="bg-transparent"
        scrolledClassName="bg-[#0A1822]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-10 lg:h-[104px] lg:[&>nav]:ml-auto lg:[&>nav>ul]:gap-10`}
        linkClassName="text-[15px] font-medium text-[#E9E7DD]"
        panelClassName="bg-[#0A1822] text-[#E9E7DD] font-[family-name:var(--s33-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl font-medium tracking-[-0.5px]`}
        burgerClassName="bg-[#E9E7DD]"
        actions={
          <a href="#contacto" className="press border border-[#E9E7DD] px-[22px] py-3 text-[15px] font-semibold text-[#E9E7DD] hover:bg-[#E9E7DD] hover:text-[#0A1822]">
            Contacto
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0A1822] text-[#E9E7DD]">
          <Parallax className="absolute inset-0" distance={60}>
            <Image src={`${IMG}/hero-video-thumb.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#0A182299_0%,#0A182266_30%,#0A1822B3_60%,#0A1822_100%)] md:bg-[linear-gradient(180deg,#0A182288_0%,#0A182200_30%,#0A182299_68%,#0A1822_100%)]" />
          <HeroIntro className="relative flex min-h-[760px] flex-col justify-end pt-36 lg:min-h-[880px]">
            <div className={`${WRAP} flex w-full flex-col gap-10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-14`}>
              <div className="flex max-w-[760px] flex-col gap-7">
                <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(3.25rem,7.8vw,7rem)] font-medium leading-[0.98] tracking-[-0.031em]`}>
                  Excelencia en
                  <br />
                  Derecho Penal
                </HeroItem>
                <HeroItem as="p" className="max-w-[520px] text-[17px] leading-[1.55] text-[#E9E7DD]/90 md:text-[19px] md:leading-[29px]">
                  Litigio penal y constitucional para instituciones, personas físicas y morales, a nivel local y federal.
                </HeroItem>
                <HeroItem className="flex flex-wrap items-center gap-7 pt-2 text-[15px]">
                  <a href="#contacto" className="press bg-[#C14620] px-[30px] py-[17px] font-bold text-white hover:bg-[#A93C1B]">
                    Contacto
                  </a>
                  <a href="#areas" className="nudge flex items-center gap-2.5 font-semibold">
                    Áreas de práctica
                    <ArrowRightIcon size={18} aria-hidden="true" />
                  </a>
                </HeroItem>
              </div>
              <HeroItem className="flex items-end gap-3 sm:gap-5">
                {BADGES.map((b) => (
                  <Image key={b.src} src={`${IMG}/${b.src}`} alt={b.alt} width={104} height={88} className="h-[66px] w-auto sm:h-[88px]" />
                ))}
              </HeroItem>
            </div>
            <HeroItem y={8} className="border-t border-[#E9E7DD33]">
              <ul className={`${WRAP} flex flex-col gap-3 pb-[26px] pt-[22px] text-[15px] text-[#E9E7DD]/85 md:flex-row md:flex-wrap md:items-center md:gap-x-14`}>
                <li className="flex items-center gap-2.5">
                  <MapPinIcon size={16} aria-hidden="true" className="shrink-0 text-[#A18F72]" />
                  <a href={MAPS} className="link-u">Pdte. Masaryk 25, Polanco, CDMX</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <PhoneIcon size={16} aria-hidden="true" className="shrink-0 text-[#A18F72]" />
                  <a href={tel(PHONES[0][0])} className="link-u">{PHONES[0][0]}</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <EnvelopeSimpleIcon size={16} aria-hidden="true" className="shrink-0 text-[#A18F72]" />
                  <a href={MAIL} className="link-u">info@portos.mx</a>
                </li>
              </ul>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* La Firma */}
        <section id="la-firma" className="scroll-mt-20 bg-[#E9E7DD]">
          <div className={`${WRAP} flex flex-col gap-14 pb-20 pt-20 lg:gap-16 lg:pb-28 lg:pt-32`}>
            <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.01] tracking-[-0.028em]`}>
              Especialistas en proteger <br className="hidden md:block" />
              lo que importa
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-14 xl:gap-20">
              <Reveal as="p" className="text-[clamp(1.25rem,1.8vw,1.625rem)] font-medium leading-[1.42]">
                Portos Abogados, S.C. es una Firma Boutique especializada en litigio penal y constitucional con más de 20 años de experiencia.
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col gap-5 pt-1.5 text-base leading-[26px] text-[#2B3A44]">
                <p>
                  Nuestro equipo de abogados cuenta con un alto nivel de especialización y brinda atención legal a instituciones, así como a personas físicas y morales, ofreciendo las estrategias legales más convenientes y actuales para la defensa y solución de sus problemas legales.
                </p>
                <p>
                  Asesoramos en todas las áreas del derecho penal relacionadas con las actividades empresariales y representamos a nuestros clientes en investigaciones y juicios penales, tanto a nivel local como federal.
                </p>
              </Reveal>
            </div>
            <Stagger as="dl" className="grid gap-10 border-t border-[#0A182233] pt-10 md:grid-cols-3" gap={0.08}>
              <StaggerItem className="flex flex-col gap-2.5">
                <dt className={`${DISPLAY} text-[clamp(3rem,4.2vw,3.75rem)] font-medium leading-[1.2] tracking-[-1.5px] text-[#C14620]`}>
                  <CountUp value="20+" />
                </dt>
                <dd className="max-w-[300px] text-[15px] leading-[23px] text-[#2B3A44]">años de experiencia en litigio penal y constitucional.</dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-2.5">
                <dt className={`${DISPLAY} text-[clamp(3rem,4.2vw,3.75rem)] font-medium leading-[1.2] tracking-[-1.5px] text-[#C14620]`}>2004</dt>
                <dd className="max-w-[300px] text-[15px] leading-[23px] text-[#2B3A44]">año desde el que José Manuel Portos es socio director de la Firma.</dd>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-2.5">
                <dt className={`${DISPLAY} text-[clamp(3rem,4.2vw,3.75rem)] font-medium leading-[1.2] tracking-[-1.5px] text-[#C14620]`}>Band 2</dt>
                <dd className="max-w-[300px] text-[15px] leading-[23px] text-[#2B3A44]">Chambers &amp; Partners, Dispute Resolution: White-Collar Crime, México.</dd>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Expertos */}
        <section className="bg-[#0A1822] text-[#E9E7DD]">
          <div className={`${WRAP} flex flex-col gap-14 pb-20 pt-20 lg:gap-[72px] lg:pb-32 lg:pt-[120px]`}>
            <MediaReveal onView className="relative h-[280px] overflow-hidden sm:h-[400px] lg:h-[520px]" delay={0}>
              <Image src={`${IMG}/office-glass.jpg`} alt="Vitrina con el logotipo de Portos Abogados" fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
            </MediaReveal>
            <Stagger className="grid gap-14 md:grid-cols-2 lg:gap-24" gap={0.08}>
              {[
                ["Expertos en Derecho Penal", "La Firma se dedica exclusivamente al Derecho Penal. Cada caso es único y, por ello, diseñamos estrategias personalizadas que consideran todos los aspectos legales relevantes. Trabajamos de la mano con abogados y expertos en otras especialidades, lo que nos permite abordar los desafíos legales de manera integral y eficiente."],
                ["Compromiso con la excelencia", "Nuestro compromiso con la excelencia nos impulsa a mantenernos actualizados con los cambios legislativos y las mejores prácticas del sector. La formación continua y la innovación son pilares fundamentales de nuestra filosofía."],
              ].map(([t, d]) => (
                <StaggerItem key={t} className="flex flex-col gap-5">
                  <span aria-hidden="true" className="h-[3px] w-12 bg-[#C14620]" />
                  <h2 className={`${DISPLAY} text-[clamp(2rem,2.8vw,2.5rem)] font-medium leading-[1.15] tracking-[-1px]`}>{t}</h2>
                  <p className="text-base leading-[27px] text-[#E9E7DD]/80">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Chambers */}
        <section aria-labelledby="chambers" className="bg-[#A18F72]">
          <div className={`${WRAP} grid gap-14 py-20 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16 lg:py-[120px] xl:grid-cols-[380px_1fr] xl:gap-24`}>
            <Reveal className="flex flex-col gap-7">
              <h2 id="chambers" className={`${DISPLAY} text-[clamp(2.375rem,3.6vw,3.25rem)] font-medium leading-[1.04] tracking-[-1.4px]`}>
                Reconocidos por Chambers &amp; Partners
              </h2>
              <p className="text-[17px] leading-[27px]">
                Chambers &amp; Partners nos reconoce como una firma líder en Derecho Penal en Latinoamérica y el mundo, reflejando nuestra excelencia y compromiso con la defensa penal estratégica.
              </p>
              <p className="flex items-center gap-2.5 pt-2 text-[15px] font-bold">
                Conoce más en Chambers
                <ArrowUpRightIcon size={16} aria-hidden="true" />
              </p>
            </Reveal>
            <div className="flex flex-col gap-12">
              <Reveal as="figure" delay={0.08} className="flex flex-col gap-6 border-b border-[#0A182240] pb-12">
                <blockquote lang="en" className={`${DISPLAY} text-[clamp(1.5rem,2.25vw,2rem)] leading-[1.31] tracking-[-0.5px]`}>
                  “Portos Abogados is composed of professional, responsible and technically skilled lawyers. They provide timely and efficient client service.”
                </blockquote>
                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px]">
                  <span className="font-bold">Portos Abogados</span>
                  <span>Dispute Resolution: White-Collar Crime, México · Band 2</span>
                </figcaption>
              </Reveal>
              <Stagger className="grid gap-10 md:grid-cols-2 md:gap-12" gap={0.08}>
                {[
                  ["“Jose Manuel Portos is distinguished by his devotion, and you can tell he is really passionate about his job.”", "José Manuel Portos", "White-Collar Crime, México · Band 2"],
                  ["“Angel Ortega Ramirez is a legal professional with specialised expertise in criminal law, offering timely advice on complex matters and demonstrating a genuine openness to understanding our industry.”", "Ángel Ortega Ramírez", "White-Collar Crime, México · Up and Coming"],
                ].map(([q, n, r]) => (
                  <StaggerItem key={n} as="figure" className="flex flex-col gap-[18px]">
                    <blockquote lang="en" className="text-base leading-[26px]">{q}</blockquote>
                    <figcaption className="flex flex-col gap-1 text-[15px]">
                      <span className="font-bold">{n}</span>
                      <span>{r}</span>
                    </figcaption>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-20 bg-[#172D3A] text-[#E9E7DD]">
          <div className={`${WRAP} flex flex-col gap-14 pb-20 pt-20 lg:gap-[72px] lg:pb-[120px] lg:pt-32`}>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16 xl:grid-cols-[420px_1fr] xl:gap-24">
              <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.5rem,3.9vw,3.5rem)] font-medium leading-[1.04] tracking-[-1.6px]`}>
                Reinventamos la práctica del Derecho Penal
              </Reveal>
              <Stagger as="ul" className="grid gap-x-12 gap-y-9 sm:grid-cols-2 sm:gap-y-11 lg:pb-11" gap={0.06}>
                {AREAS.map(({ t, Icon }) => (
                  <StaggerItem key={t} as="li" className="flex gap-5">
                    <Icon size={30} aria-hidden="true" className="shrink-0 text-[#A18F72]" />
                    <span className={`${DISPLAY} flex-1 text-[22px] font-medium leading-[1.24] md:text-[25px] md:leading-[31px]`}>{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div className="flex flex-col gap-5 border-t border-[#E9E7DD2E] pt-10">
              <Reveal as="p" className="text-base text-[#E9E7DD]/80">
                Representamos a nuestros clientes en investigaciones y juicios penales por:
              </Reveal>
              <Stagger as="ul" className="flex max-w-[1000px] flex-wrap gap-3" gap={0.04}>
                {DELITOS.map((d) => (
                  <StaggerItem key={d} as="li" className="border border-[#E9E7DD4D] px-4 py-2.5 text-[15px] font-medium">
                    {d}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Profesionales */}
        <section id="profesionales" className="scroll-mt-20 bg-[#E9E7DD]">
          <div className={`${WRAP} flex flex-col gap-14 pb-20 pt-20 lg:pb-[120px] lg:pt-32`}>
            <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-2px]`}>
              Profesionales
            </Reveal>
            <Person
              name="José Manuel Portos Ubierna"
              role="Socio director desde 2004"
              bio={[
                "Egresado de la Universidad Panamericana, con Master en Ciencias Criminológicas, Penales y Penitenciarias y Diploma de Estudios Avanzados dentro del Programa de Doctorado de Estudios de Derecho Penal, ambos por la Universidad Complutense de Madrid, así como diversos cursos en materia penal y Juicios Orales.",
                "Ha sido profesor titular de la materia de Derecho Procesal Penal en la Universidad Panamericana y es miembro de diversas asociaciones.",
              ]}
              rank="Chambers & Partners · Band 2"
              linkedin
            />
            <Person
              name="Ángel Ortega Ramírez"
              role="Socio desde 2011"
              bio={[
                "Egresado de la Universidad Nacional Autónoma de México, con estudios de Maestría en derecho procesal penal y de Posgrado con especialidad en Proceso Penal Acusatorio y Juicios Orales.",
                "Cuenta con amplia experiencia en Delitos Patrimoniales y Fraude Procesal.",
              ]}
              rank="Chambers & Partners · Up and Coming"
            />
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 bg-[#C14620] text-white">
          <div className={`${WRAP} flex flex-col gap-14 pb-20 pt-20 lg:gap-[72px] lg:pb-28 lg:pt-[120px]`}>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <Reveal as="h2" className={`${DISPLAY} text-[clamp(4rem,8.4vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.033em]`}>
                Contacto
              </Reveal>
              <Reveal delay={0.08} className="lg:pb-3.5">
                <a href={MAIL} className={`nudge ${DISPLAY} flex w-fit items-center gap-3.5 text-[clamp(1.75rem,3.1vw,2.75rem)] font-medium tracking-[-1px]`}>
                  <span className="link-u">info@portos.mx</span>
                  <ArrowUpRightIcon aria-hidden="true" className="h-7 w-7 shrink-0 lg:h-9 lg:w-9" />
                </a>
              </Reveal>
            </div>
            <Stagger className="grid gap-10 border-t border-[#FFFFFF59] pt-10 md:grid-cols-2 md:gap-12" gap={0.08}>
              <StaggerItem className="flex flex-col items-start gap-3.5">
                <p className="text-[15px] font-bold">Oficina</p>
                <p className="text-[17px] leading-[27px]">
                  Pdte. Masaryk 25, Polanco
                  <br />
                  Ciudad de México, C.P. 11570
                </p>
                <a href={MAPS} className="nudge flex items-center gap-2 text-[15px] font-semibold">
                  <span className="link-u">Ver en Google Maps</span>
                  <ArrowUpRightIcon size={15} aria-hidden="true" />
                </a>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-3.5">
                <p className="text-[15px] font-bold">Teléfonos</p>
                <div className="text-[17px] leading-[27px]">
                  {PHONES.map(([a, b]) => (
                    <p key={a}>
                      <a href={tel(a)} className="link-u">{a}</a>
                      {" · "}
                      <a href={tel(b)} className="link-u">{b}</a>
                    </p>
                  ))}
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A1822] text-[#E9E7DD]">
        <div className={`${WRAP} pb-28 pt-14 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px] font-medium text-[#E9E7DD]/85">
                {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-[#E9E7DD26] pt-6 text-[15px] text-[#E9E7DD]/65 sm:flex-row sm:justify-between">
            <p>© 2026 Portos Abogados, S.C.{" "}<HemeronCredit /></p>
            <p>Pdte. Masaryk 25, Polanco, CDMX, 11570</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Person({ name, role, bio, rank, linkedin = false }: { name: string; role: string; bio: string[]; rank: string; linkedin?: boolean }) {
  return (
    <Reveal as="article" className="grid gap-6 border-t border-[#0A182233] pb-2 pt-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16 xl:grid-cols-[420px_1fr] xl:gap-24">
      <div className="flex flex-col gap-3">
        <h3 className={`${DISPLAY} text-[clamp(1.875rem,2.5vw,2.25rem)] font-medium leading-[1.11] tracking-[-0.8px]`}>{name}</h3>
        <p className="font-semibold text-[#9E3A1A]">{role}</p>
      </div>
      <div className="flex flex-col gap-4 text-base leading-[26px] text-[#2B3A44]">
        {bio.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 pt-2 text-[15px] font-semibold text-[#0A1822]">
          <p className="flex items-center gap-2">
            <MedalIcon size={18} aria-hidden="true" />
            {rank}
          </p>
          {linkedin && (
            <p className="flex items-center gap-2">
              <LinkedinLogoIcon size={18} aria-hidden="true" />
              LinkedIn
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
