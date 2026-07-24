'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function SiteHeader({ name }: { name: string }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let last = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Ignore jitter, and never hide the header near the top of the page.
      if (Math.abs(y - last) > 8) {
        setHidden(y > last && y > 320);
        last = y;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section is currently in the upper half of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={[
        'no-print fixed inset-x-0 top-0 z-50 transition-transform duration-500 [transition-timing-function:var(--ease-out-quint)]',
        hidden ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      <div
        className={[
          'border-b transition-colors duration-300',
          scrolled
            ? 'border-line bg-canvas/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-10"
        >
          {/* Wordmark in the same mono-label register as the section eyebrows;
              the display serif reads badly this small, plain sans reads like a nav link. */}
          <a
            href="#top"
            className="font-mono text-xs font-medium tracking-[0.16em] uppercase text-ink transition-colors hover:text-accent"
          >
            {name}
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <ul className="hidden items-center gap-1 sm:flex">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active === section.id ? 'true' : undefined}
                    className={[
                      'rounded-full px-3 py-1.5 text-sm transition-colors',
                      active === section.id
                        ? 'text-accent'
                        : 'text-muted hover:text-ink',
                    ].join(' ')}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume"
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Résumé
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
