import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work } from '@/content/work';
import type { WorkKind } from '@/content/types';
import { ArrowUpRightIcon } from '@/components/icons';

const caseStudies = work.filter((p) => p.caseStudy);

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.tagline} ${project.caseStudy?.need ?? ''}`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

/** Badge tone: commercial and client work read accent; the rest stay muted. */
const SERIOUS: WorkKind[] = ['Commercial product', 'Client work', 'Non-profit'];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();
  const cs = project.caseStudy;

  const shots = project.screenshots ?? [];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <nav className="no-print mb-12">
        <Link href="/#work" className="text-sm text-muted transition-colors hover:text-accent">
          ← All work
        </Link>
      </nav>

      <header>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={[
              'rounded-full border px-3 py-1 font-mono text-[0.625rem] tracking-wider uppercase',
              SERIOUS.includes(cs.kind)
                ? 'border-accent/40 text-accent'
                : 'border-line text-faint',
            ].join(' ')}
          >
            {cs.kind}
          </span>
          <span className="font-mono text-xs text-faint">{project.year}</span>
          <span className="font-mono text-xs text-faint uppercase">
            {project.status === 'in-development' ? 'In development' : project.status}
          </span>
        </div>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-tight">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-snug text-muted">{project.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[var(--accent-ink)] transition-opacity hover:opacity-90"
            >
              Visit the live site
              <ArrowUpRightIcon className="size-4" />
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Source
              <ArrowUpRightIcon className="size-4" />
            </a>
          ) : null}
        </div>
      </header>

      {shots.length > 0 ? (
        <section aria-label="Screenshots" className="mt-14">
          <div className={shots.length > 1 ? 'grid gap-4 sm:grid-cols-2' : ''}>
            {shots.map((src, i) => (
              <figure
                key={src}
                className="overflow-hidden rounded-xl border border-line bg-surface"
              >
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  width={1400}
                  height={900}
                  className="h-auto w-full"
                  priority={i === 0}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-14 space-y-10">
        <Detail label="What it is">
          <p>{project.description}</p>
        </Detail>
        <Detail label="Who it serves">
          <p>{cs.audience}</p>
        </Detail>
        <Detail label="The need">
          <p>{cs.need}</p>
        </Detail>
        <Detail label={SERIOUS.includes(cs.kind) ? 'The strategy' : 'The honest truth'}>
          <p>{cs.angle}</p>
        </Detail>
        {cs.decisions?.length ? (
          <Detail label="Key decisions">
            <ul className="space-y-2.5">
              {cs.decisions.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Detail>
        ) : null}
        {cs.outcomes?.length ? (
          <Detail label="Where it stands">
            <ul className="space-y-2.5">
              {cs.outcomes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Detail>
        ) : null}
        {cs.takeaway ? (
          <Detail label="What it proves">
            <p>{cs.takeaway}</p>
          </Detail>
        ) : null}
        <Detail label="My role">
          <p>{project.role}</p>
        </Detail>
        <Detail label="Stack">
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-raised px-2 py-1 font-mono text-[0.6875rem] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Detail>
      </div>

      <nav className="mt-16 border-t border-line pt-8">
        <Link href="/#work" className="text-sm text-muted transition-colors hover:text-accent">
          ← Back to all work
        </Link>
      </nav>
    </main>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
      <h2 className="label pt-1">{label}</h2>
      <div className="max-w-2xl leading-relaxed text-muted">{children}</div>
    </section>
  );
}
