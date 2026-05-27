'use client';
import { useEffect } from 'react';

// GHL forms live in cross-origin iframes (link.teamos.ai). This bridge reads
// the site's data-theme from <html> and forwards it via postMessage so the
// GHL custom CSS can use :root[data-theme="dark"] selectors instead of
// prefers-color-scheme (which follows the OS, not the site toggle).
//
// Pair with the one-liner in handoff/integrations/ghl-form-theme-receiver.html
// that must be added to the GHL form's Custom HTML field.

const GHL_ORIGIN = 'https://link.teamos.ai';

export default function GhlThemeBridge() {
  useEffect(() => {
    function getTheme() {
      return document.documentElement.getAttribute('data-theme') ?? 'light';
    }

    function sendTheme(win: Window | null, theme: string) {
      if (!win) return;
      try { win.postMessage({ type: 'rs:theme', value: theme }, GHL_ORIGIN); } catch { /* cross-origin guard */ }
    }

    function broadcastTheme(theme: string) {
      document.querySelectorAll<HTMLIFrameElement>('iframe[src*="link.teamos.ai"]').forEach(f => {
        sendTheme(f.contentWindow, theme);
      });
    }

    // When the GHL iframe posts any message (e.g. its resize ping), reply with
    // the current theme. This resolves the race: we don't know when GHL's
    // listener script has finished loading, but its first outbound message
    // tells us it's ready.
    function onMessage(e: MessageEvent) {
      if (e.origin !== GHL_ORIGIN) return;
      sendTheme(e.source as Window, getTheme());
    }

    // Also broadcast whenever the site theme toggle flips.
    const observer = new MutationObserver(() => broadcastTheme(getTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    window.addEventListener('message', onMessage);
    return () => {
      observer.disconnect();
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return null;
}
