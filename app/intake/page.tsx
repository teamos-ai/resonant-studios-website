import Link from "next/link";
import Script from "next/script";

export const metadata = { title: "Intake form — Start your sessions" };

// Go High Level intake form — provided 2026-05-27.
// Form ID: 3vYz4FfTN37EYn11BHVs
// Direct link: https://link.teamos.ai/widget/form/3vYz4FfTN37EYn11BHVs
const GHL_INTAKE_ID = "3vYz4FfTN37EYn11BHVs";
const GHL_INTAKE_SRC = `https://link.teamos.ai/widget/form/${GHL_INTAKE_ID}`;
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

export default function IntakePage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="intake-hero"
        style={{ backgroundImage: "url('/library/photos/tony-headshot.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-bento" aria-hidden="true" />
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Intake form</div>
            <h1 id="intake-hero">Tell us about <em>you.</em></h1>
            <p className="rs-hero-lead">
              A short intake form so Tony knows what you&apos;d like to make and how to support you in sessions. It takes about 10 minutes. Fill it in yourself or with someone who helps you decide.
            </p>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>This page is the intake form. You answer a few questions about yourself and what you want to make. Then Tony will get in touch.</p>
      </aside>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <div className="rs-book-card">
            <header className="rs-book-header">
              <div className="eyebrow" style={{ marginBottom: 10 }}>Start your sessions</div>
              <h2 className="rs-book-title">Let&apos;s get you set up.</h2>
              <p className="rs-book-lead">
                Your answers go straight to Tony. He&apos;ll be in touch within one business day to confirm your first session and walk you through anything you&apos;d like to ask.
              </p>
            </header>

            <div className="rs-book-context-strip">
              <div>
                <div className="eyebrow" style={{ color: "var(--secondary)", marginBottom: 6 }}>What we&apos;ll ask</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  Your name and contact details · your NDIS plan type · what you&apos;d like to make · accessibility and support needs.
                </p>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 6 }}>Take your time</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  Bring your support coordinator, family member, or anyone who helps you decide. You can pause and come back to the form at any time.
                </p>
              </div>
            </div>

            <div className="rs-book-embed rs-intake-embed">
              <iframe
                src={GHL_INTAKE_SRC}
                id={`inline-${GHL_INTAKE_ID}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Resonant Intake Form"
                data-height="4184"
                data-layout-iframe-id={`inline-${GHL_INTAKE_ID}`}
                data-form-id={GHL_INTAKE_ID}
                title="Resonant Studios — intake form"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: 8, display: "block" }}
              />
            </div>

            <p className="rs-book-foot">
              Form not loading?{" "}
              <a href={GHL_INTAKE_SRC} target="_blank" rel="noopener noreferrer">Open the intake form in a new tab →</a>
              <br />
              Prefer to chat first? <Link href="/book">Book a free discovery call</Link> — Tony will walk you through the intake on the call.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow">Not ready to fill it in?</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h2)", lineHeight: 1.15, margin: "var(--s-3) auto var(--s-4)", letterSpacing: "var(--track-tight)", maxWidth: "24ch" }}>That&apos;s fine. Have a chat first.</h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "56ch", marginInline: "auto" }}>
              Read about <Link href="/how-it-works">how sessions run</Link>, the <Link href="/ndis-funding">NDIS funding</Link> path, or what <Link href="/sessions">a session actually looks like</Link>. When you&apos;re ready, the form is here.
            </p>
          </div>
        </div>
      </section>

      {/* GHL embed loader — defers until after hydration so it never blocks
          first paint. Listens for postMessage events from the survey iframe
          and resizes it as content height changes. */}
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
