import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex w-1/2 flex-col">
        <button className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#FFE0B3] px-4 py-1 text-sm text-[#FF8A00] transition hover:bg-[#FFD699]">
          Restaurant
        </button>
        <h1 className="mt-4 text-4xl font-bold">Italian Cuisine</h1>
        <p className="mt-4 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit
          tristique donec eget.
        </p>
        <div className="mt-6 flex flex-row items-center gap-3">
          <button className="mt-6 rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white transition hover:bg-[#FF7A00]">
            Order Now
          </button>
          <button className="mt-6 rounded-full bg-[#3FA72F] px-6 py-3 text-sm text-white transition">
            Reservation
          </button>
        </div>
      </div>
      <div className="mt-72 w-1/2">
        <Image
          src="/images/Illustration.png"
          alt="Illustration"
          width={600}
          height={500}
          className="mx-auto object-contain"
        />
      </div>
    </div>
  );
}
