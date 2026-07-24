import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { featuredWork, otherWork } from '@/content/work';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { WorkCard, WorkRow } from '@/components/WorkCard';
import { ExperienceList, RoleItem } from '@/components/ExperienceList';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRightIcon, MailIcon } from '@/components/icons';

export default function Home() {
  const paidRoles = experience.filter((r) => !r.volunteer);
  const volunteerRoles = experience.filter((r) => r.volunteer);

  return (
    <>
      <SiteHeader name="Josiah Turnquist" />

      <main className="relative z-10">
        <Hero />

        <Section
          id="work"
          index="01"
          eyebrow="Selected work"
          title="Things I have actually shipped."
          lede="Most of these are live right now. Click through and use them. A few are mobile apps still in development, which is noted where it applies."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredWork.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>

          <h3 className="label mt-20 mb-2">Also built</h3>
          <div>
            {otherWork.map((project) => (
              <WorkRow key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          index="02"
          eyebrow="Experience"
          title="A less linear path than most."
          lede="Engineering, delivery, teaching, and a fair amount of coffee. Filter it down to whichever part you came here for."
        >
          <ExperienceList roles={paidRoles} />

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="label">Volunteer</h3>
            <ol className="mt-4">
              {volunteerRoles.map((role) => (
                <li key={`${role.org}-${role.title}-${role.start}`}>
                  <RoleItem role={role} />
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="label">Education</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {profile.education.map((entry) => (
                <div key={`${entry.institution}-${entry.degree}`}>
                  <p className="text-lg font-medium">
                    {entry.degree}, {entry.area}
                  </p>
                  <p className="mt-1">
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-accent"
                    >
                      {entry.institution}
                    </a>
                    <span className="ml-3 font-mono text-xs text-faint">
                      {entry.start}–{entry.end}
                    </span>
                  </p>
                  {'note' in entry && entry.note ? (
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{entry.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="about"
          index="03"
          eyebrow="About"
          title="How I got here."
        >
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-8">
              {Object.entries(profile.skills).map(([group, items]) => (
                <div key={group}>
                  <h3 className="label">{group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <section id="contact" className="scroll-mt-24 border-t border-line bg-surface/40">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
            <p className="label">04 · Contact</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
              If you are hiring for something hard, <span className="italic text-accent">let’s talk.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              I am open to roles where the job is to make a complicated thing land: technical
              program and product management, delivery leadership, or engineering work that needs
              someone who can also run the room.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[var(--accent-ink)] transition-opacity hover:opacity-90"
              >
                <MailIcon className="size-4" />
                {profile.email}
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Read the résumé
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
