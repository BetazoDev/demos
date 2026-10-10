import type { Metadata } from "next";
import Image from "next/image";
import { Mulish, Sen } from "next/font/google";
import { HeroIntro, HeroItem, MediaReveal, Parallax, Stagger, StaggerItem } from "@/components/motion";

const display = Sen({ subsets: ["latin"], weight: ["600", "700"], variable: "--s68-display" });
const body = Mulish({ subsets: ["latin"], variable: "--s68-body" });

export const metadata: Metadata = {
  title: "ARKYLAB",
  description: "Let's build your own Dreams Together. Cultura, edificios públicos, urbano y vivienda.",
};

const IMG = "/sitios/68-arkylab";
const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0";
const CATEGORIAS = ["Cultura", "Edificios públicos", "Urbano", "Vivienda"];

function Logo({ preload = false, className = "" }: { preload?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="ARKYLAB, inicio" className="press block w-fit">
      <Image src={`${IMG}/logo.svg`} alt="ARKYLAB" width={190} height={91} preload={preload} className={`h-auto ${className}`} />
    </a>
  );
}

export default function ArkylabPage() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} bg-white font-[family-name:var(--s68-body)] text-[#121212] selection:bg-[#F8C176] selection:text-[#121212]`}
    >
      <main>
        {/* Hero */}
        <section
          aria-labelledby="hero-title"
          className="relative isolate flex h-[88svh] min-h-[560px] flex-col justify-between overflow-hidden bg-[#121212] md:h-[880px]"
        >
          <Parallax className="absolute inset-0 -z-20 overflow-hidden" distance={50}>
            <Image
              src={`${IMG}/hero.jpg`}
              alt="Patio interior de una casa contemporánea de concreto al atardecer"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#12121299_0%,#12121200_30%,#12121200_45%,#121212E6_100%)]"
          />
          <header className={`${WRAP} flex h-[104px] shrink-0 items-center md:h-[140px]`}>
            <Logo preload className="w-[136px] md:w-[190px]" />
          </header>
          <HeroIntro className={`${WRAP} pb-14 md:pb-20 lg:pb-24`} delay={0.15}>
            <HeroItem
              as="h1"
              blur
              className="font-[family-name:var(--s68-display)] text-[clamp(2.375rem,6.1vw,5.5rem)] font-bold leading-none tracking-[-0.028em] text-white"
            >
              <span id="hero-title">
                Let&apos;s build your own
                <br />
                Dreams Together
              </span>
            </HeroItem>
          </HeroIntro>
        </section>

        {/* Galería */}
        <section aria-label="Galería" className={`${WRAP} grid gap-10 py-20 md:py-24 lg:grid-cols-[minmax(0,18fr)_minmax(0,11fr)] lg:py-[120px]`}>
          <MediaReveal onView delay={0} className="img-zoom relative aspect-[720/640] w-full">
            <Image
              src={`${IMG}/fachada.jpg`}
              alt="Fachada de concreto aparente con puertas de madera"
              fill
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </MediaReveal>
          <div className="flex flex-col gap-12 lg:gap-14 lg:pt-6">
            <Stagger as="ul" className="flex flex-col gap-1.5" gap={0.06}>
              {CATEGORIAS.map((c) => (
                <StaggerItem
                  key={c}
                  as="li"
                  className="font-[family-name:var(--s68-display)] text-[clamp(2.25rem,3.1vw,2.75rem)] font-semibold leading-[1.16] tracking-[-1px]"
                >
                  {c}
                </StaggerItem>
              ))}
            </Stagger>
            <MediaReveal onView delay={0.1} className="img-zoom relative aspect-[440/300] w-full">
              <Image
                src={`${IMG}/patio.jpg`}
                alt="Acceso con pérgola, espejo de agua y muros de concreto"
                fill
                sizes="(min-width: 1280px) 440px, (min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </MediaReveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#121212]">
        <div className={`${WRAP} flex flex-col gap-14 pb-28 pt-[72px] lg:pb-10`}>
          <Logo className="w-[150px] md:w-[190px]" />
          <div className="border-t border-[#545454] pt-6">
            <p className="text-sm text-[#A8A8A8]">© 2023 ARKYLAB</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
