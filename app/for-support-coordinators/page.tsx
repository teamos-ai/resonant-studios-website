import Link from "next/link";
import Script from "next/script";
import GhlThemeBridge from "@/app/components/ui/GhlThemeBridge";

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
        <div className="rs-hero-grid">
          <div className="rs-hero-bento" aria-hidden="true" />
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">For support coordinators</div>
            <h1 id="coord-hero">A referral <em>worth making.</em></h1>
            <p className="rs-hero-lead">
              Resonant Studios delivers structured participant-led music sessions with clear documentation, measurable engagement, and tangible creative outcomes.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <Link className="btn btn-on-image" href="/intake">Intake form</Link>
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
            <h2>Documented outcomes and participant progress.</h2>
            <p>Sessions are structured to support meaningful engagement, documented progress, and participant-led creative outcomes.</p>
          </header>

          {/* Lead panel — bigger card with the "what sessions may include" summary */}
          <div
            className="card"
            style={{
              padding: "var(--s-7)",
              borderRadius: "var(--r-4)",
              marginBottom: "var(--s-5)",
              boxShadow: "var(--shadow-md), var(--shadow-inset)",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h3)", lineHeight: 1.2, margin: "0 0 var(--s-3)", color: "var(--ink)", letterSpacing: "var(--track-tight)" }}>
              What sessions may include
            </h3>
            <p style={{ color: "var(--ink-muted)", lineHeight: "var(--lh-body)", margin: 0 }}>
              Sessions may include songwriting, recording vocals or instruments, beat making, music production, and creative collaboration while supporting confidence, independence, creative skill development, and social participation.
            </p>
          </div>

          {/* Two supporting cards — invoicing + progress reports */}
          <ul
            role="list"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-4)",
            }}
            className="grid-2"
          >
            <li className="card">
              <h3 className="rs-feature-h">Clear invoicing</h3>
              <p>Clear invoices are provided promptly for plan-managed and self-managed participants.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Progress reports available</h3>
              <p>Session notes and progress updates are available to support participant engagement and goals.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken" id="referral">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Referral process</div>
            <h2>How to refer a participant.</h2>
            <p>Choose the referral approach that works best for you — referral form, direct contact, or an initial conversation first.</p>
          </header>
          <ol className="rs-steps">
            <li className="rs-step">
              <div className="rs-step-num">01</div>
              <div>
                <h3>Get in touch</h3>
                <p>Referrals can be made through the form below, by email at <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a>, or by contacting Tony directly.</p>
              </div>
            </li>
            <li className="rs-step">
              <div className="rs-step-num">02</div>
              <div>
                <h3>Initial conversation</h3>
                <p>A conversation to discuss participant goals, accessibility needs, interests, and session suitability.</p>
              </div>
            </li>
            <li className="rs-step">
              <div className="rs-step-num">03</div>
              <div>
                <h3>Sessions begin</h3>
                <p>Once goals, accessibility needs, scheduling, and intake documentation are confirmed, sessions can begin with ongoing communication available where needed.</p>
              </div>
            </li>
          </ol>
          <div style={{ marginTop: "var(--s-7)" }}>
            <div className="form-shell" style={{ background: "var(--bg-elevated)", border: "1px solid var(--rule)", borderRadius: "var(--r-4)", boxShadow: "var(--shadow-md)", padding: "var(--s-7)", maxWidth: 720, marginInline: "auto" }}>
              <div style={{ marginBottom: "var(--s-5)" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Referral form</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, lineHeight: 1.1, margin: 0, color: "var(--ink)" }}>Refer a participant</h3>
                <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, marginTop: 12 }}>Submissions are sent directly to Tony, with replies typically provided within one business day.</p>
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
      <GhlThemeBridge />

      <section className="rs-cta-band" id="coordinator-call" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <div className="eyebrow" style={{ color: "var(--terra-300)" }}>Before referring</div>
          <h2>Prefer to discuss a referral with Tony first?</h2>
          <p>Book a call to discuss participant goals, accessibility needs, and session suitability before proceeding with a referral.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            <Link className="btn btn-on-image btn-lg" href="/intake">Intake form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
