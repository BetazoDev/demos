import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Be_Vietnam_Pro, Sorts_Mill_Goudy } from "next/font/google";
import {
  ArrowRight,
  BookOpen,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  FolderOpen,
  InstagramLogo,
  MapPin,
  MapTrifold,
  Phone,
  Quotes,
  TiktokLogo,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Sorts_Mill_Goudy({ subsets: ["latin"], weight: "400", variable: "--s39-display" });
const body = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--s39-body" });

export const metadata: Metadata = {
  title: "GPH Abogados, S.C.",
  description: "Contamos con expertos que ofrecen la solución a tu problema legal de manera integral, óptima y eficaz.",
};

const IMG = "/sitios/gphabogados";
const PHONE = { label: "55 7131 3239", href: "tel:5571313239" };

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de experiencia", href: "#areas" },
  { label: "Socios", href: "#socios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const STATS = [
  { v: "+500", k: "Casos" },
  { v: "262", k: "Clientes" },
  { v: "10", k: "Expertos" },
  { v: "94%", k: "Porcentaje de éxito" },
];

const FEATURED = [
  {
    t: "Derecho Civil",
    d: "Expertos en conflictos entre particulares, derivados de contratos, convenios o cualquier otro acuerdo.",
    topics: [
      "Elaboración de contratos",
      "Revisión de contratos",
      "Cumplimiento forzoso",
      "Rescisión de contrato",
      "Arrendamiento",
      "Embargos y lanzamientos",
      "Hipotecario",
      "Adjudicaciones por herencia",
    ],
  },
  {
    t: "Derecho Familiar",
    d: "Especialistas en temas de pensión alimenticia, guarda y custodia y divorcio, entre otros.",
    topics: [
      "Divorcio incausado",
      "Pensión alimenticia",
      "Guarda y custodia",
      "Sucesión notarial",
      "Sucesión testamentaria",
      "Sucesión intestamentaria",
      "Liquidación de la sociedad conyugal",
    ],
  },
];

const OTHER_AREAS = [
  { t: "Derecho Inmobiliario", d: "Prevenimos y solucionamos de la manera más profesional los conflictos derivados de arrendamientos, compraventas, regularización de predios e intestados." },
  { t: "Derecho Mercantil", d: "Especialistas en cobros de deuda, conflictos derivados de pagarés, contratos, reclamaciones a instituciones bancarias o empresas de seguros." },
  { t: "Derecho Corporativo", d: "Asesoramos a empresas con asambleas, actos notariales, contractuales y financieros para su óptima operación." },
  { t: "Derecho y Salud", d: "Manejamos temas de negligencias médicas, quejas ante CONAMED, daños físicos y morales." },
];

const PARTNERS = [
  { n: "Erick Portillo", src: "erick-portillo.jpg" },
  { n: "Pablo Huerta", src: "pablo-huerta.jpg" },
];

const COMMITMENTS = [
  { Icon: BookOpen, t: "Conocerás la terminología legal de tu proceso." },
  { Icon: UsersThree, t: "Serás un equipo con tu abogado." },
  { Icon: FolderOpen, t: "Tendrás constante acceso a tu expediente." },
];

const TESTIMONIALS = [
  {
    n: "Luis Javier Morales",
    src: "luis-javier-morales.jpg",
    q: "Ha sido una gran decisión acercarme con GPH Abogados y con el Lic. Erick Portillo quien además de ser un gran profesional, me apoyó en todo momento aclarando mis dudas, dándome tranquilidad que mi caso estaba en las manos correctas.",
  },
  {
    n: "Angel Ibarra",
    src: "angel-ibarra.jpg",
    q: "Sin duda fue la mejor elección elegir a GPH Abogados para que me representara. Además de ser grandes profesionales en todo momento han demostrado empatía con mi proceso.",
  },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/gphabogados", Icon: FacebookLogo },
  { label: "Instagram", href: "https://www.instagram.com/gph_abogados/", Icon: InstagramLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@erickpore", Icon: TiktokLogo },
];

const H2 = "font-[family-name:var(--s39-display)] text-[clamp(2.5rem,4.2vw,3.5rem)] leading-[1.05]";
const GOLD_BTN = "press inline-flex bg-[#D3B574] font-medium text-[#16163F] hover:bg-[#E0C68C]";

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" aria-label="GPH Abogados, inicio" className="block">
      <Image
        src={`${IMG}/${inverse ? "logo-white.png" : "logo.png"}`}
        alt="GPH Abogados, S.C."
        width={199}
        height={34}
        preload={!inverse}
        className="h-auto w-[170px] xl:w-[199px]"
      />
    </a>
  );
}

export default function GphAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s39-body)] text-[#16163F] selection:bg-[#D3B574] selection:text-[#16163F]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#16163F]/[0.08] bg-white"
        scrolledClassName="shadow-[0_10px_28px_-18px_rgba(22,22,63,0.45)]"
        innerClassName="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between gap-6 px-5 md:px-8 lg:h-[96px] xl:px-0"
        linkClassName="text-[15px] text-[#16163F]"
        panelClassName="bg-white text-[#16163F] font-[family-name:var(--s39-body)]"
        panelLinkClassName="font-[family-name:var(--s39-display)] text-3xl"
        burgerClassName="bg-[#16163F]"
        actions={
          <>
            <a href={PHONE.href} className="link-u flex items-center gap-2 text-[15px] font-medium lg:hidden xl:flex">
              <Phone size={18} />
              {PHONE.label}
            </a>
            <a href="#contacto" className={`${GOLD_BTN} px-6 py-3.5 text-[15px]`}>
              Asesoría gratis
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#16163F] lg:min-h-[720px] lg:grid-cols-[minmax(0,1fr)_47.2%]">
          <div className="relative flex flex-col justify-center px-5 py-20 md:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-12">
            <HeroIntro className="flex max-w-[560px] flex-col items-start gap-8">
              <HeroItem as="h1" blur className="font-[family-name:var(--s39-display)] text-[clamp(3rem,6.1vw,5.5rem)] leading-[1.02] tracking-[-1px] text-white">
                Siempre un paso adelante.
              </HeroItem>
              <HeroItem>
                <span aria-hidden="true" className="block h-[2px] w-16 bg-[#D3B574]" />
              </HeroItem>
              <HeroItem as="p" className="max-w-[470px] text-lg leading-[29px] text-white/85">
                Contamos con expertos que ofrecen la solución a tu problema legal de manera integral, óptima y eficaz.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#contacto" className={`${GOLD_BTN} px-[30px] py-[18px] text-base`}>
                  Asesoría gratis
                </a>
                <a href="#areas" className="nudge flex items-center gap-2.5 text-base font-medium text-white">
                  Áreas de derecho
                  <ArrowRight size={18} className="text-[#D3B574]" />
                </a>
              </HeroItem>
              <HeroItem className="mt-6 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-x-10 lg:absolute lg:bottom-[62px] lg:left-[max(2rem,calc((100vw-1200px)/2))] lg:mt-0">
                <span className="flex items-center gap-2.5">
                  <MapPin size={16} className="shrink-0 text-[#D3B574]" />
                  Darwin 68, col. Anzures, Miguel Hidalgo, CDMX
                </span>
                <span className="flex items-center gap-2.5">
                  <Clock size={16} className="shrink-0 text-[#D3B574]" />
                  Lun - Vie 09:00 - 19:00
                </span>
              </HeroItem>
            </HeroIntro>
          </div>
          <MediaReveal className="relative h-[420px] overflow-hidden md:h-[520px] lg:h-auto" delay={0.25}>
            <Image
              src={`${IMG}/oficina.jpg`}
              alt="Esculturas de bronce en la oficina de GPH Abogados"
              fill
              preload
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-cover"
            />
          </MediaReveal>
        </section>

        {/* Cifras */}
        <section aria-label="Cifras" className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 lg:py-16 xl:px-0">
          <Stagger as="dl" className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-0" gap={0.07}>
            {STATS.map(({ v, k }) => (
              <StaggerItem key={k} className="flex flex-col-reverse justify-end gap-2 border-l-2 border-[#D3B574] py-1 pl-5 md:pl-7">
                <dt className="text-[15px] text-[#3D4459]">{k}</dt>
                <dd className="text-[clamp(2.75rem,4.2vw,3.75rem)] font-light leading-none tracking-[-1.5px] tabular-nums">
                  <CountUp value={v} />
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-start gap-14 px-5 pb-24 pt-16 md:px-8 lg:grid-cols-[1fr_420px] lg:gap-24 lg:pb-32 lg:pt-28 xl:px-0">
          <div className="flex flex-col gap-9">
            <Reveal as="h2" className={H2}>
              ¿Por qué somos los mejores?
            </Reveal>
            <Reveal as="p" delay={0.06} className="font-[family-name:var(--s39-display)] text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.4]">
              Además de contar con gran experiencia, agotamos todos los recursos que la Ley pone a nuestra disposición hasta obtener el resultado deseado por nuestros clientes, desde primera instancia, hasta el Juicio de Amparo.
            </Reveal>
            <Reveal as="p" delay={0.12} className="max-w-[560px] text-[17px] leading-[28px] text-[#3D4459]">
              El estudio y actualización constante, así como la honestidad ante nuestros clientes son nuestros ejes rectores.
            </Reveal>
          </div>
          <Reveal delay={0.15} className="flex flex-col gap-5 border-t-2 border-[#D3B574] bg-[#F6F3EC] p-8 md:p-11">
            <MapTrifold size={32} />
            <h3 className="font-[family-name:var(--s39-display)] text-[30px] leading-[35px]">Protección legal nacional</h3>
            <p className="text-base leading-[26px] text-[#3D4459]">
              Contamos con el apoyo de corresponsales en las 32 entidades del país, lo que garantiza la atención de los casos de manera puntual y sin límites operativos.
            </p>
          </Reveal>
        </section>

        {/* Áreas de experiencia */}
        <section id="areas" className="scroll-mt-24 bg-[#16163F] text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-24 md:px-8 lg:gap-16 lg:pb-32 lg:pt-[120px] xl:px-0">
            <Reveal className="flex flex-col gap-5">
              <h2 className={H2}>Áreas de experiencia</h2>
              <p className="max-w-[600px] text-[17px] leading-[28px] text-white/75">
                En las áreas de dominio del despacho, encontrará una solución personalizada y óptima de acuerdo a los requerimientos particulares de su caso.
              </p>
            </Reveal>

            <Stagger className="grid items-start gap-6 lg:grid-cols-2" gap={0.08}>
              {FEATURED.map(({ t, d, topics }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-5 border border-white/[0.12] bg-white/[0.05] p-6 pb-8 md:p-11 md:pb-12 lg:p-8 xl:p-11 xl:pb-12">
                  <h3 className="font-[family-name:var(--s39-display)] text-[clamp(2rem,2.8vw,2.375rem)] leading-[1.1]">{t}</h3>
                  <p className="text-base leading-[26px] text-white/75">{d}</p>
                  <ul className="grid gap-2.5 pt-3 sm:grid-cols-2">
                    {topics.map((topic, i) => (
                      <li
                        key={topic}
                        className={`border border-[#D3B574]/40 px-3.5 py-2.5 text-sm text-white/90 ${topics.length % 2 === 1 && i === topics.length - 1 ? "sm:col-span-2" : ""}`}
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
              {OTHER_AREAS.map(({ t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t border-[#D3B574] pt-6">
                  <h3 className="font-[family-name:var(--s39-display)] text-[26px] leading-[30px]">{t}</h3>
                  <p className="text-[15px] leading-6 text-white/70">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Socios */}
        <section id="socios" className="mx-auto grid max-w-[1200px] scroll-mt-24 gap-16 px-5 py-24 md:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[660px_1fr] xl:gap-[88px] lg:pb-32 lg:pt-[120px] xl:px-0">
          <div className="flex flex-col gap-11">
            <Reveal as="h2" className={H2}>
              Socios
            </Reveal>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
              {PARTNERS.map(({ n, src }, i) => (
                <figure key={n} className="flex flex-col gap-[18px]">
                  <MediaReveal onView delay={i * 0.1} className="img-zoom relative aspect-[318/400] w-full overflow-hidden sm:aspect-auto sm:h-[400px]">
                    <Image src={`${IMG}/${src}`} alt={n} fill sizes="(min-width: 1024px) 318px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </MediaReveal>
                  <Reveal as="figcaption" delay={0.1 + i * 0.08} className="flex flex-col gap-1.5">
                    <span className="font-[family-name:var(--s39-display)] text-[30px] leading-tight">{n}</span>
                    <span className="text-[15px] text-[#3D4459]">Socio fundador</span>
                  </Reveal>
                </figure>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7 lg:pt-[103px]">
            <Reveal as="h3" className="max-w-[340px] font-[family-name:var(--s39-display)] text-[clamp(2.125rem,3vw,2.5rem)] leading-[1.12]">
              Estamos contigo de inicio a fin
            </Reveal>
            <Reveal as="p" delay={0.06} className="text-[17px] leading-[28px] text-[#3D4459]">
              Contarás con un acompañamiento constante a lo largo de tu proceso, desde el momento en que tomemos el caso, hasta la conclusión del mismo.
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-5 pt-3" gap={0.08} delay={0.1}>
              {COMMITMENTS.map(({ Icon, t }) => (
                <StaggerItem key={t} as="li" className="flex items-center gap-[18px]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#16163F]">
                    <Icon size={22} className="text-[#D3B574]" />
                  </span>
                  <span className="text-[17px] font-medium">{t}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="scroll-mt-24 bg-[#F6F3EC]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 py-24 md:px-8 lg:pb-[120px] lg:pt-28 xl:px-0">
            <Reveal as="h2" className={H2}>
              Testimonios de nuestros clientes
            </Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[680px_1fr]">
              <Reveal as="figure" className="flex flex-col gap-8">
                <Quotes size={44} className="text-[#D3B574]" />
                <blockquote className="font-[family-name:var(--s39-display)] text-[clamp(1.5rem,2.1vw,1.8125rem)] leading-[1.41]">
                  Definitivamente agradezco que el Lic. Portillo haya sido quien atendiera mi caso y que sobre todo lo haya ganado con éxito. Sin duda más que un servicio me brindó seguridad, confianza y orientación en los momentos en que me surgían dudas o algún temor al respecto. ¡Siempre se agradece contar con un servicio honesto!
                </blockquote>
                <figcaption className="flex items-center gap-3.5">
                  <Image src={`${IMG}/connie-vilchis.jpg`} alt="" width={52} height={52} className="h-[52px] w-[52px] object-cover" />
                  <span className="text-[15px] font-semibold">Connie Vilchis</span>
                </figcaption>
              </Reveal>
              <Stagger className="flex flex-col gap-7" gap={0.08} delay={0.1}>
                {TESTIMONIALS.map(({ n, src, q }) => (
                  <StaggerItem key={n} as="figure" className="flex flex-col gap-5 bg-white p-8">
                    <blockquote className="text-base leading-[26px] text-[#3D4459]">{q}</blockquote>
                    <figcaption className="flex items-center gap-3.5">
                      <Image src={`${IMG}/${src}`} alt="" width={52} height={52} className="h-[52px] w-[52px] object-cover" />
                      <span className="text-[15px] font-semibold">{n}</span>
                    </figcaption>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Llamado */}
        <section aria-label="Asesoría gratis" className="relative isolate overflow-hidden bg-[#16163F]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={40}>
            <Image src={`${IMG}/cta.png`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#16163F]/[0.84]" />
          <Reveal className="mx-auto flex min-h-[420px] max-w-[760px] flex-col items-center justify-center gap-6 px-5 py-20 text-center lg:min-h-[460px]">
            <h2 className="font-[family-name:var(--s39-display)] text-[clamp(2.5rem,4.2vw,3.5rem)] leading-[1.1] text-white">
              Tú mereces a uno de los mejores abogados.
            </h2>
            <p className="text-lg text-white/85">Un despacho con 10 años de historia.</p>
            <a href="#contacto" className={`${GOLD_BTN} px-[30px] py-[18px] text-base`}>
              Asesoría gratis
            </a>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-start gap-14 px-5 py-24 md:px-8 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[1fr_560px] xl:gap-24 lg:pb-32 lg:pt-[120px] xl:px-0">
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <h2 className={H2}>Contacto</h2>
              <p className="text-lg text-[#3D4459]">Nosotros somos parte de la solución.</p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-[26px]" gap={0.06}>
              {[
                { Icon: Phone, k: "Teléfono", v: PHONE.label, href: PHONE.href },
                { Icon: EnvelopeSimple, k: "Correo", v: "contacto@gphabogados.com", href: "mailto:contacto@gphabogados.com" },
                { Icon: MapPin, k: "Dirección", v: "Darwin 68, col. Anzures, Miguel Hidalgo,\nC.P. 11590, Ciudad de México" },
                { Icon: Clock, k: "Horario", v: "Lunes a viernes, 09:00 - 19:00" },
              ].map(({ Icon, k, v, href }) => (
                <StaggerItem key={k} as="li" className="flex gap-[18px]">
                  <Icon size={22} className="shrink-0" />
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="text-[13px] text-[#3D4459]">{k}</span>
                    {href ? (
                      <a href={href} className="link-u w-fit break-all text-[17px] font-medium leading-[26px] sm:break-normal">
                        {v}
                      </a>
                    ) : (
                      <span className="whitespace-pre-line text-[17px] font-medium leading-[26px]">{v}</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1} className="flex gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="press flex h-11 w-11 items-center justify-center border border-[#16163F]/20 hover:border-[#16163F] hover:bg-[#16163F] hover:text-[#D3B574]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <DemoForm className="flex flex-col gap-[22px] bg-[#16163F] p-6 text-white md:p-12" noteClassName="text-sm text-white/75">
              <h3 className="font-[family-name:var(--s39-display)] text-[34px] leading-tight">Escríbenos</h3>
              <Field label="Nombre" name="nombre" autoComplete="name" />
              <Field label="Correo" name="correo" type="email" autoComplete="email" />
              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/80">Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={5}
                  className="h-[150px] resize-none border border-white/25 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition-[border-color,background-color] duration-200 focus:border-[#D3B574] focus:bg-white/[0.09]"
                />
              </label>
              <div>
                <button type="submit" className={`${GOLD_BTN} px-9 py-[18px] text-base`}>
                  Enviar
                </button>
              </div>
            </DemoForm>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#16163F] text-white/80">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-5 pb-28 pt-16 md:px-8 lg:pb-10 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo inverse />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-u">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/[0.12] pt-6 text-[13px] text-white/60 md:flex-row md:justify-between">
            <p>© 2026 GPH Abogados, S.C. Todos los derechos reservados.{" "}<HemeronCredit /></p>
            <p>Darwin 68, col. Anzures, Miguel Hidalgo, C.P. 11590, Ciudad de México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-white/80">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] border border-white/25 bg-white/[0.06] px-4 text-base text-white outline-none transition-[border-color,background-color] duration-200 focus:border-[#D3B574] focus:bg-white/[0.09]"
      />
    </label>
  );
}
