import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Noticia_Text, Source_Sans_3 } from "next/font/google";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle,
  EnvelopeSimple,
  FacebookLogo,
  Handshake,
  InstagramLogo,
  MapPin,
  Phone,
  Scales,
  TiktokLogo,
  VideoCamera,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Noticia_Text({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--s63-display" });
const body = Source_Sans_3({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s63-body" });

export const metadata: Metadata = {
  title: "López Cuéllar Abogados SC",
  description: "Expertos en Derecho Laboral en la Ciudad de México. Representamos a trabajadores y empresas en conciliación, litigio y cumplimiento de la Ley Federal del Trabajo.",
};

const IMG = "/sitios/expertosenderecholaboral";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s63-display)]";
const H2 = `${SERIF} text-[clamp(2.25rem,3.1vw,2.75rem)] font-bold leading-[1.16] text-[#00305B]`;
const BOOKING = "https://www.expertosenderecholaboral.com/book-online";
const WHATSAPP = "https://wa.me/525590188109";

const NAV = [
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Abogados", href: "#abogados" },
  { label: "Nuestra visión", href: "#vision" },
  { label: "Asesoría virtual", href: BOOKING },
];

const DATOS = [
  { v: "2009", l: "Año de fundación en la Ciudad de México" },
  { v: "+15 años", l: "de experiencia en litigio y asesoría", count: true },
  { v: "Gobierno Federal", l: "Proveedor en materia laboral" },
  { v: "Cero gastos", l: "hasta obtener resultado" },
];

const DISTINGUE = [
  "Análisis jurídico serio y responsable",
  "Estrategias legales personalizadas",
  "Comunicación clara y directa",
  "Confidencialidad absoluta",
  "Seguimiento puntual de cada expediente",
];

const AREAS = [
  { t: "Conciliación", Icon: Handshake },
  { t: "Litigio laboral", Icon: Scales },
  { t: "Cumplimiento de la Ley Federal del Trabajo", Icon: BookOpen },
];

const CASOS = ["Despido", "Renuncia", "Finiquito", "Liquidación"];

const PUNTOS = [
  { t: "No solicitamos pagos anticipados." },
  { t: "No se generan honorarios ni gastos legales", d: "Hasta en tanto no se obtenga un resultado favorable o recuperación económica, de acuerdo con la naturaleza del asunto." },
  { t: "Representación legal sin riesgo financiero inicial", d: "Alineando nuestros intereses con los tuyos." },
];

const EQUIPO = [
  { n: "Lic. Salvador Bustamante Alemán", c: "Socio", f: "team-salvador-bustamante.jpg" },
  { n: "Lic. Alejandro Sánchez Chávez", c: "Socio", f: "team-alejandro-sanchez.jpg" },
  { n: "Lic. Cassandra Gómez", c: "Socia", f: "team-cassandra-gomez.jpg" },
  { n: "Lic. Brenda Quiñones", c: "Asociada", f: "team-brenda.jpg" },
  { n: "Lic. María Márquez", c: "Asociada", f: "team-maria-marquez.jpg" },
];

const REDES = [
  { label: "WhatsApp", href: WHATSAPP, Icon: WhatsappLogo },
  { label: "Instagram", href: "https://www.instagram.com/soyabogadolaboralmx", Icon: InstagramLogo },
  { label: "Facebook", href: "https://www.facebook.com/lopezcuellarabogados", Icon: FacebookLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@soyabogadolaboralmx", Icon: TiktokLogo },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 sm:gap-[14px]" aria-label="López Cuéllar Abogados SC, inicio">
      <Image src={`${IMG}/logo-lc-1200.png`} alt="" width={44} height={44} className="h-10 w-10 sm:h-11 sm:w-11" preload={!inverse} />
      <span className={`${SERIF} whitespace-nowrap text-[13px] tracking-[0.06em] sm:text-[17px] sm:tracking-[1.2px] ${inverse ? "text-white" : "text-[#00305B]"}`}>
        LÓPEZ CUÉLLAR ABOGADOS SC
      </span>
    </a>
  );
}

export default function LopezCuellarPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s63-body)] text-[#1B2430] selection:bg-[#00305B] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(0,48,91,0.4)]"
        innerClassName="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 lg:h-[88px] xl:px-0"
        linkClassName="text-[15px] font-medium text-[#1B2430]"
        panelClassName="bg-white text-[#00305B] font-[family-name:var(--s63-body)]"
        panelLinkClassName={`${SERIF} text-[28px] font-bold`}
        burgerClassName="bg-[#00305B]"
        actions={
          <a href="#contacto" className="press rounded-[6px] bg-[#00305B] px-[22px] py-3 text-[15px] font-semibold text-white hover:bg-[#0F4C85]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section aria-label="Inicio">
          <div className="bg-[#00305B]">
            <HeroIntro className={`${WRAP} flex flex-col gap-7 pb-12 pt-16 md:pb-16 lg:pt-[104px]`}>
              <HeroItem as="h1" blur className={`${SERIF} max-w-[880px] text-[clamp(2.25rem,4.3vw,3.875rem)] font-bold leading-[1.12] text-white`}>
                Expertos en Derecho Laboral en la Ciudad de México
              </HeroItem>
              <HeroItem as="p" className="max-w-[640px] text-lg leading-[1.5] text-[#D3DEEA] md:text-xl">
                Representamos a trabajadores y empresas en conciliación, litigio y cumplimiento de la Ley Federal del Trabajo.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-4 pt-3">
                <a href="#contacto" className="press rounded-[6px] bg-white px-7 py-4 text-base font-semibold text-[#00305B] hover:bg-[#EAF4F6]">
                  Contáctanos
                </a>
                <a
                  href="#areas"
                  className="press nudge flex items-center gap-2.5 rounded-[6px] border border-white/40 px-[26px] py-[15px] text-base font-semibold text-white hover:bg-white/10"
                >
                  Ver áreas de práctica
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
          <div className="bg-[linear-gradient(to_bottom,#00305B_48.5%,#FFFFFF_48.5%)]">
            <div className={WRAP}>
              <MediaReveal className="relative h-[260px] overflow-hidden rounded-[6px] sm:h-[400px] md:h-[480px] lg:h-[600px]" delay={0.3}>
                <Image
                  src={`${IMG}/equipo-grupo.jpg`}
                  alt="Equipo de López Cuéllar Abogados en su oficina"
                  fill
                  preload
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover"
                />
              </MediaReveal>
            </div>
          </div>
        </section>

        {/* Credenciales */}
        <section aria-label="Credenciales">
          <Stagger as="dl" className={`${WRAP} grid grid-cols-2 gap-y-10 pb-[72px] pt-14 lg:grid-cols-4`} gap={0.07}>
            {DATOS.map(({ v, l, count }, i) => (
              <StaggerItem
                key={v}
                className={`flex flex-col-reverse justify-end gap-2 py-1 pr-4 lg:pr-0 ${i % 2 === 1 ? "border-l border-[#D5DEE8] pl-5" : ""} ${i > 0 ? "lg:border-l lg:border-[#D5DEE8] lg:pl-7" : ""}`}
              >
                <dt className="text-base leading-[23px] text-[#4A5566]">{l}</dt>
                <dd className={`${SERIF} text-[clamp(1.5rem,2.3vw,2rem)] font-bold leading-tight text-[#00305B]`}>
                  {count ? <CountUp value={v} /> : v}
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-24 bg-[#EAF4F6]">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[600px_1fr] lg:gap-24 lg:pb-32 lg:pt-[120px]`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={H2}>
                Nuestra historia
              </Reveal>
              <Reveal delay={0.08} className="space-y-6 text-lg leading-[29px] text-[#2E3A48]">
                <p>
                  Fundada en 2009 en la Ciudad de México, López Cuéllar Abogados, S.C. es una firma especializada en la asesoría, prevención y resolución de controversias legales, con un enfoque profesional, estratégico y orientado a resultados.
                </p>
                <p>
                  Creemos en la defensa estratégica, la evidencia sólida y la comunicación clara. Atendemos cada asunto con rigor, ética y enfoque humano, para que obtengas resultados medibles y una asesoría accesible de principio a fin.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-[22px] lg:pt-3">
              <Reveal as="h3" className={`${SERIF} text-[22px] font-bold text-[#00305B]`}>
                Nuestra práctica se distingue por
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-[22px]" gap={0.06}>
                {DISTINGUE.map((d) => (
                  <StaggerItem key={d} as="li" className="flex items-center gap-[14px] text-lg text-[#1B2430]">
                    <CheckCircle className="h-6 w-6 shrink-0 text-[#0F4C85]" />
                    {d}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Visión */}
        <section id="vision" className="scroll-mt-24 border-b border-[#D5DEE8]">
          <Reveal className="mx-auto flex max-w-[1064px] flex-col items-center gap-8 px-5 pb-[136px] pt-32 text-center md:px-8">
            <Image src={`${IMG}/logo-lc-1200.png`} alt="" width={64} height={64} />
            <h2 className="text-lg font-semibold text-[#0F4C85]">Nuestra visión</h2>
            <p className={`${SERIF} text-[clamp(1.625rem,2.65vw,2.375rem)] italic leading-[1.34] text-[#00305B]`}>
              Ser sinónimo de confianza y efectividad en litigio laboral, recuperando lo que por ley corresponde y dignificando cada historia que representamos.
            </p>
          </Reveal>
        </section>

        {/* Áreas de práctica */}
        <section id="areas" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[420px_1fr] lg:gap-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-6">
              <h2 className={H2}>Áreas de práctica</h2>
              <p className="text-lg leading-[29px] text-[#2E3A48]">
                Brindamos atención legal a personas físicas y morales, con un servicio enfocado en la protección de derechos, la prevención de conflictos y la resolución efectiva de controversias legales.
              </p>
            </Reveal>
            <div className="flex flex-col">
              <Stagger as="ul" className="flex flex-col gap-3" gap={0.07}>
                {AREAS.map(({ t, Icon }) => (
                  <StaggerItem key={t} as="li" className="flex items-center gap-5 rounded-[6px] bg-[#EAF4F6] px-6 py-[22px] sm:gap-6 sm:px-8 sm:py-[26px]">
                    <Icon className="h-8 w-8 shrink-0 text-[#0F4C85]" />
                    <h3 className={`${SERIF} text-[clamp(1.25rem,1.9vw,1.625rem)] font-bold leading-tight text-[#00305B]`}>{t}</h3>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="flex flex-col gap-[14px] pt-9">
                <Reveal as="h3" className="text-[17px] font-semibold text-[#1B2430]">
                  Te asesoramos en casos de
                </Reveal>
                <Stagger as="ul" className="flex flex-wrap gap-2.5" gap={0.05}>
                  {CASOS.map((c) => (
                    <StaggerItem key={c} as="li" className="rounded-[6px] border border-[#0F4C85] px-[19px] py-[9px] text-base font-semibold text-[#0F4C85]">
                      {c}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Honorarios */}
        <section aria-labelledby="honorarios" className="bg-[#00305B] text-white">
          <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[520px_1fr] lg:gap-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col items-start gap-6">
              <h2 id="honorarios" className={`${SERIF} text-[clamp(2.25rem,3.2vw,2.875rem)] font-bold leading-[1.15]`}>
                Cero gastos hasta obtener resultado
              </h2>
              <p className="text-lg leading-[29px] text-[#D3DEEA]">
                Como parte de nuestro compromiso con el acceso a la justicia, trabajamos bajo una política de cero gastos iniciales. Nuestro modelo de honorarios se alinea a tus metas: solo cobramos cuando recibes tu pago.
              </p>
              <a href="#contacto" className="press rounded-[6px] bg-white px-7 py-4 text-base font-semibold text-[#00305B] hover:bg-[#EAF4F6]">
                Contáctanos
              </a>
            </Reveal>
            <div className="flex flex-col">
              <Stagger as="ul" className="flex flex-col" gap={0.08}>
                {PUNTOS.map(({ t, d }) => (
                  <StaggerItem key={t} as="li" className="flex gap-5 border-t border-white/[0.18] py-7">
                    <Check className="mt-0.5 h-6 w-6 shrink-0 text-[#8DBBE6]" />
                    <div className="flex flex-col gap-1.5">
                      <h3 className={`${SERIF} text-[22px] font-bold leading-[29px]`}>{t}</h3>
                      {d && <p className="text-[17px] leading-[26px] text-[#C9D6E3]">{d}</p>}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.2} as="p" className="pt-2 text-[15px] italic leading-[23px] text-[#B7C7D8]">
                La procedencia de esta modalidad se encuentra sujeta a una evaluación jurídica previa del caso.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section id="abogados" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:py-32`}>
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className={H2}>Nuestro equipo de trabajo</h2>
              <p className="text-lg leading-[29px] text-[#2E3A48]">
                Dirigido por el Lic. José Ángel López Cuéllar, experto con más de dos décadas de práctica en Derecho Laboral.
              </p>
            </Reveal>
            <div className="grid gap-14 lg:grid-cols-[480px_1fr] lg:gap-16">
              <figure className="flex flex-col gap-5">
                <MediaReveal onView delay={0} className="img-zoom relative aspect-[480/520] w-full overflow-hidden rounded-[6px] sm:max-w-[480px]">
                  <Image
                    src={`${IMG}/team-jose-angel-lopez-cuellar.jpg`}
                    alt="Lic. José Ángel López Cuéllar"
                    fill
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 480px, 100vw"
                    className="object-cover"
                  />
                </MediaReveal>
                <Reveal as="figcaption" className="flex flex-col gap-1">
                  <span className={`${SERIF} text-[clamp(1.375rem,1.9vw,1.625rem)] font-bold text-[#00305B]`}>Lic. José Ángel López Cuéllar</span>
                  <span className="text-[17px] font-semibold text-[#0F4C85]">Socio Fundador</span>
                </Reveal>
              </figure>
              <Stagger as="ul" className="flex flex-col gap-6" gap={0.07}>
                {EQUIPO.map(({ n, c, f }) => (
                  <StaggerItem key={n} as="li" className="flex items-center gap-5 sm:gap-6">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[6px] sm:h-24 sm:w-24">
                      <Image src={`${IMG}/${f}`} alt={n} fill sizes="96px" className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className={`${SERIF} text-[clamp(1.125rem,1.6vw,1.375rem)] font-bold text-[#00305B]`}>{n}</h3>
                      <p className="text-[17px] text-[#4A5566]">{c}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative scroll-mt-24 overflow-hidden text-white">
          <Image src={`${IMG}/contacto-fondo.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#00305B]/[0.92]" />
          <div className={`${WRAP} relative grid gap-14 py-24 lg:grid-cols-[1fr_520px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-9">
              <Reveal as="h2" className={`${SERIF} text-[clamp(2.375rem,3.2vw,2.875rem)] font-bold leading-tight`}>
                Contáctanos
              </Reveal>
              <Stagger className="flex flex-col gap-6" gap={0.07}>
                <ContactRow Icon={MapPin} label="Dirección">
                  <p>
                    Av. Paseo de la Reforma 369, Oficina 701
                    <br />
                    Col. Cuauhtémoc, Alcaldía Cuauhtémoc
                    <br />
                    Ciudad de México
                  </p>
                </ContactRow>
                <ContactRow Icon={Phone} label="Teléfonos">
                  <p>
                    <a href="tel:+525590188109" className="link-u">55 9018 8109</a>
                    <br />
                    <a href="tel:+525524549955" className="link-u">55 2454 9955</a> · <a href="tel:+525524549956" className="link-u">55 2454 9956</a>
                  </p>
                </ContactRow>
                <ContactRow Icon={WhatsappLogo} label="WhatsApp">
                  <a href={WHATSAPP} className="link-u">55 9018 8109</a>
                </ContactRow>
                <ContactRow Icon={EnvelopeSimple} label="Correo">
                  <a href="mailto:contacto@lopezcuellarabogados.com" className="link-u break-all">contacto@lopezcuellarabogados.com</a>
                </ContactRow>
                <ContactRow Icon={VideoCamera} label="Asesoría virtual">
                  <p>
                    Asesoría virtual de 15 min.{" "}
                    <a href={BOOKING} className="link-u">Reservar ahora</a>
                  </p>
                </ContactRow>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[6px] bg-white p-6 text-[#1B2430] sm:p-11" noteClassName="text-sm text-[#4A5566]">
                <h3 className={`${SERIF} text-[28px] font-bold text-[#00305B]`}>Escríbenos</h3>
                <p className="text-base leading-6 text-[#4A5566]">Para consultas generales, completa el siguiente formulario.</p>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-semibold">Mensaje</span>
                  <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    className="h-[132px] resize-none rounded-[6px] border border-[#C9D3DD] bg-[#F5F8FA] px-4 py-3.5 text-base outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#6B7684] focus:border-[#0F4C85] focus:shadow-[0_0_0_3px_rgba(15,76,133,0.15)]"
                  />
                </label>
                <button type="submit" className="press w-full rounded-[6px] bg-[#00305B] px-7 py-4 text-base font-semibold text-white hover:bg-[#0F4C85]">
                  Enviar
                </button>
                <p className="text-sm text-[#4A5566]">Aviso de privacidad</p>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#130814] text-[#D8D2D9]">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-[72px] lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <Logo inverse />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                {[...NAV, { label: "Contacto", href: "#contacto" }].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-u">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-6 border-t border-white/[0.14] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-[#ABA4AC]">
              <p>© 2026 Lopez Cuellar Abogados SC</p>
              <p>Aviso de privacidad</p>
            </div>
            <ul className="flex items-center gap-5">
              {REDES.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className="press block text-[#D8D2D9] hover:text-white">
                    <Icon className="h-[22px] w-[22px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <StaggerItem className="flex gap-[18px]">
      <Icon className="h-6 w-6 shrink-0 text-[#8DBBE6]" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-[15px] font-semibold text-[#B7C7D8]">{label}</p>
        <div className="text-lg leading-[27px] text-white">{children}</div>
      </div>
    </StaggerItem>
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
        className="h-12 rounded-[6px] border border-[#C9D3DD] bg-[#F5F8FA] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0F4C85] focus:shadow-[0_0_0_3px_rgba(15,76,133,0.15)]"
      />
    </label>
  );
}
