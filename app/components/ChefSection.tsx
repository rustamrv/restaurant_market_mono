import Image from 'next/image';

export default function ChefSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-8">
        <h2 className="mb-12 text-4xl font-bold text-[#2E1C0D]">Our greatest chef</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'Betram Komar', role: 'Head Chef', image: '/images/chef1.png' },
            { name: 'Ferry Sauwi', role: 'Chef', image: '/images/chef2.png' },
            { name: 'Iewan Drachio', role: 'Chef', image: '/images/chef3.png' },
          ].map((chef) => (
            <div key={chef.name} className="flex flex-col items-center">
              <div className="relative h-[300px] w-[200px] overflow-hidden rounded-2xl bg-[#f3eee9]">
                <Image src={chef.image} alt={chef.name} fill className="object-cover" />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#2E1C0D]">{chef.name}</p>
              <p className="text-sm text-gray-500">{chef.role}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white transition hover:bg-[#FF7A00]">
          View all
        </button>
      </div>
    </section>
  );
}
