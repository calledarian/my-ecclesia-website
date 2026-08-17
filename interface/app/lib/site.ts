import type { Metadata } from 'next';

export const SITE_URL = 'https://bec.cheddybytes.com';
export const SITE_HOST = 'bec.cheddybytes.com';
export const SITE_NAME = 'Cambodia Bible Education Centre';
export const SITE_NAME_KM = 'មជ្ឈមណ្ឌលអប់រំព្រះគម្ពីរកម្ពុជា';
export const SITE_SHORT_NAME = 'BEC';

export const SITE_DESCRIPTION =
  'Official website of the Cambodia Bible Education Centre (BEC) in Phnom Penh. Free Bible education and English classes for all Cambodians.';

export const SITE_TAGLINE = 'Free Bible education and English for all Cambodians';

export const LEGACY_HOSTS = [
  'bec.arian.my',
  'www.bec.arian.my',
  'www.bec.cheddybytes.com',
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/PPbec/',
  instagram: 'https://instagram.com/fieldworkers_in_cambodia/',
  telegram: 'https://t.me/seunthavann',
} as const;

export const ADDRESS = {
  street: '444, Street 598, Toul Kork',
  locality: 'Phnom Penh',
  country: 'KH',
  countryName: 'Cambodia',
} as const;

export const NAV_PAGES = [
  { path: '/', title: 'Home', description: SITE_DESCRIPTION },
  {
    path: '/contact',
    title: 'Contact',
    description:
      'Visit or contact Cambodia Bible Education Centre at 444, Street 598, Toul Kork, Phnom Penh.',
  },
  {
    path: '/forms',
    title: 'Feedback Form',
    description: 'Share feedback with Cambodia Bible Education Centre.',
  },
  {
    path: '/donation',
    title: 'Donate',
    description:
      'Support Bible education, Sunday School, youth ministry, and the Phnom Penh centre.',
  },
  {
    path: '/faq',
    title: 'FAQ',
    description:
      'Visa, travel, fieldworker, and visitor questions for Cambodia Bible Education Centre.',
  },
] as const;

export function pageMetadata(path: (typeof NAV_PAGES)[number]['path']): Metadata {
  const page = NAV_PAGES.find((entry) => entry.path === path)!;

  return {
    title: path === '/' ? undefined : page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: page.title,
      description: page.description,
    },
  };
}
