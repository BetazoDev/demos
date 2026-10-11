import type { Metadata } from "next";
import { HeroIntro, HeroItem } from "@/components/motion";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Acceso" };

export default function AccessPage() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#F7F7F5] px-5 py-16 font-sans text-[#141414] selection:bg-[#141414] selection:text-white">
      <HeroIntro className="w-full max-w-[380px]">
        <HeroItem as="h1" blur className="text-[clamp(2.5rem,9vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          Directorio
        </HeroItem>
        <HeroItem as="p" className="mt-3 text-[15px] leading-relaxed text-black/55">
          Acceso privado. La sesión se recuerda 30 días en este navegador.
        </HeroItem>
        <HeroItem className="mt-10">
          <LoginForm />
        </HeroItem>
      </HeroIntro>
    </main>
  );
}
