import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { EditorialRow } from "@/components/EditorialRow";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Oddz n Endz",
  description:
    "Rowan Frew's interests outside work: oyster farm plans, water polo, boat projects, surfing, spearfishing, and track.",
  path: "/oddz",
});

const boatWork = [
  "Fixing the electrical system",
  "Breaking the electrical system",
  "Rewiring the fuel gauge",
  "Repatching hull damage",
  "Painting and polish",
  "Engine work",
];

const entries = [
  {
    title: "Plans for an oyster farm",
    image: "/images/oddz-oyster.webp",
    imageAlt: "Coming soon stamp for the oyster farm plans",
    description:
      "I've spent an unhealthy amount of time planning this out.",
    link: { href: "/oddz/oyster-farm-plans", label: "plans", external: false },
  },
  {
    title: "Water Polo",
    image: "/images/water-polo-action.webp",
    imageAlt: "Rowan Frew throwing a water polo ball during a game",
    description:
      "Former co-Captain of Northeastern University Water Polo team.",
  },
  {
    title: "Fixing my boat",
    image: "/images/boat-engine.webp",
    imageAlt: "Outboard motor engine bay on a Key West center console",
    description: (
      <>
        <p>Work I&apos;ve done on a 1720 Key West center console:</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          {boatWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Learning to surf",
    image: "/images/surfing-board.webp",
    imageAlt: "Surfboard strapped to the roof of a car at sunset",
    description: "Certified kook.",
  },
  {
    title: "Spearfishing",
    image: "/images/spearfishing-ocean.webp",
    imageAlt:
      "Rowan Frew spearfishing in the ocean with his dog on the rocks",
    description:
      "Mostly Stripers and Tautog. I like to make sushi with my catch :)",
  },
  {
    title: "Track",
    image: "/images/oddz-track.webp",
    imageAlt: "Rowan Frew sprinting on a track at night",
    description:
      "Ex 4:30 minute miler. I don't run anymore because it hurts.",
  },
];

export default function OddzPage() {
  return (
    <EditorialPage>
      {entries.map((entry, index) => (
        <EditorialRow
          key={entry.title}
          entry={entry}
          index={index}
          priorityImage={index === 0}
        />
      ))}
    </EditorialPage>
  );
}
