import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/portfolio";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: `Contato — ${site.name}` },
      { name: "description", content: `Entre em contato com ${site.name}.` },
      { property: "og:title", content: `Contato — ${site.name}` },
      { property: "og:description", content: `Entre em contato com ${site.name}.` },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
            Contato
          </span>
          <h1 className="mb-12 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Vamos criar<br />
            algo <span className="text-[color:var(--cobalt)]">juntos.</span>
          </h1>

          <div className="space-y-8 border-t border-black/5 pt-10">
            <div>
              <span className="mb-2 block text-xs uppercase tracking-widest text-black/40">
                E-mail
              </span>
              <a
                href={`mailto:${site.contact.email}`}
                className="group inline-flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors hover:text-[color:var(--cobalt)] md:text-3xl"
              >
                {site.contact.email}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-black/30 transition-colors group-hover:text-[color:var(--cobalt)] md:h-5 md:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div>
              <span className="mb-2 block text-xs uppercase tracking-widest text-black/40">
                Localização
              </span>
              <p className="text-lg font-light text-black/70">{site.contact.location}</p>
            </div>

            <div>
              <span className="mb-4 block text-xs uppercase tracking-widest text-black/40">
                Minhas redes
              </span>
              <div className="flex flex-wrap gap-3">
                {site.contact.socials.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-tool-pop rounded-full border border-black/10 px-5 py-2 text-sm font-medium transition-all hover:border-[color:var(--cobalt)] hover:bg-[color:var(--cobalt)] hover:text-white"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
