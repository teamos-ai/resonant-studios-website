"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Accessibility, ArrowLeft } from "lucide-react";

type Mode = "standard" | "accessible";

/**
 * Intake form accessibility switch.
 *
 * Renders both intake forms and toggles which one is visible. Neither is ever
 * removed from the page — the inactive panel is hidden with `visibility`,
 * which takes it out of the accessibility tree and out of the tab order. That
 * matters more than it looks: without it a screen reader would walk straight
 * through the "hidden" form's fields as well, and the user would meet two
 * intake forms back to back.
 *
 * Deliberately NOT `display: none`. That detaches the subtree from layout, so
 * a hidden GHL iframe reports a collapsed viewport — form_embed.js then reads
 * it as ~5px tall and pins that height. Switching back left the form stuck at
 * its CSS min-height with an inner scrollbar. `visibility: hidden` skips paint
 * but keeps layout, so each iframe holds the height its embed script measured.
 *
 * Both panels are passed in as slots so the GHL iframes stay server-rendered
 * — only the toggle state lives on the client.
 */
export default function IntakeFormSwitcher({
  standard,
  accessible,
}: {
  standard: ReactNode;
  accessible: ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("standard");

  const standardPanelRef = useRef<HTMLDivElement>(null);
  const accessiblePanelRef = useRef<HTMLDivElement>(null);
  // Guards the focus move so it only fires on a real switch, never on first
  // paint — otherwise landing on /intake would yank focus down the page.
  const hasSwitched = useRef(false);

  useEffect(() => {
    if (!hasSwitched.current) return;
    const panel =
      mode === "accessible" ? accessiblePanelRef.current : standardPanelRef.current;
    // Moving focus into the newly shown panel is what announces the change:
    // each panel is a labelled region, so the screen reader reads its name on
    // focus. No live region needed.
    panel?.focus();
  }, [mode]);

  const switchTo = useCallback((next: Mode) => {
    hasSwitched.current = true;
    setMode(next);
  }, []);

  return (
    <>
      {/* Switch prompt — standard mode only. Explanation sits before the
          button so the copy's "press the button below" stays true, and so a
          screen reader hears why before it hears the control. */}
      <div className="rs-a11y-switch" hidden={mode !== "standard"}>
        <p className="rs-a11y-switch-text">
          If you&apos;re using a screen reader or would prefer a simplified booking
          experience, press the button below to switch to our accessible form.
        </p>
        <button
          type="button"
          className="btn btn-lg"
          onClick={() => switchTo("accessible")}
          aria-label="Switch to Screen Reader Mode — show a simplified intake form built for screen readers and keyboard navigation"
        >
          <Accessibility size={20} strokeWidth={1.5} aria-hidden="true" />
          Switch to Screen Reader Mode
        </button>
      </div>

      {/* Positioning context: the inactive panel is taken out of flow but
          kept at full size so its GHL iframe still measures correctly. */}
      <div className="rs-form-panels">
      {/* ── Standard form ─────────────────────────────────────────────── */}
      <div
        ref={standardPanelRef}
        className="booking-form-standard"
        data-active={mode === "standard"}
        aria-hidden={mode !== "standard"}
        tabIndex={-1}
        role="region"
        aria-label="Standard intake form"
      >
        {standard}
      </div>

      {/* ── Accessible form ───────────────────────────────────────────── */}
      <div
        ref={accessiblePanelRef}
        className="booking-form-accessible"
        data-active={mode === "accessible"}
        aria-hidden={mode !== "accessible"}
        tabIndex={-1}
        role="region"
        aria-labelledby="accessible-form-heading"
      >
        <button
          type="button"
          className="btn btn-ghost rs-a11y-return"
          onClick={() => switchTo("standard")}
          aria-label="Return to Standard Form — show the original intake form"
        >
          <ArrowLeft size={20} strokeWidth={1.5} aria-hidden="true" />
          Return to Standard Form
        </button>

        <h3 id="accessible-form-heading" className="rs-a11y-panel-h">
          Accessible intake form
        </h3>
        <p className="rs-a11y-panel-lead">
          A simplified version of the same intake form — plain text fields, simple
          dropdowns, and full keyboard navigation. Your answers reach Tony exactly
          the same way.
        </p>

        {accessible}
      </div>
      </div>
    </>
  );
}
