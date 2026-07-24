import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { work } from '@/content/work';

/**
 * schema.org structured data. This is the layer automated screeners, search
 * engines, and LLM crawlers read first, so it mirrors the visible page rather
 * than summarising it.
 */
export function personJsonLd() {
  const current = experience.filter((r) => r.end === null);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${profile.site}/#person`,
    name: profile.name,
    givenName: 'Josiah',
    familyName: 'Turnquist',
    jobTitle: profile.title,
    description: profile.pitch,
    email: `mailto:${profile.email}`,
    url: profile.site,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.instagram],
    knowsAbout: Object.values(profile.skills).flat(),
    worksFor: current.map((r) => ({
      '@type': 'Organization',
      name: r.org,
      ...(r.url ? { url: r.url } : {}),
    })),
    alumniOf: [...new Map(profile.education.map((e) => [e.institution, e])).values()].map(
      (e) => ({
        '@type': 'CollegeOrUniversity',
        name: e.institution,
        url: e.url,
      }),
    ),
    hasCredential: profile.education.map((e) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: `${e.degree}, ${e.area}`,
      recognizedBy: { '@type': 'CollegeOrUniversity', name: e.institution },
    })),
    hasOccupation: experience.map((r) => ({
      '@type': 'Occupation',
      name: r.title,
      occupationLocation: { '@type': 'Place', name: r.location ?? 'United States' },
      description: r.summary,
      skills: r.stack.join(', '),
    })),
    subjectOf: work
      .filter((p) => p.url)
      .map((p) => ({
        '@type': 'CreativeWork',
        name: p.name,
        url: p.url,
        description: p.tagline,
      })),
  };
}
