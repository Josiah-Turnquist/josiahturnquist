# josiahturnquist.com

My personal site and résumé. Built to be read by people *and* by machines:
recruiters increasingly hand a URL to an LLM before they open it themselves,
so everything here is server-rendered, structured, and available as plain text.

**Live:** [josiahturnquist.com](https://josiahturnquist.com)

## Stack

| Layer    | Tech                                            |
| -------- | ----------------------------------------------- |
| Framework| Next.js 16 (App Router, Turbopack) · React 19   |
| Language | TypeScript 5 (strict)                           |
| Styling  | Tailwind v4 (CSS-first tokens), no config file  |
| Type     | Instrument Serif · Inter · JetBrains Mono       |
| Hosting  | Netlify (Node 22)                               |

Every route prerenders to static HTML. There is no database and no runtime API.

## Layout

```
app/
  layout.tsx           fonts, metadata, pre-paint theme script, JSON-LD
  page.tsx             the single-page site
  resume/page.tsx      printable résumé
  llms.txt/route.ts    plain-text summary (llmstxt.org convention)
  resume.json/route.ts JSON Resume schema
  robots.ts            explicit allow-list for AI crawlers
  sitemap.ts
  opengraph-image.tsx  generated share card
content/               ← all site copy lives here
  profile.ts           bio, pitch, skills, education
  experience.ts        roles, newest first
  work.ts              projects
  versions.ts          the v0/v1/v2 subdomains
components/
lib/
```

**To update the site, edit `content/`.** The pages, the résumé, `llms.txt`, and
`resume.json` all read from those four files, so there is one source of truth
and no chance of the machine-readable copies drifting from the visible ones.

## Being readable by machines

This is a deliberate feature, not a side effect:

- **Server-rendered HTML.** All content is in the initial response, with no
  client-side fetching. Roles hidden behind an inactive filter stay in the DOM
  and are only visually hidden, so a crawler always sees the full history.
- **`/llms.txt`**: the entire site as plain text.
- **`/resume.json`**: [JSON Resume](https://jsonresume.org) schema, which
  applicant tracking systems parse directly.
- **JSON-LD**: a schema.org `Person` with `hasOccupation`, `alumniOf`,
  `knowsAbout`, and every project as `subjectOf`.
- **`robots.txt`** allows GPTBot, ClaudeBot, PerplexityBot, and friends by name.
- Semantic headings, real landmarks, and accessible names on every control.

## Versions

Each version of this site stays online at its own subdomain, and each maps to a
branch in this repo:

| Version | Branch | URL                                                            | Stack               |
| ------- | ------ | -------------------------------------------------------------- | ------------------- |
| v2      | `main` | [josiahturnquist.com](https://josiahturnquist.com)             | Next.js 16          |
| v1      | `v1`   | [v1.josiahturnquist.com](https://v1.josiahturnquist.com)       | Create React App    |
| v0      | `v0`   | [v0.josiahturnquist.com](https://v0.josiahturnquist.com)       | React, my first one |

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint
```
