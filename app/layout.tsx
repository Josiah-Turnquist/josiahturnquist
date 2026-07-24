import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { profile } from '@/content/profile';
import { personJsonLd } from '@/lib/jsonld';
import { PointerGlow } from '@/components/PointerGlow';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: `${profile.name} · ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.pitch,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  keywords: [
    'Josiah Turnquist',
    'Technical Project Manager',
    'Product Manager',
    'Fullstack Engineer',
    'React',
    'React Native',
    'TypeScript',
    'Next.js',
    'San Diego',
  ],
  alternates: {
    canonical: '/',
    types: {
      'application/json': [{ url: '/resume.json', title: 'Résumé (JSON Resume schema)' }],
      'text/plain': [{ url: '/llms.txt', title: 'Plain-text summary for language models' }],
    },
  },
  openGraph: {
    type: 'profile',
    firstName: 'Josiah',
    lastName: 'Turnquist',
    username: 'Josiah-Turnquist',
    title: `${profile.name} · ${profile.title}`,
    description: profile.pitch,
    url: profile.site,
    siteName: profile.name,
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} · ${profile.title}`,
    description: profile.pitch,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/preview.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#090d0b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/**
 * Resolves the theme before first paint. Kept as a raw string so it runs
 * synchronously in <head>${profile.name}${profile.name} · ${profile.title}${profile.title}a React effect would flash the wrong theme.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </head>
      <body className="relative">
        <PointerGlow />
        {children}
      </body>
    </html>
  );
}
