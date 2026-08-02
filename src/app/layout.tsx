import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/400-italic.css';
import { Providers } from '@/components/Providers';
import { professional } from '@/data/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draanabassi.com.br';
const OG_IMAGE = `${SITE_URL}/og.png`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8E7F73',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dra. Ana Bassi | Saúde da Pele e Cabelos em Santo André',
    template: '%s | Dra. Ana Bassi',
  },
  description: 'Atendimento médico personalizado para saúde da pele, cabelos e rejuvenescimento em Santo André. Agende sua consulta com a Dra. Ana Bassi, CRM/SP 129.959.',
  authors: [{ name: 'Dra. Ana Bassi', url: SITE_URL }],
  creator: 'Dra. Ana Bassi',
  publisher: 'Dra. Ana Bassi',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Dra. Ana Bassi | Saúde da Pele e Cabelos em Santo André',
    description: 'Atendimento médico personalizado para saúde da pele, cabelos e rejuvenescimento em Santo André. Agende sua consulta com a Dra. Ana Bassi, CRM/SP 129.959.',
    url: SITE_URL,
    siteName: 'Dra. Ana Bassi',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1080,
        height: 1080,
        alt: 'Dra. Ana Bassi, médica em Santo André',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Ana Bassi | Saúde da Pele e Cabelos em Santo André',
    description: 'Atendimento médico personalizado para saúde da pele, cabelos e rejuvenescimento em Santo André.',
    images: [{ url: OG_IMAGE, alt: 'Dra. Ana Bassi, médica em Santo André' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dra. Ana Bassi',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
