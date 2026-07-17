import { Instagram, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/portfolio";

const findSocial = (label: string) =>
  site.contact.socials.find((s) => s.label.toLowerCase() === label.toLowerCase());

export function SiteFooter() {
  const instagram = findSocial("Instagram");
  const linkedin = findSocial("LinkedIn");

  const items: Array<{ label: string; href: string; Icon: typeof Instagram }> = [];
  if (instagram) items.push({ label: "Instagram", href: instagram.href, Icon: Instagram });
  if (linkedin)  items.push({ label: "LinkedIn",  href: linkedin.href,  Icon: Linkedin });
  items.push({ label: "E-mail", href: `mailto:${site.contact.email}`, Icon: Mail });

  return (
    <footer className="border-t border-black/5 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-sm font-medium opacity-40">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
        <div className="flex gap-3">
          {items.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex size-10 items-center justify-center rounded-full border border-black/10 text-black/70 transition-all hover:border-[color:var(--cobalt)] hover:bg-[color:var(--cobalt)] hover:text-white"
              aria-label={label}
            >
              <Icon size={16} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
