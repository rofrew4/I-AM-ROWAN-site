import { HomeHeroText } from "@/components/HomeHero";
import { HomePhotoRight } from "@/components/HomePhotos";
import { HomePressSection } from "@/components/HomePressSection";

export function HomeMain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
      <div className="py-6 md:py-8">
        <HomeHeroText />
      </div>
      <div className="hidden justify-center self-start py-6 md:flex md:py-8">
        <HomePhotoRight />
      </div>
      <HomePressSection />
    </div>
  );
}
