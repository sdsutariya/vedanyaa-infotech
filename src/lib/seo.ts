import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { SITE, absoluteUrl } from "./site";

export function canonicalLink(path: string) {
  return { rel: "canonical" as const, href: absoluteUrl(path) };
}

export function ogMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: absoluteUrl(path) },
    { property: "og:type", content: "website" },
    { property: "og:image", content: absoluteUrl("/favicon.png") },
  ];
}

export function jsonLdScript(data: object) {
  return { type: "application/ld+json" as const, children: JSON.stringify(data) };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/favicon.png"),
    description: SITE.description,
    sameAs: [] as string[],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "customer support",
      areaServed: "Worldwide",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description:
      "Software development company specializing in MERN, Next.js, AI-driven apps, e-commerce and custom ERP.",
    url: SITE.url,
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "ERP Development",
      "MERN Stack",
      "Next.js Development",
      "AI Applications",
      "E-commerce Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/services#${s.slug}`,
          name: s.title,
          description: s.desc,
          provider: { "@type": "Organization", name: SITE.name },
        },
      })),
    },
  };
}

export function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vedanyaa Infotech Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#${s.slug}`,
        name: s.title,
        description: s.desc,
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        areaServed: "Worldwide",
      },
    })),
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    url: absoluteUrl("/about"),
    description:
      "Vedanyaa Infotech is a boutique software studio built on craftsmanship, transparency and long-term partnership.",
    mainEntity: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: absoluteUrl("/contact"),
    description: `Contact ${SITE.name} for software, ERP, MERN, Next.js, AI or e-commerce projects.`,
  };
}
