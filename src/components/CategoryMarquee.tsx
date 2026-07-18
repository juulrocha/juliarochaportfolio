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
        loading="lazy"
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
                  <span className="text-xs font-semibold tracking-wider text-white/80 mt-2 block uppercase text-left">
            COMECE AQUI
          </span>

      </div>
    </Link>
  );
}

export function CategoryMarquee() {
  // Lista duplicada para loop infinito.
  const loop = [...categories, ...categories];
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const speed = 0.5;

    const tick = () => {
      if (!paused && el) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += speed;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
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
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("a");
    const step = (card?.offsetWidth ?? 300) + 24;
    const half = el.scrollWidth / 2;
    if (dir === -1 && el.scrollLeft - step < 0) {
      el.scrollLeft += half;
    }
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    pauseBriefly();
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto mb-6 flex max-w-7xl items-baseline justify-between px-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight sm:text-3xl">
          PROJETOS&nbsp;
        </h2>
        <span className="font-mono text-xs uppercase text-[color:var(--cobalt)] sm:text-sm">
          EXPLORAR
        </span>
      </div>

      <div className="relative">
        {/* Fades laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--background)] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--background)] to-transparent sm:w-24" />

        {/* Setas */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollByCard(-1)}
          className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[color:var(--cobalt)] shadow-lg ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:scale-105 sm:left-4"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => scrollByCard(1)}
          className="absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[color:var(--cobalt)] shadow-lg ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:scale-105 sm:right-4"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>

        <div
          ref={scrollerRef}
          className="flex w-full gap-6 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={pauseBriefly}
        >
          {loop.map((c, i) => (
            <CategoryCard key={`${c.slug}-${i}`} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
