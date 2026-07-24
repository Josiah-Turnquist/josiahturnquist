'use client';

import { useState } from 'react';
import { FACETS, type Facet, type Role } from '@/content/types';
import { formatRange } from '@/lib/dates';
import { ArrowUpRightIcon } from './icons';

type Filter = Facet | 'All';

export function ExperienceList({ roles }: { roles: Role[] }) {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...FACETS];

  return (
    <div>
      <div role="group" aria-label="Filter experience" className="mb-10 flex flex-wrap gap-2">
        {filters.map((option) => {
          const selected = filter === option;
          const count =
            option === 'All'
              ? roles.length
              : roles.filter((r) => r.facets.includes(option)).length;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={selected}
              className={[
                'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                selected
                  ? 'border-accent bg-accent text-[var(--accent-ink)]'
                  : 'border-line text-muted hover:border-accent/50 hover:text-ink',
              ].join(' ')}
            >
              {option}
              <span className={selected ? 'ml-1.5 opacity-70' : 'ml-1.5 text-faint'}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Every role stays in the DOM regardless of filter — only visibility
          changes, so crawlers and screen readers always get the full history. */}
      <ol className="border-t border-line">
        {roles.map((role) => {
          const visible = filter === 'All' || role.facets.includes(filter);
          return (
            <li key={`${role.org}-${role.title}-${role.start}`} hidden={!visible}>
              <RoleItem role={role} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function RoleItem({ role }: { role: Role }) {
  const current = role.end === null;

  return (
    <article className="group relative grid gap-x-8 gap-y-3 border-b border-line py-8 sm:grid-cols-[11rem_1fr]">
      <div>
        <p className="font-mono text-xs tracking-wide text-faint uppercase">
          {formatRange(role.start, role.end)}
        </p>
        {current ? (
          <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.625rem] tracking-wider text-accent uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Current
          </p>
        ) : null}
      </div>

      <div>
        <h3 className="text-xl leading-snug font-medium tracking-tight">
          {role.title}
          <span className="text-muted"> · </span>
          {role.url ? (
            <a
              href={role.url}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-1 text-accent"
            >
              {role.org}
              <ArrowUpRightIcon className="size-3.5 opacity-60" />
            </a>
          ) : (
            <span className="text-accent">{role.org}</span>
          )}
        </h3>

        {role.location ? (
          <p className="mt-1 font-mono text-xs text-faint">{role.location}</p>
        ) : null}

        <p className="mt-3 leading-relaxed text-muted">{role.summary}</p>

        {role.highlights?.length ? (
          <ul className="mt-3.5 space-y-1.5">
            {role.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {role.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-raised px-2 py-1 font-mono text-[0.6875rem] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
