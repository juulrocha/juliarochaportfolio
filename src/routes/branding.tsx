import { createFileRoute } from "@tanstack/react-router";
import { BrandingLanding } from "@/components/landings/BrandingLanding";
import { brandingContent } from "@/content/portfolio";
import { site } from "@/content/portfolio";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: `${brandingContent.name} — ${site.name}` },
      { name: "description", content: brandingContent.intro },
      { property: "og:title", content: `${brandingContent.name} — ${site.name}` },
      { property: "og:description", content: brandingContent.intro },
    ],
  }),
  component: BrandingLanding,
});
