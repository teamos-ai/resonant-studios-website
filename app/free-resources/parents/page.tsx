import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Parents Pack — free NDIS music funding guide",
  description:
    "Three free resources for parents of adult children with an NDIS plan: the Funding Guide, the Plan-Review Worksheet, and the Parent Swipe Files. Plain-English answers to the question every parent asks first.",
  alternates: { canonical: "https://resonantstudios.com.au/free-resources/parents" },
  openGraph: {
    title: "Free Parents Pack · Resonant Studios",
    description:
      "Three free NDIS resources for parents: Funding Guide, Plan-Review Worksheet, Parent Swipe Files.",
    url: "https://resonantstudios.com.au/free-resources/parents",
    type: "article",
  },
};

// Lead-magnet form for The Parents Pack — provided 2026-05-28.
// Form ID:    dgj9ZYBJWvXUpjlc21fR
// GHL name:   04 | Parent Pack Lead Magnet Form
// Custom CSS: forms/ghl-design-system.css (paste into the form's
//             Custom CSS panel inside the GHL builder). The same
//             CSS file is used for both lead-magnet forms — both
//             share the Resonant Studios design system. If the form
//             is ever paused, blank GHL_FORM_ID and the conditional
//             below restores the placeholder copy.
const GHL_FORM_ID = "dgj9ZYBJWvXUpjlc21fR";
const GHL_FORM_SRC = GHL_FORM_ID
  ? `https://link.teamos.ai/widget/form/${GHL_FORM_ID}`
  : "";
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

export default function ParentsResourcesPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="parents-hero"
        style={{ backgroundImage: "url('/library/photos/tony-with-participant.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Free resources · for parents</div>
            <h1 id="parents-hero">The Parents <em>Pack.</em></h1>
            <p className="rs-hero-lead">
              Three plain-English pieces that answer the question every parent
              asks first — can I use my teen&apos;s NDIS plan for music? — and
              give you the exact words to use at your next plan review. Free.
              Pen-and-paper friendly.
            </p>
            <div className="rs-hero-cta">
              <a className="btn" href="#download">Get the pack</a>
              <Link className="btn btn-on-image" href="/book">Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>
          This page has three free PDFs for parents. You give us your name and
          email. We send the PDFs to your inbox. You read them before your next
          plan-review meeting.
        </p>
      </aside>

      <section className="rs-page-section" id="whats-inside">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">What&apos;s inside</div>
            <h2>Three pieces. Read in one sitting.</h2>
            <p>
              The Funding Guide answers the big question. The Plan-Review
              Worksheet turns that answer into a specific ask at your next
              meeting. The Swipe Files compress the whole thing into a
              seven-card deck you can keep on your phone.
            </p>
          </header>

          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <div className="eyebrow" style={{ color: "var(--primary)" }}>Piece 01</div>
              <h3 className="rs-feature-h">The Funding Guide</h3>
              <p>
                A short, plain-English guide for parents of teenagers with an
                NDIS plan. Six pages. No jargon. No selling. Covers how
                Capacity Building funding actually works, what 09_009_0117_6_3
                means, what to ask for at your plan review, how to vet a
                creative provider, and what the 12-week journey looks like.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Six pages · the answer every parent asks first.
              </p>
            </li>

            <li className="card">
              <div className="eyebrow" style={{ color: "var(--secondary)" }}>Piece 02</div>
              <h3 className="rs-feature-h">The Plan-Review Worksheet</h3>
              <p>
                A two-page printable to fill in before your teen&apos;s next
                plan-review meeting. Three reflection prompts on the front
                (strengths, where they&apos;re stuck, success vision), three
                specific asks on the back (the goal sentence, the budget, and
                three questions for the planner). Walk in with a real plan,
                not a vague hope.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Two pages · pen-and-paper · bring it with you.
              </p>
            </li>

            <li className="card">
              <div className="eyebrow" style={{ color: "var(--accent)" }}>Piece 03</div>
              <h3 className="rs-feature-h">The Parent Swipe Files</h3>
              <p>
                A seven-card swipe file you can keep on your phone — the line
                item, the language to use, the words to avoid, what to look
                for in a creative provider, and what the 12-week journey
                actually feels like. Built for moments when you need the
                answer fast.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Seven cards · screenshot-friendly · save to your phone.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken" id="download">
        <div className="rs-page-container">
          <div className="rs-book-card">
            <header className="rs-book-header">
              <div className="eyebrow" style={{ marginBottom: 10 }}>Get the pack</div>
              <h2 className="rs-book-title">Send the pack to my inbox.</h2>
              <p className="rs-book-lead">
                Enter your name and email. We send the three PDFs straight to
                your inbox — no follow-up calls unless you ask. You can
                unsubscribe in one click. We never share your details.
              </p>
            </header>

            <div className="rs-book-context-strip">
              <div>
                <div className="eyebrow" style={{ color: "var(--secondary)", marginBottom: 6 }}>What you&apos;ll get</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  Three PDFs — the Funding Guide, the Plan-Review Worksheet,
                  and the Parent Swipe Files. Print-ready. Built for busy
                  parents who want the right answer, fast.
                </p>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 6 }}>What happens next</div>
                <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)", margin: 0, lineHeight: 1.55 }}>
                  The email lands inside a minute. If you have a question
                  about whether your teen&apos;s plan covers this, Tony
                  reads every message and replies inside one business hour.
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
                  data-form-name="04 | Parent Pack Lead Magnet Form 🧲"
                  data-height="490"
                  data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                  data-form-id={GHL_FORM_ID}
                  title="04 | Parent Pack Lead Magnet Form 🧲"
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
                    we&apos;ll send the pack straight to you.
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
              Working with a support coordinator?{" "}
              <Link href="/free-resources/coordinators">Send them The Support Coordinator Combo →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section editorial" aria-labelledby="who-its-for">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Who it&apos;s for</div>
            <h2 id="who-its-for">Built for parents about to walk into a plan review.</h2>
          </header>
          <ul className="rs-check-list" role="list">
            <li>Parents of teenagers with an NDIS plan who are wondering if music sessions are covered.</li>
            <li>Carers preparing for a plan-review meeting and unsure what to ask for.</li>
            <li>Families who&apos;ve been told &ldquo;ask for music therapy&rdquo; but aren&apos;t sure that&apos;s right.</li>
            <li>Anyone vetting a creative arts provider before signing a service agreement.</li>
          </ul>
        </div>
      </section>

      {/* Closing cross-link band — points to coordinators pack + offers a call. */}
      <section
        className="rs-cta-band"
        id="next-step"
        style={{ backgroundImage: "url('/library/photos/music-studio.jpg')" }}
      >
        <div className="rs-cta-band-inner">
          <div className="eyebrow" style={{ color: "var(--terra-300)" }}>Next step</div>
          <h2>Want to talk it through?</h2>
          <p>
            Book a free fifteen-minute discovery call with Tony. Bring your
            teen&apos;s situation, what their plan currently covers, and we&apos;ll
            talk through whether Resonant Studios is the right fit.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            <Link className="btn btn-on-image btn-lg" href="/ndis-funding">NDIS funding overview</Link>
          </div>
        </div>
      </section>

      {/* GHL embed loader — only rendered when a form is configured. */}
      {GHL_FORM_ID && <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />}
    </>
  );
}
