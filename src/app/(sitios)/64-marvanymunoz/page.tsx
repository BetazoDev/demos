import type { Metadata } from "next";
import Image from "next/image";
import { Frank_Ruhl_Libre, Hanken_Grotesk, Tinos } from "next/font/google";
import {
  Anchor,
  ArrowRight,
  Check,
  Coins,
  EnvelopeSimple,
  Handshake,
  HouseLine,
  MapPin,
  Phone,
  Scales,
  ShieldCheck,
  TreeStructure,
  User,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Frank_Ruhl_Libre({ subsets: ["latin"], variable: "--s64-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--s64-body" });
const wordmark = Tinos({ subsets: ["latin"], weight: "700", variable: "--s64-logo" });

export const metadata: Metadata = {
  title: "Marván y Muñoz Abogados, S.C.",
  description: "Firma jurídica especializada en derecho del trabajo desde 1942, con servicio en toda la República Mexicana.",
};

const IMG = "/sitios/64-marvanymunoz";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const SERIF = "font-[family-name:var(--s64-display)]";
const H2 = `${SERIF} text-[clamp(2.25rem,3.2vw,2.875rem)] font-medium leading-[1.11] text-[#001F42]`;

const NAV = [
  { label: "Acerca de nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Ubicación", href: "#ubicacion" },
];

const DATOS = [
  { v: "70 años", l: "de litigio en el sector privado", count: true },
  { v: "Más de 20", l: "años de litigio en el sector público", count: true },
  { v: "OIT", l: "Representantes del sector empresarial en sus reuniones" },
  { v: "Toda la República", l: "Servicio a clientes en todo el país" },
];

const LOGROS = [
  "Representado al sector empresarial en reuniones de la Organización Internacional del Trabajo",
  "Publicado varios libros",
  "Impartido cátedra en prestigiadas universidades del país",
  "Participado en proyectos legislativos para reformar la Ley Federal del Trabajo",
];

const SERVICIOS = [
  { t: "Asuntos individuales de trabajo", Icon: User },
  { t: "Asuntos colectivos de trabajo", Icon: UsersThree },
  { t: "Seguridad Social", Icon: ShieldCheck },
  { t: "Negociación de contratos colectivos", Icon: Handshake },
  { t: "Desarrollo organizacional", Icon: TreeStructure },
  { t: "Litigio y asesoría jurídico laboral", Icon: Scales },
];

const SECTORES = ["Automotriz", "Farmacéutico", "Textil", "Construcción", "Alimentos", "Transporte", "Financiero", "Educación", "Hotelero", "Servicios médicos"];

const PUBLICO = [
  { t: "Comisión Nacional de los Salarios Mínimos", Icon: Coins },
  { t: "Comisión Nacional del Fondo para la Vivienda", Icon: HouseLine },
  { t: "La coordinación de la privatización del Sistema Portuario Mexicano", Icon: Anchor },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Marván y Muñoz Abogados, S.C., inicio"
      className={`flex w-fit flex-col items-center gap-0.5 font-[family-name:var(--s64-logo)] font-bold leading-none ${inverse ? "text-white" : "text-[#0A111E]"}`}
    >
      <span className="whitespace-nowrap text-[clamp(1.125rem,4.6vw,1.5rem)] leading-tight">Marván y Muñoz Abogados, S.C.</span>
      <span className="text-[13px]">Desde 1942.</span>
    </a>
  );
}

export default function MarvanMunozPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} ${wordmark.variable} bg-white font-[family-name:var(--s64-body)] text-[#0A111E] selection:bg-[#033B87] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#E1E4E8] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(0,31,66,0.35)]"
        innerClassName="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between gap-10 px-5 md:px-8 lg:h-[95px] xl:px-0 lg:[&>nav]:ml-auto lg:[&>nav>ul]:gap-10"
        linkClassName="text-[15px] font-medium text-[#0A111E]"
        panelClassName="bg-white text-[#001F42] font-[family-name:var(--s64-body)]"
        panelLinkClassName={`${SERIF} text-[28px] font-medium`}
        burgerClassName="bg-[#001F42]"
        actions={
          <a href="#contacto" className="press bg-[#033B87] px-6 py-[13px] text-[15px] font-semibold text-white hover:bg-[#001F42]">
            Contáctenos
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section aria-label="Inicio" className="bg-[#F4F5F5]">
          <HeroIntro className={`${WRAP} flex flex-col gap-14 pb-20 pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-28 lg:pt-[120px]`}>
            <div className="flex min-w-0 max-w-[840px] flex-col gap-7">
              <HeroItem as="h1" blur className={`${SERIF} text-[clamp(2.25rem,3.9vw,3.5rem)] font-medium leading-[1.11] text-[#001F42]`}>
                Representamos al sector patronal en asuntos de trabajo
              </HeroItem>
              <HeroItem as="p" className="max-w-[600px] text-lg leading-[1.5] text-[#3B4552] md:text-xl">
                Firma jurídica especializada en derecho del trabajo desde 1942, con servicio en toda la República Mexicana.
              </HeroItem>
              <HeroItem className="flex flex-wrap items-center gap-7 pt-3">
                <a href="#contacto" className="press bg-[#033B87] px-[30px] py-[17px] text-base font-semibold text-white hover:bg-[#001F42]">
                  Contáctenos
                </a>
                <a href="#servicios" className="nudge flex items-center gap-2.5 text-base font-semibold text-[#033B87]">
                  Ver servicios
                  <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </HeroItem>
            </div>
            <HeroItem className="flex shrink-0 flex-col items-start gap-1 lg:items-end lg:pb-1.5">
              <p className={`${SERIF} text-[clamp(6rem,10.4vw,9.375rem)] font-light leading-[0.9] text-[#001F42]`}>1942</p>
              <p className="text-base font-semibold text-[#3B4552]">Año de fundación</p>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Trayectoria */}
        <section aria-label="Trayectoria" className="bg-[#001F42] text-white">
          <Stagger as="dl" className={`${WRAP} grid grid-cols-2 gap-x-8 gap-y-10 py-16 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto] lg:gap-12`} gap={0.07}>
            {DATOS.map(({ v, l, count }) => (
              <StaggerItem key={v} className="flex flex-col-reverse justify-end gap-2.5">
                <dt className="text-base leading-[23px] text-[#C3CCD8]">{l}</dt>
                <dd className={`${SERIF} text-[clamp(1.75rem,2.8vw,2.5rem)] font-medium leading-tight lg:whitespace-nowrap`}>
                  {count ? <CountUp value={v} /> : v}
                </dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Acerca de nosotros */}
        <section id="nosotros" className="scroll-mt-24">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[520px_1fr] lg:gap-[88px] lg:py-32`}>
            <div className="flex flex-col gap-6">
              <Reveal as="h2" className={H2}>
                Acerca de nosotros
              </Reveal>
              <Reveal delay={0.06} as="p" className={`${SERIF} text-[clamp(1.25rem,1.7vw,1.5rem)] leading-[1.46]`}>
                Marván y Muñoz, Abogados, S.C. es una firma jurídica especializada en asesorar y representar el interés del sector patronal en asuntos de trabajo.
              </Reveal>
              <Reveal delay={0.12} className="space-y-6 text-lg leading-[29px] text-[#3B4552]">
                <p>A partir de 1942, año de su fundación, nuestra firma se ha dedicado a participar activamente en la vida del derecho del trabajo en nuestro país.</p>
                <p>
                  Somos reconocidos por nuestra participación en el litigio, setenta años en el sector privado y más de veinte en el sector público, así como en la asesoría jurídico laboral.
                </p>
                <p>Proporcionamos nuestros servicios a lo largo de toda la República Mexicana, asesorando y defendiendo los intereses de nuestros clientes.</p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-10 lg:order-first">
              <MediaReveal onView delay={0} className="img-zoom relative h-[220px] w-full overflow-hidden sm:h-[300px]">
                <Image src={`${IMG}/abogados-penalistas.jpg`} alt="Balanza, libros y mazo sobre una mesa de madera" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
              </MediaReveal>
              <div className="flex flex-col gap-[18px]">
                <Reveal as="h3" className={`${SERIF} text-[22px] font-medium text-[#001F42]`}>
                  Nuestros socios y abogados han
                </Reveal>
                <Stagger as="ul" className="flex flex-col gap-[18px]" gap={0.06}>
                  {LOGROS.map((t) => (
                    <StaggerItem key={t} as="li" className="flex gap-[14px] text-[17px] leading-[25px]">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#033B87]" />
                      {t}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-[#F4F5F5]">
          <div className={`${WRAP} flex flex-col gap-12 py-24 lg:pb-32 lg:pt-[120px]`}>
            <Reveal className="flex max-w-[720px] flex-col gap-[14px]">
              <h2 className={H2}>Servicios</h2>
              <p className="text-lg leading-[29px] text-[#3B4552]">Asesoramos y defendemos los intereses de nuestros clientes en asuntos de carácter individual y colectivo.</p>
            </Reveal>
            <Stagger as="ul" className="grid gap-4 md:grid-cols-2" gap={0.06}>
              {SERVICIOS.map(({ t, Icon }) => (
                <StaggerItem key={t} as="li" className="flex items-center gap-5 bg-white px-6 py-7 sm:gap-6 sm:px-9 sm:py-8">
                  <Icon className="h-[30px] w-[30px] shrink-0 text-[#033B87]" />
                  <h3 className={`${SERIF} text-[clamp(1.25rem,1.9vw,1.625rem)] font-medium leading-tight text-[#001F42]`}>{t}</h3>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Sectores */}
        <section id="sectores" className="scroll-mt-24">
          <div className={`${WRAP} flex flex-col gap-[72px] py-24 lg:py-32`}>
            <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-[88px]">
              <Reveal className="flex flex-col gap-5">
                <h2 className={H2}>Sectores que atendemos</h2>
                <p className="text-lg leading-[29px] text-[#3B4552]">Representamos a clientes en distintas áreas industriales del sector privado.</p>
              </Reveal>
              <Stagger as="ul" className="flex flex-wrap gap-x-7 gap-y-1.5 lg:gap-x-10 lg:pt-2" gap={0.04}>
                {SECTORES.map((s) => (
                  <StaggerItem key={s} as="li" className={`${SERIF} whitespace-nowrap text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.35] text-[#001F42]`}>
                    {s}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div className="flex flex-col gap-7 border-t border-[#D9DDE3] pt-12">
              <Reveal as="h3" className={`${SERIF} text-[clamp(1.25rem,1.7vw,1.5rem)] font-medium leading-snug text-[#001F42]`}>
                En el sector público, nuestros abogados han participado en
              </Reveal>
              <Stagger as="ul" className="grid gap-6 md:grid-cols-3 md:gap-12" gap={0.07}>
                {PUBLICO.map(({ t, Icon }) => (
                  <StaggerItem key={t} as="li" className="flex gap-4 text-lg leading-[27px]">
                    <Icon className="h-[26px] w-[26px] shrink-0 text-[#033B87]" />
                    {t}
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1} as="p" className="text-[17px] leading-[26px] text-[#3B4552]">
                Asesorando a entidades federativas y a empresas descentralizadas.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#001F42] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_540px] lg:gap-24 lg:py-32`}>
            <div className="flex flex-col gap-8">
              <Reveal className="flex flex-col gap-8">
                <h2 className={`${SERIF} text-[clamp(2.5rem,3.6vw,3.25rem)] font-medium leading-tight`}>Contáctenos</h2>
                <p className="max-w-[480px] text-lg leading-[29px] text-[#C3CCD8]">
                  Proporcionamos nuestros servicios a clientes a lo largo de toda la República Mexicana desde nuestras oficinas en la Ciudad de México.
                </p>
              </Reveal>
              <Stagger className="flex flex-col gap-7" gap={0.07}>
                <StaggerItem>
                  <div id="ubicacion" className="flex scroll-mt-28 gap-[18px]">
                    <MapPin className="h-6 w-6 shrink-0 text-[#9FB4D1]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[15px] font-semibold text-[#AFBDCF]">Ubicación</p>
                      <p className="text-xl leading-[30px]">
                        Salvatierra 30, San Miguel Chapultepec
                        <br />
                        Ciudad de México
                      </p>
                    </div>
                  </div>
                </StaggerItem>
                <ContactRow Icon={Phone} label="Teléfono" value="+52 55 5141 1800" href="tel:+525551411800" />
                <ContactRow Icon={EnvelopeSimple} label="Correo" value="abogados@marvanymunoz.com" href="mailto:abogados@marvanymunoz.com" />
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-5 bg-white p-6 text-[#0A111E] sm:p-11" noteClassName="text-sm text-[#3B4552]">
                <h3 className={`${SERIF} text-[28px] font-medium text-[#001F42]`}>Envíenos un mensaje</h3>
                <Field label="Su nombre" name="nombre" autoComplete="name" />
                <Field label="Su correo electrónico" name="correo" type="email" autoComplete="email" />
                <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-semibold">Comentarios</span>
                  <textarea
                    name="comentarios"
                    placeholder="Díganos lo que piensa."
                    className="h-[120px] resize-none border border-[#C8CED6] bg-[#F4F5F5] px-4 py-3.5 text-base outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#69727E] focus:border-[#033B87] focus:shadow-[0_0_0_3px_rgba(3,59,135,0.15)]"
                  />
                </label>
                <button type="submit" className="press w-full bg-[#033B87] px-7 py-[17px] text-base font-semibold text-white hover:bg-[#001F42]">
                  Enviar formulario
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A111E]">
        <div className={`${WRAP} flex flex-col gap-10 pb-28 pt-14 lg:flex-row lg:items-center lg:justify-between lg:pb-14`}>
          <Logo inverse />
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-[#C3CCD8]">
              {[...NAV.slice(0, 3), { label: "Contáctenos", href: "#contacto" }].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="link-u">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-[#97A3B3]">© Marván y Muñoz Abogados, S.C.</p>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ Icon, label, value, href }: { Icon: typeof MapPin; label: string; value: string; href: string }) {
  return (
    <StaggerItem className="flex gap-[18px]">
      <Icon className="h-6 w-6 shrink-0 text-[#9FB4D1]" />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-[15px] font-semibold text-[#AFBDCF]">{label}</p>
        <a href={href} className="link-u w-fit break-all text-xl leading-[30px]">{value}</a>
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
        className="h-12 border border-[#C8CED6] bg-[#F4F5F5] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#033B87] focus:shadow-[0_0_0_3px_rgba(3,59,135,0.15)]"
      />
    </label>
  );
}
