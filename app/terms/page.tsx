import Link from "next/link";

export const metadata = {
  title: "Website terms of use — Resonant Studios",
  description:
    "Terms governing your use of the Resonant Studios website. These are separate from any service agreement signed when you become a participant.",
};

const EFFECTIVE_DATE = "22 May 2026";

export default function TermsPage() {
  return (
    <article className="rs-legal">
      <header className="rs-legal-header">
        <div className="rs-page-container prose">
          <div className="rs-hero-eyebrow" style={{ color: "var(--primary)" }}>Terms</div>
          <h1>Website terms of use</h1>
          <p className="rs-lead">
            The terms that govern your use of the Resonant Studios website. These are separate from any NDIS service agreement you&apos;ll sign when you become a participant — that one covers the actual sessions.
          </p>
          <p className="rs-legal-meta">
            <strong>Effective:</strong> {EFFECTIVE_DATE} &nbsp;·&nbsp;
            <strong>Last reviewed:</strong> {EFFECTIVE_DATE}
          </p>
          <p className="rs-legal-note">
            <strong>Working draft.</strong> This page is a working draft. Before going live in front of regulators or in a dispute, we&apos;ll have a solicitor familiar with Australian consumer law review it. If something here looks off, email <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a>.
          </p>
        </div>
      </header>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>This page is the rules for using our website. The rules for the music sessions are in a separate agreement you sign when you join.</p>
      </aside>

      <div className="rs-page-container prose">

        <h2>1. Who we are</h2>
        <p>
          The website at <strong>resonantstudios.com.au</strong> is operated by <strong>Tony Rako</strong>, sole trader, trading as <strong>Resonant Studios</strong> (ABN 17 544 307 578), based at Kindred Studios, 3 Harris Street, Yarraville VIC 3013. In these terms, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; mean Resonant Studios. &quot;You&quot; means anyone who visits the website.
        </p>

        <h2>2. Agreement</h2>
        <p>
          By using the website you agree to these terms. If you don&apos;t agree, please stop using the website. We may update these terms from time to time — the latest version always lives at <Link href="/terms">resonantstudios.com.au/terms</Link>. If we make a material change we&apos;ll update the effective date at the top.
        </p>

        <h2>3. What the website is (and isn&apos;t)</h2>
        <p>
          The website is a marketing surface for our NDIS-aligned music production service. It exists to tell you about what we do, who Tony is, how the service works, what NDIS funding looks like, and how to book a free discovery call.
        </p>
        <p>
          The website is <strong>not</strong>:
        </p>
        <ul>
          <li>An offer to provide services to everyone who reads it (we operate from a single studio with limited capacity).</li>
          <li>A clinical or therapeutic service (Resonant Studios provides support services and does not provide clinical or therapeutic interventions).</li>
          <li>Legal, financial, medical, or NDIS-planning advice — please consult your support coordinator, plan manager, or relevant professional.</li>
        </ul>

        <h2>4. NDIS service agreement</h2>
        <p>
          If you go ahead and become a participant, you&apos;ll sign a separate <strong>NDIS Service Agreement</strong> at intake. That agreement governs the sessions, fees, cancellations, your goals, our responsibilities, and the consents you give us. These website terms are about the website only — the service agreement does the heavy lifting once you&apos;re working with us.
        </p>

        <h2>5. Acceptable use of the website</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website in a way that breaks any Australian or international law.</li>
          <li>Try to gain unauthorised access to the website, the server it&apos;s hosted on, or any related systems.</li>
          <li>Send automated traffic, scrape content at scale, or otherwise put unreasonable load on the website.</li>
          <li>Submit false or misleading information through any form on the website.</li>
          <li>Impersonate another person or misrepresent your affiliation with anyone.</li>
        </ul>

        <h2>6. Intellectual property</h2>
        <p>
          The website, its design system, its copy, its imagery, its logos, and the underlying code are owned by Resonant Studios (or licensed to us — for example, the typefaces DM Serif Display and Manrope are licensed under the SIL Open Font License). You&apos;re welcome to:
        </p>
        <ul>
          <li>View, read, and share links to the website.</li>
          <li>Quote short passages with attribution.</li>
        </ul>
        <p>You may not, without our written permission:</p>
        <ul>
          <li>Republish the copy, imagery, or code as your own.</li>
          <li>Modify, decompile, or reverse-engineer any part of the website.</li>
          <li>Use our logo, business name, or brand assets in a way that implies endorsement.</li>
        </ul>
        <p>Songs produced by participants in our studio remain the participant&apos;s intellectual property. The Service Agreement covers this in detail.</p>

        <h2>7. Third-party content and links</h2>
        <p>
          The website embeds forms and a calendar hosted by <strong>Go High Level</strong> (link.teamos.ai). Go High Level&apos;s privacy policy and terms apply to those embeds in addition to ours. The website may also link to other websites (for example, the Office of the Australian Information Commissioner, the NDIS Quality and Safeguards Commission). We don&apos;t control those websites and aren&apos;t responsible for their content.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          We do our best to keep the website accurate and up to date, but we don&apos;t warrant that everything is error-free, complete, or current. To the maximum extent permitted by law:
        </p>
        <ul>
          <li>The website is provided &quot;as is&quot;.</li>
          <li>We exclude any implied terms not expressly required by Australian Consumer Law.</li>
          <li>We&apos;re not liable for any indirect or consequential loss arising from your use of (or inability to use) the website.</li>
        </ul>
        <p>
          Nothing in these terms excludes any consumer guarantee under the <strong>Australian Consumer Law</strong> (Schedule 2 of the Competition and Consumer Act 2010). Where a consumer guarantee applies and we have failed to meet it, your remedy is limited (to the extent permitted by law) to either re-supply of the service or payment of the cost of having the service re-supplied.
        </p>

        <h2>9. Privacy</h2>
        <p>
          How we collect, use, and store information about you is covered in our <Link href="/privacy">Privacy Policy</Link>. By using the website, you confirm you&apos;ve read and understood it.
        </p>

        <h2>10. Complaints and feedback</h2>
        <p>
          We want to know if something on the website (or about our service) isn&apos;t working for you. Reach us:
        </p>
        <ul>
          <li>Email: <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a></li>
          <li>Phone: <a href="tel:+61456225315">0456 225 315</a></li>
        </ul>
        <p>
          For complaints about NDIS-funded services specifically, you can also contact the <strong>NDIS Quality and Safeguards Commission</strong> at <a href="https://www.ndiscommission.gov.au" target="_blank" rel="noopener noreferrer">ndiscommission.gov.au</a>.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of <strong>Victoria, Australia</strong>. Any dispute that we can&apos;t resolve directly is to be brought in the courts of Victoria.
        </p>

        <h2>12. Contact us</h2>
        <p>
          <strong>Resonant Studios</strong><br />
          Tony Rako, sole trader · ABN 17 544 307 578<br />
          Kindred Studios, 3 Harris Street, Yarraville VIC 3013<br />
          Email: <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a><br />
          Phone: <a href="tel:+61456225315">0456 225 315</a>
        </p>

        <hr className="rule" />
        <p className="rs-legal-foot">
          See also: <Link href="/privacy">Privacy policy</Link> · <Link href="/accessibility">Accessibility statement</Link>
        </p>
      </div>
    </article>
  );
}
