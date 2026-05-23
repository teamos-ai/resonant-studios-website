import Link from "next/link";

export const metadata = {
  title: "Accessibility statement — Resonant Studios",
  description:
    "Our commitment to making the Resonant Studios website usable by everyone, regardless of ability. WCAG 2.2 AA target.",
};

const EFFECTIVE_DATE = "22 May 2026";

export default function AccessibilityPage() {
  return (
    <article className="rs-legal">
      <header className="rs-legal-header">
        <div className="rs-page-container prose">
          <div className="rs-hero-eyebrow" style={{ color: "var(--primary)" }}>Accessibility</div>
          <h1>Accessibility statement</h1>
          <p className="rs-lead">
            We work with NDIS participants. Building a website our participants can actually use isn&apos;t a checkbox — it&apos;s the whole point.
          </p>
          <p className="rs-legal-meta">
            <strong>Effective:</strong> {EFFECTIVE_DATE} &nbsp;·&nbsp;
            <strong>Last reviewed:</strong> {EFFECTIVE_DATE}
          </p>
        </div>
      </header>

      <aside className="rs-easy-read-summary" role="note" aria-label="What this page is about">
        <strong>What this page is about</strong>
        <p>This page lists what we have done to make the website easier to use. It also tells you what to do if something does not work for you.</p>
      </aside>

      <div className="rs-page-container prose">

        <h2>Our commitment</h2>
        <p>
          We aim for <strong>WCAG 2.2 Level AA</strong> across every interactive surface of the Resonant Studios website. For long-form reading (body copy and articles), we target Level AAA contrast (7:1).
        </p>
        <p>
          We test this on every change, and we&apos;ll keep refining as the website grows. Accessibility is never &quot;done&quot; — it&apos;s a posture.
        </p>

        <h2>What we&apos;ve built in</h2>

        <h3>Visual</h3>
        <ul>
          <li><strong>Light and dark themes.</strong> Pick what&apos;s easiest on your eyes. The site follows your operating-system preference by default, and you can override it via the Accessibility menu.</li>
          <li><strong>No pure black.</strong> The dark theme uses a warm slate (<code>#181C1F</code>) instead of <code>#000</code> — avoids the halation effect that some readers (especially those with astigmatism) get from white text on pure black.</li>
          <li><strong>High-contrast mode.</strong> Toggle &quot;More contrast&quot; in the Accessibility menu to thicken borders and strengthen edges.</li>
          <li><strong>Honours <code>prefers-contrast: more</code>.</strong> If your operating system or browser is set to high contrast, the website picks it up automatically.</li>
        </ul>

        <h3>Reading</h3>
        <ul>
          <li><strong>Easy-read mode.</strong> Bumps body text to 1.125rem with a 45-character measure and tighter spacing — useful if smaller text is a struggle.</li>
          <li><strong>Dyslexia-friendly font.</strong> One click in the Accessibility menu switches the body face to <strong>Atkinson Hyperlegible</strong>, designed specifically to improve character recognition for low-vision and dyslexic readers.</li>
          <li><strong>Plain English Australia targets.</strong> Most participant-facing copy is written to a Year 7 reading level or simpler.</li>
          <li><strong>Acronyms spelled out</strong> on first use (we&apos;ll always say &quot;NDIS — National Disability Insurance Scheme&quot; the first time).</li>
        </ul>

        <h3>Motion</h3>
        <ul>
          <li><strong>Reduce motion.</strong> Toggle in the Accessibility menu, or set <code>prefers-reduced-motion: reduce</code> at the OS level. Transitions collapse to zero and any movement disappears.</li>
          <li><strong>No autoplay video or audio.</strong> Anywhere. If we ever add audio or video, we&apos;ll always require you to start it.</li>
          <li><strong>No parallax, springs, bouncing, or auto-rotating carousels.</strong> Out-expo easing only, durations capped at 420 ms.</li>
        </ul>

        <h3>Keyboard and assistive tech</h3>
        <ul>
          <li><strong>Skip link.</strong> The first thing the keyboard lands on every page is a &quot;Skip to content&quot; link that jumps over the navigation.</li>
          <li><strong>Visible focus rings.</strong> Every focusable element shows a 2 px primary-coloured outline with a 2 px offset, on every page, always. We never set <code>outline: none</code>.</li>
          <li><strong>48 × 48 px touch targets</strong> for any journey-advancing action (Material spec, larger than Apple&apos;s 44 px floor).</li>
          <li><strong>Single H1 per page</strong> with no skipped heading levels — screen-reader navigation by heading works as expected.</li>
          <li><strong><code>lang=&quot;en-AU&quot;</code></strong> set on every page so screen readers pronounce content with Australian English.</li>
          <li><strong>Visible labels on every form field</strong> — never placeholder-as-label. Required fields show a visible asterisk and an <code>aria-required</code> attribute plus a screen-reader-only &quot;Required&quot;.</li>
          <li><strong>Errors announced via <code>role=&quot;alert&quot;</code></strong> in plain language that tells you how to fix the problem.</li>
        </ul>

        <h3>Bandwidth and devices</h3>
        <ul>
          <li><strong>Honours <code>prefers-reduced-data</code>.</strong> If your browser signals it, heavy hero imagery collapses to a solid colour fallback.</li>
          <li><strong>Responsive layouts</strong> work down to 320 px wide. We test on phones, tablets, and desktops.</li>
        </ul>

        <h2>What might not work yet</h2>
        <p>We&apos;re transparent about where we know we have work to do:</p>
        <ul>
          <li><strong>The Go High Level forms</strong> embedded in <Link href="/book">/book</Link>, <Link href="/contact">/contact</Link>, and <Link href="/for-support-coordinators">/for-support-coordinators</Link> render inside an iframe and don&apos;t fully follow our design system&apos;s focus and contrast styling. We&apos;ve applied a tokenised CSS theme to bring them as close as possible. If a form is hard to use, please call Tony on <a href="tel:+61456225315">0456 225 315</a> or email <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a> — we&apos;ll book your call manually.</li>
          <li><strong>Photography on the website</strong> currently uses descriptive alternative text for images that carry meaning, and is marked decorative where it doesn&apos;t. We review this on every change.</li>
        </ul>

        <h2>If something isn&apos;t working for you</h2>
        <p>
          Please tell us. We want to know and we&apos;ll fix it as soon as we can.
        </p>
        <ul>
          <li>Email: <a href="mailto:hello@resonantstudios.com.au">hello@resonantstudios.com.au</a></li>
          <li>Phone: <a href="tel:+61456225315">0456 225 315</a></li>
        </ul>
        <p>
          If you&apos;re reporting an accessibility barrier, please describe what happened, what you were trying to do, and what assistive technology you were using (if any). We&apos;ll acknowledge within 2 business days and try to fix or work around the issue within 14 days.
        </p>

        <h2>External standards we reference</h2>
        <ul>
          <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
          <li><a href="https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes" target="_blank" rel="noopener noreferrer">Australian Human Rights Commission — Web Accessibility Advisory Notes</a></li>
          <li><a href="https://www.ndiscommission.gov.au" target="_blank" rel="noopener noreferrer">NDIS Quality and Safeguards Commission</a></li>
        </ul>

        <hr className="rule" />
        <p className="rs-legal-foot">
          See also: <Link href="/privacy">Privacy policy</Link> · <Link href="/terms">Website terms of use</Link>
        </p>
      </div>
    </article>
  );
}
