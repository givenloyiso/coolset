/**
 * Root Layout Component
 *
 * Provides the base HTML structure for the Coolset technical assignment.
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/utils/cn';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Grocery Table | Coolset Technical Assignment',
  description: 'Interactive grocery items table with sorting, filtering, and pagination',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          'font-sans antialiased bg-slate-50 flex flex-col min-h-screen'
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
