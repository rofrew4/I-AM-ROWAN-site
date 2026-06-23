import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

interface SubPageProps {
  children: ReactNode;
}

export function SubPage({ children }: SubPageProps) {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:px-8">
      <SiteHeader />
      <div className="mt-16 space-y-12">{children}</div>
    </main>
  );
}
