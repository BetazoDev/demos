import type { Metadata } from "next";
import Image from "next/image";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import { ArrowRight, EnvelopeSimple, LinkedinLogo, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Alegreya({ subsets: ["latin"], weight: ["700"], variable: "--s56-display" });
const body = Alegreya_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--s56-body" });

export const metadata: Metadata = {
  title: "Lechuga Abogados",
  description: "Servicios legales de excelencia. Asesoría jurídica preventiva y precontenciosa, y litigio civil, mercantil, financiero, concursal, administrativo, penal, constitucional y familiar.",
};

const IMG = "/sitios/lechugaabogados";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = "font-[family-name:var(--s56-display)] text-[clamp(2.375rem,3.9vw,3.25rem)] font-bold leading-[1.06]";
const SITE = "https://www.lechugaabogados.com";
const LINKEDIN = "https://www.linkedin.com/company/lechuga-abogados/";

const NAV = [
  { label: "Firma", href: "#firma" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Historia", href: "#historia" },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Contacto", href: "#contacto" },
];

const AREAS = [
  ["Derecho Constitucional y Amparo", "Juicios de amparo para proteger y defender los derechos fundamentales de personas físicas y morales, manteniendo la vigencia del juicio hasta su resolución."],
  ["Derecho Mercantil", "Asesoría a sociedades mercantiles y litigio comercial: juicios ordinarios, ejecutivos y orales, arbitrajes, seguros, derecho financiero y concursal."],
  ["Derecho Civil", "Litigios de rescisión y cumplimiento de contratos, responsabilidad extracontractual, arrendamiento, hipoteca y constitución de garantías reales o personales."],
  ["Derecho Familiar", "Especialistas en la legislación y los tratados internacionales aplicables, con prioridad en los intereses de los menores y la integridad de nuestros clientes."],
  ["Derecho Penal", "Litigio y consultoría en el Sistema de Justicia Penal Acusatorio, con especialización en delitos patrimoniales y financieros para el sector bancario y empresarial."],
  ["Derecho Administrativo", "Consultoría preventiva y representación en procedimientos administrativos por responsabilidad en el uso de datos personales."],
];

const PARTNERS = [
  {
    name: "José Antonio Lechuga Vega",
    role: "Socio Fundador",
    photo: "profile_picture.jpg",
    bio: "45 años de experiencia ininterrumpida en la abogacía. Supervisa personalmente todos los juicios encomendados al despacho y cuenta con especialización en la Carrera Judicial Federal impartida por la SCJN.",
  },
  {
    name: "Esperanza Rivera Andrés",
    role: "Socia Fundadora",
    photo: "profile_picture-8.jpg",
    bio: "43 años de trayectoria. Directora del Área Administrativa, especialista en contabilidad, derecho fiscal y finanzas corporativas.",
  },
];

const LAWYERS = [
  ["Salomón Borbón Flores", "Abogado", "profile_picture-1.jpg"],
  ["Lourdes Amaral Fernández", "Abogada", "profile_picture-2.jpg"],
  ["Martín Eduardo Rueda Sandoval", "Abogado", "profile_picture-3.jpg"],
  ["Sylvia Alicia Padilla Haro", "Abogada", "profile_picture-4.jpg"],
  ["Rosa María Flores Morales", "Abogada", "profile_picture-5.jpg"],
  ["Fernando Heriberto Cataño Cedillo", "Abogado", "profile_picture-6.jpg"],
  ["Sebastián López Rodríguez", "Abogado", "profile_picture-7.jpg"],
];

const HISTORY = [
  ["Octubre 1992", "Fundación", "Lechuga Abogados se constituyó con el objetivo de ser un despacho jurídico comprometido con la excelencia profesional."],
  ["Enero 1994", "Expansión de especializaciones", "El despacho amplió sus áreas de práctica e incorporó el derecho mercantil, penal y familiar."],
  ["Enero 2020", "Pagos digitales", "Incorporamos la especialización en asesoría legal y litigio relacionados con transacciones electrónicas y tecnologías de pago."],
  ["Agosto 2023", "Área de tecnología e innovación", "Un departamento dedicado a explorar y desarrollar herramientas que mejoren la eficiencia de nuestros servicios."],
];

const FOOTER_LINKS = [
  { label: "Firma", href: "#firma" },
  { label: "Equipo", href: "#equipo" },
  { label: "Blog", href: `${SITE}/blog/` },
  { label: "Aviso de Privacidad", href: `${SITE}/aviso` },
  { label: "English", href: SITE, lang: "en" },
  { label: "LinkedIn", href: LINKEDIN },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="Lechuga Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo.svg`}
        alt="Lechuga Abogados"
        width={200}
        height={92}
        loading={footer ? "lazy" : "eager"}
        className={footer ? "h-[80px] w-auto md:h-[92px]" : "h-[64px] w-auto lg:h-[92px]"}
      />
    </a>
  );
}

export default function LechugaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-[#F7F4EC] font-[family-name:var(--s56-body)] text-[#22201F] selection:bg-[#727B34] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#F7F4EC]"
        scrolledClassName="shadow-[0_1px_0_#E3DCC8,0_12px_28px_-20px_rgba(34,32,31,0.4)]"
        innerClassName={`${WRAP} flex h-[88px] items-center justify-between lg:h-[120px]`}
        linkClassName="text-[17px] font-medium text-[#22201F]"
        panelClassName="bg-[#F7F4EC] text-[#22201F] font-[family-name:var(--s56-body)]"
        panelLinkClassName="font-[family-name:var(--s56-display)] text-3xl font-bold border-[#E3DCC8]"
        burgerClassName="bg-[#22201F]"
        actions={
          <>
            <a href={SITE} lang="en" hrefLang="en" className="link-u text-base text-[#4A4741]">
              English
            </a>
            <a href="#contacto" className="press bg-[#727B34] px-6 py-3 text-[17px] font-bold leading-[1.2] text-white hover:bg-[#565E26]">
              Contáctenos
            </a>
          </>
        }
      />

      <main>
        {/* Hero + datos */}
        <section id="firma" className="scroll-mt-28">
          <div className={`${WRAP} flex flex-col gap-14 pb-16 pt-10 lg:gap-[72px] lg:pb-[72px] lg:pt-16`}>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-16">
              <HeroIntro className="flex flex-col">
                <HeroItem as="h1" blur className="font-[family-name:var(--s56-display)] text-[clamp(3rem,5.6vw,5rem)] font-bold leading-none tracking-[-1px]">
                  Servicios legales de excelencia.
                </HeroItem>
                <HeroItem as="p" className="mt-7 max-w-[540px] text-[19px] leading-[1.55] text-[#4A4741] md:text-[21px] md:leading-8">
                  Asesoría jurídica preventiva y precontenciosa, y litigio civil, mercantil, financiero, concursal, administrativo, penal, constitucional y familiar.
                </HeroItem>
                <HeroItem className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <a href="#contacto" className="press bg-[#727B34] px-8 py-[17px] text-lg font-bold leading-[1.2] text-white hover:bg-[#565E26]">
                    Contáctenos
                  </a>
                  <a href="#areas" className="nudge flex items-center gap-2.5 text-lg font-bold">
                    Áreas de práctica
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </HeroItem>
              </HeroIntro>
              <div className="grid grid-cols-[300fr_240fr] gap-3 sm:gap-5 lg:pb-10">
                <MediaReveal className="relative mt-10 aspect-[300/440] w-full overflow-hidden" delay={0.2}>
                  <Image src={`${IMG}/justicia.jpg`} alt="Pintura de la Justicia con los ojos vendados" fill preload sizes="(min-width: 1024px) 300px, 55vw" className="object-cover" />
                </MediaReveal>
                <div className="flex flex-col gap-3 sm:gap-5">
                  <MediaReveal className="relative aspect-[240/250] w-full overflow-hidden" delay={0.3}>
                    <Image src={`${IMG}/cuadro_materias_1.jpg`} alt="Pintura con las palabras Penal, Mercantil y Amparo" fill sizes="(min-width: 1024px) 240px, 45vw" className="object-cover" />
                  </MediaReveal>
                  <MediaReveal className="relative aspect-[240/250] w-full overflow-hidden" delay={0.4}>
                    <Image src={`${IMG}/cuadro_materias_2.jpg`} alt="Pintura con las palabras Civil y Familiar" fill sizes="(min-width: 1024px) 240px, 45vw" className="object-cover" />
                  </MediaReveal>
                </div>
              </div>
            </div>

            <Stagger as="dl" className="grid gap-8 border-t-2 border-[#D7C893] pt-8 md:grid-cols-3 md:gap-12" gap={0.08}>
              {[
                ["1992", "Año de constitución del despacho"],
                ["45 años", "De ejercicio ininterrumpido de nuestro socio fundador"],
                ["+10", "Despachos de litigio gestados por abogados formados en la firma"],
              ].map(([v, k]) => (
                <StaggerItem key={v} className="flex flex-row-reverse items-center justify-end gap-5">
                  <dt className="max-w-[200px] text-base leading-[22px] text-[#4A4741]">{k}</dt>
                  <dd className="shrink-0 font-[family-name:var(--s56-display)] text-[clamp(2.5rem,3.4vw,3rem)] font-bold leading-[1.2] text-[#565E26]">
                    <CountUp value={v} />
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-28 bg-white">
          <div className={`${WRAP} grid gap-14 py-20 lg:grid-cols-[380px_1fr] lg:gap-20 lg:pb-32 lg:pt-[120px]`}>
            <div className="flex flex-col">
              <Reveal className="flex flex-col gap-6">
                <h2 className={H2}>Áreas de práctica</h2>
                <p className="text-lg leading-[29px] text-[#4A4741]">
                  La experiencia de Lechuga Abogados está construida por el desarrollo profesional de cada uno de sus colaboradores, la constante actualización y capacitación en las diversas especialidades y la complejidad de cada asunto que nos es encomendado.
                </p>
              </Reveal>
              <MediaReveal onView delay={0.05} className="relative mt-10 hidden h-[354px] w-full overflow-hidden lg:block">
                <Image src={`${IMG}/cuadro_columna.jpg`} alt="Pintura de una columna en tonos ocre y rosa" fill sizes="380px" className="object-cover" />
              </MediaReveal>
            </div>
            <Stagger className="grid gap-x-14 gap-y-10 md:grid-cols-2 lg:gap-y-14" gap={0.06}>
              {AREAS.map(([t, d]) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t-2 border-[#D7C893] pt-6">
                  <h3 className="font-[family-name:var(--s56-display)] text-[27px] font-bold leading-[31px]">{t}</h3>
                  <p className="text-[17px] leading-[26px] text-[#4A4741]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Banda de pinturas */}
        <MediaReveal onView delay={0} className="relative h-[200px] overflow-hidden md:h-[280px] lg:h-[337px]">
          <Image src={`${IMG}/frame-lechuga.jpg`} alt="Serie de pinturas del despacho" fill sizes="100vw" className="object-cover" />
        </MediaReveal>

        {/* Equipo */}
        <section id="equipo" className="scroll-mt-28 bg-[#22201F] text-white">
          <div className={`${WRAP} py-20 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Equipo</h2>
              <p className="max-w-[680px] text-lg leading-[1.55] text-[#CFCAC0] md:text-[19px] md:leading-[29px]">
                Nuestro equipo se distingue por su alta competencia, profesionalismo y especialización en diversas áreas del Derecho, con un compromiso compartido con la excelencia y la formación continua.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-10" gap={0.1}>
              {PARTNERS.map((p) => (
                <StaggerItem key={p.name} as="article" className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-7">
                  <div className="img-zoom relative aspect-[240/300] w-full shrink-0 sm:w-[200px] xl:w-[240px]">
                    <Image src={`${IMG}/${p.photo}`} alt={p.name} fill sizes="(min-width: 1280px) 240px, (min-width: 640px) 200px, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-[family-name:var(--s56-display)] text-[28px] font-bold leading-8">{p.name}</h3>
                    <p className="text-base font-bold text-[#D7C893]">{p.role}</p>
                    <p className="mt-2 text-base leading-[25px] text-[#CFCAC0]">{p.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger as="ul" className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:mt-[72px] lg:grid-cols-7" gap={0.05}>
              {LAWYERS.map(([n, r, photo]) => (
                <StaggerItem key={n} as="li" className="flex flex-col gap-3">
                  <div className="img-zoom relative h-[210px] w-full">
                    <Image src={`${IMG}/${photo}`} alt={n} fill sizes="(min-width: 1024px) 158px, (min-width: 768px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <h3 className="font-[family-name:var(--s56-display)] text-lg font-bold leading-[22px]">{n}</h3>
                  <p className="text-[15px] text-[#B9B3A7]">{r}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12">
              <a href={`${SITE}/equipo`} className="nudge inline-flex items-center gap-2.5 text-lg font-bold text-[#D7C893]">
                Conozca a todo el equipo
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Nuestra historia */}
        <section id="historia" className="scroll-mt-28">
          <div className={`${WRAP} py-20 lg:pb-32 lg:pt-[120px]`}>
            <Reveal as="h2" className={H2}>
              Nuestra historia
            </Reveal>
            <Stagger as="ol" className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
              {HISTORY.map(([date, t, d]) => (
                <StaggerItem key={date} as="li" className="flex flex-col border-t-2 border-[#727B34] pt-7">
                  <p className="text-base font-bold text-[#565E26]">{date}</p>
                  <h3 className="mt-3.5 font-[family-name:var(--s56-display)] text-[26px] font-bold leading-[30px]">{t}</h3>
                  <p className="mt-3.5 text-[17px] leading-[26px] text-[#4A4741]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contáctenos */}
        <section id="contacto" className="scroll-mt-28 bg-white">
          <div className={`${WRAP} grid items-center gap-14 py-20 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-24 lg:py-[120px]`}>
            <div className="flex flex-col">
              <Reveal className="flex flex-col gap-5">
                <h2 className={H2}>Contáctenos</h2>
                <p className="max-w-[520px] text-lg leading-[1.55] text-[#4A4741] md:text-[19px] md:leading-[29px]">
                  ¿Requiere más información? No dude en contactarnos a través de alguno de los siguientes canales.
                </p>
              </Reveal>
              <Stagger className="mt-12 grid gap-10 sm:grid-cols-2" gap={0.07}>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={Phone}>Teléfono</Label>
                  <div className="flex flex-col text-xl font-medium leading-7">
                    <a href="tel:+525556380011" className="link-u w-fit">55 5638 0011</a>
                    <a href="tel:+525552811430" className="link-u w-fit">55 5281 1430</a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={EnvelopeSimple}>Correo</Label>
                  <a href="mailto:contacto@lechugaabogados.com" className="link-u w-fit break-all text-xl font-medium leading-7 sm:break-normal">contacto@lechugaabogados.com</a>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={MapPin}>Oficina</Label>
                  <a href="https://maps.app.goo.gl/twE5HtwpqDrhdD1t7" target="_blank" rel="noopener noreferrer" className="link-u w-fit text-xl font-medium leading-7">
                    Aristóteles 77, piso 4
                    <br />
                    Polanco Chapultepec, Ciudad de México
                  </a>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5">
                  <Label Icon={LinkedinLogo}>Redes sociales</Label>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link-u w-fit text-xl font-medium leading-7">LinkedIn: Lechuga Abogados</a>
                </StaggerItem>
              </Stagger>
            </div>
            <MediaReveal onView delay={0.1} className="img-zoom relative aspect-[440/415] w-full overflow-hidden">
              <Image src={`${IMG}/cuadro_la.jpg`} alt="Pintura abstracta en tonos azules y ocres" fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E3DCC8]">
        <div className={`${WRAP} flex flex-col gap-8 pb-28 pt-12 lg:pb-10`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo footer />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-base font-medium">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      lang={l.lang}
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="link-u"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-[#E3DCC8] pt-5 text-[15px] text-[#5E5A52] md:flex-row md:justify-between">
            <p>© 2026 Lechuga Abogados, S.C.</p>
            <p>Aristóteles 77, piso 4, Polanco Chapultepec, Ciudad de México · 55 5638 0011</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Label({ Icon, children }: { Icon: typeof Phone; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-base font-bold text-[#565E26]">
      <Icon size={20} className="text-[#727B34]" aria-hidden="true" />
      {children}
    </p>
  );
}
