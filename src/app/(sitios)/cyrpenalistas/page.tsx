import type { Metadata } from "next";
import Image from "next/image";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import { ArrowRight, Check, EnvelopeSimple, FacebookLogo, MapPin, Phone, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Cinzel({ subsets: ["latin"], variable: "--s60-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--s60-body" });

export const metadata: Metadata = {
  title: "Cuevas & Rivera Abogados Penalistas",
  description: "Despacho jurídico penal especialista en derecho penal y en proceso penal acusatorio en la Ciudad de México.",
};

const IMG = "/sitios/cyrpenalistas";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s60-display)]";
const TEL = "tel:+525536874049";
const WHATSAPP = "https://wa.me/525522491936";
const PRIVACY = "https://cyrpenalistas.mx/aviso-de-privacidad/";
const FACEBOOK = "https://www.facebook.com/people/Cuevas-Rivera-Abogados-penalistas/100090468231166/";
const TWITTER = "https://twitter.com/cyr_penalistas";

const NAV = [
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Abogados penalistas", href: "#abogados" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Aviso de privacidad", href: PRIVACY },
];

const CIFRAS = [
  { n: "1998", l: "Año de fundación", count: true },
  { n: "2000", l: "Clientes felices", count: true },
  { n: "190", l: "Compañías con seguimiento", count: true },
  { n: "24/7", l: "Emergencias, los 365 días", count: false },
];

const PRINCIPIOS = [
  { t: "Ética profesional", d: "Actuamos con altos estándares éticos y protegemos los derechos de nuestros clientes de manera justa y equitativa." },
  { t: "Compromiso con la justicia y la igualdad ante la ley", d: "Que todas las personas tengan acceso a la justicia sin importar su origen, género o condición social." },
  { t: "Excelencia", d: "Los más altos estándares de calidad, desde la investigación hasta la representación en los tribunales." },
];

const DELITOS = ["Delitos sexuales", "Extorsión", "Secuestro", "Homicidio", "Delitos financieros", "Robo"];

const PASOS = [
  { t: "Contáctanos", d: "Mándanos un WhatsApp o llámanos a la oficina." },
  { t: "Danos la información básica de tu caso", d: "Nombre, delito, hechos, lugar en que ocurrieron, fecha y etapa del proceso." },
  {
    t: "Agenda una cita",
    d: "Con los datos proporcionados prepararemos una asesoría detallada en la que te explicaremos la estrategia adecuada para tu caso. Te daremos por escrito el costo de nuestros honorarios, sin costos ocultos.",
  },
];

const CITATORIO = [
  { t: "No ignores el citatorio.", d: "Acude a la cita o justifica tu inasistencia, siguiendo la estrategia propuesta por nuestro despacho." },
  { t: "Declara o guarda silencio según tu caso.", d: "No estás obligado a declarar o autoincriminarte. Con nuestra guía sabrás cuándo y qué decir." },
  { t: "Conoce los cargos en tu contra.", d: "Te ayudamos a obtener y analizar la carpeta de investigación." },
  { t: "No firmes nada sin asesoría.", d: "Nos aseguramos de que no firmes documentos o acuerdos que puedan perjudicarte." },
  { t: "Prepara una defensa estratégica.", d: "Reunimos pruebas, identificamos irregularidades y evaluamos todas las opciones legales, incluidas las salidas alternativas." },
];

const CASOS = [
  {
    t: "Administración fraudulenta",
    d: "Ricardo “N” fue acusado falsamente en 2023 de desviar 100 millones de pesos de una empresa de logística. Una auditoría forense y el análisis de metadatos de nuestros peritos en sistemas informáticos expusieron los informes de gastos falsificados.",
    r: "Absuelto en 2025",
  },
  {
    t: "Tarjetas clonadas",
    d: "Alberto “N”, ingeniero en sistemas, fue señalado como parte de una red de skimming. Presentamos registros de geolocalización que lo ubicaban en una institución médica y un peritaje técnico del dispositivo; el supuesto cómplice se contradijo en el contrainterrogatorio.",
    r: "Absuelto en enero de 2025",
  },
  {
    t: "Fraude",
    d: "Antonio “N” fue acusado por la FGR de defraudar a un banco por 91 millones de dólares. Un peritaje en grafoscopía demostró que las firmas en los avalúos eran falsificadas y un peritaje financiero reveló que los fondos fueron manipulados.",
    r: "Absuelto por un juez federal en 2025",
  },
  {
    t: "Operaciones con recursos de procedencia ilícita",
    d: "Carlos “N”, empresario, fue acusado de lavado de dinero por movimientos de 115 millones de pesos. Contratos, facturas certificadas y un peritaje contable demostraron que se trataba de operaciones comerciales legítimas.",
    r: "Absuelto en febrero de 2026",
  },
];

const EQUIPO = [
  { n: "Axa Cuevas", f: "Doctorado en Derecho, Universidad Complutense de Madrid", img: "axa-cuevas.jpg" },
  { n: "Jesús Cuevas", f: "Maestría en Ciencia Jurídico Penal, INACIPE", img: "jesus-cuevas.jpg" },
  { n: "Gabriel Rivera", f: "Maestría en Ciencias Penales, Universidad Anáhuac Norte", img: "gabriel-rivera.jpg" },
  { n: "José Rivera", f: "Universidad Autónoma de Chihuahua", img: "jose-rivera.jpg" },
  { n: "Eduardo Téllez Espino", img: "eduardo-tellez.jpg" },
  { n: "Diego Ceballos", img: "diego-ceballos.jpg" },
  { n: "Jonatan Pineda", img: "jonatan-pineda.jpg" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="block" aria-label="Cuevas & Rivera Abogados Penalistas, inicio">
      <Image
        src={`${IMG}/logo-cuevas-800.png`}
        alt=""
        width={800}
        height={305}
        preload={!footer}
        className={footer ? "h-auto w-[236px]" : "h-auto w-[168px] xl:w-[210px]"}
      />
    </a>
  );
}

export default function CuevasRiveraPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-black font-[family-name:var(--s60-body)] text-[#E8E2D6] selection:bg-[#B3A782] selection:text-black`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-transparent bg-black"
        scrolledClassName="border-[#B3A78233]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[104px] xl:px-0"
        linkClassName="mx-1 text-[15px] font-medium text-[#E8E2D6]"
        panelClassName="bg-black text-[#E8E2D6] font-[family-name:var(--s60-body)]"
        panelLinkClassName={`${SERIF} text-[26px]`}
        burgerClassName="bg-[#E8E2D6]"
        actions={
          <>
            <a href={TEL} className="link-u text-[15px] font-semibold text-[#B3A782] lg:max-xl:hidden">
              (+52) 55 3687 4049
            </a>
            <a href="#contacto" className="press bg-[#B3A782] px-6 py-3.5 text-[15px] font-semibold text-black hover:bg-[#C6BB97]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[680px] flex-col justify-end overflow-hidden lg:min-h-[760px]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={40}>
            <Image
              src={`${IMG}/hero-angel.jpg`}
              alt="Ángel de la Independencia y Paseo de la Reforma al atardecer"
              fill
              preload
              sizes="100vw"
              className="object-cover object-center"
            />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#00000000_0%,#00000099_55%,#000000F5_100%),linear-gradient(#00000033,#00000033)]"
          />
          <HeroIntro className={`${WRAP} flex flex-col gap-14 pt-28 lg:gap-[72px]`}>
            <div className="flex max-w-[860px] flex-col gap-7">
              <HeroItem as="h1" blur className={`${SERIF} text-[clamp(2.4rem,5.3vw,4.75rem)] font-medium leading-[1.08] text-white`}>
                Tu libertad es nuestra prioridad
              </HeroItem>
              <HeroItem as="p" className="max-w-[600px] text-lg leading-[1.5] md:text-xl">
                Despacho jurídico penal especialista en derecho penal y en proceso penal acusatorio en la Ciudad de México.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-3">
                <a href="#contacto" className="press bg-[#B3A782] px-8 py-[18px] text-base font-semibold text-black hover:bg-[#C6BB97]">
                  Contáctanos
                </a>
                <a href="#casos" className="nudge flex items-center gap-2.5 border-b border-[#B3A782] pb-1 text-base font-semibold text-white">
                  Ver casos de éxito
                  <ArrowRight className="h-4 w-4 text-[#B3A782]" />
                </a>
              </HeroItem>
            </div>
            <HeroItem className="grid gap-6 border-t border-[#B3A78259] pb-11 pt-7 md:grid-cols-3 md:gap-12">
              {[
                { k: "Emergencias 24/7, los 365 días", v: "WhatsApp (+52) 55 2249 1936", href: WHATSAPP },
                { k: "Oficina, lunes a viernes de 8:30 a 18:30 h", v: "(+52) 55 3687 4049", href: TEL },
                { k: "Oficinas principales", v: "Av. Presidente Masaryk 61, piso 9, Polanco" },
              ].map(({ k, v, href }) => (
                <div key={k} className="flex flex-col gap-1.5">
                  <p className="text-sm text-[#BDB6A8]">{k}</p>
                  {href ? (
                    <a href={href} className="link-u w-fit text-lg font-semibold text-white">
                      {v}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-white">{v}</p>
                  )}
                </div>
              ))}
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Cifras */}
        <section aria-label="Nuestros números" className="bg-black">
          <Stagger className={`${WRAP} grid grid-cols-2 gap-x-6 gap-y-10 pb-16 pt-14 lg:grid-cols-4`} gap={0.07}>
            {CIFRAS.map(({ n, l, count }) => (
              <StaggerItem key={l} className="flex flex-col gap-2 border-l border-[#B3A78266] pl-5 md:pl-6">
                <p className={`${SERIF} text-[clamp(2.5rem,3.6vw,3.25rem)] font-medium leading-[1.1] text-[#B3A782]`}>
                  {count ? <CountUp value={n} /> : n}
                </p>
                <p className="text-base text-[#BDB6A8]">{l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Conócenos */}
        <section id="nosotros" className="scroll-mt-24 bg-[#EFE6E3] text-[#141312]">
          <div className={`${WRAP} grid items-start gap-12 py-20 lg:grid-cols-[420px_1fr] lg:gap-[104px] lg:py-28`}>
            <MediaReveal onView className="relative aspect-[420/540] w-full max-w-[420px] overflow-hidden" delay={0}>
              <Image src={`${IMG}/justicia.jpg`} alt="Estatua de la Justicia con balanza dorada" fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
            </MediaReveal>
            <div className="flex flex-col gap-6 lg:pt-2">
              <Reveal as="h2" className={`${SERIF} text-[clamp(2.25rem,3.5vw,3.125rem)] font-medium leading-[1.1]`}>
                Conócenos
              </Reveal>
              <Reveal delay={0.08} className="space-y-6 text-lg leading-[1.67] text-[#3D3935]">
                <p>
                  En Cuevas &amp; Rivera Abogados Penalistas somos un equipo de abogados apasionados y comprometidos con la justicia. Creemos en la importancia de proteger los derechos de nuestros clientes y luchar por su libertad y bienestar.
                </p>
                <p>
                  Con años de experiencia en la defensa penal, hemos desarrollado una sólida reputación por nuestra dedicación, integridad y habilidad para obtener resultados positivos. Desde el principio de cada caso brindamos una representación legal agresiva y estratégica, en estrecha colaboración con nuestros clientes.
                </p>
              </Reveal>
              <div id="valores" className="flex scroll-mt-28 flex-col gap-[22px] pt-7">
                <Reveal as="h3" className={`${SERIF} text-2xl font-semibold`}>
                  Nuestros principios
                </Reveal>
                <Stagger className="flex flex-col gap-[22px]" gap={0.07}>
                  {PRINCIPIOS.map(({ t, d }) => (
                    <StaggerItem key={t} className="flex gap-6">
                      <span aria-hidden="true" className="mt-[13px] h-0.5 w-8 shrink-0 bg-[#786850]" />
                      <div className="flex flex-col gap-1 pt-0.5">
                        <h4 className="text-lg font-bold">{t}</h4>
                        <p className="text-base leading-[1.56] text-[#5A544E]">{d}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section aria-labelledby="delitos-graves" className="bg-black">
          <div className={`${WRAP} flex flex-col gap-16 py-20 lg:py-28`}>
            <div className="grid gap-12 lg:grid-cols-[460px_1fr] lg:gap-[88px]">
              <Reveal className="flex flex-col gap-7">
                <h2 id="delitos-graves" className={`${SERIF} text-[clamp(2rem,3.05vw,2.75rem)] font-medium leading-[1.16] text-white`}>
                  Especialistas en defensa penal de delitos graves
                </h2>
                <p className="text-lg leading-[1.67] text-[#CFC8BB]">
                  Los casos se ganan por la atención a los pequeños detalles. Cada palabra en una carpeta de investigación, cada testimonio y cada prueba puede ser decisiva.
                </p>
                <p className="text-lg font-semibold leading-[1.6] text-[#B3A782]">
                  Nuestro enfoque meticuloso, aunado a nuestra experiencia, nos ha permitido evitar al 100% la prisión preventiva en casos de alta complejidad.
                </p>
              </Reveal>
              <div className="flex flex-col lg:pt-2">
                <Stagger as="ul" className="grid gap-x-8 sm:grid-cols-2" gap={0.05}>
                  {DELITOS.map((d) => (
                    <StaggerItem key={d} as="li" className={`${SERIF} border-l border-[#B3A78240] py-5 pl-6 text-[22px] font-medium leading-[1.3] text-[#F2EDE3] sm:py-7 sm:text-[26px]`}>
                      {d}
                    </StaggerItem>
                  ))}
                </Stagger>
                <Reveal as="p" delay={0.1} className="pt-7 text-base leading-[1.63] text-[#BDB6A8]">
                  Nos encargamos de todos los tipos de delitos sin discriminación alguna. Toda persona tiene derecho a una representación legal justa y adecuada.
                </Reveal>
              </div>
            </div>
            <Reveal className="border-t border-[#B3A78259] pt-14">
              <blockquote className={`${SERIF} max-w-[980px] text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.36] text-[#B3A782]`}>
                No solo conseguimos sentencias que declaran la inocencia de nuestros clientes; protegemos su libertad durante todo el proceso.
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Cómo comenzar */}
        <section aria-labelledby="como-comenzar" className="bg-white text-[#141312]">
          <div className={`${WRAP} grid gap-12 py-20 lg:grid-cols-[440px_1fr] lg:gap-[104px] lg:py-[104px]`}>
            <Reveal className="flex flex-col items-start gap-9">
              <h2 id="como-comenzar" className={`${SERIF} text-[clamp(1.875rem,2.8vw,2.5rem)] font-medium leading-[1.18]`}>
                ¿Cómo comenzar si necesitas nuestros servicios?
              </h2>
              <a href="#contacto" className="press bg-black px-8 py-[18px] text-base font-semibold text-[#B3A782] hover:bg-[#262321]">
                Contáctanos
              </a>
            </Reveal>
            <Stagger as="ol" className="flex flex-col gap-11 lg:gap-[52px] lg:pt-1.5" gap={0.08}>
              {PASOS.map(({ t, d }, i) => (
                <StaggerItem key={t} as="li" className="flex gap-6 md:gap-8">
                  <span aria-hidden="true" className={`${SERIF} w-10 shrink-0 text-[56px] font-medium leading-none text-[#786850] md:w-14`}>
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-[22px] font-bold leading-[1.25]">{t}</h3>
                    <p className="text-[17px] leading-[1.59] text-[#5A544E]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Citatorio */}
        <section aria-labelledby="citatorio" className="grid bg-[#EFE6E3] text-[#141312] lg:grid-cols-[minmax(0,53fr)_minmax(0,47fr)]">
          <div className="flex flex-col gap-7 px-5 py-20 md:px-8 lg:py-[104px] lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-[72px]">
            <Reveal className="flex flex-col gap-7">
              <h2 id="citatorio" className={`${SERIF} text-[clamp(1.875rem,2.8vw,2.5rem)] font-medium leading-[1.18]`}>
                ¿Recibiste un citatorio de la Fiscalía como imputado?
              </h2>
              <p className="text-lg leading-[1.67] text-[#3D3935]">
                Es crucial actuar con calma, conocimiento y la asesoría adecuada para proteger tus derechos y construir una defensa sólida. Esto es lo que debes hacer:
              </p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-[22px] py-2" gap={0.06}>
              {CITATORIO.map(({ t, d }) => (
                <StaggerItem key={t} as="li" className="flex gap-4">
                  <Check className="mt-[3px] h-5 w-5 shrink-0 text-[#786850]" />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[17px] font-bold">{t}</p>
                    <p className="text-base leading-[1.56] text-[#5A544E]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" className={`${SERIF} border-t border-[#78685066] pt-7 text-[22px] font-semibold leading-[1.32]`}>
              Nunca declare sin la presencia de su abogado penalista.
            </Reveal>
          </div>
          <MediaReveal onView className="relative h-[440px] overflow-hidden md:h-[560px] lg:h-auto" delay={0}>
            <Image
              src={`${IMG}/sanmiguel-abogados.jpg`}
              alt="Hombre de traje esposado, visto de espaldas"
              fill
              sizes="(min-width: 1024px) 47vw, 100vw"
              className="object-cover object-[85%_50%]"
            />
          </MediaReveal>
        </section>

        {/* Casos de éxito */}
        <section id="casos" className="scroll-mt-24 bg-[#141312]">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:py-28`}>
            <Reveal className="flex max-w-[780px] flex-col gap-6">
              <h2 className={`${SERIF} text-[clamp(2.25rem,3.35vw,3rem)] font-medium leading-[1.15] text-white`}>Casos de éxito</h2>
              <p className="text-lg leading-[1.67] text-[#CFC8BB]">
                Acreditamos la inocencia de nuestros clientes mediante el trabajo de nuestro propio grupo de peritos expertos en informática, grafoscopía, balística, genética, psicología, contabilidad, mecánica de hechos y otras disciplinas técnicas.
              </p>
            </Reveal>
            <Stagger className="grid gap-x-[72px] gap-y-14 md:grid-cols-2" gap={0.07}>
              {CASOS.map(({ t, d, r }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-4 border-t border-[#B3A78259] pt-8">
                  <h3 className={`${SERIF} text-2xl font-semibold leading-[1.25] text-white`}>{t}</h3>
                  <p className="text-base leading-[1.63] text-[#CFC8BB]">{d}</p>
                  <p className="text-base font-bold text-[#B3A782]">{r}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Equipo */}
        <section id="abogados" className="scroll-mt-24 bg-white text-[#141312]">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:py-28`}>
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className={`${SERIF} text-[clamp(2rem,3.05vw,2.75rem)] font-medium leading-[1.18]`}>¿Quiénes te acompañan en tu proceso?</h2>
              <p className="text-lg text-[#5A544E]">Abogados penalistas en la Ciudad de México.</p>
            </Reveal>
            <Stagger className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4 lg:gap-y-12" gap={0.06}>
              {EQUIPO.map(({ n, f, img }) => (
                <StaggerItem key={n} as="article" className="flex flex-col gap-1.5">
                  <div className="img-zoom relative aspect-[282/330] w-full bg-[#EFE6E3]">
                    <Image src={`${IMG}/${img}`} alt={`Retrato de ${n}`} fill sizes="(min-width: 1024px) 282px, 50vw" className="object-cover" />
                  </div>
                  <h3 className="pt-0.5 text-[17px] font-bold leading-snug md:text-[19px]">{n}</h3>
                  {f && <p className="text-sm leading-[1.47] text-[#5A544E] md:text-[15px]">{f}</p>}
                </StaggerItem>
              ))}
              <StaggerItem className="flex aspect-[282/330] flex-col justify-end gap-3.5 self-start bg-black p-4 md:p-8">
                <p className={`${SERIF} text-[clamp(1.05rem,1.8vw,1.5rem)] font-semibold leading-[1.25] text-white`}>Emergencias 24/7, los 365 días</p>
                <a href={WHATSAPP} className="link-u w-fit text-[15px] font-semibold text-[#B3A782] md:text-[17px]">
                  WhatsApp (+52) 55 2249 1936
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-black">
          <div className={`${WRAP} grid gap-14 py-20 lg:grid-cols-[1fr_520px] lg:gap-24 lg:py-28`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-5">
                <h2 className={`${SERIF} text-[clamp(2.25rem,3.35vw,3rem)] font-medium leading-[1.15] text-white`}>Contacto</h2>
                <p className="text-lg leading-[1.67] text-[#CFC8BB]">
                  Si recibiste un citatorio, actúa de inmediato. Contáctanos para una consulta especializada y protégete con el respaldo de expertos en derecho penal.
                </p>
              </Reveal>
              <Stagger className="flex flex-col gap-7" gap={0.07}>
                {[
                  { Icon: MapPin, k: "Oficinas principales", v: [{ t: "Av. Presidente Masaryk 61, piso 9, Polanco" }, { t: "Ciudad de México, C.P. 11560" }] },
                  { Icon: Phone, k: "Oficina, lunes a viernes de 8:30 a 18:30 h", v: [{ t: "(+52) 55 3687 4049", href: TEL }] },
                  { Icon: WhatsappLogo, k: "WhatsApp, lunes a sábado de 7:00 a 22:00 h. Emergencias 24/7", v: [{ t: "(+52) 55 2249 1936", href: WHATSAPP }] },
                  {
                    Icon: EnvelopeSimple,
                    k: "Correo electrónico",
                    v: [
                      { t: "informacion@cyrpenalistas.mx", href: "mailto:informacion@cyrpenalistas.mx" },
                      { t: "contacto@cyrpenalistas.mx", href: "mailto:contacto@cyrpenalistas.mx" },
                    ],
                  },
                ].map(({ Icon, k, v }) => (
                  <StaggerItem key={k} className="flex gap-[18px]">
                    <Icon className="h-[22px] w-[22px] shrink-0 text-[#B3A782]" />
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-[15px] text-[#A9A294]">{k}</p>
                      {v.map(({ t, href }: { t: string; href?: string }) =>
                        href ? (
                          <a key={t} href={href} className="link-u w-fit break-all text-lg font-semibold leading-[1.67] text-white sm:break-normal">
                            {t}
                          </a>
                        ) : (
                          <p key={t} className="text-lg font-semibold leading-[1.67] text-white">
                            {t}
                          </p>
                        ),
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-[#EFE6E3] p-6 text-[#141312] md:p-12" noteClassName="text-sm text-[#5A544E]">
                <h3 className={`${SERIF} text-[28px] font-semibold`}>Envía tu consulta</h3>
                <Field label="Nombres y apellidos" name="nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                <Field label="Teléfono / WhatsApp" name="telefono" type="tel" autoComplete="tel" />
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-semibold">Mensaje o consulta</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    className="h-[132px] resize-y border border-[#C9BFB8] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#786850] focus:shadow-[0_0_0_3px_rgba(120,104,80,0.18)]"
                  />
                </label>
                <button type="submit" className="press w-full bg-black py-[18px] text-base font-semibold text-[#B3A782] hover:bg-[#262321]">
                  Enviar consulta
                </button>
                <p className="text-[15px] text-[#5A544E]">
                  Al enviar aceptas nuestro{" "}
                  <a href={PRIVACY} className="link-u">
                    Aviso de privacidad
                  </a>
                  .
                </p>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#B3A78240] bg-black">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10 lg:pt-[72px]`}>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[400px_1fr_1fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              <Logo footer />
              <p className="max-w-[400px] text-[15px] leading-[1.6] text-[#A9A294]">Toda persona tiene derecho a una representación legal justa y adecuada.</p>
            </div>
            <FooterCol
              title="Despacho"
              links={[
                { label: "Sobre nosotros", href: "#nosotros" },
                { label: "Misión", href: "https://cyrpenalistas.mx/mision/" },
                { label: "Visión", href: "https://cyrpenalistas.mx/vision/" },
                { label: "Valores", href: "#valores" },
              ]}
            />
            <FooterCol
              title="Defensa penal"
              links={[
                { label: "Abogados penalistas", href: "#abogados" },
                { label: "Casos de éxito", href: "#casos" },
                { label: "Contacto", href: "#contacto" },
              ]}
            />
            <div className="flex flex-col gap-3">
              <p className={`${SERIF} text-base font-semibold text-[#B3A782]`}>Redes sociales</p>
              <div className="flex gap-3">
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="press flex h-11 w-11 items-center justify-center border border-[#B3A78266] text-[#E8E2D6] hover:border-[#B3A782] hover:text-[#B3A782]">
                  <FacebookLogo className="h-5 w-5" />
                </a>
                <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="press flex h-11 w-11 items-center justify-center border border-[#B3A78266] text-[#E8E2D6] hover:border-[#B3A782] hover:text-[#B3A782]">
                  <TwitterLogo className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/[0.12] pt-6 text-[15px] md:flex-row md:items-center md:justify-between">
            <p className="text-[#A9A294]">© 1998-2023 Cuevas &amp; Rivera Abogados Penalistas, S.C. Todos los derechos reservados.</p>
            <a href={PRIVACY} className="link-u w-fit text-[#E8E2D6]">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3">
      <p className={`${SERIF} text-base font-semibold text-[#B3A782]`}>{title}</p>
      <ul className="flex flex-col gap-3 text-[15px] text-[#E8E2D6]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="link-u">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
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
        className="h-[52px] border border-[#C9BFB8] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#786850] focus:shadow-[0_0_0_3px_rgba(120,104,80,0.18)]"
      />
    </label>
  );
}
