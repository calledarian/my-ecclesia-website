import { NextRequest, NextResponse } from 'next/server';
import { LEGACY_HOSTS, SITE_HOST } from './app/lib/site';

const legacyHosts = new Set<string>(LEGACY_HOSTS);

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();

  if (!host || host === SITE_HOST || !legacyHosts.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = 'https:';
  url.hostname = SITE_HOST;
  url.port = '';

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
