import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import IntakeFormSwitcher from "../components/site/IntakeFormSwitcher";

export const metadata: Metadata = {
  title: "Intake form — Start your sessions",
  description:
    "NDIS intake form for participants, families, and support coordinators. Refer a participant to Resonant Studios in two minutes.",
  alternates: { canonical: "https://resonantstudios.com.au/intake" },
  openGraph: {
    title: "Intake — Refer a participant · Resonant Studios",
    description:
      "NDIS intake form. For participants, families, and support coordinators.",
    url: "https://resonantstudios.com.au/intake",
  },
};

// Go High Level intake form — provided 2026-05-27.
// Form ID: 3vYz4FfTN37EYn11BHVs
// Direct link: https://link.teamos.ai/widget/form/3vYz4FfTN37EYn11BHVs
const GHL_INTAKE_ID = "3vYz4FfTN37EYn11BHVs";
const GHL_INTAKE_SRC = `https://link.teamos.ai/widget/form/${GHL_INTAKE_ID}`;
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

// Screen-reader-mode intake form — provided 2026-08-11.
// Form ID: bSym53fRIX9mIAZwnaQD
// Direct link: https://book.resonantstudios.com.au/widget/form/bSym53fRIX9mIAZwnaQD
//
// Served from the white-label booking domain rather than link.teamos.ai, so it
// needs its own copy of form_embed.js — the resize script is origin-scoped and
// the link.teamos.ai copy won't drive an iframe on a different host.
const GHL_A11Y_INTAKE_ID = "bSym53fRIX9mIAZwnaQD";
const GHL_A11Y_INTAKE_SRC = `https://book.resonantstudios.com.au/widget/form/${GHL_A11Y_INTAKE_ID}`;
const GHL_A11Y_EMBED_SCRIPT = "https://book.resonantstudios.com.au/js/form_embed.js";

export default function IntakePage() {
  return (
    <>
      <section
        className="rs-hero rs-hero--compact"
        aria-labelledby="intake-hero"
        style={{ backgroundImage: "url('/library/photos/intake-grain-background.jpg')" }}
      >
        <div className="rs-hero-grid">
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

            <IntakeFormSwitcher
              standard={
                <>
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
                </>
              }
              accessible={
                <>
                  <div className="rs-book-embed rs-intake-embed">
                    <iframe
                      src={GHL_A11Y_INTAKE_SRC}
                      id={`inline-${GHL_A11Y_INTAKE_ID}`}
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Screen Reader Mode Resonant Intake Form  - Fixed"
                      data-height="4541"
                      data-layout-iframe-id={`inline-${GHL_A11Y_INTAKE_ID}`}
                      data-form-id={GHL_A11Y_INTAKE_ID}
                      title="Resonant Studios — screen reader mode intake form"
                      style={{ width: "100%", height: "100%", border: "none", borderRadius: 8, display: "block" }}
                    />
                  </div>

                  <p className="rs-book-foot">
                    Form not loading?{" "}
                    <a href={GHL_A11Y_INTAKE_SRC} target="_blank" rel="noopener noreferrer">Open the accessible intake form in a new tab →</a>
                    <br />
                    Prefer to talk it through? Call Tony on{" "}
                    <a href="tel:+61480893303">0480 893 303</a> or email{" "}
                    <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a> and he&apos;ll take you through the intake directly.
                  </p>
                </>
              }
            />
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
      <Script src={GHL_A11Y_EMBED_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
