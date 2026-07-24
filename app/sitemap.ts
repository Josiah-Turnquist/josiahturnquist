import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { profile } from '@/content/profile';
import { work } from '@/content/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: profile.site, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${profile.site}/resume`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...work
      .filter((p) => p.caseStudy)
      .map((p) => ({
        url: `${profile.site}/work/${p.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
    { url: `${profile.site}/llms.txt`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    {
      url: `${profile.site}/resume.json`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
