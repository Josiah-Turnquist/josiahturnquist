'use client';

import { useEffect } from 'react';

/**
 * The cursor-following glow carried over from v1, rebuilt.
 *
 * Writes pointer position to CSS custom properties on <html> and lets a single
 * fixed gradient layer do the painting — one rAF-throttled style write per
 * frame, no React re-renders, and nothing at all on touch devices.
 */
export function PointerGlow() {
  useEffect(() => {
    const root = document.documentElement;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    function paint() {
      frame = 0;
      root.style.setProperty('--mx', `${x}px`);
      root.style.setProperty('--my', `${y}px`);
    }

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    }

    root.dataset.glow = 'on';
    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
      delete root.dataset.glow;
    };
  }, []);

  return <div aria-hidden="true" className="pointer-glow" />;
}
