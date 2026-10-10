import type { Metadata } from "next";
import Image from "next/image";
import { Prata, Rethink_Sans } from "next/font/google";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BookOpenIcon,
  DownloadSimpleIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  FileTextIcon,
  HandshakeIcon,
  HeartIcon,
  IdentificationCardIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  MegaphoneIcon,
  PhoneIcon,
  ScalesIcon,
  StampIcon,
  TelevisionSimpleIcon,
  TrophyIcon,
  TwitterLogoIcon,
  UserPlusIcon,
  UsersThreeIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Prata({ subsets: ["latin"], weight: "400", variable: "--s30-display" });
const body = Rethink_Sans({ subsets: ["latin"], variable: "--s30-body" });

export const metadata: Metadata = {
  title: "Barra Mexicana, Colegio de Abogados",
  description: "Fundada en 1922. Sus bases se firmaron el 12 de octubre, en la clausura del Segundo Congreso Jurídico Nacional.",
};

const IMG = "/sitios/30-bma";
const SITE = "https://www.bma.org.mx";
const DISPLAY = "font-[family-name:var(--s30-display)]";
const H2 = `${DISPLAY} text-[clamp(2.125rem,3.1vw,2.75rem)] leading-[1.16]`;
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Directorios", href: `${SITE}/directorios/` },
  { label: "Circulares", href: "#circulares" },
  { label: "Revista", href: "#revista" },
  { label: "Intranet", href: "https://intranet.bma.org.mx/" },
];

const REFORMAS = ["Reforma Ley de Amparo", "Reforma Electoral", "Reforma Judicial"];

const RECURSOS = [
  { t: "Barrista Certificado", Icon: IdentificationCardIcon, d: "Conoce a los barristas certificados." },
  { t: "Fundación Barra Mexicana", Icon: HeartIcon, d: "Estándares de Trabajo Pro Bono." },
  { t: "Documentos BMA", Icon: FileTextIcon, d: "Descarga los documentos desde el sitio web." },
  { t: "Convenios y alianzas", Icon: HandshakeIcon, d: "Entérate de los convenios y alianzas que ha firmado la Barra Mexicana y de cómo puedes aprovecharlos." },
  { t: "Normatividad", Icon: BookOpenIcon, d: "Encuentra la información y noticias más relevantes." },
  { t: "Premios", Icon: TrophyIcon, d: "Conoce quiénes han sido ganadores de cada uno de los premios." },
  { t: "Junta de Honor", Icon: ScalesIcon, d: "Conoce todo sobre nuestra Junta de Honor." },
  { t: "Resoluciones Consejo Directivo", Icon: StampIcon, d: "Conoce las últimas resoluciones de nuestro Consejo Directivo." },
  { t: "Comunicados de Prensa", Icon: MegaphoneIcon, d: "Conoce las últimas noticias sobre la Barra Mexicana, Colegio de Abogados, A.C." },
  { t: "Igualdad y género en la BMA", Icon: UsersThreeIcon, d: "Encuentra las últimas noticias de equidad de género." },
  { t: "Derechos de las audiencias", Icon: TelevisionSimpleIcon, d: "Conoce los Derechos de las audiencias en México." },
];

const TRADICION = [
  ["1760", "Se funda el Ilustre y Real Colegio de Abogados de México, primero en la Nueva España e Iberoamérica."],
  ["1829", "Cambia su nombre por el de Ilustre y Nacional Colegio de Abogados de México."],
  ["1886", "Se crea la Sociedad de Abogados de México, que se desintegró con la Revolución."],
  ["1890", "Se funda la Academia Mexicana de Jurisprudencia y Legislación."],
  ["1917", "Se crea la Orden Mexicana de Abogados, que diez años después se fusionó a la Barra Mexicana."],
  ["1922", "Se funda La Barra Mexicana de Abogados, hoy Barra Mexicana, Colegio de Abogados."],
];

const EVENTOS = [
  { dia: "12", com: "Comisión de Derecho Agrario", t: "Reflexiones sobre la Propiedad Social en el México actual", d: "17:00 h · Auditorio Isidro Fabela, Facultad de Derecho de la UNAM · Presencial y gratuito" },
  { dia: "13", com: "Comisión de Derecho Civil y Comisión Ciudad de México", t: "Hablemos de Negligencia y Derecho Aplicable al Ejercicio Médico", d: "2:30 PM, comida · University Club, Paseo de la Reforma 150, Col. Juárez" },
  { dia: "14", com: "Comisión de Derecho Empresarial y Comisión de Jóvenes Abogados", t: "Litigio Transfronterizo México - EE. UU.: emplazamiento y obtención de pruebas", d: "9:00 AM · Auditorio de la BMA, Varsovia 1, Col. Juárez · Gratuito" },
  { dia: "14", com: "Comida", t: "Mujeres Barristas", d: "2:00 PM · Marriott Reforma, Salón Rufino Tamayo" },
  { dia: "20", com: "Comisión de Derecho Empresarial", t: "Un nuevo partido en competencia económica: México investiga la competencia en el fútbol profesional", d: "8:00 AM, desayuno · University Club, Paseo de la Reforma 150, Col. Juárez" },
  { dia: "21", com: "Comisión de Derecho Fiscal", t: "¿Interpretación auténtica o norma nueva? El precedente del TFJA sobre la CUCA frente a la reforma fiscal 2027", d: "2:30 PM, comida · University Club, Paseo de la Reforma 150, Col. Juárez" },
];

const CIRCULARES = [
  ["Circular No. 19/2026", "Vacaciones Personal BMA."],
  ["Circular No. 18/2026", "Registro de Candidatos al Premio Nacional de Jurisprudencia 2026."],
  ["Circular No. 17/2026", "Home office del personal administrativo de la BMA."],
];

const MEDIOS = [
  { src: "log1.png", alt: "Video BMA", w: 190, h: 33 },
  { src: "fbm.png", alt: "FBM", w: 90, h: 44 },
  { src: "log2.png", alt: "BMA-TV.MX", w: 190, h: 30 },
  { src: "log3.png", alt: "BMA te informa", w: 190, h: 24 },
  { src: "cblanco-ropped-Logo-Fondo-Blanco.png", alt: "", w: 52, h: 46 },
];

const PHONES = ["55 5208-3115", "55 5208-1355", "55 5525-2485"];

const REDES = [
  { label: "Twitter", href: "https://twitter.com/BMA_Abogados", Icon: TwitterLogoIcon },
  { label: "Facebook", href: "https://www.facebook.com/BarraMexicanaColegioDeAbogadosAc", Icon: FacebookLogoIcon },
  { label: "Instagram", href: "https://www.instagram.com/bma_ac", Icon: InstagramLogoIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/81535008/admin/feed/posts/", Icon: LinkedinLogoIcon },
  { label: "YouTube", href: "http://www.youtube.com/@barramexicanacolegiodeabog3503", Icon: YoutubeLogoIcon },
];

const tel = (n: string) => `tel:+52${n.replace(/[\s-]/g, "")}`;

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Barra Mexicana, Colegio de Abogados, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="BMA, Barra Mexicana Colegio de Abogados" width={168} height={80} preload className={`w-auto ${className}`} />
    </a>
  );
}

export default function BmaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s30-body)] text-[#111111] selection:bg-[#E50C0C] selection:text-white`}
    >
      <SiteNav
        logo={<Logo className="h-[60px] lg:h-[80px]" />}
        links={NAV}
        className="bg-[#0B0B0B]"
        scrolledClassName="shadow-[0_1px_0_rgba(255,255,255,0.08)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-10 lg:h-[104px] lg:[&>nav]:ml-auto lg:[&>nav>ul]:gap-10`}
        linkClassName="text-[15px] font-medium text-white"
        panelClassName="bg-[#0B0B0B] text-white font-[family-name:var(--s30-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl`}
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press bg-[#E50C0C] px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#C40A0A]">
            Contacto
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#0B0B0B] text-white lg:min-h-[600px] lg:grid-cols-[54.2%_1fr]">
          <HeroIntro className="flex flex-col justify-center gap-7 px-5 pb-16 pt-12 md:px-8 lg:pb-[88px] lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-12 lg:pt-16">
            <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.125]`}>
              Barra Mexicana,
              <br />
              Colegio de Abogados
            </HeroItem>
            <HeroItem as="p" className="max-w-[500px] text-[17px] leading-7 text-[#C9C9C9] md:text-lg">
              Fundada en 1922. Sus bases se firmaron el 12 de octubre, en la clausura del Segundo Congreso Jurídico Nacional.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#servicios" className="press nudge flex items-center gap-2.5 bg-[#E50C0C] px-7 py-4 text-[15px] font-semibold hover:bg-[#C40A0A]">
                Nuevo ingreso
                <ArrowRightIcon size={16} aria-hidden="true" />
              </a>
              <a href="#nosotros" className="press border border-white/40 px-7 py-[15px] text-[15px] font-semibold hover:border-white hover:bg-white/10">
                Nosotros
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[360px] overflow-hidden sm:h-[460px] lg:h-auto" delay={0.25}>
            <Image src={`${IMG}/consejeras-foto.jpg`} alt="Consejeras BMA 2026" fill preload sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
            <p className="absolute bottom-6 left-6 bg-[#0B0B0B]/80 px-3.5 py-2.5 text-sm font-medium">Consejeras BMA 2026</p>
          </MediaReveal>
        </section>

        {/* Reformas */}
        <section aria-label="Reformas" className="bg-[#6A0E12] text-white">
          <Stagger className={`${WRAP} grid lg:grid-cols-3`} gap={0.07}>
            {REFORMAS.map((r, i) => (
              <StaggerItem
                key={r}
                className={`flex items-center justify-between gap-6 border-white/20 py-7 lg:h-[112px] lg:py-0 ${i < 2 ? "border-b lg:border-b-0 lg:border-r" : ""} ${i === 0 ? "lg:pr-10" : i === 1 ? "lg:px-10" : "lg:pl-10"}`}
              >
                <p className={`${DISPLAY} text-[21px] md:text-2xl lg:text-[21px] xl:text-2xl`}>{r}</p>
                <ArrowUpRightIcon size={22} aria-hidden="true" className="shrink-0" />
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Información y servicios */}
        <section id="servicios" className="scroll-mt-28 bg-white">
          <div className={`${WRAP} py-20 lg:py-[120px]`}>
            <Reveal as="h2" className={H2}>
              Información y servicios
            </Reveal>
            <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.04}>
              <StaggerItem as="article" className="flex flex-col gap-[18px] bg-[#6A0E12] p-7 text-white lg:min-h-[236px]">
                <UserPlusIcon size={28} aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-[23px]">Nuevo ingreso</h3>
                <p className="text-[15px] leading-[23px] text-[#F1DADB]">Conoce las ventajas de ser miembro de la Barra Mexicana, Colegio de Abogados.</p>
              </StaggerItem>
              {RECURSOS.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-[18px] bg-[#F5F3F0] p-7 lg:min-h-[236px]">
                  <Icon size={28} aria-hidden="true" className="text-[#E50C0C]" />
                  <h3 className="text-lg font-semibold leading-[23px]">{t}</h3>
                  <p className="text-[15px] leading-[23px] text-[#54595F]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="nosotros" className="scroll-mt-28 bg-[#F5F3F0]">
          <div className={`${WRAP} flex flex-col gap-[88px] pb-20 pt-20 lg:pb-[120px] lg:pt-32`}>
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14 xl:grid-cols-[504px_1fr] xl:gap-24">
              <MediaReveal onView className="relative aspect-[504/388] w-full overflow-hidden" delay={0}>
                <Image src={`${IMG}/mazo.png`} alt="Mazo de juez y balanza de la justicia" fill sizes="(min-width: 1280px) 504px, (min-width: 1024px) 420px, 100vw" className="scale-[1.043] object-cover" />
              </MediaReveal>
              <div className="flex flex-col gap-6">
                <Reveal as="h2" className={H2}>
                  ¿Quiénes somos?
                </Reveal>
                <Reveal delay={0.06} className="flex flex-col gap-6">
                  <p className="text-[17px] leading-7 text-[#2B2B2B]">
                    La Barra Mexicana, Colegio de Abogados se fundó en 1922 con el nombre de La Barra Mexicana de Abogados. Las bases que debían regirla se firmaron el 12 de octubre de ese año, en el marco de la clausura del Segundo Congreso Jurídico Nacional. Días después, el 29 de diciembre, la Asociación quedó formalmente constituida al firmar la escritura notables abogados de la época.
                  </p>
                  <p className="text-base leading-[26px] text-[#54595F]">
                    Entre sus fines: velar por el buen nombre de la profesión, vigilar que el ejercicio de los abogados se ajuste a la ley, a los valores del Derecho y a los principios éticos, y velar por el decoro y la dignidad de la abogacía.
                  </p>
                  <a href={`${SITE}/nostros/`} className="nudge flex w-fit items-center gap-2.5 pt-2 text-[15px] font-semibold text-[#0B0B0B]">
                    Nosotros
                    <ArrowRightIcon size={16} aria-hidden="true" className="text-[#E50C0C]" />
                  </a>
                </Reveal>
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <Reveal as="h3" className={`${DISPLAY} text-[28px] leading-tight`}>
                Una vieja tradición
              </Reveal>
              <Stagger as="ol" className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[#0B0B0B26] pt-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8" gap={0.06}>
                {TRADICION.map(([y, t], i) => (
                  <StaggerItem key={y} as="li" className="flex flex-col gap-3">
                    <span className={`${DISPLAY} text-[34px] leading-[1.2] ${i === TRADICION.length - 1 ? "text-[#E50C0C]" : "text-[#6A0E12]"}`}>{y}</span>
                    <span className="text-[15px] leading-[23px] text-[#3A3D41]">{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Próximos eventos */}
        <section id="eventos" className="scroll-mt-28 bg-white">
          <div className={`${WRAP} py-20 lg:py-32`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Próximos eventos</h2>
              <p className="max-w-[620px] text-[17px] leading-[27px] text-[#54595F]">
                Eventos de las comisiones de la BMA en octubre de 2026. Registro en{" "}
                <a href="https://intranet.bma.org.mx/" className="link-u">intranet.bma.org.mx</a>.
              </p>
            </Reveal>
            <Stagger className="mt-16 grid gap-x-20 gap-y-12 lg:grid-cols-2 lg:gap-y-14" gap={0.06}>
              {EVENTOS.map((e) => (
                <StaggerItem key={e.t} as="article" className="flex gap-5 sm:gap-7">
                  <p className="flex w-14 shrink-0 flex-col gap-0.5 sm:w-[84px]">
                    <span className={`${DISPLAY} text-[42px] leading-none text-[#E50C0C] sm:text-[52px]`}>{e.dia}</span>
                    <span className="text-[15px] font-medium text-[#54595F]">oct</span>
                  </p>
                  <div className="flex flex-1 flex-col gap-2.5">
                    <p className="text-sm font-semibold text-[#6A0E12]">{e.com}</p>
                    <h3 className={`${DISPLAY} text-[20px] leading-[1.32] text-[#0B0B0B] sm:text-[22px] sm:leading-[29px]`}>{e.t}</h3>
                    <p className="text-[15px] leading-[23px] text-[#54595F]">{e.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Revista y circulares */}
        <section className="bg-[#0B0B0B] text-white">
          <div className={`${WRAP} pt-20 lg:pt-[120px]`}>
            <div className="grid gap-16 xl:grid-cols-[640px_1fr] xl:gap-24">
              <div id="revista" className="flex scroll-mt-28 flex-col gap-10 sm:flex-row">
                <MediaReveal onView className="relative aspect-[300/447] w-full max-w-[300px] shrink-0 overflow-hidden" delay={0}>
                  <Image src={`${IMG}/revista-137-portada.jpg`} alt="Portada de la Revista La Barra número 137: Consejeras BMA 2026" fill sizes="300px" className="object-cover" />
                </MediaReveal>
                <Reveal delay={0.08} className="flex flex-1 flex-col items-start gap-5 pt-2">
                  <h2 className={`${DISPLAY} text-[clamp(1.875rem,2.6vw,2.25rem)] leading-[1.14]`}>Revista La Barra</h2>
                  <p className="text-[17px] leading-[27px] text-[#C9C9C9]">
                    Revista de la Barra Mexicana, Colegio de Abogados. Número 137, octubre - noviembre 2026: Consejeras BMA 2026.
                  </p>
                  <a href={`${SITE}/revista-la-barra/`} className="press nudge flex items-center gap-2.5 border border-white/40 px-6 py-3.5 text-[15px] font-semibold hover:border-white hover:bg-white/10">
                    Ver revista
                    <ArrowRightIcon size={16} aria-hidden="true" />
                  </a>
                </Reveal>
              </div>
              <div id="circulares" className="flex scroll-mt-28 flex-col gap-9 pt-2">
                <Reveal as="h2" className={`${DISPLAY} text-[28px] leading-tight`}>
                  Lo último
                </Reveal>
                <Stagger as="ul" className="flex flex-col gap-8" gap={0.07}>
                  {CIRCULARES.map(([n, a]) => (
                    <StaggerItem key={n} as="li" className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                      <div className="flex flex-1 flex-col gap-1.5">
                        <p className="text-[15px] font-semibold">{n}</p>
                        <p className="text-base leading-6 text-[#B9B9B9]">{a}</p>
                      </div>
                      <a href={`${SITE}/circulares/`} className="link-u flex h-fit w-fit items-center gap-2 pt-0.5 text-[15px] font-medium">
                        <DownloadSimpleIcon size={18} aria-hidden="true" className="text-[#E50C0C]" />
                        Descargar
                        <span className="sr-only"> {n}</span>
                      </a>
                    </StaggerItem>
                  ))}
                </Stagger>
                <a href={`${SITE}/circulares/`} className="link-u w-fit text-[15px] font-semibold">
                  Ver circulares
                </a>
              </div>
            </div>
            <Stagger
              className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 border-t border-white/15 py-10 lg:mt-24 lg:h-[131.5px] lg:flex-nowrap lg:justify-between lg:py-0"
              gap={0.05}
            >
              {MEDIOS.map((m) => (
                <StaggerItem key={m.src}>
                  <Image src={`${IMG}/${m.src}`} alt={m.alt} width={m.w} height={m.h} className="object-contain opacity-85" style={{ width: m.w, height: m.h }} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-28 bg-white">
          <div className={`${WRAP} grid items-start gap-14 py-20 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-14 lg:py-32 xl:grid-cols-[1fr_620px] xl:gap-24`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-4">
                <h2 className={H2}>Contacto</h2>
                <p className="text-[17px] leading-[27px] text-[#54595F]">Son bienvenidos todos tus comentarios y sugerencias.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-7" gap={0.07}>
                <StaggerItem as="li" className="flex gap-4">
                  <MapPinIcon size={22} aria-hidden="true" className="shrink-0 text-[#E50C0C]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#54595F]">Dirección</p>
                    <p className="text-[17px] leading-[26px]">
                      Varsovia No. 1, Col. Juárez
                      <br />
                      06600 Ciudad de México
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem as="li" className="flex gap-4">
                  <PhoneIcon size={22} aria-hidden="true" className="shrink-0 text-[#E50C0C]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#54595F]">Teléfonos</p>
                    <div className="flex flex-col text-[17px] leading-[26px]">
                      {PHONES.map((p) => (
                        <a key={p} href={tel(p)} className="link-u w-fit">{p}</a>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem as="li" className="flex gap-4">
                  <EnvelopeSimpleIcon size={22} aria-hidden="true" className="shrink-0 text-[#E50C0C]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#54595F]">Correo</p>
                    <p className="text-[17px] leading-[26px]">Alma Delia Cruz Cruz</p>
                    <a href="mailto:acruz@bma.org.mx" className="link-u w-fit text-[17px] leading-[26px]">acruz@bma.org.mx</a>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-[#F5F3F0] p-6 sm:p-12" noteClassName="text-sm text-[#54595F]">
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                  <Field label="Empresa" name="empresa" autoComplete="organization" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#2B2B2B]">Mensaje</span>
                  <textarea
                    name="mensaje"
                    className="h-[140px] resize-y border border-[#D6D2CC] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0B0B0B] focus:shadow-[0_0_0_3px_rgba(229,12,12,0.12)]"
                  />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span className="text-sm text-[#54595F]">Aviso de privacidad</span>
                  <button type="submit" className="press bg-[#E50C0C] px-9 py-4 text-[15px] font-semibold text-white hover:bg-[#C40A0A]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B0B0B] text-white">
        <div className={`${WRAP} pb-28 pt-16 lg:pb-10 lg:pt-20`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex flex-1 flex-col gap-7">
              <Logo className="h-[80px]" />
              <ul className="flex gap-[18px]">
                {REDES.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} aria-label={label} className="press block opacity-100 hover:opacity-70">
                      <Icon size={22} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-16">
              <FooterCol title="BMA">
                <a href="#nosotros" className="link-u">Nosotros</a>
                <a href={`${SITE}/directorios/`} className="link-u">Directorios</a>
                <a href="#circulares" className="link-u">Circulares</a>
                <a href="#revista" className="link-u">Revista</a>
                <a href="https://intranet.bma.org.mx/" className="link-u">Intranet</a>
              </FooterCol>
              <FooterCol title="BMA te informa">
                <span>Galería</span>
                <span>vLex</span>
                <span>Bolsa de trabajo</span>
                <span>Video BMA</span>
              </FooterCol>
              <FooterCol title="Contacto">
                <span>Varsovia No. 1, Col. Juárez</span>
                <span>06600 Ciudad de México</span>
                <a href={tel(PHONES[0])} className="link-u">{PHONES[0]}</a>
                <a href="mailto:acruz@bma.org.mx" className="link-u">acruz@bma.org.mx</a>
              </FooterCol>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#A3A6AA] sm:flex-row sm:justify-between">
            <p>© Barra Mexicana, Colegio de Abogados, A.C.</p>
            <p>Aviso de privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5 lg:w-[200px]">
      <p className="text-sm font-semibold text-[#8E9196]">{title}</p>
      <div className="flex flex-col items-start gap-3.5 text-[15px] leading-[23px]">{children}</div>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-[#2B2B2B]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[50px] border border-[#D6D2CC] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0B0B0B] focus:shadow-[0_0_0_3px_rgba(229,12,12,0.12)]"
      />
    </label>
  );
}
