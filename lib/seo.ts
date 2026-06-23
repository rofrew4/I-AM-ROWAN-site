import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dizonfrew.com";

export const SITE_NAME = "Rowan Frew";
export const SITE_BRAND = "I AM ROWAN";

export const DEFAULT_DESCRIPTION =
  "Rowan Frew is the founder and CEO of Chesterbrook, building custom AI software for commercial real estate and property management. Northeastern alum, former ZoneIQ co-founder, swim volunteer, and builder.";

export const OG_IMAGE = {
  url: "/images/profile.webp",
  width: 1200,
  height: 1391,
  alt: "Rowan Frew",
};

export const SITE_KEYWORDS = [
  "Rowan Frew",
  "dizonfrew",
  "Chesterbrook",
  "Chesterbrook AI",
  "commercial real estate software",
  "property management software",
  "Northeastern University",
  "ZoneIQ",
  "founder",
  "CEO",
  "entrepreneur",
  "McLean Virginia",
];

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_BRAND,
      locale: "en_US",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rowan Frew | Founder & CEO of Chesterbrook",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_BRAND,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Rowan Frew | Founder & CEO of Chesterbrook",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_BRAND,
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowan Frew | Founder & CEO of Chesterbrook",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
