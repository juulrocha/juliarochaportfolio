import { site } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-sm font-medium opacity-40">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
        <div className="flex gap-3">
          {site.contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-black/10 text-xs font-semibold tracking-wide transition-all hover:border-[color:var(--cobalt)] hover:bg-[color:var(--cobalt)] hover:text-white"
              aria-label={s.label}
            >
              {s.label.slice(0, 2).toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
