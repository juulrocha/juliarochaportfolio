import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { EditableImage } from "@/components/Placeholder";
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
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />
      <main className="px-6 pt-28 pb-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Banner horizontal */}
          <div className="overflow-hidden">
            <EditableImage
              src={site.about.banner}
              alt={site.about.title}
              className="aspect-[21/9] w-full object-cover md:aspect-[24/8]"
            />
          </div>

          {/* Texto abaixo do banner */}
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
                {site.about.eyebrow}
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight md:text-6xl">
                {site.about.title}
              </h1>
            </div>
            <div className="space-y-6 font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70 md:col-span-7 md:text-lg">
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
