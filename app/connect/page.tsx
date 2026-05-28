import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  Instagram,
  Facebook,
  UserPlus,
} from "lucide-react";

/* Spotify isn't in lucide-react (brand-icon cleanup in v0.x). Inlining
   a minimal SVG component so the social row stays dependency-light. */
function SpotifyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

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
     · `icon` is the leading brand glyph — Lucide for everything
       except Spotify, which uses the inline SpotifyIcon above.
   Layout: 2-column grid, in array order. Instagram top-left,
   Facebook top-right, Spotify full-width below.
   ─────────────────────────────────────────────────────────── */
type SocialEntry = {
  label: string;
  url: string;
  icon?: ComponentType<{ size?: number }>;
  full?: boolean;
};
const SOCIAL: SocialEntry[] = [
  { label: "Instagram", url: "https://www.instagram.com/resonantstudios.au", icon: Instagram },
  { label: "Facebook",  url: "https://www.facebook.com/resonantstudios.au",  icon: Facebook },
  { label: "Spotify",   url: "https://open.spotify.com/artist/REPLACE_WITH_ARTIST_ID", icon: SpotifyIcon, full: true },
  { label: "TikTok",    url: "" },   // empty = hidden (add icon when enabled)
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
   QR CODE — points to this /connect page (the same QR printed on
   the physical business card). Visitors who scan the on-screen QR
   with another device land on this page; visitors already on this
   page can show the QR to share the URL without typing.

   File: public/library/qr/connect.svg
   To regenerate: any QR generator (qr-code-generator.com works)
     · Data: https://www.resonantstudios.com.au/connect
     · Format: SVG (vector — sharper than PNG at every size)
   Drop the new file at the same path, no code change needed.
   ─────────────────────────────────────────────────────────── */
const QR_CODE_SRC = "/library/qr/connect.svg";

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
              alt="QR code linking to resonantstudios.com.au/connect — same code that's printed on Tony Rako's business card"
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
          {/* Save Contact — downloads tony-rako.vcf. On iOS the phone
              opens the "Add to Contacts" sheet directly; on Android +
              desktop the file downloads and opens with the default
              vCard handler (Contacts app on mobile). The vCard data
              lives at public/library/contacts/tony-rako.vcf — edit
              that file when contact details change. */}
          <li>
            <a
              href="/library/contacts/tony-rako.vcf"
              download="tony-rako.vcf"
              aria-label="Save Tony Rako to your contacts"
            >
              <UserPlus size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
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
          `full: true` span both columns (used for the featured Spotify
          link below the small socials). Each row leads with the brand
          icon followed by the platform name. */}
      <section className="rs-connect-section">
        <h2>Find me online</h2>
        <ul className="rs-connect-socials" role="list">
          {SOCIAL.filter((s) => s.url).map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.label}
                className={s.full ? "rs-connect-social--wide" : undefined}
              >
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {Icon ? <Icon size={18} /> : null}
                  <span>{s.label}</span>
                </a>
              </li>
            );
          })}
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
