import { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

interface EditorialPageProps {
  variant?: "home" | "sub";
  children: ReactNode;
}

export function EditorialPage({ variant = "sub", children }: EditorialPageProps) {
  return (
    <main
      className={`mx-auto max-w-5xl px-6 pb-20 ${
        variant === "home" ? "pt-20" : "pt-16"
      }`}
    >
      <SiteHeader />
      <div className={variant === "home" ? "mt-8" : "mt-16"}>
        {children}
        {variant === "home" && <SiteFooter />}
      </div>
    </main>
  );
}
