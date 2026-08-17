import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
  ADDRESS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_KM,
  SITE_SHORT_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_LINKS,
} from "./lib/site";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Cambodia Bible Education Centre',
    'BEC Phnom Penh',
    'Bible education Cambodia',
    'Christadelphian Cambodia',
    'English through the Bible',
    'Toul Kork',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KH',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/CLASSES/class-01.png',
        alt: `${SITE_NAME} — Learn English through the Bible`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/CLASSES/class-01.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'education',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: SITE_NAME,
      alternateName: [SITE_SHORT_NAME, SITE_NAME_KM],
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/favicon.ico`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressCountry: ADDRESS.country,
      },
      sameAs: [
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.telegram,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ['en', 'km'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
