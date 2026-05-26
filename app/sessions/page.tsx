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

      {/* WEEKLY SESSIONS + SESSION PRICING — one unified sunken section */}
      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">Weekly sessions</div>
            <h2>3-hour one-on-one sessions.</h2>
            <p>Most participants attend weekly sessions in recurring timeslots, with the creative process shaped around their goals, interests, and pace.</p>
          </header>
          <div className="rs-bento-2col">
            <div className="card rs-bento-card">
              <h3 className="rs-bento-card-h">Available session times</h3>
              <ul className="rs-pill-list" role="list">
                <li>9:00 AM – 12:00 PM</li>
                <li>1:00 PM – 4:00 PM</li>
                <li>5:00 PM – 8:00 PM</li>
              </ul>
              <hr className="rule" />
              <p className="rs-bento-card-foot">Recurring weekly timeslots help create consistency while still allowing sessions to adapt to each participant&apos;s goals and energy.</p>
            </div>
            <div className="card rs-bento-card">
              <h3 className="rs-bento-card-h">Sessions may include</h3>
              <ul className="rs-pill-list cols-2" role="list">
                <li>Songwriting</li>
                <li>Music production</li>
                <li>Vocal recording</li>
                <li>Instrumental recording</li>
                <li>Mixing &amp; mastering</li>
                <li>Professionally releasing music</li>
              </ul>
              <hr className="rule" />
              <p className="rs-bento-card-foot">Supports may be funded under an NDIS plan where aligned with participant goals.</p>
            </div>
          </div>

          <div className="card rs-pricing-card">
            <header className="rs-section-heading" style={{ textAlign: "left", margin: "0 0 var(--s-6)" }}>
              <div className="eyebrow">Session pricing</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h3)", lineHeight: 1.2, margin: "var(--s-2) 0 var(--s-3)", color: "var(--ink)", letterSpacing: "var(--track-tight)" }}>
                Simple 3-hour session rates.
              </h3>
              <p>Sessions are billed using the applicable NDIS community participation rate. Pricing below shows both the full 3-hour session cost and the hourly rate.</p>
            </header>
            <ul className="rs-price-grid" role="list">
              <li className="card rs-price-card">
                <h4 className="rs-price-tier">Weekday</h4>
                <div className="rs-price-amount">$210.69</div>
                <div className="rs-price-rate">$70.23/hr</div>
              </li>
              <li className="card rs-price-card">
                <h4 className="rs-price-tier">Saturday</h4>
                <div className="rs-price-amount">$296.49</div>
                <div className="rs-price-rate">$98.83/hr</div>
              </li>
              <li className="card rs-price-card">
                <h4 className="rs-price-tier">Sunday</h4>
                <div className="rs-price-amount">$382.29</div>
                <div className="rs-price-rate">$127.43/hr</div>
              </li>
            </ul>
            <hr className="rule" />
            <p style={{ fontSize: "var(--fs-small)", color: "var(--ink-soft)", margin: 0 }}>
              Pricing may vary depending on the applicable support item, session time, and individual participant circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Curious how a session would actually feel?</h2>
          <p>The discovery call is the easiest way to find out. No pressure, no commitment.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            <Link className="btn btn-on-image btn-lg" href="#">Intake form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
