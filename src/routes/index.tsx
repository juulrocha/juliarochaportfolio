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
        {/* Hero */}
        <section className="mx-auto mb-10 max-w-6xl px-6 sm:mb-16">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h1 className="mb-4 font-[family-name:var(--font-display)] text-6xl leading-[0.85] tracking-tight uppercase sm:text-7xl md:text-8xl">
                JÚLIA<br />
                <span className="text-[color:var(--cobalt)]">ROCHA</span>
              </h1>
              <p className="max-w-md text-base font-light leading-relaxed text-black/60 sm:text-lg">
                {site.tagline}
              </p>
              <div className="mt-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-black/60">
                {site.role}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl bg-[color:var(--surface)] shadow-2xl shadow-[color:var(--cobalt)]/10 outline-1 -outline-offset-1 outline-black/5 sm:max-w-[380px] lg:max-w-none">
                <img
                  src={site.heroImage}
                  alt={site.name}
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator (mobile) */}
          <div className="mt-8 flex justify-center lg:hidden">
            <a
              href="#projetos"
              aria-label="Ver projetos"
              className="grid h-10 w-10 place-items-center rounded-full text-[color:var(--cobalt)] ring-1 ring-[color:var(--cobalt)]/30 animate-bounce"
            >
              <ChevronDown size={20} strokeWidth={2.5} />
            </a>
          </div>
        </section>

        {/* Infinite marquee of category covers */}
        <div id="projetos" className="scroll-mt-24">
          <CategoryMarquee />
        </div>
      </main>


      <SiteFooter />
    </div>
  );
}
