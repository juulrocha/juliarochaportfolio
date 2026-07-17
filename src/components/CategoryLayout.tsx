import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

type Props = {
  number: string;
  name: string;
  intro: string;
  children: ReactNode;
};

/**
 * Cabeçalho e wrapper compartilhado por todas as landings de categoria.
 * Mantém a identidade visual (tipografia, grid, cor) e concentra o
 * cabeçalho: botão voltar, identificador numérico, nome e descrição.
 */
export function CategoryLayout({ number, name, intro, children }: Props) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />

      <main className="px-6 pt-28 pb-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/60 transition-colors hover:text-[color:var(--cobalt)]"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Voltar
          </Link>

          <header className="mb-16 md:mb-24">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
              {number}
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-[8rem]">
              {name}
            </h1>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70">
              {intro}
            </p>
          </header>

          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/**
 * Título de bloco reutilizável nas landings.
 */
export function BlockTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}
