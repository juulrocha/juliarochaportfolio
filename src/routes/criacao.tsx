import { createFileRoute } from "@tanstack/react-router";
import { CriacaoLanding } from "@/components/landings/CriacaoLanding";
import { criacaoContent, site } from "@/content/portfolio";

export const Route = createFileRoute("/criacao")({
  head: () => ({
    meta: [
      { title: `${criacaoContent.name} — ${site.name}` },
      { name: "description", content: criacaoContent.intro },
      { property: "og:title", content: `${criacaoContent.name} — ${site.name}` },
      { property: "og:description", content: criacaoContent.intro },
    ],
  }),
  component: CriacaoLanding,
});
