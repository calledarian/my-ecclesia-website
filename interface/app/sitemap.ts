import type { MetadataRoute } from 'next';
import { NAV_PAGES, SITE_URL } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_PAGES.map(({ path }, index) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));
}
