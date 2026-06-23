import {
  SITE_BRAND,
  SITE_HANDLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: [SITE_BRAND, SITE_HANDLE, "dixonfrew.com"],
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.webp`,
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Chesterbrook",
      url: "https://chesterbrookai.com",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
    },
    email: "mailto:rofrew4@gmail.com",
    telephone: "+1-571-263-3755",
    sameAs: [
      "https://www.linkedin.com/in/rowan-frew-b50806237/",
      "https://chesterbrookai.com",
    ],
    description:
      "Founder and CEO of Chesterbrook. Previously co-founded ZoneIQ and other ventures at Northeastern University.",
    knowsAbout: [
      "Commercial real estate",
      "Artificial intelligence",
      "Software engineering",
      "Entrepreneurship",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
