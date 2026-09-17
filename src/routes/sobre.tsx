import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { EditableImage } from "@/components/Placeholder";
import { site } from "@/content/portfolio";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: `Sobre — ${site.name}` },
      { name: "description", content: site.about.body[0] },
      { property: "og:title", content: `Sobre — ${site.name}` },
      { property: "og:description", content: site.about.body[0] },
    ],
  }),
  component: Sobre,
});

/** Parágrafo que aparece em fade + leve subida quando entra na tela. */
function FadeParagraph({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </p>
  );
}

/** Linha de ícones das ferramentas: entra em fade uma vez, sem loop. */
function ToolsRow({ tools }: { tools: typeof site.about.tools }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap items-center gap-3 sm:gap-4">
      {tools.map((t, i) => (
        <span
          key={t.name}
          title={t.name}
          className={`grid size-11 place-items-center rounded-full bg-white ring-1 ring-black/10 transition-all duration-500 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: visible ? `${i * 90}ms` : "0ms" }}
        >
          <img
            src={t.logo}
            alt={t.name}
            loading="lazy"
            width={24}
            height={24}
            className="size-5 object-contain"
          />
        </span>
      ))}
    </div>
  );
}

/**
 * Setinha cinza indicando "tem mais texto abaixo".
 * Só aparece depois que a pessoa começa a rolar, e some quando o
 * último parágrafo já foi lido (entrou na tela).
 */
function ScrollHint({ endRef }: { endRef: React.RefObject<HTMLElement> }) {
  const [scrolled, setScrolled] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setReachedEnd(entry.isIntersecting),
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [endRef]);

  if (!scrolled || reachedEnd) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-30 -translate-x-1/2 text-black/30 animate-bounce">
      <ChevronDown size={22} strokeWidth={1.75} />
    </div>
  );
}

function Sobre() {
  const titleWords = site.about.title.trim().split(" ");
  const lastWord = titleWords.pop() ?? "";
  const firstWords = titleWords.join(" ");
  const lastParagraphRef = useRef<HTMLParagraphElement>(null);
  const lastIndex = site.about.body.length - 1;

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1D1D1F]">
      <SiteNav />
      <ScrollHint endRef={lastParagraphRef} />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Banner horizontal, com fade suave na base */}
          <div className="relative overflow-hidden rounded-2xl">
            <EditableImage
              src={site.about.banner}
              alt={site.about.title}
              className="aspect-[21/9] w-full rounded-2xl object-cover md:aspect-[24/8]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--background)] via-[color:var(--background)]/40 to-transparent md:h-32" />
          </div>

          {/* Eyebrow + título sobrepostos levemente ao banner */}
          <div className="relative z-10 -mt-8 px-2 md:-mt-12">
            <span className="mb-3 block text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
              {site.about.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight md:text-6xl">
              {firstWords} <span className="text-[color:var(--cobalt)]">{lastWord}</span>
            </h1>
          </div>

          {/* Texto — alinhado à esquerda, logo abaixo do título.
              Primeiro parágrafo em fonte manuscrita, como uma frase de
              abertura mais pessoal. Cada parágrafo entra em fade ao
              rolar até ele. */}
          <div className="mt-10 max-w-2xl space-y-6 font-[family-name:var(--font-editorial)] text-base leading-relaxed text-black/70 md:mt-14 md:text-lg">
            {site.about.body.map((p, i) => {
              if (i === lastIndex) {
                return (
                  <p
                    key={i}
                    ref={lastParagraphRef}
                    className="transition-all duration-700 ease-out"
                  >
                    {p}
                  </p>
                );
              }
              if (i === 0) {
                return (
                  <FadeParagraph
                    key={i}
                    className="font-[family-name:'Caveat',cursive] text-3xl leading-[1.15] text-black/80 sm:text-4xl"
                  >
                    {p}
                  </FadeParagraph>
                );
              }
              return <FadeParagraph key={i}>{p}</FadeParagraph>;
            })}
          </div>

          {/* Bloco complementar — currículo em destaque, depois ferramentas */}
          <div className="mt-20 border-t border-black/10 pt-10 md:mt-24">
            <a
              href={site.about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-subtle-bounce inline-block rounded-full bg-[color:var(--cobalt)] px-6 py-3 text-xs uppercase tracking-widest text-white transition-opacity duration-300 hover:opacity-90"
            >
              {site.about.resumeLabel}
            </a>

            <div className="mt-10">
              <span className="mb-3 block text-xs uppercase tracking-widest text-black/40">
                Ferramentas
              </span>
              <ToolsRow tools={site.about.tools} />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
