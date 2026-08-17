import type { Metadata } from 'next';
import { pageMetadata } from '../lib/site';

export const metadata: Metadata = pageMetadata('/faq');

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
