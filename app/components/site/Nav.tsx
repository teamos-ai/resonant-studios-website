"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import AccessibilityMenu from "../ui/AccessibilityMenu";

// Theme is handled inside the AccessibilityMenu dropdown — no separate
// toggle button (per user feedback 2026-05-22).

const links = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/sessions", label: "Sessions" },
  { href: "/ndis-funding", label: "Funding" },
  { href: "/for-support-coordinators", label: "Coordinators" },
];

// Lead-magnet pages. Shown as a hover-and-keyboard dropdown on desktop
// and as a labelled section in the mobile drawer.
const resourceLinks = [
  {
    href: "/free-resources/coordinators",
    label: "Coordinator Combo",
    sub: "Compliance checklist, cheat sheet, swipe files",
  },
  {
    href: "/free-resources/parents",
    label: "Parent Pack",
    sub: "Funding guide, plan-review worksheet, swipe files",
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const resWrapRef = useRef<HTMLDivElement | null>(null);
  const resTriggerRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll when mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc closes both drawer and resources dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (resOpen) { setResOpen(false); resTriggerRef.current?.focus(); }
      if (open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, resOpen]);

  // Close the resources dropdown on outside click.
  useEffect(() => {
    if (!resOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (resWrapRef.current && !resWrapRef.current.contains(e.target as Node)) {
        setResOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [resOpen]);

  return (
    <>
      <header className="rs-floating-nav" aria-label="Primary">
        <Link href="/" className="rs-nav-logo" aria-label="Resonant Studios — home">
          <Image
            src="/library/logos/nav-logo-square.png"
            alt="Resonant Studios"
            width={56}
            height={56}
            priority
          />
        </Link>

        <nav className="rs-nav-links" aria-label="Site sections">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}

          <div
            ref={resWrapRef}
            className="rs-nav-dropdown"
            data-open={resOpen ? "true" : "false"}
            onMouseEnter={() => setResOpen(true)}
            onMouseLeave={() => setResOpen(false)}
          >
            <button
              ref={resTriggerRef}
              type="button"
              className="rs-nav-dropdown-trigger"
              aria-haspopup="menu"
              aria-expanded={resOpen}
              aria-controls="rs-resources-menu"
              onClick={() => setResOpen((v) => !v)}
              onFocus={() => setResOpen(true)}
              onBlur={(e) => {
                const next = e.relatedTarget as Node | null;
                if (!next || !resWrapRef.current?.contains(next)) setResOpen(false);
              }}
            >
              Resources
              <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
            </button>

            <div
              id="rs-resources-menu"
              className="rs-nav-dropdown-menu"
              role="menu"
              aria-label="Free resources"
            >
              {resourceLinks.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  role="menuitem"
                  onClick={() => setResOpen(false)}
                >
                  <span className="rs-nav-dropdown-label">{r.label}</span>
                  <span className="rs-nav-dropdown-sub">{r.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="rs-nav-controls">
          <AccessibilityMenu />
          <Link className="btn rs-nav-cta" href="/book">Book a call</Link>
          <button
            type="button"
            className="rs-burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={20} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      {open && (
        <div className="rs-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="rs-drawer-head">
            <Link href="/" className="rs-nav-logo" onClick={() => setOpen(false)}>
              <Image
                src="/library/logos/nav-logo-square.png"
                alt="Resonant Studios"
                width={56}
                height={56}
              />
            </Link>
            <button
              type="button"
              className="rs-burger"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} strokeWidth={1.75} />
            </button>
          </div>

          <nav className="rs-drawer-links" aria-label="Site sections">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}

            <div className="rs-drawer-section" aria-labelledby="rs-drawer-resources-heading">
              <div id="rs-drawer-resources-heading" className="rs-drawer-section-title">Free resources</div>
              {resourceLinks.map((r) => (
                <Link key={r.href} href={r.href} onClick={() => setOpen(false)}>{r.label}</Link>
              ))}
            </div>
          </nav>

          <Link className="btn rs-drawer-cta" href="/book" onClick={() => setOpen(false)}>
            Book a call
          </Link>
        </div>
      )}
    </>
  );
}
