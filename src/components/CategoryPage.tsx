import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import type { Category } from "@/content/portfolio";

export function CategoryPage({ category }: { category: Category }) {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <SiteNav />

      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-[color:var(--cobalt)]"
          >
            <span aria-hidden>←</span> Voltar
          </Link>

          <div className="mb-16 flex items-end justify-between gap-8 border-b border-black/5 pb-10">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
                {category.number} — Categoria
              </span>
              <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl">
                {category.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg font-light text-black/60">
                {category.tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {category.projects.map((project) => (
              <article
                key={project.title}
                className="group cursor-pointer"
              >
                <div className="mb-4 aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--surface)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                    <p className="text-sm text-black/50">{project.client}</p>
                  </div>
                  <span className="font-mono text-xs text-black/40">{project.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
