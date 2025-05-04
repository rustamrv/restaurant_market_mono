import Image from 'next/image';

export default function ChefSection() {
  return (
    <div className="flex w-full items-center justify-between px-8 py-16 sm:px-20">
      <section className="px-8 py-16 text-center sm:px-20">
        <h2 className="mb-12 text-4xl font-bold text-[#2E1C0D]">Our greatest chef</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="relative h-[300px] w-[200px] overflow-hidden rounded-2xl bg-[#f3eee9]">
              <Image src="/images/chef1.png" alt="Chef 1" fill className="object-cover" />
            </div>
            <p className="mt-4 text-lg font-semibold text-[#2E1C0D]">Betram Komar</p>
            <p className="text-sm text-gray-500">Head Chef</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-[300px] w-[200px] overflow-hidden rounded-2xl bg-[#f3eee9]">
              <Image src="/images/chef1.png" alt="Chef 1" fill className="object-cover" />
            </div>
            <p className="mt-4 text-lg font-semibold text-[#2E1C0D]">Betram Komar</p>
            <p className="text-sm text-gray-500">Head Chef</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-[300px] w-[200px] overflow-hidden rounded-2xl bg-[#f3eee9]">
              <Image src="/images/chef1.png" alt="Chef 1" fill className="object-cover" />
            </div>
            <p className="mt-4 text-lg font-semibold text-[#2E1C0D]">Betram Komar</p>
            <p className="text-sm text-gray-500">Head Chef</p>
          </div>
        </div>

        <button className="mt-10 rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white hover:bg-[#FF7A00]">
          View all
        </button>
      </section>
    </div>
  );
}
