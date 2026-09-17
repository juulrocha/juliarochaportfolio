import { CategoryLayout, BlockTitle } from "@/components/CategoryLayout";
import { EditableImage } from "@/components/Placeholder";
import { brandingContent } from "@/content/portfolio";

/**
 * Landing 01 — Branding
 * Estrutura vertical: Construção de Marca (2 projetos maiores)
 * seguido por Identidade Visual (grade reutilizável).
 *
 * Quando um projeto tem `href`, a imagem vira um link clicável (abre em
 * nova aba) e ganha um pequeno indicador visual (seta diagonal) — sem
 * hover no celular, esse indicador precisa aparecer sempre, não só ao
 * passar o mouse.
 */

// Renderiza o nome separando ™/® num sobrescrito discreto (fonte menor,
// não em Anton), em vez de ficar do mesmo tamanho/peso do restante do nome.
function BrandName({ name }: { name: string }) {
  const match = name.match(/^(.*?)([™®])$/);
  if (!match) return <>{name}</>;
  const [, base, symbol] = match;
  return (
    <>
      {base}
      <sup className="ml-0.5 text-[0.4em] font-[family-name:var(--font-editorial)] normal-case text-black/50">
        {symbol}
      </sup>
    </>
  );
}

// Indicador de clicável: seta diagonal num círculo, sempre visível
// (opacidade baixa) e destacando um pouco mais ao passar o mouse/tocar.
function ClickableBadge() {
  return (
    <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-black/60 opacity-80 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function BrandingLanding() {
  const c = brandingContent;

  const intro = (
    <>
      Uma marca é decisão. Não decoração. Aqui reuni os projetos em que pensei o porquê antes do{" "}
      <u>como</u>. Produzidos do zero ou junto com quem já tinha uma história para contar.
    </>
  );

  return (
    <CategoryLayout number={c.number} name={c.name} intro={intro}>
      {/* Bloco 1 — Construção de Marca */}
      <section className="border-t border-black/10 pt-16 md:pt-24">
        <BlockTitle>{c.brandBuild.title}</BlockTitle>
        <div className="space-y-20 md:space-y-28">
          {c.brandBuild.projects.map((p, i) => {
            const image = (
              <div className="relative overflow-hidden rounded-2xl">
                <EditableImage
                  src={p.image}
                  alt={p.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                {p.href && <ClickableBadge />}
              </div>
            );
            return (
              <article key={i} className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="group md:col-span-8">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {image}
                    </a>
                  ) : (
                    image
                  )}
                </div>
                <div className="md:col-span-4 md:pt-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight md:text-3xl">
                    <BrandName name={p.name} />
                  </h3>
                  <p className="mt-4 font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/70">
                    {p.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bloco 2 — Identidade Visual */}
      <section className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-24">
        <BlockTitle>{c.visualIdentity.title}</BlockTitle>
        <p className="mb-10 max-w-2xl font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/60">
          Em parte destes projetos a execução foi integralmente minha; em outros, atuei como direção criativa, orientando a produção de uma equipe.
        </p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-14 md:grid-cols-3">
          {c.visualIdentity.projects.map((p, i) => {
            const image = (
              <div className="group relative overflow-hidden rounded-2xl">
                <EditableImage
                  src={p.image}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {p.href && <ClickableBadge />}
              </div>
            );
            return (
              <article key={i}>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-base uppercase tracking-tight sm:text-lg">
                  <BrandName name={p.name} />
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
