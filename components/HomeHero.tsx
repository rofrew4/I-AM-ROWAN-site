import { HomePhotoRight } from "@/components/HomePhotos";
import { SITE_URL } from "@/lib/seo";

export function HomeHero() {
  return (
    <section className="py-6 md:py-8">
      <div className="flex items-start justify-between gap-6 md:gap-10">
        <div className="min-w-0 max-w-md flex-1">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            I AM ROWAN
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            <a href={SITE_URL} className="text-gray-500 no-underline hover:text-gray-700">
              dixonfrew.com
            </a>
          </p>
          <div className="mt-4 text-base leading-relaxed text-gray-600 md:mt-5 md:text-lg">
            <p>
              Hey! I&apos;m Rowan Frew. I&apos;m the founder and CEO of{" "}
              <a
                href="https://chesterbrookai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chesterbrook
              </a>
              .
            </p>
            <p className="mt-4">
              Previously, I co-founded several businesses while attending
              Northeastern University, scaling one to $470k in revenue.
            </p>
            <p className="mt-4">
              I also run a volunteer organization with a mission of teaching kids
              how to swim.
            </p>
          </div>
        </div>
        <HomePhotoRight />
      </div>
    </section>
  );
}
