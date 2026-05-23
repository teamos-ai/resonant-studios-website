import Link from "next/link";

export const metadata = {
  title: "Privacy policy — How Resonant Studios handles your personal information",
  description:
    "How Resonant Studios collects, uses, stores, and protects personal information under the Australian Privacy Act 1988. NDIS-aligned music production studio in Yarraville VIC.",
};

const EFFECTIVE_DATE = "22 May 2026";

export default function PrivacyPage() {
  return (
    <article className="rs-legal">
      <header className="rs-legal-header">
        <div className="rs-page-container prose">
          <div className="rs-hero-eyebrow" style={{ color: "var(--primary)" }}>Privacy</div>
          <h1>Privacy policy</h1>
          <p className="rs-lead">
            How Resonant Studios handles your personal information when you visit our website, book a discovery call, or work with us as an NDIS participant or support coordinator.
          </p>
          <p className="rs-legal-meta">
            <strong>Effective:</strong> {EFFECTIVE_DATE} &nbsp;·&nbsp;
            <strong>Last reviewed:</strong> {EFFECTIVE_DATE}
          </p>
          <p className="rs-legal-note">
            <strong>Working draft.</strong> This privacy policy is a working draft prepared for an unregistered NDIS provider operating in Victoria, Australia. We&apos;ll have a privacy lawyer review it before treating it as final. If anything in here looks wrong for your situation, tell us at <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a>.
          </p>
        </div>
      </header>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>This page tells you how we use the information you share with us. It also tells you who we share it with, and how to get in touch.</p>
      </aside>

      <div className="rs-page-container prose">

        <h2>1. About us</h2>
        <p>
          Resonant Studios is a sole trader business owned and operated by <strong>Tony Rako</strong> (ABN 17 544 307 578), trading as Resonant Studios. We deliver NDIS-aligned music production sessions for self-managed and plan-managed participants from <strong>Kindred Studios, 3 Harris Street, Yarraville VIC 3013</strong>. We are an unregistered NDIS provider.
        </p>
        <p>
          In this policy, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Resonant Studios. &quot;You&quot; refers to anyone whose personal information we hold — typically participants, their family members or support workers, support coordinators, and plan managers.
        </p>

        <h2>2. The law we follow</h2>
        <p>
          This policy is written to comply with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>13 Australian Privacy Principles (APPs)</strong>. As a small business operating in the NDIS space we voluntarily comply with the APPs even where the small business exemption might otherwise apply, because the sensitive nature of disability-related information makes the APP framework the right standard.
        </p>

        <h2>3. What we collect</h2>
        <p>We collect only what we need to deliver sessions, process payments, and meet our NDIS record-keeping obligations.</p>

        <h3>3.1 Information you give us directly</h3>
        <ul>
          <li>Your name (and the participant&apos;s name, if you&apos;re booking on someone else&apos;s behalf)</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>NDIS plan type (self-managed or plan-managed) and, where relevant, your plan manager&apos;s contact details</li>
          <li>Goals, interests, accessibility needs, and anything else you choose to share when booking a discovery call or during sessions</li>
          <li>Payment details where we invoice you directly (handled via your nominated plan manager or self-managed payment method — we do not store card numbers)</li>
        </ul>

        <h3>3.2 Sensitive information</h3>
        <p>
          Some of the information you share with us is &quot;sensitive information&quot; under the Privacy Act — for example, information about your disability, health, or support needs. We only collect sensitive information that&apos;s necessary to deliver sessions safely and to comply with NDIS requirements. We treat all sensitive information with extra care under APP 3.
        </p>

        <h3>3.3 Information collected automatically when you visit the website</h3>
        <ul>
          <li>Standard server logs from our website host — your IP address, browser type, the pages you visit, the date and time. We use these only for security and performance monitoring.</li>
          <li>Local browser storage of your accessibility preferences (theme, reading mode, motion, contrast). This is stored on your device under the key <code>rs-a11y</code> and never sent to our servers.</li>
        </ul>
        <p>
          We do <strong>not</strong> currently use analytics cookies, advertising cookies, social tracking pixels, or behavioural retargeting. If we add Google Analytics or similar in future, we&apos;ll update this policy and seek your consent where required.
        </p>

        <h2>4. How we use your information</h2>
        <p>We use your information only for purposes that fit one of the lawful bases below.</p>
        <ul>
          <li><strong>To deliver the service:</strong> respond to your enquiry, run your discovery call, book your sessions, work with your support coordinator or plan manager, send session reminders, and produce and release your finished song.</li>
          <li><strong>To invoice and get paid:</strong> issue NDIS-compliant invoices, send them to your plan manager (if plan-managed) or to you (if self-managed), and keep records of payments received.</li>
          <li><strong>To meet our legal obligations:</strong> keep records that the NDIS Quality and Safeguards Commission, the ATO, or other regulators may require us to keep.</li>
          <li><strong>To improve the service:</strong> reflect on what worked well and what didn&apos;t, on an anonymised basis where possible.</li>
        </ul>
        <p>
          We do <strong>not</strong> use your information for unsolicited marketing. If we ever want to send you a periodic update (for example, &quot;Tony&apos;s newsletter&quot;), we&apos;ll ask you to opt in first, and you&apos;ll be able to opt out in every message.
        </p>

        <h2>5. Who we share it with</h2>
        <p>We don&apos;t sell your personal information to anyone, ever. We share only with the people and organisations below, only when needed for one of the purposes above.</p>
        <ul>
          <li><strong>Your plan manager</strong> (if you&apos;re plan-managed) — for invoicing and payment.</li>
          <li><strong>Your support coordinator</strong> — only with your consent, and only the information you&apos;ve agreed we can share.</li>
          <li><strong>Our forms and calendar provider</strong> — when you fill out a booking, contact, or referral form, your responses are stored on our behalf by a third-party service. The provider processes data under our instructions and only for the purposes set out in this policy.</li>
          <li><strong>Our website hosting provider</strong> — server logs and any data flowing through the website pass through their infrastructure.</li>
          <li><strong>Music distribution services</strong> — when we release your finished song to streaming services under your name, we share the metadata needed for distribution (artist name, song title, release date). We do this with your written consent at the time of release.</li>
          <li><strong>The ATO and other regulators</strong> — if required by law (for example, tax records, NDIS Commission audits).</li>
        </ul>

        <h2>6. Information stored overseas</h2>
        <p>
          Some of the third-party services we use store data outside Australia, including hosting, forms and calendar, code repository, and music distribution providers. These are typically based in the United States or use cloud infrastructure that may include US data centres. We take reasonable steps to ensure overseas providers handle your information consistently with the APPs, but you should be aware that overseas privacy regimes may differ from Australian law. If you&apos;d like the names of specific service providers we use, contact us via the details at the bottom of this page and we&apos;ll provide them.
        </p>

        <h2>7. How long we keep it</h2>
        <p>
          We keep your information only for as long as we need it for the purposes above, plus any periods required by law.
        </p>
        <ul>
          <li><strong>Active participant records</strong> — for the duration of your sessions plus 7 years (NDIS, ATO, and general business record-keeping standard).</li>
          <li><strong>Discovery-call enquiries that don&apos;t lead to sessions</strong> — up to 12 months, then deleted.</li>
          <li><strong>Website server logs</strong> — typically 30 days at our hosting provider.</li>
          <li><strong>Marketing opt-in lists (if any)</strong> — until you unsubscribe.</li>
        </ul>

        <h2>8. How we keep it safe</h2>
        <p>We take reasonable steps to protect your information from misuse, loss, unauthorised access, modification, or disclosure:</p>
        <ul>
          <li>Cloud services protected by access controls and providers&apos; own security standards (our hosting, forms platform, and code repository all maintain SOC 2 or equivalent).</li>
          <li>Local devices used by Tony are password-protected with full-disk encryption.</li>
          <li>Email and form data is transmitted over HTTPS.</li>
          <li>Paper records (if any) are stored securely at the studio.</li>
        </ul>
        <p>If we ever suspect a data breach that may cause serious harm, we&apos;ll notify you and the Office of the Australian Information Commissioner (OAIC) as required by the Notifiable Data Breaches scheme.</p>

        <h2>9. Your rights</h2>
        <p>Under the APPs you have the right to:</p>
        <ul>
          <li><strong>Ask what we hold about you.</strong> We&apos;ll respond within 30 days.</li>
          <li><strong>Correct anything that&apos;s wrong.</strong> Just email us with the correction.</li>
          <li><strong>Ask us to delete information</strong> we no longer need (subject to NDIS and tax record-keeping requirements).</li>
          <li><strong>Withdraw your consent</strong> at any time. This won&apos;t affect anything we&apos;ve already done with your information lawfully.</li>
          <li><strong>Complain</strong> if you think we&apos;ve mishandled your information (see section 11 below).</li>
        </ul>
        <p>To exercise any of these rights, email <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a> with the words &quot;Privacy request&quot; in the subject line.</p>

        <h2>10. Children and young people</h2>
        <p>
          NDIS participants we work with are typically aged 15 and over. For participants under 18, we need consent from a parent, guardian, or other authorised representative before collecting personal information beyond what&apos;s needed for an initial discovery call. We don&apos;t knowingly collect information from children under 13 through the website.
        </p>

        <h2>11. Complaints and feedback</h2>
        <p>If you&apos;re unhappy with how we&apos;ve handled your information — or anything else about our service — please tell us first:</p>
        <ul>
          <li>Email: <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a></li>
          <li>Phone: <a href="tel:+61456225315">0456 225 315</a></li>
          <li>Post: Resonant Studios, c/o Kindred Studios, 3 Harris Street, Yarraville VIC 3013</li>
        </ul>
        <p>We&apos;ll acknowledge your complaint within 5 business days and respond substantively within 30 days.</p>
        <p>If you&apos;re not satisfied with how we resolve it, you can take it to:</p>
        <ul>
          <li>The <strong>Office of the Australian Information Commissioner</strong> (OAIC) — <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a> — for privacy complaints.</li>
          <li>The <strong>NDIS Quality and Safeguards Commission</strong> — <a href="https://www.ndiscommission.gov.au" target="_blank" rel="noopener noreferrer">ndiscommission.gov.au</a> — for complaints about NDIS-funded services.</li>
        </ul>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. If we make a material change, we&apos;ll update the &quot;Effective&quot; date at the top and, where reasonable, let you know directly. The current version always lives at <Link href="/privacy">resonantstudios.com.au/privacy</Link>.
        </p>

        <h2>13. Contact us</h2>
        <p>
          <strong>Resonant Studios</strong><br />
          Tony Rako, sole trader · ABN 17 544 307 578<br />
          Kindred Studios, 3 Harris Street, Yarraville VIC 3013<br />
          Email: <a href="mailto:info@resonantstudios.com.au">info@resonantstudios.com.au</a><br />
          Phone: <a href="tel:+61456225315">0456 225 315</a>
        </p>

        <hr className="rule" />
        <p className="rs-legal-foot">
          See also: <Link href="/terms">Website terms of use</Link> · <Link href="/accessibility">Accessibility statement</Link>
        </p>
      </div>
    </article>
  );
}
