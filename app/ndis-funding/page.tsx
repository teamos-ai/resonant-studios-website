import Link from "next/link";

export const metadata = { title: "NDIS funding — Using your plan for music sessions" };

export default function NDISFundingPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="ndis-hero"
        style={{ backgroundImage: "url('/library/photos/console-fader-detail.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">NDIS funding</div>
            <h1 id="ndis-hero">Using your NDIS plan <em>for music sessions.</em></h1>
            <p className="rs-hero-lead">
              Sessions at Resonant Studios may be funded under your NDIS plan, typically under Assistance with Social and Community Participation, if aligned with your personal goals and funding categories. Here&apos;s what that means in practice.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <Link className="btn btn-on-image" href="/intake">Intake form</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
          <strong>What this page is about</strong>
          <p>This page explains how NDIS funding works for our music sessions. It tells you what to ask your plan manager or support coordinator.</p>
        </aside>

        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">How it works</div>
            <h2>Self-managed and plan-managed welcome.</h2>
            <p>Resonant Studios is an unregistered NDIS provider supporting self-managed and plan-managed participants.</p>
          </header>
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <h3 className="rs-feature-h">Plan-managed</h3>
              <p>We work directly with your plan manager to help keep the invoicing process simple and straightforward.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Self-managed</h3>
              <p>We provide compliant invoices for self-managed participants and are happy to guide you through the process if needed.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Agency-managed</h3>
              <p>We&apos;re currently unable to support agency-managed participants. We&apos;re working toward registration — feel free to check back with us in the future.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Pricing</div>
            <h2>Transparent pricing. NDIS-aligned.</h2>
            <p>All rates reflect the current NDIS price limits for Assistance with Social and Community Participation supports.</p>
          </header>
          <ul className="rs-price-grid cols-4" role="list">
            <li className="card rs-price-card">
              <h3 className="rs-price-tier">Weekday</h3>
              <div className="rs-price-amount">$210.69</div>
              <div className="rs-price-rate">$70.23/hr</div>
            </li>
            <li className="card rs-price-card">
              <h3 className="rs-price-tier">Saturday</h3>
              <div className="rs-price-amount">$296.49</div>
              <div className="rs-price-rate">$98.83/hr</div>
            </li>
            <li className="card rs-price-card">
              <h3 className="rs-price-tier">Sunday</h3>
              <div className="rs-price-amount">$382.29</div>
              <div className="rs-price-rate">$127.43/hr</div>
            </li>
            <li className="card rs-price-card">
              <h3 className="rs-price-tier">Public Holiday</h3>
              <div className="rs-price-amount">$468.09</div>
              <div className="rs-price-rate">$156.03/hr</div>
            </li>
          </ul>
          <p style={{ marginTop: "var(--s-7)", textAlign: "center", fontSize: "var(--fs-small)", color: "var(--ink-soft)", maxWidth: "70ch", marginInline: "auto" }}>
            Funding eligibility depends on individual plan goals and funding categories. We recommend discussing suitability with your support coordinator or plan manager.
          </p>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Not sure if it&apos;s covered?</h2>
          <p>The discovery call is the fastest way to find out. We&apos;ll talk through your plan together — no jargon.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            <Link className="btn btn-on-image btn-lg" href="/intake">Intake form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
