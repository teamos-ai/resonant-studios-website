import Link from "next/link";

export const metadata = {
  title: "Thanks — we've got it",
  description:
    "Your message has been received. Tony reads every message and replies within one business day.",
  // Thank-you pages shouldn't be indexed — they're a post-conversion
  // destination, not an entry point for search visitors.
  robots: { index: false, follow: false },
};

// Generic post-submission destination. Wire any GHL form's "redirect on
// submit" setting to /thank-you and visitors land here after submitting
// the contact form, intake survey, referral form, or either lead-magnet
// form. The copy is intentionally form-agnostic — covers any of the
// above paths.
export default function ThankYouPage() {
  return (
    <>
      <section
        className="rs-hero rs-hero--compact"
        aria-labelledby="thank-you-hero"
        style={{ backgroundImage: "url('/library/photos/tony-with-participant.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Thanks</div>
            <h1 id="thank-you-hero">We&apos;ve got it.</h1>
            <p className="rs-hero-lead">
              Your message landed safely. Tony reads every one and replies inside one business day — usually the same day if you wrote before 4pm.
            </p>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>Your message has been sent. Tony will reply soon. Have a look around the website while you wait.</p>
      </aside>

      <section className="rs-page-section">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">What happens next</div>
            <h2>Three steps from here.</h2>
            <p>However you reached out, the path from here is the same.</p>
          </header>

          <ol className="rs-steps">
            <li className="rs-step">
              <div className="rs-step-num">01</div>
              <div>
                <h3>You&apos;ll hear back</h3>
                <p>Tony reads every message himself and replies within one business day. Often within an hour if you wrote during studio hours.</p>
              </div>
            </li>
            <li className="rs-step">
              <div className="rs-step-num">02</div>
              <div>
                <h3>A short conversation</h3>
                <p>A free 30-minute discovery call to talk through goals, accessibility needs, and whether Resonant Studios is the right fit. No pressure, no sales script.</p>
              </div>
            </li>
            <li className="rs-step">
              <div className="rs-step-num">03</div>
              <div>
                <h3>Your first session</h3>
                <p>Three hours in the studio. You bring your ideas. Tony brings 25+ years of music production experience. We start shaping what your song could be.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow">While you wait</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h2)", lineHeight: 1.15, margin: "var(--s-3) auto var(--s-4)", letterSpacing: "var(--track-tight)", maxWidth: "30ch" }}>
              Have a look around.
            </h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "56ch", marginInline: "auto" }}>
              Read about <Link href="/how-it-works">how sessions run</Link>, the <Link href="/ndis-funding">NDIS funding</Link> path, or what <Link href="/sessions">a session actually looks like</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
