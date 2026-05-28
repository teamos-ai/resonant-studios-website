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
        // /thank-you is a post-conversion destination, not an entry point,
        // so we keep it out of search results too. The page itself also
        // sets robots: { index: false } in its metadata as a belt-and-braces.
        disallow: ["/_next/", "/api/", "/thank-you"],
      },
    ],
    sitemap: "https://resonantstudios.com.au/sitemap.xml",
    host: "https://resonantstudios.com.au",
  };
}
