import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { profile } from '@/content/profile';

/**
 * This site *wants* to be read by machines — it exists to be found by
 * recruiters and the tools they use. So every well-behaved AI crawler is
 * allowed explicitly rather than left to infer permission from silence.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'Meta-ExternalAgent',
  'cohere-ai',
  'DuckAssistBot',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${profile.site}/sitemap.xml`,
    host: profile.site,
  };
}
