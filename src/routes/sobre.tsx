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
  // Separa a última palavra do título (ex.: "Rocha") para colorir em azul,
  // igual ao "ROCHA" da home.
  const titleWords = site.about.title.trim().split(" ");
  const lastWord = titleWords.pop() ?? "";
  const firstWords = titleWords.join(" ");

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Banner horizontal, com fade suave na base para a legenda
              sobreposta ficar legível sem cortar o rosto na imagem. */}
          <div className="relative overflow-hidden rounded-2xl">
            <EditableImage
              src={site.about.banner}
              alt={site.about.title}
              className="aspect-[21/9] w-full rounded-2xl object-cover md:aspect-[24/8]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--background)] via-[color:var(--background)]/40 to-transparent md:h-32" />
          </div>

          {/* Eyebrow + título sobrepostos levemente ao banner, tipo foto
              de perfil de rede social por cima da capa. */}
          <div className="relative z-10 -mt-8 px-2 md:-mt-12">
            <span className="mb-3 block text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
              {site.about.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight md:text-6xl">
              {firstWords} <span className="text-[color:var(--cobalt)]">{lastWord}</span>
            </h1>
          </div>

          {/* Texto */}
          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-16">
            <div className="hidden md:col-span-5 md:block" />
            <div className="space-y-6 font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70 md:col-span-7 md:text-lg">
              {site.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Bloco complementar — ferramentas + currículo */}
          <div className="mt-20 flex flex-col items-start gap-8 border-t border-black/10 pt-10 md:mt-24 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {site.about.tools.map((t, i) => (
                <span
                  key={t.name}
                  title={t.name}
                  className="animate-tool-pop grid size-11 place-items-center rounded-full bg-white ring-1 ring-black/10"
                  style={{ animationDelay: `${i * 150}ms` }}
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
              className="animate-subtle-bounce shrink-0 rounded-full bg-[color:var(--cobalt)] px-6 py-3 text-xs uppercase tracking-widest text-white transition-opacity duration-300 hover:opacity-90"
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
