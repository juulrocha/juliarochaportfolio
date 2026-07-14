import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/portfolio";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: `Sobre — ${site.name}` },
      { name: "description", content: site.about.body[0] },
      { property: "og:title", content: `Sobre — ${site.name}` },
      { property: "og:description", content: site.about.body[0] },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <SiteNav />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--surface)]">
            <img
              src={site.heroImage}
              alt={site.name}
              loading="lazy"
              width={1080}
              height={1350}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
              Sobre
            </span>
            <h1 className="mb-8 text-4xl font-extrabold tracking-tighter md:text-6xl">
              {site.name}
            </h1>
            <div className="space-y-6 text-lg font-light leading-relaxed text-black/70">
              {site.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
