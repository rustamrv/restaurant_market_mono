import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row md:justify-between">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <button className="flex h-10 w-[150px] items-center justify-center rounded-full bg-[#FFE0B3] px-4 py-1 text-sm text-[#FF8A00] transition hover:bg-[#FFD699]">
            Restaurant
          </button>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Italian Cuisine</h1>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu
            sit tristique donec eget.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white transition hover:bg-[#FF7A00]">
              Order Now
            </button>
            <button className="rounded-full bg-[#3FA72F] px-6 py-3 text-sm text-white transition hover:bg-[#379F29]">
              Reservation
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="mt-12 w-full md:mt-0 md:w-1/2">
          <Image
            src="/images/Illustration.png"
            alt="Illustration"
            width={600}
            height={500}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
