import Image from "next/image";
import { HomePressStackPhotos } from "@/components/HomePhotos";
import { HomeMyStory } from "@/components/HomeMyStory";
import { getImageMeta } from "@/lib/images";

function PressImageWithOverlay() {
  const meta = getImageMeta("/images/exp-rally-vertical.webp");

  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-lg">
      <Image
        src={meta.src}
        alt="Rowan Frew being interviewed at the eXp Realty Regional Rallies event"
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        quality={95}
        placeholder="blur"
        blurDataURL={meta.blurDataURL}
        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Checkout my Press!
        </h2>
        <div className="mt-3 flex flex-col gap-2 text-base leading-relaxed md:text-lg">
          <a
            href="https://news.northeastern.edu/2026/05/15/piraeus-bank-co-op-greece/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/90 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
          >
            → Northeastern Global News
          </a>
          <a
            href="https://cssh.northeastern.edu/this-student-flagged-risk-and-posted-a-profit-on-1m-investment-during-co-op-at-a-greek-bank/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/90 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
          >
            → CSSH Northeastern
          </a>
        </div>
      </div>
    </div>
  );
}

export function HomePressSection() {
  return (
    <>
      <div className="flex w-full max-w-md flex-col gap-4 md:col-start-1 md:-mt-[7.85rem] md:row-start-2 lg:-mt-[9.85rem]">
        <PressImageWithOverlay />
        <HomePressStackPhotos />
      </div>
      <div className="min-w-0 md:col-start-2 md:-mt-24 md:row-start-2 md:pt-[8.25rem] lg:-mt-32">
        <HomeMyStory />
      </div>
    </>
  );
}
