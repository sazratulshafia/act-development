import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Act Development | Setting Standards in Bangladesh Luxury Real Estate',
  description: 'Act Development crafts bespoke, sustainable, and earthquake-resilient luxury residences and penthouses across Dhaka’s prime enclaves: Gulshan, Baridhara Diplomatic Zone, Uttara, and Bashundhara R/A.',
  keywords: [
    'Act Development',
    'luxury apartment Dhaka',
    'real estate Bangladesh',
    'flat in Gulshan',
    'flat in Baridhara',
    'flat in Bashundhara',
    'luxury flat in Uttara',
    'penthouse Dhaka',
    'landowner joint venture Bangladesh',
    'NRB real estate investment Dhaka',
    'REHAB approved developer'
  ],
  authors: [{ name: 'Act Development' }],
  openGraph: {
    title: 'Act Development | Setting Standards in Bangladesh Luxury Real Estate',
    description: 'Bespoke residential architectural enclaves in Gulshan, Baridhara, Uttara, and Bashundhara.',
    url: 'https://actdevelopment.com.bd',
    siteName: 'Act Development',
    images: [
      {
        url: '/images/projects/act-vertica.jpg',
        width: 1200,
        height: 630,
        alt: 'Act Development Luxury High-Rise',
      },
    ],
    locale: 'en_BD',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="lenis">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScrollProvider>
          <Header />
          <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
