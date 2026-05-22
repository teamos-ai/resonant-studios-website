import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact — Get in touch with Tony" };

export default function ContactPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="contact-hero"
        style={{ backgroundImage: "url('/library/photos/control-room-wide.jpg')" }}
      >
        <div className="rs-page-container">
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Contact</div>
            <h1 id="contact-hero">Get in touch with <em>Tony.</em></h1>
            <p className="rs-hero-lead">
              The fastest way is to book a free discovery call. If you&apos;d rather email, send a message — Tony reads every one.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <a className="btn btn-secondary" href="mailto:hello@resonantstudios.com.au" style={{ borderColor: "rgba(245,239,228,0.4)", color: "var(--ink-on-image)" }}>
                Email Tony
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rs-page-section">
        <div className="rs-page-container">
          <ul className="rs-feature-grid" role="list">
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><MapPin size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Visit the studio</h3>
              <p>
                Kindred Studios<br />
                3 Harris Street<br />
                Yarraville VIC 3013
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                By appointment only — discovery call first so we can plan access.<br />
                <a href="https://www.google.com/maps/dir/?api=1&destination=Kindred+Studios+3+Harris+Street+Yarraville+VIC+3013" target="_blank" rel="noopener noreferrer">Get directions →</a>
              </p>
            </li>
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Phone size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Call Tony</h3>
              <p><a href="tel:+61456225315" style={{ fontSize: "var(--fs-lead)", fontWeight: 500 }}>0456 225 315</a></p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Call or text Tony directly. If he&apos;s in session he&apos;ll get back to you the same day.
              </p>
            </li>
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Mail size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Email</h3>
              <p><a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a></p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Replies within 1 business day.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="rs-page-section tone-sunken">
        <div className="rs-page-container editorial">
          <header className="rs-section-heading">
            <div className="eyebrow">Send a message</div>
            <h2>Got a quick question?</h2>
            <p>Use the form below for anything that&apos;s not a booking. Tony will get back to you within a business day.</p>
          </header>
          <div className="form-shell" style={{ background: "var(--bg-elevated)", border: "1px solid var(--rule)", borderRadius: "var(--r-4)", boxShadow: "var(--shadow-md)", padding: "var(--s-7)", maxWidth: 640, marginInline: "auto" }}>
            <div className="rs-embed-slot">
              {/* TODO: replace with GHL contact form iframe embed code */}
              Go High Level contact form embed — paste iframe here
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
