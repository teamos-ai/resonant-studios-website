import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

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
            <p className="rs-footer-bio">A boutique, NDIS-aligned music production studio in Yarraville. Twelve weeks. One finished song. Released under your name. Built and run by Tony Rako.</p>
            <Link className="btn rs-footer-cta" href="/book">Book a call</Link>
          </div>

          <div className="rs-footer-col">
            <div className="rs-footer-col-title">For participants</div>
            <ul className="rs-footer-list">
              <li><Link href="/about">About Tony &amp; the studio</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/sessions">What a session looks like</Link></li>
              <li><Link href="/ndis-funding">NDIS funding</Link></li>
              <li><Link href="/free-resources/parents">Free Parent Pack</Link></li>
              <li><Link href="/book">Book a call</Link></li>
            </ul>
          </div>

          <div className="rs-footer-col">
            <div className="rs-footer-col-title">For support coordinators</div>
            <ul className="rs-footer-list">
              <li><Link href="/for-support-coordinators">Why refer here</Link></li>
              <li><Link href="/for-support-coordinators#outcomes">Outcomes &amp; reporting</Link></li>
              <li><Link href="/for-support-coordinators#referral">How to refer</Link></li>
              <li><Link href="/free-resources/coordinators">Free Coordinator Combo</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="rs-footer-col">
            <div className="rs-footer-col-title">Studio</div>
            <ul className="rs-footer-list rs-footer-contact">
              <li>
                <span className="rs-footer-eyebrow">Visit</span>
                Resonant Studios<br />
                3 Harris Street<br />
                Yarraville VIC 3013<br />
                <span className="rs-footer-soft">By appointment only</span>
              </li>
              <li>
                <span className="rs-footer-eyebrow">Phone</span>
                <a href="tel:+61480893303">0480 893 303</a>
              </li>
              <li>
                <span className="rs-footer-eyebrow">Email</span>
                <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a>
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
            <a href="https://www.instagram.com/resonant_studios_au/" target="_blank" aria-label="Resonant Studios on Instagram" rel="me noopener noreferrer"><Instagram size={20} strokeWidth={1.75} /></a>
            <a href="https://www.facebook.com/share/1CiExXGG4Z/" target="_blank" aria-label="Resonant Studios on Facebook" rel="me noopener noreferrer"><Facebook size={20} strokeWidth={1.75} /></a>
          </div>

          <div className="rs-footer-legal">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms">Terms</Link>
            <span aria-hidden="true">·</span>
            <Link href="/accessibility">Accessibility</Link>
          </div>

          <div className="rs-footer-copy">
            © {year} Resonant Studios · Tony Rako · ABN 17 544 307 578
          </div>
        </div>

      </div>
    </footer>
  );
}
