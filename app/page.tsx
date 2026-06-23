import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { HomeHero } from "@/components/HomeHero";
import { HomePressSection } from "@/components/HomePressSection";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { WebSiteJsonLd } from "@/components/WebSiteJsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "I AM ROWAN",
  description:
    "Hey! I'm Rowan Frew, founder and CEO of Chesterbrook. I co-founded several businesses at Northeastern University, scaling one to $470k in revenue. I also run a volunteer swim organization for kids.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <WebSiteJsonLd />
      <EditorialPage variant="home">
        <HomeHero />
        <HomePressSection />
      </EditorialPage>
    </>
  );
}
