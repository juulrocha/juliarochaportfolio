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
          <div className="overflow-hidden rounded-2xl">
            <EditableImage
              src={site.about.banner}
              alt={site.about.title}
              className="aspect-[21/9] w-full rounded-2xl object-cover md:aspect-[24/8]"
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

          {/* Bloco complementar — ferramentas + currículo */}
          <div className="mt-20 flex flex-col items-start gap-8 border-t border-black/10 pt-10 md:mt-24 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {site.about.tools.map((t) => (
                <span
                  key={t.name}
                  title={t.name}
                  className="grid size-11 place-items-center rounded-full bg-white ring-1 ring-black/10 transition-transform duration-300 ease-out hover:scale-105"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    loading="lazy"
                    width={24}
                    height={24}
                    className="size-5 object-contain"
                  />
                </span>
              ))}
            </div>

            <a
              href={site.about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[color:var(--cobalt)] px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90"
            >
              {site.about.resumeLabel}
            </a>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
