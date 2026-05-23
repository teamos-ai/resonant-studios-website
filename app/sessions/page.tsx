import Link from "next/link";

export const metadata = { title: "Sessions — What a session looks like" };

export default function SessionsPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="sessions-hero"
        style={{ backgroundImage: "url('/library/photos/tony-hands-on-console.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-bento" aria-hidden="true" />
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Sessions</div>
            <h1 id="sessions-hero">Three hours, <em>one-on-one,</em> in a real studio.</h1>
            <p className="rs-hero-lead">
              No experience needed. No rigid curriculum. Just your ideas, Tony&apos;s 25+ years of professional music production experience, and a supportive creative environment built around your goals.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <Link className="btn btn-on-image" href="/ndis-funding">NDIS funding</Link>
            </div>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>This page tells you what happens in a three-hour music session. It also shows what each package costs.</p>
      </aside>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <div className="rs-twocol">
            <div className="rs-twocol-content">
              <div className="eyebrow">Who it&apos;s for</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-display)", lineHeight: 1.05, margin: 0, letterSpacing: "var(--track-tight)" }}>
                Participants 15+. <em style={{ color: "var(--ink-2)" }}>Any experience level.</em>
              </h2>
            </div>
            <div className="rs-twocol-content">
              <p className="lead" style={{ marginTop: 0 }}>
                Sessions are fully adapted to your communication style, energy levels, and creative goals. Whether you&apos;ve never picked up a microphone or you&apos;ve been writing for years, we start where you are.
              </p>
              <ul className="rs-check-list" role="list">
                <li>Self-managed &amp; plan-managed NDIS participants welcome</li>
                <li>Support workers and family members welcome to attend</li>
                <li>Sessions can pause, restart, or adjust to your energy</li>
                <li>Recording, mixing, mastering, and music release support available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">Package options</div>
            <h2>Pick the rhythm that fits.</h2>
            <p>All sessions are 3 hours, one-on-one. Most participants take an 8 or 12-session package — enough to take a song from idea to Spotify release.</p>
          </header>
          <ul className="rs-price-grid" role="list">
            <li className="card rs-price-card">
              <h3 className="eyebrow rs-price-eyebrow">Single</h3>
              <div className="rs-price-amount">$210.69</div>
              <div className="rs-price-line">One 3-hour session</div>
              <div className="rs-price-rate">Weekday day rate · NDIS line item 04_104_0125_6_1</div>
            </li>
            <li className="card rs-price-card" style={{ boxShadow: "var(--shadow-sm), inset 0 0 0 1px var(--primary-wash)" }}>
              <h3 className="eyebrow rs-price-eyebrow">8 sessions</h3>
              <div className="rs-price-amount">$1,685</div>
              <div className="rs-price-line">Complete song · idea to Spotify release</div>
              <div className="rs-price-rate">~$210 per session · most popular package</div>
            </li>
            <li className="card rs-price-card">
              <h3 className="eyebrow rs-price-eyebrow">12 sessions</h3>
              <div className="rs-price-amount">$2,528</div>
              <div className="rs-price-line">Extended creative project · multiple tracks</div>
              <div className="rs-price-rate">For participants who want more time and space</div>
            </li>
          </ul>
          <p style={{ marginTop: "var(--s-7)", textAlign: "center", fontSize: "var(--fs-small)", color: "var(--ink-soft)", maxWidth: "70ch", marginInline: "auto" }}>
            Supports may be funded under an NDIS plan where aligned with participant goals.
          </p>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Curious how a session would actually feel?</h2>
          <p>The discovery call is the easiest way to find out. No pressure, no commitment.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
