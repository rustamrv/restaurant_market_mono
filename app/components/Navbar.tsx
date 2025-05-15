'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About us', href: '/about' },
    { label: 'Order online', href: '/order' },
    { label: 'Reservation', href: '/reservation' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between bg-white px-4 py-4 shadow sm:px-8">
      {/* Logo */}
      <Link href="/" className="relative h-10 w-10 sm:h-[51px] sm:w-[132px]">
        <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
      </Link>

      {/* Desktop nav links */}
      <div className="hidden gap-6 text-sm font-medium text-gray-800 sm:flex">
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

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link href="/cart" className="relative h-10 w-10">
          <Image src="/images/cart.png" alt="Cart" fill className="object-contain" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-10 w-10 rounded-full bg-white p-2 shadow sm:hidden"
        >
          <Image src="/images/grid-icon.png" alt="Menu" width={24} height={24} />
        </button>

        <Link
          href="/login"
          className="rounded-full bg-green-500 px-5 py-2 text-sm font-medium text-white hover:bg-green-600"
        >
          Log in
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="animate-slide-down absolute top-full left-0 w-full bg-white py-6 shadow-md sm:hidden">
          <div className="flex flex-col items-center gap-4">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-base font-medium ${
                  (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href))
                    ? 'text-orange-500'
                    : 'text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
