/**
 * Content model for the site.
 *
 * Everything a human or a machine reads about Josiah comes from `content/`.
 * The pages render it, `app/resume.json` serialises it to the JSON Resume
 * schema, and `app/llms.txt` flattens it to plain text — so there is exactly
 * one source of truth to keep current.
 */

/** Filter facets used by the experience section. `All` is synthesised in the UI. */
export const FACETS = [
  'Engineering',
  'Product & Delivery',
  'Leadership',
  'Teaching',
  'Service',
] as const;

export type Facet = (typeof FACETS)[number];

export type Role = {
  /** Machine-sortable start date, `YYYY-MM`. */
  start: string;
  /** `YYYY-MM`, or null when the role is current. */
  end: string | null;
  title: string;
  org: string;
  /** Public URL for the organisation, if it has one. */
  url?: string;
  location?: string;
  summary: string;
  /** Concrete, verifiable contributions. Kept short — one line each. */
  highlights?: string[];
  stack: string[];
  facets: Facet[];
  /** Volunteer roles render in their own section and in resume.json's `volunteer` array. */
  volunteer?: boolean;
};

export type WorkStatus = 'live' | 'in-development' | 'archived';

/**
 * What a project is *for*. Rendered as a badge on the case study so nobody
 * has to guess whether something is a business or a toy. Honesty here reads
 * better than dressing a hobby up as a startup.
 */
export type WorkKind =
  | 'Commercial product'
  | 'Client work'
  | 'Non-profit'
  | 'Personal need'
  | 'Just for fun';

export type CaseStudy = {
  kind: WorkKind;
  /** Who actually uses (or is meant to use) it. */
  audience: string;
  /** The gap it fills, in plain terms. */
  need: string;
  /** The strategy if there is one, or a cheerful admission that there is not. */
  angle: string;
  /**
   * The tradeoffs a PM screen actually asks about: what was decided, and what
   * was given up to get it. One line each.
   */
  decisions?: string[];
  /** Where it honestly stands today. No invented metrics. */
  outcomes?: string[];
  /** What building it taught or proved. */
  takeaway?: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One line, sits under the title. */
  tagline: string;
  /** A paragraph of real detail — what it is and what was hard about it. */
  description: string;
  year: string;
  status: WorkStatus;
  /** What Josiah actually did on it. */
  role: string;
  stack: string[];
  /** Verified reachable at time of writing. */
  url?: string;
  repo?: string;
  image?: string;
  /**
   * Screenshot gallery for the case-study page. Drop files in
   * `public/work/<slug>/` and list them here in display order.
   */
  screenshots?: string[];
  /** Featured projects get the large treatment on the home page. */
  featured?: boolean;
  /** Present on projects that get a dedicated /work/<slug> page. */
  caseStudy?: CaseStudy;
};
