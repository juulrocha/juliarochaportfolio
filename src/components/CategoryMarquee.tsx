import { Link } from "@tanstack/react-router";
import { categories, type Category } from "@/content/portfolio";

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/${category.slug}`}
      className="group relative block aspect-square w-[280px] shrink-0 overflow-hidden rounded-2xl bg-[color:var(--surface)] transition-all duration-500 hover:shadow-2xl hover:shadow-[color:var(--cobalt)]/30 md:w-[340px]"
    >
      <img
        src={category.cover}
        alt={category.name}
        loading="lazy"
        width={1024}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--cobalt)] via-[color:var(--cobalt)]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-8">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-white/70">
          {category.number}
        </span>
        <h3 className="text-2xl font-extrabold tracking-tight text-white">{category.name}</h3>
      </div>
    </Link>
  );
}

export function CategoryMarquee() {
  // Duplicate the list so translateX(-50%) creates a seamless loop.
  const loop = [...categories, ...categories];

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto mb-10 flex max-w-7xl items-baseline justify-between px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight">PROJETOS&nbsp;</h2>
        <span className="font-mono text-sm text-[color:var(--cobalt)] uppercase">
          EXPLORAR
        </span>
      </div>

      <div className="group relative">
        {/* Fades on the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--background)] to-transparent" />

        <div className="animate-marquee pause-on-hover flex w-max gap-6 py-4">
          {loop.map((c, i) => (
            <CategoryCard key={`${c.slug}-${i}`} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
