import Link from "next/link";

export const metadata = { title: "Book a call — A relaxed 30–45 minute conversation" };

export default function BookPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="book-hero"
        style={{ backgroundImage: "url('/library/photos/tony-hands-on-console.jpg')" }}
      >
        <div className="rs-page-container">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Book a call</div>
            <h1 id="book-hero">Let&apos;s talk about <em>what you want to make.</em></h1>
            <p className="rs-hero-lead">
              A free 30–45 minute discovery call. Phone or Zoom — whichever suits you. Bring your support coordinator, family member, or anyone who helps you decide.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--rule)", borderRadius: "var(--r-4)", boxShadow: "var(--shadow-md)", padding: "var(--s-7)" }}>
            <div style={{ marginBottom: "var(--s-5)" }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Pick a time</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, lineHeight: 1.1, margin: 0, color: "var(--ink)" }}>A relaxed conversation, not a sales call.</h2>
              <p style={{ color: "var(--ink-muted)", fontSize: 14, lineHeight: 1.55, marginTop: 10, maxWidth: 480 }}>
                All times are Melbourne local. Sessions are 30–45 minutes. You&apos;ll get a confirmation email with the Zoom link or Tony&apos;s number once you book.
              </p>
            </div>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(240px, 1fr) minmax(280px, 1.4fr)", gap: "var(--s-6)", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <div className="eyebrow" style={{ color: "var(--secondary)" }}>What we&apos;ll cover</div>
                <ul style={{ paddingLeft: 18, color: "var(--ink-muted)", lineHeight: 1.6, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                  <li>Your goals and musical interests</li>
                  <li>How NDIS funding works for sessions</li>
                  <li>Accessibility needs and the studio setup</li>
                  <li>Booking your first session if you&apos;d like to</li>
                </ul>
                <p style={{ fontSize: "var(--fs-small)", color: "var(--ink-soft)", marginTop: "var(--s-4)" }}>
                  No pressure. No commitment. Just a chat about what you might want to make.
                </p>
              </div>
              <div className="rs-embed-slot" style={{ minHeight: 360 }}>
                {/* TODO: replace with GHL calendar iframe embed code */}
                Go High Level calendar embed — paste iframe here
              </div>
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: "var(--s-4)", lineHeight: 1.5 }}>
              Confirmation email arrives within a few minutes. If anything goes wrong with the booking, email <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a> and Tony will sort it out.
            </p>
          </div>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow">Not ready to book?</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h2)", lineHeight: 1.15, margin: "var(--s-3) auto var(--s-4)", letterSpacing: "var(--track-tight)", maxWidth: "24ch" }}>That&apos;s fine. Look around first.</h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "56ch", marginInline: "auto" }}>
              Read about <Link href="/how-it-works">how sessions run</Link>, the <Link href="/ndis-funding">NDIS funding</Link> path, or what <Link href="/sessions">a session actually looks like</Link>. When you&apos;re ready, the call is here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
