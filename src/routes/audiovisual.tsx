import { createFileRoute } from "@tanstack/react-router";
import { AudiovisualLanding } from "@/components/landings/AudiovisualLanding";
import { audiovisualContent, site } from "@/content/portfolio";

export const Route = createFileRoute("/audiovisual")({
  head: () => ({
    meta: [
      { title: `${audiovisualContent.name} — ${site.name}` },
      { name: "description", content: audiovisualContent.intro },
      { property: "og:title", content: `${audiovisualContent.name} — ${site.name}` },
      { property: "og:description", content: audiovisualContent.intro },
    ],
  }),
  component: AudiovisualLanding,
});
