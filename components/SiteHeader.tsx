"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_URL } from "@/lib/seo";

const navItems = [
  { href: "/", label: "home" },
  { href: "/building", label: "building" },
  { href: "/community", label: "community" },
  { href: "/oddz", label: "oddz n endz" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-start justify-between gap-6">
      <Link
        href={SITE_URL}
        className="pt-1 text-[15px] lowercase text-muted no-underline hover:text-ink"
      >
        dixonfrew.com
      </Link>
      <nav
        className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 pt-1 text-[15px] lowercase"
        aria-label="Site"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "font-semibold text-ink no-underline"
                  : "font-normal text-muted no-underline hover:text-ink"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
