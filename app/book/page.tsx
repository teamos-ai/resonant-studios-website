import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book a call — A relaxed 30–45 minute conversation",
  description:
    "Book a free 30–45 minute discovery call with Tony Rako. Talk through your NDIS plan, your goals, and whether Resonant Studios is the right fit. No pressure, no signing yet.",
  alternates: { canonical: "https://resonantstudios.com.au/book" },
  openGraph: {
    title: "Book a discovery call · Resonant Studios",
    description:
      "Free 30–45 minute call with Tony. No pressure, no signing yet.",
    url: "https://resonantstudios.com.au/book",
  },
};

// Go High Level booking calendar — provided 2026-05-22 (replaces earlier form).
// Calendar ID: fIIJeYghi1LiBVfnmbTe
// Bundles date/time picking + form questions into a single widget.
// Direct link: https://link.teamos.ai/widget/booking/fIIJeYghi1LiBVfnmbTe
const GHL_CAL_ID = "fIIJeYghi1LiBVfnmbTe";
const GHL_CAL_SRC = `https://link.teamos.ai/widget/booking/${GHL_CAL_ID}`;
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

export default function BookPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="book-hero"
        style={{ backgroundImage: "url('/library/photos/tony-hands-on-console.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Book a call</div>
            <h1 id="book-hero">Let&apos;s talk about <em>what you want to make.</em></h1>
            <p className="rs-hero-lead">
              A free 30–45 minute discovery call. Phone or Zoom — whichever suits you. Bring your support coordinator, family member, or anyone who helps you decide.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <div className="rs-book-card">
            <header className="rs-book-header">
              <div className="eyebrow" style={{ marginBottom: 10 }}>Pick a time</div>
              <h2 className="rs-book-title">A relaxed conversation, not a sales call.</h2>
              <p className="rs-book-lead">
                All times are Melbourne local. Sessions are 30–45 minutes. You&apos;ll get a confirmation email with the Zoom link or Tony&apos;s number once you book.
              </p>
            </header>

            <div className="rs-book-context-strip">
              <div>
                <div className="eyebrow" style={{ color: "var(--secondary)", marginBottom: 6 }}>What we&apos;ll cover</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  Your goals and musical interests · how NDIS funding works for sessions · accessibility needs and the studio setup · booking your first session if you&apos;d like to.
                </p>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 6 }}>No pressure</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  No commitment. Just a chat about what you might want to make. Bring whoever helps you decide.
                </p>
              </div>
            </div>

            <div className="rs-book-embed">
              <iframe
                src={GHL_CAL_SRC}
                id={`${GHL_CAL_ID}_inline`}
                scrolling="no"
                title="Resonant Studios — discovery call booking"
                style={{ width: "100%", border: "none", overflow: "hidden", display: "block" }}
              />
            </div>

            <p className="rs-book-foot">
              Calendar not loading?{" "}
              <a href={GHL_CAL_SRC} target="_blank" rel="noopener noreferrer">Open the booking calendar in a new tab →</a>
              <br />
              Confirmation email arrives within a few minutes. If anything goes wrong, email{" "}
              <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a> and Tony will sort it out.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow">Not ready to book?</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h2)", lineHeight: 1.15, margin: "var(--s-3) auto var(--s-4)", letterSpacing: "var(--track-tight)", maxWidth: "24ch" }}>That&apos;s fine. Look around first.</h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "56ch", marginInline: "auto" }}>
              Read about <Link href="/how-it-works">how sessions run</Link>, the <Link href="/ndis-funding">NDIS funding</Link> path, or what <Link href="/sessions">a session actually looks like</Link>. When you&apos;re ready, the call is here.
            </p>
          </div>
        </div>
      </section>

      {/* GHL embed loader — defers until after hydration so it never blocks
          first paint. Listens for postMessage events from the calendar
          iframe and resizes it as content height changes. */}
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
