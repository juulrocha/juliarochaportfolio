import { useState } from "react";
import { CategoryLayout, BlockTitle } from "@/components/CategoryLayout";
import { EditableImage } from "@/components/Placeholder";
import { audiovisualContent } from "@/content/portfolio";

/**
 * Landing 02 — Audiovisual
 * Curtas em grade tipo YouTube + Pilha expansível de vídeos para redes.
 */
export function AudiovisualLanding() {
  const c = audiovisualContent;

  return (
    <CategoryLayout number={c.number} name={c.name} intro={c.intro}>
      {/* Bloco 1 — Curtas */}
      <section className="border-t border-black/10 pt-16 md:pt-24">
        <BlockTitle>{c.shorts.title}</BlockTitle>
        <p className="mb-10 max-w-2xl font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/60">
          {c.shorts.description}
        </p>

        <div className="grid grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {c.shorts.items.map((v, i) => (
            <a
              key={i}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl">
                <EditableImage
                  src={v.thumbnail}
                  alt={v.name}
                  className="aspect-video w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xs uppercase leading-tight tracking-tight transition-colors group-hover:text-[color:var(--cobalt)] sm:text-base">
                {v.name}
              </h3>
              <p className="mt-1 font-[family-name:var(--font-editorial)] text-[11px] leading-snug text-black/60 sm:text-sm sm:leading-relaxed">
                {v.description}
              </p>

            </a>
          ))}
        </div>
      </section>

      {/* Bloco 2 — Vídeos para Redes (pilha expansível) */}
      <section className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-24">
        <BlockTitle>{c.socialVideos.title}</BlockTitle>
        <p className="mb-10 max-w-2xl font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/60">
          {c.socialVideos.description}
        </p>
        <SocialStack items={c.socialVideos.items} />
      </section>
    </CategoryLayout>
  );
}

type SocialItem = {
  thumbnail: string;
  username: string;
  platform: string;
  href: string;
};

function SocialStack({ items }: { items: SocialItem[] }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Expandir vídeos"
        className="group relative mx-auto block h-[360px] w-full max-w-sm"
      >
        {items.slice(0, 4).map((v, i) => {
          const offset = i * 10;
          const rot = (i - 1.5) * 3;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-0 aspect-[9/16] w-[200px] -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-700 ease-out group-hover:shadow-2xl sm:w-[220px]"
              style={{
                transform: `translate(-50%, ${offset}px) rotate(${rot}deg)`,
                zIndex: items.length - i,
              }}
            >
              <EditableImage
                src={v.thumbnail}
                alt={v.username}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          );
        })}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
          Clique para expandir
        </span>
      </button>
    );
  }

  return (
    <div>
      <div className="grid animate-in grid-cols-3 gap-3 fade-in duration-700 ease-out sm:gap-6">
        {items.map((v, i) => (
          <a
            key={i}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl">
              <EditableImage
                src={v.thumbnail}
                alt={v.username}
                className="aspect-[9/16] w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-3">
              <div className="font-[family-name:var(--font-display)] text-xs uppercase leading-tight tracking-tight transition-colors group-hover:text-[color:var(--cobalt)] sm:text-sm">
                {v.username}
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-black/50 sm:text-xs">
                {v.platform}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-mono text-xs uppercase tracking-widest text-black/50 transition-colors hover:text-[color:var(--cobalt)]"
        >
          — Recolher —
        </button>
      </div>
    </div>
  );
}

