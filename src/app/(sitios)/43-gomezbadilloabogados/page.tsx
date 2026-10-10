import type { Metadata } from "next";
import Image from "next/image";
import { Kumbh_Sans, Libre_Bodoni } from "next/font/google";
import {
  Briefcase,
  Buildings,
  Calculator,
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  Phone,
  Quotes,
  Scales,
  Scroll,
  Storefront,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";

const display = Libre_Bodoni({ subsets: ["latin"], variable: "--s43-display" });
const body = Kumbh_Sans({ subsets: ["latin"], variable: "--s43-body" });

export const metadata: Metadata = {
  title: "Gómez/Badillo Abogados",
  description: "Soluciones legales inmediatas, seguras y prácticas. Firma de abogados en la Ciudad de México.",
};

const IMG = "/sitios/43-gomezbadilloabogados";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Perfiles", href: "#perfiles" },
  { label: "Áreas de práctica", href: "#practica" },
  { label: "Opiniones", href: "#opiniones" },
];

const VALUES = ["Honestidad", "Excelencia", "Orientación al cliente", "Compromiso", "Lealtad", "Ética"];

const PROFILES = [
  {
    n: "Mtro. Javier Gómez Torres",
    r: "Director General",
    src: "javier-gomez.jpg",
    b: "Abogado senior con más de 10 años de experiencia en el ámbito del derecho en México, con gran responsabilidad, diligencia y empatía en el actuar del derecho. Además de un excelente trato de servicio al cliente y notable capacidad de negociación ante problemas de diferente índole.",
  },
  {
    n: "Mtra. Berenice Badillo Tapia",
    r: "Directora Jurídica",
    src: "berenice-badillo.jpg",
    b: "Abogada con 7 años de experiencia, cuida los detalles, desarrolla su actividad profesional con diligencia y gran responsabilidad. Además de ser una persona dinámica, comprometida, atenta y empática, está en constante formación profesional.",
  },
];

const AREAS = [
  { Icon: Buildings, t: "Derecho Corporativo", d: "Regula a las sociedades hacia el interior, en su constitución y en las relaciones entre las personas que las integran, y hacia el exterior, en sus relaciones con el Estado y con otras personas físicas o morales." },
  { Icon: Calculator, t: "Derecho Fiscal", d: "Regula las relaciones jurídicas entre el Estado, como autoridad fiscal, y los gobernados como contribuyentes. Establece las normas que determinan los tributos." },
  { Icon: Storefront, t: "Derecho Mercantil", d: "Regula las relaciones jurídicas entre comerciantes y las actividades del comercio: las personas, los actos y las cosas que tienen que ver con él." },
  { Icon: Scroll, t: "Derecho Civil", d: "Cada estado de la República cuenta con un código civil, además del Código Civil Federal, que regulan los derechos y obligaciones de las personas desde su concepción hasta su muerte." },
  { Icon: UsersThree, t: "Derecho Familiar", d: "Regula las relaciones de carácter personal y patrimonial entre los miembros de la familia y frente a terceros." },
  { Icon: Scales, t: "Derecho Penal", d: "Normas con las que el Estado define las conductas u omisiones que constituyen delitos, así como las penas y medidas de seguridad para sancionarlos." },
  { Icon: Briefcase, t: "Derecho Laboral", d: "Regula las relaciones entre el trabajador y el patrón: el contrato y las condiciones de trabajo, como jornada, salario, descansos y vacaciones, la terminación de la relación laboral y la seguridad social." },
];

const OPINIONS = [
  { q: "“Me ayudaron a resolver mi asunto de forma rápida y eficiente.”", a: "Abraham De Anda" },
  { q: "“Gracias, desde la asesoría fueron claros con tiempos y costos de mi caso.”", a: "Paul Lambert" },
];

const CONTACT = [
  {
    Icon: MapPin,
    k: "Oficina",
    v: [{ t: "Lago Valencia No. 95, Col. Argentina Antigua," }, { t: "Alcaldía Miguel Hidalgo, C.P. 11270, Ciudad de México" }],
  },
  {
    Icon: Phone,
    k: "Teléfonos",
    v: [
      { t: "55 6129 7389", href: "tel:+525561297389" },
      { t: "771 393 1142", href: "tel:+527713931142" },
    ],
  },
  {
    Icon: EnvelopeSimple,
    k: "Correo",
    v: [
      { t: "contacto@gomezbadilloabogados.com", href: "mailto:contacto@gomezbadilloabogados.com" },
      { t: "gomezbadilloabogados@gmail.com", href: "mailto:gomezbadilloabogados@gmail.com" },
    ],
  },
  {
    Icon: InstagramLogo,
    k: "Redes",
    v: [
      { t: "Instagram @gomezbadilloabogados", href: "https://www.instagram.com/gomezbadilloabogados/", external: true },
      { t: "Facebook Gómez/Badillo Abogados", href: "https://www.facebook.com/profile.php?id=100076944432256", external: true },
    ],
  },
];

const H2 = "font-[family-name:var(--s43-display)] text-[clamp(2.5rem,3.6vw,3.25rem)] leading-[1.12]";
const PAD = "px-5 md:px-8 xl:px-0";

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="Gómez/Badillo Abogados, inicio" className="block">
      <Image
        src={`${IMG}/logo-blanco.png`}
        alt="Gómez/Badillo Abogados"
        width={268}
        height={92}
        preload={!footer}
        className={footer ? "h-auto w-[220px] md:w-[268px]" : "h-auto w-[176px] lg:w-[200px] xl:w-[268px]"}
      />
    </a>
  );
}

export default function GomezBadilloPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s43-body)] text-[#0C2360] selection:bg-[#0752D5] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-[#0C2360]"
        scrolledClassName="shadow-[0_12px_30px_-18px_rgba(4,12,40,0.8)]"
        innerClassName="mx-auto flex h-[92px] max-w-[1200px] items-center justify-between gap-10 px-5 md:px-8 lg:h-[124px] xl:px-0 [&>div:first-child]:mr-auto"
        linkClassName="text-[15px] font-medium text-white [&[href='#top']]:text-[#17B2E7]"
        panelClassName="bg-[#0C2360] text-white font-[family-name:var(--s43-body)]"
        panelLinkClassName="font-[family-name:var(--s43-display)] text-3xl"
        burgerClassName="bg-white"
        actions={
          <a href="#contacto" className="press inline-flex rounded-full bg-white px-6 py-[13px] text-[15px] font-bold text-[#0C2360] hover:bg-[#D9E6FF]">
            Contáctanos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#0C2360]">
          <Parallax className="absolute inset-0 -z-10 overflow-hidden" distance={50}>
            <Image src={`${IMG}/hero.jpg`} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0C2360]/[0.86] md:bg-transparent md:bg-[linear-gradient(90deg,#0C2360F5_0%,#0C2360D1_50%,#0C236040_100%)]" />
          <div className={`mx-auto flex max-w-[1200px] items-center py-24 md:min-h-[560px] lg:min-h-[680px] lg:py-20 ${PAD}`}>
            <HeroIntro className="flex max-w-[840px] flex-col items-start gap-[30px]">
              <HeroItem as="h1" blur className="font-[family-name:var(--s43-display)] text-[clamp(2.375rem,3.9vw,3.5rem)] leading-[1.07] text-white">
                Soluciones legales inmediatas, seguras y prácticas
              </HeroItem>
              <HeroItem as="p" className="max-w-[560px] text-[19px] leading-[29px] text-[#D6E0F5]">
                Nos dedicamos a brindar soluciones legales a través de estrategias con procesos que transmiten confiabilidad.
              </HeroItem>
              <HeroItem className="flex flex-wrap gap-3.5 pt-2">
                <a href="#contacto" className="press inline-flex rounded-full bg-[#0752D5] px-[30px] py-[17px] text-base font-bold text-white hover:bg-[#1A63E6]">
                  Contáctanos
                </a>
                <a href="#practica" className="press inline-flex rounded-full border border-white/60 px-[29px] py-4 text-base font-semibold text-white hover:border-white hover:bg-white/10">
                  Áreas de práctica
                </a>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        {/* Valores */}
        <section aria-label="Nuestros valores" className="border-b border-[#0C2360]/10">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-5 py-10 lg:flex-row lg:items-center lg:gap-10 ${PAD}`}>
            <p className="shrink-0 text-[15px] font-bold text-[#0752D5]">Nuestros valores</p>
            <Stagger as="ul" className="flex flex-1 flex-wrap gap-x-8 gap-y-3 lg:justify-between lg:gap-x-6" gap={0.05}>
              {VALUES.map((v) => (
                <StaggerItem key={v} as="li" y={10} className="font-[family-name:var(--s43-display)] text-[clamp(1.25rem,1.7vw,1.5rem)]">
                  {v}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="scroll-mt-28 bg-[#EEF3FB]">
          <div className={`mx-auto grid max-w-[1200px] items-center gap-14 py-24 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16 lg:py-[120px] xl:gap-24 ${PAD}`}>
            <MediaReveal onView delay={0} className="relative flex aspect-[440/480] w-full items-center justify-center overflow-hidden bg-[#0C2360]">
              <div className="flex h-full w-full items-center justify-center">
                <Image src={`${IMG}/monograma.png`} alt="Monograma GB de Gómez/Badillo Abogados" width={300} height={300} className="h-auto w-[61%]" />
              </div>
            </MediaReveal>
            <div className="flex flex-col gap-10">
              <Reveal as="h2" className={H2}>
                Nosotros
              </Reveal>
              <Stagger className="flex flex-col gap-10" gap={0.08}>
                {[
                  { t: "Misión", d: "Somos una firma de abogados y profesionistas que proponen estrategias legales, ofreciendo soluciones inmediatas, seguras y prácticas, garantizando el mejor resultado para nuestros clientes." },
                  { t: "Visión", d: "Firma de abogados encargada de brindar servicios de calidad y excelencia para nuestros clientes. Nos destacamos en fomentar la cultura de prevención ante el impacto que se presenta en las diversas esferas del derecho." },
                ].map(({ t, d }) => (
                  <StaggerItem key={t} className="flex flex-col gap-3 border-l-2 border-[#0752D5] pl-6">
                    <h3 className="font-[family-name:var(--s43-display)] text-[26px]">{t}</h3>
                    <p className="text-[17px] leading-7 text-[#33415E]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Perfiles */}
        <section id="perfiles" className={`mx-auto flex max-w-[1200px] scroll-mt-28 flex-col gap-14 py-24 lg:py-[120px] ${PAD}`}>
          <Reveal as="h2" className={H2}>
            Perfiles
          </Reveal>
          <div className="grid gap-14 xl:grid-cols-2 xl:gap-10">
            {PROFILES.map(({ n, r, src, b }, i) => (
              <article key={n} className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <MediaReveal onView delay={i * 0.1} className="relative aspect-[230/295] w-full max-w-[230px] shrink-0 overflow-hidden bg-[#EEF3FB]">
                  <Image src={`${IMG}/${src}`} alt={`Retrato de ${n}`} fill sizes="230px" className="object-cover" />
                </MediaReveal>
                <Reveal delay={0.1 + i * 0.08} className="flex flex-col gap-2.5 sm:pt-2">
                  <h3 className="font-[family-name:var(--s43-display)] text-[26px] leading-[31px]">{n}</h3>
                  <p className="text-[15px] font-bold text-[#0752D5]">{r}</p>
                  <p className="text-[15px] leading-[25px] text-[#33415E]">{b}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="practica" className="scroll-mt-28 bg-[#0C2360] text-white">
          <div className={`mx-auto flex max-w-[1200px] flex-col gap-14 py-24 lg:gap-16 lg:pb-32 lg:pt-[120px] ${PAD}`}>
            <Reveal as="h2" className={H2}>
              Áreas de práctica
            </Reveal>
            <Stagger className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-14" gap={0.05}>
              {AREAS.map(({ Icon, t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t border-white/20 pt-7">
                  <Icon size={30} className="text-[#17B2E7]" />
                  <h3 className="font-[family-name:var(--s43-display)] text-2xl leading-[29px]">{t}</h3>
                  <p className="text-[15px] leading-6 text-[#C9D4EE]">{d}</p>
                </StaggerItem>
              ))}
              <StaggerItem className="flex flex-col items-start justify-between gap-5 bg-[#0752D5] p-7 lg:self-start">
                <p className="font-[family-name:var(--s43-display)] text-[22px] leading-[29px]">
                  Asesorías legales y servicios jurídicos en las diferentes alcaldías de la capital.
                </p>
                <a href="#contacto" className="press inline-flex rounded-full bg-white px-[26px] py-3.5 text-[15px] font-bold text-[#0C2360] hover:bg-[#D9E6FF]">
                  Contáctanos
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Opiniones */}
        <section id="opiniones" className={`mx-auto flex max-w-[1200px] scroll-mt-28 flex-col gap-14 py-24 lg:py-[120px] ${PAD}`}>
          <Reveal as="h2" className={H2}>
            Opiniones
          </Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] xl:grid-cols-[640px_1fr]">
            <Reveal as="figure" className="flex flex-col gap-7 pt-2">
              <Quotes size={44} className="text-[#0752D5]" />
              <blockquote className="font-[family-name:var(--s43-display)] text-[clamp(1.625rem,2.25vw,2rem)] leading-[1.34]">
                Su atención fue excelente, me explicaron en cada parte del proceso cómo avanzaba, en palabras que me hicieron sentir segura y respaldada.
              </blockquote>
              <figcaption className="text-base font-bold text-[#0752D5]">María Teresa Landeros</figcaption>
            </Reveal>
            <Stagger className="flex flex-col gap-5" gap={0.08} delay={0.1}>
              {OPINIONS.map(({ q, a }) => (
                <StaggerItem key={a} as="figure" className="flex flex-col gap-4 bg-[#EEF3FB] px-7 py-8 md:px-9">
                  <blockquote className="font-[family-name:var(--s43-display)] text-[21px] leading-[30px]">{q}</blockquote>
                  <figcaption className="text-[15px] font-bold text-[#0752D5]">{a}</figcaption>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-28 bg-[#0752D5] text-white">
          <div className={`mx-auto grid max-w-[1200px] items-start gap-12 py-24 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16 lg:py-28 xl:gap-24 ${PAD}`}>
            <Reveal className="flex flex-col gap-6">
              <h2 className="font-[family-name:var(--s43-display)] text-[clamp(2.75rem,3.9vw,3.5rem)] leading-[1.1]">Contacto</h2>
              <p className="text-[19px] leading-[30px] text-[#E3ECFF]">
                Nuestra oficina en CDMX ofrece asesorías legales y servicios jurídicos en las diferentes alcaldías de la capital.
              </p>
            </Reveal>
            <Stagger as="ul" className="flex flex-col gap-[30px] lg:pt-3" gap={0.07} delay={0.08}>
              {CONTACT.map(({ Icon, k, v }) => (
                <StaggerItem key={k} as="li" className="flex gap-4">
                  <Icon size={24} className="shrink-0" />
                  <div className="flex min-w-0 flex-col items-start gap-1.5">
                    <span className="text-sm font-bold text-[#CFE0FF]">{k}</span>
                    {v.map((line) =>
                      "href" in line && line.href ? (
                        <a
                          key={line.t}
                          href={line.href}
                          {...("external" in line && line.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="link-u break-all text-[17px] leading-[26px] sm:break-normal"
                        >
                          {line.t}
                        </a>
                      ) : (
                        <span key={line.t} className="text-[17px] leading-[26px]">
                          {line.t}
                        </span>
                      ),
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <footer className="bg-[#0C2360] text-white">
        <div className={`mx-auto flex max-w-[1200px] flex-col gap-12 pb-28 pt-16 lg:pb-9 ${PAD}`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <Logo footer />
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
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
          <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-[13px] text-[#AFB7CB] sm:flex-row sm:justify-between">
            <p>© 2026 Gómez/Badillo Abogados</p>
            <div className="flex gap-6">
              <span>Términos y condiciones</span>
              <span>Aviso de privacidad</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
