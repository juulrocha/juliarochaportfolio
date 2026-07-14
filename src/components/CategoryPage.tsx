import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import type { Category, Project } from "@/content/portfolio";

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-black/10 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        {/* Meta column — jornal style */}
        <div className="md:col-span-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
            {num} / {project.kind === "case" ? "Case" : "Projeto"}
          </div>
          <div className="mt-3 space-y-1 font-[family-name:var(--font-editorial)] text-xs uppercase tracking-wider text-black/50">
            <div>{project.client}</div>
            <div>{project.year}</div>
          </div>
        </div>

        {/* Content column */}
        <div className="md:col-span-9">
          <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
            {project.title}
          </h2>

          {project.kind === "image" && project.image && (
            <div className="mt-8 overflow-hidden bg-[color:var(--surface)]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="max-w-prose font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/70">
              {project.description}
            </p>
            {project.result && (
              <p className="max-w-prose border-l border-[color:var(--cobalt)] pl-4 font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/70">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-[color:var(--cobalt)]">
                  Resultado
                </span>
                {project.result}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function CategoryPage({ category }: { category: Category }) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />

      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-16 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/60 transition-colors hover:text-[color:var(--cobalt)]"
          >
            <span aria-hidden>←</span> Voltar
          </Link>

          {/* Landing hero */}
          <header className="mb-8">
            <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
              {category.number} — Categoria
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.85] tracking-tight md:text-[10rem]">
              {category.name}
            </h1>
            <p className="mt-8 max-w-2xl font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70">
              {category.intro}
            </p>
          </header>

          {/* Vertical list of projects — landing page rhythm */}
          <div>
            {category.projects.map((project, i) => (
              <ProjectBlock key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
