import Link from "next/link";

export const metadata = { title: "About — Built by someone who gets it" };

export default function AboutPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="about-hero"
        style={{ backgroundImage: "url('/library/photos/tony-mixing-profile.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-bento" aria-hidden="true" />
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">About</div>
            <h1 id="about-hero">Built by <em>someone who gets it.</em></h1>
            <p className="rs-hero-lead">
              Tony Rako combines 25+ years of professional music production with disability advocacy and lived experience of disability. That combination is rare — and it&apos;s exactly why Resonant Studios exists.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <Link className="btn btn-on-image" href="/how-it-works">How sessions run</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container">
          <div className="rs-twocol image-right">
            <div className="rs-twocol-content">
              <div className="eyebrow">The studio</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h1)", lineHeight: "var(--lh-heading)", letterSpacing: "var(--track-tight)", margin: 0 }}>
                A real studio. <em style={{ color: "var(--ink-2)" }}>Designed for accessibility.</em>
              </h2>
              <p className="lead">
                When Tony looked at Melbourne&apos;s west, he saw a gap in accessible studio spaces that combined professional music production with a genuinely supportive environment for people with disabilities. No accessible spaces. No disability-informed staff. No pathway to a real, professional outcome.
              </p>
              <p style={{ color: "var(--ink-2)", lineHeight: "var(--lh-body)" }}>
                So he built one — Resonant Studios, a professional and accessible music studio <a href="https://www.google.com/maps/dir/?api=1&destination=Resonant+Studios+3+Harris+Street+Yarraville+VIC+3013" target="_blank" rel="noopener noreferrer">based in Yarraville</a>, with wheelchair access, carefully designed lighting, and support workers or family welcome.
              </p>
            </div>
            <div className="rs-twocol-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/library/photos/tony-console.jpg" alt="Tony Rako at the studio mixing console — wide warm-lit control room." />
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">What you&apos;ll find</div>
            <h2>Accessibility built into every detail.</h2>
            <p>Not bolted on after the fact. Every detail of the studio was chosen with people with disabilities in mind.</p>
          </header>
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <h3 className="rs-feature-h">Wheelchair access</h3>
              <p>Wide doorways, level entry, adjustable-height equipment and furniture. You don&apos;t need to ask.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Sensory-friendly</h3>
              <p>Adjustable lighting, soft ambient accent lighting, and flexible sound levels designed to help participants feel comfortable throughout the session.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Support workers welcome</h3>
              <p>Bring whoever helps you feel safe. We work alongside support workers, family, or carers — whatever you need.</p>
            </li>
          </ul>
          <p style={{ marginTop: "var(--s-7)", textAlign: "center", fontSize: "var(--fs-micro)", color: "var(--ink-soft)", maxWidth: "70ch", marginInline: "auto" }}>
            Resonant Studios provides support services and does not provide clinical or therapeutic interventions.
          </p>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Come see the studio.</h2>
          <p>The discovery call is free. We&apos;ll walk you through how the space works and what your first session would look like.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
