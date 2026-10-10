import type { Metadata } from "next";
import Image from "next/image";
import { Bodoni_Moda, Karla } from "next/font/google";
import { ArrowRightIcon, ClockIcon, EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/ssr";
import { CountUp, HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--s22-display" });
const body = Karla({ subsets: ["latin"], variable: "--s22-body" });

export const metadata: Metadata = {
  title: "Heredia Sánchez, Abogados Penalistas",
  description: "Apasionados por el derecho penal. Heredia Sánchez es un despacho líder en la prestación de servicios legales en el área del derecho penal.",
};

const IMG = "/sitios/22-herediasanchez";
const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const BOD = "font-[family-name:var(--s22-display)]";
const H2 = `${BOD} text-[clamp(2.75rem,4.5vw,4rem)] font-medium leading-[1.05] tracking-[-1.5px]`;
const ENGLISH = "https://herediasanchez.mx/eng/home";
const AVISO = "https://herediasanchez.mx/aviso-privacidad";
const TEL = "tel:+525592212549";
const EMAIL = "contacto@herediasanchez.mx";

const NAV = [
  { label: "Despacho", href: "#despacho" },
  { label: "Servicios", href: "#servicios" },
  { label: "Abogados", href: "#abogados" },
  { label: "Contacto", href: "#contacto" },
];

const AREAS = [
  ["Juicio de amparo penal", "Protegemos los derechos humanos del imputado y de la víctima u ofendido. Combatimos, con base en la constitución y los tratados internacionales, la irregularidad de leyes o actos de autoridad en materia penal."],
  ["Cumplimiento penal empresarial", "Las empresas pueden ser penalmente responsables si no demuestran haber observado el debido control en su organización. Detectamos riesgos penales e implementamos programas de cumplimiento a fin de excluir su responsabilidad."],
  ["Procedimiento de extradición", "Atendemos procedimientos de extradición pasiva, desde la solicitud de orden de detención provisional hasta la culminación del proceso. En la extradición activa, coadyuvamos con despachos del país requerido."],
  ["Representación gratuita", "Asesoramos y patrocinamos justas causas de manera gratuita, y colaboramos con diversas instituciones y fundaciones para contribuir en el mejoramiento del sistema de justicia penal."],
];

const PRINCIPIOS = [
  ["Lealtad", "Hacemos propios los intereses de nuestros clientes y los defendemos decididamente ante el poder público."],
  ["Atención personal y oportuna", "Mantenemos un número reducido de asuntos, lo cual nos permite brindar una atención directa y puntual, con el más alto grado de involucramiento."],
  ["Permanente capacitación", "La materia penal ha sufrido una profunda transformación. A través de un constante proceso de enseñanza-aprendizaje, nos mantenemos a la vanguardia de las ciencias penales."],
];

const COMPROMISOS = [
  ["Justicia social", "Nos preocupa la extrema desigualdad en nuestro país y la selectividad del poder punitivo en contra de los menos favorecidos. Por ello, patrocinamos asuntos pro bono."],
  ["Equidad de género", "El trabajo de las mujeres en el ámbito jurídico penal ha estado escasamente representado. Prueba de su creciente presencia es nuestro equipo."],
  ["Sustentabilidad", "Hemos incorporado buenas prácticas para eficientar el uso de recursos y disminuir la degradación de nuestro medio ambiente."],
  ["Innovación", "Buscamos soluciones diferentes e inteligentes a los problemas que se nos consultan, para mejorar progresivamente nuestros servicios."],
];

const FIELD =
  "h-12 border border-[#CFC7CF] bg-[#FAF9FA] px-4 text-base text-[#141114] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#6D2D6D] focus:shadow-[0_0_0_3px_rgba(109,45,109,0.14)]";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`block ${className}`} aria-label="Heredia Sánchez, Abogados Penalistas, inicio">
      <Image src={`${IMG}/logo.svg`} alt="" width={245} height={40} className="h-full w-auto" preload />
    </a>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold">{label}</span>
      <input name={name} type={type} autoComplete={autoComplete} className={FIELD} />
    </label>
  );
}

function ValueRow({ title, items, cols }: { title: string; items: string[][]; cols: string }) {
  return (
    <div className="grid gap-8 border-t border-[#14111426] pt-10 lg:grid-cols-[300px_1fr] lg:gap-16">
      <Reveal as="h2" className={`${BOD} text-[clamp(2.25rem,3.4vw,3rem)] font-medium leading-tight tracking-[-1px]`}>
        {title}
      </Reveal>
      <Stagger className={`grid gap-x-12 gap-y-10 ${cols}`} gap={0.06}>
        {items.map(([k, v]) => (
          <StaggerItem key={k} className="flex flex-col gap-2.5">
            <h3 className="text-[17px] font-bold text-[#6D2D6D]">{k}</h3>
            <p className="text-[15px] leading-6 text-[#4A444A]">{v}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default function HerediaSanchezPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s22-body)] text-[#141114] selection:bg-[#6D2D6D] selection:text-white`}
    >
      <SiteNav
        logo={<Logo className="h-8 lg:h-10" />}
        links={NAV}
        className="bg-[#F2F2F2]"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(20,17,20,0.35)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-8 lg:h-[104px]`}
        linkClassName="mx-1 text-[15px] font-medium text-[#141114]"
        panelClassName="bg-[#F2F2F2] text-[#141114] font-[family-name:var(--s22-body)]"
        panelLinkClassName="font-[family-name:var(--s22-display)] text-3xl font-medium"
        burgerClassName="bg-[#6D2D6D]"
        actions={
          <>
            <a href={ENGLISH} className="link-u text-sm font-medium text-[#6D2D6D] lg:mr-2">
              English
            </a>
            <a href="#contacto" className="press bg-[#6D2D6D] px-6 py-3.5 text-[15px] font-bold text-white hover:bg-[#5A235A]">
              Agenda una reunión
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#F2F2F2]">
          <HeroIntro className="flex flex-col">
            <h1 className={`${WRAP} w-full pt-14 ${BOD} text-[clamp(2.625rem,8.2vw,7.375rem)] font-medium leading-[1.02] tracking-[-0.025em] lg:pt-[88px]`}>
              <HeroItem as="span" blur className="block">
                Apasionados por
              </HeroItem>
              <HeroItem as="span" blur className="block italic leading-[1.06] text-[#6D2D6D]">
                el derecho penal.
              </HeroItem>
            </h1>
            <div className="mt-12 grid gap-12 lg:mt-[72px] lg:grid-cols-[400px_1fr] lg:gap-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))]">
              <HeroItem className="flex flex-col gap-9 px-5 md:px-8 lg:px-0 lg:pt-2">
                <p className="text-lg leading-[1.55] text-[#3B353B] md:text-[19px] md:leading-[29px]">
                  Heredia Sánchez es un despacho líder en la prestación de servicios legales en el área del derecho penal.
                </p>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
                  <a href="#contacto" className="press bg-[#6D2D6D] px-7 py-[17px] text-base font-bold text-white hover:bg-[#5A235A]">
                    Agenda una reunión
                  </a>
                  <a href="#servicios" className="nudge flex items-center gap-2 text-base font-bold">
                    Ver servicios
                    <ArrowRightIcon className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </HeroItem>
              <MediaReveal className="relative h-[320px] overflow-hidden sm:h-[420px] lg:h-[500px]" delay={0.3}>
                <Image src={`${IMG}/chess.jpg`} alt="Mano moviendo una pieza en un tablero de ajedrez" fill preload sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-[50%_77%]" />
              </MediaReveal>
            </div>
          </HeroIntro>
        </section>

        {/* Credenciales */}
        <section aria-label="El despacho en breve" className="border-b border-[#E6E0E6]">
          <Stagger className={`${WRAP} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4`} gap={0.07}>
            {[
              ["Más de 40 años", "de experiencia suman sus socios, dedicados en exclusiva al derecho penal."],
              ["Docencia", "Los miembros de la firma complementan su práctica profesional con la docencia."],
              ["Pro bono", "Un porcentaje de nuestros asuntos lo patrocinamos de manera gratuita."],
              ["Polanco, CDMX", "Campos Elíseos 169 - 101, Polanco, 11560 Ciudad de México."],
            ].map(([k, v], i) => (
              <StaggerItem key={k} className="flex flex-col gap-2.5 self-start border-l-2 border-[#6D2D6D] py-1 pl-6">
                <p className={`${BOD} text-[30px] font-medium leading-tight`}>{i === 0 ? <CountUp value={k} duration={1.2} /> : k}</p>
                <p className="text-[15px] leading-[23px] text-[#5A535A]">{v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Experiencia */}
        <section id="despacho" className={`${WRAP} grid scroll-mt-24 items-center gap-12 py-24 lg:grid-cols-[500px_1fr] lg:gap-[104px] lg:py-[136px]`}>
          <MediaReveal onView delay={0} className="img-zoom relative aspect-[500/660] w-full overflow-hidden">
            <Image src={`${IMG}/columns.jpg`} alt="Columnas y frontón de un edificio clásico" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-7">
            <Reveal as="h2" className={H2}>
              Experiencia
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-7">
              <p className="text-lg leading-[1.55] md:text-xl md:leading-[31px]">
                Los integrantes de Heredia Sánchez son personas apasionadas por el derecho penal, el cumplimiento penal empresarial, así como por la protección de los derechos humanos.
              </p>
              <p className="text-base leading-[27px] text-[#5A535A]">
                Sus socios suman más de 40 años de experiencia, dedicados en exclusiva a esta rama jurídica. Adicionalmente, los miembros de la firma complementan su práctica profesional con la docencia y se encuentran en un constante proceso de actualización y perfeccionamiento.
              </p>
            </Reveal>
            <Reveal as="blockquote" delay={0.16} className={`mt-3 border-l-[3px] border-[#6D2D6D] py-1 pl-6 sm:pl-8 ${BOD} text-xl italic leading-[1.45] text-[#6D2D6D] md:text-2xl md:leading-[35px]`}>
              Nuestro compromiso es prestar un servicio personal, confidencial y altamente especializado, a fin de brindar soluciones prácticas, tanto en la prevención del delito, como en la solución del conflicto que nace de su comisión.
            </Reveal>
          </div>
        </section>

        {/* Áreas de práctica */}
        <section id="servicios" className="scroll-mt-24 bg-[#6D2D6D] text-white">
          <div className={`${WRAP} flex flex-col gap-16 pb-24 pt-24 lg:gap-[72px] lg:pb-[136px] lg:pt-32`}>
            <Reveal className="flex flex-col gap-5">
              <h2 className={`${H2} lg:leading-[1.3]`}>Áreas de práctica</h2>
              <p className="text-lg text-[#FFFFFFD9] md:text-xl">Litigio penal y cumplimiento penal empresarial.</p>
            </Reveal>
            <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[500px_1fr] xl:gap-20">
              <Reveal as="article" className="flex flex-col gap-6 bg-[#5A235A] px-6 pb-11 pt-10 sm:px-10">
                <h3 className={`${BOD} text-[34px] font-medium leading-tight sm:text-[40px]`}>Litigio penal</h3>
                <p className="text-[17px] leading-[27px]">
                  Representamos a compañías nacionales y extranjeras, así como a personas físicas, tanto en la defensa como en la acusación de cualquier tipo de delitos, especialmente los de carácter económico.
                </p>
                {[
                  ["Como víctima u ofendido", "Nos preocupamos por su seguridad y protección. Diseñamos estrategias eficaces para la comprobación del hecho delictivo y buscamos la reparación integral del daño."],
                  ["Como imputado", "Le brindamos una defensa técnica y profesional. Velamos por su libertad y analizamos soluciones alternas y formas de terminación anticipada del proceso."],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-2 border-t border-[#FFFFFF40] pt-5">
                    <h4 className="text-base font-bold">{k}</h4>
                    <p className="text-[15px] leading-6 text-[#FFFFFFD9]">{v}</p>
                  </div>
                ))}
              </Reveal>
              <Stagger className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" gap={0.07}>
                {AREAS.map(([t, d]) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t border-[#FFFFFF59] pt-6">
                    <h3 className={`${BOD} text-[28px] font-medium leading-8`}>{t}</h3>
                    <p className="text-[15px] leading-6 text-[#FFFFFFD9]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Principios y compromisos */}
        <section aria-label="Principios y compromisos" className="bg-[#F2F2F2]">
          <div className={`${WRAP} flex flex-col gap-16 py-24 lg:gap-[72px] lg:py-32`}>
            <ValueRow title="Principios" items={PRINCIPIOS} cols="md:grid-cols-3" />
            <ValueRow title="Compromisos" items={COMPROMISOS} cols="sm:grid-cols-2" />
          </div>
        </section>

        {/* Abogados */}
        <section id="abogados" className={`${WRAP} grid scroll-mt-24 items-center gap-14 py-24 lg:grid-cols-[1fr_500px] lg:gap-24 lg:py-[136px]`}>
          <div className="flex flex-col gap-12">
            <Reveal as="h2" className={`${H2} lg:leading-[1.3]`}>
              Abogados
            </Reveal>
            <Stagger className="flex flex-col gap-3.5 border-t border-[#14111426] pt-6" gap={0.06}>
              <StaggerItem as="h3" className="text-[15px] font-bold text-[#6D2D6D]">
                Socios
              </StaggerItem>
              {["Luis Francisco Heredia Montes", "Alejandro Sánchez González"].map((n) => (
                <StaggerItem key={n} as="p" className={`${BOD} text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.25]`}>
                  {n}
                </StaggerItem>
              ))}
            </Stagger>
            <Stagger className="flex flex-col gap-3.5 border-t border-[#14111426] pt-6" gap={0.06}>
              <StaggerItem as="h3" className="text-[15px] font-bold text-[#6D2D6D]">
                Asociados
              </StaggerItem>
              {["Alma Diana León Martínez", "María Cristina Arroyo Olazábal", "Gabriel Montes Sandoval"].map((n) => (
                <StaggerItem key={n} as="p" className={`${BOD} text-[clamp(1.5rem,2.2vw,1.75rem)] leading-[1.25]`}>
                  {n}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <MediaReveal onView delay={0.05} className="img-zoom relative aspect-[500/620] w-full overflow-hidden">
            <Image src={`${IMG}/books.jpg`} alt="Biblioteca con libros antiguos encuadernados" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 bg-[#141114] text-white">
          <div className={`${WRAP} grid items-start gap-14 py-24 lg:grid-cols-[1fr_540px] lg:gap-24 lg:pb-[136px] lg:pt-32`}>
            <div className="flex flex-col gap-7">
              <Reveal className="flex flex-col gap-7">
                <h2 className={`${BOD} text-[clamp(3rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-2px] lg:leading-[1.3]`}>Platiquemos</h2>
                <p className="max-w-[500px] text-lg leading-[1.55] text-[#FFFFFFD9] md:text-[19px] md:leading-[29px]">
                  Estás en confianza, escríbenos o llámanos para coordinar una reunión y ver cómo te podemos ayudar.
                </p>
              </Reveal>
              <Stagger className="flex flex-col gap-6 pt-6" gap={0.07}>
                {[
                  { Icon: MapPinIcon, k: "Dirección", v: "Campos Elíseos 169 - 101, Polanco\n11560 Ciudad de México" },
                  { Icon: PhoneIcon, k: "Teléfono", v: "55 9221 2549", href: TEL },
                  { Icon: EnvelopeSimpleIcon, k: "Correo", v: EMAIL, href: `mailto:${EMAIL}` },
                  { Icon: ClockIcon, k: "Horario", v: "Lunes a viernes, 9 AM a 9 PM" },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6D2D6D]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-[13px] font-bold text-[#FFFFFFA6]">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit text-[17px] leading-[26px]">
                          {v}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-[17px] leading-[26px]">{v}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal as="p" delay={0.1} className="max-w-[460px] text-[15px] leading-[23px] text-[#FFFFFFA6]">
                Si te interesa colaborar con nosotros, por favor envíanos tu currículum.
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[22px] bg-white p-6 text-[#141114] sm:p-11" noteClassName="text-sm text-[#5A535A]">
                <h3 className={`${BOD} text-[28px] font-medium leading-tight sm:text-[32px]`}>Agendemos una reunión</h3>
                <Field label="Nombre" name="nombre" autoComplete="name" />
                <div className="grid gap-[22px] sm:grid-cols-2 sm:gap-4">
                  <Field label="Correo electrónico" name="correo" type="email" autoComplete="email" />
                  <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold">¿Cómo te podemos ayudar?</span>
                  <textarea name="mensaje" rows={5} className={`${FIELD} h-[140px] resize-y py-3`} />
                  <span className="text-[13px] leading-[19px] text-[#5A535A]">Por favor, no incluyas información confidencial o sensible en tu mensaje.</span>
                </label>
                <button type="submit" className="press h-[54px] w-full bg-[#6D2D6D] text-base font-bold text-white hover:bg-[#5A235A]">
                  Enviar
                </button>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#F2F2F2]">
        <div className={`${WRAP} flex flex-col gap-12 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-5">
              <Logo className="h-10 w-fit" />
              <p className="text-[15px] leading-[23px] text-[#5A535A]">Servicio personal, confidencial y altamente especializado.</p>
            </div>
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-[72px]">
              <nav aria-label="Pie de página">
                <ul className="flex flex-col gap-3 text-[15px]">
                  {[{ label: "Inicio", href: "#top" }, { label: "Despacho", href: "#despacho" }, { label: "Servicios", href: "#servicios" }, { label: "Contacto", href: "#contacto" }].map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-u">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <address className="flex flex-col gap-3 text-[15px] not-italic">
                <a href={TEL} className="link-u w-fit">
                  55 9221 2549
                </a>
                <a href={`mailto:${EMAIL}`} className="link-u w-fit">
                  {EMAIL}
                </a>
                <span>Campos Elíseos 169 - 101, Polanco</span>
                <span>11560 Ciudad de México</span>
              </address>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#14111426] pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#5A535A]">© Heredia Sánchez, Abogados Penalistas</p>
            <div className="flex gap-7 text-[#6D2D6D]">
              <a href={AVISO} className="link-u">
                Aviso de privacidad
              </a>
              <a href={ENGLISH} className="link-u">
                English
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
