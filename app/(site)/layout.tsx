import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './../globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Delizioso Restaurant',
  description: 'Order your favorite food online!',
};

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-white text-black antialiased`}
      >
        <Navbar />
        <main className="max-w-screen overflow-x-hidden px-4 pt-24 sm:px-8">{children}</main>
      </body>
    </html>
  );
}
