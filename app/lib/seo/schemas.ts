/**
 * Schema.org JSON-LD definitions for Resonant Studios.
 *
 * Schema must match the visible page content (Google penalises drift).
 * Values here are tuned to the current live-site copy (Yarraville,
 * Core 04_104 rates, ages 15+). If the published positioning shifts to
 * Capacity Building 09_009_0117_6_3 / adults 18+, update this file
 * accordingly — every page imports from here.
 */

export const SITE_URL = "https://resonantstudios.com.au";
export const SITE_NAME = "Resonant Studios";
export const OG_IMAGE = `${SITE_URL}/library/branding/og-logo.png`;
export const OG_IMAGE_WIDTH = 1024;
export const OG_IMAGE_HEIGHT = 1024;
export const OG_IMAGE_ALT = "Resonant Studios — the brand mark on a wooden speaker chassis";

/** Sitewide Organization — emit once in root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Resonant Studios — NDIS music production",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/library/logos/wordmark-on-dark.png`,
    },
    description:
      "Boutique NDIS-aligned music production studio in Yarraville, Melbourne. Three-hour one-on-one creative sessions for self-managed and plan-managed NDIS participants.",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/about#tony`,
      name: "Tony Rako",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61480893303",
      email: "info@resonantstudios.com.au",
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: ["en-AU"],
    },
  };
}

/** LocalBusiness — emit on home + contact pages for local pack signal. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MusicGroup"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: OG_IMAGE,
    url: `${SITE_URL}/`,
    telephone: "+61480893303",
    email: "info@resonantstudios.com.au",
    priceRange: "$$",
    description:
      "Boutique NDIS-aligned music production studio in Yarraville, Melbourne. Three-hour one-on-one creative sessions for self-managed and plan-managed NDIS participants.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yarraville",
      addressRegion: "VIC",
      postalCode: "3013",
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "City", name: "Yarraville" },
      { "@type": "City", name: "Footscray" },
      { "@type": "City", name: "Seddon" },
      { "@type": "City", name: "Spotswood" },
      { "@type": "City", name: "Williamstown" },
      { "@type": "City", name: "Melbourne" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    knowsAbout: [
      "Music Production",
      "Audio Recording",
      "NDIS",
      "Accessibility",
      "Disability inclusion",
      "Creative supports",
    ],
  };
}

/** Person — emit on /about for E-E-A-T author signal. */
export function tonySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about#tony`,
    name: "Tony Rako",
    givenName: "Tony",
    familyName: "Rako",
    jobTitle: "Founder and Music Producer",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/library/photos/tony-headshot.jpg`,
    description:
      "Music producer with 25+ years of professional experience and lived experience of disability. Founder of Resonant Studios, a boutique NDIS-aligned music production studio in Yarraville.",
    knowsAbout: [
      "Music production",
      "Audio recording",
      "Mixing and mastering",
      "NDIS creative supports",
      "Disability advocacy",
      "Accessibility-first studio design",
      "Songwriting and beat-making",
    ],
  };
}

/** Service — emit on /sessions. */
export function sessionsServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/sessions#service`,
    name: "Resonant Creative Sessions",
    serviceType: "Music production session",
    description:
      "Three-hour one-on-one music production session in a professional studio. Includes songwriting, recording, beat-making, mixing, and mastering support. Tailored to each participant's creative goals.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Yarraville" },
      { "@type": "City", name: "Melbourne" },
    ],
    audience: {
      "@type": "PeopleAudience",
      audienceType: "NDIS participants",
      suggestedMinAge: 15,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Weekday session (3 hours)",
        price: "210.69",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 70.23,
          priceCurrency: "AUD",
          unitText: "HOUR",
        },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Saturday session (3 hours)",
        price: "296.49",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 98.83,
          priceCurrency: "AUD",
          unitText: "HOUR",
        },
      },
      {
        "@type": "Offer",
        name: "Sunday session (3 hours)",
        price: "382.29",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 127.43,
          priceCurrency: "AUD",
          unitText: "HOUR",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Session activities",
      itemListElement: [
        { "@type": "OfferCatalogItem", name: "Songwriting" },
        { "@type": "OfferCatalogItem", name: "Music production" },
        { "@type": "OfferCatalogItem", name: "Vocal recording" },
        { "@type": "OfferCatalogItem", name: "Instrumental recording" },
        { "@type": "OfferCatalogItem", name: "Mixing" },
        { "@type": "OfferCatalogItem", name: "Mastering" },
        { "@type": "OfferCatalogItem", name: "Professional release support" },
      ],
    },
  };
}

/** Service variant for SCs — emit on /for-support-coordinators. */
export function supportCoordinatorServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/for-support-coordinators#service`,
    name: "Resonant Creative Sessions for NDIS Support Coordinators",
    serviceType: "NDIS creative supports referral service",
    description:
      "Structured music sessions for NDIS participants. Clear invoicing for plan-managed and self-managed participants. Session notes and progress updates available to track participant goals.",
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: {
      "@type": "Audience",
      audienceType: "NDIS Support Coordinators and Plan Managers",
    },
    areaServed: [
      { "@type": "City", name: "Yarraville" },
      { "@type": "City", name: "Melbourne" },
    ],
  };
}

/** FAQ schema — emit on /ndis-funding. */
export function ndisFundingFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/ndis-funding#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I use my NDIS plan for music sessions at Resonant Studios?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sessions at Resonant Studios may be funded through NDIS plans, typically under Assistance with Social and Community Participation, when aligned with personal goals and funding categories. Resonant Studios is an unregistered NDIS provider working with self-managed and plan-managed participants.",
        },
      },
      {
        "@type": "Question",
        name: "Which NDIS plan management types does Resonant Studios accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Resonant Studios works with self-managed and plan-managed NDIS participants. Agency-managed plans are not currently supported.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a session cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sessions are three hours long. Weekday sessions are $210.69 ($70.23 per hour). Saturday sessions are $296.49 ($98.83 per hour). Sunday sessions are $382.29 ($127.43 per hour). Pricing aligns with NDIS price limits for Assistance with Social and Community Participation.",
        },
      },
      {
        "@type": "Question",
        name: "Is Resonant Studios a registered NDIS provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Resonant Studios is an unregistered NDIS provider. We work with self-managed and plan-managed participants only. Agency-managed plans require a registered provider.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find out if music sessions are covered under my NDIS plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Eligibility depends on individual plan goals and funding categories. Book a free discovery call with Tony to talk through how music sessions may align with your specific plan.",
        },
      },
    ],
  };
}

/** BreadcrumbList — one per page that's not the home page. */
export function breadcrumbSchema(pageName: string, pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${SITE_URL}${pagePath}`,
      },
    ],
  };
}
