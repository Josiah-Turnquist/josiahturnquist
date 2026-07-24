import { profile } from '@/content/profile';
import { versions } from '@/content/versions';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight">{profile.name}</p>
            <p className="mt-2 text-sm text-muted">
              {profile.title} · {profile.location}
            </p>

            <div className="mt-5 flex items-center gap-1">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <MailIcon className="size-4" />
              </a>
              <a
                href={profile.socials.github}
                aria-label="GitHub"
                rel="me noreferrer"
                target="_blank"
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                aria-label="LinkedIn"
                rel="me noreferrer"
                target="_blank"
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Site versions">
            <p className="label">Previous versions</p>
            <ul className="mt-4 space-y-2.5">
              {versions.map((version) => (
                <li key={version.id} className="flex items-baseline gap-3 text-sm">
                  {version.current ? (
                    <span className="font-mono text-accent">{version.label}</span>
                  ) : (
                    <a
                      href={version.url}
                      className="link-underline font-mono text-muted transition-colors hover:text-accent"
                    >
                      {version.label}
                    </a>
                  )}
                  <span className="font-mono text-xs text-faint">{version.year}</span>
                  <span className="text-xs text-faint">{version.stack}</span>
                  {version.current ? (
                    <span className="font-mono text-[0.625rem] tracking-wider text-accent uppercase">
                      You are here
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/resume" className="transition-colors hover:text-accent">
              Résumé
            </a>
            <a href="/resume.json" className="transition-colors hover:text-accent">
              resume.json
            </a>
            <a href="/llms.txt" className="transition-colors hover:text-accent">
              llms.txt
            </a>
            <a
              href="https://github.com/Josiah-Turnquist/josiahturnquist"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
