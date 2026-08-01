import React from 'react';
import "../styles/globals.css";
import ClientReady from '../components/ClientReady';
import { Rethink_Sans } from 'next/font/google';

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-rethink',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${rethinkSans.variable} scroll-smooth`}>
      <body>
        {/* flips html.page-ready on hydration */}
        <ClientReady />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
