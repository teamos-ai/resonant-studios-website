import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Support Coordinator Combo — free download",
  description:
    "Three free resources for support coordinators and plan managers: the Compliance Checklist, the Provider Cheat Sheet, and the Plan-Goal Swipe Files. Everything you need to confidently refer a participant to Resonant Studios.",
  alternates: { canonical: "https://resonantstudios.com.au/free-resources/coordinators" },
  openGraph: {
    title: "Free Support Coordinator Combo · Resonant Studios",
    description:
      "Three free NDIS resources for support coordinators: Compliance Checklist, Cheat Sheet, Swipe Files.",
    url: "https://resonantstudios.com.au/free-resources/coordinators",
    type: "article",
  },
};

// Lead-magnet form for The Support Coordinator Combo — provided 2026-05-28.
// Form ID:    HT93KLrv082pr6Wvq9rL
// GHL name:   04 | Coordinator Combo Lead Magnet Form
// Custom CSS: forms/ghl-design-system.css (applied inside the form builder
//             so the iframe renders on-brand without us styling the host
//             wrapper). If the form is ever paused, blank GHL_FORM_ID and
//             the conditional below restores the placeholder copy.
const GHL_FORM_ID = "HT93KLrv082pr6Wvq9rL";
const GHL_FORM_SRC = GHL_FORM_ID
  ? `https://link.teamos.ai/widget/form/${GHL_FORM_ID}`
  : "";
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

export default function CoordinatorsResourcesPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="combo-hero"
        style={{ backgroundImage: "url('/library/photos/control-room-wide.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Free resources · for support coordinators</div>
            <h1 id="combo-hero">The Support Coordinator <em>Combo.</em></h1>
            <p className="rs-hero-lead">
              Three short reference pieces that answer the compliance questions,
              summarise the provider, and hand you the exact plan-goal language
              every support coordinator and plan manager needs to refer a
              participant. Free. No follow-up calls unless you ask for one.
            </p>
            <div className="rs-hero-cta">
              <a className="btn" href="#download">Download combo</a>
              <Link className="btn btn-on-image" href="/book">Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>
          This page has three free PDFs for support coordinators. You give us
          your name and email. We send the PDFs to your inbox. You read them
          when it suits you.
        </p>
      </aside>

      <section className="rs-page-section" id="whats-inside">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">What&apos;s inside</div>
            <h2>Three pieces. One referral, ready to make.</h2>
            <p>
              Built so a support coordinator can read top-to-bottom in under
              ten minutes and walk away with the compliance answers, the
              one-page summary, and the goal language to use at the next plan
              review.
            </p>
          </header>

          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <div className="eyebrow" style={{ color: "var(--primary)" }}>Piece 01</div>
              <h3 className="rs-feature-h">The Compliance Checklist</h3>
              <p>
                Ten lines confirming how Resonant Studios meets the NDIS
                standards every support coordinator and plan manager looks for
                — line item, support category, hourly rate, registration
                status, service agreement, cancellation policy, worker
                screening, insurance, Code of Conduct, invoice format, and
                plan-review evidence.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                One page · designed to answer &ldquo;is this provider compliant?&rdquo; in under sixty seconds.
              </p>
            </li>

            <li className="card">
              <div className="eyebrow" style={{ color: "var(--secondary)" }}>Piece 02</div>
              <h3 className="rs-feature-h">The Provider Cheat Sheet</h3>
              <p>
                Resonant Studios at a glance — what we do, what we bill under,
                who we work with, and the one thing nobody else in Melbourne&apos;s
                west can match. Includes a sample NDIS invoice line you can
                drop straight into your records.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                One page · designed to be sent, screenshotted or printed in seconds.
              </p>
            </li>

            <li className="card">
              <div className="eyebrow" style={{ color: "var(--accent)" }}>Piece 03</div>
              <h3 className="rs-feature-h">The Plan-Goal Swipe Files</h3>
              <p>
                Five goal sentences you can drop straight into a participant&apos;s
                plan to unlock funding for Resonant Creative Sessions — covering
                self-expression for adults, identity and peers for teens,
                independence and community, vision impairment and accessibility,
                and routine for psychosocial disability.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Seven cards · adjust the wording to suit the participant.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken" id="download">
        <div className="rs-page-container">
          <div className="rs-book-card">
            <header className="rs-book-header">
              <div className="eyebrow" style={{ marginBottom: 10 }}>Download the combo</div>
              <h2 className="rs-book-title">Send all three to my inbox.</h2>
              <p className="rs-book-lead">
                Enter your name and email. We send the three PDFs straight to
                your inbox — no waiting, no follow-up calls unless you ask.
                You can unsubscribe in one click.
              </p>
            </header>

            <div className="rs-book-context-strip">
              <div>
                <div className="eyebrow" style={{ color: "var(--secondary)", marginBottom: 6 }}>What you&apos;ll get</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  Three PDFs — Compliance Checklist, Provider Cheat Sheet,
                  Plan-Goal Swipe Files. Print-ready. Plain-English. Built for
                  busy coordinators.
                </p>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 6 }}>What happens next</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  The email lands inside a minute. If you&apos;d like to talk
                  through a referral, Tony reads every message and replies
                  inside one business hour.
                </p>
              </div>
            </div>

            <div className="rs-lead-magnet-embed">
              {GHL_FORM_ID ? (
                <iframe
                  src={GHL_FORM_SRC}
                  id={`inline-${GHL_FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="04 | Coordinator Combo Lead Magnet Form 🧲"
                  data-height="490"
                  data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                  data-form-id={GHL_FORM_ID}
                  title="04 | Coordinator Combo Lead Magnet Form 🧲"
                  /* height + background handled by .rs-lead-magnet-embed iframe rules;
                     setting them inline would fight form_embed.js' postMessage resize. */
                  style={{ border: "none", borderRadius: 10, display: "block", background: "transparent" }}
                />
              ) : (
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    minHeight: 480,
                    textAlign: "center",
                    padding: "var(--s-6)",
                    color: "var(--ink-muted)",
                  }}
                >
                  <div className="eyebrow" style={{ marginBottom: 12 }}>Coming online</div>
                  <p style={{ maxWidth: "44ch", lineHeight: 1.55, margin: "0 0 var(--s-3)" }}>
                    The download form is being finalised. In the meantime,
                    email <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a> and
                    we&apos;ll send the combo straight to you.
                  </p>
                  <p style={{ fontSize: "var(--fs-small)", color: "var(--ink-soft)", margin: 0 }}>
                    Tony reads every message and replies inside one business hour.
                  </p>
                </div>
              )}
            </div>

            <p className="rs-book-foot">
              {GHL_FORM_ID && (
                <>
                  Form not loading?{" "}
                  <a href={GHL_FORM_SRC} target="_blank" rel="noopener noreferrer">
                    Open the download form in a new tab →
                  </a>
                  <br />
                </>
              )}
              Working with a parent right now?{" "}
              <Link href="/free-resources/parents">Send them The Parents Pack →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section editorial" aria-labelledby="who-its-for">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Who it&apos;s for</div>
            <h2 id="who-its-for">Built for the people writing referrals.</h2>
          </header>
          <ul className="rs-check-list" role="list">
            <li>Support coordinators looking for a non-clinical, Capacity Building option for a participant.</li>
            <li>Plan managers vetting a provider before paying an invoice.</li>
            <li>Local Area Coordinators and planners wanting to understand what sits under 09_009_0117_6_3 in practice.</li>
            <li>Recovery coaches, advocates and allied health workers who refer to creative providers.</li>
          </ul>
        </div>
      </section>

      {/* Closing cross-link band — points to the parents pack + offers a call. */}
      <section
        className="rs-cta-band"
        id="next-step"
        style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}
      >
        <div className="rs-cta-band-inner">
          <div className="eyebrow" style={{ color: "var(--terra-300)" }}>Next step</div>
          <h2>Ready to refer a participant?</h2>
          <p>
            Book a fifteen-minute call with Tony. Bring the participant&apos;s
            situation and we&apos;ll talk through whether Resonant is the right
            fit — and how to write the referral cleanly.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            <Link className="btn btn-on-image btn-lg" href="/for-support-coordinators">Coordinator overview</Link>
          </div>
        </div>
      </section>

      {/* GHL embed loader — only rendered when a form is configured. */}
      {GHL_FORM_ID && <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />}
    </>
  );
}
