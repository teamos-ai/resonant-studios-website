import Link from "next/link";

export const metadata = {
  title: "Page not found — Resonant Studios",
  // 404s shouldn't be indexed — they're an error state, not an entry point.
  robots: { index: false, follow: false },
};

// Next.js 15 App Router convention: app/not-found.tsx renders inside the
// root layout (so Nav + Footer + AccessibilityMenu come along for free)
// any time the visitor hits a URL that has no matching route.
export default function NotFound() {
  return (
    <>
      <section
        className="rs-hero rs-hero--compact"
        aria-labelledby="not-found-hero"
        style={{ backgroundImage: "url('/library/photos/console-fader-detail.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">404 — page not found</div>
            <h1 id="not-found-hero">We can&apos;t find that page.</h1>
            <p className="rs-hero-lead">
              The link might be broken, or the page may have moved. Let&apos;s get you somewhere useful.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/">Back to home</Link>
              <Link className="btn btn-on-image" href="/book">Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>The page you tried to open is not here. Pick a link below to find what you need.</p>
      </aside>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">Where to go</div>
            <h2>Try one of these.</h2>
            <p>The pages most visitors are looking for.</p>
          </header>

          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <div className="eyebrow" style={{ color: "var(--primary)" }}>For participants</div>
              <h3 className="rs-feature-h">Sessions</h3>
              <p>What a music session at Resonant Studios actually looks like, and how your Creative Journey runs.</p>
              <p style={{ marginTop: "var(--s-3)" }}>
                <Link href="/sessions">Sessions →</Link>
              </p>
            </li>
            <li className="card">
              <div className="eyebrow" style={{ color: "var(--secondary)" }}>For families</div>
              <h3 className="rs-feature-h">NDIS funding</h3>
              <p>How NDIS plans cover music sessions, and what to ask your plan manager or support coordinator.</p>
              <p style={{ marginTop: "var(--s-3)" }}>
                <Link href="/ndis-funding">NDIS funding →</Link>
              </p>
            </li>
            <li className="card">
              <div className="eyebrow" style={{ color: "var(--accent)" }}>For coordinators</div>
              <h3 className="rs-feature-h">Refer a participant</h3>
              <p>Documented outcomes, clear invoicing, and a referral worth making — plus three free PDFs to keep on file.</p>
              <p style={{ marginTop: "var(--s-3)" }}>
                <Link href="/for-support-coordinators">For coordinators →</Link>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow">Still stuck?</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h2)", lineHeight: 1.15, margin: "var(--s-3) auto var(--s-4)", letterSpacing: "var(--track-tight)", maxWidth: "30ch" }}>
              Tony reads every message.
            </h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "56ch", marginInline: "auto" }}>
              Tell us what you were looking for and we&apos;ll find it for you.{" "}
              <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a>{" "}
              · or <Link href="/contact">use the contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
