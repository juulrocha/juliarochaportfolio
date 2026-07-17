import { CategoryLayout, BlockTitle } from "@/components/CategoryLayout";
import { EditableImage } from "@/components/Placeholder";
import { criacaoContent } from "@/content/portfolio";

/**
 * Landing 03 — Criação
 * Bloco grande para Photobook + grade leve para Projetos Editoriais.
 */
export function CriacaoLanding() {
  const c = criacaoContent;

  return (
    <CategoryLayout number={c.number} name={c.name} intro={c.intro}>
      {/* Bloco 1 — Photobook (destaque grande) */}
      <section className="border-t border-black/10 pt-16 md:pt-24">
        <BlockTitle>{c.photobook.title}</BlockTitle>
        <a
          href={c.photobook.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="overflow-hidden">
            <EditableImage
              src={c.photobook.image}
              alt={c.photobook.title}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <h3 className="md:col-span-5 font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight transition-colors group-hover:text-[color:var(--cobalt)] md:text-3xl">
              {c.photobook.title}
            </h3>
            <p className="md:col-span-7 font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70">
              {c.photobook.description}
            </p>
          </div>
        </a>
      </section>

      {/* Bloco 2 — Projetos Editoriais */}
      <section className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-24">
        <BlockTitle>{c.editorial.title}</BlockTitle>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {c.editorial.projects.map((p, i) => (
            <article key={i}>
              <EditableImage
                src={p.image}
                alt={p.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-tight">
                {p.name}
              </h3>
              <p className="mt-1 font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/60">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </CategoryLayout>
  );
}
