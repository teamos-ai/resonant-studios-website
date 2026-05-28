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
     · `full: true` makes a tile span the full width (use it for
       a featured/standalone link like Spotify).
   Layout: 2-column grid, in array order. Instagram top-left,
   Facebook top-right, Spotify full-width below — matches the
   currently-configured order.
   ─────────────────────────────────────────────────────────── */
const SOCIAL: Array<{ label: string; url: string; full?: boolean }> = [
  { label: "Instagram", url: "https://www.instagram.com/resonantstudios.au" },
  { label: "Facebook",  url: "https://www.facebook.com/resonantstudios.au" },
  { label: "Spotify",   url: "https://open.spotify.com/artist/REPLACE_WITH_ARTIST_ID", full: true },
  { label: "TikTok",    url: "" },   // empty = hidden
  { label: "YouTube",   url: "" },   // empty = hidden
  { label: "LinkedIn",  url: "" },   // empty = hidden
];

/* ─────────────────────────────────────────────────────────────
   SPOTIFY EMBED — paste a single TRACK URL for the featured player.
     Track format (recommended):
       https://open.spotify.com/embed/track/<id>?utm_source=generator&theme=0
     Album / playlist also supported but use heavier heights.
   Height presets:
     · 80   — minimal (cover + play button only)
     · 152  — compact (cover + title + artist + progress) ← default
     · 352  — full panel (with upsell card, Spotify-marketing)
   ─────────────────────────────────────────────────────────── */
const SPOTIFY_EMBED_SRC =
  "https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh?utm_source=generator&theme=0";
const SPOTIFY_EMBED_HEIGHT = 152;

/* ─────────────────────────────────────────────────────────────
   vCARD QR CODE — encodes Tony's contact details into a single
   QR code. Scanning with any phone camera prompts "Add to
   Contacts" with all fields pre-filled. Edit the VCARD lines
   below to change what gets saved.

   The QR image is generated on demand by qrserver.com (a free,
   reliable QR API used by millions of sites). To switch to a
   pre-generated static file later: save a 600×600 PNG/SVG to
   public/library/qr/tony-vcard.svg and set QR_CODE_SRC to
   "/library/qr/tony-vcard.svg".
   ─────────────────────────────────────────────────────────── */
const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Rako;Tony;;;",
  "FN:Tony Rako",
  "ORG:Resonant Studios",
  "TITLE:Music Producer",
  "TEL;TYPE=CELL,VOICE:+61480893303",
  "EMAIL;TYPE=INTERNET,WORK:info@resonantstudios.com.au",
  "ADR;TYPE=WORK:;;3 Harris Street;Yarraville;VIC;3013;Australia",
  "URL:https://resonantstudios.com.au",
  "END:VCARD",
].join("\r\n");
const QR_CODE_SRC =
  `https://api.qrserver.com/v1/create-qr-code/?size=400x400&format=svg&margin=0&data=${encodeURIComponent(VCARD)}`;

export default function ConnectPage() {
  return (
    <main className="rs-connect">
      {/* HERO — two square tiles (QR + photo) + name + role + badge
          + quick contact icons. Tile chrome (radius, border) mirrors
          the Spotify embed for visual consistency. */}
      <section className="rs-connect-hero">
        <div className="rs-connect-hero-tiles">
          <div className="rs-connect-hero-tile rs-connect-hero-tile--qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={QR_CODE_SRC}
              alt="QR code — scan with your phone camera to save Tony Rako's contact details"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
          <div className="rs-connect-hero-tile rs-connect-hero-tile--photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/library/photos/tony-headshot.jpg"
              alt="Tony Rako, music producer at Resonant Studios"
            />
          </div>
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

      {/* FEATURED TRACK — compact Spotify embed surfaced at the top so
          new visitors can hear Tony's music before they scroll. Single
          track in a 152px-tall card; swap SPOTIFY_EMBED_SRC at the top
          of this file to change which track plays. */}
      <section className="rs-connect-section">
        <h2>Featured track</h2>
        <div className="rs-connect-spotify rs-connect-spotify--compact">
          <iframe
            src={SPOTIFY_EMBED_SRC}
            width="100%"
            height={SPOTIFY_EMBED_HEIGHT}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Tony Rako — featured track on Spotify"
          />
        </div>
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

      {/* SOCIAL LINKS — 2-column grid in array order. Items with
          `full: true` span both columns (use for featured links like
          a Spotify artist profile sitting below the small socials). */}
      <section className="rs-connect-section">
        <h2>Find me online</h2>
        <ul className="rs-connect-socials" role="list">
          {SOCIAL.filter((s) => s.url).map((s) => (
            <li
              key={s.label}
              className={s.full ? "rs-connect-social--wide" : undefined}
            >
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
