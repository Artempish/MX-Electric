import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, websiteSchema } from '@/lib/schema';
import { siteUrl } from '@/lib/site';
import { business } from '@/data/business';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Electricians in Champaign, Urbana & Ogden IL`,
    template: `%s | ${business.name}`,
  },
  description:
    'Veteran-owned, licensed and insured electricians serving Champaign, Urbana, Ogden and Central Illinois since 2002. Panel upgrades, generators, rewires, EV chargers and more. Call 217-359-7293.',
  keywords: [
    'electrician Champaign IL',
    'electrician Urbana IL',
    'panel upgrade Champaign',
    'generator installation Central Illinois',
    'EV charger installation Champaign',
    'knob and tube removal Urbana',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | Electricians in Champaign, Urbana & Ogden IL`,
    description:
      'Veteran-owned, licensed and insured electricians serving Central Illinois since 2002.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-volt-400 focus:px-4 focus:py-2 focus:font-bold focus:text-ink-950"
        >
          Skip to content
        </a>

        <Header />
        <main id="main" className="flex-1 pb-14 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
