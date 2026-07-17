import { createFileRoute } from "@tanstack/react-router";
import { EstrategiaLanding } from "@/components/landings/EstrategiaLanding";
import { estrategiaContent, site } from "@/content/portfolio";

export const Route = createFileRoute("/estrategia")({
  head: () => ({
    meta: [
      { title: `${estrategiaContent.name} — ${site.name}` },
      { name: "description", content: estrategiaContent.intro },
      { property: "og:title", content: `${estrategiaContent.name} — ${site.name}` },
      { property: "og:description", content: estrategiaContent.intro },
    ],
  }),
  component: EstrategiaLanding,
});
