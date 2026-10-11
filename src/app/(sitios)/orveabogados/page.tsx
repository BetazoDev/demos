import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Jost, Source_Serif_4 } from "next/font/google";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Jost({ subsets: ["latin"], variable: "--s32-display" });
const body = Source_Serif_4({ subsets: ["latin"], axes: ["opsz"], variable: "--s32-body" });

export const metadata: Metadata = {
  title: "ORVE Abogados",
  description: "Departamento legal de los emprendedores mexicanos. Servicio legal de calidad y a la vanguardia para emprendedores y empresarios mexicanos.",
};

const IMG = "/sitios/orveabogados";
const SITE = "https://orveabogados.com";
const SANS = "font-[family-name:var(--s32-display)]";
const H2 = `${SANS} text-[clamp(2.25rem,3.2vw,2.875rem)] leading-[1.15] tracking-[-1px]`;
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const TEL = "tel:+525575837073";

const NAV = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Nuestros abogados", href: "#nuestros-abogados" },
  { label: "Empresarial", href: "#empresarial" },
  { label: "Fiscal", href: "#fiscal" },
  { label: "Propiedad intelectual", href: "#propiedad-intelectual" },
];

type Pilar = { id: string; name: string; intro: string; nota?: string; items: [string, string][] };

const PILARES: Pilar[] = [
  {
    id: "empresarial",
    name: "Empresarial",
    intro: "Ofrecemos planes de servicios legales a emprendedores, empresarios e inversionistas, justo a la medida de sus necesidades, con toda la protección que brinda un departamento legal consolidado y multidisciplinario.",
    items: [
      ["Corporativo / Sociedades", "Constitución de sociedades, libros corporativos, poderes, fideicomiso e inversión extranjera."],
      ["Civil / Mercantil", "Contratos, auditorías legales, co-inversiones, adquisiciones y fusiones, y litigio civil mercantil."],
      ["Laboral", "Contratación y rescisión, litigio laboral, seguridad social y Reglamento Interior de Trabajo."],
      ["Administrativa", "Licencias, permisos y autorizaciones, visitas de verificación y juicios de amparo."],
      ["Publicidad y Protección al Consumidor", "Permisos de publicidad, etiquetado, promociones y quejas ante la Procuraduría Federal del Consumidor."],
      ["Privacidad y Protección de Datos", "Avisos y políticas de privacidad, derechos de acceso, rectificación, cancelación y oposición."],
    ],
  },
  {
    id: "fiscal",
    name: "Fiscal",
    intro: "Protegemos a nuestros clientes realizando una planeación y estrategia fiscal acorde a sus necesidades contables y legales, y atendemos requerimientos de información de las autoridades fiscales.",
    nota: "Alianza estratégica con el despacho contable Maya Flores Consulting Experts, S.C.",
    items: [
      ["Consultoría fiscal", "Planeación y estrategia fiscal nacional e internacional, due diligence, reestructuras corporativas y estímulos fiscales."],
      ["Litigio", "Recursos de revocación e inconformidad, juicio de nulidad, juicio de amparo e impugnación de créditos fiscales."],
      ["Auditorías", "Revisiones de dictámenes y declaraciones, visitas domiciliarias y acuerdos conclusivos ante la PRODECON."],
      ["Gestión ante autoridades fiscales", "Trámites, solicitudes, devoluciones, autorizaciones, requerimientos y confirmaciones de criterio."],
    ],
  },
  {
    id: "propiedad-intelectual",
    name: "Propiedad Intelectual",
    intro: "Asesoramos y representamos a nuestros clientes en la defensa y administración de sus creaciones, desde su concepción hasta la atención a procedimientos contenciosos administrativos, civiles o penales.",
    items: [
      ["Derechos de Autor", "Registro de obras y software, ISBN e ISSN, reservas de derechos y auditoría de derechos de autor."],
      ["Patentes, Modelos de Utilidad y Diseños Industriales", "Patentabilidad, solicitudes PCT y PPH, transferencia de tecnología y gestión de portafolios."],
      ["Signos Distintivos, Licencias / Franquicia", "Búsqueda y registro de marca, nombre y aviso comercial; contratos de licencia y franquicia."],
      ["Secreto Industrial", "Contratos de confidencialidad y no competencia, políticas y protocolos de protección."],
      ["Litigio Administrativo", "Competencia desleal, infracciones, nulidad, combate a la piratería y medidas cautelares."],
    ],
  },
];

function Logo({ white = false }: { white?: boolean }) {
  return (
    <a href="#top" aria-label="ORVE Abogados, inicio" className="block">
      <Image src={`${IMG}/${white ? "logo-white.svg" : "logo.svg"}`} alt="ORVE Abogados" width={198} height={40} preload={!white} className="h-[34px] w-auto lg:h-10" />
    </a>
  );
}

export default function OrveAbogadosPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s32-body)] text-[#2D2F30] selection:bg-[#2D2F30] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="border-b border-[#E4E3DF] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(45,47,48,0.35)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-[34px] lg:h-[91px] xl:[&>nav]:ml-auto xl:[&>nav>ul]:gap-[34px]`}
        linkClassName={`${SANS} whitespace-nowrap text-base text-[#2D2F30]`}
        panelClassName={`bg-white text-[#2D2F30] ${SANS}`}
        panelLinkClassName={`${SANS} text-3xl tracking-[-0.5px]`}
        burgerClassName="bg-[#2D2F30]"
        actions={
          <a href="#contacto" className={`press ${SANS} bg-[#2D2F30] px-6 py-[13px] text-base font-medium text-white hover:bg-[#444242]`}>
            Contacto
          </a>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-white">
          <HeroIntro className={`${WRAP} flex flex-col gap-9 pb-16 pt-16 lg:pb-20 lg:pt-28`}>
            <HeroItem as="h1" blur className={`${SANS} text-[clamp(2.625rem,5.6vw,5rem)] leading-[1.025] tracking-[-2px]`}>
              Departamento legal de los <br className="hidden md:block" />
              emprendedores mexicanos
            </HeroItem>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-14">
              <HeroItem as="p" className="max-w-[560px] text-[19px] leading-[1.55] text-[#444242] md:text-[21px] md:leading-8">
                Servicio legal de calidad y a la vanguardia para emprendedores y empresarios mexicanos.
              </HeroItem>
              <HeroItem className={`${SANS} flex shrink-0 flex-wrap gap-3.5 text-[17px] font-medium`}>
                <a href="#contacto" className="press nudge flex items-center gap-2.5 bg-[#2D2F30] px-[30px] py-[17px] text-white hover:bg-[#444242]">
                  Contacto
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
                <a href="#nuestros-abogados" className="press border border-[#2D2F30] px-[30px] py-4 hover:bg-[#ECEBE7]">
                  Nuestros abogados
                </a>
              </HeroItem>
            </div>
          </HeroIntro>
          <MediaReveal className="relative h-[260px] overflow-hidden sm:h-[360px] lg:h-[460px]" delay={0.3}>
            <Image src={`${IMG}/science-1182713_1920.jpg`} alt="Foco encendido frente a un pizarrón con dibujos de ideas" fill preload sizes="100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className="scroll-mt-24 bg-[#ECEBE7]">
          <div className={`${WRAP} grid items-start gap-12 py-20 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16 lg:py-32 xl:grid-cols-[1fr_500px] xl:gap-24`}>
            <div className="flex flex-col gap-7">
              <Reveal as="h2" className={H2}>
                ¿Quiénes somos?
              </Reveal>
              <Reveal as="p" delay={0.06} className="text-[clamp(1.25rem,1.75vw,1.5625rem)] leading-[1.44]">
                Somos la firma legal que ofrece una atención profesional, ética y de manera personalizada para salvaguardar de la forma más justa y efectiva los derechos e intereses de nuestros clientes.
              </Reveal>
              <Reveal as="p" delay={0.12} className="text-[17px] leading-[29px] text-[#444242]">
                ORVE Abogados nace de la necesidad de los emprendedores y empresarios mexicanos de contar con un servicio legal de calidad y a la vanguardia, acorde a las nuevas tendencias y tecnologías que han cambiado la manera de hacer negocios. Establecemos lineamientos legales que optimicen los recursos materiales y humanos para el crecimiento de sus proyectos, evitando futuros conflictos jurídicos y pérdidas monetarias.
              </Reveal>
              <Reveal id="nuestros-abogados" delay={0.1} className="flex max-w-[604px] scroll-mt-28 flex-col items-start gap-3.5 border-t border-[#2D2F30] pt-7">
                <p className="text-[17px] leading-[29px] text-[#444242]">
                  Nuestro equipo legal está conformado por colaboradores especializados en diversas materias, profesionistas multidisciplinarios con amplia experiencia en el área legal tanto en iniciativa pública como en empresas transnacionales.
                </p>
                <a href={`${SITE}/nuestros-abogados.html`} className={`${SANS} nudge flex items-center gap-2.5 pt-1.5 text-[17px] font-medium`}>
                  Nuestros abogados
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </Reveal>
            </div>
            <MediaReveal onView className="relative aspect-[500/660] w-full overflow-hidden md:max-w-[500px]" delay={0}>
              <Image src={`${IMG}/lady-justice.jpg`} alt="Figura de la justicia con balanza junto a libros y un globo terráqueo" fill sizes="(min-width: 1280px) 500px, (min-width: 1024px) 420px, (min-width: 768px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} flex flex-col gap-14 py-20 lg:gap-[72px] lg:py-32`}>
            <Reveal as="h2" className={H2}>
              Servicios
            </Reveal>
            {PILARES.map((p) => (
              <div key={p.id} id={p.id} className="grid scroll-mt-28 gap-10 border-t border-[#2D2F30] pt-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:grid-cols-[400px_1fr] xl:gap-20">
                <Reveal className="flex flex-col gap-[18px]">
                  <h3 className={`${SANS} text-[clamp(1.875rem,2.4vw,2.125rem)] leading-[1.2] tracking-[-0.6px]`}>{p.name}</h3>
                  <p className="text-base leading-[26px] text-[#444242]">{p.intro}</p>
                  {p.nota && <p className={`${SANS} text-[15px] font-medium leading-[23px]`}>{p.nota}</p>}
                </Reveal>
                <Stagger as="ul" className="grid gap-x-12 gap-y-8 sm:grid-cols-2" gap={0.05}>
                  {p.items.map(([t, d]) => (
                    <StaggerItem key={t} as="li" className="flex flex-col gap-2">
                      <h4 className={`${SANS} text-[19px] font-medium leading-[25px]`}>{t}</h4>
                      <p className="text-[15px] leading-6 text-[#5A5856]">{d}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>
        </section>

        {/* Enfoque */}
        <section aria-label="Enfoque" className="bg-[#9E9D95] text-[#1E2021]">
          <div className={`${WRAP} flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:gap-24 lg:py-28`}>
            <Reveal className="flex flex-1 flex-col gap-7">
              <p className={`${SANS} text-[clamp(1.75rem,2.65vw,2.375rem)] leading-[1.21] tracking-[-0.8px]`}>
                Estamos enfocados en personas físicas y morales que requieran asesoría profesional y actualizada para el correcto desempeño de sus actividades empresariales.
              </p>
              <p className="max-w-[640px] text-[17px] leading-[29px] md:text-lg">
                Ayudamos a nuestros clientes en el mejoramiento de la gestión y cumplimiento de sus obligaciones, previniendo riesgos legales y pérdidas monetarias.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="shrink-0">
              <a href="#contacto" className={`press nudge ${SANS} flex w-fit items-center gap-2.5 bg-[#2D2F30] px-[30px] py-[17px] text-[17px] font-medium text-white hover:bg-[#444242]`}>
                Contacto
                <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-white">
          <div className={`${WRAP} grid items-start gap-14 py-20 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16 lg:py-32 xl:grid-cols-[1fr_580px] xl:gap-24`}>
            <div className="flex flex-col gap-11">
              <Reveal as="h2" className={H2}>
                Contacto
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-[30px]" gap={0.08}>
                <StaggerItem as="li" className="flex gap-[18px]">
                  <Phone className="h-[22px] w-[22px] shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className={`${SANS} text-[15px] font-medium text-[#6A6866]`}>Teléfono</p>
                    <a href={TEL} className="link-u w-fit text-[19px] leading-[29px]">55 7583 7073</a>
                  </div>
                </StaggerItem>
                <StaggerItem as="li" className="flex gap-[18px]">
                  <MapPin className="h-[22px] w-[22px] shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className={`${SANS} text-[15px] font-medium text-[#6A6866]`}>Oficina</p>
                    <p className="text-[19px] leading-[29px]">
                      Presidente Masaryk 61, piso 9, 901-B
                      <br />
                      Polanco V Sección, Ciudad de México
                    </p>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className={`${SANS} flex flex-col gap-5 bg-[#ECEBE7] p-6 sm:p-11`} noteClassName="text-sm text-[#444242]">
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label="Correo" name="email" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-medium">Mensaje</span>
                  <textarea
                    name="mensaje"
                    className="h-[150px] resize-y border border-[#2D2F30] bg-white px-4 py-3 font-[family-name:var(--s32-body)] text-base outline-none transition-[box-shadow] duration-200 focus:shadow-[0_0_0_3px_rgba(45,47,48,0.18)]"
                  />
                </label>
                <button type="submit" className="press w-full bg-[#2D2F30] py-[17px] text-[17px] font-medium text-white hover:bg-[#444242]">
                  Enviar
                </button>
                <a href={`${SITE}/aviso-de-privacidad.html`} className="link-u w-fit text-sm text-[#444242]">
                  Aviso de privacidad
                </a>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#2D2F30] text-white">
        <div className={`${WRAP} pb-28 pt-16 lg:pb-10 lg:pt-[72px]`}>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="flex flex-col gap-5">
              <Logo white />
              <p className="text-[15px] leading-6 text-[#C9C8C2]">
                <a href={TEL} className="link-u">55 7583 7073</a>
                <br />
                Presidente Masaryk 61, piso 9, 901-B
                <br />
                Polanco V Sección, Ciudad de México
              </p>
            </div>
            <div className={`${SANS} flex gap-[72px]`}>
              <FooterCol
                title="ORVE"
                links={[
                  ["Quiénes somos", "#quienes-somos"],
                  ["Nuestros abogados", "#nuestros-abogados"],
                  ["Contacto", "#contacto"],
                ]}
              />
              <FooterCol
                title="Servicios"
                links={[
                  ["Empresarial", "#empresarial"],
                  ["Fiscal", "#fiscal"],
                  ["Propiedad intelectual", "#propiedad-intelectual"],
                ]}
              />
            </div>
          </div>
          <div className={`${SANS} mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#B3B2AC] sm:flex-row sm:justify-between`}>
            <p>© 2026 ORVE Abogados{" · "}<HemeronCredit /></p>
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              <a href={`${SITE}/aviso-de-privacidad.html`} className="link-u">Aviso de privacidad</a>
              <a href={`${SITE}/terminos-y-condiciones.html`} className="link-u">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col items-start gap-3.5">
      <p className="text-[15px] font-medium text-[#9E9D95]">{title}</p>
      {links.map(([l, h]) => (
        <a key={h} href={h} className="link-u text-base">
          {l}
        </a>
      ))}
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] font-medium">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] border border-[#2D2F30] bg-white px-4 font-[family-name:var(--s32-body)] text-base outline-none transition-[box-shadow] duration-200 focus:shadow-[0_0_0_3px_rgba(45,47,48,0.18)]"
      />
    </label>
  );
}
