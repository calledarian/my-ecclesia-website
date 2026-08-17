import type { Metadata } from 'next';
import BannerSwiper from './components/BannerSwiper';
import EventGallery from './components/EventGallery';
import { pageMetadata } from './lib/site';

export const metadata: Metadata = pageMetadata('/');

export default function Home() {
  return (
    <>
      <BannerSwiper />
      <EventGallery />
    </>
  );
}

