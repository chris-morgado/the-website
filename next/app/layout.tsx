import React from 'react';
import "../styles/globals.css"; 
import ClientReady from '../components/ClientReady';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        {/* flips html.page-ready on hydration */}
        <ClientReady />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
