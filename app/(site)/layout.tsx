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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
