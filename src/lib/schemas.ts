/**
 * JSON-LD Schema Generators
 * Structured data for SEO - Google Rich Results
 */

import {
  siteConfig,
  businessInfo,
  socialLinks,
  artistInfo,
  testimonials,
  faqs,
  getAggregateRating,
} from "./seo-config";

// LocalBusiness / TattooParlor Schema
export function getLocalBusinessSchema() {
  const aggregateRating = getAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": `${siteConfig.url}/#business`,
    name: businessInfo.name,
    image: `${siteConfig.url}${siteConfig.image}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    url: siteConfig.url,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    description: siteConfig.description,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.currencyAccepted.join(", "),
    paymentAccepted: siteConfig.paymentAccepted.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.locality,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: businessInfo.hours.monday.open,
        closes: businessInfo.hours.monday.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: businessInfo.hours.saturday.open,
        closes: businessInfo.hours.saturday.close,
      },
    ],
    sameAs: [socialLinks.instagram, socialLinks.facebook].filter(Boolean),
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    knowsLanguage: siteConfig.languages,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    founder: {
      "@type": "Person",
      name: artistInfo.fullName,
      jobTitle: artistInfo.title,
    },
  };
}

// Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.logo}`,
    },
    image: `${siteConfig.url}${siteConfig.image}`,
    description: siteConfig.description,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: businessInfo.address.locality,
        addressRegion: businessInfo.address.region,
        addressCountry: businessInfo.address.countryCode,
      },
    },
    sameAs: [socialLinks.instagram, socialLinks.facebook].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "customer service",
      availableLanguage: siteConfig.languages,
    },
  };
}

// WebSite Schema with SearchAction
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: ["en-US", "es-CR"],
  };
}

// BreadcrumbList Schema Generator
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

// FAQPage Schema
export function getFAQSchema(faqItems?: typeof faqs) {
  const items = faqItems || faqs;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Review Schema for individual reviews
export function getReviewSchema(review: (typeof testimonials)[0]) {
  return {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewBody: review.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

// AggregateRating with Reviews Schema
export function getReviewsSchema() {
  const aggregateRating = getAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": `${siteConfig.url}/#business`,
    name: businessInfo.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    review: testimonials.map(getReviewSchema),
  };
}

// Service Schema for tattoo services
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    name: "Professional Tattoo Services",
    description: siteConfig.description,
    provider: {
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: [
      "Color Illustrative Tattoos",
      "Neo-Oriental Tattoos",
      "Fine Line Tattoos",
      "Japanese Style Tattoos",
      "Custom Tattoo Design",
    ],
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
  };
}

// Person Schema for Artist
export function getArtistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/artists/#artist`,
    name: artistInfo.fullName,
    jobTitle: artistInfo.title,
    description: artistInfo.experience,
    knowsAbout: artistInfo.specialties,
    knowsLanguage: artistInfo.languages,
    worksFor: {
      "@id": `${siteConfig.url}/#business`,
    },
    sameAs: [artistInfo.instagram].filter(Boolean),
  };
}

// ImageObject Schema for gallery images
export function getImageSchema(
  src: string,
  alt: string,
  caption?: string
) {
  return {
    "@type": "ImageObject",
    contentUrl: src.startsWith("http") ? src : `${siteConfig.url}${src}`,
    description: alt,
    caption: caption || alt,
    creator: {
      "@type": "Person",
      name: artistInfo.fullName,
    },
    copyrightHolder: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

// Combined Schema for homepage
export function getHomePageSchemas() {
  return [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getWebsiteSchema(),
    getBreadcrumbSchema([{ name: "Home", url: "/" }]),
  ];
}

// Combined Schema for location page
export function getLocationPageSchemas() {
  return [
    getLocalBusinessSchema(),
    getFAQSchema(),
    getServiceSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Playas del Coco", url: "/playas-del-coco" },
    ]),
  ];
}
