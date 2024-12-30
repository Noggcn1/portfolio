import type { Metadata } from 'next';
import FontLocal from 'next/font/local';
import { Audiowide, Archivo, Anonymous_Pro } from 'next/font/google';
import './globals.css';
import { ScrollToTopOrb } from '@/components/orbTop';

const AudiowideFont = Audiowide({
  subsets: ['latin'],
  variable: '--font-audiowide',
  weight: ['400'],
});

const ArchivoFont = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const AnonymousProFont = Anonymous_Pro({
  subsets: ['latin'],
  variable: '--font-anonymous-pro',
  weight: ['400', '700'],
});

const ApexFont = FontLocal({
  src: './fonts/Apex.ttf',
  variable: '--font-apex',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Nogg.cn1',
  // eslint-disable-next-line quotes
  description: "Nogg's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`
          ${AnonymousProFont.variable} ${ArchivoFont.variable} ${AudiowideFont.variable} ${ApexFont.variable} 
          flex bg-black w-full flex-col items-center
        `}
      >
        {children}
        <ScrollToTopOrb />
      </body>
    </html>
  );
}
