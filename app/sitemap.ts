import type { MetadataRoute } from "next";

const SITE = "https://resonantstudios.com.au";

/**
 * Sitemap for crawlers. Next.js 15 serves this at /sitemap.xml.
 * Update the routes list as new pages ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/book", priority: 0.95, changeFrequency: "weekly" },
    { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sessions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ndis-funding", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/for-support-coordinators", priority: 0.85, changeFrequency: "monthly" },
    { path: "/free-resources/coordinators", priority: 0.7, changeFrequency: "monthly" },
    { path: "/free-resources/parents", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.75, changeFrequency: "monthly" },
    { path: "/intake", priority: 0.7, changeFrequency: "monthly" },
    { path: "/connect", priority: 0.6, changeFrequency: "monthly" },
    { path: "/accessibility", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
