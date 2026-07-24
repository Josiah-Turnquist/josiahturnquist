import { profile } from '@/content/profile';
import { Topography } from './Topography';
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons';

/**
 * One tool pill in the marquee. The logo is a monochrome SVG applied as a CSS
 * mask over a `bg-muted` box, so it recolors with the theme like text does.
 */
function StackChip({
  tool,
  duplicate = false,
}: {
  tool: { name: string; icon: string };
  duplicate?: boolean;
}) {
  return (
    <li
      aria-hidden={duplicate || undefined}
      className={[
        'mr-1.5 flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 font-mono text-[0.6875rem] whitespace-nowrap text-muted',
        duplicate ? 'motion-reduce:hidden' : '',
      ].join(' ')}
    >
      <span
        aria-hidden="true"
        className="inline-block size-3.5 shrink-0 bg-muted"
        style={{
          maskImage: `url(${tool.icon})`,
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskImage: `url(${tool.icon})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center',
        }}
      />
      {tool.name}
    </li>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Topography />

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <h1 className="font-display text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.88] tracking-[-0.02em]">
          {/* The trailing space is load-bearing: without it `textContent` —
              which is what parsers and screen readers read, is "JosiahTurnquist". */}
          Josiah{' '}
          <br />
          <span className="italic text-accent">Turnquist</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.pitch}
        </p>

        {/* Masthead rule: the facts a recruiter scans for, in one line. */}
        <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs tracking-wide text-faint uppercase">
          {/* No employer here by design: position, direction, place. */}
          <div className="flex items-center gap-2">
            <dt className="sr-only">Current position</dt>
            <dd className="text-ink">{profile.title}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Target position</dt>
            <dd>Product Manager</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Location</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[var(--accent-ink)] transition-opacity hover:opacity-90"
          >
            See the work
            <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="size-4" />
            Get in touch
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.socials.github}
              aria-label="GitHub"
              rel="me noreferrer"
              target="_blank"
              className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              aria-label="LinkedIn"
              rel="me noreferrer"
              target="_blank"
              className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>

      {/* The strip under the fold: the tools I run a product with, sliding
          past like a marquee. The list is doubled for a seamless loop; the
          duplicates are aria-hidden and collapse away under reduced motion,
          where the strip becomes a static wrapped row. */}
      <div className="relative border-y border-line bg-surface/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:gap-6 lg:px-10">
          <p className="label whitespace-nowrap">The stack I reach for</p>
          {/* select-none: chips slide under the cursor, so any drag would
              otherwise start an accidental highlight. */}
          <div className="marquee-mask relative min-w-0 flex-1 select-none overflow-hidden">
            <ul className="marquee flex items-center">
              {profile.favoriteStack.map((tool) => (
                <StackChip key={tool.name} tool={tool} />
              ))}
              {profile.favoriteStack.map((tool) => (
                <StackChip key={`${tool.name}-dup`} tool={tool} duplicate />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
