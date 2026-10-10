import type { Metadata } from "next";
import Image from "next/image";
import { Bodoni_Moda, Schibsted_Grotesk } from "next/font/google";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s11-display" });
const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--s11-body" });

export const metadata: Metadata = {
  title: "Krasovsky Abogados",
  description: "35 años de sólida práctica corporativa. Mantenemos una visión internacional, enfocada a dar resultados a nuestros clientes.",
};

const IMG = "/sitios/11-krasovsky";
const SITE = "http://krasovsky.com.mx";
const EMAIL = "contacto@krasovsky.com.mx";

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Clientes", href: "#clientes" },
  { label: "Altruismo", href: "#altruismo" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Empleo", href: "#empleo" },
];

const STATS = [
  ["4", "oficinas: Tijuana, Los Cabos, Ciudad de México e Irapuato."],
  ["2011", "Pioneros en demandas colectivas en México, a partir de la reforma al Código Federal de Procedimientos Civiles."],
  ["4 millones", "de personas beneficiadas por la sentencia colectiva a la que fue condenada AT&T."],
  ["2006", "Desde ese año apoyamos a la Casa Hogar Santa Teresita del Niño Jesús."],
];

const OFFICES = [
  { c: "Tijuana, Baja California", a: ["Misión de San Javier No. 10661, Penthouse", "Zona Río, Tijuana, B.C. 22010"], t: "(664) 634-2001", tel: "+526646342001" },
  { c: "Los Cabos, Baja California Sur", a: ["Bahía de las Palmas, Locales 2 y 3", "Plaza Caracol, Zona Hotelera", "San José del Cabo, B.C.S. 23045"], t: "(624) 142-1867", tel: "+526241421867" },
  { c: "Ciudad de México", a: ["Av. Paseo de las Palmas #731, Int. 1101", "Col. Lomas de Chapultepec I Sección", "Miguel Hidalgo, C.P. 11000"], t: "(55) 9172-2500", tel: "+525591722500" },
  { c: "Irapuato, Guanajuato", a: ["Blvd. Díaz Ordaz #1225-902", "Col. Reynas, Irapuato, Gto. 36660"], t: "(462) 625-3266", tel: "+524626253266" },
];

const PARTNERS = [
  { n: "Pedro Pérez Martínez", r: "Socio", d: "Litigio en materia Civil y Mercantil, Contratos de Garantía y Derecho Corporativo." },
  { n: "Manuel Pizarro Lebrija", r: "Socio, encargado de la oficina de Los Cabos, B.C.S.", d: "Derecho Inmobiliario, Corporativo, Inversiones Extranjeras, Fusiones, Adquisiciones y Asociaciones en Participación, Derecho Fiscal y Propiedad Intelectual." },
  { n: "Martha E. Morales Juárez", r: "En memoria", d: "Socia encargada de la práctica de Inmobiliario. Inversiones Extranjeras, Derecho Inmobiliario, Fiscal y Corporativo.", muted: true },
];

const ASSOCIATES = [
  ["Diego Ángel Córdova", "Cinthya Dávila Rojas", "Juan Uriel Nakamura Sibaja"],
  ["Jacqueline Gonzáles Rocha", "Alejandro Carrizales", "Mauricio Ramsés Hernández Cárdenas"],
];

const CLIENTS = [
  ["apasco-1", "Apasco"], ["axa", "AXA"], ["azteca", "Banco Azteca"], ["bancomer", "BBVA Bancomer"],
  ["bimbo", "Bimbo"], ["casas-geo", "Casas GEO"], ["cigarrera-la-moderna", "Cigarrera La Moderna"], ["frisa", "Frisa"],
  ["gpo-diavaz", "Grupo Diavaz"], ["intercam", "Intercam"], ["jvc", "JVC"], ["los-cabos-golf", "Los Cabos Golf"],
  ["mabe", "Mabe"], ["mecalux", "Mecalux"], ["sika", "Sika"], ["televisa", "Televisa"],
];

const SERIF = "font-[family-name:var(--s11-display)] font-medium";
const H2 = `${SERIF} text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.1] text-[#092F57]`;
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const RED_BTN = "press bg-[#E21D1D] font-semibold text-white hover:bg-[#C41616]";
const LINE_LINK = "nudge inline-flex w-fit items-center gap-2 pb-1 text-[15px] font-semibold text-white transition-[border-color] duration-200";

function List({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((i) => (
        <li key={i} className="text-[15px] font-medium leading-[1.4]">{i}</li>
      ))}
    </ul>
  );
}

export default function KrasovskyPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s11-body)] text-[#2E363A] selection:bg-[#092F57] selection:text-white`}
    >
      <SiteNav
        logo={
          <a href="#top" aria-label="Krasovsky Abogados, inicio" className="block">
            <Image src={`${IMG}/logo.svg`} alt="" width={240} height={44} loading="eager" className="h-auto w-[190px] md:w-[240px]" />
          </a>
        }
        links={NAV}
        className="border-b border-[#E4E4E4] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(9,47,87,0.35)]"
        innerClassName={`${WRAP} flex h-[72px] items-center justify-between gap-8 lg:h-[88px]`}
        linkClassName="text-[15px] font-medium text-[#2E363A]"
        panelClassName="bg-white text-[#092F57] font-[family-name:var(--s11-body)]"
        panelLinkClassName="font-[family-name:var(--s11-display)] text-3xl font-medium"
        burgerClassName="bg-[#092F57]"
        topBar={
          <div className="bg-[#092F57] text-[13px] text-[#C9D2DE]">
            <div className={`${WRAP} flex h-10 items-center justify-between gap-6`}>
              <div className="flex items-center gap-5 md:gap-7">
                <a href="tel:+526646342001" className="link-u whitespace-nowrap">Tijuana (664) 634-2001</a>
                <a href={`mailto:${EMAIL}`} className="link-u hidden whitespace-nowrap sm:inline">{EMAIL}</a>
              </div>
              <p className="hidden whitespace-nowrap md:block">Tijuana · Los Cabos · Ciudad de México · Irapuato</p>
            </div>
          </div>
        }
        actions={
          <a href="#contacto" className={`${RED_BTN} px-[22px] py-[13px] text-[15px]`}>
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#092F57] text-white lg:h-[620px] lg:grid-cols-[760fr_680fr]">
          <HeroIntro className="flex flex-col justify-center gap-9 px-5 py-20 md:px-8 lg:py-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-14">
            <HeroItem as="h1" blur className={`${SERIF} flex flex-wrap items-end gap-x-[18px] gap-y-2`}>
              <span className="text-[clamp(7.5rem,13.6vw,12.25rem)] leading-[0.82] tracking-[-6px]">35</span>
              <span className="flex flex-col gap-0.5 pb-1.5 text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.08]">
                <span>años de sólida</span>
                <span className="italic">práctica corporativa</span>
              </span>
            </HeroItem>
            <HeroItem className="h-[3px] w-16 bg-[#E21D1D]">{null}</HeroItem>
            <HeroItem as="p" className="max-w-[470px] text-lg leading-[1.53] text-[#C9D2DE] md:text-[19px]">
              Mantenemos una visión internacional, enfocada a dar resultados a nuestros clientes.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-7">
              <a href="#contacto" className={`${RED_BTN} px-7 py-4 text-base`}>
                Contáctanos
              </a>
              <a href="#areas" className="nudge inline-flex items-center gap-2.5 border-b border-white/40 pb-1 text-base font-semibold transition-[border-color] duration-200 hover:border-white">
                Áreas de práctica
                <ArrowRight className="h-4 w-4" />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[340px] overflow-hidden md:h-[460px] lg:h-full" delay={0.25}>
            <Image src={`${IMG}/hero-corporativo.jpg`} alt="Abogado firmando un contrato sobre el escritorio" fill preload sizes="(min-width: 1024px) 47vw, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Cifras */}
        <section aria-label="Krasovsky en cifras">
          <Stagger as="dl" gap={0.07} className={`${WRAP} grid gap-x-12 gap-y-10 pb-[72px] pt-16 sm:grid-cols-2 lg:grid-cols-4`}>
            {STATS.map(([n, t]) => (
              <StaggerItem key={n} className="flex flex-col-reverse justify-end gap-3 border-t-2 border-[#092F57] pt-6">
                <dt className="text-[15px] leading-[1.53] text-[#4A5358]">{t}</dt>
                <dd className={`${SERIF} text-[clamp(2.75rem,3.5vw,3.125rem)] leading-none text-[#092F57]`}>
                  <CountUp value={n} />
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-32 bg-[#F3F4F6]">
          <div className={`${WRAP} grid items-center gap-12 py-24 lg:grid-cols-[540px_1fr] lg:gap-20 lg:py-28`}>
            <MediaReveal onView delay={0} className="relative aspect-[540/440] w-full overflow-hidden">
              <Image src={`${IMG}/despacho.jpg`} alt="Luis Miguel Krasovsky con su equipo en la oficina" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={`${SERIF} text-[clamp(2rem,2.9vw,2.625rem)] leading-[1.12] text-[#092F57]`}>
                Una visión internacional, enfocada en resultados
              </Reveal>
              <Reveal delay={0.06} className="flex flex-col gap-6 text-base leading-[1.625] text-[#3F474B]">
                <p>
                  Dentro del ámbito de nuestras actividades, trabajamos para intensificar el comercio e inversiones bilaterales y multilaterales. Constantemente nos interrelacionamos con otras firmas legales, individuos, empresas y corporativos con la intención de hacer negocios en México.
                </p>
                <p>
                  Estamos orgullosos no solo de nuestra habilidad para representar a nuestros clientes adecuadamente, sino también de nuestra amplia capacidad de investigación, que los mantiene continua y oportunamente informados.
                </p>
              </Reveal>
              <Reveal delay={0.12} as="figure" className="flex flex-col gap-3 border-l-[3px] border-[#E21D1D] py-1 pl-7">
                <blockquote className="font-[family-name:var(--s11-display)] text-[clamp(1.25rem,1.7vw,1.5rem)] italic leading-[1.33] text-[#092F57]">
                  «La diferencia entre un mal y un buen inversionista es el acceso a una oportuna información.»
                </blockquote>
                <figcaption className="text-[15px] leading-[1.67] text-[#5A6267]">
                  Por eso mantenemos a nuestros clientes actualizados sobre cambios en los sistemas legales, estímulos fiscales, procedimientos y juicios nacionales e internacionales.
                </figcaption>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className={`${WRAP} flex scroll-mt-32 flex-col gap-12 py-24 lg:py-28`}>
          <Reveal as="h2" className={H2}>Áreas de práctica</Reveal>
          <Stagger gap={0.07} className="flex flex-col gap-5">
            <div className="grid gap-5 lg:grid-cols-[700fr_480fr]">
              <StaggerItem as="article" className="flex flex-col gap-5 bg-[#092F57] p-7 text-white md:p-11 lg:min-h-[489px]">
                <h3 className={`${SERIF} text-[30px] leading-[1.17]`}>Práctica corporativa</h3>
                <p className="text-base leading-[1.625] text-[#D3DAE3]">
                  Ha concretado las más difíciles adquisiciones, fusiones y asociaciones en la región de diversos inversionistas extranjeros y mexicanos, estableciendo la estructura legal de sus negocios en México. En los últimos años desarrolló una práctica en Propiedad Industrial e Intelectual.
                </p>
                <div className="grid gap-x-8 gap-y-2.5 border-t border-white/20 pt-5 sm:grid-cols-2">
                  <List items={["Fusiones y adquisiciones", "Derecho Corporativo", "Anticorrupción, Cumplimiento e Investigación", "Asociaciones en Participación", "Inversiones Extranjeras en México"]} />
                  <List items={["ASG", "Maquiladoras, Aduanas y Ley de Comercio Exterior", "Derecho Laboral", "Ley de Propiedad Industrial"]} />
                </div>
              </StaggerItem>
              <StaggerItem as="article" className="flex flex-col gap-5 bg-[#F3F4F6] p-7 md:p-11 lg:min-h-[489px]">
                <h3 className={`${SERIF} text-[30px] leading-[1.17] text-[#092F57]`}>Litigio</h3>
                <p className="text-base leading-[1.625] text-[#3F474B]">
                  Ha representado a la mayoría de los Bancos Mexicanos y a muchos Bancos e Instituciones Financieras Extranjeras, y ha participado como experto en derecho mexicano en diversos litigios en el extranjero.
                </p>
                <div className="border-t border-[#092F57]/15 pt-5">
                  <List items={["Litigio Civil y Mercantil", "Aseguramiento de Activos y Ejecución de Garantías", "Procedimientos Administrativos", "Derecho Constitucional", "Juicios de Amparo", "Acciones Colectivas"]} />
                </div>
              </StaggerItem>
            </div>
            <div className="grid gap-5 lg:grid-cols-[700fr_480fr]">
              <StaggerItem as="article" className="grid bg-[#F3F4F6] sm:grid-cols-[240px_1fr] lg:min-h-[428px]">
                <div className="img-zoom relative h-[220px] sm:h-auto">
                  <Image src={`${IMG}/inmobiliario.jpg`} alt="Llaves y mazo de juez sobre una mesa" fill sizes="(min-width: 640px) 240px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-5 p-7 md:p-11">
                  <h3 className={`${SERIF} text-[30px] leading-[1.17] text-[#092F57]`}>Inmobiliario</h3>
                  <p className="text-base leading-[1.625] text-[#3F474B]">
                    Asesoría a desarrolladores e inversionistas de la región, del país y del extranjero en el diseño legal y estructuración del negocio inmobiliario, estudios de titulación y autorizaciones de fraccionamientos.
                  </p>
                  <div className="grid gap-x-8 gap-y-2.5 border-t border-[#092F57]/15 pt-5 sm:grid-cols-2">
                    <List items={["Estudios de Titulación", "Industrial, Comercial y Residencial", "Privatización de Ejidos"]} />
                    <List items={["Infraestructura y Autorización de Fraccionamientos", "Desarrollos Turísticos, Fideicomisos"]} />
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem as="article" className="flex flex-col gap-5 border border-[#D9DDE3] bg-white p-7 md:p-11 lg:min-h-[428px]">
                <h3 className={`${SERIF} text-[30px] leading-[1.17] text-[#092F57]`}>Penal</h3>
                <p className="text-base leading-[1.625] text-[#3F474B]">
                  Preparamos demandas y defendemos a nuestros clientes en todas las ciudades y estados del país. La mayoría de nuestros clientes se relacionan con casos de delitos de «cuello blanco». La firma declina asuntos de narcotráfico, crimen organizado, secuestros y violaciones.
                </p>
              </StaggerItem>
            </div>
            <div className="grid gap-5 lg:grid-cols-[480fr_700fr]">
              <StaggerItem as="article" className="flex flex-col gap-5 border border-[#D9DDE3] bg-white p-7 md:p-11 lg:min-h-[273px]">
                <h3 className={`${SERIF} text-[30px] leading-[1.17] text-[#092F57]`}>Juicios agrarios</h3>
                <p className="text-base leading-[1.625] text-[#3F474B]">
                  Asesoría legal para adquirir tierras ejidales, desde la ubicación de tierras, negociación y certificación del ejido hasta la firma de escritura. En litigio participamos en juicios agrarios y civiles en torno a bienes inmuebles.
                </p>
              </StaggerItem>
              <StaggerItem as="article" className="flex flex-col gap-5 bg-[#3A526A] p-7 text-white md:p-11 lg:min-h-[273px]">
                <h3 className={`${SERIF} text-[30px] leading-[1.17]`}>Ambiental, Recursos Naturales y Energía</h3>
                <p className="text-base leading-[1.625] text-[#D3DAE3]">
                  En alianza con Celis Aguilar Álvarez y Asociados, firma de Derecho Ambiental pionera en México, para continuar prestando servicios en materia Ambiental, Recursos Naturales y Energía.
                </p>
              </StaggerItem>
            </div>
          </Stagger>
        </section>

        {/* Acciones colectivas / Publicaciones */}
        <section id="publicaciones" className="scroll-mt-32 bg-[#092F57] text-white">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:py-28`}>
            <Reveal className="flex max-w-[760px] flex-col gap-5">
              <h2 className={`${SERIF} text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.1]`}>Pioneros en demandas colectivas en México</h2>
              <p className="text-[17px] leading-[1.6] text-[#C9D2DE]">
                A partir de la reforma al Código Federal de Procedimientos Civiles en 2011, la Firma ha presentado demandas colectivas y ha asesorado a grandes empresas para prepararlas contra posibles demandas de las que pudieran ser objeto.
              </p>
            </Reveal>
            <Stagger gap={0.1} className="grid items-start gap-14 lg:grid-cols-[700fr_460fr] lg:gap-10">
              <StaggerItem as="article" className="flex flex-col gap-5">
                <div className="img-zoom relative aspect-[700/334] w-full">
                  <Image src={`${IMG}/libro-acciones-colectivas.jpg`} alt="Portada del libro Acciones Colectivas y la traición a la justicia" fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
                </div>
                <p className="text-sm font-medium text-[#9FB0C4]">11 de agosto de 2026</p>
                <h3 className={`${SERIF} text-[clamp(1.5rem,2.2vw,1.75rem)] leading-[1.25]`}>
                  Se felicita al Lic. Krasovsky por la publicación de su libro «Acciones Colectivas y la traición a la justicia» en editorial Tirant
                </h3>
                <p className="text-base leading-[1.625] text-[#C9D2DE]">Este libro es a la vez una denuncia, un testimonio y una hoja de ruta.</p>
                <a
                  href="https://editorial.tirant.com/mex/libro/las-acciones-colectivas-y-la-traicion-a-la-justicia-krasovsky-luis-miguel-9791370217778"
                  className={`${LINE_LINK} mt-1 border-b-2 border-[#E21D1D] hover:border-white`}
                >
                  Ver libro en editorial Tirant
                </a>
              </StaggerItem>
              <StaggerItem as="article" className="flex flex-col gap-5">
                <div className="img-zoom relative h-[220px] w-full">
                  <Image src={`${IMG}/resolucion-att.jpg`} alt="Resolución judicial del caso Krasovsky Abogados contra AT&T" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
                </div>
                <p className="text-sm font-medium text-[#9FB0C4]">11 de agosto de 2026</p>
                <h3 className={`${SERIF} text-[22px] leading-[1.27]`}>
                  El despacho ha obligado a AT&amp;T a publicitar ampliamente en todas sus redes sociales, durante los siguientes 18 meses, una sentencia colectiva a la que fue condenada en beneficio de 4 millones de personas.
                </h3>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-3">
                  <a
                    href={`${SITE}/el-despacho-ha-obligado-a-att-a-publicitar-ampliamente-en-todas-sus-redes-sociales-durante-los-siguientes-18-meses-una-sentencia-colectiva-a-la-que-fue-condenada-en-beneficio-de-4-millones-de/`}
                    className={`${LINE_LINK} border-b-2 border-[#E21D1D] hover:border-white`}
                  >
                    Descargar resolución judicial (PDF)
                  </a>
                  <a
                    href="https://wa.me/5218132619002?text=Hola%2C%20estoy%20interesado%20en%20ser%20parte%20de%20la%20demanda%20colectiva%20contra%20AT%26T"
                    className={`${LINE_LINK} border-b-2 border-[#E21D1D] hover:border-white`}
                  >
                    Únete a la demanda vs AT&amp;T
                  </a>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className={`${WRAP} flex scroll-mt-32 flex-col gap-14 pb-24 pt-24 lg:pb-[104px] lg:pt-28`}>
          <Reveal as="h2" className={H2}>Equipo</Reveal>
          <div className="grid gap-14 lg:grid-cols-[600px_1fr] lg:gap-[72px]">
            <Reveal className="flex flex-col gap-8 sm:flex-row">
              <div className="relative aspect-[216/270] w-full max-w-[216px] shrink-0 self-start overflow-hidden bg-[#F3F4F6]">
                <Image src={`${IMG}/luis-miguel-krasovsky.jpg`} alt="Luis Miguel Krasovsky Prieto" fill sizes="216px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3.5">
                <h3 className={`${SERIF} text-[30px] leading-[1.17] text-[#092F57]`}>Luis Miguel Krasovsky Prieto</h3>
                <p className="text-sm font-semibold text-[#E21D1D]">Socio</p>
                <p className="text-[15px] leading-[1.6] text-[#3F474B]">
                  Sus principales áreas de práctica incluyen las Acciones Colectivas, Inversión Extranjera (incluyendo maquiladoras), Derecho Inmobiliario, Bancario y Financiero, así como Litigio.
                </p>
                <p className="text-[15px] leading-[1.6] text-[#3F474B]">Autor de «Acciones Colectivas y la traición a la justicia», editorial Tirant.</p>
              </div>
            </Reveal>
            <Stagger gap={0.07} className="flex flex-col gap-9">
              {PARTNERS.map((p) => (
                <StaggerItem key={p.n} as="article" className="flex flex-col gap-1.5">
                  <h3 className={`${SERIF} text-[22px] leading-[normal] text-[#092F57]`}>{p.n}</h3>
                  <p className={`text-sm font-semibold leading-[normal] ${p.muted ? "text-[#5A6267]" : "text-[#E21D1D]"}`}>{p.r}</p>
                  <p className="text-[15px] leading-[1.6] text-[#3F474B]">{p.d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="grid gap-12 border-t border-[#D9DDE3] pt-10 lg:grid-cols-[420px_1fr] lg:gap-[72px]">
            <Reveal className="flex flex-col gap-4">
              <h3 className={`${SERIF} text-2xl text-[#092F57]`}>Consejeros</h3>
              {[
                ["Mariko Kawarabata", "Derecho Corporativo, Contratos Mercantiles y Minería."],
                ["Jorge Aguirre Carreón", "Más de 33 años asesorando a inversionistas extranjeros en México."],
              ].map(([n, d]) => (
                <div key={n} className="flex flex-col gap-0.5">
                  <p className="text-base font-semibold leading-[normal]">{n}</p>
                  <p className="text-[15px] leading-[1.6] text-[#5A6267]">{d}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-4">
              <h3 className={`${SERIF} text-2xl text-[#092F57]`}>Asociados</h3>
              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {ASSOCIATES.map((col, i) => (
                  <ul key={i} className="flex flex-col gap-3">
                    {col.map((n) => (
                      <li key={n} className="text-base font-medium leading-[normal]">{n}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-32 bg-[#F3F4F6]">
          <div className={`${WRAP} flex flex-col gap-12 py-24`}>
            <Reveal as="h2" className={`${SERIF} text-[clamp(1.875rem,2.6vw,2.25rem)] leading-[1.14] text-[#092F57]`}>
              Algunos de nuestros clientes presentes y pasados
            </Reveal>
            <Stagger as="ul" gap={0.04} className="grid grid-cols-4 lg:grid-cols-8">
              {CLIENTS.map(([f, n]) => (
                <StaggerItem key={f} as="li" y={10} className="flex h-[96px] items-center justify-center md:h-[112px]">
                  <Image src={`${IMG}/clientes/${f}.png`} alt={n} width={112} height={52} className="h-[40px] w-full max-w-[112px] object-contain px-1 md:h-[52px]" />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Altruismo y Empleo */}
        <section id="altruismo" className="scroll-mt-32 bg-[#3A526A] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-2 lg:gap-16`}>
            <Reveal className="flex flex-col items-start gap-5">
              <h2 className={`${SERIF} text-[clamp(1.625rem,2.2vw,1.875rem)] leading-[1.2]`}>Desde 2006 apoyamos a la Casa Hogar Santa Teresita del Niño Jesús</h2>
              <p className="text-base leading-[1.625] text-[#DCE3EA]">
                Institución sin fines de lucro fundada en 1977 y a cargo de las Hermanas del Sagrado Corazón, que ofrece amparo a niñas huérfanas víctimas de violencia intrafamiliar o de familias disfuncionales. Te invitamos a unirte a nuestros esfuerzos.
              </p>
              <a href={`${SITE}/altruismo/`} className={`${LINE_LINK} border-b border-white py-1 hover:border-[#E21D1D]`}>
                Conoce cómo apoyar
                <ArrowRight className="h-[15px] w-[15px]" />
              </a>
            </Reveal>
            <Reveal delay={0.08} id="empleo" className="flex scroll-mt-32 flex-col items-start gap-5 border-t border-white/25 pt-14 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <h2 className={`${SERIF} text-[clamp(1.625rem,2.2vw,1.875rem)] leading-[1.2]`}>Forma parte de nuestro equipo y construye tu futuro en el mundo legal</h2>
              <p className="text-base leading-[1.625] text-[#DCE3EA]">
                Si eres estudiante de derecho y buscas una oportunidad para aplicar tus conocimientos en casos reales, te invitamos a unirte a nosotros.
              </p>
              <a href={`${SITE}/oportunidades-de-trabajo/`} className={`${LINE_LINK} border-b border-white py-1 hover:border-[#E21D1D]`}>
                Envíanos tu CV
                <ArrowRight className="h-[15px] w-[15px]" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className={`${WRAP} grid scroll-mt-32 gap-14 py-24 lg:grid-cols-[660px_1fr] lg:gap-[72px] lg:py-28`}>
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-3.5">
              <h2 className={H2}>Nuestras oficinas</h2>
              <a href={`mailto:${EMAIL}`} className="flex w-fit items-center gap-2.5 text-[17px] font-semibold">
                <EnvelopeSimple className="h-[18px] w-[18px] text-[#E21D1D]" />
                <span className="link-u">{EMAIL}</span>
              </a>
            </Reveal>
            <Stagger gap={0.07} className="grid gap-10 sm:grid-cols-2">
              {OFFICES.map((o) => (
                <StaggerItem key={o.c} as="address" className="flex flex-col gap-2.5 border-t-2 border-[#092F57] pt-5 not-italic">
                  <p className={`${SERIF} text-xl text-[#092F57]`}>{o.c}</p>
                  <p className="text-[15px] leading-[1.6] text-[#4A5358]">
                    {o.a.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                  <a href={`tel:${o.tel}`} className="link-u w-fit text-[15px] font-semibold">Tel. {o.t}</a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-5 bg-[#F3F4F6] p-6 md:p-10" noteClassName="text-sm text-[#4A5358]">
              <h3 className={`${SERIF} text-[30px] text-[#092F57]`}>Escríbenos</h3>
              <Field label="Nombre" name="nombre" autoComplete="name" />
              <Field label="Email" name="email" type="email" autoComplete="email" />
              <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Su mensaje</span>
                <textarea name="mensaje" rows={5} className={`${INPUT} h-32 resize-y py-3`} />
              </label>
              <button type="submit" className={`${RED_BTN} w-full px-6 py-4 text-base`}>
                Enviar
              </button>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#2E363A] text-[#D5DADD]">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-5 lg:w-[420px]">
              <a href="#top" aria-label="Krasovsky Abogados, inicio" className="block w-fit">
                <Image src={`${IMG}/logo-blanco.svg`} alt="" width={216} height={40} />
              </a>
              <a href={`mailto:${EMAIL}`} className="link-u w-fit text-[15px]">{EMAIL}</a>
            </div>
            <nav aria-label="Pie de página" className="flex flex-wrap gap-x-14 gap-y-8 text-[15px] leading-[normal]">
              <ul className="flex flex-col gap-3">
                {[
                  ["Nosotros", "#nosotros"],
                  ["Misión", "#nosotros"],
                  ["Socios", "#equipo"],
                  ["Asociados", "#equipo"],
                  ["Consejeros", "#equipo"],
                ].map(([l, h]) => (
                  <li key={l}><a href={h} className="link-u">{l}</a></li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {NAV.slice(1).map((l) => (
                  <li key={l.label}><a href={l.href} className="link-u">{l.label}</a></li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {OFFICES.map((o) => (
                  <li key={o.c}>
                    <a href={`tel:${o.tel}`} className="link-u">{o.c.split(",")[0]} {o.t}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-[#AEB6BB] md:flex-row md:justify-between">
            <p>Krasovsky Abogados 2024. México.</p>
            <p>
              <span aria-current="page">Español</span>
              <span aria-hidden="true"> · </span>
              <a href={`${SITE}/home-english/`} lang="en" className="link-u">English</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT = "border border-[#C9CFD6] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#092F57] focus:shadow-[0_0_0_3px_rgba(9,47,87,0.12)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={`${INPUT} h-12`} />
    </label>
  );
}
