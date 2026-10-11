import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Castoro, Libre_Franklin } from "next/font/google";
import { ArrowRight, Check, Mail, MapPin, Phone, Tv } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Castoro({ subsets: ["latin"], weight: "400", variable: "--s29-display" });
const body = Libre_Franklin({ subsets: ["latin"], variable: "--s29-body" });

export const metadata: Metadata = {
  title: "Juan Salas Coquet Abogados",
  description: "Servicios legales con calidad y profesionalismo en el ámbito del litigio civil, mercantil y familiar.",
};

const IMG = "/sitios/juansalasabogados";
const SITE = "https://juansalasabogados.com";
const DISPLAY = "font-[family-name:var(--s29-display)]";
const H2 = `${DISPLAY} text-[clamp(2.25rem,3.4vw,3rem)] leading-[1.15] tracking-[-0.5px]`;

const NAV = [
  { label: "Juan Salas Coquet", href: "#juan-salas-coquet" },
  { label: "Nuestra firma", href: "#nuestra-firma" },
  { label: "Servicios", href: "#servicios" },
  { label: "Colaboradores", href: `${SITE}/colaboradores/` },
  { label: "Clientes", href: "#clientes" },
];

const FOOTER_NAV = [
  { label: "Inicio", href: "#top" },
  ...NAV,
  { label: "Contacto", href: "#contacto" },
  { label: "English", href: `${SITE}/english/` },
];

const OBJETIVOS = ["Atención personal y directa.", "Apoyo y experiencia.", "Servicio integral que otorgue respaldo y protección legal."];
const VALORES = ["Ética de los negocios.", "Sensibilidad ante la problemática personal.", "Honestidad.", "Transparencia."];

const SERVICIOS = [
  { t: "Derecho mercantil", img: "dl-D-Mercantil.png", d: "Ejecución de títulos de crédito, controversias en sociedades comerciales y contratos mercantiles." },
  { t: "Derecho civil", img: "dl-D-Civil.png", d: "Personas, bienes, sucesiones, obligaciones, contratos y derechos reales sobre inmuebles." },
  { t: "Derecho familiar", img: "dl-D-Familiar.png", d: "Divorcio, alimentos, sucesiones, patria potestad, guarda y custodia y regímenes patrimoniales." },
  { t: "Adopciones internacionales", img: "dl-Adopciones.png", d: "Requisitos legales en el país de residencia y en el país de origen del niño." },
  { t: "Juicios orales", img: "dl-Juicios-Orales.png", d: "Experiencia en el procedimiento oral desde su implementación en el sistema judicial." },
  { t: "Derecho contractual", img: "PRUEBA2-1024x427.jpg", d: "Realización y cumplimiento de acuerdos de materia civil, mercantil o familiar." },
  { t: "Juicio de amparo", img: "dl-Juicio-Amparo.png", d: "Impugnación de actos de autoridad que vulneren las garantías individuales." },
  { t: "Servicios de traducción", img: "dl-Traduccion.png", d: "Documentos legales: sentencias, contratos, actas de asamblea, escrituras y estados financieros." },
  { t: "Derecho procesal", img: "dl-D-Procesal.png", d: "Dominio de los procesos judiciales para establecer la mejor estrategia para el cliente." },
  { t: "Controversias entre accionistas", img: "dl-Controversias.png", d: "Recursos legales para que los socios lleguen a un acuerdo equitativo." },
];

const TRAYECTORIA = [
  ["1978-1982", "Universidad Iberoamericana. Tesis sobre los recargos y las multas ante el incumplimiento de las obligaciones tributarias."],
  ["1981", "Inicia en Derecho Corporativo en Santamarina y Steta S.C. (Baker Botts)."],
  ["1982", "Funda la firma Pinto y Salas Abogados: litigio familiar, civil y juicio de amparo."],
  ["2012", "Funda Juan Salas Coquet Abogados."],
  ["2017", "XXVIII Presea Tepantlato al Mérito Abogado Postulante."],
];

const CLIENTES = [
  "Grupo Gamesa", "Autozone", "American Airlines", "Federación Mexicana de Fútbol",
  "PepsiCo", "Sabritas", "Kentucky Fried Chicken", "Pizza Hut Mexicana",
  "Consorcio Español Grupo Cobra", "Aceites Bardahl", "Embotelladora Metropolitana", "Distribuidora de Bicicletas Benotto",
  "Fábrica de Harinas Elizondo", "Globe Chemicals", "Grupo Proinmex", "Electrónica Clarión",
];

const ASOCIADOS = [
  ["María de los Ángeles Trejo Díaz", "Especialista en litigio familiar", "Licenciatura en Derecho, UNAM. En la firma desde 2012."],
  ["Ivette Silvia Salas Coquet", "Especialista en litigio civil", "Licenciatura en Derecho, Universidad Latina. Abogada postulante desde 2013."],
  ["José Juan Aguilera Salas", "Supervisor de Área Legal", "Facultad de Derecho, Barra Nacional de Abogados."],
  ["Alejandra Salas Tello", "Supervisora de Área Legal", "Licenciatura en Derecho, Universidad Tepantlato."],
  ["Maribel Salas Tello", "Coordinadora de Área Administrativa y RH", "Licenciatura en Administración de Empresas."],
];

const PHONES = [
  ["55 5533 2751", "55 5525 9843"],
  ["55 5207 4725", "55 5208 0226"],
];

function Logo() {
  return (
    <a href="#top" aria-label="Juan Salas Coquet Abogados, inicio" className="block">
      <Image src={`${IMG}/logo-x6-white.png`} alt="Juan Salas Coquet Abogados" width={230} height={43} preload className="h-auto w-[180px] xl:w-[230px]" />
    </a>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-base leading-6 text-[#E4DAD2]">
          <Check className="mt-1 h-4 w-4 shrink-0 text-[#C2B0A3]" aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export default function JuanSalasCoquetPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-[#F1ECE7] font-[family-name:var(--s29-body)] text-[#372722] selection:bg-[#372722] selection:text-[#F1ECE7]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#372722]"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(20,12,10,0.7)]"
        innerClassName="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-6 px-5 md:px-8 lg:h-24 xl:px-0"
        linkClassName="whitespace-nowrap text-[14px] text-[#F1ECE7] xl:text-[15px]"
        panelClassName="bg-[#372722] text-[#F1ECE7] font-[family-name:var(--s29-body)]"
        panelLinkClassName={`${DISPLAY} text-3xl`}
        burgerClassName="bg-[#F1ECE7]"
        actions={
          <>
            <a href={`${SITE}/english/`} className="link-u text-[15px] text-[#C2B0A3]">
              English
            </a>
            <a href="#contacto" className="press whitespace-nowrap rounded-full bg-[#C2B0A3] px-6 py-[13px] text-[15px] font-semibold text-[#090A0A] hover:bg-[#D3C5BA]">
              Contáctanos
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F1ECE7] lg:h-[640px]">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 lg:py-0 lg:pt-[112px] xl:px-0">
            <HeroIntro className="relative z-10 flex max-w-[620px] flex-col gap-7 bg-[#F1ECE7] lg:py-14 lg:pr-[60px] xl:max-w-[740px]">
              <HeroItem as="h1" blur className={`${DISPLAY} text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.085] tracking-[-0.8px]`}>
                Más de 40 años de experiencia en el litigio.
              </HeroItem>
              <HeroItem as="p" className="max-w-[520px] text-[17px] leading-[1.6] text-[#4A3B35] md:text-[19px] md:leading-[30px]">
                Servicios legales con calidad y profesionalismo en el ámbito del litigio civil, mercantil y familiar.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-7 pt-2">
                <a href="#contacto" className="press rounded-full bg-[#372722] px-[30px] py-[17px] text-base font-semibold text-white hover:bg-[#4A3730]">
                  Contáctanos
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-semibold text-[#372722]">
                  Ver servicios
                  <ArrowRight className="h-[18px] w-[18px] text-[#8E7464]" aria-hidden="true" />
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
          <MediaReveal className="relative h-[300px] sm:h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[61.12%]" delay={0.25}>
            <Image
              src={`${IMG}/dl-colaboradores.jpg`}
              alt="Sala de juntas con libreros en las oficinas de Juan Salas Coquet Abogados"
              fill
              preload
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-[82%_50%]"
            />
          </MediaReveal>
        </section>

        {/* Nuestra firma */}
        <section id="nuestra-firma" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-14 lg:py-32 xl:grid-cols-[1fr_520px] xl:gap-20 xl:px-0">
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={H2}>
                Nuestra firma
              </Reveal>
              <Reveal as="p" delay={0.06} className={`${DISPLAY} text-[clamp(1.25rem,1.9vw,1.625rem)] leading-[1.385]`}>
                Juan Salas Coquet Abogados se constituyó con el objetivo de prestar al cliente servicios legales con calidad y profesionalismo.
              </Reveal>
              <Reveal as="p" delay={0.12} className="text-[17px] leading-[29px] text-[#5A4A43]">
                Nuestros abogados litigantes cuentan con experiencia y presencia ante el Poder Judicial Mexicano y ante nuestros clientes, por su nivel de estudio y compromiso en los juicios durante cada una de las instancias legales, así como por su alto nivel de competitividad y profesionalismo.
              </Reveal>
            </div>
            <Reveal delay={0.1} className="flex flex-col gap-9 bg-[#372722] p-8 md:p-12">
              <div className="flex flex-col gap-3">
                <h3 className={`${DISPLAY} text-2xl leading-[1.2] text-white`}>Misión</h3>
                <p className="text-base leading-[26px] text-[#E4DAD2]">
                  Entender a cabalidad la problemática de nuestros clientes para encontrar soluciones flexibles, dinámicas y accesibles en materia legal.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className={`${DISPLAY} text-2xl leading-[1.2] text-white`}>Objetivos</h3>
                <CheckList items={OBJETIVOS} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className={`${DISPLAY} text-2xl leading-[1.2] text-white`}>Valores</h3>
                <CheckList items={VALORES} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F1ECE7]">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-[120px] xl:px-0">
            <Reveal className="flex flex-col gap-[18px]">
              <h2 className={H2}>Servicios</h2>
              <p className="max-w-[720px] text-[17px] leading-[29px] text-[#5A4A43] md:text-lg">
                Áreas que han sido objeto del litigio y dominio del Lic. Juan Salas Coquet por 40 años, y que distinguen a quienes forman parte de la firma.
              </p>
            </Reveal>
            <Stagger className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-12" gap={0.05}>
              {SERVICIOS.map(({ t, img, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3">
                  <div className="img-zoom relative mb-4 aspect-[221/160] w-full">
                    <Image src={`${IMG}/${img}`} alt="" fill sizes="(min-width: 1024px) 221px, (min-width: 640px) 33vw, 50vw" className="object-cover" />
                  </div>
                  <h3 className={`${DISPLAY} text-[19px] leading-[1.2] lg:text-[21px] lg:leading-[25px]`}>{t}</h3>
                  <p className="text-[15px] leading-[23px] text-[#5A4A43]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Juan Salas Coquet */}
        <section id="juan-salas-coquet" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14 lg:py-32 xl:grid-cols-[500px_1fr] xl:gap-[88px] xl:px-0">
            <MediaReveal onView className="relative aspect-[500/660] w-full overflow-hidden md:max-w-[500px]" delay={0}>
              <Image
                src={`${IMG}/dl-juan-Salas.jpg`}
                alt="XXVIII Presea Tepantlato al Mérito Abogado Postulante del Lic. Juan Salas Coquet"
                fill
                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 420px, (min-width: 768px) 500px, 100vw"
                className="object-cover object-[46%_50%]"
              />
            </MediaReveal>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={H2}>
                Juan Salas Coquet
              </Reveal>
              <Reveal as="p" delay={0.06} className={`${DISPLAY} text-[clamp(1.25rem,1.7vw,1.4375rem)] leading-[1.435]`}>
                El fundador de la firma cuenta con una excelente formación académica y la experiencia de atención a clientes de renombre por 40 años.
              </Reveal>
              <Stagger as="ol" className="flex flex-col pt-4" gap={0.08} delay={0.1}>
                {TRAYECTORIA.map(([y, d], i) => {
                  const last = i === TRAYECTORIA.length - 1;
                  return (
                    <StaggerItem key={y} as="li" className="flex gap-5 sm:gap-7">
                      <span aria-hidden="true" className="flex w-[14px] shrink-0 flex-col items-center pt-[7px]">
                        <span className={`h-[11px] w-[11px] shrink-0 rounded-full border-2 border-[#8E7464] ${last ? "bg-[#8E7464]" : "bg-white"}`} />
                        {!last && <span className="w-px flex-1 bg-[#C2B0A3]" />}
                      </span>
                      <div className={`flex flex-1 flex-col gap-1 sm:flex-row sm:gap-7 ${last ? "" : "pb-[22px]"}`}>
                        <span className={`${DISPLAY} w-[110px] shrink-0 text-[22px] leading-[26px] text-[#6E5648]`}>{y}</span>
                        <span className="flex-1 text-base leading-[26px] text-[#5A4A43]">{d}</span>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
              <Reveal as="p" delay={0.1} className="text-[17px] leading-[29px]">
                Ha representado a particulares y reconocidas empresas nacionales y transnacionales en juicio de amparo, derecho civil y familiar, así como en asesoría externa.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="scroll-mt-24 bg-[#372722] text-white">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-[120px] xl:px-0">
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Clientes</h2>
              <p className="text-[17px] leading-[29px] text-[#E4DAD2] md:text-lg">Algunos de los clientes que la firma ha representado.</p>
            </Reveal>
            <Stagger as="ul" className="mt-12 grid grid-cols-2 lg:grid-cols-4" gap={0.04}>
              {CLIENTES.map((c) => (
                <StaggerItem key={c} as="li" className={`${DISPLAY} border-t border-[#FFFFFF24] py-[22px] pr-6 text-[17px] leading-[1.3] text-[#F1ECE7] md:text-[21px] md:leading-[27px]`}>
                  {c}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-12 flex items-start gap-3.5 bg-[#4A3730] px-6 py-6 sm:items-center md:px-7">
              <Tv className="h-[22px] w-[22px] shrink-0 text-[#C2B0A3]" aria-hidden="true" />
              <p className="text-base leading-snug text-white md:text-[17px]">Parte integral del equipo de abogados de Grupo Salinas para la recuperación del Canal 40.</p>
            </Reveal>
          </div>
        </section>

        {/* Asociados */}
        <section id="asociados" className="scroll-mt-24 bg-[#F1ECE7]">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-[120px] xl:px-0">
            <Reveal as="h2" className={H2}>
              Asociados
            </Reveal>
            <Stagger className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5" gap={0.06}>
              {ASOCIADOS.map(([n, c, f]) => (
                <StaggerItem key={n} as="article" className="flex flex-col gap-2.5 border-t-2 border-[#8E7464] pt-6">
                  <h3 className={`${DISPLAY} text-[21px] leading-[26px]`}>{n}</h3>
                  <p className="text-[15px] font-semibold leading-[21px] text-[#6E5648]">{c}</p>
                  <p className="text-[15px] leading-[23px] text-[#5A4A43]">{f}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-[1200px] items-start gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-14 lg:py-[120px] xl:grid-cols-[1fr_540px] xl:gap-20 xl:px-0">
            <div className="flex flex-col gap-8">
              <Reveal className="flex flex-col gap-8">
                <h2 className={H2}>Contacto</h2>
                <p className="text-[17px] leading-[29px] text-[#5A4A43] md:text-lg">Déjanos tus datos y nosotros nos pondremos en contacto.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-8" gap={0.07}>
                <StaggerItem as="li" className="flex gap-4">
                  <MapPin className="h-[22px] w-[22px] shrink-0 text-[#8E7464]" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-semibold text-[#6E5648]">Dirección</p>
                    <p className="text-[17px] leading-[27px]">Durango 243, 10º piso, Colonia Roma, C.P. 06700, Ciudad de México</p>
                  </div>
                </StaggerItem>
                <StaggerItem as="li" className="flex gap-4">
                  <Phone className="h-[22px] w-[22px] shrink-0 text-[#8E7464]" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-semibold text-[#6E5648]">Teléfonos</p>
                    <div className="text-[17px] leading-[27px]">
                      {PHONES.map(([a, b]) => (
                        <p key={a}>
                          <a href={`tel:+52${a.replace(/\s/g, "")}`} className="link-u">{a}</a>
                          {" · "}
                          <a href={`tel:+52${b.replace(/\s/g, "")}`} className="link-u">{b}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem as="li" className="flex gap-4">
                  <Mail className="h-[22px] w-[22px] shrink-0 text-[#8E7464]" aria-hidden="true" />
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <p className="text-sm font-semibold text-[#6E5648]">Correo</p>
                    <a href="mailto:contacto@juansalascoquetabogados.mx" className="link-u w-fit text-[15px] leading-[27px] [overflow-wrap:anywhere] sm:text-[17px]">
                      contacto@juansalascoquetabogados.mx
                    </a>
                  </div>
                </StaggerItem>
              </Stagger>
              <MediaReveal onView className="relative h-[220px] overflow-hidden" delay={0.1}>
                <Image src={`${IMG}/PRUEBA2-1024x427.jpg`} alt="Sala de juntas de Juan Salas Coquet Abogados" fill sizes="(min-width: 1024px) 580px, 100vw" className="object-cover" />
              </MediaReveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-[#F1ECE7] p-6 sm:p-11" noteClassName="text-sm text-[#5A4A43]">
                <Field label="Nombre *" name="nombre" autoComplete="name" required />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Email *" name="email" type="email" autoComplete="email" required />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <Field label="Asunto *" name="asunto" required />
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje *</span>
                  <textarea
                    name="mensaje"
                    required
                    className="h-[140px] resize-y border border-[#AA9A8F] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#372722] focus:shadow-[0_0_0_3px_rgba(55,39,34,0.14)]"
                  />
                </label>
                <button type="submit" className="press w-fit rounded-full bg-[#372722] px-10 py-4 text-base font-semibold text-white hover:bg-[#4A3730]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#372722]">
        <div className="mx-auto max-w-[1200px] px-5 pb-28 pt-14 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <Logo />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#E4DAD2]">
                {FOOTER_NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-9 flex flex-col gap-3 border-t border-[#FFFFFF24] pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#C2B0A3]">© 2026 Juan Salas Coquet Abogados{" · "}<HemeronCredit /></p>
            <a href={`${SITE}/aviso-de-privacidad/`} className="link-u w-fit font-semibold text-[#F1ECE7]">
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 border border-[#AA9A8F] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#372722] focus:shadow-[0_0_0_3px_rgba(55,39,34,0.14)]"
      />
    </label>
  );
}
