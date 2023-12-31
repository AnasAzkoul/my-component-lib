import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainHeader from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-slate-800 ${inter.className}`}>
        <MainHeader />
        {children}
        </body>
    </html>
  );
}
