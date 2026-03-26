import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { Metadata } from 'next';

const siteUrl = 'https://globalebtech.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Global EB Tech | BPO, Digital Solutions & Business Services in Sri Lanka',
    template: '%s | Global EB Tech',
  },
  description:
    'Global EB Tech is a Dehiwala-based business solutions provider delivering BPO services, digital development, creative branding, event management, and technical consultancy for clients across Sri Lanka and worldwide. Trusted by 500+ companies.',
  keywords: [
    'BPO Sri Lanka',
    'call center services Sri Lanka',
    'digital solutions Sri Lanka',
    'business process outsourcing',
    'web development Sri Lanka',
    'event management Sri Lanka',
    'lead generation',
    'business automation',
    'Global EB Tech',
    'Dehiwala',
  ],
  authors: [{ name: 'Global EB Tech', url: siteUrl }],
  creator: 'Global EB Tech',
  publisher: 'Global EB Tech',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Global EB Tech',
    title: 'Global EB Tech | BPO, Digital Solutions & Business Services in Sri Lanka',
    description:
      'Trusted by 500+ companies. Global EB Tech delivers BPO, digital development, creative branding, event management, and lead generation services across Sri Lanka and worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global EB Tech - Empowering Businesses with Digital Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global EB Tech | BPO, Digital Solutions & Business Services',
    description:
      'Trusted by 500+ companies. BPO, digital development, branding, events, and lead generation in Sri Lanka.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'K50cHJl4HMA4qbqOQ5Qn5f-VgpiFyGWyi_1rwkb5eds'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Global EB Tech',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/global-ebtech-logo.svg`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+94-770-677-157',
        contactType: 'customer service',
        email: 'info@globalebtech.com',
        areaServed: ['LK', 'Worldwide'],
        availableLanguage: ['English'],
      },
      sameAs: [
        'https://www.facebook.com/share/1Gc7W4o6P1/?mibextid=wwXIfr',
        'https://www.instagram.com/global_ebtech?igsh=aWx3ZW9qOTV6MnNx',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Global EB Tech',
      url: siteUrl,
      telephone: '+94-770-677-157',
      email: 'info@globalebtech.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '85C, 1/2, Galle Road',
        addressLocality: 'Dehiwala',
        addressCountry: 'LK',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '20:00',
      },
      image: `${siteUrl}/og-image.jpg`,
      priceRange: '$$',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}