import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { HomeMain } from "@/components/HomeMain";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { WebSiteJsonLd } from "@/components/WebSiteJsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Rowan Frew | dixonfrew.com",
  description:
    "Hey! I'm Rowan Frew (dixonfrew.com), founder and CEO of Chesterbrook. I co-founded several businesses at Northeastern University, scaling one to $470k in revenue. I also run a volunteer swim organization for kids.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <WebSiteJsonLd />
      <EditorialPage variant="home">
        <HomeMain />
      </EditorialPage>
    </>
  );
}
