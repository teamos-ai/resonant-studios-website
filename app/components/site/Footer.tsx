import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rs-footer" role="contentinfo">
      <div className="rs-footer-container">

        <div className="rs-footer-aoc" role="note" aria-label="Acknowledgement of Country">
          <strong>We acknowledge</strong> the Traditional Custodians of the lands on which we work and create — the Wadawurrung and Bunurong peoples — and pay our respects to their Elders past, present, and emerging. Sovereignty was never ceded.
        </div>

        <div className="rs-footer-grid">

          <div className="rs-footer-brand">
            <Link href="/" className="rs-footer-logo" aria-label="Resonant Studios — home">
              <Image
                src="/library/logos/footer-logo-wide.png"
                alt="Resonant Studios"
                width={300}
                height={96}
              />
            </Link>
            <p className="rs-footer-tagline">Your song. Your story. On Spotify.</p>
            <p className="rs-footer-bio">A boutique, NDIS-aligned music production studio in Werribee. Twelve weeks. One finished song. Released under your name. Built and run by Tony Rako.</p>
            <Link className="btn rs-footer-cta" href="/book">Book a call</Link>
          </div>

          <div className="rs-footer-col">
            <div className="rs-footer-col-title">For participants</div>
            <ul className="rs-footer-list">
              <li><Link href="/about">About Tony &amp; the studio</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/sessions">What a session looks like</Link></li>
              <li><Link href="/ndis-funding">NDIS funding</Link></li>
              <li><Link href="/book">Book a call</Link></li>
            </ul>
          </div>

          <div className="rs-footer-col">
            <div className="rs-footer-col-title">For support coordinators</div>
            <ul className="rs-footer-list">
              <li><Link href="/for-support-coordinators">Why refer here</Link></li>
              <li><Link href="/for-support-coordinators#outcomes">Outcomes &amp; reporting</Link></li>
              <li><Link href="/for-support-coordinators#referral">How to refer</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="rs-footer-col">
            <div className="rs-footer-col-title">Studio</div>
            <ul className="rs-footer-list rs-footer-contact">
              <li>
                <span className="rs-footer-eyebrow">Visit</span>
                Werribee, Victoria<br />
                <span className="rs-footer-soft">By appointment only</span>
              </li>
              <li>
                <span className="rs-footer-eyebrow">Email</span>
                <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a>
              </li>
              <li>
                <span className="rs-footer-eyebrow">Phone</span>
                <span className="rs-footer-soft">Phone — coming soon</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="rs-footer-disclaimer">
          <p><strong>NDIS disclosure.</strong> Resonant Studios is an unregistered NDIS provider. We support self-managed and plan-managed NDIS participants. Supports may be funded under an NDIS plan where aligned with participant goals. Funding eligibility depends on individual NDIS plan goals and funding categories — we recommend talking with your support coordinator or plan manager before booking.</p>
          <p>Resonant Studios provides support services and does not provide clinical or therapeutic interventions.</p>
        </div>

        <div className="rs-footer-bottom">
          <div className="rs-footer-social">
            <a href="#" aria-label="Resonant Studios on Instagram" rel="me noopener"><Instagram size={20} strokeWidth={1.75} /></a>
            <a href="#" aria-label="Resonant Studios on Facebook" rel="me noopener"><Facebook size={20} strokeWidth={1.75} /></a>
            <a href="#" aria-label="Resonant Studios on Spotify" rel="me noopener"><Music size={20} strokeWidth={1.75} /></a>
          </div>

          <div className="rs-footer-legal">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms">Terms</Link>
            <span aria-hidden="true">·</span>
            <Link href="/accessibility">Accessibility</Link>
          </div>

          <div className="rs-footer-copy">
            © {year} Resonant Studios · Tony Rako · ABN coming soon
          </div>
        </div>

      </div>
    </footer>
  );
}
