import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Tenor_Sans, Urbanist } from "next/font/google";
import { ArrowRight, ArrowUpRight, Briefcase, Building2, House, Landmark, Mail, MapPin, Phone, Scale, ShieldCheck, Users } from "lucide-react";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Tenor_Sans({ subsets: ["latin"], weight: "400", variable: "--s28-display" });
const body = Urbanist({ subsets: ["latin"], variable: "--s28-body" });

export const metadata: Metadata = {
  title: "MGL Abogados, Martínez García de León",
  description: "Despacho de abogados en Ciudad de México. Servicios profesionales estratégicos y preventivos, con cobertura a nivel nacional e internacional.",
};

const IMG = "/sitios/mglabogados";
const DISPLAY = "font-[family-name:var(--s28-display)] font-normal";
const H2 = `${DISPLAY} text-[clamp(2.25rem,3.2vw,2.75rem)] leading-[1.15]`;
const EMAIL = "contacto@mglabogados.com.mx";
const AVISO = "http://www.mglabogados.com.mx/aviso-de-privacidad";
const ELD = "https://www.eld.edu.mx/profesores.php?idmaestros=65";
const PROCESO = "https://www.proceso.com.mx/187522/bbv-probursa-defraudo-con-bonos-ficticios";

const NAV = [
  { label: "Socios", href: "#socios" },
  { label: "Áreas de cobertura", href: "#areas" },
  { label: "Libros por FMGL", href: "#libros" },
  { label: "Reportajes", href: "#reportajes" },
  { label: "ELD", href: "#eld" },
];

const CIFRAS = [
  { v: "1992", t: "Fundación de la firma por Fernando Martínez García de León" },
  { v: "+30 años", t: "de experiencia en consultoría y litigio" },
  { v: "+25 años", t: "de docencia en la Escuela Libre de Derecho" },
  { v: "5 libros", t: "publicados por el socio fundador en Editorial Porrúa" },
];

const MOSAICO = [
  { src: "abogados6.jpg", alt: "Sala de juntas con escultura ecuestre" },
  { src: "abogados2.jpg", alt: "Sala de juntas redonda junto a la biblioteca" },
  { src: "dl-mgl-002.jpg", alt: "Vista desde lo alto de la escalera del despacho" },
  { src: "dl-mgl-008.jpg", alt: "Detalle de un reloj antiguo" },
];

const AREAS = [
  { t: "Civil", Icon: Scale, d: "Cumplimiento, rescisión y nulidad de contratos, responsabilidad civil y daño moral, juicios hipotecarios, reivindicatorios, de arrendamiento y prescripción." },
  { t: "Familiar", Icon: Users, d: "Divorcio, custodia, régimen de convivencias, pensión alimenticia y juicios sucesorios, procurando primero la mediación o negociación." },
  { t: "Mercantil", Icon: Briefcase, d: "Juicios ejecutivos, contratos mercantiles, concursos mercantiles y obtención y levantamiento de medidas cautelares." },
  { t: "Administrativo", Icon: Landmark, d: "Derecho regulatorio en los ámbitos municipal, estatal y federal, medio ambiente y derecho del agua." },
  { t: "Amparo", Icon: ShieldCheck, d: "Socios con especialidad en amparo por la Universidad Panamericana y diplomado en derechos humanos y amparo por la Escuela Libre de Derecho." },
  { t: "Corporativo", Icon: Building2, d: "Reestructuras, aumentos y disminuciones de capital, estatutos, actas de asamblea, libros corporativos, poderes y enajenación de acciones." },
  { t: "Inmobiliario", Icon: House, d: "Derecho inmobiliario, contratos, fideicomisos, orden urbano y zonificaciones." },
];

const SOCIOS = [
  { n: "Fernando Martínez García de León", c: "Fundador y titular", d: "Catedrático titular de Contratos Civiles en la Escuela Libre de Derecho.", img: "team-fernando-martinez.jpg", pos: "object-[52%_50%]" },
  { n: "Hugo Barrón Corona", c: "Socio, en la firma desde 1993", d: "Civil, mercantil, administrativo, telecomunicaciones y amparo.", img: "team-hugo-barron.jpg", pos: "object-[8%_50%]" },
  { n: "Horacio Alfredo Tenorio Ramírez", c: "Socio, en la firma desde 2001", d: "Corporativo, contratos, fideicomisos, inmobiliario y regulatorio.", img: "team-horacio-tenorio.jpg", pos: "object-center" },
  { n: "Aarón Chávez Duarte", c: "Socio desde 2010", d: "Derecho familiar, civil y amparo.", img: "team-aaron-chavez.jpg", pos: "object-center" },
  { n: "Ismael Alejandro Acevedo Ruiz", c: "Abogado por la Escuela Libre de Derecho", d: "Litigio civil, mercantil, familiar y amparo, y derecho corporativo.", img: "team-ismael-acevedo.jpg", pos: "object-center" },
];

const LIBROS = [
  {
    t: "La acción pauliana",
    m: "Coedición Porrúa y Escuela Libre de Derecho, 2007",
    href: "https://www.porrua.mx/libro/GEN:9786070919763/la-accion-pauliana/martinez-garcia-de-leon-fernando/9786070919763",
  },
  {
    t: "Los actos ultra vires y la protección de la apariencia jurídica",
    m: "Coedición Porrúa y Escuela Libre de Derecho, 2007",
    href: "https://www.porrua.mx/libro/GEN:9786070920806/los-actos-ultra-vires-y-la-proteccion-de-la-apariencia-juridica/martinez-garcia-de-leon-fernando/9786070920806",
  },
  {
    t: "El remate, su naturaleza jurídica y consecuencias legales",
    m: "Editorial Porrúa, 2012",
    href: "https://www.porrua.mx/libro/GEN:9786070914072/el-remate-su-naturaleza-juridica-y-consecuencias-legales/fernando-martinez-garcia-de-leon/9786070914072",
  },
  {
    t: "Fideicomiso de garantía. Planeación, implementación y ejecución",
    m: "En coautoría con Salomón Vargas y Edgar González Peredo",
    href: "https://www.porrua.mx/libro/GEN:9786070930089/fideicomiso-de-garantia-planeacion-implementacion-y-ejecucion/gonzalez-peredo-edgar-martinez-garcia-de-leon-fernando-vargas-garcia-salomon/9786070930089",
  },
  {
    t: "Derecho de obligaciones",
    m: "Editorial Porrúa",
    href: "https://www.porrua.mx/libro/GEN:9786070910920/derecho-de-obligaciones/fernando-martinez-garcia-de-leon/9786070910920",
  },
];

const PHONES = [
  { v: "5545 8288", href: "tel:+525555458288" },
  { v: "5545 8299", href: "tel:+525555458299" },
  { v: "5250 1568", href: "tel:+525552501568" },
];

function Logo() {
  return (
    <a href="#top" aria-label="MGL Abogados, Martínez García de León, inicio" className="block">
      <Image src={`${IMG}/logo.svg`} alt="" width={190} height={65} preload className="h-auto w-[150px] lg:w-[190px]" />
    </a>
  );
}

export default function MglAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s28-body)] font-medium text-[#1B354B] selection:bg-[#1B354B] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(27,53,75,0.35)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[104px] xl:px-0 [&_nav_ul]:gap-9"
        linkClassName="text-base font-medium text-[#1B354B]"
        panelClassName="bg-white text-[#1B354B] font-[family-name:var(--s28-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl`}
        burgerClassName="bg-[#1B354B]"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#1B354B] px-[26px] py-3.5 text-[15px] font-semibold text-white hover:bg-[#274A68]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[620px] overflow-hidden bg-[#1B354B] text-white lg:h-[720px]">
          <div className="absolute inset-0 -z-10 lg:left-[21.11%]">
            <Parallax className="absolute inset-0 overflow-hidden" distance={30}>
              <Image src={`${IMG}/dl-fondo.jpg`} alt="Escultura alada en la recepción del despacho" fill preload sizes="(min-width: 1024px) 79vw, 100vw" className="object-cover" />
            </Parallax>
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-full bg-[#1B354BC7] lg:w-[63.4%] lg:bg-transparent lg:bg-[linear-gradient(-90deg,#1B354B00_0%,#1B354BE6_60%,#1B354B_100%)]"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[280px] bg-[linear-gradient(0deg,#0F223399_0%,#0F223300_100%)]" />
          <div className="mx-auto flex w-full max-w-[1200px] items-end px-5 pb-16 pt-32 md:px-8 lg:items-start lg:pb-0 lg:pt-[250px] xl:px-0">
            <HeroIntro className="flex max-w-[640px] flex-col gap-7">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.11] tracking-[-0.5px]`}>
                Despacho de abogados <br className="hidden sm:block" />
                en Ciudad de México
              </HeroItem>
              <HeroItem as="p" className="max-w-[500px] text-lg leading-[1.55] text-[#DCE3EA] md:text-xl md:leading-[31px]">
                Servicios profesionales estratégicos y preventivos, con cobertura a nivel nacional e internacional.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-8 pt-3">
                <a href="#contacto" className="press rounded-[6px] bg-white px-[30px] py-[18px] text-base font-bold leading-5 text-[#1B354B] hover:bg-[#E8EDF2]">
                  Contáctanos
                </a>
                <a href="#socios" className="nudge flex items-center gap-2.5 text-base font-semibold">
                  Conoce a los socios
                  <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" className="text-[#C9B98F]" />
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* Cifras */}
        <section aria-label="Trayectoria" className="bg-[#F6F4EF]">
          <Stagger as="dl" className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 md:px-8 lg:grid-cols-4 lg:gap-10 lg:py-14 xl:px-0" gap={0.07}>
            {CIFRAS.map(({ v, t }) => (
              <StaggerItem key={v} className="flex flex-col gap-2.5">
                <dt className={`${DISPLAY} text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight`}>
                  <CountUp value={v} />
                </dt>
                <dd className="text-[15px] leading-[23px] text-[#54595F]">{t}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_580px] lg:gap-20 lg:py-32 xl:px-0">
          <div className="flex flex-col gap-6">
            <Reveal as="h2" className={H2}>
              Quiénes somos
            </Reveal>
            <Reveal delay={0.06} as="p" className={`${DISPLAY} text-[clamp(1.25rem,1.7vw,1.4375rem)] leading-[1.43]`}>
              Martínez García de León Abogados es una firma legal que brinda servicios profesionales estratégicos y preventivos en diferentes ramas del derecho.
            </Reveal>
            <Reveal delay={0.12} className="flex flex-col gap-6 text-[17px] leading-[29px] text-[#54595F]">
              <p>Somos una firma de abogados con reconocida experiencia en consultoría y litigio en las materias civil, mercantil, administrativo, amparo, corporativo e inmobiliario.</p>
              <p>
                Con experiencia y visión nacional e internacional, nos adecuamos a las necesidades particulares de cada cliente, con una atención profesional cercana, directa y personalizada. Contamos con oficinas de corresponsalía en las principales ciudades del país.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {MOSAICO.map(({ src, alt }, i) => (
              <MediaReveal key={src} onView delay={i * 0.08} className="img-zoom relative aspect-[280/200] w-full overflow-hidden rounded-[6px]">
                <Image src={`${IMG}/${src}`} alt={alt} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
              </MediaReveal>
            ))}
          </div>
        </section>

        {/* Áreas de cobertura */}
        <section id="areas" className="scroll-mt-24 bg-[#1B354B] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-20 md:px-8 lg:py-[120px] xl:px-0">
            <Reveal as="h2" className={H2}>
              Áreas de cobertura
            </Reveal>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:auto-rows-[290px] lg:grid-cols-4" gap={0.05}>
              {AREAS.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 rounded-[6px] border border-white/[0.18] p-[30px]">
                  <Icon size={26} strokeWidth={1.5} aria-hidden="true" className="mb-3 text-[#C9B98F]" />
                  <h3 className={`${DISPLAY} text-[26px] leading-tight`}>{t}</h3>
                  <p className="text-[15px] leading-6 text-[#C8D2DC]">{d}</p>
                </StaggerItem>
              ))}
              <StaggerItem className="img-zoom relative hidden overflow-hidden rounded-[6px] lg:block">
                <Image src={`${IMG}/abogados1.jpg`} alt="Libros de la biblioteca del despacho" fill sizes="285px" className="object-cover" />
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className="mx-auto flex max-w-[1200px] scroll-mt-24 flex-col gap-14 px-5 py-20 md:px-8 lg:pb-28 lg:pt-32 xl:px-0">
          <Reveal className="flex flex-col gap-4">
            <h2 className={H2}>Socios</h2>
            <p className="max-w-[720px] text-[17px] leading-[29px] text-[#54595F] md:text-lg">
              Fernando Martínez García de León fundó esta firma en 1992, con base en los principios de lealtad, secrecía y profesionalismo hacia sus clientes.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-[30px]" gap={0.07}>
            {SOCIOS.map(({ n, c, d, img, pos }) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-2.5">
                <div className="relative mb-1.5 h-[220px] overflow-hidden rounded-[6px] sm:h-[270px]">
                  <Image src={`${IMG}/${img}`} alt={n} fill sizes="(min-width: 1024px) 216px, 50vw" className={`object-cover ${pos}`} />
                </div>
                <h3 className={`${DISPLAY} text-xl leading-[25px]`}>{n}</h3>
                <p className="text-sm font-bold leading-5 text-[#6E6140]">{c}</p>
                <p className="text-[15px] leading-[23px] text-[#54595F]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal as="p" className="text-base text-[#54595F]">
            Ángel Diego completa el equipo de socios del despacho.
          </Reveal>
        </section>

        {/* Libros */}
        <section id="libros" className="scroll-mt-24 bg-[#F6F4EF]">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 lg:py-28 xl:px-0">
            <div className="flex flex-col gap-5">
              <Reveal className="flex flex-col gap-5">
                <h2 className={H2}>Libros por FMGL</h2>
                <p className="text-[17px] leading-[29px] text-[#54595F] md:text-lg">Obras de Fernando Martínez García de León publicadas por Editorial Porrúa.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col pt-4 lg:max-w-[744px]" gap={0.06}>
                {LIBROS.map(({ t, m, href }) => (
                  <StaggerItem key={t} as="li" className="border-t border-[#1B354B26]">
                    <a href={href} className="nudge group flex items-center justify-between gap-5 py-[22px]">
                      <span className="flex flex-col gap-1.5">
                        <span className={`${DISPLAY} text-[21px] leading-tight transition-colors duration-200 group-hover:text-[#8C7B50]`}>{t}</span>
                        <span className="text-[15px] text-[#54595F]">{m}</span>
                      </span>
                      <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-[#8C7B50]" />
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Stagger as="aside" className="flex flex-col gap-5 lg:pt-2" gap={0.08}>
              <StaggerItem>
                <AsideCard id="reportajes" label="Reportajes" text="BBV-Probursa defraudó con bonos ficticios" link="Leer en Proceso" href={PROCESO} />
              </StaggerItem>
              <StaggerItem>
                <AsideCard id="eld" label="Escuela Libre de Derecho" text="Más de 25 años de docencia del socio fundador en la ELD" link="Ver perfil de profesor" href={ELD} />
              </StaggerItem>
              <StaggerItem className="img-zoom relative h-[220px] overflow-hidden rounded-[6px]">
                <Image src={`${IMG}/dl-mgl-007.jpg`} alt="Pasillo con obra de arte en el despacho" fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover" />
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#1B354B] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-20 lg:py-[120px] xl:px-0">
            <div className="flex flex-col gap-9">
              <Reveal as="h2" className={H2}>
                Nuestras instalaciones
              </Reveal>
              <div className="grid grid-cols-3 gap-3.5">
                {[
                  { src: "dl-mgl-001.jpg", alt: "Escultura en la recepción" },
                  { src: "dl-mgl-004.jpg", alt: "Sala de espera con escalera" },
                  { src: "abogados3.jpg", alt: "Sala de juntas" },
                ].map(({ src, alt }, i) => (
                  <MediaReveal key={src} onView delay={i * 0.08} className="img-zoom relative h-[90px] overflow-hidden rounded-[6px] sm:h-[132px]">
                    <Image src={`${IMG}/${src}`} alt={alt} fill sizes="(min-width: 1024px) 190px, 33vw" className="object-cover" />
                  </MediaReveal>
                ))}
              </div>
              <Stagger className="flex flex-col gap-9" gap={0.06}>
                <ContactRow Icon={MapPin} label="Dirección">
                  <p>Heráclito No. 316, Polanco V Sección, Miguel Hidalgo, C.P. 11560, Ciudad de México</p>
                </ContactRow>
                <ContactRow Icon={Phone} label="Teléfonos">
                  <p className="flex flex-wrap gap-x-2">
                    {PHONES.map(({ v, href }, i) => (
                      <span key={v} className="flex gap-2">
                        {i > 0 && <span aria-hidden="true">·</span>}
                        <a href={href} className="link-u">{v}</a>
                      </span>
                    ))}
                  </p>
                </ContactRow>
                <ContactRow Icon={Mail} label="Correo electrónico">
                  <a href={`mailto:${EMAIL}`} className="link-u break-all">{EMAIL}</a>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[6px] bg-white p-6 text-[#1B354B] md:p-11" noteClassName="text-sm text-[#54595F]">
                <h3 className={`${DISPLAY} text-[30px] leading-tight`}>Contáctanos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea name="mensaje" className={`${FIELD} h-[132px] resize-y py-3`} />
                </label>
                <button type="submit" className="press w-full rounded-[6px] bg-[#1B354B] px-6 py-4 text-base font-bold text-white hover:bg-[#274A68]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-9 px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                {[
                  { label: "Inicio", href: "#top" },
                  { label: "Socios", href: "#socios" },
                  { label: "Áreas de cobertura", href: "#areas" },
                  { label: "Reportajes", href: "#reportajes" },
                  { label: "Libros por FMGL", href: "#libros" },
                  { label: "ELD", href: "#eld" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#1B354B1F] pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#54595F]">MGL Abogados © Todos los derechos reservados 2026{" · "}<HemeronCredit /></p>
            <a href={AVISO} className="link-u w-fit font-semibold">Aviso de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FIELD =
  "rounded-[6px] border border-[#1B354B33] bg-[#F6F4EF] px-4 text-base font-medium outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#1B354B] focus:shadow-[0_0_0_3px_rgba(27,53,75,0.12)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${FIELD} h-12 w-full`} />
    </label>
  );
}

function AsideCard({ id, label, text, link, href }: { id: string; label: string; text: string; link: string; href: string }) {
  return (
    <article id={id} className="flex scroll-mt-28 flex-col gap-3 rounded-[6px] bg-white p-7">
      <p className="text-sm font-bold text-[#6E6140]">{label}</p>
      <h3 className={`${DISPLAY} text-xl leading-[27px]`}>{text}</h3>
      <a href={href} className="link-u w-fit text-[15px] font-semibold">
        {link}
      </a>
    </article>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-4">
      <Icon size={22} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-[#C9B98F]" />
      <div className="flex min-w-0 flex-col gap-1.5">
        <p className="text-sm font-semibold text-[#AEBBC8]">{label}</p>
        <div className="text-lg leading-7">{children}</div>
      </div>
    </StaggerItem>
  );
}
