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
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <SiteNav />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
            Contato
          </span>
          <h1 className="mb-12 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
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
                className="text-2xl font-semibold tracking-tight transition-colors hover:text-[color:var(--cobalt)] md:text-3xl"
              >
                {site.contact.email}
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
                Redes
              </span>
              <div className="flex flex-wrap gap-3">
                {site.contact.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 px-5 py-2 text-sm font-medium transition-all hover:border-[color:var(--cobalt)] hover:bg-[color:var(--cobalt)] hover:text-white"
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
