import { CategoryLayout, BlockTitle } from "@/components/CategoryLayout";
import { EditableImage } from "@/components/Placeholder";
import { brandingContent } from "@/content/portfolio";

/**
 * Landing 01 — Branding
 * Estrutura vertical: Construção de Marca (2 projetos maiores)
 * seguido por Identidade Visual (grade reutilizável).
 */
export function BrandingLanding() {
  const c = brandingContent;

  return (
    <CategoryLayout number={c.number} name={c.name} intro={c.intro}>
      {/* Bloco 1 — Construção de Marca */}
      <section className="border-t border-black/10 pt-16 md:pt-24">
        <BlockTitle>{c.brandBuild.title}</BlockTitle>
        <div className="space-y-20 md:space-y-28">
          {c.brandBuild.projects.map((p, i) => (
            <article key={i} className="grid gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-8">
                <EditableImage
                  src={p.image}
                  alt={p.name}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="md:col-span-4 md:pt-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-4 font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/70">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bloco 2 — Identidade Visual */}
      <section className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-24">
        <BlockTitle>{c.visualIdentity.title}</BlockTitle>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
          {c.visualIdentity.projects.map((p, i) => (
            <article key={i}>
              <EditableImage
                src={p.image}
                alt={p.name}
                className="aspect-square w-full object-cover"
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
