import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/types';
import { ArrowUpRightIcon } from './icons';

const STATUS_LABEL: Record<Project['status'], string> = {
  live: 'Live',
  'in-development': 'In development',
  archived: 'Archived',
};

function StatusPill({ status }: { status: Project['status'] }) {
  const live = status === 'live';
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] tracking-wider uppercase',
        live ? 'border-accent/40 text-accent' : 'border-line text-faint',
      ].join(' ')}
    >
      {live ? <span className="size-1.5 rounded-full bg-accent" /> : null}
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * Title link priority: the case study when one exists (the story is the
 * point), otherwise the live site or repo. Cards with a case study still get
 * a separate "Visit" link to the deployed thing.
 */
function titleTarget(project: Project) {
  if (project.caseStudy) return { href: `/work/${project.slug}`, internal: true };
  const external = project.url ?? project.repo;
  return external ? { href: external, internal: false } : null;
}

function TitleLink({
  project,
  className,
}: {
  project: Project;
  className: string;
}) {
  const target = titleTarget(project);
  if (!target) return <>{project.name}</>;

  const inner = (
    <>
      <span className="link-underline after:absolute after:inset-0 after:content-['']">
        {project.name}
      </span>
      <ArrowUpRightIcon className={className} />
    </>
  );

  return target.internal ? (
    <Link href={target.href} className="inline-flex items-start gap-2">
      {inner}
    </Link>
  ) : (
    <a href={target.href} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2">
      {inner}
    </a>
  );
}

/** Small standalone external link, shown when the title goes to a case study. */
function VisitLink({ project }: { project: Project }) {
  if (!project.caseStudy || !project.url) return null;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="relative z-10 mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors hover:text-accent"
    >
      Visit live
      <ArrowUpRightIcon className="size-3.5" />
    </a>
  );
}

/** Large treatment for featured projects. */
export function WorkCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-7 transition-colors duration-500 hover:border-accent/40 sm:p-9">
      <div className="flex flex-wrap items-center gap-3">
        <StatusPill status={project.status} />
        <span className="font-mono text-[0.625rem] tracking-wider text-faint uppercase">
          {project.year}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
        <TitleLink
          project={project}
          className="mt-1.5 size-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </h3>

      <p className="mt-3 text-lg leading-snug text-ink/85">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

      <p className="mt-6 font-mono text-xs text-faint">{project.role}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-raised px-2 py-1 font-mono text-[0.6875rem] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <VisitLink project={project} />
      </div>
    </article>
  );
}

/** Compact row for the long tail. */
export function WorkRow({ project }: { project: Project }) {
  return (
    <article
      className={[
        'group relative grid gap-x-6 gap-y-2 border-b border-line py-7',
        project.image ? 'sm:grid-cols-[7rem_1fr_11rem]' : 'sm:grid-cols-[7rem_1fr]',
      ].join(' ')}
    >
      <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
        <span className="font-mono text-xs text-faint">{project.year}</span>
        <StatusPill status={project.status} />
      </div>

      <div>
        {/* h4, not h3: these sit beneath the "Also built" h3. */}
        <h4 className="font-display text-2xl leading-tight tracking-tight">
          <TitleLink
            project={project}
            className="mt-1 size-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </h4>

        <p className="mt-2 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-raised px-2 py-1 font-mono text-[0.6875rem] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <VisitLink project={project} />
      </div>

      {project.image ? (
        <div className="order-first overflow-hidden rounded-lg border border-line sm:order-none sm:self-start">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={640}
            height={400}
            className="h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-90 sm:aspect-[8/5]"
          />
        </div>
      ) : null}
    </article>
  );
}
