import { createFileRoute } from "@tanstack/react-router";
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

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="mx-auto mb-32 max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h1 className="mb-6 font-[family-name:var(--font-display)] text-7xl leading-[0.85] tracking-tight uppercase md:text-9xl">
                CREATIVITY<br />
                <span className="text-[color:var(--cobalt)]">THROUGH</span>
                <br />
                IDENTITY
              </h1>
              <p className="max-w-md text-lg font-light leading-relaxed text-black/60">
                {site.tagline}
              </p>
              <div className="mt-8 font-mono text-xs uppercase tracking-widest text-black/40">
                {site.name} — {site.role}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[color:var(--surface)] shadow-2xl shadow-[color:var(--cobalt)]/10 outline-1 -outline-offset-1 outline-black/5">
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
        </section>

        {/* Infinite marquee of category covers */}
        <CategoryMarquee />
      </main>

      <SiteFooter />
    </div>
  );
}
