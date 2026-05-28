import type { MetadataRoute } from "next";

/**
 * robots.txt for crawlers. Next.js 15 serves this at /robots.txt.
 *
 * Explicitly welcomes AI crawlers (GPTBot, PerplexityBot, ClaudeBot,
 * Google-Extended, etc.) — many sites block these by default, which
 * blocks Resonant Studios from being cited inside AI Overviews,
 * ChatGPT, Perplexity, and similar.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Generic crawlers
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
      // AI search crawlers — explicitly allow
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://resonantstudios.com.au/sitemap.xml",
    host: "https://resonantstudios.com.au",
  };
}
