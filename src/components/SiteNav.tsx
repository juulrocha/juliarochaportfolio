import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { categories } from "@/content/portfolio";

/**
 * Barra de navegação fixa.
 *
 * - Sem rolagem: totalmente transparente, se funde ao fundo da página.
 * - Ao rolar: fica translúcida com blur, aparecendo em fade (sem borda,
 *   sem linha, sem sombra) — só o vidro fosco ganhando opacidade aos
 *   poucos.
 * - Logo: "PORTFÓLIO." na home, Sobre mim e Contato. "JÚLIA ROCHA" (com
 *   "ROCHA" em azul) apenas dentro das páginas de categoria (Branding,
 *   Audiovisual, Design & Conteúdo).
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const categorySlugs = categories.map((c) => `/${c.slug}`);
  const isCategoryPage = categorySlugs.some((slug) => location.pathname.startsWith(slug));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[color:var(--background)]/75 backdrop-blur-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-xl uppercase tracking-tight"
        >
          {isCategoryPage ? (
            <span>
              JÚLIA <span className="text-[color:var(--cobalt)]">ROCHA</span>
            </span>
          ) : (
            <span className="text-[color:var(--cobalt)]">PORTFÓLIO.</span>
          )}
        </Link>
        <div className="flex gap-8 text-sm font-medium tracking-tight">
          <Link
            to="/sobre"
            className="transition-colors hover:text-[color:var(--cobalt)]"
            activeProps={{ className: "text-[color:var(--cobalt)]" }}
          >
            Sobre mim
          </Link>
          <Link
            to="/contato"
            className="transition-colors hover:text-[color:var(--cobalt)]"
            activeProps={{ className: "text-[color:var(--cobalt)]" }}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
