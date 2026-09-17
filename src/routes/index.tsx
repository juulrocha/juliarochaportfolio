
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CategoryMarquee } from "@/components/CategoryMarquee";
import { site } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />

      <main className="pt-24 pb-20">
        {/* Hero — sem foto, extremamente limpo */}
        <section className="relative mx-auto mb-16 max-w-6xl px-6 sm:mb-24">
          <div className="mx-auto max-w-4xl py-10 text-center md:py-20">
                      <h1 className="font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight sm:text-8xl md:text-9xl text-center">
            <div>JÚLIA</div>
            <div className="text-[color:var(--cobalt)]">ROCHA</div>
          </h1>

                      {/* Parágrafo sem quebra de linha forçada — deixa o texto fluir
                          naturalmente conforme a largura da tela, sem cortar palavras
                          de forma estranha no celular. */}
                      <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-black/60 sm:max-w-xl sm:text-lg text-center">
            Uma seleção de projetos que vêm construindo minha forma de pensar comunicação.
          </p>
          </div>

          {/* Seta lateral (apenas mobile) — simples e cinza */}
          <a
            href="#projetos"
            aria-label="Ver projetos"
            className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center text-black/35 animate-bounce lg:hidden"
          >
            <ChevronDown size={22} strokeWidth={1.75} />
          </a>
        </section>

        <div id="projetos" className="scroll-mt-24">
          <CategoryMarquee />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
