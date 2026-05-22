import type { Metadata } from "next";
import Nav from "./components/site/Nav";
import Footer from "./components/site/Footer";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  title: {
    default: "Resonant Studios — NDIS music production in Melbourne's west",
    template: "%s · Resonant Studios",
  },
  description:
    "A boutique, NDIS-aligned music production studio at Kindred Studios in Yarraville VIC. Twelve weeks of one-on-one sessions ending with your finished song released on Spotify under your name. Built and run by Tony Rako. Call 0456 225 315.",
  metadataBase: new URL("https://resonantstudios.com.au"),
  openGraph: {
    title: "Resonant Studios — Your song. Your story. On Spotify.",
    description:
      "NDIS-aligned music production sessions in Melbourne's west. Personalised one-on-one with Tony Rako.",
    type: "website",
    locale: "en_AU",
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
