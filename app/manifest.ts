import type { MetadataRoute } from "next";
import { SITE_BRAND, SITE_NAME, SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_BRAND}`,
    short_name: SITE_BRAND,
    description:
      "Personal site of Rowan Frew, founder and CEO of Chesterbrook.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#141414",
    lang: "en-US",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    id: SITE_URL,
  };
}
