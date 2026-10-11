import type { Metadata } from "next";
import Image from "next/image";
import { Commissioner, Familjen_Grotesk } from "next/font/google";
import { ArrowRightIcon, EnvelopeSimpleIcon, LeafIcon, LinkedinLogoIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Familjen_Grotesk({ subsets: ["latin"], variable: "--s31-display" });
const body = Commissioner({ subsets: ["latin"], variable: "--s31-body" });

export const metadata: Metadata = {
  title: "Muskus Abogados",
  description: "Atención personalizada a la necesidad de su negocio. Asesoría ágil y precisa, proporcionada por un equipo que se adapta a sus necesidades.",
};

const IMG = "/sitios/muskus";
const SITE = "https://muskus.mx";
const LINKEDIN = "https://www.linkedin.com/company/muskuslaw/about/";
const DISPLAY = "font-[family-name:var(--s31-display)]";
const H2 = `${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] font-semibold leading-[1.15] tracking-[-1px]`;
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const TEL = "tel:+525592624250";

const NAV = [
  { label: "¿Quiénes somos?", href: "#nuestra-firma" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Socios y consejeros", href: "#socios" },
  { label: "Noticias y publicaciones", href: "#noticias" },
];

const RECONOCIMIENTOS = [
  { src: "rec-legal500-dark.png", alt: "The Legal 500", w: 64, h: 75, t: "Carlos Muskus, Socio de Próxima Generación en Energía y Recursos Naturales, por quinto año consecutivo." },
  { src: "rec-bestlawyers.png", alt: "Best Lawyers", w: 120, h: 68, t: "Carlos Muskus y Christian Rosales, abogados destacados en México." },
  { src: "rec-tops.png", alt: "TOPS México, Los Mejores Abogados", w: 84, h: 76, t: "Los Mejores Abogados reconoce a Muskus Abogados en tres áreas de práctica." },
];

const AREAS_A = [
  "Capital de Riesgo e Inversiones",
  "Regulatorio y Ambiental",
  "Energía",
  "Bancario y Financiero",
  "Financiamiento de Proyectos",
  "Fusiones y Adquisiciones",
  "Infraestructura, Transporte y Minería",
  "Inmobiliario",
];
const AREAS_B = [
  "Investigaciones y Cumplimiento Anticorrupción",
  "Comercio Exterior y Aduanas",
  "Servicios Corporativos",
  "Telecomunicaciones, Media y Tecnología (TMT)",
  "Competencia Económica",
  "Arbitraje y Resolución de Controversias",
  "Amparo y Litigio Administrativo",
];

const EQUIPO = [
  { n: "Carlos José Muskus Guardia", c: "Socio fundador", img: "Carlos-Muskus-Edificios-1.jpg", b: "Más de 18 años de experiencia como abogado transaccional. Autorizado para ejercer el derecho en México y en el estado de Nueva York.", e: "Maestría en Derecho, Columbia University" },
  { n: "Luis Arturo Calzada Loya", c: "Socio", img: "Arturo-Calzada-Edificios-1.jpeg", b: "Más de 15 años de experiencia. Su práctica se enfoca en litigio civil, mercantil y concursal, y en procedimientos arbitrales.", e: "Licenciatura en Derecho, Universidad de Ciencias Jurídicas del Estado de Morelos" },
  { n: "Christian Rosales Fuentes", c: "Consejero", img: "Christian-Rosales-Edif-corta-1.jpg", b: "Más de 12 años de experiencia en asuntos inmobiliarios, ambientales, regulatorios, de cambio climático e impacto social.", e: "Maestría en Derecho, University of Aberdeen" },
  { n: "Ivan Elías Alcocer González", c: "Consejero", img: "Ivan-Alcocer-edificios-1.jpg", b: "Más de 25 años de trayectoria en telecomunicaciones, competencia económica y litigio administrativo.", e: "Maestría en Derecho Económico, Universidad Panamericana" },
];

const NOTICIAS = [
  { img: "Pagina-web-1024x1024.png", fit: "cover", t: "Reconocimiento de Best Lawyers: excelencia en derecho energético y ambiental", d: "Best Lawyers ha reconocido a Carlos José Muskus Guardia y Christian Rosales como abogados destacados en México." },
  { img: "Untitled-design-1.png", fit: "cover", t: "Muskus Abogados fortalece su equipo con la incorporación de Ivan Elías Alcocer González", d: "Nos complace anunciar la integración de Ivan Elías Alcocer González a nuestra firma." },
  { img: "noticia-servicios.jpeg", fit: "cover", t: "Muskus Abogados expande su oferta de servicios", d: "Con la llegada de Ivan Alcocer expandimos nuestras áreas de práctica y oferta de servicios a clientes." },
  { img: "rec-tops.png", fit: "contain", t: "TOPS México reconoce a Muskus Abogados en tres áreas de práctica", d: "Los Mejores Abogados ha reconocido a Muskus Abogados como firma líder para las prácticas de Energía." },
];

function Logo() {
  return (
    <a href="#top" aria-label="Muskus Abogados, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="Muskus Abogados" width={130} height={60} preload className="h-[52px] w-auto lg:h-[60px]" />
    </a>
  );
}

function Lang({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm font-medium text-[#5E5E5E] ${className}`}>
      <span aria-current="true">ES</span>
      <span aria-hidden="true"> | </span>
      <a href={`${SITE}/en/`} lang="en" className="link-u">EN</a>
    </p>
  );
}

export default function MuskusPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s31-body)] text-[#222222] selection:bg-[#1168DD] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="bg-white"
        scrolledClassName="shadow-[0_6px_24px_-12px_rgba(34,34,34,0.22)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-9 lg:h-24 xl:[&>nav]:ml-auto xl:[&>nav>ul]:gap-9`}
        linkClassName="whitespace-nowrap text-[15px] font-medium text-[#222222]"
        panelClassName="bg-white text-[#222222] font-[family-name:var(--s31-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl font-semibold tracking-[-0.5px]`}
        burgerClassName="bg-[#222222]"
        actions={
          <>
            <Lang />
            <a href="#contacto" className="press rounded-md bg-[#1168DD] px-[22px] py-[13px] text-[15px] font-semibold text-white hover:bg-[#0B4FAE]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111318] text-white">
          <Parallax className="absolute inset-0" distance={50}>
            <Image src={`${IMG}/dl-Slider-2.png`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,#111318F2_0%,#111318B8_100%)] md:bg-[linear-gradient(90deg,#111318F2_0%,#11131899_55%,#11131840_100%)]"
          />
          <HeroIntro className={`${WRAP} relative flex flex-col justify-between gap-16 pb-10 pt-20 lg:min-h-[680px] lg:pb-12 lg:pt-[150px]`}>
            <div className="flex flex-col gap-7">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.5rem,4.45vw,4rem)] font-semibold leading-[1.0625] tracking-[-1.5px]`}>
                Atención personalizada a la <br className="hidden md:block" />
                necesidad de su negocio
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-[17px] leading-[1.55] text-[#E2E4E8] md:text-[19px] md:leading-[29px]">
                Asesoría ágil y precisa, proporcionada por un equipo que se adapta a sus necesidades.
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-3.5 pt-2">
                <a href="#contacto" className="press rounded-md bg-[#1168DD] px-7 py-4 text-base font-semibold hover:bg-[#0B4FAE]">
                  Contáctanos
                </a>
                <a href="#areas" className="press rounded-md border border-white/50 px-7 py-[15px] text-base font-semibold hover:border-white hover:bg-white/10">
                  Áreas de práctica
                </a>
              </HeroItem>
            </div>
            <HeroItem y={8} className="flex flex-col gap-4 text-[15px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              <a href={TEL} className="link-u flex w-fit items-center gap-2.5">
                <PhoneIcon size={18} aria-hidden="true" />
                +52 55 9262 4250
              </a>
              <a href="mailto:contacto@muskus.mx" className="link-u flex w-fit items-center gap-2.5">
                <EnvelopeSimpleIcon size={18} aria-hidden="true" />
                contacto@muskus.mx
              </a>
              <p className="flex items-center gap-2.5">
                <MapPinIcon size={18} aria-hidden="true" className="shrink-0" />
                Anzures, Miguel Hidalgo, Ciudad de México
              </p>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Reconocimientos */}
        <section aria-labelledby="reconocimientos" className="border-b border-[#E7E7E7] bg-white">
          <div className={`${WRAP} flex flex-col gap-8 py-12 lg:py-14 xl:flex-row xl:items-center xl:gap-14`}>
            <Reveal as="h2" id="reconocimientos" className={`${DISPLAY} shrink-0 text-2xl font-semibold`}>
              Reconocimientos
            </Reveal>
            <Stagger className="grid flex-1 gap-8 md:grid-cols-3 md:gap-10 xl:gap-14" gap={0.07}>
              {RECONOCIMIENTOS.map((r) => (
                <StaggerItem key={r.src} className="flex items-center gap-5 md:flex-col md:items-start xl:flex-row xl:items-center">
                  <Image src={`${IMG}/${r.src}`} alt={r.alt} width={r.w} height={r.h} className="shrink-0 object-contain" style={{ width: r.w, height: r.h }} />
                  <p className="flex-1 text-[15px] leading-[23px] text-[#4A4A4A]">{r.t}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nuestra firma */}
        <section id="nuestra-firma" className="scroll-mt-24 bg-[#F3F3F3]">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:gap-16 lg:py-32`}>
            <Reveal className="flex flex-col gap-7">
              <h2 className={H2}>Nuestra firma</h2>
              <p className={`${DISPLAY} max-w-[1000px] text-[clamp(1.375rem,2.1vw,1.875rem)] leading-[1.37] tracking-[-0.4px] text-[#2C2C2C]`}>
                Muskus Abogados nace con el fin de proporcionar una oferta de servicios personalizados, con los que nuestros clientes obtengan una asesoría ágil y precisa, proporcionada por un equipo que se adapta a sus necesidades.
              </p>
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-14 xl:gap-20">
              <MediaReveal onView className="relative aspect-[560/380] w-full overflow-hidden rounded-md" delay={0}>
                <Image src={`${IMG}/dl-nuestro-equipo-bg.png`} alt="Libros antiguos en una biblioteca" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </MediaReveal>
              <Reveal delay={0.08} className="flex flex-col gap-[22px] text-base leading-[27px] text-[#3A3A3A]">
                <p>
                  Buscamos que la Firma sea un aliado confiable y de fácil acceso. Ofrecemos una estructura simplificada, para facilitar la atención de su negocio y concentrarnos en la solución de sus problemas.
                </p>
                <p>
                  La Firma está integrada por abogados egresados de las mejores escuelas de derecho, con maestrías y estudios de postgrado en México y el extranjero, que han participado o liderado transacciones con altos niveles de exigencia y sofisticación.
                </p>
                <p>
                  Estamos comprometidos con ofrecer asesoría del más alto nivel, con una atención personalizada y especializada para cada uno de los asuntos y clientes con los que trabajamos.
                </p>
                <a href={`${SITE}/quienes-somos/`} className="nudge flex w-fit items-center gap-2.5 pt-1.5 font-semibold text-[#1168DD]">
                  ¿Quiénes somos?
                  <ArrowRightIcon size={18} aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-24 bg-[#1168DD] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:gap-16 lg:py-[120px]`}>
            <Reveal as="h2" className={H2}>
              Áreas de práctica
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-14 xl:gap-20">
              <Reveal as="article" className="flex flex-col gap-5 rounded-md bg-[#0B4FAE] p-7 md:p-9">
                <LeafIcon size={30} aria-hidden="true" />
                <h3 className={`${DISPLAY} text-[26px] font-semibold leading-[31px]`}>Ambiental, Social y Gobierno Corporativo (ASG)</h3>
                <p className="text-base leading-[26px] text-[#E6EEFB]">
                  Nuestra práctica de ASG va más allá de la identificación de riesgos legales: colabora en la implementación de proyectos e inversiones sostenibles y asiste a nuestros clientes en su cumplimiento con los más altos estándares de gobierno corporativo.
                </p>
                <p className="text-[15px] font-medium leading-[23px]">Reconocida por TOPS México - Los Mejores Abogados por su excelencia en la práctica ambiental.</p>
              </Reveal>
              <div className="flex flex-col items-start gap-10">
                <Stagger className="grid w-full gap-5 sm:grid-cols-2 sm:gap-12" gap={0.04}>
                  {[AREAS_A, AREAS_B].map((col, i) => (
                    <ul key={i} className="flex flex-col gap-5">
                      {col.map((a) => (
                        <StaggerItem key={a} as="li" className="text-lg font-medium leading-6">
                          {a}
                        </StaggerItem>
                      ))}
                    </ul>
                  ))}
                </Stagger>
                <a href={`${SITE}/areas-de-practica/`} className="press nudge flex items-center gap-2.5 rounded-md bg-white px-[26px] py-[15px] text-[15px] font-semibold text-[#0B4FAE] hover:bg-[#E6EEFB]">
                  Ver áreas de práctica
                  <ArrowRightIcon size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Socios y consejeros */}
        <section id="socios" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:gap-16 lg:py-32`}>
            <Reveal as="h2" className={H2}>
              Socios y consejeros
            </Reveal>
            <Stagger className="grid gap-x-16 gap-y-14 md:grid-cols-2" gap={0.08}>
              {EQUIPO.map((p) => (
                <StaggerItem key={p.n} as="article" className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <div className="relative aspect-[200/260] w-[200px] shrink-0 overflow-hidden rounded-md bg-[#F3F3F3]">
                    <Image src={`${IMG}/${p.img}`} alt={`Retrato de ${p.n}`} fill sizes="200px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 sm:pt-2">
                    <h3 className={`${DISPLAY} text-[25px] font-semibold leading-[30px]`}>{p.n}</h3>
                    <p className="text-[15px] font-semibold text-[#1168DD]">{p.c}</p>
                    <p className="text-[15px] leading-6 text-[#4A4A4A]">{p.b}</p>
                    <p className="text-[15px] italic leading-[23px] text-[#5E5E5E]">{p.e}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Noticias y publicaciones */}
        <section id="noticias" className="scroll-mt-24 bg-[#F3F3F3]">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:gap-16 lg:py-32`}>
            <Reveal as="h2" className={H2}>
              Noticias y publicaciones
            </Reveal>
            <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-12 xl:grid-cols-[560px_1fr] xl:gap-[72px]">
              <article className="flex flex-col gap-6">
                <MediaReveal onView className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-md bg-black sm:h-[340px]" delay={0}>
                  <div className="flex h-full items-center justify-center">
                    <Image src={`${IMG}/Untitled-design-1.jpg`} alt="The Legal 500 Latin America" width={240} height={240} className="h-[200px] w-[200px] sm:h-[240px] sm:w-[240px]" />
                  </div>
                </MediaReveal>
                <Reveal className="flex flex-col items-start gap-6">
                  <h3 className={`${DISPLAY} text-[clamp(1.5rem,2vw,1.75rem)] font-semibold leading-[1.215] tracking-[-0.4px]`}>
                    Cinco años consecutivos de excelencia: Carlos Muskus reconocido por Legal 500
                  </h3>
                  <p className="text-base leading-[26px] text-[#4A4A4A]">
                    Carlos José Muskus Guardia ha sido reconocido, por quinto año consecutivo, por Legal 500 como Socio de Próxima Generación en el área de Energía y Recursos Naturales en México.
                  </p>
                  <a href={`${SITE}/noticias-publicaciones/`} className="nudge flex items-center gap-2.5 font-semibold text-[#1168DD]">
                    Leer más
                    <ArrowRightIcon size={18} aria-hidden="true" />
                  </a>
                </Reveal>
              </article>
              <Stagger className="flex flex-col gap-9" gap={0.07}>
                {NOTICIAS.map((n) => (
                  <StaggerItem key={n.t} as="article" className="flex gap-5 sm:gap-6">
                    <div className="relative flex h-[84px] w-[84px] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white sm:h-[112px] sm:w-[112px]">
                      {n.fit === "cover" ? (
                        <Image src={`${IMG}/${n.img}`} alt="" fill sizes="112px" className="object-cover" />
                      ) : (
                        <Image src={`${IMG}/${n.img}`} alt="" width={84} height={76} className="h-[56px] w-auto sm:h-[76px]" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h3 className={`${DISPLAY} text-lg font-semibold leading-[1.25] sm:text-xl sm:leading-[25px]`}>{n.t}</h3>
                      <p className="text-[15px] leading-[23px] text-[#4A4A4A]">{n.d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#222222] text-white">
          <div className={`${WRAP} grid items-start gap-14 py-20 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-14 lg:py-32 xl:grid-cols-[1fr_600px] xl:gap-24`}>
            <div className="flex flex-col gap-11">
              <Reveal className="flex flex-col gap-[18px]">
                <h2 className={H2}>Contacto</h2>
                <p className="text-[17px] leading-[29px] text-[#C9CBCF] md:text-lg">Estamos siempre atentos a sus preocupaciones y sus comentarios.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-7" gap={0.07}>
                <ContactRow Icon={MapPinIcon} label="Oficina">
                  <p>
                    Calz. Gral. Mariano Escobedo 476, Anzures,
                    <br />
                    Miguel Hidalgo, 11590 Ciudad de México
                  </p>
                </ContactRow>
                <ContactRow Icon={PhoneIcon} label="Teléfono">
                  <a href={TEL} className="link-u">+52 55 9262 4250</a>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimpleIcon} label="Correo">
                  <a href="mailto:contacto@muskus.mx" className="link-u">contacto@muskus.mx</a>
                </ContactRow>
                <ContactRow Icon={LinkedinLogoIcon} label="LinkedIn">
                  <a href={LINKEDIN} className="link-u break-all">linkedin.com/company/muskuslaw</a>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-lg bg-white p-6 text-[#2C2C2C] sm:p-11" noteClassName="text-sm text-[#4A4A4A]">
                <Field label="Nombre completo" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                  <Field label="Número telefónico" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <Field label="Asunto" name="asunto" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea
                    name="mensaje"
                    className="h-[130px] resize-y rounded-md border border-[#D4D4D4] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1168DD] focus:shadow-[0_0_0_3px_rgba(17,104,221,0.15)]"
                  />
                </label>
                <button type="submit" className="press w-full rounded-md bg-[#1168DD] py-4 text-base font-semibold text-white hover:bg-[#0B4FAE]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className={`${WRAP} pb-28 pt-16 lg:pb-9`}>
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <Logo />
            <nav aria-label="Pie de página" className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                <a key={l.href} href={l.href} className="link-u text-[15px] font-medium">
                  {l.label}
                </a>
              ))}
              <a href={LINKEDIN} aria-label="LinkedIn" className="press text-[#1168DD] hover:text-[#0B4FAE]">
                <LinkedinLogoIcon size={22} aria-hidden="true" />
              </a>
            </nav>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-[#E3E3E3] pt-6 text-sm text-[#5E5E5E] md:flex-row md:justify-between">
            <p>© Muskus Abogados. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              <a href={`${SITE}/aviso-de-privacidad/`} className="link-u">Aviso de privacidad</a>
              <a href={`${SITE}/liberacion-de-responsabilidad/`} className="link-u">Liberación de Responsabilidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof MapPinIcon; label: string; children: React.ReactNode }) {
  return (
    <StaggerItem as="li" className="flex gap-4">
      <Icon size={22} aria-hidden="true" className="shrink-0 text-[#5B9BF0]" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-sm font-semibold text-[#A9ACB2]">{label}</p>
        <div className="text-[17px] leading-[26px]">{children}</div>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[50px] rounded-md border border-[#D4D4D4] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1168DD] focus:shadow-[0_0_0_3px_rgba(17,104,221,0.15)]"
      />
    </label>
  );
}
