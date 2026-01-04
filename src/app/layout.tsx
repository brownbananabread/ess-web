import './globals.css';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Header';
import { ThemeProvider } from '@/components/theme-provider';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eternalsafetysolutions.com.au'),
  title: {
    default: 'Eternal Safety Solutions',
    template: '%s - Eternal Safety Solutions',
  },
  description:
    'Comprehensive workplace health and safety consulting, training, and compliance services. Building safer workplaces across Australia.',
  keywords: [
    'WHS consulting',
    'workplace safety',
    'ISO45001',
    'safety training',
    'risk management',
    'compliance',
    'Australia',
    'NSW',
  ],
  authors: [{ name: 'Eternal Safety Solutions' }],
  creator: 'Eternal Safety Solutions',
  publisher: 'Eternal Safety Solutions',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Eternal Safety Solutions',
    description:
      'Comprehensive workplace health and safety consulting, training, and compliance services. Building safer workplaces across Australia.',
    siteName: 'Eternal Safety Solutions',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternal Safety Solutions',
    description:
      'Comprehensive workplace health and safety consulting, training, and compliance services. Building safer workplaces across Australia.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-obsidian min-h-screen ${figtree.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
