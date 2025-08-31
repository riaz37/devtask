import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Untitled UI - Next Generation Banking Technology',
  description: 'Experience next-generation banking with AI-powered insights, real-time analytics, and seamless digital experiences.',
  keywords: 'banking, technology, AI, fintech, digital banking, analytics, untitled ui',
  authors: [{ name: 'Untitled UI Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#53389e',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
