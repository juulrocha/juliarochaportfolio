import { CategoryLayout } from "@/components/CategoryLayout";
import { estrategiaContent, type StrategyCase } from "@/content/portfolio";

/**
 * Landing 04 — Estratégia
 * Cases modulares, cada um com 6 blocos em grade (Contexto, Objetivo,
 * Diagnóstico, Direcionamento, Solução, Impacto).
 */
export function EstrategiaLanding() {
  const c = estrategiaContent;

  return (
    <CategoryLayout number={c.number} name={c.name} intro={c.intro}>
      <div className="space-y-24 md:space-y-32">
        {c.cases.map((caseItem, i) => (
          <CaseBlock key={i} caseItem={caseItem} index={i} />
        ))}
      </div>
    </CategoryLayout>
  );
}

const LABELS: Array<{ key: keyof StrategyCase["blocks"]; label: string }> = [
  { key: "contexto",       label: "Contexto" },
  { key: "objetivo",       label: "Objetivo" },
  { key: "diagnostico",    label: "Diagnóstico" },
  { key: "direcionamento", label: "Direcionamento" },
  { key: "solucao",        label: "Solução" },
  { key: "impacto",        label: "Impacto" },
];

function CaseBlock({ caseItem, index }: { caseItem: StrategyCase; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <section className="border-t border-black/10 pt-12 md:pt-16">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
          {num}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight sm:text-4xl md:text-5xl">
          {caseItem.title}
        </h2>
      </div>

      <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {LABELS.map(({ key, label }) => (
          <div key={key}>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[color:var(--cobalt)]">
              {label}
            </div>
            <p className="font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/75">
              {caseItem.blocks[key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
