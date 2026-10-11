import type { Metadata } from "next";
import Image from "next/image";
import { Host_Grotesk, Jost } from "next/font/google";
import { ArrowRight, FacebookLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Jost({ subsets: ["latin"], variable: "--s13-display" });
const body = Host_Grotesk({ subsets: ["latin"], variable: "--s13-body" });

export const metadata: Metadata = {
  title: "Villar & Villar Abogados, S.C.",
  description: "Mentes legales que realmente entienden los negocios de sus clientes. Porque la excelencia hace la diferencia.",
};

const IMG = "/sitios/villarabogados";
const D = "font-[family-name:var(--s13-display)]";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = `${D} text-[clamp(2.25rem,3.2vw,2.875rem)] leading-[1.11] text-[#2B2B2B]`;
const SITE = "https://www.villarabogados.com.mx";

const NAV = [
  { label: "La Firma", href: "#la-firma" },
  { label: "Áreas de práctica", href: "#areas-de-practica" },
  { label: "Abogados", href: "#abogados" },
  { label: "Pro Bono", href: "#pro-bono" },
  { label: "Blog", href: `${SITE}/blog.html` },
];

const AWARDS = [
  ["chambers-ranked-in-latam-2026", "Chambers Latin America 2026"],
  ["Best-Lawyers-2026", "Best Lawyers 2026"],
  ["ranked-firm-2026", "Leaders League Ranked Firm 2026"],
  ["latin-layer", "Latin Lawyer"],
  ["Lexlatin", "LexLatin"],
  ["global-law-experts-recomended-firm", "Global Law Experts, Recommended Firm"],
  ["GLI", "Global Legal Insights"],
  ["layer-international-legal-100-2026", "Lawyer International Legal 100, 2026"],
  ["ma-today-global-awards-2026", "M&A Today Global Awards 2026"],
  ["global-100-2026", "Global 100, 2026"],
  ["USA100-2025", "USA 100, 2025"],
  ["the-strategist-award-2026", "The Strategist Award 2026"],
];

const VALUES = [
  ["Profesionalismo", "Honestidad", "Compromiso"],
  ["Ética", "Servicio al cliente", "Resultados"],
];

const INDUSTRIES = ["Aeroespacial", "Automotriz", "Bienes de Consumo", "Energía y Recursos Naturales", "Farmacéutica", "Inmobiliaria", "Servicios Financieros"];

const AREAS = [
  ["Administrativo", "Anticorrupción y Compliance", "Arbitraje", "Bancario y Financiero", "Civil y Familiar", "Competencia Económica", "Energía y Recursos Naturales", "ESG (Ambiental, Social y Gobierno Corporativo)"],
  ["Fiscal", "Inmobiliario", "Inversión Extranjera", "Laboral", "Medio Ambiente y Desarrollo Sustentable", "Migratorio", "Mercantil"],
  ["Penal", "Prevención de Lavado de Dinero", "Privacidad y Protección de Datos", "Propiedad Industrial e Intelectual", "Reestructuras y Concursos Mercantiles", "Seguridad Social", "Societario, Gobierno Corporativo, Fusiones y Adquisiciones"],
];

const CASES = [
  [
    { logo: "trim-saint_blanco.png", alt: "Saint-Gobain", w: 105, h: 44, q: "“Profesionalismo y eficiencia que se transforma en una realidad.”", n: "Jorge Ramírez Sánchez", r: "Gerente de Operaciones, Saint Gobain Gypsum" },
    { logo: "trim-samsung.png", alt: "Samsung", w: 130, h: 21, q: "“Grandes abogados para grandes empresas.”", n: "Naewon Shim", r: "CFO, SEM-P" },
  ],
  [
    { logo: "trim-optronics_blanco.png", alt: "Optronics", w: 130, h: 31, q: "“La asesoría legal de Villar & Villar nos ha permitido diversificarnos, crecer y fortalecer nuestro grupo, al formar sociedades saludables con nuevos aliados comerciales.”", n: "Héctor Ángeles", r: "Gerente General, Optronics" },
    { logo: "trim-zanini-default.png", alt: "Zanini Auto Group", w: 130, h: 26, q: "“Excelente trabajo y excelente servicio que los hace sobresalir y distinguir de otros bufetes de abogados.”", n: "Luis Villalba Bartolozzi", r: "Americas Operations Leader & Mexico Site Manager, Zanini Auto Group" },
  ],
];

const PARTNERS = [
  ["Mr-Juan-Carlos-Villar-Partner", "Juan Carlos Villar Flores", "Codirige el Área de Derecho Mercantil y de Mecanismos Alternativos de Solución de Controversias"],
  ["Mr-Eduardo-Leal-Partner", "Eduardo Leal Sánchez", "Codirige el Área de Litigio Civil, Mercantil y Penal"],
  ["Mr-Hermes-de-la-Rosa-Partner", "Hermes Jesús de la Rosa Luna", "Encargado del Área Transaccional, de Compliance y ESG"],
  ["Ms-Maria-Leticia-Montero-Partner", "María Leticia Montero", "Encabeza el Área de Derecho Laboral y de Seguridad Social"],
  ["Mr-Oscar-Arias-Partner", "Oscar Arias Hernández", "Responsable del Área de Propiedad Intelectual"],
];

const OFFICES = [
  {
    city: "Ciudad de México",
    img: "dl-cdmx.jpg",
    alt: "Edificio Torre Reforma, Ciudad de México",
    lines: ["Edificio Torre Reforma", "Av. Paseo de la Reforma 483, piso 14", "Col. Cuauhtémoc, Miguel Hidalgo", "C.P. 06500, Ciudad de México"],
    tel: "+52 (55) 8000 7400",
    telHref: "tel:+525580007400",
  },
  {
    city: "Querétaro",
    img: "dl-qro.jpg",
    alt: "Edificio Corporativo Blanco, Querétaro",
    lines: ["Edificio Corporativo Blanco", "Av. Prolongación Tecnológico 950-B, piso 11", "Col. San Pablo", "C.P. 76125, Querétaro"],
    tel: "+52 (442) 216 9499",
    telHref: "tel:+524422169499",
  },
];

function Rule() {
  return <span aria-hidden="true" className="block h-0.5 w-10 bg-[#EE7623]" />;
}

function Logo() {
  return (
    <a href="#top" aria-label="Villar & Villar Abogados, inicio" className="block">
      <Image src={`${IMG}/logo-blanco.svg`} alt="" width={190} height={24} preload className="h-auto w-[150px] sm:w-[190px]" />
    </a>
  );
}

export default function VillarAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s13-body)] leading-[normal] text-[#2B2B2B] selection:bg-[#EE7623] selection:text-[#1F1F1F]`}
    >
      <SiteNav
        overlay
        logo={<Logo />}
        links={NAV}
        className="fixed! text-white"
        scrolledClassName="bg-[#444444] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
        innerClassName={`${WRAP} flex h-20 items-center gap-9 lg:h-24 [&>button]:ml-auto [&>nav]:ml-auto [&>nav>ul]:gap-9`}
        linkClassName="text-[15px] font-medium text-white"
        panelClassName="bg-[#444444] text-white font-[family-name:var(--s13-body)]"
        panelLinkClassName={`${D} font-light`}
        burgerClassName="bg-white"
        actions={
          <span className="flex items-center gap-9">
            <a href={SITE} hrefLang="en" className="link-u text-[15px] font-medium text-white/70 hover:text-white">
              English
            </a>
            <a href="#contacto" className="press bg-[#EE7623] px-[22px] py-3 text-[15px] font-semibold text-[#1F1F1F] hover:bg-[#F28A43]">
              Contáctanos
            </a>
          </span>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden bg-[#14161A] pt-32 lg:h-[760px]">
          <Parallax className="absolute inset-0" distance={50}>
            <Image src={`${IMG}/dl-prueba.jpg`} alt="Palacio de Bellas Artes, Ciudad de México" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0F101299 0%, #0F101200 75%), linear-gradient(180deg, #14161A99 0%, #14161A26 30%, #14161A8C 60%, #0F1012F2 100%)",
            }}
          />
          <HeroIntro className="relative flex flex-col gap-16">
            <div className={`${WRAP} flex w-full flex-col gap-7`}>
              <HeroItem as="h1" blur className={`${D} text-[clamp(2.375rem,4.05vw,3.625rem)] font-light leading-[1.12] tracking-[-0.5px] text-white`}>
                Mentes legales que realmente entienden
                <br className="hidden lg:inline" /> los negocios de sus clientes.
              </HeroItem>
              <HeroItem as="p" className="text-lg leading-[1.5] text-[#E8E8E8] md:text-xl">
                Porque la excelencia hace la diferencia.®
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-4 pt-2">
                <a href="#contacto" className="press bg-[#EE7623] px-7 py-4 text-base font-semibold text-[#1F1F1F] hover:bg-[#F28A43]">
                  Contáctanos
                </a>
                <a href="#areas-de-practica" className="press border border-white/70 px-[27px] py-[15px] text-base font-medium text-white hover:border-white hover:bg-white/10">
                  Áreas de práctica
                </a>
              </HeroItem>
            </div>
            <HeroItem className={`${WRAP} w-full pb-10`} y={12}>
              <div className="flex flex-col gap-2 border-t border-white/25 pt-[22px] text-sm text-white/80 sm:flex-row sm:justify-between">
                <p>Villar &amp; Villar Abogados, S.C. · Fundada en México en 2007</p>
                <p>Ciudad de México · Querétaro</p>
              </div>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Premios */}
        <section aria-labelledby="premios-title" className="bg-white">
          <div className={`${WRAP} grid items-center gap-10 py-16 lg:grid-cols-[230px_1fr] lg:gap-14 lg:py-[72px]`}>
            <Reveal className="flex flex-col gap-3">
              <h2 id="premios-title" className={`${D} max-w-[230px] text-[30px] leading-[35px]`}>Premios y publicaciones</h2>
              <Rule />
            </Reveal>
            <Stagger as="ul" className="grid grid-cols-3 gap-y-2 sm:grid-cols-4 lg:grid-cols-6" gap={0.04}>
              {AWARDS.map(([f, alt]) => (
                <StaggerItem key={f} as="li" y={10} className="flex h-24 items-center justify-center">
                  <span className="relative block h-[68px] w-[96px] sm:w-[124px]">
                    <Image src={`${IMG}/premios/${f}.png`} alt={alt} fill sizes="124px" className="object-contain" />
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* La Firma */}
        <section id="la-firma" className="scroll-mt-24 bg-[#F2F1EF]">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_400px] lg:gap-20 lg:py-[120px]`}>
            <div className="flex flex-col gap-10">
              <Reveal as="h2" className={H2}>La Firma</Reveal>
              <Reveal delay={0.06} as="p" className={`${D} text-[clamp(1.375rem,1.95vw,1.75rem)] font-light leading-[1.4]`}>
                Villar &amp; Villar Abogados, S.C. surge de la unión de un grupo experimentado de abogados, especialistas en las distintas áreas del derecho, que desde su fundación en México en 2007 han acompañado a numerosos clientes en operaciones estratégicas, nacionales e internacionales.
              </Reveal>
              <Reveal delay={0.1} className="grid gap-6 pt-2 text-base leading-[26px] text-[#555555] md:grid-cols-2 md:gap-12">
                <p>
                  La mayoría de los abogados y profesionales de VILLAR® son académicos y profesores universitarios, que participan activamente en instituciones y operaciones a nivel nacional e internacional. Su capacidad de innovación, respuesta y seguimiento han posicionado a VILLAR® como una de las principales Firmas de abogados en México.
                </p>
                <p>
                  La Firma ha desarrollado áreas especializadas de práctica, con constante coordinación y soporte entre ellas, para conocer y entender a fondo el negocio principal de sus clientes y convertirse en su aliado estratégico, con asesoría preventiva y correctiva.
                </p>
              </Reveal>
              <Reveal className="flex flex-col gap-3.5 border-t border-[#2B2B2B]/15 pt-7">
                <h3 className="text-[15px] font-semibold">Principios y valores</h3>
                <div className={`${D} text-[21px] leading-8 text-[#B4520F]`}>
                  {VALUES.map((line) => (
                    <ul key={line[0]} className="flex flex-wrap">
                      {line.map((v, i) => (
                        <li key={v}>
                          {v}
                          {i < line.length - 1 && (
                            <span aria-hidden="true" className="whitespace-pre">
                              {"  /  "}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </Reveal>
            </div>
            <MediaReveal onView className="relative h-[460px] w-full overflow-hidden lg:h-[708px]" delay={0}>
              <div className="absolute left-[-42.2%] top-[-5%] h-[160%] w-[173.6%]">
                <Image src={`${IMG}/dl-cdmx.jpg`} alt="Torre Reforma, sede de la Firma en la Ciudad de México" fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
              </div>
            </MediaReveal>
          </div>
        </section>

        {/* Grupos de práctica */}
        <section aria-labelledby="grupos-title" className="bg-[#444444] text-white">
          <div className={`${WRAP} flex flex-col gap-10 py-20 lg:py-[104px]`}>
            <Reveal as="h2" id="grupos-title" className={`${D} text-2xl`}>
              Grupos de práctica
            </Reveal>
            <Stagger as="ul" className={`${D} flex flex-wrap gap-x-[22px] gap-y-1.5 text-[clamp(2rem,3.6vw,3.25rem)] font-light leading-[1.19]`} gap={0.06}>
              {INDUSTRIES.map((ind, i) => (
                <StaggerItem key={ind} as="li">
                  {ind}
                  {i < INDUSTRIES.length - 1 && (
                    <span aria-hidden="true" className="ml-[22px] text-[#EE7623]">
                      /
                    </span>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas-de-practica" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[300px_1fr] lg:gap-16 lg:py-28`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${H2} max-w-[300px]`}>Áreas de práctica</h2>
              <Rule />
            </Reveal>
            <Stagger className="grid gap-x-10 gap-y-[18px] md:grid-cols-3" gap={0.08}>
              {AREAS.map((col) => (
                <StaggerItem key={col[0]} as="ul" className="flex flex-col gap-[18px]">
                  {col.map((a) => (
                    <li key={a} className="text-[17px] leading-6">
                      {a}
                    </li>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Casos de éxito */}
        <section aria-labelledby="casos-title" className="bg-[#F2F1EF]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:py-28`}>
            <Reveal as="h2" id="casos-title" className={H2}>
              Casos de éxito
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[500px_1fr]">
              <Reveal as="figure" className="flex flex-col justify-between gap-10 bg-[#444444] p-8 text-white sm:p-12 lg:min-h-[720px]">
                <div className="flex flex-col gap-7">
                  <span aria-hidden="true" className={`${D} text-[96px] font-light leading-[58px] text-[#EE7623]`}>
                    “
                  </span>
                  <blockquote className={`${D} text-[clamp(1.5rem,2.1vw,1.875rem)] font-light leading-[1.37]`}>
                    Más que un proveedor, Villar &amp; Villar es un aliado importante que nos respalda en todo tipo de circunstancias, desde las más comunes hasta las más extraordinarias.
                  </blockquote>
                </div>
                <figcaption className="flex flex-col gap-1">
                  <span className="text-base font-semibold">Paulo Marques</span>
                  <span className="text-[15px] text-white/70">CEO, Splittel Group</span>
                </figcaption>
              </Reveal>
              <Stagger className="flex flex-col gap-6" gap={0.07}>
                {CASES.map((row, ri) => (
                  <div key={ri} className="grid flex-auto gap-6 sm:grid-cols-2">
                    {row.map((c) => (
                      <StaggerItem key={c.n} as="figure" className="flex flex-col gap-5 bg-white p-8">
                        <Image src={`${IMG}/${c.logo}`} alt={c.alt} width={c.w} height={c.h} className="object-contain object-left" style={{ width: c.w, height: c.h }} />
                        <blockquote className={`${D} text-[19px] leading-7`}>{c.q}</blockquote>
                        <figcaption className="flex flex-col gap-0.5">
                          <span className="text-[15px] font-semibold">{c.n}</span>
                          <span className="text-sm leading-5 text-[#666666]">{c.r}</span>
                        </figcaption>
                      </StaggerItem>
                    ))}
                  </div>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Socios */}
        <section id="abogados" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-16 pb-24 pt-24 lg:pb-28 lg:pt-[120px]`}>
            <div className="grid items-end gap-10 md:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
              <MediaReveal onView className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden" delay={0}>
                <Image src={`${IMG}/abogados/Mr-Juan-Jose-Villar-Partner.jpg`} alt="Juan José Villar Flores, Socio Director" fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover" />
              </MediaReveal>
              <div className="flex flex-col gap-6 pb-2">
                <Reveal className="flex flex-col gap-6">
                  <h2 className={H2}>Socios</h2>
                  <Rule />
                </Reveal>
                <Reveal delay={0.08} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5 pt-6">
                    <h3 className={`${D} text-[clamp(1.75rem,2.4vw,2.125rem)]`}>Juan José Villar Flores</h3>
                    <p className="text-[15px] font-semibold text-[#B4520F]">Socio Director</p>
                  </div>
                  <p className="text-base leading-[26px] text-[#555555]">
                    Encabeza Villar &amp; Villar Abogados, S.C. desde su fundación en 2007. A lo largo de más de veinte años de ejercicio profesional ha consolidado una práctica especializada en fusiones y adquisiciones, derecho corporativo y transacciones transfronterizas de alta complejidad.
                  </p>
                  <p className="text-base leading-[26px] text-[#555555]">
                    Ha asesorado a grupos corporativos multinacionales como Samsung, Mitsubishi, Michelin y Amway, así como a fondos de capital privado y empresas de los sectores automotriz y aeroespacial en sus operaciones estratégicas en México.
                  </p>
                </Reveal>
              </div>
            </div>

            <Stagger as="ul" className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5" gap={0.06}>
              {PARTNERS.map(([f, n, r]) => (
                <StaggerItem key={f} as="li" className="flex flex-col gap-4">
                  <div className="img-zoom relative aspect-[4/5] w-full lg:aspect-auto lg:h-[270px]">
                    <Image src={`${IMG}/abogados/${f}.jpg`} alt={n} fill sizes="(min-width: 1024px) 221px, (min-width: 768px) 33vw, 50vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className={`${D} text-lg leading-[25px] sm:text-xl`}>{n}</h3>
                    <p className="text-sm leading-[21px] text-[#666666]">{r}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="flex flex-col gap-6 border-t border-[#2B2B2B]/15 pt-7 md:flex-row md:items-center md:justify-between md:gap-8">
              <p className="max-w-[860px] text-[15px] leading-6 text-[#555555]">
                Asociados: Carlos Alejandro Pérez Espíndola, Israel Escobar Espíndola, Maximiliano Valdés Cabal, Éric Rivera Hernández y Karla Ruiz Medina.
              </p>
              <a href={`${SITE}/ESP/abogados.php`} className="nudge flex w-fit shrink-0 items-center gap-2 border-b-2 border-[#EE7623] pb-1 text-[15px] font-semibold">
                Conoce a los abogados
                <ArrowRight className="h-[15px] w-[15px]" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Pro Bono */}
        <section id="pro-bono" className="scroll-mt-24 bg-[#EE7623] text-[#1F1F1F]">
          <div className={`${WRAP} flex flex-col gap-10 py-20 lg:py-[104px]`}>
            <Reveal as="h2" className={`${D} text-[clamp(2.25rem,3.2vw,2.875rem)] leading-[1.11]`}>
              Pro Bono
            </Reveal>
            <Reveal delay={0.06} as="p" className={`${D} max-w-[940px] text-[clamp(1.5rem,2.1vw,1.875rem)] font-light leading-[1.37]`}>
              Desde sus inicios, VILLAR® ha estado comprometida con la comunidad y su entorno social, brindando asesoría legal a organizaciones de la sociedad civil y a personas que requieren su apoyo.
            </Reveal>
            <div className="grid gap-10 pt-4 lg:grid-cols-[540px_1fr] lg:gap-16">
              <Reveal as="p" className="text-base leading-[26px]">
                Ha atendido temas relacionados con la niñez, la protección animal, la protección del medio ambiente y los recursos naturales, y el apoyo legal a damnificados por desastres naturales. Un Comité de Trabajo autoriza y supervisa cada asunto hasta su conclusión.
              </Reveal>
              <div className="flex flex-col gap-2.5">
                <Reveal as="h3" className="text-[15px] font-semibold">Organizaciones que apoya</Reveal>
                <Stagger as="ul" className={`${D} flex flex-col gap-2.5 text-[22px] leading-[29px]`} gap={0.06}>
                  {["Fundación Appleseed México, A.C.", "Centro Mexicano Pro Bono, A.C.", "Grupo Ecológico Sierra Gorda, I.A.P."].map((o) => (
                    <StaggerItem key={o} as="li" y={10}>
                      {o}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Contacto</h2>
              <Rule />
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[700px_1fr]">
              <Stagger className="grid gap-10 sm:grid-cols-2 sm:gap-8" gap={0.08}>
                {OFFICES.map((o) => (
                  <StaggerItem key={o.city} className="flex flex-col gap-4">
                    <div className="img-zoom relative h-[300px] w-full">
                      <Image src={`${IMG}/${o.img}`} alt={o.alt} fill sizes="(min-width: 640px) 334px, 100vw" className="object-cover object-[50%_28%]" />
                    </div>
                    <h3 className={`${D} text-2xl`}>{o.city}</h3>
                    <address className="text-[15px] not-italic leading-6 text-[#555555]">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                    <a href={o.telHref} className="link-u w-fit text-base font-semibold">
                      {o.tel}
                    </a>
                    <a href="mailto:contacto@villarabogados.com.mx" className="link-u w-fit text-[15px] text-[#B4520F]">
                      contacto@villarabogados.com.mx
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1}>
                <DemoForm className="flex flex-col gap-[18px] bg-[#F2F1EF] p-6 sm:p-10" noteClassName="text-sm text-[#555555]">
                  <h3 className={`${D} text-[28px]`}>Envía un mensaje</h3>
                  <Field label="Nombre *" name="nombre" autoComplete="name" />
                  <Field label="Correo electrónico *" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono *" name="telefono" type="tel" autoComplete="tel" />
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Mensaje *</span>
                    <textarea
                      name="mensaje"
                      required
                      rows={5}
                      className="h-[132px] resize-none border border-[#CFCDC9] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#B4520F] focus:shadow-[0_0_0_3px_rgba(238,118,35,0.2)]"
                    />
                  </label>
                  <p className="text-[13px] text-[#666666]">*Todos los campos son obligatorios</p>
                  <button type="submit" className="press w-full bg-[#EE7623] px-6 py-4 text-base font-semibold text-[#1F1F1F] hover:bg-[#F28A43]">
                    Enviar mensaje
                  </button>
                </DemoForm>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#444444] text-white">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-4">
              <nav aria-label="Pie de página">
                <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                  {NAV.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-u">
                        {l.label}
                      </a>
                    </li>
                  ))}
                  <li>Únete al Equipo</li>
                </ul>
              </nav>
              <ul className="flex items-center gap-[18px] lg:pl-4" aria-label="Redes sociales">
                <li>
                  <a href="https://www.facebook.com/VillarAbogados" aria-label="Facebook" className="press flex h-8 w-8 items-center justify-center hover:text-[#EE7623]">
                    <FacebookLogo className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/VillarAbogados" aria-label="X" className="press flex h-8 w-8 items-center justify-center text-lg font-semibold hover:text-[#EE7623]">
                    𝕏
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/villar-villar-abogados/" aria-label="LinkedIn" className="press flex h-8 w-8 items-center justify-center hover:text-[#EE7623]">
                    <LinkedinLogo className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/20 pt-6 text-[13px] text-white/80 lg:flex-row lg:justify-between">
            <p>Aviso de Privacidad · Código de Ética · Política de No Discriminación · Términos y Condiciones</p>
            <p>Villar &amp; Villar Abogados, S.C. 2026 | Todos los derechos reservados©</p>
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
        required
        className="h-12 w-full border border-[#CFCDC9] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#B4520F] focus:shadow-[0_0_0_3px_rgba(238,118,35,0.2)]"
      />
    </label>
  );
}
