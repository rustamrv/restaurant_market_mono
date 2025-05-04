import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <div className="mt-72 flex w-full items-center justify-center rounded bg-[rgba(63,198,110,0.37)]">
      <div className="mt-16 w-1/2">
        <Image
          src="/images/salad.png"
          alt="salad"
          width={600}
          height={500}
          className="mx-auto object-contain"
        />
      </div>
      <div className="flex w-1/2 flex-col">
        <h1 className="mt-4 text-4xl font-bold">Welcome to delizioso</h1>
        <p className="mt-4 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit
          tristique donec eget.
        </p>
        <div className="mt-6 flex flex-row items-center gap-3">
          <button className="mt-6 rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white transition hover:bg-[#FF7A00]">
            See our menu
          </button>
        </div>
      </div>
    </div>
  );
}
