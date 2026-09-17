import { CategoryLayout, BlockTitle } from "@/components/CategoryLayout";
import { EditableImage } from "@/components/Placeholder";
import { criacaoContent } from "@/content/portfolio";

/**
 * Landing 03 — Design & Conteúdo
 * Bloco grande para o Nike Photobook + grade leve para Conteúdo para Redes.
 *
 * O título do bloco ("Narrativa Editorial") vem do BlockTitle. O nome do
 * projeto em si ("Nike Photobook") é um campo separado (`name`), exibido
 * só uma vez, no h3 — nunca reaproveitando o texto do BlockTitle.
 */

function ClickableBadge() {
  return (
    <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-black/60 opacity-80 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function CriacaoLanding() {
  const c = criacaoContent;

  return (
    <CategoryLayout number={c.number} name={c.name} intro={c.intro}>
      {/* Bloco 1 — Nike Photobook (destaque grande) */}
      <section className="border-t border-black/10 pt-16 md:pt-24">
        <BlockTitle>{c.photobook.title}</BlockTitle>
        <a
          href={c.photobook.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <EditableImage
              src={c.photobook.image}
              alt={c.photobook.name}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <ClickableBadge />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <h3 className="md:col-span-5 font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight transition-colors group-hover:text-[color:var(--cobalt)] md:text-3xl">
              {c.photobook.name}
            </h3>
            <p className="md:col-span-7 font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70">
              {c.photobook.description}
            </p>
          </div>
        </a>
      </section>

      {/* Bloco 2 — Conteúdo para Redes */}
      <section className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-24">
        <BlockTitle>{c.editorial.title}</BlockTitle>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-14">
          {c.editorial.projects.map((p, i) => {
            const image = (
              <div className="group relative overflow-hidden rounded-2xl">
                <EditableImage
                  src={p.image}
                  alt={p.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {p.href && <ClickableBadge />}
              </div>
            );
            return (
              <article key={i}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                    {image}
                  </a>
                ) : (
                  image
                )}
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-base uppercase tracking-tight sm:text-lg">
                  {p.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-editorial)] text-xs leading-relaxed text-black/60 sm:text-sm">
                  {p.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </CategoryLayout>
  );
}
