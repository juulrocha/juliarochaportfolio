import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[color:var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-xl uppercase tracking-tight text-[color:var(--cobalt)]"
        >
          PORTFÓLIO.
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
