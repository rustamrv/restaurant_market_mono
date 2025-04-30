'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About us', href: '/about' },
    { label: 'Order online', href: '/order' },
    { label: 'Reservation', href: '/reservation' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className="mt-8 mr-8 ml-8 flex items-center justify-between bg-white px-8 py-4 shadow">
      <Link href="/" className="relative h-[51px] w-[132px]">
        <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
      </Link>

      <div className="flex gap-6 text-sm font-medium text-gray-800">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={
              (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href))
                ? 'text-orange-500'
                : 'text-gray-800 transition-colors hover:text-orange-400'
            }
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative h-10 w-10">
          <Image src="/images/cart.png" alt="Cart" fill className="object-contain" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"></span>
        </Link>
        <Link
          href="/login"
          className="rounded-full bg-green-500 px-5 py-2 font-medium text-white hover:bg-green-600"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
}
