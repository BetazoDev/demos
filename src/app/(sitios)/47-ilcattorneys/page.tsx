import type { Metadata } from "next";
import Image from "next/image";
import { Libre_Baskerville, Schibsted_Grotesk } from "next/font/google";
import { ArrowRight, Briefcase, CaretDown, Check, GlobeHemisphereWest, MapPin, Scales, Stack } from "@phosphor-icons/react/ssr";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Reveal, SiteNav, Stagger, StaggerItem } from "@/components/motion";
import { DemoForm } from "@/components/demo-form";

const display = Libre_Baskerville({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--s47-display" });
const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--s47-body" });

export const metadata: Metadata = {
  title: "International Legal Counseling® Attorneys at Law (ILC™)",
  description: "Structured legal thinking for complex realities. International, cross-border and local legal counsel. Lawyers in México with a USA hub.",
};

const IMG = "/sitios/47-ilcattorneys";
const SITE = "https://ilcattorneys.com";
const ESPANOL = `${SITE}/espanol-abogados-mexico/`;
const CROSS_BORDER = `${SITE}/cross-border-international-lawyers-mexico/`;

const NAV = [
  { label: "About Us", href: "#about-us" },
  { label: "External General Counsel", href: "#external-general-counsel" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Industries", href: "#industries" },
  { label: "Cross-Border", href: CROSS_BORDER },
  { label: "Contact", href: "#contact" },
];

const FOOTER_NAV = [
  { label: "About Us", href: "#about-us" },
  { label: "External General Counsel", href: "#external-general-counsel" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Industries", href: "#industries" },
  { label: "Cross-Border", href: CROSS_BORDER },
  { label: "Español", href: ESPANOL },
  { label: "Contact", href: "#contact" },
];

const CREDENTIALS = [
  { t: "Since 1947", d: "A legal legacy of more than seventy-five years of professional practice." },
  { t: "Mexico City | Houston TX", d: "Legal coordination for Mexico and Latin America; cross-border advisory from the U.S." },
  { t: "English and Spanish", d: "We provide legal advisory services in both languages." },
  { t: "Kingdom Millennium Legal Group™", d: "ILC operates as part of the group, headquartered in the United States." },
];

const WHY = [
  { t: "Executive-Level Experience", Icon: Briefcase, d: "Decades of hands-on leadership advising multinational organizations across regulated industries, complex transactions, and cross-border operations." },
  { t: "Integrated Legal Architecture", Icon: Stack, d: "Corporate, governance, compliance, IP, regulatory, litigation, and tax-sensitive strategies designed to work as a single, coordinated legal framework." },
  { t: "Cross-Border Precision", Icon: GlobeHemisphereWest, d: "Deep understanding of U.S., Mexican, Latin American, and international legal systems, bridging jurisdictions with clarity and control." },
];

const EGC = [
  "Ongoing legal guidance aligned with your business",
  "Risk management and regulatory compliance",
  "Complex contracting, negotiations and dispute prevention",
  "Cost-effective, flexible and scalable support",
  "Cross-border legal oversight across multiple jurisdictions",
];

const AREAS = [
  { t: "Mergers & Acquisitions", d: "Integrated legal counsel throughout the transaction lifecycle, from structuring and due diligence through negotiation, closing and post-closing integration." },
  { t: "Corporate & Commercial Law", d: "Strategic legal advisory for corporate structures, transactions, contracts, and governance frameworks supporting domestic and cross-border operations." },
  { t: "Cross-Border & International Law", d: "Integrated legal solutions for multi-jurisdictional matters involving treaties, trade, migration, tax-sensitive structuring, and international risk management." },
  { t: "Governance, Risk & Compliance", d: "Board-level governance, compliance systems, and risk mitigation strategies across corporate, regulatory, tax, IP, labor, and litigation environments." },
];

const ALSO = [
  "Intellectual Property | Trademarks & Patents",
  "Real Estate, Infrastructure & Cross-Border Development",
  "Employment & Labor Law",
  "Private Clients & Family Legal Services",
  "Franchising & Brand Expansion",
  "Technology, Digital Platforms & Financial Services",
];

const FRAMEWORKS = [
  { t: "Deep Shield Audit™", src: "deep-shield-audit.jpg", d: "Comprehensive institutional legal risk assessment designed to detect structural exposure before it escalates into dispute." },
  { t: "Future Risk Radar™", src: "future-risk-radar.jpg", d: "Forward-looking governance and compliance monitoring framework for companies operating across jurisdictions." },
];

const STEPS = ["Assess", "Implement", "Advise", "Monitor", "Measure"];

const INDUSTRIES = [
  ["Pharmaceutical & Life Sciences", "Energy, Oil & Gas", "Transportation & Logistics", "Manufacturing & Industrial Operations"],
  ["Retail & Consumer Goods", "Food, Supplements & Cosmetics", "Technology, Digital Platforms & Financial Services"],
];

const TEAM = [
  { n: "Antonio Medra", r: "International Legal Director", d: "35+ years as in-house international legal executive and external counsel advising multinational companies in complex corporate, litigation, regulated and cross-border environments." },
  { n: "Maria Fernanda López", r: "Senior Attorney", d: "Corporate & Commercial Law: contracts, commercial transactions, regulatory matters and corporate governance for domestic and international clients." },
  { n: "Jorge E. Ramírez", r: "Litigation & Dispute Resolution", d: "Complex litigation, arbitration and alternative dispute resolution across civil, commercial, administrative and constitutional matters." },
  { n: "Laura Salinas", r: "Senior Associate Attorney", d: "Commercial, civil and administrative law, with a practical and business-oriented approach." },
];

const SPECIALISTS = [
  { n: "Ing. Pamela Ezquivel", s: "Pharmaceutical, Healthcare & Regulatory Specialist" },
  { n: "Javier Court", s: "Tax & Customs Specialist" },
  { n: "Carlos More", s: "Energy, Oil & Gas Specialist" },
  { n: "Ing. Jorge Mtz.", s: "Technology & Digital Specialist" },
];

const OFFICES = [
  { city: "Mexico City", lines: ["Río Lerma 232, piso 23, Int. A", "Cuauhtémoc, 06500 Mexico City, México"], phones: [["+52 (55) 5589 1215", "+525555891215"], ["+52 (55) 5293 1520", "+525552931520"]] },
  { city: "Houston, USA", lines: ["3050 Post Oak Blvd., 5th floor", "Houston, Texas 77056, USA"], phones: [["+1 (713) 454-2365", "+17134542365"]] },
];

const WRAP = "mx-auto max-w-[1200px] px-5 md:px-8 xl:px-0";
const DISPLAY = "font-[family-name:var(--s47-display)]";
const H2 = `${DISPLAY} tracking-[-0.8px] text-[clamp(2.125rem,3.2vw,2.875rem)] leading-[1.2]`;

function Logo() {
  return (
    <a href="#top" className="block" aria-label="International Legal Counseling, home">
      <Image src={`${IMG}/logo.svg`} alt="iLC International Legal Counseling, Attorneys at Law" width={124} height={80} preload className="h-16 w-auto xl:h-20" />
    </a>
  );
}

export default function IlcAttorneysPage() {
  return (
    <div
      id="top"
      lang="en"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s47-body)] text-[#1E293B] selection:bg-[#0C3B69] selection:text-white`}
    >
      <SiteNav
        logo={<Logo />}
        links={NAV}
        breakpoint="xl"
        className="bg-white"
        scrolledClassName="shadow-[0_10px_28px_-20px_rgba(12,59,105,0.55)]"
        innerClassName={`${WRAP} flex h-20 items-center justify-between gap-6 xl:h-[104px]`}
        linkClassName="text-[15px] font-medium text-[#1E293B]"
        panelClassName="bg-white text-[#0C3B69] font-[family-name:var(--s47-body)]"
        panelLinkClassName="font-[family-name:var(--s47-display)] text-[1.75rem]"
        burgerClassName="bg-[#0C3B69]"
        actions={
          <>
            <a href={ESPANOL} lang="es" className="link-u text-sm font-semibold text-[#235BA8]">
              Español
            </a>
            <a href="#contact" className="press bg-[#0C3B69] px-[22px] py-3.5 text-[15px] font-semibold text-white hover:bg-[#0B2440]">
              Request a Consultation
            </a>
          </>
        }
      />

      <main>
        {/* Hero */}
        <section className="bg-[#0C3B69] text-white">
          <HeroIntro className={`${WRAP} flex flex-col gap-10 pb-14 pt-20 lg:gap-14 lg:pt-[110px]`}>
            <HeroItem as="h1" blur className={`${DISPLAY} max-w-[1000px] text-[clamp(2.375rem,4.3vw,3.875rem)] leading-[1.11] tracking-[-1.2px]`}>
              Structured legal thinking for complex realities
            </HeroItem>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-8">
                <HeroItem as="p" className="max-w-[540px] text-lg leading-[1.5] text-[#D3DEEA] md:text-xl">
                  International, cross-border and local legal counsel. Lawyers in México with a USA hub.
                </HeroItem>
                <HeroItem className="flex flex-wrap items-center gap-x-8 gap-y-5">
                  <a href="#contact" className="press bg-white px-7 py-[17px] text-base font-semibold text-[#0C3B69] hover:bg-[#E3EBF4]">
                    Request a Consultation
                  </a>
                  <a href="#practice-areas" className="nudge flex items-center gap-2.5 text-base font-semibold">
                    Practice Areas
                    <ArrowRight size={18} color="#C9A15A" aria-hidden="true" />
                  </a>
                </HeroItem>
              </div>
              <HeroItem className="flex flex-col gap-2 pb-1 lg:items-end lg:text-right">
                <p className="text-[15px] font-semibold text-[#C9A15A]">Mexico City | Houston TX, USA</p>
                <p className={`${DISPLAY} text-lg italic`}>Legal legacy since 1947</p>
              </HeroItem>
            </div>
          </HeroIntro>
          <div className="bg-[linear-gradient(180deg,#0C3B69_0%,#0C3B69_27%,#F0F5FA_27%,#F0F5FA_100%)]">
            <div className={WRAP}>
              <MediaReveal delay={0.35} className="relative h-[240px] overflow-hidden sm:h-[340px] lg:h-[440px]">
                <Image
                  src={`${IMG}/sala-juntas-ilc.jpg`}
                  alt="Boardroom with the International Legal Counseling name on the wall"
                  fill
                  preload
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover object-[center_46%]"
                />
              </MediaReveal>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section aria-label="Credentials" className="bg-[#F0F5FA]">
          <Stagger as="dl" className={`${WRAP} grid gap-8 pb-[72px] pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10`} gap={0.07}>
            {CREDENTIALS.map(({ t, d }) => (
              <StaggerItem key={t} className="flex flex-col gap-2 border-l-2 border-[#A4762C] py-0.5 pl-5">
                <dt className={`${DISPLAY} text-[17px] leading-snug text-[#0C3B69]`}>{t}</dt>
                <dd className="text-[15px] leading-[23px] text-[#334155]">{d}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Who We Are */}
        <section id="about-us" className={`${WRAP} grid scroll-mt-28 gap-14 py-24 lg:grid-cols-[1fr_460px] lg:gap-[88px] lg:py-28`}>
          <Reveal className="flex flex-col gap-7">
            <h2 className={`${H2} text-[#0C3B69]`}>Who We Are</h2>
            <p className={`${DISPLAY} text-[clamp(1.25rem,1.7vw,1.4375rem)] leading-[1.57]`}>
              International Legal Counseling (ILC™) is a multidisciplinary law firm delivering integrated legal, governance, and cross-border advisory services by professional lawyers in Mexico and LATAM with a US hub.
            </p>
            <p className="text-[17px] leading-[29px] text-[#334155]">
              With decades of executive-level experience across highly regulated industries, we support corporations, investors, executives, and families in structuring, protecting, and expanding their operations across Mexico, the United States, Latin America, and global markets, with clarity, control, and legal precision.
            </p>
            <a href={`${SITE}/about-us/`} className="nudge mt-1.5 flex w-fit items-center gap-2.5 text-base font-semibold text-[#0C3B69]">
              About Us
              <ArrowRight size={18} color="#A4762C" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-8 self-start bg-[#0B2440] px-7 pb-12 pt-10 text-white md:px-11 md:pt-11">
            <h3 className={`${DISPLAY} text-[28px]`}>Why ILC</h3>
            <Stagger as="ul" className="flex flex-col gap-8" gap={0.08} delay={0.15}>
              {WHY.map(({ t, Icon, d }) => (
                <StaggerItem key={t} as="li" className="flex gap-[18px]">
                  <Icon size={24} color="#C9A15A" aria-hidden="true" className="shrink-0" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[17px] font-semibold">{t}</p>
                    <p className="text-[15px] leading-6 text-[#C3CFDC]">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </section>

        {/* External General Counsel */}
        <section id="external-general-counsel" className="scroll-mt-28 bg-[#0B2440] text-white">
          <div className={`${WRAP} grid items-center gap-14 py-24 lg:grid-cols-[1fr_500px] lg:gap-[88px] lg:py-28`}>
            <div className="flex flex-col gap-7">
              <Reveal className="flex flex-col gap-7">
                <h2 className={`${DISPLAY} text-[clamp(2rem,2.95vw,2.625rem)] leading-[1.21] tracking-[-0.6px]`}>External General Counsel for Mexico &amp; LATAM Operations</h2>
                <p className="text-lg leading-[29px] text-[#C3CFDC]">
                  Practical legal leadership for your business. We become your trusted legal partner, providing ongoing counsel to support decisions, manage risk and drive growth.
                </p>
              </Reveal>
              <Stagger as="ul" className="flex flex-col gap-3.5 pt-2" gap={0.05}>
                {EGC.map((it) => (
                  <StaggerItem key={it} as="li" className="flex items-start gap-3.5 text-base">
                    <Check size={18} color="#C9A15A" aria-hidden="true" className="mt-0.5 shrink-0" />
                    {it}
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1} className="pt-2.5">
                <a href={`${SITE}/external-general-counsel/`} className="nudge flex w-fit items-center gap-2.5 text-base font-semibold text-[#C9A15A]">
                  Learn more
                  <ArrowRight size={18} color="#C9A15A" aria-hidden="true" />
                </a>
              </Reveal>
            </div>
            <MediaReveal onView delay={0} className="relative h-[360px] overflow-hidden md:h-[480px] lg:h-[600px]">
              <Image src={`${IMG}/compass.jpg`} alt="Brass compass on a map" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="practice-areas" className="scroll-mt-28 bg-[#F0F5FA]">
          <div className={`${WRAP} flex flex-col gap-14 py-24 lg:py-28`}>
            <Reveal className="flex max-w-[780px] flex-col gap-[18px]">
              <h2 className={`${H2} text-[#0C3B69]`}>Practice Areas</h2>
              <p className="text-lg leading-[29px] text-[#334155]">
                Integrated legal representation in Mexico and across Latin America through coordinated practice areas designed for corporations, investors, and executive decision-makers.
              </p>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[440px_1fr]">
              <Reveal className="flex flex-col justify-between gap-12 bg-[#0C3B69] px-7 py-10 text-white md:px-10 md:py-11">
                <Scales size={32} color="#C9A15A" aria-hidden="true" />
                <div className="flex flex-col gap-5">
                  <h3 className={`${DISPLAY} text-[clamp(1.625rem,2.1vw,1.875rem)] leading-[1.27]`}>Complex Litigation &amp; Strategic Disputes</h3>
                  <p className="text-base leading-[26px] text-[#D3DEEA]">
                    ILC represents corporations, executives, and private clients in complex litigation and high-stakes disputes requiring strategic legal judgment, procedural rigor, and cross-disciplinary coordination.
                  </p>
                  <p className="text-base leading-[26px] text-[#D3DEEA]">We manage disputes not as isolated conflicts, but as part of broader legal, financial, and reputational risk.</p>
                </div>
              </Reveal>
              <Stagger className="grid gap-6 md:grid-cols-2" gap={0.07}>
                {AREAS.map(({ t, d }) => (
                  <StaggerItem key={t} as="article" className="flex flex-col gap-3.5 bg-white px-7 pb-10 pt-9 md:px-9">
                    <h3 className={`${DISPLAY} text-[21px] leading-[27px] text-[#0C3B69]`}>{t}</h3>
                    <p className="text-[15px] leading-[25px] text-[#334155]">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div className="flex flex-col gap-4">
              <Reveal as="h3" className="text-base font-semibold">
                Also advising on
              </Reveal>
              <Stagger className="flex flex-col gap-3" gap={0.04}>
                {[ALSO.slice(0, 3), ALSO.slice(3)].map((row) => (
                  <ul key={row[0]} className="flex flex-wrap gap-3">
                    {row.map((a) => (
                      <StaggerItem key={a} as="li" className="border border-[#B8C6D6] bg-white px-4 py-2.5 text-[15px] font-medium text-[#0C3B69]">
                        {a}
                      </StaggerItem>
                    ))}
                  </ul>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Strategic Legal Frameworks */}
        <section aria-labelledby="frameworks" className={`${WRAP} flex flex-col gap-12 py-24 lg:py-28`}>
          <Reveal className="flex flex-col gap-4">
            <h2 id="frameworks" className={`${H2} text-[#0C3B69]`}>
              Strategic Legal Frameworks
            </h2>
            <p className="text-lg leading-[29px] text-[#334155]">A subtle layer of strategic oversight supporting our cross-border and governance practice.</p>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-2" gap={0.1}>
            {FRAMEWORKS.map(({ t, src, d }) => (
              <StaggerItem key={t} as="article" className="flex flex-col border border-[#DCE3EB]">
                <div className="img-zoom relative h-[220px] sm:h-[280px] lg:h-[330px]">
                  <Image src={`${IMG}/${src}`} alt={t} fill sizes="(min-width: 768px) 588px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-3 px-7 pb-9 pt-8 md:px-9">
                  <h3 className={`${DISPLAY} text-2xl text-[#0C3B69]`}>{t}</h3>
                  <p className="text-base leading-[26px] text-[#334155]">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Compliance */}
        <section aria-labelledby="compliance" className="bg-[#F0F5FA]">
          <div className={`${WRAP} grid items-center gap-12 py-24 lg:grid-cols-[1fr_560px] lg:gap-20 lg:py-[120px]`}>
            <Reveal className="flex flex-col gap-6">
              <h2 id="compliance" className={`${DISPLAY} text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.25] tracking-[-0.5px] text-[#0C3B69]`}>
                Is your business protected by an effective compliance system?
              </h2>
              <p className="text-[17px] leading-7 text-[#334155]">
                No compliance system yet, or unsure whether the one you have actually works? We help companies assess risk, build and implement compliance frameworks, provide ongoing legal guidance, monitor performance and measure effectiveness.
              </p>
              <Stagger as="ol" className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pb-1 pt-2" gap={0.06} delay={0.2}>
                {STEPS.map((s, i) => (
                  <StaggerItem key={s} as="li" className={`${DISPLAY} flex items-center gap-3.5 text-lg italic text-[#8A6224]`}>
                    {s}
                    {i < STEPS.length - 1 && <ArrowRight size={14} color="#8A9AB0" aria-hidden="true" />}
                  </StaggerItem>
                ))}
              </Stagger>
              <a href="#contact" className="nudge flex w-fit items-center gap-2.5 pt-1.5 text-base font-semibold text-[#0C3B69]">
                Build or strengthen your compliance system
                <ArrowRight size={18} color="#A4762C" aria-hidden="true" className="shrink-0" />
              </a>
            </Reveal>
            <MediaReveal onView delay={0.1} className="relative h-[220px] overflow-hidden sm:h-[300px] lg:h-[340px]">
              <Image src={`${IMG}/compliance.jpg`} alt="Scales of justice in front of a city skyline" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </MediaReveal>
          </div>
        </section>

        {/* Industries & Nearshoring */}
        <section id="industries" className="relative scroll-mt-28 overflow-hidden bg-[#0B2440] text-white">
          <Parallax className="absolute inset-0" distance={40}>
            <Image src={`${IMG}/mapa.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          </Parallax>
          <div aria-hidden="true" className="absolute inset-0 bg-[#0B2440E0]" />
          <div className={`${WRAP} relative grid items-start gap-14 py-24 lg:grid-cols-[1fr_440px] lg:gap-20 lg:py-28`}>
            <div className="flex flex-col gap-6">
              <Reveal className="flex flex-col gap-6">
                <h2 className={`${DISPLAY} text-[clamp(2.125rem,3.1vw,2.75rem)] leading-[1.2] tracking-[-0.8px]`}>Industries We Serve</h2>
                <p className="text-lg leading-[29px] text-[#C3CFDC]">
                  Sector-focused legal expertise for regulated and complex markets, combining deep sector knowledge with cross-border legal execution.
                </p>
              </Reveal>
              <Stagger className="grid gap-x-10 gap-y-[18px] pt-3 sm:grid-cols-2" gap={0.1}>
                {INDUSTRIES.map((col) => (
                  <StaggerItem key={col[0]} as="ul" className="flex flex-col gap-[18px]">
                    {col.map((it) => (
                      <li key={it} className={`${DISPLAY} text-lg leading-6 text-[#E8D3A6]`}>
                        {it}
                      </li>
                    ))}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1} className="flex flex-col gap-5 bg-white px-7 pb-11 pt-10 text-[#1E293B] md:px-10">
              <h3 className={`${DISPLAY} text-[26px] leading-[34px] text-[#0C3B69]`}>Strategic Legal Nearshoring Services</h3>
              <p className="text-[17px] font-semibold leading-[26px]">Legal structuring for companies relocating, expanding, or optimizing operations across the Americas.</p>
              <p className="text-[15px] leading-[25px] text-[#334155]">
                ILC advises international companies leveraging nearshoring strategies in Mexico and Latin America, with integrated support across corporate structuring, regulatory compliance, real estate, labor considerations, and cross-border operations.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Our Legal Team */}
        <section aria-labelledby="team" className={`${WRAP} flex flex-col gap-[52px] py-24 lg:py-28`}>
          <Reveal className="flex flex-col gap-3.5">
            <h2 id="team" className={`${H2} text-[#0C3B69]`}>
              Our Legal Team
            </h2>
            <p className="max-w-[720px] text-lg leading-[29px] text-[#334155]">Experience. Perspective. Results. A senior legal team with cross-border experience in Mexico City and Houston.</p>
          </Reveal>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
            {TEAM.map(({ n, r, d }) => (
              <StaggerItem key={n} as="article" className="flex flex-col gap-2.5 border-t-2 border-[#0C3B69] pt-6">
                <h3 className={`${DISPLAY} text-[21px] text-[#0C3B69]`}>{n}</h3>
                <p className="text-sm font-semibold text-[#8A6224]">{r}</p>
                <p className="text-[15px] leading-6 text-[#334155]">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="flex flex-col gap-5 bg-[#F0F5FA] px-6 pb-9 pt-8 md:px-10">
            <h3 className="text-base font-semibold">Specialized advisory &amp; technical support</h3>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {SPECIALISTS.map(({ n, s }) => (
                <li key={n} className="flex flex-col gap-1.5">
                  <p className="text-base font-semibold text-[#0C3B69]">{n}</p>
                  <p className="text-sm leading-[21px] text-[#475569]">{s}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 bg-[#0C3B69] text-white">
          <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[1fr_600px] lg:gap-20 lg:py-28`}>
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-[18px]">
                <h2 className={H2}>Let&apos;s work together</h2>
                <p className="text-[17px] leading-7 text-[#C3CFDC]">
                  Whether you are expanding operations, managing cross-border risk, implementing governance and compliance frameworks, or protecting strategic assets, ILC™ provides clarity, control, and results.
                </p>
              </Reveal>
              <Stagger className="flex flex-col gap-10" gap={0.08}>
                {OFFICES.map(({ city, lines, phones }) => (
                  <StaggerItem key={city} className="flex gap-[18px]">
                    <MapPin size={22} color="#C9A15A" aria-hidden="true" className="shrink-0" />
                    <div className="flex flex-col gap-1.5">
                      <h3 className={`${DISPLAY} text-[19px]`}>{city}</h3>
                      <p className="text-base leading-[25px] text-[#D3DEEA]">
                        {lines[0]}
                        <br />
                        {lines[1]}
                      </p>
                      <p className="text-base font-semibold text-[#E8D3A6]">
                        {phones.map(([label, tel], i) => (
                          <span key={tel}>
                            {i > 0 && " / "}
                            <a href={`tel:${tel}`} className="link-u">{label}</a>
                          </span>
                        ))}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal as="p" className="text-[15px] leading-6 text-[#AFC0D2]">
                We provide legal advisory services in English and Spanish. All inquiries are treated with strict confidentiality.
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <DemoForm
                className="flex flex-col gap-[18px] bg-white px-6 pb-10 pt-9 text-[#1E293B] md:px-11 md:pt-11"
                noteClassName="text-sm text-[#475569]"
                note="Demo form: submission is not connected."
              >
                <h3 className={`${DISPLAY} text-[26px] text-[#0C3B69]`}>Request a Consultation</h3>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-4">
                  <Field label="First name *" name="first-name" autoComplete="given-name" />
                  <Field label="Last name *" name="last-name" autoComplete="family-name" />
                </div>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-4">
                  <Field label="Email *" name="email" type="email" autoComplete="email" />
                  <Field label="Phone number *" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-4">
                  <Field label="Country *" name="country" autoComplete="country-name" />
                  <label className="flex flex-col gap-[7px]">
                    <span className="text-sm font-semibold">Area of interest *</span>
                    <span className="relative">
                      <select name="area" required defaultValue="" className={`${INPUT} h-[46px] appearance-none pr-10 invalid:text-[#64748B]`}>
                        <option value="" disabled>
                          Select
                        </option>
                        <option>Complex Litigation &amp; Strategic Disputes</option>
                        {AREAS.map(({ t }) => (
                          <option key={t}>{t}</option>
                        ))}
                        {ALSO.map((a) => (
                          <option key={a}>{a}</option>
                        ))}
                      </select>
                      <CaretDown size={16} color="#64748B" aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </span>
                  </label>
                </div>
                <label className="flex flex-col gap-[7px]">
                  <span className="text-sm font-semibold">Comment or message *</span>
                  <textarea name="message" required rows={4} className={`${INPUT} h-[110px] resize-none py-3`} />
                </label>
                <button type="submit" className="press w-full bg-[#0C3B69] px-7 py-4 text-base font-semibold text-white hover:bg-[#0B2440]">
                  Submit
                </button>
                <p className="text-[13px] leading-5 text-[#64748B]">Submission of this form does not create an attorney-client relationship.</p>
              </DemoForm>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B2440] text-[#D3DEEA]">
        <div className={`${WRAP} flex flex-col gap-9 pb-28 pt-16 lg:pb-10`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-fit bg-white px-3.5 py-2.5">
              <Image src={`${IMG}/logo.svg`} alt="iLC International Legal Counseling, Attorneys at Law" width={124} height={80} />
            </div>
            <div className="flex flex-col gap-[18px] lg:items-end">
              <nav aria-label="Footer">
                <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                  {FOOTER_NAV.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-u">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <span className="font-semibold text-[#C9A15A]">Locations:</span>
                <span>USA: Houston TX, US</span>
                <span>MX: Mexico City, México</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-[13px] text-[#AFC0D2] lg:flex-row lg:justify-between lg:gap-10">
            <p>Copyright 1989-2025 International Legal Counseling. Legal Legacy Since 1947.</p>
            <p>Part of the Kingdom Millennium Legal Group™, headquartered in the United States.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const INPUT =
  "w-full border border-[#C9D3DE] bg-[#F7F9FB] px-3.5 text-[15px] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#0C3B69] focus:shadow-[0_0_0_3px_rgba(12,59,105,0.14)]";

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} required autoComplete={autoComplete} className={`${INPUT} h-[46px]`} />
    </label>
  );
}
