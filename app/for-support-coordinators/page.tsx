import Link from "next/link";

export const metadata = { title: "For support coordinators — A referral worth making" };

export default function CoordinatorsPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="coord-hero"
        style={{ backgroundImage: "url('/library/photos/tony-with-participant.jpg')" }}
      >
        <div className="rs-page-container">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">For support coordinators</div>
            <h1 id="coord-hero">A referral <em>worth making.</em></h1>
            <p className="rs-hero-lead">
              Resonant Studios delivers documented, outcome-focused sessions your participants will talk about for years — a finished song on Spotify, under their name.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="#referral">Make a referral</Link>
              <Link className="btn btn-secondary" href="/contact" style={{ borderColor: "rgba(245,239,228,0.4)", color: "var(--ink-on-image)" }}>
                Talk to Tony first
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section" id="outcomes">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">Why refer here</div>
            <h2>Outcomes you can actually report.</h2>
            <p>NDIS-compliant, tangible, documented — built so progress is easy to evidence for ongoing funding.</p>
          </header>
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <h3 className="rs-feature-h">Tangible outcome</h3>
              <p>Every participant finishes with a Spotify release. That&apos;s real, measurable, shareable progress against capacity-building goals.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">NDIS-compliant invoicing</h3>
              <p>Line item 04_104_0125_6_1, Capacity Building — Community, Social and Civic Participation. Invoices arrive within 48 hours of session completion.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Progress reports on request</h3>
              <p>Plain-English session notes available for plan reviews. Outcome framing that maps to standard NDIS goal categories.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken" id="referral">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Referral process</div>
            <h2>How to refer a participant.</h2>
            <p>Pick whichever path suits you — quick form, direct call, or a meeting first to scope fit.</p>
          </header>
          <ol className="rs-steps">
            <li className="rs-step">
              <div className="rs-step-num">01</div>
              <div>
                <h3>Get in touch</h3>
                <p>Submit the referral form below, email <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a>, or call Tony directly.</p>
              </div>
            </li>
            <li className="rs-step">
              <div className="rs-step-num">02</div>
              <div>
                <h3>Free 15-minute discovery call</h3>
                <p>With the participant (and you, if you&apos;d like to be there). We confirm fit, accessibility needs, and funding setup.</p>
              </div>
            </li>
            <li className="rs-step">
              <div className="rs-step-num">03</div>
              <div>
                <h3>First session booked</h3>
                <p>Confirmed in writing. Progress reporting available from session 1 onward.</p>
              </div>
            </li>
          </ol>
          <div style={{ marginTop: "var(--s-7)" }}>
            <div className="form-shell" style={{ background: "var(--bg-elevated)", border: "1px solid var(--rule)", borderRadius: "var(--r-4)", boxShadow: "var(--shadow-md)", padding: "var(--s-7)", maxWidth: 640, marginInline: "auto" }}>
              <div style={{ marginBottom: "var(--s-6)" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Referral form</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, lineHeight: 1.1, margin: 0, color: "var(--ink)" }}>Refer a participant</h3>
                <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, marginTop: 12 }}>The form below is hosted by Go High Level. Submissions go straight to Tony.</p>
              </div>
              <div className="rs-embed-slot">
                {/* TODO: replace with GHL referral form iframe embed code */}
                Go High Level referral form embed — paste iframe here
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Prefer to meet Tony first?</h2>
          <p>Book a coordinator-only call. We&apos;ll talk through what your participants might need before any referral.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
