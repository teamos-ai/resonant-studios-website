"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import AccessibilityMenu from "../ui/AccessibilityMenu";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/sessions", label: "Sessions" },
  { href: "/ndis-funding", label: "Funding" },
  { href: "/for-support-coordinators", label: "Coordinators" },
];

const STORAGE_KEY = "rs-a11y";

function ThemeToggle() {
  const [resolved, setResolved] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const compute = (): "light" | "dark" => {
      const explicit = document.documentElement.getAttribute("data-theme");
      if (explicit === "light") return "light";
      if (explicit === "dark") return "dark";
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    };
    setResolved(compute());
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onMq = () => setResolved(compute());
    const observer = new MutationObserver(() => setResolved(compute()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    mq.addEventListener("change", onMq);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const toggle = () => {
    const next = resolved === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const settings = raw ? JSON.parse(raw) : {};
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...settings, theme: next }));
    } catch {}
    window.dispatchEvent(new CustomEvent("rs-a11y-update"));
  };

  const Icon = resolved === "light" ? Moon : Sun;
  const label = resolved === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggle}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        background: "transparent",
        color: "var(--ink)",
        border: "1.5px solid var(--rule-strong)",
        borderRadius: 10,
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
      }}
    >
      <Icon size={18} strokeWidth={1.75} />
    </button>
  );
}

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
          <ThemeToggle />
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
