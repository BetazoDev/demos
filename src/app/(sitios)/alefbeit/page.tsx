import type { Metadata } from "next";
import Image from "next/image";
import { League_Spartan, Public_Sans } from "next/font/google";
import {
  AirplaneTilt,
  ArrowRight,
  ArrowUpRight,
  Bank,
  Briefcase,
  Broadcast,
  Buildings,
  ChartLineUp,
  Check,
  EnvelopeSimple,
  FacebookLogo,
  Fingerprint,
  GlobeHemisphereWest,
  GraduationCap,
  Handshake,
  Heart,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  Scales,
  Shield,
  TwitterLogo,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = League_Spartan({ subsets: ["latin"], variable: "--s57-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--s57-body" });

export const metadata: Metadata = {
  title: "ALEF-BEIT Abogados",
  description: "Despacho jurídico experto en telecomunicaciones, radiodifusión, energéticos, hidrocarburos, corporativo, financiero y mercantil.",
};

const IMG = "/sitios/alefbeit";
const SITE = "https://alefbeit.mx";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s57-display)] font-semibold";
const H2 = `${DISPLAY} text-[clamp(2.25rem,3.4vw,2.875rem)] leading-[1.05] tracking-[-0.8px] text-[#001E47]`;
const ORANGE_BTN = "press bg-[#FF6900] font-semibold text-[#001E47] hover:bg-[#FF8126]";

const NAV = [
  { label: "Áreas de Práctica", href: "#areas" },
  { label: "IFT", href: "#ift" },
  { label: "Pro Bono", href: `${SITE}/probono/` },
  { label: "Preguntas frecuentes", href: `${SITE}/preguntas-frecuentes/` },
  { label: "Blog", href: "#publicaciones" },
];

const STATS = [
  { n: "+19", l: ["Años de experiencia"] },
  { n: "+882", l: ["Casos de éxito de personas", "físicas y morales"] },
  { n: "+23", l: ["Cursos y actualizaciones"] },
];

const DISTINCTIONS = [
  { Icon: Scales, t: "Nuestra participación en el sistema legal y judicial para su mejoramiento" },
  { Icon: Heart, t: "Patrocinio gratuito en causas de interés público (Pro Bono)" },
  { Icon: GraduationCap, t: "La continua capacitación de nuestros abogados" },
];

const AREAS = [
  { Icon: Broadcast, t: "Telecomunicaciones y Radiodifusión", featured: true },
  { Icon: Handshake, t: "Civil y Mercantil" },
  { Icon: Bank, t: "Fiscal y Administrativo" },
  { Icon: Fingerprint, t: "Marcas y Patentes" },
  { Icon: AirplaneTilt, t: "Migratorio" },
  { Icon: GlobeHemisphereWest, t: "Inversión Extranjera" },
  { Icon: ChartLineUp, t: "Financiero" },
  { Icon: Shield, t: "Penal" },
  { Icon: Scales, t: "MASC" },
  { Icon: UsersThree, t: "Familiar" },
  { Icon: Briefcase, t: "Laboral" },
  { Icon: Buildings, t: "Gobierno Corporativo" },
];

const IFT_LINKS = [
  { label: "Trámites ante el IFT", href: `${SITE}/ift/` },
  { label: "Monto de los Derechos Federales", href: `${SITE}/derechos-federales-crt/` },
  { label: "Licitaciones ante el IFT", href: `${SITE}/licitaciones-ante-el-ift/` },
];

const SERVICES = [
  "Concesión Única para Uso Comercial para servicios de internet, televisión restringida y telefonía",
  "Representación en licitaciones de bandas de frecuencia, radio FM o AM y canales de televisión",
  "Concesiones sociales y comunitarias para adquirir frecuencias de radio FM",
  "Autorizaciones para Operadora Móvil Virtual, reventa de servicios y uso de satélites extranjeros",
  "Prórrogas, cesiones y renuncia a títulos de concesión y autorizaciones",
  "Homologación de equipos de telecomunicaciones",
  "Cumplimiento de la regulación para concesionarios y autorizados",
  "Defensa legal en procedimientos de verificación y sancionatorios",
];

const CLIENTS = [
  ["grupo-modelo", "Grupo Modelo"],
  ["colliers", "Colliers International"],
  ["global-infra", "Global Infra"],
  ["diprem", "Diprem"],
  ["fol", "FOL"],
  ["satelite", "Satelite"],
  ["crc", "CRC"],
  ["seiza", "Seiza"],
  ["alicamedios", "Alica Medios"],
  ["callmyway", "Call My Way"],
  ["baja-connect", "Baja Connect"],
  ["spot-uno", "Spot Uno"],
  ["mera", "Mera Corporation"],
  ["sicrea", "Sicrea"],
];

const POSTS = [
  { t: "Diferencias entre la Concesión y Autorización para WISP", href: `${SITE}/concesion-y-autorizacion-wisp/` },
  { t: "El consentimiento informado", href: `${SITE}/el-consentimiento-informado/` },
  { t: "Contratación de extranjeros en México", href: `${SITE}/contratar-extranjeros-en-mexico/` },
  { t: "Obligaciones del Concesionario ISP/WISP", href: `${SITE}/obligaciones-del-concesionario/` },
  { t: "Cuando no se deja testamento", href: `${SITE}/sucesion-legitima/` },
  { t: "¿Qué permisos necesito para abrir un negocio en México?", href: `${SITE}/apertura-de-negocio/` },
];

const FOOTER_COLS = [
  {
    h: "Áreas de Práctica",
    links: [
      ["Migratorio", `${SITE}/migratorio/`],
      ["Familiar", `${SITE}/derecho-familiar/`],
      ["Penal", `${SITE}/penal/`],
      ["Telecomunicaciones y Radiodifusión", "#ift"],
      ["Hidrocarburos", `${SITE}/servicios/`],
      ["Compliance", `${SITE}/servicios/`],
      ["Pro Bono", `${SITE}/probono/`],
    ],
  },
  {
    h: "Recursos",
    links: [
      ["Publicaciones", "#publicaciones"],
      ["Preguntas frecuentes", `${SITE}/preguntas-frecuentes/`],
      ["Comunicados", `${SITE}/comunicados/`],
      ["Bolsa de trabajo", `${SITE}/bolsa-de-trabajo/`],
      ["Contacto", "#contacto"],
    ],
  },
];

const SOCIAL = [
  { Icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/pg/a.beit.mx/posts/" },
  { Icon: TwitterLogo, label: "Twitter", href: "https://twitter.com/ALEFBEIT_" },
  { Icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/company/alef-beit" },
  { Icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/alef.beit/" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="ALEF-BEIT Abogados, inicio" className="block w-fit">
      <Image
        src={`${IMG}/${footer ? "logo-footer" : "logo"}.svg`}
        alt=""
        width={173}
        height={45}
        loading={footer ? "lazy" : "eager"}
        className={footer ? "h-[45px] w-[173px]" : "h-auto w-[150px] lg:w-[173px]"}
      />
    </a>
  );
}

export default function AlefBeitPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s57-body)] text-[#001E47] selection:bg-[#FF6900] selection:text-[#001E47]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#001E47]"
        scrolledClassName="shadow-[0_1px_0_rgba(255,255,255,0.08),0_14px_30px_-20px_rgba(0,0,0,0.6)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-24`}
        linkClassName="text-[15px] font-medium text-[#D5DDEA] transition-[color] duration-200 hover:text-white"
        panelClassName="bg-[#001E47] text-white font-[family-name:var(--s57-body)]"
        panelLinkClassName="font-[family-name:var(--s57-display)] text-3xl font-semibold"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className={`${ORANGE_BTN} px-6 py-3.5 text-[15px] leading-none`}>
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#001E47] text-white">
          <div className="grid lg:h-[600px] lg:grid-cols-[1fr_minmax(0,620px)]">
            <HeroIntro className="flex flex-col justify-center gap-7 px-5 pb-16 pt-10 md:px-8 lg:py-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-[72px]">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.75rem,5.3vw,4.75rem)] leading-none tracking-[-1.5px]`}>
                <span className="block">Firma de abogados</span>
                <span className="block">en México</span>
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-[17px] leading-[1.6] text-[#C5D0E0] md:text-[19px] md:leading-[29px]">
                Despacho jurídico experto en telecomunicaciones, radiodifusión, energéticos, hidrocarburos, corporativo, financiero y mercantil.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
                <a href="#contacto" className={`${ORANGE_BTN} nudge inline-flex items-center gap-3 px-[30px] py-[18px] text-base leading-none`}>
                  Contáctanos
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href={`${SITE}/conoce-tus-derechos/`}
                  className="press inline-flex items-center border border-white/40 px-[29px] py-[17px] text-base font-medium leading-none text-white hover:border-white hover:bg-white/5"
                >
                  Conoce tus Derechos
                </a>
              </HeroItem>
            </HeroIntro>
            <MediaReveal className="relative h-[300px] overflow-hidden sm:h-[420px] lg:h-full" delay={0.25}>
              <Image
                src={`${IMG}/hero-servicios-empresariales.jpg`}
                alt="Fachada de vidrio de un edificio corporativo"
                fill
                preload
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
              />
            </MediaReveal>
          </div>

          {/* Cifras */}
          <div className="border-t border-white/[0.12]">
            <Stagger as="dl" gap={0.08} className={`${WRAP} grid gap-6 py-10 md:grid-cols-3 lg:pb-[52px] lg:pt-11`}>
              {STATS.map((s) => (
                <StaggerItem key={s.n} className="flex flex-row-reverse items-center justify-end gap-5">
                  <dt className="text-base leading-[22px] text-[#C5D0E0]">
                    {s.l.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </dt>
                  <dd className={`${DISPLAY} text-[clamp(2.75rem,3.75vw,3.375rem)] leading-none tracking-[-1px] text-[#FF6900]`}>
                    <CountUp value={s.n} />
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Firma */}
        <section id="firma" className="scroll-mt-24">
          <div className={`${WRAP} grid items-center gap-12 py-20 lg:grid-cols-[500px_1fr] lg:gap-24 lg:pb-[130px] lg:pt-[150px]`}>
            <MediaReveal onView delay={0} className="relative aspect-[500/600] w-full overflow-hidden max-lg:max-h-[520px]">
              <Image src={`${IMG}/oficina1.jpg`} alt="Biblioteca jurídica en la oficina del despacho" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col">
              <Reveal className="flex flex-col gap-6">
                <h2 className={`${H2} leading-[1.04]`}>¡Comprometidos con la sociedad!</h2>
                <p className="text-[17px] leading-[1.7] text-[#4A5260] md:text-lg md:leading-[30px]">
                  La especialización de nuestras áreas permite ser una herramienta sólida para evitar y resolver problemas que se generan tanto en la vida interna de las empresas como en las relaciones entre particulares. Las soluciones alcanzadas deben estar regidas siempre por valores humanos que promuevan la justicia y logren un Estado de Derecho.
                </p>
              </Reveal>
              <Reveal as="h3" delay={0.05} className={`${DISPLAY} mt-[52px] text-[26px] leading-tight`}>
                ¿Qué nos distingue?
              </Reveal>
              <Stagger as="ul" gap={0.07} className="mt-6 flex flex-col gap-5">
                {DISTINCTIONS.map(({ Icon, t }) => (
                  <StaggerItem key={t} as="li" className="flex items-center gap-5">
                    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-[#EEF1F5]">
                      <Icon size={26} className="text-[#174569]" aria-hidden="true" />
                    </span>
                    <span className="text-[17px] font-medium leading-[25px]">{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Áreas de Práctica */}
        <section id="areas" className="scroll-mt-24 bg-[#EEF1F5]">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Áreas de Práctica</h2>
              <p className="text-[17px] leading-[29px] text-[#4A5260] md:text-lg">La experiencia de nuestra firma se enfoca en las siguientes áreas:</p>
            </Reveal>
            <Stagger as="ul" gap={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {AREAS.map(({ Icon, t, featured }) => (
                <StaggerItem
                  key={t}
                  as="li"
                  className={`flex items-center gap-4 border-t-[3px] border-[#FF6900] p-5 sm:min-h-[150px] sm:flex-col sm:items-start sm:justify-between sm:gap-8 sm:p-7 lg:min-h-[172px] ${featured ? "bg-[#001E47] text-white" : "bg-white"}`}
                >
                  <Icon size={30} className={`shrink-0 ${featured ? "text-[#FF6900]" : "text-[#174569]"}`} aria-hidden="true" />
                  <h3 className="font-[family-name:var(--s57-display)] text-xl font-medium leading-[24px] sm:text-[23px] sm:leading-[26px]">
                    {featured ? (
                      <>
                        <span className="block">Telecomunicaciones</span>
                        <span className="block">y Radiodifusión</span>
                      </>
                    ) : (
                      t
                    )}
                  </h3>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal>
              <a href={`${SITE}/servicios/`} className="nudge inline-flex items-center gap-2.5 text-base font-semibold">
                <span className="link-u">Conoce más acerca de nuestros servicios</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Telecomunicaciones y Radiodifusión */}
        <section id="ift" className="relative scroll-mt-24 overflow-hidden bg-[#122934] text-white">
          <Parallax className="absolute inset-0" distance={36}>
            <Image src={`${IMG}/pasillo.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 bg-[#122934d6]" />
          <div className={`${WRAP} relative grid gap-14 py-20 lg:grid-cols-[470px_1fr] lg:gap-24 lg:py-[130px]`}>
            <Reveal className="flex flex-col gap-7">
              <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,2.875rem)] leading-[1.05] tracking-[-0.8px]`}>
                <span className="block">Telecomunicaciones</span>
                <span className="block">y Radiodifusión</span>
              </h2>
              <p className="text-[17px] leading-[1.7] text-[#C9D4DE] md:text-lg md:leading-[30px]">
                Asesoría integral en telecomunicaciones y radiodifusión, con el respaldo de una amplia experiencia en trámites y servicios legales ante el Instituto Federal de Telecomunicaciones (IFT).
              </p>
              <ul className="flex flex-col gap-3.5 pt-2 leading-[normal]">
                {IFT_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="nudge inline-flex items-center gap-2.5 text-base font-semibold">
                      <ArrowRight size={18} className="text-[#FF6900]" aria-hidden="true" />
                      <span className="link-u">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="flex flex-col gap-7">
              <Reveal as="h3" delay={0.06} className="font-[family-name:var(--s57-display)] text-[22px] font-medium leading-tight">
                Algunos de nuestros servicios
              </Reveal>
              <Stagger as="ul" gap={0.05} delay={0.08} className="grid gap-x-10 gap-y-[26px] sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <StaggerItem key={s} as="li" className="flex gap-3.5 text-base leading-6 text-[#E6ECF2]">
                    <Check size={18} className="mt-[3px] shrink-0 text-[#FF6900]" aria-hidden="true" />
                    {s}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-12 py-20 lg:pb-[110px] lg:pt-[120px]`}>
            <Reveal as="h2" className={`${DISPLAY} text-[clamp(2rem,2.9vw,2.5rem)] leading-[1.1] tracking-[-0.6px] text-[#001E47]`}>
              Algunos de nuestros clientes
            </Reveal>
            <Stagger as="ul" gap={0.04} className="grid grid-cols-2 border-l border-t border-[#E1E6EE] md:grid-cols-7">
              {CLIENTS.map(([f, n]) => (
                <StaggerItem key={f} as="li" y={10} className="flex h-[112px] items-center justify-center border-b border-r border-[#E1E6EE] px-6 py-7 md:px-3 lg:h-[132px] lg:px-[22px] lg:py-[30px]">
                  <span className="relative block h-full w-full">
                    <Image src={`${IMG}/client-${f}.png`} alt={n} fill sizes="(min-width: 768px) 130px, 45vw" className="object-contain" />
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Publicaciones */}
        <section id="publicaciones" className="scroll-mt-24 bg-[#EEF1F5]">
          <div className={`${WRAP} grid gap-12 py-20 lg:grid-cols-[340px_1fr] lg:gap-24 lg:pb-[120px] lg:pt-[110px]`}>
            <Reveal className="flex flex-col items-start gap-6">
              <h2 className={`${DISPLAY} text-[clamp(2rem,2.9vw,2.5rem)] leading-[1.075] tracking-[-0.6px]`}>Algunas de nuestras publicaciones</h2>
              <a href={`${SITE}/publicaciones/`} className="nudge inline-flex items-center gap-2.5 text-base font-semibold">
                <span className="link-u">Ir al blog</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
            <Stagger as="ul" gap={0.06} className="grid gap-4 sm:grid-cols-2">
              {POSTS.map((p) => (
                <StaggerItem key={p.t} as="li">
                  <a
                    href={p.href}
                    className="nudge flex h-full min-h-[112px] justify-between gap-5 bg-white px-7 py-[26px] transition-[box-shadow] duration-200 hover:shadow-[0_14px_30px_-20px_rgba(0,30,71,0.45)] lg:min-h-[128px]"
                  >
                    <span className="font-[family-name:var(--s57-display)] text-[21px] font-medium leading-[25px]">{p.t}</span>
                    <ArrowUpRight size={22} className="shrink-0 text-[#174569]" aria-hidden="true" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#001E47] text-white">
          <div className={`${WRAP} grid gap-14 py-20 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-[130px]`}>
            <div className="flex flex-col">
              <Reveal className="flex flex-col gap-[22px]">
                <h2 className={`${DISPLAY} text-[clamp(2.5rem,3.5vw,3.125rem)] leading-[1.1] tracking-[-0.8px]`}>Ponte en contacto</h2>
                <p className="max-w-[500px] text-[17px] leading-[1.7] text-[#C5D0E0] md:text-lg md:leading-[30px]">
                  Tu mensaje es muy importante para nosotros, y estaremos encantados de ayudarte. Cada consulta que recibimos es una oportunidad para brindarte la mejor asesoría.
                </p>
              </Reveal>
              <Stagger gap={0.07} className="mt-12 flex flex-col gap-7">
                <StaggerItem className="flex gap-[18px]">
                  <MapPin size={24} className="shrink-0 text-[#FF6900]" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#9FB0C8]">Oficina</p>
                    <p className="text-lg font-medium leading-[27px]">
                      Darwin 68, Oficina 601
                      <br />
                      Col. Anzures, Ciudad de México
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <Phone size={24} className="shrink-0 text-[#FF6900]" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#9FB0C8]">Teléfono y WhatsApp</p>
                    <a href="tel:+525585264268" className="link-u w-fit text-lg font-medium leading-[27px]">+52 55 8526 4268</a>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-[18px]">
                  <EnvelopeSimple size={24} className="shrink-0 text-[#FF6900]" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#9FB0C8]">Correo</p>
                    <a href="mailto:legal@alefbeit.mx" className="link-u w-fit text-lg font-medium leading-[27px]">legal@alefbeit.mx</a>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1} className="self-start">
              <DemoForm className="flex flex-col gap-[22px] bg-white p-6 text-[#001E47] sm:p-11" noteClassName="text-sm text-[#4A5260]">
                <h3 className={`${DISPLAY} text-[28px] leading-[normal]`}>¿Tienes una pregunta?</h3>
                <p className="text-base leading-[normal] text-[#4A5260]">Deja tu comentario.</p>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold leading-[normal]">Mensaje</span>
                  <textarea name="mensaje" rows={5} className={`${INPUT} h-[130px] resize-y py-3`} />
                </label>
                <button type="submit" className={`${ORANGE_BTN} w-full py-[18px] text-base leading-none`}>
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#122934] text-[#B9C6D0]">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-20 lg:pb-10`}>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_280px_280px] lg:gap-16">
            <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
              <Logo footer />
              <address className="flex flex-col text-[15px] not-italic leading-[26px]">
                <span>Darwin 68, Oficina 601</span>
                <span>Col. Anzures, Ciudad de México</span>
                <a href="tel:+525585264268" className="link-u w-fit">+52 55 8526 4268</a>
                <a href="mailto:legal@alefbeit.mx" className="link-u w-fit">legal@alefbeit.mx</a>
              </address>
              <ul className="flex gap-3">
                {SOCIAL.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="press flex h-10 w-10 items-center justify-center border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.06]"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {FOOTER_COLS.map((col) => (
              <nav key={col.h} aria-label={col.h} className="flex flex-col gap-3.5">
                <h2 className={`${DISPLAY} text-[19px] leading-tight text-white`}>{col.h}</h2>
                <ul className="flex flex-col gap-3.5 text-[15px] leading-[normal]">
                  {col.links.map(([l, h]) => (
                    <li key={l}>
                      <a href={h} className="link-u">{l}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="flex flex-col gap-3 border-t border-white/[0.12] pt-7 text-sm text-[#9FB0BC] sm:flex-row sm:justify-between">
            <p>© 2026 ALEF-BEIT · Todos los derechos reservados.</p>
            <a href={`${SITE}/aviso-de-privacidad/`} className="link-u w-fit">Aviso de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT = "w-full border border-[#CBD3DF] bg-[#F5F7FA] px-4 text-base text-[#001E47] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#001E47] focus:shadow-[0_0_0_3px_rgba(0,30,71,0.12)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold leading-[normal]">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-[50px]`} />
    </label>
  );
}
