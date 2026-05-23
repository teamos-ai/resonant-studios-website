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
        <div className="rs-page-container">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">NDIS funding</div>
            <h1 id="ndis-hero">Using your NDIS plan <em>for music sessions.</em></h1>
            <p className="rs-hero-lead">
              Sessions at Resonant Studios may be funded under your NDIS Capacity Building budget — specifically Community, Social and Civic Participation. Here&apos;s what that means in practice.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Talk to Tony</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">How it works</div>
            <h2>Self-managed and plan-managed welcome.</h2>
            <p>Resonant Studios is an unregistered NDIS provider, which means we work with participants who control their own funding.</p>
          </header>
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <h3 className="rs-feature-h">Plan-managed</h3>
              <p>We invoice your plan manager directly. You don&apos;t handle paperwork. They handle the claim, we receive the payment, you get the sessions.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Self-managed</h3>
              <p>We provide a compliant invoice you can claim through myGov. We&apos;ll walk you through it on the discovery call if it&apos;s your first time.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Agency-managed</h3>
              <p>We&apos;re currently unable to support agency-managed participants. We&apos;re working toward NDIS registration so this can change.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Pricing</div>
            <h2>Transparent rates. NDIS-compliant.</h2>
            <p>All rates follow NDIS Capacity Building — Community, Social and Civic Participation pricing.</p>
          </header>
          <ul className="rs-price-grid" role="list">
            <li className="card rs-price-card">
              <h3 className="eyebrow rs-price-eyebrow">Weekday</h3>
              <div className="rs-price-amount">$210.69</div>
              <div className="rs-price-line">3-hour session, Monday to Friday</div>
              <div className="rs-price-rate">$70.23/hr · standard NDIS rate</div>
            </li>
            <li className="card rs-price-card">
              <h3 className="eyebrow rs-price-eyebrow">Saturday</h3>
              <div className="rs-price-amount">$316.05</div>
              <div className="rs-price-line">3-hour session, Saturday</div>
              <div className="rs-price-rate">$105.35/hr · NDIS Saturday rate</div>
            </li>
            <li className="card rs-price-card">
              <h3 className="eyebrow rs-price-eyebrow">Sunday &amp; public holidays</h3>
              <div className="rs-price-amount">$421.38</div>
              <div className="rs-price-line">3-hour session, Sunday or public holiday</div>
              <div className="rs-price-rate">$140.46/hr · NDIS Sunday rate</div>
            </li>
          </ul>
          <p style={{ marginTop: "var(--s-7)", textAlign: "center", fontSize: "var(--fs-small)", color: "var(--ink-soft)", maxWidth: "70ch", marginInline: "auto" }}>
            <strong style={{ color: "var(--ink-muted)" }}>NDIS line item:</strong> 04_104_0125_6_1 · Capacity Building — Social, Community and Civic Participation. We&apos;re an unregistered provider; funding eligibility depends on individual plan goals. Talk to your support coordinator or plan manager before booking.
          </p>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Not sure if it&apos;s covered?</h2>
          <p>The discovery call is the fastest way to find out. We&apos;ll talk through your plan together — no jargon.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
