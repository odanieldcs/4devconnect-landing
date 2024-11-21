import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  fallback: ['sans-serif'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
});

const seo = {
  title: '4Dev Connect | 14/12/2024 em Gravataí - RS',
  description:
    'O 1º evento da Região Metropolitana de Porto Alegre/RS, promovido por profissionais locais para promover a troca de conhecimentos e networking na área de programação.',
};

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: 'https://4devconnect.com/metatag/metatag.png',
        width: 1400,
        height: 733,
      },
    ],
    url: 'https://4devconnect.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['https://4devconnect.com/metatag/metatag.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
