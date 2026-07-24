import type { Project } from './types';

/**
 * Newest first. Every `url` here returned HTTP 200 when this file was written
 * (2026-07). Projects with no public URL are mobile apps or retired sites —
 * they carry no link rather than a dead one.
 */
export const work: Project[] = [
  {
    slug: 'church-table',
    name: 'Church Table',
    tagline: 'Church management: scheduling, ministries, events, boards, budgets, people.',
    description:
      'The centre of a four-product suite, shipping as both a native mobile app and a web app. Built as a monorepo: an Expo/React Native client, a React + Vite web client and marketing site, and one unified Express + ts-rest API on Railway over Neon Postgres. The interesting constraint was making a single typed API serve four very different clients without the schema turning to mud.',
    year: '2025–present',
    status: 'live',
    role: 'Solo · architecture, API, mobile, web, infrastructure',
    stack: ['React Native', 'Expo', 'TypeScript', 'Vite', 'Express', 'ts-rest', 'Neon Postgres', 'Railway'],
    url: 'https://thechurchtable.com',
    caseStudy: {
      kind: 'Commercial product',
      audience:
        'Small and mid-size churches that run scheduling, ministries, events, and budgets across spreadsheets, group texts, and whiteboards.',
      need:
        'Church management software exists, but the incumbents are priced and designed for megachurches. A volunteer coordinator at a 200-person church needs something they can learn in one sitting on a phone.',
      angle:
        'The wedge is mobile-first simplicity at a price small churches can justify, with the suite (Lectern, Atlas) sharing one backend so each product markets the others. I run it like a real business: pricing tiers, App Store distribution, and a unified API that keeps four clients cheap to maintain.',
      decisions: [
        'One typed ts-rest API serving all four clients instead of a backend per app; slower to stand up, drastically cheaper to maintain alone.',
        'Mobile-first, because the buyer is a volunteer coordinator who lives on a phone, not at a desk.',
        'Founders pricing and suite bundles from day one, so early churches are rewarded rather than repriced later.',
      ],
      outcomes: [
        'Live in production: mobile app in App Store review pipeline, web client and marketing site at thechurchtable.com.',
        'The suite architecture already carries two sibling products (Lectern, Atlas) with zero backend rewrites.',
      ],
      takeaway:
        'Proof I can carry one product from schema design to App Store review to production support, alone.',
    },
    featured: true,
  },
  {
    slug: 'church-lectern',
    name: 'Church Lectern',
    tagline: 'A sermon writing app with an AI council of theologians reading over your shoulder.',
    description:
      'A Notion-style editor for preachers, with a live council (Augustine, Lewis, Spurgeon, Calvin, Bonhoeffer) generating structured suggestions anchored to specific passages in the draft. Sermon "intent" tagging changes how the council critiques, so a pastoral message is judged as one rather than as failed expository preaching. Includes a scripture reader that inserts verses at the cursor, hover popovers on detected references, and an embedded Church Atlas timeline. Commercial product with free and paid tiers through Stripe.',
    year: '2026',
    status: 'live',
    role: 'Solo · product, editor, AI council, billing',
    stack: ['React', 'TypeScript', 'TipTap', 'Tailwind', 'Stripe', 'Neon Postgres', 'Railway'],
    url: 'https://churchlectern.com',
    caseStudy: {
      kind: 'Commercial product',
      audience:
        'Preachers, ministry leaders, and teachers who write expository or pastoral sermons every single week.',
      need:
        'Sermon prep tools are either generic note apps with no understanding of scripture, or study suites that cost hundreds of dollars. Nothing critiques a draft the way a trusted reader would.',
      angle:
        'The AI council is the moat: reviewers in the voice of Augustine, Lewis, or Spurgeon, anchored to specific passages, with intent tagging so a comfort-focused message is not graded as failed exegesis. A free tier for reach, a Pro tier through Stripe, and the embedded Atlas timeline cross-sells the suite.',
      decisions: [
        'Named theologian personas over a generic assistant: critique lands better coming from a distinct, trusted voice.',
        'Intent tagging, so a comforting pastoral message is not graded as failed expository preaching.',
        'Free tier capped by lifetime credits rather than a time trial, so a busy week never expires an evaluation.',
      ],
      outcomes: [
        'Live at churchlectern.com with Free and Pro tiers billing through Stripe.',
        'The Church Atlas embed shipped, cross-linking the suite\'s two writing tools.',
      ],
      takeaway:
        'The deepest AI product work I have shipped: structured LLM output, prompt-driven personas, and billing, end to end.',
    },
    featured: true,
  },
  {
    slug: 'eldermyr',
    name: 'Realms of Eldermyr',
    tagline: 'An online-only, server-authoritative multiplayer action-RPG.',
    description:
      'One shared 347×291-tile realm in concentric difficulty rings, from a safe home Vale out to a lethal Frontier. Every sprite, sound effect, and piece of music is generated in code; there are no art assets anywhere in the project. The single-player simulation compiles to one artifact that the server loads headlessly and orchestrates for every connected player, so client and server run provably identical logic.',
    year: '2026',
    status: 'live',
    role: 'Solo · engine, netcode, procedural art and audio',
    stack: ['TypeScript', 'WebSockets', 'Postgres', 'Railway', 'Procedural generation'],
    url: 'https://eldermyr-production.up.railway.app/',
    caseStudy: {
      kind: 'Just for fun',
      audience: 'Me, my friends, and anyone who wanders in with a hero name.',
      need:
        'There was no need. I wanted to know whether one person could build an entire multiplayer action-RPG where every sprite and sound is generated in code.',
      angle:
        'No strategy, pure craft. The honest value is what it demonstrates: server-authoritative netcode, procedural art and audio, and a simulation that runs identically on client and server because it is literally the same artifact.',
      decisions: [
        'One compiled artifact for client and server: the same simulation runs in the browser and headlessly on the server, eliminating drift bugs by construction.',
        'Procedural everything: refusing art assets kept the project one person\'s size.',
      ],
      outcomes: [
        'Live and playable in a browser; characters persist server-side with recovery codes.',
        'Playable on a phone as of v3.20.',
      ],
      takeaway:
        'The hardest systems-design problem I have given myself, and the most fun.',
    },
    featured: true,
  },
  {
    slug: 'roonscep',
    name: 'Roonscep',
    tagline: 'A lovingly dumbed-down RuneScape tribute that runs in the browser.',
    description:
      'A 240×144-tile low-poly world in three.js with an angled camera, click-to-walk pathfinding, and eleven hand-built regions: towns, mines, a swamp, a frozen reach, a ruined castle, a void rift. Multiplayer runs on Colyseus with a shared-world combat and ground-loot resolver. The Fly.io machine stops when the last player leaves and cold-boots on the next connection, so an empty world costs almost nothing to keep online.',
    year: '2026',
    status: 'live',
    role: 'Solo · world design, rendering, multiplayer server',
    stack: ['three.js', 'React', 'Colyseus', 'TypeScript', 'Fly.io', 'Postgres'],
    url: 'https://roonscep.netlify.app',
    caseStudy: {
      kind: 'Just for fun',
      audience: 'People who played RuneScape in 2007 and have ten minutes to waste.',
      need:
        'None whatsoever. It is a love letter to the games that got me into programming at twelve.',
      angle:
        'The one clever bit is the economics: the Fly.io machine stops when the last player leaves and cold-boots on the next connection, so a persistent multiplayer world costs almost nothing to keep online.',
      decisions: [
        'Scale-to-zero hosting: the world sleeps when the last player leaves, so a persistent MMO costs pennies.',
        'Colyseus for netcode rather than hand-rolling, so the time budget went to world design.',
      ],
      outcomes: [
        'Live in open beta at roonscep.netlify.app.',
      ],
      takeaway:
        'three.js rendering, Colyseus netcode, and eleven regions of world design, shipped as a weekend-scale hobby.',
    },
    featured: true,
  },
  {
    slug: 'church-atlas',
    name: 'Church Atlas',
    tagline: 'A multi-track timeline of biblical history, from creation to the apostolic era.',
    description:
      'People, nations, prophecies, and events on parallel horizontal tracks, with click-to-pin detail panels carrying verse text, neighbouring-event context, and an embedded map. Free and signup-free, and embeddable inside Church Lectern as a writing aid. This is the grown-up successor to an earlier timeline project of mine that never quite worked.',
    year: '2026',
    status: 'live',
    role: 'Solo · chronology data model, visualisation, embed protocol',
    stack: ['Vite', 'React 19', 'TypeScript', 'D3', 'Leaflet', 'Tailwind v4'],
    url: 'https://atlas.ecclisio.com',
    caseStudy: {
      kind: 'Commercial product',
      audience:
        'Bible students, teachers, and the preachers already writing in Church Lectern.',
      need:
        'Biblical chronology is genuinely hard to hold in your head, and the existing visual tools look like they were built in 2004.',
      angle:
        'Free and signup-free on purpose: Atlas is the top of the funnel for the suite. It earns links and classroom use on its own merits, then its embed inside Lectern turns readers into writers.',
      decisions: [
        'Free and signup-free: Atlas is distribution for the suite, so friction would defeat its purpose.',
        'A custom D3 chronology engine that presents disputed datings honestly instead of pretending certainty.',
      ],
      outcomes: [
        'Live at atlas.ecclisio.com and embedded inside Church Lectern as a writing aid.',
      ],
      takeaway:
        'A real data-visualisation problem (multi-track chronology with disputed dates) solved with D3 and a custom timeline engine.',
    },
    featured: true,
  },
  {
    slug: 'moses-cho-films',
    name: 'Moses Cho Films',
    tagline: 'A cinematography portfolio for a working director of photography.',
    description:
      'A Next.js portfolio with an admin uploader backed by S3 and Neon, so the client manages their own reel without touching code. Designed around a light, restrained theme that keeps attention on the footage instead of the interface.',
    year: '2026',
    status: 'live',
    role: 'Design and build',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'AWS S3', 'Neon Postgres', 'Netlify'],
    url: 'https://moseschofilms.com',
    caseStudy: {
      kind: 'Client work',
      audience: 'A working director of photography and the producers who might hire him.',
      need:
        'A reel site that the cinematographer can update himself, without a developer on retainer or a page builder watermark.',
      angle:
        'The strategic choice was the admin uploader: S3-backed, so the client owns his content pipeline and never calls me for an update. Design restraint was the brief; the footage is the star.',
      decisions: [
        'An S3-backed admin uploader instead of a CMS subscription: the client owns his pipeline with no recurring cost and no developer on retainer.',
        'Design restraint as the brief: a light, quiet theme that keeps every eye on the footage.',
      ],
      outcomes: [
        'Delivered and live at moseschofilms.com; the client updates his own reel.',
      ],
      takeaway: 'Scoping, building, and handing off a maintainable product to a non-technical owner.',
    },
    featured: false,
  },
  {
    slug: 'baby-logs',
    name: 'Baby Logs',
    tagline: 'Shared newborn tracking (feeding, sleep, diapers, growth) for a whole household.',
    description:
      'A mobile app for the blurry first months: log feeding, sleep, diapers, tummy time, and measurements, and have every entry sync across everyone caring for the baby. Households share one timeline, with a day-review screen that turns a chaotic night into something you can actually read back. Mobile only, with account deletion built in for App Store compliance.',
    year: '2026',
    status: 'in-development',
    role: 'Solo · design and build',
    stack: ['React Native', 'Expo', 'TypeScript', 'Neon Postgres'],
    caseStudy: {
      kind: 'Personal need',
      audience: 'My own household first; any set of parents and helpers sharing newborn care.',
      need:
        'Newborn tracking apps are either subscription-first or single-user. When two exhausted parents and a grandparent split night shifts, everyone needs the same timeline.',
      angle:
        'Built because we needed it, shipped properly anyway: household sync, App Store compliance, account deletion. If it grows beyond us, the foundation is already production-grade.',
      decisions: [
        'Households, not accounts, as the core primitive: everyone caring for the baby shares one timeline.',
        'Built App Store compliant from the start, including in-app account deletion.',
      ],
      outcomes: [
        'In daily use by my own household; App Store release in progress.',
      ],
      takeaway: 'Scratching my own itch without cutting the corners that separate a demo from an app.',
    },
    featured: false,
  },
  {
    slug: 'ironsharp',
    name: 'IronSharp',
    tagline: 'A discipleship devotional app: read, reflect, pray, repeat.',
    description:
      'Groups read a daily passage, answer two reflection questions, and pray together. A ground-up rewrite of an earlier no-code prototype into a real mobile app with its own backend: Expo Router on the client, Hono and Drizzle on the server, Neon Auth for identity. Named for Proverbs 27:17.',
    year: '2026',
    status: 'in-development',
    role: 'Solo · mobile client and API',
    stack: ['React Native', 'Expo', 'NativeWind', 'Hono', 'Drizzle', 'Neon', 'Railway'],
    caseStudy: {
      kind: 'Non-profit',
      audience: 'Men\'s discipleship groups that meet weekly and want daily structure between meetings.',
      need:
        'Group devotional habits die between Sundays. A shared daily rhythm with light accountability keeps a group actually reading.',
      angle:
        'Ministry software, not a business: the goal is adoption in the communities I already serve. The rewrite from a no-code prototype to a real backend was about owning the data model and keeping costs near zero.',
      decisions: [
        'Rewrote a validated no-code prototype onto an owned stack, trading speed for control of the data model and near-zero running costs.',
        'Two reflection questions instead of an open journal: the smallest habit that survives a busy week.',
      ],
      outcomes: [
        'In development; the reading library and ranked plan search have shipped.',
      ],
      takeaway: 'Turning a validated prototype into a properly-architected mobile product.',
    },
    featured: false,
  },
  {
    slug: 'selah',
    name: 'Selah',
    tagline: 'A deliberately simple Bible app: read, plan, pray, memorise.',
    description:
      'Four features and nothing else. Read any of the 66 books in a clean serif layout with highlights, inline notes, and offline chapter caching. Track shareable reading plans day by day. Keep prayer lists that reset daily or weekly on their own. Build memorisation decks straight from the reader. Local-first, so it works with no connection and no account.',
    year: '2026',
    status: 'in-development',
    role: 'Solo · design and build',
    stack: ['React Native', 'Expo Router', 'TypeScript', 'Local-first'],
    caseStudy: {
      kind: 'Personal need',
      audience: 'Me, and anyone who finds mainstream Bible apps noisy.',
      need:
        'Most Bible apps optimise for engagement: streaks, badges, social feeds. I wanted the opposite, four features and silence.',
      angle:
        'Local-first is the whole thesis: no account, no server, no analytics. It works in airplane mode and belongs to its user. A deliberate design-philosophy statement as much as an app.',
      decisions: [
        'Local-first with no account system: the app works in airplane mode and belongs entirely to its user.',
        'Four features, enforced: every proposed addition has to defend its existence.',
      ],
      outcomes: [
        'Core features (read, plans, pray, study) working; OTA update pipeline configured for release.',
      ],
      takeaway: 'Restraint as a product decision, and offline-first architecture done properly.',
    },
    featured: false,
  },
  {
    slug: 'tidewater',
    name: 'Tidewater',
    tagline: 'Point your phone at a tidepool and find out what you are looking at.',
    description:
      'A camera app that identifies sea life (shells, crabs, jellies, mystery blobs) and returns a structured field-guide entry: common and scientific name, rarity, conservation status, and a touch-safety rating telling you whether the thing in front of you is safe to pick up. Identification runs on Claude Opus 4.8 vision. Every find is saved to a gamified local field journal.',
    year: '2026',
    status: 'in-development',
    role: 'Solo · design, mobile client, vision pipeline',
    stack: ['React Native', 'Expo', 'Claude Opus 4.8 vision', 'TypeScript', 'Local-first'],
    caseStudy: {
      kind: 'Just for fun',
      audience: 'Beach walkers, kids with buckets, and me at low tide.',
      need:
        '"What is this thing and can I touch it" is a genuine question at every tidepool, and field guides do not fit in a swimsuit pocket.',
      angle:
        'A playground for structured vision output: Claude returns a typed field-guide entry (species, rarity, touch-safety) that renders straight into UI. The gamified journal exists because collecting things is fun.',
      decisions: [
        'Structured vision output: Claude returns a typed field-guide entry that renders straight into UI, no parsing heuristics.',
        'Touch safety as a first-class field, because the real question at a tidepool is "can I pick this up".',
      ],
      outcomes: [
        'Scanner and field journal working end to end; in development.',
      ],
      takeaway: 'Production patterns for vision-model output, learned on a project with zero stakes.',
    },
    featured: false,
  },
  {
    slug: 'chosen-music-lessons',
    name: 'Chosen Music Lessons',
    tagline: 'A professional online portfolio for a music instructor.',
    description:
      'A marketing and booking site for a private music teacher, with contact routing through SendGrid and hosting on AWS.',
    year: '2023',
    status: 'live',
    role: 'Design and build',
    stack: ['React', 'JavaScript', 'CSS', 'AWS', 'SendGrid'],
    url: 'https://www.chosenmusiclessons.com/',
    image: '/work/chosen-music-lessons.jpg',
    featured: false,
  },
  {
    slug: 'van-holten-shots',
    name: 'Van Holten Shots',
    tagline: 'A photography portfolio with layered access control and photo management.',
    description:
      'A high-volume photography portfolio where the photographer manages galleries directly, with layered IAM controlling who can see which sets.',
    year: '2023',
    status: 'live',
    role: 'Design and build',
    stack: ['React', 'JavaScript', 'CSS', 'AWS', 'SendGrid'],
    url: 'https://www.vhshots.com/',
    image: '/work/van-holten-shots.png',
    featured: false,
  },
  {
    slug: 'ennui',
    name: 'Ennui',
    tagline: 'A text-based open-world RPG in C++.',
    description:
      'Started as a final project for a college course and kept going well past the due date. A full open world rendered in a terminal, with a hand-rolled GUI layer on Linux.',
    year: '2021',
    status: 'archived',
    role: 'Solo',
    stack: ['C/C++', 'Linux/Unix', 'GUI'],
    repo: 'https://github.com/Josiah-Turnquist/Ennui',
    image: '/work/ennui.png',
    featured: false,
  },
  {
    slug: 'the-helper-org',
    name: 'The Helper Organization',
    tagline: 'A non-profit funding churches internationally.',
    description:
      'Co-founded and run with a close friend: the professional and pastoral halves of what I do, pointed at the same problem. Site since retired.',
    year: '2023',
    status: 'archived',
    role: 'Co-founder, design and build',
    stack: ['React', 'JavaScript', 'AWS', 'SendGrid'],
    image: '/work/the-helper-org.png',
    featured: false,
  },
];

export const featuredWork = work.filter((p) => p.featured);
export const otherWork = work.filter((p) => !p.featured);
