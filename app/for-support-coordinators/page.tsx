import Link from "next/link";
import Script from "next/script";

export const metadata = { title: "For support coordinators — A referral worth making" };

// Go High Level referral form — provided 2026-05-22.
// Form ID: yztI9Mq5aooBrsTHAa1g
// Direct link: https://link.teamos.ai/widget/form/yztI9Mq5aooBrsTHAa1g
const GHL_REFERRAL_ID = "yztI9Mq5aooBrsTHAa1g";
const GHL_REFERRAL_SRC = `https://link.teamos.ai/widget/form/${GHL_REFERRAL_ID}`;
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

export default function CoordinatorsPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="coord-hero"
        style={{ backgroundImage: "url('/library/photos/founder-client.jpg')" }}
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
              <Link className="btn btn-on-image" href="/contact">
                Talk to Tony first
              </Link>
            </div>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>This page is for support coordinators thinking about referring a participant to us. It explains why and how to refer.</p>
      </aside>

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
            <div className="form-shell" style={{ background: "var(--bg-elevated)", border: "1px solid var(--rule)", borderRadius: "var(--r-4)", boxShadow: "var(--shadow-md)", padding: "var(--s-7)", maxWidth: 720, marginInline: "auto" }}>
              <div style={{ marginBottom: "var(--s-5)" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Referral form</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, lineHeight: 1.1, margin: 0, color: "var(--ink)" }}>Refer a participant</h3>
                <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, marginTop: 12 }}>Submissions go straight to Tony — he&apos;ll reply within one business day.</p>
              </div>
              <div className="rs-referral-embed">
                <iframe
                  src={GHL_REFERRAL_SRC}
                  id={`inline-${GHL_REFERRAL_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Referral Form - Coordinators"
                  data-height="619"
                  data-layout-iframe-id={`inline-${GHL_REFERRAL_ID}`}
                  data-form-id={GHL_REFERRAL_ID}
                  title="Refer a participant — Resonant Studios"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: 8, display: "block" }}
                />
              </div>
              <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: "var(--s-4)", lineHeight: 1.5 }}>
                Form not loading?{" "}
                <a href={GHL_REFERRAL_SRC} target="_blank" rel="noopener noreferrer">Open the referral form in a new tab →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GHL embed loader — defers until after hydration so it never blocks
          first paint. Listens for postMessage events from the referral form
          iframe and resizes it as content height changes. */}
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />

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
