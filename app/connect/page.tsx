import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Tony Rako — Resonant Studios",
  description:
    "Connect with Tony Rako — music producer running an accessible, NDIS-aligned music studio in Yarraville, Melbourne. Book a discovery call, listen to my work, or grab the contact details.",
  alternates: { canonical: "https://resonantstudios.com.au/connect" },
  openGraph: {
    title: "Tony Rako — Resonant Studios",
    description: "Music producer · NDIS-aligned music sessions · Yarraville VIC",
    url: "https://resonantstudios.com.au/connect",
    type: "profile",
  },
};

/* ─────────────────────────────────────────────────────────────
   SOCIAL MEDIA LINKS — change these as accounts come online.
     · Set a URL to render the link.
     · Set to "" (empty string) to hide that social entirely.
   ─────────────────────────────────────────────────────────── */
const SOCIAL: Array<{ label: string; url: string }> = [
  { label: "Instagram", url: "https://www.instagram.com/resonantstudios.au" },
  { label: "LinkedIn",  url: "https://www.linkedin.com/in/tony-rako" },
  { label: "YouTube",   url: "https://www.youtube.com/@resonantstudios" },
  { label: "Spotify",   url: "https://open.spotify.com/artist/REPLACE_WITH_ARTIST_ID" },
  { label: "TikTok",    url: "" },   // empty = hidden
  { label: "Facebook",  url: "" },   // empty = hidden
];

/* ─────────────────────────────────────────────────────────────
   SPOTIFY EMBED — paste the artist / album / playlist URL.
     Format (artist):   https://open.spotify.com/embed/artist/<id>
     Format (album):    https://open.spotify.com/embed/album/<id>
     Format (playlist): https://open.spotify.com/embed/playlist/<id>
   Append ?utm_source=generator&theme=0 for the dark Spotify theme.
   ─────────────────────────────────────────────────────────── */
const SPOTIFY_EMBED_SRC =
  "https://open.spotify.com/embed/artist/4gzpq5DPGxSnKTe4SA8HAU?utm_source=generator&theme=0";

export default function ConnectPage() {
  return (
    <main className="rs-connect">
      {/* HERO — photo + name + role + badge + quick contact icons */}
      <section className="rs-connect-hero">
        <div className="rs-connect-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/library/photos/tony-headshot.jpg"
            alt="Tony Rako, music producer at Resonant Studios"
          />
        </div>
        <h1>Tony Rako</h1>
        <p className="rs-connect-role">Music Producer · Resonant Studios</p>
        <div className="rs-connect-badge">Accepting new participants</div>

        <ul
          className="rs-connect-quick-actions"
          role="list"
          aria-label="Quick contact"
        >
          <li>
            <a href="tel:+61480893303" aria-label="Call Tony Rako">
              <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="sms:+61480893303" aria-label="Text Tony Rako">
              <MessageCircle size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="mailto:info@resonantstudios.com.au"
              aria-label="Email Tony Rako"
            >
              <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </section>

      {/* AT A GLANCE — 3 stat cards, mirrors the Categories card in the reference */}
      <section className="rs-connect-stats" aria-label="At a glance">
        <div className="rs-connect-stat">
          <div className="rs-connect-stat-num">25+</div>
          <div className="rs-connect-stat-label">Years producing</div>
        </div>
        <div className="rs-connect-stat">
          <div className="rs-connect-stat-num">NDIS</div>
          <div className="rs-connect-stat-label">Aligned</div>
        </div>
        <div className="rs-connect-stat">
          <div className="rs-connect-stat-num">1:1</div>
          <div className="rs-connect-stat-label">Sessions</div>
        </div>
      </section>

      {/* PRIMARY LINKS — biggest tap targets, in priority order */}
      <section className="rs-connect-section">
        <h2>Get started</h2>
        <ul className="rs-connect-links" role="list">
          <li>
            <Link
              href="/book"
              className="rs-connect-link rs-connect-link--primary"
            >
              <span>Book a free discovery call</span>
              <Calendar size={18} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href="/sessions" className="rs-connect-link">
              <span>What a session looks like</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link href="/ndis-funding" className="rs-connect-link">
              <span>NDIS funding overview</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link
              href="/free-resources/coordinators"
              className="rs-connect-link"
            >
              <span>Free resources for support coordinators</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link href="/free-resources/parents" className="rs-connect-link">
              <span>Free resources for parents</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* SPOTIFY EMBED */}
      <section className="rs-connect-section">
        <h2>Listen to my work</h2>
        <div className="rs-connect-spotify">
          <iframe
            src={SPOTIFY_EMBED_SRC}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Tony Rako on Spotify"
          />
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="rs-connect-section">
        <h2>Find me online</h2>
        <ul className="rs-connect-socials" role="list">
          {SOCIAL.filter((s) => s.url).map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <span>{s.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* STUDIO ADDRESS */}
      <section className="rs-connect-section rs-connect-address">
        <h2>Visit the studio</h2>
        <p>
          Resonant Studios
          <br />
          3 Harris Street
          <br />
          Yarraville VIC 3013
        </p>
        <p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Resonant+Studios+3+Harris+Street+Yarraville+VIC+3013"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions →
          </a>
        </p>
        <p className="rs-connect-address-foot">
          By appointment only — book a discovery call first.
        </p>
      </section>
    </main>
  );
}
