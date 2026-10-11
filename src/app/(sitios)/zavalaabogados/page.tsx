import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Literata, Public_Sans } from "next/font/google";
import { ArrowRight, ArrowUpRight, Bank, EnvelopeSimple, InstagramLogo, MapPin, Phone, Receipt, Scales, Users } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const literata = Literata({ subsets: ["latin"], variable: "--s35-display" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--s35-body" });

export const metadata: Metadata = {
  title: "Zavala Abogados",
  description: "Especialistas en Litigio. Firma de abogados expertos en materia fiscal, ubicados en la Ciudad de México.",
};

const IMG = "/sitios/zavalaabogados";
const SITE = "https://zavalaabogados.com.mx";
const FD = "font-[family-name:var(--s35-display)]";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = `${FD} text-[clamp(2.5rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.025em]`;

const NAV = [
  { label: "Abogados", href: "#abogados" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Acerca de", href: "#acerca" },
];

const VALORES = [
  ["Misión", "Prestar soluciones legales integrales acorde a los criterios y principios institucionales de la firma y superar las expectativas de nuestros clientes."],
  ["Servicio al cliente", "Nos esforzamos por satisfacer al máximo las necesidades y expectativas de nuestros clientes."],
  ["Trabajo en equipo", "Como integrantes de la firma, colaboramos con todos sus miembros para beneficio del cliente."],
];

const AREAS = [
  { t: "Derecho Fiscal", Icon: Receipt },
  { t: "Penal-Fiscal", Icon: Scales },
  { t: "Administrativo", Icon: Bank },
  { t: "Familiar", Icon: Users },
];

const EQUIPO = [
  ["Anahí Morales Galicia", "Abogada UNAM"],
  ["Brenda Bautista Delgado", "Abogada por la UNAM"],
  ["Diego Pardo García", "Especialista en Derecho Penal y Familiar"],
  ["Eduardo Salgado Colín", "Maestro en Derecho"],
  ["Filimón Jordán Carranza", "Mtro. en Derecho Penal, especialista en materia mercantil, laboral y familiar"],
  ["Mauricio García Juárez", "Especialista en materia inmobiliaria"],
  ["Sergio Guízar Reyes", "Maestro en Juicios Orales y Sistema Acusatorio"],
  ["Sergio Méndez Silva", "Abogado y Maestro UNAM"],
  ["Arcelia Cruz Martínez", "Asistente Administrativo"],
];

const OTRAS = [
  {
    href: `${SITE}/publicaciones/playeras_seleccion_ok/`,
    img: "Sergio-M-ndez-Okis.png",
    alt: "Sergio Méndez en entrevista para UNO TV",
    meta: "UNO TV · 29 de junio de 2026",
    t: "La fiebre por la Selección dispara la venta de playeras pirata rumbo al gran partido",
  },
  {
    href: `${SITE}/publicaciones/ley_de_rentas_justas_fernanda/`,
    img: "Fernanda-Abi.jpg",
    alt: "Entrevista en el foro de Imagen Radio sobre la Ley de Rentas Justas en la CDMX",
    meta: "Imagen Radio · 18 de mayo de 2026",
    t: "Ley de Rentas Justas, Razonables y Asequibles en la CDMX: ¿De qué trata?",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  const s = footer ? 48 : 52;
  return (
    <a href="#top" className="flex items-center gap-3.5" aria-label="Zavala Abogados, inicio">
      <Image src={`${IMG}/logo-x4.png`} alt="" width={s} height={s} preload={!footer} className={footer ? "h-12 w-12" : "h-11 w-11 lg:h-[52px] lg:w-[52px]"} />
      <span className={`${FD} font-medium ${footer ? "text-xl text-white" : "text-[19px] text-[#1F2937] lg:text-[21px]"}`}>Zavala Abogados</span>
    </a>
  );
}

export default function ZavalaAbogadosPage() {
  return (
    <div
      id="top"
      className={`${literata.variable} ${publicSans.variable} bg-white font-[family-name:var(--s35-body)] text-[#1F2937] selection:bg-[#74421A] selection:text-white`}
    >
      <SiteNav
        logo={<Brand />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(31,41,55,0.45)]"
        innerClassName={`${WRAP} flex h-[76px] items-center justify-between gap-10 lg:h-[92px] [&>nav]:ml-auto [&_nav_ul]:gap-10`}
        linkClassName="text-[15px] font-medium text-[#374151]"
        panelClassName="bg-white text-[#1F2937] font-[family-name:var(--s35-body)]"
        panelLinkClassName={`${FD} text-3xl font-medium`}
        burgerClassName="bg-[#1F2937]"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#74421A] px-6 py-[13px] text-[15px] font-semibold text-white hover:bg-[#5E3515]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#74421A] lg:h-[720px] lg:grid-cols-[1fr_minmax(0,660px)]">
          <HeroIntro className="flex flex-col justify-center gap-[30px] px-5 py-20 md:px-8 lg:py-20 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-[72px]">
            <HeroItem as="h1" blur className={`${FD} text-[clamp(3.25rem,6.7vw,6rem)] font-medium leading-none tracking-[-0.031em] text-white`}>
              Especialistas <br />
              en Litigio
            </HeroItem>
            <HeroItem as="p" className="max-w-[460px] text-lg leading-[1.55] text-white/[0.88] md:text-[19px] md:leading-[29px]">
              Firma de abogados expertos en materia fiscal, ubicados en la Ciudad de México.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-7 pt-2.5">
              <a href="#contacto" className="press rounded-[6px] bg-white px-[30px] py-[17px] text-[15px] font-bold text-[#74421A] hover:bg-[#F6F1EB]">
                Contáctanos
              </a>
              <a href="#abogados" className="nudge flex items-center gap-2.5 text-[15px] font-semibold text-white">
                Ver abogados
                <ArrowRight size={18} />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[380px] overflow-hidden md:h-[480px] lg:h-auto" delay={0.25}>
            <Image
              src={`${IMG}/statue-g582ffbe2b_1280.jpg`}
              alt="Ángel de la Independencia en Paseo de la Reforma, Ciudad de México"
              fill
              preload
              sizes="(min-width: 1024px) 660px, 100vw"
              className="object-cover object-[95%_50%]"
            />
          </MediaReveal>
        </section>

        {/* Medios */}
        <section aria-label="Medios" className="border-b border-[#E5E7EB]">
          <Stagger className={`${WRAP} flex flex-wrap items-center gap-x-12 gap-y-3 py-8 lg:gap-x-14 lg:py-10`} gap={0.06}>
            <StaggerItem as="p" className="w-full text-[15px] font-semibold text-[#374151] lg:w-auto">
              Nuestros abogados en medios
            </StaggerItem>
            {["Imagen Radio", "UNO TV", "El Financiero TV"].map((m) => (
              <StaggerItem key={m} as="p" className={`${FD} text-[22px] font-medium text-[#4B5563] md:text-2xl`}>
                {m}
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Acerca de */}
        <section id="acerca" className="scroll-mt-24 bg-[#F6F1EB]">
          <div className={`${WRAP} grid items-center gap-14 py-24 lg:grid-cols-[1fr_500px] lg:gap-24 lg:py-[120px]`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={`${FD} text-[clamp(2.25rem,3.7vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.027em]`}>
                Defendemos y protegemos los intereses de nuestros clientes
              </Reveal>
              <Reveal as="p" delay={0.08} className="text-lg leading-[1.6] text-[#374151] md:text-[19px] md:leading-[30px]">
                Somos una firma de abogados que nos dedicamos a la defensa y protección de los intereses de nuestros clientes en materia de Derecho Fiscal, Penal-Fiscal, Administrativo y Familiar.
              </Reveal>
              <Stagger as="dl" className="flex flex-col gap-6 pt-4" gap={0.08}>
                {VALORES.map(([k, v]) => (
                  <StaggerItem key={k} className="grid gap-2 border-t border-[#1F2937]/[0.13] pt-5 sm:grid-cols-[170px_1fr] sm:gap-8">
                    <dt className="text-[15px] font-bold text-[#74421A]">{k}</dt>
                    <dd className="text-base leading-[26px] text-[#374151]">{v}</dd>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <MediaReveal onView delay={0} className="relative aspect-[500/640] w-full overflow-hidden rounded-[6px]">
              <div className="absolute -left-[3.76%] -top-[8%] h-[112%] w-[107.5%]">
                <Image
                  src={`${IMG}/zavala-azotea.jpg`}
                  alt="Equipo de Zavala Abogados en la azotea de su oficina"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
              </div>
            </MediaReveal>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section aria-labelledby="areas" className="bg-[#1F2937] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:gap-16 lg:py-28`}>
            <Reveal as="h2" id="areas" className={H2}>
              Áreas de práctica
            </Reveal>
            <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
              {AREAS.map(({ t, Icon }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-5 border-t-2 border-[#BC9E85] pt-7">
                  <Icon size={30} className="text-[#BC9E85]" />
                  <h3 className={`${FD} text-[32px] font-medium leading-tight tracking-[-0.019em]`}>{t}</h3>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" delay={0.1} className="max-w-[720px] text-[17px] leading-[27px] text-white/70">
              Nuestro equipo incluye especialistas en materia inmobiliaria, mercantil, laboral y penal, así como en juicios orales y sistema acusatorio.
            </Reveal>
          </div>
        </section>

        {/* Abogados */}
        <section id="abogados" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:gap-14 lg:py-[120px]`}>
            <Reveal as="h2" className={H2}>
              Abogados
            </Reveal>
            <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
              <Reveal as="article" delay={0.05} className="flex flex-col gap-4 self-start rounded-[6px] bg-[#F6F1EB] p-7 md:p-9">
                <Image src={`${IMG}/logo-x4.png`} alt="" width={44} height={44} className="h-11 w-11" />
                <h3 className={`${FD} text-[30px] font-medium leading-[35px] tracking-[-0.02em]`}>Abimael I. Zavala Martínez</h3>
                <p className="text-[15px] font-bold text-[#74421A]">Socio Director</p>
                <p className="text-base leading-[26px] text-[#374151]">
                  Presidente de la Comunidad Jurídica de México (CoJurMex). Especialista en materia fiscal, inmobiliaria y prevención de lavado de dinero.
                </p>
              </Reveal>
              <Stagger as="ul" className="grid gap-x-10 gap-y-8 pt-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10" gap={0.04}>
                {EQUIPO.map(([n, r]) => (
                  <StaggerItem key={n} as="li" className="flex flex-col gap-1.5">
                    <h3 className={`${FD} text-xl font-medium leading-[25px]`}>{n}</h3>
                    <p className="text-[15px] leading-[23px] text-[#4B5563]">{r}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Publicaciones */}
        <section id="publicaciones" className="scroll-mt-24 bg-[#F6F1EB]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:gap-14 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className={H2}>Publicaciones</h2>
              <a href={`${SITE}/publicaciones/`} className="nudge flex w-fit items-center gap-2.5 text-[15px] font-semibold text-[#74421A] sm:pb-2.5">
                Ver todas las publicaciones
                <ArrowRight size={18} />
              </a>
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[680px_1fr]">
              <Reveal as="article" delay={0.05}>
                <a href={`${SITE}/publicaciones/cojurmex_pascal/`} className="group flex flex-col gap-5">
                  <div className="img-zoom relative h-[240px] overflow-hidden rounded-[6px] md:h-[400px]">
                    <div className="absolute -left-[12.75%] -top-[16%] h-[160%] w-[125.5%]">
                      <Image
                        src={`${IMG}/abimael-imagen.jpg`}
                        alt="Abimael Zavala en entrevista con Imagen Radio"
                        fill
                        sizes="(min-width: 1024px) 860px, 125vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-[15px] font-semibold text-[#74421A]">Imagen Radio · 13 de julio de 2026</p>
                  <h3 className={`${FD} text-[clamp(1.5rem,2.2vw,1.875rem)] font-medium leading-[1.2] tracking-[-0.017em] transition-colors duration-200 group-hover:text-[#74421A]`}>
                    CoJurMex denuncia inexperiencia de jueces electos tras reforma judicial
                  </h3>
                  <p className="text-base leading-[26px] text-[#374151]">
                    Abimael Zavala, presidente de la Comunidad Jurídica de México (CoJurMex), denuncia la parálisis administrativa y operativa que…
                  </p>
                </a>
              </Reveal>
              <Stagger className="flex flex-col gap-10" gap={0.08} delay={0.1}>
                {OTRAS.map((p) => (
                  <StaggerItem key={p.href} as="article">
                    <a href={p.href} className="group flex flex-col gap-3.5">
                      <div className="img-zoom relative h-[200px] overflow-hidden rounded-[6px]">
                        <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(min-width: 1024px) 464px, 100vw" className="object-cover" />
                      </div>
                      <p className="text-[15px] font-semibold text-[#74421A]">{p.meta}</p>
                      <h3 className={`${FD} text-[21px] font-medium leading-[27px] transition-colors duration-200 group-hover:text-[#74421A]`}>{p.t}</h3>
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#74421A] text-white">
          <div className={`${WRAP} flex flex-col gap-14 pb-24 pt-24 lg:gap-16 lg:pb-28 lg:pt-[120px]`}>
            <Reveal className="flex flex-col gap-4">
              <h2 className={`${FD} text-[clamp(3rem,5.6vw,5rem)] font-medium leading-[1.1] tracking-[-0.03em]`}>Contáctanos</h2>
              <p className="text-lg text-white/85 md:text-[19px]">Póngase en contacto con nosotros.</p>
            </Reveal>
            <Stagger className="grid gap-10 border-t border-white/25 pt-10 md:grid-cols-2 lg:grid-cols-[340px_180px_300px_1fr] lg:gap-12" gap={0.07}>
              <StaggerItem className="flex flex-col gap-3">
                <Label Icon={MapPin}>Dirección</Label>
                <p className="text-[17px] leading-[27px]">Río Elba 22, 6to piso, Col. Cuauhtémoc, Alcaldía Cuauhtémoc, Ciudad de México, C.P. 06500</p>
                <a href="https://goo.gl/maps/qJS2BXEtkLqPcUGXA" className="nudge flex w-fit items-center gap-2 text-[15px] font-semibold">
                  Ver en Google Maps
                  <ArrowUpRight size={15} />
                </a>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-3">
                <Label Icon={Phone}>Teléfono</Label>
                <a href="tel:+525555122451" className="link-u w-fit text-[17px] leading-[27px]">
                  55 5512 2451
                </a>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-3">
                <Label Icon={EnvelopeSimple}>Correo</Label>
                <a href="mailto:a.zavala@zavalaabogados.com.mx" className="link-u w-fit break-all text-[17px] leading-[27px]">
                  a.zavala@zavalaabogados.com.mx
                </a>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-3">
                <Label Icon={InstagramLogo}>Redes sociales</Label>
                <div className="flex flex-col text-[17px] leading-[27px]">
                  <a href="https://www.facebook.com/ZavalaAbogados/" className="link-u w-fit">
                    Facebook: @ZavalaAbogados
                  </a>
                  <a href="https://www.instagram.com/zavala.abogadoss/" className="link-u w-fit">
                    Instagram: @zavala.abogadoss
                  </a>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F2937] text-[#D1D5DB]">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-14 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Brand footer />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-9 gap-y-3 text-[15px] font-medium">
                {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/[0.12] pt-6 text-[15px] text-[#D1D5DB]/80 md:flex-row md:justify-between">
            <p>© Zavala Abogados 2026. Todos los derechos reservados.{" "}<HemeronCredit /></p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              <li>
                <a href={`${SITE}/uploads/zavala_aviso_clientes.pdf`} className="link-u">
                  Aviso de Privacidad Clientes
                </a>
              </li>
              <li>
                <a href={`${SITE}/uploads/zavala_aviso_web.pdf`} className="link-u">
                  Aviso de Privacidad Sitio Web
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Label({ Icon, children }: { Icon: typeof MapPin; children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[15px] font-bold">
      <Icon size={18} className="text-[#BC9E85]" />
      {children}
    </p>
  );
}
