import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="mt-32 bg-[rgba(63,198,110,0.37)] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/salad.png"
            alt="Salad"
            width={600}
            height={500}
            className="mx-auto object-contain"
          />
        </div>
        <div className="mt-8 w-full text-center md:mt-0 md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold">Welcome to delizioso</h1>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu
            sit tristique donec eget.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white transition hover:bg-[#FF7A00]">
              See our menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
