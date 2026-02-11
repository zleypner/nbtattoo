import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://noboritattoo.com";
  const currentDate = new Date();

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Location landing page - critical for local SEO
    {
      url: `${baseUrl}/playas-del-coco`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Gallery - frequently updated with new work
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Artist page - important for credibility
    {
      url: `${baseUrl}/artists`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Booking page - conversion focused
    {
      url: `${baseUrl}/booking`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Contact page - NAP and location info
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
