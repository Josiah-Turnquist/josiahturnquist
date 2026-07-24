import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { work } from '@/content/work';

export const dynamic = 'force-static';

/**
 * /resume.json — JSON Resume schema (jsonresume.org). Applicant tracking
 * systems and résumé parsers understand this format directly, so a screener
 * never has to OCR a PDF to get the facts right.
 */
export function GET() {
  const resume = {
    $schema:
      'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: profile.name,
      label: profile.title,
      email: profile.email,
      url: profile.site,
      summary: profile.about.join('\n\n'),
      location: {
        city: 'San Diego',
        region: 'California',
        countryCode: 'US',
      },
      profiles: [
        {
          network: 'GitHub',
          username: 'Josiah-Turnquist',
          url: profile.socials.github,
        },
        {
          network: 'LinkedIn',
          username: 'jturnq',
          url: profile.socials.linkedin,
        },
      ],
    },
    work: experience
      .filter((role) => !role.volunteer)
      .map((role) => ({
      name: role.org,
      position: role.title,
      url: role.url,
      location: role.location,
      startDate: role.start,
      ...(role.end ? { endDate: role.end } : {}),
      summary: role.summary,
      highlights: role.highlights ?? [],
      keywords: role.stack,
    })),
    volunteer: experience
      .filter((role) => role.volunteer)
      .map((role) => ({
        organization: role.org,
        position: role.title,
        url: role.url,
        startDate: role.start,
        ...(role.end ? { endDate: role.end } : {}),
        summary: role.summary,
        highlights: role.highlights ?? [],
      })),
    projects: work.map((project) => ({
      name: project.name,
      description: `${project.tagline} ${project.description}`,
      highlights: [project.role],
      keywords: project.stack,
      startDate: project.year,
      url: project.url ?? project.repo,
      roles: [project.role],
      entity: 'Self-directed',
      type: 'application',
    })),
    education: profile.education.map((entry) => ({
      institution: entry.institution,
      url: entry.url,
      area: entry.area,
      studyType: entry.degree,
      startDate: entry.start,
      endDate: entry.end,
      ...('note' in entry && entry.note ? { courses: [entry.note] } : {}),
    })),
    skills: Object.entries(profile.skills).map(([name, keywords]) => ({
      name,
      keywords,
    })),
    meta: {
      canonical: `${profile.site}/resume.json`,
      version: 'v1.0.0',
      lastModified: new Date().toISOString(),
    },
  };

  return Response.json(resume, {
    headers: { 'cache-control': 'public, max-age=3600, s-maxage=86400' },
  });
}
