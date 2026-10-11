import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Gilda_Display, Source_Sans_3 } from "next/font/google";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Gilda_Display({ subsets: ["latin"], weight: "400", variable: "--s49-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--s49-body" });

export const metadata: Metadata = {
  title: "Pinto & Shehoah Abogados",
  description: "Juicios y procedimientos en materia civil, mercantil y familiar, en todas sus instancias, desde 1982.",
};

const IMG = "/sitios/pintoyshehoah";
const MAPS = "https://goo.gl/maps/jo9Dkzy3ZPj9SsK77";
const EMAIL = "contacto@pintoyshehoah.com";

const NAV = [
  { label: "Despacho", href: "#despacho" },
  { label: "Áreas de práctica", href: "#areas-de-practica" },
  { label: "Abogados", href: "#abogados" },
  { label: "Reconocimientos", href: "#reconocimientos" },
];

const RECOGNITIONS = [
  { file: "lideres-2019.png", w: 152, alt: "Líderes 2019" },
  { file: "top-abogados-2020.png", w: 89, alt: "Tops México, Los Mejores Abogados 2020" },
  { file: "mundo-ejecutivo.png", w: 118, alt: "Mundo Ejecutivo" },
  { file: "tops-2021.jpg", w: 88, alt: "Tops México, Los Mejores Abogados 2021" },
  { file: "articulo.jpg", w: 134, alt: "Las mejores firmas legales en México" },
  { file: "top-abogados-2023.png", w: 105, alt: "Tops México, Los Mejores Abogados 2023" },
  { file: "chambers-2023.png", w: 116, alt: "Chambers and Partners 2023" },
];

const AREAS = [
  ["Derecho Mercantil y Corporativo", "Controversias entre accionistas, títulos de crédito, fideicomisos, asambleas y consejos de administración, y contratos mercantiles de todo tipo."],
  ["Derecho Civil", "Contratos civiles y reclamación de su cumplimiento o rescisión; responsabilidad civil, simulación de actos jurídicos, nulidad y daño moral."],
  ["Derecho Familiar", "Matrimonio, regímenes patrimoniales, divorcio, alimentos, adopción, filiación, patria potestad, guarda y custodia, y tutela."],
  ["Derecho Sucesorio", "Elaboración y ejecución de testamentos; procedimientos sucesorios testamentarios e intestamentarios, judiciales o extrajudiciales."],
  ["Arrendamiento", "Juicios derivados de contratos de arrendamiento de inmuebles y muebles, desocupación o devolución y recuperación de rentas."],
  ["Derecho Patrimonial e Inmobiliario", "Propiedad, posesión, usufructo y servidumbre; anotaciones en el Registro Público y escrituraciones ante fedatarios públicos."],
  ["Garantías", "Juicios y asesoría sobre hipotecas, prendas, fideicomisos y otras garantías, incluyendo su ejecución o defensa."],
  ["Litigios Especializados", "Propiedad industrial y derechos de autor ante la autoridad judicial, y litigios por la actuación de notarios, corredores y agentes aduanales."],
];

const PARTNERS = [
  {
    name: "Jaime Shehoah Jalife",
    bio: "Abogado egresado de la Universidad Iberoamericana (1999). Litigio civil, mercantil, procesal y familiar. Miembro de la Barra Mexicana Colegio de Abogados. Ha colaborado en Martínez Carrera Abogados y Cacheaux, Cavazos & Newton.",
  },
  {
    name: "Luis Alberto Ramírez Esquivel",
    bio: "Abogado egresado de la UNAM (2008) y Maestro por la Universidad Ius Semper (2017). Litigio civil, mercantil, procesal y familiar; procedimientos concursales, arbitrales y administrativos.",
  },
];

const TEAM = [
  ["Marco Antonio Rosales de la Garza", "Derecho Penal y Procesal Penal. Escuela Libre de Derecho."],
  ["Karla Pinto de Santiago Palomares", "Litigio civil, mercantil y familiar. Universidad Iberoamericana."],
  ["Eva Juárez Morales", "Litigio civil, mercantil y familiar. UNAM."],
  ["Pablo González Rosendo", "Litigio civil, mercantil y familiar."],
  ["Rafael Ortega Pinto", "Derecho corporativo y societario. Universidad Iberoamericana."],
];

const PHONES = [
  ["55 5514 4257", "55 5514 6056", "55 5208 7894"],
  ["55 5207 8048", "55 5525 0276"],
];
const tel = (n: string) => `tel:+52${n.replace(/\s/g, "")}`;

function Logo() {
  return (
    <a href="#top" className="block" aria-label="Pinto & Shehoah Abogados, inicio">
      <Image src={`${IMG}/logo.svg`} alt="Pinto & Shehoah Abogados" width={247} height={40} loading="eager" className="h-auto w-[200px] sm:w-[247px]" />
    </a>
  );
}

export default function PintoShehoahPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s49-body)] text-[#061E52] selection:bg-[#0F52A0] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#061E52] text-white"
        scrolledClassName="shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
        innerClassName="mx-auto flex h-[76px] max-w-[1200px] items-center gap-9 px-5 md:px-8 lg:h-[92px] xl:px-0 [&>button]:ml-auto [&>nav]:ml-auto [&>nav>ul]:gap-9"
        linkClassName="text-base text-white/90 hover:text-white transition-colors duration-200"
        panelClassName="bg-[#061E52] text-white font-[family-name:var(--s49-body)]"
        panelLinkClassName="font-[family-name:var(--s49-display)] text-3xl"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press bg-[#0F52A0] px-6 py-[13px] text-base font-semibold text-white hover:bg-[#1A60B3]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#061E52] lg:min-h-[740px]">
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={50}>
            <Image src={`${IMG}/back_footer-1920w.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#061E52F5_0%,#061E52D9_45%,#061E5240_100%)] max-md:bg-[linear-gradient(90deg,#061E52F5_0%,#061E52D9_60%,#061E5299_100%)]" />
          <HeroIntro className="mx-auto flex max-w-[1200px] flex-col justify-center gap-[30px] px-5 pb-24 pt-24 md:px-8 lg:min-h-[740px] lg:pb-10 lg:pt-0 xl:px-0">
            <HeroItem as="h1" blur className="max-w-[820px] font-[family-name:var(--s49-display)] text-[clamp(2.6rem,5.4vw,4.875rem)] leading-[1.05] text-white">
              Más de 40 años de <br className="hidden sm:block" />
              experiencia en litigio
            </HeroItem>
            <HeroItem as="p" className="max-w-[520px] text-lg leading-[1.55] text-white/85 md:text-xl">
              Juicios y procedimientos en materia civil, mercantil y familiar, en todas sus instancias, desde 1982.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2.5">
              <a href="#contacto" className="press bg-white px-8 py-[17px] text-[17px] font-semibold text-[#061E52] hover:bg-[#E6ECF5]">
                Contáctanos
              </a>
              <a href="#areas-de-practica" className="nudge flex items-center gap-2.5 text-[17px] font-semibold text-white">
                Áreas de práctica
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </a>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Reconocimientos */}
        <section id="reconocimientos" className="scroll-mt-20 bg-black text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-11 md:px-8 xl:flex-row xl:items-center xl:justify-between xl:gap-10 xl:px-0">
            <Reveal as="h2" className="shrink-0 font-[family-name:var(--s49-display)] text-[26px]">
              Reconocimientos
            </Reveal>
            <Stagger className="flex flex-wrap items-center gap-x-6 gap-y-6 xl:flex-nowrap" gap={0.05}>
              {RECOGNITIONS.map((r) => (
                <StaggerItem key={r.file} className="relative h-9 shrink-0" y={10}>
                  <div className="relative h-9" style={{ width: r.w }}>
                    <Image src={`${IMG}/reconocimientos/${r.file}`} alt={r.alt} fill sizes={`${r.w * 2}px`} className="object-contain" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Despacho */}
        <section id="despacho" className="scroll-mt-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 pb-24 pt-24 md:px-8 lg:pb-[130px] lg:pt-[150px] xl:px-0">
            <Reveal className="flex flex-col gap-7">
              <h2 className="font-[family-name:var(--s49-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.1]">Despacho</h2>
              <p className="max-w-[940px] font-[family-name:var(--s49-display)] text-[clamp(1.5rem,2.3vw,2rem)] leading-[1.34] text-[#0F52A0]">
                Somos una firma de abogados con reconocida experiencia en diversos campos de especialización jurídica, fundada en 1982 por Carlos Pinto Hajj.
              </p>
            </Reveal>
            <Stagger className="grid gap-[22px] text-[17px] leading-[29px] text-[#4F5561] md:grid-cols-2 md:gap-x-[72px]" gap={0.08}>
              <StaggerItem className="flex flex-col gap-[22px]">
                <p>
                  Hemos participado en los asuntos litigiosos y en las controversias judiciales más importantes de México en las últimas décadas, especializándonos en asuntos altamente complejos que requieren estrategias innovadoras: recuperación de empresas y propiedades, controversias de accionistas, cobro de créditos y otras.
                </p>
                <p>
                  Representamos a clientes nacionales e internacionales, incluyendo empresas de alto reconocimiento a nivel mundial, así como a sus accionistas, directores y funcionarios, hasta individuos y pequeños negocios.
                </p>
              </StaggerItem>
              <StaggerItem className="flex flex-col gap-[22px]">
                <p>
                  Nos caracterizamos por brindar un servicio personalizado. Diseñamos estrategias jurídicas que son producto de un estudio exhaustivo de los problemas y derechos de nuestros clientes, y mantenemos con ellos una comunicación efectiva y transparente.
                </p>
                <p>
                  Establecidos principalmente en la Ciudad de México y su Zona Metropolitana, con frecuencia atendemos litigios en todos los estados del país y en el extranjero, según las necesidades de nuestros clientes.
                </p>
              </StaggerItem>
            </Stagger>
            <Reveal className="flex flex-col gap-4 border-t border-[#061E5226] pt-9">
              <h3 className="text-[15px] font-semibold">Sectores de nuestros clientes</h3>
              <p className="font-[family-name:var(--s49-display)] text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.46]">
                Televisoras / Entretenimiento y Medios / Telefonía / Transporte / Inmobiliario / Construcción e Ingeniería / Aviación / Comercio
              </p>
            </Reveal>
          </div>
        </section>

        {/* Resoluciones */}
        <section aria-label="Resoluciones" className="grid bg-[#0F52A0] text-white lg:min-h-[500px] lg:grid-cols-[43%_1fr]">
          <MediaReveal onView delay={0} className="relative h-[280px] overflow-hidden md:h-[380px] lg:h-full">
            <Image src={`${IMG}/area-suprema.png`} alt="Pleno de la Suprema Corte de Justicia de la Nación" fill sizes="(min-width: 1024px) 43vw, 100vw" className="object-cover" />
          </MediaReveal>
          <Reveal className="flex flex-col justify-center gap-[26px] px-5 py-16 md:px-8 lg:py-10 lg:pl-14 lg:pr-[max(2rem,calc((100vw-1200px)/2))] xl:pl-[88px]">
            <p className="font-[family-name:var(--s49-display)] text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.3]">
              Hemos logrado diversas resoluciones y sentencias relevantes que han contribuido al avance del sistema legal mexicano.
            </p>
            <p className="text-lg leading-[30px] text-white/[0.88]">
              Algunas han modificado la forma de litigar en México: han ayudado a la creación de jurisprudencias y a la interpretación o aplicación de las leyes por parte de la Suprema Corte de Justicia de la Nación.
            </p>
            <p className="text-base font-semibold leading-[26px]">
              Reconocida en el foro como uno de los despachos especializados en Litigio más importantes y consolidados de México.
            </p>
          </Reveal>
        </section>

        {/* Áreas de práctica */}
        <section id="areas-de-practica" className="scroll-mt-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-[60px] px-5 py-24 md:px-8 lg:py-[140px] xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 className="font-[family-name:var(--s49-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.1]">Áreas de práctica</h2>
              <p className="max-w-[640px] text-[19px] leading-[30px] text-[#4F5561]">
                La confianza que proyecta Pinto &amp; Shehoah se ha construido con base en logros y experiencias.
              </p>
            </Reveal>
            <div className="grid gap-12 lg:grid-cols-[430px_1fr] lg:gap-16">
              <Reveal className="flex flex-col bg-[#061E52] text-white">
                <div className="img-zoom relative h-[260px] md:h-[340px] lg:h-[380px]">
                  <Image src={`${IMG}/litigio-800h.jpg`} alt="Mazo de juez" fill sizes="(min-width: 1024px) 430px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-3.5 px-7 pb-10 pt-8 md:px-9 md:pt-[34px]">
                  <h3 className="font-[family-name:var(--s49-display)] text-[34px] leading-tight">Litigio</h3>
                  <p className="text-[17px] leading-7 text-white/[0.88]">
                    Atendemos juicios en materia civil, mercantil y familiar de todo tipo y en todas sus instancias, incluyendo el juicio de amparo.
                  </p>
                </div>
              </Reveal>
              <Stagger className="grid gap-x-12 gap-y-9 sm:grid-cols-2" gap={0.06}>
                {AREAS.map(([t, d]) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-2.5 border-t border-[#061E5224] pt-5">
                    <h3 className="font-[family-name:var(--s49-display)] text-[25px] leading-[30px]">{t}</h3>
                    <p className="text-base leading-[26px] text-[#4F5561]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Abogados */}
        <section id="abogados" className="scroll-mt-20 bg-[#061E52] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-5 py-24 md:px-8 lg:py-[140px] xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 className="font-[family-name:var(--s49-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.1]">Abogados</h2>
              <p className="max-w-[700px] text-[19px] leading-[30px] text-white/80">
                Con más de 40 años de renombrada trayectoria, la firma ha sido liderada por un equipo de abogados con gran preparación y compromiso.
              </p>
            </Reveal>
            <Stagger className="grid gap-14 lg:grid-cols-[560px_1fr] lg:gap-20" gap={0.08}>
              <StaggerItem as="article" className="flex flex-col gap-2.5">
                <h3 className="font-[family-name:var(--s49-display)] text-[clamp(2rem,2.8vw,2.5rem)] leading-[1.15]">Carlos Pinto Hajj</h3>
                <p className="text-[15px] font-semibold text-white/70">Socio Fundador</p>
                <div className="flex flex-col gap-3 pt-2 text-base leading-[26px] text-white/85">
                  <p>
                    Abogado egresado de la Escuela Libre de Derecho (1979). Más de 40 años de práctica en derecho civil, mercantil, procesal y familiar, con experiencia en las controversias judiciales más importantes de México en las últimas décadas.
                  </p>
                  <p>
                    Miembro de la Barra Mexicana Colegio de Abogados, del Ilustre y Nacional Colegio de Abogados de México, de la Asociación Nacional de Abogados de Empresa y de la Asociación Jurídica Mexicano-Libanesa AL MUHAMI.
                  </p>
                  <p>Ha colaborado en Lechuga Ruiz S.C., Santamarina y Steta S.C. (Baker Botts) y Capín y Asociados S.C.</p>
                </div>
              </StaggerItem>
              <div className="flex flex-col gap-11">
                {PARTNERS.map((p) => (
                  <StaggerItem key={p.name} as="article" className="flex flex-col gap-2.5">
                    <h3 className="font-[family-name:var(--s49-display)] text-[30px] leading-[35px]">{p.name}</h3>
                    <p className="text-[15px] font-semibold text-white/70">Socio</p>
                    <p className="pt-2 text-base leading-[26px] text-white/85">{p.bio}</p>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
            <Stagger as="ul" className="grid gap-x-8 gap-y-8 border-t border-white/20 pt-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" gap={0.05}>
              {TEAM.map(([n, s]) => (
                <StaggerItem key={n} as="li" className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--s49-display)] text-[22px] leading-[26px]">{n}</h3>
                  <p className="text-[15px] leading-[23px] text-white/70">{s}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 bg-[#F7F7F7]">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 md:px-8 lg:grid-cols-[480px_1fr] lg:gap-24 lg:py-[140px] xl:px-0">
            <div className="flex flex-col gap-9">
              <Reveal className="flex flex-col gap-[18px]">
                <h2 className="font-[family-name:var(--s49-display)] text-[clamp(2.5rem,3.9vw,3.5rem)] leading-[1.1]">Contáctanos</h2>
                <p className="text-[19px] leading-[30px] text-[#4F5561]">Durango 245, Piso 11, Colonia Roma, Alcaldía Cuauhtémoc, 06700 Ciudad de México.</p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="link-u flex w-fit items-center gap-2 text-base font-semibold text-[#0F52A0]">
                  <MapPin className="h-[18px] w-[18px]" />
                  Ver en Google Maps
                </a>
              </Reveal>
              <Stagger className="flex flex-col gap-9" gap={0.08}>
                <StaggerItem className="flex flex-col gap-2.5 border-t border-[#061E5224] pt-7">
                  <p className="flex items-center gap-2.5 text-[15px] font-semibold">
                    <Phone className="h-[18px] w-[18px] text-[#0F52A0]" />
                    Teléfonos
                  </p>
                  <div className="flex gap-7">
                    {PHONES.map((col) => (
                      <ul key={col[0]} className="flex flex-col gap-1.5">
                        {col.map((n) => (
                          <li key={n}>
                            <a href={tel(n)} className="link-u text-[19px] text-[#1E2430]">{n}</a>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-2.5 border-t border-[#061E5224] pt-7">
                  <p className="flex items-center gap-2.5 text-[15px] font-semibold">
                    <Mail className="h-[18px] w-[18px] text-[#0F52A0]" />
                    Correo
                  </p>
                  <a href={`mailto:${EMAIL}`} className="link-u w-fit break-all text-[19px] text-[#1E2430]">{EMAIL}</a>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 outline outline-1 -outline-offset-1 outline-[#061E521A] sm:p-12" noteClassName="text-sm text-[#4F5561]">
                <h3 className="font-[family-name:var(--s49-display)] text-[30px]">Escríbenos</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-semibold">Mensaje</span>
                  <textarea name="mensaje" rows={5} className="h-[150px] resize-none border border-[#061E5233] bg-[#F7F7F7] px-4 py-3 text-base text-[#1E2430] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0F52A0] focus:shadow-[0_0_0_3px_rgba(15,82,160,0.15)]" />
                </label>
                <div className="flex justify-end pt-2">
                  <button type="submit" className="press bg-[#061E52] px-11 py-4 text-[17px] font-semibold text-white hover:bg-[#0F2D6E]">
                    Enviar
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#061E52] text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-5 pb-28 pt-[72px] md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-5">
              <Logo />
              <p className="text-[15px] leading-6 text-white/70">
                Durango 245, Piso 11, Colonia Roma,
                <br />
                Alcaldía Cuauhtémoc, 06700 Ciudad de México.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-10">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3 text-[15px] text-white/85">
                  {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex flex-col gap-3 text-[15px] text-white/85">
                <li><a href={tel("55 5514 4257")} className="link-u">55 5514 4257</a></li>
                <li><a href={tel("55 5514 6056")} className="link-u">55 5514 6056</a></li>
                <li><a href={`mailto:${EMAIL}`} className="link-u">{EMAIL}</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/[0.18] pt-6 text-sm text-white/65 sm:flex-row sm:justify-between">
            <p>© 2026 Pinto &amp; Shehoah Abogados. Todos los derechos reservados.{" "}<HemeronCredit /></p>
            <p>Aviso de Privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] border border-[#061E5233] bg-[#F7F7F7] px-4 text-base text-[#1E2430] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0F52A0] focus:shadow-[0_0_0_3px_rgba(15,82,160,0.15)]"
      />
    </label>
  );
}
