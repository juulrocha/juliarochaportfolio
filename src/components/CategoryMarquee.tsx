import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories, type CategorySummary, PLACEHOLDER_IMAGE } from "@/content/portfolio";

function CategoryCard({ category }: { category: CategorySummary }) {
  const hasImage = category.cover && category.cover.length > 0;
  return (
    <Link
      to={`/${category.slug}`}
      className="group relative block aspect-square w-[220px] shrink-0 overflow-hidden rounded-2xl bg-[color:var(--surface)] transition-transform duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-[color:var(--cobalt)]/25 sm:w-[280px] md:w-[340px]"
    >
      <img
        src={hasImage ? category.cover : PLACEHOLDER_IMAGE}
        alt={category.name}
        width={1024}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--cobalt)] via-[color:var(--cobalt)]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/70">
          {category.number}
        </span>
        <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}

/** Linha usada na versão empilhada (só celular): thumbnail + nome à
 * esquerda, botão "Ver tudo" à direita. */
function CategoryRow({ category }: { category: CategorySummary }) {
  const hasImage = category.cover && category.cover.length > 0;
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/5 py-4 last:border-0">
      <Link to={`/${category.slug}`} className="flex min-w-0 items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[color:var(--surface)]">
          <img
            src={hasImage ? category.cover : PLACEHOLDER_IMAGE}
            alt={category.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <span className="block text-[10px] uppercase tracking-widest text-black/40">
            {category.number}
          </span>
          <span className="block truncate text-base font-semibold tracking-tight">
            {category.name}
          </span>
        </div>
      </Link>
      <Link
        to={`/${category.slug}`}
        className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-widest text-black/60 transition-colors hover:border-[color:var(--cobalt)] hover:text-[color:var(--cobalt)]"
      >
        Ver tudo
      </Link>
    </div>
  );
}

/**
 * Carrossel de categorias.
 *
 * Desktop: sempre o carrossel horizontal com rolagem automática.
 * Celular: ao tocar em "Explore aqui", alterna para uma lista vertical
 * (uma categoria embaixo da outra) com botão "Ver tudo" em cada linha.
 */
export function CategoryMarquee() {
  const loop = [...categories, ...categories];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let raf = 0;
    const speed = 0.5;

    const tick = () => {
      const track = trackRef.current;
      if (track) {
        if (!paused) {
          const half = track.scrollWidth / 2;
          posRef.current -= speed;
          if (half > 0 && Math.abs(posRef.current) >= half) {
            posRef.current += half;
          }
          track.style.transform = `translateX(${posRef.current}px)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const pauseBriefly = () => {
    setPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setPaused(false), 2500);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("a");
    const step = (card?.offsetWidth ?? 300) + 24;
    const half = track.scrollWidth / 2;

    posRef.current -= dir * step;
    if (posRef.current > 0) posRef.current -= half;
    if (half > 0 && Math.abs(posRef.current) >= half) posRef.current += half;

    track.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    track.style.transform = `translateX(${posRef.current}px)`;
    window.setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = "";
    }, 400);

    pauseBriefly();
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto mb-6 flex max-w-7xl items-baseline justify-between px-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight sm:text-3xl">
          PROJETOS&nbsp;
        </h2>
        <button
          type="button"
          onClick={() => setMobileExpanded((v) => !v)}
          className="text-xs uppercase tracking-widest text-black/40 transition-colors hover:text-black/60 sm:pointer-events-none"
        >
          Explore aqui
        </button>
      </div>

      {/* Versão empilhada — só aparece no celular quando expandida */}
      <div className={`px-6 sm:hidden ${mobileExpanded ? "block" : "hidden"}`}>
        {categories.map((c) => (
          <CategoryRow key={c.slug} category={c} />
        ))}
      </div>

      {/* Carrossel horizontal — some no celular quando a lista está expandida */}
      <div className={mobileExpanded ? "hidden sm:block" : "block"}>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={pauseBriefly}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--background)] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--background)] to-transparent sm:w-24" />

          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollByCard(-1)}
            className="absolute left-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-black/40 ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:text-black/60 sm:left-4"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollByCard(1)}
            className="absolute right-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-black/40 ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:text-black/60 sm:right-4"
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>

          <div className="w-full overflow-hidden py-4">
            <div ref={trackRef} className="flex w-max gap-6" style={{ willChange: "transform" }}>
              {loop.map((c, i) => (
                <CategoryCard key={`${c.slug}-${i}`} category={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
