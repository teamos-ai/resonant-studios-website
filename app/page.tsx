import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, Disc3, Headphones } from "lucide-react";
import { JsonLd } from "./lib/seo/JsonLd";
import { localBusinessSchema } from "./lib/seo/schemas";

export const metadata: Metadata = {
  title: "Resonant Studios — NDIS music production in Melbourne's west",
  description:
    "A boutique, NDIS-aligned music production studio in Yarraville VIC. Personalised one-on-one sessions working towards your own music, released on Spotify under your name. Built and run by Tony Rako.",
  alternates: { canonical: "https://resonantstudios.com.au/" },
  openGraph: {
    title: "Resonant Studios — NDIS music production in Melbourne's west",
    description:
      "A boutique, NDIS-aligned music production studio in Yarraville VIC. Personalised one-on-one sessions working towards your own music, released on Spotify under your name.",
    url: "https://resonantstudios.com.au/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} id="schema-localbusiness" />
      {/* HERO — 80vh photo backdrop with content overlay */}
      <section
        className="rs-hero"
        aria-labelledby="hero-heading"
        style={{ backgroundImage: "url('/library/photos/music-studio.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Accessible music studio · Yarraville VIC</div>
            <h1 id="hero-heading">
              Your song. <em>Your story.</em><br />On Spotify.
            </h1>
            <p className="rs-hero-lead">
              Personalised one-on-one music sessions in Melbourne&apos;s west for NDIS participants. Develop creative skills, build confidence, and explore songwriting, recording, and music production in a supportive and accessible studio environment while working towards your own professionally recorded and released music.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <Link className="btn btn-on-image" href="/intake">Intake form</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM — image + paired contrast cards */}
      <section className="rs-page-section tone-sunken" aria-labelledby="problem-heading">
        <div className="rs-page-container">
          <div className="rs-twocol">
            <div className="rs-twocol-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/library/photos/tony-mixing-profile.jpg" alt="Tony Rako in profile at the mixing desk." />
            </div>
            <div className="rs-twocol-content">
              <div className="eyebrow" style={{ color: "var(--secondary)" }}>Why we built this</div>
              <h2 id="problem-heading" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h1)", lineHeight: "var(--lh-heading)", letterSpacing: "var(--track-tight)", margin: 0 }}>
                Music matters.<br /><em style={{ fontStyle: "italic", color: "var(--ink-2)" }}>Access is hard.</em>
              </h2>
              <p className="lead">
                Many people with disabilities want to make music but face barriers — inaccessible spaces, fear of judgment, or difficulty finding supportive creative environments.
              </p>
              <p style={{ color: "var(--ink-2)", lineHeight: "var(--lh-body)" }}>
                You deserve something meaningful and lasting — something you made, something you own, something you can share with the people who matter most.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)", marginTop: "var(--s-2)" }} className="grid-2">
                <div className="card" style={{ background: "var(--bg)" }}>
                  <div className="eyebrow" style={{ color: "var(--ink-muted)" }}>The barrier</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h3)", margin: "var(--s-2) 0 var(--s-2)" }}>Programs without real outcomes</h3>
                  <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)" }}>Group activities at the room&apos;s pace. No real recording, nothing tangible to keep when sessions end.</p>
                </div>
                <div className="card" style={{ background: "var(--bg)", boxShadow: "var(--shadow-sm), inset 0 0 0 1px var(--primary-wash)" }}>
                  <div className="eyebrow">What we do instead</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--fs-h3)", margin: "var(--s-2) 0 var(--s-2)" }}>A finished, released song</h3>
                  <p style={{ color: "var(--ink-muted)", fontSize: "var(--fs-small)" }}>Personalised one-on-one sessions working towards your track on Spotify, released under your name.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — 3 feature cards */}
      <section className="rs-page-section" aria-labelledby="solution-heading">
        <div className="rs-page-container">
          <header className="rs-section-heading">
            <div className="eyebrow">What changes here</div>
            <h2 id="solution-heading">Built around what&apos;s missing.</h2>
            <p>Three things we made sure to get right. Each one answers a barrier most NDIS participants run into long before they reach a studio.</p>
          </header>
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Accessibility size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">An accessible studio, on purpose</h3>
              <p>Wheelchair access, sensory-friendly lighting, dimmable sound, a quiet break space. Support workers welcome at every session.</p>
            </li>
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Headphones size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Sessions shaped around you</h3>
              <p>Three hours, one-on-one with Tony. No rigid curriculum. We move at your pace toward whatever you want to make.</p>
            </li>
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Disc3 size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Your music on Spotify. Under your name.</h3>
              <p>We help you record, mix, master, and release your finished music to the same streaming platforms used by artists around the world. Yours to share.</p>
            </li>
          </ul>
          <p style={{ textAlign: "center", marginTop: "var(--s-7)" }}>
            <Link className="btn btn-ghost" href="/how-it-works">See the full Creative Journey →</Link>
          </p>
        </div>
      </section>

      {/* TESTIMONIAL — founder pull-quote */}
      <section className="rs-page-section tone-elevated" aria-labelledby="testimonial-heading">
        <div className="rs-page-container editorial">
          <h2 id="testimonial-heading" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>A note from the founder</h2>
          <div className="card" style={{ borderRadius: "var(--r-5)", padding: "clamp(var(--s-7), 6vw, var(--s-9))", textAlign: "center", background: "var(--bg)", boxShadow: "var(--shadow-md), var(--shadow-inset)", maxWidth: 880, margin: "0 auto" }}>
            <blockquote style={{ margin: 0 }}>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.35, color: "var(--ink)", margin: "0 auto", maxWidth: "36ch", letterSpacing: "var(--track-tight)" }}>
                I know what it&apos;s like when programs are built for someone else. I built Resonant Studios so it&apos;s built for{" "}
                <strong style={{ color: "var(--primary)", fontWeight: 500, fontStyle: "normal" }}>you</strong>.
              </p>
            </blockquote>
            <div style={{ marginTop: "var(--s-6)" }}>
              <div style={{ fontWeight: 600, color: "var(--ink)" }}>Tony Rako</div>
              <div style={{ fontSize: "var(--fs-micro)", color: "var(--ink-soft)", letterSpacing: "0.02em" }}>Founder · 25+ years producing music · lived disability experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA — full-bleed studio side photo */}
      <section
        className="rs-cta-band"
        aria-labelledby="final-cta-heading"
        style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}
      >
        <div className="rs-cta-band-inner">
          <div className="eyebrow" style={{ color: "var(--terra-300)" }}>Ready when you are</div>
          <h2 id="final-cta-heading">Let&apos;s talk about what you want to <em>make</em>.</h2>
          <p>Two ways to begin — start your sessions now, or book a free discovery call to ask questions first.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            {/* Intake form — placeholder href, swap to the intake-form URL once it's set up. */}
            <Link className="btn btn-on-image btn-lg" href="/intake">Intake form</Link>
          </div>
          <p className="rs-cta-band-foot">
            Prefer email? <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a> — Tony reads every message.
          </p>
        </div>
      </section>
    </>
  );
}
