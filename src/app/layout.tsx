import './global.css';

import type { Metadata } from 'next';
import { Providers } from './providers';
import { Navbar } from '@/components/molecules/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'CrunchyRails',
  description: 'CrunchyRails',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
