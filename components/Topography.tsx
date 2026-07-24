'use client';

import { useEffect, useRef } from 'react';

/**
 * Contour-ring motif, descended from the mountain art on v1.
 *
 * Nine elliptical rings drawn on a canvas. Each ring is a loop of vertices;
 * vertices near the pointer are displaced with a gaussian falloff, so the
 * rings bow gently around the cursor like a magnet under paper. The pointer is
 * spring-damped, the displacement is deliberately small, and the rAF loop
 * idles once everything settles, so it costs nothing at rest.
 *
 * Pure decoration: aria-hidden, no pointer events, and reduced-motion users
 * get the rings drawn once, statically.
 */
export function Topography({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    // Ring geometry in a 1200×700 design space, scaled to the actual canvas.
    const RINGS = Array.from({ length: 9 }, (_, i) => ({
      r: 60 + i * 46,
      tilt: ((-14 + i * 1.4) * Math.PI) / 180,
      opacity: 1 - i * 0.07,
    }));
    const SEGMENTS = 150;
    const DESIGN_W = 1200;
    const DESIGN_H = 700;
    // Ring centre sits far right so the field clears the hero text.
    const CX = 1060;

    let width = 0;
    let height = 0;
    let scale = 1;
    let dpr = 1;
    let frame = 0;

    // Spring-damped pointer; `strength` fades the bend in and out.
    const target = { x: -1e4, y: -1e4 };
    const eased = { x: -1e4, y: -1e4 };
    let strength = 0;
    let targetStrength = 0;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      scale = Math.max(width / DESIGN_W, height / DESIGN_H);
      draw();
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const accent = getComputedStyle(canvas).color;
      const cx = width - (DESIGN_W - CX) * scale;
      const cy = height * 0.52;

      // Subtle but sweeping: a very wide, shallow gaussian swell, so half the
      // field leans away from the cursor by a few pixels rather than any one
      // spot denting hard.
      const radius = 520;
      const push = 12 * strength;
      const sigma2 = radius * radius;

      ctx.lineWidth = 1;
      ctx.strokeStyle = accent;

      for (const ring of RINGS) {
        const rx = ring.r * 1.5 * scale;
        const ry = ring.r * scale;
        const cos = Math.cos(ring.tilt);
        const sin = Math.sin(ring.tilt);

        ctx.beginPath();
        for (let i = 0; i <= SEGMENTS; i++) {
          const t = (i / SEGMENTS) * Math.PI * 2;
          const ex = Math.cos(t) * rx;
          const ey = Math.sin(t) * ry;
          let x = cx + ex * cos - ey * sin;
          let y = cy + ex * sin + ey * cos;

          if (push > 0) {
            const dx = x - eased.x;
            const dy = y - eased.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < sigma2 * 4) {
              const d = Math.sqrt(d2) || 1;
              const f = push * Math.exp(-d2 / sigma2);
              x += (dx / d) * f;
              y += (dy / d) * f;
            }
          }

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.globalAlpha = ring.opacity * 0.35;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    function tick() {
      frame = 0;
      eased.x += (target.x - eased.x) * 0.12;
      eased.y += (target.y - eased.y) * 0.12;
      strength += (targetStrength - strength) * 0.07;

      draw();

      const settled =
        Math.abs(target.x - eased.x) < 0.5 &&
        Math.abs(target.y - eased.y) < 0.5 &&
        Math.abs(targetStrength - strength) < 0.005;
      if (!settled) frame = requestAnimationFrame(tick);
    }

    function wake() {
      if (!frame) frame = requestAnimationFrame(tick);
    }

    function onMove(event: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;
      // First movement: snap the spring to the pointer instead of dragging
      // the dent across the whole hero.
      if (eased.x < -1e3) {
        eased.x = target.x;
        eased.y = target.y;
      }
      targetStrength = 1;
      wake();
    }

    function onLeave() {
      targetStrength = 0;
      wake();
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    if (!reducedMotion && finePointer) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Canvas inherits the accent via `color`, so theme switches repaint
          correctly. The radial mask fades the field toward the edges. */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full text-accent [mask-image:radial-gradient(58%_60%_at_76%_52%,black,transparent)]"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
