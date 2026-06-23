import { EditorialImage } from "@/components/EditorialRow";
import { ReachOut } from "@/components/ReachOut";

export function HomePressSection() {
  return (
    <section className="grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2">
      <div className="max-w-md">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Checkout my Press!
        </h2>
        <div className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
          <p>
            <a
              href="https://news.northeastern.edu/2026/05/15/piraeus-bank-co-op-greece/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Northeastern Global News
            </a>
            {" · "}
            <a
              href="https://cssh.northeastern.edu/this-student-flagged-risk-and-posted-a-profit-on-1m-investment-during-co-op-at-a-greek-bank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSSH Northeastern
            </a>
          </p>
        </div>
        <ReachOut embedded />
      </div>
      <EditorialImage
        src="/images/exp-rally-vertical.webp"
        alt="Rowan Frew being interviewed at the eXp Realty Regional Rallies event"
        aspectClass="aspect-[3/4]"
        scale={0.7}
      />
    </section>
  );
}
