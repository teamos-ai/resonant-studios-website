import type { MetadataRoute } from "next";

/**
 * robots.txt for crawlers. Next.js 15 serves this at /robots.txt.
 * Currently allow-all — no auth-gated routes or API surface to hide.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block Next.js internal routes from being indexed (still allowed
        // to fetch — we just don't want them in search results).
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://resonantstudios.com.au/sitemap.xml",
    host: "https://resonantstudios.com.au",
  };
}
