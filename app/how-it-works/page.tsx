import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works — From first call to Spotify release",
  description:
    "The Resonant Studios journey in five steps: discovery call, first session, songwriting and recording, mixing and mastering, and your song released on Spotify under your name.",
  alternates: { canonical: "https://resonantstudios.com.au/how-it-works" },
  openGraph: {
    title: "How it works · Resonant Studios",
    description:
      "From discovery call to a finished song on Spotify. The Resonant Studios process explained in plain English.",
    url: "https://resonantstudios.com.au/how-it-works",
    type: "article",
  },
};

const steps = [
  { n: "01", h: "Free discovery call", p: "A relaxed 30–45 minute conversation with Tony. We talk through your goals, how NDIS funding works for sessions, and whether Resonant Studios is the right fit. No pressure." },
  { n: "02", h: "First session", p: "Three hours in the studio. You bring your ideas. Tony brings 25+ years of professional music production experience. We start shaping what your song could be." },
  { n: "03", h: "Songwriting & recording", p: "Across the following weeks, we write lyrics, build the beat, record vocals and instruments — whatever the music needs, shaped around your goals and creative style. At your pace, in your style." },
  { n: "04", h: "Mixing & mastering", p: "Tony mixes and masters your finished track to the same professional standard he applies to major-label work — delivering the polished sound your music deserves." },
  { n: "05", h: "Released on Spotify", p: "Your song goes live on Spotify under your name. Friends, family, your support team — everyone can hear what you made. Yours to share, forever." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="how-hero"
        style={{ backgroundImage: "url('/library/photos/tony-synth-piano.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">How it works</div>
            <h1 id="how-hero">Idea to Spotify in <em>twelve weeks.</em></h1>
            <p className="rs-hero-lead">
              One discovery call. One session to explore your goals. A handful of weeks together. One finished song, released under your name. Here&apos;s the full path.
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
        <p>This page shows the five steps from your first call to your finished song on Spotify.</p>
      </aside>

      <section className="rs-page-section">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">The journey</div>
            <h2>Five steps. Twelve weeks. Your music.</h2>
            <p>Every step happens at your pace. If a week needs to be lighter, we go lighter. If a session needs to focus on lyrics instead of recording, we do that.</p>
          </header>
          <ol className="rs-steps">
            {steps.map((s) => (
              <li key={s.n} className="rs-step">
                <div className="rs-step-num">{s.n}</div>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Inside a session</div>
            <h2>A three-hour rhythm.</h2>
            <p>Most sessions follow the same shape, so you always know roughly what to expect.</p>
          </header>
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <h3 className="rs-feature-h">Hour 1 · Check in</h3>
              <p>Settle in, talk through how the week was, decide what we&apos;re focused on today. Songwriting, lyric ideas, listening back to what we made last time.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Hour 2 · Make</h3>
              <p>The actual recording, instrument practice, vocal takes, or production work. The studio is fully yours — you decide what we touch.</p>
            </li>
            <li className="card">
              <h3 className="rs-feature-h">Hour 3 · Listen back</h3>
              <p>Playback, small mix adjustments, set the next step. You leave with a rough mix to take home if you want one.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-cta-band" style={{ backgroundImage: "url('/library/photos/studio-side.jpg')" }}>
        <div className="rs-cta-band-inner">
          <h2>Ready to start the journey?</h2>
          <p>We start out with a call. It&apos;s where we work out if this is the right fit for you.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <Link className="btn btn-lg" href="/book">Book a call</Link>
            <Link className="btn btn-on-image btn-lg" href="/intake">Intake form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
