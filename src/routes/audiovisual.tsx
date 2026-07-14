import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryBySlug, site } from "@/content/portfolio";

const category = categoryBySlug("audiovisual");

export const Route = createFileRoute("/audiovisual")({
  head: () => ({
    meta: [
      { title: `${category.name} — ${site.name}` },
      { name: "description", content: category.tagline },
      { property: "og:title", content: `${category.name} — ${site.name}` },
      { property: "og:description", content: category.tagline },
      { property: "og:image", content: category.cover },
    ],
  }),
  component: () => <CategoryPage category={category} />,
});
