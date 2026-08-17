import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Google-Extended',
          'GoogleOther',
          'ClaudeBot',
          'anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'Applebot-Extended',
          'CCBot',
          'Bytespider',
          'meta-externalagent',
          'FacebookBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
