import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Mulish, Quicksand } from "next/font/google";
import {
  ArrowRight,
  Clock,
  Coins,
  EnvelopeSimple,
  FacebookLogo,
  HeartBreak,
  HouseLine,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TiktokLogo,
  TwitterLogo,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--s38-display" });
const mulish = Mulish({ subsets: ["latin"], variable: "--s38-body" });

export const metadata: Metadata = {
  title: "Abogados Familiaristas",
  description: "Abogados expertos en Derecho Familiar. Que un problema legal no te quite la paz. Resolvámoslo juntos, de forma pronta y justa.",
};

const IMG = "/sitios/afamiliaristas";
const SITE = "https://www.afamiliaristas.com";
const FD = "font-[family-name:var(--s38-display)]";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const H2 = `${FD} text-[clamp(2.125rem,3.1vw,2.75rem)] font-bold leading-[1.16]`;
const WA = "https://wa.me/525666650512";
const TEL = "tel:+525520717794";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICIOS = [
  { Icon: HeartBreak, t: "Divorcio incausado", d: "Divórciate en menos de 4 meses. ¡Garantizado!" },
  { Icon: Coins, t: "Pensión alimenticia", d: "Logramos que recibas una cantidad justa mensual." },
  { Icon: UsersThree, t: "Guarda y custodia", d: "¡Que tus hijos se queden contigo! Pregúntanos cómo." },
  { Icon: HouseLine, t: "Herencias", d: "Recibe lo que te dejaron tus padres." },
];

const TAMBIEN = [
  ["Patria potestad", "Régimen de visitas", "Violencia familiar", "Paternidad"],
  ["Reconocimiento de hijos", "Nulidad de acta de nacimiento", "Identidad de persona", "Apostilla de documentos"],
];

const ARTICULOS = [
  ["15 de mayo de 2026", "Papá, ¿cómo se realiza el descuento a tu salario?", "/papa-como-se-realiza-el-descuento-a-tu-salario"],
  ["3 de febrero de 2026", "Quiero reconocer a mi hijo, ¿qué debo hacer?", "/quiero-reconocer-a-mi-hijo-que-debo-hacer"],
  ["31 de enero de 2026", "¿Para qué sirve la apostilla en un juicio familiar?", "/para-que-sirve-la-apostilla-en-un-juicio-familiar"],
  ["31 de enero de 2026", "Nulidad de acta de nacimiento, ¿cómo pedirla?", "/nulidad-de-acta-de-nacimiento-como-pedirla"],
  ["22 de julio de 2025", "Requisitos para divorciarse, ¿cuáles son?", "/requisitos-para-divorciarse-cuales-son"],
];

const OFICINAS = [
  ["Ecatepec 1", "Zacatecas #31, col. Tulpetlac, Ecatepec, Edo. Mex."],
  ["Ecatepec 2", "Valle Tarim 83, col. Valle de Aragón 3a. sección, Ecatepec, Edo. Mex."],
  ["Izcalli", "Plaza Cantú, Dr. J. Jiménez Cantú S/N, primer piso, local 8, int. 4, Centro Urbano, Cuautitlán Izcalli, Edo. Mex."],
  ["Colonia Centro", "Avenida Juárez #20, col. Centro (frente a Bellas Artes, junto a Juzgados Familiares de la Cdmx), Alcaldía Cuauhtémoc, Cdmx."],
  ["Naucalpan", "Avenida Parque de Chapultepec #101, col. El Parque, Naucalpan, Edo. Mex."],
  ["Nezahualcóyotl", "Juan Colorado #240, col. Benito Juárez, Nezahualcóyotl, Edo. Mex."],
  ["Tlalnepantla", "Emiliano Carranza #17, col. Centro, Tlalnepantla, Edo. Mex."],
  ["Barranca del Muerto", "José María Ibarrarán #47, col. San José Insurgentes, Alcaldía Benito Juárez, Cdmx."],
];

const REDES = [
  { Icon: FacebookLogo, href: "https://www.facebook.com/afamiliaristas", label: "Facebook" },
  { Icon: TwitterLogo, href: "https://twitter.com/afamiliaristas", label: "Twitter" },
  { Icon: InstagramLogo, href: "http://instagram.com/afamiliaristas", label: "Instagram" },
  { Icon: LinkedinLogo, href: "https://mx.linkedin.com/company/afamiliaristas", label: "LinkedIn" },
  { Icon: TiktokLogo, href: "https://www.tiktok.com/@a.familiaristas", label: "TikTok" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="Abogados Familiaristas, inicio" className="block">
      <Image
        src={`${IMG}/logo-horizontal-x4.png`}
        alt="Abogados Familiaristas, creemos en ti & en tu familia"
        width={232}
        height={80}
        preload={!footer}
        className={footer ? "h-20 w-auto" : "h-14 w-auto lg:h-20"}
      />
    </a>
  );
}

function CTA({ className = "" }: { className?: string }) {
  return (
    <a href="#contacto" className={`press rounded-[8px] bg-[#19B99A] font-bold text-[#14323B] hover:bg-[#2BCBAC] ${className}`}>
      Quiero una asesoría
    </a>
  );
}

export default function AbogadosFamiliaristasPage() {
  return (
    <div
      id="top"
      className={`${quicksand.variable} ${mulish.variable} bg-white font-[family-name:var(--s38-body)] text-[#14323B] selection:bg-[#19B99A] selection:text-[#14323B]`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="bg-white"
        scrolledClassName="shadow-[0_8px_24px_-18px_rgba(20,50,59,0.45)]"
        innerClassName={`${WRAP} flex h-[84px] items-center justify-between gap-10 lg:h-[112px] [&>nav]:ml-auto`}
        linkClassName="text-base font-semibold text-[#14323B]"
        panelClassName="bg-white text-[#14323B] font-[family-name:var(--s38-body)]"
        panelLinkClassName={`${FD} text-3xl font-bold`}
        burgerClassName="bg-[#14323B]"
        actions={<CTA className="px-6 py-3.5 text-[15px]" />}
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#2F748C] lg:h-[600px] lg:grid-cols-[840fr_600fr]">
          <HeroIntro className="flex flex-col justify-center gap-7 px-5 py-20 md:px-8 lg:py-0 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-[60px]">
            <HeroItem as="h1" blur className={`${FD} max-w-[640px] text-[clamp(2.5rem,3.7vw,3.25rem)] font-bold leading-[1.15] tracking-[-0.01em] text-white`}>
              Abogados expertos en Derecho Familiar
            </HeroItem>
            <HeroItem as="p" className="max-w-[540px] text-lg leading-[1.55] text-white/[0.88] md:text-[19px] md:leading-[29px]">
              Que un problema legal no te quite la paz. Resolvámoslo juntos, de forma pronta y justa.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-7 pt-2">
              <CTA className="px-[30px] py-[17px] text-base" />
              <a href={WA} className="flex items-center gap-2.5 text-[17px] font-bold text-white">
                <WhatsappLogo size={22} />
                <span className="link-u">56 6665 0512</span>
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[300px] overflow-hidden md:h-[420px] lg:h-auto" delay={0.25}>
            <Image
              src={`${IMG}/Juzgados-Familiares-Ecatepec-2-1920w.jpg`}
              alt="Palacio de Justicia de Ecatepec"
              fill
              preload
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </MediaReveal>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-12 pb-24 pt-24 lg:pb-28 lg:pt-[120px]`}>
            <Reveal className="flex flex-col gap-3.5">
              <h2 className={H2}>Servicios</h2>
              <p className="text-lg leading-[27px] text-[#4A5A60]">Somos expertos en Derecho Familiar y nuestros precios son accesibles.</p>
            </Reveal>
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
              {SERVICIOS.map(({ Icon, t, d }) => (
                <StaggerItem key={t} as="article" className="flex flex-col gap-4 rounded-[8px] bg-[#EEF6F7] px-7 pb-9 pt-8">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[8px] bg-[#2F748C]">
                    <Icon size={26} className="text-white" />
                  </span>
                  <h3 className={`${FD} text-[23px] font-bold leading-7`}>{t}</h3>
                  <p className="text-base leading-[25px] text-[#4A5A60]">{d}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="flex flex-col gap-4">
              <h3 className="text-base font-bold leading-6">También te asesoramos en:</h3>
              {TAMBIEN.map((row) => (
                <ul key={row[0]} className="flex flex-wrap gap-2.5">
                  {row.map((c) => (
                    <li key={c} className="rounded-[8px] border border-[#2F748C]/35 px-3.5 py-[9px] text-sm font-semibold leading-[21px] text-[#2F748C]">
                      {c}
                    </li>
                  ))}
                </ul>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Precios */}
        <section aria-labelledby="precios" className="bg-[#2F748C] text-white">
          <div className={`${WRAP} grid items-center gap-14 py-20 lg:grid-cols-[1fr_440px] lg:gap-24 lg:py-[104px]`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" id="precios" className={`${H2} max-w-[600px]`}>
                Precios justos y facilidades de pago.
              </Reveal>
              <Reveal as="p" delay={0.08} className="max-w-[600px] text-lg leading-[29px] text-white/[0.88]">
                En Abogados Familiaristas estamos comprometidos con un precio justo por un servicio de calidad. Te ofrecemos facilidades de pago que no afecten tu bolsillo; ¡llama y compruébalo!
              </Reveal>
              <Reveal delay={0.14}>
                <CTA className="inline-block px-[30px] py-[17px] text-base" />
              </Reveal>
            </div>
            <Reveal delay={0.1} className="flex flex-col gap-6 rounded-[8px] bg-white p-7 text-[#14323B] md:p-10">
              <h3 className={`${FD} text-2xl font-bold leading-9`}>Horario de oficina</h3>
              <dl className="flex flex-col gap-6">
                <div className="flex justify-between gap-4 text-base leading-6">
                  <dt className="text-[#4A5A60]">Lunes a viernes</dt>
                  <dd className="font-bold">9:00 a 17:00</dd>
                </div>
                <div className="flex justify-between gap-4 text-base leading-6">
                  <dt className="text-[#4A5A60]">Sábado y domingo</dt>
                  <dd className="font-bold">Cerrado</dd>
                </div>
              </dl>
              <span aria-hidden="true" className="h-px w-full bg-[#D5E3E6]" />
              <PhoneRow Icon={WhatsappLogo} label="Celular y WhatsApp" value="56 6665 0512" href={WA} />
              <PhoneRow Icon={Phone} label="Únicamente llamadas" value="55 2071 7794" href={TEL} />
            </Reveal>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-3.5">
                <h2 className={H2}>Blog</h2>
                <p className="text-lg leading-[27px] text-[#4A5A60]">¿Quieres recibir un consejo para solucionar tu problema?</p>
              </div>
              <a href={`${SITE}/blog`} className="nudge flex w-fit items-center gap-2 text-base font-bold text-[#2F748C] md:pb-1.5">
                Ver todos los artículos
                <ArrowRight size={18} />
              </a>
            </Reveal>
            <div className="grid gap-12 lg:grid-cols-[560px_1fr] lg:gap-14">
              <Reveal as="article" delay={0.05}>
                <a
                  href={`${SITE}/rendicion-de-cuentas-por-la-pension-alimenticia-y-en-su-caso-por-que`}
                  className="group flex flex-col gap-[18px] rounded-[8px] bg-[#EEF6F7] p-7 transition-colors duration-200 hover:bg-[#E3F0F2] md:p-11"
                >
                  <p className="text-sm font-bold leading-[21px] text-[#2F748C]">15 de mayo de 2026</p>
                  <h3 className={`${FD} text-[clamp(1.5rem,2.1vw,1.875rem)] font-bold leading-[1.2]`}>
                    Rendición de cuentas... ¿por la pensión alimenticia? Y en su caso, ¿por qué?
                  </h3>
                  <p className="text-[17px] leading-[27px] text-[#4A5A60]">Mamá, ¿te pueden pedir cuentas de lo que gastas en tus hijos? Aquí te decimos todo al respecto.</p>
                  <p className="text-[15px] leading-[23px]">Por Nestor Eduardo Romero Dorado</p>
                </a>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-[30px] lg:pt-2" gap={0.06} delay={0.1}>
                {ARTICULOS.map(([f, t, href]) => (
                  <StaggerItem key={href} as="li">
                    <a href={`${SITE}${href}`} className="group flex flex-col gap-1.5">
                      <span className="text-sm font-bold leading-[21px] text-[#2F748C]">{f}</span>
                      <span className={`${FD} text-[21px] font-bold leading-[27px] transition-colors duration-200 group-hover:text-[#2F748C]`}>{t}</span>
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Oficinas */}
        <section aria-labelledby="oficinas" className="bg-[#EEF6F7]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:py-28`}>
            <Reveal className="flex flex-col gap-3.5">
              <h2 id="oficinas" className={H2}>
                Nuestras oficinas
              </h2>
              <p className="text-lg leading-[27px] text-[#4A5A60]">Ocho oficinas en la Ciudad de México y el Estado de México.</p>
            </Reveal>
            <Stagger as="ul" className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-12" gap={0.05}>
              {OFICINAS.map(([n, a]) => (
                <StaggerItem key={n} as="li" className="flex flex-col gap-2.5">
                  <h3 className={`${FD} flex items-center gap-2 text-xl font-bold leading-[30px] text-[#2F748C]`}>
                    <MapPin size={20} className="shrink-0 text-[#19B99A]" />
                    {n}
                  </h3>
                  <p className="text-[15px] leading-[23px] text-[#4A5A60]">{a}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[440px_1fr] lg:gap-[88px] lg:py-[120px]`}>
            <div className="flex flex-col gap-7">
              <Reveal className="flex flex-col gap-7">
                <h2 className={H2}>Envíanos un mensaje</h2>
                <p className="text-lg leading-[29px] text-[#4A5A60]">
                  Si tienes alguna pregunta sobre nuestros servicios, llena el formulario y nos pondremos en contacto contigo, o llámanos por teléfono.
                </p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-7" gap={0.06}>
                <ContactItem Icon={WhatsappLogo} label="Celular y WhatsApp">
                  <a href={WA} className="link-u">
                    56 6665 0512
                  </a>
                </ContactItem>
                <ContactItem Icon={Phone} label="Únicamente llamadas">
                  <a href={TEL} className="link-u">
                    55 2071 7794
                  </a>
                </ContactItem>
                <ContactItem Icon={EnvelopeSimple} label="Correo electrónico">
                  <a href="mailto:afamiliaristas@gmail.com" className="link-u">
                    afamiliaristas@gmail.com
                  </a>
                  <br />
                  <a href="mailto:eduromdo@gmail.com" className="link-u">
                    eduromdo@gmail.com
                  </a>
                </ContactItem>
                <ContactItem Icon={Clock} label="Horario de oficina">
                  Lunes a viernes, 9:00 a 17:00
                </ContactItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 rounded-[8px] bg-[#EEF6F7] p-6 md:p-11" noteClassName="text-sm text-[#4A5A60]">
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="E-mail" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold leading-[21px]">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    className="h-[150px] resize-none rounded-[8px] border border-[#CFE0E4] bg-white px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#2F748C] focus:shadow-[0_0_0_3px_rgba(47,116,140,0.15)]"
                  />
                </label>
                <button type="submit" className="press w-fit rounded-[8px] bg-[#2F748C] px-10 py-4 text-base font-bold text-white hover:bg-[#276378]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#EEF6F7]">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Logo footer />
            <div className="flex flex-col gap-5 md:items-end">
              <nav aria-label="Pie de página">
                <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-semibold leading-[23px]">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex gap-2.5">
                {REDES.map(({ Icon, href, label }) => (
                  <li key={label}>
                    <a href={href} aria-label={label} className="press flex h-10 w-10 items-center justify-center rounded-[8px] bg-white text-[#2F748C] hover:bg-[#2F748C] hover:text-white">
                      <Icon size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#CFE0E4] pt-[22px] text-sm leading-[21px] text-[#4A5A60] md:flex-row md:justify-between">
            <p>© Abogados Familiaristas. Creemos en ti &amp; en tu familia.</p>
            <p>¿Quieres recibir un consejo? Síguenos en redes sociales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhoneRow({ Icon, label, value, href }: { Icon: typeof Phone; label: string; value: string; href: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#EEF6F7]">
        <Icon size={20} className="text-[#2F748C]" />
      </span>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm leading-[21px] text-[#4A5A60]">{label}</p>
        <a href={href} className={`${FD} link-u w-fit text-xl font-bold leading-[30px]`}>
          {value}
        </a>
      </div>
    </div>
  );
}

function ContactItem({ Icon, label, children }: { Icon: typeof Phone; label: string; children: ReactNode }) {
  return (
    <StaggerItem as="li" className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#EEF6F7]">
        <Icon size={22} className="text-[#2F748C]" />
      </span>
      <div className="flex flex-col gap-[3px]">
        <p className="text-sm leading-[21px] text-[#4A5A60]">{label}</p>
        <p className="text-[17px] font-bold leading-[26px]">{children}</p>
      </div>
    </StaggerItem>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold leading-[21px]">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[50px] rounded-[8px] border border-[#CFE0E4] bg-white px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#2F748C] focus:shadow-[0_0_0_3px_rgba(47,116,140,0.15)]"
      />
    </label>
  );
}
