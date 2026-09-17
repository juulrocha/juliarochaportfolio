import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

/**
 * Barra de navegação fixa.
 *
 * - Enquanto no topo da página: sem separador nenhum, se funde ao herói.
 * - Ao rolar: em vez de uma linha fina (border-b), aparece uma sombra
 *   suave em degradê, transição mais fluida do que um traço reto.
 * - Logo: mostra "PORTFÓLIO." só na home. Em qualquer outra página
 *   (categorias, Sobre, Contato) mostra "JÚLIA ROCHA", com "ROCHA" em
 *   azul, igual à home.
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[color:var(--background)]/80 backdrop-blur-md transition-shadow duration-500 ease-out ${
        scrolled ? "shadow-[0_12px_30px_-14px_rgba(0,0,0,0.15)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-xl uppercase tracking-tight"
        >
          {isHome ? (
            <span className="text-[color:var(--cobalt)]">PORTFÓLIO.</span>
          ) : (
            <span>
              JÚLIA <span className="text-[color:var(--cobalt)]">ROCHA</span>
            </span>
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
