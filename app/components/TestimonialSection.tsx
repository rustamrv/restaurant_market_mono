'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Starla Virgoun',
    role: 'Financial advisor',
    image: '/images/customer-main.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.',
  },
  {
    name: 'Jasmine K.',
    role: 'Designer',
    image: '/images/customer1.png',
    quote:
      'Amazing experience! The food was delicious and the service was top-notch. Highly recommend this restaurant.',
  },
  {
    name: 'Carlos Mendez',
    role: 'Entrepreneur',
    image: '/images/customer2.png',
    quote:
      'I love the atmosphere and the friendly staff. The chef really knows how to impress with flavors.',
  },
  {
    name: 'Emily Stone',
    role: 'Photographer',
    image: '/images/customer3.png',
    quote: 'A perfect place for a romantic dinner or family lunch. Everything was simply perfect!',
  },
  {
    name: 'Tom Clarkson',
    role: 'Developer',
    image: '/images/customer4.png',
    quote: 'Fast service and excellent quality. I’ll definitely come back next week!',
  },
  {
    name: 'Tom Clarkson',
    role: 'Developer',
    image: '/images/customer5.png',
    quote: 'Fast service and excellent quality. I’ll definitely come back next week!',
  },
  {
    name: 'Tom Clarkson',
    role: 'Developer',
    image: '/images/customer6.png',
    quote: 'Fast service and excellent quality. I’ll definitely come back next week!',
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative dots */}
      <div className="absolute -top-10 left-10 h-16 w-16 rounded-full bg-green-400 blur-xl"></div>
      <div className="absolute top-1/2 right-10 h-10 w-10 rounded-full bg-purple-600 blur-xl"></div>
      <div className="absolute bottom-10 left-1/4 h-12 w-12 rounded-full bg-orange-600 blur-xl"></div>
      <div className="absolute top-20 right-1/3 h-10 w-10 rounded-full bg-pink-400 blur-xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-bold text-[#2E1C0D]">Our customers say</h2>

        <div className="mt-12 flex flex-col items-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-orange-100">
            <Image src={current.image} alt={current.name} fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-semibold text-[#2E1C0D]">{current.name}</p>
          <p className="text-sm text-gray-500">{current.role}</p>

          <div className="mt-6 max-w-xl text-gray-600">
            <p className="text-lg italic">
              <span className="text-2xl font-bold text-[#2E1C0D]">“</span>
              {current.quote}
              <span className="text-2xl font-bold text-[#2E1C0D]">”</span>
            </p>
          </div>
        </div>

        {/* Avatar navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const offset = index % 2 === 0 ? '-translate-y-2' : 'translate-y-2';

            return (
              <button
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className={`relative h-14 w-14 overflow-hidden rounded-full border-2 transition-transform hover:scale-105 focus:outline-none ${offset} ${
                  isActive
                    ? 'z-10 scale-110 border-orange-400 ring-2 ring-orange-200'
                    : 'border-gray-200'
                }`}
                aria-label={`Switch to testimonial from ${testimonial.name}`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
