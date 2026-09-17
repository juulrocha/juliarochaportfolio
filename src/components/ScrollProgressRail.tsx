import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Indicador de progresso de leitura: um trilho fino e cinza fixo na
 * lateral direita, com uma bolinha azul que acompanha a rolagem da
 * página. Aparece em todas as páginas, exceto na home.
 *
 * Ao montar, a bolinha entra com uma animação de "assentar" (cresce
 * passando um pouco do tamanho final e se acomoda), em vez de já
 * aparecer pulando sem parar — isso fica só na entrada, uma vez.
 */
export function ScrollProgressRail() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  if (location.pathname === "/") return null;

  return (
    <div className="pointer-events-none fixed top-24 bottom-24 right-3 z-40 w-[2px] rounded-full bg-black/10 sm:right-5">
      <div
        className="animate-dot-settle absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[color:var(--cobalt)] shadow-sm"
        style={{ top: `${progress}%` }}
      />
    </div>
  );
}
