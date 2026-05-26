import Link from "next/link";
import Script from "next/script";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact — Get in touch with Tony" };

// Go High Level contact form — provided 2026-05-22.
// Form ID: CUDcn1a92JPBJjfpEcH1
// Direct link: https://link.teamos.ai/widget/form/CUDcn1a92JPBJjfpEcH1
const GHL_CONTACT_ID = "CUDcn1a92JPBJjfpEcH1";
const GHL_CONTACT_SRC = `https://link.teamos.ai/widget/form/${GHL_CONTACT_ID}`;
const GHL_EMBED_SCRIPT = "https://link.teamos.ai/js/form_embed.js";

export default function ContactPage() {
  return (
    <>
      <section
        className="rs-hero"
        aria-labelledby="contact-hero"
        style={{ backgroundImage: "url('/library/photos/control-room-wide.jpg')" }}
      >
        <div className="rs-hero-grid">
          <div className="rs-hero-bento" aria-hidden="true" />
          <div className="rs-hero-content">
            <div className="rs-hero-eyebrow">Contact</div>
            <h1 id="contact-hero">Get in touch with <em>Tony.</em></h1>
            <p className="rs-hero-lead">
              The fastest way is to book a free discovery call. If you&apos;d rather email, send a message — Tony reads every one.
            </p>
            <div className="rs-hero-cta">
              <Link className="btn" href="/book">Book a call</Link>
              <Link className="btn btn-on-image" href="/intake">Intake form</Link>
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
                Resonant Studios<br />
                3 Harris Street<br />
                Yarraville VIC 3013
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                By appointment only — discovery call first so we can plan access.<br />
                <a href="https://www.google.com/maps/dir/?api=1&destination=Resonant+Studios+3+Harris+Street+Yarraville+VIC+3013" target="_blank" rel="noopener noreferrer">Get directions →</a>
              </p>
            </li>
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Phone size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Call Tony</h3>
              <p><a href="tel:+61480893303" style={{ fontSize: "var(--fs-lead)", fontWeight: 500 }}>0480 893 303</a></p>
              <p style={{ color: "var(--ink-soft)", fontSize: "var(--fs-small)", marginTop: "var(--s-2)" }}>
                Call or text Tony directly. If he&apos;s in session he&apos;ll get back to you the same day.
              </p>
            </li>
            <li className="card">
              <span className="rs-feature-icon" aria-hidden="true"><Mail size={28} strokeWidth={1.5} /></span>
              <h3 className="rs-feature-h">Email</h3>
              <p><a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a></p>
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
          <div className="form-shell" style={{ background: "var(--bg-elevated)", border: "1px solid var(--rule)", borderRadius: "var(--r-4)", boxShadow: "var(--shadow-md)", padding: "var(--s-7)", maxWidth: 720, marginInline: "auto" }}>
            <div className="rs-contact-embed">
              <iframe
                src={GHL_CONTACT_SRC}
                id={`inline-${GHL_CONTACT_ID}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us Form"
                data-height="755"
                data-layout-iframe-id={`inline-${GHL_CONTACT_ID}`}
                data-form-id={GHL_CONTACT_ID}
                title="Contact us — Resonant Studios"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: 8, display: "block" }}
              />
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: "var(--s-4)", lineHeight: 1.5 }}>
              Form not loading?{" "}
              <a href={GHL_CONTACT_SRC} target="_blank" rel="noopener noreferrer">Open the contact form in a new tab →</a>
            </p>
          </div>
        </div>
      </section>

      {/* GHL embed loader — defers until after hydration so it never blocks
          first paint. Listens for postMessage events from the contact form
          iframe and resizes it as content height changes. */}
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
