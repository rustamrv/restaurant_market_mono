import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#311F09] px-0 py-12 text-white">
      <div className="w-full grid gap-12 md:grid-cols-4 px-8 sm:px-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon="twitter" />
            <SocialIcon icon="instagram" />
            <SocialIcon icon="facebook" />
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-orange-500">Page</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Menu</li>
            <li>Order online</li>
            <li>Catering</li>
            <li>Reservation</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-orange-500">Information</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About us</li>
            <li>Testimonial</li>
            <li>Event</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-orange-500">Get in touch</h4>
          <p className="text-sm text-gray-300">
            3247 Johnson Ave, Bronx, NY
            <br />
            10463, Amerika Serikat
          </p>
          <p className="mt-2 text-sm text-gray-300">delizioso@gmail.com</p>
          <p className="mt-1 text-sm text-gray-300">+123 4567 8901</p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        Copyright © 2022 Delizioso
      </div>
    </footer>
  );
}

const SocialIcon = React.memo(({ icon }: { icon: string }) => {
  const icons: Record<string, string> = {
    twitter: '/images/twitter.png',
    instagram: '/images/instagram.png',
    facebook: '/images/facebook.png',
  };

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:opacity-80">
      <Image
        src={icons[icon]}
        alt={`${icon} icon`}
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
  );
});

SocialIcon.displayName = 'SocialIcon';
