import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { HomeHero } from "@/components/HomeHero";
import { HomePressSection } from "@/components/HomePressSection";

export const metadata: Metadata = {
  title: "I AM ROWAN",
};

export default function HomePage() {
  return (
    <EditorialPage variant="home">
      <HomeHero />
      <HomePressSection />
    </EditorialPage>
  );
}
