/**
 * Every version of this site stays online at its own subdomain — each one is a
 * snapshot of what I could build at the time.
 *
 * Each entry maps to a git branch in this repo:
 *   v2 → main   ·   v1 → v1   ·   v0 → v0
 */
export const versions = [
  {
    id: 'v2',
    label: 'v2',
    year: '2026',
    url: 'https://josiahturnquist.com',
    stack: 'Next.js 16 · TypeScript · Tailwind v4',
    current: true,
  },
  {
    id: 'v1',
    label: 'v1',
    year: '2023',
    url: 'https://v1.josiahturnquist.com',
    stack: 'Create React App · MUI',
    current: false,
  },
  {
    id: 'v0',
    label: 'v0',
    year: '2021',
    url: 'https://v0.josiahturnquist.com',
    stack: 'React, my first solo project',
    current: false,
  },
] as const;
