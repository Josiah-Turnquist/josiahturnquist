import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { work } from '@/content/work';
import { versions } from '@/content/versions';
import { formatRange } from '@/lib/dates';

export const dynamic = 'force-static';

/**
 * /llms.txt — the whole site as plain text, following the llmstxt.org
 * convention. A language model asked "who is Josiah Turnquist?" can read this
 * one file instead of scraping and guessing at the markup.
 */
export function GET() {
  const lines: string[] = [];

  lines.push(`# ${profile.name}`);
  lines.push('');
  lines.push(`> ${profile.pitch}`);
  lines.push('');
  lines.push(`- Role: ${profile.title} at Barefoot Solutions`);
  lines.push(`- Location: ${profile.location}`);
  lines.push(`- Email: ${profile.email}`);
  lines.push(`- Site: ${profile.site}`);
  lines.push(`- GitHub: ${profile.socials.github}`);
  lines.push(`- LinkedIn: ${profile.socials.linkedin}`);
  lines.push('');

  lines.push('## Summary');
  lines.push('');
  for (const paragraph of profile.about) {
    lines.push(paragraph);
    lines.push('');
  }

  const pushRole = (role: (typeof experience)[number]) => {
    lines.push(`### ${role.title}: ${role.org}`);
    lines.push(`${formatRange(role.start, role.end)}${role.location ? ` · ${role.location}` : ''}`);
    if (role.url) lines.push(role.url);
    lines.push('');
    lines.push(role.summary);
    if (role.highlights?.length) {
      lines.push('');
      for (const highlight of role.highlights) lines.push(`- ${highlight}`);
    }
    lines.push('');
    lines.push(`Skills: ${role.stack.join(', ')}`);
    lines.push('');
  };

  lines.push('## Experience');
  lines.push('');
  for (const role of experience.filter((r) => !r.volunteer)) pushRole(role);

  lines.push('## Volunteer');
  lines.push('');
  for (const role of experience.filter((r) => r.volunteer)) pushRole(role);

  lines.push('## Projects');
  lines.push('');
  for (const project of work) {
    lines.push(`### ${project.name} (${project.year}, ${project.status})`);
    if (project.url) lines.push(project.url);
    if (project.repo) lines.push(project.repo);
    lines.push('');
    lines.push(project.tagline);
    lines.push('');
    lines.push(project.description);
    lines.push('');
    if (project.caseStudy) {
      lines.push(`Kind: ${project.caseStudy.kind}`);
      lines.push(`Audience: ${project.caseStudy.audience}`);
      lines.push(`Need: ${project.caseStudy.need}`);
      lines.push(`Angle: ${project.caseStudy.angle}`);
      if (project.caseStudy.takeaway) lines.push(`Proves: ${project.caseStudy.takeaway}`);
      lines.push(`Case study: ${profile.site}/work/${project.slug}`);
      lines.push('');
    }
    lines.push(`Role: ${project.role}`);
    lines.push(`Stack: ${project.stack.join(', ')}`);
    lines.push('');
  }

  lines.push('## Skills');
  lines.push('');
  for (const [group, items] of Object.entries(profile.skills)) {
    lines.push(`- ${group}: ${items.join(', ')}`);
  }
  lines.push('');

  lines.push('## Education');
  lines.push('');
  for (const entry of profile.education) {
    lines.push(`### ${entry.degree}, ${entry.area} · ${entry.institution} (${entry.start}–${entry.end})`);
    if ('note' in entry && entry.note) lines.push(entry.note);
    lines.push('');
  }

  lines.push('## Previous versions of this site');
  lines.push('');
  for (const version of versions) {
    lines.push(`- ${version.label} (${version.year}) · ${version.url} · ${version.stack}`);
  }
  lines.push('');

  lines.push('## Machine-readable');
  lines.push('');
  lines.push(`- ${profile.site}/resume.json (JSON Resume schema)`);
  lines.push(`- ${profile.site}/resume (printable résumé)`);
  lines.push(`- ${profile.site}/sitemap.xml`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
