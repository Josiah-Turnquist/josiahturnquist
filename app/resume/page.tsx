import type { Metadata } from 'next';
import Link from 'next/link';
import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { work } from '@/content/work';
import { formatRange } from '@/lib/dates';
import { ArrowUpRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Résumé',
  description: `The résumé of ${profile.name}, ${profile.title}. ${profile.pitch}`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  const liveWork = work.filter((p) => p.status === 'live');
  const paidRoles = experience.filter((r) => !r.volunteer);
  const volunteerRoles = experience.filter((r) => r.volunteer);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <div className="no-print mb-12 flex items-center justify-between gap-4">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
          ← Back to the site
        </Link>
        <a
          href="/resume.json"
          className="font-mono text-xs text-faint transition-colors hover:text-accent"
        >
          resume.json
        </a>
      </div>

      {/* No bottom border here — each <Block> supplies its own top rule. */}
      <header>
        <h1 className="font-display text-5xl tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-xl text-muted">{profile.title}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{profile.pitch}</p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
          <li>{profile.location}</li>
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.socials.github} className="hover:text-accent">
              github.com/Josiah-Turnquist
            </a>
          </li>
          <li>
            <a href={profile.socials.linkedin} className="hover:text-accent">
              linkedin.com/in/jturnq
            </a>
          </li>
        </ul>
      </header>

      <Block title="Experience">
        <ol className="space-y-8">
          {paidRoles.map((role) => (
            <ResumeRole key={`${role.org}-${role.title}-${role.start}`} role={role} />
          ))}
        </ol>
      </Block>

      <Block title="Volunteer">
        <ol className="space-y-8">
          {volunteerRoles.map((role) => (
            <ResumeRole key={`${role.org}-${role.title}-${role.start}`} role={role} />
          ))}
        </ol>
      </Block>

      <Block title="Selected projects">
        <ol className="space-y-6">
          {liveWork.map((project) => (
            <li key={project.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-medium">
                  {project.url ? (
                    <a
                      href={project.url}
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      {project.name}
                      <ArrowUpRightIcon className="size-3.5 opacity-60" />
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="font-mono text-xs whitespace-nowrap text-faint">{project.year}</p>
              </div>
              <p className="mt-1.5 leading-relaxed text-muted">{project.tagline}</p>
              <p className="mt-1.5 font-mono text-xs text-faint">
                {project.role} · {project.stack.join(' · ')}
              </p>
            </li>
          ))}
        </ol>
      </Block>

      <Block title="Skills">
        <dl className="space-y-4">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group} className="sm:grid sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="font-mono text-xs tracking-wide text-faint uppercase">{group}</dt>
              <dd className="mt-1 text-muted sm:mt-0">{items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Education">
        <ol className="space-y-6">
          {profile.education.map((entry) => (
            <li key={`${entry.institution}-${entry.degree}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-medium">
                  {entry.degree}, {entry.area} ·{' '}
                  <a href={entry.url} className="text-accent hover:underline">
                    {entry.institution}
                  </a>
                </h3>
                <p className="font-mono text-xs text-faint">
                  {entry.start}–{entry.end}
                </p>
              </div>
              {'note' in entry && entry.note ? (
                <p className="mt-2 leading-relaxed text-muted">{entry.note}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </Block>
    </main>
  );
}

function ResumeRole({ role }: { role: (typeof experience)[number] }) {
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-lg font-medium">
          {role.title} ·{' '}
          {role.url ? (
            <a href={role.url} className="text-accent hover:underline">
              {role.org}
            </a>
          ) : (
            <span className="text-accent">{role.org}</span>
          )}
        </h3>
        <p className="font-mono text-xs whitespace-nowrap text-faint">
          {formatRange(role.start, role.end)}
        </p>
      </div>
      {role.location ? (
        <p className="mt-0.5 font-mono text-xs text-faint">{role.location}</p>
      ) : null}
      <p className="mt-2 leading-relaxed text-muted">{role.summary}</p>
      {role.highlights?.length ? (
        <ul className="mt-2 space-y-1">
          {role.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-2 font-mono text-xs text-faint">{role.stack.join(' · ')}</p>
    </li>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="label mb-6">{title}</h2>
      {children}
    </section>
  );
}
