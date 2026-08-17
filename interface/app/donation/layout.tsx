import type { Metadata } from 'next';
import { pageMetadata } from '../lib/site';

export const metadata: Metadata = pageMetadata('/donation');

export default function DonationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
