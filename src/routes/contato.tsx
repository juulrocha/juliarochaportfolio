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

// Cor de fundo + ícone (Simple Icons) de cada rede. O ícone original é
// preto/monocromático; o filtro CSS abaixo o torna branco por cima da
// cor de marca, resultando num "balãozinho" colorido e reconhecível.
const SOCIAL_STYLES: Record<string, { bg: string; icon: string }> = {
  Instagram: { bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", icon: "instagram" },
  LinkedIn: { bg: "#0A66C2", icon: "linkedin" },
  Behance: { bg: "#1769FF", icon: "behance" },
  TikTok: { bg: "#000000", icon: "tiktok" },
  YouTube: { bg: "#FF0000", icon: "youtube" },
};

function Contato() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />
      <main className="bg-grid-faint px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
            Contato
          </span>
          <h1 className="mb-12 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Vamos criar<br />
            algo <span className="text-[color:var(--cobalt)]">juntos.</span>
          </h1>

          <div className="space-y-8 border-t border-black/5 pt-10">
            {/* 1. E-mail */}
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

            {/* 2. Minhas redes */}
            <div>
              <span className="mb-4 block text-xs uppercase tracking-widest text-black/40">
                Minhas redes
              </span>
              <div className="flex flex-wrap gap-4">
                {site.contact.socials.map((s, i) => {
                  const style = SOCIAL_STYLES[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      aria-label={s.label}
                      className="animate-tool-pop grid h-12 w-12 place-items-center rounded-full shadow-sm transition-transform duration-300 hover:scale-110"
                      style={{ background: style?.bg ?? "#111", animationDelay: `${i * 150}ms` }}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${style?.icon}.svg`}
                        alt={s.label}
                        loading="lazy"
                        className="h-5 w-5"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* 3. Localização */}
            <div>
              <span className="mb-2 block text-xs uppercase tracking-widest text-black/40">
                Localização
              </span>
              <p className="text-lg font-light text-black/70">{site.contact.location}</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
