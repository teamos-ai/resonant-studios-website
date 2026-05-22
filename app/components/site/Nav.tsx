"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

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
          </nav>
          <Link className="btn rs-drawer-cta" href="/book" onClick={() => setOpen(false)}>
            Book a call
          </Link>
        </div>
      )}
    </>
  );
}
