import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Oyster Farm Plans",
  description:
    "Rowan Frew's detailed plans for starting an oyster farm: site requirements, gear, economics, permitting, and Rhode Island coastal considerations.",
  path: "/oddz/oyster-farm-plans",
});

const siteRequirements = [
  "Certified shellfishing waters — not in a restricted or buffer zone.",
  "4–12 ft deep at low tide with steady tidal flow.",
  "Sand or firm mud bottom — no eelgrass beds (siting over eelgrass is prohibited).",
  "500 ft from existing leases, clear of moorings, channels, and swim areas.",
];

const permittingSteps = [
  {
    title: "Pre-application call",
    body: "Free 15-min chat with CRMC's Aquaculture Coordinator (401-783-3370) to confirm the site is viable before formal filing.",
  },
  {
    title: "Submit application",
    body: "Site coordinates, depth contours at low tide, gear plan, and a short operational plan. Filing fee $50.",
  },
  {
    title: "Mark the corners",
    body: "Once approved, install four standard 11\" poly buoys at the corners. Then we're cleared to deploy gear.",
  },
];

const farmNeeds = [
  "2–6 cages (OysterGro 6-bag or similar — bottom or floating) — holds 12–36 mesh bags total.",
  "Anchors, lines, mesh bags, marker buoys — full rigging.",
  "8,000 oyster seed at 10–15mm from a Northeast hatchery (Mook, Roger Williams, ARC).",
  "Boat access + basic tools — flip tools, sorting trays, totes, gloves.",
];

const farmOperations = [
  {
    title: "Stock April–August",
    body: "Seed goes into mesh bags, bags into cages. Water needs to be 50°F+ for growth.",
  },
  {
    title: "3–4 hrs/week April–November",
    body: "Boat out, flip cages to kill fouling, grade for size.",
  },
  {
    title: "Off-season",
    body: "Minimal. Cages can sit ~10 days between visits without trouble.",
  },
  {
    title: "First harvest in ~20 months",
    body: "About 5,000 market oysters from 8K seed (~40% mortality is normal).",
  },
];

const costs = [
  {
    item: "CRMC Commercial Viability Permit",
    detail: "application + first-year fee",
    amount: "$50",
  },
  {
    item: "Cages, 2x",
    detail: "~$300 each, bottom or floating; add cages later as needed",
    amount: "$600",
  },
  {
    item: "Mesh bags, anchors, lines, marker buoys",
    detail: "full rigging kit",
    amount: "$400",
  },
  {
    item: "Oyster seed, 8,000",
    detail: "10–15mm, $20/1K from RI or ME hatchery",
    amount: "$160",
  },
  {
    item: "Tools, totes, gloves, misc.",
    detail: "flip tools, sorting trays, ~10% contingency",
    amount: "$290",
  },
];

const yieldStats = [
  {
    label: "Seed in",
    value: "8,000",
    detail: "10–15mm seed, stocked April–August",
  },
  {
    label: "Capacity",
    value: "3,000–9,000",
    detail: "across 2–6 cages; site fits 20+ if expanded",
  },
  {
    label: "Harvest out",
    value: "~5,000",
    detail: "market oysters after ~40% mortality",
  },
  {
    label: "Sale value",
    value: "$3K–$5K",
    detail: "one-time sale allowed under CVP",
  },
];

function SectionNumber({ children }: { children: string }) {
  return (
    <span className="text-[13px] font-medium tracking-[0.12em] text-[#b8956a]">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-1 text-[15px] font-semibold uppercase tracking-[0.08em] text-[#1a3a5c]">
      {children}
    </h2>
  );
}

export default function OysterFarmPlansPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-16 md:px-8">
      <SiteHeader />

      <article className="mt-16">
        <header className="border-b border-[#e8e0d4] pb-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#b8956a]">
            Getting started
          </p>
          <h1 className="mt-2 text-[32px] font-semibold leading-tight text-[#1a3a5c] md:text-[36px]">
            Oyster Farm · Jamestown, RI
          </h1>
        </header>

        <section className="border-b border-[#e8e0d4] py-8">
          <SectionNumber>01</SectionNumber>
          <SectionTitle>Finding a site</SectionTitle>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3d3d3d]">
            Pick a{" "}
            <strong className="font-semibold text-[#1a3a5c]">
              25 × 40 ft area
            </strong>{" "}
            (1,000 sq ft, the CVP maximum) in Jamestown waters that meets all
            of the following:
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {siteRequirements.map((item) => (
              <p
                key={item}
                className="border-l-2 border-[#e8e0d4] pl-4 text-[14px] leading-relaxed text-[#3d3d3d]"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-md bg-[#faf7f2] px-5 py-4">
            <p className="text-[14px] leading-relaxed text-[#3d3d3d]">
              <strong className="font-semibold text-[#1a3a5c]">
                How to scout it:
              </strong>{" "}
              use the RIDEM Aquaculture Lease Map (search &ldquo;RIDEM Marine
              Fisheries Maps&rdquo;) to see existing leases and restricted
              waters. Best candidate area is the{" "}
              <strong className="font-semibold text-[#1a3a5c]">
                West Passage just south of the Dutch Harbor lease cluster
              </strong>{" "}
              — productive water with experienced growers nearby. Worth a day trip
              to scout in person before filing.
            </p>
          </div>
        </section>

        <section className="border-b border-[#e8e0d4] py-8">
          <SectionNumber>02</SectionNumber>
          <SectionTitle>Permitting process</SectionTitle>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3d3d3d]">
            Apply for a{" "}
            <strong className="font-semibold text-[#1a3a5c]">
              Commercial Viability Permit (CVP)
            </strong>{" "}
            from the Rhode Island Coastal Resources Management Council. This is
            the right permit for a small test site — no public hearing required,
            approved in 2–4 months, valid for three years.
          </p>
          <div className="mt-6 space-y-5">
            {permittingSteps.map((step) => (
              <div key={step.title}>
                <h3 className="text-[14px] font-semibold text-[#1a3a5c]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#3d3d3d]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#e8e0d4] py-8">
          <SectionNumber>03</SectionNumber>
          <SectionTitle>Farm setup</SectionTitle>
          <div className="mt-5 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#1a3a5c]">
                What we need
              </h3>
              <ul className="mt-3 space-y-3">
                {farmNeeds.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#e8e0d4] pl-4 text-[14px] leading-relaxed text-[#3d3d3d]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#1a3a5c]">
                How it works
              </h3>
              <div className="mt-3 space-y-4">
                {farmOperations.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-[14px] font-semibold text-[#1a3a5c]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#3d3d3d]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8e0d4] py-8">
          <SectionNumber>04</SectionNumber>
          <SectionTitle>Cost breakdown</SectionTitle>
          <div className="mt-5 overflow-hidden rounded-md bg-[#faf7f2]">
            {costs.map((row, index) => (
              <div
                key={row.item}
                className={`flex items-start justify-between gap-4 px-5 py-4 ${
                  index < costs.length - 1 ? "border-b border-[#e8e0d4]" : ""
                }`}
              >
                <div>
                  <p className="text-[14px] font-medium text-[#1a3a5c]">
                    {row.item}
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#6b6b6b]">
                    {row.detail}
                  </p>
                </div>
                <p className="shrink-0 text-[14px] font-semibold text-[#1a3a5c]">
                  {row.amount}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-[#d4c9b8] bg-[#f0ebe3] px-5 py-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1a3a5c]">
                Year one
              </p>
              <p className="text-[18px] font-semibold text-[#1a3a5c]">$1,500</p>
            </div>
            <div className="flex items-center justify-between border-t border-[#e8e0d4] px-5 py-3">
              <p className="text-[13px] text-[#6b6b6b]">Annual after</p>
              <p className="text-[14px] font-medium text-[#1a3a5c]">~$500</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <SectionNumber>05</SectionNumber>
          <SectionTitle>Yield math</SectionTitle>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {yieldStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-[#e8e0d4] bg-white px-4 py-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#b8956a]">
                  {stat.label}
                </p>
                <p className="mt-2 text-[22px] font-semibold text-[#1a3a5c]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#6b6b6b]">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-[15px] text-muted">
          <Link href="/oddz">← back to oddz n endz</Link>
        </p>
      </article>
    </main>
  );
}
