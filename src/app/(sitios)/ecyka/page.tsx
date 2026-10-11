import type { Metadata } from "next";
import Image from "next/image";
import { Funnel_Display, Host_Grotesk } from "next/font/google";
import { Buildings, Check, DownloadSimple, EnvelopeSimple, Handshake, LinkedinLogo, MapPin, Phone, ShieldCheck, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Funnel_Display({ subsets: ["latin"], variable: "--s08-display" });
const body = Host_Grotesk({ subsets: ["latin"], variable: "--s08-body" });

export const metadata: Metadata = {
  title: "Elías Calles & Karam Abogados",
  description: "Abogados fiscales y corporativos. Firma fundada en 2023 en Ciudad de México, integrada por abogados con trayectoria en los despachos más reconocidos de México.",
};

const IMG = "/sitios/ecyka";
const ARCHIVE = "https://web.archive.org/web/20260608135107/https://www.ecyka.com";
const LINKEDIN = "https://www.linkedin.com/company/el%C3%ADas-calles-y-karam-abogados";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const FIRMS = ["González Luna, Moreno y Armida", "Müggenburg, Gorches y Peñalosa", "Cervantes Sainz Abogados", "Cervantes Díaz Abogados"];

const POINTS = [
  { Icon: Buildings, t: "Fundada en 2023", d: "Firma de Ciudad de México integrada por abogados con experiencia y trayectoria en los despachos más reconocidos de México." },
  { Icon: Handshake, t: "Trato cercano y proactivo", d: "Acompañamiento puntual al cliente en todos los asuntos." },
  { Icon: ShieldCheck, t: "Profesionalismo y lealtad", d: "Un alto estándar de profesionalismo, valores y lealtad al cliente." },
];

const AREAS = [
  {
    t: "Fiscal",
    tags: ["Consultoría", "Compliance - Preventivo", "Litigio"],
    d: "Asesoría fiscal integral a personas, vehículos y empresas nacionales y extranjeras, y defensa legal ante autoridades fiscales, tribunales administrativos y el Poder Judicial federal.",
    items: [
      "Fiscal corporativo y de personas físicas", "Auditorías fiscales (Due Diligence)",
      "Fusiones y adquisiciones (M&A)", "Fiscal inmobiliario",
      "Fideicomisos privados y bursátiles", "Planeación patrimonial y familiar",
      "Fiscal internacional", "Juicios de nulidad y de amparo",
    ],
  },
  {
    t: "Corporativo",
    tags: ["Societario", "Transaccional", "Financiero", "Inmobiliario"],
    d: "Constitución, mantenimiento y operación de sociedades, y planificación e implementación de proyectos nacionales e internacionales mediante las estructuras legales más adecuadas.",
    items: [
      "Constitución y liquidación de sociedades", "Estructuras y gobierno corporativo",
      "Fideicomisos y joint ventures", "Contratos y convenios civiles y mercantiles",
      "Créditos, garantías y fuentes de pago", "Proyectos inmobiliarios",
    ],
  },
  {
    t: "Administrativo",
    tags: ["Procedimientos administrativos", "Litigio"],
    d: "Defensa legal de personas y empresas ante autoridades administrativas, tribunales administrativos y el Poder Judicial federal, en contra de actos y resoluciones en las diversas materias administrativas.",
    items: [
      "Procedimientos administrativos ordinarios", "Revisiones y verificaciones",
      "Recursos de revisión", "Juicios de nulidad",
      "Amparo directo e indirecto", "Compliance en prevención de lavado de dinero",
    ],
  },
];

const PARTNERS = [
  {
    n: "Fernando Elías Calles Karam",
    a: "Socio · Fiscal",
    img: "socio-fernando-elias-calles.jpg",
    b: "12 años de experiencia como abogado, 10 de ellos como fiscalista en consultoría y litigio. Trabajó en González Luna, Moreno y Armida (GLyMA) y en Müggenburg, Gorches y Peñalosa (MGPS). Escuela Libre de Derecho, con maestría en Derecho Privado (empresarial).",
    email: "feliascalles@ecyka.com",
    ext: "101",
  },
  {
    n: "Gustavo Karam Mass",
    a: "Socio · Corporativo",
    img: "socio-gustavo-karam.jpg",
    b: "Más de 10 años de experiencia en derecho corporativo y transaccional, con clientes del sector empresarial, financiero e inmobiliario. Trabajó en Cervantes Sainz Abogados y Cervantes Díaz Abogados. Escuela Libre de Derecho.",
    email: "gkaram@ecyka.com",
    ext: "102",
  },
];

const H2 = "font-[family-name:var(--s08-display)] text-[clamp(2.5rem,4.2vw,3.5rem)] font-medium leading-[1.1] tracking-[-1px]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";

function Logo({ variant }: { variant: "blanco" | "verde" }) {
  return (
    <a href="#top" aria-label="Elías Calles & Karam Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo-ecyka-${variant}.png`}
        alt=""
        width={220}
        height={41}
        preload={variant === "blanco"}
        className="h-auto w-[180px] md:w-[220px]"
      />
    </a>
  );
}

export default function EcykaPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s08-body)] text-[#2F3D3C] selection:bg-[#0C3836] selection:text-[#E1EFF2]`}
    >
      <SiteNav
        logo={<Logo variant="blanco" />}
        links={NAV}
        className="bg-[#0C3836]"
        scrolledClassName="shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-24`}
        linkClassName="mx-0.5 text-[15px] font-medium text-[#E1EFF2]"
        panelClassName="bg-[#0C3836] text-[#E1EFF2] font-[family-name:var(--s08-body)]"
        panelLinkClassName="font-[family-name:var(--s08-display)] text-3xl font-medium"
        burgerClassName="bg-[#E1EFF2]"
        actions={
          <>
            <a href={`${ARCHIVE}/en`} lang="en" className="link-u text-sm font-semibold text-[#E1EFF2]">
              EN
            </a>
            <a href="#contacto" className="press rounded-full bg-[#E1EFF2] px-6 py-[13px] text-[15px] font-semibold text-[#0C3836] hover:bg-white">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#0C3836] lg:h-[640px] lg:grid-cols-[minmax(0,1fr)_41.67%] lg:gap-20">
          <HeroIntro className="flex flex-col gap-7 px-5 pb-20 pt-14 md:px-8 md:pt-20 lg:pb-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-0 lg:pt-[88px]">
            <HeroItem as="h1" blur className="font-[family-name:var(--s08-display)] text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[1.03] tracking-[-1.5px] text-white xl:whitespace-nowrap">
              Abogados fiscales <br className="hidden sm:block" />y corporativos
            </HeroItem>
            <HeroItem as="p" className="max-w-[560px] text-lg leading-[1.53] text-[#C9DCDD] md:text-[19px]">
              Firma fundada en 2023 en Ciudad de México, integrada por abogados con trayectoria en los despachos más reconocidos de México.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-3.5 pt-3">
              <a href="#contacto" className="press rounded-full bg-[#E1EFF2] px-[30px] py-[17px] text-base font-semibold text-[#0C3836] hover:bg-white">
                Contáctanos
              </a>
              <a href="#areas" className="press rounded-full border border-[#E1EFF2]/50 px-[29px] py-4 text-base font-semibold text-white hover:border-[#E1EFF2] hover:bg-white/5">
                Áreas de práctica
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[360px] overflow-hidden md:h-[480px] lg:h-full" delay={0.25}>
            <Image src={`${IMG}/img-arquitectura.jpg`} alt="Columnata de concreto frente a un espejo de agua" fill preload sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Trayectoria */}
        <section aria-label="Trayectoria de los socios" className="bg-[#E1EFF2]">
          <div className={`${WRAP} flex flex-col gap-3.5 pb-11 pt-10`}>
            <Reveal as="p" y={10} className="text-[15px] leading-[1.4] text-[#3E5251]">
              Nuestros socios trabajaron en los despachos
            </Reveal>
            <Stagger as="ul" gap={0.06} className="flex flex-col gap-x-8 gap-y-2 md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-4">
              {FIRMS.map((f) => (
                <StaggerItem key={f} as="li" y={10} className="font-[family-name:var(--s08-display)] text-lg font-medium text-[#0C3836] md:text-xl lg:whitespace-nowrap lg:text-[clamp(1rem,1.4vw,1.25rem)]">
                  {f}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className={`${WRAP} flex scroll-mt-24 flex-col gap-14 py-24 lg:gap-16 lg:pb-32 lg:pt-[136px]`}>
          <Reveal className="flex flex-col gap-6">
            <h2 className={`${H2} text-[#0C3836]`}>Nosotros</h2>
            <p className="max-w-[1040px] font-[family-name:var(--s08-display)] text-[clamp(1.5rem,2.3vw,2rem)] leading-[1.31]">
              Elías Calles &amp; Karam se destaca por la calidad técnica de sus servicios legales y por el entendimiento práctico y de negocios que le permite brindar a sus clientes soluciones integrales, eficientes y creativas.
            </p>
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[620px_1fr] lg:gap-20">
            <MediaReveal onView delay={0} className="relative aspect-[620/440] w-full overflow-hidden">
              <Image src={`${IMG}/img-skycity.jpg`} alt="Rascacielos vistos desde abajo" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            </MediaReveal>
            <Stagger gap={0.08} className="flex flex-col gap-9">
              {POINTS.map(({ Icon, t, d }) => (
                <StaggerItem key={t} className="flex gap-5">
                  <Icon className="h-7 w-7 shrink-0 text-[#0C3836]" />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-[family-name:var(--s08-display)] text-[22px] font-medium leading-tight text-[#0C3836]">{t}</h3>
                    <p className="text-base leading-[1.625] text-[#556463]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-24 bg-[#E1EFF2]">
          <div className={`${WRAP} flex flex-col gap-6 py-24 lg:pb-[136px] lg:pt-32`}>
            <Reveal className="flex flex-col gap-[18px] pb-8">
              <h2 className={`${H2} text-[#0C3836]`}>Áreas de práctica</h2>
              <p className="text-lg leading-[1.53] md:text-[19px]">Servicios legales enfocados en tres áreas principales: fiscal, corporativo y administrativo.</p>
            </Reveal>
            <Stagger gap={0.08} className="flex flex-col gap-6">
              {AREAS.map((a) => (
                <StaggerItem key={a.t} as="article" className="grid gap-8 bg-white px-6 py-9 md:px-12 md:py-11 lg:grid-cols-[340px_1fr] lg:gap-16">
                  <div className="flex flex-col gap-5">
                    <h3 className="font-[family-name:var(--s08-display)] text-[clamp(2rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.5px] text-[#0C3836]">{a.t}</h3>
                    <ul className="flex flex-wrap items-start gap-2 lg:flex-col">
                      {a.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-[#0C3836]/25 px-3.5 py-[6px] text-sm font-medium text-[#0C3836]">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-[17px] leading-[1.6]">{a.d}</p>
                    <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {a.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-[#556463]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0C3836]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem className="grid items-center gap-4 border border-[#0C3836]/20 px-6 py-8 md:px-12 md:py-9 lg:grid-cols-[340px_1fr_1fr] lg:gap-16">
                <h3 className="font-[family-name:var(--s08-display)] text-2xl font-medium text-[#0C3836]">Áreas complementarias</h3>
                <p className="text-[17px] font-semibold leading-snug">Reestructuras y concursos mercantiles</p>
                <p className="text-[17px] font-semibold leading-snug">Prevención de lavado de dinero: compliance y procedimientos</p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Banda equipo */}
        <section aria-label="Nuestro equipo" className="relative isolate flex h-[420px] items-end overflow-hidden bg-[#0C3836] md:h-[440px]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={24}>
            <Image src={`${IMG}/img-bosque.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0C383620_0%,#0C3836E6_100%)]" />
          <div className={`${WRAP} w-full pb-14 md:pb-[72px]`}>
            <Reveal as="p" className="max-w-[980px] font-[family-name:var(--s08-display)] text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.3] text-white">
              El equipo de Elías Calles &amp; Karam está integrado por abogados experimentados y con una visión moderna de las áreas en las que prestan sus servicios.
            </Reveal>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className={`${WRAP} flex scroll-mt-24 flex-col gap-14 py-24 lg:py-32`}>
          <Reveal as="h2" className={`${H2} text-[#0C3836]`}>Equipo</Reveal>
          <Stagger gap={0.1} className="grid gap-12 lg:grid-cols-2">
            {PARTNERS.map((p) => (
              <StaggerItem key={p.n} as="article" className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <div className="img-zoom relative aspect-[230/300] w-full max-w-[230px] shrink-0 overflow-hidden bg-[#E1EFF2]">
                  <Image src={`${IMG}/${p.img}`} alt={p.n} fill sizes="230px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-[family-name:var(--s08-display)] text-[26px] font-medium leading-[1.15] text-[#0C3836]">{p.n}</h3>
                  <p className="text-[15px] font-semibold text-[#3E5251]">{p.a}</p>
                  <p className="text-[15px] leading-[1.6] text-[#556463]">{p.b}</p>
                  <p className="flex flex-wrap gap-x-2 text-sm font-medium text-[#0C3836] xl:flex-nowrap xl:whitespace-nowrap">
                    <a href={`mailto:${p.email}`} className="link-u">{p.email}</a>
                    <span aria-hidden="true">·</span>
                    <a href={`tel:+525552814239,${p.ext}`} className="link-u">T. 55 5281 4239 ext. {p.ext}</a>
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="grid gap-3 border border-[#0C3836]/[0.12] bg-[#FAFAFA] px-6 py-7 md:px-8 lg:grid-cols-[120px_auto_1fr_auto] lg:items-center lg:gap-10">
            <p className="text-[15px] font-semibold text-[#3E5251]">Pasante</p>
            <p className="font-[family-name:var(--s08-display)] text-[22px] font-medium text-[#0C3836]">Luis Enrique Moreno Suárez</p>
            <p className="text-[15px] leading-[1.45] text-[#556463]">Litigio fiscal y administrativo. Estudia en la Facultad de Derecho de la UNAM.</p>
            <p className="flex flex-wrap gap-x-2 text-sm font-medium text-[#0C3836]">
              <a href="mailto:lmoreno@ecyka.com" className="link-u">lmoreno@ecyka.com</a>
              <span aria-hidden="true">·</span>
              <a href="tel:+525552814239,103" className="link-u">ext. 103</a>
            </p>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#0C3836] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col items-start gap-8">
              <Reveal as="h2" className={H2}>Contacto</Reveal>
              <Stagger as="ul" gap={0.07} className="flex w-full flex-col gap-6">
                {[
                  { Icon: MapPin, k: "Oficina", v: "Campos Elíseos 169 - 301 A, Polanco, Miguel Hidalgo,\nCiudad de México, C.P. 11560" },
                  { Icon: Phone, k: "Teléfono", v: "(+52) 55 5281 4239", href: "tel:+525552814239" },
                  { Icon: WhatsappLogo, k: "WhatsApp", v: "55 9898 2031", href: "https://wa.me/525598982031" },
                  { Icon: EnvelopeSimple, k: "Correo", v: "contacto@ecyka.com", href: "mailto:contacto@ecyka.com" },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} as="li" className="flex gap-4">
                    <Icon className="h-6 w-6 shrink-0 text-[#E1EFF2]" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-sm text-[#A9C4C4]">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit text-lg leading-[1.5]">{v}</a>
                      ) : (
                        <p className="text-lg leading-[1.5] md:whitespace-pre-line">{v}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1}>
                <a
                  href={`${ARCHIVE}/_files/ugd/23e5b7_eb75c153f74a48cc9d570c489ac2e496.pdf`}
                  className="press flex items-center gap-2.5 rounded-full border border-[#E1EFF2]/50 px-6 py-[13px] text-[15px] font-semibold hover:border-[#E1EFF2] hover:bg-white/5"
                >
                  <DownloadSimple className="h-[18px] w-[18px]" />
                  Descargar brochure
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#2F3D3C] md:p-11" noteClassName="text-sm text-[#556463]">
                <h3 className="font-[family-name:var(--s08-display)] text-[28px] font-medium text-[#0C3836]">Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <Field label="Email" name="email" type="email" autoComplete="email" />
                <Field label="Asunto" name="asunto" />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea name="mensaje" rows={4} className="h-28 resize-y border-b border-[#ABABAB] bg-[#FAFAFA] px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0C3836] focus:shadow-[inset_0_-1px_0_#0C3836]" />
                </label>
                <button type="submit" className="press mt-1 self-start rounded-full bg-[#0C3836] px-9 py-4 text-base font-semibold text-white hover:bg-[#164B48]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#FAFAFA]">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-14 lg:pb-9`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo variant="verde" />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href={LINKEDIN} aria-label="LinkedIn de Elías Calles & Karam" className="press flex h-10 w-10 items-center justify-center rounded-full border border-[#0C3836]/25 text-[#0C3836] hover:border-[#0C3836] hover:bg-[#E1EFF2]">
              <LinkedinLogo className="h-[18px] w-[18px]" />
            </a>
          </div>
          <div className="flex flex-col gap-2 border-t border-[#0C3836]/[0.12] pt-[22px] text-sm text-[#556463] md:flex-row md:justify-between">
            <p>© 2023 Elías Calles y Karam, S.C.</p>
            <p>Campos Elíseos 169 - 301 A, Polanco, Ciudad de México</p>
          </div>
        </div>
      </footer>
    </div>
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
        className="h-[46px] border-b border-[#ABABAB] bg-[#FAFAFA] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0C3836] focus:shadow-[inset_0_-1px_0_#0C3836]"
      />
    </label>
  );
}
