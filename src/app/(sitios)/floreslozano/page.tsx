import { HemeronCredit } from "@/components/hemeron-credit";
import type { Metadata } from "next";
import Image from "next/image";
import { Hanken_Grotesk, Libre_Caslon_Display, Tinos } from "next/font/google";
import { ArrowRight, Briefcase, Copyright, FileText, Landmark, Mail, MapPin, Phone, Scale, Shield, Users } from "lucide-react";
import { HeroIntro, HeroItem, MediaReveal, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Libre_Caslon_Display({ subsets: ["latin"], weight: "400", variable: "--fl-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--fl-body" });
const wordmark = Tinos({ subsets: ["latin"], weight: ["400", "700"], variable: "--fl-wordmark" });

export const metadata: Metadata = {
  title: "Flores Lozano Abogados",
  description: "Legal counsel in English and Spanish for domestic and foreign companies, always one-on-one between attorney and client.",
};

const IMG = "/sitios/floreslozano";
const NAV = [
  { label: "Firm", href: "#firm" },
  { label: "Practice areas", href: "#practice-areas" },
  { label: "Attorneys", href: "#attorneys" },
  { label: "Clients", href: "#clients" },
  { label: "Facilities", href: "#facilities" },
];

const AREAS = [
  { t: "Corporate Law", Icon: Briefcase, d: "Business agreements drafted anticipating their enforcement before the courts, plus mergers and acquisitions, takeovers and share assignments." },
  { t: "Criminal Litigation", Icon: Shield, d: "Financial or white-collar crimes, from the investigation stage to the conclusion of trial, and internal investigations in companies." },
  { t: "Financial and Banking Law", Icon: Landmark, d: "Structuring, documenting and backing commercial loans, credit agreements, letters of credit, leasing and factoring." },
  { t: "Copyright and Intellectual Property", Icon: Copyright, d: "Disputes over intellectual property rights and the protection, registration and renewal of marks and patents." },
  { t: "Family Law", Icon: Users, d: "Divorces and settlements on custody, alimony and division of assets, as well as testamentary successions." },
  { t: "Labor Law", Icon: FileText, d: "Hiring and termination of personnel, individual and collective agreements, and federal and state labor compliance." },
];

const COUNTRIES = [
  ["Germany", "Costa Rica", "El Salvador"],
  ["United States", "Guatemala", "Honduras"],
  ["England", "Italy", "Jordan"],
  ["Mexico", "Singapore", "Switzerland"],
];

const TEAM = ["Enrique Herrera Cerritos", "Geovanni Daniel Lucio", "Paulina Matehuala Torres", "María Araceli Peralta Peralta", "José Alva Tirado", "Berenice Axotla Aguilar", "Zeus Tejeda Vargas", "Alicia Hernández Hamed"];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Flores Lozano Abogados, inicio">
      <Image src={`${IMG}/logo-mark.svg`} alt="" width={35} height={44} className={inverse ? "ring-1 ring-white/35" : ""} preload />
      <span className="flex flex-col">
        <span className={`font-[family-name:var(--fl-wordmark)] text-[22px] font-bold leading-none ${inverse ? "text-white" : "text-[#171E4C]"}`}>Flores Lozano</span>
        <span className={`mt-[3px] font-[family-name:var(--fl-wordmark)] text-[11px] leading-none tracking-[0.3em] ${inverse ? "text-white" : "text-[#171E4C]"}`}>abogados, s. c.</span>
      </span>
    </a>
  );
}

export default function FloresLozanoPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} ${wordmark.variable} bg-white font-[family-name:var(--fl-body)] text-[#171E4C] selection:bg-[#171E4C] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        className="border-b border-[#E4E7EF] bg-white"
        scrolledClassName="shadow-[0_8px_24px_-16px_rgba(23,30,76,0.35)]"
        innerClassName="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between gap-8 px-5 md:px-8 xl:px-0"
        linkClassName="text-[15px] font-medium text-[#2B3150]"
        panelClassName="bg-white text-[#171E4C] font-[family-name:var(--fl-body)]"
        panelLinkClassName="font-[family-name:var(--fl-display)] text-3xl"
        burgerClassName="bg-[#171E4C]"
        actions={
          <>
            <a href="https://www.floreslozano.com/index.php" className="link-u text-sm font-medium text-[#5A6078]">
              Español
            </a>
            <a href="#contact" className="press bg-[#171E4C] px-[22px] py-3 text-[15px] font-semibold text-white hover:bg-[#232C66]">
              Contact
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="grid bg-[#171E4C] lg:min-h-[680px] lg:grid-cols-[1fr_minmax(0,640px)]">
          <HeroIntro className="flex flex-col justify-center gap-8 px-5 py-20 md:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-16">
            <HeroItem as="h1" blur className="max-w-[640px] font-[family-name:var(--fl-display)] text-[clamp(2.75rem,5.4vw,4.5rem)] leading-[1.04] tracking-[-0.01em] text-white">
              Integrity, experience and commitment.
            </HeroItem>
            <HeroItem as="p" className="max-w-[500px] text-lg leading-relaxed text-[#C8CEE4] md:text-xl">
              Legal counsel in English and Spanish for domestic and foreign companies, always one-on-one between attorney and client.
            </HeroItem>
            <HeroItem className="flex flex-wrap items-center gap-7 pt-2">
              <a href="#contact" className="press bg-white px-[30px] py-[17px] text-base font-semibold text-[#171E4C] hover:bg-[#E9ECF6]">
                Contact
              </a>
              <a href="#practice-areas" className="nudge flex items-center gap-2.5 text-base font-semibold text-white">
                Practice areas
                <ArrowRight className="h-[18px] w-[18px] text-[#F13B49]" />
              </a>
            </HeroItem>
          </HeroIntro>
          <MediaReveal className="relative h-[420px] overflow-hidden md:h-[520px] lg:h-auto" delay={0.25}>
            <Image src={`${IMG}/of_0144.jpg`} alt="Reception of Flores Lozano Abogados at Plaza Carso" fill preload sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          </MediaReveal>
        </section>

        {/* Memberships */}
        <section aria-label="Memberships" className="border-b border-[#E4E7EF]">
          <Stagger className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-10 gap-y-3 px-5 py-8 md:px-8 lg:justify-between xl:px-0">
            <StaggerItem as="p" className="w-full text-sm text-[#5A6078] lg:w-auto">Members of</StaggerItem>
            {["Canadian Chamber of Commerce", "British Chamber of Commerce", "U.S. Chamber of Commerce", "Barra Nacional de Abogados"].map((m) => (
              <StaggerItem key={m} as="p" className="text-[17px] font-semibold">{m}</StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Firm */}
        <section id="firm" className="mx-auto grid max-w-[1200px] scroll-mt-24 items-center gap-12 px-5 py-24 md:px-8 lg:grid-cols-[540px_1fr] lg:gap-24 lg:py-32 xl:px-0">
          <MediaReveal onView className="relative aspect-[540/640] w-full overflow-hidden" delay={0}>
            <Image src={`${IMG}/of_0067.jpg`} alt="Boardroom at the Flores Lozano offices" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </MediaReveal>
          <div className="flex flex-col gap-7">
            <Reveal as="h2" className="font-[family-name:var(--fl-display)] text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08]">
              Counsel in English and Spanish, one-on-one.
            </Reveal>
            <Reveal delay={0.08} className="space-y-6 text-lg leading-[1.6] text-[#4A5070]">
              <p>
                Our Firm was founded with the mission to provide legal counsel in English and Spanish, through a timely, customized service. We serve our clients&apos; needs in the different branches of law with a 100% bilingual staff, always on a one-on-one basis between the attorney and client.
              </p>
              <p>
                Because of the transnational presence of most of our clients, we maintain ongoing specialization in legal English, the drafting of bilingual contracts and the differences between legal practice in the United States and Mexico.
              </p>
            </Reveal>
            <Stagger as="dl" className="flex flex-col gap-4 border-t border-[#D9DDE8] pt-6">
              {[
                ["Origins", "Flores Dávila y Flores Lozano, S.C., established in 1985 by founding partner Ernesto Flores Lozano"],
                ["Offices", "Plaza Carso, Mexico City, with branches in several Mexican cities and in major U.S. cities"],
                ["Clients", "Domestic and foreign companies, financial institutions and individuals"],
              ].map(([k, v]) => (
                <StaggerItem key={k} className="grid grid-cols-[110px_1fr] gap-6 text-[15px]">
                  <dt className="font-semibold">{k}</dt>
                  <dd className="leading-[1.5] text-[#4A5070]">{v}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Practice areas */}
        <section id="practice-areas" className="scroll-mt-24 bg-[#F2F4F9]">
          <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 lg:py-32 xl:px-0">
            <Reveal className="max-w-[760px] space-y-4">
              <h2 className="font-[family-name:var(--fl-display)] text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08]">Practice areas</h2>
              <p className="text-lg leading-[1.6] text-[#4A5070]">
                Seven areas of practice serving domestic and multinational companies with business in Mexico, financial institutions and individuals.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-8 lg:grid-cols-[500px_1fr]">
              <Reveal className="flex flex-col justify-between gap-12 bg-[#171E4C] p-10 text-white md:p-12">
                <div className="flex flex-col gap-5">
                  <Scale className="h-8 w-8 text-[#F13B49]" />
                  <h3 className="font-[family-name:var(--fl-display)] text-[2.5rem] leading-[1.1]">Civil &amp; Commercial Litigation</h3>
                  <p className="text-[17px] leading-[1.6] text-[#C8CEE4]">
                    A high percentage of our activities. Recovery of debts and past-due portfolios, drafting and revising commercial contracts, restructuring loans, contractual disputes, summary and ordinary proceedings, and special mortgage actions.
                  </p>
                </div>
                <a href="#contact" className="nudge flex items-center gap-2.5 text-[15px] font-semibold">
                  Litigation practice
                  <ArrowRight className="h-[18px] w-[18px] text-[#F13B49]" />
                </a>
              </Reveal>
              <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2" gap={0.07}>
                {AREAS.map(({ t, Icon, d }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 border-t border-[#CBD1E0] pt-6">
                    <Icon className="h-[22px] w-[22px] text-[#F13B49]" />
                    <h3 className="font-[family-name:var(--fl-display)] text-[27px] leading-[1.15]">{t}</h3>
                    <p className="text-base leading-[1.55] text-[#4A5070]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="scroll-mt-24 bg-[#3878B0] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-24 md:px-8 lg:grid-cols-[380px_1fr] lg:gap-24 lg:py-28 xl:px-0">
            <Reveal className="space-y-5">
              <h2 className="font-[family-name:var(--fl-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.08]">Representative clients</h2>
              <p className="text-lg leading-[1.6] text-[#E6EEF7]">
                Some of our representative clients, by country. Domestic and foreign companies with business in Mexico.
              </p>
            </Reveal>
            <Stagger className="flex flex-col gap-[18px]" gap={0.08}>
              {COUNTRIES.map((row) => (
                <StaggerItem key={row.join()} className="flex flex-wrap gap-x-11 gap-y-2 border-b border-white/20 pb-[18px]">
                  {row.map((c) => (
                    <span key={c} className="font-[family-name:var(--fl-display)] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight">
                      {c}
                    </span>
                  ))}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Attorneys */}
        <section id="attorneys" className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-24 md:px-8 lg:py-32 xl:px-0">
          <Reveal className="max-w-[720px] space-y-4">
            <h2 className="font-[family-name:var(--fl-display)] text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08]">Attorneys</h2>
            <p className="text-lg leading-[1.6] text-[#4A5070]">
              Our 100% bilingual attorneys have extensive experience advising multinational companies with business in Mexico.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-10 md:grid-cols-2" gap={0.1}>
            {[
              ["Ernesto Flores Lozano", "Founding partner", "Originally from the State of Coahuila. J.D. from the National Autonomous University of Mexico (UNAM) and Corporate Law degree from ITAM. Founding partner of Flores Dávila, Flores Lozano y Asociados, S.C. in 1985."],
              ["A. Raúl Azcón R.", "Head of the litigation department", "Originally from Veracruz. Graduate of UNAM. Associate at Flores Dávila, Flores Lozano y Asociados from 2001 to 2011; previously held various positions within Mexico City's courts."],
            ].map(([n, r, b]) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-3 border-t-2 border-[#171E4C] pt-7">
                <h3 className="font-[family-name:var(--fl-display)] text-[34px] leading-tight">{n}</h3>
                <p className="text-[15px] font-semibold text-[#2F6699]">{r}</p>
                <p className="text-base leading-[1.6] text-[#4A5070]">{b}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Stagger as="ul" className="mt-12 grid gap-x-6 gap-y-5 border-t border-[#D9DDE8] pt-8 sm:grid-cols-2 lg:grid-cols-4" gap={0.04}>
            {TEAM.map((n) => (
              <StaggerItem key={n} as="li" className="text-lg font-medium">
                {n}
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Facilities */}
        <section id="facilities" className="scroll-mt-24 bg-[#F2F4F9]">
          <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 lg:py-32 xl:px-0">
            <Reveal className="space-y-3.5">
              <h2 className="font-[family-name:var(--fl-display)] text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08]">Our offices at Plaza Carso</h2>
              <p className="text-lg text-[#4A5070]">Edificio Frisco, Lago Zurich 245, Piso 12, Ciudad de México</p>
            </Reveal>
            <div className="mt-12 grid gap-4 lg:h-[600px] lg:grid-cols-[700px_1fr]">
              <MediaReveal onView className="img-zoom relative h-[360px] lg:h-full" delay={0}>
                <Image src={`${IMG}/of_0150.jpg`} alt="Corridor of the Flores Lozano offices" fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
              </MediaReveal>
              <div className="grid gap-4 lg:grid-rows-[1fr_250px]">
                <MediaReveal onView className="img-zoom relative h-[260px] lg:h-full" delay={0.1}>
                  <Image src={`${IMG}/of_0094.jpg`} alt="Conference room" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
                </MediaReveal>
                <div className="grid grid-cols-2 gap-4">
                  <MediaReveal onView className="img-zoom relative h-[180px] lg:h-full" delay={0.18}>
                    <Image src={`${IMG}/of_0214.jpg`} alt="Lounge" fill sizes="(min-width: 1024px) 240px, 50vw" className="object-cover" />
                  </MediaReveal>
                  <MediaReveal onView className="img-zoom relative h-[180px] lg:h-full" delay={0.24}>
                    <Image src={`${IMG}/of_0216.jpg`} alt="Private office" fill sizes="(min-width: 1024px) 240px, 50vw" className="object-cover" />
                  </MediaReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 bg-[#171E4C] text-white">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 md:px-8 lg:grid-cols-[1fr_600px] lg:gap-24 lg:py-32 xl:px-0">
            <div className="flex flex-col gap-10">
              <Reveal as="h2" className="font-[family-name:var(--fl-display)] text-[clamp(3rem,5vw,4rem)] leading-none">
                Contact
              </Reveal>
              <Stagger className="flex flex-col gap-10" gap={0.08}>
                {[
                  { Icon: MapPin, k: "Flores Lozano Abogados, S.C.", v: "Plaza Carso, Edificio Frisco\nLago Zurich No. 245, interior 1203\nCol. Ampliación Granada, C.P. 11529\nCiudad de México" },
                  { Icon: Phone, k: "Switchboard", v: "+52 55 5279 3838", href: "tel:+525552793838" },
                  { Icon: Mail, k: "Email", v: "abogados@floreslozano.com", href: "mailto:abogados@floreslozano.com" },
                ].map(({ Icon, k, v, href }) => (
                  <StaggerItem key={k} className="flex gap-[18px]">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#F13B49]" />
                    <div className="flex flex-col gap-1.5">
                      <p className="text-sm font-semibold text-[#9AA3C7]">{k}</p>
                      {href ? (
                        <a href={href} className="link-u w-fit text-[19px]">{v}</a>
                      ) : (
                        <p className="whitespace-pre-line text-[19px] leading-[1.55]">{v}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <DemoForm className="flex flex-col gap-[22px] bg-white p-8 text-[#171E4C] md:p-12" noteClassName="text-sm text-[#4A5070]">
                <h3 className="font-[family-name:var(--fl-display)] text-[30px]">Send us a message</h3>
                <Field label="Name" name="name" autoComplete="name" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="E-mail" name="email" type="email" autoComplete="email" />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Comments</span>
                  <textarea name="comments" rows={5} className="border border-[#B9C0D4] px-4 py-3 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#171E4C] focus:shadow-[0_0_0_3px_rgba(23,30,76,0.12)]" />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a href="https://www.floreslozano.com/aviso.html" className="text-sm text-[#4A5070] underline underline-offset-4">Aviso de privacidad</a>
                  <button type="submit" className="press bg-[#171E4C] px-[34px] py-4 text-base font-semibold text-white hover:bg-[#232C66]">
                    Send
                  </button>
                </div>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#11163A] text-[#B4BBD6]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 pb-28 pt-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:pb-10 xl:px-0">
          <Logo inverse />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {NAV.map((l) => (
                <li key={l.href}><a href={l.href} className="link-u">{l.label}</a></li>
              ))}
              <li><a href="https://www.floreslozano.com/aviso.html" className="link-u">Aviso de privacidad</a></li>
            </ul>
          </nav>
          <p className="text-sm">© 2026 Flores Lozano Abogados, S.C.{" "}<HemeronCredit lang="en" /></p>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-[52px] border border-[#B9C0D4] px-4 text-base outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#171E4C] focus:shadow-[0_0_0_3px_rgba(23,30,76,0.12)]"
      />
    </label>
  );
}
