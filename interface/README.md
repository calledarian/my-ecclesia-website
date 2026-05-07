# BEC Website - Next.js Migration

## Migration Summary

Successfully migrated the Cambodia Bible Education Centre (BEC) website from React with React Router to **Next.js**. The migration includes all essential pages and components.

## Migrated Components

### Layout Components
- **Navigation.tsx** - Responsive navbar with social links (Facebook, Instagram, Telegram)
- **Footer.tsx** - Footer with links and contact information
- **BannerSwiper.tsx** - Carousel banner with random Bible verses using Swiper
- **EventGallery.tsx** - Event gallery with lightbox functionality using GLightbox

### Pages
- **Home** (`app/page.tsx`) - Main page with banner and gallery
- **Contact** (`app/contact/page.tsx`) - Contact information and embedded Google Map
- **Donation** (`app/donation/page.tsx`) - Donation information and bank details
- **FAQ** (`app/faq/page.tsx`) - Frequently Asked Questions with accordion functionality
- **Forms** (`app/forms/page.tsx`) - Embedded Google Feedback Form

### Utilities
- **verses.ts** - Bible verse data for random display

## File Structure

```
bec-interface/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── BannerSwiper.tsx
│   │   └── EventGallery.tsx
│   ├── styles/
│   │   ├── header.css
│   │   ├── gallery.css
│   │   ├── contact.css
│   │   ├── donation.css
│   │   ├── faq.css
│   │   └── forms.css
│   ├── lib/
│   │   └── verses.ts
│   ├── contact/
│   │   └── page.tsx
│   ├── donation/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── forms/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── package.json
└── next.config.ts
```

## Dependencies Added

```json
{
  "swiper": "^11.1.0",           // For carousel functionality
  "glightbox": "^3.3.0",         // For image lightbox
  "bootstrap": "^5.3.0",         // For styling and responsive design
  "bootstrap-icons": "^1.11.0"   // For icon library
}
```

## Key Changes from React to Next.js

### 1. **Routing**
   - React Router → Next.js App Router
   - Page structure: `/contact` → `app/contact/page.tsx`
   - `<Link>` from React Router → `<Link>` from `next/link`

### 2. **Client/Server Components**
   - Components with interactivity (state, effects) marked with `'use client'`
   - Static components remain as server components (SSR by default)

### 3. **Styling**
   - All CSS files migrated to `app/styles/`
   - Bootstrap CSS imported in layout and components
   - Global styles in `globals.css`

### 4. **Layout**
   - Navigation and Footer moved to `layout.tsx` root component
   - Bootstrap JS bundle imported in Navigation component for navbar toggle

## How to Run

### Development
```bash
cd bec-interface
npm install
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Next Steps

1. **Copy public assets** - Ensure all image folders are in `public/`:
   - `/CLASSES/`
   - `/LCDI/`
   - `/BS/`
   - `/TP/`
   - `/GAME-DAYS/`
   - `/FARM/`

2. **Test all features**:
   - Navigation and routing
   - Responsive design on mobile
   - Carousel/Banner functionality
   - Gallery lightbox
   - FAQ accordion
   - Forms submission

3. **Deploy**:
   - Update deployment configuration
   - Set environment variables if needed
   - Deploy to Vercel or your hosting platform

4. **Clean up**:
   - Delete old React app (`src/` folder) after testing
   - Keep only `bec-interface/` folder

## Important Notes

- All Bootstrap functionality requires Bootstrap CSS and JS bundle
- Images in Gallery are loaded from public folder (ensure paths match)
- Google Form and Google Maps embedded via iframes
- Responsive design handled with Bootstrap grid system
- Bible verses display randomly on page load and every 8 seconds

## Support Links (Already Configured)

- **Facebook**: https://www.facebook.com/PPbec/
- **Instagram**: https://instagram.com/fieldworkers_in_cambodia/
- **Telegram**: https://t.me/seunthavann
- **Visa Info**: https://evisa.gov.kh
- **Travel Insurance**: https://acbm.org.au/member-registration/

---

**Migration completed successfully!** The new Next.js app is ready for testing and deployment.