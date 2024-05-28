import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Christian Morgado - Software Engineer',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
