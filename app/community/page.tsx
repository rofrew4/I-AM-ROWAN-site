import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { EditorialRow } from "@/components/EditorialRow";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Community",
  description:
    "Rowan Frew's community work: founder and volunteer swim instructor, former National Honor Society president, eXp Realty rally volunteer, and Northeastern Water Polo Alumni Network founder.",
  path: "/community",
});

const entries = [
  {
    title: "Founder & Volunteer · Swim Instructor",
    titleHref:
      "https://docs.google.com/forms/d/e/1FAIpQLSe5iZugBLDslRXMF-7je6P9bEZ4vH4NoE75_YzugWZzn1Wa3g/viewform?usp=publish-editor",
    image: "/images/swim-instructor.webp",
    imageAlt: "Swim team celebrating in the pool",
    imageHref:
      "https://docs.google.com/forms/d/e/1FAIpQLSe5iZugBLDslRXMF-7je6P9bEZ4vH4NoE75_YzugWZzn1Wa3g/viewform?usp=publish-editor",
    description:
      "I run a volunteer organization with a mission of teaching kids how to swim.",
    link: {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSe5iZugBLDslRXMF-7je6P9bEZ4vH4NoE75_YzugWZzn1Wa3g/viewform?usp=publish-editor",
      label: "Request a swim lesson",
    },
  },
  {
    title: "Former President · National Honor Society",
    image: "/images/nhs-drive.webp",
    imageAlt: "Rowan Frew at a National Honor Society holiday food and toiletry drive",
    imagePosition: "object-top",
    description:
      "Ran the chapter through my last year of high school. Organized service hours, mentored younger members.",
  },
  {
    title: "Volunteer · eXp Fort Lauderdale Real Estate Rally",
    image: "/images/exp-rally.webp",
    imageAlt: "Rowan Frew being interviewed at the eXp Realty Regional Rallies event",
    description: "Helped organize the rally to develop my network.",
  },
  {
    title: "Founder · Northeastern Water Polo Alumni Network",
    image: "/images/water-polo-team.webp",
    imageAlt: "Northeastern men's water polo team photo",
    description:
      "Mentorship, intros, keeping the bonds from evaporating after graduation.",
  },
];

export default function CommunityPage() {
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
