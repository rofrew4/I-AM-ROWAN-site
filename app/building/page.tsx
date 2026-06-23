import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { EditorialRow } from "@/components/EditorialRow";

export const metadata: Metadata = {
  title: "Building — I AM ROWAN",
};

const entries = [
  {
    title: "Chesterbrook · Founder & CEO",
    titleHref: "https://chesterbrookai.com",
    image: "/images/chesterbrook.webp",
    imageAlt: "Chesterbrook website homepage",
    imageHref: "https://chesterbrookai.com",
    description:
      "Custom software for commercial real estate and property management firms. Solo founder, growing team. Currently working with clients across the US and Canada.",
    url: "chesterbrookai.com",
  },
  {
    title: "ZoneIQ · co-founder",
    image: "/images/zoneiq.webp",
    imageAlt: "Rowan Frew presenting ZoneIQ on stage",
    description:
      "Scaled to $470K revenue in Spring semester of senior year. Built with college friends while at Northeastern University. AI parcel intelligence for CRE developers and brokers.",
  },
  {
    title: "Personal CRM",
    image: "/images/crm.webp",
    imageAlt: "Blurred preview of a personal CRM kanban dashboard",
    description:
      "Got tired of paying for tools that didn't fit how I run sales, so I built my own. Kanban pipeline, Instantly sync, follow-up staleness flags. Next.js, Supabase, Vercel.",
  },
  {
    title: "HouseFly",
    image: "/images/housefly.webp",
    imageAlt: "HouseFly team holding DEMO Day award checks at Northeastern",
    description:
      "Roommate-finding app for college students, built sophomore year. Pitched at Northeastern DEMO Day and placed 2nd. Won 1st place in the marketing competition.",
  },
];

export default function BuildingPage() {
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
