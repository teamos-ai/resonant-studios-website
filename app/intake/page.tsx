import Link from "next/link";

export const metadata = {
  title: "Start your sessions — Resonant Studios",
  description:
    "The fastest way to start your NDIS-aligned music sessions at Resonant Studios. Tell us a few things and we'll set up your first session.",
};

export default function IntakePage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="intake-hero"
        style={{ backgroundImage: "url('/library/photos/tony-hands-on-console.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-bento" aria-hidden="true" />
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Start your sessions</div>
            <h1 id="intake-hero">Let&apos;s set you up.</h1>
            <p className="rs-hero-lead">
              You already know you want to make music with us — beautiful. Tell us a few things and we&apos;ll get your first session booked.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <div
            className="form-shell"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--r-4)",
              boxShadow: "var(--shadow-md)",
              padding: "var(--s-7)",
              maxWidth: 720,
              marginInline: "auto",
            }}
          >
            <div style={{ marginBottom: "var(--s-5)" }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Intake form</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, lineHeight: 1.1, margin: 0, color: "var(--ink)" }}>
                Tell us about you
              </h2>
              <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, marginTop: 12 }}>
                The intake form is being finalised. In the meantime, the fastest way to start is to email Tony directly — he&apos;ll personally walk you through the first-session setup.
              </p>
            </div>

            {/* TODO: replace with the GHL intake-form iframe once it's built.
                Until then, surface the two reliable contact paths below. */}
            <div
              className="rs-embed-slot"
              style={{
                marginBottom: "var(--s-5)",
                background: "var(--bg)",
                border: "1px dashed var(--rule-strong)",
                borderRadius: "var(--r-2)",
                padding: "var(--s-6)",
                textAlign: "center",
                color: "var(--ink-soft)",
                fontSize: "var(--fs-small)",
              }}
            >
              Intake form coming soon.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
              <a
                className="btn"
                href="mailto:info@resonantstudios.com.au?subject=I%27m%20ready%20to%20start%20sessions"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Email Tony to get started
              </a>
              <Link
                className="btn btn-secondary"
                href="/book"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Book a discovery call instead
              </Link>
            </div>

            <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: "var(--s-5)", lineHeight: 1.5, textAlign: "center" }}>
              Tony reads every email and reaches back within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow">Not quite sure yet?</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h2)", lineHeight: 1.15, margin: "var(--s-3) auto var(--s-4)", letterSpacing: "var(--track-tight)", maxWidth: "26ch" }}>
              The discovery call is the lowest-pressure way to find out if we&apos;re right for you.
            </h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "56ch", marginInline: "auto" }}>
              Or read about <Link href="/how-it-works">how sessions run</Link>, the <Link href="/ndis-funding">NDIS funding</Link> path, or what <Link href="/sessions">a session actually looks like</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
