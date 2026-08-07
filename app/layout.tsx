import type { Metadata } from "next";
import Nav from "./components/site/Nav";
import Footer from "./components/site/Footer";
import { JsonLd } from "./lib/seo/JsonLd";
import {
  organizationSchema,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_ALT,
} from "./lib/seo/schemas";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  title: {
    default: "Resonant Studios — NDIS music production in Melbourne's west",
    template: "%s · Resonant Studios",
  },
  description:
    "A boutique, NDIS-aligned music production studio in Yarraville VIC. Personalised one-on-one sessions working towards your own music, released on Spotify under your name. Built and run by Tony Rako. Call 0480 893 303.",
  metadataBase: new URL("https://resonantstudios.com.au"),
  applicationName: "Resonant Studios",
  authors: [{ name: "Tony Rako", url: "https://resonantstudios.com.au/about" }],
  generator: "Next.js",
  keywords: [
    "NDIS music production Melbourne",
    "NDIS creative supports",
    "Resonant Studios",
    "Tony Rako",
    "music studio Yarraville",
    "NDIS music sessions",
    "accessible music studio Melbourne",
  ],
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Resonant Studios — Your song. Your story. On Spotify.",
    description:
      "NDIS-aligned music production sessions in Melbourne's west. Personalised one-on-one with Tony Rako.",
    type: "website",
    locale: "en_AU",
    url: "https://resonantstudios.com.au/",
    siteName: "Resonant Studios",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonant Studios — Your song. Your story. On Spotify.",
    description:
      "NDIS-aligned music production sessions in Melbourne's west. Personalised one-on-one with Tony Rako.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://resonantstudios.com.au/",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Anti-FOUC: apply saved theme + readability + reduced motion + contrast
  // before first paint. Mirrors AccessibilityMenu behaviour from the
  // design system; shares the `rs-a11y` localStorage key.
  const antiFouc = `(function(){try{var raw=localStorage.getItem('rs-a11y');var s=raw?JSON.parse(raw):{};var r=document.documentElement;if(s.theme==='light'||s.theme==='dark')r.setAttribute('data-theme',s.theme);if(s.readable==='easy'||s.readable==='dyslexia')r.setAttribute('data-readable',s.readable);if(s.highContrast)r.setAttribute('data-contrast','more');if(s.reduceMotion){r.style.setProperty('--dur-fast','0ms');r.style.setProperty('--dur-mid','0ms');r.style.setProperty('--dur-slow','0ms');}}catch(e){}})();`;

  return (
    <html lang="en-AU">
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFouc }} />
        {/* Sitewide Organization schema — emitted on every page */}
        <JsonLd data={organizationSchema()} id="schema-organization" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
