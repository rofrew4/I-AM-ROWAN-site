import { SITE_BRAND, SITE_NAME, SITE_URL } from "@/lib/seo";

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_BRAND,
    alternateName: SITE_NAME,
    url: SITE_URL,
    description:
      "Personal site of Rowan Frew — founder, builder, and CEO of Chesterbrook.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
